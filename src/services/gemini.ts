import { Verse } from "../types";
import { getArtistSpecificInstructions, getRelevantWritingDNA, isArtistMelodic } from './artist-profiles';
import { getArtistSonicDNA, SonicDNA } from './sonic-dna';
import { buildBanlistBlock, lintForGimmickLeaks } from './gimmick-banlist';
import { buildHarmonicBlock } from './harmonic-profiles';

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

async function withRetry<T>(fn: () => Promise<T>, maxRetries: number = 2): Promise<T> {
  let lastError: any;
  for (let i = 0; i <= maxRetries; i++) {
    try {
      return await fn();
    } catch (e: any) {
      lastError = e;
      const isRetryable =
        e?.message?.includes('503') || e?.status === 503 || e?.error?.code === 503 ||
        e?.message?.includes('429') || e?.status === 429 || e?.error?.code === 429 ||
        e?.error?.status === 'RESOURCE_EXHAUSTED' || e?.message?.includes('high demand');
      if (isRetryable && i < maxRetries) {
        const delay = (e?.status === 429 || e?.error?.code === 429) ? 5000 * (i + 1) : 1000 * (i + 1);
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

export async function analyzeAudio(base64Data: string, mimeType: string) {
  const prompt = `Analyse ce fichier audio (MIME: ${mimeType}). Identifie: BPM exact, Genre/sous-genres, Mood, Structure, Artiste si reconnu, Energy 0-100, Vocal Style.
  Réponds UNIQUEMENT en JSON: {"bpm":number,"genre":"string","mood":"string","structure":"string","artistInfo":"string","energy":number,"vocalStyle":"string"}`;
  return withRetry(async () => {
    const response = await callGemini({
      model: FAST_MODEL,
      contents: [{ parts: [{ inlineData: { data: base64Data, mimeType } }, { text: prompt }] }],
      config: {
        systemInstruction: "Expert audio engineer. Precise analysis for Suno AI. Be exact on BPM and genre.",
        tools: [{ googleSearch: {} }]
      }
    });
    try { return JSON.parse((response.text || "{}").replace(/```json\s*/g, "").replace(/```\s*/g, "").trim()); }
    catch { return null; }
  });
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
  if (g.includes('RAÏ')) return 'Raï fusion, oriental instruments, emotional vocals, Arabic scales, mixed French-Arabic, 100-120 BPM';
  if (g.includes('CLOUD')) return 'Cloud rap, ethereal synths, spacious reverb, dreamy vibes, introspective delivery, 80-100 BPM';
  return 'Contemporary urban production, dynamic 808s, atmospheric layers, street credibility, modern textures, 100-120 BPM';
}

function buildVariantDivergenceConstraints(genre: string, inspiredBy: string, era: string): string {
  const g = genre.toUpperCase();
  const pick = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];
  const fusionPools: Record<string, string[]> = {
    DRILL: ["Dark cinematic orchestral strings","Industrial electronic textures","Cloud rap ambient pads","Grime UK bassline"],
    TRAP_FR: ["Boom bap jazz samples","Afrobeats percussion","Cloud rap ambient synths","Raï oriental melodies"],
    TRAP: ["Lo-fi indie guitar textures","Synthwave retro 80s pads","R&B soul chords","Latin trap reggaeton bounce"],
    RAP_FR: ["Jazz-funk live instruments","Electronic minimal techno","Afro-Caribbean percussion"],
    RAP: ["Soul-funk vintage production","Jazz samples and saxophone","Gospel choir harmonies"],
    RNB: ["Neo-soul electronic textures","Jazz piano trio","Afrobeats danceable percussion"],
    POP: ["Synth-wave retro 80s","Tropical house percussion","Indie folk acoustic layers"],
    HOUSE: ["Deep house melodic pianos","Afro house organic percussion","Disco strings and funk guitar"],
    AFRO: ["Caribbean dancehall bounce","Amapiano deep bass","R&B smooth production"],
    CLOUD: ["Shoegaze ambient reverb","Lo-fi jazz samples","Dream pop shimmering synths"]
  };
  let fusionGenre: string;
  if (g.includes('DRILL')) fusionGenre = pick(fusionPools.DRILL);
  else if (g.includes('TRAP') && g.includes('FR')) fusionGenre = pick(fusionPools.TRAP_FR);
  else if (g.includes('TRAP')) fusionGenre = pick(fusionPools.TRAP);
  else if (g.includes('RAP') && g.includes('FR')) fusionGenre = pick(fusionPools.RAP_FR);
  else if (g.includes('RAP')) fusionGenre = pick(fusionPools.RAP);
  else if (g.includes('R&B') || g.includes('SOUL')) fusionGenre = pick(fusionPools.RNB);
  else if (g.includes('POP')) fusionGenre = pick(fusionPools.POP);
  else if (g.includes('HOUSE') || g.includes('ELECTRO')) fusionGenre = pick(fusionPools.HOUSE);
  else if (g.includes('AFRO')) fusionGenre = pick(fusionPools.AFRO);
  else if (g.includes('CLOUD')) fusionGenre = pick(fusionPools.CLOUD);
  else fusionGenre = pick(["Electronic ambient textures","Jazz-influenced progressions","Afrobeats rhythmic percussion"]);
  const eraShifts: Record<string, string> = { '2020s': '2010s', '2010s': '2000s', '2000s': '1990s', '1990s': '2000s' };
  const adjacentEra = eraShifts[era] || '2010s';
  return `
  VARIANT RULES — ABSOLUTE:
  V1 = Pure "${inspiredBy}" signature. Use ONLY Sonic DNA. Era ${era}. ZERO blend.
  V2 = Differ from V1: ±10-20 BPM + opposite grain + era ${adjacentEra}. Max 20% blend.
  V3 = Differ from V1+V2: integrate "${fusionGenre}" (up to 40%) + 2 different instruments + opposite reverb.
  VALIDATION: If 2 variants share >50% tokens → regenerate.
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
  mode: 'all' | 'lyrics' | 'style' = 'all'
) {
  const bpmInfo = manualBpm ? `- BPM imposé: ${manualBpm}` : `- BPM: Auto (energy ${energy})`;
  const sonicDNA = getArtistSonicDNA(inspiredBy);
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
★ LYRICS: Full structure. [ ] tags, ( ) ad-libs. V5.5: [Pre-Chorus],[Post-Chorus],[Bridge],[Interlude],[Solo:Instrument],[Break],[Build],[Drop].
★ REGISTER: Adapt to intensity (${emotionalIntensity}/100) + energy (${energy}/100).
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
    const response = await callGemini({
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

    // Deduplicate V1/V2/V3
    const core = parsed.sunoPrompt || (parsed.sunoPrompts?.[0]) || "";
    const variants = parsed.sunoPrompts || [];
    const dedup = [core];
    for (let i = 1; i < 3; i++) {
      let v = variants[i] && variants[i] !== core ? variants[i] : '';
      const vT = new Set(v.toLowerCase().split(/[\[\],\s]+/).filter((t: string) => t.length > 3));
      const cT = new Set(core.toLowerCase().split(/[\[\],\s]+/).filter((t: string) => t.length > 3));
      const sim = vT.size > 0 ? [...vT].filter(t => cT.has(t)).length / vT.size : 1;
      if (!v || sim > 0.80) {
        let mod = v || core;
        const bpmM = core.match(/(\d{2,3})-(\d{2,3})\s*BPM/i);
        if (bpmM) {
          const mid = (parseInt(bpmM[1]) + parseInt(bpmM[2])) / 2, shift = i === 1 ? -15 : 15;
          mod = mod.replace(/(\d{2,3})-(\d{2,3})\s*BPM/i, `${Math.round(Math.max(60, mid+shift-10))}-${Math.round(Math.min(200, mid+shift+10))} BPM`);
        }
        if (i === 1 && mod.includes('Minor')) mod = mod.replace(/Minor/g, 'Major');
        else if (mod.includes('Major')) mod = mod.replace(/Major/g, 'Minor');
        if (!mod.includes('[DIVERGENCE]')) mod = `[DIVERGENCE V${i+1}] ` + mod;
        v = mod;
      }
      dedup.push(v);
    }
    // Gimmick leak diagnostic (does not block, just flags)
    const lyricsCorpus = (parsed.lyrics || '') + '\n' +
      (parsed.structuredLyrics || []).map((s: any) => s?.text || '').join('\n');
    const gimmickLeaks = lintForGimmickLeaks(lyricsCorpus, inspiredBy, secondaryInspiredBy);
    if (gimmickLeaks.length > 0) {
      console.warn(`[GIMMICK LEAK] ${gimmickLeaks.length} forbidden tokens:`,
        gimmickLeaks.map(l => `${l.artist}:${l.token}`).join(', '));
    }
    return { ...parsed, sunoPrompts: dedup, structuredLyrics: parsed.structuredLyrics || [], _gimmickLeaks: gimmickLeaks };
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
    const response = await callGemini({
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
    const response = await callGemini({
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
  const prompt = `Expert Suno V5.5 lyrics writer. Genre: ${context.genre} | Mood: ${context.mood} | Inspired by: ${context.inspiredBy}
  Regenerate section: Type=${verse.type} | Current: ${verse.text}
  Keep style coherence. Use V5.5 metatags [Vocal Style:],[Mood:],[Energy:] on separate lines. FORBIDDEN: real artist names. Only the new lyrics.`;
  return withRetry(async () => {
    const response = await callGemini({
      model: FAST_MODEL,
      contents: prompt,
      config: { systemInstruction: "Suno V5.5 lyrics writer. New lyrics only, with metatags." }
    });
    return response.text || verse.text;
  });
}
