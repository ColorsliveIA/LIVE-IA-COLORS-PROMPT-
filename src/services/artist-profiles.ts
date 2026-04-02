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
  isMelodic?: boolean;  // Flag: true = melodic/singing artist, false/undefined = rap/lyricist
}

export const ARTIST_PROFILES: ArtistProfile[] = [
  {
    keywords: ["JUL"],
    isMelodic: true,
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE MELODIC MARSEILLE :
- STYLE : Melodic Street Pop, Marseille Urban, Emotional Autotune, Sun-Kissed Mediterranean.
- VOCAL : Autotune mélodique OMNIPRÉSENT — c'est la SIGNATURE. Voix aiguë, nasale, chantée en permanence. Flow ultra-mélodique, rapide, avec des montées de notes caractéristiques. JAMAIS de rap sec — tout est chanté.
- AD-LIBS : Mélodiques et aériens, génériques (Ouh, Yeah, Hey, Aïe). Placés sur les temps faibles pour créer du rebond.
- THÈMES : Quartier, loyauté, amour de rue, Marseille, soleil et mélancolie, famille, réussite populaire, vie quotidienne des quartiers. Langage DIRECT et POPULAIRE — pas intellectuel.
- PRODUCTION : Piano mélodique lumineux ou mélancolique (SIGNATURE), 808 punchy et rebondissantes, hi-hats rapides et nets, synthés digitaux brillants, percs synthétiques légères. Ambiance à la fois solaire et émotionnelle. BPM typique 120-130.
- PHONÉTIQUE : Accent marseillais marqué. Élisions naturelles du parler quotidien. Voyelles ouvertes, flow syllabique rapide.
- REGISTRE : Langage familier, direct, parfois cru mais toujours accessible. Vocabulaire de la rue sans être hardcore.
- NOTE : L'AUTOTUNE MÉLODIQUE est NON-NÉGOCIABLE. Le chant EST le style. INTERDICTION de produire du rap sec/technique pour cet artiste.`
  },
  {
    keywords: ["NINHO"],
    isMelodic: true,
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE MELODIC TRAP FR :
- STYLE : Melodic Trap, Dark Emotional Rap, Street Melancholy.
- VOCAL : Autotune mélodique maîtrisé, alternance fluide rap/chant. Voix moyenne, légèrement rauque. Flow technique ET mélodique — capable de rapper vite puis de chanter un refrain émotionnel.
- AD-LIBS : Discrets, mélodiques (Ouh, Yeah), parfois des vocalises courtes.
- THÈMES : Ascension depuis la rue, mélancolie du succès, solitude au sommet, famille, quartier (91), trahison, argent comme échappatoire.
- PRODUCTION : 808 profondes et rondes, mélodies de piano sombres et émotionnelles, guitares acoustiques mélancoliques, hi-hats complexes (rolls, triolets), pads atmosphériques. BPM typique 130-145.
- REGISTRE : Argot urbain authentique, verlan, langage de la rue mais avec une profondeur émotionnelle.
- NOTE : La DUALITÉ rap technique / chant mélodique est la signature. Les deux doivent coexister.`
  },
  {
    keywords: ["DAMSO"],
    isMelodic: true,
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE DARK MELODIC BELGE :
- STYLE : Dark R&B-Rap, Experimental Melodic, Belgian Dark Pop.
- VOCAL : Voix grave et sensuelle, autotune subtil et artistique, alternance entre rap articulé et chant sombre. Diction très précise, phrasé unique avec des cassures rythmiques.
- AD-LIBS : Minimalistes, souvent des respirations ou des murmures.
- THÈMES : Sexualité crue, introspection sombre, relations toxiques, dualité bien/mal, philosophie de rue, provocation intellectuelle.
- PRODUCTION : Basses 808 profondes et saturées, synthés sombres et atmosphériques, textures industrielles subtiles, drums minimalistes mais percutants. Ambiance nocturne et cinématique.
- REGISTRE : Français sophistiqué mêlé d'argot belge et congolais. Vocabulaire riche, métaphores complexes, double sens permanent.
- NOTE : Le côté PROVOCATEUR et INTELLECTUEL doit coexister. Ce n'est pas du rap street basique — c'est de l'art sombre.`
  },
  {
    keywords: ["GAZO"],
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE DARK FRENCH DRILL :
- STYLE : Dark French Drill, French Rap Trap, Sombre et Menaçant.
- VOCAL : Voix masculine RAUQUE avec grain (grainy timber). Delivery autoritaire mais NONCHALANTE. Accent Seine-Saint-Denis 93. Flow STACCATO mélodique avec DOUBLAGE EN FIN DE PHRASE lourd et short echo delays. Close-mic intimité. PAS de chant autotune — rap pur avec inflexions mélodiques.
- AD-LIBS : Agressifs et gutturaux (Grrr, Bah, Hey, Ouh). Doublés avec echo court.
- THÈMES : Rue, violence, compétition, argent sale, survie, intimidation, territoire 93. Langage TRÈS CRU.
- PRODUCTION : Boucles piano MINEUR-KEY moody, textures atmosphériques hantées, 808 sub-bass SLIDING et distordues, hi-hats TRIOLETS crisp métalliques, snare hard-hitting, short echo delays, soundstage large, saturation analogique, mix studio hi-end, close-mic intimité. BPM typique 140-145.
- REGISTRE : Argot de rue hardcore, verlan, vocabulaire de la street 93. Vulgarité assumée.
- NOTE : Le son DOIT être menaçant, nocturne, et URBAIN. Ambiance street nocturne du 93. Pas de mélodie joyeuse, pas de pop, pas de chill/lo-fi.`
  },
  {
    keywords: ["FREEZE CORLEONE", "FREEZE"],
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE DARK LYRICAL :
- STYLE : Dark Boom Bap, Horrorcore FR, Lyrical Trap sombre.
- VOCAL : Voix grave monotone, flow technique et dense, AUCUN autotune, débit rapide avec des placements complexes. Ton froid et détaché.
- AD-LIBS : Très rares, sombres et discrets.
- THÈMES : Théories complotistes, références occultes, suprématie lyricale, provocation intellectuelle, samples obscurs, rap comme art martial verbal.
- PRODUCTION : Samples sombres (jazz, soul, classique détournés), drums boom bap lourds, basses profondes, ambiance cinématique lugubre. Parfois des beats trap minimalistes.
- REGISTRE : Vocabulaire très dense, références culturelles multiples (anime, histoire, géopolitique), punchlines à tiroirs.
- NOTE : Le flow doit être CHIRURGICAL et FROID. Aucune émotion apparente, technique pure.`
  },
  {
    keywords: ["NEKFEU"],
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE LYRICAL POP-RAP :
- STYLE : Lyrical Rap, Pop-Rap, Poetic Boom Bap moderne.
- VOCAL : Voix claire et articulée, PAS d'autotune, flow technique avec des accélérations, capable de chanter sur les refrains. Diction impeccable.
- AD-LIBS : Très discrets, naturels.
- THÈMES : Voyage, amour, introspection, littérature, mélancolie douce, beauté du quotidien, Paris, créativité.
- PRODUCTION : Mélodies lumineuses (guitares acoustiques, piano, samples jazz/soul chaleureux), drums organiques, basses rondes et chaudes. Alternance entre moments intimes et moments énergiques.
- REGISTRE : Français soutenu mêlé d'argot léger, métaphores poétiques, références littéraires et cinématographiques.
- NOTE : L'ÉCRITURE est la priorité absolue. Rimes multisyllabiques, images poétiques, storytelling. Le texte doit avoir une vraie valeur littéraire.`
  },
  {
    keywords: ["LAYLOW"],
    isMelodic: true,
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE DIGITAL EMOTION :
- STYLE : Digital Trap, Experimental R&B-Rap, Futuristic Melodic.
- VOCAL : Autotune artistique et expérimental, voix modulée entre rap et chant, effets vocaux créatifs (pitch shifts, layers). Flow élastique et imprévisible.
- AD-LIBS : Mélodiques, souvent traités avec des effets (delay, reverb, pitch).
- THÈMES : Technologie et émotions, solitude numérique, amour dystopique, futurisme, anxiété moderne, esthétique digitale.
- PRODUCTION : Synthés futuristes et atmosphériques, 808 profondes, textures électroniques expérimentales, samples manipulés, glitches subtils. Ambiance cinématique et immersive.
- REGISTRE : Français moderne, vocabulaire tech/digital, métaphores futuristes.
- NOTE : L'aspect CONCEPTUEL et CINÉMATIQUE est essentiel. Chaque morceau doit sonner comme une scène de film futuriste.`
  },
  {
    keywords: ["SDM"],
    isMelodic: true,
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE BRUSSELS TRAP-R&B :
- STYLE : Modern French Trap-R&B, Brussels Vibe, Nocturne Atmosphérique Sophistiqué.
- VOCAL : Autotune MÉTALLIQUE lourd, voix masculine grave avec qualité de CROONER nasal mielleux. Flow nonchalant et posé — JAMAIS agressif, JAMAIS pressé. Alternance chant mélodique / accélérations rap. Close-mic intimité. Le chant passe par un autotune épais et brillant.
- AD-LIBS : Mélodiques et graves (Ouh, Yeah), traités avec reverb et delay.
- THÈMES : Mélancolie nocturne, luxe amer, réussite sombre, trahison, loyauté, night-drive, atmosphère sophistiquée et coûteuse.
- PRODUCTION : Pads atmosphériques nocturnes, RHODES FILTRÉS (signature), 808 sub-bass glissantes lourdes, drums trap digitaux crisp, hi-hats crisp, reverb luxuriante et delay, soundstage large, production hi-end polie. BPM typique 125-135.
- REGISTRE : Argot urbain bruxellois, verlan, langage direct et émotionnel, influences belges.
- NOTE : Le son doit être NOCTURNE, SOPHISTIQUÉ et CHER. Pas de son lo-fi, pas de drill, pas de son agressif. L'identité est Brussels Trap-R&B, PAS Afro-Trap.`
  },
  {
    keywords: ["NISKA"],
    isMelodic: true,
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE AFRO-TRAP FESTIF :
- STYLE : Afro-Trap, Dancehall-Rap, Festive Street.
- VOCAL : Voix reconnaissable, autotune léger, flow dansant et rebondissant, alternance rap/chant. Énergie festive et contagieuse.
- AD-LIBS : Rythmés et festifs, génériques (Hey, Ouh, Yeah, Allez).
- THÈMES : Fête, danse, quartier, réussite, ambiance, énergie positive de la rue.
- PRODUCTION : Percs afro (congas, djembé synthétiques), 808 rebondissantes, mélodies festives, influences dancehall. BPM typique 100-115.
- REGISTRE : Argot urbain, expressions congolaises, langage festif et direct.`
  },
  {
    keywords: ["CENTRAL CEE"],
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE UK RAP :
- STYLE : UK Rap, Melodic Drill, London Street.
- VOCAL : Voix claire, flow drill UK (sliding, syncopé), léger autotune mélodique sur les hooks. Accent londonien marqué. Alternance rap technique / mélodies accrocheuses.
- AD-LIBS : Discrets, typés UK (Yeah, Uh).
- THÈMES : Londres, hustling, flexing, relations, succès, street life UK.
- PRODUCTION : 808 slides drill, hi-hats triolets, mélodies mélancoliques (piano, guitare), ambiance drill UK mais avec une touche mélodique. BPM typique 140-145.
- REGISTRE : Anglais UK, slang londonien (mandem, ting, innit), MLE accent.
- NOTE : Le son UK Drill est distinct du FR Drill — plus mélodique, moins agressif, plus "cool".`
  },
  {
    keywords: ["ALPHA WANN"],
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE TECHNIQUE FR :
- STYLE : Elite Technical French Rap, Modern Boom Bap, Dark Luxury Minimalism.
- VOCAL : Voix de baryton sèche, AUCUN AUTOTUNE, articulation hyper-précise, débit rapide et technique, agression froide et contrôlée. Pas de chant.
- AD-LIBS : Très discrets et rythmés, purement génériques (Yeah, Hey, Ouh).
- THÈMES : Excellence technique, rimes multisyllabiques denses, densité de rimes internes, Paris, indépendance, luxe sombre.
- PRODUCTION : Piano sombre et minimaliste (Sparse Dark Keys), textures de cloches subtiles, drums lourds et percutants (Heavy Punchy Drums, Tight Snare Crack), ligne de basse minimale. INTERDICTION de sonorités jazzy, de samples soulful ou de swing chaleureux.
- NOTE : Le flow doit être une démonstration de technique pure, froid et chirurgical.`
  },
  {
    keywords: ["KALASH"],
    isMelodic: true,
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE CARIBÉEN :
- STYLE : Dancehall moderne, Trap Caribéenne, Ragga-Rap.
- VOCAL : Mélange chant mélodique / rap, autotune léger, accent antillais marqué. Flow dansant et rebondissant, alternance entre passages planants et percutants.
- AD-LIBS : Atmosphériques et mélodiques, génériques.
- THÈMES : Identité caribéenne, fierté insulaire, fête, mélancolie tropicale, rue, exil.
- PRODUCTION : Riddims dancehall, percs tropicales, 808 rebondissantes, synthés atmosphériques, mélodies tropicales (steel drums, flûtes). BPM typique 90-110.
- REGISTRE : Mélange CRÉOLE MARTINIQUAIS et FRANÇAIS. Expressions antillaises authentiques.
- NOTE : Le mélange créole/français est NON-NÉGOCIABLE. L'identité caribéenne doit transparaître dans chaque ligne.`
  },
  {
    keywords: ["TIF"],
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE MAGHREB-MÉLO :
- STYLE : Raï-Trap, Algerian Urban Melodic, Mediterranean Melancholy.
- VOCAL : Mélodique avec influences raï, autotune maîtrisé, voix émotionnelle, alternance chant/rap. Vibrato subtil sur les notes tenues.
- AD-LIBS : Mélodiques, génériques.
- THÈMES : Nostalgie d'Alger (Houma), exil, mélancolie solaire, les deux rives, la mer, le destin (Mektoub), amour impossible.
- PRODUCTION : OUD, MANDOLE ou DERBOUKA intégrés dans le prompt de style. Guitares acoustiques mélancoliques, 808 profondes, mélodies orientales. Ambiance méditerranéenne émotionnelle.
- REGISTRE : Mélange 50/50 FRANÇAIS et DARIJA (Arabe Algérien). Slang : 'Sahbi', 'Khoya', 'Dz', 'El Ghorba'.
- NOTE : L'instrumentation orientale (oud, mandole, derbouka) est ESSENTIELLE à l'identité sonore.`
  },
  {
    keywords: ["TIAKOLA"],
    isMelodic: true,
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE AFRO-MÉLO :
- STYLE : Afro-Mélodique pur, Melo, Afro-Pop urbaine.
- VOCAL : Ultra-mélodique, AUTOTUNE MÉLODIQUE permanent, voix aiguë et lumineuse, variations de tonalité constantes, harmonies riches. Flow rapide et mélodique simultanément.
- AD-LIBS : Mélodiques et rythmés, vocalises courtes, génériques (Ouh, Yeah, Hey).
- THÈMES : Réussite, amour, loyauté, fête, danse, quartier, mélodie comme expression de joie et de douleur.
- PRODUCTION : Percs afro (congas, shakers, djembé synthétiques), guitares mélodiques, 808 rebondissantes et chaudes, synthés lumineux, pads atmosphériques. BPM typique 100-120.
- REGISTRE : Français avec influences Lingala subtiles, langage jeune et positif.
- NOTE : La MÉLODIE est TOUT. Le chant ne s'arrête jamais. Chaque syllabe est chantée avec des variations mélodiques.`
  },
  {
    keywords: ["PNL", "ADEMO", "NOS"],
    isMelodic: true,
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE CLOUD RAP :
- STYLE : Cloud Rap atmosphérique, Melodic Trap, Emotional Autotune.
- VOCAL : Autotune OMNIPRÉSENT et artistique, voix planante, flow lent et spatial. Le chant mélodique EST le style — pas de rap sec. Voix doublées et superposées pour un effet éthéré.
- AD-LIBS : Mélodiques, aériens, réverbérés (Ouh, Yeah). Très espacés.
- THÈMES : Solitude, famille, réussite amère, contemplation urbaine, cité comme univers, nostalgie, mélancolie profonde.
- PRODUCTION : Synthés atmosphériques et planants, 808 profondes et lentes, mélodies éthérées (piano, pads), réverb massive, production minimaliste mais immersive. BPM typique 70-90.
- REGISTRE : Argot générique de la rue (verlan, argot urbain), langage émotionnel et introspectif.
- NOTE : L'ambiance PLANANTE et MÉLANCOLIQUE est non-négociable. Tout doit flotter. INTERDICTION de flow agressif ou rapide.`
  },
  {
    keywords: ["ROSALÍA"],
    isMelodic: true,
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE FLAMENCO-FUSION :
- STYLE : Flamenco expérimental, Art-Pop, Reggaeton déconstruit.
- VOCAL : Voix puissante et expressive, mélismes flamenco, textures vocales complexes, claquements de mains (Palmas), harmonies flamenco. Capable de passer du murmure au cri.
- AD-LIBS : Vocalisations flamenco (Ay, Olé), claquements rythmiques.
- THÈMES : Féminité, pouvoir, tradition vs modernité, Andalousie, passion.
- PRODUCTION : Palmas, guitare flamenca, 808 trap, synthés modernes, mélange organique/électronique.
- REGISTRE : Espagnol avec expressions andalouses, vocabulaire viscéral.`
  },
  {
    keywords: ["BILLIE EILISH"],
    isMelodic: true,
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE DARK POP :
- STYLE : Dark Pop, Alt-Pop, Minimaliste, ASMR-Pop.
- VOCAL : Chant murmuré (whisper vocals), très proche du micro, voix doublées et harmonisées sombrement. Passages entre murmure intime et moments de puissance brute.
- AD-LIBS : Respirations audibles, murmures, sons organiques.
- THÈMES : Anxiété, cauchemars, pouvoir silencieux, vulnérabilité, rébellion douce.
- PRODUCTION : Basses lourdes et distordues (sub-bass extrême), textures organiques et bruits de fond (ASMR-like), minimalisme percutant, silence comme instrument.
- NOTE : Le CONTRASTE silence/puissance et murmure/cri est la signature. La production doit être minimaliste mais massive.`
  },
  {
    keywords: ["AYA NAKAMURA"],
    isMelodic: true,
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE AFRO-POP FR :
- STYLE : Afro-Pop, Pop-R&B urbaine, Dancehall-Pop.
- VOCAL : Voix puissante et reconnaissable, autotune léger, flow chaloupé et dansant, hooks ultra-efficaces et mémorables. Chant mélodique dominant.
- AD-LIBS : Rythmés et dansants (Hey, Allez, Ouh), ad-libs mélodiques courts.
- THÈMES : Indépendance féminine, amour/désamour, danse, confiance en soi, vie nocturne.
- PRODUCTION : Percs afro légères, guitares pop mélodiques, 808 chaudes et rebondissantes, production pop moderne et lumineuse. BPM typique 95-115.
- REGISTRE : Français avec argot urbain unique, expressions percutantes et mémorables, langage direct et empowering.
- NOTE : Les HOOKS sont la priorité. Chaque refrain doit être immédiatement mémorisable et dansant.`
  },
  {
    keywords: ["ORELSAN"],
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE STORYTELLING FR :
- STYLE : Rap narratif, Storytelling, Pop-Rap intelligent.
- VOCAL : Voix naturelle et articulée, PAS d'autotune, flow narratif parlé-chanté, débit varié (lent/rapide selon la narration). Ton entre ironie et émotion sincère.
- AD-LIBS : Quasi inexistants — la narration prime.
- THÈMES : Quotidien, cynisme tendre, nostalgie, passage à l'âge adulte, absurdité de la vie moderne, province, classe moyenne, humour noir.
- PRODUCTION : Productions variées (boom bap, électro, pop), samples créatifs, arrangements cinématiques pour les morceaux narratifs. Guitares, synthés, orchestrations ponctuelles.
- REGISTRE : Français standard très accessible, humour, références culturelles populaires (pas élitistes), ton conversationnel.
- NOTE : Le STORYTELLING est la signature. Chaque morceau raconte une histoire complète avec un arc narratif. L'écriture doit être spirituelle et touchante simultanément.`
  },
  {
    keywords: ["BURNA BOY"],
    isMelodic: true,
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE AFROBEATS :
- STYLE : Afrobeats, Afro-Fusion, Afro-Pop.
- VOCAL : Voix puissante et chaude, chant mélodique dominant, registre étendu (grave à aigu), légères influences reggae/dancehall dans le phrasé.
- AD-LIBS : Vocalises africaines, exclamations mélodiques (Hey, Yeah, Jo).
- THÈMES : Fierté africaine, fête, amour, résilience, Nigeria, pan-africanisme.
- PRODUCTION : Cuivres (brass) puissants, percussions polyrythmiques (talking drums, congas, shakers), guitares afrobeat, basses groovy, mélodies lumineuses. BPM typique 100-120.
- REGISTRE : Anglais, Pidgin Nigerian, Yoruba. Mélange linguistique naturel.
- NOTE : L'ÉNERGIE FESTIVE et la FIERTÉ doivent dominer. Les cuivres et percussions polyrythmiques sont essentiels.`
  },
  {
    keywords: ["BAD BUNNY"],
    isMelodic: true,
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE REGGAETON :
- STYLE : Reggaeton, Latin Trap, Perreo, Latin Urban.
- VOCAL : Voix grave et distinctive, flow dembow syncopé, alternance rap/chant, autotune stylisé. Phrasé nonchalant et cool.
- AD-LIBS : Latinos classiques (Yeh, Prr, Ouh), exclamations rythmées.
- THÈMES : Fête, perreo, amour/désamour, fierté latine, Porto Rico, indépendance.
- PRODUCTION : Dembow riddim (kick syncopé caractéristique), 808 lourdes, synthés latins, percs reggaeton, basses profondes. BPM typique 90-100.
- REGISTRE : Espagnol portoricain, slang latino (perreo, bellaqueo, duro, mami, la calle).
- NOTE : Le DEMBOW RIDDIM est non-négociable. Le rythme syncopé kick-snare est la base de tout.`
  },
  {
    keywords: ["DAFT PUNK"],
    isMelodic: true,
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE FRENCH HOUSE :
- STYLE : French House, Electro-Funk, French Touch.
- VOCAL : Vocoder, Talkbox, voix robotique. Très peu de paroles — la voix est un instrument.
- AD-LIBS : Sons robotiques, vocoder glitches.
- THÈMES : Technologie, futurisme, danse, nuit, émotion mécanique.
- PRODUCTION : Synthétiseurs vintage (Moog, Juno), boucles de basse funk, side-chain pumping, samples funk/disco filtrés, drums électroniques précis.
- NOTE : La VOIX ROBOTIQUE est la signature. Tout passe par le vocoder/talkbox.`
  },
  {
    keywords: ["TAME IMPALA"],
    isMelodic: true,
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE PSYCHEDELIC :
- STYLE : Psychedelic Pop, Synth-Pop, Neo-Psychedelia.
- VOCAL : Falsetto aérien, réverbe/delay intense, voix noyée dans la production, harmonies éthérées.
- AD-LIBS : Vocalises réverbérées, sons planants.
- THÈMES : Introspection, temps qui passe, solitude, transcendance, rêve éveillé.
- PRODUCTION : Synthés analogiques (Juno, Prophet), phaser sur la batterie, basses groovy et profondes, réverb massive, production dense et immersive.
- NOTE : La voix doit FLOTTER dans la production, pas dominer. L'immersion sonore est la priorité.`
  },
  {
    keywords: ["SOOLKING"],
    isMelodic: true,
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE RAÏ-POP :
- STYLE : Raï-Pop, Algerian Pop moderne, Mediterranean Urban.
- VOCAL : Chant mélodique avec influences raï, autotune léger, voix émotionnelle et lumineuse.
- AD-LIBS : Mélodiques, génériques.
- THÈMES : Algérie, nostalgie, amour, fête, identité, deux cultures.
- PRODUCTION : Violons orientaux, guitares acoustiques, percussions orientales (derbouka), mélodies pop modernes, 808 légères.
- REGISTRE : Français et Darija, langage festif et émotionnel.`
  },
  {
    keywords: ["CHEB MAMI", "MAMI"],
    isMelodic: true,
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE RAÏ ORCHESTRAL CROSSOVER :
- STYLE : Raï Orchestral, Mediterranean Crossover, World Fusion Raï.
- VOCAL : Haute voix ténor avec mélismes arabes, portée de trois octaves, pureté vocale sans autotune. Voix MASCULINE puissante et émotionnelle. Chant raï traditionnel avec virtuosité vocale.
- AD-LIBS : Ornementations maqam, vocalisations raï traditionnelles (ya, habibi), mélismes étirés.
- THÈMES : Amour romantique, nostalgie de l'Algérie, exil et retour, passion méditerranéenne, poésie sentimentale.
- PRODUCTION : Darbuka percussion raï, violons orientaux, accordéon mélodique, guitare électrique wah, nappes de synthé orchestrales, production analogique chaleureuse. BPM typique 90-115.
- LANGUE : FRANÇAIS et ARABE (darija) MÉLANGÉS — c'est NON-NÉGOCIABLE. Les paroles DOIVENT alterner entre français et darija algérien dans chaque couplet. Taguer les switches avec [in french] et [in arabic]. Ratio approximatif : 50% français / 50% darija.
- PHONÉTIQUE : Accent nord-africain sur le français, mélismes arabes sur les voyelles longues, transitions naturelles entre les deux langues.
- REGISTRE : Poétique et romantique, vocabulaire accessible, expressions sentimentales en darija (ya galbi, habibi, wahdi).
- NOTE : Le MÉLANGE FRANÇAIS-ARABE est la SIGNATURE de Cheb Mami. INTERDICTION de paroles 100% arabe ou 100% français.`
  },
  {
    keywords: ["DJALIL PALERMO", "PALERMO", "DJ PALERMO"],
    isMelodic: true,
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE RAÏ URBAIN / TRAP-RAÏ :
- STYLE : Raï Urbain Moderne, Trap-Raï Hybrid, Street Raï Youth.
- VOCAL : Voix MASCULINE jeune, ténor confiant, delivery rap-chanté hybride. JAMAIS de voix féminine. Énergie urbaine avec instinct mélodique sur les hooks. Vibrato minimal, ton conversationnel et street.
- AD-LIBS : Urbains et modernes (Ey, Oh, Hah), ad-libs trap légers, exclamations de rue.
- THÈMES : Rue, confiance, fierté algérienne, amour urbain, réussite, jeunesse, quartier, nuits de ville.
- PRODUCTION : 808 bass lourde, hi-hats trap rapides, guitare trap rythmique, synthé strings minimal, pads atmosphériques, production digitale crisp moderne. BPM typique 90-110.
- LANGUE : FRANÇAIS et ARABE (darija) MÉLANGÉS. Les paroles alternent entre français urbain et darija algérien moderne. Slang de rue algérien. Taguer les switches avec [in french] et [in arabic]. Ratio approximatif : 40% français / 60% darija.
- PHONÉTIQUE : Accent algérien urbain, prononciation darija moderne, slang de la jeunesse algéroise.
- REGISTRE : Langage de rue, direct, confiant, vocabulaire jeune et urbain, expressions darija modernes.
- NOTE : C'est un artiste MASCULIN avec une voix de jeune homme. Le mélange français-darija est essentiel à son style.`
  },
  {
    keywords: ["STROMAE"],
    isMelodic: true,
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE ART-POP :
- STYLE : Art-Pop, Electro-Chanson, Belgian New Wave.
- VOCAL : Articulé, théâtral, voix expressive et modulée, alternance entre chant puissant et parlé-chanté. Accent belge subtil.
- AD-LIBS : Rares — la narration et la mélodie priment.
- THÈMES : Mélancolie dansante, critique sociale, paternité, société moderne, solitude, absurdité.
- PRODUCTION : Synthés électroniques modernes, influences africaines subtiles (rumba congolaise), beats dansants mais émotionnels, arrangements orchestraux ponctuels.
- REGISTRE : Français (accent belge), langage accessible mais intelligent, humour noir.
- NOTE : Le CONTRASTE entre mélancolie du texte et énergie dansante de la production est la signature.`
  },
  {
    keywords: ["KAARIS"],
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE HARDCORE TRAP FR :
- STYLE : Hardcore Trap Français, Aggressive Street Rap, Sevran 93. PAS du métal, PAS du rock — c'est du RAP TRAP pur.
- VOCAL : Voix très grave baryton imposante, flow agressif et saccadé, AUCUN autotune mélodique, débit percutant et haché. Ad-libs gutturaux de rappeur.
- AD-LIBS : Courts et percutants (Grrr, Ugh, Hey, Ouais). Style rap, JAMAIS de cris métal.
- THÈMES : Violence de rue, intimidation, argent sale, compétition physique, survie en banlieue, domination.
- PRODUCTION : 808 sub bass lourdes, trap snares claquantes, hi-hats triplets rapides, piano sombre mineur, pads synthé dark minimaux. PAS DE GUITARE ÉLECTRIQUE. PAS DE RIFFS ROCK. PAS D'INSTRUMENTS MÉTAL. BPM typique 135-145.
- INSTRUMENTS INTERDITS : guitare électrique, guitare distorsion, riffs rock, double pédale, blast beats, power chords — TOUT ce qui sonne rock/métal est INTERDIT.
- REGISTRE : Argot de rue hardcore Sevran, vocabulaire violent et direct, vulgarité comme ponctuation.
- NOTE : C'est du RAP TRAP AGRESSIF, pas du métal. La production doit être 100% trap (808, hi-hats, snares, piano dark). L'agressivité vient de la VOIX et du FLOW, pas des instruments.`
  },
  {
    keywords: ["NATE DOGG"],
    isMelodic: true,
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE G-FUNK :
- STYLE : G-Funk, West Coast R&B, Gangsta Soul.
- VOCAL : Voix de baryton veloutée, hooks mélodiques ultra-smooth, harmonies riches. Chant R&B pur avec une attitude street.
- THÈMES : Fête, chill, West Coast life, cruising, amour décontracté.
- PRODUCTION : Synthés G-Funk (Moog/Minimoog), basses funk profondes, talk box, claps, drums groovy et lents. BPM typique 90-100.`
  },
  {
    keywords: ["WIZKID", "WIZ KID", "STARBOY"],
    isMelodic: true,
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE AFROBEATS SMOOTH :
- STYLE : Afrobeats, Afro-Pop, Smooth Dancehall, Lagos Sound.
- VOCAL : Voix MASCULINE ténor soyeuse, delivery nonchalante et effortless. Chant mélodique fluide avec inflexion Yoruba. JAMAIS agressif — tout est cool et laid-back. La voix GLISSE sur le beat.
- AD-LIBS : Doux et mélodiques (Aye, Oh, Yeah), ad-libs qui accompagnent le groove sans le casser.
- THÈMES : Amour, danse, Lagos nightlife, fierté africaine, beauté féminine, vibes positives, succès.
- PRODUCTION : Log drums afrobeats, shekere percussion, basse sub chaude, pads synthé doux, licks guitare afro clean, production analogique chaude et spacieuse. BPM typique 100-112.
- LANGUE : ANGLAIS et YORUBA/PIDGIN mélangés. Alterner naturellement entre anglais et pidgin nigérian.
- NOTE : L'EFFORTLESS COOL est non-négociable. Wizkid ne force jamais — tout semble naturel et fluide.`
  },
  {
    keywords: ["TEMS"],
    isMelodic: true,
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE ALT-AFRO SOUL :
- STYLE : Alt-Afro Soul, Ethereal R&B, African Soul Moderne.
- VOCAL : Voix FÉMININE alto-soprano éthérée et envoûtante. Capable de passer du murmure intime au pic émotionnel puissant. Delivery breathy et haunting. Vibrato naturel. JAMAIS de rap — tout est chanté avec profondeur soul.
- AD-LIBS : Harmonies vocales empilées, vocalises éthérées, hums doux.
- THÈMES : Amour complexe, indépendance féminine, spiritualité, introspection, force tranquille, connexion à la terre.
- PRODUCTION : Percussions afro douces, basse chaude, pads synthé éthérés, guitare acoustique fingerpicked, harmonies vocales layered comme élément de production. Atmosphère dreamy et warm. BPM typique 95-110.
- LANGUE : ANGLAIS avec inflexion nigériane. Peut inclure des mots en Yoruba.
- NOTE : La qualité ÉTHÉRÉE et HAUNTING est la signature. La voix doit sembler venir d'un autre monde — fragile mais puissante.`
  },
  {
    keywords: ["ASAKE"],
    isMelodic: true,
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE AMAPIANO-FUJI :
- STYLE : Amapiano-Fuji Fusion, Street Lagos, Afrobeats Percussif.
- VOCAL : Voix MASCULINE ténor énergique, delivery de type chant de rue/chant communautaire. Attaques vocales percussives. Ornementations vocales Fuji traditionnelles. Énergie massive de foule — designed pour les stades.
- AD-LIBS : Chants de foule, appels-réponses (Olololo, Eyyy), exclamations Yoruba énergiques.
- THÈMES : Fête de rue, fierté Yoruba, Lagos nightlife, réussite, énergie communautaire, street life, foi.
- PRODUCTION : Basse amapiano profonde, log drums lourds, talking drum Yoruba, couches de percussions fuji polyrhythmiques, stabs synthé minimaux et punchy. Production digitale crisp. BPM typique 108-118.
- LANGUE : ANGLAIS et YORUBA mélangés. Forte présence de Yoruba et pidgin nigérian dans les hooks et chants.
- NOTE : L'ÉNERGIE DE FOULE est non-négociable. Chaque hook doit donner envie de chanter en groupe. Le côté PERCUSSIF et COMMUNAUTAIRE est la signature.`
  },
  {
    keywords: ["JOÉ DWÈT FILÉ", "JOE DWET FILE", "DWET FILE", "DWÈT FILÉ"],
    isMelodic: true,
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE ZOUK MODERNE :
- STYLE : Zouk Moderne, R&B Caribéen, Romantic Island Pop.
- VOCAL : Voix MASCULINE ténor douce et chaleureuse, delivery romantique et intime. Chant mélodique fluide avec accent créole. Vibrato naturel. Jamais agressif — tout est doux, sensuel et enveloppant.
- AD-LIBS : Doux et romantiques (Ooh, Baby, Doudou), harmonies vocales.
- THÈMES : Amour romantique, nostalgie antillaise, beauté féminine, douceur de vivre, nuits caribéennes, séduction douce.
- PRODUCTION : Basse zouk chaude, boîte à rythme avec groove zouk, textures de steel pan, guitare acoustique island, pads synthé lush, production analogique chaude avec ambiance tropicale. BPM typique 90-105.
- LANGUE : FRANÇAIS et CRÉOLE antillais mélangés. Les paroles alternent naturellement entre français et expressions créoles (doudou, ti moun, an mwen). Taguer [in french] et [in créole].
- PHONÉTIQUE : Accent antillais doux, voyelles chantantes, r roulés légers.
- NOTE : La DOUCEUR CARIBÉENNE est non-négociable. Le zouk groove doit être omniprésent. INTERDICTION de sonner comme du rap ou de la trap.`
  },
  {
    keywords: ["AUGXST"],
    isMelodic: true,
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE DARK CLOUD RAP / AMBIENT TRAP :
- STYLE : Dark Emotional Cloud Rap, Ambient Trap, Nocturnal Bass Music. CE N'EST PAS DU R&B. C'est du rap atmosphérique sombre avec une voix qui frôle le chant sans jamais y basculer.
- VOCAL : Voix MASCULINE douce, autotune subtil, delivery "whisper-croon" — entre le murmure rappé et le chantonnement. La voix FLOTTE dans la production, ne la domine pas. JAMAIS de chant R&B complet (pas de runs, pas de belting, pas de power vocals). Breathy, close-mic, intime. Le mot-clé est "almost sung" — presque chanté mais jamais tout à fait.
- AD-LIBS : Quasi inexistants. Murmures réverbérés, soupirs, fins de phrases qui s'évanouissent dans la reverb.
- THÈMES : Romance toxique, conduites nocturnes à 3h du matin, tristesse luxueuse, isolation émotionnelle, confessions intimes, solitude urbaine, pluie sur la ville, vulnérabilité masculine.
- PRODUCTION : Sub bass omineux et profond, 808 dark mélodiques en half-time, pads rêveurs atmosphériques, synthés washed-out et désaccordés, plucks de cloches distantes et éparses, percussion minimale. TOUT est noyé dans la reverb. Tempo ULTRA LENT (60-80 BPM). Ambiance de brouillard nocturne.
- INSTRUMENTS INTERDITS : Guitare acoustique, cuivres (brass), drums agressifs, hi-hats rapides, piano brillant — tout ce qui casse l'atmosphère de brume.
- REGISTRE : Anglais ou français intime, peu de mots, phrases courtes qui traînent, silences comme ponctuation.
- NOTE CRITIQUE : La DISTINCTION avec le R&B est NON-NÉGOCIABLE. AUGXST n'est PAS un chanteur R&B. C'est un rappeur atmosphérique dont la voix FRÔLE le chant. La production doit être ambient/trap, PAS soul/R&B. Pas de grooves R&B, pas de drums funk, pas de progressions d'accords soul.`
  },
  {
    keywords: ["VALD"],
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE EXPÉRIMENTAL :
- STYLE : Rap expérimental, Ironique, Absurdiste.
- VOCAL : Flow imprévisible et rapide, variations de ton constantes (grave/aigu, sérieux/comique), pas d'autotune. Capacité à rapper très vite.
- AD-LIBS : Exclamations absurdes, onomatopées.
- THÈMES : Absurde, ironie noire, satire sociale, provocation, humour trash, science-fiction.
- PRODUCTION : Beats variés et imprévisibles (trap, boom bap, électro, rock), changements de tempo, samples inattendus.
- REGISTRE : Français avec vocabulaire varié (soutenu → vulgaire), references geek et trash, jeux de mots.
- NOTE : L'IMPRÉVISIBILITÉ est la signature. Chaque section peut changer de ton radicalement.`
  },
  {
    keywords: ["HAMZA"],
    isMelodic: true,
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE MELODIC TRAP BELGE :
- STYLE : Melodic Trap, R&B-infused Rap, Belgian Trap, Sauce Music.
- VOCAL : Autotune mélodique omniprésent, voix suave, nonchalante et sensuelle. Flow élastique et fluide. Le chant mélodique EST le style.
- AD-LIBS : Génériques (Yeah, Ouh, Hey) placés de manière aérée et mélodique.
- THÈMES : Luxe, sensualité, vie nocturne, esthétique US, femmes, sauce, ambiance.
- PRODUCTION : Synthés smooth et luxueux. Basses 808 profondes, rondes. Hi-hats nets et aérés. Ambiance nocturne intense. BPM typique 130-145.
- REGISTRE : Français avec argot belge, anglicismes, vocabulaire luxe/mode.
- NOTE : INTERDICTION de flow sec ou technique. Tout doit être MÉLODIQUE, SMOOTH et NONCHALANT.`
  },
  {
    keywords: ["BOOBA"],
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE HARDCORE RAP FR :
- STYLE : Hardcore Rap, Dark Trap, Drill, Cinematic Rap.
- VOCAL : Voix grave, autoritaire, imposante. Autotune sombre sur les refrains uniquement. Flow saccadé, précis, punchlines percutantes. Rap technique dominant.
- AD-LIBS : Génériques (Grrr, Yeah, Hey, Ouh) placés de manière agressive.
- THÈMES : Réussite solitaire, rue, compétition féroce, luxe froid, trahison, héritage, domination.
- PRODUCTION : Dark, orchestrale (choeurs sombres, violons dramatiques), heavy 808s distordues, minimaliste mais massive. Production cinématique.
- REGISTRE : Vocabulaire riche et percutant, punchlines à double sens, argot de rue élaboré.
- NOTE : La PUISSANCE et la DOMINATION sont non-négociables. Chaque punchline doit frapper.`
  },
  {
    keywords: ["TRAVIS SCOTT"],
    isMelodic: true,
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE PSYCHEDELIC TRAP :
- STYLE : Psychedelic Trap, Dark Melodic Trap, Ambient Trap.
- VOCAL : Autotune épais et artistique, voix modulée, ad-libs mélodiques génériques (Yeah, Ouh, Hey). Chant planant et spatial.
- AD-LIBS : Mélodiques, réverbérés, récurrents et atmosphériques.
- THÈMES : Nuit, fête cosmique, exaltation, chaos contrôlé, espace, substances.
- PRODUCTION : Basses saturées et profondes, synthés atmosphériques et planants, beat switches fréquents, effets de phase/flanger, réverb massive. BPM typique 130-150.
- NOTE : Les BEAT SWITCHES et l'ambiance COSMIQUE sont essentiels. La production doit évoluer constamment.`
  },
  {
    keywords: ["DRAKE"],
    isMelodic: true,
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE MELODIC RAP :
- STYLE : Melodic Rap, R&B-Trap, Emotional Pop-Rap.
- VOCAL : Transition fluide rap/chant sans rupture, autotune léger et maîtrisé, hooks ultra-mémorables. Voix moyenne, flow smooth.
- AD-LIBS : Discrets, mélodiques (Yeah, Ooh).
- THÈMES : Relations amoureuses complexes, introspection, succès et solitude, nostalgie, Toronto, vulnérabilité masculine.
- PRODUCTION : 808 profondes et chaudes, mélodies R&B (piano, guitare, pads), drums trap propres, ambiance nocturne et intime. BPM typique 130-145.
- REGISTRE : Anglais, flow conversationnel, passages introspectifs.
- NOTE : La DUALITÉ rap/chant fluide et les hooks mémorables sont la signature. Les refrains doivent être immédiatement fredonnables.`
  },
  {
    keywords: ["KENDRICK LAMAR"],
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE CONSCIOUS RAP :
- STYLE : Conscious Rap, Jazz-Rap, West Coast Lyrical, Experimental Hip-Hop.
- VOCAL : Flow technique ultra-complexe, changements de voix et de personnages, storytelling profond. PAS d'autotune. Débit varié (lent/rapide), voix modulée selon le personnage.
- AD-LIBS : Rares, intégrés à la narration.
- THÈMES : Justice sociale, politique, héritage afro-américain, religion, introspection, Compton, dualité, rédemption.
- PRODUCTION : Samples jazz (contrebasse, saxo, piano jazz), drums variés (boom bap, trap, live drums), éléments live, arrangements orchestraux, changements de tempo.
- REGISTRE : Anglais, storytelling dense, métaphores profondes, références bibliques et politiques.
- NOTE : La PROFONDEUR NARRATIVE et la TECHNIQUE VOCALE sont non-négociables. Chaque morceau doit avoir plusieurs niveaux de lecture.`
  },
  {
    keywords: ["PLAYBOI CARTI"],
    isMelodic: true,
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE RAGE/VAMP :
- STYLE : Rage, Vamp, Minimalist Trap, Punk Rap.
- VOCAL : Baby voice, autotune extrême, voix aiguë et répétitive, flow minimaliste. Les mots sont des TEXTURES, pas du contenu — le son prime sur le sens.
- AD-LIBS : Génériques omniprésents (What, Yeah, Slatt), répétés en boucle.
- THÈMES : Minimalistes — style, flex, énergie pure, dark vibes, vampirisme esthétique.
- PRODUCTION : Synthés 8-bit et distordus, basses extrêmement saturées, drums agressifs et minimalistes, mélodies dark et répétitives. BPM typique 150-175.
- REGISTRE : Anglais minimaliste, phrases courtes et répétitives, onomatopées.
- NOTE : Le MINIMALISME TEXTUEL est la signature. Peu de mots, beaucoup de vibe. La voix est un instrument rythmique, pas un véhicule narratif.`
  },
  {
    keywords: ["KANYE WEST"],
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE AVANT-GARDE RAP :
- STYLE : Avant-Garde Rap, Gospel-Rap, Art-Pop, Maximalist Hip-Hop.
- VOCAL : Voix expressive et variée, alternance rap/chant, flow imprévisible, autotune artistique ponctuellement. Capable de passer du murmure au cri.
- AD-LIBS : Expressifs, exclamatifs (Hey, Hah, Yeah).
- THÈMES : Ego, religion, mode, famille, grandiosité, santé mentale, art comme mission, controverse.
- PRODUCTION : Samples soul choppés, choeurs gospel massifs, orchestration grandiose, drums percutants, changements de production radicaux. Maximalisme sonore.
- REGISTRE : Anglais, vocabulaire varié, références culturelles larges (mode, art, religion).
- NOTE : L'AMBITION ARTISTIQUE et les CHOEURS/SAMPLES SOUL sont non-négociables. Chaque morceau doit sonner comme un événement.`
  },
  {
    keywords: ["LANA DEL REY"],
    isMelodic: true,
    instructions: `# INSTRUCTIONS SPÉCIFIQUES — STYLE DREAM POP :
- STYLE : Dream Pop, Sadcore, Cinematic, Americana.
- VOCAL : Chant langoureux et traînant, murmures, harmonies éthérées, voix basse et veloutée. Phrasé lent et mélancolique.
- AD-LIBS : Murmures, soupirs, vocalises mélancoliques.
- THÈMES : Nostalgie, glamour tragique, Americana, amour toxique, Hollywood, beauté déchue, été éternel.
- PRODUCTION : Réverbe massive, guitares surf, cordes cinématiques, drums lents et lourds, ambiance années 60 réimaginée.
- REGISTRE : Anglais poétique, références à l'Amérique vintage, vocabulaire romantique et tragique.
- NOTE : La LANGUEUR et la MÉLANCOLIE LUMINEUSE sont la signature. Tout doit sonner comme un souvenir doré.`
  }
];

