import { VercelRequest, VercelResponse } from "@vercel/node";

// ── Rate Limiting ──
interface RateBucket { count: number; resetAt: number; }
const ipBuckets = new Map<string, RateBucket>();
const MAX_PER_IP_PER_MINUTE = 6;

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

// ── System prompt builder ──
function buildSystemPrompt(artistDNA: any): string {
  return `Tu es un EXPERT ABSOLU en écriture de rap français et R&B. Tu écris des PAROLES DE CHANSON authentiques, pas de la poésie IA.

## RÈGLES D'ÉCRITURE OBLIGATOIRES (Anti-IA Firewall)

1. **CASSER LA SYNTAXE** : Minimum 30% des lignes = fragments sans sujet/verbe. Technique Booba : supprimer les articles.
2. **SAUTS TEMPORELS** : Au moins 1 par verse — flashback, ellipse, juxtaposition passé/présent.
3. **INCARNER, PAS DÉCRIRE** : Chaque ligne filme une scène. Pas "j'ai mal" → le GESTE que la douleur force.
4. **PUNCHLINES AUTONOMES** : Minimum 4 par texte, citables isolées. Types : vérité universelle, épigramme, image-choc, métagore.
5. **DENSITÉ MÉTAPHORES** : Minimum 3 comparaisons/métaphores par verse. Jamais clichées (interdit : lion, loup, flamme, mur, prison).
6. **HUMOUR NOIR** : Minimum 1 ligne d'ironie amère par verse.
7. **VARIATION CADENCE** : Alterner lignes longues (14-18 syll.) et courtes (3-6 syll.). Après 2 longues → 1 courte OBLIGATOIRE.
8. **HOOK = MÉLODIE** : Le hook passe le test du fredonnement. Voyelles ouvertes sur temps forts.
9. **RIMES RICHES** (2+ phonèmes) sur ≥70% des fins. Rimes multisyllabiques (4+ syll.) sur ≥20%.
10. **PERSONNAGE CONTRADICTOIRE** : Au moins 2 contradictions internes par texte.

## FIGURES DE STYLE OBLIGATOIRES
- Anacoluthe (1x/verse), Chiasme (1x/texte), Métagore (1x/texte)
- Rimes internes (2+ par verse), Rimes équivoques, Paronomase

## FORMAT DE SORTIE OBLIGATOIRE
Utilise les balises Suno V5 :
- [Intro], [Verse 1], [Chorus], [Verse 2], [Bridge], [Outro]
- (ad-libs entre parenthèses)
- [Vocal Style: ...] pour les changements de style vocal

${artistDNA ? `## PROFIL ARTISTE À IMITER
- **Artiste** : ${artistDNA.artist}
- **Style vocal** : ${artistDNA.vocalDNA || 'N/A'}
- **Flow** : ${artistDNA.flowPattern || 'N/A'}
- **Production** : ${artistDNA.productionFingerprint || 'N/A'}
- **Thèmes culturels** : ${artistDNA.culturalAnchors || 'N/A'}
- **Structure** : ${artistDNA.structureDNA || 'N/A'}
- **Hook type** : ${artistDNA.hookType || 'N/A'}
- **Énergie** : ${artistDNA.energyCurve || 'N/A'}
- **Comportement verse** : ${artistDNA.verseBehavior || 'N/A'}
- **Anti-patterns** : ${artistDNA.antiPatterns || 'N/A'}
` : ''}

## INSTRUCTIONS CRITIQUES
- Écris UNIQUEMENT les paroles, rien d'autre (pas d'explication, pas de commentaire)
- Respecte la langue demandée
- Les paroles doivent être prêtes à copier-coller dans Suno
- Chaque section doit être clairement balisée avec [ ]
- Les ad-libs doivent correspondre au style de l'artiste
- JAMAIS de texte générique ou cliché IA`;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (setCorsHeaders(req, res)) return;
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const ip = (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() || req.socket?.remoteAddress || "unknown";
  const rateCheck = isRateLimited(ip);
  if (rateCheck.limited) {
    res.setHeader("Retry-After", String(rateCheck.retryAfter || 60));
    return res.status(429).json({ error: "Rate limit. Patientez.", retryAfter: rateCheck.retryAfter });
  }

  const apiKey = process.env.GROK_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "GROK_API_KEY is not configured on server" });
  }

  try {
    const { theme, language, artist, artistDNA, mood, genre, energy } = req.body;

    if (!theme && !artist) {
      return res.status(400).json({ error: "Missing required fields: theme or artist" });
    }

    const systemPrompt = buildSystemPrompt(artistDNA);

    const userPrompt = [
      `Écris des paroles complètes pour une chanson.`,
      theme ? `Thème : "${theme}"` : '',
      artist ? `Style inspiré de : ${artist}` : '',
      language ? `Langue : ${language}` : 'Langue : Français',
      mood ? `Mood : ${mood}` : '',
      genre ? `Genre : ${genre}` : '',
      energy ? `Énergie (0-100) : ${energy}` : '',
      ``,
      `Structure attendue : [Intro] → [Verse 1] → [Chorus] → [Verse 2] → [Chorus] → [Bridge] → [Outro]`,
      `Inclus les ad-libs entre parenthèses correspondant au style de l'artiste.`,
      `Écris UNIQUEMENT les paroles balisées, sans aucun commentaire.`
    ].filter(Boolean).join('\n');

    // Call xAI Grok API (OpenAI-compatible endpoint)
    const response = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "grok-3-mini-fast",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
        temperature: 0.9,
        max_tokens: 4000
      })
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Grok API error:", response.status, errorBody);

      // Fallback to grok-3-mini if grok-3-mini-fast fails
      if (response.status === 404 || response.status === 400) {
        const fallbackResponse = await fetch("https://api.x.ai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
          },
          body: JSON.stringify({
            model: "grok-3-mini",
            messages: [
              { role: "system", content: systemPrompt },
              { role: "user", content: userPrompt }
            ],
            temperature: 0.9,
            max_tokens: 4000
          })
        });

        if (!fallbackResponse.ok) {
          const fallbackError = await fallbackResponse.text();
          console.error("Grok fallback error:", fallbackResponse.status, fallbackError);
          return res.status(fallbackResponse.status).json({ error: `Grok API error: ${fallbackResponse.status}` });
        }

        const fallbackData = await fallbackResponse.json();
        const text = fallbackData.choices?.[0]?.message?.content || "";
        return res.status(200).json({ text, model: "grok-3-mini" });
      }

      return res.status(response.status).json({ error: `Grok API error: ${response.status}` });
    }

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content || "";
    return res.status(200).json({ text, model: data.model || "grok-3-mini-fast" });

  } catch (error: any) {
    console.error("Grok lyrics proxy error:", error?.message || error);
    return res.status(500).json({ error: `Unexpected error: ${error?.message || "Unknown"}` });
  }
}
