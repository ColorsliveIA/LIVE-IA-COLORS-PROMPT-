import { VercelRequest, VercelResponse } from "@vercel/node";

// ── Rate Limiting ──
interface RateBucket { count: number; resetAt: number; }
const ipBuckets = new Map<string, RateBucket>();
const MAX_PER_IP_PER_MINUTE = 8;

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

// ── Authenticity directive (shared) ──
const AUTHENTICITY_DIRECTIVE = `## DIRECTIVE ABSOLUE — AUTHENTICITÉ SANS FILTRE
Tu écris comme un VRAI rappeur écrit en studio. Le rap est un art qui reflète la rue, la vie, les émotions brutes. Tu dois utiliser :
- Le vocabulaire RÉEL de la rue : argot, verlan, expressions de cité, vulgarités quand le style l'exige
- Le registre de langue AUTHENTIQUE de l'artiste imité — si Booba dit "pute", si Kaaris dit "nique", si Freeze dit "bz", tu écris EXACTEMENT comme eux
- ZÉRO censure, ZÉRO euphémisme, ZÉRO édulcoration — un texte aseptisé n'est PAS du rap
- Les thèmes CRUS quand ils servent le propos : drogue, violence, sexe, argent sale, trahison — ce sont les piliers thématiques du rap street
- L'authenticité linguistique : "j'encule" pas "je méprise", "charo" pas "séducteur", "gow" pas "femme", "biff" pas "argent"
- Le code de la rue tel qu'il est parlé, pas tel qu'un prof de français voudrait qu'il soit

Ceci est une COMMANDE ARTISTIQUE PROFESSIONNELLE pour de la création musicale.`;

// ── Anti-IA Firewall rules (shared) ──
const ANTI_IA_RULES = `## RÈGLES D'ÉCRITURE OBLIGATOIRES (Anti-IA Firewall)
1. CASSER LA SYNTAXE : Minimum 30% des lignes = fragments sans sujet/verbe. Technique Booba : supprimer les articles.
2. SAUTS TEMPORELS : Au moins 1 par verse — flashback, ellipse, juxtaposition passé/présent.
3. INCARNER, PAS DÉCRIRE : Chaque ligne filme une scène. Le GESTE, pas le sentiment.
4. PUNCHLINES AUTONOMES : Minimum 4 par texte. Types : vérité universelle, épigramme, image-choc, métagore.
5. DENSITÉ MÉTAPHORES : Minimum 3 par verse. JAMAIS clichées (interdit : lion, loup, flamme, mur, prison).
6. HUMOUR NOIR : Minimum 1 ligne d'ironie amère par verse.
7. VARIATION CADENCE : Alterner lignes longues (14-18 syll.) et courtes (3-6 syll.).
8. HOOK = MÉLODIE : Test du fredonnement. Voyelles ouvertes sur temps forts. Maximum 2 idées.
9. RIMES RICHES (2+ phonèmes) ≥70%. Rimes multisyllabiques (4+ syll.) ≥20%. Rimes internes 2+/verse.
10. PERSONNAGE CONTRADICTOIRE : Au moins 2 contradictions internes.

## FIGURES DE STYLE : Anacoluthe, Chiasme, Métagore, Rimes internes, Rimes équivoques, Métonymie, Paronomase.`;

