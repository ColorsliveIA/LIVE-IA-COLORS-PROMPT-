import { VercelRequest, VercelResponse } from "@vercel/node";

// ── Rate Limiting ──
interface RateBucket { count: number; resetAt: number; }
const ipBuckets = new Map<string, RateBucket>();
const MAX_PER_IP_PER_MINUTE = 10;

function isRateLimited(ip: string): { limited: boolean; retryAfter?: number } {
  const now = Date.now();
  let bucket = ipBuckets.get(ip);
  if (!bucket || now > bucket.resetAt) { bucket = { count: 0, resetAt: now + 60_000 }; ipBuckets.set(ip, bucket); }
  if (bucket.count >= MAX_PER_IP_PER_MINUTE) {
    return { limited: true, retryAfter: Math.ceil((bucket.resetAt - now) / 1000) };
  }
  bucket.count++;
  return { limited: false };
}

// ── CORS ──
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

// ── Grok API call ──
async function callGrok(apiKey: string, systemPrompt: string, userPrompt: string, jsonMode: boolean): Promise<{ text: string; model: string }> {
  const models = ["grok-3-mini-fast", "grok-3-mini", "grok-2-1212"];

  for (const model of models) {
    try {
      const body: any = {
        model,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
        temperature: 0.7,
        max_tokens: 8000
      };
      if (jsonMode) {
        body.response_format = { type: "json_object" };
      }

      const response = await fetch("https://api.x.ai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify(body)
      });

      if (response.ok) {
        const data = await response.json();
        const text = data.choices?.[0]?.message?.content || "";
        return { text, model: data.model || model };
      }

      const status = response.status;
      if (status === 403) throw new Error("403 Forbidden — Pas de crédits API xAI.");
      if (status === 429) throw new Error("429 Rate limit — Trop de requêtes.");
      if (status === 404 || status === 400) continue;
      throw new Error(`Grok API error: ${status}`);
    } catch (err: any) {
      if (err.message?.includes('403') || err.message?.includes('429')) throw err;
      if (model === models[models.length - 1]) throw err;
    }
  }
  throw new Error("All Grok models failed");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (setCorsHeaders(req, res)) return;
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const ip = (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() || req.socket?.remoteAddress || "unknown";
  const rateCheck = isRateLimited(ip);
  if (rateCheck.limited) {
    res.setHeader("Retry-After", String(rateCheck.retryAfter || 60));
    return res.status(429).json({ error: "Rate limit.", retryAfter: rateCheck.retryAfter });
  }

  const apiKey = process.env.GROK_API_KEY;
  if (!apiKey) return res.status(500).json({ error: "GROK_API_KEY is not configured" });

  try {
    const { artist, artistDNA } = req.body;
    if (!artist) return res.status(400).json({ error: "Missing required field: artist" });

    const systemPrompt = `Tu es un ANALYSTE MUSICAL EXPERT et PRODUCTEUR PROFESSIONNEL.
Tu analyses les artistes musicaux en profondeur : voix, flow, production, thèmes, techniques d'écriture.
Tu connais intimement le rap FR, le R&B, l'afropop, le drill, la trap, le cloud rap, le boom-bap.
Tu réponds UNIQUEMENT en JSON valide. Jamais de markdown, jamais de backticks.`;

    const dnaContext = artistDNA ? `
PROFIL SONIC DNA EXISTANT (à enrichir/corriger) :
- Vocal DNA: ${artistDNA.vocalDNA || 'inconnu'}
- Flow: ${artistDNA.flowPattern || 'inconnu'}
- Production: ${artistDNA.productionFingerprint || 'inconnu'}
- Thèmes: ${artistDNA.culturalAnchors || 'inconnu'}
- Hook: ${artistDNA.hookType || 'inconnu'}
- Template Suno: ${artistDNA.sunoStyleTemplate || 'inconnu'}
` : '';

    const userPrompt = `Analyse complète de l'artiste "${artist}".
${dnaContext}
Retourne un JSON avec TOUTES ces clés :
{
  "vocalIdentity": {
    "voiceType": "type de voix (ex: Baritone Rap, Tenor Melodic, Alto R&B...)",
    "vocalTimbre": "timbre vocal (ex: Raspy, Smoky, Clear, Nasal, Deep...)",
    "singingStyle": "style (ex: Rap Flow, Melodic Trap, Cloud Singing, Drill...)",
    "vocalPresence": "présence (ex: Dominant, Intimate, Ethereal, Aggressive...)",
    "accent": "accent ou particularité linguistique",
    "vocalReference": "description courte de la signature vocale",
    "language": "langue principale (ex: FRANÇAIS, FRENCH-ARABIC, ENGLISH...)",
    "weirdness": 0-100,
    "styleInfluence": 0-100,
    "summary": "résumé en 2-3 phrases de l'identité vocale de l'artiste"
  },
  "enrichedDNA": {
    "vocalDNA": "description détaillée de l'ADN vocal unique",
    "flowPattern": "pattern de flow (ex: staccato, bounce, legato, polymorphe...)",
    "productionFingerprint": "signature de production préférée",
    "culturalAnchors": "thèmes et références culturelles récurrentes",
    "structureDNA": "structure préférée des morceaux",
    "hookType": "type de hook signature (melodic, chant, percussif...)",
    "hookStrategy": "stratégie de hook détaillée",
    "verseBehavior": "comportement dans les couplets",
    "energyCurve": "courbe d'énergie typique (ex: slow-build, explosive, constant...)",
    "antiPatterns": "ce que cet artiste ne fait JAMAIS"
  },
  "sunoStylePrompt": "Prompt de style Suno V5 EN ANGLAIS, 400-600 caractères. 10 dimensions: [STYLE]+[BPM+Key]+[GRAIN]+[SPACE]+[INSTRUMENTS]+[VOCAL TEXTURE]+[DYNAMIC]+[MIX]+[CULTURAL]+[ERA]. Très précis, pas de genres génériques.",
  "sunoNegativePrompt": "Styles à exclure pour cet artiste, EN ANGLAIS",
  "suggestedBpm": "BPM typique (nombre)",
  "suggestedKey": "tonalité typique (ex: F Minor, Bb Minor...)"
}

RÈGLES :
- Le sunoStylePrompt doit être ULTRA PRÉCIS. Pas "Trap" mais "Dark Melodic Trap, 808 Sub Bass Pitched Slides, Sparse Hi-Hats, Minor Piano Arpeggios, Reverb-Drenched Vocals"
- Enrichir le DNA existant si fourni, sinon créer de zéro
- Tout le sunoStylePrompt et sunoNegativePrompt EN ANGLAIS
- Le reste peut être en français
- JSON valide uniquement, pas de commentaire`;

    const { text, model } = await callGrok(apiKey, systemPrompt, userPrompt, true);

    console.log(`Grok scan response (model=${model}, len=${text.length}):`, text.slice(0, 200));

    let parsed;
    try {
      const cleaned = text.replace(/^```json?\s*/i, '').replace(/\s*```$/i, '').trim();
      parsed = JSON.parse(cleaned);
    } catch (parseErr) {
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        try { parsed = JSON.parse(jsonMatch[0]); } catch { /* fall through */ }
      }
      if (!parsed) {
        return res.status(200).json({ error: "JSON parse failed", raw: text.slice(0, 1000), model });
      }
    }

    return res.status(200).json({ ...parsed, model, provider: 'grok' });

  } catch (error: any) {
    console.error("Grok scan error:", error?.message || error);
    const status = error.message?.includes('403') ? 403 : error.message?.includes('429') ? 429 : 500;
    return res.status(status).json({ error: error?.message || "Unexpected error" });
  }
}
