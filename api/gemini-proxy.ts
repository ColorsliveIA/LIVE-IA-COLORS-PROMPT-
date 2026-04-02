import { VercelRequest, VercelResponse } from "@vercel/node";
import { GoogleGenAI } from "@google/genai";

// ── Multi-key rotation ──────────────────────────────────────────────
// Reads GEMINI_API_KEY (single key) and GEMINI_API_KEYS (comma-separated)
// Rotates through keys when one hits 429 rate limit
function getApiKeys(): string[] {
  const keys: string[] = [];
  // Support comma-separated keys in GEMINI_API_KEYS
  const multiKeys = process.env.GEMINI_API_KEYS;
  if (multiKeys) {
    keys.push(...multiKeys.split(",").map(k => k.trim()).filter(Boolean));
  }
  // Also include single GEMINI_API_KEY if not already present
  const singleKey = process.env.GEMINI_API_KEY;
  if (singleKey && !keys.includes(singleKey)) {
    keys.push(singleKey);
  }
  return keys;
}

// Track which keys are rate-limited (cooldown period)
const keysCooldown = new Map<string, number>(); // key hash → cooldown until timestamp
const KEY_COOLDOWN_MS = 60_000; // 1 minute cooldown after 429

function getAvailableKeyIndex(keys: string[]): number {
  const now = Date.now();
  // First pass: find a key that is NOT in cooldown
  for (let i = 0; i < keys.length; i++) {
    const cooldownUntil = keysCooldown.get(keys[i]) || 0;
    if (now >= cooldownUntil) {
      return i;
    }
  }
  // All keys in cooldown: return the one whose cooldown expires soonest
  let bestIndex = 0;
  let soonest = Infinity;
  for (let i = 0; i < keys.length; i++) {
    const cooldownUntil = keysCooldown.get(keys[i]) || 0;
    if (cooldownUntil < soonest) {
      soonest = cooldownUntil;
      bestIndex = i;
    }
  }
  return bestIndex;
}

function markKeyRateLimited(key: string): void {
  keysCooldown.set(key, Date.now() + KEY_COOLDOWN_MS);
}

// ── Rate Limiting (in-memory, per Vercel instance) ──────────────────────
interface RateBucket {
  count: number;
  resetAt: number;
}

const ipBuckets = new Map<string, RateBucket>();
const globalBucket: RateBucket = { count: 0, resetAt: 0 };

const MAX_PER_IP_PER_MINUTE = 10;
const MAX_GLOBAL_PER_MINUTE = 60;
const MAX_REQUEST_SIZE_BYTES = 500_000;

function isRateLimited(ip: string): { limited: boolean; retryAfter?: number } {
  const now = Date.now();
  if (now > globalBucket.resetAt) {
    globalBucket.count = 0;
    globalBucket.resetAt = now + 60_000;
  }
  if (globalBucket.count >= MAX_GLOBAL_PER_MINUTE) {
    return { limited: true, retryAfter: Math.ceil((globalBucket.resetAt - now) / 1000) };
  }
  let bucket = ipBuckets.get(ip);
  if (!bucket || now > bucket.resetAt) {
    bucket = { count: 0, resetAt: now + 60_000 };
    ipBuckets.set(ip, bucket);
  }
  if (bucket.count >= MAX_PER_IP_PER_MINUTE) {
    return { limited: true, retryAfter: Math.ceil((bucket.resetAt - now) / 1000) };
  }
  bucket.count++;
  globalBucket.count++;
  if (globalBucket.count % 100 === 0) {
    for (const [key, b] of ipBuckets) {
      if (now > b.resetAt) ipBuckets.delete(key);
    }
  }
  return { limited: false };
}

// ── Allowed models whitelist ──────────────────────────────────────────
const ALLOWED_MODELS = new Set([
  "gemini-2.5-flash",
  "gemini-2.0-flash",
  // Legacy names kept for backward compatibility with client code
  "gemini-3-flash-preview",
  "gemini-2.5-flash-preview-05-20",
  "gemini-2.0-flash-lite", // deprecated but allow for fallback mapping
]);

// ── Model fallback chain (if primary model hits 429/503/404, try next)
const MODEL_FALLBACKS: Record<string, string[]> = {
  "gemini-3-flash-preview": ["gemini-2.0-flash", "gemini-2.5-flash"],
  "gemini-2.5-flash-preview-05-20": ["gemini-2.0-flash", "gemini-2.5-flash"],
  "gemini-2.5-flash": ["gemini-2.0-flash"],
  "gemini-2.0-flash": ["gemini-2.5-flash"],
  "gemini-2.0-flash-lite": ["gemini-2.0-flash", "gemini-2.5-flash"], // redirect deprecated model
};

// ── CORS ─────────────────────────────────────────────────────────────
const ALLOWED_ORIGINS = [
  "https://live-ia-colors-prompt.vercel.app",
  "https://live-ia-colors-prompt-sn4y.vercel.app",
  "http://localhost:5173",
  "http://localhost:3000",
];