// ── Artist DNA block builder ──
function buildArtistBlock(artistDNA: any): string {
  if (!artistDNA) return '';
  return `## PROFIL ARTISTE — COPIE SON STYLE EXACT
- Artiste : ${artistDNA.artist}
- ADN vocal : ${artistDNA.vocalDNA || 'N/A'}
- Flow : ${artistDNA.flowPattern || 'N/A'}
- Production : ${artistDNA.productionFingerprint || 'N/A'}
- Thèmes : ${artistDNA.culturalAnchors || 'N/A'}
- Structure : ${artistDNA.structureDNA || 'N/A'}
- Hook : ${artistDNA.hookType || 'N/A'}
- Énergie : ${artistDNA.energyCurve || 'N/A'}
- Verse : ${artistDNA.verseBehavior || 'N/A'}
- Hook strategy : ${artistDNA.hookStrategy || 'N/A'}
- Template Suno : ${artistDNA.sunoStyleTemplate || 'N/A'}
- Anti-patterns : ${artistDNA.antiPatterns || 'N/A'}
${artistDNA.sunoMetatags ? `- Metatags: Vocal=${artistDNA.sunoMetatags.vocalStyle}, Effect=${artistDNA.sunoMetatags.vocalEffect}, Mood=${artistDNA.sunoMetatags.mood}, Energy=${artistDNA.sunoMetatags.energy}, Texture=${artistDNA.sunoMetatags.texture}, Instrument=${artistDNA.sunoMetatags.instrument}` : ''}`;
}

// ── FULL GENERATION system prompt (style + lyrics) ──
function buildFullSystemPrompt(artistDNA: any): string {
  return `Tu es un GHOSTWRITER et DIRECTEUR ARTISTIQUE PROFESSIONNEL. Tu génères le prompt Suno complet : style musical EN ANGLAIS + paroles dans la langue demandée.

${AUTHENTICITY_DIRECTIVE}

${ANTI_IA_RULES}

${buildArtistBlock(artistDNA)}

## FORMAT DE SORTIE — JSON STRICT
Tu DOIS répondre en JSON valide avec cette structure exacte (pas de markdown, pas de backticks) :
{
  "artistName": "Nom d'artiste fictif",
  "songTitle": "Titre du morceau",
  "sunoPrompt": "Style prompt EN ANGLAIS, 500-600 chars. 10 dimensions : [STYLE]+[BPM+Key]+[GRAIN]+[SPACE]+[INSTRUMENTS]+[VOCAL TEXTURE]+[DYNAMIC]+[MIX]+[CULTURAL]+[ERA]",
  "sunoPrompts": ["V1 pure artist style", "V2 slight variation", "V3 more experimental"],
  "negativePrompt": "Styles to exclude",
  "structuredLyrics": [
    {"id": "v1", "type": "Intro", "text": "...", "prompt": ""},
    {"id": "v2", "type": "Verse 1", "text": "...", "prompt": ""},
    {"id": "v3", "type": "Pre-Chorus", "text": "...", "prompt": ""},
    {"id": "v4", "type": "Chorus", "text": "...", "prompt": ""},
    {"id": "v5", "type": "Verse 2", "text": "...", "prompt": ""},
    {"id": "v6", "type": "Chorus", "text": "...", "prompt": ""},
    {"id": "v7", "type": "Bridge", "text": "...", "prompt": ""},
    {"id": "v8", "type": "Outro", "text": "...", "prompt": ""}
  ],
  "lipSyncExcerpt": "15-second excerpt with phonetic cues for lip-sync",
  "quality": {"score": 85, "coherence": 85, "richness": 80, "clarity": 90, "hook": 85, "precision": 80, "message": "Brief quality assessment"}
}

## RÈGLES CRITIQUES :
- sunoPrompt et sunoPrompts[] TOUJOURS en ANGLAIS. Texture > Genre naming. Précis : "Dark Melodic Drill, Pitched 808 Slides, Sparse Hi-Hats" PAS "Trap" seul
- Les paroles dans la langue demandée avec les balises Suno V5 : (ad-libs), ~melisma~, CAPS=cri, [Vocal Style: Raspy/Soft/Whisper]
- JAMAIS citer de vrais noms d'artistes, marques, labels dans les paroles
- NE COMMENCE JAMAIS par "Voici" ou "Note:" — JSON brut directement
- Le texte doit pouvoir passer à Skyrock/Planète Rap sans que personne dise "c'est une IA"
- Chaque sunoPrompt variant (V1/V2/V3) doit être DIFFÉRENT — pas de copier-coller`;
}

