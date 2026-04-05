import { Verse } from "../types";
import { getArtistSpecificInstructions, getRelevantWritingDNA, isArtistMelodic } from './artist-profiles';
import { getArtistSonicDNA, SonicDNA } from './sonic-dna';

const Type = {
  OBJECT: "OBJECT",
  STRING: "STRING",
  NUMBER: "NUMBER",
  ARRAY: "ARRAY",
  BOOLEAN: "BOOLEAN",
};

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
        e?.message?.includes('504') || e?.status === 504 || e?.error?.code === 504 ||
        e?.error?.status === 'RESOURCE_EXHAUSTED' || e?.message?.includes('high demand');
      if (isRetryable && i < maxRetries) {
        const delay = (e?.status === 429 || e?.error?.code === 429) ? 5000 * (i + 1) : 1000 * (i + 1);
        console.warn(`Gemini retry ${i + 1}/${maxRetries} in ${delay}ms`, e?.message);
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
  try {
    parsed = JSON.parse(rawText);
  } catch {
    const err: any = new Error(`Gemini proxy non-JSON (HTTP ${response.status}): ${rawText.slice(0, 120)}`);
    err.status = response.status;
    throw err;
  }
  if (!response.ok) {
    const err: any = new Error(parsed.error || "Gemini API request failed");
    err.status = response.status;
    err.message = parsed.error || `HTTP ${response.status}`;
    throw err;
  }
  return parsed;
}

