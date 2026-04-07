import { VercelRequest, VercelResponse } from "@vercel/node";
import { GoogleGenAI } from "@google/genai";

function getApiKeys(): string[] {
  const keys: string[] = [];
  const multiKeys = process.env.GEMINI_API_KEYS;
  if (multiKeys) keys.push(...multiKeys.split(",").map(k => k.trim()).filter(Boolean));
  const singleKey = process.env.GEMINI_API_KEY;
  if (singleKey && !keys.includes(singleKey)) keys.push(singleKey);
  return keys;
}

const keysCooldown = new Map<string, number>();
const KEY_COOLDOWN_MS = 60_000;

function getAvailableKeyIndex(keys: string[]): number {
  const now = Date.now();
  for (let i = 0; i < keys.length; i++) {
    if (now >= (keysCooldown.get(keys[i]) || 0)) return i;
  }
  let bestIndex = 0, soonest = Infinity;
  for (let i = 0; i < keys.length; i++) {
    const t = keysCooldown.get(keys[i]) || 0;
    if (t < soonest) { soonest = t; bestIndex = i; }
  }
  return bestIndex;
}

function markKeyRateLimited(key: string): void {
  keysCooldown.set(key, Date.now() + KEY_COOLDOWN_MS);
}

interface RateBucket { count: number; resetAt: number; }
const ipBuckets = new Map<string, RateBucket>();
const globalBucket: RateBucket = { count: 0, resetAt: 0 };
const MAX_PER_IP_PER_MINUTE = 10;
const MAX_GLOBAL_PER_MINUTE = 60;
const MAX_REQUEST_SIZE_BYTES = 500_000;

function isRateLimited(ip: string): { limited: boolean; retryAfter?: number } {
  const now = Date.now();
  if (now > globalBucket.resetAt) { globalBucket.count = 0; globalBucket.resetAt = now + 60_000; }
  if (globalBucket.count >= MAX_GLOBAL_PER_MINUTE) {
    return { limited: true, retryAfter: Math.ceil((globalBucket.resetAt - now) / 1000) };
  }
  let bucket = ipBuckets.get(ip);
  if (!bucket || now > bucket.resetAt) { bucket = { count: 0, resetAt: now + 60_000 }; ipBuckets.set(ip, bucket); }
  if (bucket.count >= MAX_PER_IP_PER_MINUTE) {
    return { limited: true, retryAfter: Math.ceil((bucket.resetAt - now) / 1000) };
  }
  bucket.count++; globalBucket.count++;
  if (globalBucket.count % 100 === 0) {
    for (const [key, b] of ipBuckets) { if (now > b.resetAt) ipBuckets.delete(key); }
  }
  return { limited: false };
}

// ── Allowed models — gemini-2.0-flash removed (no longer available) ──
const ALLOWED_MODELS = new Set([
  "gemini-2.5-flash",
  "gemini-2.5-flash-preview-05-20",
  // Legacy redirect aliases — mapped to gemini-2.5-flash in fallback chain
  "gemini-2.0-flash",
  "gemini-2.0-flash-lite",
  "gemini-3-flash-preview",
]);

// ── Model fallback chain ─────────────────────────────────────────────
// gemini-2.0-flash is dead (NOT_FOUND for new users) → always fallback to gemini-2.5-flash
const MODEL_FALLBACKS: Record<string, string[]> = {
  "gemini-2.5-flash": [],                                      // no fallback needed
  "gemini-2.5-flash-preview-05-20": ["gemini-2.5-flash"],
  "gemini-2.0-flash": ["gemini-2.5-flash"],                    // dead model → redirect
  "gemini-2.0-flash-lite": ["gemini-2.5-flash"],               // deprecated → redirect
  "gemini-3-flash-preview": ["gemini-2.5-flash"],
};

const ALLOWED_ORIGINS = [
  "https://live-ia-colors-prompt.vercel.app",
  "https://live-ia-colors-prompt-sn4y.vercel.app",
  "http://localhost:5173",
  "http://localhost:3000",
];

function setCorsHeaders(req: VercelRequest, res: VercelResponse): boolean {
  const origin = req.headers.origin || "";
  if (ALLOWED_ORIGINS.includes(origin)) res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Max-Age", "86400");
  if (req.method === "OPTIONS") { res.status(204).end(); return true; }
  return false;
}

const responseCache = new Map<string, { text: string; cachedAt: number }>();
const CACHE_TTL_MS = 5 * 60 * 1000;

