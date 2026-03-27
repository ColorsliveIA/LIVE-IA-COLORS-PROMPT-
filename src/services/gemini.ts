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

/**
 * Retry with exponential backoff.
 * - 429 (rate limit): starts at 5s, doubles each retry (5s, 10s, 20s)
 * - 503 (overloaded): starts at 1s, doubles each retry (1s, 2s, 4s)
 * - Adds jitter (±25%) to avoid thundering herd
 */
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
        const is429 = e?.message?.includes('429') || e?.status === 429 || e?.error?.code === 429;
        const baseDelay = is429 ? 5000 : 1000;
        // Exponential backoff: baseDelay * 2^attempt
        const exponentialDelay = baseDelay * Math.pow(2, i);
        // Add jitter: ±25%
        const jitter = exponentialDelay * (0.75 + Math.random() * 0.5);
        const delay = Math.round(jitter);
        console.warn(`Gemini API call failed (attempt ${i + 1}/${maxRetries}), retrying in ${delay}ms...`, e?.message || e);
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
  const sunoV52Info = `
- Weirdness (V5.2) : ${weirdness}/100
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
       - Ton objectif est de capturer l'ESSENCE STYLISTIQUE du genre et de l'ambiance demandés.
       - Analyse le vocabulaire typique du genre, le placement rythmique (flow) et la philosophie.
       - Le texte doit être COMPLET (Intro, Couplets, Refrains, Outro).
       - Pour un rappeur, le texte doit être CRU, SINCÈRE et "SENTIR LE VÉCU". Raconte des tranches de vie, des détails précis du quotidien, des galères réelles. Évite les généralités.
       - Utilise des rimes complexes et une structure qui reflète la technicité du genre.
       - INTERDICTION ABSOLUE : Ne reproduis AUCUN slang, gimmick, catchphrase ou ad-lib identifiable à un artiste réel.`
    : mode === 'style'
    ? "CRITIQUE : Tu dois te concentrer EXCLUSIVEMENT sur l'optimisation du PROMPT DE STYLE (Suno Style Box). Les paroles sont secondaires ou peuvent être ignorées, mais le prompt de style doit être une évolution majeure basée sur les nouveaux paramètres."
    : "CRITIQUE : Génération complète. Crée une synergie parfaite entre le style musical et les paroles.";

  const languageInfo = language === 'AUCUNE'
    ? "Langue : Déduis la langue la plus appropriée selon le style du genre."
    : `Langue : ${language}`;

  const systemInstruction = `Tu es un expert mondial en production musicale et en prompting pour Suno AI V5.2.

  RÈGLES CRITIQUES :
  - STYLE PROMPT : Max 250 caractères STRICTS. Suno tronque impitoyablement après 250. Format: [Genre] + [Subgenre] + [Mood] + [Instruments] + [BPM] + [Key] + [Texture].
  - LYRICS : Structure complète adaptée au genre. Utilise [ ] pour les balises de structure et ( ) pour les ad-libs. Suno V5.2 supporte des balises avancées comme [Pre-Chorus], [Post-Chorus], [Bridge], [Interlude], [Solo: Instrument], [Break], [Build], [Drop].
  - REGISTRE DE LANGAGE : Adapte impérativement le vocabulaire selon l'intensité (${emotionalIntensity}/100) et l'énergie (${energy}/100).
    * Basse intensité : Poétique, imagé, contemplatif.
    * Haute intensité : Cru, direct, percutant, utilisation d'argot générique du genre.
  - VOCAL DELIVERY VARIETY : Pour le RAP/TRAP, privilégie un flow rythmique percutant (Staccato, Triplet flow, Off-beat) plutôt que du chant mélodique systématique. Varie entre [Rhythmic flow], [Melodic rap], [Aggressive chant] et [Spoken word].
  - VIBE & FLOW : La "vibe" est primordiale. Utilise des ad-libs GÉNÉRIQUES et atmosphériques (Ouh, Yeah) pour créer de l'espace. Le "flow" doit être élastique : alterne entre des moments rapides et des moments de silence ou de traînées vocales (vocal trails).
  - PRODUCTION QUALITY : Vise une qualité "Studio Master". Utilise des tags comme [High-fidelity], [Pristine clarity], [Punchy transients], [Warm analog saturation], [Wide stereo image].
  - ANTI-GÉNÉRIQUE & TEXTURES : BANNI les tags comme "Trap" ou "Pop". Utilise des textures sonores et vocales précises (ex: [Industrial Dark Techno], [Ethereal Cloud Rap], [Crisp high-end], [Warm analog saturation], [Lo-fi grit], [Sidechained compression], [Stereo widening], [Punchy transients]).
  - ÉVITE LE "DARK ORCHESTRAL" SYSTÉMATIQUE : Pour le rap, n'utilise des éléments orchestraux (violons, chœurs) QUE si le style le demande expressément. Sinon, privilégie des textures plus sèches, jazzy, industrielles ou minimalistes.
  - ÉVITE LE VOCODER/CHANT SYSTÉMATIQUE : Si le genre demande un style "lyriciste" ou "technicien", INTERDICTION de chanter ou d'utiliser un autotune mélodique. Le flow doit être sec, articulé et purement rappé.

  RÈGLE ZERO TOLERANCE — AUCUNE RÉFÉRENCE DIRECTE AUX ARTISTES :
  - Ne cite JAMAIS de noms d'artistes réels, de surnoms, de titres d'albums réels ou de marques de labels.
  - INTERDICTION ABSOLUE d'utiliser le slang spécifique d'un artiste, ses gimmicks, ses catchphrases ou ses ad-libs iconiques.
  - Utilise UNIQUEMENT des ad-libs génériques (Yeah, Ouh, Hey, Grrr) sans copier l'identité vocale d'un artiste.
  - Le vocabulaire doit être naturel au GENRE, pas à un artiste particulier.
  - JSON : Réponds uniquement en JSON valide.

  WRITING SKILLS DNA (Expertise en flow spécifique au genre) :
  ${getRelevantWritingDNA(inspiredBy, genre)}

  RÈGLE D'OR : La langue des paroles DOIT correspondre à la culture du genre. Déduis la langue et le flow appropriés à partir du genre et de l'ambiance demandés.`;

  const productionInfo = productionStyle.toUpperCase().includes('HARDCORE')
    ? "\n# INSTRUCTION SPÉCIFIQUE PRODUCTION (HARDCORE/BRUT) :\n- INTERDICTION ABSOLUE de chanter ou d'utiliser du vocoder/autotune mélodique.\n- Le flow doit être purement RAPPÉ, sec, agressif et sans fioritures.\n- La production doit être MINIMALISTE et PERCUTANTE (Raw/Brut production).\n- Pas d'harmonies vocales, pas d'effets de lissage.\n"
    : "";

  const vocalTechniqueSpecifics = vocalTechnique !== 'none'
    ? `\n# INSTRUCTION TECHNIQUE VOCALE (V5.2) :\n- TECHNIQUE : ${vocalTechnique}.\n- NOTE : Applique cette technique de manière dominante sur l'ensemble de la performance vocale.\n`
    : "";

  const productionFinishSpecifics = productionFinish !== 'none'
    ? `\n# INSTRUCTION FINITION PRODUCTION (V5.2) :\n- FINITION : ${productionFinish}.\n- NOTE : Utilise des tags de production spécifiques pour obtenir ce rendu sonore (ex: [Binaural], [Sidechain], [Mid-Side]).\n`
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
  - Genre : ${genre || 'NON SPÉCIFIÉ (À DÉDUIRE DE L\'INSPIRATION)'}
  - Ambiance : ${mood || 'NON SPÉCIFIÉ (À DÉDUIRE DE L\'INSPIRATION)'}
  - Thème : ${theme || 'NON SPÉCIFIÉ (IMPROVISE UNE THÉMATIQUE "VÉCUE" BASÉE SUR LE GENRE)'}
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
  ${sunoV52Info}

  INSTRUCTIONS DE RÉDACTION (FORMULE PAR GENRE) :
  1. SÉLECTION DE STRUCTURE : Sélectionne la structure lyrique type la plus efficace et authentique pour le genre "${genre}".
  2. REMPLISSAGE THÉMATIQUE : Développe le thème "${theme}" en utilisant des métaphores et des détails concrets qui "sentent le vécu".
  3. INTENSITÉ & REGISTRE (MODULATION DYNAMIQUE) :
     - Intensité Émotionnelle : ${emotionalIntensity}/100.
     - Énergie : ${energy}/100.
     - Ajuste le registre de langage (soutenu, familier, cru) pour qu'il soit en parfaite adéquation avec ces scores. Plus l'intensité est haute, plus le langage doit être brut et direct.
  4. CODES DU GENRE : Intègre les codes rythmiques et les placements de flow qui définissent l'ADN du genre "${genre}". INTERDICTION d'utiliser des gimmicks, catchphrases ou ad-libs identifiables à un artiste réel.

  INSTRUCTIONS CRITIQUES POUR LA STRUCTURE ET LES REFRAINS :
  1. RECHERCHE DE STRUCTURE : Utilise Google Search pour analyser les structures de chansons professionnelles actuelles spécifiques au genre "${genre}".
  2. ARCHITECTURE DU REFRAIN (CHORUS) : Le refrain doit être le point culminant. Adapte sa durée et son intensité au dynamisme du genre.
  3. ARCHITECTURE DU COUPLET (VERSE) : Les couplets posent le décor. Adapte leur narration et leur débit au genre "${genre}".
  4. DYNAMIQUE & MESURES : Adapte librement les mesures pour correspondre parfaitement aux standards de production et de composition du genre "${genre}". Ne reste pas figé sur des schémas classiques si le genre demande de l'innovation.
  5. PROGRESSION : Assure-toi qu'il y a une progression logique et fluide adaptée au format choisi.

  INSTRUCTIONS CRITIQUES POUR LA DIFFÉRENCIATION ARTISTIQUE :
  1. ANALYSE PROFONDE & SIGNATURE SONORE : Utilise Google Search et l'ANALYSE D'IDENTITÉ ARTISTIQUE fournie pour analyser le style musical. Ne te contente pas du genre global. Identifie la "signature sonore" : quels instruments sont typiques ? (ex: pianos mélancoliques, guitares électriques saturées, synthés analogiques granuleux). Quel est le placement rythmique (flow) typique ? Est-il en avance ou en retard sur le temps ?
  2. VULGARITÉ & STREET REALISM : Si le genre est RAP/URBAIN/STREET, utilise impérativement un langage CRU, de l'ARGOT GÉNÉRIQUE DU GENRE et n'hésite pas sur la VULGARITÉ (mots comme 'merde', 'putain', 'bordel', etc.) si elle sert l'authenticité et le réalisme de la rue. Les textes ne doivent absolument pas être "propres" ou "polis", ils doivent être provocateurs, sombres et authentiquement "street".
  3. NAMING : Le "songTitle" DOIT être une expression tirée des paroles. Le "artistName" DOIT refléter la langue du genre (${languageInfo}).
  4. ANTI-GÉNÉRIQUE & TEXTURES : Pour éviter que tous les sons se ressemblent, BANNI les tags génériques comme "Trap" ou "Pop". Utilise des descriptions de textures et de sous-genres ultra-précises. Exemples : "Industrial Dark Techno with distorted kick", "Ethereal Cloud Rap with heavy reverb and high-pass filters", "Aggressive UK Drill with sliding 808s", "Vintage Soul-infused Boom Bap with vinyl crackle".
  5. RICHESSE LYRIQUE : Je veux des textes d'une grande richesse littéraire. Utilise des rimes multisyllabiques, des rimes internes complexes et un vocabulaire imagé. Évite les clichés.
  6. ESSENCE DU GENRE : Le style doit capturer l'essence du genre demandé (philosophie, thèmes, placement rythmique) en créant quelque chose d'ORIGINAL. INTERDICTION de reproduire des textes, expressions ou catchphrases existants.
  7. STYLE PROMPT BOX (SUNO V5.2 OPTIMIZED) : Rédige un prompt de style de MAX 250 CARACTÈRES (Suno tronque après 250). Format: [Genre] + [Subgenre] + [Mood] + [Instruments] + [BPM] + [Key] + [Texture].
     - Front-load les tags les plus importants.
     - Inclus des textures de production précises : [Tape saturation], [Vinyl crackle], [Bitcrushed], [Wide soundstage], [Analog warmth], [Distorted sub-bass].
     - Inclus des textures vocales précises : [Raspy vocals], [Breathy delivery], [Heavily autotuned], [Dry vocals], [Layered harmonies], [Whisper vocals].
     - Respecte impérativement le style de production demandé : ${productionStyle}.
  8. VARIANTS (sunoPrompts) : Propose 3 variantes de style RADICALEMENT distinctes pour offrir un maximum de choix :
     - Variante 1 : **CORE DNA** (L'essence pure du genre, équilibre parfait entre flow et mélodie).
     - Variante 2 : **HIGH-OCTANE / RHYTHMIC** (Focus sur un flow percutant, une basse lourde [Heavy 808s], des percussions nettes [Crisp percussion] et un HOOK rythmique mémorable. Évite le chant, privilégie le flow).
     - Variante 3 : **ATMOSPHERIC / EXPERIMENTAL** (Focus sur les textures, l'ambiance [Ethereal], les effets spatiaux [Wide soundstage] et une instrumentation unique. Plus onirique ou sombre).
  9. LYRICS & STRUCTURE :
     - GÉNÈRE UNE STRUCTURE COMPLÈTE ET PROFESSIONNELLE respectant impérativement la structure demandée (Intro, Verses, Choruses, etc.).
     - Utilise [ ] pour TOUTES les balises de structure et de production (ex: [Intro], [Chorus], [Build], [Drop]).
     - Utilise ( ) UNIQUEMENT pour les voix de fond, les ad-libs et les échos (ex: (Yeah, yeah)).
     - Utilise "..." pour les notes tenues (ex: "Always...").
     - Utilise des MAJUSCULES pour l'emphase.
  10. ZERO TOLERANCE : Interdiction absolue d'utiliser des noms propres d'artistes, des surnoms, des titres d'albums réels, des marques de labels, du slang spécifique à un artiste, des gimmicks ou des catchphrases identifiables.

  Réponds UNIQUEMENT en JSON sans backticks :
  {
    "artistName": "Un nom d'artiste inventé cohérent",
    "songTitle": "Un titre de chanson inventé cohérent",
    "sunoPrompt": "Le prompt de style optimisé (max 250 chars - TRÈS IMPORTANT: Suno tronque après 250)",
    "sunoPrompts": ["Variante 1", "Variante 2", "Variante 3"],
    "negativePrompt": "Éléments à exclure (max 200 chars). INCLUT impérativement au début : [Weirdness: ${weirdness}%, Style Influence: ${styleInfluence}%]",
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
            weirdnessAndStyleInfluence: { type: Type.STRING },
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
  - Des références d'interprétation GÉNÉRIQUES (ex: "chant murmuré intimiste", "puissance gospel"). NE CITE AUCUN nom d'artiste.
  - Sa langue principale de chant (ex: "FRANÇAIS", "ANGLAIS", "ARABE", "ESPAGNOL", etc.). Utilise exactement un de ces termes en majuscules si possible.
  - WEIRDNESS (0-100) : À quel point son style est expérimental, non conventionnel ou "bizarre".
  - STYLE INFLUENCE (0-100) : À quel point son identité stylistique est forte et doit dominer la production.

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
        systemInstruction: "Tu es un expert en analyse vocale et en musicologie. Tu utilises la recherche Google pour fournir des analyses techniques précises des voix d'artistes célèbres. IMPORTANT : Pour les artistes de CLOUD RAP, analyse avec une attention particulière le mélange entre chant mélodique et autotune, car leur style repose plus sur le chant que sur le rap traditionnel. NE CITE JAMAIS de noms d'artistes dans tes réponses."
      }
    });

    return JSON.parse(response.text || "{}");
  });
}

