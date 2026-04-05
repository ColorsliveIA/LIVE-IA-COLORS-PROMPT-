import { Verse } from "../types";
import { getArtistSpecificInstructions, getRelevantWritingDNA, isArtistMelodic } from './artist-profiles';
import { getArtistSonicDNA, SonicDNA } from './sonic-dna';

// Type enum replacement - these are used only in responseSchema
const Type = {
  OBJECT: "OBJECT",
  STRING: "STRING",
  NUMBER: "NUMBER",
  ARRAY: "ARRAY",
  BOOLEAN: "BOOLEAN",
};

async function withRetry<T>(fn: () => Promise<T>, maxRetries: number = 3): Promise<T> {
  let lastError: any;
  for (let i = 0; i <= maxRetries; i++) {
    try {
      return await fn();
    } catch (e: any) {
      lastError = e;
      const isRetryable =
        e?.message?.includes('503') ||
        e?.status === 503 ||
        e?.error?.code === 503 ||
        e?.message?.includes('429') ||
        e?.status === 429 ||
        e?.error?.code === 429 ||
        e?.message?.includes('504') ||
        e?.status === 504 ||
        e?.error?.code === 504 ||
        e?.error?.status === 'RESOURCE_EXHAUSTED' ||
        e?.message?.includes('high demand');

      if (isRetryable && i < maxRetries) {
        const delay = (e?.message?.includes('429') || e?.status === 429 || e?.error?.code === 429)
          ? 5000 * (i + 1)
          : 1000 * (i + 1);
        console.warn(`Gemini API call failed (attempt ${i + 1}), retrying in ${delay}ms...`, e);
        await new Promise(resolve => setTimeout(resolve, delay));
        continue;
      }
      throw e;
    }
  }
  throw lastError;
}

