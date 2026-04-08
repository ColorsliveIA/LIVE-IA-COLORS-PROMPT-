import { Verse } from "../types";
import { getArtistSpecificInstructions, getRelevantWritingDNA, isArtistMelodic } from './artist-profiles';
import { getArtistSonicDNA, SonicDNA, overrideCursorsOnDNA, CursorOverrides } from './sonic-dna';
import { buildBanlistBlock, lintForGimmickLeaks, stripGlobalBanlist, buildLeakFixInstruction } from './gimmick-banlist';
import { buildHarmonicBlock, validateHarmonicCoherence, buildHarmonicFixInstruction, mutateVariantWithinProfile } from './harmonic-profiles';
import { buildCursorsBlock } from './cursors-block';

const Type = {
  OBJECT: "OBJECT",
  STRING: "STRING",
  NUMBER: "NUMBER",
  ARRAY: "ARRAY",
  BOOLEAN: "BOOLEAN",
};

// ── Single active model: gemini-2.5-flash (gemini-2.0-flash is dead) ──
const FAST_MODEL = "gemini-2.5-flash";
const HEAVY_MODEL = "gemini-2.5-flash";
const FALLBACK_MODEL = "gemini-2.5-flash-lite";

let primaryBrownoutUntil = 0;
function isPrimaryBrownedOut() { return Date.now() < primaryBrownoutUntil; }
function tripPrimaryBrownout(ms = 60_000) { primaryBrownoutUntil = Date.now() + ms; }

async function callGeminiResilient(payload: { model: string; contents: any; config?: any }) {
  const primary = payload.model;
  const useFallbackFirst = isPrimaryBrownedOut() && primary !== FALLBACK_MODEL;
  try {
    return await callGemini({ ...payload, model: useFallbackFirst ? FALLBACK_MODEL : primary });
  } catch (e: any) {
    const is503 = e?.message?.includes('503') || e?.status === 503 ||
      e?.message?.includes('temporarily unavailable') || e?.message?.includes('high demand');
    if (is503 && primary !== FALLBACK_MODEL && !useFallbackFirst) {
      console.warn(`[FALLBACK] ${primary} 503 → switching to ${FALLBACK_MODEL}`);
      tripPrimaryBrownout();
      return await callGemini({ ...payload, model: FALLBACK_MODEL });
    }
    throw e;
  }
}

async function withRetry<T>(fn: () => Promise<T>, maxRetries: number = 4): Promise<T> {
  let lastError: any;
  for (let i = 0; i <= maxRetries; i++) {
    try {
      return await fn();
    } catch (e: any) {
      lastError = e;
      const is503 = e?.message?.includes('503') || e?.status === 503 || e?.error?.code === 503 ||
        e?.message?.includes('temporarily unavailable') || e?.message?.includes('high demand');
      const is429 = e?.message?.includes('429') || e?.status === 429 || e?.error?.code === 429 ||
        e?.error?.status === 'RESOURCE_EXHAUSTED';
      const isRetryable = is503 || is429;
      if (isRetryable && i < maxRetries) {
        const base = is429 ? 5000 : 1500;
        const delay = base * Math.pow(2, i) + Math.random() * 500;
        console.warn(`[RETRY ${i + 1}/${maxRetries}] ${is503 ? '503' : '429'} — waiting ${Math.round(delay)}ms`);
        await new Promise(resolve => setTimeout(resolve, delay));
        continue;
      }
      throw e;
    }
  }
  throw lastError;
}