/**
 * Lookup matching artist profiles by inspiredBy string.
 * Returns ONLY the matching profiles (typically 0-2), saving ~80% tokens.
 */
export function getArtistSpecificInstructions(inspiredBy: string): string {
  if (!inspiredBy || inspiredBy === 'none') return '';
  const upper = inspiredBy.toUpperCase().trim();
  // FIX 1.2: Return ONLY the first (most specific) matching profile.
  // Multiple matches dilute V1 purity with conflicting instructions.
  // Priority: exact keyword match > partial keyword match
  const exactMatch = ARTIST_PROFILES.find(p =>
    p.keywords.some(k => k.toUpperCase() === upper)
  );
  if (exactMatch) return exactMatch.instructions;
  // Fallback: first profile whose keyword is contained in the artist name
  const partialMatch = ARTIST_PROFILES.find(p =>
    p.keywords.some(k => upper.includes(k.toUpperCase()))
  );
  return partialMatch ? partialMatch.instructions : '';
}

/**
 * Check if the artist has a melodic profile (singing-dominant).
 * Used to adapt system instructions (negative prompts, vocal rules).
 */
export function isArtistMelodic(inspiredBy: string): boolean {
  if (!inspiredBy || inspiredBy === 'none') return false;
  const upper = inspiredBy.toUpperCase();
  const match = ARTIST_PROFILES.find(p =>
    p.keywords.some(k => upper.includes(k))
  );
  return match?.isMelodic ?? false;
}