export async function rerollVerse(
  context: any,
  verse: Verse
) {
  const prompt = `Tu es un expert en écriture de paroles pour Suno AI V5, travaillant sur une session COLORSxSTUDIOS.

  Contexte musical :
  - Genre : ${context.genre}
  - Ambiance : ${context.mood}
  - Thème : ${context.theme}
  - Style inspiré par : ${context.inspiredBy}

  Tu dois régénérer les paroles pour la section suivante :
  Type : ${verse.type}
  Prompt original : ${verse.prompt}
  Texte actuel (à améliorer) : ${verse.text}

  INSTRUCTIONS :
  - Garde la cohérence avec le style et le thème global.
  - Utilise les balises de structure Suno V5 si nécessaire.
  - Ajoute des directives d'interprétation vocale si approprié.
  - INTERDICTION FORMELLE : Ne cite JAMAIS le nom d'un artiste réel dans le texte généré.
  - N'utilise AUCUN slang, gimmick, catchphrase ou ad-lib identifiable à un artiste réel.
  - Utilise uniquement des noms et titres inventés et un vocabulaire ORIGINAL.
  - Réponds UNIQUEMENT avec le nouveau texte des paroles.`;

  return withRetry(async () => {
    const response = await callGemini({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: "Tu es un expert en écriture de paroles musicales. Tu réponds uniquement avec les paroles régénérées. INTERDICTION ABSOLUE de citer des noms d'artistes réels ou d'utiliser leur slang/gimmicks spécifiques."
      }
    });

    return response.text || verse.text;
  });
}
