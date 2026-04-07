/**
 * Artist-specific instruction profiles for Gemini prompt generation.
 * v2 — All 54+ artists covered. No generic fallback for known artists.
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
- VOCAL: Omnipresent melodic autotune — it IS the signature. High nasal pitch, always singing. Ultra-melodic fast flow with characteristic note rises. NEVER dry rap.
- THEMES: Neighborhood loyalty, street love, Marseille pride, sunshine and melancholy, family, everyday life. Direct popular language.
- PRODUCTION: Bright or melancholic melodic piano (SIGNATURE), punchy bouncy 808s, fast clean hi-hats, bright digital synths, light synthetic percussion. BPM 120-130.
- LANGUAGE: French with natural Marseille accent elisions and open vowels.
- RULE: Melodic autotune is NON-NEGOTIABLE. Singing IS the style. FORBIDDEN to produce dry/technical rap.`
  },
  {
    keywords: ["NINHO"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — MELODIC TRAP FR:
- SOUND: Melodic Trap, Dark Emotional Rap, Street Melancholy.
- VOCAL: Controlled melodic autotune, smooth rap/singing alternation. Mid-range slightly raspy voice. Both technical rapping AND melodic emotional choruses.
- THEMES: Rise from the streets, melancholy of success, loneliness at the top, family, neighborhood (91), betrayal, money as escape.
- PRODUCTION: Deep round 808s, dark emotional piano melodies, melancholic acoustic guitars, complex hi-hats (rolls, triplets), atmospheric pads. BPM 130-145.
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
- PRODUCTION MODE 1: Moody minor piano loops, haunting atmospheric textures, sliding distorted 808, crisp metallic triplet hi-hats, hard snare. 142 BPM.
- PRODUCTION MODE 2: Nocturnal atmospheric pads, filtered Rhodes, heavy sliding 808, lush reverb/delay, sophisticated soundscape. 130 BPM, G minor.
- LANGUAGE: Sophisticated French, Belgian slang, rich vocabulary, complex metaphors, permanent double meaning.
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
- RULE: The sound MUST be threatening and dark. No joyful melody, no pop.`
  },
  {
    keywords: ["FREEZE CORLEONE", "FREEZE"],
    instructions: `# ARTIST PROFILE — DARK LYRICAL OCCULT:
- SOUND: Dark Boom Bap, French Horrorcore, Lyrical Dark Trap.
- VOCAL: Monotone deep voice, technical dense flow, NO autotune, fast delivery with complex placements. Cold detached tone.
- THEMES: Conspiracy, occult, lyrical supremacy, intellectual provocation, obscure samples.
- PRODUCTION: Dark samples (jazz/soul/classical detoured), heavy boom bap drums, deep bass, cinematic bleak atmosphere.
- RULE: Flow must be SURGICAL and COLD. No apparent emotion, pure technique.`
  },
  {
    keywords: ["NEKFEU"],
    instructions: `# ARTIST PROFILE — LYRICAL POP-RAP:
- SOUND: Lyrical Rap, Pop-Rap, Poetic Modern Boom Bap.
- VOCAL: Clear articulate voice, NO autotune, technical flow with accelerations, capable of singing on choruses.
- THEMES: Travel, love, introspection, literature, soft melancholy, Paris, creativity.
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
- THEMES: Technology and emotions, digital loneliness, dystopian love, futurism, modern anxiety.
- PRODUCTION: Futuristic atmospheric synths, deep 808s, experimental electronic textures, manipulated samples, subtle glitches. Cinematic atmosphere.
- RULE: The CONCEPTUAL and CINEMATIC aspect is essential.`
  },
  {
    keywords: ["SDM"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — DARK AFRO-TRAP PARIS BANLIEUE:
- SOUND: Dark Afro-Trap, Paris Banlieue Street Rap, Cold Melodic Drill. NOT Brussels-style. ZERO afro festif influence.
- VOCAL: Deep masculine voice, heavy metallic autotune on hooks (dark and glacial), staccato rap on verses. Street sincerity dominates.
- THEMES: Paris banlieue nocturnal life, street ambition, dark melancholy, loyalty, authentic struggle, Île-de-France urban identity.
- PRODUCTION: Heavy sliding 808 sub-bass, moody minor piano, dark atmospheric pads, crisp drill hi-hats, sharp trap drums, MINIMAL arrangement. BPM 125-140.
- RULE: COLD DARK MINIMALISM. Never warm, never festive, NEVER Brussels/Belgian references.`
  },
  {
    keywords: ["NISKA"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — AFRO-TRAP FESTIF:
- SOUND: Afro-Trap, Dancehall-Rap, Festive Street Energy.
- VOCAL: Recognizable voice, light autotune, bouncy dancing flow, rap/singing alternation. Festive contagious energy.
- THEMES: Party, dance, quartier pride, positive street energy, Congolese cultural influence.
- PRODUCTION: Afro percussion (synthetic congas, djembe), bouncy 808s, festive melodies, dancehall influences. BPM 100-115.
- RULE: ENERGY is everything. Fun, contagious, celebratory.`
  },
  {
    keywords: ["CENTRAL CEE"],
    instructions: `# ARTIST PROFILE — UK MELODIC DRILL:
- SOUND: UK Rap, Melodic Drill, London Street.
- VOCAL: Clear voice, UK drill flow (sliding, syncopated), light melodic autotune on hooks. Marked London accent. Cool, not aggressive.
- THEMES: London hustling, flexing, relationships, success, UK street life.
- PRODUCTION: Sliding 808s, triplet hi-hats, melancholic piano/guitar, UK drill atmosphere. BPM 140-145.
- LANGUAGE: English UK, London slang (mandem, ting, innit), MLE accent.
- RULE: UK Drill is melodic and cool — distinct from FR Drill aggression.`
  },
  {
    keywords: ["ALPHA WANN"],
    instructions: `# ARTIST PROFILE — ELITE TECHNICAL FRENCH RAP:
- SOUND: Elite Technical French Rap, Modern Boom Bap, Dark Luxury Minimalism.
- VOCAL: Dry baritone voice, NO AUTOTUNE, hyper-precise articulation, fast technical delivery, cold controlled aggression. No singing.
- PRODUCTION: Dark minimalist piano, subtle bell textures, heavy percussive drums, minimal bass line. FORBIDDEN: jazzy sounds, soulful samples, warm swing.
- RULE: Flow is a demonstration of pure technique, cold and surgical.`
  },
  {
    keywords: ["KALASH"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — CARIBBEAN TRAP:
- SOUND: Modern Dancehall, Caribbean Trap, Ragga-Rap.
- VOCAL: Mix of melodic singing/rap, light autotune, marked Antillean accent. Bouncy dancing flow.
- THEMES: Caribbean identity, island pride, party, tropical melancholy, exile.
- PRODUCTION: Dancehall riddims, tropical percussion, bouncy 808s, atmospheric synths, tropical melodies. BPM 90-110.
- LANGUAGE: Mix of MARTINICAN CREOLE and FRENCH.`
  },
  {
    keywords: ["TIF"],
    instructions: `# ARTIST PROFILE — MAGHREB MELODIC:
- SOUND: Raï-Trap, Algerian Urban Melodic, Mediterranean Melancholy.
- VOCAL: Melodic with raï influences, controlled autotune, emotional voice, singing/rap alternation.
- THEMES: Algiers nostalgia (Houma), exile, sun-drenched melancholy, destiny (Mektoub).
- PRODUCTION: Oud, mandole, derbouka. Melancholic acoustic guitars, deep 808s, oriental melodies.
- LANGUAGE: 50/50 FRENCH and DARIJA (Algerian Arabic). Slang: 'Sahbi', 'Khoya', 'Dz'.`
  },
  {
    keywords: ["TIAKOLA"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — AFRO MELODIC:
- SOUND: Pure Afro-Melodic, Melo, Afro-Pop Urbaine.
- VOCAL: Ultra-melodic, PERMANENT MELODIC AUTOTUNE, high bright voice, constant tonality variations, rich harmonies.
- THEMES: Success, love, loyalty, party, dance, quartier pride, Lingala cultural influence.
- PRODUCTION: Afro percussion (congas, shakers, synthetic djembe), melodic guitars, warm bouncy 808s, bright synths. BPM 100-120.
- RULE: MELODY is EVERYTHING. Every syllable is sung.`
  },
  {
    keywords: ["PNL", "ADEMO", "NOS"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — CLOUD RAP:
- SOUND: Atmospheric Cloud Rap, Melodic Trap, Emotional Autotune.
- VOCAL: OMNIPRESENT artistic autotune, floating voice, slow spatial flow. Doubled layered voices for ethereal effect.
- THEMES: Solitude, family, bitter success, urban contemplation, nostalgia, deep melancholy, cité as universe.
- PRODUCTION: Atmospheric floating synths, deep slow 808s, ethereal piano/pads, massive reverb, minimalist but immersive. BPM 70-90.
- RULE: FLOATING MELANCHOLY is non-negotiable. FORBIDDEN fast or aggressive flow.`
  },
  {
    keywords: ["ROSALÍA"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — FLAMENCO FUSION:
- SOUND: Experimental Flamenco, Art-Pop, Deconstructed Reggaeton.
- VOCAL: Powerful expressive voice, flamenco melismas, complex vocal textures, palmas hand claps.
- PRODUCTION: Palmas, flamenco guitar, trap 808s, modern synths, organic/electronic blend.
- LANGUAGE: Spanish with Andalusian expressions, visceral vocabulary.`
  },
  {
    keywords: ["BILLIE EILISH"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — DARK POP ASMR:
- SOUND: Dark Minimalist Pop, ASMR-Pop, Alt-Pop. Intimacy as a weapon.
- VOCAL: Whispered close-mic singing, dark doubled harmonies. Whisper to raw power contrast. Breathy, never belted.
- THEMES: Anxiety, nightmares, silent power, vulnerability, soft rebellion, youth angst.
- PRODUCTION: Heavy distorted sub-bass, organic ASMR textures, percussive minimalism, silence as structural element. BPM 60-120.
- RULE: CONTRAST (silence vs power, whisper vs scream) is the non-negotiable signature.`
  },
  {
    keywords: ["AYA NAKAMURA"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — FRENCH AFRO-POP:
- SOUND: Afro-Pop Urbaine, Urban Pop-R&B, Dancehall-Pop. French feminine pop with West African groove.
- VOCAL: Powerful recognizable female voice, light autotune, swaying chaloupe dancing flow, ultra-effective hooks.
- THEMES: Female independence, love/heartbreak, dance, self-confidence, nightlife.
- PRODUCTION: Light afro percussion, melodic pop guitars, warm bouncy 808s, bright pop production. BPM 95-115.
- LANGUAGE: French with unique urban slang and invented vocabulary.
- RULE: HOOKS are the absolute priority. Every chorus must be immediately memorizable and danceable.`
  },
  {
    keywords: ["ORELSAN"],
    instructions: `# ARTIST PROFILE — STORYTELLING FR:
- SOUND: Narrative Rap, Storytelling, Intelligent Pop-Rap.
- VOCAL: Natural articulate voice, NO autotune, narrative spoken/sung flow.
- THEMES: Everyday life, tender cynicism, nostalgia, modern life absurdity, dark humor, social observation.
- PRODUCTION: Varied (boom bap, electro, pop), creative samples, cinematic arrangements.
- RULE: STORYTELLING is the signature. Each track tells a complete story with a narrative arc.`
  },
  {
    keywords: ["BURNA BOY"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — AFROBEATS:
- SOUND: Afrobeats, Afro-Fusion, Afro-Pop, Global African Sound.
- VOCAL: Powerful warm male voice, dominant melodic singing, extended range, Nigerian Pidgin cadence.
- THEMES: African pride, party, love, resilience, Nigeria, pan-Africanism, freedom.
- PRODUCTION: Powerful brass section, polyrhythmic percussion (talking drums, congas, shakers), afrobeat guitars. BPM 100-115.
- LANGUAGE: English, Nigerian Pidgin, Yoruba.`
  },
  {
    keywords: ["BAD BUNNY"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — REGGAETON:
- SOUND: Reggaeton, Latin Trap, Perreo, Latin Urban. Puerto Rico street energy.
- VOCAL: Distinctive nasal male voice, syncopated dembow flow, rap/singing alternation, stylized autotune.
- PRODUCTION: Dembow riddim (syncopated kick), heavy 808s, Latin synths, reggaeton percussion. BPM 85-100.
- LANGUAGE: Puerto Rican Spanish, Latin slang.
- RULE: DEMBOW RIDDIM is non-negotiable.`
  },
  {
    keywords: ["DAFT PUNK"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — FRENCH HOUSE:
- SOUND: French House, Electro-Funk, French Touch, Retro-Futurism.
- VOCAL: Vocoder, Talkbox, robotic voice. Very few lyrics — the voice is an instrument.
- PRODUCTION: Vintage synthesizers (Moog, Juno), funk bass loops, side-chain pumping, filtered funk/disco samples.
- RULE: The ROBOTIC VOICE is the signature. Everything goes through the vocoder/talkbox.`
  },
  {
    keywords: ["SOOLKING"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — RAÏ-POP:
- SOUND: Raï-Pop, Modern Algerian Pop, Mediterranean Urban.
- VOCAL: Melodic singing with raï influences, light autotune, emotional bright voice.
- PRODUCTION: Oriental violins, acoustic guitars, oriental percussion (derbouka), modern pop melodies.
- LANGUAGE: French and Darija, festive emotional language.`
  },
  {
    keywords: ["CHEB MAMI", "MAMI"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — RAÏ ORCHESTRAL CROSSOVER:
- SOUND: Orchestral Raï, Mediterranean Crossover, World Fusion Raï.
- VOCAL: High tenor with Arabic melismas, three-octave range, vocal purity without autotune. MALE voice, powerful and emotional.
- PRODUCTION: Raï darbuka percussion, oriental violins, melodic accordion, wah electric guitar. BPM 90-115.
- LANGUAGE: FRENCH and ARABIC (darija) MIXED — NON-NEGOTIABLE. ~50/50.
- RULE: FRENCH-ARABIC MIX is the SIGNATURE.`
  },
  {
    keywords: ["DJALIL PALERMO", "PALERMO"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — URBAN RAÏ / TRAP-RAÏ:
- SOUND: Modern Urban Raï, Trap-Raï Hybrid, Street Raï Youth.
- VOCAL: MALE young confident tenor, hybrid rap-sung delivery. NEVER female voice.
- PRODUCTION: Heavy 808 bass, fast trap hi-hats, rhythmic trap guitar, minimal synth strings. BPM 90-110.
- LANGUAGE: FRENCH and ARABIC (darija) MIXED. ~40% French / 60% darija.
- RULE: This is a MALE artist with a young man's voice.`
  },
  {
    keywords: ["KAARIS"],
    instructions: `# ARTIST PROFILE — HARDCORE TRAP FR:
- SOUND: Hardcore French Trap, Aggressive Street Rap, Sevran 93. NOT metal, NOT rock — pure TRAP RAP.
- VOCAL: Very deep imposing baritone, aggressive choppy flow, NO melodic autotune, percussive hacked delivery.
- PRODUCTION: Heavy 808 sub bass, trap snares, fast triplet hi-hats, dark minor piano, minimal dark synth pads. NO ELECTRIC GUITAR. BPM 135-145.
- RULE: Aggression comes from the VOICE and FLOW, not from rock instruments.`
  },
  {
    keywords: ["NATE DOGG"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — G-FUNK:
- SOUND: G-Funk, West Coast R&B, Gangsta Soul. Smooth and street simultaneously.
- VOCAL: Velvety baritone male voice, ultra-smooth melodic R&B hooks, rich harmonies. Iconic memorable phrasing.
- PRODUCTION: G-Funk synths (Moog/Minimoog), deep funk bass, talk box, groovy slow drums. BPM 88-100.`
  },
  {
    keywords: ["MOBB DEEP", "MOBB", "PRODIGY", "HAVOC"],
    instructions: `# ARTIST PROFILE — QUEENSBRIDGE HARDCORE BOOM BAP:
- SOUND: Hardcore East Coast Boom Bap, Queensbridge Dark Hip-Hop, Grimy Minimalist Street Rap.
- VOCAL: Cold monotone menacing delivery. NO autotune. NO singing. Tight compact bars.
- THEMES: Queensbridge project survival, street paranoia, loyalty/betrayal, nihilistic realism.
- PRODUCTION: Minimalist dark piano loops, hard boom bap drums, eerie string samples, vinyl texture. SPACE in the beat. BPM 90-96.
- RULE: MINIMALIST MENACING DARKNESS. Hook = chant or DJ scratch, NEVER sung chorus.`
  },
  {
    keywords: ["JEDI MIND TRICKS", "JEDI MIND", "JMT", "VINNIE PAZ"],
    instructions: `# ARTIST PROFILE — UNDERGROUND ORCHESTRAL HARDCORE:
- SOUND: Underground Hardcore Hip-Hop, Dark Orchestral Boom Bap, Cinematic Militant Rap.
- VOCAL: Deep gravelly aggressive baritone, staccato militant delivery. Raw power. NO autotune. NO singing.
- THEMES: Militant spirituality, conspiracy, violent street metaphors, anti-establishment, boxing/combat imagery.
- PRODUCTION: Cinematic orchestral samples (cellos, violins), dark choir vocals, hard boom bap drums. BPM 85-95.`
  },
  {
    keywords: ["JORJA SMITH", "JORJA"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — UK NEO-SOUL R&B:
- SOUND: UK Neo-Soul R&B, Warm British Soul, Jazzy Vocal R&B.
- VOCAL: FEMALE warm alto, British soul inflection, natural vibrato. Jazz phrasing. NO heavy autotune.
- THEMES: Emotional honesty, modern love/heartbreak, London life, vulnerability as power.
- PRODUCTION: Live bass guitar, warm Rhodes piano, soft jazz drums, subtle string pads, acoustic guitar. BPM 85-105.
- LANGUAGE: English with British inflection.`
  },
  {
    keywords: ["THE WEEKND", "WEEKND"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — DARK SYNTH-POP R&B:
- SOUND: Dark Synth-Pop R&B, Nocturnal 80s Retro-Futurism.
- VOCAL: Breathy dark falsetto with layered harmonies. Michael Jackson-influenced runs.
- THEMES: Nocturnal hedonism, dark romance, Toronto after-hours, 80s cinematic nostalgia, loneliness in excess.
- PRODUCTION: Pulsing analog synths (80s Juno/Jupiter aesthetic), deep sub bass, crisp drum machine, lush string pads. BPM 100-120.
- RULE: 80s RETRO-FUTURISM and NOCTURNAL DARKNESS are non-negotiable.`
  },
  {
    keywords: ["JUICE WRLD", "JUICE"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — EMO TRAP:
- SOUND: Emo Melodic Rap, Freestyle Emotional Stream, Guitar-Driven Sad Trap.
- VOCAL: Emotional autotune tenor, raw freestyle quality, vulnerable crying delivery.
- PRODUCTION: Electric guitar melodies, deep 808 bass, trap hi-hat rolls, soft piano layers. BPM 140-160.`
  },
  {
    keywords: ["TEMS"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — ALT-AFRO SOUL:
- SOUND: Alt-Afro Soul, Ethereal R&B, Modern African Soul.
- VOCAL: FEMALE ethereal alto-soprano, haunting. Intimate whisper to powerful emotional peak. NEVER rap.
- PRODUCTION: Soft afro percussion, warm bass, ethereal synth pads, fingerpicked acoustic guitar, layered harmonies. BPM 95-110.`
  },
  {
    keywords: ["ASAKE"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — AMAPIANO-FUJI:
- SOUND: Amapiano-Fuji Fusion, Street Lagos, Percussive Afrobeats.
- VOCAL: MALE energetic tenor, street chant/communal delivery. Percussive vocal attacks. Fuji ornamentation.
- PRODUCTION: Deep amapiano bass, heavy log drums, Yoruba talking drum, polyrhythmic fuji percussion. BPM 108-118.
- LANGUAGE: English and Yoruba mixed.`
  },
  {
    keywords: ["JOÉ DWÈT FILÉ", "JOE DWET FILE", "DWET FILE", "DWÈT FILÉ"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — MODERN ZOUK:
- SOUND: Modern Zouk, Caribbean R&B, Romantic Island Pop.
- VOCAL: MALE warm tenor, soft romantic intimate delivery with Creole accent. Natural vibrato. Never aggressive.
- PRODUCTION: Warm zouk bass, drum machine zouk groove, steel pan textures, island acoustic guitar, lush synth pads. BPM 90-105.
- LANGUAGE: FRENCH and ANTILLEAN CREOLE mixed.`
  },
  {
    keywords: ["VALD"],
    instructions: `# ARTIST PROFILE — EXPERIMENTAL ABSURDIST:
- SOUND: Experimental Rap, Ironic Dark Trap, Controlled Absurdism.
- VOCAL: Unpredictable fast flow, constant tone shifts (deep/high, serious/comic/whisper/aggressive), NO autotune. Voice as the instrument of chaos.
- THEMES: Dark irony, social satire, absurdist wordplay, provocation with intelligence, geek/pop culture references.
- PRODUCTION: Hard trap drums, dark synths, occasional beat switches, unexpected samples.
- RULE: UNPREDICTABILITY is the signature. Each section can radically change tone.`
  },
  {
    keywords: ["HAMZA"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — MELODIC TRAP BELGE:
- SOUND: Melodic Trap, Belgian Trap, Sauce Music, Nocturnal Luxury R&B-Rap.
- VOCAL: Omnipresent melodic autotune, suave nonchalant sensual voice. Elastic fluid flow. Melodic singing IS the style.
- THEMES: Luxury, sensuality, nightlife, Belgian cool, women, nocturnal hedonism.
- PRODUCTION: Smooth luxury synths, deep round 808 bass, clean airy hi-hats, nocturnal atmosphere. BPM 130-145.
- RULE: FORBIDDEN dry or technical flow. Everything must be MELODIC, SMOOTH and NONCHALANT.`
  },
  {
    keywords: ["BOOBA"],
    instructions: `# ARTIST PROFILE — HARDCORE CINEMATIC RAP FR:
- SOUND: Hardcore Rap, Dark Trap, Cinematic Rap, Orchestral Street.
- VOCAL: Deep authoritative imposing voice. Dark autotune on choruses only. Choppy precise flow, percussive punchlines.
- PRODUCTION: Dark orchestral (dark choirs, dramatic strings, massive brass), heavy distorted 808s, cinematic scope.
- RULE: POWER and DOMINATION are non-negotiable.`
  },
  {
    keywords: ["TRAVIS SCOTT"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — PSYCHEDELIC TRAP:
- SOUND: Psychedelic Dark Trap, Ambient Atmospheric Rap, Cosmic Autotune.
- VOCAL: Thick artistic autotune, modulated spatial voice, melodic ad-libs throughout. Floating singing.
- THEMES: Cosmic nightlife, festival energy, controlled chaos, psychedelic aesthetics.
- PRODUCTION: Saturated deep bass, atmospheric floating synths, frequent beat switches, phaser/flanger effects, massive reverb. BPM 130-150.
- RULE: BEAT SWITCHES and COSMIC atmosphere are essential.`
  },
  {
    keywords: ["DRAKE"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — MELODIC RAP:
- SOUND: Melodic Rap, R&B-Trap, Emotional Pop-Rap, Nocturnal Luxury.
- VOCAL: Smooth rap/singing transition, light controlled autotune, ultra-memorable hooks.
- THEMES: Complex relationships, masculine vulnerability, success and loneliness, nocturnal Toronto.
- PRODUCTION: Deep warm 808s, R&B melodies (piano, guitar, pads), clean trap drums. BPM 85-145.`
  },
  {
    keywords: ["KENDRICK LAMAR"],
    instructions: `# ARTIST PROFILE — CONSCIOUS LYRICAL RAP:
- SOUND: Conscious Rap, Jazz-Rap, West Coast Lyrical, Experimental Hip-Hop.
- VOCAL: Ultra-complex technical flow, character voice changes, deep storytelling. NO autotune.
- THEMES: Social justice, racial politics, African-American heritage, religion, redemption, Compton identity.
- PRODUCTION: Jazz samples (contrabass, sax, jazz piano), varied drums, live elements, orchestral arrangements.
- RULE: NARRATIVE DEPTH and VOCAL TECHNIQUE are non-negotiable.`
  },
  {
    keywords: ["PLAYBOI CARTI"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — RAGE/VAMP:
- SOUND: Rage Trap, Vamp Aesthetic, Minimalist Punk Rap.
- VOCAL: High-pitched extreme autotune, short repetitive ad-libs, voice as texture/percussion. Textural minimalism.
- THEMES: Vamp aesthetic, punk attitude, mosh pit energy, dark fashion.
- PRODUCTION: Extremely saturated 808, distorted synth stabs, aggressive minimal drums. BPM 150-175.
- RULE: TEXTUAL MINIMALISM is the signature. Voice = rhythm instrument, not lyrical vehicle.`
  },
  {
    keywords: ["KANYE WEST"],
    instructions: `# ARTIST PROFILE — AVANT-GARDE MAXIMALIST:
- SOUND: Avant-Garde Rap, Gospel-Rap, Art-Pop, Maximalist Hip-Hop.
- VOCAL: Expressive varied voice, rap/singing/gospel alternation, unpredictable flow, occasional artistic autotune.
- THEMES: Artistic grandeur, gospel/faith, ego and vulnerability, maximalism as philosophy.
- PRODUCTION: Chopped soul samples, massive gospel choirs, grandiose orchestration, industrial drums, distorted bass.
- RULE: ARTISTIC AMBITION and SOUL SAMPLES/GOSPEL CHOIRS are non-negotiable.`
  },
  {
    keywords: ["LANA DEL REY"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — CINEMATIC DREAM POP:
- SOUND: Dream Pop, Sadcore Americana, Cinematic Languid Beauty.
- VOCAL: Languid trailing female singing, murmurs, ethereal harmonies, low velvety voice. Slow melancholic phrasing.
- THEMES: Hollywood nostalgia, tragic glamour, Americana, toxic love, eternal summer, faded beauty.
- PRODUCTION: Massive reverb, surf guitars, cinematic strings, slow heavy drums, reimagined 60s atmosphere. BPM 70-100.
- RULE: LANGUOR and LUMINOUS MELANCHOLY are the signature. Never uptempo, never aggressive.`
  },
  {
    keywords: ["SNOH AALEGRA", "SNOH"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — CINEMATIC SOUL R&B:
- SOUND: Cinematic Soul R&B, Jazz-Inflected Vocals, Lush Orchestral R&B.
- VOCAL: Breathy smoky female alto with golden jazz timbre. Tenderness to powerful delivery.
- PRODUCTION: Lush orchestral strings, warm bass guitar, jazz piano chords, soft brush drums. BPM 75-95.`
  },
  {
    keywords: ["POST MALONE", "POST"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — GENRE-BENDING MELODIC:
- SOUND: Genre-Bending Melodic Rap, Emotional Crooning, Acoustic-Trap Hybrid.
- VOCAL: Raspy warm male tenor, melodic autotune crooning. Emotional vulnerability, accessible delivery.
- PRODUCTION: Acoustic guitar foundation, 808 bass, trap drums, atmospheric pads. BPM 80-110.`
  },
  {
    keywords: ["BILAL SGHIR", "CHEB BILAL SGHIR"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — MODERN SENTIMENTAL RAÏ:
- SOUND: Modern Sentimental Raï, Lovesick Melancholic Groove.
- VOCAL: Raspy emotional raï tenor with breathy phrasing, sentimental vocal cracks.
- PRODUCTION: Melancholic accordion, electric guitar, darbuka groove, bouzouki/oud textures. BPM 100-115.
- LANGUAGE: DARIJA predominantly with some French.`
  },
  {
    keywords: ["FRED AGAIN", "FRED AGAIN.."],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — EMOTIONAL DANCE:
- SOUND: Emotional Sampling Electronic, Voice-Memo Dance Music, Euphoric Rave Intimacy.
- VOCAL: Pitched voice memo samples as primary melodic element. Human intimacy within electronic dance.
- PRODUCTION: Voice memo hooks, pulsing house bass, breakbeat drums, pitched vocal samples. BPM 125-140.`
  },
  {
    keywords: ["PEGGY GOU"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — HOUSE-DISCO:
- SOUND: Groovy House Disco Fusion, Smooth Tech-House, Warm Analog Dance.
- VOCAL: Smooth house vocal hooks, groove-locking phrasing for dancefloor.
- PRODUCTION: Deep house bass, funky synth riffs, crisp house drums, retro synth arpeggios. BPM 120-128.`
  },
  // ── NEW PROFILES (previously missing) ───────────────────────────────────
  {
    keywords: ["STROMAE"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — ELECTRO-CHANSON BELGE:
- SOUND: Belgian Art-Pop, Electro-Chanson Française, Danceable Melancholy. Dance floor meets poetic vulnerability.
- VOCAL: Theatrical expressive male voice, alternating powerful singing and spoken-sung delivery. Expressive modulation — from whisper to dramatic power.
- THEMES: Danceable melancholy, social critique, fatherhood, modern society loneliness, Belgian-Congolese dual identity, dark humor.
- PRODUCTION: Modern electronic synths, subtle Congolese rumba influences, dancefloor drums, occasional orchestral accents. BPM 110-130.
- LANGUAGE: French, literary vocabulary, accessible irony.
- RULE: The CONTRAST between dark themes and danceable production is the non-negotiable signature.`
  },
  {
    keywords: ["WIZKID"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — SMOOTH AFROBEATS:
- SOUND: Smooth Afrobeats, Effortless Afro-Pop, Lagos Nonchalant Groove.
- VOCAL: Silky male tenor, nonchalant effortless delivery, fluid melodic singing with Yoruba inflection. NEVER aggressive.
- THEMES: Love, dance, Lagos nightlife, African pride, feminine beauty, positive vibes.
- PRODUCTION: Log drums, shekere percussion, warm sub bass, soft synth pads, clean afro guitar licks. BPM 100-112.
- LANGUAGE: English with Yoruba inflections.
- RULE: EFFORTLESS COOL and SMOOTH GROOVE are the DNA. Never forced, never aggressive.`
  },
  {
    keywords: ["AUGXST"],
    isMelodic: false,
    instructions: `# ARTIST PROFILE — DARK AMBIENT CLOUD RAP:
- SOUND: Dark Emotional Cloud Rap, Ambient Trap, Cinematic Nocturnal Bass-Driven.
- VOCAL: Soft autotuned MALE voice that almost sings but never fully commits. Breathy close-mic whisper-croon. NOT R&B singing — closer to murmuring over a dark fog.
- THEMES: Toxic romance, night drives at 3am, luxury sadness, emotional isolation, nocturnal loneliness.
- PRODUCTION: Deep ominous sub bass, dark melodic 808s in half-time, dreamy atmospheric pads, washed-out detuned synths, distant bell plucks. BPM 60-80.
- RULE: NEVER aggressive, NEVER uptempo, NEVER acoustic, NEVER power ballad. Hazy, slow, cinematic fog.`
  },
  {
    keywords: ["SCH"],
    instructions: `# ARTIST PROFILE — CINEMATIC DARK TRAP MARSEILLE:
- SOUND: Cinematic Dark Trap, Orchestral French Rap, Marseille Luxury Darkness. SCH = dark poetry + cinematic production.
- VOCAL: Very deep grave authoritative voice — imposing, measured. Dark melodic autotune on hooks only. Deliberate flow with dramatic pauses.
- THEMES: Marseille luxury darkness, cinematic storytelling, power and domination, dark poetry, strategic patience.
- PRODUCTION: Dark orchestral strings, cinematic brass stabs, heavy distorted 808, crisp trap hi-hats, reverb-drenched atmospheric pads, dramatic build-ups. Hi-end polished mix. BPM 130-140.
- LANGUAGE: French, dark literary vocabulary, Marseille references.
- RULE: CINEMATIC GRANDEUR is non-negotiable. Never cheerful, never lo-fi, never frantic.`
  },
  {
    keywords: ["SZA"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — NEO-SOUL ALTERNATIVE R&B:
- SOUND: Neo-Soul R&B, Alternative R&B, Warm Organic Contemporary Soul.
- VOCAL: Emotional breathy female vocals, neo-soul melisma runs. Switches between whisper intimacy and full emotional belt. Confessional delivery.
- THEMES: Emotional vulnerability, complex relationships, feminine empowerment, confessional storytelling, self-discovery.
- PRODUCTION: Warm organic production — live drums, Rhodes piano, acoustic guitar textures, lush vocal harmonies, ethereal reverb. BPM 80-105.
- RULE: WARMTH and VOCAL INTIMACY are the signature. Production serves the voice.`
  },
  {
    keywords: ["MAES"],
    instructions: `# ARTIST PROFILE — STREET MELODIC TRAP SEVRAN:
- SOUND: Street Melodic Trap, Dark French Rap, Sevran Energy. Raw authenticity above all.
- VOCAL: Deep grave voice with melodic autotune on hooks. Raw street delivery on verses — direct, percussive, authentic.
- THEMES: Sevran street life, loyalty, survival, money, betrayal, nocturnal introspection.
- PRODUCTION: Heavy 808 sub bass, dark piano melodies, crisp trap drums, complex hi-hats, nocturnal street atmosphere. BPM 125-140.
- LANGUAGE: French, street slang, raw Sevran vocabulary.
- RULE: RAW AUTHENTICITY is non-negotiable. Never overly polished or commercial.`
  },
  {
    keywords: ["LACRIM"],
    instructions: `# ARTIST PROFILE — HARDCORE MEDITERRANEAN TRAP:
- SOUND: Hard French Trap, Hardcore Street Rap, Mediterranean Gangster Atmosphere.
- VOCAL: Deep authoritative voice with Mediterranean accent. Hard aggressive rap delivery. No singing.
- THEMES: Mediterranean gangster culture, street business codes, loyalty, Maghreb-French identity, survival.
- PRODUCTION: Aggressive 808, oriental melodic samples (subtle), dark synth stabs, hard snare, triplet hi-hats. BPM 120-135.
- LANGUAGE: French with Mediterranean/Maghreb slang and references.
- RULE: HARD and DIRECT. No singing, no soft, no overly melodic.`
  },
  {
    keywords: ["WERENOI"],
    instructions: `# ARTIST PROFILE — MELODIC EMOTIONAL STREET RAP:
- SOUND: Melodic French Trap, Emotional Street Rap, Close-Mic Sincerity.
- VOCAL: Deep resonant voice with emotional melodic autotune throughout. Sincere raw delivery — never performative.
- THEMES: Street emotions, family loyalty, survival, authentic pain, nocturnal introspection, emotional vulnerability.
- PRODUCTION: Deep sliding 808, melancholic piano, atmospheric pads, crisp trap drums, close-mic intimate feel. BPM 120-135.
- RULE: EMOTIONAL SINCERITY is the DNA. Never purely technical, always felt.`
  },
  {
    keywords: ["MHD"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — AFRO-TRAP ORIGINATOR:
- SOUND: Afro-Trap, African Rhythm Meets French Rap, Bouncy Festive Street.
- VOCAL: Festive energetic male voice with light autotune. African-French bouncy cadence.
- THEMES: Afro-Trap originator identity, African diaspora pride, Paris street party, dance, celebration, cultural roots.
- PRODUCTION: Bouncy 808, African percussion (djembe, sabar, congas), festive synth melodies, bright energy. BPM 100-115.
- RULE: BOUNCE and CELEBRATION are non-negotiable. Never dark, never slow.`
  },
  {
    keywords: ["TAYC"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — FRENCH AFRO-R&B:
- SOUND: French Afro-R&B, Smooth Melodic Pop-R&B, Warm Romantic Nocturnal.
- VOCAL: Rich smooth male tenor with melodic autotune. Singing-dominant delivery. Romantic sensual warmth.
- THEMES: Romance, sensuality, love stories, nocturnal tenderness, smooth lifestyle, diaspora identity.
- PRODUCTION: Lush Rhodes chords, warm sub bass, subtle afro percussion, smooth R&B drums, hi-end polished mix. BPM 90-110.
- RULE: ROMANTIC WARMTH is the signature. Never aggressive, never hard.`
  },
  {
    keywords: ["DADJU"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — CONGOLESE-FRENCH MELODIC R&B:
- SOUND: French Afro-Pop R&B, Romantic Melodic, Congolese-French Fusion.
- VOCAL: Smooth melodic male vocals with autotune. Topline-dominant. Congolese-French cadence with romantic inflection.
- THEMES: Congolese-French romance, family bonds, love stories, nocturnal tenderness, diaspora identity.
- PRODUCTION: Warm 808, lush keyboard pads, afro percussion, Congolese guitar textures, polished romantic atmosphere. BPM 95-115.
- RULE: SINGING DOMINATES throughout. Strong melodic hooks always.`
  },
  {
    keywords: ["LOMEPAL"],
    instructions: `# ARTIST PROFILE — INDIE FRENCH RAP:
- SOUND: Indie French Rap, Emotional Acoustic-Electronic Hybrid, Parisian Skateboard Culture.
- VOCAL: Raw emotional male voice with minimal processing. Confessional intimate delivery. Fluid between rap and singing.
- THEMES: Skateboard culture, Parisian indie scene, emotional vulnerability, youth angst, authenticity.
- PRODUCTION: Acoustic guitar layers, indie synth textures, live drum feel, warm bass. BPM 85-110.
- RULE: RAW CONFESSIONAL INTIMACY is the DNA. No heavy autotune, no hard trap.`
  },
  {
    keywords: ["ANGÈLE"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — BELGIAN ELECTRO-POP:
- SOUND: Belgian Art-Pop, Sophisticated Electro-Pop, Elegant Ironic Pop.
- VOCAL: Crystal clear female vocals with NO autotune. Belgian French accent. Sophisticated pop singing with restraint and elegance.
- THEMES: Belgian pop identity, feminism, self-empowerment, youth, social commentary, subtle irony.
- PRODUCTION: Bright synth arpeggios, electronic drums, punchy pop bass, pop claps, colorful polished production. BPM 110-125.
- RULE: ELEGANCE and SUBTLETY are non-negotiable. Catchy but never vulgar, sophisticated but accessible.`
  },
  {
    keywords: ["REMA"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — AFRORAVE:
- SOUND: Afrorave, Nigerian Pop-Rave, High-Energy Electronic Afrobeats, Festival Sound.
- VOCAL: Youthful male vocals with infectious melodic hooks. High-energy delivery, Afrorave cadence. Never dark or aggressive.
- THEMES: Nigerian afrorave movement, youth culture, global dance floors, high-energy celebration, infectious joy.
- PRODUCTION: Rave synth stabs, punchy afro bass, African percussion, electronic hi-hats. BPM 105-120.
- RULE: HIGH ENERGY and INFECTIOUS GROOVE are mandatory. Never slow, never dark.`
  },
  {
    keywords: ["NAS"],
    instructions: `# ARTIST PROFILE — EAST COAST LYRICAL BOOM BAP:
- SOUND: East Coast Boom Bap, Lyrical Hip-Hop, Golden Era Storytelling Rap.
- VOCAL: Deep male voice, NO autotune, lyrical precision, storytelling narrative cadence. Dense multisyllabic rhymes.
- THEMES: Queens NY street poetry, hip-hop heritage, lyrical supremacy, social commentary, introspection.
- PRODUCTION: Boom bap drums, jazz samples, soul chops, vinyl crackle. BPM 85-95.
- LANGUAGE: English, rich NY street vocabulary, literary references.
- RULE: LYRICAL PRECISION and BOOM BAP are sacred. No trap hi-hats, no autotune, no EDM.`
  },
  {
    keywords: ["NIRO"],
    instructions: `# ARTIST PROFILE — MELODIC EMOTIONAL TRAP BLOIS:
- SOUND: Melodic French Trap, Emotional Street Rap, Raw Authentic Sincerity.
- VOCAL: Deep emotional voice with melodic autotune. Raw authentic delivery. Alternates singing hooks and rap verses.
- THEMES: Blois street life, raw authenticity, emotional vulnerability, overlooked city pride, family and loyalty.
- PRODUCTION: Deep 808, melancholic piano melodies, atmospheric strings, trap drums. BPM 115-130.
- RULE: RAW AUTHENTICITY is non-negotiable. Never overly polished, always sincere.`
  },
  {
    keywords: ["HUGEL"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — FRENCH HOUSE DJ-PRODUCER:
- SOUND: French House, Tropical House, Afro House, Summer Festival Electronic.
- VOCAL: Filtered vocal chops and house vocal samples. Production-driven — no traditional rapper/singer.
- THEMES: French house scene, summer festivals, Ibiza energy, tropical dancefloor vibes.
- PRODUCTION: Four-on-the-floor kick, tropical percussion, house bassline, bright synth melodies, filtered vocal chops. BPM 120-128.
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
- Verlan, street slang ("charbon", "moula", "wesh", "frérot", "daronne", "les keufs").
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
- Raw territorial language — street, violent, menacing. Pure aggression.`,

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

    'MAGHREB': `MAGHREB / RAÏ DNA:
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

    // ── NEW DNA ENTRIES ─────────────────────────────────────────────────────
    'ELECTRO_CHANSON_BELGE': `ELECTRO-CHANSON BELGE (STROMAE) DNA:
- Dance floor production with poetic literary lyrics — the contrast IS the style.
- Electronic synths + subtle Congolese rumba rhythmic influences + orchestral accents.
- Themes: danceable sadness, social critique (unemployment, fatherhood, modern isolation), Belgian-Congolese identity, dark humor.
- Language: French — literary, accessible, ironic. Write poetry that works over a dance beat.
- RULE: The theme must be DARK but the PRODUCTION must make you want to DANCE.`,

    'CINEMATIC_TRAP_FR': `CINEMATIC DARK TRAP (SCH / MARSEILLE) DNA:
- Orchestral grandeur meets trap darkness. Think movie score + French street rap.
- Themes: Marseille luxury, dark poetry, patience, power, cinematic storytelling, measured ambition.
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
- Themes: Hollywood nostalgia, toxic love, tragic glamour, eternal summer, Americana, faded beauty.
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
- Themes: love, heartbreak, dance, feminine or masculine confidence, nightlife, diaspora warmth.
- Production: light afro percussion, melodic pop guitars, warm bouncy 808s, bright pop synths.
- Language: French — accessible urban register, romantic vocabulary, danceable phrasing.`,

    'AFRORAVE_NIGERIAN': `AFRORAVE DNA (REMA / WIZKID):
- High-energy infectious Afrobeats with electronic rave elements or smooth Lagos groove.
- Hooks are global and infectious — designed for mass singalong across cultures.
- Themes: youth celebration, dancefloor, African pride, love, festive Nigerian energy.
- Production: rave synth stabs OR smooth afro bass, African percussion, electronic elements. BPM 100-120.
- Language: English with Yoruba/Pidgin phrases.
- RULE: INFECTIOUS GROOVE is mandatory. Never dark, never slow.`,

    'ELECTRO_POP_BELGE': `ELECTRO-POP BELGE (ANGÈLE) DNA:
- Sophisticated and catchy simultaneously — elegant pop with electronic edge and dry wit.
- Themes: feminism, self-empowerment, Belgian identity, youth irony, social commentary.
- Production: bright synth arps, electronic drums, punchy pop bass, polished colorful sound.
- Vocal: crystal clear, no autotune, sophisticated pop phrasing with Belgian restraint.
- Language: French — elegant, ironic, playful. Never vulgar, always subtle.
- RULE: CATCHY but ELEGANT. Pop with brains.`,

    'INDIE_RAP_FR': `INDIE FRENCH RAP (LOMEPAL) DNA:
- Confessional storytelling over acoustic-electronic hybrid production. Authentic vulnerability.
- Themes: skateboard culture, Parisian indie scene, youth angst, emotional honesty, authenticity.
- Flow: fluid between rap and singing, conversational, never rushed. Raw emotion over technique.
- Production: acoustic guitar layers, indie synths, live drum feel, warm bass. Organic warmth.
- Language: French — intimate confessional register, poetic but accessible, no heavy slang.`,

    'BOOM_BAP_US': `EAST COAST BOOM BAP DNA (NAS):
- Golden era New York hip-hop — lyrical density, boom bap drums, jazz/soul samples.
- Themes: Queens NY street poetry, lyrical supremacy, social commentary, hip-hop heritage, survival and wisdom.
- Flow: dense multisyllabic rhymes, storytelling narrative, classic NY cadence. NO autotune.
- Production: boom bap drums, jazz samples, soul chops, vinyl crackle. BPM 85-95.
- Language: English — rich NY street vocabulary, literary depth, complex wordplay.
- RULE: LYRICAL CRAFT is sacred. Never trap production, never autotune.`,

    'MELODIC_STREET_FR': `MELODIC STREET TRAP (WERENOI / NIRO / MAES) DNA:
- Raw emotional authenticity over dark melodic trap. Sincerity above all.
- Melodic autotune on hooks, percussive raw rap on verses. Close-mic intimate feel.
- Themes: street pain, family loyalty, survival, emotional vulnerability, nocturnal introspection.
- Production: sliding 808s, melancholic piano, atmospheric pads, crisp trap drums.
- Language: French — authentic street vocabulary, emotional directness, no artifice.`,

    'HARDCORE_MEDITERRANEAN': `HARDCORE MEDITERRANEAN TRAP (LACRIM) DNA:
- Hard, direct, authoritative. Mediterranean gangster atmosphere meets French trap.
- No singing — deep authoritative voice, hard percussive rap, dramatic pauses.
- Themes: street codes, Mediterranean identity, Maghreb-French dual identity, loyalty, survival.
- Production: aggressive 808, subtle oriental samples, dark synth stabs, hard snare.
- Language: French with Mediterranean/Maghreb slang references.
- RULE: HARD and DIRECT. Aggression from the voice, not the instruments.`,

    'EXPERIMENTAL_ABSURDIST': `EXPERIMENTAL ABSURDIST RAP (VALD) DNA:
- Unpredictability IS the style. Tone shifts radically mid-verse — serious to ironic to absurd.
- Themes: dark humor, social satire, internet/geek culture, provocation with intelligence, absurdist wordplay.
- Flow: fast technical default, but switches tempo, register, and tone without warning.
- Production: hard trap drums, dark synths, unexpected beat switches and samples.
- Language: French — multi-layered, ironic, references from pop culture/anime/geopolitics.
- RULE: If it feels too predictable, it's wrong. Chaos is controlled.`,
  };

  const matchKeys: string[] = [];

  // French Rap (generic — for artists without more specific match)
  if (upper.includes('JUL') || upper.includes('GAZO') || upper.includes('NINHO') ||
      upper.includes('FREEZE') || upper.includes('ALPHA') ||
      upper.includes('NEKFEU') || upper.includes('ORELSAN') || upper.includes('BOOBA') ||
      upper.includes('KAARIS') || upper.includes('WERENOI') ||
      upper.includes('MAES') || upper.includes('SCH') || upper.includes('LACRIM') ||
      upper.includes('NIRO') || upper.includes('SALIF')) {
    matchKeys.push('RAP_FR');
  }

  // Specific overrides replacing generic RAP_FR for known artists
  if (upper.includes('VALD')) matchKeys.push('EXPERIMENTAL_ABSURDIST');
  if (upper.includes('SCH')) matchKeys.push('CINEMATIC_TRAP_FR');
  if (upper.includes('LACRIM')) matchKeys.push('HARDCORE_MEDITERRANEAN');
  if (upper.includes('WERENOI') || upper.includes('NIRO') || upper.includes('MAES')) matchKeys.push('MELODIC_STREET_FR');
  if (upper.includes('ORELSAN') || upper.includes('LOMEPAL') || upper.includes('NEKFEU')) matchKeys.push('STORYTELLING');
  if (upper.includes('LOMEPAL')) matchKeys.push('INDIE_RAP_FR');

  // DAMSO — specialized dark trap melodic Belgian
  if (upper.includes('DAMSO')) matchKeys.push('DARK_TRAP_MELODIC');

  // Drill FR
  if ((upper.includes('DRILL') && upper.includes('FR')) || upper.includes('GAZO') || upper.includes('SDM')) {
    matchKeys.push('DRILL_FR');
  }

  // Dark Lyrical
  if (upper.includes('FREEZE') || upper.includes('ALPHA WANN') || upper.includes('SDM')) matchKeys.push('DARK_LYRICAL');

  // US/UK Rap
  if (upper.includes('DRAKE') || upper.includes('TRAVIS SCOTT') || upper.includes('KENDRICK') ||
      upper.includes('CARTI') || upper.includes('KANYE') || upper.includes('JUICE WRLD') ||
      upper.includes('POST MALONE') || upper.includes('NATE DOGG') || upper.includes('MOBB DEEP') ||
      upper.includes('JEDI MIND') || upper.includes('VINNIE PAZ') || upper.includes('DR. DRE')) {
    matchKeys.push('US_UK_RAP');
  }

  // NAS — specific boom bap
  if (upper.includes('NAS')) matchKeys.push('BOOM_BAP_US');

  // UK Melodic Drill
  if (upper.includes('CENTRAL CEE') || (upper.includes('UK') && upper.includes('DRILL'))) {
    matchKeys.push('UK_MELODIC_DRILL');
  }

  // Reggaeton / Latin
  if (upper.includes('REGGAETON') || upper.includes('LATIN') || upper.includes('BAD BUNNY') ||
      upper.includes('BALVIN') || upper.includes('KAROL G') || upper.includes('ROSALÍA')) {
    matchKeys.push('REGGAETON');
  }

  // Afrobeats (general)
  if (upper.includes('AFROBEAT') || upper.includes('BURNA') || upper.includes('ASAKE') ||
      upper.includes('MHD') || upper.includes('TIAKOLA')) {
    matchKeys.push('AFROBEATS');
  }

  // Afrorave (REMA + WIZKID)
  if (upper.includes('REMA') || upper.includes('WIZKID')) matchKeys.push('AFRORAVE_NIGERIAN');

  // Afro Soul
  if (upper.includes('TEMS')) matchKeys.push('AFRO_SOUL');

  // Caribbean / Dancehall / Zouk
  if (upper.includes('CARIBBEAN') || upper.includes('DANCEHALL') || upper.includes('KALASH') ||
      upper.includes('ZOUK') || upper.includes('DWET') || upper.includes('DWÈT')) {
    matchKeys.push('CARIBBEAN');
    if (upper.includes('ZOUK') || upper.includes('DWET') || upper.includes('DWÈT')) matchKeys.push('ZOUK');
  }

  // Maghreb / Raï
  if (upper.includes('MAGHREB') || upper.includes('RAÏ') || upper.includes('TIF') ||
      upper.includes('SOOLKING') || upper.includes('BILAL SGHIR') || upper.includes('CHEB MAMI') ||
      upper.includes('DJALIL PALERMO') || upper.includes('RIMK') || upper.includes('KHALED') ||
      upper.includes('ALGERINO')) {
    matchKeys.push('MAGHREB');
  }

  // Afro Melodic / Afro-Trap festif
  if (upper.includes('TIAKOLA') || upper.includes('DADJU')) matchKeys.push('AFRO_MELO');
  if (upper.includes('NISKA') || upper.includes('MHD')) matchKeys.push('AFRO_TRAP_FESTIF');

  // French Afro-Pop / R&B
  if (upper.includes('AYA NAKAMURA') || upper.includes('TAYC') || upper.includes('DADJU')) {
    matchKeys.push('AFRO_POP_RNB_FR');
  }

  // Electro / House / Festival
  if (upper.includes('ELECTRO') || upper.includes('HOUSE') || upper.includes('DAFT') ||
      upper.includes('PEGGY GOU') || upper.includes('HUGEL') || upper.includes('FRED AGAIN')) {
    matchKeys.push('ELECTRO');
  }

  // Stromae — electro-chanson
  if (upper.includes('STROMAE')) matchKeys.push('ELECTRO_CHANSON_BELGE');

  // Angèle — electro-pop belge
  if (upper.includes('ANGÈLE') || upper.includes('ANGELE')) matchKeys.push('ELECTRO_POP_BELGE');

  // Melodic Trap
  if (upper.includes('HAMZA') || upper.includes('MELODIC TRAP') || upper.includes('LAYLOW') ||
      upper.includes('WERENOI') || upper.includes('VACRA') || upper.includes('NINHO')) {
    matchKeys.push('MELODIC_TRAP');
  }

  // Hardcore
  if (upper.includes('HARDCORE') || upper.includes('BOOBA') || upper.includes('KAARIS') ||
      upper.includes('MOBB DEEP') || upper.includes('JEDI MIND') || upper.includes('VINNIE PAZ')) {
    matchKeys.push('HARDCORE');
  }

  // Neo-Soul / R&B
  if (upper.includes('SZA') || upper.includes('SNOH') || upper.includes('SADE') ||
      upper.includes('JORJA') || upper.includes('MONSIEUR NOV')) {
    matchKeys.push('NEO_SOUL');
  }

  // Synth-Pop / Dark R&B
  if (upper.includes('THE WEEKND') || upper.includes('WEEKND') || upper.includes('AUGXST')) {
    matchKeys.push('SYNTH_POP');
  }

  // Cloud Rap
  if (upper.includes('PNL') || upper.includes('ADEMO') || upper.includes('CLOUD')) {
    matchKeys.push('CLOUD_RAP');
  }

  // Dream Pop / Sadcore
  if (upper.includes('LANA DEL REY') || upper.includes('LANA')) matchKeys.push('DREAM_POP_SADCORE');

  // Dark Pop ASMR
  if (upper.includes('BILLIE EILISH') || upper.includes('BILLIE')) matchKeys.push('DARK_POP_ASMR');

  // Melodic Street Pop (JUL / Marseille)
  if (upper.includes('JUL') || (upper.includes('MARSEILLE') && upper.includes('POP'))) {
    matchKeys.push('MELODIC_STREET_POP');
  }

  if (matchKeys.length === 0) {
    return `GENERIC URBAN CONTEMPORARY:
- Match vocal style and flow EXACTLY to the Sonic DNA above. No assumptions.
- Production: use the artist's production fingerprint as defined in Sonic DNA only.
- Language: match the artist's primary language from cultural anchors.
- Do NOT default to R&B or melodic trap — use the Sonic DNA as the ONLY guide.`;
  }

  const unique = [...new Set(matchKeys)];
  return unique.map(k => dnaMap[k]).filter(Boolean).join('\n\n');
}
