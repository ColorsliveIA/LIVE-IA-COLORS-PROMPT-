/**
 * Artist-specific instruction profiles for Gemini prompt generation.
 *
 * OPTIMIZATION: Instead of building 25+ conditional strings and injecting them ALL
 * into every prompt (wasting thousands of tokens), we store profiles in a dictionary
 * and inject ONLY the matching one(s). This saves ~80% of prompt tokens per request.
 *
 * POLICY: NO direct artist references — no artist-specific slang, gimmicks,
 * catchphrases, or identifiable ad-libs. Only generic style/production descriptors.
 *
 * RULE: ALL style/production descriptors in `instructions` must describe the SOUND,
 * not generate French-language content. The SUNO STYLE PROMPT is ALWAYS in English.
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
    instructions: `# ARTIST PROFILE — MELODIC MARSEILLE STREET POP:
- SOUND: Melodic Street Pop, Marseille Urban, Emotional Autotune, Mediterranean Sun-Kissed.
- VOCAL: Omnipresent melodic autotune — it IS the signature. High nasal pitch, always singing. Ultra-melodic fast flow with characteristic note rises. NEVER dry rap.
- THEMES: Neighborhood loyalty, street love, Marseille pride, sunshine and melancholy, family, everyday life. Direct popular language.
- PRODUCTION: Bright or melancholic melodic piano (SIGNATURE), punchy bouncy 808s, fast clean hi-hats, bright digital synths, light synthetic percussion. Solar yet emotional atmosphere. BPM 120-130.
- LANGUAGE: French with natural Marseille accent elisions and open vowels.
- RULE: Melodic autotune is NON-NEGOTIABLE. Singing IS the style. FORBIDDEN to produce dry/technical rap for this artist.`
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
    instructions: `# ARTIST PROFILE — DARK FRENCH TRAP / BRUSSELS NOIR (RAPPER — NOT A SINGER):
- SOUND: Dark French Trap-Drill crossover, Belgian Underground Noir. Two production modes, both built on RAP flow. NEVER R&B, NEVER pop sensuelle, NEVER afro-pop, NEVER congolese pop.
- VOCAL MODE 1 — DRILL/RAW (142 BPM): Masculine raspy vocals, grainy authoritative timbre, nonchalant delivery. Staccato rap flow with heavy phrase-end doubling and short echo delays. Seine-Saint-Denis 93 accent. Pure rap, NO melodic singing.
- VOCAL MODE 2 — NOCTURNAL TRAP (130 BPM): Masculine vocals with heavy metallic autotune (NOT romantic R&B autotune — cold metallic Belgian autotune). Honeyed nasal tone, laid-back nonchalant rap-crooner. Still a RAPPER with autotune, not a singer.
- THEMES: Raw sexuality as dark philosophy, existential introspection, toxic relationships, street duality, intellectual provocation, Belgian noir identity. Rich complex vocabulary, permanent double meaning.
- PRODUCTION MODE 1 (DRILL): Moody minor key piano loops, haunting atmospheric textures, sliding distorted sub-bass 808, crisp metallic triplet hi-hats, hard-hitting snare. 142 BPM. Analog saturation, wide soundstage, nocturnal urban street vibe, close-mic intimacy.
- PRODUCTION MODE 2 (NOCTURNAL): Nocturnal atmospheric pads, filtered Rhodes, heavy sliding 808 sub-bass, crisp digital trap drums, lush reverb and delay, wide soundstage. 130 BPM, G minor. Sophisticated expensive soundscape, intimate close-mic.
- LANGUAGE: Sophisticated French mixed with Belgian slang. Rich vocabulary, complex metaphors, permanent double meaning.
- RULE: DAMSO IS A RAPPER. He raps with autotune — he does NOT sing. The autotune is cold and metallic, NOT warm R&B autotune. FORBIDDEN: R&B, pop, afro-pop, congolese pop, warm melodic singing, bright cheerful production.`
  },
  {
    keywords: ["GAZO"],
    instructions: `# ARTIST PROFILE — FRENCH DRILL:
- SOUND: French Drill, Dark Trap, Aggressive Street Rap.
- VOCAL: Deep aggressive voice, characteristic drill flow (sliding, syncopated), slight dark autotune on some passages. Fast percussive delivery.
- THEMES: Street, violence, competition, dirty money, survival, intimidation. Very RAW language.
- PRODUCTION: Characteristic drill sliding 808s, frantic hi-hats (fast triplets), dark menacing melodies (piano/synth), metallic percussion. BPM 140-145.
- LANGUAGE: French hardcore street slang, verlan, street vocabulary. Assumed vulgarity.
- RULE: The sound MUST be threatening and dark. No joyful melody, no pop.`
  },
  {
    keywords: ["FREEZE CORLEONE", "FREEZE"],
    instructions: `# ARTIST PROFILE — DARK LYRICAL OCCULT:
- SOUND: Dark Boom Bap, French Horrorcore, Lyrical Dark Trap.
- VOCAL: Monotone deep voice, technical dense flow, NO autotune, fast delivery with complex placements. Cold detached tone.
- THEMES: Conspiracy references, occult references, lyrical supremacy, intellectual provocation, obscure samples, rap as verbal martial art.
- PRODUCTION: Dark samples (detoured jazz/soul/classical), heavy boom bap drums, deep bass, cinematic bleak atmosphere. Sometimes minimalist trap beats.
- LANGUAGE: Very dense vocabulary, multiple cultural references (anime, history, geopolitics), layered punchlines.
- RULE: The flow must be SURGICAL and COLD. No apparent emotion, pure technique.`
  },
  {
    keywords: ["NEKFEU"],
    instructions: `# ARTIST PROFILE — LYRICAL POP-RAP:
- SOUND: Lyrical Rap, Pop-Rap, Poetic Modern Boom Bap.
- VOCAL: Clear articulate voice, NO autotune, technical flow with accelerations, capable of singing on choruses. Impeccable diction.
- THEMES: Travel, love, introspection, literature, soft melancholy, beauty of everyday, Paris, creativity.
- PRODUCTION: Bright melodies (acoustic guitars, piano, warm jazz/soul samples), organic drums, warm round bass.
- LANGUAGE: French with light slang, poetic metaphors, literary and cinematic references.
- RULE: WRITING is the absolute priority. Multisyllabic rhymes, poetic imagery, storytelling.`
  },
  {
    keywords: ["LAYLOW"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — DIGITAL EMOTION:
- SOUND: Digital Trap, Experimental R&B-Rap, Futuristic Melodic.
- VOCAL: Artistic experimental autotune, voice modulated between rap and singing, creative vocal effects. Elastic unpredictable flow.
- THEMES: Technology and emotions, digital loneliness, dystopian love, futurism, modern anxiety, digital aesthetic.
- PRODUCTION: Futuristic atmospheric synths, deep 808s, experimental electronic textures, manipulated samples, subtle glitches. Cinematic immersive atmosphere.
- LANGUAGE: Modern French, tech/digital vocabulary, futuristic metaphors.
- RULE: The CONCEPTUAL and CINEMATIC aspect is essential.`
  },
  {
    keywords: ["SDM"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — AFRO-STREET MELODIC:
- SOUND: Afro-Trap Melodic, Street Melodic, Dark Afro.
- VOCAL: Melodic autotune, deep poised voice, melodic flow with rap accelerations. Alternation between dark singing and technical rap.
- THEMES: Dark street, nocturnal melancholy, bitter success, neighborhood, loyalty, betrayal.
- PRODUCTION: Deep 808s, dark melodies (piano, guitar), subtle afro influences in percussion, complex hi-hats. Nocturnal atmosphere.`
  },
  {
    keywords: ["NISKA"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — AFRO-TRAP FESTIF:
- SOUND: Afro-Trap, Dancehall-Rap, Festive Street.
- VOCAL: Recognizable voice, light autotune, bouncy dancing flow, rap/singing alternation. Festive contagious energy.
- THEMES: Party, dance, neighborhood, success, energy, positive street energy.
- PRODUCTION: Afro percussion (synthetic congas, djembe), bouncy 808s, festive melodies, dancehall influences. BPM 100-115.`
  },
  {
    keywords: ["CENTRAL CEE"],
    instructions: `# ARTIST PROFILE — UK MELODIC DRILL:
- SOUND: UK Rap, Melodic Drill, London Street.
- VOCAL: Clear voice, UK drill flow (sliding, syncopated), light melodic autotune on hooks. Marked London accent.
- THEMES: London, hustling, flexing, relationships, success, UK street life.
- PRODUCTION: Drill sliding 808s, triplet hi-hats, melancholic melodies (piano, guitar), UK drill atmosphere. BPM 140-145.
- LANGUAGE: English UK, London slang (mandem, ting, innit), MLE accent.
- RULE: UK Drill is distinct from FR Drill — more melodic, less aggressive, more "cool".`
  },
  {
    keywords: ["ALPHA WANN"],
    instructions: `# ARTIST PROFILE — ELITE TECHNICAL FR:
- SOUND: Elite Technical French Rap, Modern Boom Bap, Dark Luxury Minimalism.
- VOCAL: Dry baritone voice, NO AUTOTUNE, hyper-precise articulation, fast technical delivery, cold controlled aggression. No singing.
- PRODUCTION: Dark minimalist piano, subtle bell textures, heavy percussive drums, minimal bass line. FORBIDDEN: jazzy sounds, soulful samples, warm swing.
- RULE: The flow must be a demonstration of pure technique, cold and surgical.`
  },
  {
    keywords: ["KALASH"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — CARIBBEAN TRAP:
- SOUND: Modern Dancehall, Caribbean Trap, Ragga-Rap.
- VOCAL: Mix of melodic singing / rap, light autotune, marked Antillean accent. Bouncy dancing flow.
- THEMES: Caribbean identity, island pride, party, tropical melancholy, street, exile.
- PRODUCTION: Dancehall riddims, tropical percussion, bouncy 808s, atmospheric synths, tropical melodies. BPM 90-110.
- LANGUAGE: Mix of MARTINICAN CREOLE and FRENCH. Authentic Antillean expressions.`
  },
  {
    keywords: ["TIF"],
    instructions: `# ARTIST PROFILE — MAGHREB MELODIC:
- SOUND: Raï-Trap, Algerian Urban Melodic, Mediterranean Melancholy.
- VOCAL: Melodic with raï influences, controlled autotune, emotional voice, singing/rap alternation.
- THEMES: Algiers nostalgia (Houma), exile, sun-drenched melancholy, two shores, destiny (Mektoub).
- PRODUCTION: OUD, MANDOLE or DERBOUKA integrated. Melancholic acoustic guitars, deep 808s, oriental melodies.
- LANGUAGE: 50/50 mix FRENCH and DARIJA (Algerian Arabic). Slang: 'Sahbi', 'Khoya', 'Dz'.`
  },
  {
    keywords: ["TIAKOLA"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — AFRO MELODIC:
- SOUND: Pure Afro-Melodic, Melo, Afro-Pop Urbaine.
- VOCAL: Ultra-melodic, PERMANENT MELODIC AUTOTUNE, high bright voice, constant tonality variations, rich harmonies.
- THEMES: Success, love, loyalty, party, dance, neighborhood.
- PRODUCTION: Afro percussion (congas, shakers, synthetic djembe), melodic guitars, warm bouncy 808s, bright synths. BPM 100-120.
- RULE: MELODY is EVERYTHING. Every syllable is sung with melodic variations.`
  },
  {
    keywords: ["PNL", "ADEMO", "NOS"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — CLOUD RAP:
- SOUND: Atmospheric Cloud Rap, Melodic Trap, Emotional Autotune.
- VOCAL: OMNIPRESENT and artistic autotune, floating voice, slow spatial flow. Melodic singing IS the style. Doubled layered voices for ethereal effect.
- THEMES: Solitude, family, bitter success, urban contemplation, nostalgia, deep melancholy.
- PRODUCTION: Atmospheric floating synths, deep slow 808s, ethereal melodies (piano, pads), massive reverb, minimalist but immersive. BPM 70-90.
- RULE: The FLOATING and MELANCHOLIC atmosphere is non-negotiable. FORBIDDEN fast or aggressive flow.`
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
    instructions: `# ARTIST PROFILE — DARK POP:
- SOUND: Dark Pop, Alt-Pop, Minimalist, ASMR-Pop.
- VOCAL: Whispered singing, very close to mic, darkly doubled harmonized voices. Whisper to raw power contrast.
- PRODUCTION: Heavy distorted sub-bass, organic ASMR-like textures, percussive minimalism, silence as instrument.
- RULE: CONTRAST silence/power and whisper/scream is the signature.`
  },
  {
    keywords: ["AYA NAKAMURA"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — AFRO-POP FR:
- SOUND: Afro-Pop, Urban Pop-R&B, Dancehall-Pop.
- VOCAL: Powerful recognizable voice, light autotune, swaying dancing flow, ultra-effective memorable hooks.
- THEMES: Female independence, love/heartbreak, dance, self-confidence.
- PRODUCTION: Light afro percussion, melodic pop guitars, warm bouncy 808s, bright pop production. BPM 95-115.
- RULE: HOOKS are the priority. Every chorus must be immediately memorizable and danceable.`
  },
  {
    keywords: ["ORELSAN"],
    instructions: `# ARTIST PROFILE — STORYTELLING FR:
- SOUND: Narrative Rap, Storytelling, Intelligent Pop-Rap.
- VOCAL: Natural articulate voice, NO autotune, narrative spoken/sung flow.
- THEMES: Everyday life, tender cynicism, nostalgia, modern life absurdity, dark humor.
- PRODUCTION: Varied productions (boom bap, electro, pop), creative samples, cinematic arrangements.
- RULE: STORYTELLING is the signature. Each track tells a complete story with a narrative arc.`
  },
  {
    keywords: ["BURNA BOY"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — AFROBEATS:
- SOUND: Afrobeats, Afro-Fusion, Afro-Pop.
- VOCAL: Powerful warm voice, dominant melodic singing, extended range.
- THEMES: African pride, party, love, resilience, Nigeria, pan-Africanism.
- PRODUCTION: Powerful brass section, polyrhythmic percussion (talking drums, congas, shakers), afrobeat guitars. BPM 100-120.
- LANGUAGE: English, Nigerian Pidgin, Yoruba.`
  },
  {
    keywords: ["BAD BUNNY"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — REGGAETON:
- SOUND: Reggaeton, Latin Trap, Perreo, Latin Urban.
- VOCAL: Deep distinctive voice, syncopated dembow flow, rap/singing alternation, stylized autotune.
- PRODUCTION: Dembow riddim (characteristic syncopated kick), heavy 808s, Latin synths, reggaeton percussion. BPM 90-100.
- LANGUAGE: Puerto Rican Spanish, Latin slang.
- RULE: DEMBOW RIDDIM is non-negotiable.`
  },
  {
    keywords: ["DAFT PUNK"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — FRENCH HOUSE:
- SOUND: French House, Electro-Funk, French Touch.
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
- LANGUAGE: FRENCH and ARABIC (darija) MIXED — NON-NEGOTIABLE. Alternate with [in french] / [in arabic] tags. ~50/50.
- RULE: FRENCH-ARABIC MIX is Cheb Mami's SIGNATURE.`
  },
  {
    keywords: ["DJALIL PALERMO", "PALERMO", "DJ PALERMO"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — URBAN RAÏ / TRAP-RAÏ:
- SOUND: Modern Urban Raï, Trap-Raï Hybrid, Street Raï Youth.
- VOCAL: MALE young confident tenor, hybrid rap-sung delivery. NEVER female voice. Urban energy with melodic hooks.
- PRODUCTION: Heavy 808 bass, fast trap hi-hats, rhythmic trap guitar, minimal synth strings. BPM 90-110.
- LANGUAGE: FRENCH and ARABIC (darija) MIXED. Tag [in french] and [in arabic]. ~40% French / 60% darija.
- RULE: This is a MALE artist with a young man's voice.`
  },
  {
    keywords: ["KAARIS"],
    instructions: `# ARTIST PROFILE — HARDCORE TRAP FR:
- SOUND: Hardcore French Trap, Aggressive Street Rap, Sevran 93. NOT metal, NOT rock — pure TRAP RAP.
- VOCAL: Very deep imposing baritone, aggressive choppy flow, NO melodic autotune, percussive hacked delivery.
- PRODUCTION: Heavy 808 sub bass, trap snares, fast triplet hi-hats, dark minor piano, minimal dark synth pads. NO ELECTRIC GUITAR. NO ROCK RIFFS. BPM 135-145.
- RULE: AGGRESSIVE TRAP RAP only. Aggression comes from the VOICE and FLOW, not from rock instruments.`
  },
  {
    keywords: ["NATE DOGG"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — G-FUNK:
- SOUND: G-Funk, West Coast R&B, Gangsta Soul.
- VOCAL: Velvety baritone voice, ultra-smooth melodic hooks, rich harmonies.
- PRODUCTION: G-Funk synths (Moog/Minimoog), deep funk bass, talk box, groovy slow drums. BPM 90-100.`
  },
  {
    keywords: ["MOBB DEEP", "MOBB", "PRODIGY", "HAVOC"],
    instructions: `# ARTIST PROFILE — QUEENSBRIDGE HARDCORE BOOM BAP:
- SOUND: Hardcore East Coast Boom Bap, Queensbridge Dark Hip-Hop, Grimy Minimalist Street Rap. NOT melodic, NOT trap.
- VOCAL: Dual delivery — Prodigy (nasal cold monotone menacing baritone) and Havoc (deeper gritty complement). Tight compact bars, cold detached delivery. NO autotune. NO singing.
- THEMES: Queensbridge project survival, street paranoia, loyalty/betrayal, nihilistic realism, NYC hardcore.
- PRODUCTION: Havoc minimalist dark piano loops, hard boom bap drums (crisp snare, punchy kick), eerie string samples, gritty vinyl texture. SPACE in the beat. BPM 90-96.
- LANGUAGE: English.
- RULE: MINIMALIST MENACING DARKNESS. The beat breathes through SPACE, not layers. Hook = chant or DJ scratch, NEVER a sung chorus.`
  },
  {
    keywords: ["JEDI MIND TRICKS", "JEDI MIND", "JMT", "VINNIE PAZ"],
    instructions: `# ARTIST PROFILE — UNDERGROUND ORCHESTRAL HARDCORE:
- SOUND: Underground Hardcore Hip-Hop, Dark Orchestral Boom Bap, Cinematic Militant Rap. Stoupe the Enemy of Mankind production.
- VOCAL: Vinnie Paz — deep gravelly aggressive baritone, Italian-American Philly accent, staccato militant delivery. Raw unpolished power. NO autotune. NO singing.
- THEMES: Militant spirituality, conspiracy, violent street metaphors, Italian-American identity, anti-establishment, boxing/combat imagery.
- PRODUCTION: Cinematic orchestral samples (cellos, violins, full strings), dark choir vocals, Middle Eastern/Arabic melodic samples, hard boom bap drums. Movie-score darkness. BPM 85-95.
- LANGUAGE: English.
- RULE: ORCHESTRAL CINEMATIC DARKNESS is the DNA. Stoupe's production = classical music meets street violence. Hook = orchestral break or scratched sample, NEVER pop melody.`
  },
  {
    keywords: ["THE WEEKND", "WEEKND"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — DARK SYNTH-POP R&B:
- SOUND: Dark Synth-Pop R&B, Nocturnal 80s Retro-Futurism. NOT daytime pop — this is dark hedonistic R&B.
- VOCAL: Breathy dark falsetto with layered harmonies. Michael Jackson-influenced runs. Vulnerability to hedonistic confidence.
- THEMES: Nocturnal hedonism, dark romance, Toronto after-hours, 80s cinematic nostalgia, loneliness in excess.
- PRODUCTION: Pulsing analog synths (80s Juno/Jupiter aesthetic), deep sub bass, crisp drum machine, lush string pads. BPM 100-120.
- LANGUAGE: English.
- RULE: 80s RETRO-FUTURISM and NOCTURNAL DARKNESS are non-negotiable.`
  },
  {
    keywords: ["JUICE WRLD", "JUICE"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — EMO TRAP:
- SOUND: Emo Melodic Rap, Freestyle Emotional Stream, Guitar-Driven Sad Trap.
- VOCAL: Emotional autotune tenor with raw freestyle quality, vulnerable crying delivery.
- PRODUCTION: Electric guitar melodies, deep 808 bass with trap patterns, trap hi-hat rolls, soft piano layers, lo-fi warmth. BPM 140-160.
- LANGUAGE: English.`
  },
  {
    keywords: ["TEMS"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — ALT-AFRO SOUL:
- SOUND: Alt-Afro Soul, Ethereal R&B, Modern African Soul.
- VOCAL: FEMALE ethereal alto-soprano, haunting. Intimate whisper to powerful emotional peak. NEVER rap — everything is sung.
- PRODUCTION: Soft afro percussion, warm bass, ethereal synth pads, fingerpicked acoustic guitar, layered harmonies. BPM 95-110.
- LANGUAGE: English with Nigerian inflection.`
  },
  {
    keywords: ["ASAKE"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — AMAPIANO-FUJI:
- SOUND: Amapiano-Fuji Fusion, Street Lagos, Percussive Afrobeats.
- VOCAL: MALE energetic tenor, street chant/communal delivery. Percussive vocal attacks. Fuji ornamentation.
- PRODUCTION: Deep amapiano bass, heavy log drums, Yoruba talking drum, fuji polyrhythmic percussion. BPM 108-118.
- LANGUAGE: English and Yoruba mixed.`
  },
  {
    keywords: ["JOÉ DWÈT FILÉ", "JOE DWET FILE", "DWET FILE", "DWÈT FILÉ"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — MODERN ZOUK:
- SOUND: Modern Zouk, Caribbean R&B, Romantic Island Pop.
- VOCAL: MALE warm tenor, soft romantic intimate delivery with Creole accent. Natural vibrato. Never aggressive.
- PRODUCTION: Warm zouk bass, drum machine with zouk groove, steel pan textures, island acoustic guitar, lush synth pads. BPM 90-105.
- LANGUAGE: FRENCH and ANTILLEAN CREOLE mixed. Tag [in french] and [in créole].`
  },
  {
    keywords: ["VALD"],
    instructions: `# ARTIST PROFILE — EXPERIMENTAL ABSURDIST:
- SOUND: Experimental Rap, Ironic, Absurdist.
- VOCAL: Unpredictable fast flow, constant tone variations (deep/high, serious/comic), no autotune.
- THEMES: Absurd, dark irony, social satire, provocation, trash humor.
- RULE: UNPREDICTABILITY is the signature. Each section can change tone radically.`
  },
  {
    keywords: ["HAMZA"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — MELODIC TRAP BELGE:
- SOUND: Melodic Trap, R&B-infused Rap, Belgian Trap, Sauce Music.
- VOCAL: Omnipresent melodic autotune, suave nonchalant sensual voice. Elastic fluid flow. Melodic singing IS the style.
- PRODUCTION: Smooth luxurious synths, deep round 808 bass, clean airy hi-hats, intense nocturnal atmosphere. BPM 130-145.
- RULE: FORBIDDEN dry or technical flow. Everything must be MELODIC, SMOOTH and NONCHALANT.`
  },
  {
    keywords: ["BOOBA"],
    instructions: `# ARTIST PROFILE — HARDCORE RAP FR:
- SOUND: Hardcore Rap, Dark Trap, Drill, Cinematic Rap.
- VOCAL: Deep authoritative imposing voice. Dark autotune on choruses only. Choppy precise flow, percussive punchlines.
- PRODUCTION: Dark orchestral (dark choirs, dramatic strings), heavy distorted 808s, minimalist but massive. Cinematic production.
- RULE: POWER and DOMINATION are non-negotiable.`
  },
  {
    keywords: ["TRAVIS SCOTT"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — PSYCHEDELIC TRAP:
- SOUND: Psychedelic Trap, Dark Melodic Trap, Ambient Trap.
- VOCAL: Thick artistic autotune, modulated voice, melodic generic ad-libs. Floating spatial singing.
- PRODUCTION: Saturated deep bass, atmospheric floating synths, frequent beat switches, phase/flanger effects, massive reverb. BPM 130-150.
- RULE: BEAT SWITCHES and COSMIC atmosphere are essential.`
  },
  {
    keywords: ["DRAKE"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — MELODIC RAP:
- SOUND: Melodic Rap, R&B-Trap, Emotional Pop-Rap.
- VOCAL: Smooth rap/singing transition, light controlled autotune, ultra-memorable hooks.
- PRODUCTION: Deep warm 808s, R&B melodies (piano, guitar, pads), clean trap drums. BPM 130-145.
- LANGUAGE: English.`
  },
  {
    keywords: ["KENDRICK LAMAR"],
    instructions: `# ARTIST PROFILE — CONSCIOUS RAP:
- SOUND: Conscious Rap, Jazz-Rap, West Coast Lyrical, Experimental Hip-Hop.
- VOCAL: Ultra-complex technical flow, voice and character changes, deep storytelling. NO autotune.
- PRODUCTION: Jazz samples (contrabass, sax, jazz piano), varied drums, live elements, orchestral arrangements.
- LANGUAGE: English, dense storytelling, deep metaphors.
- RULE: NARRATIVE DEPTH and VOCAL TECHNIQUE are non-negotiable.`
  },
  {
    keywords: ["PLAYBOI CARTI"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — RAGE/VAMP:
- SOUND: Rage, Vamp, Minimalist Trap, Punk Rap.
- VOCAL: Baby voice, extreme autotune, high repetitive voice, minimalist flow. Words are TEXTURES.
- PRODUCTION: 8-bit and distorted synths, extremely saturated bass, aggressive minimalist drums, dark repetitive melodies. BPM 150-175.
- RULE: TEXTUAL MINIMALISM is the signature.`
  },
  {
    keywords: ["KANYE WEST"],
    instructions: `# ARTIST PROFILE — AVANT-GARDE RAP:
- SOUND: Avant-Garde Rap, Gospel-Rap, Art-Pop, Maximalist Hip-Hop.
- VOCAL: Expressive varied voice, rap/singing alternation, unpredictable flow, occasional artistic autotune.
- PRODUCTION: Chopped soul samples, massive gospel choirs, grandiose orchestration, radical production changes.
- RULE: ARTISTIC AMBITION and SOUL SAMPLES/CHOIRS are non-negotiable.`
  },
  {
    keywords: ["LANA DEL REY"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — DREAM POP:
- SOUND: Dream Pop, Sadcore, Cinematic, Americana.
- VOCAL: Languid trailing singing, murmurs, ethereal harmonies, low velvety voice. Slow melancholic phrasing.
- PRODUCTION: Massive reverb, surf guitars, cinematic strings, slow heavy drums, reimagined 60s atmosphere.
- LANGUAGE: Poetic English, vintage American references.
- RULE: LANGUOR and LUMINOUS MELANCHOLY are the signature.`
  },
  {
    keywords: ["SNOH AALEGRA", "SNOH"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — CINEMATIC SOUL R&B:
- SOUND: Cinematic Soul R&B, Jazz-Inflected Vocals, Lush Orchestral R&B.
- VOCAL: Breathy smoky alto with golden jazz timbre. Sade/Amy Winehouse lineage. Tenderness to powerful delivery.
- PRODUCTION: Lush orchestral strings, warm bass guitar, jazz piano chords, soft brush drums. BPM 75-95.
- LANGUAGE: English.`
  },
  {
    keywords: ["POST MALONE", "POST"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — GENRE-BENDING MELODIC:
- SOUND: Genre-Bending Melodic Rap-Rock, Emotional Crooning over Trap Beats, Acoustic-Electronic Hybrid.
- VOCAL: Raspy warm tenor with melodic crooning. Genre-bending versatility. Emotional vulnerability.
- PRODUCTION: Heavy 808 bass with acoustic guitar melodies, trap hi-hats, rock guitar layers. BPM 130-145.
- LANGUAGE: English.`
  },
  {
    keywords: ["BILAL SGHIR", "CHEB BILAL SGHIR"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — MODERN SENTIMENTAL RAÏ:
- SOUND: Modern Sentimental Raï, Lovesick Melancholic Groove, Emotional Arabic Romance.
- VOCAL: Raspy emotional raï tenor with breathy phrasing. Darija love delivery. Sentimental vocal cracks.
- THEMES: Romantic heartbreak, lovesickness, late-night emotional intensity.
- PRODUCTION: Melancholic accordion lead, electric guitar with bluesy bends, steady darbuka groove, bouzouki/oud textures. BPM 100-115.
- LANGUAGE: DARIJA (Algerian Arabic) predominantly with some French phrases.`
  },
  {
    keywords: ["FRED AGAIN", "FRED AGAIN.."],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — EMOTIONAL DANCE:
- SOUND: Emotional Sampling Electronic, Voice-Memo Dance Music, Euphoric Rave Intimacy.
- VOCAL: Pitched voice memo samples as primary vocal element. Human intimacy within electronic dance.
- PRODUCTION: Voice memo samples as melodic hooks, pulsing house bass, breakbeat drums, pitched vocal samples. BPM 125-140.
- LANGUAGE: English (manipulated samples).`
  },
  {
    keywords: ["PEGGY GOU"],
    isMelodic: true,
    instructions: `# ARTIST PROFILE — HOUSE-DISCO:
- SOUND: Groovy House Disco Fusion, Smooth Tech-House, Warm Analog Dance.
- VOCAL: Smooth house vocal hooks, groove-locking phrasing for dancefloor.
- PRODUCTION: Deep house bass, funky synth riffs, crisp house drums, retro synth arpeggios. BPM 120-128.
- LANGUAGE: English and Korean occasional phrases.`
  }
];

/**
 * Lookup matching artist profiles by inspiredBy string.
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
 * Check if the artist has a melodic profile (singing-dominant).
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
 * ALL content is in English to avoid contaminating Suno style prompts.
 */