function setCorsHeaders(req: VercelRequest, res: VercelResponse): boolean {
  const origin = req.headers.origin || "";
  if (ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Max-Age", "86400");
  if (req.method === "OPTIONS") {
    res.status(204).end();
    return true;
  }
  return false;
}

// ── Response cache ───────────────────────────────────────────────────
const responseCache = new Map<string, { text: string; cachedAt: number }>();
const CACHE_TTL_MS = 5 * 60 * 1000;

function getCacheKey(model: string, contents: any, config: any): string {
  if (typeof contents === "string" && contents.length < 500) {
    return `${model}:${contents}:${JSON.stringify(config?.responseSchema || "")}`;
  }
  return "";
}

// ── Main Handler ──────────────────────────────────────────────────────
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (setCorsHeaders(req, res)) return;

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const ip = (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() || req.socket?.remoteAddress || "unknown";
  const rateCheck = isRateLimited(ip);
  if (rateCheck.limited) {
    res.setHeader("Retry-After", String(rateCheck.retryAfter || 60));
    return res.status(429).json({ error: "Rate limit exceeded. Please wait.", retryAfter: rateCheck.retryAfter });
  }

  const contentLength = parseInt(req.headers["content-length"] || "0", 10);
  if (contentLength > MAX_REQUEST_SIZE_BYTES) {
    return res.status(413).json({ error: "Request payload too large" });
  }

  const apiKeys = getApiKeys();
  if (apiKeys.length === 0) {
    console.error("No GEMINI_API_KEY or GEMINI_API_KEYS configured on server");
    return res.status(500).json({ error: "GEMINI_API_KEY is not configured on server" });
  }

  try {
    const { model, contents, config } = req.body;
    if (!model || !contents) {
      return res.status(400).json({ error: "Missing required fields: model and contents" });
    }
    if (!ALLOWED_MODELS.has(model)) {
      return res.status(400).json({ error: `Model "${model}" is not allowed. Use: ${[...ALLOWED_MODELS].join(", ")}` });
    }

    const cacheKey = getCacheKey(model, contents, config);
    if (cacheKey) {
      const cached = responseCache.get(cacheKey);
      if (cached && Date.now() - cached.cachedAt < CACHE_TTL_MS) {
        return res.status(200).json({ text: cached.text, cached: true });
      }
    }

    const modelsToTry = [model, ...(MODEL_FALLBACKS[model] || [])];
    let lastError: any = null;

    // Try each API key when one is rate-limited
    for (let keyAttempt = 0; keyAttempt < apiKeys.length; keyAttempt++) {
      const keyIndex = getAvailableKeyIndex(apiKeys);
      const currentKey = apiKeys[keyIndex];
      const ai = new GoogleGenAI({ apiKey: currentKey });

      let keyHit429 = false;

      for (const currentModel of modelsToTry) {
        try {
          const response = await ai.models.generateContent({ model: currentModel, contents, config });
          const text = response.text || "";

          if (cacheKey && text.length < 10_000) {
            responseCache.set(cacheKey, { text, cachedAt: Date.now() });
            if (responseCache.size > 200) {
              const now = Date.now();
              for (const [k, v] of responseCache) {
                if (now - v.cachedAt > CACHE_TTL_MS) responseCache.delete(k);
              }
            }
          }

          return res.status(200).json({ text, model: currentModel, keyUsed: keyIndex + 1 });
        } catch (e: any) {
          lastError = e;
          const status = e?.status || e?.error?.code;
          const is429 = status === 429;
          const is503 = status === 503;
          const is404 = status === 404;
          const isKeyInvalid = status === 400 && (
            e?.message?.includes("API_KEY") || e?.message?.includes("API key") ||
            e?.error?.details?.some?.((d: any) => d?.reason === "API_KEY_INVALID")
          );

          if (is429 || isKeyInvalid) {
            keyHit429 = true;
            markKeyRateLimited(currentKey);
            console.warn(`Key #${keyIndex + 1} hit ${status} on model ${currentModel}, rotating to next key...`);
            break;
          }

          const shouldFallback = is503 || is404;
          if (shouldFallback && currentModel !== modelsToTry[modelsToTry.length - 1]) {
            console.warn(`Model ${currentModel} returned ${status}, falling back...`);
            continue;
          }
          break;
        }
      }

      // If this key hit 429 or was invalid, continue to next key
      if (keyHit429) continue;
      // If not a key issue (some other error), don't try more keys
      break;
    }

    const error = lastError;
    console.error("Gemini API error (all keys exhausted):", error?.message || error);
    let statusCode = 500;
    let message = error?.message || "Gemini API request failed";
    if (error?.status === 429 || error?.error?.code === 429) {
      statusCode = 429;
      message = `Gemini API rate limit reached on all ${apiKeys.length} key(s). Please wait and try again.`;
    } else if (error?.status === 503 || error?.error?.code === 503) {
      statusCode = 503;
      message = "Gemini API temporarily unavailable. Please retry.";
    }
    return res.status(statusCode).json({ error: message });
  } catch (unexpectedError: any) {
    // Fix proxy: Catch unexpected errors in outer try block
    console.error("Unexpected error in Gemini proxy:", unexpectedError?.message || unexpectedError);
    return res.status(500).json({
      error: `Unexpected error: ${unexpectedError?.message || "Unknown error"}`
    });
  }
}
