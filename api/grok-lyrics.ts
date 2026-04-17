import { VercelRequest, VercelResponse } from "@vercel/node";

// ── Rate Limiting ──
interface RateBucket { count: number; resetAt: number; }
const ipBuckets = new Map<string, RateBucket>();
const MAX_PER_IP_PER_MINUTE = 12; // 2-pass architecture = 2 Grok calls per user request

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

// ── PASS 1: STYLE PROMPT (small JSON — very achievable for Grok mini) ──
function buildStyleSystemPrompt(artistDNA: any): string {
  return `Tu es un DIRECTEUR ARTISTIQUE et PRODUCTEUR MUSICAL PROFESSIONNEL.
Tu crées des prompts de style pour Suno AI V5.5 — EN ANGLAIS uniquement.

${buildArtistBlock(artistDNA)}

## FORMAT DE SORTIE — JSON STRICT (pas de markdown, pas de backticks)
{
  "artistName": "Nom d'artiste fictif créatif",
  "songTitle": "Titre du morceau",
  "sunoPrompt": "Style prompt EN ANGLAIS, 500-600 chars. 10 dimensions: [STYLE]+[BPM+Key]+[GRAIN]+[SPACE]+[INSTRUMENTS]+[VOCAL TEXTURE]+[DYNAMIC]+[MIX]+[CULTURAL]+[ERA]. Ultra précis.",
  "sunoPrompts": ["V1 fidèle à l'artiste", "V2 variation légère", "V3 plus expérimental"],
  "negativePrompt": "Styles à exclure EN ANGLAIS"
}

RÈGLES :
- TOUT en ANGLAIS dans les champs sunoPrompt/sunoPrompts/negativePrompt
- Précision maximale : "Dark Melodic Drill, Pitched 808 Slides, Sparse Hi-Hats, Reverb-Drenched Vocals" PAS juste "Trap"
- Chaque variant V1/V2/V3 doit être DIFFÉRENT
- JSON valide uniquement`;
}