export function getRelevantWritingDNA(inspiredBy: string, genre: string): string {
  const upper = (inspiredBy + ' ' + genre).toUpperCase();

  const dnaMap: Record<string, string> = {
    'RAP_FR': `FRENCH RAP DNA:
- Use Verlan, generic street slang (ex: "charbon", "moula", "wesh", "frérot").
- Themes: Street, melancholy, success, betrayal. Raw language, local color.
- Flow: Choppy or floating (Cloud style). Prioritize internal rhymes.`,

    'MELODIC_STREET_POP': `MELODIC STREET POP / MARSEILLE DNA:
- Omnipresent melodic autotune, voice always singing.
- Themes: Neighborhood loyalty, street love, sunshine and melancholy.
- Flow: Ultra-melodic, fast, bouncy. Piano + punchy 808.
- FORBIDDEN: Dry rap flow for this style.`,

    'US_UK_RAP': `US/UK RAP DNA:
- Use English imperatively.
- Generic US/UK slang: "no cap", "opps", "sliding", "stacks", "gang".
- Flow: Melodic trap, Dark psychedelic, Drill. Triplet flows and ad-libs.`,

    'DRILL_FR': `FRENCH DRILL DNA:
- Sliding aggressive 808s, frantic triplet hi-hats, dark piano.
- Syncopated brutal flow, with dramatic pauses.
- Raw, street, territorial language. Pure aggression.`,

    'DARK_TRAP_MELODIC': `DARK TRAP MELODIC (BELGIAN / DAMSO) DNA:
- Dark trap production: minor key piano loops, haunting atmospheric pads, sliding distorted 808.
- Crisp metallic triplet hi-hats, hard snare, 130-142 BPM.
- Rap-first delivery: staccato flow with phrase-end doubling, short echo delays.
- Autotune is COLD and METALLIC (never warm/R&B). Nonchalant, authoritative, Belgian noir.
- Themes: dark philosophy, sexuality as weapon, existential duality, intellectual provocation.
- Language: rich sophisticated French, Belgian slang, complex metaphors, permanent double meaning.`,

    'DARK_LYRICAL': `DARK LYRICAL DNA:
- Dense technical flow, zero melody, syllable = percussion.
- Dark production: boom-bap drill hybrid, pitched orchestral samples.
- Occult, cultural, multi-layered references.`,

    'REGGAETON': `REGGAETON / LATIN URBAN DNA:
- Mandatory dembow riddim, round bouncy bass.
- Spanish rhythmic flow, catchy danceable hooks.
- Themes: party, seduction, dancefloor.`,

    'AFROBEATS': `AFROBEATS DNA:
- Authentic afro percussion, infectious grooves.
- Joyful melodies, catchy danceable hooks, positive energy.
- Themes: celebration, cultural pride, dance.`,

    'CARIBBEAN': `CARIBBEAN / DANCEHALL DNA:
- Dancehall riddim, warm groovy bass.
- Bouncy flow with Caribbean inflection.
- Festive positive tropical dancefloor energy.`,

    'MAGHREB': `MAGHREB / RAÏ DNA:
- Oriental instrumentation (oud, derbouka, qanun, accordion).
- Melodies in Arabic scales, raw emotion.
- Themes: nostalgia, love, exile, party. French-Darija bilingual.`,

    'AFRO_MELO': `AFRO-MELODIC DNA:
- Melodic autotune on afro-trap production.
- Warm 808s, afro percussion, bright melodies.
- Rap/singing alternation, festive-melancholic energy.`,

    'STORYTELLING': `STORYTELLING / ALT-RAP DNA:
- Poetic narrative, conversational flow.
- Organic production: jazz piano, acoustic guitar, live drums.
- Introspection, humor, social observations.`,

    'ELECTRO': `ELECTRO / HOUSE DNA:
- Precise electronic production, dominant synths.
- Dancefloor groove, vocoder or processed voice.
- Repetitive structures, build-ups, drops.`,

    'MELODIC_TRAP': `MELODIC TRAP DNA:
- Melodic autotune, smooth rap/singing alternation.
- Deep 808s, dark melodies (piano, guitar), complex hi-hats.
- Themes: success, melancholy, night, introspection.`,

    'HARDCORE': `HARDCORE RAP DNA:
- Deep aggressive voice, zero melody.
- Massive production: dark orchestral or heavy trap.
- Raw language, dominance, confrontation.`,

    'NEO_SOUL': `NEO-SOUL DNA:
- Organic warm production, live instruments.
- Vulnerable confessional singing, layered harmonies.
- Themes: relationships, emotional depth, authenticity.`,

    'SYNTH_POP': `SYNTH-POP / DARK R&B DNA:
- 80s retro-futuristic analog synths.
- Dark falsetto delivery over electronic beats.
- Themes: nocturnal hedonism, cinematic loneliness.`,

    'AFRO_SOUL': `AFRO-SOUL DNA:
- Ethereal African vocal tradition meets modern soul.
- Organic percussion, warm atmospheric production.
- Themes: spiritual connection, feminine strength, African heritage.`,

    'CLOUD_RAP': `CLOUD RAP DNA:
- Floating ethereal autotune, slow deep 808s.
- Minimalist but immersive production, massive reverb.
- Themes: introspection, melancholy, hovering between worlds.`,

    'ZOUK': `ZOUK / ISLAND DNA:
- Zouk groove rhythm, warm Caribbean bass.
- Romantic melodic singing with Creole inflection.
- Themes: island love, tropical warmth, sensuality.`
  };

  const matchKeys: string[] = [];

  // French Rap
  if (upper.includes('JUL') || upper.includes('GAZO') || upper.includes('NINHO') ||
      upper.includes('FREEZE') || upper.includes('ALPHA') ||
      upper.includes('NEKFEU') || upper.includes('ORELSAN') || upper.includes('BOOBA') ||
      upper.includes('KAARIS') || upper.includes('VALD') || upper.includes('WERENOI') ||
      upper.includes('MAES') || upper.includes('SCH') || upper.includes('LACRIM') ||
      upper.includes('NIRO') || upper.includes('SALIF')) {
    matchKeys.push('RAP_FR');
  }

  // DAMSO gets its own specialized DNA (dark trap melodic, NOT generic R&B)
  if (upper.includes('DAMSO')) {
    matchKeys.push('DARK_TRAP_MELODIC');
  }

  // Drill FR
  if ((upper.includes('DRILL') && upper.includes('FR')) || upper.includes('GAZO')) {
    matchKeys.push('DRILL_FR');
  }

  // Dark Lyrical
  if (upper.includes('FREEZE') || upper.includes('ALPHA WANN')) matchKeys.push('DARK_LYRICAL');

  // US/UK Rap
  if (upper.includes('DRAKE') || upper.includes('TRAVIS SCOTT') || upper.includes('CENTRAL CEE') ||
      upper.includes('KENDRICK') || upper.includes('CARTI') || upper.includes('KANYE') ||
      upper.includes('JUICE WRLD') || upper.includes('POST MALONE') || upper.includes('NAS') ||
      upper.includes('DR. DRE') || upper.includes('NATE DOGG') || upper.includes('MOBB DEEP') ||
      upper.includes('JEDI MIND') || upper.includes('VINNIE PAZ') || upper.includes('UK')) {
    matchKeys.push('US_UK_RAP');
  }

  // Reggaeton / Latin
  if (upper.includes('REGGAETON') || upper.includes('LATIN') || upper.includes('BAD BUNNY') ||
      upper.includes('BALVIN') || upper.includes('KAROL G') || upper.includes('ROSALÍA')) {
    matchKeys.push('REGGAETON');
  }

  // Afrobeats
  if (upper.includes('AFROBEAT') || upper.includes('BURNA') || upper.includes('REMA') ||
      upper.includes('ASAKE') || upper.includes('MHD') ||
      upper.includes('TIAKOLA')) {
    matchKeys.push('AFROBEATS');
  }

  // Afro Soul
  if (upper.includes('TEMS')) matchKeys.push('AFRO_SOUL');

  // Caribbean / Dancehall / Zouk
  if (upper.includes('CARIBBEAN') || upper.includes('DANCEHALL') || upper.includes('KALASH') ||
      upper.includes('ZOUK') || upper.includes('DWET') || upper.includes('DWÈT')) {
    matchKeys.push('CARIBBEAN');
    if (upper.includes('ZOUK') || upper.includes('DWET') || upper.includes('DWÈT')) {
      matchKeys.push('ZOUK');
    }
  }

  // Maghreb / Raï
  if (upper.includes('MAGHREB') || upper.includes('RAÏ') || upper.includes('TIF') ||
      upper.includes('SOOLKING') || upper.includes('BILAL SGHIR') || upper.includes('CHEB MAMI') ||
      upper.includes('DJALIL PALERMO') || upper.includes('RIMK') || upper.includes('BABYLONE') ||
      upper.includes('REDA TALIANI') || upper.includes('KHALED') || upper.includes('ALGERINO')) {
    matchKeys.push('MAGHREB');
  }

  // Afro Melodic
  if ((upper.includes('AFRO') && (upper.includes('MELO') || upper.includes('TIAKOLA'))) ||
      upper.includes('NISKA') || upper.includes('SDM') ||
      upper.includes('DADJU')) {
    matchKeys.push('AFRO_MELO');
  }

  // Storytelling
  if (upper.includes('ORELSAN') || upper.includes('LOMEPAL') || upper.includes('NEKFEU')) {
    matchKeys.push('STORYTELLING');
  }

  // Electro / House
  if (upper.includes('ELECTRO') || upper.includes('HOUSE') || upper.includes('DAFT') ||
      upper.includes('PEGGY GOU') || upper.includes('HUGEL') ||
      upper.includes('FRED AGAIN')) {
    matchKeys.push('ELECTRO');
  }

  // Melodic Trap
  if (upper.includes('HAMZA') || upper.includes('MELODIC TRAP') || upper.includes('LAYLOW') ||
      upper.includes('WERENOI') || upper.includes('VACRA')) {
    matchKeys.push('MELODIC_TRAP');
  }

  // Hardcore
  if (upper.includes('HARDCORE') || upper.includes('BOOBA') || upper.includes('KAARIS') ||
      upper.includes('LACRIM') || upper.includes('MOBB DEEP') || upper.includes('JEDI MIND') || upper.includes('VINNIE PAZ')) {
    matchKeys.push('HARDCORE');
  }

  // Neo-Soul
  if (upper.includes('SNOH') || upper.includes('SADE') ||
      upper.includes('MONSIEUR NOV')) {
    matchKeys.push('NEO_SOUL');
  }

  // Synth-Pop / Dark R&B
  if (upper.includes('THE WEEKND') || upper.includes('WEEKND') || upper.includes('LITHE') ||
      upper.includes('AUGXST')) {
    matchKeys.push('SYNTH_POP');
  }

  // Cloud Rap
  if (upper.includes('PNL') || upper.includes('ADEMO') || upper.includes('CLOUD')) {
    matchKeys.push('CLOUD_RAP');
  }

  // Melodic Street Pop
  if (upper.includes('JUL') || (upper.includes('MARSEILLE') && upper.includes('POP'))) {
    matchKeys.push('MELODIC_STREET_POP');
  }

  if (matchKeys.length === 0) {
    // NEUTRAL FALLBACK — does NOT default to R&B or melodic trap
    return `GENERIC URBAN CONTEMPORARY:
- Match the vocal style and flow to the artist's sonic signature from the Sonic DNA above.
- Production: Use the artist's production fingerprint exactly as defined in Sonic DNA.
- Language: Match the artist's primary language from Sonic DNA cultural anchors.
- Energy: Match the artist's typical BPM range and energy level from Sonic DNA.
- IMPORTANT: Do NOT default to R&B or melodic trap — use the Sonic DNA as the ONLY style guide.`;
  }

  const unique = [...new Set(matchKeys)];
  return unique.map(k => dnaMap[k]).filter(Boolean).join('\n\n');
}
