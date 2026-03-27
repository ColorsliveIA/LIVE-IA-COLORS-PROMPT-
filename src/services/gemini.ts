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
  const bpmInfo = manualBpm ? `- BPM imposé : ${manualBpm} BPM` : (performanceActive ? `- BPM : Automatique (adapté à l'énergie ${energy})` : `- BPM : Automatique`);
  const structureInfo = structure ? `- Structure souhaitée : ${structure}` : "";
  const styleBlendInfo = styleBlend ? `- Style Blending (Influences) : ${styleBlend}` : "";
  const vocalTechniqueInfo = vocalTechnique !== 'none' ? `- Technique Vocale Spécifique : ${vocalTechnique}` : "";
  const productionFinishInfo = productionFinish !== 'none' ? `- Finition de Production : ${productionFinish}` : "";
  const secondaryArtistInfo = secondaryInspiredBy !== 'none' ? `- Artiste Secondaire (Style Blending) : ${secondaryInspiredBy}` : "";
  const advancedTagsInfo = advancedTags.length > 0 ? `- Tags ADN Avancés : ${advancedTags.join(', ')}` : "";
  const genreNegativePrompt = getGenreSpecificNegativePrompt(genre);
  const combinedNegativePrompt = [genreNegativePrompt, customNegativePrompt].filter(Boolean).join(', ');
  const negativePromptInfo = combinedNegativePrompt ? `- ÉLÉMENTS À EXCLURE ABSOLUMENT (NEGATIVE PROMPT) : ${combinedNegativePrompt}` : "";
  const weirdnessGuidanceText = "WEIRDNESS est un curseur UI Suno (0-100), pas un token texte. Recommande la valeur optimale pour ce genre/artiste. Style Influence sweet spot = 70-80%.";
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
    ? "Langue : Déduis la langue la plus appropriée selon le style de l'artiste inspiré."
    : `Langue : ${language}`;

  const systemInstruction = `Tu es un expert mondial en production musicale et en prompting pour Suno AI V5.5.

  RÈGLES CRITIQUES :
  - STYLE PROMPT : 200-250 caractères. Suno pèse les premiers tokens plus lourdement — front-load les textures. Format 6 DIMENSIONS (ordre strict) : [STYLE BLEND: 3 sous-genres/textures] + [BPM: fourchette, Key: tonalité] + [GRAIN: texture sonore] + [ESPACE: profondeur/réverb] + [INSTRUMENTS: éléments dominants] + [ÈRE: décennie]. RÈGLE: Texture over Genre — privilégier les adjectifs de texture aux noms de genre.
  - LYRICS : Structure complète adaptée au genre. Utilise [ ] pour les balises de structure et ( ) pour les ad-libs. Suno V5.5 supporte des balises avancées comme [Pre-Chorus], [Post-Chorus], [Bridge], [Interlude], [Solo: Instrument], [Break], [Build], [Drop].
  - REGISTRE DE LANGAGE : Adapte impérativement le vocabulaire selon l'intensité (${emotionalIntensity}/100) et l'énergie (${energy}/100).
    * Basse intensité : Poétique, imagé, contemplatif.
    * Haute intensité : Cru, direct, percutant, utilisation d'argot technique.
  - VOCAL DELIVERY VARIETY : Pour le RAP/TRAP, privilégie un flow rythmique percutant (Staccato, Triplet flow, Off-beat) plutôt que du chant mélodique systématique. Varie entre [Rhythmic flow], [Melodic rap], [Aggressive chant] et [Spoken word].
  - VIBE & FLOW : La "vibe" est primordiale. Utilise des ad-libs atmosphériques (Ouh, Yeah, Skrr) pour créer de l'espace. Le "flow" doit être élastique : alterne entre des moments rapides et des moments de silence ou de traînées vocales (vocal trails).
  - PRODUCTION QUALITY : Vise une qualité "Studio Master". Utilise des tags comme [High-fidelity], [Pristine clarity], [Punchy transients], [Warm analog saturation], [Wide stereo image].
  - CODES DU STYLE : Intègre les tics de langage, les onomatopées et les placements rythmiques spécifiques au genre (ex: "Skrr", "Ouh", "Grrr" pour la Drill; ad-libs mélodiques pour le R&B).
  - ANTI-GÉNÉRIQUE & TEXTURES : BANNI les tags comme "Trap" ou "Pop". Utilise des textures sonores et vocales précises (ex: [Industrial Dark Techno], [Ethereal Cloud Rap], [Crisp high-end], [Warm analog saturation], [Lo-fi grit], [Sidechained compression], [Stereo widening], [Punchy transients]).
  - ÉVITE LE "DARK ORCHESTRAL" SYSTÉMATIQUE : Pour le rap, n'utilise des éléments orchestraux (violons, choeurs) QUE si l'artiste ou le style le demande expressément . Sinon, privilégie des textures plus sèches, jazzy, industrielles ou minimalistes.
  - ÉVITE LE VOCODER/CHANT SYSTÉMATIQUE : Si l'artiste est un "lyriciste" ou "technicien" dans son profil, INTERDICTION de chanter ou d'utiliser un autotune mélodique. Le flow doit être sec, articulé et purement rappé.
  - ZERO TOLERANCE : Ne cite JAMAIS de noms d'artistes réels, de marques, de labels ou de slogans/ad-libs iconiques trop identifiables. Aucun surnom, aucune catchphrase, aucun tag vocal reconnaissable.
  - AD-LIBS : Utilise des ad-libs génériques mais stylés (ex: "Yeah", "Ouh", "Skrr", "Grrr", "Hey") pour capturer l'énergie sans copier l'identité.
  - JSON : Réponds uniquement en JSON valide.

  WRITING SKILLS DNA (chargé dynamiquement) :
  ${getRelevantWritingDNA(inspiredBy, genre)}

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
  - (texte) = chœurs/backing vocals
  - ~mot~ = note allongée/mélisme
  - *mot* = emphase
  - mot- = coupé abruptement
  SYNTAXE : UN tag par ligne. JAMAIS de tags composites sur une seule ligne.`;

  const productionInfo = productionStyle.toUpperCase().includes('HARDCORE')
    ? "
