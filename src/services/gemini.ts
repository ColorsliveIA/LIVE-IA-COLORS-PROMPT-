import { Verse } from "../types";
import { getArtistSpecificInstructions, getRelevantWritingDNA } from './artist-profiles';

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
        e?.error?.status === 'RESOURCE_EXHAUSTED' ||
        e?.message?.includes('high demand');

      if (isRetryable && i < maxRetries) {
        const delay = (e?.message?.includes('429') || e?.error?.code === 429)
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

  if (!response.ok) {
    const error = await response.json();
    const err: any = new Error(error.error || "Gemini API request failed");
    err.status = response.status;
    err.message = error.error || `HTTP ${response.status}`;
    throw err;
  }

  return await response.json();
}

export async function analyzeAudio(base64Data: string, mimeType: string) {
  const systemInstruction = "Tu es un ingÃ©nieur du son et analyste musical expert. Ta mission est d'Ã©couter attentivement le fichier audio fourni et d'en extraire des mÃ©tadonnÃ©es techniques et artistiques prÃ©cises pour alimenter un moteur de gÃ©nÃ©ration musicale (Suno AI). Sois extrÃªmement prÃ©cis sur le BPM et le genre.";

  const prompt = `Analyse ce fichier audio (MIME: ${mimeType}) avec la plus grande prÃ©cision.

  Identifie les Ã©lÃ©ments suivants :
  1. BPM : Calcule le tempo exact.
  2. GENRE : Identifie le genre et les sous-genres (ex: Melodic Trap, Lo-fi Hip Hop).
  3. MOOD : DÃ©cris l'atmosphÃ¨re Ã©motionnelle.
  4. STRUCTURE : DÃ©taille l'arrangement (ex: Intro -> Verse -> Chorus).
  5. ARTIST INFO : Si tu reconnais l'artiste ou le style, donne des dÃ©tails via recherche Google.
  6. ENERGY : Note l'intensitÃ© globale de 0 Ã  100.
  7. VOCAL STYLE : DÃ©cris la texture et la technique vocale.

  RÃ©ponds UNIQUEMENT en JSON :
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
      model: "gemini-3-flash-preview",
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
        responseMimeType: "application/json",
        tools: [{ googleSearch: {} }]
      }
    });

    try {
      return JSON.parse(response.text || "{}");
    } catch (e) {
      console.error("Error parsing audio analysis:", e);
      return null;
    }
  });
}

function getGenreSpecificNegativePrompt(genre: string): string {
  const g = genre.toUpperCase();
  if (g.includes('RAP') || g.includes('HIP HOP') || g.includes('TRAP')) {
    return "singing, pop vocals, acoustic guitar, happy, bright, cheesy, generic pop, country, rock, metal, opera, classical, high-pitched, autotune singing, melodic pop hooks, radio-friendly pop, bubblegum pop, nursery rhymes, generic trap beats, weak bass, thin drums, stock sounds, default midi, amateur mixing, muddy, clipping, over-compressed, generic loops, royalty-free sounding";
  }
  if (g.includes('HOUSE') || g.includes('TECHNO') || g.includes('ELECTRO')) {
    return "acoustic guitar, country, rock, metal, opera, classical, folk, jazz, blues, reggae, soul, funk, disco, r&b, hip hop, rap, trap, pop, ballad, slow, acoustic, unplugged, live";
  }
  if (g.includes('POP')) {
    return "heavy metal, death metal, screaming, growling, harsh vocals, dark, gloomy, depressing, industrial, noise, experimental, avant-garde, complex jazz, classical, opera";
  }
  return "";
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
  const bpmInfo = manualBpm ? `- BPM imposÃ© : ${manualBpm} BPM` : (performanceActive ? `- BPM : Automatique (adaptÃ© Ã  l'Ã©nergie ${energy})` : `- BPM : Automatique`);
  const structureInfo = structure ? `- Structure souhaitÃ©e : ${structure}` : "";
  const styleBlendInfo = styleBlend ? `- Style Blending (Influences) : ${styleBlend}` : "";
  const vocalTechniqueInfo = vocalTechnique !== 'none' ? `- Technique Vocale SpÃ©cifique : ${vocalTechnique}` : "";
  const productionFinishInfo = productionFinish !== 'none' ? `- Finition de Production : ${productionFinish}` : "";
  const secondaryArtistInfo = secondaryInspiredBy !== 'none' ? `- Artiste Secondaire (Style Blending) : ${secondaryInspiredBy}` : "";
  const advancedTagsInfo = advancedTags.length > 0 ? `- Tags ADN AvancÃ©s : ${advancedTags.join(', ')}` : "";
  const genreNegativePrompt = getGenreSpecificNegativePrompt(genre);
  const combinedNegativePrompt = [genreNegativePrompt, customNegativePrompt].filter(Boolean).join(', ');
  const negativePromptInfo = combinedNegativePrompt ? `- ÃLÃMENTS Ã EXCLURE ABSOLUMENT (NEGATIVE PROMPT) : ${combinedNegativePrompt}` : "";
  const weirdnessGuidanceText = "WEIRDNESS est un curseur UI Suno (0-100), pas un token texte. Recommande la valeur optimale pour ce genre/artiste. Style Influence sweet spot = 70-80%.";
  const sunoV55Info = `
- Weirdness (V5.5) : ${weirdness}/100
- Style Influence : ${styleInfluence}/100`;
  const artistIdentityInfo = artistIdentitySummary ? `
# ANALYSE D'IDENTITÃ ARTISTIQUE (SCRAPED DATA):
${artistIdentitySummary}
` : "";
  const performanceInfo = performanceActive ? `
- Ãnergie Globale : ${energy}/100
- IntensitÃ© Ãmotionnelle : ${emotionalIntensity}/100` : "";

  const modeInfo = mode === 'lyrics'
    ? `CRITIQUE : Tu dois te concentrer EXCLUSIVEMENT sur la rÃ©Ã©criture des PAROLES.
       - Ton objectif est d'atteindre un mimÃ©tisme ABSOLU avec l'Ã©criture de l'artiste "${inspiredBy}".
       - Analyse son vocabulaire spÃ©cifique, ses tics de langage, son placement rythmique (flow) et sa philosophie.
       - Le texte doit Ãªtre COMPLET (Intro, Couplets, Refrains, Outro).
       - Pour un rappeur, le texte doit Ãªtre CRU, SINCÃRE et "SENTIR LE VÃCU". Raconte des tranches de vie, des dÃ©tails prÃ©cis du quotidien, des galÃ¨res rÃ©elles. Ãvite les gÃ©nÃ©ralitÃ©s.
       - Utilise des rimes complexes et une structure qui reflÃ¨te exactement la technicitÃ© de l'artiste original.`
    : mode === 'style'
    ? "CRITIQUE : Tu dois te concentrer EXCLUSIVEMENT sur l'optimisation du PROMPT DE STYLE (Suno Style Box). Les paroles sont secondaires ou peuvent Ãªtre ignorÃ©es, mais le prompt de style doit Ãªtre une Ã©volution majeure basÃ©e sur les nouveaux paramÃ¨tres."
    : "CRITIQUE : GÃ©nÃ©ration complÃ¨te. CrÃ©e une synergie parfaite entre le style musical et les paroles.";

  const languageInfo = language === 'AUCUNE'
    ? "Langue : DÃ©duis la langue la plus appropriÃ©e selon le style de l'artiste inspirÃ©."
    : `Langue : ${language}`;

  const systemInstruction = `Tu es un expert mondial en production musicale et en prompting pour Suno AI V5.5.

  RÃGLES CRITIQUES :
  - STYLE PROMPT : 200-250 caractÃ¨res. Suno pÃ¨se les premiers tokens plus lourdement â front-load les textures. Format 6 DIMENSIONS (ordre strict) : [STYLE BLEND: 3 sous-genres/textures] + [BPM: fourchette, Key: tonalitÃ©] + [GRAIN: texture sonore] + [ESPACE: profondeur/rÃ©verb] + [INSTRUMENTS: Ã©lÃ©ments dominants] + [ÃRE: dÃ©cennie]. RÃGLE: Texture over Genre â privilÃ©gier les adjectifs de texture aux noms de genre.
  - LYRICS : Structure complÃ¨te adaptÃ©e au genre. Utilise [ ] pour les balises de structure et ( ) pour les ad-libs. Suno V5.5 supporte des balises avancÃ©es comme [Pre-Chorus], [Post-Chorus], [Bridge], [Interlude], [Solo: Instrument], [Break], [Build], [Drop].
  - REGISTRE DE LANGAGE : Adapte impÃ©rativement le vocabulaire selon l'intensitÃ© (${emotionalIntensity}/100) et l'Ã©nergie (${energy}/100).
    * Basse intensitÃ© : PoÃ©tique, imagÃ©, contemplatif.
    * Haute intensitÃ© : Cru, direct, percutant, utilisation d'argot technique.
  - VOCAL DELIVERY VARIETY : Pour le RAP/TRAP, privilÃ©gie un flow rythmique percutant (Staccato, Triplet flow, Off-beat) plutÃ´t que du chant mÃ©lodique systÃ©matique. Varie entre [Rhythmic flow], [Melodic rap], [Aggressive chant] et [Spoken word].
  - VIBE & FLOW : La "vibe" est primordiale. Utilise des ad-libs atmosphÃ©riques (Ouh, Yeah, Skrr) pour crÃ©er de l'espace. Le "flow" doit Ãªtre Ã©lastique : alterne entre des moments rapides et des moments de silence ou de traÃ®nÃ©es vocales (vocal trails).
  - PRODUCTION QUALITY : Vise une qualitÃ© "Studio Master". Utilise des tags comme [High-fidelity], [Pristine clarity], [Punchy transients], [Warm analog saturation], [Wide stereo image].
  - CODES DU STYLE : IntÃ¨gre les tics de langage, les onomatopÃ©es et les placements rythmiques spÃ©cifiques au genre (ex: "Skrr", "Ouh", "Grrr" pour la Drill; ad-libs mÃ©lodiques pour le R&B).
  - ANTI-GÃNÃRIQUE & TEXTURES : BANNI les tags comme "Trap" ou "Pop". Utilise des textures sonores et vocales prÃ©cises (ex: [Industrial Dark Techno], [Ethereal Cloud Rap], [Crisp high-end], [Warm analog saturation], [Lo-fi grit], [Sidechained compression], [Stereo widening], [Punchy transients]).
  - ÃVITE LE "DARK ORCHESTRAL" SYSTÃMATIQUE : Pour le rap, n'utilise des Ã©lÃ©ments orchestraux (violons, choeurs) QUE si le profil artiste chargÃ© le demande expressÃ©ment. Sinon, privilÃ©gie des textures plus sÃ¨ches, jazzy, industrielles ou minimalistes.
  - ÃVITE LE VOCODER/CHANT SYSTÃMATIQUE : Si l'artiste est identifiÃ© comme "lyriciste" ou "technicien" dans son profil, INTERDICTION de chanter ou d'utiliser un autotune mÃ©lodique. Le flow doit Ãªtre sec, articulÃ© et purement rappÃ©.
  - ZERO TOLERANCE : Ne cite JAMAIS de noms d'artistes rÃ©els, de marques, de labels ou de slogans/ad-libs iconiques trop identifiables. Aucun surnom, aucune catchphrase, aucun tag vocal reconnaissable.
  - AD-LIBS : Utilise des ad-libs gÃ©nÃ©riques mais stylÃ©s (ex: "Yeah", "Ouh", "Skrr", "Grrr", "Hey") pour capturer l'Ã©nergie sans copier l'identitÃ©.
  - JSON : RÃ©ponds uniquement en JSON valide.

  WRITING SKILLS DNA (chargÃ© dynamiquement) :
  ${getRelevantWritingDNA(inspiredBy, genre)}

  RÃGLE D'OR : La langue des paroles DOIT correspondre Ã  la culture du genre demandÃ©. DÃ©duis la langue, le slang et le flow appropriÃ©s Ã  partir du profil de l'artiste.

  PHONÃTIQUE FRANÃAISE (SUNO V5.5) :
  Suno a des faiblesses documentÃ©es sur le franÃ§ais. Corriger en amont :
  - FINS DE VERS PRÃFÃRÃES : -Ã©, -a, -ou, -i, -o (voyelles ouvertes = synthÃ¨se claire)
  - FINS Ã ÃVITER : -ance, -ence, -ment, -tion (nasales + clusters = synthÃ¨se floue)
  - CHORUS : syllabe ouverte sur le temps fort OBLIGATOIRE
  - ÃLISIONS : Ã©crire telles qu'elles doivent sonner (j'veux, t'as, l'amour)
  - LIAISONS CRITIQUES : Ã©crire explicitement si la liaison est essentielle au flow
  - LANGUE MIXTE : taguer les switches [in french], [en espaÃ±ol], [in english]

  METATAGS V5.5 AVANCÃS (dans les lyrics) :
  Utilise ces tags sur des lignes sÃ©parÃ©es AVANT les lyrics de chaque section :
  - [Vocal Style: Whisper/Soft/Power/Raspy/Falsetto/Belt/Spoken Word/Rap]
  - [Vocal Effect: Reverb/Delay/Auto-tune/Vocoder/Distortion]
  - [Mood: Uplifting/Dark/Melancholic/Aggressive/Peaceful/Triumphant]
  - [Energy: Low/Medium/High/Rising/Maximum]
  - [Texture: Tape-Saturated/Vinyl Hiss/Lo-fi/Crisp Digital]
  - [Instrument: Piano/808 Bass/Strings (Legato)/Synth Pads/etc.]
  SYMBOLES DE DYNAMIQUE :
  - MAJUSCULES = criÃ©/emphase forte
  - (texte) = chÅurs/backing vocals
  - ~mot~ = note allongÃ©e/mÃ©lisme
  - *mot* = emphase
  - mot- = coupÃ© abruptement
  SYNTAXE : UN tag par ligne. JAMAIS de tags composites sur une seule ligne.`;

  const productionInfo = productionStyle.toUpperCase().includes('HARDCORE')
    ? "\n# INSTRUCTION SPÃCIFIQUE PRODUCTION (HARDCORE/BRUT) :\n- INTERDICTION ABSOLUE de chanter ou d'utiliser du vocoder/autotune mÃ©lodique.\n- Le flow doit Ãªtre purement RAPPÃ, sec, agressif et sans fioritures.\n- La production doit Ãªtre MINIMALISTE et PERCUTANTE (Raw/Brut production).\n- Pas d'harmonies vocales, pas d'effets de lissage.\n"
    : "";

  const vocalTechniqueSpecifics = vocalTechnique !== 'none'
    ? `\n# INSTRUCTION TECHNIQUE VOCALE (V5.5) :\n- TECHNIQUE : ${vocalTechnique}.\n- NOTE : Applique cette technique de maniÃ¨re dominante sur l'ensemble de la performance vocale.\n`
    : "";

  const productionFinishSpecifics = productionFinish !== 'none'
    ? `\n# INSTRUCTION FINITION PRODUCTION (V5.5) :\n- FINITION : ${productionFinish}.\n- NOTE : Utilise des tags de production spÃ©cifiques pour obtenir ce rendu sonore (ex: [Binaural], [Sidechain], [Mid-Side]).\n`
    : "";

  // OPTIMIZED: Artist-specific instructions loaded from dictionary (saves ~80% tokens)
  const artistSpecifics = getArtistSpecificInstructions(inspiredBy);

  const prompt = `GÃ©nÃ¨re une direction musicale ultra-prÃ©cise pour l'artiste "${artist}".

  ${modeInfo}

  ${productionInfo}
  ${vocalTechniqueSpecifics}
  ${productionFinishSpecifics}
  ${secondaryArtistInfo}
  ${advancedTagsInfo}

  ${artistSpecifics}

  ${artistIdentityInfo}

  DÃ©tails de la session :
  - Genre : ${genre || 'NON SPÃCIFIÃ (Ã DÃDUIRE DE L\'INSPIRATION)'}
  - Ambiance : ${mood || 'NON SPÃCIFIÃ (Ã DÃDUIRE DE L\'INSPIRATION)'}
  - ThÃ¨me : ${theme || 'NON SPÃCIFIÃ (IMPROVISE UNE THÃMATIQUE "VÃCUE" BASÃE SUR L\'ARTISTE)'}
  - ${languageInfo}
  - InspirÃ© par : ${inspiredBy}
  - Ãpoque/Era : ${era}
  ${performanceInfo}
  - Instrumentation : ${instrumentation}
  - Production Style : ${productionStyle}
  - BPM : ${bpmInfo}
  ${structureInfo}
  ${styleBlendInfo}
  ${negativePromptInfo}
  ${sunoV55Info}

  INSTRUCTIONS DE RÃDACTION (FORMULE PAR GENRE) :
  1. SÃLECTION DE STRUCTURE : SÃ©lectionne la structure lyrique type la plus efficace et authentique pour le genre "${genre}".
  2. REMPLISSAGE THÃMATIQUE : DÃ©veloppe le thÃ¨me "${theme}" en utilisant des mÃ©taphores et des dÃ©tails concrets qui "sentent le vÃ©cu" de l'artiste "${inspiredBy}".
  3. INTENSITÃ & REGISTRE (MODULATION DYNAMIQUE) :
     - IntensitÃ© Ãmotionnelle : ${emotionalIntensity}/100.
     - Ãnergie : ${energy}/100.
     - Ajuste le registre de langage (soutenu, familier, cru) pour qu'il soit en parfaite adÃ©quation avec ces scores. Plus l'intensitÃ© est haute, plus le langage doit Ãªtre brut et direct.
  4. CODES DU STYLE : IntÃ¨gre impÃ©rativement les codes, gimmicks, ad-libs et placements rythmiques (flow) qui dÃ©finissent l'ADN du genre "${genre}".

  INSTRUCTIONS CRITIQUES POUR LA STRUCTURE ET LES REFRAINS :
  1. RECHERCHE DE STRUCTURE : Utilise Google Search pour analyser les structures de chansons professionnelles actuelles spÃ©cifiques au genre "${genre}".
  2. ARCHITECTURE DU REFRAIN (CHORUS) : Le refrain doit Ãªtre le point culminant. Adapte sa durÃ©e et son intensitÃ© au dynamisme du genre.
  3. ARCHITECTURE DU COUPLET (VERSE) : Les couplets posent le dÃ©cor. Adapte leur narration et leur dÃ©bit au genre "${genre}".
  4. DYNAMIQUE & MESURES : Adapte librement les mesures pour correspondre parfaitement aux standards de production et de composition du genre "${genre}". Ne reste pas figÃ© sur des schÃ©mas classiques si le genre demande de l'innovation.
  5. PROGRESSION : Assure-toi qu'il y a une progression logique et fluide adaptÃ©e au format choisi.

  INSTRUCTIONS CRITIQUES POUR LA DIFFÃRENCIATION ARTISTIQUE :
  1. ANALYSE PROFONDE & SIGNATURE SONORE : Utilise Google Search et l'ANALYSE D'IDENTITÃ ARTISTIQUE fournie pour analyser "${inspiredBy}". Ne te contente pas du genre global. Identifie sa "signature sonore" : quels instruments utilise-t-il ? (ex: pianos mÃ©lancoliques, guitares Ã©lectriques saturÃ©es, synthÃ©s analogiques granuleux). Quel est son placement rythmique (flow) ? Est-il en avance ou en retard sur le temps ?
  2. VULGARITÃ & STREET REALISM : Si le genre est RAP/URBAIN/STREET, utilise impÃ©rativement un langage CRU, de l'ARGOT (slang) et n'hÃ©site pas sur la VULGARITÃ (mots comme 'merde', 'putain', 'bordel', etc.) si elle sert l'authenticitÃ© et le rÃ©alisme de la rue. Les textes ne doivent absolument pas Ãªtre "propres" ou "polis", ils doivent Ãªtre provocateurs, sombres et authentiquement "street".
  3. NAMING : Le "songTitle" DOIT Ãªtre une expression tirÃ©e des paroles. Le "artistName" DOIT reflÃ©ter la langue de l'artiste (${languageInfo}).
  4. ANTI-GÃNÃRIQUE & TEXTURES : Pour Ã©viter que tous les sons se ressemblent, BANNI les tags gÃ©nÃ©riques comme "Trap" ou "Pop". Utilise des descriptions de textures et de sous-genres ultra-prÃ©cises. Exemples : "Industrial Dark Techno with distorted kick", "Ethereal Cloud Rap with heavy reverb and high-pass filters", "Aggressive UK Drill with sliding 808s", "Vintage Soul-infused Boom Bap with vinyl crackle".
  5. RICHESSE LYRIQUE : Je veux des textes d'une grande richesse littÃ©raire. Utilise des rimes multisyllabiques, des rimes internes complexes et un vocabulaire imagÃ©. Ãvite les clichÃ©s.
  6. ESSENCE ARTISTIQUE : Le style doit Ãªtre au plus proche de l'essence de "${inspiredBy}" (philosophie, thÃ¨mes, placement rythmique) sans jamais copier ses textes existants.
  7. STYLE PROMPT BOX (SUNO V5.5 OPTIMIZED) : RÃ©dige un prompt de style de 200-250 CARACTÃRES. Format 6 DIMENSIONS : [STYLE BLEND: 3 sous-genres/textures] + [BPM: fourchette, Key: tonalitÃ©] + [GRAIN: texture sonore] + [ESPACE: profondeur/rÃ©verb] + [INSTRUMENTS: Ã©lÃ©ments dominants] + [ÃRE: dÃ©cennie]. Front-load les textures les plus importantes. PrivilÃ©gie les adjectifs de texture aux noms de genre.
     - Inclus des textures de production prÃ©cises : [Tape saturation], [Vinyl crackle], [Bitcrushed], [Wide soundstage], [Analog warmth], [Distorted sub-bass].
     - Inclus des textures vocales prÃ©cises basÃ©es sur l'artiste : [Raspy vocals], [Breathy delivery], [Heavily autotuned], [Dry vocals], [Layered harmonies], [Whisper vocals].
     - Respecte impÃ©rativement le style de production demandÃ© : ${productionStyle}.
  8. VARIANTS (sunoPrompts) â CONTRAINTES D'EXCLUSION CROISÃE :
     Propose 3 variantes de style RADICALEMENT distinctes. Chaque variante DOIT diverger des autres sur AU MOINS 3 des 6 dimensions du Style Box.
     - Variante 1 : **CORE DNA** (L'essence pure de l'artiste et du genre, Ã©quilibre parfait entre flow et mÃ©lodie).
     - Variante 2 : **TWIST** (Direction inattendue. OBLIGATOIRE : BPM diffÃ©rent de Â±15, GRAIN opposÃ©, ÃRE dÃ©calÃ©e d'au moins 10 ans par rapport Ã  V1).
     - Variante 3 : **WILD CARD** (ExpÃ©rimental, fusion cross-genre. OBLIGATOIRE : STYLE BLEND sans aucun sous-genre commun avec V1, INSTRUMENTS totalement diffÃ©rents, ESPACE inversÃ© par rapport Ã  V1 et V2).

     MATRICE D'EXCLUSION (respecter impÃ©rativement) :
     | Dimension     | Si V1 utilise...           | V2 INTERDIT             | V3 INTERDIT                    |
     | STYLE BLEND   | sous-genre X               | sous-genre X            | tous sous-genres de V1 et V2   |
     | BPM           | fourchette A               | fourchette A Â±10        | fourchettes A et B Â±10         |
     | GRAIN         | texture chaude (analog)    | texture chaude          | textures de V1 et V2           |
     | ESPACE        | rÃ©verb large               | rÃ©verb large            | configs spatiales de V1 et V2  |
     | INSTRUMENTS   | instrument dominant X      | instrument X            | instruments de V1 et V2        |
     | ÃRE           | dÃ©cennie X                 | dÃ©cennie X ou adjacente | dÃ©cennies de V1 et V2          |

     DIVERGENCE VOCALE CROISÃE :
     - Si V1 = [Raspy flow], V2 DOIT utiliser un delivery opposÃ© ([Breathy melodic] ou [Spoken word])
     - V3 DOIT utiliser un delivery absent de V1 et V2 ([Falsetto], [Whisper], [Belt], [Distorted])

     EXEMPLES DE DIVERGENCE ATTENDUE :
     - V1: [Dark Trap, Distorted 808, 140BPM, 2020s] â V2: [Neo-Soul Jazz, Upright Bass, 95BPM, 1990s] â V3: [Industrial Electro, Modular Synth, 170BPM, 2000s]
     - V1: [Melodic Cloud Rap, Ethereal, 75BPM] â V2: [Aggressive Boom Bap, Dry/Punchy, 90BPM] â V3: [Ambient Downtempo, Tape-Saturated, 60BPM]
  9. LYRICS & STRUCTURE :
     - GÃNÃRE UNE STRUCTURE COMPLÃTE ET PROFESSIONNELLE respectant impÃ©rativement la structure demandÃ©e (Intro, Verses, Choruses, etc.).
     - Utilise [ ] pour TOUTES les balises de structure et de production (ex: [Intro], [Chorus], [Build], [Drop]).
     - IntÃ¨gre les METATAGS V5.5 AVANCÃS (Vocal Style, Vocal Effect, Mood, Energy, Texture, Instrument) sur des lignes sÃ©parÃ©es AVANT les lyrics de chaque section.
     - Utilise ( ) UNIQUEMENT pour les voix de fond, les ad-libs et les Ã©chos (ex: (Yeah, yeah)).
     - Utilise "..." pour les notes tenues (ex: "Always...").
     - Utilise des MAJUSCULES pour l'emphase.
  10. ZERO TOLERANCE : Interdiction absolue d'utiliser des noms propres d'artistes, des surnoms, des titres d'albums rÃ©els ou des marques de labels.

  RÃ©ponds UNIQUEMENT en JSON sans backticks :
  {
    "artistName": "Un nom d'artiste inventÃ© cohÃ©rent",
    "songTitle": "Un titre de chanson inventÃ© cohÃ©rent",
    "sunoPrompt": "Le prompt de style optimisÃ© (200-250 chars - Format 6 DIMENSIONS)",
    "sunoPrompts": ["Variante 1", "Variante 2", "Variante 3"],
    "negativePrompt": "ÃlÃ©ments Ã  exclure (max 200 chars)",
    "weirdnessGuidance": "Recommandation Weirdness optimale pour ce genre/artiste basÃ©e sur les paramÃ¨tres",
    "lyrics": "Les paroles complÃ¨tes structurÃ©es avec balises [Structure] et symboles de performance",
    "structuredLyrics": [
      {
        "id": "string",
        "type": "string (ex: 'Verse 1')",
        "text": "string (incluant symboles performance)",
        "prompt": "string (tags de structure/vocal pour cette section)"
      }
    ],
    "lipSyncExcerpt": "Extrait de 15s avec annotations phonÃ©tiques et Ã©motionnelles",
    "quality": {
      "score": 95,
      "coherence": 90,
      "richness": 85,
      "clarity": 95,
      "hook": 90,
      "precision": 95,
      "message": "Analyse technique dÃ©taillÃ©e"
    }
  }`;

  // --- TEMPERATURE-VARIED GENERATION ---
  // Main call (temp 0.7): generates everything + CORE DNA variant
  // Then 2 parallel lightweight calls (temp 1.3 & 1.8) regenerate variants 2 & 3
  const maxRetries = 3;

  // Helper: generate a single style variant with specific temperature
  const generateStyleVariant = async (
    variantName: string,
    temperature: number,
    coreVariant: string,
    otherVariant: string | null
  ): Promise<string> => {
    const exclusionContext = otherVariant
      ? `VARIANTE CORE DNA (EXCLURE CES ÃLÃMENTS) : "${coreVariant}"
VARIANTE PRÃCÃDENTE (EXCLURE AUSSI) : "${otherVariant}"`
      : `VARIANTE CORE DNA (EXCLURE CES ÃLÃMENTS) : "${coreVariant}"`;

    const variantPrompt = `Tu es un expert en production musicale et en prompting Suno AI V5.5.

Contexte de la session :
- Genre : ${genre || 'NON SPÃCIFIÃ'}
- Ambiance : ${mood || 'NON SPÃCIFIÃ'}
- InspirÃ© par : ${inspiredBy}
- Ãpoque/Era : ${era}
- Production Style : ${productionStyle}
- BPM base : ${bpmInfo}
- Weirdness : ${weirdness}/100
- Style Influence : ${styleInfluence}/100

${exclusionContext}

MISSION : GÃ©nÃ¨re UNE SEULE variante de style prompt "${variantName}" pour Suno V5.5.

RÃGLES :
- Format 6 DIMENSIONS (200-250 chars) : [STYLE BLEND: 3 sous-genres/textures] + [BPM: fourchette, Key: tonalitÃ©] + [GRAIN: texture sonore] + [ESPACE: profondeur/rÃ©verb] + [INSTRUMENTS: Ã©lÃ©ments dominants] + [ÃRE: dÃ©cennie]
- EXCLUSION ABSOLUE : Aucun sous-genre, aucune texture, aucun instrument, aucun BPM similaire aux variantes exclues ci-dessus.
- Diverge sur AU MOINS 3 des 6 dimensions par rapport Ã  chaque variante exclue.
- Front-load les textures les plus importantes. PrivilÃ©gie les adjectifs de texture aux noms de genre.
- Inclus des textures de production prÃ©cises : [Tape saturation], [Vinyl crackle], [Bitcrushed], [Wide soundstage], [Analog warmth], [Distorted sub-bass].
- ZERO TOLERANCE : Ne cite JAMAIS de noms d'artistes rÃ©els, de marques ou de labels.

RÃ©ponds UNIQUEMENT avec le prompt de style (une seule chaÃ®ne de 200-250 caractÃ¨res), sans JSON, sans backticks, sans explication.`;

    try {
      const response = await withRetry(async () => {
        return await callGemini({
          model: "gemini-3-flash-preview",
          contents: variantPrompt,
          config: {
            temperature: temperature,
            systemInstruction: "Tu es un expert en production musicale Suno V5.5. RÃ©ponds UNIQUEMENT avec le prompt de style demandÃ©, rien d'autre."
          }
        });
      }, 2); // 2 retries for variant calls (lighter)
      return (response.text || "").trim().replace(/^["']|["']$/g, '');
    } catch (e) {
      console.warn(`Variant "${variantName}" generation failed, using fallback from main call`);
      return ""; // empty = keep main call's variant
    }
  };

  return withRetry(async () => {
    // STEP 1: Main call with conservative temperature (0.7) â generates full response
    const response = await callGemini({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        temperature: 0.7,
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
        tools: [{ googleSearch: {} }],
        systemInstruction: systemInstruction
      }
    });

    if (!response.text) throw new Error("Empty response from Gemini");
    const parsed = JSON.parse(response.text);

    // STEP 2: Extract CORE DNA variant (V1) from main call
    const coreVariant = parsed.sunoPrompt || (parsed.sunoPrompts && parsed.sunoPrompts[0]) || "";
    const mainVariants = parsed.sunoPrompts || [coreVariant];

    // STEP 3: Generate TWIST (temp 1.3) and WILD CARD (temp 1.8) in parallel
    const [twistVariant, wildVariant] = await Promise.all([
      generateStyleVariant("TWIST", 1.3, coreVariant, null),
      generateStyleVariant("WILD CARD", 1.8, coreVariant, mainVariants[1] || null)
    ]);

    // STEP 4: Merge â use regenerated variants, fallback to main call's if generation failed
    const finalVariants = [
      coreVariant,
      twistVariant || mainVariants[1] || coreVariant,
      wildVariant || mainVariants[2] || coreVariant
    ];

    return {
      ...parsed,
      sunoPrompts: finalVariants,
      structuredLyrics: parsed.structuredLyrics || []
    };
  }, maxRetries).catch((lastError) => {
    return {
      sunoPrompt: "Error generating prompt. Please try again.",
      lyrics: `Error generating lyrics: ${lastError?.message || "Unknown error"}`,
      structuredLyrics: [],
      quality: { score: 0, message: `Generation failed after retries. Last error: ${lastError?.message || "Unknown error"}` }
    };
  });
}

export async function suggestArtistAndTitle(theme: string, genre: string, mood: string) {
  const prompt = `GÃ©nÃ¨re un nom d'artiste FICTIF original et un titre de chanson percutant basÃ©s sur :
  - ThÃ¨me : ${theme}
  - Genre : ${genre}
  - Ambiance : ${mood}

  RÃ¨gles :
  - Ne cite JAMAIS d'artiste rÃ©el.
  - Le nom doit Ãªtre original, mÃ©morable et coller au genre.
  - Si le genre est RAP ou URBAIN, le nom et le titre doivent avoir une "vibe" street, authentique, brute.
  - Le titre doit Ãªtre Ã©vocateur du thÃ¨me et "sentir le vÃ©cu".

  RÃ©ponds UNIQUEMENT en JSON.`;

  return withRetry(async () => {
    const response = await callGemini({
      model: "gemini-3-flash-preview",
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
  const prompt = `Recherche et analyse l'identitÃ© vocale de l'artiste "${artistName}".
  Tu dois identifier avec prÃ©cision :
  - Son type de voix (ex: Soprano, Tenor, Baritone, etc.)
  - Son timbre vocal (ex: Airy, Raspy, Clean, Warm, Metallic, etc.)
  - Son style de chant dominant (ex: Melismatic, Staccato, Breathy, Belted, etc.). Analyse spÃ©cifiquement s'il s'agit de chant mÃ©lodique (singing flow) ou de rap traditionnel.
  - Sa prÃ©sence vocale habituelle (ex: Front-and-center, Ethereal, Intimate, etc.)
  - Ses caractÃ©ristiques d'accent ou de couleur linguistique.
  - L'utilisation de l'autotune et des effets (ex: Heavy autotune, subtle pitch correction, vocoder).
  - Des rÃ©fÃ©rences d'interprÃ©tation spÃ©cifiques (ex: "chante comme s'il murmurait Ã  l'oreille", "puissance gospel").
  - Sa langue principale de chant (ex: "FRANÃAIS", "ANGLAIS", "ARABE", "ESPAGNOL", etc.). Utilise exactement un de ces termes en majuscules si possible.
  - WEIRDNESS (0-100) : Ã quel point son style est expÃ©rimental, non conventionnel ou "bizarre" (ex: artiste avant-garde = 90, artiste mainstream = 10).
  - STYLE INFLUENCE (0-100) : Ã quel point son identitÃ© stylistique est forte et doit dominer la production (ex: artiste Ã  signature forte = 100, artiste pop gÃ©nÃ©rique = 50).

  Utilise Google Search pour obtenir des informations basÃ©es sur des critiques musicales, des analyses techniques vocales et des interviews.

  RÃ©ponds UNIQUEMENT en JSON sans backticks :
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
    "summary": "Un court rÃ©sumÃ© de 2 phrases sur son identitÃ© vocale"
  }`;

  return withRetry(async () => {
    const response = await callGemini({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        tools: [{ googleSearch: {} }],
        systemInstruction: "Tu es un expert en analyse vocale et en musicologie. Tu utilises la recherche Google pour fournir des analyses techniques prÃ©cises des voix d'artistes cÃ©lÃ¨bres. IMPORTANT : Pour les artistes de CLOUD RAP, analyse avec une attention particuliÃ¨re le mÃ©lange entre chant mÃ©lodique et autotune, car leur style repose plus sur le chant que sur le rap traditionnel."
      }
    });

    return JSON.parse(response.text || "{}");
  });
}

export async function rerollVerse(
  context: any,
  verse: Verse
) {
  const prompt = `Tu es un expert en Ã©criture de paroles pour Suno AI V5.5, travaillant sur une session COLORSxSTUDIOS.

  Contexte musical :
  - Genre : ${context.genre}
  - Ambiance : ${context.mood}
  - ThÃ¨me : ${context.theme}
  - Artiste inspirÃ© par : ${context.inspiredBy}

  Tu dois rÃ©gÃ©nÃ©rer les paroles pour la section suivante :
  Type : ${verse.type}
  Prompt original : ${verse.prompt}
  Texte actuel (Ã  amÃ©liorer) : ${verse.text}

  INSTRUCTIONS :
  - Garde la cohÃ©rence avec le style et le thÃ¨me global.
  - Utilise les balises de structure Suno V5.5 et les METATAGS V5.5 AVANCÃS si nÃ©cessaire.
  - IntÃ¨gre les tags Vocal Style, Vocal Effect, Mood, Energy, Texture et Instrument sur des lignes sÃ©parÃ©es avant les lyrics.
  - Ajoute des directives d'interprÃ©tation vocale si appropriÃ©.
  - INTERDICTION FORMELLE : Ne cite JAMAIS le nom d'un artiste rÃ©el, de marque ou de label dans le texte gÃ©nÃ©rÃ©.
  - Utilise uniquement des noms et titres inventÃ©s qui capturent l'essence du style sans mentionner l'original.
  - RÃ©ponds UNIQUEMENT avec le nouveau texte des paroles.`;

  return withRetry(async () => {
    const response = await callGemini({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: "Tu es un expert en Ã©criture de paroles musicales. Tu rÃ©ponds uniquement avec les paroles rÃ©gÃ©nÃ©rÃ©es avec les metatags V5.5."
      }
    });

    return response.text || verse.text;
  });
}
