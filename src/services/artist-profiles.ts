/**
 * Artist-specific instruction profiles for Gemini prompt generation.
 *
 * OPTIMIZATION: Instead of building 25+ conditional strings and injecting them ALL
 * into every prompt (wasting thousands of tokens), we store profiles in a dictionary
 * and inject ONLY the matching one(s). This saves ~80% of prompt tokens per request.
 */

export interface ArtistProfile {
  keywords: string[];  // Match against inspiredBy.toUpperCase()
  instructions: string;
}

export const ARTIST_PROFILES: ArtistProfile[] = [
  {
    keywords: ["ALPHA WANN"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES ALPHA WANN (L'ESSENCE DU DON DADA) :
- STYLE : Elite Technical French Rap, Modern Boom Bap, Dark Luxury Minimalism.
- VOCAL : Voix de baryton sÃ¨che, AUCUN AUTOTUNE, articulation hyper-prÃ©cise, dÃ©bit rapide et technique, agression froide et contrÃ´lÃ©e. Pas de chant.
- AD-LIBS : Utilise des ad-libs trÃ¨s discrets et rythmÃ©s (Yeah, Hey, Ouh).
- THÃMES : Excellence technique, rimes multisyllabiques denses, densitÃ© de rimes internes, Paris, indÃ©pendance, luxe sombre.
- PRODUCTION : Piano sombre et minimaliste (Sparse Dark Keys), textures de cloches subtiles, drums lourds et percutants (Heavy Punchy Drums, Tight Snare Crack), ligne de basse minimale. INTERDICTION de sonoritÃ©s jazzy, de samples soulful ou de swing chaleureux.
- SUNO TAGS : [Elite Technical French Rap], [Modern Boom Bap], [Dark Luxury Minimalism], [Dry Baritone Vocals], [No Autotune], [Hyper-Articulated Delivery], [Cold Controlled Aggression], [Dense Multisyllabic Rhymes], [90 BPM], [D Minor], [Clean High-Fidelity Mix], [Dry Vocal Front], [Cold Cinematic Atmosphere].
- NOTE : Le flow doit Ãªtre une dÃ©monstration de technique pure, froid et chirurgical.`
  },
  {
    keywords: ["KALASH"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES KALASH :
- Utilise un mÃ©lange authentique de CRÃOLE MARTINIQUAIS et de FRANÃAIS.
- Le style musical doit Ãªtre un mÃ©lange de DANCEHALL moderne, de TRAP et de sonoritÃ©s CARIBÃENNES.
- IntÃ¨gre des ad-libs typiques (ex: 'Mwaka Moon', 'Zess').
- Le texte doit reflÃ©ter son identitÃ© : entre mÃ©lodie planante et rap percutant.`
  },
  {
    keywords: ["TIF"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES TIF :
- Utilise un mÃ©lange 50/50 de FRANÃAIS et de DARIJA (Arabe AlgÃ©rien).
- INSTRUMENTATION : IntÃ¨gre impÃ©rativement des sonoritÃ©s de OUD, MANDOLE ou DERBOUKA. Guitares acoustiques mÃ©lancoliques.
- THÃMES : Nostalgie d'Alger (Houma), exil, mÃ©lancolie solaire, les deux rives, la mer, le destin (Mektoub).
- FLOW : MÃ©lodique, chantÃ©/rappÃ© avec une Ã©motion brute, souvent avec un lÃ©ger autotune pour la texture.
- SLANG : 'Sahbi', 'Khoya', 'Dz', 'El Ghorba'.`
  },
  {
    keywords: ["TIAKOLA"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES TIAKOLA :
- STYLE : Afro-mÃ©lodique pur (Melo).
- FLOW : Ultra-mÃ©lodique, rapide, avec des variations de tonalitÃ© constantes.
- AD-LIBS : Utilise des ad-libs mÃ©lodiques et rythmÃ©s.
- THÃMES : RÃ©ussite, loyautÃ©, fÃªte, mÃ©lodie.`
  },
  {
    keywords: ["PNL", "ADEMO", "NOS"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES PNL :
- STYLE : Cloud Rap atmosphÃ©rique, planant, mÃ©lancolique.
- LANGAGE : Utilise leur argot spÃ©cifique (ex: 'Igo', 'QLF', 'Le monde ou rien', 'Onizuka').
- FLOW : Lent, autotunÃ© Ã  l'extrÃªme, spatial.
- THÃMES : Solitude, famille, rÃ©ussite amÃ¨re, contemplation.`
  },
  {
    keywords: ["ROSALÃA"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES ROSALÃA :
- STYLE : Flamenco expÃ©rimental, Art-Pop, Reggaeton dÃ©construit.
- LANGAGE : Espagnol avec des expressions andalouses.
- VOCAL : Textures vocales complexes, claquements de mains (Palmas) et harmonies flamenco.`
  },
  {
    keywords: ["BILLIE EILISH"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES BILLIE EILISH :
- STYLE : Dark Pop, Alt-Pop, Minimaliste.
- VOCAL : Chant murmurÃ© (whisper vocals), trÃ¨s proche du micro, voix doublÃ©es et harmonisÃ©es de maniÃ¨re sombre.
- PRODUCTION : Basses lourdes et distordues, textures organiques et bruits de fond (ASMR-like).`
  },
  {
    keywords: ["AYA NAKAMURA"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES AYA NAKAMURA :
- STYLE : Afro-Pop, R&B, Dancehall.
- LANGAGE : Utilise son argot spÃ©cifique (ex: 'Djadja', 'Pookie', 'En catchu').
- FLOW : ChaloupÃ©, hooks ultra-efficaces, voix puissante.`
  },
  {
    keywords: ["ORELSAN"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES ORELSAN :
- STYLE : Rap narratif, Storytelling, Pop-Rap.
- THÃMES : Quotidien, cynisme, nostalgie, Caen.
- FLOW : Narratif, parlÃ©-chantÃ©, dÃ©bit technique.`
  },
  {
    keywords: ["BURNA BOY"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES BURNA BOY :
- STYLE : Afrobeats, Afro-Fusion.
- LANGAGE : Anglais, Pidgin, Yoruba.
- INSTRUMENTATION : Cuivres (brass) puissants, percussions polyrythmiques.`
  },
  {
    keywords: ["BAD BUNNY"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES BAD BUNNY :
- STYLE : Reggaeton, Latin Trap.
- LANGAGE : Espagnol (accent Portoricain).
- VOCAL : Voix grave, flow dembow syncopÃ©.`
  },
  {
    keywords: ["DAFT PUNK"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES DAFT PUNK :
- STYLE : French House, Electro-Funk.
- VOCAL : Vocoder, Talkbox, voix robotique.
- INSTRUMENTATION : SynthÃ©tiseurs vintage, boucles de basse funk.`
  },
  {
    keywords: ["TAME IMPALA"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES TAME IMPALA :
- STYLE : Psychedelic Pop, Indie Rock.
- VOCAL : Falsetto aÃ©rien, rÃ©verbe/delay intense.
- INSTRUMENTATION : SynthÃ©s analogiques, phaser sur la batterie.`
  },
  {
    keywords: ["SOOLKING"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES SOOLKING :
- STYLE : RaÃ¯-Pop, Algerian Pop.
- LANGAGE : FranÃ§ais, Arabe (Darija).
- INSTRUMENTATION : Violons, guitares acoustiques, percussions orientales.`
  },
  {
    keywords: ["STROMAE"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES STROMAE :
- STYLE : Art-Pop, Electro-Chanson.
- LANGAGE : FranÃ§ais (accent Belge).
- THÃMES : MÃ©lancolie dansante, critique sociale.
- VOCAL : ArticulÃ©, thÃ©Ã¢tral, voix expressive.`
  },
  {
    keywords: ["KAARIS"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES KAARIS :
- STYLE : Hardcore Trap, Sevran.
- FLOW : Agressif, saccadÃ©, ad-libs gutturaux.
- AD-LIBS : '2.7.0', 'Talsadoum'.`
  },
  {
    keywords: ["NATE DOGG"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES NATE DOGG :
- STYLE : G-Funk, West Coast R&B.
- VOCAL : Voix de baryton veloutÃ©e, hooks mÃ©lodiques ultra-smooth.
- THÃMES : FÃªte, chill, West Coast life.`
  },
  {
    keywords: ["VALD"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES VALD :
- STYLE : Rap expÃ©rimental, Ironique.
- FLOW : ImprÃ©visible, rapide, variations de ton.
- THÃMES : Absurde, ironie.`
  },
  {
    keywords: ["HAMZA"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES HAMZA (L'ESSENCE DE LA SAUCE) :
- STYLE : Melodic Trap, R&B-infused Rap, Belgian Trap.
- VOCAL : Autotune mÃ©lodique omniprÃ©sent, voix suave, nonchalante et sensuelle. Flow Ã©lastique.
- AD-LIBS : Utilise des ad-libs gÃ©nÃ©riques (Yeah, Ouh, Skrr, Hey) mais placÃ©s de maniÃ¨re trÃ¨s aÃ©rÃ©e et mÃ©lodique.
- THÃMES : Luxe, sensualitÃ©, vie nocturne, haute couture.
- PRODUCTION : SynthÃ©s smooth, oniriques. Basses 808 profondes, rondes et 'expensive'. Hi-hats trÃ¨s nets et aÃ©rÃ©s.
- SUNO TAGS : [Melodic Trap], [R&B-infused], [Smooth 808s], [Dreamy synths], [Expensive production], [Heavily autotuned melodic vocals], [Nocturnal vibe].
- NOTE : INTERDICTION ABSOLUE d'utiliser les ad-libs 'Sauce' ou 'H-24'.`
  },
  {
    keywords: ["BOOBA"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES BOOBA (L'ESSENCE DU DUC) :
- STYLE : Hardcore Rap, Dark Trap, Drill, Cinematic Rap.
- VOCAL : Voix grave, autoritaire, imposante. Autotune sombre, profond et mÃ©lodique sur les refrains. Flow saccadÃ©, prÃ©cis, avec des punchlines percutantes.
- AD-LIBS : Utilise des ad-libs gÃ©nÃ©riques (Grrr, Yeah, Hey, Ouh) placÃ©s de maniÃ¨re agressive et rythmÃ©e.
- THÃMES : RÃ©ussite solitaire, rue, compÃ©tition fÃ©roce, luxe froid, trahison, hÃ©ritage.
- PRODUCTION : Dark, orchestrale, heavy 808s distordues, minimaliste mais massive.
- SUNO TAGS : [Hardcore Rap], [Dark Trap], [Heavy 808s], [Cinematic production], [Authoritative deep vocals], [Dark autotune], [Orchestral textures].
- NOTE : ÃVITE TOUTE MENTION DIRECTE DE 'IZI', 'RATPI', 'PIRATE' OU '92i' DANS LES PAROLES.`
  },
  {
    keywords: ["TRAVIS SCOTT"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES TRAVIS SCOTT :
- STYLE : Psychedelic Trap, Dark Melodic.
- VOCAL : Autotune Ã©pais, ad-libs gÃ©nÃ©riques (Yeah, Ouh, Hey).
- PRODUCTION : Basses saturÃ©es, synthÃ©s atmosphÃ©riques, beat switches.
- NOTE : INTERDICTION d'utiliser 'It's Lit' ou 'Straight Up'.`
  },
  {
    keywords: ["DRAKE"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES DRAKE :
- STYLE : Melodic Rap, R&B-infused Trap.
- THÃMES : Relations, introspection, succÃ¨s, '6ix' culture.
- FLOW : Transition fluide rap/chant, hooks mÃ©morables.`
  },
  {
    keywords: ["KENDRICK LAMAR"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES KENDRICK LAMAR :
- STYLE : Conscious Rap, Jazz-Rap, West Coast.
- FLOW : Technique complexe, changements de voix, storytelling profond.
- THÃMES : Social, politique, hÃ©ritage, religion.`
  },
  {
    keywords: ["PLAYBOI CARTI"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES PLAYBOI CARTI :
- STYLE : Rage, Vamp, Minimalist Trap.
- VOCAL : Baby voice, ad-libs gÃ©nÃ©riques (What, Yeah, Slatt).
- PRODUCTION : SynthÃ©s 8-bit, basses distordues.
- NOTE : ÃVITE les ad-libs trop spÃ©cifiques Ã  l'artiste.`
  },
  {
    keywords: ["KANYE WEST"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES KANYE WEST :
- STYLE : Avant-Garde Rap, Gospel-Rap, Art-Pop.
- PRODUCTION : Samples soul, choeurs, orchestration grandiose.
- THÃMES : Ego, religion, mode, famille.`
  },
  {
    keywords: ["LANA DEL REY"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES LANA DEL REY :
- STYLE : Dream Pop, Sadcore, Cinematic.
- VOCAL : Chant langoureux, murmures, harmonies Ã©thÃ©rÃ©es.
- THÃMES : Nostalgie, glamour tragique, Americana.`
  },
];

/**
 * Returns ONLY the matching artist instructions for the given inspiredBy string.
 * Instead of building 25 conditional strings, we return just the relevant ones.
 * This saves thousands of tokens per Gemini API call.
 */
export function getArtistSpecificInstructions(inspiredBy: string): string {
  const upper = inspiredBy.toUpperCase();
  const matches = ARTIST_PROFILES
    .filter(profile => profile.keywords.some(kw => upper.includes(kw)))
    .map(profile => profile.instructions);

  return matches.join("\n\n");
}

/**
 * Detects the genre category from the inspiredBy field to select relevant
 * writing DNA instructions. Returns only the 2-3 most relevant genre blocks
 * instead of all 20.
 */
export function getRelevantWritingDNA(inspiredBy: string, genre: string): string {
  const upper = (inspiredBy + " " + genre).toUpperCase();

  const DNA_BLOCKS: { keywords: string[]; text: string }[] = [
    {
      keywords: ["PNL", "SALIF", "GAZO", "FREEZE", "NINHO", "FRENCH RAP", "RAP FR"],
      text: `RAP FR : Utilise le Verlan, l'Argot de rue (ex: "bicrave", "charbon", "keufs", "moula"). ThÃ¨mes : Rue, mÃ©lancolie, rÃ©ussite, trahison. Flow : SaccadÃ© ou planant (Cloud).`
    },
    {
      keywords: ["DRAKE", "TRAVIS", "CENTRAL CEE", "21 SAVAGE", "US RAP", "UK RAP", "DRILL"],
      text: `US/UK RAP : Utilise l'ANGLAIS. Slang : "no cap", "opps", "sliding", "drilling", "stacks", "innit", "bruv". Flow : Melodic trap, Dark psychedelic, Drill.`
    },
    {
      keywords: ["BAD BUNNY", "J BALVIN", "RAUW", "REGGAETON", "LATIN"],
      text: `REGGAETON / LATIN : Utilise l'ESPAGNOL. Slang : "perreo", "bellaqueo", "duro", "mami", "la calle". Flow : Dembow syncopÃ©, sensuel ou agressif.`
    },
    {
      keywords: ["REMA", "BURNA", "WIZKID", "AFROBEATS", "AFRO"],
      text: `AFROBEATS : Utilise l'ANGLAIS / PIDGIN / YORUBA. Slang : "Odogwu", "Gbedu", "Jo". Flow : MÃ©lodique, percutant, cuivres puissants et percussions polyrythmiques.`
    },
    {
      keywords: ["KALASH", "MAVADO", "DANCEHALL", "CARIBBEAN"],
      text: `CARIBBEAN / DANCEHALL : Utilise un mÃ©lange de CRÃOLE MARTINIQUAIS et FRANÃAIS. Slang : "Gyal", "Riddim", "Zess". Flow : Dancehall syncopÃ©, saccadÃ© ou chantÃ© avec autotune lÃ©ger.`
    },
    {
      keywords: ["TIF", "SOOLKING", "ALGÃRIEN", "CHAÃBI", "MAGHREB", "RAÃ"],
      text: `MAGHREB / CHAÃBI-TRAP : Utilise FRANÃAIS et DARIJA. Slang : "Khoya", "Sahbi", "Mektoub". Flow : MÃ©lodique, influencÃ© par le RaÃ¯ et le ChaÃ¢bi (Oud, Mandole, Derbouka).`
    },
    {
      keywords: ["TIAKOLA", "TAYC", "DADJU", "MELO", "AFRO-MELODIC"],
      text: `AFRO-MELODIC / MELO : Utilise le FRANÃAIS avec influences Lingala ou Wolof. Flow : Ultra-mÃ©lodique, "Melo" signature, harmonies riches, autotune parfaitement maÃ®trisÃ©.`
    },
    {
      keywords: ["AYA NAKAMURA", "AFRO-POP"],
      text: `AFRO-POP / NAKAMURA : Utilise le FRANÃAIS avec argot unique. Slang : "Pookie", "Djadja", "En catchu". Flow : ChaloupÃ©, hooks ultra-efficaces, voix puissante.`
    },
    {
      keywords: ["ORELSAN", "LOMEPAL", "NEKFEU", "STORYTELLING"],
      text: `STORYTELLING : Utilise le FRANÃAIS standard, direct, imagÃ©. ThÃ¨mes : Quotidien, cynisme, nostalgie. Flow : Narratif, parlÃ©-chantÃ©, dÃ©bit technique.`
    },
    {
      keywords: ["BOOBA", "KAARIS", "HARDCORE", "AGGRESSIVE"],
      text: `HARDCORE RAP : Utilise le FRANÃAIS (argot 92i/Sevran). Flow : Voix grave, autoritaire, saccadÃ©, ad-libs caractÃ©ristiques.`
    },
    {
      keywords: ["HAMZA", "MELODIC TRAP", "SAUCE", "BELGIAN"],
      text: `MELODIC TRAP / SAUCE : Utilise le FRANÃAIS (accent Belge) avec slang US. Flow : Ultra-mÃ©lodique, autotune parfaitement maÃ®trisÃ©, nonchalant et fluide.`
    },
    {
      keywords: ["DAFT PUNK", "JUSTICE", "HOUSE", "ELECTRO", "TECHNO"],
      text: `FRENCH HOUSE / ELECTRO : Utilise l'ANGLAIS (vocodÃ©). Flow : Robotique, rythmÃ©, rÃ©pÃ©titif de maniÃ¨re addictive.`
    },
    {
      keywords: ["TAME IMPALA", "PSYCHEDELIC", "INDIE"],
      text: `PSYCHEDELIC POP / INDIE : Utilise l'ANGLAIS. Flow : Falsetto aÃ©rien, voix noyÃ©e dans rÃ©verbe/delay, mÃ©lodies oniriques.`
    },
    {
      keywords: ["STROMAE", "AVANT-GARDE", "ART-POP"],
      text: `ARTISTIC / AVANT-GARDE : Utilise le FRANÃAIS (accent Belge). ThÃ¨mes : MÃ©lancolie dansante, critique sociale. Flow : ArticulÃ©, thÃ©Ã¢tral.`
    },
    {
      keywords: ["NATE DOGG", "SNOOP", "G-FUNK", "WEST COAST"],
      text: `G-FUNK / WEST COAST : Utilise l'ANGLAIS. Flow : ChantÃ© ultra-smooth, voix de baryton veloutÃ©e.`
    },
    {
      keywords: ["VALD", "EXPERIMENTAL", "IRONIC"],
      text: `EXPERIMENTAL / IRONIC : Utilise le FRANÃAIS. Flow : ImprÃ©visible, rapide, variations de ton extrÃªmes.`
    },
    {
      keywords: ["BILLIE EILISH", "DARK POP", "ALT-POP"],
      text: `DARK POP : Chant murmurÃ© (whisper vocals), basses lourdes et distordues, textures ASMR-like.`
    },
    {
      keywords: ["LANA DEL REY", "DREAM POP", "SADCORE"],
      text: `DREAM POP / SADCORE : Chant langoureux, murmures, harmonies Ã©thÃ©rÃ©es. Nostalgie, glamour tragique, Americana.`
    },
    {
      keywords: ["KENDRICK", "CONSCIOUS", "JAZZ-RAP"],
      text: `CONSCIOUS RAP / JAZZ-RAP : Technique complexe, changements de voix, storytelling profond. ThÃ¨mes sociaux et politiques.`
    },
    {
      keywords: ["PLAYBOI CARTI", "RAGE", "VAMP"],
      text: `RAGE / VAMP : Baby voice, ad-libs minimalistes, synthÃ©s 8-bit, basses distordues.`
    },
  ];

  const matches = DNA_BLOCKS
    .filter(block => block.keywords.some(kw => upper.includes(kw)))
    .map(block => block.text);

  // Always return at least a default if no match
  if (matches.length === 0) {
    return "Adapte le style d'Ã©criture, le slang et le flow au genre et Ã  l'artiste demandÃ©.";
  }

  return matches.slice(0, 3).join("\n\n"); // Max 3 relevant DNA blocks
}
