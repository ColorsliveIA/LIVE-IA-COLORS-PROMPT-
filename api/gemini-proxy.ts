import { VercelRequest, VercelResponse } from "@vercel/node";
import { GoogleGenAI } from "@google/genai";

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
  "gemini-3-flash-preview",
  "gemini-2.5-flash-preview-05-20",
  "gemini-2.0-flash",
  "gemini-2.0-flash-lite",
]);

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

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("GEMINI_API_KEY is missing on server");
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

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({ model, contents, config });
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

    return res.status(200).json({ text });
  } catch (error: any) {
    console.error("Gemini API error:", error?.message || error);
    let statusCode = 500;
    let message = error?.message || "Gemini API request failed";
    if (error?.status === 429 || error?.error?.code === 429) {
      statusCode = 429;
      message = "Gemini API rate limit reached. Please wait and try again.";
    } else if (error?.status === 503 || error?.error?.code === 503) {
      statusCode = 503;
      message = "Gemini API temporarily unavailable. Please retry.";
    }
    return res.status(statusCode).json({ error: message });
  }
}