async function callGemini(payload: { model: string; contents: any; config?: any }) {
  const response = await fetch("/api/gemini-proxy", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const rawText = await response.text();
  let parsed: any;
  try { parsed = JSON.parse(rawText); }
  catch {
    const err: any = new Error(`Gemini proxy non-JSON (HTTP ${response.status}): ${rawText.slice(0, 120)}`);
    err.status = response.status; throw err;
  }
  if (!response.ok) {
    const err: any = new Error(parsed.error || "Gemini API request failed");
    err.status = response.status; err.message = parsed.error || `HTTP ${response.status}`; throw err;
  }
  return parsed;
}

function getGenreSpecificNegativePrompt(genre: string, inspiredBy: string): string {
  const g = genre.toUpperCase();
  const melodic = isArtistMelodic(inspiredBy);
  if (g.includes('RAP') || g.includes('HIP HOP') || g.includes('TRAP')) {
    if (melodic) return "country, rock, metal, opera, classical, high-pitched screaming, generic trap beats, weak bass, thin drums, stock sounds, amateur mixing, muddy, clipping";
    return "singing, pop vocals, acoustic guitar, happy, bright, generic pop, country, rock, metal, nursery rhymes, generic trap beats, weak bass, thin drums, stock sounds, amateur mixing, muddy, clipping";
  }
  if (g.includes('POP')) return "heavy metal, screaming, dark, industrial, noise, experimental, complex jazz, classical, opera";
  return "";
}

function getGenreFallbackStyle(genre: string): string {
  const g = genre.toUpperCase();
  if (g.includes('TRAP')) return 'Dark trap, 808 bass depth, hi-hat frenzied, synth darkness, atmospheric pads, street energy, 130-140 BPM';
  if (g.includes('DRILL')) return 'Drill aggression, sliding 808s, rapid hi-hats triplets, menacing piano, metallic percussion, 140-145 BPM';
  if (g.includes('R&B') || g.includes('SOUL')) return 'Contemporary R&B, smooth 808s, vocal layering, soulful synths, warm analog, 85-105 BPM';
  if (g.includes('AFRO')) return 'Afrobeat percussion, infectious grooves, joyful melodies, celebratory energy, African drums, 110-130 BPM';
  if (g.includes('POP')) return 'Contemporary pop, catchy hooks, bright synths, punchy drums, accessible production, 95-120 BPM';
  if (g.includes('HOUSE')) return 'House groove, 4-on-the-floor drums, hypnotic synths, dancefloor build, electronic textures, 120-130 BPM';
  if (g.includes('RAI')) return 'Rai fusion, oriental instruments, emotional vocals, Arabic scales, mixed French-Arabic, 100-120 BPM';
  if (g.includes('CLOUD')) return 'Cloud rap, ethereal synths, spacious reverb, dreamy vibes, introspective delivery, 80-100 BPM';
  return 'Contemporary urban production, dynamic 808s, atmospheric layers, street credibility, modern textures, 100-120 BPM';
}

function buildVariantDivergenceConstraints(_genre: string, inspiredBy: string, era: string): string {
  return `
  ⚠️⚠️⚠️ VARIANT DIVERGENCE — NON-NEGOTIABLE ⚠️⚠️⚠️
  sunoPrompts[] MUST contain 3 visibly DIFFERENT prompts. Returning identical or near-identical strings is a HARD FAILURE.
  Each variant MUST diverge from the others by AT LEAST:
    • 1 different BPM value (±8 BPM minimum between V1 and V2, ±15 BPM minimum between V1 and V3)
    • 2 different texture/mood adjectives (cold↔warm, dry↔reverb, sparse↔dense, melodic↔percussive, etc.)
    • 1 different instrument emphasis pulled from the harmonic profile palette

  V1 = PURE "${inspiredBy}" signature. Sonic DNA + Harmonic Profile, baseline BPM, dominant texture from the profile. Era ${era}. ZERO blend.
  V2 = Same harmonic profile, BPM +8 to +14 from V1, ONE texture flip (e.g. cold→warm OR dry→reverb-drenched), emphasise a SECONDARY instrument from the profile palette, light secondary-artist blend (≤20%) IF provided.
  V3 = Same harmonic profile, BPM -10 to -16 from V1, TWO texture flips (mood + density), emphasise the LAST instrument in the profile palette, secondary-artist blend up to 30% IF provided.

  HARD RULES:
    1. NEVER inject a foreign genre absent from the active harmonic profile or the secondary artist's DNA.
    2. NEVER copy V1 verbatim into V2 or V3.
    3. Each variant MUST contain at least one tag the others don't.
    4. If you fail any of the above, the system will mechanically rewrite the variants and the retry will be visible to the user.
  `;
}

export async function generateMusicContext(
  genre: string, mood: string, theme: string, artist: string, language: string,
  inspiredBy: string, era: string, performanceActive: boolean, energy: number,
  emotionalIntensity: number, voiceType: string, vocalTimbre: string, singingStyle: string,
  vocalPresence: string, accent: string, vocalReference: string, emotionLevel: string,
  instrumentation: string, productionStyle: string, manualBpm: number | null,
  structure?: string, styleBlend?: string, artistIdentitySummary?: string,
  customNegativePrompt?: string, weirdness: number = 0, styleInfluence: number = 100,
  vocalTechnique: string = 'none', productionFinish: string = 'none',
  secondaryInspiredBy: string = 'none', advancedTags: string[] = [],
  mode: 'all' | 'lyrics' | 'style' = 'all',
  cursorOverrides?: Partial<CursorOverrides>
) {
  const bpmInfo = manualBpm ? `- BPM imposé: ${manualBpm}` : `- BPM: Auto (energy ${energy})`;
  const baseSonicDNA = getArtistSonicDNA(inspiredBy);
  // Sprint 4 — apply cursor overrides on top of corpus defaults (non destructif).
  const sonicDNA = (baseSonicDNA && cursorOverrides)
    ? overrideCursorsOnDNA(baseSonicDNA, cursorOverrides)
    : baseSonicDNA;
  const artistExcludeStyles = sonicDNA?.sunoExcludeStyles || '';
  const genreNegativePrompt = getGenreSpecificNegativePrompt(genre, inspiredBy);
  const combinedNegativePrompt = [artistExcludeStyles || genreNegativePrompt, customNegativePrompt].filter(Boolean).join(', ');
  const melodicArtist = isArtistMelodic(inspiredBy);

  const vocalDeliveryRule = melodicArtist
    ? `★ VOCAL: "${inspiredBy}" is MELODIC. Singing + autotune IS the signature. FORBIDDEN to force dry technical rap.`
    : `★ VOCAL: For RAP/TRAP, prioritize rhythmic percussive flow. Vary [Rhythmic flow], [Melodic rap], [Aggressive chant], [Spoken word].`;

  const vocoderRule = melodicArtist
    ? `★ AUTOTUNE: Essential creative tool per "${inspiredBy}"'s signature.`
    : `★ NO SYSTEMATIC SINGING: If artist is lyricist/technician, FORBIDDEN melodic autotune. Flow = dry, articulate, pure rap.`;

  const systemInstruction = `You are a world-class Suno AI V5.5 prompt engineer and multilingual lyricist.

ABSOLUTE RULES:
★ sunoPrompt and sunoPrompts[] MUST ALWAYS be in ENGLISH. NEVER French, Arabic, or other.
★ STYLE PROMPT: 500-600 chars. 10 DIMENSIONS: [STYLE]+[BPM+Key]+[GRAIN]+[SPACE]+[INSTRUMENTS]+[VOCAL TEXTURE]+[DYNAMIC]+[MIX]+[CULTURAL]+[ERA]. Texture > Genre naming.
★ LYRICS — WRITING QUALITY ENGINE:
  STRUCTURE: Full structure required. [ ] section tags, ( ) ad-libs, ~word~=melisma, CAPS=shouted.
  V5.5 SECTIONS: [Verse],[Pre-Chorus],[Chorus],[Post-Chorus],[Bridge],[Interlude],[Solo:Instrument],[Break],[Build],[Drop],[Outro].
  REGISTER: Adapt to intensity (${emotionalIntensity}/100) + energy (${energy}/100). Street register active for trap/drill: verlan + argot in 40-60% of verse lines. Vulgarités at line-end for sonic violence, NOT systematic. NEVER academic French for street genres.
  ORIENTATION (silent, before writing): (1) WHO speaks — age, pressure, social posture (2) EMOTIONAL TERRITORY — confess/seduce/threaten/dominate/survive/celebrate (3) CORRECT REGISTER for this mouth (4) WHAT the listener must feel after the chorus.
  SECTION JOBS: Verse=narrative+detail+world-building (private logic, subtext) | Pre-Chorus=tension+lift+emotional tilt | Chorus=SIMPLER than verse+unforgettable | Bridge=rupture OR confession OR twist OR altitude change — NEVER Verse 3.
  CONCRETE IMAGES: Physical world — textures, places, objects: wet asphalt, receipts, elevator, cracked mirrors, cheap plastic, velvet seats, fingerprints, motel rooms, empty bottles. Mix noble imagery + dirty/tactile. This contrast makes lyrics expensive and lived-in.
  HOOK RULES: Short enough to memorize instantly. Open vowels. Internal bounce. ONE core emotional idea. Sounds inevitable after first listen. FORBIDDEN: too wordy, explains instead of hits, interchangeable with other songs.
  ANTI-CLICHE: Reject any line that (a) could belong to 50 other songs (b) is stylish but emotionally false (c) arrives by habit not necessity. A rough true line beats a beautiful false line.
  RICHNESS: When flat — replace abstract noun with concrete object | replace generic emotion with visible behavior | add contradiction | add place/class marker | add sensory residue | add aftermath instead of declaration | use unusual verb | let one line stay brutally simple after two denser ones.
  SELF-OPPOSITION (silent, after draft): Find 3 weakest lines → why exactly weak → rewrite more concrete/musical/true. Prefer inhabited over literary.
${vocalDeliveryRule}
${vocoderRule}
★ ANTI-GENERIC: BANNED "Trap" or "Pop" alone. Use precise sonic textures.
★ ZERO COMMERCIAL: NEVER cite real artist names, brands, labels, album/track titles.
★ V5.5 METATAGS: [Vocal Style:],[Vocal Effect:],[Mood:],[Energy:],[Texture:],[Instrument:] on SEPARATE lines BEFORE each section. CAPS=shouted, (text)=backing, ~word~=melisma.
★ FRENCH PHONETICS: Open vowels (-é,-a,-ou,-i,-o). Avoid -ance,-ence,-ment,-tion. Write contractions as heard.
★ JSON only. No markdown.

WRITING DNA:
${getRelevantWritingDNA(inspiredBy, genre)}`;

  const sonicDNABlock = sonicDNA ? `
# SONIC DNA — V1 FOUNDATION:
${sonicDNA.sunoStyleTemplate}
BPM: ${sonicDNA.sunoBpmRange} | KEY: ${sonicDNA.sunoKey} | VOCAL TAGS: ${sonicDNA.sunoVocalTags.join(', ')}
WEIRDNESS: ${sonicDNA.sunoWeirdness}/100 | STYLE INFLUENCE: ${sonicDNA.sunoStyleInfluence}/100

VOCAL ENGINE: ${sonicDNA.vocalDNA || 'Not specified'}
FLOW ENGINE: ${sonicDNA.flowPattern || 'Not specified'}
PRODUCTION ENGINE: ${sonicDNA.productionFingerprint || 'Not specified'}
${sonicDNA.structureDNA ? `STRUCTURE: ${sonicDNA.structureDNA}` : ''}
${sonicDNA.hookType ? `HOOK: ${sonicDNA.hookType}` : ''}
${sonicDNA.energyCurve ? `ENERGY CURVE: ${sonicDNA.energyCurve}` : ''}
CULTURAL ANCHORS: ${sonicDNA.culturalAnchors || 'Not specified'}
ANTI-PATTERNS: ${sonicDNA.antiPatterns || 'Not specified'}

CRITICAL TAG RULE: Never output the generic tag "Melodic French Rap" in sunoPrompt/sunoPrompts. Always use the specific sub-genre from sunoStyleTemplate above (e.g., "Melodic French Trap", "Dark Melodic Drill", "Street Confession Rap", "Pop Urbaine", etc.).

V5.5 METATAGS:
[Vocal Style: ${sonicDNA.sunoMetatags?.vocalStyle || 'Rap'}]
[Vocal Effect: ${sonicDNA.sunoMetatags?.vocalEffect || 'Reverb'}]
[Mood: ${sonicDNA.sunoMetatags?.mood || 'Dark'}]
[Energy: ${sonicDNA.sunoMetatags?.energy || 'Medium'}]
[Texture: ${sonicDNA.sunoMetatags?.texture || 'Crisp Digital'}]
[Instrument: ${sonicDNA.sunoMetatags?.instrument || '808 Bass'}]
` : `# GENRE FALLBACK: ${getGenreFallbackStyle(genre)}`;

  const artistSpecifics = getArtistSpecificInstructions(inspiredBy);

  let secondaryBlendingBlock = '';
  if (secondaryInspiredBy && secondaryInspiredBy !== 'none') {
    const sec = getArtistSonicDNA(secondaryInspiredBy);
    const secInstr = getArtistSpecificInstructions(secondaryInspiredBy);
    if (sec || secInstr) {
      secondaryBlendingBlock = `\n# SECONDARY BLENDING (V2/V3 ONLY):\n${secondaryInspiredBy}${sec ? `\nDNA: ${sec.sunoStyleTemplate}` : ''}${secInstr ? `\n${secInstr}` : ''}\nV1=100% "${inspiredBy}". V2=80/20. V3=70/30.\n`;
    }
  }

  const languageInfo = language === 'AUCUNE'
    ? "Language: Deduce from artist. For raï/Algerian artists: ALWAYS French-Arabic (darija) MIX. Tag [in french]/[in arabic]."
    : `Language: ${language}`;

  const modeInfo = mode === 'lyrics' ? `FOCUS: LYRICS ONLY. Full structure, deep mimicry of "${inspiredBy}".`
    : mode === 'style' ? "FOCUS: STYLE PROMPT ONLY. Optimize sunoPrompt and sunoPrompts[]."
    : "FULL GENERATION: Perfect synergy style + lyrics.";

  const prompt = `${modeInfo}

${artistSpecifics}
${sonicDNABlock}
${buildHarmonicBlock(sonicDNA?.harmonicProfileId, inspiredBy)}
${buildCursorsBlock(sonicDNA)}
${buildBanlistBlock(inspiredBy, secondaryInspiredBy)}
${secondaryBlendingBlock}
${buildVariantDivergenceConstraints(genre, inspiredBy, era)}
${artistIdentitySummary ? `\n# ARTIST IDENTITY:\n${artistIdentitySummary}\n` : ''}

Session:
- Genre: ${genre || 'DEDUCE FROM INSPIRATION'}
- Mood (V2/V3): ${mood || 'DEDUCE FROM SONIC DNA'}
- Theme: ${theme || 'IMPROVISE BASED ON ARTIST'}
- ${languageInfo}
- Inspired by: ${inspiredBy} | Era: ${era}
${performanceActive ? `- Energy: ${energy}/100 | Intensity: ${emotionalIntensity}/100` : ''}
- Instrumentation: ${instrumentation} | Production: ${productionStyle}
- ${bpmInfo}
${structure ? `- Structure: ${structure}` : ''}
${styleBlend ? `- Style Blending (V2/V3 only): ${styleBlend}` : ''}
${combinedNegativePrompt ? `- NEGATIVE PROMPT: ${combinedNegativePrompt}` : ''}
- Weirdness: ${weirdness}/100 | Style Influence: ${styleInfluence}/100
${advancedTags.length > 0 ? `- Advanced Tags: ${advancedTags.join(', ')}` : ''}
${productionStyle.toUpperCase().includes('HARDCORE') ? '\n★ HARDCORE/RAW: FORBIDDEN singing or melodic autotune. Pure RAP, dry, aggressive.' : ''}
${vocalTechnique !== 'none' ? `\n★ VOCAL TECHNIQUE: ${vocalTechnique}` : ''}
${productionFinish !== 'none' ? `\n★ PRODUCTION FINISH: ${productionFinish}` : ''}

████████████████████████████████████████
█ sunoPrompt/sunoPrompts[] = ENGLISH   █
█ V1 = PURE "${inspiredBy}" — 0% BLEND  █
████████████████████████████████████████

Respond ONLY in JSON (no backticks).`;

  const lightSchema = {
    type: Type.OBJECT,
    properties: {
      artistName: { type: Type.STRING },
      songTitle: { type: Type.STRING },
      sunoPrompt: { type: Type.STRING },
      sunoPrompts: { type: Type.ARRAY, items: { type: Type.STRING } },
      negativePrompt: { type: Type.STRING },
      weirdnessGuidance: { type: Type.STRING },
    },
    required: ["artistName", "songTitle", "sunoPrompt", "sunoPrompts", "negativePrompt"]
  };

  const fullSchema = {
    type: Type.OBJECT,
    properties: {
      artistName: { type: Type.STRING },
      songTitle: { type: Type.STRING },
      sunoPrompt: { type: Type.STRING },
      sunoPrompts: { type: Type.ARRAY, items: { type: Type.STRING } },
      negativePrompt: { type: Type.STRING },
      weirdnessGuidance: { type: Type.STRING },
      lyrics: { type: Type.STRING },
      structuredLyrics: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: { id: { type: Type.STRING }, type: { type: Type.STRING }, text: { type: Type.STRING }, prompt: { type: Type.STRING } },
          required: ["id", "type", "text", "prompt"]
        }
      },
      lipSyncExcerpt: { type: Type.STRING },
      quality: {
        type: Type.OBJECT,
        properties: {
          score: { type: Type.NUMBER }, coherence: { type: Type.NUMBER }, richness: { type: Type.NUMBER },
          clarity: { type: Type.NUMBER }, hook: { type: Type.NUMBER }, precision: { type: Type.NUMBER },
          message: { type: Type.STRING }
        }
      }
    },
    required: ["artistName", "songTitle", "sunoPrompt", "sunoPrompts", "negativePrompt", "structuredLyrics"]
  };

  const useFullSchema = mode === 'all' || mode === 'lyrics';

  return withRetry(async () => {
    const response = await callGeminiResilient({
      model: HEAVY_MODEL,
      contents: prompt,
      config: {
        temperature: 0.85,
        responseMimeType: "application/json",
        responseSchema: useFullSchema ? fullSchema : lightSchema,
        systemInstruction
      }
    });
    if (!response.text) throw new Error("Empty response from Gemini");
    const parsed = JSON.parse(response.text);

    // Enrich V1 if sonic DNA tokens missing
    if (sonicDNA?.sunoStyleTemplate && parsed.sunoPrompt) {
      const DIMS = ['bpm', 'key', 'vocal', 'bass', 'drum', 'hi-hat', 'synth', 'piano', 'reverb', 'stereo'];
      const count = (t: string) => DIMS.filter(m => t.toLowerCase().includes(m)).length;
      if (count(parsed.sunoPrompt) < count(sonicDNA.sunoStyleTemplate) / 2) {
        const missing = sonicDNA.sunoStyleTemplate.split(',').map(t => t.trim()).filter(t =>
          t.length > 2 && !parsed.sunoPrompt.toLowerCase().includes(t.toLowerCase().slice(0, 8))
        );
        if (missing.length > 0) {
          let enriched = parsed.sunoPrompt + ', ' + missing.join(', ');
          if (enriched.length > 600) enriched = enriched.slice(0, enriched.lastIndexOf(',', 600)) || enriched.slice(0, 600);
          parsed.sunoPrompt = enriched;
        }
      }
    }

    const core = parsed.sunoPrompt || (parsed.sunoPrompts?.[0]) || "";
    const variants = parsed.sunoPrompts || [];
    const dedup = [core];
    for (let i = 1; i < 3; i++) {
      let v = variants[i] && variants[i] !== core ? variants[i] : '';
      const vT = new Set(v.toLowerCase().split(/[\[\],\s]+/).filter((t: string) => t.length > 3));
      const cT = new Set(core.toLowerCase().split(/[\[\],\s]+/).filter((t: string) => t.length > 3));
      const sim = vT.size > 0 ? [...vT].filter(t => cT.has(t)).length / vT.size : 1;
      if (!v || sim > 0.55) {
        const base = v || core;
        v = mutateVariantWithinProfile(base, i as 1 | 2, sonicDNA?.harmonicProfileId);
      }
      dedup.push(v);
    }

    const collectLyrics = (p: any) =>
      (p.lyrics || '') + '\n' +
      (p.structuredLyrics || []).map((s: any) => s?.text || '').join('\n');

    let lyricsCorpus = collectLyrics(parsed);
    let gimmickLeaks = lintForGimmickLeaks(lyricsCorpus, inspiredBy, secondaryInspiredBy);
    let harmonicViolations = validateHarmonicCoherence(
      parsed.sunoPrompt || '',
      sonicDNA?.harmonicProfileId,
      inspiredBy
    );
    let healingPasses = 0;
    let lastRawJson = response.text || '';
    const MAX_HEALING_PASSES = 2;

    while (healingPasses < MAX_HEALING_PASSES) {
      const artistLeaks = gimmickLeaks.filter(l => l.artist !== 'GLOBAL');
      const needsLeakFix = artistLeaks.length > 0;
      const needsHarmonicFix = harmonicViolations.length > 0;
      if (!needsLeakFix && !needsHarmonicFix) break;

      try {
        healingPasses += 1;
        const fixParts: string[] = [];
        if (needsLeakFix) fixParts.push(buildLeakFixInstruction(artistLeaks));
        if (needsHarmonicFix) {
          fixParts.push(buildHarmonicFixInstruction(
            harmonicViolations,
            sonicDNA?.harmonicProfileId,
            inspiredBy
          ));
        }
        const directiveContext = [
          buildHarmonicBlock(sonicDNA?.harmonicProfileId, inspiredBy),
          buildCursorsBlock(sonicDNA),
          buildBanlistBlock(inspiredBy, secondaryInspiredBy),
        ].filter(Boolean).join('\n');
        const fixPrompt = `[SELF-HEALING PASS ${healingPasses}/${MAX_HEALING_PASSES}]\n${fixParts.join('\n\n')}\n\n${directiveContext}\n\nORIGINAL OUTPUT (JSON):\n${lastRawJson}\n\nReturn the corrected JSON with the SAME schema. Fix ALL issues above in a single response.`;
        const fixResp = await callGeminiResilient({
          model: HEAVY_MODEL,
          contents: fixPrompt,
          config: {
            temperature: 0.5,
            responseMimeType: "application/json",
            responseSchema: useFullSchema ? fullSchema : lightSchema,
            systemInstruction
          }
        });
        if (!fixResp.text) break;
        lastRawJson = fixResp.text;
        const fixed = JSON.parse(fixResp.text);
        if (fixed.lyrics) parsed.lyrics = fixed.lyrics;
        if (Array.isArray(fixed.structuredLyrics) && fixed.structuredLyrics.length > 0) {
          parsed.structuredLyrics = fixed.structuredLyrics;
        }
        if (fixed.sunoPrompt) parsed.sunoPrompt = fixed.sunoPrompt;
        lyricsCorpus = collectLyrics(parsed);
        gimmickLeaks = lintForGimmickLeaks(lyricsCorpus, inspiredBy, secondaryInspiredBy);
        harmonicViolations = validateHarmonicCoherence(
          parsed.sunoPrompt || '',
          sonicDNA?.harmonicProfileId,
          inspiredBy
        );
      } catch (e: any) {
        console.warn(`[GUARDRAIL] self-healing pass ${healingPasses} failed:`, e?.message || e);
        break;
      }
    }
    const retried = healingPasses > 0;

    let globalStripCount = 0;
    if (parsed.lyrics) {
      const r = stripGlobalBanlist(parsed.lyrics);
      parsed.lyrics = r.text;
      globalStripCount += r.count;
    }
    if (Array.isArray(parsed.structuredLyrics)) {
      parsed.structuredLyrics = parsed.structuredLyrics.map((s: any) => {
        if (s && typeof s.text === 'string') {
          const r = stripGlobalBanlist(s.text);
          globalStripCount += r.count;
          return { ...s, text: r.text };
        }
        return s;
      });
    }
    if (globalStripCount > 0) {
      console.warn(`[GUARDRAIL] hard-stripped ${globalStripCount} global-banlist tokens (mère/maman)`);
    }

    harmonicViolations = validateHarmonicCoherence(
      parsed.sunoPrompt || '',
      sonicDNA?.harmonicProfileId,
      inspiredBy
    );
    if (harmonicViolations.length > 0) {
      console.warn(`[GUARDRAIL] harmonic violations:`,
        harmonicViolations.map(v => `${v.kind}:${v.detail}`).join(' | '));
    }

    const finalLeaks = lintForGimmickLeaks(collectLyrics(parsed), inspiredBy, secondaryInspiredBy);

    const appliedCursors = sonicDNA ? {
      compositionMode:   sonicDNA.compositionMode,
      registerMode:      sonicDNA.registerMode,
      conceptualMode:    sonicDNA.conceptualMode,
      technicityMode:    sonicDNA.technicityMode,
      honorCode:         sonicDNA.honorCode,
      tempoGravity:      sonicDNA.tempoGravity,
      referenceDensity:  sonicDNA.referenceDensity,
      territorialAnchor: sonicDNA.territorialAnchor,
    } : null;

    return {
      ...parsed,
      sunoPrompts: dedup,
      structuredLyrics: parsed.structuredLyrics || [],
      _diagnostics: {
        gimmickLeaks: finalLeaks,
        harmonicViolations,
        globalStripCount,
        retried,
        healingPasses,
        appliedHarmonicProfile: sonicDNA?.harmonicProfileId || null,
        appliedCursors,
      }
    };
  }, 2).catch((err) => {
    const fallback = sonicDNA?.sunoStyleTemplate || getGenreFallbackStyle(genre);
    return {
      sunoPrompt: fallback, sunoPrompts: [fallback, fallback, fallback],
      lyrics: `Error: ${err?.message || "Unknown error"}`, structuredLyrics: [],
      quality: { score: 0, message: `[FALLBACK] ${err?.message || "Unknown error"}` }
    };
  });
}

export async function suggestArtistAndTitle(theme: string, genre: string, mood: string) {
  const prompt = `Generate a FICTIONAL artist name and song title. Theme: ${theme} | Genre: ${genre} | Mood: ${mood}. NEVER cite a real artist. JSON only.`;
  return withRetry(async () => {
    const response = await callGeminiResilient({
      model: FAST_MODEL,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: { artistName: { type: Type.STRING }, songTitle: { type: Type.STRING } },
          required: ["artistName", "songTitle"]
        }
      }
    });
    return JSON.parse(response.text);
  });
}

export async function getArtistVocalIdentity(artistName: string) {
  const _cacheKey = `vocal_id_${artistName.toLowerCase().replace(/\s+/g, '_')}`;
  try { const c = sessionStorage.getItem(_cacheKey); if (c) return JSON.parse(c); } catch (_) { /* SSR */ }
  const prompt = `Research vocal identity of "${artistName}": voice type, timbre, singing style (melodic or rap?), presence, accent, autotune, language (ex: FRENCH-ARABIC for raï artists), gender, WEIRDNESS 0-100, STYLE INFLUENCE 0-100. Use Google Search. JSON only:
  {"voiceType":"string","vocalTimbre":"string","singingStyle":"string","vocalPresence":"string","accent":"string","vocalReference":"string","language":"string","weirdness":number,"styleInfluence":number,"summary":"string"}`;
  return withRetry(async () => {
    const response = await callGeminiResilient({
      model: FAST_MODEL,
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
        systemInstruction: "Expert vocal analyst. Respond ONLY in valid JSON without markdown."
      }
    });
    const result = JSON.parse((response.text || "{}").replace(/```json\s*/g, "").replace(/```\s*/g, "").trim());
    try { sessionStorage.setItem(_cacheKey, JSON.stringify(result)); } catch (_) { /* ignore */ }
    return result;
  });
}

export async function rerollVerse(context: any, verse: Verse) {
  const artistDNA = getRelevantWritingDNA(context.inspiredBy || '', context.genre || '');
  const artistProfile = getArtistSpecificInstructions(context.inspiredBy || '');
  const sectionJob = verse.type === 'chorus'
    ? 'Chorus = SIMPLER than verse, unforgettable, ONE core emotional idea, sounds inevitable after first listen'
    : verse.type === 'bridge'
    ? 'Bridge = rupture OR confession OR altitude change — NEVER another verse'
    : verse.type === 'pre-chorus' || verse.type === 'prechorus'
    ? 'Pre-Chorus = tension, lift, emotional tilt — opens the chest before the chorus hits'
    : 'Verse = narrative, detail, world-building, private logic, subtext';

  const prompt = `Expert Suno V5.5 lyrics rewriter. Rewrite this section with higher quality.

ARTIST: ${context.inspiredBy} | GENRE: ${context.genre} | MOOD: ${context.mood} | LANGUAGE: ${context.language || 'French'}
SECTION TYPE: ${verse.type}
CURRENT TEXT:
${verse.text}

REWRITING RULES:
- SECTION JOB: ${sectionJob}
- Match the artist exact register, flow, vocabulary from the DNA below
- CONCRETE IMAGES over abstraction: physical world (objects, textures, places, receipts, corridors, wet asphalt, cheap plastic)
- ANTI-CLICHE: reject any line that could belong to 50 other songs. A rough true line beats a beautiful false line.
- HOOK (if chorus): short enough to memorize, open vowels, ONE emotional idea, sounds inevitable
- Street register where appropriate: verlan + argot for trap/drill, NEVER academic French for street genres
- Use V5.5 metatags [Vocal Style:],[Mood:],[Energy:] on SEPARATE lines BEFORE the rewritten lyrics
- FORBIDDEN: real artist names

ARTIST WRITING DNA:
${artistDNA}
${artistProfile}

Return ONLY the rewritten section with metatags. No explanations. No markdown.`;
  return withRetry(async () => {
    const response = await callGeminiResilient({
      model: FAST_MODEL,
      contents: prompt,
      config: { systemInstruction: "Elite Suno V5.5 lyrics rewriter. Return only the rewritten section with V5.5 metatags. No markdown, no explanation, no preamble." }
    });
    return response.text || verse.text;
  });
}
