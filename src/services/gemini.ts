import { GoogleGenAI, Type } from "@google/genai";
import { Verse } from "../types";

export async function analyzeAudio(base64Data: string, mimeType: string) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY is missing. Please check your AI Studio secrets.");
  
  const ai = new GoogleGenAI({ apiKey });
  
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

  const response = await ai.models.generateContent({
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
  manualBpm: number | null,
  structure?: string,
  styleBlend?: string,
  mode: 'all' | 'lyrics' | 'style' = 'all'
) {
  const bpmInfo = manualBpm ? `- BPM imposé : ${manualBpm} BPM` : (performanceActive ? `- BPM : Automatique (adapté à l'énergie ${energy})` : `- BPM : Automatique`);
  const structureInfo = structure ? `- Structure souhaitée : ${structure}` : "";
  const styleBlendInfo = styleBlend ? `- Style Blending (Influences) : ${styleBlend}` : "";
  const performanceInfo = performanceActive ? `
- Énergie Globale : ${energy}/100
- Intensité Émotionnelle : ${emotionalIntensity}/100` : "";
  
  const modeInfo = mode === 'lyrics' 
    ? "CRITIQUE : Tu dois te concentrer EXCLUSIVEMENT sur la réécriture des PAROLES. Le style musical doit rester cohérent avec les paramètres fournis, mais ton effort principal doit porter sur la qualité littéraire et l'émotion des paroles."
    : mode === 'style'
    ? "CRITIQUE : Tu dois te concentrer EXCLUSIVEMENT sur l'optimisation du PROMPT DE STYLE (Suno Style Box). Les paroles sont secondaires ou peuvent être ignorées, mais le prompt de style doit être une évolution majeure basée sur les nouveaux paramètres."
    : "CRITIQUE : Génération complète. Crée une synergie parfaite entre le style musical et les paroles.";

  const languageInfo = language === 'AUCUNE' 
    ? "Langue : Déduis la langue la plus appropriée selon le style de l'artiste inspiré." 
    : `Langue : ${language}`;

  const systemInstruction = `Tu es un expert mondial en production musicale et en prompting pour Suno AI V5.2. Tu maîtrises le système de signaux par couches de Suno.

# PART 1: FOUNDATIONAL RULES
1.1 Layered Signal System:
- Style Prompt Box: Overall sonic lane, genre, tempo, key, texture (Song's DNA).
- Meta Tags: Inside lyrics field [ ], section identity, local energy, vocal delivery, instrument cues.
- Lyric Writing: Phrasing, hook structure, emotional arc, syllable density.
- Lyric Formatting Symbols: Performance delivery, emphasis, stretching, background layers.
- Suno Settings: Weirdness / Style Influence recommendations.

1.2 INTERDICTION FORMELLE :
- Ne cite JAMAIS le nom d'un artiste réel (ex: Booba, SDM, SCH, Drake, etc.) dans les paroles, les titres de chansons ou les noms d'artistes générés.
- Ne cite JAMAIS de surnoms (ex: IZI, Kopp, Duc, etc.), de titres d'albums (ex: Trone, Nero Nemesis, etc.), de labels (ex: 92i) ou de slogans/marques associés à l'artiste.
- Évite les ad-libs iconiques qui sont la signature exclusive d'un artiste réel.
- Utilise uniquement des noms d'artistes et des titres de chansons INVENTÉS.
- Ton rôle est de capturer l'ESSENCE du style (flow, vocabulaire générique, thèmes) sans jamais utiliser de références biographiques, géographiques ou commerciales spécifiques à l'original.
- NE GÉNÈRE JAMAIS UN SEUL COUPLET. Une chanson doit avoir une structure complète (Intro, Couplets, Refrains, Outro) sauf demande explicite contraire.
- Tu DOIS générer au MINIMUM 2 couplets différents et 2 refrains (identiques ou variés).
- Si une structure est spécifiée (ex: V-C-V-C-B-C), tu DOIS la respecter scrupuleusement. Chaque section doit être clairement étiquetée avec [Verse 1], [Chorus], [Verse 2], etc.

1.4 Structure Codes Reference:
- I = Intro
- V = Verse (Couplet)
- C = Chorus (Refrain)
- B = Bridge (Pont)
- O = Outro
- P = Pre-Chorus (Pré-Refrain)
- S = Solo (Instrumental)
- V-C-V-C-B-C = Standard (Verse-Chorus-Verse-Chorus-Bridge-Chorus)
- V-C-V-C-V-C = Pop (Verse-Chorus-Verse-Chorus-Verse-Chorus)
- V-C-V-C = Short (Verse-Chorus-Verse-Chorus)
- I-V-C-V-C-B-C-O = Full (Intro-Verse-Chorus-Verse-Chorus-Bridge-Chorus-Outro)
- V-V-V = Triple Verse (Couplet-Couplet-Couplet)
- V-C = Simple (Couplet-Refrain)

1.5 Prompt Architecture (Style Box):
Format: [Primary Genre] + [Sub-genre/Style] + [Vocal Style/Gender] + [Mood/Energy] + [Tempo/Rhythm] + [Texture/Production].
- Front-load the most important tags.
- Max 2 genre anchors, 3-4 instruments, 2 mood descriptors.
- Max 1000 characters.

1.3 Lyric Field Formatting:
- Parentheses ( ): ONLY for performance delivery (background vocals, ad-libs, echoes).
- Brackets [ ]: ONLY for meta-tags (structure, energy, instrumentation).
- NEVER put instructions in ( ). NEVER put lyrics in [ ].

# PART 2: TAGS & STRUCTURE
2.1 Core Structure: [Intro], [Verse], [Pre-Chorus], [Chorus], [Post-Chorus], [Bridge], [Outro], [Hook].
- IMPORTANT: A standard song repeats the [Chorus] at least 2-3 times.
- [Verse 1], [Chorus], [Verse 2], [Chorus], [Bridge], [Chorus], [Outro] is the gold standard.
2.2 Dynamic Energy: [Build], [Drop], [Breakdown], [Break], [Instrumental], [Solo], [Interlude], [Fade Out].
2.3 Advanced Structure: [Final Chorus], [Chorus x2], [Outro: Fade out], [Outro: Big finish], [Callback: Chorus melody], [Beat switch].

# PART 3: VOCAL & PERFORMANCE
3.1 Vocal Delivery: [Whisper], [Spoken word], [Rap], [Chant vocals], [Harmonies], [Falsetto], [Belting], [Growl], [Crooning], [Operatic], [Scat], [Screaming], [Autotuned delivery].
3.2 Ad-libs: [adlib TAG] SOUND IN ALL CAPS (e.g., [adlib HEY] HEY).
3.3 Duet Protocol:
- Style Prompt: "This is a duet between [Name1] (male) and [Name2] (female)".
- Lyric Header: [Duet: [Name1] male and [Name2] female].
- Per-Section Labels: [Verse 1] [Name1], [Chorus] [Both].
3.4 Vocal Drone/Cinematic Sustain: Use "..." for long sustained notes (e.g., "Always...").

# PART 4: PRODUCTION & TEXTURE
- Ambiance: [Intro: stadium crowd ambience | stage reverb].
- Texture: [Lo-fi], [Crisp], [Distorted], [Warm], [Analog], [Digital], [Cinematic], [Atmospheric].

# PART 5: LYRIC RICHNESS & ARTISTIC ESSENCE
5.1 Rhyme Complexity:
- Favorise les rimes riches (3 sons communs ou plus) et les rimes multisyllabiques.
- Utilise des rimes internes (au milieu du vers) et des assonances/allitérations marquées.
- Évite les rimes pauvres ou trop prévisibles (ex: verbe/verbe).
5.2 Vocabulary & Imagery:
- Utilise un vocabulaire riche, des métaphores filées, des allégories et des images fortes.
- Adapte le niveau de langue à l'artiste (argot précis, langage soutenu, jargon technique).
5.3 Capturing Essence (Non-Copying):
- Analyse le FLOW (placement rythmique), le LEXIQUE GÉNÉRIQUE (mots fétiches) et les THÈMES de l'artiste "${inspiredBy}".
- Reproduis l'ATMOSPHÈRE et la PHILOSOPHIE de l'artiste sans jamais copier ses paroles existantes.
- INTERDICTION : Ne cite aucun surnom (ex: IZI, Kopp, Duc), aucun titre d'album (ex: Trone, Nero Nemesis), aucun label (ex: 92i) ou marque déposée associée à l'artiste.
- Si l'artiste est connu pour ses punchlines, génère des punchlines originales avec la même structure logique mais un contenu totalement nouveau.

Tu utilises la recherche Google pour optimiser tes prompts avec les meilleurs tags de style et techniques de production actuelles. Tu réponds toujours en JSON valide.`;

  const prompt = `Génère une direction musicale ultra-précise pour l'artiste "${artist}".
  
  ${modeInfo}

  Détails de la session :
  - Genre : ${genre || 'NON SPÉCIFIÉ (À DÉDUIRE DE L\'INSPIRATION)'}
  - Ambiance : ${mood || 'NON SPÉCIFIÉ (À DÉDUIRE DE L\'INSPIRATION)'}
  - Thème : ${theme}
  - ${languageInfo}
  - Inspiré par : ${inspiredBy}
  - Époque/Era : ${era}
  ${performanceInfo}
  - Instrumentation : ${instrumentation}
  - BPM : ${bpmInfo}
  ${structureInfo}
  ${styleBlendInfo}

  Détails Vocaux :
  - Type de voix : ${voiceType}
  - Timbre : ${vocalTimbre}
  - Façon de chanter : ${singingStyle}
  - Présence vocale : ${vocalPresence}
  - Accent/Couleur linguistique : ${accent}
  - Référence d'interprétation : ${vocalReference}
  - Niveau d'émotion vocale : ${emotionLevel}

  INSTRUCTIONS CRITIQUES (RAPPEL DES RÈGLES SUNO V5.2) :
  1. ANALYSE PROFONDE : Utilise Google Search pour analyser "${inspiredBy}". Capture son flow, son vocabulaire, ses textures sonores et SURTOUT sa structure de morceau typique (ex: Intro -> Verse -> Chorus -> Verse -> Chorus -> Outro).
  2. RICHESSE LYRIQUE : Je veux des textes d'une grande richesse littéraire. Utilise des rimes multisyllabiques, des rimes internes complexes et un vocabulaire imagé. Évite les clichés.
  3. ESSENCE ARTISTIQUE : Le style doit être au plus proche de l'essence de "${inspiredBy}" (philosophie, thèmes, placement rythmique) sans jamais copier ses textes existants.
  4. STYLE PROMPT BOX : Rédige un prompt de style de max 1000 caractères suivant le format [Genre] + [Subgenre] + [Mood] + [Instruments] + [BPM] + [Key] + [Texture]. Front-load les tags les plus importants.
  5. LYRICS & STRUCTURE : 
     - GÉNÈRE UNE STRUCTURE COMPLÈTE ET PROFESSIONNELLE. Ne te limite pas à un seul couplet.
     - Utilise [ ] pour TOUTES les balises de structure et de production (ex: [Intro], [Chorus], [Build], [Drop]).
     - Utilise ( ) UNIQUEMENT pour les voix de fond, les ad-libs et les échos (ex: (Yeah, yeah)).
     - Utilise "..." pour les notes tenues (ex: "Always...").
     - Utilise des MAJUSCULES pour l'emphase.
  6. DUET PROTOCOL : Si c'est un duo, respecte scrupuleusement le protocole (Style Prompt, Lyric Header, Per-Section Labels).
  7. SLIDER SETTINGS : Détermine les valeurs idéales pour Weirdness et Style Influence.
  8. ZERO TOLERANCE : Interdiction absolue d'utiliser des noms propres d'artistes, des surnoms (IZI, Kopp, Duc, etc.), des titres d'albums réels ou des marques de labels. Si tu le fais, la génération sera rejetée.

  Réponds UNIQUEMENT en JSON sans backticks : 
  {
    "artistName": "Un nom d'artiste inventé cohérent",
    "songTitle": "Un titre de chanson inventé cohérent",
    "sunoPrompt": "Le prompt de style optimisé (max 1000 chars)",
    "sunoPrompts": ["Variante 1", "Variante 2", "Variante 3"],
    "negativePrompt": "Éléments à exclure (max 500 chars)",
    "weirdnessAndStyleInfluence": "Ex: Weirdness: 30%, Style Influence: 95%. [Explication courte]",
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

  const maxRetries = 2;
  let lastError: any = null;

  for (let i = 0; i <= maxRetries; i++) {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) throw new Error("GEMINI_API_KEY is missing. Please check your AI Studio secrets.");
      
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
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
    } catch (e: any) {
      lastError = e;
      console.warn(`Music generation attempt ${i + 1} failed:`, e);
      if (i < maxRetries) {
        // If it's a 429, wait longer (exponential backoff starting at 5s)
        const isQuotaExceeded = e?.message?.includes('429') || e?.status === 429 || e?.error?.status === 'RESOURCE_EXHAUSTED';
        const delay = isQuotaExceeded ? 5000 * (i + 1) : 1000 * (i + 1);
        await new Promise(resolve => setTimeout(resolve, delay));
        continue;
      }
    }
  }

  return { 
    sunoPrompt: "Error generating prompt. Please try again.", 
    lyrics: `Error generating lyrics: ${lastError?.message || "Unknown error"}`,
    structuredLyrics: [],
    quality: { score: 0, message: `Generation failed after retries. Last error: ${lastError?.message || "Unknown error"}` }
  };
}

export async function suggestArtistAndTitle(theme: string, genre: string, mood: string) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY is missing. Please check your AI Studio secrets.");
  
  const ai = new GoogleGenAI({ apiKey });
  
  const prompt = `Génère un nom d'artiste FICTIF original et un titre de chanson percutant basés sur :
  - Thème : ${theme}
  - Genre : ${genre}
  - Ambiance : ${mood}
  
  Règles :
  - Ne cite JAMAIS d'artiste réel.
  - Le nom doit être original, mémorable et coller au genre.
  - Le titre doit être évocateur du thème.
  
  Réponds UNIQUEMENT en JSON.`;

  try {
    const response = await ai.models.generateContent({
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
  } catch (e) {
    console.error("Error suggesting artist/title:", e);
    return { artistName: "ARTIST NAME", songTitle: "SONG TITLE" };
  }
}

export async function getArtistVocalIdentity(artistName: string) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY is missing. Please check your AI Studio secrets.");
  
  const ai = new GoogleGenAI({ apiKey });
  
  const prompt = `Recherche et analyse l'identité vocale de l'artiste "${artistName}".
  Tu dois identifier avec précision :
  - Son type de voix (ex: Soprano, Tenor, Baritone, etc.)
  - Son timbre vocal (ex: Airy, Raspy, Clean, Warm, Metallic, etc.)
  - Son style de chant dominant (ex: Melismatic, Staccato, Breathy, Belted, etc.)
  - Sa présence vocale habituelle (ex: Front-and-center, Ethereal, Intimate, etc.)
  - Ses caractéristiques d'accent ou de couleur linguistique.
  - Des références d'interprétation spécifiques (ex: "chante comme s'il murmurait à l'oreille", "puissance gospel").
  - Sa langue principale de chant (ex: "FRANÇAIS", "ANGLAIS", "ARABE", "ESPAGNOL", etc.). Utilise exactement un de ces termes en majuscules si possible.
  
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
    "summary": "Un court résumé de 2 phrases sur son identité vocale"
  }`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        tools: [{ googleSearch: {} }],
        systemInstruction: "Tu es un expert en analyse vocale et en musicologie. Tu utilises la recherche Google pour fournir des analyses techniques précises des voix d'artistes célèbres."
      }
    });

    return JSON.parse(response.text || "{}");
  } catch (e) {
    console.error("Error fetching vocal identity:", e);
    return null;
  }
}

export async function rerollVerse(
  context: any,
  verse: Verse
) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY is missing. Please check your AI Studio secrets.");
  
  const ai = new GoogleGenAI({ apiKey });
  
  const prompt = `Tu es un expert en écriture de paroles pour Suno AI V5, travaillant sur une session COLORSxSTUDIOS.
  
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
  - Utilise les balises de structure Suno V5 si nécessaire.
  - Ajoute des directives d'interprétation vocale si approprié.
  - INTERDICTION FORMELLE : Ne cite JAMAIS le nom d'un artiste réel (ex: Booba, SDM, SCH, etc.) dans le texte généré.
  - Utilise uniquement des noms et titres inventés qui capturent l'essence du style sans mentionner l'original.
  - Réponds UNIQUEMENT avec le nouveau texte des paroles.`;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      systemInstruction: "Tu es un expert en écriture de paroles musicales. Tu réponds uniquement avec les paroles régénérées."
    }
  });

  return response.text || verse.text;
}