// ── PASS 2: LYRICS (raw text — Grok excels at creative writing without JSON constraints) ──
function buildLyricsCreativePrompt(artistDNA: any): string {
  return `Tu es un GHOSTWRITER PROFESSIONNEL. Tu écris des PAROLES DE CHANSON.

${AUTHENTICITY_DIRECTIVE}

${ANTI_IA_RULES}

${buildArtistBlock(artistDNA)}

## FORMAT DE SORTIE — PAROLES BALISÉES (PAS de JSON)
Écris DIRECTEMENT les paroles avec ces balises Suno V5 :

[Intro]
(les paroles de l'intro ici)

[Verse 1]
(couplet 1 complet, 8-12 lignes)

[Pre-Chorus]
(montée vers le refrain, 2-4 lignes)

[Chorus]
(refrain accrocheur, 4-8 lignes)

[Verse 2]
(couplet 2 complet, 8-12 lignes)

[Chorus]
(refrain identique ou variation)

[Bridge]
(pont émotionnel, 4-6 lignes)

[Outro]
(conclusion, 2-4 lignes)

RÈGLES :
- Commence DIRECTEMENT par [Intro] ou [Verse 1] — JAMAIS "Voici", JAMAIS d'explication
- Ad-libs entre parenthèses : (grrt), (aïe), (ekip), (oh)
- ~melisma~ pour les notes tenues
- MAJUSCULES = cri/emphase
- Indique les changements vocaux : [Vocal Style: Raspy], [Vocal Style: Whisper], [Vocal Style: Soft]
- Chaque couplet MINIMUM 8 lignes de VRAI texte
- ZÉRO ligne vide entre les vers d'une même section
- JAMAIS de vrais noms d'artistes/marques dans les paroles`;
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

// ── Clean Grok response: strip reasoning/thinking tokens ──
function cleanGrokResponse(text: string): string {
  // grok-3-mini is a reasoning model — strip <think>...</think> blocks
  let cleaned = text.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
  // Also strip any other common reasoning wrappers
  cleaned = cleaned.replace(/^<reasoning>[\s\S]*?<\/reasoning>/gi, '').trim();
  cleaned = cleaned.replace(/^<thought>[\s\S]*?<\/thought>/gi, '').trim();
  // Strip markdown code fences
  cleaned = cleaned.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '').trim();
  // Strip common preamble phrases
  cleaned = cleaned.replace(/^(?:Voici|Here (?:are|is)|Sure|OK|D'accord|Bien sûr)[^\n]*\n+/i, '').trim();
  return cleaned;
}

// ── Grok API call with fallback chain ──
async function callGrokAPI(apiKey: string, systemPrompt: string, userPrompt: string, jsonMode: boolean): Promise<{ text: string; model: string }> {
  // grok-3-mini works reliably. grok-3-mini-fast may not be available on all accounts.
  // Put grok-3-mini FIRST to avoid wasting time on 404s.
  const models = ["grok-3-mini", "grok-3-mini-fast", "grok-2-1212"];
  let lastError: string = "";

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

      console.log(`Grok: trying model=${model}, jsonMode=${jsonMode}`);

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
        let text = data.choices?.[0]?.message?.content || "";
        const finishReason = data.choices?.[0]?.finish_reason || "unknown";
        const usageTokens = data.usage ? `in=${data.usage.prompt_tokens} out=${data.usage.completion_tokens}` : "no usage";
        console.log(`Grok OK: model=${data.model || model}, finish=${finishReason}, ${usageTokens}, raw_len=${text.length}`);
        console.log(`Grok raw response first 500 chars: ${text.slice(0, 500)}`);

        if (finishReason === 'length') {
          console.warn(`Grok WARNING: response TRUNCATED (finish_reason=length)`);
        }

        // Clean reasoning tokens from grok-3-mini
        text = cleanGrokResponse(text);
        console.log(`Grok cleaned response len=${text.length}, first 300: ${text.slice(0, 300)}`);

        if (!text) {
          console.warn(`Grok: response empty after cleaning, trying next model`);
          lastError = 'Empty response after cleaning';
          continue;
        }

        return { text, model: data.model || model };
      }

      const status = response.status;
      const errBody = await response.text().catch(() => '');
      console.warn(`Grok model=${model} failed: ${status} — ${errBody.slice(0, 200)}`);
      lastError = `${status}: ${errBody.slice(0, 200)}`;

      if (status === 403) throw new Error(`403 Forbidden — Pas de crédits API xAI.`);
      if (status === 429) throw new Error(`429 Rate limit — Trop de requêtes.`);
      if (status === 404 || status === 400 || status === 422) continue; // try next model
      throw new Error(`Grok API error: ${status}`);

    } catch (err: any) {
      if (err.message?.includes('403') || err.message?.includes('429')) throw err;
      lastError = err.message || 'Unknown error';
      if (model === models[models.length - 1]) throw err;
      console.warn(`Grok ${model} error, trying next:`, err.message);
    }
  }
  throw new Error(`All Grok models failed. Last error: ${lastError}`);
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

    // ── Helper: parse bracketed lyrics text → structured array ──
    function parseBracketedLyrics(raw: string): any[] {
      const result: any[] = [];
      const parts = raw.split(/\[([^\]]+)\]/g).filter(Boolean);
      for (let i = 0; i < parts.length - 1; i += 2) {
        const sectionName = parts[i].trim();
        const sectionText = parts[i + 1].trim();
        // Skip metatags
        if (/^(vocal\s?style|energy|tempo|beat|mood|texture|instrument|key:|bpm)/i.test(sectionName)) continue;
        if (sectionText.length > 0) {
          result.push({
            id: `v${result.length + 1}`,
            type: sectionName,
            text: sectionText,
            prompt: ''
          });
        }
      }
      return result;
    }

    if (isFullMode) {
      // ══════════════════════════════════════════════════════════════
      // 2-PASS ARCHITECTURE: Style JSON + Lyrics Raw Text IN PARALLEL
      // Grok mini can't reliably produce a huge JSON with full lyrics.
      // Split into two focused calls that run simultaneously.
      // ══════════════════════════════════════════════════════════════

      // ── Build context strings shared by both passes ──
      const contextLines = [
        theme ? `Thème : "${theme}"` : 'Thème : IMPROVISE un thème',
        artist ? `Inspiré de : ${artist}` : '',
        language ? `Langue : ${language}` : 'Langue : Français',
        mood ? `Mood : ${mood}` : '',
        genre ? `Genre : ${genre}` : '',
        energy ? `Énergie : ${energy}/100` : '',
        bpm ? `BPM : ${bpm}` : '',
        voiceType ? `Voix : ${voiceType}` : '',
        singingStyle ? `Style chant : ${singingStyle}` : '',
        productionStyle ? `Production : ${productionStyle}` : '',
        styleBlend ? `Blending : ${styleBlend}` : '',
        customNeg ? `Exclure : ${customNeg}` : '',
        weirdness ? `Weirdness : ${weirdness}/100` : '',
        styleInfluence ? `Style influence : ${styleInfluence}/100` : '',
        advancedTags?.length ? `Tags : ${advancedTags.join(', ')}` : '',
      ].filter(Boolean).join('\n');

      // ── PASS 1: Style prompt (small JSON) ──
      const styleUserPrompt = `Génère un prompt de style Suno V5.5 pour cette chanson :\n${contextLines}\n\nRéponds UNIQUEMENT en JSON valide.`;

      // ── PASS 2: Lyrics (raw text, NO JSON) ──
      const lyricsUserPrompt = `Écris les paroles complètes de cette chanson :\n${contextLines}\n\nCommence DIRECTEMENT par [Intro] ou [Verse 1]. Pas de JSON, pas d'explication.`;

      console.log(`Grok 2-PASS: launching style (JSON) then lyrics (text) SEQUENTIALLY to avoid xAI rate limits...`);

      // Run SEQUENTIALLY — xAI rate-limits concurrent requests on grok-3-mini
      // PASS 1 first (smaller, faster), then PASS 2 (lyrics, needs more tokens)
      let styleResult: { text: string; model: string } | null = null;
      let lyricsResult: { text: string; model: string } | null = null;

      try {
        styleResult = await callGrokAPI(apiKey, buildStyleSystemPrompt(artistDNA), styleUserPrompt, true);
        console.log('Grok PASS1 (style) completed OK');
      } catch (err: any) {
        console.error('Grok PASS1 (style) failed:', err.message);
      }

      // Small delay to avoid xAI rate limit between sequential calls
      await new Promise(resolve => setTimeout(resolve, 500));

      try {
        lyricsResult = await callGrokAPI(apiKey, buildLyricsCreativePrompt(artistDNA), lyricsUserPrompt, false);
        console.log('Grok PASS2 (lyrics) completed OK, text len:', lyricsResult?.text?.length);
      } catch (err: any) {
        console.error('Grok PASS2 (lyrics) failed:', err.message);
        // RETRY once after a longer delay
        console.log('Grok PASS2: retrying after 1.5s...');
        await new Promise(resolve => setTimeout(resolve, 1500));
        try {
          lyricsResult = await callGrokAPI(apiKey, buildLyricsCreativePrompt(artistDNA), lyricsUserPrompt, false);
          console.log('Grok PASS2 RETRY succeeded, text len:', lyricsResult?.text?.length);
        } catch (retryErr: any) {
          console.error('Grok PASS2 RETRY also failed:', retryErr.message);
        }
      }

      // ── Parse PASS 1: Style JSON ──
      let styleParsed: any = {};
      const styleModel = styleResult?.model || 'grok';
      if (styleResult?.text) {
        console.log(`Grok PASS1 style response (len=${styleResult.text.length}):`, styleResult.text.slice(0, 200));
        try {
          const cleaned = styleResult.text.replace(/^```json?\s*/i, '').replace(/\s*```$/i, '').trim();
          styleParsed = JSON.parse(cleaned);
        } catch {
          const jsonMatch = styleResult.text.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
            try { styleParsed = JSON.parse(jsonMatch[0]); } catch { /* use empty */ }
          }
        }
        console.log(`Grok PASS1 parsed keys: ${Object.keys(styleParsed).join(', ')}`);
      } else {
        console.warn('Grok PASS1 (style) returned nothing');
      }

      // ── Parse PASS 2: Lyrics raw text → structured array ──
      let structuredLyrics: any[] = [];
      const lyricsModel = lyricsResult?.model || styleModel;
      if (lyricsResult?.text) {
        let rawLyrics = lyricsResult.text.trim();
        console.log(`Grok PASS2 raw lyrics (len=${rawLyrics.length}), first 500:`, rawLyrics.slice(0, 500));

        // ATTEMPT 1: If the response is actually JSON (Grok might ignore our "no JSON" instruction)
        if (rawLyrics.startsWith('{')) {
          try {
            const lyricsJson = JSON.parse(rawLyrics);
            console.log('Grok PASS2: response was JSON, keys:', Object.keys(lyricsJson));
            // Try to find lyrics in the JSON
            const lyricsSource = lyricsJson.structuredLyrics || lyricsJson.lyrics || lyricsJson.verses || lyricsJson.sections;
            if (Array.isArray(lyricsSource)) {
              structuredLyrics = lyricsSource.map((v: any, i: number) => ({
                id: `v${i + 1}`,
                type: (typeof v === 'string' ? `Section ${i + 1}` : v.type || v.section || `Section ${i + 1}`),
                text: (typeof v === 'string' ? v : v.text || v.lyrics || v.content || ''),
                prompt: ''
              })).filter((v: any) => v.text.trim().length > 0);
              console.log(`Grok PASS2 JSON fallback: ${structuredLyrics.length} sections`);
            } else if (typeof lyricsSource === 'string') {
              rawLyrics = lyricsSource; // use string for bracket parsing below
            }
          } catch {
            console.log('Grok PASS2: starts with { but not valid JSON, treating as text');
          }
        }

        // ATTEMPT 2: Standard bracket parsing [Section Name]
        if (structuredLyrics.length === 0) {
          structuredLyrics = parseBracketedLyrics(rawLyrics);
          console.log(`Grok PASS2 bracket parse: ${structuredLyrics.length} sections`);
        }

        // ATTEMPT 3: Split by common section headers without brackets (Verse 1:, Chorus:, etc.)
        if (structuredLyrics.length === 0) {
          const headerPattern = /^(Intro|Verse\s*\d*|Couplet\s*\d*|Pre-?Chorus|Chorus|Refrain|Bridge|Pont|Outro|Hook)\s*[:\-]?\s*$/gim;
          const headerMatches = [...rawLyrics.matchAll(headerPattern)];
          if (headerMatches.length >= 2) {
            for (let i = 0; i < headerMatches.length; i++) {
              const start = headerMatches[i].index! + headerMatches[i][0].length;
              const end = i + 1 < headerMatches.length ? headerMatches[i + 1].index! : rawLyrics.length;
              const sectionText = rawLyrics.slice(start, end).trim();
              if (sectionText.length > 0) {
                structuredLyrics.push({
                  id: `v${structuredLyrics.length + 1}`,
                  type: headerMatches[i][1].trim(),
                  text: sectionText,
                  prompt: ''
                });
              }
            }
            console.log(`Grok PASS2 header parse: ${structuredLyrics.length} sections`);
          }
        }

        // ATTEMPT 4: Split by double newlines into verse blocks
        if (structuredLyrics.length === 0 && rawLyrics.length > 50) {
          const blocks = rawLyrics.split(/\n\s*\n/).filter(b => b.trim().length > 10);
          if (blocks.length >= 2) {
            const sectionNames = ['Intro', 'Verse 1', 'Pre-Chorus', 'Chorus', 'Verse 2', 'Chorus', 'Bridge', 'Outro'];
            structuredLyrics = blocks.map((block, i) => ({
              id: `v${i + 1}`,
              type: sectionNames[i] || `Section ${i + 1}`,
              text: block.trim(),
              prompt: ''
            }));
            console.log(`Grok PASS2 block split: ${structuredLyrics.length} sections`);
          }
        }

        // ATTEMPT 5: Last resort — entire text as single verse
        if (structuredLyrics.length === 0 && rawLyrics.length > 30) {
          structuredLyrics = [{
            id: 'v1',
            type: 'Verse',
            text: rawLyrics,
            prompt: ''
          }];
          console.log('Grok PASS2 last resort: entire text as single verse');
        }

        console.log(`Grok PASS2 FINAL: ${structuredLyrics.length} sections, total chars=${structuredLyrics.reduce((a: number, v: any) => a + v.text.length, 0)}`);
      } else {
        console.warn('Grok PASS2 (lyrics) returned NOTHING — lyricsResult:', JSON.stringify(lyricsResult));
      }

      // If both passes failed completely, throw
      if (!styleResult && !lyricsResult) {
        throw new Error('Les deux appels Grok ont échoué. Vérifiez vos crédits API xAI.');
      }

      // ── Assemble final response ──
      const finalModel = lyricsModel || styleModel;
      const rawLyricsText = lyricsResult?.text?.trim() || '';
      const response = {
        artistName: styleParsed.artistName || artist || 'Artiste',
        songTitle: styleParsed.songTitle || styleParsed.title || 'Untitled',
        sunoPrompt: styleParsed.sunoPrompt || styleParsed.stylePrompt || '',
        sunoPrompts: styleParsed.sunoPrompts || (styleParsed.sunoPrompt ? [styleParsed.sunoPrompt] : []),
        negativePrompt: styleParsed.negativePrompt || customNeg || '',
        structuredLyrics,
        rawLyricsText, // Raw text fallback for client-side parsing
        lipSyncExcerpt: '',
        quality: {
          score: structuredLyrics.length >= 4 ? 85 : (structuredLyrics.length >= 2 ? 70 : 50),
          coherence: 80,
          richness: 80,
          clarity: 85,
          hook: 80,
          precision: 80,
          message: `Generated via Grok 2-pass (style: ${styleResult ? 'OK' : 'FAIL'}, lyrics: ${lyricsResult ? `${structuredLyrics.length} sections` : 'FAIL'}) rawLen=${rawLyricsText.length}`
        },
        model: finalModel,
        provider: 'grok',
        _debug: {
          pass1_status: styleResult ? 'OK' : 'FAIL',
          pass2_status: lyricsResult ? 'OK' : 'FAIL',
          pass2_raw_length: rawLyricsText.length,
          pass2_sections: structuredLyrics.length,
          pass2_first200: rawLyricsText.slice(0, 200)
        }
      };

      console.log(`Grok FINAL: ${structuredLyrics.length} lyrics sections, sunoPrompt=${(response.sunoPrompt || '').slice(0, 80)}, model=${finalModel}`);
      return res.status(200).json(response);

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
