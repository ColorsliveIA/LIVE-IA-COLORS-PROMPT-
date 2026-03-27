/**
 * Artist-specific instruction profiles for Gemini prompt generation.
 *
 * OPTIMIZATION: Instead of building 25+ conditional strings and injecting them ALL
 * into every prompt (wasting thousands of tokens), we store profiles in a dictionary
 * and inject ONLY the matching one(s). This saves ~80% of prompt tokens per request.
 *
 * POLICY: NO direct artist references — no artist-specific slang, gimmicks,
 * catchphrases, or identifiable ad-libs. Only generic style/production descriptors.
 */

export interface ArtistProfile {
  keywords: string[];  // Match against inspiredBy.toUpperCase()
  instructions: string;
}

export const ARTIST_PROFILES: ArtistProfile[] = [
  {
    keywords: ["ALPHA WANN"],
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE TECHNIQUE FR :
- STYLE : Elite Technical French Rap, Modern Boom Bap, Dark Luxury Minimalism.
- VOCAL : Voix de baryton sèche, AUCUN AUTOTUNE, articulation hyper-précise, débit rapide et technique, agression froide et contrôlée. Pas de chant.
- AD-LIBS : Très discrets et rythmés, purement génériques (Yeah, Hey, Ouh).
- THÈMES : Excellence technique, rimes multisyllabiques denses, densité de rimes internes, vie urbaine parisienne, indépendance, luxe sombre.
- PRODUCTION : Piano sombre et minimaliste (Sparse Dark Keys), textures de cloches subtiles, drums lourds et percutants (Heavy Punchy Drums, Tight Snare Crack), ligne de basse minimale. INTERDICTION de sonorités jazzy, de samples soulful ou de swing chaleureux.
- SUNO TAGS : [Elite Technical French Rap], [Modern Boom Bap], [Dark Luxury Minimalism], [Dry Baritone Vocals], [No Autotune], [Hyper-Articulated Delivery], [Cold Controlled Aggression], [Dense Multisyllabic Rhymes], [90 BPM], [D Minor], [Clean High-Fidelity Mix], [Dry Vocal Front], [Cold Cinematic Atmosphere].
- NOTE : Le flow doit être une démonstration de technique pure, froid et chirurgical.`
  },
  {
    keywords: ["KALASH"],
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE CARIBÉEN :
- Utilise un mélange authentique de CRÉOLE MARTINIQUAIS et de FRANÇAIS.
- Le style musical doit être un mélange de DANCEHALL moderne, de TRAP et de sonorités CARIBÉENNES.
- AD-LIBS : Génériques et rythmés, interjections tropicales naturelles.
- Le texte doit refléter une identité caribéenne : entre mélodie planante et rap percutant.`
  },
  {
    keywords: ["TIF"],
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE MAGHRÉBIN MÉLANCOLIQUE :
- Utilise un mélange 50/50 de FRANÇAIS et de DARIJA (Arabe Algérien).
- INSTRUMENTATION : Intègre impérativement des sonorités de OUD, MANDOLE ou DERBOUKA. Guitares acoustiques mélancoliques.
- THÈMES : Nostalgie du quartier d'origine, exil, mélancolie solaire, les deux rives, la mer, le destin.
- FLOW : Mélodique, chanté/rappé avec une émotion brute, souvent avec un léger autotune pour la texture.
- VOCABULAIRE : Utilise un vocabulaire franco-arabe naturel, sans expressions ou catchphrases spécifiques à un artiste.`
  },
  {
    keywords: ["TIAKOLA"],
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE AFRO-MÉLODIQUE :
- STYLE : Afro-mélodique pur (Melo).
- FLOW : Ultra-mélodique, rapide, avec des variations de tonalité constantes.
- AD-LIBS : Mélodiques et rythmés, génériques.
- THÈMES : Réussite, loyauté, fête, mélodie.`
  },
  {
    keywords: ["PNL", "ADEMO", "NOS"],
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE CLOUD RAP FR :
- STYLE : Cloud Rap atmosphérique, planant, mélancolique.
- LANGAGE : Français urbain avec argot de banlieue générique, sans expressions ou catchphrases identifiables.
- FLOW : Lent, autotuné à l'extrême, spatial.
- THÈMES : Solitude, famille, réussite amère, contemplation.`
  },
  {
    keywords: ["ROSALÍA"],
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE FLAMENCO EXPÉRIMENTAL :
- STYLE : Flamenco expérimental, Art-Pop, Reggaeton déconstruit.
- LANGAGE : Espagnol avec des expressions andalouses.
- VOCAL : Textures vocales complexes, claquements de mains (Palmas) et harmonies flamenco.`
  },
  {
    keywords: ["BILLIE EILISH"],
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE DARK POP :
- STYLE : Dark Pop, Alt-Pop, Minimaliste.
- VOCAL : Chant murmuré (whisper vocals), très proche du micro, voix doublées et harmonisées de manière sombre.
- PRODUCTION : Basses lourdes et distordues, textures organiques et bruits de fond (ASMR-like).`
  },
  {
    keywords: ["AYA NAKAMURA"],
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE AFRO-POP FR :
- STYLE : Afro-Pop, R&B, Dancehall.
- LANGAGE : Français avec argot urbain naturel, sans expressions ou catchphrases identifiables.
- FLOW : Chaloupé, hooks ultra-efficaces, voix puissante.`
  },
  {
    keywords: ["ORELSAN"],
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE RAP NARRATIF :
- STYLE : Rap narratif, Storytelling, Pop-Rap.
- THÈMES : Quotidien, cynisme, nostalgie, province.
- FLOW : Narratif, parlé-chanté, débit technique.`
  },
  {
    keywords: ["BURNA BOY"],
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE AFROBEATS :
- STYLE : Afrobeats, Afro-Fusion.
- LANGAGE : Anglais, Pidgin, Yoruba.
- INSTRUMENTATION : Cuivres (brass) puissants, percussions polyrythmiques.`
  },
  {
    keywords: ["BAD BUNNY"],
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE REGGAETON :
- STYLE : Reggaeton, Latin Trap.
- LANGAGE : Espagnol (accent Portoricain).
- VOCAL : Voix grave, flow dembow syncopé.`
  },
  {
    keywords: ["DAFT PUNK"],
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE FRENCH HOUSE :
- STYLE : French House, Electro-Funk.
- VOCAL : Vocoder, Talkbox, voix robotique.
- INSTRUMENTATION : Synthétiseurs vintage, boucles de basse funk.`
  },
  {
    keywords: ["TAME IMPALA"],
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE PSYCHÉDÉLIQUE :
- STYLE : Psychedelic Pop, Indie Rock.
- VOCAL : Falsetto aérien, réverbe/delay intense.
- INSTRUMENTATION : Synthés analogiques, phaser sur la batterie.`
  },
  {
    keywords: ["SOOLKING"],
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE RAÏ-POP :
- STYLE : Raï-Pop, Algerian Pop.
- LANGAGE : Français, Arabe (Darija).
- INSTRUMENTATION : Violons, guitares acoustiques, percussions orientales.`
  },
  {
    keywords: ["STROMAE"],
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE ART-POP BELGE :
- STYLE : Art-Pop, Electro-Chanson.
- LANGAGE : Français (accent Belge).
- THÈMES : Mélancolie dansante, critique sociale.
- VOCAL : Articulé, théâtral, voix expressive.`
  },
  {
    keywords: ["KAARIS"],
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE HARDCORE TRAP :
- STYLE : Hardcore Trap, Rap de banlieue.
- FLOW : Agressif, saccadé, ad-libs gutturaux génériques.
- AD-LIBS : Utilise des ad-libs gutturaux et percutants mais génériques (Grrr, Hey, Yeah).`
  },
  {
    keywords: ["NATE DOGG"],
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE G-FUNK :
- STYLE : G-Funk, West Coast R&B.
- VOCAL : Voix de baryton veloutée, hooks mélodiques ultra-smooth.
- THÈMES : Fête, chill, West Coast life.`
  },
  {
    keywords: ["VALD"],
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE RAP EXPÉRIMENTAL :
- STYLE : Rap expérimental, Ironique.
- FLOW : Imprévisible, rapide, variations de ton.
- THÈMES : Absurde, ironie.`
  },
  {
    keywords: ["HAMZA"],
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE MELODIC TRAP BELGE :
- STYLE : Melodic Trap, R&B-infused Rap, Belgian Trap.
- VOCAL : Autotune mélodique omniprésent, voix suave, nonchalante et sensuelle. Flow élastique.
- AD-LIBS : Génériques (Yeah, Ouh, Skrr, Hey) placés de manière très aérée et mélodique.
- THÈMES : Luxe, sensualité, vie nocturne, haute couture.
- PRODUCTION : Synthés smooth, oniriques. Basses 808 profondes, rondes et "expensive". Hi-hats très nets et aérés.
- SUNO TAGS : [Melodic Trap], [R&B-infused], [Smooth 808s], [Dreamy synths], [Expensive production], [Heavily autotuned melodic vocals], [Nocturnal vibe].`
  },
  {
    keywords: ["BOOBA"],
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE HARDCORE RAP CINÉMATIQUE :
- STYLE : Hardcore Rap, Dark Trap, Drill, Cinematic Rap.
- VOCAL : Voix grave, autoritaire, imposante. Autotune sombre, profond et mélodique sur les refrains. Flow saccadé, précis, avec des punchlines percutantes.
- AD-LIBS : Génériques (Grrr, Yeah, Hey, Ouh) placés de manière agressive et rythmée.
- THÈMES : Réussite solitaire, rue, compétition féroce, luxe froid, trahison, héritage.
- PRODUCTION : Dark, orchestrale, heavy 808s distordues, minimaliste mais massive.
- SUNO TAGS : [Hardcore Rap], [Dark Trap], [Heavy 808s], [Cinematic production], [Authoritative deep vocals], [Dark autotune], [Orchestral textures].`
  },
  {
    keywords: ["TRAVIS SCOTT"],
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE PSYCHEDELIC TRAP :
- STYLE : Psychedelic Trap, Dark Melodic.
- VOCAL : Autotune épais, ad-libs génériques (Yeah, Ouh, Hey).
- PRODUCTION : Basses saturées, synthés atmosphériques, beat switches.`
  },
  {
    keywords: ["DRAKE"],
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE MELODIC RAP :
- STYLE : Melodic Rap, R&B-infused Trap.
- THÈMES : Relations, introspection, succès, culture urbaine.
- FLOW : Transition fluide rap/chant, hooks mémorables.`
  },
  {
    keywords: ["KENDRICK LAMAR"],
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE CONSCIOUS RAP :
- STYLE : Conscious Rap, Jazz-Rap, West Coast.
- FLOW : Technique complexe, changements de voix, storytelling profond.
- THÈMES : Social, politique, héritage, religion.`
  },
  {
    keywords: ["PLAYBOI CARTI"],
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE RAGE/VAMP :
- STYLE : Rage, Vamp, Minimalist Trap.
- VOCAL : Baby voice, ad-libs génériques et minimalistes (What, Yeah).
- PRODUCTION : Synthés 8-bit, basses distordues.`
  },
  {
    keywords: ["KANYE WEST"],
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE AVANT-GARDE RAP :
- STYLE : Avant-Garde Rap, Gospel-Rap, Art-Pop.
- PRODUCTION : Samples soul, chœurs, orchestration grandiose.
- THÈMES : Ego, religion, mode, famille.`
  },
  {
    keywords: ["LANA DEL REY"],
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE DREAM POP :
- STYLE : Dream Pop, Sadcore, Cinematic.
- VOCAL : Chant langoureux, murmures, harmonies éthérées.
- THÈMES : Nostalgie, glamour tragique, Americana.`
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
 *
 * POLICY: No artist-specific slang, catchphrases or identifiable expressions.
 * Only generic genre vocabulary guidelines.
 */
export function getRelevantWritingDNA(inspiredBy: string, genre: string): string {
  const upper = (inspiredBy + " " + genre).toUpperCase();

  const DNA_BLOCKS: { keywords: string[]; text: string }[] = [
    {
      keywords: ["PNL", "SALIF", "GAZO", "FREEZE", "NINHO", "FRENCH RAP", "RAP FR"],
      text: `RAP FR : Utilise le Verlan et l'argot de rue naturel du genre (sans expressions ou catchphrases identifiables à un artiste précis). Thèmes : Rue, mélancolie, réussite, trahison. Flow : Saccadé ou planant (Cloud).`
    },
    {
      keywords: ["DRAKE", "TRAVIS", "CENTRAL CEE", "21 SAVAGE", "US RAP", "UK RAP", "DRILL"],
      text: `US/UK RAP : Utilise l'ANGLAIS avec du slang urbain générique du genre (sans expressions identifiables à un artiste). Flow : Melodic trap, Dark psychedelic, Drill.`
    },
    {
      keywords: ["BAD BUNNY", "J BALVIN", "RAUW", "REGGAETON", "LATIN"],
      text: `REGGAETON / LATIN : Utilise l'ESPAGNOL avec du vocabulaire urbain latin générique. Flow : Dembow syncopé, sensuel ou agressif.`
    },
    {
      keywords: ["REMA", "BURNA", "WIZKID", "AFROBEATS", "AFRO"],
      text: `AFROBEATS : Utilise l'ANGLAIS / PIDGIN / YORUBA avec du vocabulaire naturel du genre. Flow : Mélodique, percutant, cuivres puissants et percussions polyrythmiques.`
    },
    {
      keywords: ["KALASH", "MAVADO", "DANCEHALL", "CARIBBEAN"],
      text: `CARIBBEAN / DANCEHALL : Utilise un mélange de CRÉOLE et FRANÇAIS avec du vocabulaire caribéen naturel. Flow : Dancehall syncopé, saccadé ou chanté avec autotune léger.`
    },
    {
      keywords: ["TIF", "SOOLKING", "ALGÉRIEN", "CHAÂBI", "MAGHREB", "RAÏ"],
      text: `MAGHREB / CHAÂBI-TRAP : Utilise FRANÇAIS et DARIJA avec du vocabulaire franco-arabe naturel (sans expressions identifiables). Flow : Mélodique, influencé par le Raï et le Chaâbi (Oud, Mandole, Derbouka).`
    },
    {
      keywords: ["TIAKOLA", "TAYC", "DADJU", "MELO", "AFRO-MELODIC"],
      text: `AFRO-MELODIC / MELO : Utilise le FRANÇAIS avec influences Lingala ou Wolof naturelles. Flow : Ultra-mélodique, harmonies riches, autotune parfaitement maîtrisé.`
    },
    {
      keywords: ["AYA NAKAMURA", "AFRO-POP"],
      text: `AFRO-POP : Utilise le FRANÇAIS avec argot urbain naturel (sans expressions identifiables). Flow : Chaloupé, hooks ultra-efficaces, voix puissante.`
    },
    {
      keywords: ["ORELSAN", "LOMEPAL", "NEKFEU", "STORYTELLING"],
      text: `STORYTELLING : Utilise le FRANÇAIS standard, direct, imagé. Thèmes : Quotidien, cynisme, nostalgie. Flow : Narratif, parlé-chanté, débit technique.`
    },
    {
      keywords: ["BOOBA", "KAARIS", "HARDCORE", "AGGRESSIVE"],
      text: `HARDCORE RAP : Utilise le FRANÇAIS avec argot de rue agressif et naturel. Flow : Voix grave, autoritaire, saccadé.`
    },
    {
      keywords: ["HAMZA", "MELODIC TRAP", "SAUCE", "BELGIAN"],
      text: `MELODIC TRAP : Utilise le FRANÇAIS (accent Belge) avec influence US naturelle. Flow : Ultra-mélodique, autotune parfaitement maîtrisé, nonchalant et fluide.`
    },
    {
      keywords: ["DAFT PUNK", "JUSTICE", "HOUSE", "ELECTRO", "TECHNO"],
      text: `FRENCH HOUSE / ELECTRO : Utilise l'ANGLAIS (vocodé). Flow : Robotique, rythmé, répétitif de manière addictive.`
    },
    {
      keywords: ["TAME IMPALA", "PSYCHEDELIC", "INDIE"],
      text: `PSYCHEDELIC POP / INDIE : Utilise l'ANGLAIS. Flow : Falsetto aérien, voix noyée dans réverbe/delay, mélodies oniriques.`
    },
    {
      keywords: ["STROMAE", "AVANT-GARDE", "ART-POP"],
      text: `ARTISTIC / AVANT-GARDE : Utilise le FRANÇAIS (accent Belge). Thèmes : Mélancolie dansante, critique sociale. Flow : Articulé, théâtral.`
    },
    {
      keywords: ["NATE DOGG", "SNOOP", "G-FUNK", "WEST COAST"],
      text: `G-FUNK / WEST COAST : Utilise l'ANGLAIS. Flow : Chanté ultra-smooth, voix de baryton veloutée.`
    },
    {
      keywords: ["VALD", "EXPERIMENTAL", "IRONIC"],
      text: `EXPERIMENTAL / IRONIC : Utilise le FRANÇAIS. Flow : Imprévisible, rapide, variations de ton extrêmes.`
    },
    {
      keywords: ["BILLIE EILISH", "DARK POP", "ALT-POP"],
      text: `DARK POP : Chant murmuré (whisper vocals), basses lourdes et distordues, textures ASMR-like.`
    },
    {
      keywords: ["LANA DEL REY", "DREAM POP", "SADCORE"],
      text: `DREAM POP / SADCORE : Chant langoureux, murmures, harmonies éthérées. Nostalgie, glamour tragique, Americana.`
    },
    {
      keywords: ["KENDRICK", "CONSCIOUS", "JAZZ-RAP"],
      text: `CONSCIOUS RAP / JAZZ-RAP : Technique complexe, changements de voix, storytelling profond. Thèmes sociaux et politiques.`
    },
    {
      keywords: ["PLAYBOI CARTI", "RAGE", "VAMP"],
      text: `RAGE / VAMP : Baby voice, ad-libs minimalistes, synthés 8-bit, basses distordues.`
    },
  ];

  const matches = DNA_BLOCKS
    .filter(block => block.keywords.some(kw => upper.includes(kw)))
    .map(block => block.text);

  // Always return at least a default if no match
  if (matches.length === 0) {
    return "Adapte le style d'écriture et le flow au genre et à l'artiste demandé. N'utilise AUCUNE expression, slang ou gimmick identifiable à un artiste réel.";
  }

  return matches.slice(0, 3).join("\n\n"); // Max 3 relevant DNA blocks
}