# INSTRUCTION SPÉCIFIQUE PRODUCTION (HARDCORE/BRUT) :
- INTERDICTION ABSOLUE de chanter ou d'utiliser du vocoder/autotune mélodique.
- Le flow doit être purement RAPPÉ, sec, agressif et sans fioritures.
- La production doit être MINIMALISTE et PERCUTANTE (Raw/Brut production).
- Pas d'harmonies vocales, pas d'effets de lissage.
"
    : "";

  const vocalTechniqueSpecifics = vocalTechnique !== 'none'
    ? `
# INSTRUCTION TECHNIQUE VOCALE (V5.5) :
- TECHNIQUE : ${vocalTechnique}.
- NOTE : Applique cette technique de manière dominante sur l'ensemble de la performance vocale.
`
    : "";

  const productionFinishSpecifics = productionFinish !== 'none'
    ? `
# INSTRUCTION FINITION PRODUCTION (V5.5) :
- FINITION : ${productionFinish}.
- NOTE : Utilise des tags de production spécifiques pour obtenir ce rendu sonore (ex: [Binaural], [Sidechain], [Mid-Side]).
`
    : "";

  // OPTIMIZED: Artist-specific instructions loaded from dictionary (saves ~80% tokens)
  const artistSpecifics = getArtistSpecificInstructions(inspiredBy);

  const prompt = `Génère une direction musicale ultra-précise pour l'artiste "${artist}".

  ${modeInfo}

  ${productionInfo}
  ${vocalTechniqueSpecifics}
  ${productionFinishSpecifics}
  ${secondaryArtistInfo}
  ${advancedTagsInfo}

  ${artistSpecifics}

  ${artistIdentityInfo}

  Détails de la session :
  - Genre : ${genre || 'NON SPÉCIFIÉ (À DÉDUIRE DE L'INSPIRATION)'}
  - Ambiance : ${mood || 'NON SPÉCIFIÉ (À DÉDUIRE DE L'INSPIRATION)'}
  - Thème : ${theme || 'NON SPÉCIFIÉ (IMPROVISE UNE THÉMATIQUE "VÉCUE" BASÉE SUR L'ARTISTE)'}
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

  INSTRUCTIONS DE RÉDACTION (FORMULE PAR GENRE) :
  1. SÉLECTION DE STRUCTURE : Sélectionne la structure lyrique type la plus efficace et authentique pour le genre "${genre}".
  2. REMPLISSAGE THÉMATIQUE : Développe le thème "${theme}" en utilisant des métaphores et des détails concrets qui "sentent le vécu" de l'artiste "${inspiredBy}".
  3. INTENSITÉ & REGISTRE (MODULATION DYNAMIQUE) :
     - Intensité Émotionnelle : ${emotionalIntensity}/100.
     - Énergie : ${energy}/100.
     - Ajuste le registre de langage (soutenu, familier, cru) pour qu'il soit en parfaite adéquation avec ces scores. Plus l'intensité est haute, plus le langage doit être brut et direct.
  4. CODES DU STYLE : Intègre impérativement les codes, gimmicks, ad-libs et placements rythmiques (flow) qui définissent l'ADN du genre "${genre}".

  INSTRUCTIONS CRITIQUES POUR LA STRUCTURE ET LES REFRAINS :
  1. RECHERCHE DE STRUCTURE : Utilise Google Search pour analyser les structures de chansons professionnelles actuelles spécifiques au genre "${genre}".
  2. ARCHITECTURE DU REFRAIN (CHORUS) : Le refrain doit être le point culminant. Adapte sa durée et son intensité au dynamisme du genre.
  3. ARCHITECTURE DU COUPLET (VERSE) : Les couplets posent le décor. Adapte leur narration et leur débit au genre "${genre}".
  4. DYNAMIQUE & MESURES : Adapte librement les mesures pour correspondre parfaitement aux standards de production et de composition du genre "${genre}". Ne reste pas figé sur des schémas classiques si le genre demande de l'innovation.
  5. PROGRESSION : Assure-toi qu'il y a une progression logique et fluide adaptée au format choisi.

  INSTRUCTIONS CRITIQUES POUR LA DIFFÉRENCIATION ARTISTIQUE :
  1. ANALYSE PROFONDE & SIGNATURE SONORE : Utilise Google Search et l'ANALYSE D'IDENTITÉ ARTISTIQUE fournie pour analyser "${inspiredBy}". Ne te contente pas du genre global. Identifie sa "signature sonore" : quels instruments utilise-t-il ? (ex: pianos mélancoliques, guitares électriques saturées, synthés analogiques granuleux). Quel est son placement rythmique (flow) ? Est-il en avance ou en retard sur le temps ?
  2. VULGARITÉ & STREET REALISM : Si le genre est RAP/URBAIN/STREET, utilise impérativement un langage CRU, de l'ARGOT (slang) et n'hésite pas sur la VULGARITÉ (mots comme 'merde', 'putain', 'bordel', etc.) si elle sert l'authenticité et le réalisme de la rue. Les textes ne doivent absolument pas être "propres" ou "polis", ils doivent être provocateurs, sombres et authentiquement "street".
  3. NAMING : Le "songTitle" DOIT être une expression tirée des paroles. Le "artistName" DOIT refléter la langue de l'artiste (${languageInfo}).
  4. ANTI-GÉNÉRIQUE & TEXTURES : Pour éviter que tous les sons se ressemblent, BANNI les tags génériques comme "Trap" ou "Pop". Utilise des descriptions de textures et de sous-genres ultra-précises. Exemples : "Industrial Dark Techno with distorted kick", "Ethereal Cloud Rap with heavy reverb and high-pass filters", "Aggressive UK Drill with sliding 808s", "Vintage Soul-infused Boom Bap with vinyl crackle".
  5. RICHESSE LYRIQUE : Je veux des textes d'une grande richesse littéraire. Utilise des rimes multisyllabiques, des rimes internes complexes et un vocabulaire imagé. Évite les clichés.
  6. ESSENCE ARTISTIQUE : Le style doit être au plus proche de l'essence de "${inspiredBy}" (philosophie, thèmes, placement rythmique) sans jamais copier ses textes existants.
  7. STYLE PROMPT BOX (SUNO V5.5 OPTIMIZED) : Rédige un prompt de style de 200-250 CARACTÈRES. Format 6 DIMENSIONS : [STYLE BLEND: 3 sous-genres/textures] + [BPM: fourchette, Key: tonalité] + [GRAIN: texture sonore] + [ESPACE: profondeur/réverb] + [INSTRUMENTS: éléments dominants] + [ÈRE: décennie]. Front-load les textures les plus importantes. Privilégie les adjectifs de texture aux noms de genre.
     - Inclus des textures de production précises : [Tape saturation], [Vinyl crackle], [Bitcrushed], [Wide soundstage], [Analog warmth], [Distorted sub-bass].
     - Inclus des textures vocales précises basées sur l'artiste : [Raspy vocals], [Breathy delivery], [Heavily autotuned], [Dry vocals], [Layered harmonies], [Whisper vocals].
     - Respecte impérativement le style de production demandé : ${productionStyle}.
  8. VARIANTS (sunoPrompts) : Propose 3 variantes de style RADICALEMENT distinctes pour offrir un maximum de choix :
     - Variante 1 : **CORE DNA** (L'essence pure de l'artiste et du genre, équilibre parfait entre flow et mélodie).
     - Variante 2 : **HIGH-OCTANE / RHYTHMIC** (Focus sur un flow percutant, une basse lourde [Heavy 808s], des percussions nettes [Crisp percussion] et un HOOK rythmique mémorable. Évite le chant, privilégie le flow).
     - Variante 3 : **ATMOSPHERIC / EXPERIMENTAL** (Focus sur les textures, l'ambiance [Ethereal], les effets spatiaux [Wide soundstage] et une instrumentation unique. Plus onirique ou sombre).
  9. LYRICS & STRUCTURE :
     - GÉNÈRE UNE STRUCTURE COMPLÈTE ET PROFESSIONNELLE respectant impérativement la structure demandée (Intro, Verses, Choruses, etc.).
     - Utilise [ ] pour TOUTES les balises de structure et de production (ex: [Intro], [Chorus], [Build], [Drop]).
     - Intègre les METATAGS V5.5 AVANCÉS (Vocal Style, Vocal Effect, Mood, Energy, Texture, Instrument) sur des lignes séparées AVANT les lyrics de chaque section.
     - Utilise ( ) UNIQUEMENT pour les voix de fond, les ad-libs et les échos (ex: (Yeah, yeah)).
     - Utilise "..." pour les notes tenues (ex: "Always...").
     - Utilise des MAJUSCULES pour l'emphase.
  10. ZERO TOLERANCE : Interdiction absolue d'utiliser des noms propres d'artistes, des surnoms, des titres d'albums réels ou des marques de labels.

  Réponds UNIQUEMENT en JSON sans backticks :
  {
    "artistName": "Un nom d'artiste inventé cohérent",
    "songTitle": "Un titre de chanson inventé cohérent",
    "sunoPrompt": "Le prompt de style optimisé (200-250 chars - Format 6 DIMENSIONS)",
    "sunoPrompts": ["Variante 1", "Variante 2", "Variante 3"],
    "negativePrompt": "Éléments à exclure (max 200 chars)",
    "weirdnessGuidance": "Recommandation Weirdness optimale pour ce genre/artiste basée sur les paramètres",
    "lyrics": "Les paroles complètes structurées avec balises [Structure] et symboles de performance",
    "structuredLyrics": [
      {
        "id": "string",
        "type": "string (ex: 'Verse 1')",
        "text": "string (incluant symboles performance)",
        "prompt": "string (tags de structure/vocal pour cette section)"
      }
    ],
    "lipSyncExcerpt": "Extrait de 15s avec annotations phonétiques et émotionnelles",
    "quality": {
      "score": 95,
      "coherence": 90,
      "richness": 85,
      "clarity": 95,
      "hook": 90,
      "precision": 95,
      "message": "Analyse technique détaillée"
    }
  }`;

  const maxRetries = 3;
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
    return {
      ...parsed,
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
  const prompt = `Recherche et analyse l'identité vocale de l'artiste "${artistName}".
  Tu dois identifier avec précision :
  - Son type de voix (ex: Soprano, Tenor, Baritone, etc.)
  - Son timbre vocal (ex: Airy, Raspy, Clean, Warm, Metallic, etc.)
  - Son style de chant dominant (ex: Melismatic, Staccato, Breathy, Belted, etc.). Analyse spécifiquement s'il s'agit de chant mélodique (singing flow) ou de rap traditionnel.
  - Sa présence vocale habituelle (ex: Front-and-center, Ethereal, Intimate, etc.)
  - Ses caractéristiques d'accent ou de couleur linguistique.
  - L'utilisation de l'autotune et des effets (ex: Heavy autotune, subtle pitch correction, vocoder).
  - Des références d'interprétation spécifiques (ex: "chante comme s'il murmurait à l'oreille", "puissance gospel").
  - Sa langue principale de chant (ex: "FRANÇAIS", "ANGLAIS", "ARABE", "ESPAGNOL", etc.). Utilise exactement un de ces termes en majuscules si possible.
  - WEIRDNESS (0-100) : À quel point son style est expérimental, non conventionnel ou "bizarre" (ex: artiste avant-garde = 90, artiste mainstream = 10).
  - STYLE INFLUENCE (0-100) : À quel point son identité stylistique est forte et doit dominer la production (ex: artiste à signature forte = 100, un artiste pop générique = 50).

  Utilise Google Search pour obtenir des informations basées sur des critiques musicales, des analyses techniques vocales et des interviews.

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
    "summary": "Un court résumé de 2 phrases sur son identité vocale"
  }`;

  return withRetry(async () => {
    const response = await callGemini({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        tools: [{ googleSearch: {} }],
        systemInstruction: "Tu es un expert en analyse vocale et en musicologie. Tu utilises la recherche Google pour fournir des analyses techniques précises des voix d'artistes célèbres. IMPORTANT : Pour les artistes de CLOUD RAP , analyse avec une attention particulière le mélange entre chant mélodique et autotune, car leur style repose plus sur le chant que sur le rap traditionnel."
      }
    });

    return JSON.parse(response.text || "{}");
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
  - Ajoute des directives d'interprétation vocale si approprié.
  - INTERDICTION FORMELLE : Ne cite JAMAIS le nom d'un artiste réel , de marque ou de label dans le texte généré.
  - Utilise uniquement des noms et titres inventés qui capturent l'essence du style sans mentionner l'original.
  - Réponds UNIQUEMENT avec le nouveau texte des paroles.`;

  return withRetry(async () => {
    const response = await callGemini({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: "Tu es un expert en écriture de paroles musicales. Tu réponds uniquement avec les paroles régénérées avec les metatags V5.5."
      }
    });

    return response.text || verse.text;
  });
}