export async function analyzeAudio(base64Data: string, mimeType: string) {
  const systemInstruction = "Tu es un ingénieur du son expert. Analyse audio précise pour Suno AI. Sois extrêmement précis sur le BPM et le genre.";
  const prompt = `Analyse ce fichier audio (MIME: ${mimeType}) avec la plus grande précision.
  Identifie: BPM exact, Genre/sous-genres, Mood, Structure, Artiste si reconnu, Energy 0-100, Vocal Style.
  Réponds UNIQUEMENT en JSON:
  {"bpm":number,"genre":"string","mood":"string","structure":"string","artistInfo":"string","energy":number,"vocalStyle":"string"}`;
  return withRetry(async () => {
    const response = await callGemini({
      model: "gemini-2.0-flash",
      contents: [{ parts: [{ inlineData: { data: base64Data, mimeType } }, { text: prompt }] }],
      config: { systemInstruction, tools: [{ googleSearch: {} }] }
    });
    try {
      return JSON.parse((response.text || "{}").replace(/```json\s*/g, "").replace(/```\s*/g, "").trim());
    } catch { return null; }
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

function getGrainTokens(mood: string, texture: string, sonicDNA?: SonicDNA | null): string {
  if (sonicDNA?.productionFingerprint) {
    const fp = sonicDNA.productionFingerprint.toLowerCase();
    if (fp.includes('crisp') || fp.includes('digital') || fp.includes('clean')) return 'Crisp Digital, Punchy Transients';
    if (fp.includes('warm') || fp.includes('analog') || fp.includes('tape')) return 'Warm Analog Saturation, Vintage Compression';
    if (fp.includes('lo-fi') || fp.includes('vinyl')) return 'Lo-fi Grit, Vinyl Hiss';
    if (fp.includes('industrial') || fp.includes('dark')) return 'Industrial Dark, Metallic Edge';
  }
  const l = (texture + mood).toLowerCase();
  if (l.includes('bright') || l.includes('uplifting')) return 'Bright Digital, High-End Clarity';
  if (l.includes('dark')) return 'Dark Grunge, Lo-fi Dirt';
  if (l.includes('warm')) return 'Warm Analog, Tape Saturation';
  return 'Balanced Texture, Contemporary Grain';
}

function getSpaceTokens(mood: string, production: string, sonicDNA?: SonicDNA | null): string {
  if (sonicDNA?.culturalAnchors) {
    const ca = sonicDNA.culturalAnchors.toLowerCase();
    if (ca.includes('intimate') || ca.includes('bedroom')) return 'Intimate Close-Mic, Minimal Reverb';
    if (ca.includes('cinematic') || ca.includes('wide')) return 'Cinematic Wide Space, Lush Reverb';
  }
  const lp = (production + mood).toLowerCase();
  if (lp.includes('minimal') || lp.includes('intimate')) return 'Intimate Close-Mic, Dry Delivery';
  if (lp.includes('cinematic')) return 'Cinematic Wide Space, Lush Reverb';
  if (lp.includes('ethereal') || lp.includes('dreamy')) return 'Ethereal Spacious Reverb, Floating Feel';
  return 'Balanced Space, Professional Depth';
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
    DRILL: ["Dark cinematic orchestral strings","Industrial electronic textures","Cloud rap ambient pads","Grime UK bassline","Latin percussion undertones"],
    TRAP_FR: ["Boom bap jazz samples","Afrobeats percussion","Cloud rap ambient synths","Raï oriental melodies","Electro-funk synthesizers"],
    TRAP: ["Lo-fi indie guitar textures","Synthwave retro 80s pads","R&B soul chords","Ambient electronic drones","Latin trap reggaeton bounce"],
    RAP_FR: ["Jazz-funk live instruments","Chanson française piano","Electronic minimal techno","Afro-Caribbean percussion","Rock alternatif guitars"],
    RAP: ["Soul-funk vintage production","Jazz samples and saxophone","Psychedelic rock guitars","Electronic glitch IDM","Gospel choir harmonies"],
    RNB: ["Neo-soul electronic textures","Bossa nova acoustic guitar","Future bass synth drops","Jazz piano trio","Afrobeats danceable percussion"],
    POP: ["Synth-wave retro 80s","Tropical house percussion","Indie folk acoustic layers","Electro-pop minimal beats"],
    HOUSE: ["Deep house melodic pianos","Afro house organic percussion","Tech house minimal acid","Disco strings and funk guitar"],
    AFRO: ["Caribbean dancehall bounce","Amapiano deep bass","R&B smooth production","Electronic house groove"],
    CLOUD: ["Shoegaze ambient reverb","Lo-fi jazz samples","Post-rock crescendos","Dream pop shimmering synths"],
    BOOMBAP: ["Jazz live instrumentation","Soul vocal chops","Funk breakbeats","Classical piano samples"]
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
  else if (g.includes('BOOM') || g.includes('BAP')) fusionGenre = pick(fusionPools.BOOMBAP);
  else fusionGenre = pick(["Electronic ambient textures","Jazz-influenced progressions","Afrobeats rhythmic percussion","Synthwave retro production"]);
  const eraShifts: Record<string, string> = { '2020s': '2010s', '2010s': '2000s', '2000s': '1990s', '1990s': '2000s', '1980s': '1990s' };
  const adjacentEra = eraShifts[era] || '2010s';
  return `
  VARIANT RULES — ABSOLUTE:
  V1 = Pure "${inspiredBy}" signature. Use ONLY Sonic DNA template. BPM central, era ${era}. ZERO blend.
  V2 = Differ from V1: ±10-20 BPM + opposite grain/texture + era ${adjacentEra}. Max 20% blend.
  V3 = Differ from V1+V2: integrate "${fusionGenre}" (up to 40%) + at least 2 different instruments + opposite reverb. Core vocal preserved.
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
  // ─────────────────────────────────────────
  // MODEL SELECTION: 2.0-flash for style-only (fast), 2.5-flash for full/lyrics
  // ─────────────────────────────────────────
  const useHeavyModel = mode === 'all' || mode === 'lyrics';
  const selectedModel = useHeavyModel ? "gemini-2.5-flash" : "gemini-2.0-flash";

  const bpmInfo = manualBpm ? `- BPM imposé: ${manualBpm}` : `- BPM: Automatique (adapté à l'énergie ${energy})`;
  const structureInfo = structure ? `- Structure: ${structure}` : "";
  const styleBlendInfo = styleBlend ? `- Style Blending (V2/V3 only): ${styleBlend}` : "";
  const secondaryArtistInfo = secondaryInspiredBy !== 'none' ? `- Secondary Artist: ${secondaryInspiredBy}` : "";
  const advancedTagsInfo = advancedTags.length > 0 ? `- Advanced DNA Tags: ${advancedTags.join(', ')}` : "";
  const genreNegativePrompt = getGenreSpecificNegativePrompt(genre, inspiredBy);
  const sonicDNA = getArtistSonicDNA(inspiredBy);
  const artistExcludeStyles = sonicDNA?.sunoExcludeStyles || '';
  const combinedNegativePrompt = [artistExcludeStyles || genreNegativePrompt, customNegativePrompt].filter(Boolean).join(', ');
  const negativePromptInfo = combinedNegativePrompt ? `- NEGATIVE PROMPT: ${combinedNegativePrompt}` : "";
  const artistIdentityInfo = artistIdentitySummary ? `\n# ARTIST IDENTITY:\n${artistIdentitySummary}\n` : "";
  const performanceInfo = performanceActive ? `\n- Energy: ${energy}/100\n- Emotional Intensity: ${emotionalIntensity}/100` : "";
  const melodicArtist = isArtistMelodic(inspiredBy);

  const vocalDeliveryRule = melodicArtist
    ? `★ VOCAL: "${inspiredBy}" is MELODIC. Singing + autotune IS the signature. FORBIDDEN to force dry technical rap.`
    : `★ VOCAL: For RAP/TRAP, prioritize rhythmic percussive flow over systematic melodic singing. Vary [Rhythmic flow], [Melodic rap], [Aggressive chant], [Spoken word].`;

  const vocoderRule = melodicArtist
    ? `★ AUTOTUNE: For this melodic artist, autotune is an ESSENTIAL CREATIVE TOOL per "${inspiredBy}"'s signature.`
    : `★ NO SYSTEMATIC SINGING: If artist is a "lyricist"/"technician", FORBIDDEN to use melodic autotune. Flow must be dry, articulate, pure rap.`;

  const variantDivergenceBlock = buildVariantDivergenceConstraints(genre, inspiredBy, era);

  // ─────────────────────────────────────────
  // COMPRESSED SYSTEM INSTRUCTION (-40% tokens vs previous)
  // ─────────────────────────────────────────
  const systemInstruction = `You are a world-class Suno AI V5.5 prompt engineer and multilingual lyricist.

ABSOLUTE RULES:
★ LANGUAGE RULE: sunoPrompt and sunoPrompts[] MUST ALWAYS be in ENGLISH. NEVER French, Arabic, or other. Lyrics use the artist's language.
★ STYLE PROMPT: 500-600 chars. 10 DIMENSIONS: [STYLE] + [BPM+Key] + [GRAIN] + [SPACE] + [INSTRUMENTS] + [VOCAL TEXTURE] + [DYNAMIC] + [MIX] + [CULTURAL] + [ERA]. Texture > Genre naming. ALWAYS ENGLISH.
★ LYRICS: Full structure. [ ] for structure tags, ( ) for ad-libs. Suno V5.5: [Pre-Chorus], [Post-Chorus], [Bridge], [Interlude], [Solo:Instrument], [Break], [Build], [Drop].
★ LANGUAGE REGISTER: Adapt to intensity (${emotionalIntensity}/100) + energy (${energy}/100). Low = poetic. High = raw slang.
${vocalDeliveryRule}
${vocoderRule}
★ ANTI-GENERIC: BANNED: "Trap" or "Pop" alone. Use precise sonic textures.
★ ZERO COMMERCIAL: NEVER cite real artist names, brands, labels, album/track titles, city names linked to artists.
★ V5.5 METATAGS: Use [Vocal Style:], [Vocal Effect:], [Mood:], [Energy:], [Texture:], [Instrument:] on SEPARATE lines BEFORE each section. CAPS = shouted, (text) = backing, ~word~ = melisma, *word* = emphasis.
★ FRENCH PHONETICS: Prefer open vowels endings (-é,-a,-ou,-i,-o). Avoid -ance,-ence,-ment,-tion. Write contractions as heard (j'veux, t'as).
★ JSON only. No markdown fences.

WRITING DNA:
${getRelevantWritingDNA(inspiredBy, genre)}`;

  const productionInfo = productionStyle.toUpperCase().includes('HARDCORE')
    ? "\n# PRODUCTION (HARDCORE/RAW): FORBIDDEN to sing or use melodic autotune. Pure RAP, dry, aggressive, minimalist production.\n"
    : "";
  const vocalTechniqueSpecifics = vocalTechnique !== 'none'
    ? `\n# VOCAL TECHNIQUE: ${vocalTechnique}. Apply dominantly throughout.\n` : "";
  const productionFinishSpecifics = productionFinish !== 'none'
    ? `\n# PRODUCTION FINISH: ${productionFinish}.\n` : "";

  const sonicDNABlock = sonicDNA ? `
# SONIC DNA — V1 FOUNDATION (EXCLUSIVE):
V1 MUST enrich this template to 500-600 chars. FORBIDDEN: adding external genres.

## STYLE CORE:
${sonicDNA.sunoStyleTemplate}
BPM: ${sonicDNA.sunoBpmRange} | KEY: ${sonicDNA.sunoKey}
VOCAL TAGS: ${sonicDNA.sunoVocalTags.join(', ')}
WEIRDNESS: ${sonicDNA.sunoWeirdness}/100 | STYLE INFLUENCE: ${sonicDNA.sunoStyleInfluence}/100

## VOCAL ENGINE:
${sonicDNA.vocalDNA || 'Not specified'}

## FLOW ENGINE:
${sonicDNA.flowPattern || 'Not specified'}

## PRODUCTION ENGINE:
${sonicDNA.productionFingerprint || 'Not specified'}
${sonicDNA.structureDNA ? `\n## STRUCTURE: ${sonicDNA.structureDNA}` : ''}
${sonicDNA.hookType ? `\n## HOOK: ${sonicDNA.hookType}` : ''}
${sonicDNA.energyCurve ? `\n## ENERGY CURVE: ${sonicDNA.energyCurve}` : ''}

## CULTURAL ANCHORS: ${sonicDNA.culturalAnchors || 'Not specified'}
## ANTI-PATTERNS: ${sonicDNA.antiPatterns || 'Not specified'}

## V5.5 METATAGS:
[Vocal Style: ${sonicDNA.sunoMetatags?.vocalStyle || 'Rap'}]
[Vocal Effect: ${sonicDNA.sunoMetatags?.vocalEffect || 'Reverb'}]
[Mood: ${sonicDNA.sunoMetatags?.mood || 'Dark'}]
[Energy: ${sonicDNA.sunoMetatags?.energy || 'Medium'}]
[Texture: ${sonicDNA.sunoMetatags?.texture || 'Crisp Digital'}]
[Instrument: ${sonicDNA.sunoMetatags?.instrument || '808 Bass'}]
` : '';

  const artistSpecifics = getArtistSpecificInstructions(inspiredBy);
  const genreFallbackBlock = !sonicDNA ? `\n# GENRE FALLBACK:\n${getGenreFallbackStyle(genre)}\n` : '';

  let secondaryBlendingBlock = '';
  if (secondaryInspiredBy && secondaryInspiredBy !== 'none') {
    const secondarySonicDNA = getArtistSonicDNA(secondaryInspiredBy);
    const secondaryInstructions = getArtistSpecificInstructions(secondaryInspiredBy);
    if (secondarySonicDNA || secondaryInstructions) {
      secondaryBlendingBlock = `\n# SECONDARY ARTIST BLENDING (V2/V3 ONLY):\n${secondaryInspiredBy}${secondarySonicDNA ? `\nSecondary DNA: ${secondarySonicDNA.sunoStyleTemplate}` : ''}${secondaryInstructions ? `\n${secondaryInstructions}` : ''}\nRULE: V1=100% "${inspiredBy}". V2=80/20. V3=70/30.\n`;
    }
  }

  const languageInfo = language === 'AUCUNE'
    ? "Language: Deduce from artist style. For raï/Algerian artists: ALWAYS French-Arabic (darija) MIX. Tag switches [in french] / [in arabic]."
    : `Language: ${language}`;

  const modeInfo = mode === 'lyrics'
    ? `FOCUS: LYRICS ONLY. Full structure, deep mimicry of "${inspiredBy}" writing style.`
    : mode === 'style'
    ? "FOCUS: STYLE PROMPT ONLY. Optimize sunoPrompt and sunoPrompts[]. Lyrics optional/minimal."
    : "FULL GENERATION: Perfect synergy style + lyrics.";

  const prompt = `Generate musical direction for artist "${artist}".

${modeInfo}
${productionInfo}${vocalTechniqueSpecifics}${productionFinishSpecifics}${secondaryArtistInfo}${advancedTagsInfo}

${artistSpecifics}
${sonicDNABlock}
${genreFallbackBlock}
${secondaryBlendingBlock}
${variantDivergenceBlock}
${artistIdentityInfo}

Session:
- Genre: ${genre || 'DEDUCE FROM INSPIRATION'}
- Mood (V2/V3 only): ${mood || 'DEDUCE FROM SONIC DNA'}
- Theme: ${theme || 'IMPROVISE BASED ON ARTIST'}
- ${languageInfo}
- Inspired by: ${inspiredBy}
- Era: ${era}
${performanceInfo}
- Instrumentation: ${instrumentation}
- Production: ${productionStyle}
- ${bpmInfo}
${structureInfo}
${styleBlendInfo}
${negativePromptInfo}
- Weirdness: ${weirdness}/100 | Style Influence: ${styleInfluence}/100

██████████████████████████████████████████
██ sunoPrompt / sunoPrompts[] = ENGLISH ONLY ██
██ V1 = PURE "${inspiredBy}" DNA — 0% BLEND  ██
██████████████████████████████████████████

Respond ONLY in JSON (no backticks).`;

  // ─────────────────────────────────────────
  // SCHEMA SELECTION: light (6 fields) for style mode, full for all/lyrics
  // ─────────────────────────────────────────
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
          properties: {
            id: { type: Type.STRING },
            type: { type: Type.STRING },
            text: { type: Type.STRING },
            prompt: { type: Type.STRING }
          },
          required: ["id", "type", "text", "prompt"]
        }
      },
      lipSyncExcerpt: { type: Type.STRING },
      quality: {
        type: Type.OBJECT,
        properties: {
          score: { type: Type.NUMBER },
          coherence: { type: Type.NUMBER },
          richness: { type: Type.NUMBER },
          clarity: { type: Type.NUMBER },
          hook: { type: Type.NUMBER },
          precision: { type: Type.NUMBER },
          message: { type: Type.STRING }
        }
      }
    },
    required: ["artistName", "songTitle", "sunoPrompt", "structuredLyrics"]
  };

  return withRetry(async () => {
    const response = await callGemini({
      model: selectedModel,
      contents: prompt,
      config: {
        temperature: 0.85,
        responseMimeType: "application/json",
        responseSchema: useHeavyModel ? fullSchema : lightSchema,
        systemInstruction
      }
    });

    if (!response.text) throw new Error("Empty response from Gemini");
    const parsed = JSON.parse(response.text);

    // Enrich V1 if sonic DNA tokens missing
    if (sonicDNA?.sunoStyleTemplate && parsed.sunoPrompt) {
      const DIMENSION_MARKERS = ['bpm', 'key', 'vocal', 'bass', 'drum', 'hi-hat', 'synth', 'piano', 'reverb', 'stereo'];
      const countDims = (t: string) => DIMENSION_MARKERS.filter(m => t.toLowerCase().includes(m)).length;
      const v1Dims = countDims(parsed.sunoPrompt);
      if (v1Dims < countDims(sonicDNA.sunoStyleTemplate) / 2) {
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

    // Deduplicate variants
    const coreVariant = parsed.sunoPrompt || (parsed.sunoPrompts?.[0]) || "";
    const variants = parsed.sunoPrompts || [];
    const deduplicated = [coreVariant];
    for (let i = 1; i < 3; i++) {
      let v = variants[i] && variants[i] !== coreVariant ? variants[i] : '';
      const vTokens = new Set(v.toLowerCase().split(/[\[\],\s]+/).filter((t: string) => t.length > 3));
      const coreTokens = new Set(coreVariant.toLowerCase().split(/[\[\],\s]+/).filter((t: string) => t.length > 3));
      const shared = [...vTokens].filter(t => coreTokens.has(t)).length;
      const similarity = vTokens.size > 0 ? shared / vTokens.size : 1;
      if (!v || similarity > 0.80) {
        let mod = v || coreVariant;
        const bpmMatch = coreVariant.match(/(\d{2,3})-(\d{2,3})\s*BPM/i);
        if (bpmMatch) {
          const mid = (parseInt(bpmMatch[1]) + parseInt(bpmMatch[2])) / 2;
          const shift = i === 1 ? -15 : 15;
          mod = mod.replace(/(\d{2,3})-(\d{2,3})\s*BPM/i, `${Math.round(Math.max(60, mid + shift - 10))}-${Math.round(Math.min(200, mid + shift + 10))} BPM`);
        }
        if (i === 1 && mod.includes('Minor')) mod = mod.replace(/Minor/g, 'Major');
        else if (mod.includes('Major')) mod = mod.replace(/Major/g, 'Minor');
        if (!mod.includes('[DIVERGENCE]')) mod = `[DIVERGENCE V${i + 1}] ` + mod;
        v = mod;
      }
      deduplicated.push(v);
    }

    // Ensure negativePrompt is always present — fallback to artist excludeStyles or genre negative
    const finalNegativePrompt = parsed.negativePrompt || combinedNegativePrompt || 'generic, low quality, amateur, distorted, noise';

    return {
      ...parsed,
      negativePrompt: finalNegativePrompt,
      sunoPrompts: deduplicated,
      structuredLyrics: parsed.structuredLyrics || []
    };
  }, 2).catch((lastError) => {
    const fallback = sonicDNA?.sunoStyleTemplate || getGenreFallbackStyle(genre);
    return {
      sunoPrompt: fallback,
      sunoPrompts: [fallback, fallback, fallback],
      negativePrompt: sonicDNA?.sunoExcludeStyles || 'generic, low quality, amateur, distorted, noise',
      lyrics: `Error: ${lastError?.message || "Unknown error"}`,
      structuredLyrics: [],
      quality: { score: 0, message: `[FALLBACK] ${lastError?.message || "Unknown error"}` }
    };
  });
}

export async function suggestArtistAndTitle(theme: string, genre: string, mood: string) {
  const prompt = `Generate a FICTIONAL artist name and song title based on:
  Theme: ${theme} | Genre: ${genre} | Mood: ${mood}
  Rules: NEVER cite a real artist. Name must match genre vibe. Respond ONLY in JSON.`;
  return withRetry(async () => {
    const response = await callGemini({
      model: "gemini-2.0-flash",
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
  try {
    const _cached = sessionStorage.getItem(_cacheKey);
    if (_cached) return JSON.parse(_cached);
  } catch (_) { /* SSR */ }
  const prompt = `Research vocal identity of "${artistName}":
  - Voice type, timbre, singing style (melodic singing or technical rap?)
  - Vocal presence, accent, autotune usage
  - Primary language + mix if multiple (ex: FRENCH-ARABIC for raï artists)
  - Gender: male or female
  - WEIRDNESS 0-100, STYLE INFLUENCE 0-100
  Use Google Search. Respond ONLY in JSON without backticks:
  {"voiceType":"string","vocalTimbre":"string","singingStyle":"string","vocalPresence":"string","accent":"string","vocalReference":"string","language":"string","weirdness":number,"styleInfluence":number,"summary":"string"}`;
  return withRetry(async () => {
    const response = await callGemini({
      model: "gemini-2.0-flash",
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
  const prompt = `Expert lyrics writer for Suno AI V5.5 / COLORSxSTUDIOS session.
  Genre: ${context.genre} | Mood: ${context.mood} | Theme: ${context.theme} | Inspired by: ${context.inspiredBy}
  Regenerate section: Type=${verse.type} | Prompt=${verse.prompt} | Current text: ${verse.text}
  Instructions: Keep global style coherence. Use V5.5 structure tags + metatags [Vocal Style:],[Mood:],[Energy:] on separate lines.
  FORBIDDEN: cite real artist names or brands. Respond ONLY with the new lyrics text.`;
  return withRetry(async () => {
    const response = await callGemini({
      model: "gemini-2.0-flash",
      contents: prompt,
      config: { systemInstruction: "Expert musical lyrics writer. Respond only with regenerated lyrics with V5.5 metatags." }
    });
    return response.text || verse.text;
  });
}