function getCacheKey(model: string, contents: any, config: any): string {
  if (typeof contents === "string" && contents.length < 500) {
    return `${model}:${contents}:${JSON.stringify(config?.responseSchema || "")}`;
  }
  return "";
}

// ── Normalize error status — handles both numeric 404 and string "NOT_FOUND" ──
function getErrorStatus(e: any): number | string {
  return e?.status ?? e?.error?.code ?? e?.error?.status ?? 0;
}

function is404Error(e: any): boolean {
  const s = getErrorStatus(e);
  return s === 404 || s === "NOT_FOUND" || String(s).toUpperCase() === "NOT_FOUND" ||
    (e?.message && (e.message.includes("not found") || e.message.includes("NOT_FOUND") ||
      e.message.includes("no longer available") || e.message.includes("deprecated")));
}

function is429Error(e: any): boolean {
  const s = getErrorStatus(e);
  return s === 429 || s === "RESOURCE_EXHAUSTED" ||
    (e?.message && (e.message.includes("429") || e.message.includes("RESOURCE_EXHAUSTED")));
}

function is503Error(e: any): boolean {
  const s = getErrorStatus(e);
  return s === 503 || s === "UNAVAILABLE" ||
    (e?.message && (e.message.includes("503") || e.message.includes("high demand")));
}

function isKeyInvalidError(e: any): boolean {
  const s = getErrorStatus(e);
  return (s === 400 || s === 403) && (
    (e?.message && (e.message.includes("API_KEY") || e.message.includes("API key"))) ||
    e?.error?.details?.some?.((d: any) => d?.reason === "API_KEY_INVALID")
  );
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (setCorsHeaders(req, res)) return;
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const ip = (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() || req.socket?.remoteAddress || "unknown";
  const rateCheck = isRateLimited(ip);
  if (rateCheck.limited) {
    res.setHeader("Retry-After", String(rateCheck.retryAfter || 60));
    return res.status(429).json({ error: "Rate limit exceeded. Please wait.", retryAfter: rateCheck.retryAfter });
  }

  const contentLength = parseInt(req.headers["content-length"] || "0", 10);
  if (contentLength > MAX_REQUEST_SIZE_BYTES) return res.status(413).json({ error: "Request payload too large" });

  const apiKeys = getApiKeys();
  if (apiKeys.length === 0) {
    return res.status(500).json({ error: "GEMINI_API_KEY is not configured on server" });
  }

  try {
    const { model, contents, config } = req.body;
    if (!model || !contents) return res.status(400).json({ error: "Missing required fields: model and contents" });
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

    // For dead/deprecated models, start directly with the fallback
    const primaryModel = (model === "gemini-2.0-flash" || model === "gemini-2.0-flash-lite")
      ? "gemini-2.5-flash"
      : model;
    const modelsToTry = [primaryModel, ...(MODEL_FALLBACKS[primaryModel] || [])];
    let lastError: any = null;

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
              for (const [k, v] of responseCache) { if (now - v.cachedAt > CACHE_TTL_MS) responseCache.delete(k); }
            }
          }
          return res.status(200).json({ text, model: currentModel, keyUsed: keyIndex + 1 });
        } catch (e: any) {
          lastError = e;
          if (is429Error(e) || isKeyInvalidError(e)) {
            keyHit429 = true;
            markKeyRateLimited(currentKey);
            console.warn(`Key #${keyIndex + 1} hit rate limit/invalid on ${currentModel}, rotating...`);
            break;
          }
          // 404 (model not found) or 503 (unavailable) → try next model in chain
          if ((is404Error(e) || is503Error(e)) && currentModel !== modelsToTry[modelsToTry.length - 1]) {
            console.warn(`Model ${currentModel} unavailable (404/503), falling back to next model...`);
            continue;
          }
          break;
        }
      }

      if (keyHit429) continue;
      break;
    }

    console.error("Gemini API error (all attempts exhausted):", lastError?.message || lastError);
    let statusCode = 500;
    let message = lastError?.message || "Gemini API request failed";
    if (is429Error(lastError)) { statusCode = 429; message = `Rate limit on all ${apiKeys.length} key(s). Please wait.`; }
    else if (is503Error(lastError)) { statusCode = 503; message = "Gemini API temporarily unavailable. Retry."; }
    return res.status(statusCode).json({ error: message });

  } catch (unexpectedError: any) {
    console.error("Unexpected proxy error:", unexpectedError?.message || unexpectedError);
    return res.status(500).json({ error: `Unexpected error: ${unexpectedError?.message || "Unknown error"}` });
  }
}
