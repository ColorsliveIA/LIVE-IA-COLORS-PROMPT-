/**
 * Artist-specific instruction profiles for Gemini prompt generation.
 *
 * OPTIMIZATION: Instead of building 25+ conditional strings and injecting them ALL
 * into every prompt (wasting thousands of tokens), we store profiles in a dictionary
 * and inject ONLY the matching one(s). This saves ~80% of prompt tokens per request.
 *
 * POLICY: NO direct artist references â no artist-specific slang, gimmicks,
 * catchphrases, or identifiable ad-libs. Only generic style/production descriptors.
 */

export interface ArtistProfile {
  keywords: string[];  // Match against inspiredBy.toUpperCase()
  instructions: string;
}

export const ARTIST_PROFILES: ArtistProfile[] = [
  {
    keywords: ["ALPHA WANN"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES â STYLE TECHNIQUE FR :
- STYLE : Elite Technical French Rap, Modern Boom Bap, Dark Luxury Minimalism.
- VOCAL : Voix de baryton sÃ¨che, AUCUN AUTOTUNE, articulation hyper-prÃ©cise, dÃ©bit rapide et technique, agression froide et contrÃ´lÃ©e. Pas de chant.
- AD-LIBS : TrÃ¨s discrets et rythmÃ©s, purement gÃ©nÃ©riques (Yeah, Hey, Ouh).
- THÃMES : Excellence technique, rimes multisyllabiques denses, densitÃ© de rimes internes, Paris, indÃ©pendance, luxe sombre.
- PRODUCTION : Piano sombre et minimaliste (Sparse Dark Keys), textures de cloches subtiles, drums lourds et percutants (Heavy Punchy Drums, Tight Snare Crack), ligne de basse minimale. INTERDICTION de sonoritÃ©s jazzy, de samples soulful ou de swing chaleureux.
- NOTE : Le flow doit Ãªtre une dÃ©monstration de technique pure, froid et chirurgical.`
  },
  {
    keywords: ["KALASH"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES â STYLE CARIBÃEN :
- Utilise un mÃ©lange authentique de CRÃOLE MARTINIQUAIS et de FRANÃAIS.
- Le style musical doit Ãªtre un mÃ©lange de DANCEHALL moderne, de TRAP et de sonoritÃ©s CARIBÃENNES.
- IntÃ¨gre des ad-libs gÃ©nÃ©riques atmosphÃ©riques.
- Le texte doit reflÃ©ter l'identitÃ© caribÃ©enne : entre mÃ©lodie planante et rap percutant.`
  },
  {
    keywords: ["TIF"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES â STYLE MAGHREB-MÃLO :
- Utilise un mÃ©lange 50/50 de FRANÃAIS et de DARIJA (Arabe AlgÃ©rien).
- INSTRUMENTATION : IntÃ¨gre impÃ©rativement des sonoritÃ©s de OUD, MANDOLE ou DERBOUKA dans le prompt de style. Utilise des guitares acoustiques mÃ©lancoliques.
- THÃMES : Nostalgie d'Alger (Houma), exil, mÃ©lancolie solaire, les deux rives, la mer, le destin (Mektoub).
- FLOW : MÃ©lodique, chantÃ©/rappÃ© avec une Ã©motion brute, souvent avec un lÃ©ger autotune pour la texture.
- SLANG : 'Sahbi', 'Khoya', 'Dz', 'El Ghorba'.`
  },
  {
    keywords: ["TIAKOLA"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES â STYLE AFRO-MÃLO :
- STYLE : Afro-mÃ©lodique pur (Melo).
- FLOW : Ultra-mÃ©lodique, rapide, avec des variations de tonalitÃ© constantes.
- AD-LIBS : Utilise des ad-libs mÃ©lodiques et rythmÃ©s, gÃ©nÃ©riques.
- THÃMES : RÃ©ussite, loyautÃ©, fÃªte, mÃ©lodie.`
  },
  {
    keywords: ["PNL", "ADEMO", "NOS"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES â STYLE CLOUD RAP :
- STYLE : Cloud Rap atmosphÃ©rique, planant, mÃ©lancolique.
- LANGAGE : Utilise l'argot gÃ©nÃ©rique de la rue (verlan, argot urbain).
- FLOW : Lent, autotunÃ© Ã  l'extrÃªme, spatial.
- THÃMES : Solitude, famille, rÃ©ussite amÃ¨re, contemplation.
- INTERDICTION : Aucun slang identifiable Ã  un artiste spÃ©cifique.`
  },
  {
    keywords: ["ROSALÃA"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES â STYLE FLAMENCO-FUSION :
- STYLE : Flamenco expÃ©rimental, Art-Pop, Reggaeton dÃ©construit.
- LANGAGE : Espagnol avec des expressions andalouses.
- VOCAL : Textures vocales complexes, claquements de mains (Palmas), harmonies flamenco.`
  },
  {
    keywords: ["BILLIE EILISH"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES â STYLE DARK POP :
- STYLE : Dark Pop, Alt-Pop, Minimaliste.
- VOCAL : Chant murmurÃ© (whisper vocals), trÃ¨s proche du micro, voix doublÃ©es et harmonisÃ©es sombrement.
- PRODUCTION : Basses lourdes et distordues, textures organiques et bruits de fond (ASMR-like).`
  },
  {
    keywords: ["AYA NAKAMURA"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES â STYLE AFRO-POP FR :
- STYLE : Afro-Pop, R&B, Dancehall.
- LANGAGE : FranÃ§ais avec argot urbain unique, expressions percutantes.
- FLOW : ChaloupÃ©, hooks ultra-efficaces, voix puissante.`
  },
  {
    keywords: ["ORELSAN"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES â STYLE STORYTELLING FR :
- STYLE : Rap narratif, Storytelling, Pop-Rap.
- THÃMES : Quotidien, cynisme, nostalgie, passage Ã  l'Ã¢ge adulte.
- FLOW : Narratif, parlÃ©-chantÃ©, dÃ©bit technique.`
  },
  {
    keywords: ["BURNA BOY"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES â STYLE AFROBEATS :
- STYLE : Afrobeats, Afro-Fusion.
- LANGAGE : Anglais, Pidgin, Yoruba.
- INSTRUMENTATION : Cuivres (brass) puissants, percussions polyrythmiques.`
  },
  {
    keywords: ["BAD BUNNY"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES â STYLE REGGAETON :
- STYLE : Reggaeton, Latin Trap.
- LANGAGE : Espagnol (accent Portoricain).
- VOCAL : Voix grave, flow dembow syncopÃ©.`
  },
  {
    keywords: ["DAFT PUNK"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES â STYLE FRENCH HOUSE :
- STYLE : French House, Electro-Funk.
- VOCAL : Vocoder, Talkbox, voix robotique.
- INSTRUMENTATION : SynthÃ©tiseurs vintage, boucles de basse funk.`
  },
  {
    keywords: ["TAME IMPALA"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES â STYLE PSYCHEDELIC :
- STYLE : Psychedelic Pop, Indie Rock.
- VOCAL : Falsetto aÃ©rien, rÃ©verbe/delay intense.
- INSTRUMENTATION : SynthÃ©s analogiques, phaser sur la batterie.`
  },
  {
    keywords: ["SOOLKING"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES â STYLE RAÃ-POP :
- STYLE : RaÃ¯-Pop, Algerian Pop.
- LANGAGE : FranÃ§ais, Arabe (Darija).
- INSTRUMENTATION : Violons, guitares acoustiques, percussions orientales.`
  },
  {
    keywords: ["STROMAE"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES â STYLE ART-POP :
- STYLE : Art-Pop, Electro-Chanson.
- LANGAGE : FranÃ§ais (accent Belge).
- THÃMES : MÃ©lancolie dansante, critique sociale.
- VOCAL : ArticulÃ©, thÃ©Ã¢tral, voix expressive.`
  },
  {
    keywords: ["KAARIS"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES â STYLE HARDCORE TRAP :
- STYLE : Hardcore Trap, Sevran.
- FLOW : Agressif, saccadÃ©, ad-libs gutturaux.`
  },
  {
    keywords: ["NATE DOGG"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES â STYLE G-FUNK :
- STYLE : G-Funk, West Coast R&B.
- VOCAL : Voix de baryton veloutÃ©e, hooks mÃ©lodiques ultra-smooth.
- THÃMES : FÃªte, chill, West Coast life.`
  },
  {
    keywords: ["VALD"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES â STYLE EXPÃRIMENTAL :
- STYLE : Rap expÃ©rimental, Ironique.
- FLOW : ImprÃ©visible, rapide, variations de ton.
- THÃMES : Absurde, ironie.`
  },
  {
    keywords: ["HAMZA"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES â STYLE MELODIC TRAP BELGE :
- STYLE : Melodic Trap, R&B-infused Rap, Belgian Trap.
- VOCAL : Autotune mÃ©lodique omniprÃ©sent, voix suave, nonchalante et sensuelle. Flow Ã©lastique.
- AD-LIBS : GÃ©nÃ©riques (Yeah, Ouh, Hey) placÃ©s de maniÃ¨re aÃ©rÃ©e et mÃ©lodique.
- THÃMES : Luxe, sensualitÃ©, vie nocturne, esthÃ©tique US.
- PRODUCTION : SynthÃ©s smooth et luxueux. Basses 808 profondes, rondes. Hi-hats nets et aÃ©rÃ©s. Ambiance nocturne intense.
- NOTE : INTERDICTION d'utiliser des ad-libs identifiables. Capture l'essence par la mÃ©lodie et le flow nonchalant.`
  },
  {
    keywords: ["BOOBA"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES â STYLE HARDCORE RAP FR :
- STYLE : Hardcore Rap, Dark Trap, Drill, Cinematic Rap.
- VOCAL : Voix grave, autoritaire, imposante. Autotune sombre sur les refrains. Flow saccadÃ©, prÃ©cis, punchlines percutantes.
- AD-LIBS : GÃ©nÃ©riques (Grrr, Yeah, Hey, Ouh) placÃ©s de maniÃ¨re agressive.
- THÃMES : RÃ©ussite solitaire, rue, compÃ©tition fÃ©roce, luxe froid, trahison, hÃ©ritage.
- PRODUCTION : Dark, orchestrale, heavy 808s distordues, minimaliste mais massive. Choeurs sombres ou violons dramatiques.
- NOTE : AUCUNE mention directe de surnoms, labels ou catchphrases identifiables.`
  },
  {
    keywords: ["TRAVIS SCOTT"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES â STYLE PSYCHEDELIC TRAP :
- STYLE : Psychedelic Trap, Dark Melodic.
- VOCAL : Autotune Ã©pais, ad-libs gÃ©nÃ©riques (Yeah, Ouh, Hey).
- PRODUCTION : Basses saturÃ©es, synthÃ©s atmosphÃ©riques, beat switches.
- NOTE : INTERDICTION d'utiliser des catchphrases identifiables.`
  },
  {
    keywords: ["DRAKE"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES â STYLE MELODIC RAP :
- STYLE : Melodic Rap, R&B-infused Trap.
- THÃMES : Relations, introspection, succÃ¨s.
- FLOW : Transition fluide rap/chant, hooks mÃ©morables.`
  },
  {
    keywords: ["KENDRICK LAMAR"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES â STYLE CONSCIOUS RAP :
- STYLE : Conscious Rap, Jazz-Rap, West Coast.
- FLOW : Technique complexe, changements de voix, storytelling profond.
- THÃMES : Social, politique, hÃ©ritage, religion.`
  },
  {
    keywords: ["PLAYBOI CARTI"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES â STYLE RAGE/VAMP :
- STYLE : Rage, Vamp, Minimalist Trap.
- VOCAL : Baby voice, ad-libs gÃ©nÃ©riques (What, Yeah).
- PRODUCTION : SynthÃ©s 8-bit, basses distordues.`
  },
  {
    keywords: ["KANYE WEST"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES â STYLE AVANT-GARDE RAP :
- STYLE : Avant-Garde Rap, Gospel-Rap, Art-Pop.
- PRODUCTION : Samples soul, choeurs, orchestration grandiose.
- THÃMES : Ego, religion, mode, famille.`
  },
  {
    keywords: ["LANA DEL REY"],
    instructions: `# INSTRUCTIONS SPÃCIFIQUES â STYLE DREAM POP :
- STYLE : Dream Pop, Sadcore, Cinematic.
- VOCAL : Chant langoureux, murmures, harmonies Ã©thÃ©rÃ©es.
- THÃMES : Nostalgie, glamour tragique, Americana.`
  }
];

/**
 * Lookup matching artist profiles by inspiredBy string.
 * Returns ONLY the matching profiles (typically 0-2), saving ~80% tokens.
 */
export function getArtistSpecificInstructions(inspiredBy: string): string {
  if (!inspiredBy || inspiredBy === 'none') return '';
  const upper = inspiredBy.toUpperCase();
  const matches = ARTIST_PROFILES.filter(p =>
    p.keywords.some(k => upper.includes(k))
  );
  if (matches.length === 0) return '';
  return matches.map(m => m.instructions).join('\n\n');
}

/**
 * Get relevant Writing DNA based on inspiredBy + genre.
 * Returns only the genre-relevant DNA section instead of all 20.
 */
export function getRelevantWritingDNA(inspiredBy: string, genre: string): string {
  const upper = (inspiredBy + ' ' + genre).toUpperCase();

  const dnaMap: Record<string, string> = {
    'RAP_FR': `RAP FR :
- Utilise le Verlan, l'Argot de rue gÃ©nÃ©rique (ex: "charbon", "moula").
- ThÃ¨mes : Rue, mÃ©lancolie, rÃ©ussite, trahison.
- Flow : SaccadÃ© ou planant (Cloud).`,

    'US_UK_RAP': `US/UK RAP :
- Utilise impÃ©rativement l'ANGLAIS.
- Slang US/UK gÃ©nÃ©rique : "no cap", "opps", "sliding", "stacks".
- Flow : Melodic trap, Dark psychedelic, Drill.`,

    'REGGAETON': `REGGAETON / LATIN :
- Utilise l'ESPAGNOL.
- Slang : "perreo", "bellaqueo", "duro", "mami", "la calle".
- Flow : Dembow syncopÃ©, flow sensuel ou agressif.`,

    'AFROBEATS': `AFROBEATS :
- Utilise l'ANGLAIS / PIDGIN / YORUBA.
- Slang : "Gbedu", "Jo", "Vibe", "Rave".
- Flow : MÃ©lodique, percutant, cuivres puissants.`,

    'CARIBBEAN': `CARIBBEAN / DANCEHALL :
- Utilise un mÃ©lange de CRÃOLE et de FRANÃAIS (ou Patois).
- Slang : "Gyal", "Shot", "Wine", "Riddim".
- Flow : Dancehall syncopÃ©, saccadÃ© ou chantÃ© avec autotune lÃ©ger.`,

    'MAGHREB': `MAGHREB / CHAÃBI-TRAP :
- Utilise un mÃ©lange de FRANÃAIS et d'ARABE (DARIJA).
- Slang : "Khoya", "Sahbi", "Dz", "Mektoub".
- Flow : MÃ©lodique, influencÃ© par le RaÃ¯ et le ChaÃ¢bi.`,

    'AFRO_MELO': `AFRO-MELODIC / MELO :
- Utilise le FRANÃAIS avec des influences Lingala ou Wolof.
- ThÃ¨mes : Amour, rÃ©ussite, danse, mÃ©lodie pure.
- Flow : Ultra-mÃ©lodique, harmonies riches, autotune maÃ®trisÃ©.`,

    'STORYTELLING': `STORYTELLING / RELATABLE :
- Utilise le FRANÃAIS standard, direct, imagÃ©.
- ThÃ¨mes : Quotidien, cynisme, nostalgie, critique sociale.
- Flow : Narratif, parlÃ©-chantÃ©, dÃ©bit technique.`,

    'ELECTRO': `FRENCH HOUSE / ELECTRO :
- Utilise l'ANGLAIS (souvent vocodÃ©).
- ThÃ¨mes : Technologie, futurisme, danse.
- Flow : Robotique, rythmÃ©, rÃ©pÃ©titif.`,

    'MELODIC_TRAP': `MELODIC TRAP :
- Autotune mÃ©lodique, voix suave et nonchalante.
- ThÃ¨mes : Luxe, sensualitÃ©, vie nocturne.
- Flow : Ultra-mÃ©lodique, flow nonchalant et fluide.`,

    'HARDCORE': `HARDCORE RAP :
- Voix grave, autoritaire. Autotune sombre sur les refrains.
- ThÃ¨mes : RÃ©ussite, compÃ©tition, luxe froid.
- Flow : SaccadÃ©, prÃ©cis, punchlines percutantes.`
  };

  // Match genre DNA
  const matchKeys: string[] = [];
  if (upper.includes('RAP') && (upper.includes('FR') || upper.includes('PNL') || upper.includes('GAZO') || upper.includes('ALPHA') || upper.includes('NEKFEU') || upper.includes('ORELSAN') || upper.includes('BOOBA') || upper.includes('KAARIS') || upper.includes('VALD'))) matchKeys.push('RAP_FR');
  if (upper.includes('DRAKE') || upper.includes('TRAVIS') || upper.includes('CENTRAL') || upper.includes('KENDRICK') || upper.includes('CARTI') || upper.includes('KANYE') || upper.includes('DRILL') || upper.includes('UK')) matchKeys.push('US_UK_RAP');
  if (upper.includes('REGGAETON') || upper.includes('LATIN') || upper.includes('BAD BUNNY') || upper.includes('BALVIN')) matchKeys.push('REGGAETON');
  if (upper.includes('AFROBEAT') || upper.includes('BURNA') || upper.includes('REMA') || upper.includes('WIZKID')) matchKeys.push('AFROBEATS');
  if (upper.includes('CARIBBEAN') || upper.includes('DANCEHALL') || upper.includes('KALASH')) matchKeys.push('CARIBBEAN');
  if (upper.includes('MAGHREB') || upper.includes('RAÃ') || upper.includes('TIF') || upper.includes('SOOLKING') || upper.includes('ALGÃRI')) matchKeys.push('MAGHREB');
  if (upper.includes('AFRO') && (upper.includes('MELO') || upper.includes('TIAKOLA') || upper.includes('TAYC') || upper.includes('DADJU'))) matchKeys.push('AFRO_MELO');
  if (upper.includes('ORELSAN') || upper.includes('LOMEPAL') || upper.includes('NEKFEU') || upper.includes('STORYTELL')) matchKeys.push('STORYTELLING');
  if (upper.includes('ELECTRO') || upper.includes('HOUSE') || upper.includes('DAFT') || upper.includes('JUSTICE') || upper.includes('STROMAE')) matchKeys.push('ELECTRO');
  if (upper.includes('HAMZA') || upper.includes('MELODIC TRAP') || upper.includes('SAUCE')) matchKeys.push('MELODIC_TRAP');
  if (upper.includes('HARDCORE') || upper.includes('BOOBA') || upper.includes('KAARIS') || upper.includes('KALASH CRIM')) matchKeys.push('HARDCORE');

  if (matchKeys.length === 0) {
    // Fallback: return first 2 most common
    return dnaMap['RAP_FR'] + '\n\n' + dnaMap['MELODIC_TRAP'];
  }

  // Deduplicate
  const unique = [...new Set(matchKeys)];
  return unique.map(k => dnaMap[k]).filter(Boolean).join('\n\n');
}
