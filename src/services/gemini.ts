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

  // Safely parse response - handle non-JSON error pages (e.g. Vercel 500 HTML)
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

// FIX #8: Artist-aware grain and space token functions
function getGrainTokens(mood: string, texture: string, sonicDNA?: SonicDNA | null): string {
  // Check sonicDNA productionFingerprint first (artist-specific)
  if (sonicDNA?.productionFingerprint) {
    const fp = sonicDNA.productionFingerprint.toLowerCase();
    if (fp.includes('crisp') || fp.includes('digital') || fp.includes('clean')) return 'Crisp Digital, Punchy Transients';
    if (fp.includes('warm') || fp.includes('analog') || fp.includes('tape')) return 'Warm Analog Saturation, Vintage Compression';
    if (fp.includes('lo-fi') || fp.includes('grit') || fp.includes('vinyl')) return 'Lo-fi Grit, Vinyl Hiss';
    if (fp.includes('industrial') || fp.includes('dark')) return 'Industrial Dark, Metallic Edge';
  }

  // Fallback to texture/mood matching
  const lowerTexture = texture.toLowerCase();
  const lowerMood = mood.toLowerCase();

  if (lowerTexture.includes('bright') || lowerMood.includes('uplifting')) return 'Bright Digital, High-End Clarity';
  if (lowerTexture.includes('dark') || lowerMood.includes('dark')) return 'Dark Grunge, Lo-fi Dirt';
  if (lowerTexture.includes('warm') || lowerMood.includes('warm')) return 'Warm Analog, Tape Saturation';
  if (lowerTexture.includes('clean') || lowerMood.includes('pristine')) return 'Pristine Clarity, Surgical Precision';

  return 'Balanced Texture, Contemporary Grain';
}

function getSpaceTokens(mood: string, production: string, sonicDNA?: SonicDNA | null): string {
  // Check sonicDNA culturalAnchors for artist-specific space preferences
  if (sonicDNA?.culturalAnchors) {
    const ca = sonicDNA.culturalAnchors.toLowerCase();
    if (ca.includes('intimate') || ca.includes('close') || ca.includes('bedroom')) return 'Intimate Close-Mic, Minimal Reverb, In-Your-Face';
    if (ca.includes('cinematic') || ca.includes('ample') || ca.includes('wide')) return 'Cinematic Ample Space, Wide Stereo Image, Cathedral Reverb';
    if (ca.includes('industrial') || ca.includes('sterile')) return 'Industrial Sterile Space, Hard-Wall Reflection';
  }

  // Fallback to production style matching
  const lowerProd = production.toLowerCase();
  const lowerMood = mood.toLowerCase();

  if (lowerProd.includes('minimal') || lowerProd.includes('intimate')) return 'Intimate Close-Mic Space, Dry Delivery';
  if (lowerProd.includes('cinematic') || lowerMood.includes('cinematic')) return 'Cinematic Wide Space, Lush Reverb';
  if (lowerProd.includes('raw') || lowerProd.includes('harsh')) return 'Raw Tight Space, Minimal Processing';
  if (lowerProd.includes('ethereal') || lowerMood.includes('dreamy')) return 'Ethereal Spacious Reverb, Floating Feel';

  return 'Balanced Space, Professional Depth';
}

// FIX #2: Genre-based fallback when sonicDNA is null
function getGenreFallbackStyle(genre: string): string {
  const g = genre.toUpperCase();

  // 13 genre templates as per spec
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

  // Default fallback
  return 'Contemporary urban production, dynamic 808s, atmospheric layers, street credibility, modern textures, 100-120 BPM';
}

