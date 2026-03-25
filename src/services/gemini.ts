import { GoogleGenAI, Type } from "@google/genai";
import { Verse } from "../types";

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

  return withRetry(async () => {
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

  const systemInstruction = `Tu es un expert mondial en production musicale et en prompting pour Suno AI V5.2.
  
  RÈGLES CRITIQUES :
  - STYLE PROMPT : Max 250 caractères STRICTS. Suno tronque impitoyablement après 250. Format: [Genre] + [Subgenre] + [Mood] + [Instruments] + [BPM] + [Key] + [Texture].
  - LYRICS : Structure complète adaptée au genre. Utilise [ ] pour les balises de structure et ( ) pour les ad-libs. Suno V5.2 supporte des balises avancées comme [Pre-Chorus], [Post-Chorus], [Bridge], [Interlude], [Solo: Instrument], [Break], [Build], [Drop].
  - REGISTRE DE LANGAGE : Adapte impérativement le vocabulaire selon l'intensité (${emotionalIntensity}/100) et l'énergie (${energy}/100). 
    * Basse intensité : Poétique, imagé, contemplatif.
    * Haute intensité : Cru, direct, percutant, utilisation d'argot technique.
  - VOCAL DELIVERY VARIETY : Pour le RAP/TRAP, privilégie un flow rythmique percutant (Staccato, Triplet flow, Off-beat) plutôt que du chant mélodique systématique. Varie entre [Rhythmic flow], [Melodic rap], [Aggressive chant] et [Spoken word].
  - VIBE & FLOW : La "vibe" est primordiale. Utilise des ad-libs atmosphériques (Ouh, Yeah, Skrr) pour créer de l'espace. Le "flow" doit être élastique : alterne entre des moments rapides et des moments de silence ou de traînées vocales (vocal trails).
  - PRODUCTION QUALITY : Vise une qualité "Studio Master". Utilise des tags comme [High-fidelity], [Pristine clarity], [Punchy transients], [Warm analog saturation], [Wide stereo image].
  - CODES DU STYLE : Intègre les tics de langage, les onomatopées et les placements rythmiques spécifiques au genre (ex: "Skrr", "Ouh", "Grrr" pour la Drill; ad-libs mélodiques pour le R&B).
  - ANTI-GÉNÉRIQUE & TEXTURES : BANNI les tags comme "Trap" ou "Pop". Utilise des textures sonores et vocales précises (ex: [Industrial Dark Techno], [Ethereal Cloud Rap], [Crisp high-end], [Warm analog saturation], [Lo-fi grit], [Sidechained compression], [Stereo widening], [Punchy transients]).
  - ÉVITE LE "DARK ORCHESTRAL" SYSTÉMATIQUE : Pour le rap, n'utilise des éléments orchestraux (violons, choeurs) QUE si l'artiste ou le style le demande expressément (ex: Booba, SCH). Sinon, privilégie des textures plus sèches, jazzy, industrielles ou minimalistes.
  - ÉVITE LE VOCODER/CHANT SYSTÉMATIQUE : Si l'artiste est un "lyriciste" ou "technicien" (ex: Alpha Wann, Nekfeu, Kendrick Lamar), INTERDICTION de chanter ou d'utiliser un autotune mélodique. Le flow doit être sec, articulé et purement rappé.
  - ZERO TOLERANCE : Ne cite JAMAIS de noms d'artistes réels, de marques, de labels ou de slogans/ad-libs iconiques trop identifiables (ex: "Izi", "Saucegod", "It's Lit", "Bakel City").
  - AD-LIBS : Utilise des ad-libs génériques mais stylés (ex: "Yeah", "Ouh", "Skrr", "Grrr", "Hey") pour capturer l'énergie sans copier l'identité.
  - JSON : Réponds uniquement en JSON valide.

  WRITING SKILLS DNA (Expertise en argot local et flow spécifique) :
  1. RAP FR (PNL, Salif, Dicidens, Gazo) :
     - Utilise le Verlan, l'Argot de rue (ex: "bicrave", "charbon", "keufs", "moula").
     - Thèmes : Rue, mélancolie, réussite, trahison.
     - Flow : Saccadé ou planant (Cloud).
  
  2. US/UK RAP (Drake, Travis Scott, Central Cee, 21 Savage) :
     - Utilise impérativement l'ANGLAIS (sauf si spécifié autrement).
     - Slang US/UK : "no cap", "opps", "sliding", "drilling", "puffin", "stacks", "innit", "bruv".
     - Flow : Melodic trap (Drake), Dark psychedelic (Travis Scott), Drill (Central Cee/Pop Smoke).
  
  3. REGGAETON / LATIN (Bad Bunny, J Balvin, Rauw Alejandro) :
     - Utilise l'ESPAGNOL (accent Portoricain pour Bad Bunny).
     - Slang : "perreo", "bellaqueo", "flow", "duro", "toteo", "mami", "papi", "la calle".
     - Flow : Dembow syncopé, flow sensuel ou agressif.
  
  4. AFROBEATS (Rema, Burna Boy, Wizkid) :
     - Utilise l'ANGLAIS / PIDGIN / YORUBA.
     - Slang : "Odogwu", "Gbedu", "Jo", "Vibe", "Rave", "Another Banger".
     - Flow : Mélodique, percutant, avec des ad-libs caractéristiques.

  5. CARIBBEAN / DANCEHALL (Kalash, Mavado, Vybz Kartel) :
     - Utilise un mélange de CRÉOLE MARTINIQUAIS et de FRANÇAIS (ou Patois Jamaïcain).
     - Slang : "Gyal", "Bumboclaat", "Shot", "Wine", "Riddim", "Zess", "Moula".
     - Thèmes : Vie aux Antilles, fête, clash, mélancolie tropicale.
     - Flow : Dancehall syncopé, flow saccadé ou chanté avec autotune léger.

  6. MAGHREB / CHAÂBI-TRAP (TIF, Soolking, L'Algérino) :
     - Utilise un mélange de FRANÇAIS et d'ARABE ALGÉRIEN (DARIJA).
     - Slang : "Khoya", "Sahbi", "Dz", "El Ghorba", "Mektoub", "Zahri".
     - Thèmes : Nostalgie, exil, les deux rives, fête, mélancolie festive.
     - Flow : Mélodique, influencé par le Raï et le Chaâbi, avec des percussions traditionnelles (Oud, Mandole, Derbouka).

  7. AFRO-MELODIC / MELO (Tiakola, Tayc, Dadju) :
     - Utilise le FRANÇAIS avec des influences Lingala ou Wolof.
     - Slang : "Melo", "Ndombolo", "Sapologie", "Moula", "Vibe".
     - Thèmes : Amour, réussite, danse, mélodie pure.
     - Flow : Ultra-mélodique, "Melo" signature, harmonies riches, autotune parfaitement maîtrisé.

  8. AFRO-POP / NAKAMURA (Aya Nakamura) :
     - Utilise le FRANÇAIS avec son argot unique ("Nakamura-speak").
     - Slang : "Pookie", "Djadja", "Comportement", "En catchu", "Tu parles sur moi".
     - Thèmes : Indépendance, relations, fête, confiance en soi.
     - Flow : Chaloupé, rythmé, hooks ultra-efficaces, voix puissante et assurée.

  9. STORYTELLING / RELATABLE (Orelsan, Lomepal, Nekfeu) :
     - Utilise le FRANÇAIS standard, direct, imagé.
     - Thèmes : Quotidien, cynisme, nostalgie, passage à l'âge adulte, critique sociale.
     - Flow : Narratif, parlé-chanté, débit technique sur les couplets, refrains mélodiques mais sobres.

  10. AFROBEATS / NIGERIA (Burna Boy, Rema, Wizkid) :
     - Utilise l'ANGLAIS / PIDGIN / YORUBA.
     - Slang : "Odogwu", "Gbedu", "Jo", "Vibe", "Rave", "Another Banger".
     - Thèmes : Célébration, fierté africaine, amour, fête.
     - Flow : Mélodique, percutant, avec des cuivres (brass) puissants et des percussions polyrythmiques.

  11. REGGAETON / LATIN TRAP (Bad Bunny, J Balvin, Karol G) :
     - Utilise l'ESPAGNOL (accent Portoricain/Colombien).
     - Slang : "Perreo", "Bellaqueo", "Duro", "Toteo", "Mami", "Papi", "La calle".
     - Thèmes : Fête, désir, mélancolie nocturne, réussite.
     - Flow : Dembow syncopé, voix grave (Bad Bunny) ou flow sensuel.

  12. FRENCH HOUSE / ELECTRO-FUNK (Daft Punk, Justice) :
     - Utilise l'ANGLAIS (souvent vocodé).
     - Thèmes : Technologie, futurisme, danse, boucles hypnotiques.
     - Flow : Robotique, rythmé, répétitif de manière addictive.

  13. PSYCHEDELIC POP / INDIE (Tame Impala) :
     - Utilise l'ANGLAIS.
     - Thèmes : Introspection, solitude, rêves, distorsion du temps.
     - Flow : Falsetto aérien, voix noyée dans la réverbe et le delay, mélodies oniriques.

  14. RAÏ-POP / ALGERIAN POP (Soolking, Khaled) :
     - Utilise un mélange de FRANÇAIS et d'ARABE (DARIJA).
     - Slang : "Liberté", "Zina", "Guerba", "Omri".
     - Thèmes : Liberté, amour, espoir, fête.
     - Flow : Ultra-mélodique, envolées vocales typiques du Raï, violons et guitares acoustiques.

  15. ARTISTIC / AVANT-GARDE (Stromae) :
     - Utilise le FRANÇAIS (accent Belge).
     - Thèmes : Mélancolie dansante, problèmes de société, famille, solitude.
     - Flow : Articulé, théâtral, mélange de chanson française et d'électro.

  16. AGGRESSIVE TRAP / SEVRAN (Kaaris, Kalash Criminel) :
     - Utilise le FRANÇAIS (argot de Sevran).
     - Slang : "2.7.0", "Talsadoum", "Zongo Le Dozo".
     - Thèmes : Puissance, rue, noirceur.
     - Flow : Saccadé, agressif, ad-libs profonds et gutturaux.

  17. G-FUNK / WEST COAST (Nate Dogg, Snoop Dogg) :
     - Utilise l'ANGLAIS.
     - Thèmes : Chill, fête, vie en Californie.
     - Flow : Chanté de manière ultra-smooth, "King of Hooks", voix de baryton veloutée.

  18. EXPERIMENTAL / IRONIC (Vald) :
     - Utilise le FRANÇAIS.
     - Thèmes : Absurde, ironie, paranoïa, énergie brute.
     - Flow : Imprévisible, rapide, variations de ton extrêmes.

  19. MELODIC TRAP / SAUCE (Hamza) :
     - Utilise le FRANÇAIS (accent Belge) avec beaucoup de slang US.
     - Slang : "Vibe", "Cash", "Bébé", "Moula", "Flow".
     - Thèmes : Luxe, sensualité, argent, vie nocturne.
     - Flow : Ultra-mélodique, autotune parfaitement maîtrisé, flow nonchalant et fluide.

  20. HARDCORE RAP / DUC (Booba) :
     - Utilise le FRANÇAIS (argot 92i).
     - Slang : "Bicrave", "Charbon", "Gamos", "Moula", "Biff".
     - Thèmes : Réussite, rue, compétition, luxe, trahison.
     - Flow : Voix grave, autoritaire, autotune sombre et mélodique, ad-libs caractéristiques.

  RÈGLE D'OR : La langue des paroles DOIT correspondre à la culture de l'artiste inspiré. Si l'artiste est "KALASH", utilise impérativement un mélange de CRÉOLE et de FRANÇAIS. Si l'artiste est "TIF" ou "SOOLKING", utilise impérativement un mélange de FRANÇAIS et de DARIJA. Si l'artiste est "BAD BUNNY", utilise impérativement l'ESPAGNOL. Si l'artiste est "BURNA BOY" ou "NATE DOGG", utilise impérativement l'ANGLAIS. Si l'artiste est "HAMZA", utilise le FRANÇAIS avec un fort accent sur le SLANG US. Si l'artiste est "BOOBA", utilise le FRANÇAIS (argot 92i) et évite toute mention directe de son nom dans les paroles.`;

  const productionInfo = productionStyle.toUpperCase().includes('HARDCORE') 
    ? "\n# INSTRUCTION SPÉCIFIQUE PRODUCTION (HARDCORE/BRUT) :\n- INTERDICTION ABSOLUE de chanter ou d'utiliser du vocoder/autotune mélodique.\n- Le flow doit être purement RAPPÉ, sec, agressif et sans fioritures.\n- La production doit être MINIMALISTE et PERCUTANTE (Raw/Brut production).\n- Pas d'harmonies vocales, pas d'effets de lissage.\n"
    : "";

  const vocalTechniqueSpecifics = vocalTechnique !== 'none'
    ? `\n# INSTRUCTION TECHNIQUE VOCALE (V5.2) :\n- TECHNIQUE : ${vocalTechnique}.\n- NOTE : Applique cette technique de manière dominante sur l'ensemble de la performance vocale.\n`
    : "";

  const productionFinishSpecifics = productionFinish !== 'none'
    ? `\n# INSTRUCTION FINITION PRODUCTION (V5.2) :\n- FINITION : ${productionFinish}.\n- NOTE : Utilise des tags de production spécifiques pour obtenir ce rendu sonore (ex: [Binaural], [Sidechain], [Mid-Side]).\n`
    : "";

  const kalashSpecifics = inspiredBy.toUpperCase().includes('KALASH')
    ? "\n# INSTRUCTIONS SPÉCIFIQUES KALASH :\n- Utilise un mélange authentique de CRÉOLE MARTINIQUAIS et de FRANÇAIS.\n- Le style musical doit être un mélange de DANCEHALL moderne, de TRAP et de sonorités CARIBÉENNES.\n- Intègre des ad-libs typiques (ex: 'Mwaka Moon', 'Zess').\n- Le texte doit refléter son identité : entre mélodie planante et rap percutant.\n"
    : "";

  const tifSpecifics = inspiredBy.toUpperCase().includes('TIF')
    ? "\n# INSTRUCTIONS SPÉCIFIQUES TIF :\n- Utilise un mélange 50/50 de FRANÇAIS et de DARIJA (Arabe Algérien).\n- INSTRUMENTATION : Intègre impérativement des sonorités de OUD, MANDOLE ou DERBOUKA dans le prompt de style. Utilise des guitares acoustiques mélancoliques.\n- THÈMES : Nostalgie d'Alger (Houma), exil, mélancolie solaire, les deux rives, la mer, le destin (Mektoub).\n- FLOW : Mélodique, chanté/rappé avec une émotion brute, souvent avec un léger autotune pour la texture.\n- SLANG : 'Sahbi', 'Khoya', 'Dz', 'El Ghorba'.\n"
    : "";

  const tiakolaSpecifics = inspiredBy.toUpperCase().includes('TIAKOLA')
    ? "\n# INSTRUCTIONS SPÉCIFIQUES TIAKOLA :\n- STYLE : Afro-mélodique pur (Melo).\n- FLOW : Ultra-mélodique, rapide, avec des variations de tonalité constantes.\n- AD-LIBS : Utilise des ad-libs mélodiques et rythmés.\n- THÈMES : Réussite, loyauté, fête, mélodie.\n"
    : "";

  const pnlSpecifics = (inspiredBy.toUpperCase().includes('PNL') || inspiredBy.toUpperCase().includes('ADEMO') || inspiredBy.toUpperCase().includes('NOS'))
    ? "\n# INSTRUCTIONS SPÉCIFIQUES PNL :\n- STYLE : Cloud Rap atmosphérique, planant, mélancolique.\n- LANGAGE : Utilise leur argot spécifique (ex: 'Igo', 'QLF', 'Le monde ou rien', 'Onizuka').\n- FLOW : Lent, autotuné à l'extrême, spatial.\n- THÈMES : Solitude, famille, réussite amère, contemplation.\n"
    : "";

  const rosaliaSpecifics = inspiredBy.toUpperCase().includes('ROSALÍA')
    ? "\n# INSTRUCTIONS SPÉCIFIQUES ROSALÍA :\n- STYLE : Flamenco expérimental, Art-Pop, Reggaeton déconstruit.\n- LANGAGE : Espagnol avec des expressions andalouses.\n- VOCAL : Utilise des textures vocales complexes, des claquements de mains (Palmas) et des harmonies flamenco.\n"
    : "";

  const billieEilishSpecifics = inspiredBy.toUpperCase().includes('BILLIE EILISH')
    ? "\n# INSTRUCTIONS SPÉCIFIQUES BILLIE EILISH :\n- STYLE : Dark Pop, Alt-Pop, Minimaliste.\n- VOCAL : Chant murmuré (whisper vocals), très proche du micro, voix doublées et harmonisées de manière sombre.\n- PRODUCTION : Basses lourdes et distordues, textures organiques et bruits de fond (ASMR-like).\n"
    : "";

  const ayaNakamuraSpecifics = inspiredBy.toUpperCase().includes('AYA NAKAMURA')
    ? "\n# INSTRUCTIONS SPÉCIFIQUES AYA NAKAMURA :\n- STYLE : Afro-Pop, R&B, Dancehall.\n- LANGAGE : Utilise son argot spécifique (ex: 'Djadja', 'Pookie', 'En catchu').\n- FLOW : Chaloupé, hooks ultra-efficaces, voix puissante.\n"
    : "";

  const orelsanSpecifics = inspiredBy.toUpperCase().includes('ORELSAN')
    ? "\n# INSTRUCTIONS SPÉCIFIQUES ORELSAN :\n- STYLE : Rap narratif, Storytelling, Pop-Rap.\n- THÈMES : Quotidien, cynisme, nostalgie, Caen.\n- FLOW : Narratif, parlé-chanté, débit technique.\n"
    : "";

  const burnaBoySpecifics = inspiredBy.toUpperCase().includes('BURNA BOY')
    ? "\n# INSTRUCTIONS SPÉCIFIQUES BURNA BOY :\n- STYLE : Afrobeats, Afro-Fusion.\n- LANGAGE : Anglais, Pidgin, Yoruba.\n- INSTRUMENTATION : Cuivres (brass) puissants, percussions polyrythmiques.\n"
    : "";

  const badBunnySpecifics = inspiredBy.toUpperCase().includes('BAD BUNNY')
    ? "\n# INSTRUCTIONS SPÉCIFIQUES BAD BUNNY :\n- STYLE : Reggaeton, Latin Trap.\n- LANGAGE : Espagnol (accent Portoricain).\n- VOCAL : Voix grave, flow dembow syncopé.\n"
    : "";

  const daftPunkSpecifics = inspiredBy.toUpperCase().includes('DAFT PUNK')
    ? "\n# INSTRUCTIONS SPÉCIFIQUES DAFT PUNK :\n- STYLE : French House, Electro-Funk.\n- VOCAL : Vocoder, Talkbox, voix robotique.\n- INSTRUMENTATION : Synthétiseurs vintage, boucles de basse funk.\n"
    : "";

  const tameImpalaSpecifics = inspiredBy.toUpperCase().includes('TAME IMPALA')
    ? "\n# INSTRUCTIONS SPÉCIFIQUES TAME IMPALA :\n- STYLE : Psychedelic Pop, Indie Rock.\n- VOCAL : Falsetto aérien, réverbe/delay intense.\n- INSTRUMENTATION : Synthés analogiques, phaser sur la batterie.\n"
    : "";

  const soolkingSpecifics = inspiredBy.toUpperCase().includes('SOOLKING')
    ? "\n# INSTRUCTIONS SPÉCIFIQUES SOOLKING :\n- STYLE : Raï-Pop, Algerian Pop.\n- LANGAGE : Français, Arabe (Darija).\n- INSTRUMENTATION : Violons, guitares acoustiques, percussions orientales.\n"
    : "";

  const stromaeSpecifics = inspiredBy.toUpperCase().includes('STROMAE')
    ? "\n# INSTRUCTIONS SPÉCIFIQUES STROMAE :\n- STYLE : Art-Pop, Electro-Chanson.\n- LANGAGE : Français (accent Belge).\n- THÈMES : Mélancolie dansante, critique sociale.\n- VOCAL : Articulé, théâtral, voix expressive.\n"
    : "";

  const kaarisSpecifics = inspiredBy.toUpperCase().includes('KAARIS')
    ? "\n# INSTRUCTIONS SPÉCIFIQUES KAARIS :\n- STYLE : Hardcore Trap, Sevran.\n- FLOW : Agressif, saccadé, ad-libs gutturaux.\n- AD-LIBS : '2.7.0', 'Talsadoum'.\n"
    : "";

  const nateDoggSpecifics = inspiredBy.toUpperCase().includes('NATE DOGG')
    ? "\n# INSTRUCTIONS SPÉCIFIQUES NATE DOGG :\n- STYLE : G-Funk, West Coast R&B.\n- VOCAL : Voix de baryton veloutée, hooks mélodiques ultra-smooth.\n- THÈMES : Fête, chill, West Coast life.\n"
    : "";

  const valdSpecifics = inspiredBy.toUpperCase().includes('VALD')
    ? "\n# INSTRUCTIONS SPÉCIFIQUES VALD :\n- STYLE : Rap expérimental, Ironique.\n- FLOW : Imprévisible, rapide, variations de ton.\n- THÈMES : Absurde, ironie.\n"
    : "";

  const hamzaSpecifics = inspiredBy.toUpperCase().includes('HAMZA')
    ? "\n# INSTRUCTIONS SPÉCIFIQUES HAMZA (L'ESSENCE DE LA SAUCE) :\n- STYLE : Melodic Trap, R&B-infused Rap, Belgian Trap.\n- VOCAL : Autotune mélodique omniprésent (perfectly tuned), voix suave, nonchalante et sensuelle. Flow élastique, alternant entre rap rapide et traînées vocales mélodiques.\n- AD-LIBS : Utilise des ad-libs génériques (Yeah, Ouh, Skrr, Hey) mais placés de manière très aérée et mélodique.\n- THÈMES : Luxe, sensualité, vie nocturne, références à la haute couture et à l'esthétique US.\n- PRODUCTION : Synthés smooth, oniriques et luxueux. Basses 808 profondes, rondes et 'expensive'. Hi-hats très nets et aérés. Ambiance nocturne 'Vibe' intense.\n- SUNO TAGS : [Melodic Trap], [R&B-infused], [Smooth 808s], [Dreamy synths], [Expensive production], [Heavily autotuned melodic vocals], [Nocturnal vibe].\n- NOTE : INTERDICTION ABSOLUE d'utiliser les ad-libs 'Sauce' ou 'H-24'. Capture l'essence par la mélodie et le flow nonchalant.\n"
    : "";

  const boobaSpecifics = inspiredBy.toUpperCase().includes('BOOBA')
    ? "\n# INSTRUCTIONS SPÉCIFIQUES BOOBA (L'ESSENCE DU DUC) :\n- STYLE : Hardcore Rap, Dark Trap, Drill, Cinematic Rap.\n- VOCAL : Voix grave, autoritaire, imposante. Autotune sombre, profond et mélodique sur les refrains. Flow saccadé, précis, avec des punchlines percutantes.\n- AD-LIBS : Utilise des ad-libs génériques (Grrr, Yeah, Hey, Ouh) placés de manière agressive et rythmée.\n- THÈMES : Réussite solitaire, rue, compétition féroce, luxe froid, trahison, héritage.\n- PRODUCTION : Dark, orchestrale, heavy 808s distordues, minimaliste mais massive. Utilise des choeurs sombres ou des violons dramatiques.\n- SUNO TAGS : [Hardcore Rap], [Dark Trap], [Heavy 808s], [Cinematic production], [Authoritative deep vocals], [Dark autotune], [Orchestral textures].\n- NOTE : ÉVITE TOUTE MENTION DIRECTE DE 'IZI', 'RATPI', 'PIRATE' OU '92i' DANS LES PAROLES. Capture l'essence par l'autorité vocale et la noirceur de la prod.\n"
    : "";

  const travisScottSpecifics = inspiredBy.toUpperCase().includes('TRAVIS SCOTT')
    ? "\n# INSTRUCTIONS SPÉCIFIQUES TRAVIS SCOTT :\n- STYLE : Psychedelic Trap, Dark Melodic.\n- VOCAL : Autotune épais, ad-libs génériques (Yeah, Ouh, Hey).\n- PRODUCTION : Basses saturées, synthés atmosphériques, beat switches.\n- NOTE : INTERDICTION d'utiliser 'It's Lit' ou 'Straight Up'.\n"
    : "";

  const drakeSpecifics = inspiredBy.toUpperCase().includes('DRAKE')
    ? "\n# INSTRUCTIONS SPÉCIFIQUES DRAKE :\n- STYLE : Melodic Rap, R&B-infused Trap.\n- THÈMES : Relations, introspection, succès, '6ix' culture.\n- FLOW : Transition fluide rap/chant, hooks mémorables.\n"
    : "";

  const kendrickLamarSpecifics = inspiredBy.toUpperCase().includes('KENDRICK LAMAR')
    ? "\n# INSTRUCTIONS SPÉCIFIQUES KENDRICK LAMAR :\n- STYLE : Conscious Rap, Jazz-Rap, West Coast.\n- FLOW : Technique complexe, changements de voix, storytelling profond.\n- THÈMES : Social, politique, héritage, religion.\n"
    : "";

  const playboiCartiSpecifics = inspiredBy.toUpperCase().includes('PLAYBOI CARTI')
    ? "\n# INSTRUCTIONS SPÉCIFIQUES PLAYBOI CARTI :\n- STYLE : Rage, Vamp, Minimalist Trap.\n- VOCAL : Baby voice, ad-libs génériques (What, Yeah, Slatt).\n- PRODUCTION : Synthés 8-bit, basses distordues.\n- NOTE : ÉVITE les ad-libs trop spécifiques à l'artiste.\n"
    : "";

  const kanyeWestSpecifics = inspiredBy.toUpperCase().includes('KANYE WEST')
    ? "\n# INSTRUCTIONS SPÉCIFIQUES KANYE WEST :\n- STYLE : Avant-Garde Rap, Gospel-Rap, Art-Pop.\n- PRODUCTION : Samples soul, choeurs, orchestration grandiose.\n- THÈMES : Ego, religion, mode, famille.\n"
    : "";

  const lanaDelReySpecifics = inspiredBy.toUpperCase().includes('LANA DEL REY')
    ? "\n# INSTRUCTIONS SPÉCIFIQUES LANA DEL REY :\n- STYLE : Dream Pop, Sadcore, Cinematic.\n- VOCAL : Chant langoureux, murmures, harmonies éthérées.\n- THÈMES : Nostalgie, glamour tragique, Americana.\n"
    : "";

  const alphaWannSpecifics = inspiredBy.toUpperCase().includes('ALPHA WANN')
    ? "\n# INSTRUCTIONS SPÉCIFIQUES ALPHA WANN (L'ESSENCE DU DON DADA) :\n- STYLE : Elite Technical French Rap, Modern Boom Bap, Dark Luxury Minimalism.\n- VOCAL : Voix de baryton sèche, AUCUN AUTOTUNE, articulation hyper-précise, débit rapide et technique, agression froide et contrôlée. Pas de chant.\n- AD-LIBS : Utilise des ad-libs très discrets et rythmés (Yeah, Hey, Ouh).\n- THÈMES : Excellence technique, rimes multisyllabiques denses, densité de rimes internes, Paris, indépendance, luxe sombre.\n- PRODUCTION : Piano sombre et minimaliste (Sparse Dark Keys), textures de cloches subtiles, drums lourds et percutants (Heavy Punchy Drums, Tight Snare Crack), ligne de basse minimale. INTERDICTION de sonorités jazzy, de samples soulful ou de swing chaleureux.\n- SUNO TAGS : [Elite Technical French Rap], [Modern Boom Bap], [Dark Luxury Minimalism], [Dry Baritone Vocals], [No Autotune], [Hyper-Articulated Delivery], [Cold Controlled Aggression], [Dense Multisyllabic Rhymes], [Internal Rhyme Density], [Sparse Dark Keys], [Subtle Bell Texture], [Heavy Punchy Drums], [Tight Snare Crack], [Minimal Bassline], [No Jazzy Feel], [No Soulful Samples], [No Warm Swing], [90 BPM], [D Minor], [Clean High-Fidelity Mix], [Dry Vocal Front], [Cold Cinematic Atmosphere].\n- NOTE : Le flow doit être une démonstration de technique pure, froid et chirurgical.\n"
    : "";

  const prompt = `Génère une direction musicale ultra-précise pour l'artiste "${artist}".
  
  ${modeInfo}

  ${productionInfo}
  ${vocalTechniqueSpecifics}
  ${productionFinishSpecifics}
  ${secondaryArtistInfo}
  ${advancedTagsInfo}

  ${alphaWannSpecifics}
  ${kalashSpecifics}
  ${tifSpecifics}
  ${tiakolaSpecifics}
  ${pnlSpecifics}
  ${rosaliaSpecifics}
  ${billieEilishSpecifics}
  ${ayaNakamuraSpecifics}
  ${orelsanSpecifics}
  ${burnaBoySpecifics}
  ${badBunnySpecifics}
  ${daftPunkSpecifics}
  ${tameImpalaSpecifics}
  ${soolkingSpecifics}
  ${stromaeSpecifics}
  ${kaarisSpecifics}
  ${nateDoggSpecifics}
  ${valdSpecifics}
  ${hamzaSpecifics}
  ${boobaSpecifics}
  ${travisScottSpecifics}
  ${drakeSpecifics}
  ${kendrickLamarSpecifics}
  ${playboiCartiSpecifics}
  ${kanyeWestSpecifics}
  ${lanaDelReySpecifics}

  ${artistIdentityInfo}

  Détails de la session :
  - Genre : ${genre || 'NON SPÉCIFIÉ (À DÉDUIRE DE L\'INSPIRATION)'}
  - Ambiance : ${mood || 'NON SPÉCIFIÉ (À DÉDUIRE DE L\'INSPIRATION)'}
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
  ${sunoV52Info}

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
  7. STYLE PROMPT BOX (SUNO V5.2 OPTIMIZED) : Rédige un prompt de style de MAX 250 CARACTÈRES (Suno tronque après 250). Format: [Genre] + [Subgenre] + [Mood] + [Instruments] + [BPM] + [Key] + [Texture]. 
     - Front-load les tags les plus importants. 
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
     - Utilise ( ) UNIQUEMENT pour les voix de fond, les ad-libs et les échos (ex: (Yeah, yeah)).
     - Utilise "..." pour les notes tenues (ex: "Always...").
     - Utilise des MAJUSCULES pour l'emphase.
  10. ZERO TOLERANCE : Interdiction absolue d'utiliser des noms propres d'artistes, des surnoms, des titres d'albums réels ou des marques de labels.

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
  - Si le genre est RAP ou URBAIN, le nom et le titre doivent avoir une "vibe" street, authentique, brute.
  - Le titre doit être évocateur du thème et "sentir le vécu".
  
  Réponds UNIQUEMENT en JSON.`;

  return withRetry(async () => {
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
  });
}

export async function getArtistVocalIdentity(artistName: string) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY is missing. Please check your AI Studio secrets.");
  
  const ai = new GoogleGenAI({ apiKey });
  
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
  - WEIRDNESS (0-100) : À quel point son style est expérimental, non conventionnel ou "bizarre" (ex: Björk = 90, Drake = 10).
  - STYLE INFLUENCE (0-100) : À quel point son identité stylistique est forte et doit dominer la production (ex: Travis Scott = 100, un artiste pop générique = 50).
  
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
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        tools: [{ googleSearch: {} }],
        systemInstruction: "Tu es un expert en analyse vocale et en musicologie. Tu utilises la recherche Google pour fournir des analyses techniques précises des voix d'artistes célèbres. IMPORTANT : Pour les artistes de CLOUD RAP (comme PNL), analyse avec une attention particulière le mélange entre chant mélodique et autotune, car leur style repose plus sur le chant que sur le rap traditionnel."
      }
    });

    return JSON.parse(response.text || "{}");
  });
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

  return withRetry(async () => {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: "Tu es un expert en écriture de paroles musicales. Tu réponds uniquement avec les paroles régénérées."
      }
    });

    return response.text || verse.text;
  });
}