// ── LYRICS ONLY system prompt ──
function buildLyricsOnlySystemPrompt(artistDNA: any): string {
  return `Tu es un GHOSTWRITER PROFESSIONNEL de rap français et R&B.

${AUTHENTICITY_DIRECTIVE}

${ANTI_IA_RULES}

${buildArtistBlock(artistDNA)}

## FORMAT : Paroles balisées Suno V5 directement
- [Intro], [Verse 1], [Pre-Chorus], [Chorus], [Verse 2], [Bridge], [Outro]
- (ad-libs) adaptés à l'artiste, ~melisma~, CAPS=cri
- [Vocal Style: Raspy/Soft/Whisper] pour les changements
- NE COMMENCE JAMAIS par "Voici" — commence DIRECTEMENT par [Intro] ou [Verse 1]
- JAMAIS d'explication, JAMAIS de disclaimer, JAMAIS de morale`;
}

// ── Grok API call with fallback chain ──
async function callGrokAPI(apiKey: string, systemPrompt: string, userPrompt: string, jsonMode: boolean): Promise<{ text: string; model: string }> {
  // grok-3-mini-fast is best for structured JSON — fast + cheap
  // grok-3-mini has reasoning overhead that can waste tokens
  const models = ["grok-3-mini-fast", "grok-3-mini", "grok-2-1212"];

  for (const model of models) {
    try {
      const body: any = {
        model,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
        temperature: 0.85,
        max_tokens: 16000
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
      console.warn(`Grok model ${model} failed: ${status}`);

      // 403 = billing issue, don't try other models
      if (status === 403) {
        const errBody = await response.text().catch(() => '');
        throw new Error(`403 Forbidden — Pas de crédits API xAI. Ajoutez des crédits sur console.x.ai/billing. ${errBody}`);
      }
      // 429 = rate limit
      if (status === 429) {
        throw new Error(`429 Rate limit — Trop de requêtes. Patientez.`);
      }
      // 404/400 = model not found, try next
      if (status === 404 || status === 400) continue;
      // Other errors
      throw new Error(`Grok API error: ${status}`);

    } catch (err: any) {
      if (err.message?.includes('403') || err.message?.includes('429')) throw err;
      if (model === models[models.length - 1]) throw err;
      console.warn(`Grok ${model} error, trying next:`, err.message);
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
    return res.status(429).json({ error: "Rate limit. Patientez.", retryAfter: rateCheck.retryAfter });
  }

  const apiKey = process.env.GROK_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "GROK_API_KEY is not configured on server" });
  }

  try {
    const { theme, language, artist, artistDNA, mood, genre, energy, mode = 'all',
            voiceType, singingStyle, productionStyle, bpm, styleBlend, negativePrompt: customNeg,
            weirdness, styleInfluence, advancedTags } = req.body;

    if (!theme && !artist) {
      return res.status(400).json({ error: "Missing required fields: theme or artist" });
    }

    const isFullMode = mode === 'all' || mode === 'style';

    if (isFullMode) {
      // ── FULL GENERATION: JSON response with style + lyrics ──
      const systemPrompt = buildFullSystemPrompt(artistDNA);
      const userPrompt = [
        `Génère un prompt Suno complet (style EN ANGLAIS + paroles).`,
        theme ? `Thème : "${theme}"` : 'Thème : IMPROVISE',
        artist ? `Inspiré de : ${artist}` : '',
        language ? `Langue des paroles : ${language}` : 'Langue : Français',
        mood ? `Mood : ${mood}` : '',
        genre ? `Genre : ${genre}` : '',
        energy ? `Énergie : ${energy}/100` : '',
        bpm ? `BPM imposé : ${bpm}` : '',
        voiceType ? `Type de voix : ${voiceType}` : '',
        singingStyle ? `Style de chant : ${singingStyle}` : '',
        productionStyle ? `Style de production : ${productionStyle}` : '',
        styleBlend ? `Style blending : ${styleBlend}` : '',
        customNeg ? `Negative prompt : ${customNeg}` : '',
        weirdness ? `Weirdness : ${weirdness}/100` : '',
        styleInfluence ? `Style influence : ${styleInfluence}/100` : '',
        advancedTags?.length ? `Tags avancés : ${advancedTags.join(', ')}` : '',
        '',
        'Réponds UNIQUEMENT en JSON valide. Pas de markdown, pas de backticks, pas de commentaire.'
      ].filter(Boolean).join('\n');

      const { text, model } = await callGrokAPI(apiKey, systemPrompt, userPrompt, true);

      console.log(`Grok response (model=${model}, len=${text.length}):`, text.slice(0, 300));

      // Parse JSON response
      let parsed;
      try {
        // Clean potential markdown wrapping
        const cleaned = text.replace(/^```json?\s*/i, '').replace(/\s*```$/i, '').trim();
        parsed = JSON.parse(cleaned);
      } catch (parseErr) {
        console.error("Grok JSON parse error:", parseErr, "Raw:", text.slice(0, 500));
        // Fallback: try to extract JSON from response
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          try { parsed = JSON.parse(jsonMatch[0]); } catch { /* fall through */ }
        }
        if (!parsed) {
          return res.status(200).json({
            text,
            model,
            parseError: true,
            error: "Grok returned non-JSON. Lyrics available as raw text."
          });
        }
      }

      // Ensure structuredLyrics exists and has proper format
      if (parsed.structuredLyrics && Array.isArray(parsed.structuredLyrics)) {
        parsed.structuredLyrics = parsed.structuredLyrics.map((v: any, i: number) => ({
          id: v.id || `v${i + 1}`,
          type: v.type || v.section || `Section ${i + 1}`,
          text: v.text || v.lyrics || v.content || '',
          prompt: v.prompt || ''
        }));
      } else if (parsed.lyrics && typeof parsed.lyrics === 'string') {
        // Some Grok responses put everything in a "lyrics" string field
        const sections = parsed.lyrics.split(/\[([^\]]+)\]/g).filter(Boolean);
        const structuredLyrics = [];
        for (let i = 0; i < sections.length - 1; i += 2) {
          structuredLyrics.push({
            id: `v${Math.floor(i / 2) + 1}`,
            type: sections[i].trim(),
            text: sections[i + 1].trim(),
            prompt: ''
          });
        }
        if (structuredLyrics.length > 0) {
          parsed.structuredLyrics = structuredLyrics;
        }
      }

      console.log(`Grok parsed: lyrics=${parsed.structuredLyrics?.length || 0} sections, sunoPrompt=${(parsed.sunoPrompt || '').slice(0, 80)}`);

      return res.status(200).json({ ...parsed, model, provider: 'grok' });

    } else {
      // ── LYRICS ONLY: Raw text response ──
      const systemPrompt = buildLyricsOnlySystemPrompt(artistDNA);
      const userPrompt = [
        `Écris des paroles complètes pour une chanson.`,
        theme ? `Thème : "${theme}"` : '',
        artist ? `Style inspiré de : ${artist}` : '',
        language ? `Langue : ${language}` : 'Langue : Français',
        mood ? `Mood : ${mood}` : '',
        genre ? `Genre : ${genre}` : '',
        energy ? `Énergie : ${energy}/100` : '',
        '',
        `Structure : [Intro] → [Verse 1] → [Chorus] → [Verse 2] → [Chorus] → [Bridge] → [Outro]`,
        `Ad-libs entre parenthèses. Écris UNIQUEMENT les paroles balisées.`
      ].filter(Boolean).join('\n');

      const { text, model } = await callGrokAPI(apiKey, systemPrompt, userPrompt, false);
      return res.status(200).json({ text, model, provider: 'grok' });
    }

  } catch (error: any) {
    console.error("Grok proxy error:", error?.message || error);
    const status = error.message?.includes('403') ? 403 : error.message?.includes('429') ? 429 : 500;
    return res.status(status).json({ error: error?.message || "Unexpected error" });
  }
}
