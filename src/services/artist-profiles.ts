/**
 * Artist-specific instruction profiles for Gemini prompt generation.
 * v4 — Axe 1 (structure uniform) / Axe 2 (contradictions fixed) / Function audit
 * v4.1 — SDM: deep bass voice enforcement, powerful hooks
 */

export interface ArtistProfile {
  keywords: string[];
  instructions: string;
  isMelodic?: boolean;
}

export const ARTIST_PROFILES: ArtistProfile[] = [
  {
    keywords: ["JUL"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — MELODIC MARSEILLE STREET POP:
- SOUND: Melodic Street Pop, Marseille Urban, Emotional Autotune, Mediterranean Sun-Kissed.
- VOCAL: Omnipresent melodic autotune — it IS the signature. High nasal pitch, always singing. Ultra-melodic fast flow. NEVER dry rap.
- THEMES: Neighborhood loyalty, street love, Marseille pride, sunshine and melancholy, family, everyday life.
- PRODUCTION: Bright or melancholic melodic piano (SIGNATURE), punchy bouncy 808s, fast clean hi-hats, bright digital synths. BPM 120-130.
- LANGUAGE: French with Marseille accent elisions and open vowels.
- RULE: Melodic autotune is NON-NEGOTIABLE. Singing IS the style. FORBIDDEN to produce dry/technical rap.`
  },
  {
    keywords: ["NINHO"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — MELODIC TRAP FR:
- SOUND: Melodic Trap, Dark Emotional Rap, Street Melancholy.
- VOCAL: Controlled melodic autotune, smooth rap/singing alternation. Both technical rapping AND melodic emotional choruses.
- THEMES: Rise from the streets, melancholy of success, loneliness at the top, family, neighborhood (91), betrayal, money as escape.
- PRODUCTION: Deep round 808s, dark emotional piano melodies, melancholic acoustic guitars, complex hi-hats, atmospheric pads. BPM 130-145.
- LANGUAGE: French urban slang, verlan, street language with emotional depth.
- RULE: The DUALITY of technical rap vs melodic singing is the signature. Both must coexist.`
  },
  {
    keywords: ["DAMSO"],
    isMelodic: false,
    instructions: `# ARTIST PROFILE — DARK FRENCH TRAP / BRUSSELS NOIR (RAPPER NOT SINGER):
- SOUND: Dark French Trap-Drill crossover, Belgian Underground Noir. NEVER R&B, afro-pop, congolese pop.
- VOCAL MODE 1 — DRILL (142 BPM): Masculine raspy vocals, staccato rap flow, phrase-end doubling, echo delays. Pure rap, NO melodic singing.
- VOCAL MODE 2 — NOCTURNAL (130 BPM): Cold heavy metallic autotune — NOT warm R&B. Laid-back nonchalant rap-crooner. Still a RAPPER, not a singer.
- THEMES: Existential introspection, toxic relationships, sexual rawness as dark philosophy, Belgian noir identity.
- PRODUCTION MODE 1: Moody minor piano loops, haunting textures, sliding distorted 808, crisp metallic triplet hi-hats. 142 BPM.
- PRODUCTION MODE 2: Nocturnal pads, filtered Rhodes, heavy sliding 808, lush reverb/delay. 130 BPM, G minor.
- LANGUAGE: Sophisticated French, Belgian slang, rich vocabulary, permanent double meaning.
- RULE: COLD METALLIC AUTOTUNE only. FORBIDDEN: warm R&B autotune, afro-pop, singing.`
  },
  {
    keywords: ["GAZO"],
    instructions: `# ARTIST PROFILE — FRENCH DRILL:
- SOUND: French Drill, Dark Trap, Aggressive Street Rap.
- VOCAL: Deep aggressive voice, sliding syncopated drill flow, slight dark autotune on some passages. Fast percussive delivery.
- THEMES: Street, violence, competition, dirty money, survival, intimidation. Raw language.
- PRODUCTION: Sliding 808s, frantic triplet hi-hats, dark menacing piano/synth, metallic percussion. BPM 140-145.
- LANGUAGE: French hardcore street slang, verlan. Assumed vulgarity.
- RULE: The sound MUST be threatening and dark. No melodic singing hooks, no joyful melody, no pop.`
  },
  {
    keywords: ["FREEZE CORLEONE", "FREEZE"],
    instructions: `# ARTIST PROFILE — DARK LYRICAL OCCULT:
- SOUND: Dark Boom Bap, French Horrorcore, Lyrical Dark Trap.
- VOCAL: Monotone deep voice, technical dense flow, NO autotune, fast delivery with complex placements. Cold detached tone.
- THEMES: Conspiracy, occult, lyrical supremacy, intellectual provocation, coded language, hermetic references.
- PRODUCTION: Dark samples (jazz/soul/classical detoured), heavy boom bap drums, deep bass, cinematic bleak atmosphere.
- LANGUAGE: Dense French, multi-layered references (geopolitics, esoterism, anime, history).
- RULE: Flow must be SURGICAL and COLD. No apparent emotion, pure technique.`
  },
  {
    keywords: ["NEKFEU"],
    instructions: `# ARTIST PROFILE — LYRICAL POP-RAP:
- SOUND: Lyrical Rap, Pop-Rap, Poetic Modern Boom Bap.
- VOCAL: Clear articulate voice, NO autotune, technical flow with accelerations, capable of singing on choruses.
- THEMES: Travel, love, introspection, literature, soft melancholy, Paris, creativity, light existentialism.
- PRODUCTION: Bright melodies (acoustic guitars, piano, warm jazz/soul samples), organic drums, warm round bass.
- LANGUAGE: French with light slang, poetic metaphors, literary references.
- RULE: WRITING is the absolute priority. Multisyllabic rhymes, poetic imagery, storytelling.`
  },
  {
    keywords: ["LAYLOW"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — DIGITAL EMOTION:
- SOUND: Digital Trap, Experimental R&B-Rap, Futuristic Melodic.
- VOCAL: Artistic experimental autotune, voice modulated between rap and singing, creative vocal effects. Elastic unpredictable flow.
- THEMES: Technology and emotions, digital loneliness, dystopian love, futurism, modern anxiety, digital identity.
- PRODUCTION: Futuristic atmospheric synths, deep 808s, experimental electronic textures, manipulated samples, subtle glitches. BPM 100-120.
- LANGUAGE: Modern French, tech/digital vocabulary, futuristic metaphors.
- RULE: The CONCEPTUAL and CINEMATIC aspect is essential. Never acoustic, never conventional.`
  },
  {
    keywords: ["SDM"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — DARK AFRO-TRAP PARIS BANLIEUE:
- SOUND: Dark Afro-Trap, Paris Banlieue Street Rap, Cold Melodic Drill. NOT Brussels-style. ZERO afro festif influence.
- VOCAL: DEEP BASS masculine voice — NEVER high-pitched, NEVER falsetto, NEVER tenor. Heavy dark metallic autotune on hooks (low-register, cold, powerful). Staccato rap on verses. STRONG impactful choruses — not restrained.
- THEMES: Paris banlieue nocturnal life, street ambition, dark melancholy, loyalty, authentic struggle, Ile-de-France urban identity.
- PRODUCTION: Heavy sliding 808 sub-bass, moody minor piano, dark pads, crisp drill hi-hats, MINIMAL arrangement. BPM 125-140.
- LANGUAGE: French urban street vocabulary, Paris banlieue references.
- RULE: DEEP BASS VOICE is non-negotiable. NEVER high-pitched vocals. Hooks must be POWERFUL and IMPACTFUL. Cold dark minimalism.`
  },
  {
    keywords: ["NISKA"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — AFRO-TRAP FESTIF:
- SOUND: Afro-Trap, Dancehall-Rap, Festive Street Energy.
- VOCAL: Recognizable voice, light autotune, bouncy dancing flow, rap/singing alternation. Festive contagious energy.
- THEMES: Party, dance, quartier pride, positive street energy, Congolese cultural influence.
- PRODUCTION: Afro percussion (synthetic congas, djembe), bouncy 808s, festive melodies, dancehall influences. BPM 100-115.
- LANGUAGE: French with Congolese slang references, festive vocabulary.
- RULE: ENERGY is everything. Fun, contagious, celebratory.`
  },
  {
    keywords: ["CENTRAL CEE"],
    instructions: `# ARTIST PROFILE — UK MELODIC DRILL:
- SOUND: UK Rap, Melodic Drill, London Street.
- VOCAL: Clear voice, UK drill flow (sliding, syncopated), light melodic autotune on hooks. Marked London accent. Cool, not aggressive.
- THEMES: London hustling, flexing, relationships, success, UK street life, mandem culture.
- PRODUCTION: Sliding 808s, triplet hi-hats, melancholic piano/guitar, UK drill atmosphere. BPM 140-145.
- LANGUAGE: English UK, London slang (mandem, ting, innit, moving mad), MLE accent.
- RULE: UK Drill is melodic and cool — distinct from FR Drill aggression. Never overly dark or violent.`
  },
  {
    keywords: ["ALPHA WANN"],
    instructions: `# ARTIST PROFILE — ELITE TECHNICAL FRENCH RAP:
- SOUND: Elite Technical French Rap, Modern Boom Bap, Dark Luxury Minimalism.
- VOCAL: Dry baritone voice, NO AUTOTUNE, hyper-precise articulation, fast technical delivery, cold controlled aggression. No singing.
- THEMES: Technical supremacy, Parisian independence, dark luxury craftsmanship, elite rap as intellectual art, cold ambition, lyrical sovereignty.
- PRODUCTION: Dark minimalist piano, subtle bell textures, heavy percussive drums, minimal bass line. FORBIDDEN: jazzy sounds, soulful samples, warm swing.
- LANGUAGE: Dense French, complex vocabulary, multisyllabic internal rhymes.
- RULE: Flow is a demonstration of pure technique, cold and surgical. Never melodic, never warm.`
  },
  {
    keywords: ["KALASH"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — CARIBBEAN TRAP:
- SOUND: Modern Dancehall, Caribbean Trap, Ragga-Rap.
- VOCAL: Mix of melodic singing/rap, light autotune, marked Antillean accent. Bouncy dancing flow.
- THEMES: Caribbean identity, island pride, party, tropical melancholy, exile, Creole cultural duality.
- PRODUCTION: Dancehall riddims, tropical percussion, bouncy 808s, atmospheric synths, tropical melodies. BPM 90-110.
- LANGUAGE: Mix of MARTINICAN CREOLE and FRENCH. Caribbean expressions and inflections.
- RULE: CARIBBEAN BOUNCE is non-negotiable. Flow must ride the riddim, never a straight 4/4 trap beat.`
  },
  {
    keywords: ["TIF"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — MAGHREB MELODIC:
- SOUND: Rai-Trap, Algerian Urban Melodic, Mediterranean Melancholy.
- VOCAL: Melodic with rai influences, controlled autotune, emotional voice, singing/rap alternation.
- THEMES: Algiers nostalgia (Houma), exile, sun-drenched melancholy, destiny (Mektoub), love and longing.
- PRODUCTION: Oud, mandole, derbouka. Melancholic acoustic guitars, deep 808s, oriental melodies. BPM 90-110.
- LANGUAGE: 50/50 FRENCH and DARIJA (Algerian Arabic). Slang: Sahbi, Khoya, Dz.
- RULE: MELODIC AUTOTUNE over Mediterranean textures. Never dry rap. French-Darija blend is mandatory.`
  },
  {
    keywords: ["TIAKOLA"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — AFRO MELODIC:
- SOUND: Pure Afro-Melodic, Melo, Afro-Pop Urbaine.
- VOCAL: Ultra-melodic, PERMANENT MELODIC AUTOTUNE, high bright voice, constant tonality variations, rich harmonies.
- THEMES: Success, love, loyalty, party, dance, quartier pride, Lingala cultural influence.
- PRODUCTION: Afro percussion (congas, shakers, synthetic djembe), melodic guitars, warm bouncy 808s, bright synths. BPM 100-120.
- LANGUAGE: French urban with subtle Lingala/Congolese expressions.
- RULE: MELODY is EVERYTHING. Every syllable is sung.`
  },
  {
    keywords: ["PNL", "ADEMO", "NOS"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — CLOUD RAP:
- SOUND: Atmospheric Cloud Rap, Melodic Trap, Emotional Autotune.
- VOCAL: OMNIPRESENT artistic autotune, floating voice, slow spatial flow. Doubled layered voices for ethereal effect.
- THEMES: Solitude, family, bitter success, urban contemplation, nostalgia, deep melancholy, cite as universe.
- PRODUCTION: Atmospheric floating synths, deep slow 808s, ethereal piano/pads, massive reverb, minimalist but immersive. BPM 70-90.
- LANGUAGE: French, introspective register, simple vocabulary carrying heavy emotional weight.
- RULE: FLOATING MELANCHOLY is non-negotiable. FORBIDDEN fast or aggressive flow.`
  },
  {
    keywords: ["ROSALIA"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — FLAMENCO FUSION:
- SOUND: Experimental Flamenco, Art-Pop, Deconstructed Reggaeton.
- VOCAL: Powerful expressive voice, flamenco melismas, complex vocal textures, palmas hand claps.
- THEMES: Femininity and power, Andalusian roots vs modernity, passion and duende, love as struggle, sensuality, Spanish identity.
- PRODUCTION: Palmas, flamenco guitar, trap 808s, modern synths, organic/electronic blend. BPM 90-120.
- LANGUAGE: Spanish with Andalusian expressions, visceral vocabulary, Catalan inflections.
- RULE: FLAMENCO MELISMA is non-negotiable. Every song must feel rooted in Andalusian tradition. FORBIDDEN: generic pop formula, standard trap, conventional chorus.`
  },
  {
    keywords: ["BILLIE EILISH"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — DARK POP ASMR:
- SOUND: Dark Minimalist Pop, ASMR-Pop, Alt-Pop. Intimacy as a weapon.
- VOCAL: Whispered close-mic singing, dark doubled harmonies. Whisper to raw power contrast. Breathy, never belted.
- THEMES: Anxiety, nightmares, silent power, vulnerability, soft rebellion, youth angst, toxic relationships.
- PRODUCTION: Heavy distorted sub-bass, organic ASMR textures, percussive minimalism, silence as structural element. BPM 60-120.
- LANGUAGE: English — confessional, gen-Z intimate register, visceral imagery.
- RULE: CONTRAST (silence vs power, whisper vs scream) is the non-negotiable signature. Never constant loudness.`
  },
  {
    keywords: ["AYA NAKAMURA"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — FRENCH AFRO-POP:
- SOUND: Afro-Pop Urbaine, Urban Pop-R&B, Dancehall-Pop. French feminine pop with West African groove.
- VOCAL: Powerful recognizable female voice, light autotune, swaying chaloupe dancing flow, ultra-effective hooks.
- THEMES: Female independence, love/heartbreak, dance, self-confidence, nightlife, heartbreak with attitude.
- PRODUCTION: Light afro percussion, melodic pop guitars, warm bouncy 808s, bright pop production. BPM 95-115.
- LANGUAGE: French with unique urban slang and invented vocabulary. Signature neologisms.
- RULE: HOOKS are the absolute priority. Every chorus must be immediately memorizable and danceable.`
  },
  {
    keywords: ["ORELSAN"],
    instructions: `# ARTIST PROFILE — STORYTELLING FR:
- SOUND: Narrative Rap, Storytelling, Intelligent Pop-Rap.
- VOCAL: Natural articulate voice, NO autotune, narrative spoken/sung flow.
- THEMES: Everyday life, tender cynicism, nostalgia, modern life absurdity, dark humor, social observation, French millennial identity.
- PRODUCTION: Varied (boom bap, electro, pop), creative samples, cinematic arrangements. BPM 85-110.
- LANGUAGE: French literary register mixed with modern slang. Dry wit and irony.
- RULE: STORYTELLING is the signature. Each track tells a complete story with a narrative arc.`
  },
  {
    keywords: ["BURNA BOY"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — AFROBEATS:
- SOUND: Afrobeats, Afro-Fusion, Afro-Pop, Global African Sound.
- VOCAL: Powerful warm male voice, dominant melodic singing, extended range, Nigerian Pidgin cadence.
- THEMES: African pride, party, love, resilience, Nigeria, pan-Africanism, freedom, continental identity.
- PRODUCTION: Powerful brass section, polyrhythmic percussion (talking drums, congas, shakers), afrobeat guitars. BPM 100-115.
- LANGUAGE: English, Nigerian Pidgin, Yoruba.
- RULE: AFROBEATS GROOVE is sacred. Production must have African percussion DNA. Never pure trap, never drill.`
  },
  {
    keywords: ["BAD BUNNY"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — REGGAETON:
- SOUND: Reggaeton, Latin Trap, Perreo, Latin Urban. Puerto Rico street energy.
- VOCAL: Distinctive nasal male voice, syncopated dembow flow, rap/singing alternation, stylized autotune.
- THEMES: Puerto Rican pride, Latin street culture, sensuality, party, love, gender-fluid expression.
- PRODUCTION: Dembow riddim (syncopated kick), heavy 808s, Latin synths, reggaeton percussion. BPM 85-100.
- LANGUAGE: Puerto Rican Spanish, Latin slang.
- RULE: DEMBOW RIDDIM is non-negotiable. Never drift from Latin rhythmic foundation.`
  },
  {
    keywords: ["DAFT PUNK"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — FRENCH HOUSE:
- SOUND: French House, Electro-Funk, French Touch, Retro-Futurism.
- VOCAL: Vocoder, Talkbox, robotic voice. Very few lyrics — the voice is an instrument, not a storytelling vehicle.
- THEMES: Robotic mythology, retro-futurism, dance as liberation, French Touch culture, human-machine fusion, dancefloor as utopia.
- PRODUCTION: Vintage synthesizers (Moog, Juno), funk bass loops, side-chain pumping, filtered funk/disco samples. BPM 115-128.
- LANGUAGE: English processed through vocoder — human language robotized.
- RULE: The ROBOTIC VOICE is the signature. Everything goes through the vocoder/talkbox. No natural human singing.`
  },
  {
    keywords: ["SOOLKING"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — RAI-POP:
- SOUND: Rai-Pop, Modern Algerian Pop, Mediterranean Urban.
- VOCAL: Melodic singing with rai influences, light autotune, emotional luminous voice.
- THEMES: Algeria and nostalgia, love and heartbreak, Mediterranean festivity, dual cultural identity, exile and return, freedom.
- PRODUCTION: Oriental violins, acoustic guitars, oriental percussion (derbouka), modern pop melodies. BPM 95-115.
- LANGUAGE: French and Darija, festive emotional language. Never cold or aggressive register.
- RULE: MEDITERRANEAN WARMTH is the signature. Never cold, never dark, never aggressive. Festive and emotional simultaneously.`
  },
  {
    keywords: ["CHEB MAMI", "MAMI"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — RAI ORCHESTRAL CROSSOVER:
- SOUND: Orchestral Rai, Mediterranean Crossover, World Fusion Rai.
- VOCAL: High tenor with Arabic melismas, three-octave range, vocal purity without autotune. MALE voice, powerful and emotional.
- THEMES: Romantic love, Algerian nostalgia, exile and return, Mediterranean passion, traditional rai heritage.
- PRODUCTION: Rai darbuka percussion, oriental violins, melodic accordion, wah electric guitar. BPM 90-115.
- LANGUAGE: FRENCH and ARABIC (darija) MIXED — NON-NEGOTIABLE. ~50/50.
- RULE: FRENCH-ARABIC MIX is the SIGNATURE. Pure French or pure Arabic = wrong. Always bilingual.`
  },
  {
    keywords: ["DJALIL PALERMO", "PALERMO"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — URBAN RAI / TRAP-RAI:
- SOUND: Modern Urban Rai, Trap-Rai Hybrid, Street Rai Youth.
- VOCAL: MALE young confident tenor, hybrid rap-sung delivery. NEVER female voice.
- THEMES: Street confidence, Algerian pride, urban love, youth energy, nightlife, dual cultural identity.
- PRODUCTION: Heavy 808 bass, fast trap hi-hats, rhythmic trap guitar, minimal synth strings. BPM 90-110.
- LANGUAGE: FRENCH and ARABIC (darija) MIXED. ~40% French / 60% darija.
- RULE: This is a MALE artist with a young man's voice. NEVER female vocal.`
  },
  {
    keywords: ["KAARIS"],
    instructions: `# ARTIST PROFILE — HARDCORE TRAP FR:
- SOUND: Hardcore French Trap, Aggressive Street Rap, Sevran 93. NOT metal, NOT rock — pure TRAP RAP.
- VOCAL: Very deep imposing baritone, aggressive choppy flow, NO melodic autotune, percussive hacked delivery.
- THEMES: Sevran street warfare, territorial dominance, intimidation, dirty money, survival, raw power.
- PRODUCTION: Heavy 808 sub bass, trap snares, fast triplet hi-hats, dark minor piano, minimal dark synth pads. BPM 135-145.
- LANGUAGE: Hardcore French street slang, raw aggression in vocabulary.
- RULE: Aggression comes from the VOICE and FLOW, not from rock instruments. No guitar, no metal.`
  },
  {
    keywords: ["NATE DOGG"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — G-FUNK:
- SOUND: G-Funk, West Coast R&B, Gangsta Soul. Smooth and street simultaneously.
- VOCAL: Velvety baritone male voice, ultra-smooth melodic R&B hooks, rich harmonies. Iconic memorable phrasing.
- THEMES: West Coast party, chill cruising, laid-back love, G-Funk lifestyle, smooth street success.
- PRODUCTION: G-Funk synths (Moog/Minimoog), deep funk bass, talk box, groovy slow drums. BPM 88-100.
- LANGUAGE: English, West Coast slang, smooth conversational delivery.
- RULE: SMOOTH MELODIC HOOKS are the signature. Never dry rap, never aggressive flow, never fast uptempo.`
  },
  {
    keywords: ["MOBB DEEP", "MOBB", "PRODIGY", "HAVOC"],
    instructions: `# ARTIST PROFILE — QUEENSBRIDGE HARDCORE BOOM BAP:
- SOUND: Hardcore East Coast Boom Bap, Queensbridge Dark Hip-Hop, Grimy Minimalist Street Rap.
- VOCAL: Cold monotone menacing delivery. NO autotune. NO singing. Tight compact bars.
- THEMES: Queensbridge project survival, street paranoia, loyalty/betrayal, nihilistic realism, NYC hardcore.
- PRODUCTION: Minimalist dark piano loops, hard boom bap drums, eerie string samples, vinyl texture. SPACE in the beat. BPM 90-96.
- LANGUAGE: English, Queens NY street vocabulary.
- RULE: MINIMALIST MENACING DARKNESS. Hook = chant or DJ scratch, NEVER sung chorus.`
  },
  {
    keywords: ["JEDI MIND TRICKS", "JEDI MIND", "JMT", "VINNIE PAZ"],
    instructions: `# ARTIST PROFILE — UNDERGROUND ORCHESTRAL HARDCORE:
- SOUND: Underground Hardcore Hip-Hop, Dark Orchestral Boom Bap, Cinematic Militant Rap.
- VOCAL: Deep gravelly aggressive baritone, staccato militant delivery. Raw power. NO autotune. NO singing.
- THEMES: Militant spirituality, conspiracy, violent street metaphors, anti-establishment, boxing/combat imagery, Italian-American Philly identity.
- PRODUCTION: Cinematic orchestral samples (cellos, violins), dark choir vocals, hard boom bap drums. BPM 85-95.
- LANGUAGE: English, dense vocabulary, militant and spiritual register.
- RULE: ORCHESTRAL CINEMATIC DARKNESS. Production = classical music meets street violence. Hook = orchestral break, NEVER pop melody.`
  },
  {
    keywords: ["JORJA SMITH", "JORJA"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — UK NEO-SOUL R&B:
- SOUND: UK Neo-Soul R&B, Warm British Soul, Jazzy Vocal R&B.
- VOCAL: FEMALE warm alto, British soul inflection, natural vibrato. Jazz phrasing. NO heavy autotune.
- THEMES: Emotional honesty, modern love/heartbreak, London life, vulnerability as power, feminine strength.
- PRODUCTION: Live bass guitar, warm Rhodes piano, soft jazz drums, subtle string pads, acoustic guitar. BPM 85-105.
- LANGUAGE: English with British inflection. Intimate confessional register.
- RULE: ORGANIC WARMTH and VOCAL INTIMACY are non-negotiable. Production serves the voice, never overwhelms it.`
  },
  {
    keywords: ["THE WEEKND", "WEEKND"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — DARK SYNTH-POP R&B:
- SOUND: Dark Synth-Pop R&B, Nocturnal 80s Retro-Futurism.
- VOCAL: Breathy dark falsetto with layered harmonies. Michael Jackson-influenced runs.
- THEMES: Nocturnal hedonism, dark romance, Toronto after-hours, 80s cinematic nostalgia, loneliness in excess, drugs and excess.
- PRODUCTION: Pulsing analog synths (80s Juno/Jupiter aesthetic), deep sub bass, crisp drum machine, lush string pads. BPM 100-120.
- LANGUAGE: English, dark seductive register, cinematic imagery.
- RULE: 80s RETRO-FUTURISM and NOCTURNAL DARKNESS are non-negotiable. Never daytime pop, never acoustic.`
  },
  {
    keywords: ["JUICE WRLD", "JUICE"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — EMO TRAP:
- SOUND: Emo Melodic Rap, Freestyle Emotional Stream, Guitar-Driven Sad Trap.
- VOCAL: Emotional autotune tenor, raw freestyle quality, vulnerable crying delivery.
- THEMES: Heartbreak, emotional vulnerability, love obsession, youth anxiety, substance abuse as metaphor.
- PRODUCTION: Electric guitar melodies, deep 808 bass, trap hi-hat rolls, soft piano layers. BPM 140-160.
- LANGUAGE: English, confessional register, stream-of-consciousness emotional outpouring.
- RULE: EMOTIONAL VULNERABILITY is the signature. Freestyle energy, melodic flow, never overly structured or polished.`
  },
  {
    keywords: ["TEMS"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — ALT-AFRO SOUL:
- SOUND: Alt-Afro Soul, Ethereal R&B, Modern African Soul.
- VOCAL: FEMALE ethereal alto-soprano, haunting. Intimate whisper to powerful emotional peak. NEVER rap.
- THEMES: Complex love, feminine independence, spirituality, introspection, quiet strength, African feminine identity.
- PRODUCTION: Soft afro percussion, warm bass, ethereal synth pads, fingerpicked acoustic guitar, layered harmonies. BPM 95-110.
- LANGUAGE: English with Nigerian inflection. Soul register, emotional sincerity.
- RULE: NEVER rap — everything is sung ethereally. FEMALE voice mandatory. Production serves the voice, never overwhelms it.`
  },
  {
    keywords: ["ASAKE"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — AMAPIANO-FUJI:
- SOUND: Amapiano-Fuji Fusion, Street Lagos, Percussive Afrobeats.
- VOCAL: MALE energetic tenor, street chant/communal delivery. Percussive vocal attacks. Fuji ornamentation.
- THEMES: Street party, Yoruba pride, Lagos nightlife, success, communal energy, Nigerian identity.
- PRODUCTION: Deep amapiano bass, heavy log drums, Yoruba talking drum, polyrhythmic fuji percussion. BPM 108-118.
- LANGUAGE: English and Yoruba mixed. Street Lagos energy.
- RULE: COMMUNAL PERCUSSIVE ENERGY is non-negotiable. Never slow, never melancholic solo introspection.`
  },
  {
    keywords: ["JOE DWET FILE", "DWET FILE"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — MODERN ZOUK:
- SOUND: Modern Zouk, Caribbean R&B, Romantic Island Pop.
- VOCAL: MALE warm tenor, soft romantic intimate delivery with Creole accent. Natural vibrato. Never aggressive.
- THEMES: Romantic love, Caribbean nostalgia, gentle island living, Caribbean nights, tender emotions.
- PRODUCTION: Warm zouk bass, drum machine zouk groove, steel pan textures, island acoustic guitar, lush synth pads. BPM 90-105.
- LANGUAGE: FRENCH and ANTILLEAN CREOLE mixed. Romantic vocabulary.
- RULE: ROMANTIC ISLAND WARMTH is the signature. Never aggressive, never trap darkness, never dry delivery.`
  },
  {
    keywords: ["VALD"],
    instructions: `# ARTIST PROFILE — EXPERIMENTAL ABSURDIST:
- SOUND: Experimental Rap, Ironic Dark Trap, Controlled Absurdism.
- VOCAL: Unpredictable fast flow, constant tone shifts (deep/high, serious/comic/whisper/aggressive), NO autotune. Voice as the instrument of chaos.
- THEMES: Dark irony, social satire, absurdist wordplay, provocation with intelligence, geek/pop culture references.
- PRODUCTION: Hard trap drums, dark synths, occasional beat switches, unexpected samples.
- LANGUAGE: French — multi-layered, ironic, references pop culture/anime/geopolitics simultaneously.
- RULE: UNPREDICTABILITY is the signature. Each section can radically change tone. If it feels predictable, it is wrong.`
  },
  {
    keywords: ["HAMZA"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — MELODIC TRAP BELGE:
- SOUND: Melodic Trap, Belgian Trap, Sauce Music, Nocturnal Luxury R&B-Rap.
- VOCAL: Omnipresent melodic autotune, suave nonchalant sensual voice. Elastic fluid flow. Melodic singing IS the style.
- THEMES: Luxury, sensuality, nightlife, Belgian cool, women, nocturnal hedonism.
- PRODUCTION: Smooth luxury synths, deep round 808 bass, clean airy hi-hats, nocturnal atmosphere. BPM 130-145.
- LANGUAGE: French, nonchalant register, luxury vocabulary, street sensuality.
- RULE: FORBIDDEN dry or technical flow. Everything must be MELODIC, SMOOTH and NONCHALANT.`
  },
  {
    keywords: ["BOOBA"],
    instructions: `# ARTIST PROFILE — HARDCORE CINEMATIC RAP FR:
- SOUND: Hardcore Rap, Dark Trap, Cinematic Rap, Orchestral Street.
- VOCAL: Deep authoritative imposing voice. Dark autotune on choruses only. Choppy precise flow, percussive punchlines.
- THEMES: Solitary dominance, competition, cold luxury, betrayal, heritage, street credibility elevated to cinematic art, power without warmth.
- PRODUCTION: Dark orchestral (dark choirs, dramatic strings, massive brass), heavy distorted 808s, cinematic scope. BPM 125-140.
- LANGUAGE: French, authoritative register, punchline-driven vocabulary.
- RULE: POWER and DOMINATION are non-negotiable. Never bright, never warm, never melodic singing.`
  },
  {
    keywords: ["TRAVIS SCOTT"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — PSYCHEDELIC TRAP:
- SOUND: Psychedelic Dark Trap, Ambient Atmospheric Rap, Cosmic Autotune. Production is the main character.
- VOCAL: Thick artistic autotune, modulated spatial voice, melodic ad-libs throughout. Voice floats as one layer in a saturated soundscape.
- THEMES: Cosmic nightlife, festival chaos, controlled psychedelia, space as metaphor, collective energy.
- PRODUCTION: Saturated deep bass, atmospheric floating synths, frequent beat switches, phaser/flanger effects, massive reverb. BPM 130-150.
- LANGUAGE: English — short visceral phrases, ad-lib chains dominate over structured verses.
- RULE: ATMOSPHERE and BEAT SWITCHES are non-negotiable. Static = wrong. Every section must evolve sonically.`
  },
  {
    keywords: ["DRAKE"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — MELODIC RAP:
- SOUND: Melodic Rap, R&B-Trap, Emotional Pop-Rap, Nocturnal Luxury.
- VOCAL: Smooth rap/singing transition, light controlled autotune, ultra-memorable hooks.
- THEMES: Complex relationships, masculine vulnerability, success and loneliness, nocturnal Toronto, triumph and solitude.
- PRODUCTION: Deep warm 808s, R&B melodies (piano, guitar, pads), clean trap drums. BPM 85-145.
- LANGUAGE: English, conversational yet emotionally charged register.
- RULE: Ultra-memorable hooks are mandatory. Every track must have at least one singalong moment. FORBIDDEN: dry technical rap without melodic element.`
  },
  {
    keywords: ["KENDRICK LAMAR"],
    instructions: `# ARTIST PROFILE — CONSCIOUS LYRICAL RAP:
- SOUND: Conscious Rap, Jazz-Rap, West Coast Lyrical, Experimental Hip-Hop.
- VOCAL: Ultra-complex technical flow, character voice changes, deep storytelling. NO autotune.
- THEMES: Social justice, racial politics, African-American heritage, religion, redemption, Compton identity, systemic critique.
- PRODUCTION: Jazz samples (contrabass, sax, jazz piano), varied drums, live elements, orchestral arrangements. BPM 80-120.
- LANGUAGE: English, dense storytelling, deep metaphors, character voices.
- RULE: NARRATIVE DEPTH and VOCAL TECHNIQUE are non-negotiable. Never simple hooks, never conventional structure.`
  },
  {
    keywords: ["PLAYBOI CARTI"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — RAGE/VAMP:
- SOUND: Rage Trap, Vamp Aesthetic, Minimalist Punk Rap. Voice is texture, not message.
- VOCAL: High-pitched extreme autotune, short repetitive ad-libs (2-4 words max), voice as rhythmic percussion. Textural minimalism.
- THEMES: Vamp aesthetic, punk energy, mosh pit chaos, dark fashion, minimalism as maximalism.
- PRODUCTION: Extremely saturated 808s, distorted synth stabs, aggressive minimal drums, dark repetitive melodies. BPM 150-175.
- LANGUAGE: English — minimal, textural, repetitive. Each word = a rhythmic event.
- RULE: TEXTURAL MINIMALISM. Voice = rhythm instrument, not lyrical vehicle. Every word is a percussion hit.`
  },
  {
    keywords: ["KANYE WEST"],
    instructions: `# ARTIST PROFILE — GOSPEL MAXIMALIST:
- SOUND: Gospel-Rap, Avant-Garde Hip-Hop, Maximalist Art-Pop. Everything pushed to its extreme.
- VOCAL: Expressive varied voice — rap/singing/gospel chanting alternation. No fixed mode. Voice serves the emotion.
- THEMES: Artistic grandeur, spiritual crisis and redemption, ego and vulnerability, faith, fashion, maximalism as philosophy.
- PRODUCTION: Chopped soul vocal samples, massive gospel choirs, grand piano, orchestral strings, industrial drums, distorted bass. BPM 90-130.
- LANGUAGE: English — confessional, grandiose, references to God/faith and luxury simultaneously.
- RULE: MAXIMALIST AMBITION is the signature. Subtle = wrong. Every section must feel like a statement. SOUL SAMPLES + GOSPEL CHOIRS are sacred.`
  },
  {
    keywords: ["LANA DEL REY"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — CINEMATIC DREAM POP:
- SOUND: Dream Pop, Sadcore Americana, Cinematic Languid Beauty.
- VOCAL: Languid trailing female singing, murmurs, ethereal harmonies, low velvety voice. Slow melancholic phrasing.
- THEMES: Hollywood nostalgia, tragic glamour, Americana, toxic love, eternal summer, faded beauty.
- PRODUCTION: Massive reverb, surf guitars, cinematic strings, slow heavy drums, reimagined 60s atmosphere. BPM 70-100.
- LANGUAGE: English — poetic, vintage Americana register, literary and cinematic references.
- RULE: LANGUOR and LUMINOUS MELANCHOLY are the signature. Never uptempo, never aggressive.`
  },
  {
    keywords: ["SNOH AALEGRA", "SNOH"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — CINEMATIC SOUL R&B:
- SOUND: Cinematic Soul R&B, Jazz-Inflected Vocals, Lush Orchestral R&B.
- VOCAL: Breathy smoky female alto with golden jazz timbre. Tenderness to powerful delivery.
- THEMES: Yearning love, emotional complexity, feminine strength, cinematic loneliness, intimacy and vulnerability.
- PRODUCTION: Lush orchestral strings, warm bass guitar, jazz piano chords, soft brush drums. BPM 75-95.
- LANGUAGE: English, intimate soul register, cinematic imagery.
- RULE: CINEMATIC WARMTH is non-negotiable. Production must frame the voice like a film score — never overwhelm it.`
  },
  {
    keywords: ["POST MALONE", "POST"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — GENRE-BENDING MELODIC:
- SOUND: Genre-Bending Melodic Rap, Emotional Crooning, Acoustic-Trap Hybrid.
- VOCAL: Raspy warm male tenor, melodic autotune crooning. Emotional vulnerability, accessible delivery.
- THEMES: Heartbreak, loneliness, fame and emptiness, friendship, nostalgic warmth.
- PRODUCTION: Acoustic guitar foundation, 808 bass, trap drums, atmospheric pads. BPM 80-110.
- LANGUAGE: English, warm accessible register, emotional sincerity.
- RULE: WARM ACCESSIBILITY is the goal. Emotional and melodic, never aggressive, always singable.`
  },
  {
    keywords: ["BILAL SGHIR", "CHEB BILAL SGHIR"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — MODERN SENTIMENTAL RAI:
- SOUND: Modern Sentimental Rai, Lovesick Melancholic Groove.
- VOCAL: Raspy emotional rai tenor with breathy phrasing, sentimental vocal cracks.
- THEMES: Romantic heartbreak, lovesickness, late-night longing, sentimental pain, Mediterranean romance.
- PRODUCTION: Melancholic accordion, electric guitar, darbuka groove, bouzouki/oud textures. BPM 100-115.
- LANGUAGE: DARIJA predominantly with some French. Romantic register.
- RULE: SENTIMENTAL RAWNESS is the signature. Vocal cracks and emotional vulnerability are features, not flaws. Never overly polished or clinical.`
  },
  {
    keywords: ["FRED AGAIN", "FRED AGAIN.."],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — EMOTIONAL DANCE:
- SOUND: Emotional Sampling Electronic, Voice-Memo Dance Music, Euphoric Rave Intimacy.
- VOCAL: Pitched voice memo samples as primary melodic element. Human intimacy within electronic dance.
- THEMES: Friendship, love, loss, euphoria, moments captured in time, collective dancefloor feeling.
- PRODUCTION: Voice memo hooks, pulsing house bass, breakbeat drums, pitched vocal samples. BPM 125-140.
- LANGUAGE: English (manipulated samples — voice IS the instrument).
- RULE: HUMAN INTIMACY within electronic dance. Voice memos = emotional anchors. NEVER cold or clinical.`
  },
  {
    keywords: ["PEGGY GOU"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — HOUSE-DISCO:
- SOUND: Groovy House Disco Fusion, Smooth Tech-House, Warm Analog Dance.
- VOCAL: Smooth house vocal hooks, groove-locking phrasing for dancefloor.
- THEMES: Dancefloor liberation, summer nights, groove as lifestyle, Seoul-Berlin cultural fusion.
- PRODUCTION: Deep house bass, funky synth riffs, crisp house drums, retro synth arpeggios. BPM 120-128.
- LANGUAGE: English and Korean occasional phrases.
- RULE: GROOVE and DANCEFLOOR are the only criteria. No heavy themes, no dark production. Pure feel-good dance energy.`
  },
  {
    keywords: ["STROMAE"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — ELECTRO-CHANSON BELGE:
- SOUND: Belgian Art-Pop, Electro-Chanson Francaise, Danceable Melancholy.
- VOCAL: Theatrical expressive male voice, alternating powerful singing and spoken-sung delivery.
- THEMES: Danceable melancholy, social critique (unemployment, fatherhood, loneliness), Belgian-Congolese identity, dark humor.
- PRODUCTION: Modern electronic synths, subtle Congolese rumba influences, dancefloor drums, orchestral accents. BPM 110-130.
- LANGUAGE: French, literary vocabulary, accessible irony.
- RULE: Dark theme + danceable production — the CONTRAST is the signature. Never pure sad, never pure happy.`
  },
  {
    keywords: ["WIZKID"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — SMOOTH AFROBEATS:
- SOUND: Smooth Afrobeats, Effortless Afro-Pop, Lagos Nonchalant Groove.
- VOCAL: Silky male tenor, nonchalant effortless delivery, fluid melodic singing with Yoruba inflection.
- THEMES: Love, dance, Lagos nightlife, African pride, feminine beauty, positive vibes.
- PRODUCTION: Log drums, shekere percussion, warm sub bass, soft synth pads, clean afro guitar licks. BPM 100-112.
- LANGUAGE: English with Yoruba inflections. Smooth confident register.
- RULE: EFFORTLESS COOL and SMOOTH GROOVE are the DNA. Never forced, never aggressive.`
  },
  {
    keywords: ["AUGXST"],
    isMelodic: false,
    instructions: `# ARTIST PROFILE — DARK AMBIENT CLOUD RAP:
- SOUND: Dark Emotional Cloud Rap, Ambient Trap, Cinematic Nocturnal Bass-Driven.
- VOCAL: Soft autotuned MALE voice that almost sings but never fully commits. Breathy close-mic whisper-croon. NOT R&B singing.
- THEMES: Toxic romance, night drives at 3am, luxury sadness, emotional isolation, nocturnal loneliness.
- PRODUCTION: Deep ominous sub bass, dark melodic 808s in half-time, dreamy atmospheric pads, washed-out detuned synths. BPM 60-80.
- LANGUAGE: English, sparse vocabulary, emotional weight over lyrical density.
- RULE: NEVER aggressive, NEVER uptempo, NEVER acoustic, NEVER power ballad. Hazy, slow, cinematic fog.`
  },
  {
    keywords: ["SCH"],
    instructions: `# ARTIST PROFILE — CINEMATIC DARK TRAP MARSEILLE:
- SOUND: Cinematic Dark Trap, Orchestral French Rap, Marseille Luxury Darkness.
- VOCAL: Very deep grave authoritative voice — imposing, measured. Dark melodic autotune on hooks only.
- THEMES: Marseille luxury darkness, cinematic storytelling, power, dark poetry, strategic patience.
- PRODUCTION: Dark orchestral strings, cinematic brass stabs, heavy distorted 808, reverb-drenched pads. BPM 130-140.
- LANGUAGE: French, dark literary vocabulary, Marseille references.
- RULE: CINEMATIC GRANDEUR is non-negotiable. Never cheerful, never lo-fi, never frantic.`
  },
  {
    keywords: ["SZA"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — NEO-SOUL ALTERNATIVE R&B:
- SOUND: Neo-Soul R&B, Alternative R&B, Warm Organic Contemporary Soul.
- VOCAL: Emotional breathy female vocals, neo-soul melisma runs. Switches between whisper and full emotional belt.
- THEMES: Emotional vulnerability, complex relationships, feminine empowerment, confessional storytelling, self-discovery.
- PRODUCTION: Live drums, Rhodes piano, acoustic guitar, lush harmonies, ethereal reverb. BPM 80-105.
- LANGUAGE: English, intimate confessional register, introspective vocabulary.
- RULE: WARMTH and VOCAL INTIMACY are the signature. Production serves the voice. Never trap aggression.`
  },
  {
    keywords: ["MAES"],
    instructions: `# ARTIST PROFILE — STREET MELODIC TRAP SEVRAN:
- SOUND: Street Melodic Trap, Dark French Rap, Sevran Energy. Raw authenticity above all.
- VOCAL: Deep grave voice with melodic autotune on hooks. Raw street delivery on verses.
- THEMES: Sevran street life, loyalty, survival, money, betrayal, nocturnal introspection.
- PRODUCTION: Heavy 808, dark piano, crisp trap drums, complex hi-hats. BPM 125-140.
- LANGUAGE: French, raw Sevran street vocabulary.
- RULE: RAW AUTHENTICITY is non-negotiable. Never overly polished or commercial.`
  },
  {
    keywords: ["LACRIM"],
    instructions: `# ARTIST PROFILE — HARDCORE MEDITERRANEAN TRAP:
- SOUND: Hard French Trap, Hardcore Street Rap, Mediterranean Gangster Atmosphere.
- VOCAL: Deep authoritative voice with Mediterranean accent. Hard aggressive rap delivery. No singing.
- THEMES: Mediterranean gangster culture, street codes, Maghreb-French identity, loyalty, survival.
- PRODUCTION: Aggressive 808, subtle oriental samples, dark synth stabs, hard snare, triplet hi-hats. BPM 120-135.
- LANGUAGE: French with Mediterranean/Maghreb slang.
- RULE: HARD and DIRECT. No singing, no soft, no overly melodic.`
  },
  {
    keywords: ["WERENOI"],
    instructions: `# ARTIST PROFILE — MELODIC EMOTIONAL STREET RAP:
- SOUND: Melodic French Trap, Emotional Street Rap, Close-Mic Sincerity.
- VOCAL: Deep resonant voice with emotional melodic autotune. Sincere raw delivery.
- THEMES: Street emotions, family loyalty, survival, authentic pain, nocturnal introspection.
- PRODUCTION: Deep sliding 808, melancholic piano, atmospheric pads, crisp trap drums. BPM 120-135.
- LANGUAGE: French, authentic street vocabulary, emotional directness.
- RULE: EMOTIONAL SINCERITY is the DNA. Never purely technical, always felt.`
  },
  {
    keywords: ["MHD"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — AFRO-TRAP ORIGINATOR:
- SOUND: Afro-Trap, African Rhythm Meets French Rap, Bouncy Festive Street.
- VOCAL: Festive energetic male voice with light autotune. African-French bouncy cadence.
- THEMES: Afro-Trap identity, African diaspora pride, Paris street party, dance, celebration.
- PRODUCTION: Bouncy 808, African percussion (djembe, sabar, congas), festive synth melodies. BPM 100-115.
- LANGUAGE: French with African expressions and diaspora vocabulary.
- RULE: BOUNCE and CELEBRATION are non-negotiable. Never dark, never slow.`
  },
  {
    keywords: ["TAYC"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — FRENCH AFRO-R&B:
- SOUND: French Afro-R&B, Smooth Melodic Pop-R&B, Warm Romantic Nocturnal.
- VOCAL: Rich smooth male tenor with melodic autotune. Singing-dominant. Romantic sensual warmth.
- THEMES: Romance, sensuality, love stories, nocturnal tenderness, smooth lifestyle.
- PRODUCTION: Lush Rhodes chords, warm sub bass, subtle afro percussion, smooth R&B drums. BPM 90-110.
- LANGUAGE: French, romantic register, sensual vocabulary.
- RULE: ROMANTIC WARMTH is the signature. Never aggressive, never hard.`
  },
  {
    keywords: ["DADJU"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — CONGOLESE-FRENCH MELODIC R&B:
- SOUND: French Afro-Pop R&B, Romantic Melodic, Congolese-French Fusion.
- VOCAL: Smooth melodic male vocals with autotune. Topline-dominant. Congolese-French cadence.
- THEMES: Romance, family bonds, love stories, nocturnal tenderness, diaspora identity.
- PRODUCTION: Warm 808, lush keyboard pads, afro percussion, Congolese guitar textures. BPM 95-115.
- LANGUAGE: French, romantic register.
- RULE: SINGING DOMINATES throughout. Strong melodic hooks always.`
  },
  {
    keywords: ["LOMEPAL"],
    instructions: `# ARTIST PROFILE — INDIE FRENCH RAP:
- SOUND: Indie French Rap, Emotional Acoustic-Electronic Hybrid, Parisian Skateboard Culture.
- VOCAL: Raw emotional male voice with minimal processing. Confessional intimate delivery.
- THEMES: Skateboard culture, Parisian indie scene, emotional vulnerability, youth angst, authenticity.
- PRODUCTION: Acoustic guitar layers, indie synths, live drum feel, warm bass. BPM 85-110.
- LANGUAGE: French, intimate confessional register, no heavy slang.
- RULE: RAW CONFESSIONAL INTIMACY is the DNA. No heavy autotune, no hard trap.`
  },
  {
    keywords: ["ANGELE"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — BELGIAN ELECTRO-POP:
- SOUND: Belgian Art-Pop, Sophisticated Electro-Pop, Elegant Ironic Pop.
- VOCAL: Crystal clear female vocals with NO autotune. Belgian French accent. Sophisticated restraint.
- THEMES: Feminism, self-empowerment, Belgian identity, youth irony, social commentary.
- PRODUCTION: Bright synth arps, electronic drums, punchy pop bass, pop claps. BPM 110-125.
- LANGUAGE: French, elegant register, ironic and playful vocabulary.
- RULE: ELEGANCE and SUBTLETY are non-negotiable. Catchy but never vulgar.`
  },
  {
    keywords: ["REMA"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — AFRORAVE:
- SOUND: Afrorave, Nigerian Pop-Rave, High-Energy Electronic Afrobeats.
- VOCAL: Youthful male vocals with infectious melodic hooks. High-energy Afrorave cadence.
- THEMES: Nigerian youth culture, global dancefloor, celebration, love, infectious joy.
- PRODUCTION: Rave synth stabs, punchy afro bass, African percussion, electronic hi-hats. BPM 105-120.
- LANGUAGE: English with Yoruba/Pidgin phrases. Youthful global register.
- RULE: HIGH ENERGY and INFECTIOUS GROOVE are mandatory. Never slow, never dark.`
  },
  {
    keywords: ["NAS"],
    instructions: `# ARTIST PROFILE — EAST COAST LYRICAL BOOM BAP:
- SOUND: East Coast Boom Bap, Lyrical Hip-Hop, Golden Era Storytelling Rap.
- VOCAL: Deep male voice, NO autotune, lyrical precision, storytelling cadence. Dense multisyllabic rhymes.
- THEMES: Queens NY street poetry, hip-hop heritage, lyrical supremacy, social commentary, survival wisdom.
- PRODUCTION: Boom bap drums, jazz samples, soul chops, vinyl crackle. BPM 85-95.
- LANGUAGE: English, rich NY street vocabulary, literary references.
- RULE: LYRICAL PRECISION and BOOM BAP are sacred. No trap hi-hats, no autotune.`
  },
  {
    keywords: ["NIRO"],
    instructions: `# ARTIST PROFILE — MELODIC EMOTIONAL TRAP BLOIS:
- SOUND: Melodic French Trap, Emotional Street Rap, Raw Authentic Sincerity.
- VOCAL: Deep emotional voice with melodic autotune. Raw authentic delivery.
- THEMES: Blois street life, emotional vulnerability, overlooked city pride, family loyalty, faith vs doubt.
- PRODUCTION: Deep 808, melancholic piano melodies, atmospheric strings, trap drums. BPM 75-90.
- LANGUAGE: French, confessional street register, simple vocabulary with heavy emotional weight.
- RULE: RAW AUTHENTICITY is non-negotiable. Never overly polished, always sincere.`
  },
  {
    keywords: ["HUGEL"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — FRENCH HOUSE DJ-PRODUCER:
- SOUND: French House, Tropical House, Afro House, Summer Festival Electronic.
- VOCAL: Filtered vocal chops and house samples. Production-driven.
- THEMES: Summer festivals, Ibiza energy, tropical dancefloor, French house culture.
- PRODUCTION: Four-on-the-floor kick, tropical percussion, house bassline, bright synth melodies. BPM 120-128.
- LANGUAGE: English (filtered vocal samples — no natural delivery).
- RULE: DANCEFLOOR GROOVE and SUMMER ENERGY are mandatory.`
  },
];

export function getArtistSpecificInstructions(inspiredBy: string): string {
  if (!inspiredBy || inspiredBy === 'none') return '';
  const upper = inspiredBy.toUpperCase();
  const matches = ARTIST_PROFILES.filter(p => p.keywords.some(k => upper.includes(k)));
  if (matches.length === 0) return '';
  return matches.map(m => m.instructions).join('\n\n');
}

export function isArtistMelodic(inspiredBy: string): boolean {
  if (!inspiredBy || inspiredBy === 'none') return false;
  const upper = inspiredBy.toUpperCase();
  const match = ARTIST_PROFILES.find(p => p.keywords.some(k => upper.includes(k)));
  return match?.isMelodic ?? false;
}

export function getRelevantWritingDNA(inspiredBy: string, genre: string): string {
  const upper = (inspiredBy + ' ' + genre).toUpperCase();

  const dnaMap: Record<string, string> = {
    'RAP_FR': `FRENCH RAP DNA:
- Verlan, street slang ("charbon", "moula", "wesh", "frero", "daronne", "les keufs").
- Themes: street life, melancholy of success, betrayal, loyalty, survival, money.
- Flow: choppy percussive OR floating melodic. Internal rhymes prioritized.
- Language: raw French, authentic, never academic.`,

    'MELODIC_STREET_POP': `MELODIC STREET POP (MARSEILLE) DNA:
- Omnipresent melodic autotune — voice always singing, never dry rap.
- Themes: neighborhood loyalty, street love, Mediterranean sunshine and melancholy.
- Flow: ultra-melodic, fast, bouncy. Signature piano + punchy 808.
- Language: French with Marseille open vowels and elisions.
- FORBIDDEN: dry rap flow.`,

    'US_UK_RAP': `US/UK RAP DNA:
- Language: English imperatively.
- Slang: "no cap", "opps", "sliding", "stacks", "gang", "move different", "drip".
- Flow: melodic trap OR dark psychedelic OR drill. Triplet flows, ad-libs, punch-in delivery.`,

    'DRILL_FR': `FRENCH DRILL DNA:
- Sliding aggressive 808s, frantic triplet hi-hats, dark minor piano.
- Syncopated brutal flow with dramatic pauses between bars.
- Raw territorial language — street, violent, menacing. Pure aggression. NEVER melodic singing hooks.`,

    'DARK_TRAP_MELODIC': `DARK TRAP MELODIC (BELGIAN / DAMSO) DNA:
- Rap-first: staccato flow, phrase-end doubling, short echo delays. Cold metallic autotune — NEVER warm R&B.
- Dark minor key piano loops, haunting pads, sliding distorted 808, crisp metallic hi-hats. 130-142 BPM.
- Themes: dark philosophy, sexuality as weapon, existential duality, Belgian noir, intellectual provocation.
- Language: rich sophisticated French, complex metaphors, permanent double meaning, Belgian slang.`,

    'DARK_LYRICAL': `DARK LYRICAL DNA:
- Dense technical flow — zero melody, syllable = percussion.
- Dark boom-bap/drill hybrid, pitched orchestral samples, cinematic bleakness.
- Occult, cultural, multi-layered references. Rap as intellectual weapon.`,

    'REGGAETON': `REGGAETON / LATIN URBAN DNA:
- Dembow riddim is mandatory (syncopated kick pattern).
- Spanish rhythmic flow, catchy danceable hooks, sensual party themes.
- Production: bouncy round bass, Latin synths, reggaeton percussion.`,

    'AFROBEATS': `AFROBEATS DNA:
- Authentic afro percussion (log drums, talking drums, congas, shekere).
- Infectious grooves, joyful melodies, call-and-response hooks, positive energy.
- Themes: celebration, cultural pride, dance, love, Africa.
- Language: English, Nigerian Pidgin, Yoruba phrases.`,

    'CARIBBEAN': `CARIBBEAN / DANCEHALL DNA:
- Dancehall riddim, warm groovy bass, bouncy Caribbean inflection.
- Festive positive tropical dancefloor energy — never dark or heavy.
- Language: Creole/Patois blended with French.`,

    'MAGHREB': `MAGHREB / RAI DNA:
- Oriental instrumentation (oud, derbouka, qanun, violin, accordion).
- Melodies in Arabic scales, raw emotional delivery.
- Themes: nostalgia (Houma), exile, love, celebration. French-Darija bilingual mix.
- Language: French and Algerian Darija mixed naturally.`,

    'AFRO_MELO': `AFRO-MELODIC / AFRO-TRAP DNA:
- Melodic autotune over afro-trap production — warm 808s, afro percussion, bright melodies.
- Rap/singing alternation, festive yet melancholic energy.
- Themes: success, love, dance, quartier pride, Congolese/African cultural identity.`,

    'STORYTELLING': `STORYTELLING / ALT-RAP DNA:
- Poetic narrative flow — conversational, literary, never rushed.
- Organic production: jazz piano, acoustic guitar, live drums, warm bass.
- Themes: introspection, dark humor, everyday absurdity, social observation.
- Language: French literary register mixed with modern slang.`,

    'ELECTRO': `ELECTRO / HOUSE DNA:
- Precise electronic production, dominant synths, four-on-the-floor or house groove.
- Vocal chops, vocoder, or minimal house vocal hooks.
- Structure: build-up, peak, drop. Energy for dancefloor.`,

    'MELODIC_TRAP': `MELODIC TRAP DNA:
- Melodic autotune throughout — smooth rap/singing alternation.
- Deep 808s, dark melodies (piano, guitar), complex hi-hats, atmospheric pads.
- Themes: nocturnal introspection, success and melancholy, loyalty, night.`,

    'HARDCORE': `HARDCORE RAP DNA:
- Deep aggressive voice, zero melody, maximum dominance.
- Massive production: dark orchestral OR heavy trap. Cinematic aggression.
- Themes: power, confrontation, survival, street credibility, domination.`,

    'NEO_SOUL': `NEO-SOUL / ALTERNATIVE R&B DNA:
- Warm organic production — live instruments, Rhodes piano, acoustic guitar.
- Vulnerable confessional female singing with soul runs and layered harmonies.
- Themes: relationships, emotional depth, feminine empowerment, authenticity.
- Language: English, intimate confessional register.`,

    'SYNTH_POP': `SYNTH-POP / DARK R&B DNA:
- 80s retro-futuristic analog synths, drum machine, cinematic nocturnal atmosphere.
- Dark falsetto delivery over electronic beats. Layered harmonies.
- Themes: nocturnal hedonism, toxic romance, cinematic loneliness, excess.
- Language: English.`,

    'AFRO_SOUL': `AFRO-SOUL DNA:
- Ethereal African vocal tradition meets contemporary soul and R&B.
- Organic afro percussion, warm atmospheric production, layered harmonies.
- Themes: spiritual connection, feminine strength, African heritage, quiet power.
- Language: English with Nigerian inflection.`,

    'CLOUD_RAP': `CLOUD RAP DNA:
- Floating ethereal autotune, slow deep 808s, massive reverb.
- Minimalist but immersive production — space and silence are weapons.
- Themes: introspection, melancholy, hovering between worlds, solitude, family bonds.
- Language: French, introspective register, simple vocabulary with emotional weight.`,

    'ZOUK': `ZOUK / ISLAND R&B DNA:
- Zouk groove rhythm, warm Caribbean bass, drum machine groove.
- Romantic melodic male singing with Creole accent, natural vibrato.
- Themes: island love, tropical warmth, Caribbean nights, romance.
- Language: French and Antillean Creole mixed.`,

    'ELECTRO_CHANSON_BELGE': `ELECTRO-CHANSON BELGE (STROMAE) DNA:
- Dance floor production with poetic literary lyrics — the contrast IS the style.
- Electronic synths + subtle Congolese rumba rhythmic influences + orchestral accents.
- Themes: danceable sadness, social critique, Belgian-Congolese identity, dark humor.
- Language: French — literary, accessible, ironic. Write poetry that works over a dance beat.
- RULE: The theme must be DARK but the PRODUCTION must make you want to DANCE.`,

    'CINEMATIC_TRAP_FR': `CINEMATIC DARK TRAP (SCH / MARSEILLE) DNA:
- Orchestral grandeur meets trap darkness. Think movie score + French street rap.
- Themes: Marseille luxury, dark poetry, patience, power, cinematic storytelling.
- Flow: deliberate, measured, dramatic pauses. Deep authoritative voice, precise bars.
- Production: orchestral strings, brass stabs, heavy 808, reverb-drenched pads, hi-end polish.
- Language: French — dark literary vocabulary, strategic metaphors, Marseille references.`,

    'AFRO_TRAP_FESTIF': `AFRO-TRAP FESTIF (NISKA / MHD) DNA:
- Pure celebration energy — bounce, party, pride, dance.
- African percussion over trap production: djembe + 808, congas + hi-hats, afro synths.
- Flow: bouncy, rhythmic, infectious. Rap/singing alternation. Hook = crowd chant.
- Themes: party, dance, quartier pride, African diaspora energy, street celebration.
- Language: French with African expressions, energetic slang, calls to dance.`,

    'UK_MELODIC_DRILL': `UK MELODIC DRILL DNA:
- Melancholic but cool — not aggressive like FR Drill. More melodic, more London attitude.
- Sliding 808s, triplet hi-hats, melancholic piano/guitar layers, clean drill pocket.
- Flow: sliding syncopated UK drill flow, light autotune on hooks. London MLE accent rhythm.
- Themes: London hustle, flexing, relationships, success, UK street cool.
- Language: English UK — mandem, ting, moving mad, drip, money in the ting.`,

    'DREAM_POP_SADCORE': `DREAM POP / SADCORE (LANA DEL REY) DNA:
- Languid, trailing, cinematic — time feels suspended in beautiful melancholy.
- Themes: Hollywood nostalgia, toxic love, tragic glamour, eternal summer, Americana.
- Vocal delivery: drawn-out syllables, trailing phrases, whispers to lush moments. Never rushed.
- Production: massive reverb, surf guitars, cinematic strings, slow drums, 1960s reimagined.
- Language: English — poetic, vintage Americana register, literary and cinematic references.`,

    'DARK_POP_ASMR': `DARK POP ASMR (BILLIE EILISH) DNA:
- Whisper intimacy as power — silence and contrast are structural elements.
- Themes: anxiety, nightmares, quiet rebellion, vulnerability as strength, youth angst.
- Vocal: close-mic whisper that builds to raw intensity. Dark doubled harmonies. NEVER belted.
- Production: ASMR organic textures, heavy sub-bass, percussive minimalism, silence as instrument.
- Language: English — confessional, gen-Z intimate register, visceral imagery.`,

    'AFRO_POP_RNB_FR': `FRENCH AFRO-POP / AFRO-R&B DNA:
- French urban pop with West African melodic groove. Warm, danceable, romantic.
- Hooks are the absolute priority — every chorus must be immediately memorable and singable.
- Themes: love, heartbreak, dance, confidence, nightlife, diaspora warmth.
- Production: light afro percussion, melodic pop guitars, warm bouncy 808s, bright pop synths.
- Language: French — accessible urban register, romantic vocabulary, danceable phrasing.`,

    'AFRORAVE_NIGERIAN': `AFRORAVE DNA (REMA / WIZKID):
- High-energy infectious Afrobeats with electronic rave elements or smooth Lagos groove.
- Hooks are global and infectious — designed for mass singalong across cultures.
- Themes: youth celebration, dancefloor, African pride, love, festive Nigerian energy.
- Production: rave synth stabs OR smooth afro bass, African percussion, electronic elements. BPM 100-120.
- Language: English with Yoruba/Pidgin phrases.
- RULE: INFECTIOUS GROOVE is mandatory. Never dark, never slow.`,

    'ELECTRO_POP_BELGE': `ELECTRO-POP BELGE (ANGELE) DNA:
- Sophisticated and catchy simultaneously — elegant pop with electronic edge and dry wit.
- Themes: feminism, self-empowerment, Belgian identity, youth irony, social commentary.
- Production: bright synth arps, electronic drums, punchy pop bass, polished colorful sound.
- Vocal: crystal clear, no autotune, sophisticated pop phrasing with Belgian restraint.
- Language: French — elegant, ironic, playful. Never vulgar, always subtle.`,

    'INDIE_RAP_FR': `INDIE FRENCH RAP (LOMEPAL) DNA:
- Confessional storytelling over acoustic-electronic hybrid production. Authentic vulnerability.
- Themes: skateboard culture, Parisian indie scene, youth angst, emotional honesty.
- Flow: fluid between rap and singing, conversational, never rushed. Raw emotion over technique.
- Language: French — intimate confessional register, poetic but accessible, no heavy slang.`,

    'BOOM_BAP_US': `EAST COAST BOOM BAP DNA (NAS):
- Golden era New York hip-hop — lyrical density, boom bap drums, jazz/soul samples.
- Themes: Queens NY street poetry, lyrical supremacy, social commentary, hip-hop heritage.
- Flow: dense multisyllabic rhymes, storytelling narrative, classic NY cadence. NO autotune.
- Language: English — rich NY street vocabulary, literary depth, complex wordplay.`,

    'MELODIC_STREET_FR': `MELODIC STREET TRAP (WERENOI / NIRO / MAES) DNA:
- Raw emotional authenticity over dark melodic trap. Sincerity above all.
- Melodic autotune on hooks, percussive raw rap on verses. Close-mic intimate feel.
- Themes: street pain, family loyalty, survival, emotional vulnerability, nocturnal introspection.
- Language: French — authentic street vocabulary, emotional directness, no artifice.`,

    'HARDCORE_MEDITERRANEAN': `HARDCORE MEDITERRANEAN TRAP (LACRIM) DNA:
- Hard, direct, authoritative. Mediterranean gangster atmosphere meets French trap.
- No singing — deep authoritative voice, hard percussive rap, dramatic pauses.
- Themes: street codes, Mediterranean identity, Maghreb-French dual identity, loyalty, survival.
- Language: French with Mediterranean/Maghreb slang references.`,

    'EXPERIMENTAL_ABSURDIST': `EXPERIMENTAL ABSURDIST RAP (VALD) DNA:
- Unpredictability IS the style. Tone shifts radically mid-verse — serious to ironic to absurd.
- Themes: dark humor, social satire, internet/geek culture, provocation with intelligence.
- Flow: fast technical default, switches tempo, register, and tone without warning.
- Language: French — multi-layered, ironic, references pop culture/anime/geopolitics.`,

    'PSYCHEDELIC_TRAP': `PSYCHEDELIC TRAP (TRAVIS SCOTT) DNA:
- Atmosphere and sonic immersion are the main characters — production IS the statement.
- Beat switches are structural: each section can change BPM, key, or sonic texture.
- Thick artistic autotune — voice floats as one layer in a saturated, constantly evolving soundscape.
- Themes: cosmic nightlife, festival chaos, controlled psychedelia, space as metaphor.
- Production: saturated deep 808s, atmospheric floating synths, phaser/flanger effects, massive reverb. BPM 130-150.
- Language: English — short visceral phrases, ad-lib chains dominate.
- RULE: ATMOSPHERE and BEAT SWITCHES are mandatory. Static = wrong. Every section must evolve.`,

    'GOSPEL_MAXIMALIST': `GOSPEL MAXIMALIST (KANYE WEST) DNA:
- Maximalism as philosophy — every element pushed to its extreme.
- Chopped soul + massive gospel choirs + industrial drums + orchestral strings = the DNA stack.
- Vocal: rap/singing/gospel chanting with no fixed mode — voice serves the emotion.
- Themes: spiritual crisis and redemption, artistic grandeur, ego and vulnerability, faith, fashion.
- Production: chopped soul vocal samples, massive gospel choirs, grand piano, orchestral strings. BPM 90-130.
- Language: English — confessional, grandiose, God/faith and luxury simultaneously.
- RULE: MAXIMALIST AMBITION is the signature. Every section must feel like a statement.`,

    'RAGE_VAMP': `RAGE VAMP TRAP (PLAYBOI CARTI) DNA:
- Voice is texture, NOT a lyrical vehicle. Words are percussion hits, not messages.
- Short phrases maximum 2-4 words, ad-lib chains dominate. Flow = rhythmic stab.
- Themes: vamp aesthetic, punk energy, dark fashion, mosh pit chaos.
- Production: extremely saturated 808s, distorted synth stabs, aggressive minimal drums. BPM 150-175.
- Language: English — minimal, textural, repetitive. Each word = a rhythmic event.
- RULE: TEXTURAL MINIMALISM. If every word carries narrative weight, it is wrong.`,
  };

  const matchKeys: string[] = [];

  if (upper.includes('JUL') || upper.includes('GAZO') || upper.includes('NINHO') ||
      upper.includes('FREEZE') || upper.includes('ALPHA WANN') ||
      upper.includes('NEKFEU') || upper.includes('ORELSAN') || upper.includes('BOOBA') ||
      upper.includes('KAARIS') || upper.includes('SALIF')) {
    matchKeys.push('RAP_FR');
  }

  if (upper.includes('VALD')) matchKeys.push('EXPERIMENTAL_ABSURDIST');
  if (upper.includes('SCH')) matchKeys.push('CINEMATIC_TRAP_FR');
  if (upper.includes('LACRIM')) matchKeys.push('HARDCORE_MEDITERRANEAN');
  if (upper.includes('WERENOI') || upper.includes('NIRO') || upper.includes('MAES')) matchKeys.push('MELODIC_STREET_FR');
  if (upper.includes('ORELSAN') || upper.includes('LOMEPAL') || upper.includes('NEKFEU')) matchKeys.push('STORYTELLING');
  if (upper.includes('LOMEPAL')) matchKeys.push('INDIE_RAP_FR');

  if (upper.includes('TRAVIS SCOTT')) matchKeys.push('PSYCHEDELIC_TRAP');
  if (upper.includes('KANYE WEST') || upper.includes('KANYE')) matchKeys.push('GOSPEL_MAXIMALIST');
  if (upper.includes('PLAYBOI CARTI') || upper.includes('CARTI')) matchKeys.push('RAGE_VAMP');

  if (upper.includes('DAMSO')) matchKeys.push('DARK_TRAP_MELODIC');

  if ((upper.includes('DRILL') && upper.includes('FR')) || upper.includes('GAZO') || upper.includes('SDM')) {
    matchKeys.push('DRILL_FR');
  }

  if (upper.includes('FREEZE') || upper.includes('ALPHA WANN') || upper.includes('SDM')) matchKeys.push('DARK_LYRICAL');

  if (upper.includes('DRAKE') || upper.includes('KENDRICK') ||
      upper.includes('JUICE WRLD') || upper.includes('POST MALONE') ||
      upper.includes('NATE DOGG') || upper.includes('MOBB DEEP') ||
      upper.includes('JEDI MIND') || upper.includes('VINNIE PAZ') || upper.includes('DR. DRE')) {
    matchKeys.push('US_UK_RAP');
  }

  if (upper.includes('NAS')) matchKeys.push('BOOM_BAP_US');

  if (upper.includes('CENTRAL CEE') || (upper.includes('UK') && upper.includes('DRILL'))) {
    matchKeys.push('UK_MELODIC_DRILL');
  }

  if (upper.includes('REGGAETON') || upper.includes('LATIN') || upper.includes('BAD BUNNY') ||
      upper.includes('BALVIN') || upper.includes('KAROL G') || upper.includes('ROSALIA')) {
    matchKeys.push('REGGAETON');
  }

  if (upper.includes('AFROBEAT') || upper.includes('BURNA') || upper.includes('ASAKE') ||
      upper.includes('MHD') || upper.includes('TIAKOLA')) {
    matchKeys.push('AFROBEATS');
  }

  if (upper.includes('REMA') || upper.includes('WIZKID')) matchKeys.push('AFRORAVE_NIGERIAN');
  if (upper.includes('TEMS')) matchKeys.push('AFRO_SOUL');

  if (upper.includes('CARIBBEAN') || upper.includes('DANCEHALL') || upper.includes('KALASH') ||
      upper.includes('ZOUK') || upper.includes('DWET')) {
    matchKeys.push('CARIBBEAN');
    if (upper.includes('ZOUK') || upper.includes('DWET')) matchKeys.push('ZOUK');
  }

  if (upper.includes('MAGHREB') || upper.includes('RAI') || upper.includes('TIF') ||
      upper.includes('SOOLKING') || upper.includes('BILAL SGHIR') || upper.includes('CHEB MAMI') ||
      upper.includes('DJALIL PALERMO') || upper.includes('RIMK') || upper.includes('KHALED') ||
      upper.includes('ALGERINO')) {
    matchKeys.push('MAGHREB');
  }

  if (upper.includes('TIAKOLA') || upper.includes('DADJU')) matchKeys.push('AFRO_MELO');
  if (upper.includes('NISKA') || upper.includes('MHD')) matchKeys.push('AFRO_TRAP_FESTIF');

  if (upper.includes('AYA NAKAMURA') || upper.includes('TAYC') || upper.includes('DADJU')) {
    matchKeys.push('AFRO_POP_RNB_FR');
  }

  if (upper.includes('ELECTRO') || upper.includes('HOUSE') || upper.includes('DAFT') ||
      upper.includes('PEGGY GOU') || upper.includes('HUGEL') || upper.includes('FRED AGAIN')) {
    matchKeys.push('ELECTRO');
  }

  if (upper.includes('STROMAE')) matchKeys.push('ELECTRO_CHANSON_BELGE');
  if (upper.includes('ANGELE')) matchKeys.push('ELECTRO_POP_BELGE');

  if (upper.includes('HAMZA') || upper.includes('MELODIC TRAP') || upper.includes('LAYLOW') ||
      upper.includes('WERENOI') || upper.includes('VACRA') || upper.includes('NINHO')) {
    matchKeys.push('MELODIC_TRAP');
  }

  if (upper.includes('HARDCORE') || upper.includes('BOOBA') || upper.includes('KAARIS') ||
      upper.includes('MOBB DEEP') || upper.includes('JEDI MIND') || upper.includes('VINNIE PAZ')) {
    matchKeys.push('HARDCORE');
  }

  if (upper.includes('SZA') || upper.includes('SNOH') || upper.includes('SADE') ||
      upper.includes('JORJA') || upper.includes('MONSIEUR NOV')) {
    matchKeys.push('NEO_SOUL');
  }

  if (upper.includes('THE WEEKND') || upper.includes('WEEKND') || upper.includes('AUGXST')) {
    matchKeys.push('SYNTH_POP');
  }

  if (upper.includes('PNL') || upper.includes('ADEMO') || upper.includes('CLOUD')) {
    matchKeys.push('CLOUD_RAP');
  }

  if (upper.includes('LANA DEL REY')) matchKeys.push('DREAM_POP_SADCORE');
  if (upper.includes('BILLIE EILISH')) matchKeys.push('DARK_POP_ASMR');

  if (upper.includes('JUL') || (upper.includes('MARSEILLE') && upper.includes('POP'))) {
    matchKeys.push('MELODIC_STREET_POP');
  }

  if (matchKeys.length === 0) {
    return `GENERIC URBAN CONTEMPORARY:
- Match vocal style and flow EXACTLY to the Sonic DNA above. No assumptions.
- Production: use the artist production fingerprint as defined in Sonic DNA only.
- Language: match the artist primary language from cultural anchors.
- Do NOT default to R&B or melodic trap — use the Sonic DNA as the ONLY guide.`;
  }

  const unique = [...new Set(matchKeys)];
  return unique.map(k => dnaMap[k]).filter(Boolean).join('\n\n');
}