// ── VARIANT DIVERGENCE ENGINE ──────────────────────────────────────────────
// Forces V2 and V3 to diverge from V1 along specific dimensions
// so they are never identical, even from a single API call.
function buildVariantDivergenceConstraints(genre: string, inspiredBy: string, era: string): string {
  const g = genre.toUpperCase();

  // Determine a secondary "adjacent genre" for V3 FUSION based on primary genre
  // Each genre has a POOL of possible fusions — one is picked randomly per generation
  // This prevents V3 from always sounding the same for a given genre
  const pick = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

  const fusionPools: Record<string, string[]> = {
    DRILL: [
      "Dark cinematic orchestral strings and brass",
      "Industrial electronic textures and distortion",
      "Cloud rap ambient pads and reverb wash",
      "Grime UK bassline and garage rhythms",
      "Latin percussion and reggaeton dembow undertones"
    ],
    TRAP_FR: [
      "Boom bap jazz samples and vinyl crackle",
      "Afrobeats percussion and dancehall bounce",
      "Cloud rap ambient synths and slow reverb",
      "Raï oriental melodies and darbuka percussion",
      "Electro-funk synthesizers and vocoder touches"
    ],
    TRAP: [
      "Lo-fi indie guitar textures and warm analog",
      "Synthwave retro 80s pads and arpeggios",
      "R&B soul chords and smooth vocal harmonies",
      "Ambient electronic drones and granular textures",
      "Latin trap reggaeton bounce and Caribbean bass"
    ],
    RAP_FR: [
      "Jazz-funk live instruments and brass section",
      "Chanson française piano and orchestral strings",
      "Electronic minimal techno pulses and sidechains",
      "Afro-Caribbean percussion and tropical melodies",
      "Rock alternatif guitars and indie drum patterns"
    ],
    RAP: [
      "Soul-funk vintage production and live bass",
      "Jazz samples and saxophone improvisation",
      "Psychedelic rock guitars and wah effects",
      "Electronic glitch and IDM textures",
      "Gospel choir harmonies and organ chords"
    ],
    RNB: [
      "Neo-soul electronic textures and warm synths",
      "Bossa nova acoustic guitar and soft percussion",
      "Future bass synth drops and crystal arpeggios",
      "Jazz piano trio and upright bass",
      "Afrobeats danceable percussion and log drums"
    ],
    POP: [
      "Synth-wave retro 80s textures and gated reverb",
      "Tropical house percussion and steel drums",
      "Indie folk acoustic layers and fingerpicking",
      "K-pop maximalist production and layered synths",
      "Electro-pop minimal beats and vocoders"
    ],
    HOUSE: [
      "Deep house melodic pianos and warm pads",
      "Afro house organic percussion and vocal chants",
      "Tech house minimal grooves and acid bassline",
      "Disco strings and funk guitar",
      "Ambient chill downtempo and ethereal vocals"
    ],
    ROCK: [
      "Indie electronic synths and drum machines",
      "Hip-hop boom bap drums and sampling",
      "Post-punk cold wave and analog synths",
      "Folk acoustic and string arrangements",
      "Shoegaze reverb walls and dream textures"
    ],
    DANCEHALL: [
      "Tropical bass and future dancehall synths",
      "Afrobeats fusion percussion and melodies",
      "UK garage rhythmic patterns and 2-step",
      "Latin reggaeton dembow and Caribbean bass",
      "Amapiano log drums and deep bass"
    ],
    AFRO: [
      "Caribbean dancehall bounce and riddim",
      "Amapiano deep bass and log drums",
      "R&B smooth production and vocal runs",
      "Electronic house four-on-the-floor groove",
      "Highlife guitar patterns and brass section"
    ],
    CLOUD: [
      "Shoegaze ambient reverb walls and noise textures",
      "Lo-fi jazz samples and vinyl warmth",
      "Post-rock crescendos and tremolo guitars",
      "Witch house dark electronic and slowed textures",
      "Dream pop shimmering synths and ethereal vocals"
    ],
    BOOMBAP: [
      "Jazz live instrumentation and improvisation",
      "Soul vocal chops and warm vinyl texture",
      "Funk breakbeats and live bass grooves",
      "Classical piano and orchestral samples",
      "Psychedelic samples and analog processing"
    ]
  };

  // Match genre to the right pool
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
  else {
    // Default pool for unmatched genres
    const defaultPool = [
      "Electronic ambient textures and atmospheric pads",
      "Jazz-influenced chord progressions and live instruments",
      "Afrobeats rhythmic percussion and melodic hooks",
      "Synthwave retro production and analog warmth",
      "Latin rhythmic patterns and Caribbean bass"
    ];
    fusionGenre = pick(defaultPool);
  }

  // Era shift for V2 EVOLUTION
  const eraShifts: Record<string, string> = {
    '2020s': '2010s',
    '2010s': '2000s',
    '2000s': '1990s',
    '1990s': '2000s',
    '1980s': '1990s',
  };
  const adjacentEra = eraShifts[era] || '2010s';

  return `
  CONTRAINTES DE DIVERGENCE — RÈGLE ABSOLUE: Les 3 variantes DOIVENT être différentes.

  V1 (CORE DNA — FIDÉLITÉ MAXIMALE) — Le son le plus FIDÈLE et RECONNAISSABLE de l'artiste "${inspiredBy}".
  - AUCUN style blend, AUCUNE fusion, AUCUN mélange de genre.
  - Utilise UNIQUEMENT le Sonic DNA, le template de base, et la signature pure de l'artiste.
  - BPM central du genre ${genre}, ère ${era}, production signature exacte.
  - Si un Sonic DNA existe, V1 DOIT être une version enrichie de ce template — PAS une réinterprétation.
  - INTERDIT dans V1: tout genre externe, toute influence secondaire, tout style blend, toute fusion.
  - V1 = Si quelqu'un écoute ce prompt, il DOIT reconnaître immédiatement "${inspiredBy}".

  V2 (EVOLUTION) — OBLIGATOIREMENT différente de V1 sur 2 dimensions:
  - BPM: ±10-20 BPM par rapport à V1
  - GRAIN: texture plus claire OU plus sombre que V1 (choisir l'opposé)
  - ÈRE: ${adjacentEra} au lieu de ${era} (sonorité un peu plus vintage)
  - STYLE BLEND LÉGER AUTORISÉ: Peut intégrer des touches subtiles d'un genre adjacent, mais l'identité de "${inspiredBy}" reste dominante (80%+).
  - Conserver: même signature vocale, même genre-racine ${genre}
  INTERDIT: copier-coller ou paraphraser V1.

  V3 (FUSION) — OBLIGATOIREMENT différente de V1 ET V2 sur 3 dimensions:
  - STYLE BLEND FORT: intégrer des éléments de "${fusionGenre}" dans le mix (jusqu'à 40% d'influence externe)
  - INSTRUMENTS: au moins 2 instruments différents de V1 (ex: percussion organique, basse live, synthé vintage)
  - ESPACE: réverb et profondeur opposées à V1 (si V1 est proche/intime → V3 est large/ample, et vice-versa)
  - Conserver: signature vocale artiste, GRAIN caractéristique, BPM adjacent (±15)
  INTERDIT: copier-coller ou paraphraser V1 ou V2.

  RAPPEL CRITIQUE: V1 = SON PUR DE L'ARTISTE (0% blend). V2 = Évolution légère. V3 = Fusion créative.

  VALIDATION FINALE: Lis tes 3 variantes. Si 2 d'entre elles partagent plus de 50% des mêmes tokens → régénère.
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
  const styleBlendInfo = styleBlend ? `- Style Blending (Influences — UNIQUEMENT POUR V2 et V3, JAMAIS V1) : ${styleBlend}` : "";
  const secondaryArtistInfo = secondaryInspiredBy !== 'none' ? `- Artiste Secondaire (Style Blending) : ${secondaryInspiredBy}` : "";
  const advancedTagsInfo = advancedTags.length > 0 ? `- Tags ADN Avancés : ${advancedTags.join(', ')}` : "";
  const genreNegativePrompt = getGenreSpecificNegativePrompt(genre, inspiredBy);
  const sonicDNA = getArtistSonicDNA(inspiredBy);

  // FIX #9: Secondary artist blending
  let secondaryBlendingBlock = '';
  if (secondaryInspiredBy && secondaryInspiredBy !== 'none') {
    const secondarySonicDNA = getArtistSonicDNA(secondaryInspiredBy);
    const secondaryInstructions = getArtistSpecificInstructions(secondaryInspiredBy);
    if (secondarySonicDNA || secondaryInstructions) {
      secondaryBlendingBlock = `
# SECONDARY ARTIST BLENDING (UNIQUEMENT POUR V2 ET V3 — JAMAIS V1):
Artiste Secondaire : ${secondaryInspiredBy}
${secondarySonicDNA ? `Secondary Sonic DNA: ${secondarySonicDNA.sunoStyleTemplate}` : ''}
${secondaryInstructions ? `Secondary Instructions:\n${secondaryInstructions}` : ''}

RÈGLE CRITIQUE:
- V1 = 100% "${inspiredBy}" UNIQUEMENT. AUCUNE influence de "${secondaryInspiredBy}" dans V1.
- V2 = 80% "${inspiredBy}" + 20% "${secondaryInspiredBy}" (touches subtiles seulement).
- V3 = 70% "${inspiredBy}" + 30% "${secondaryInspiredBy}" (fusion créative).
INTERDIT: Appliquer le blending à V1. V1 doit rester le son PUR de "${inspiredBy}".
`;
    }
  }

  const artistExcludeStyles = sonicDNA?.sunoExcludeStyles || '';
  const combinedNegativePrompt = [artistExcludeStyles || genreNegativePrompt, customNegativePrompt].filter(Boolean).join(', ');
  const negativePromptInfo = combinedNegativePrompt ? `- ÉLÉMENTS À EXCLURE ABSOLUMENT (NEGATIVE PROMPT) : ${combinedNegativePrompt}` : "";
  const sunoV55Info = `
- Weirdness (V5.5) : ${weirdness}/100
- Style Influence : ${styleInfluence}/100`;
  const artistIdentityInfo = artistIdentitySummary ? `
# ANALYSE D'IDENTITÉ ARTISTIQUE (SCRAPED DATA):
${artistIdentitySummary}
` : "";
  const performanceInfo = performanceActive ? `
- Énergie Globale : ${energy}/100
- Intensité Émotionnelle : ${emotionalIntensity}/100` : "";

  const modeInfo = mode === 'lyrics'
    ? `CRITIQUE : Tu dois te concentrer EXCLUSIVEMENT sur la réécriture des PAROLES.
       - Ton objectif est d'atteindre un mimétisme ABSOLU avec l'écriture de l'artiste "${inspiredBy}".
       - Analyse son vocabulaire spécifique, ses tics de langage, son placement rythmique (flow) et sa philosophie.
       - Le texte doit être COMPLET (Intro, Couplets, Refrains, Outro).
       - Pour un rappeur, le texte doit être CRU, SINCÈRE et "SENTIR LE VÉCU". Raconte des tranches de vie, des détails précis du quotidien, des galères réelles. Évite les généralités.
       - Utilise des rimes complexes et une structure qui reflète exactement la technicité de l'artiste original.`
    : mode === 'style'
    ? "CRITIQUE : Tu dois te concentrer EXCLUSIVEMENT sur l'optimisation du PROMPT DE STYLE (Suno Style Box). Les paroles sont secondaires ou peuvent être ignorées, mais le prompt de style doit être une évolution majeure basée sur les nouveaux paramètres."
    : "CRITIQUE : Génération complète. Crée une synergie parfaite entre le style musical et les paroles.";

  const languageInfo = language === 'AUCUNE'
    ? "Langue : Déduis la langue la plus appropriée selon le style de l'artiste inspiré. IMPORTANT : Pour les artistes raï/algériens (Cheb Mami, Soolking, Babylone, Djalil Palermo, Rimk, L'Algérino, etc.), la langue est TOUJOURS un MIX français-arabe (darija). JAMAIS 100% arabe. Alterne les couplets/phrases entre français et darija avec des tags [in french] et [in arabic]."
    : `Langue : ${language}`;

  const melodicArtist = isArtistMelodic(inspiredBy);
  const vocalDeliveryRule = melodicArtist
    ? `- VOCAL DELIVERY — ARTISTE MÉLODIQUE DÉTECTÉ : L'artiste "${inspiredBy}" est un artiste MÉLODIQUE. Le chant avec autotune EST sa signature. INTERDICTION de forcer un flow rap sec/technique. Privilégie le chant mélodique, les hooks chantés, les mélodies vocales. L'autotune mélodique est BIENVENU et ATTENDU.`
    : `- VOCAL DELIVERY VARIETY : Pour le RAP/TRAP technique, privilégie un flow rythmique percutant (Staccato, Triplet flow, Off-beat) plutôt que du chant mélodique systématique. Varie entre [Rhythmic flow], [Melodic rap], [Aggressive chant] et [Spoken word].`;

  const vocoderRule = melodicArtist
    ? `- AUTOTUNE/VOCODER : Pour cet artiste mélodique, l'autotune est un OUTIL CRÉATIF ESSENTIEL, pas un défaut. Utilise-le de manière artistique et conforme à la signature de "${inspiredBy}".`
    : `- ÉVITE LE VOCODER/CHANT SYSTÉMATIQUE : Si l'artiste est identifié comme "lyriciste" ou "technicien" dans son profil, INTERDICTION de chanter ou d'utiliser un autotune mélodique. Le flow doit être sec, articulé et purement rappé.`;

  // ── VARIANT DIVERGENCE: injected to prevent identical V2/V3
  const variantDivergenceBlock = buildVariantDivergenceConstraints(genre, inspiredBy, era);

  const systemInstruction = `Tu es un expert mondial en production musicale et en prompting pour Suno AI V5.5.

  RÈGLES CRITIQUES :
  - STYLE PROMPT : 500-600 caractères. Suno pèse les premiers tokens plus lourdement — front-load les textures. Format 10 DIMENSIONS (ordre strict) : [STYLE BLEND: 3-5 sous-genres/textures] + [BPM: fourchette, Key: tonalité] + [GRAIN: texture sonore] + [ESPACE: profondeur/reverb] + [INSTRUMENTS: éléments dominants] + [VOCAL TEXTURE: grain et couleur vocale] + [DYNAMIC: progression build/drop] + [MIX: saturation, stereo, compression] + [CULTURAL FLAVOR: ancrage culturel] + [ÈRE: décennie]. RÈGLE: Texture over Genre — privilégier les adjectifs de texture aux noms de genre.
  - LYRICS : Structure complète adaptée au genre. Utilise [ ] pour les balises de structure et ( ) pour les ad-libs. Suno V5.5 supporte des balises avancées comme [Pre-Chorus], [Post-Chorus], [Bridge], [Interlude], [Solo: Instrument], [Break], [Build], [Drop].
  - REGISTRE DE LANGAGE : Adapte impérativement le vocabulaire selon l'intensité (${emotionalIntensity}/100) et l'énergie (${energy}/100).
    * Basse intensité : Poétique, imagé, contemplatif.
    * Haute intensité : Cru, direct, percutant, utilisation d'argot technique.
  ${vocalDeliveryRule}
  - VIBE & FLOW : La "vibe" est primordiale. Utilise des ad-libs atmosphériques (Ouh, Yeah, Skrr) pour créer de l'espace. Le "flow" doit être élastique : alterne entre des moments rapides et des moments de silence ou de traînées vocales (vocal trails).
  - PRODUCTION QUALITY : Vise une qualité "Studio Master". Utilise des tags comme [High-fidelity], [Pristine clarity], [Punchy transients], [Warm analog saturation], [Wide stereo image].
  - CODES DU STYLE : Intègre les tics de langage, les onomatopées et les placements rythmiques spécifiques au genre (ex: "Skrr", "Ouh", "Grrr" pour la Drill; ad-libs mélodiques pour le R&B).
  - ANTI-GÉNÉRIQUE & TEXTURES : BANNI les tags comme "Trap" ou "Pop". Utilise des textures sonores et vocales précises (ex: [Industrial Dark Techno], [Ethereal Cloud Rap], [Crisp high-end], [Warm analog saturation], [Lo-fi grit], [Sidechained compression], [Stereo widening], [Punchy transients]).
  - ÉVITE LE "DARK ORCHESTRAL" SYSTÉMATIQUE : Pour le rap, n'utilise des éléments orchestraux (violons, choeurs) QUE si le profil artiste chargé le demande expressément. Sinon, privilégie des textures plus sèches, jazzy, industrielles ou minimalistes.
  ${vocoderRule}
  - ZERO TOLERANCE : Ne cite JAMAIS de noms d'artistes réels, de marques, de labels, de titres d'albums/morceaux, de noms de villes associées à un artiste, ou de slogans/ad-libs iconiques trop identifiables. Les paroles doivent être ORIGINALES et impossibles à attribuer à un artiste existant.
  - AD-LIBS : Utilise des ad-libs génériques mais stylés (ex: "Yeah", "Ouh", "Skrr", "Grrr", "Hey") pour capturer l'énergie sans copier l'identité.
  - JSON : Réponds uniquement en JSON valide.

  ${sonicDNA ? `WRITING SKILLS DNA (RÉSERVÉ À V2 ET V3 UNIQUEMENT — V1 INTERDIT D'UTILISER CETTE SECTION):
  RÈGLE ABSOLUE: Pour V1, cette section N'EXISTE PAS. V1 utilise EXCLUSIVEMENT le Sonic DNA + Artist Profile.
  Pour V2/V3 seulement:
  ${getRelevantWritingDNA(inspiredBy, genre)}` : `WRITING SKILLS DNA (pas de Sonic DNA disponible — utiliser pour toutes les variantes):
  ${getRelevantWritingDNA(inspiredBy, genre)}`}

  RÈGLE D'OR : La langue des paroles DOIT correspondre à la culture du genre demandé. Déduis la langue, le slang et le flow appropriés à partir du profil de l'artiste.

  PHONÉTIQUE FRANÇAISE (SUNO V5.5) :
  Suno a des faiblesses documentées sur le français. Corriger en amont :
  - FINS DE VERS PRÉFÉRÉES : -é, -a, -ou, -i, -o (voyelles ouvertes = synthèse claire)
  - FINS À ÉVITER : -ance, -ence, -ment, -tion (nasales + clusters = synthèse floue)
  - CHORUS : syllabe ouverte sur le temps fort OBLIGATOIRE
  - ÉLISIONS : écrire telles qu'elles doivent sonner (j'veux, t'as, l'amour)
  - LIAISONS CRITIQUES : écrire explicitement si la liaison est essentielle au flow
  - LANGUE MIXTE : taguer les switches [in french], [en español], [in english]

  METATAGS V5.5 AVANCÉS (dans les lyrics) :
  Utilise ces tags sur des lignes séparées AVANT les lyrics de chaque section :
  - [Vocal Style: Whisper/Soft/Power/Raspy/Falsetto/Belt/Spoken Word/Rap]
  - [Vocal Effect: Reverb/Delay/Auto-tune/Vocoder/Distortion]
  - [Mood: Uplifting/Dark/Melancholic/Aggressive/Peaceful/Triumphant]
  - [Energy: Low/Medium/High/Rising/Maximum]
  - [Texture: Tape-Saturated/Vinyl Hiss/Lo-fi/Crisp Digital]
  - [Instrument: Piano/808 Bass/Strings (Legato)/Synth Pads/etc.]
  SYMBOLES DE DYNAMIQUE :
  - MAJUSCULES = crié/emphase forte
  - (texte) = choeurs/backing vocals
  - ~mot~ = note allongée/mélisme
  - *mot* = emphase
  - mot- = coupé abruptement
  SYNTAXE : UN tag par ligne. JAMAIS de tags composites sur une seule ligne.`;

  const productionInfo = productionStyle.toUpperCase().includes('HARDCORE')
    ? "\n# INSTRUCTION SPÉCIFIQUE PRODUCTION (HARDCORE/BRUT) :\n- INTERDICTION ABSOLUE de chanter ou d'utiliser du vocoder/autotune mélodique.\n- Le flow doit être purement RAPPÉ, sec, agressif et sans fioritures.\n- La production doit être MINIMALISTE et PERCUTANTE (Raw/Brut production).\n- Pas d'harmonies vocales, pas d'effets de lissage.\n"
    : "";

  const vocalTechniqueSpecifics = vocalTechnique !== 'none'
    ? `\n# INSTRUCTION TECHNIQUE VOCALE (V5.5) :\n- TECHNIQUE : ${vocalTechnique}.\n- NOTE : Applique cette technique de manière dominante sur l'ensemble de la performance vocale.\n`
    : "";

  const productionFinishSpecifics = productionFinish !== 'none'
    ? `\n# INSTRUCTION FINITION PRODUCTION (V5.5) :\n- FINITION : ${productionFinish}.\n- NOTE : Utilise des tags de production spécifiques pour obtenir ce rendu sonore (ex: [Binaural], [Sidechain], [Mid-Side]).\n`
    : "";

  const sonicDNABlock = sonicDNA ? `
# SONIC DNA — MUSIC GENERATION CONTROL ENGINE (FONDATION EXCLUSIVE DE V1):
Ce template est la BASE VALIDÉE pour V1. ENRICHIS-LE en 500-600 caractères.
INTERDIT: Ajouter des genres externes. V1 = CE TEMPLATE enrichi, rien d'autre.

## STYLE CORE (V1 EXCLUSIVEMENT — 0% blend):
${sonicDNA.sunoStyleTemplate}
BPM: ${sonicDNA.sunoBpmRange} | KEY: ${sonicDNA.sunoKey}
VOCAL TAGS: ${sonicDNA.sunoVocalTags.join(', ')}
WEIRDNESS: ${sonicDNA.sunoWeirdness}/100 | STYLE INFLUENCE: ${sonicDNA.sunoStyleInfluence}/100

## VOCAL ENGINE (comment la voix se comporte — appliquer aux 3 variantes):
${sonicDNA.vocalDNA || 'Non spécifié'}

## FLOW ENGINE (comment le rythme/débit fonctionne):
${sonicDNA.flowPattern || 'Non spécifié'}

## PRODUCTION ENGINE (quels sons dominent):
${sonicDNA.productionFingerprint || 'Non spécifié'}

${sonicDNA.structureDNA ? `## STRUCTURE DNA (CRITIQUE — comment le morceau est construit):
${sonicDNA.structureDNA}` : ''}

${sonicDNA.hookType ? `## HOOK TYPE (CRITIQUE — quel type de refrain):
${sonicDNA.hookType}` : ''}

${sonicDNA.vocalPlacement ? `## VOCAL PLACEMENT (CRITIQUE — position de la voix dans le mix/beat):
${sonicDNA.vocalPlacement}` : ''}

${sonicDNA.energyCurve ? `## ENERGY CURVE (CRITIQUE — dynamique du morceau):
${sonicDNA.energyCurve}` : ''}

## CONTEXTE CULTUREL:
${sonicDNA.culturalAnchors || 'Non spécifié'}

## ANTI-PATTERNS (comportements interdits):
${sonicDNA.antiPatterns || 'Non spécifié'}

## METATAGS V5.5 (injecter avant chaque section de lyrics):
[Vocal Style: ${sonicDNA.sunoMetatags?.vocalStyle || 'Rap'}]
[Vocal Effect: ${sonicDNA.sunoMetatags?.vocalEffect || 'Reverb'}]
[Mood: ${sonicDNA.sunoMetatags?.mood || 'Dark'}]
[Energy: ${sonicDNA.sunoMetatags?.energy || 'Medium'}]
[Texture: ${sonicDNA.sunoMetatags?.texture || 'Crisp Digital'}]
[Instrument: ${sonicDNA.sunoMetatags?.instrument || '808 Bass'}]
` : '';

  const artistSpecifics = getArtistSpecificInstructions(inspiredBy);

  // FIX #2: Genre fallback when sonicDNA is null
  const genreFallbackBlock = !sonicDNA ? `
# GENRE FALLBACK STYLE TEMPLATE (SONIC DNA NOT AVAILABLE):
${getGenreFallbackStyle(genre)}

UTILISE CE TEMPLATE COMME BASE POUR V1 et dérive V2/V3 de cette fondation.
` : '';

  // FIX #4: Instruction priority hierarchy
  const priorityBlock = `
# INSTRUCTION PRIORITY HIERARCHY (CRITICAL):
Priority 1 = Artist Profile (inspiredBy specific instructions)
Priority 2 = Sonic DNA (if available; validated templates)
Priority 3 = Genre defaults (fallback only)

STRICT RULE: Higher priority ALWAYS overrides lower. If Artist Profile says NO melodic singing, ignore genre defaults that suggest singing.
`;

  const prompt = `Génère une direction musicale ultra-précise pour l'artiste "${artist}".

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

  Détails de la session :
  - Genre : ${genre || 'NON SPÉCIFIÉ (À DÉDUIRE DE L\'INSPIRATION)'}
  - Ambiance (pour V2/V3 uniquement — V1 déduit du Sonic DNA) : ${mood || 'NON SPÉCIFIÉ (À DÉDUIRE DE L\'INSPIRATION)'}
  - RÈGLE AMBIANCE V1 : Pour V1, ignore le paramètre "Ambiance" ci-dessus. Déduis l'ambiance UNIQUEMENT du Sonic DNA et du profil artiste. L'ambiance utilisateur ne s'applique qu'à V2 et V3.
  - Thème : ${theme || 'NON SPÉCIFIÉ (IMPROVISE UNE THÉMATIQUE "VÉCUE" BASÉE SUR L\'ARTISTE)'}
  - ${languageInfo}
  - Inspiré par : ${inspiredBy}
  - Époque/Era : ${era}
  ${performanceInfo}
  - Instrumentation : ${instrumentation}
  - Production Style : ${productionStyle}
  - BPM : ${bpmInfo}
  ${structureInfo}
  ${styleBlendInfo}
  ${negativePromptInfo}
  ${sunoV55Info}

  INSTRUCTIONS CRITIQUES POUR LA DIFFÉRENCIATION ARTISTIQUE :
  1. ANALYSE PROFONDE : Identifie la "signature sonore" de "${inspiredBy}" : instruments, placement rythmique, production.
  2. VULGARITÉ & STREET REALISM : Si RAP/URBAIN/STREET, utilise un langage CRU, de l'ARGOT, de la VULGARITÉ si ça sert l'authenticité.
  3. NAMING : "songTitle" tiré des paroles. "artistName" dans la langue de l'artiste.
  4. ANTI-GÉNÉRIQUE : BANNI "Trap" ou "Pop" seuls. Textures ultra-précises uniquement.
  5. RICHESSE LYRIQUE : Rimes multisyllabiques, internes, vocabulaire imagé. Zéro clichés.
  6. ESSENCE ARTISTIQUE : Au plus proche de "${inspiredBy}" sans copier ses textes.
  7. STYLE PROMPT BOX : 500-600 caractères, 10 DIMENSIONS, front-load les textures.
  8. VARIANTS : V1 = SON PUR de l'artiste (0% blend, fidélité maximale). V2 = Évolution (blend léger OK). V3 = Fusion créative (blend fort OK). V1 ≠ V2 ≠ V3.
  9. LYRICS : Structure complète, balises [ ], METATAGS V5.5 avant chaque section.
  10. ZERO TOLERANCE COMMERCIAL : Pas de noms réels, surnoms, titres, quartiers identifiables.

  ████████████████████████████████████████████████████████████████████
  ██ DERNIÈRE INSTRUCTION — LA PLUS IMPORTANTE DE TOUT CE PROMPT : ██
  ██                                                                ██
  ██ V1 (sunoPrompt) = SON PUR DE "${inspiredBy}" — 0% BLEND.     ██
  ██ V1 ne contient AUCUN genre externe, AUCUNE fusion, AUCUN      ██
  ██ "Afro", "Jazz", "Soul", "Electronic" etc. SAUF si c'est       ██
  ██ DÉJÀ PRÉSENT dans le Sonic DNA template de base ci-dessus.     ██
  ██ V1 = enrichissement du TEMPLATE DE BASE uniquement.            ██
  ██ Si tu ajoutes un genre absent du template → tu as ÉCHOUÉ.     ██
  ██                                                                ██
  ██ V2 et V3 PEUVENT blender. V1 JAMAIS.                          ██
  ████████████████████████████████████████████████████████████████████

  Réponds UNIQUEMENT en JSON sans backticks :
  {
    "artistName": "string",
    "songTitle": "string",
    "sunoPrompt": "string (V1 - 500-600 chars - ENRICHIR LE SONIC DNA TEMPLATE UNIQUEMENT - 0% GENRE EXTERNE)",
    "sunoPrompts": ["V1 identique à sunoPrompt (PUR, 0% blend, PAS de genre externe)", "V2 EVOLUTION (blend léger autorisé)", "V3 FUSION (blend créatif autorisé)"],
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
      model: "gemini-2.0-flash",
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

    // FIX #6: Structural validation using dimension-count check (10 dimension markers)
    const DIMENSION_MARKERS = ['bpm', 'key', 'vocal', 'bass', 'drum', 'hi-hat', 'synth', 'piano', 'reverb', 'stereo'];

    function countDimensions(text: string): number {
      const lower = text.toLowerCase();
      return DIMENSION_MARKERS.filter(marker => lower.includes(marker)).length;
    }

    if (sonicDNA?.sunoStyleTemplate) {
      const sonisTemplateDims = countDimensions(sonicDNA.sunoStyleTemplate);
      const v1Dims = countDimensions(parsed.sunoPrompt || '');

      // FIX A+G: NEVER silently revert V1 to raw template — V1 is Gemini's enriched version.
      // If V1 is weak, APPEND missing dimensions from template instead of replacing.
      if (v1Dims < sonisTemplateDims / 2) {
        // Merge: keep Gemini's enriched V1 but append the DNA template signature tokens
        const enrichedV1 = parsed.sunoPrompt || '';
        const templateTokens = sonicDNA.sunoStyleTemplate.split(',').map(t => t.trim()).filter(t => t.length > 2);
        const v1Lower = enrichedV1.toLowerCase();
        // Only add tokens from template that are NOT already in V1
        const missingTokens = templateTokens.filter(t => !v1Lower.includes(t.toLowerCase().slice(0, 8)));
        if (missingTokens.length > 0) {
          parsed.sunoPrompt = enrichedV1 + ', ' + missingTokens.join(', ');
        }
        // FIX 2.1: Smart truncation at comma boundary (never cut mid-word)
        if (parsed.sunoPrompt && parsed.sunoPrompt.length > 600) {
          const lastComma = parsed.sunoPrompt.lastIndexOf(',', 600);
          parsed.sunoPrompt = lastComma > 400 ? parsed.sunoPrompt.slice(0, lastComma) : parsed.sunoPrompt.slice(0, 600);
        }
      }
    }

    const coreVariant = parsed.sunoPrompt || (parsed.sunoPrompts?.[0]) || "";
    const variants = parsed.sunoPrompts || [];

    // FIX #5 + FIX E: Enhanced variant deduplication — V1 (coreVariant) is IMMUTABLE, never modified.
    // Only V2 (i=1) and V3 (i=2) are checked for similarity and diverged if needed.
    const deduplicated = [coreVariant]; // V1 = PURE, pushed as-is
    for (let i = 1; i < 3; i++) {
      // If Gemini didn't return a V2/V3, DON'T clone V1 — create a divergent version instead
      let v = variants[i] && variants[i] !== coreVariant ? variants[i] : '';

      // Token-based similarity check: if >80% tokens shared, force divergence
      const vTokens = new Set(v.toLowerCase().split(/[\[\],\s]+/).filter(t => t.length > 3));
      const coreTokens = new Set(coreVariant.toLowerCase().split(/[\[\],\s]+/).filter(t => t.length > 3));
      const shared = [...vTokens].filter(t => coreTokens.has(t)).length;
      const similarity = vTokens.size > 0 ? shared / vTokens.size : 1;

      // If empty (Gemini didn't return this variant) or >80% similar to V1, force divergence
      if (!v || similarity > 0.80) {
        // Start from coreVariant and MODIFY it — never use V1 as-is for V2/V3
        let modifiedV = v || coreVariant;
        const bpmMatch = coreVariant.match(/(\d{2,3})-(\d{2,3})\s*BPM/i);

        if (bpmMatch) {
          const bpmMin = parseInt(bpmMatch[1]);
          const bpmMax = parseInt(bpmMatch[2]);
          const coreMid = (bpmMin + bpmMax) / 2;
          // V2: shift down, V3: shift up — ensures V2 ≠ V3
          const shift = i === 1 ? -15 : 15;
          const newBpmMin = Math.max(60, coreMid + shift - 10);
          const newBpmMax = Math.min(200, coreMid + shift + 10);
          modifiedV = modifiedV.replace(/(\d{2,3})-(\d{2,3})\s*BPM/i, `${Math.round(newBpmMin)}-${Math.round(newBpmMax)} BPM`);
        }

        // V2: toggle key, V3: toggle key opposite direction
        if (i === 1 && modifiedV.includes('Minor')) {
          modifiedV = modifiedV.replace(/Minor/g, 'Major');
        } else if (i === 2 && modifiedV.includes('Major')) {
          modifiedV = modifiedV.replace(/Major/g, 'Minor');
        } else if (modifiedV.includes('Minor')) {
          modifiedV = modifiedV.replace(/Minor/g, 'Major');
        }

        // Add divergence marker
        if (!modifiedV.includes('[DIVERGENCE]')) {
          modifiedV = `[DIVERGENCE V${i + 1}] ` + modifiedV;
        }

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
    // FIX #10 + FIX D: Error fallback — V1 uses pure DNA template, V2/V3 get divergent versions
    const fallbackTemplate = sonicDNA?.sunoStyleTemplate || getGenreFallbackStyle(genre);
    const v1Fallback = fallbackTemplate || "Error generating prompt. Please try again.";
    // V2/V3: crude divergence from V1 fallback
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
      quality: { score: 0, message: `[FALLBACK] Generation failed. V1 = raw DNA template (not enriched). Retry recommended. Error: ${lastError?.message || "Unknown error"}` }
    };
  });
}

export async function suggestArtistAndTitle(theme: string, genre: string, mood: string) {
  const prompt = `Génère un nom d'artiste FICTIF original et un titre de chanson percutant basés sur :
  - Thème : ${theme}
  - Genre : ${genre}
  - Ambiance : ${mood}

  Règles :
  - Ne cite JAMAIS d'artiste réel.
  - Le nom doit être original, mémorable et coller au genre.
  - Si le genre est RAP ou URBAIN, le nom et le titre doivent avoir une "vibe" street, authentique, brute.
  - Le titre doit être évocateur du thème et "sentir le vécu".

  Réponds UNIQUEMENT en JSON.`;

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

  const prompt = `Recherche et analyse l'identité vocale de l'artiste "${artistName}".
  Tu dois identifier avec précision :
  - Son type de voix (ex: Soprano, Tenor, Baritone, etc.)
  - Son timbre vocal (ex: Airy, Raspy, Clean, Warm, Metallic, etc.)
  - Son style de chant dominant. Analyse spécifiquement s'il s'agit de chant mélodique (singing flow) ou de rap traditionnel.
  - Sa présence vocale habituelle.
  - Ses caractéristiques d'accent ou de couleur linguistique.
  - L'utilisation de l'autotune et des effets.
  - Sa langue principale de chant. Si l'artiste chante en PLUSIEURS langues, indique le MIX exact (ex: "FRANÇAIS-ARABE", "FRANÇAIS-ANGLAIS"). Pour les artistes raï algériens, indiquer "FRANÇAIS-ARABE" et non juste "ARABE".
  - Le GENRE de l'artiste : homme ou femme.
  - WEIRDNESS (0-100) : à quel point son style est expérimental.
  - STYLE INFLUENCE (0-100) : à quel point son identité stylistique est forte.

  Utilise Google Search.

  Réponds UNIQUEMENT en JSON sans backticks :
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
        systemInstruction: "Tu es un expert en analyse vocale et en musicologie. IMPORTANT: Réponds UNIQUEMENT en JSON valide, sans markdown ni texte avant/après."
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
  const prompt = `Tu es un expert en écriture de paroles pour Suno AI V5.5, travaillant sur une session COLORSxSTUDIOS.

  Contexte musical :
  - Genre : ${context.genre}
  - Ambiance : ${context.mood}
  - Thème : ${context.theme}
  - Artiste inspiré par : ${context.inspiredBy}

  Tu dois régénérer les paroles pour la section suivante :
  Type : ${verse.type}
  Prompt original : ${verse.prompt}
  Texte actuel (à améliorer) : ${verse.text}

  INSTRUCTIONS :
  - Garde la cohérence avec le style et le thème global.
  - Utilise les balises de structure Suno V5.5 et les METATAGS V5.5 AVANCÉS si nécessaire.
  - Intègre les tags Vocal Style, Vocal Effect, Mood, Energy, Texture et Instrument sur des lignes séparées avant les lyrics.
  - INTERDICTION FORMELLE : Ne cite JAMAIS le nom d'un artiste réel, de marque ou de label.
  - Réponds UNIQUEMENT avec le nouveau texte des paroles.`;

  return withRetry(async () => {
    const response = await callGemini({
      model: "gemini-2.0-flash",
      contents: prompt,
      config: {
        systemInstruction: "Tu es un expert en écriture de paroles musicales. Tu réponds uniquement avec les paroles régénérées avec les metatags V5.5."
      }
    });

    return response.text || verse.text;
  });
}