// Helper function to call the serverless proxy
async function callGemini(payload: {
  model: string;
  contents: any;
  config?: any;
}) {
  const response = await fetch("/api/gemini-proxy", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const rawText = await response.text();
  let parsed: any;
  try {
    parsed = JSON.parse(rawText);
  } catch {
    const err: any = new Error(`Gemini proxy returned non-JSON (HTTP ${response.status}): ${rawText.slice(0, 120)}`);
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
  const systemInstruction = "Tu es un ingénieur du son et analyste musical expert. Ta mission est d'écouter attentivement le fichier audio fourni et d'en extraire des métadonnées techniques et artistiques précises pour alimenter un moteur de génération musicale (Suno AI). Sois extrêmement précis sur le BPM et le genre.";

  const prompt = `Analyse ce fichier audio (MIME: ${mimeType}) avec la plus grande précision.

  Identifie les éléments suivants :
  1. BPM : Calcule le tempo exact.
  2. GENRE : Identifie le genre et les sous-genres (ex: Melodic Trap, Lo-fi Hip Hop).
  3. MOOD : Décris l'atmosphère émotionnelle.
  4. STRUCTURE : Détaille l'arrangement (ex: Intro -> Verse -> Chorus).
  5. ARTIST INFO : Si tu reconnais l'artiste ou le style, donne des détails via recherche Google.
  6. ENERGY : Note l'intensité globale de 0 à 100.
  7. VOCAL STYLE : Décris la texture et la technique vocale.

  Réponds UNIQUEMENT en JSON :
  {
    "bpm": number,
    "genre": "string",
    "mood": "string",
    "structure": "string",
    "artistInfo": "string",
    "energy": number,
    "vocalStyle": "string"
  }`;

  return withRetry(async () => {
    const response = await callGemini({
      model: "gemini-2.0-flash",
      contents: [
        {
          parts: [
            {
              inlineData: {
                data: base64Data,
                mimeType: mimeType,
              },
            },
            {
              text: prompt,
            },
          ],
        },
      ],
      config: {
        systemInstruction: systemInstruction,
        tools: [{ googleSearch: {} }]
      }
    });

    try {
      const raw = (response.text || "{}").replace(/```json\s*/g, "").replace(/```\s*/g, "").trim();
      return JSON.parse(raw);
    } catch (e) {
      console.error("Error parsing audio analysis:", e);
      return null;
    }
  });
}

// ARTIST-AWARE: Negative prompt adapts to melodic vs lyricist artists
function getGenreSpecificNegativePrompt(genre: string, inspiredBy: string): string {
  const g = genre.toUpperCase();
  const melodic = isArtistMelodic(inspiredBy);

  if (g.includes('RAP') || g.includes('HIP HOP') || g.includes('TRAP')) {
    if (melodic) {
      return "country, rock, metal, opera, classical, high-pitched screaming, nursery rhymes, generic trap beats, weak bass, thin drums, stock sounds, default midi, amateur mixing, muddy, clipping, over-compressed, generic loops, royalty-free sounding";
    }
    return "singing, pop vocals, acoustic guitar, happy, bright, cheesy, generic pop, country, rock, metal, opera, classical, high-pitched, melodic pop hooks, radio-friendly pop, bubblegum pop, nursery rhymes, generic trap beats, weak bass, thin drums, stock sounds, default midi, amateur mixing, muddy, clipping, over-compressed, generic loops, royalty-free sounding";
  }
  if (g.includes('HOUSE') || g.includes('TECHNO') || g.includes('ELECTRO')) {
    return "acoustic guitar, country, rock, metal, opera, classical, folk, jazz, blues, reggae, soul, funk, disco, r&b, hip hop, rap, trap, pop, ballad, slow, acoustic, unplugged, live";
  }
  if (g.includes('POP')) {
    return "heavy metal, death metal, screaming, growling, harsh vocals, dark, gloomy, depressing, industrial, noise, experimental, avant-garde, complex jazz, classical, opera";
  }
  return "";
}

function getGrainTokens(mood: string, texture: string, sonicDNA?: SonicDNA | null): string {
  if (sonicDNA?.productionFingerprint) {
    const fp = sonicDNA.productionFingerprint.toLowerCase();
    if (fp.includes('crisp') || fp.includes('digital') || fp.includes('clean')) return 'Crisp Digital, Punchy Transients';
    if (fp.includes('warm') || fp.includes('analog') || fp.includes('tape')) return 'Warm Analog Saturation, Vintage Compression';
    if (fp.includes('lo-fi') || fp.includes('grit') || fp.includes('vinyl')) return 'Lo-fi Grit, Vinyl Hiss';
    if (fp.includes('industrial') || fp.includes('dark')) return 'Industrial Dark, Metallic Edge';
  }
  const lowerTexture = texture.toLowerCase();
  const lowerMood = mood.toLowerCase();
  if (lowerTexture.includes('bright') || lowerMood.includes('uplifting')) return 'Bright Digital, High-End Clarity';
  if (lowerTexture.includes('dark') || lowerMood.includes('dark')) return 'Dark Grunge, Lo-fi Dirt';
  if (lowerTexture.includes('warm') || lowerMood.includes('warm')) return 'Warm Analog, Tape Saturation';
  if (lowerTexture.includes('clean') || lowerMood.includes('pristine')) return 'Pristine Clarity, Surgical Precision';
  return 'Balanced Texture, Contemporary Grain';
}

function getSpaceTokens(mood: string, production: string, sonicDNA?: SonicDNA | null): string {
  if (sonicDNA?.culturalAnchors) {
    const ca = sonicDNA.culturalAnchors.toLowerCase();
    if (ca.includes('intimate') || ca.includes('close') || ca.includes('bedroom')) return 'Intimate Close-Mic, Minimal Reverb, In-Your-Face';
    if (ca.includes('cinematic') || ca.includes('ample') || ca.includes('wide')) return 'Cinematic Ample Space, Wide Stereo Image, Cathedral Reverb';
    if (ca.includes('industrial') || ca.includes('sterile')) return 'Industrial Sterile Space, Hard-Wall Reflection';
  }
  const lowerProd = production.toLowerCase();
  const lowerMood = mood.toLowerCase();
  if (lowerProd.includes('minimal') || lowerProd.includes('intimate')) return 'Intimate Close-Mic Space, Dry Delivery';
  if (lowerProd.includes('cinematic') || lowerMood.includes('cinematic')) return 'Cinematic Wide Space, Lush Reverb';
  if (lowerProd.includes('raw') || lowerProd.includes('harsh')) return 'Raw Tight Space, Minimal Processing';
  if (lowerProd.includes('ethereal') || lowerMood.includes('dreamy')) return 'Ethereal Spacious Reverb, Floating Feel';
  return 'Balanced Space, Professional Depth';
}

function getGenreFallbackStyle(genre: string): string {
  const g = genre.toUpperCase();
  if (g.includes('TRAP')) return 'Dark trap, 808 bass depth, hi-hat frenzied, synth darkness, atmospheric pads, street energy, 130-140 BPM';
  if (g.includes('DRILL')) return 'Drill aggression, sliding 808s, rapid hi-hats triplets, menacing piano, metallic percussion, 140-145 BPM';
  if (g.includes('R&B') || g.includes('SOUL')) return 'Contemporary R&B, smooth 808s, vocal layering, soulful synths, warm analog, 85-105 BPM';
  if (g.includes('AFRO')) return 'Afrobeat percussion, infectious grooves, joyful mélodies, celebratory energy, African drums, 110-130 BPM';
  if (g.includes('POP')) return 'Contemporary pop, catchy hooks, bright synths, punchy drums, emotional delivery, accessible production, 95-120 BPM';
  if (g.includes('REGGAETON')) return 'Reggaeton dembow, bouncy bass, rhythmic flow, dancefloor energy, Latin percussion, 90-110 BPM';
  if (g.includes('HOUSE')) return 'House groove, 4-on-the-floor drums, hypnotic synths, dancefloor build, electronic textures, 120-130 BPM';
  if (g.includes('RAÏ')) return 'Raï fusion, oriental instruments, emotional vocals, cultural anchors, Arabic scales, mixed French-Arabic, 100-120 BPM';
  if (g.includes('ZOUK')) return 'Zouk rhythm, tropical percussion, romantic vocals, Caribbean warmth, infectious groove, 120-130 BPM';
  if (g.includes('JAZZ')) return 'Jazz fusion, complex chords, improvisation elements, warm brass, sophisticated drums, intellectual vibe, 80-110 BPM';
  if (g.includes('ROCK')) return 'Rock energy, guitar drive, organic drums, powerful vocals, emotional intensity, alternative textures, 100-130 BPM';
  if (g.includes('CLOUD')) return 'Cloud rap, ethereal synths, spacious reverb, dreamy vibes, lo-fi textures, introspective delivery, 80-100 BPM';
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
    POP: ["Synth-wave retro 80s","Tropical house percussion","Indie folk acoustic layers","K-pop maximalist production","Electro-pop minimal beats"],
    HOUSE: ["Deep house melodic pianos","Afro house organic percussion","Tech house minimal acid","Disco strings and funk guitar","Ambient chill downtempo"],
    ROCK: ["Indie electronic synths","Hip-hop boom bap drums","Post-punk cold wave","Folk acoustic strings","Shoegaze reverb walls"],
    DANCEHALL: ["Tropical bass future dancehall","Afrobeats fusion","UK garage 2-step","Latin reggaeton","Amapiano log drums"],
    AFRO: ["Caribbean dancehall bounce","Amapiano deep bass","R&B smooth production","Electronic house groove","Highlife guitar patterns"],
    CLOUD: ["Shoegaze ambient reverb","Lo-fi jazz samples","Post-rock crescendos","Witch house dark electronic","Dream pop shimmering synths"],
    BOOMBAP: ["Jazz live instrumentation","Soul vocal chops","Funk breakbeats","Classical piano samples","Psychedelic analog processing"]
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
  else if (g.includes('ROCK')) fusionGenre = pick(fusionPools.ROCK);
  else if (g.includes('REGGAE') || g.includes('DANCEHALL')) fusionGenre = pick(fusionPools.DANCEHALL);
  else if (g.includes('AFRO')) fusionGenre = pick(fusionPools.AFRO);
  else if (g.includes('CLOUD')) fusionGenre = pick(fusionPools.CLOUD);
  else if (g.includes('BOOM') || g.includes('BAP')) fusionGenre = pick(fusionPools.BOOMBAP);
  else fusionGenre = pick(["Electronic ambient textures","Jazz-influenced progressions","Afrobeats rhythmic percussion","Synthwave retro production","Latin rhythmic patterns"]);

  const eraShifts: Record<string, string> = { '2020s': '2010s', '2010s': '2000s', '2000s': '1990s', '1990s': '2000s', '1980s': '1990s' };
  const adjacentEra = eraShifts[era] || '2010s';

  return `
  VARIANT DIVERGENCE RULES — ABSOLUTE:

  V1 (CORE DNA) — Pure artist signature, most recognizable sound of "${inspiredBy}".
  Use ONLY Sonic DNA template. BPM central, era ${era}. ZERO style blend. ZERO external genre.
  If someone hears V1, they MUST recognize "${inspiredBy}" immediately.

  V2 (EVOLUTION) — MUST differ from V1 on 2 dimensions:
  - BPM: ±10-20 BPM vs V1
  - GRAIN: opposite texture (darker or brighter)
  - ERA: ${adjacentEra} instead of ${era}
  - Light style blend allowed (max 20%). Core identity preserved.

  V3 (FUSION) — MUST differ from V1 AND V2 on 3 dimensions:
  - Style blend: integrate "${fusionGenre}" elements (up to 40%)
  - Instruments: at least 2 different from V1
  - Space: opposite reverb depth from V1
  - Core vocal identity preserved.

  VALIDATION: If 2 variants share >50% tokens → regenerate.
  `;
}

export async function generateMusicContext(
  genre: string,
  mood: string,
  theme: string,
  artist: string,
  language: string,
  inspiredBy: string,
  era: string,
  performanceActive: boolean,
  energy: number,
  emotionalIntensity: number,
  voiceType: string,
  vocalTimbre: string,
  singingStyle: string,
  vocalPresence: string,
  accent: string,
  vocalReference: string,
  emotionLevel: string,
  instrumentation: string,
  productionStyle: string,
  manualBpm: number | null,
  structure?: string,
  styleBlend?: string,
  artistIdentitySummary?: string,
  customNegativePrompt?: string,
  weirdness: number = 0,
  styleInfluence: number = 100,
  vocalTechnique: string = 'none',
  productionFinish: string = 'none',
  secondaryInspiredBy: string = 'none',
  advancedTags: string[] = [],
  mode: 'all' | 'lyrics' | 'style' = 'all'
) {
  const bpmInfo = manualBpm ? `- BPM imposé : ${manualBpm} BPM` : (performanceActive ? `- BPM : Automatique (adapté à l'énergie ${energy})` : `- BPM : Automatique`);
  const structureInfo = structure ? `- Structure souhaitée : ${structure}` : "";
  const styleBlendInfo = styleBlend ? `- Style Blending (V2/V3 only, NEVER V1) : ${styleBlend}` : "";
  const secondaryArtistInfo = secondaryInspiredBy !== 'none' ? `- Secondary Artist (Style Blending) : ${secondaryInspiredBy}` : "";
  const advancedTagsInfo = advancedTags.length > 0 ? `- Advanced DNA Tags : ${advancedTags.join(', ')}` : "";
  const genreNegativePrompt = getGenreSpecificNegativePrompt(genre, inspiredBy);
  const sonicDNA = getArtistSonicDNA(inspiredBy);

  let secondaryBlendingBlock = '';
  if (secondaryInspiredBy && secondaryInspiredBy !== 'none') {
    const secondarySonicDNA = getArtistSonicDNA(secondaryInspiredBy);
    const secondaryInstructions = getArtistSpecificInstructions(secondaryInspiredBy);
    if (secondarySonicDNA || secondaryInstructions) {
      secondaryBlendingBlock = `
# SECONDARY ARTIST BLENDING (V2/V3 ONLY — NEVER V1):
Secondary Artist: ${secondaryInspiredBy}
${secondarySonicDNA ? `Secondary Sonic DNA: ${secondarySonicDNA.sunoStyleTemplate}` : ''}
${secondaryInstructions ? `Secondary Instructions:\n${secondaryInstructions}` : ''}
RULE: V1 = 100% "${inspiredBy}" ONLY. V2 = 80/20 blend. V3 = 70/30 blend.
`;
    }
  }

  const artistExcludeStyles = sonicDNA?.sunoExcludeStyles || '';
  const combinedNegativePrompt = [artistExcludeStyles || genreNegativePrompt, customNegativePrompt].filter(Boolean).join(', ');
  const negativePromptInfo = combinedNegativePrompt ? `- ELEMENTS TO EXCLUDE (NEGATIVE PROMPT) : ${combinedNegativePrompt}` : "";
  const sunoV55Info = `\n- Weirdness (V5.5) : ${weirdness}/100\n- Style Influence : ${styleInfluence}/100`;
  const artistIdentityInfo = artistIdentitySummary ? `\n# ARTIST IDENTITY ANALYSIS (SCRAPED DATA):\n${artistIdentitySummary}\n` : "";
  const performanceInfo = performanceActive ? `\n- Global Energy : ${energy}/100\n- Emotional Intensity : ${emotionalIntensity}/100` : "";

  const modeInfo = mode === 'lyrics'
    ? `CRITICAL: Focus EXCLUSIVELY on LYRICS rewrite. Absolute mimicry of "${inspiredBy}" writing style. Full structure (Intro, Verses, Chorus, Outro). For rappers: RAW, SINCERE, street-level details. Complex rhymes matching the original artist's technicality.`
    : mode === 'style'
    ? "CRITICAL: Focus EXCLUSIVELY on STYLE PROMPT optimization. Lyrics are secondary."
    : "CRITICAL: Full generation. Perfect synergy between musical style and lyrics.";

  const languageInfo = language === 'AUCUNE'
    ? "Language: Deduce the most appropriate language from the inspired artist's style. IMPORTANT: For raï/Algerian artists (Cheb Mami, Soolking, Babylone, Djalil Palermo, Rimk, L'Algérino, etc.), language is ALWAYS a French-Arabic (darija) MIX. NEVER 100% Arabic. Alternate verses/phrases between French and darija with [in french] and [in arabic] tags."
    : `Language: ${language}`;

  const melodicArtist = isArtistMelodic(inspiredBy);
  const vocalDeliveryRule = melodicArtist
    ? `- VOCAL DELIVERY — MELODIC ARTIST DETECTED: "${inspiredBy}" is a MELODIC artist. Melodic singing WITH autotune IS the signature. FORBIDDEN to force dry technical rap flow. Prioritize melodic singing, sung hooks, vocal melodies.`
    : `- VOCAL DELIVERY: For RAP/TRAP, prioritize rhythmic percussive flow (Staccato, Triplet, Off-beat) over systematic melodic singing. Vary between [Rhythmic flow], [Melodic rap], [Aggressive chant] and [Spoken word].`;

  const vocoderRule = melodicArtist
    ? `- AUTOTUNE/VOCODER: For this melodic artist, autotune is an ESSENTIAL CREATIVE TOOL. Use it artistically per "${inspiredBy}"'s signature.`
    : `- AVOID SYSTEMATIC SINGING: If the artist is a "lyricist" or "technician", FORBIDDEN to sing or use melodic autotune. Flow must be dry, articulate, pure rap.`;

  const variantDivergenceBlock = buildVariantDivergenceConstraints(genre, inspiredBy, era);

  const systemInstruction = `You are a world-class expert in music production and Suno AI V5.5 prompting.

  CRITICAL RULES:
  ★ LANGUAGE RULE — ABSOLUTE: The sunoPrompt and sunoPrompts[] fields MUST ALWAYS be in ENGLISH. NEVER in French, Arabic, or any other language. Lyrics (paroles) use the artist's language, but the STYLE PROMPT is ALWAYS in English.
  - STYLE PROMPT: 500-600 characters. Front-load textures. 10 DIMENSIONS format: [STYLE BLEND] + [BPM + Key] + [GRAIN] + [SPACE] + [INSTRUMENTS] + [VOCAL TEXTURE] + [DYNAMIC] + [MIX] + [CULTURAL FLAVOR] + [ERA]. Rule: Texture over Genre — prefer texture adjectives over genre names.
  - LYRICS: Full structure adapted to genre. Use [ ] for structure tags, ( ) for ad-libs. Suno V5.5 supports [Pre-Chorus], [Post-Chorus], [Bridge], [Interlude], [Solo: Instrument], [Break], [Build], [Drop].
  - LANGUAGE REGISTER: Adapt vocabulary to intensity (${emotionalIntensity}/100) and energy (${energy}/100). Low: poetic, contemplative. High: raw, direct, slang.
  ${vocalDeliveryRule}
  - VIBE & FLOW: Vibe is paramount. Use atmospheric ad-libs (Ouh, Yeah, Skrr) for space. Flow must be elastic: alternate fast moments with silence or vocal trails.
  - PRODUCTION QUALITY: Target Studio Master quality. Use tags like [High-fidelity], [Pristine clarity], [Punchy transients], [Warm analog saturation], [Wide stereo image].
  - STYLE CODES: Integrate genre-specific tics, onomatopoeia and rhythmic placements (ex: "Skrr", "Ouh", "Grrr" for Drill; melodic ad-libs for R&B).
  - ANTI-GENERIC: BANNED tags: "Trap" or "Pop" alone. Use precise sonic and vocal textures instead.
  - NO SYSTEMATIC DARK ORCHESTRAL: For rap, use orchestral elements ONLY if the artist profile explicitly requires it. Otherwise prefer dry, jazzy, industrial or minimalist textures.
  ${vocoderRule}
  - ZERO TOLERANCE: NEVER cite real artist names, brands, labels, album/track titles, city names associated with an artist, or iconic slogans/ad-libs. Lyrics must be ORIGINAL.
  - JSON: Respond only in valid JSON.

  WRITING DNA (loaded dynamically):
  ${getRelevantWritingDNA(inspiredBy, genre)}

  GOLDEN RULE: Lyrics language MUST match the genre's cultural demand. Deduce language, slang and flow from the artist profile.

  FRENCH PHONETICS (SUNO V5.5):
  - PREFERRED ENDINGS: -é, -a, -ou, -i, -o (open vowels = clear synthesis)
  - AVOID: -ance, -ence, -ment, -tion (nasals + clusters = unclear)
  - CHORUS: open syllable on strong beat MANDATORY
  - ELISIONS: write as they sound (j'veux, t'as, l'amour)
  - MIXED LANGUAGE: tag switches [in french], [en español], [in english]

  ADVANCED V5.5 METATAGS (in lyrics):
  Use these tags on SEPARATE LINES BEFORE each section's lyrics:
  - [Vocal Style: Whisper/Soft/Power/Raspy/Falsetto/Belt/Spoken Word/Rap]
  - [Vocal Effect: Reverb/Delay/Auto-tune/Vocoder/Distortion]
  - [Mood: Uplifting/Dark/Melancholic/Aggressive/Peaceful/Triumphant]
  - [Energy: Low/Medium/High/Rising/Maximum]
  - [Texture: Tape-Saturated/Vinyl Hiss/Lo-fi/Crisp Digital]
  - [Instrument: Piano/808 Bass/Strings (Legato)/Synth Pads/etc.]
  DYNAMIC SYMBOLS:
  - CAPS = shouted/strong emphasis
  - (text) = backing vocals/choir
  - ~word~ = stretched note/melisma
  - *word* = emphasis
  - word- = abruptly cut
  SYNTAX: ONE tag per line. NEVER composite tags on a single line.`;

  const productionInfo = productionStyle.toUpperCase().includes('HARDCORE')
    ? "\n# SPECIFIC PRODUCTION INSTRUCTION (HARDCORE/RAW):\n- ABSOLUTE FORBIDDEN to sing or use melodic autotune/vocoder.\n- Flow must be pure RAP, dry, aggressive and no-frills.\n- Production must be MINIMALIST and PUNCHY (Raw/Brut production).\n- No vocal harmonies, no smoothing effects.\n"
    : "";

  const vocalTechniqueSpecifics = vocalTechnique !== 'none'
    ? `\n# VOCAL TECHNIQUE INSTRUCTION (V5.5):\n- TECHNIQUE: ${vocalTechnique}.\n- Apply this technique dominantly throughout the vocal performance.\n`
    : "";

  const productionFinishSpecifics = productionFinish !== 'none'
    ? `\n# PRODUCTION FINISH INSTRUCTION (V5.5):\n- FINISH: ${productionFinish}.\n- Use specific production tags for this sonic render (ex: [Binaural], [Sidechain], [Mid-Side]).\n`
    : "";

  const sonicDNABlock = sonicDNA ? `
# SONIC DNA — MUSIC GENERATION CONTROL ENGINE (EXCLUSIVE V1 FOUNDATION):
This template is the VALIDATED BASE for V1. ENRICH IT to 500-600 characters.
FORBIDDEN: Adding external genres. V1 = THIS TEMPLATE enriched, nothing else.

## STYLE CORE (V1 EXCLUSIVELY — 0% blend):
${sonicDNA.sunoStyleTemplate}
BPM: ${sonicDNA.sunoBpmRange} | KEY: ${sonicDNA.sunoKey}
VOCAL TAGS: ${sonicDNA.sunoVocalTags.join(', ')}
WEIRDNESS: ${sonicDNA.sunoWeirdness}/100 | STYLE INFLUENCE: ${sonicDNA.sunoStyleInfluence}/100

## VOCAL ENGINE (how the voice behaves — apply to all 3 variants):
${sonicDNA.vocalDNA || 'Not specified'}

## FLOW ENGINE (how rhythm/delivery works):
${sonicDNA.flowPattern || 'Not specified'}

## PRODUCTION ENGINE (dominant sounds):
${sonicDNA.productionFingerprint || 'Not specified'}

${sonicDNA.structureDNA ? `## STRUCTURE DNA:\n${sonicDNA.structureDNA}` : ''}
${sonicDNA.hookType ? `\n## HOOK TYPE:\n${sonicDNA.hookType}` : ''}
${sonicDNA.vocalPlacement ? `\n## VOCAL PLACEMENT:\n${sonicDNA.vocalPlacement}` : ''}
${sonicDNA.energyCurve ? `\n## ENERGY CURVE:\n${sonicDNA.energyCurve}` : ''}

## CULTURAL CONTEXT:
${sonicDNA.culturalAnchors || 'Not specified'}

## ANTI-PATTERNS (forbidden behaviors):
${sonicDNA.antiPatterns || 'Not specified'}

## V5.5 METATAGS (inject before each lyrics section):
[Vocal Style: ${sonicDNA.sunoMetatags?.vocalStyle || 'Rap'}]
[Vocal Effect: ${sonicDNA.sunoMetatags?.vocalEffect || 'Reverb'}]
[Mood: ${sonicDNA.sunoMetatags?.mood || 'Dark'}]
[Energy: ${sonicDNA.sunoMetatags?.energy || 'Medium'}]
[Texture: ${sonicDNA.sunoMetatags?.texture || 'Crisp Digital'}]
[Instrument: ${sonicDNA.sunoMetatags?.instrument || '808 Bass'}]
` : '';

  const artistSpecifics = getArtistSpecificInstructions(inspiredBy);

  const genreFallbackBlock = !sonicDNA ? `
# GENRE FALLBACK STYLE TEMPLATE (SONIC DNA NOT AVAILABLE):
${getGenreFallbackStyle(genre)}
USE THIS TEMPLATE AS BASE FOR V1 and derive V2/V3 from this foundation.
` : '';

  const priorityBlock = `
# INSTRUCTION PRIORITY HIERARCHY (CRITICAL):
Priority 1 = Artist Profile (inspiredBy specific instructions)
Priority 2 = Sonic DNA (if available; validated templates)
Priority 3 = Genre defaults (fallback only)
STRICT RULE: Higher priority ALWAYS overrides lower.
`;

  const prompt = `Generate an ultra-precise musical direction for artist "${artist}".

  ${modeInfo}

  ${priorityBlock}
  ${productionInfo}
  ${vocalTechniqueSpecifics}
  ${productionFinishSpecifics}
  ${secondaryArtistInfo}
  ${advancedTagsInfo}

  ${artistSpecifics}
  ${sonicDNABlock}
  ${genreFallbackBlock}
  ${secondaryBlendingBlock}
  ${variantDivergenceBlock}
  ${artistIdentityInfo}

  Session details:
  - Genre: ${genre || 'NOT SPECIFIED (DEDUCE FROM INSPIRATION)'}
  - Mood (V2/V3 only — V1 deduces from Sonic DNA): ${mood || 'NOT SPECIFIED'}
  - MOOD RULE FOR V1: For V1, ignore the "Mood" parameter above. Deduce mood ONLY from Sonic DNA and artist profile.
  - Theme: ${theme || 'NOT SPECIFIED (IMPROVISE A LIVED THEME BASED ON ARTIST)'}
  - ${languageInfo}
  - Inspired by: ${inspiredBy}
  - Era: ${era}
  ${performanceInfo}
  - Instrumentation: ${instrumentation}
  - Production Style: ${productionStyle}
  - BPM: ${bpmInfo}
  ${structureInfo}
  ${styleBlendInfo}
  ${negativePromptInfo}
  ${sunoV55Info}

  CRITICAL DIFFERENTIATION INSTRUCTIONS:
  1. DEEP ANALYSIS: Identify the sonic signature of "${inspiredBy}": instruments, rhythmic placement, production.
  2. AUTHENTICITY: If RAP/URBAN/STREET, use RAW language, SLANG, VULGARITY if it serves authenticity.
  3. NAMING: "songTitle" from lyrics. "artistName" in the artist's language.
  4. ANTI-GENERIC: BANNED "Trap" or "Pop" alone. Ultra-precise textures only.
  5. LYRICAL RICHNESS: Multisyllabic, internal rhymes, rich imagery. Zero clichés.
  6. ARTISTIC ESSENCE: As close to "${inspiredBy}" as possible without copying their texts.
  7. STYLE PROMPT BOX: 500-600 chars, 10 DIMENSIONS, front-load textures. ALWAYS IN ENGLISH.
  8. VARIANTS: V1 = PURE artist sound (0% blend). V2 = Light evolution. V3 = Creative fusion. V1 ≠ V2 ≠ V3.
  9. LYRICS: Full structure, [ ] tags, V5.5 METATAGS before each section.
  10. ZERO COMMERCIAL TOLERANCE: No real names, nicknames, titles, identifiable neighborhoods.

  ████████████████████████████████████████████████
  ██ LAST INSTRUCTION — MOST IMPORTANT:         ██
  ██ sunoPrompt and sunoPrompts[] = ENGLISH ONLY ██
  ██ V1 = PURE "${inspiredBy}" DNA — 0% BLEND   ██
  ████████████████████████████████████████████████

  Respond ONLY in JSON without backticks:
  {
    "artistName": "string",
    "songTitle": "string",
    "sunoPrompt": "string (V1 - 500-600 chars - ENRICH SONIC DNA TEMPLATE ONLY - 0% external genre - ENGLISH)",
    "sunoPrompts": ["V1 pure 0% blend ENGLISH", "V2 light evolution ENGLISH", "V3 creative fusion ENGLISH"],
    "negativePrompt": "string (max 200 chars)",
    "weirdnessGuidance": "string",
    "lyrics": "string",
    "structuredLyrics": [
      { "id": "string", "type": "string", "text": "string", "prompt": "string" }
    ],
    "lipSyncExcerpt": "string",
    "quality": {
      "score": 95, "coherence": 90, "richness": 85,
      "clarity": 95, "hook": 90, "precision": 95,
      "message": "string"
    }
  }`;

  const maxRetries = 3;

  return withRetry(async () => {
    const response = await callGemini({
      // FIX: gemini-2.5-flash required for heavy responseSchema prompts (gemini-2.0-flash times out)
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        temperature: 0.85,
        responseMimeType: "application/json",
        responseSchema: {
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
        },
        systemInstruction: systemInstruction
      }
    });

    if (!response.text) throw new Error("Empty response from Gemini");
    const parsed = JSON.parse(response.text);

    const DIMENSION_MARKERS = ['bpm', 'key', 'vocal', 'bass', 'drum', 'hi-hat', 'synth', 'piano', 'reverb', 'stereo'];
    function countDimensions(text: string): number {
      const lower = text.toLowerCase();
      return DIMENSION_MARKERS.filter(marker => lower.includes(marker)).length;
    }

    if (sonicDNA?.sunoStyleTemplate) {
      const sonisTemplateDims = countDimensions(sonicDNA.sunoStyleTemplate);
      const v1Dims = countDimensions(parsed.sunoPrompt || '');
      if (v1Dims < sonisTemplateDims / 2) {
        const enrichedV1 = parsed.sunoPrompt || '';
        const templateTokens = sonicDNA.sunoStyleTemplate.split(',').map(t => t.trim()).filter(t => t.length > 2);
        const v1Lower = enrichedV1.toLowerCase();
        const missingTokens = templateTokens.filter(t => !v1Lower.includes(t.toLowerCase().slice(0, 8)));
        if (missingTokens.length > 0) {
          parsed.sunoPrompt = enrichedV1 + ', ' + missingTokens.join(', ');
        }
        if (parsed.sunoPrompt && parsed.sunoPrompt.length > 600) {
          const lastComma = parsed.sunoPrompt.lastIndexOf(',', 600);
          parsed.sunoPrompt = lastComma > 400 ? parsed.sunoPrompt.slice(0, lastComma) : parsed.sunoPrompt.slice(0, 600);
        }
      }
    }

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
        let modifiedV = v || coreVariant;
        const bpmMatch = coreVariant.match(/(\d{2,3})-(\d{2,3})\s*BPM/i);
        if (bpmMatch) {
          const bpmMin = parseInt(bpmMatch[1]);
          const bpmMax = parseInt(bpmMatch[2]);
          const coreMid = (bpmMin + bpmMax) / 2;
          const shift = i === 1 ? -15 : 15;
          const newBpmMin = Math.max(60, coreMid + shift - 10);
          const newBpmMax = Math.min(200, coreMid + shift + 10);
          modifiedV = modifiedV.replace(/(\d{2,3})-(\d{2,3})\s*BPM/i, `${Math.round(newBpmMin)}-${Math.round(newBpmMax)} BPM`);
        }
        if (i === 1 && modifiedV.includes('Minor')) modifiedV = modifiedV.replace(/Minor/g, 'Major');
        else if (i === 2 && modifiedV.includes('Major')) modifiedV = modifiedV.replace(/Major/g, 'Minor');
        else if (modifiedV.includes('Minor')) modifiedV = modifiedV.replace(/Minor/g, 'Major');
        if (!modifiedV.includes('[DIVERGENCE]')) modifiedV = `[DIVERGENCE V${i + 1}] ` + modifiedV;
        v = modifiedV;
      }
      deduplicated.push(v);
    }

    return {
      ...parsed,
      sunoPrompts: deduplicated,
      structuredLyrics: parsed.structuredLyrics || []
    };
  }, maxRetries).catch((lastError) => {
    const fallbackTemplate = sonicDNA?.sunoStyleTemplate || getGenreFallbackStyle(genre);
    const v1Fallback = fallbackTemplate || "Error generating prompt. Please try again.";
    const v2Fallback = v1Fallback.replace(/(\d{2,3})-(\d{2,3})\s*BPM/i, (_, min, max) => {
      const shift = 15;
      return `${Math.max(60, parseInt(min) - shift)}-${Math.min(200, parseInt(max) + shift)} BPM`;
    });
    const v3Fallback = v1Fallback.replace(/Minor/g, 'Major').replace(/minor/g, 'major');
    return {
      sunoPrompt: v1Fallback,
      sunoPrompts: [v1Fallback, v2Fallback, v3Fallback],
      lyrics: `Error generating lyrics: ${lastError?.message || "Unknown error"}`,
      structuredLyrics: [],
      quality: { score: 0, message: `[FALLBACK] Generation failed. Retry recommended. Error: ${lastError?.message || "Unknown error"}` }
    };
  });
}

export async function suggestArtistAndTitle(theme: string, genre: string, mood: string) {
  const prompt = `Generate an original FICTIONAL artist name and a punchy song title based on:
  - Theme: ${theme}
  - Genre: ${genre}
  - Mood: ${mood}

  Rules:
  - NEVER cite a real artist.
  - The name must be original, memorable and match the genre.
  - If genre is RAP or URBAN, the name and title must have a street, authentic, raw vibe.
  - The title must evoke the theme and feel lived.

  Respond ONLY in JSON.`;

  return withRetry(async () => {
    const response = await callGemini({
      model: "gemini-2.0-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            artistName: { type: Type.STRING },
            songTitle: { type: Type.STRING }
          },
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
  } catch (_) { /* SSR / unavailable */ }

  const prompt = `Research and analyze the vocal identity of artist "${artistName}".
  Identify precisely:
  - Voice type (ex: Soprano, Tenor, Baritone, etc.)
  - Vocal timbre (ex: Airy, Raspy, Clean, Warm, Metallic, etc.)
  - Dominant singing style. Specifically analyze if it is melodic singing or traditional rap.
  - Vocal presence.
  - Accent or linguistic color characteristics.
  - Autotune usage and effects.
  - Primary singing language. If the artist sings in MULTIPLE languages, indicate the EXACT MIX (ex: "FRENCH-ARABIC", "FRENCH-ENGLISH"). For Algerian raï artists, indicate "FRENCH-ARABIC" not just "ARABIC".
  - Artist GENDER: male or female.
  - WEIRDNESS (0-100): how experimental their style is.
  - STYLE INFLUENCE (0-100): how strong their stylistic identity is.

  Use Google Search.

  Respond ONLY in JSON without backticks:
  {
    "voiceType": "string",
    "vocalTimbre": "string",
    "singingStyle": "string",
    "vocalPresence": "string",
    "accent": "string",
    "vocalReference": "string",
    "language": "string",
    "weirdness": number,
    "styleInfluence": number,
    "summary": "string"
  }`;

  return withRetry(async () => {
    const response = await callGemini({
      model: "gemini-2.0-flash",
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
        systemInstruction: "You are an expert in vocal analysis and musicology. IMPORTANT: Respond ONLY in valid JSON, without markdown or text before/after."
      }
    });

    const _rawText = (response.text || "{}").replace(/```json\s*/g, "").replace(/```\s*/g, "").trim();
    const _result = JSON.parse(_rawText);
    try { sessionStorage.setItem(_cacheKey, JSON.stringify(_result)); } catch (_) { /* ignore */ }
    return _result;
  });
}

export async function rerollVerse(
  context: any,
  verse: Verse
) {
  const prompt = `You are an expert lyrics writer for Suno AI V5.5, working on a COLORSxSTUDIOS session.

  Musical context:
  - Genre: ${context.genre}
  - Mood: ${context.mood}
  - Theme: ${context.theme}
  - Inspired by: ${context.inspiredBy}

  Regenerate lyrics for the following section:
  Type: ${verse.type}
  Original prompt: ${verse.prompt}
  Current text (to improve): ${verse.text}

  INSTRUCTIONS:
  - Keep coherence with the global style and theme.
  - Use Suno V5.5 structure tags and ADVANCED METATAGS if needed.
  - Integrate Vocal Style, Vocal Effect, Mood, Energy, Texture and Instrument tags on separate lines before lyrics.
  - FORMAL FORBIDDEN: NEVER cite the name of a real artist, brand or label.
  - Respond ONLY with the new lyrics text.`;

  return withRetry(async () => {
    const response = await callGemini({
      model: "gemini-2.0-flash",
      contents: prompt,
      config: {
        systemInstruction: "You are an expert musical lyrics writer. Respond only with the regenerated lyrics with V5.5 metatags."
      }
    });

    return response.text || verse.text;
  });
}