/**
 * Get relevant Writing DNA based on inspiredBy + genre.
 * Returns only the genre-relevant DNA section instead of all 20.
 */
export function getRelevantWritingDNA(inspiredBy: string, genre: string): string {
  const upper = (inspiredBy + ' ' + genre).toUpperCase();

  const dnaMap: Record<string, string> = {
    'RAP_FR': `RAP FR :
- Utilise le Verlan, l'Argot de rue générique (ex: "charbon", "moula").
- Thèmes : Rue, mélancolie, réussite, trahison.
- Flow : Saccadé ou planant (Cloud).`,

    'MELODIC_STREET_POP': `MELODIC STREET POP / MARSEILLE :
- Autotune mélodique omniprésent, voix chantée en permanence.
- Thèmes : Quartier, loyauté, amour de rue, soleil et mélancolie.
- Flow : Ultra-mélodique, rapide, rebondissant. Piano + 808 punchy.
- INTERDICTION de flow rap sec pour ce style.`,

    'US_UK_RAP': `US/UK RAP :
- Utilise impérativement l'ANGLAIS.
- Slang US/UK générique : "no cap", "opps", "sliding", "stacks".
- Flow : Melodic trap, Dark psychedelic, Drill.`,

    'DRILL_FR': `DRILL FR :
- 808 slides agressives, hi-hats frénétiques en triolets, piano sombre.
- Flow syncopé, brutal, avec pauses dramatiques.
- Langage cru, street, territorial.`,

    'DARK_LYRICAL': `DARK LYRICAL :
- Flow technique dense, zéro mélodie, syllabe = percussion.
- Production sombre : boom-bap hybride drill, samples orchestraux pitchés.
- Références occultes, culturelles, multi-couches.`,

    'REGGAETON': `REGGAETON / LATIN URBAN :
- Dembow riddim obligatoire, basses rondes et rebondissantes.
- Flow rythmique espagnol, hooks catchy et dansants.
- Thèmes : fête, séduction, dancefloor.`,

    'AFROBEATS': `AFROBEATS :
- Percussion afro authentique, grooves infectieux.
- Mélodies joyeuses, hooks dansants, énergie positive.
- Thèmes : célébration, fierté culturelle, danse.`,

    'CARIBBEAN': `CARIBBEAN / DANCEHALL :
- Riddim dancehall, basse chaude et groovy.
- Flow bouncy avec inflexion caribéenne.
- Énergie festive, positive, dancefloor tropical.`,

    'MAGHREB': `MAGHREB / RAÏ :
- Instrumentations orientales (oud, derbouka, qanun).
- Mélodies en gammes arabes, émotion brute.
- Thèmes : nostalgie, amour, exil, fête.`,

    'AFRO_MELO': `AFRO-MELODIC :
- Autotune mélodique sur production afro-trap.
- 808 chaudes, percussions afro, mélodies lumineuses.
- Alternance rap/chant, énergie festive-mélancolique.`,

    'STORYTELLING': `STORYTELLING / ALT-RAP :
- Narration poétique, flow conversationnel.
- Production organique : piano jazz, guitare acoustique, drums live.
- Introspection, humour, observations sociales.`,

    'ELECTRO': `ELECTRO / HOUSE :
- Production électronique précise, synthés dominants.
- Groove dancefloor, vocoder ou voix traitée.
- Structures répétitives, build-ups, drops.`,

    'MELODIC_TRAP': `MELODIC TRAP :
- Autotune mélodique, alternance rap/chant fluide.
- 808 profondes, mélodies sombres (piano, guitare), hi-hats complexes.
- Thèmes : succès, mélancolie, nuit, introspection.`,

    'HARDCORE': `HARDCORE RAP :
- Voix grave, agressive, zéro mélodie.
- Production massive : orchestrale sombre ou trap lourde.
- Langage cru, dominance, confrontation.`,

    // FIX #7: 12 new genre entries
    'DARK_POP': `DARK POP :
- Production sombre avec mélodies pop accessibles.
- Autotune subtil, voix mélancolique, synthés atmosphériques.
- Thèmes : obscurité, introspection, beauté sombre.`,

    'R_AND_B': `R&B CONTEMPORAIN :
- Smooth vocals, production riche, harmonie complexe.
- 808 profondes, synthés warm, grooves sensuels.
- Thèmes : amour, sensualité, relations.`,

    'JAZZ_RAP': `JAZZ RAP :
- Samples de jazz, mélodies complexes, flow technique.
- Drums swing, basses jazz, sophistication.
- Thèmes : introspection, intellectualisme, poésie.`,

    'PSYCHEDELIC': `PSYCHEDELIC / TRIPENDELIC :
- Production expérimentale, textures étranges, modulation vocale.
- Synthés psychédéliques, drums complexes, atmosphère immersive.
- Thèmes : exploration, altérité, expérience sensorielle.`,

    'ROCK_ALT': `ROCK ALTERNATIF :
- Production rock moderne, guitares lead, drums organiques.
- Voix puissante, structures dynamiques, énergie alternative.
- Thèmes : rébellion, authenticité, passion.`,

    'AMAPIANO': `AMAPIANO :
- Piano signature, hi-hat rolling, 808 chaudes, groove dancefloor.
- Production sud-africaine authentique, énergie festive.
- Thèmes : célébration, danse, fierté culturelle.`,

    'CLOUD_RAP': `CLOUD RAP :
- Production ethereal, synthés rêveurs, reverb massive, lo-fi textures.
- Voix murmurée, flow introspectif, atmosphère spacieuse.
- Thèmes : introspection, solitude, rêverie.`,

    'VAMP_RAGE': `VAMP & RAGE :
- Production aggressive, énergie extrême, vocaux puissants.
- Synthés sombres, drums percutants, attitude confrontationnelle.
- Thèmes : rage, domination, confrontation urbaine.`,

    'FLAMENCO': `FLAMENCO / FLAMENCO FUSION :
- Guitare flamenco caractéristique, palmas rythmiques, émotion brute.
- Voix avec vibrato, mélodies en gammes flamenco, passion authentique.
- Thèmes : amour tragique, fierté, souffrance.`,

    'G_FUNK': `G-FUNK :
- Synthés funk années 90, basses rondes et rebondissantes, hi-hats complexes.
- Voix smooth avec autotune vintage, grooves funk-trap fusion.
- Thèmes : dancefloor, plaisir, style G-funk West Coast.`,

    'FUJI': `FUJI / FUJI FUSION :
- Percussions Fuji traditionnelles, arrangements complexes, voix lead mélodique.
- Fusion moderne avec production contemporaine, énergie festive.
- Thèmes : célébration culturelle, fierté nigériane, fête.`
  };

  const matchKeys: string[] = [];

  // Rap FR
  if (upper.includes('JUL') || upper.includes('GAZO') || upper.includes('ALPHA') || upper.includes('NEKFEU') || upper.includes('ORELSAN') || upper.includes('BOOBA') || upper.includes('KAARIS') || upper.includes('VALD') || upper.includes('NINHO') || upper.includes('DAMSO') || upper.includes('FREEZE')) matchKeys.push('RAP_FR');

  // Drill FR
  if ((upper.includes('DRILL') && upper.includes('FR')) || upper.includes('GAZO')) matchKeys.push('DRILL_FR');

  // Dark Lyrical
  if (upper.includes('FREEZE') || upper.includes('ALPHA WANN')) matchKeys.push('DARK_LYRICAL');

  // US/UK Rap
  if (upper.includes('DRAKE') || upper.includes('TRAVIS') || upper.includes('CENTRAL CEE') || upper.includes('KENDRICK') || upper.includes('CARTI') || upper.includes('KANYE') || upper.includes('DRILL') || upper.includes('UK')) matchKeys.push('US_UK_RAP');

  if (upper.includes('REGGAETON') || upper.includes('LATIN') || upper.includes('BAD BUNNY') || upper.includes('BALVIN')) matchKeys.push('REGGAETON');
  if (upper.includes('AFROBEAT') || upper.includes('BURNA') || upper.includes('REMA') || upper.includes('WIZKID') || upper.includes('TEMS') || upper.includes('ASAKE')) matchKeys.push('AFROBEATS');
  if (upper.includes('CARIBBEAN') || upper.includes('DANCEHALL') || upper.includes('KALASH') || upper.includes('ZOUK') || upper.includes('DWET') || upper.includes('DWÈT')) matchKeys.push('CARIBBEAN');
  if (upper.includes('MAGHREB') || upper.includes('RAÏ') || upper.includes('TIF') || upper.includes('SOOLKING') || upper.includes('ALGÉRI')) matchKeys.push('MAGHREB');
  if ((upper.includes('AFRO') && (upper.includes('MELO') || upper.includes('TIAKOLA') || upper.includes('TAYC') || upper.includes('DADJU'))) || upper.includes('NISKA') || upper.includes('SDM')) matchKeys.push('AFRO_MELO');
  if (upper.includes('ORELSAN') || upper.includes('LOMEPAL') || upper.includes('NEKFEU') || upper.includes('STORYTELL')) matchKeys.push('STORYTELLING');
  if (upper.includes('ELECTRO') || upper.includes('HOUSE') || upper.includes('DAFT') || upper.includes('JUSTICE') || upper.includes('STROMAE')) matchKeys.push('ELECTRO');
  if (upper.includes('HAMZA') || upper.includes('MELODIC TRAP') || upper.includes('SAUCE') || upper.includes('LAYLOW') || upper.includes('NINHO') || upper.includes('DAMSO')) matchKeys.push('MELODIC_TRAP');
  if (upper.includes('HARDCORE') || upper.includes('BOOBA') || upper.includes('KAARIS') || upper.includes('KALASH CRIM')) matchKeys.push('HARDCORE');

  // FIX #7: Matching rules for 12 new genres
  if (upper.includes('DARK POP') || upper.includes('BILLIE') || upper.includes('CLAIRO')) matchKeys.push('DARK_POP');
  if (upper.includes('R&B') || upper.includes('R AND B') || upper.includes('USHER') || upper.includes('BRYSON') || upper.includes('TYLA')) matchKeys.push('R_AND_B');
  if (upper.includes('JAZZ RAP') || upper.includes('MADVILLAINY') || upper.includes('FLYING LOTUS')) matchKeys.push('JAZZ_RAP');
  if (upper.includes('PSYCHEDELIC') || upper.includes('PSYCHO') || upper.includes('TAME IMPALA')) matchKeys.push('PSYCHEDELIC');
  if ((upper.includes('ROCK') && upper.includes('ALT')) || upper.includes('ALTERNATIVE ROCK')) matchKeys.push('ROCK_ALT');
  if (upper.includes('AMAPIANO') || upper.includes('CPUYA') || upper.includes('LAUNCHPAD')) matchKeys.push('AMAPIANO');
  if ((upper.includes('CLOUD') && upper.includes('RAP')) || upper.includes('YUNG LEAN') || upper.includes('AUGXST')) matchKeys.push('CLOUD_RAP');
  if (upper.includes('VAMP') || upper.includes('RAGE') || upper.includes('PLAYBOI CARTI')) matchKeys.push('VAMP_RAGE');
  if (upper.includes('FLAMENCO')) matchKeys.push('FLAMENCO');
  if (upper.includes('G-FUNK') || upper.includes('G FUNK') || upper.includes('SNOOP')) matchKeys.push('G_FUNK');
  if (upper.includes('FUJI') || upper.includes('NIGERIAN')) matchKeys.push('FUJI');

  if (matchKeys.length === 0) {
    // Fallback: return first 2 most common
    return dnaMap['RAP_FR'] + '\n\n' + dnaMap['MELODIC_TRAP'];
  }

  // Deduplicate
  const unique = [...new Set(matchKeys)];
  return unique.map(k => dnaMap[k]).filter(Boolean).join('\n\n');
}
