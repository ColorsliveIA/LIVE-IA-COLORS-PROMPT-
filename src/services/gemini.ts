import { GoogleGenAI } from "@google/genai";

export async function analyzeFace(base64Data: string, mimeType: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
  
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
            text: "Analyze this face with extreme precision for image generation consistency. Describe ONLY physical features: exact skin tone in photographic terms (deep ebony, warm caramel, cool ivory, olive, golden-brown, etc.), face shape (oval/square/heart/round/diamond), eye shape and color, eyebrow arch and thickness, nose profile (straight/aquiline/rounded/wide), lip shape and fullness (full/thin/heart-shaped), jawline (sharp/soft/wide), cheekbone prominence, and any distinctive features. No intro. No 'the person has'. Start directly with the features. Max 70 words. Output only the description.",
          },
        ],
      },
    ],
  });

  return response.text || "";
}

export async function generateCreativeContext(state: any) {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
  
  const prompt = `You are three experts working together on this COLORSxSTUDIOS session:
1. DIRECTEUR ARTISTIQUE — Visual coherence, chromatic tension.
2. PHOTOGRAPHE PROFESSIONNEL — Focal lengths, lighting, camera angles.
3. DIRECTEUR MONTAGE VIDÉO — Rhythm, motion coherence.

Studio: ${state.color.name} (${state.color.hex}). 
Artist: ${state.artist}. 
Genre: ${state.genre}. 
Mode: ${state.mode}.
Plan: ${state.selectedPlan}.
Motion: ${state.motion}.
Artist Details: ${state.sex}, ${state.height}cm, Ethnicity: ${state.ethnicity}.

Respond ONLY in JSON without backticks: {"concept":"2 cinematic sentences in French describing the session direction","caption":"2 lines Instagram + hashtags"}`;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
    }
  });

  try {
    return JSON.parse(response.text || "{}");
  } catch (e) {
    return { concept: response.text, caption: "" };
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
  commerciality: string,
  energy: number,
  emotionalIntensity: number,
  voiceType: string,
  vocalTimbre: string,
  singingStyle: string,
  vocalPresence: string,
  accent: string,
  vocalReference: string,
  emotionLevel: string,
  manualBpm?: number | null
) {
  const bpmInfo = manualBpm ? `- BPM imposé : ${manualBpm} BPM` : `- BPM : Automatique (adapté à l'énergie ${energy})`;
  
  const prompt = `Tu es un Producteur Exécutif et Beatmaker de classe mondiale, expert en toplines et en sound design pour COLORSxSTUDIOS. 
  Ton objectif est de générer une direction musicale ultra-précise pour l'artiste "${artist}".
  
  Détails de la session :
  - Genre : ${genre}
  - Ambiance : ${mood}
  - Thème : ${theme}
  - Langue des paroles : ${language}
  - Inspiré par : ${inspiredBy}
  - Époque/Era : ${era}
  - Niveau de commercialité : ${commerciality}
  - Énergie (0-100) : ${energy}
  - Intensité émotionnelle (0-100) : ${emotionalIntensity}
  ${bpmInfo}

  Détails Vocaux :
  - Type de voix : ${voiceType}
  - Timbre : ${vocalTimbre}
  - Façon de chanter : ${singingStyle}
  - Présence vocale : ${vocalPresence}
  - Accent/Couleur linguistique : ${accent}
  - Référence d'interprétation : ${vocalReference}
  - Niveau d'émotion vocale : ${emotionLevel}

  Instructions critiques :
  1. RECHERCHE : Utilise Google Search pour identifier les meilleures pratiques de prompting pour SUNO AI V5, les tags de style les plus efficaces, et les tendances actuelles de production musicale pour le genre "${genre}" inspiré par "${inspiredBy}" dans l'ère "${era}".
  2. SUNO STYLE PROMPT : Crée un prompt de style ultra-détaillé et optimisé pour Suno V5. Inclus : sous-genres précis, instruments spécifiques (acoustiques et synthétiques), BPM exact (${manualBpm ? manualBpm : `adapté à l'énergie ${energy}`}), texture sonore (ex: lo-fi, crisp, warm, distorted), effets de production (ex: reverb, sidechain compression, auto-tune, saturation), et style vocal extrêmement détaillé (ex: "${voiceType}, ${vocalTimbre}, ${singingStyle}, ${vocalPresence}, ${accent}"). Décris l'arrangement, le mixage et l'ambiance sonore globale. Sois le plus précis possible pour exploiter tout le potentiel de Suno V5. Max 1000 caractères.
  3. LYRICS & TOPLINE : Rédige des paroles percutantes (1 Couplet + 1 Refrain) EN ${language.toUpperCase()}. 
     - Utilise des balises de structure Suno V5 avancées : [Intro], [Verse 1], [Pre-Chorus], [Chorus], [Build-up], [Drop], [Bridge], [Solo], [Outro].
     - Inclus des ad-libs et harmonies vocales entre parenthèses (ex: "(Ooh-ooh)", "(Yeah, yeah)", "[Background Harmonies]").
     - Adapte la densité des syllabes à l'énergie (${energy}) : plus de mots pour une haute énergie, plus d'espace pour une basse énergie.
     - L'intensité émotionnelle (${emotionalIntensity}) et le niveau d'émotion vocale (${emotionLevel}) doivent se ressentir dans le choix des mots et le rythme.

  Réponds UNIQUEMENT en JSON sans backticks : 
  {
    "sunoPrompt": "Le prompt de style principal optimisé (max 1000 chars)",
    "sunoPrompts": [
      "Variante 1 : Plus expérimentale / Sound design poussé",
      "Variante 2 : Plus commerciale / Radio-ready",
      "Variante 3 : Plus brute / Live session / Acoustique"
    ],
    "lyrics": "Les paroles structurées avec balises [Structure]",
    "lipSyncExcerpt": "Un extrait de 15 secondes des paroles avec annotations phonétiques et émotionnelles pour le LIP-SYNC (ex: [Emotion: Intense] Word /Phonetic/)",
    "quality": {
      "score": 85,
      "coherence": 90,
      "richness": 80,
      "clarity": 85,
      "hook": 90,
      "precision": 80,
      "message": "Analyse de la qualité du prompt"
    }
  }`;

  const maxRetries = 2;
  let lastError: any = null;

  for (let i = 0; i <= maxRetries; i++) {
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
      const response = await ai.models.generateContent({
        model: "gemini-3.1-pro-preview",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          tools: [{ googleSearch: {} }],
          systemInstruction: "Tu es un expert mondial en production musicale et en prompting pour Suno AI V5. Tu utilises la recherche Google pour optimiser tes prompts avec les meilleurs tags de style et techniques de production actuelles. Tu réponds toujours en JSON valide."
        }
      });

      if (!response.text) throw new Error("Empty response from Gemini");
      return JSON.parse(response.text);
    } catch (e: any) {
      lastError = e;
      console.warn(`Music generation attempt ${i + 1} failed:`, e);
      if (i < maxRetries) {
        await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
        continue;
      }
    }
  }

  return { 
    sunoPrompt: "Error generating prompt. Please try again.", 
    lyrics: "Error generating lyrics.",
    quality: { score: 0, message: "Generation failed after retries." }
  };
}
