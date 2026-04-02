/**
 * Sonic DNA Map v2 - Enhanced artist sound profiles for Suno AI music generation
 * Features ultra-specific textures, vocal characteristics, flow patterns, production fingerprints, and cultural anchors
 * 38 international artists with detailed sonic DNA mapping
 */

export interface SonicDNA {
  artist: string;
  sunoStyleTemplate: string;
  sunoBpmRange: string;
  sunoKey: string;
  sunoVocalTags: string[];
  sunoWeirdness: number;
  sunoStyleInfluence: number;
  sunoExcludeStyles: string;
  vocalDNA: string;
  flowPattern: string;
  productionFingerprint: string;
  culturalAnchors: string;
  antiPatterns: string;
  sunoMetatags?: {
    vocalStyle: string;
    vocalEffect: string;
    mood: string;
    energy: string;
    texture: string;
    instrument: string;
  };
}

const SONIC_DNA_MAP: Record<string, SonicDNA> = {
  // French Artists
  'JUL': {
    artist: 'JUL',
    sunoStyleTemplate: 'Melodic Marseille street pop, emotional autotune, sun-kissed Mediterranean vibes, uplifting piano hooks, bouncy 808s, bright synths',
    sunoBpmRange: '120-130',
    sunoKey: 'Minor',
    sunoVocalTags: ['Melodic Singing', 'Autotune', 'Bright Timbre', 'Rapid Phrasing'],
    sunoWeirdness: 35,
    sunoStyleInfluence: 85,
    sunoExcludeStyles: 'dark, aggressive, UK drill, minimal, introspective, low-energy',
    vocalDNA: 'High-pitched nasal autotune, constant melodic singing, rapid syllable delivery, uplifting inflection. Never pure rap — always singing.',
    flowPattern: 'Ultra-melodic, rapid syllabic flow with constant rising inflections. Bouncy, optimistic phrasing.',
    productionFingerprint: 'Signature: bright piano lines (major key bursts), punchy rebound 808s, fast hi-hats, digital synths, Mediterranean warmth',
    culturalAnchors: 'Marseille street culture, quartier loyalty, sun and sea, uplifting street love, popular victory',
    antiPatterns: 'No dark orchestral, no aggression, no slow introspection, no minimal beats, no serious low-energy',
    sunoMetatags: {
      vocalStyle: 'Melodic Singing',
      vocalEffect: 'Autotune',
      mood: 'Uplifting, Joyful',
      energy: 'High',
      texture: 'Bright Digital',
      instrument: 'Piano, 808 Bass'
    }
  },

  'NINHO': {
    artist: 'NINHO',
    sunoStyleTemplate: 'Melodic trap FR, dark emotional rap, street melancholy, 808 bass depth, moody piano, atmospheric pads, hi-hat complexity',
    sunoBpmRange: '130-145',
    sunoKey: 'Minor',
    sunoVocalTags: ['Melodic Rap', 'Autotune', 'Emotional Delivery', 'Technical Flow'],
    sunoWeirdness: 45,
    sunoStyleInfluence: 80,
    sunoExcludeStyles: 'pop, uplifting, bright, cheerful, minimal production',
    vocalDNA: 'Medium voice, slightly raspy, masterful autotune on choruses, technical rap verses. Duality of rap speed + melodic singing.',
    flowPattern: 'Technical rap passages alternate with melodic singing sections. Capable of both fast-paced delivery and emotional holds.',
    productionFingerprint: 'Signature: deep 808s, dark moody piano, acoustic melancholy guitar, complex hi-hat patterns (rolls, triplets), atmospheric pads',
    culturalAnchors: 'Street ascension narrative, 91 district, melancholy at the top, solitude, family bonds, monetary escape',
    antiPatterns: 'No cheerful themes, no minimal beats, no bright synths, no spoken word, no jazz chords',
    sunoMetatags: {
      vocalStyle: 'Melodic Rap',
      vocalEffect: 'Autotune',
      mood: 'Melancholic, Dark',
      energy: 'Medium-High',
      texture: 'Warm Analog',
      instrument: '808 Bass, Piano'
    }
  },

  'DAMSO': {
    artist: 'DAMSO',
    sunoStyleTemplate: 'Dark R&B rap, experimental melodic, Belgian dark pop, sensual bass, atmospheric synths, industrial textures, minimal drums',
    sunoBpmRange: '90-110',
    sunoKey: 'Minor',
    sunoVocalTags: ['Dark Singing', 'Subtle Autotune', 'Articulate Rap', 'Sensual Delivery'],
    sunoWeirdness: 65,
    sunoStyleInfluence: 85,
    sunoExcludeStyles: 'cheerful, bright, mainstream pop, conventional trap',
    vocalDNA: 'Deep grave voice, subtle artistic autotune, precise articulation. Alternation between dark rap and sensual singing. Unique rhythmic breaks.',
    flowPattern: 'Precise articulation with rhythmic pauses. Dark, slow-burn pacing. Capable of whispered delivery to intense rap.',
    productionFingerprint: 'Signature: saturated deep 808s, dark atmospheric synths, industrial subtle textures, minimal but percussive drums, cinematic space',
    culturalAnchors: 'Sexual rawness, dark introspection, toxicity and duality, intellectual provocation, nocturnal atmosphere, Belgian-Congolese fusion',
    antiPatterns: 'No happy themes, no simple radio pop, no bright major key, no standard trap sounds',
    sunoMetatags: {
      vocalStyle: 'Dark Singing',
      vocalEffect: 'Subtle Autotune',
      mood: 'Dark, Introspective',
      energy: 'Low-Medium',
      texture: 'Industrial Dark',
      instrument: '808 Bass, Synths'
    }
  },

  'GAZO': {
    artist: 'GAZO',
    sunoStyleTemplate: 'Dark French Drill, French Rap Trap Style, Moody Minor-Key Piano Loops, Haunting Atmospheric Textures, Sliding Distorted Sub-Bass 808, Crisp Metallic Triplet Hi-Hats, Hard-Hitting Snare, 142 BPM, Key: D Minor, Masculine Raspy Vocals, Grainy Timber, Authoritative Nonchalant Delivery, Seine-Saint-Denis 93 Accent, Staccato Melodic Flow, Heavy Phrase-End Doubling, Short Echo Delays, Wide Soundstage, Nocturnal Urban Street Vibe, Hi-End Studio Mix, Analog Saturation, Close-Mic Intimacy, 2020s',
    sunoBpmRange: '140-145',
    sunoKey: 'D Minor',
    sunoVocalTags: ['Masculine Raspy Vocals', 'Grainy Timber', 'Authoritative Nonchalant Delivery', 'Staccato Melodic Flow'],
    sunoWeirdness: 50,
    sunoStyleInfluence: 85,
    sunoExcludeStyles: 'melodic singing, pop, happy, uplifting, acoustic, R&B, soft, chill, lo-fi, jazz, folk',
    vocalDNA: 'Masculine raspy vocals with grainy timber. Authoritative yet nonchalant delivery. Seine-Saint-Denis 93 accent. Staccato melodic flow with heavy phrase-end doubling and short echo delays. Close-mic intimacy. No autotune singing — pure aggressive rap with melodic inflections.',
    flowPattern: 'Staccato melodic drill flow with heavy phrase-end doubling. Syncopated delivery with dramatic pauses. Authoritative nonchalant phrasing. Fast percussive bursts alternating with spaced menacing bars.',
    productionFingerprint: 'Signature: moody minor-key piano loops, haunting atmospheric textures, sliding distorted sub-bass 808, crisp metallic triplet hi-hats, hard-hitting snare, short echo delays, wide soundstage, analog saturation, hi-end studio mix, close-mic intimacy, nocturnal urban street vibe',
    culturalAnchors: 'Seine-Saint-Denis 93 street territory, nocturnal urban vibe, violence, competition, dirty money, survival, intimidation, street credibility',
    antiPatterns: 'NEVER melodic singing, NEVER pop hooks, NEVER uplifting messages, NEVER acoustic instruments, NEVER bright moments, NEVER lo-fi or chill',
    sunoMetatags: {
      vocalStyle: 'Aggressive Drill Rap',
      vocalEffect: 'Short Echo Delays, Phrase-End Doubling, Analog Saturation',
      mood: 'Dark, Menacing, Nocturnal',
      energy: 'Maximum',
      texture: 'Crisp Metallic, Haunting Atmospheric',
      instrument: 'Sliding 808 Sub-Bass, Minor-Key Piano, Triplet Hi-Hats, Hard Snare'
    }
  },

  'FREEZE CORLEONE': {
    artist: 'FREEZE CORLEONE',
    sunoStyleTemplate: 'Dark boom bap, horrorcore FR, lyrical trap, obscure samples, heavy drums, deep bass, cinematic gloom, occult atmosphere',
    sunoBpmRange: '85-100',
    sunoKey: 'Minor',
    sunoVocalTags: ['Technical Rap', 'Dark Delivery', 'Dense Flow', 'Cold Tone'],
    sunoWeirdness: 75,
    sunoStyleInfluence: 90,
    sunoExcludeStyles: 'melodic, singing, bright, pop, uplifting, emotional',
    vocalDNA: 'Deep grave monotone voice, technical rapid flow, zero autotune, cold detached delivery. Surgical precision, no emotion display.',
    flowPattern: 'Chirurgical dense technical flow, complex syllable placements, rapid articulation without melodic inflection. Martial verbal precision.',
    productionFingerprint: 'Signature: dark obscure samples (jazz, soul, classical corrupted), heavy boom bap drums, deep bass, cinematic lugubre ambiance',
    culturalAnchors: 'Conspiracy theories, occult references, lyrical supremacy, intellectual provocation, samples from unusual sources, verbal combat',
    antiPatterns: 'No emotion, no singing hooks, no uplifting moments, no minimal beats, no bright keys',
    sunoMetatags: {
      vocalStyle: 'Rap',
      vocalEffect: 'Reverb',
      mood: 'Dark, Cold',
      energy: 'Medium',
      texture: 'Vintage Samples',
      instrument: 'Boom Bap Drums, Bass'
    }
  },

  'NEKFEU': {
    artist: 'NEKFEU',
    sunoStyleTemplate: 'Lyrical pop-rap, poetic boom bap, storytelling flow, warm jazz samples, organic drums, acoustic guitar, introspective vibes',
    sunoBpmRange: '90-105',
    sunoKey: 'Major',
    sunoVocalTags: ['Clear Articulation', 'Technical Rap', 'Poetic Delivery', 'Capable of Singing'],
    sunoWeirdness: 40,
    sunoStyleInfluence: 75,
    sunoExcludeStyles: 'aggressive, dark, minimal, harsh, high-energy trap',
    vocalDNA: 'Clear articulate voice, zero autotune, technical flow with accelerations. Capable of singing on choruses with warm tone.',
    flowPattern: 'Technical rap with poetic phrasing. Conversational storytelling flow. Capable of slowing for emotional moments.',
    productionFingerprint: 'Signature: warm jazz samples (soul, bossa), organic drums, warm rounded bass, acoustic guitar melodies, intimate production',
    culturalAnchors: 'Travel, love, introspection, literature, gentle melancholy, Parisian beauty, creativity, poetic imagery',
    antiPatterns: 'No aggressive shouting, no dark themes, no minimal beats, no street clichés, no commercial pop',
    sunoMetatags: {
      vocalStyle: 'Rap',
      vocalEffect: 'Minimal',
      mood: 'Introspective, Poetic',
      energy: 'Medium',
      texture: 'Warm Analog',
      instrument: 'Guitar, Jazz Drums'
    }
  },

  'LAYLOW': {
    artist: 'LAYLOW',
    sunoStyleTemplate: 'Digital trap, experimental R&B-rap, futuristic melodic, pitch-shifted vocals, atmospheric synths, glitchy textures, cinematic space',
    sunoBpmRange: '100-120',
    sunoKey: 'Minor',
    sunoVocalTags: ['Experimental Autotune', 'Pitch-Shifted Vocals', 'Melodic Effects', 'Modulated Delivery'],
    sunoWeirdness: 80,
    sunoStyleInfluence: 85,
    sunoExcludeStyles: 'acoustic, organic, traditional, minimal, conventional',
    vocalDNA: 'Artistic autotune with heavy modulation, pitch shifts, creative vocal effects. Elastic unpredictable flow between rap and singing.',
    flowPattern: 'Elastic unpredictable phrasing, glitch-like rhythmic breaks, melodic bursts treated with effects, cinematic build-ups.',
    productionFingerprint: 'Signature: futuristic synths, deep 808s, electronic atmospheric textures, manipulated samples, subtle glitches, immersive space',
    culturalAnchors: 'Technology and emotion duality, digital solitude, dystopian love, futurism, modern anxiety, digital aesthetics',
    antiPatterns: 'No acoustic instruments, no traditional rap, no minimal beats, no conventional verse structure',
    sunoMetatags: {
      vocalStyle: 'Melodic Rap',
      vocalEffect: 'Autotune, Pitch Shift',
      mood: 'Dark, Cinematic',
      energy: 'Medium-High',
      texture: 'Digital Glitch',
      instrument: 'Synths, 808 Bass'
    }
  },

  'ORELSAN': {
    artist: 'ORELSAN',
    sunoStyleTemplate: 'Poetic alt-rap, introspective pop-rap, warm samples, live instrumentation, acoustic elements, conversational flow, literary depth',
    sunoBpmRange: '85-110',
    sunoKey: 'Major/Minor',
    sunoVocalTags: ['Clear Articulation', 'Poetic Flow', 'Conversational', 'Literary Delivery'],
    sunoWeirdness: 50,
    sunoStyleInfluence: 80,
    sunoExcludeStyles: 'aggressive trap, dark themes, minimal beats',
    vocalDNA: 'Clear unfiltered voice, excellent articulation, conversational rhythm, capable of humor and pathos. Zero autotune, natural delivery.',
    flowPattern: 'Conversational storytelling with poetic acceleration. Capable of rapid technical passages and slow introspective moments.',
    productionFingerprint: 'Signature: warm live samples, organic instrumentation, acoustic guitars, live drums, literary atmosphere, accessibility',
    culturalAnchors: 'Social observation, introspection, love, melancholy humor, Parisian life, literary references, human vulnerability',
    antiPatterns: 'No autotune, no minimal trap, no aggressive shouting, no dark sinister themes',
    sunoMetatags: {
      vocalStyle: 'Rap',
      vocalEffect: 'Minimal',
      mood: 'Introspective, Poetic',
      energy: 'Medium',
      texture: 'Warm Acoustic',
      instrument: 'Guitar, Live Drums'
    }
  },

  'BOOBA': {
    artist: 'BOOBA',
    sunoStyleTemplate: 'Cinematic Hardcore Rap, Dark Orchestral Trap, Deep Authoritative Voice, Cold Luxury Atmosphere, 125-140 BPM, Key: C# Minor, Distorted Heavy 808, Dark Choir Samples, Dramatic Violins, Punchy Trap Snares, Industrial Synth Textures, Sombre Autotune on Hooks Only, Massive Cinematic Production, 2020s',
    sunoBpmRange: '125-140',
    sunoKey: 'C# Minor',
    sunoVocalTags: ['Authoritative Rap', 'Deep Baritone', 'Dark Hook Singing', 'Precise Punchlines'],
    sunoWeirdness: 55,
    sunoStyleInfluence: 85,
    sunoExcludeStyles: 'pop, bright, happy, acoustic, lo-fi chill, reggaeton, country, folk',
    vocalDNA: 'Deep grave authoritative voice, imposing presence. Sombre autotune ONLY on hooks/refrains, never on verses. Precise choppy delivery. Punchlines percutantes. Dark sung hooks since Ultra era.',
    flowPattern: 'Choppy precise punchline delivery. Short impactful phrases. Dark melodic hooks on choruses with somber autotune. Verses are pure rap technique.',
    productionFingerprint: 'Signature: dark cinematic orchestrations (dramatic violins, somber choirs), distorted heavy 808s, industrial synth textures, massive production with cinematic scope, punchy trap drums',
    culturalAnchors: 'Solitary dominance, fierce competition, cold luxury, betrayal, heritage, street credibility elevated to cinematic art',
    antiPatterns: 'No bright pop, no acoustic softness, no happy themes, no lo-fi, never fully melodic — dark hooks only',
    sunoMetatags: {
      vocalStyle: 'Aggressive Rap',
      vocalEffect: 'Dark Autotune on Hooks, Reverb',
      mood: 'Dark, Cinematic',
      energy: 'High',
      texture: 'Cold Industrial',
      instrument: '808 Bass, Violins, Dark Choirs, Trap Drums'
    }
  },

  'KAARIS': {
    artist: 'KAARIS',
    sunoStyleTemplate: 'Dark Aggressive French Trap, Hardcore Rap, Deep Baritone Rap Voice, Sevran Street Energy, 135-145 BPM, Key: B Minor, Heavy 808 Sub Bass, Trap Snare Rolls, Triplet Hi-Hats, Dark Piano Keys, Minimalist Dark Synth Pads, Aggressive French Rap Delivery, 2010s',
    sunoBpmRange: '135-145',
    sunoKey: 'B Minor',
    sunoVocalTags: ['Aggressive Rap', 'Deep Baritone', 'Percussive Delivery', 'Hardcore Flow'],
    sunoWeirdness: 40,
    sunoStyleInfluence: 85,
    sunoExcludeStyles: 'metal, rock, guitar riffs, singing pop, soft acoustic, country folk, bright happy, classical opera, lo-fi chill, reggaeton dembow, screaming, electric guitar distortion',
    vocalDNA: 'Very deep baritone imposing voice, aggressive choppy flow, ZERO melodic autotune, percussive punchy delivery. Guttural ad-libs. Rap aggression from VOICE not instruments.',
    flowPattern: 'Aggressive choppy flow with percussive impact. Short punchy phrases. Territorial dominance. Dramatic pauses between brutal bars.',
    productionFingerprint: 'Signature: heavy 808 sub bass, trap snare rolls, fast triplet hi-hats, dark minor piano chords, minimal dark synth pads. NO guitar, NO rock, NO metal — pure trap production.',
    culturalAnchors: 'Sevran street warfare, 93 banlieue, physical domination, intimidation, dirty money, survival, territorial aggression',
    antiPatterns: 'NEVER metal, NEVER rock guitar, NEVER electric guitar, NEVER singing or pop vocals, NEVER bright or happy, NEVER acoustic instruments',
    sunoMetatags: {
      vocalStyle: 'Aggressive Rap',
      vocalEffect: 'Dry, Light Reverb',
      mood: 'Aggressive, Dark',
      energy: 'Maximum',
      texture: 'Dark Trap',
      instrument: '808 Sub Bass, Trap Drums, Dark Piano, Synth Pads'
    }
  },

  'VALD': {
    artist: 'VALD',
    sunoStyleTemplate: 'Experimental French Rap, Absurdist Dark Humor, Unpredictable Beat Switches, Genre-Fluid Production, 90-140 BPM, Key: Variable, Complex Drums, Dark Synths, Unexpected Samples, Ironic Vocal Delivery, Rapid Technical Flow, Schizophrenic Energy, 2020s',
    sunoBpmRange: '90-140',
    sunoKey: 'Minor',
    sunoVocalTags: ['Technical Rap', 'Ironic Delivery', 'Rapid Flow', 'Unpredictable Tone Changes'],
    sunoWeirdness: 75,
    sunoStyleInfluence: 80,
    sunoExcludeStyles: 'melodic singing, standard pop, conventional trap, serious conscious rap',
    vocalDNA: 'Clear articulate voice, zero autotune, extremely fast flow capability. Constant tone shifts: grave/aigu, serious/comedic, whisper/scream. The voice itself is unpredictable.',
    flowPattern: 'Unpredictable rapid flow that changes rhythm and tone mid-verse. Capable of extreme speed. Comedic timing mixed with technical precision. Each section can shift style radically.',
    productionFingerprint: 'Signature: genre-fluid beats (trap, boom bap, electro, rock in same song), beat switches, unexpected samples, tempo changes, production that mirrors lyrical absurdity',
    culturalAnchors: 'Dark absurd humor, ironic social satire, trash provocation, sci-fi references, geek culture, unpredictability as identity, wordplay density',
    antiPatterns: 'No serious introspective tone throughout, no standard melodic hooks, no conventional single-genre production, no straightforward narratives',
    sunoMetatags: {
      vocalStyle: 'Rap',
      vocalEffect: 'Minimal, Occasional Distortion',
      mood: 'Absurd, Ironic, Dark Humor',
      energy: 'Variable (Low to Maximum)',
      texture: 'Genre-Fluid',
      instrument: 'Variable: Trap Drums, Rock Samples, Electro Synths, Boom Bap'
    }
  },

  // Additional International Artists
  'DRAKE': {
    artist: 'DRAKE',
    sunoStyleTemplate: 'Melodic R&B-Trap, Emotional Pop-Rap, Smooth Singing-Rap Hybrid, Nocturnal Intimate Vibes, 85-145 BPM, Key: D Minor, Warm Deep 808, R&B Piano Chords, Atmospheric Pads, Clean Trap Drums, Smooth Vocal Autotune, Iconic Hook Craft, Contemporary Urban Polish, 2020s',
    sunoBpmRange: '85-145',
    sunoKey: 'D Minor',
    sunoVocalTags: ['Melodic Rap', 'Singing Hooks', 'Smooth Delivery', 'Conversational Flow'],
    sunoWeirdness: 35,
    sunoStyleInfluence: 85,
    sunoExcludeStyles: 'harsh screaming, metal, punk, country, classical, folk',
    vocalDNA: 'Smooth voice transitioning fluidly between rap and singing with zero rupture. Subtle controlled autotune. Hooks are ultra-memorable, designed for mass singalong. Emotional vulnerability in tone.',
    flowPattern: 'Conversational rap verses transitioning seamlessly to sung choruses. Can shift from slow R&B (85 BPM) to uptempo trap (140+ BPM). Hook-first songwriting.',
    productionFingerprint: 'Signature: warm deep 808s, R&B piano/guitar, atmospheric pads, clean trap drums, nocturnal intimate production, soulful samples, wide stereo polish',
    culturalAnchors: 'Complex relationships, masculine vulnerability, success and loneliness, nostalgia, nocturnal Toronto vibes, contemporary urban luxury',
    antiPatterns: 'No harsh aggressive-only delivery, never without a melodic hook, never raw unpolished production',
    sunoMetatags: {
      vocalStyle: 'Melodic Rap',
      vocalEffect: 'Subtle Autotune, Reverb',
      mood: 'Emotional, Nocturnal',
      energy: 'Medium',
      texture: 'Warm Polished',
      instrument: '808 Bass, Piano, Pads, Guitar'
    }
  },

  // ====== NEWLY ADDED DNA — Previously profiled but missing Sonic DNA ======

  'PNL': {
    artist: 'PNL',
    sunoStyleTemplate: 'Atmospheric Cloud Rap, Ethereal Autotune, Slow Melodic Trap, Floating Dreamy Vocals, 70-90 BPM, Key: Eb Minor, Deep Slow 808, Ethereal Piano Pads, Massive Reverb Space, Layered Doubled Vocals, Minimalist Immersive Beats, Contemplative Urban Melancholy, 2020s',
    sunoBpmRange: '70-90',
    sunoKey: 'Eb Minor',
    sunoVocalTags: ['Ethereal Autotune', 'Floating Vocals', 'Doubled Layers', 'Slow Melodic Delivery'],
    sunoWeirdness: 60,
    sunoStyleInfluence: 90,
    sunoExcludeStyles: 'aggressive, fast tempo, bright, happy, drill, boom bap, commercial pop',
    vocalDNA: 'Omnipresent artistic autotune, floating spatial voice, slow melodic delivery. Doubled/layered vocals creating ethereal effect. NEVER pure rap — always singing.',
    flowPattern: 'Slow spatial phrasing, words floating in massive reverb. Melodic contours over minimal beats. No rushing — everything floats.',
    productionFingerprint: 'Signature: atmospheric synth pads, deep slow 808, ethereal piano, massive reverb, minimalist but immersive production, spatial width',
    culturalAnchors: 'Solitude, family bonds, bitter success, urban contemplation, cité as universe, deep melancholy, nostalgia',
    antiPatterns: 'NEVER fast or aggressive, NEVER pure rap/technical flow, NEVER bright or cheerful, NEVER dense production',
    sunoMetatags: { vocalStyle: 'Melodic Singing', vocalEffect: 'Heavy Autotune, Massive Reverb', mood: 'Melancholic, Ethereal', energy: 'Low', texture: 'Atmospheric Cloud', instrument: 'Synth Pads, Slow 808, Piano' }
  },

  'SDM': {
    artist: 'SDM',
    sunoStyleTemplate: 'Modern French Trap-R&B, Brussels Vibe, Nocturnal Atmospheric Pads, Filtered Rhodes, Heavy Sliding 808 Sub-Bass, Crisp Digital Trap Drums, Hi-End Production, Crisp Hi-Hats, Melodic Masculine Vocals, Heavy Metallic Autotune, Honeyed Nasal Crooner, Laid-Back Nonchalant Flow, Lush Reverb and Delay, 130 BPM, Key: G Minor, Nocturnal Sophisticated Expensive Soundscape, Wide Soundstage, Intimate Close-Mic, 2020s',
    sunoBpmRange: '125-135',
    sunoKey: 'G Minor',
    sunoVocalTags: ['Heavy Metallic Autotune', 'Honeyed Nasal Crooner', 'Laid-Back Nonchalant Flow', 'Melodic Masculine Vocals'],
    sunoWeirdness: 40,
    sunoStyleInfluence: 85,
    sunoExcludeStyles: 'bright pop, cheerful, minimal, acoustic folk, aggressive drill, rock, punk, edm, country',
    vocalDNA: 'Heavy metallic autotune with honeyed nasal crooner quality. Laid-back nonchalant delivery, never rushed. Deep masculine voice that sings melodically through thick autotune — signature Brussels Trap-R&B vocal texture. Close-mic intimacy.',
    flowPattern: 'Laid-back nonchalant melodic flow with rap accelerations. Dark sung passages over atmospheric pads. Never aggressive — always smooth, sophisticated, nocturnal.',
    productionFingerprint: 'Signature: filtered Rhodes chords, nocturnal atmospheric pads, heavy sliding 808 sub-bass, crisp digital trap drums, crisp hi-hats, lush reverb and delay, wide soundstage, expensive hi-end production, intimate close-mic mixing',
    culturalAnchors: 'Brussels street melancholy, nocturnal life, expensive sophisticated atmosphere, bitter success, loyalty, betrayal, night-drive luxury sadness',
    antiPatterns: 'NEVER bright or cheerful, NEVER aggressive or drill-like, NEVER acoustic or minimal, NEVER lo-fi — always hi-end polished production',
    sunoMetatags: { vocalStyle: 'Melodic Trap-R&B Crooner', vocalEffect: 'Heavy Metallic Autotune, Lush Reverb, Delay', mood: 'Nocturnal, Sophisticated, Melancholic', energy: 'Medium-Low', texture: 'Warm Atmospheric Hi-End', instrument: 'Filtered Rhodes, Atmospheric Pads, Sliding 808 Sub-Bass, Crisp Trap Drums' }
  },

  'NISKA': {
    artist: 'NISKA',
    sunoStyleTemplate: 'Afro-Trap Festive, Dancehall-Rap Hybrid, Bouncy Party Energy, 100-115 BPM, Key: G Minor, Bouncy 808, Afro Percussion (Congas, Djembe), Festive Melodies, Dancehall Influence, Light Autotune, Contagious Energy, 2020s',
    sunoBpmRange: '100-115',
    sunoKey: 'G Minor',
    sunoVocalTags: ['Festive Flow', 'Light Autotune', 'Bouncy Delivery', 'Party Energy'],
    sunoWeirdness: 35,
    sunoStyleInfluence: 80,
    sunoExcludeStyles: 'dark aggressive, minimal, introspective, slow ballad',
    vocalDNA: 'Recognizable voice, light autotune, bouncy danceable flow. Festive contagious energy. Alternation rap/chant.',
    flowPattern: 'Bouncy rebounding flow, danceable phrasing, festive energy with rap technique moments.',
    productionFingerprint: 'Signature: afro percussion (congas, djembe synth), bouncy 808s, festive melodies, dancehall influences',
    culturalAnchors: 'Party culture, dance, quartier pride, positive street energy, Congolese influences',
    antiPatterns: 'No dark aggressive themes, no slow introspection, no minimal beats',
    sunoMetatags: { vocalStyle: 'Melodic Rap', vocalEffect: 'Light Autotune', mood: 'Festive, Uplifting', energy: 'High', texture: 'Bright Warm', instrument: 'Afro Percussion, 808 Bass, Synths' }
  },

  'CENTRAL CEE': {
    artist: 'CENTRAL CEE',
    sunoStyleTemplate: 'UK Melodic Drill, London Street Rap, Cool Sliding Flow, 140-145 BPM, Key: F Minor, Sliding 808, Drill Triplet Hi-Hats, Melancholic Piano, UK Guitar Licks, Light Melodic Autotune, Cool London Attitude, 2020s',
    sunoBpmRange: '140-145',
    sunoKey: 'F Minor',
    sunoVocalTags: ['UK Drill Flow', 'Melodic Hooks', 'Cool Delivery', 'London Accent'],
    sunoWeirdness: 40,
    sunoStyleInfluence: 82,
    sunoExcludeStyles: 'aggressive FR drill, pop, acoustic, country, classical',
    vocalDNA: 'Clear voice, UK drill sliding syncopated flow, light melodic autotune on hooks. London accent marked. Cool not aggressive.',
    flowPattern: 'Sliding syncopated drill flow, catchy melodic hooks, alternation between technical rap and earworm melodies.',
    productionFingerprint: 'Signature: sliding 808s, triplet hi-hats, melancholic piano/guitar, UK drill ambiance but melodic touch',
    culturalAnchors: 'London street life, hustling, flexing, relationships, UK cool attitude',
    antiPatterns: 'No overly aggressive FR drill, no pop crossover, not minimal',
    sunoMetatags: { vocalStyle: 'Melodic Rap', vocalEffect: 'Light Autotune', mood: 'Cool, Melancholic', energy: 'Medium-High', texture: 'Crisp UK', instrument: '808 Bass, Piano, Guitar' }
  },

  'ALPHA WANN': {
    artist: 'ALPHA WANN',
    sunoStyleTemplate: 'Elite Technical French Rap, Modern Dark Boom Bap, Luxury Minimalism, 85-100 BPM, Key: D Minor, Sparse Dark Piano, Heavy Punchy Drums, Tight Snare Crack, Minimal Bass Line, Bell Textures, Dry Precise Vocals, Surgical Cold Flow, 2020s',
    sunoBpmRange: '85-100',
    sunoKey: 'D Minor',
    sunoVocalTags: ['Technical Rap', 'Dry Baritone', 'Precise Articulation', 'Cold Delivery'],
    sunoWeirdness: 45,
    sunoStyleInfluence: 88,
    sunoExcludeStyles: 'autotune, melodic singing, jazz samples, soulful warmth, pop, bright',
    vocalDNA: 'Dry baritone voice, ZERO autotune, hyper-precise articulation, rapid technical delivery, cold controlled aggression. No singing ever.',
    flowPattern: 'Surgical technical flow, dense multisyllabic rhymes, rapid articulation without melodic inflection. Pure rap technique demonstration.',
    productionFingerprint: 'Signature: sparse dark piano (minor keys), subtle bell textures, heavy punchy drums, tight snare crack, minimal bass. NO jazz, NO soul warmth.',
    culturalAnchors: 'Technical excellence, dense internal rhymes, Parisian independence, dark luxury, cold precision',
    antiPatterns: 'No autotune ever, no melodic hooks, no jazzy warmth, no soulful samples, no singing',
    sunoMetatags: { vocalStyle: 'Rap', vocalEffect: 'Dry, Minimal', mood: 'Cold, Dark', energy: 'Medium', texture: 'Sparse Minimal', instrument: 'Dark Piano, Punchy Drums, Bass' }
  },

  'KALASH': {
    artist: 'KALASH',
    sunoStyleTemplate: 'Modern Dancehall, Caribbean Trap, Ragga-Rap Hybrid, Tropical Bounce, 90-110 BPM, Key: A Minor, Dancehall Riddim, Tropical Percussion, Bouncy 808, Atmospheric Synths, Steel Drum Melodies, Creole-French Vocal Blend, Island Energy, 2020s',
    sunoBpmRange: '90-110',
    sunoKey: 'A Minor',
    sunoVocalTags: ['Dancehall Flow', 'Melodic Rap', 'Creole Accent', 'Bouncy Delivery'],
    sunoWeirdness: 45,
    sunoStyleInfluence: 82,
    sunoExcludeStyles: 'dark aggressive, minimal trap, cold industrial, boom bap',
    vocalDNA: 'Mix of melodic singing and rap, light autotune, marked Caribbean accent. Danceable bouncy flow alternating between floating and percussive passages.',
    flowPattern: 'Bouncy dancehall flow with Caribbean inflection, alternation between floating melodic passages and percussive rap.',
    productionFingerprint: 'Signature: dancehall riddims, tropical percussion, bouncy 808s, atmospheric synths, steel drum/flute tropical melodies',
    culturalAnchors: 'Caribbean identity, island pride, tropical melancholy, party, exile, Creole-French blend',
    antiPatterns: 'No dark aggressive themes, no cold industrial, no boom bap traditional',
    sunoMetatags: { vocalStyle: 'Melodic Rap', vocalEffect: 'Light Autotune', mood: 'Tropical, Bouncy', energy: 'Medium-High', texture: 'Warm Tropical', instrument: 'Dancehall Riddim, 808, Steel Drums' }
  },

  'TIAKOLA': {
    artist: 'TIAKOLA',
    sunoStyleTemplate: 'Pure Afro-Melodic, Ultra-Melodic Autotune, Afro-Pop Urbaine, Luminous Energy, 100-120 BPM, Key: G Major, Warm 808, Afro Percussion (Congas Shakers), Melodic Guitar, Bright Synths, Constant Melodic Vocal Variations, Joyful-Melancholic Atmosphere, 2020s',
    sunoBpmRange: '100-120',
    sunoKey: 'G Major',
    sunoVocalTags: ['Ultra-Melodic Singing', 'Permanent Autotune', 'Bright High Voice', 'Melodic Variations'],
    sunoWeirdness: 35,
    sunoStyleInfluence: 85,
    sunoExcludeStyles: 'aggressive rap, dark minimal, boom bap, industrial, slow ballad',
    vocalDNA: 'Ultra-melodic, permanent autotune, bright high voice, constant tonal variations and harmonies. Every syllable is SUNG with melodic variation. Never stops singing.',
    flowPattern: 'Rapid melodic flow with constant pitch variations. Singing and rapping simultaneously. Melody IS the flow.',
    productionFingerprint: 'Signature: afro percussion (congas, shakers, synth djembe), melodic guitars, warm bouncy 808s, bright synths, atmospheric pads',
    culturalAnchors: 'Joyful celebration, love, loyalty, dance, quartier pride, subtle Lingala influence, positive energy',
    antiPatterns: 'No aggressive rap, no dark production, no spoken word, melody NEVER stops',
    sunoMetatags: { vocalStyle: 'Melodic Singing', vocalEffect: 'Heavy Autotune', mood: 'Joyful, Luminous', energy: 'High', texture: 'Bright Warm', instrument: 'Afro Percussion, Guitar, 808, Synths' }
  },

  'HAMZA': {
    artist: 'HAMZA',
    sunoStyleTemplate: 'Melodic Belgian Trap, Smooth R&B-Rap, Nonchalant Sauce Music, Nocturnal Luxury, 130-145 BPM, Key: Bb Minor, Deep Round 808, Smooth Luxury Synths, Airy Hi-Hats, Suave Autotune, Elastic Fluid Flow, Intense Nocturnal Ambiance, 2020s',
    sunoBpmRange: '130-145',
    sunoKey: 'Bb Minor',
    sunoVocalTags: ['Suave Autotune', 'Nonchalant Delivery', 'Smooth Melodic', 'Sensual Tone'],
    sunoWeirdness: 45,
    sunoStyleInfluence: 83,
    sunoExcludeStyles: 'aggressive hardcore, acoustic folk, bright pop, boom bap',
    vocalDNA: 'Omnipresent melodic autotune, suave nonchalant sensual voice. Elastic fluid flow. Singing IS the style — never dry technical rap.',
    flowPattern: 'Elastic fluid phrasing, nonchalant delivery, smooth melodic contours. Everything sounds effortless.',
    productionFingerprint: 'Signature: smooth luxury synths, deep round 808s, airy clean hi-hats, nocturnal intense atmosphere',
    culturalAnchors: 'Luxury, sensuality, nightlife, US aesthetic, women, sauce, Belgian cool',
    antiPatterns: 'No dry technical flow, no aggressive delivery, no bright happy pop',
    sunoMetatags: { vocalStyle: 'Melodic Singing', vocalEffect: 'Autotune', mood: 'Smooth, Nocturnal', energy: 'Medium', texture: 'Smooth Luxury', instrument: '808 Bass, Luxury Synths, Hi-Hats' }
  },

  'STROMAE': {
    artist: 'STROMAE',
    sunoStyleTemplate: 'Belgian Art-Pop, Electro-Chanson Française, Danceable Melancholy, Theatrical Vocal Performance, 110-130 BPM, Key: C Minor, Electronic Synths, Congolese Rumba Influence, Dancefloor Drums, Orchestral Accents, Expressive Theatrical Voice, Contrast Between Sadness and Dance Energy, 2020s',
    sunoBpmRange: '110-130',
    sunoKey: 'C Minor',
    sunoVocalTags: ['Theatrical Singing', 'Expressive Modulation', 'Spoken-Sung', 'Belgian Accent'],
    sunoWeirdness: 65,
    sunoStyleInfluence: 88,
    sunoExcludeStyles: 'trap, drill, aggressive rap, minimal, lo-fi',
    vocalDNA: 'Articulate theatrical voice, expressive modulation, alternation between powerful singing and spoken-sung delivery. Subtle Belgian accent. Voice as dramatic instrument.',
    flowPattern: 'Theatrical phrasing, conversational to dramatic shifts. Melody-driven but with narrative precision.',
    productionFingerprint: 'Signature: modern electronic synths, subtle Congolese rumba influences, dancefloor beats, occasional orchestral accents, emotional electronic production',
    culturalAnchors: 'Danceable melancholy, social critique, fatherhood, modern society, solitude, Belgian-Congolese identity, dark humor',
    antiPatterns: 'No trap/drill, no aggressive rap, no minimal production, no lo-fi',
    sunoMetatags: { vocalStyle: 'Theatrical Singing', vocalEffect: 'Minimal', mood: 'Melancholic, Danceable', energy: 'Medium-High', texture: 'Electronic Polish', instrument: 'Synths, Electronic Drums, Strings' }
  },

  'TRAVIS SCOTT': {
    artist: 'TRAVIS SCOTT',
    sunoStyleTemplate: 'Psychedelic Dark Trap, Ambient Atmospheric Rap, Cosmic Autotune, Beat Switch Artistry, 130-150 BPM, Key: F Minor, Saturated Deep 808, Atmospheric Floating Synths, Phaser-Flanger Effects, Massive Reverb, Thick Artistic Autotune, Cosmic Chaotic Energy, 2020s',
    sunoBpmRange: '130-150',
    sunoKey: 'F Minor',
    sunoVocalTags: ['Thick Autotune', 'Spatial Vocals', 'Melodic Ad-Libs', 'Cosmic Delivery'],
    sunoWeirdness: 70,
    sunoStyleInfluence: 85,
    sunoExcludeStyles: 'acoustic, folk, minimal, classical, bright pop',
    vocalDNA: 'Thick artistic autotune, modulated spatial voice, melodic ad-libs throughout. Singing is floating and planetary. Voice sits IN the production, not above it.',
    flowPattern: 'Spatial floating delivery, melodic ad-lib heavy, beat switch adaptation. Production-embedded vocal approach.',
    productionFingerprint: 'Signature: saturated deep bass, atmospheric floating synths, phaser/flanger effects, beat switches, massive reverb, cosmic chaotic production',
    culturalAnchors: 'Cosmic nightlife, chaotic festival energy, space themes, controlled chaos, psychedelic aesthetics',
    antiPatterns: 'No acoustic simplicity, no minimal beats, no clean production, never static — production must evolve',
    sunoMetatags: { vocalStyle: 'Melodic Rap', vocalEffect: 'Heavy Autotune, Reverb, Phaser', mood: 'Dark, Cosmic', energy: 'High', texture: 'Psychedelic Saturated', instrument: '808 Bass, Atmospheric Synths, Effects' }
  },

  'KENDRICK LAMAR': {
    artist: 'KENDRICK LAMAR',
    sunoStyleTemplate: 'Conscious Jazz-Rap, West Coast Lyrical, Experimental Hip-Hop, Multi-Voice Narrative, 80-120 BPM, Key: D Minor, Jazz Samples (Saxophone Contrabass), Live Drums, Boom Bap Hybrid, Orchestral Arrangements, Character Voice Changes, Dense Storytelling Flow, 2020s',
    sunoBpmRange: '80-120',
    sunoKey: 'D Minor',
    sunoVocalTags: ['Technical Complex Flow', 'Character Voices', 'Dense Storytelling', 'Zero Autotune'],
    sunoWeirdness: 75,
    sunoStyleInfluence: 90,
    sunoExcludeStyles: 'autotune melodic, commercial trap, bright pop, simple hooks',
    vocalDNA: 'Ultra-complex technical flow, character voice changes mid-song, deep storytelling. ZERO autotune. Variable speed: from slow contemplative to rapid-fire. Voice as dramatic tool.',
    flowPattern: 'Multi-layered storytelling, character voice shifts, tempo-adaptive delivery. Capable of boom bap, jazz, and trap rhythmic patterns.',
    productionFingerprint: 'Signature: jazz samples (contrabass, saxo, piano jazz), varied drums (boom bap, trap, live), orchestral arrangements, tempo changes, live elements',
    culturalAnchors: 'Social justice, racial politics, African-American heritage, religion, redemption, Compton identity, multi-layered narratives',
    antiPatterns: 'No autotune, no simple radio hooks, no conventional single-genre production',
    sunoMetatags: { vocalStyle: 'Rap', vocalEffect: 'Minimal', mood: 'Conscious, Intense', energy: 'Variable', texture: 'Jazz Organic', instrument: 'Jazz Ensemble, Live Drums, Orchestral' }
  },

  'PLAYBOI CARTI': {
    artist: 'PLAYBOI CARTI',
    sunoStyleTemplate: 'Rage Vamp Minimalist Trap, Punk Rap, Baby Voice Autotune, Distorted Aggressive Energy, 150-175 BPM, Key: E Minor, Extremely Saturated Bass, 8-bit Distorted Synths, Aggressive Minimal Drums, Dark Repetitive Melodies, Baby Voice Texture Vocals, Pure Sonic Energy Over Lyrics, 2020s',
    sunoBpmRange: '150-175',
    sunoKey: 'E Minor',
    sunoVocalTags: ['Baby Voice', 'Extreme Autotune', 'Textural Vocals', 'Minimalist Delivery'],
    sunoWeirdness: 85,
    sunoStyleInfluence: 88,
    sunoExcludeStyles: 'lyrical rap, conscious, storytelling, acoustic, jazz, R&B, slow ballad',
    vocalDNA: 'Baby voice, extreme autotune, high-pitched repetitive delivery. Words are TEXTURES not content — sound over meaning. Voice as rhythmic percussion instrument.',
    flowPattern: 'Minimalist repetitive phrasing, short punchy phrases, ad-lib dominant. Voice rhythm > lyrical content.',
    productionFingerprint: 'Signature: 8-bit distorted synths, extremely saturated bass, aggressive minimal drums, dark repetitive melodies, high BPM rage energy',
    culturalAnchors: 'Vamp aesthetic, pure energy over content, dark vibes, minimalist style, punk attitude',
    antiPatterns: 'No lyrical depth, no complex storytelling, no acoustic instruments, no slow tempos',
    sunoMetatags: { vocalStyle: 'Baby Voice Rap', vocalEffect: 'Extreme Autotune, Distortion', mood: 'Dark, Rage', energy: 'Maximum', texture: 'Distorted 8-bit', instrument: 'Saturated Bass, Distorted Synths, Minimal Drums' }
  },

  'KANYE WEST': {
    artist: 'KANYE WEST',
    sunoStyleTemplate: 'Avant-Garde Maximalist Hip-Hop, Gospel-Rap, Soul-Chopped Production, Grandiose Orchestration, 80-140 BPM, Key: Variable, Chopped Soul Samples, Massive Gospel Choirs, Grand Orchestration, Percussive Drums, Expressive Variable Vocals, Artistic Event Production, 2020s',
    sunoBpmRange: '80-140',
    sunoKey: 'Variable',
    sunoVocalTags: ['Expressive Variable', 'Rap-Singing Hybrid', 'Artistic Autotune', 'Dramatic Range'],
    sunoWeirdness: 80,
    sunoStyleInfluence: 90,
    sunoExcludeStyles: 'minimal lo-fi, conventional trap, standard pop, acoustic folk',
    vocalDNA: 'Expressive and varied voice, alternation rap/singing, unpredictable flow, artistic autotune moments. Can shift from whisper to scream.',
    flowPattern: 'Unpredictable expressive phrasing, dramatic shifts, gospel-influenced chanting, rap-to-singing switches.',
    productionFingerprint: 'Signature: chopped soul samples, massive gospel choirs, grandiose orchestration, percussive drums, radical production shifts, maximalist sonic ambition',
    culturalAnchors: 'Artistic ego, religion/gospel, fashion, family, grandeur, mental health, art as mission, controversy',
    antiPatterns: 'No minimal production, no conventional single-genre approach, never subtle or understated',
    sunoMetatags: { vocalStyle: 'Variable Rap-Singing', vocalEffect: 'Artistic Autotune', mood: 'Grandiose, Variable', energy: 'High', texture: 'Maximalist', instrument: 'Soul Samples, Gospel Choir, Orchestra, Drums' }
  },

  'LANA DEL REY': {
    artist: 'LANA DEL REY',
    sunoStyleTemplate: 'Cinematic Dream Pop, Sadcore Americana, Languid Nostalgic Beauty, 70-100 BPM, Key: F Major, Surf Guitars, Cinematic Strings, Slow Heavy Drums, Massive Reverb, Velvety Low Female Voice, Golden Melancholic Memory Atmosphere, 2020s',
    sunoBpmRange: '70-100',
    sunoKey: 'F Major',
    sunoVocalTags: ['Languid Singing', 'Velvety Low Voice', 'Whisper to Power', 'Ethereal Harmonies'],
    sunoWeirdness: 55,
    sunoStyleInfluence: 88,
    sunoExcludeStyles: 'aggressive, trap, drill, EDM, upbeat pop, punk',
    vocalDNA: 'Languid trailing singing, whispers, ethereal harmonies, low velvety female voice. Slow melancholic phrasing. Can shift to powerful moments.',
    flowPattern: 'Slow languid phrasing, drawn-out syllables, melodic trailing. Time feels suspended.',
    productionFingerprint: 'Signature: massive reverb, surf guitars, cinematic strings, slow heavy drums, 1960s reimagined atmosphere, golden hour nostalgia',
    culturalAnchors: 'Hollywood nostalgia, tragic glamour, Americana, toxic love, eternal summer, faded beauty',
    antiPatterns: 'No aggressive energy, no fast tempo, no trap beats, no EDM drops',
    sunoMetatags: { vocalStyle: 'Languid Singing', vocalEffect: 'Reverb, Delay', mood: 'Nostalgic, Melancholic', energy: 'Low', texture: 'Cinematic Vintage', instrument: 'Surf Guitar, Strings, Slow Drums' }
  },

  'ROSALÍA': {
    artist: 'ROSALÍA',
    sunoStyleTemplate: 'Experimental Flamenco Fusion, Art-Pop Deconstructed, Flamenco Melisma over Trap, 90-120 BPM, Key: A Minor, Flamenco Guitar, Palmas Claps, 808 Trap Bass, Modern Synths, Powerful Expressive Female Voice, Organic-Electronic Blend, 2020s',
    sunoBpmRange: '90-120',
    sunoKey: 'A Minor',
    sunoVocalTags: ['Flamenco Melisma', 'Powerful Expression', 'Whisper to Scream', 'Complex Textures'],
    sunoWeirdness: 75,
    sunoStyleInfluence: 88,
    sunoExcludeStyles: 'conventional pop, standard trap, acoustic folk, country',
    vocalDNA: 'Powerful expressive voice, flamenco melisma, complex vocal textures. Capable of shifting from whisper to passionate cry. Palmas-integrated rhythm.',
    flowPattern: 'Flamenco-influenced phrasing with modern rhythmic breaks. Traditional ornamentation over contemporary beats.',
    productionFingerprint: 'Signature: flamenco guitar, palmas claps, 808 trap bass, modern synths, organic/electronic blend, deconstructed arrangements',
    culturalAnchors: 'Femininity and power, tradition vs modernity, Andalusian roots, passion, visceral emotion',
    antiPatterns: 'No conventional pop, no standard genre production, no purely acoustic traditional',
    sunoMetatags: { vocalStyle: 'Flamenco Singing', vocalEffect: 'Minimal, Reverb', mood: 'Passionate, Intense', energy: 'Variable', texture: 'Organic-Electronic', instrument: 'Flamenco Guitar, Palmas, 808 Bass, Synths' }
  },

  'BILLIE EILISH': {
    artist: 'BILLIE EILISH',
    sunoStyleTemplate: 'Dark Minimalist Pop, ASMR Whisper Vocals, Intimate Massive Contrast, 60-120 BPM, Key: D Minor, Extreme Sub-Bass, Organic ASMR Textures, Silence as Instrument, Minimal Percussion, Close-Mic Whisper Female Voice, Silence-to-Power Dynamic, 2020s',
    sunoBpmRange: '60-120',
    sunoKey: 'D Minor',
    sunoVocalTags: ['Whisper Vocals', 'ASMR Intimacy', 'Dark Harmonies', 'Power Bursts'],
    sunoWeirdness: 65,
    sunoStyleInfluence: 85,
    sunoExcludeStyles: 'loud aggressive, standard pop, bright cheerful, conventional structure',
    vocalDNA: 'Whispered close-mic singing, dark doubled harmonies, intimate ASMR quality. Capable of shifting to raw powerful bursts. Silence is part of the performance.',
    flowPattern: 'Whispered intimate delivery building to powerful moments. Silence as structural element. Dynamic contrast is the signature.',
    productionFingerprint: 'Signature: extreme sub-bass, organic ASMR textures, silence as instrument, minimal percussion, massive dynamic range from whisper to power',
    culturalAnchors: 'Anxiety, nightmares, silent power, vulnerability, soft rebellion, youth angst',
    antiPatterns: 'No constant loudness, no standard pop structure, no bright cheerful production',
    sunoMetatags: { vocalStyle: 'Whisper', vocalEffect: 'Close-Mic, Dark Harmonies', mood: 'Dark, Intimate', energy: 'Low to Burst', texture: 'ASMR Minimal', instrument: 'Sub-Bass, Organic Textures, Minimal Drums' }
  },

  'AYA NAKAMURA': {
    artist: 'AYA NAKAMURA',
    sunoStyleTemplate: 'French Afro-Pop, Dancefloor R&B, Hook-Driven Urban Pop, 95-115 BPM, Key: G Minor, Warm Pop 808, Light Afro Percussion, Melodic Pop Guitar, Bright Synths, Powerful Female Voice, Ultra-Catchy Hooks, Danceable Pop Energy, 2020s',
    sunoBpmRange: '95-115',
    sunoKey: 'G Minor',
    sunoVocalTags: ['Powerful Singing', 'Light Autotune', 'Danceable Flow', 'Hook Queen'],
    sunoWeirdness: 30,
    sunoStyleInfluence: 82,
    sunoExcludeStyles: 'dark aggressive, minimal trap, boom bap, industrial',
    vocalDNA: 'Powerful recognizable female voice, light autotune, danceable chaloupé flow. Hooks are priority — every chorus must be instantly memorable.',
    flowPattern: 'Danceable melodic flow, hook-first approach, rhythmic bouncy phrasing, accessible melodies.',
    productionFingerprint: 'Signature: warm pop 808s, light afro percussion, melodic pop guitar, bright synths, modern luminous production',
    culturalAnchors: 'Feminine independence, love/heartbreak, dance, self-confidence, nightlife, unique urban French slang',
    antiPatterns: 'No dark themes, no aggressive production, no minimal beats',
    sunoMetatags: { vocalStyle: 'Melodic Singing', vocalEffect: 'Light Autotune', mood: 'Energetic, Danceable', energy: 'High', texture: 'Bright Pop', instrument: 'Pop 808, Afro Percussion, Guitar, Synths' }
  },

  'SOOLKING': {
    artist: 'SOOLKING',
    sunoStyleTemplate: 'Raï-Pop Moderne, Algerian Urban Melodic, Mediterranean Luminous, 95-115 BPM, Key: Bb Minor, Oriental Violins, Acoustic Guitar, Darbuka Percussion, Light 808, Emotional Melodic Voice, French-Darija Bilingual, Mediterranean Sunshine, 2020s',
    sunoBpmRange: '95-115',
    sunoKey: 'Bb Minor',
    sunoVocalTags: ['Raï Melodic', 'Light Autotune', 'Emotional Voice', 'Bilingual Delivery'],
    sunoWeirdness: 35,
    sunoStyleInfluence: 80,
    sunoExcludeStyles: 'aggressive trap, dark minimal, industrial, heavy bass',
    vocalDNA: 'Melodic singing with raï influences, light autotune, emotional luminous voice. French and Darija naturally mixed.',
    flowPattern: 'Melodic raï-influenced phrasing, emotional delivery, festive and nostalgic simultaneously.',
    productionFingerprint: 'Signature: oriental violins, acoustic guitars, darbuka percussion, modern pop melodies, light 808s, Mediterranean warmth',
    culturalAnchors: 'Algeria, nostalgia, love, festive spirit, dual cultural identity, Mediterranean sun',
    antiPatterns: 'No aggressive themes, no dark production, no heavy bass trap',
    sunoMetatags: { vocalStyle: 'Melodic Singing', vocalEffect: 'Light Autotune', mood: 'Nostalgic, Festive', energy: 'Medium-High', texture: 'Mediterranean Warm', instrument: 'Violins, Guitar, Darbuka, 808' }
  },

  'CHEB MAMI': {
    artist: 'CHEB MAMI',
    sunoStyleTemplate: 'Orchestral Raï Crossover, Mediterranean World Fusion, High Tenor Raï Vocals, 90-115 BPM, Key: Bb Minor, Darbuka Raï Percussion, Oriental Violins, Melodic Accordion, Wah Guitar, Orchestral Synth Pads, Pure Male Tenor No Autotune, French-Arabic Bilingual 50/50, 2020s',
    sunoBpmRange: '90-115',
    sunoKey: 'Bb Minor',
    sunoVocalTags: ['High Tenor', 'Arabic Melisma', 'Three-Octave Range', 'No Autotune'],
    sunoWeirdness: 40,
    sunoStyleInfluence: 88,
    sunoExcludeStyles: 'trap, drill, aggressive rap, EDM, rock, metal',
    vocalDNA: 'High tenor with Arabic melisma, three-octave range, pure vocal without autotune. Powerful emotional masculine voice. Raï traditional virtuosity.',
    flowPattern: 'Raï melodic phrasing with extended melisma on vowels. Emotional crescendos. French and Arabic alternating naturally.',
    productionFingerprint: 'Signature: darbuka percussion, oriental violins, melodic accordion, wah guitar, orchestral synth pads, warm analog production',
    culturalAnchors: 'Romantic love, Algerian nostalgia, exile and return, Mediterranean passion, sentimental poetry',
    antiPatterns: 'No trap beats, no aggressive delivery, no autotune, no 100% Arabic or 100% French — must mix both',
    sunoMetatags: { vocalStyle: 'Raï Singing', vocalEffect: 'Natural, Reverb', mood: 'Romantic, Nostalgic', energy: 'Medium', texture: 'Warm Analog', instrument: 'Darbuka, Violins, Accordion, Guitar' }
  },

  'DJALIL PALERMO': {
    artist: 'DJALIL PALERMO',
    sunoStyleTemplate: 'Urban Trap-Raï, Modern Street Raï, Youth Algerian Sound, 90-110 BPM, Key: A Minor, Heavy 808 Bass, Fast Trap Hi-Hats, Rhythmic Trap Guitar, Minimal String Synths, Atmospheric Pads, Young Male Tenor Voice, French-Darija Bilingual 40/60, 2020s',
    sunoBpmRange: '90-110',
    sunoKey: 'A Minor',
    sunoVocalTags: ['Young Male Tenor', 'Rap-Singing Hybrid', 'Urban Confidence', 'Street Energy'],
    sunoWeirdness: 35,
    sunoStyleInfluence: 80,
    sunoExcludeStyles: 'female voice, traditional raï only, acoustic folk, classical, metal',
    vocalDNA: 'MALE young tenor confident voice, rap-singing hybrid delivery. NEVER female. Urban energy with melodic instinct on hooks. Minimal vibrato, conversational street tone.',
    flowPattern: 'Rap-singing hybrid, street conversational tone with melodic hooks. French urban mixed with darija naturally.',
    productionFingerprint: 'Signature: heavy 808 bass, fast trap hi-hats, rhythmic trap guitar, minimal string synths, atmospheric pads, crisp modern digital production',
    culturalAnchors: 'Street confidence, Algerian pride, urban love, youth energy, nightlife, quartier',
    antiPatterns: 'NEVER female voice, no pure traditional raï, no acoustic folk',
    sunoMetatags: { vocalStyle: 'Rap-Singing', vocalEffect: 'Light Autotune', mood: 'Confident, Urban', energy: 'Medium-High', texture: 'Crisp Digital', instrument: '808 Bass, Trap Drums, Guitar, Synths' }
  },

  'TIF': {
    artist: 'TIF',
    sunoStyleTemplate: 'Raï-Trap Mediterranean, Algerian Urban Melodic, Nostalgic Oriental Melancholy, 90-110 BPM, Key: C Minor, Deep 808, Oud Melodic Lines, Mandole, Darbuka Percussion, Acoustic Guitar, Emotional Raï Autotune, French-Darija 50/50, Mediterranean Warmth, 2020s',
    sunoBpmRange: '90-110',
    sunoKey: 'C Minor',
    sunoVocalTags: ['Raï Melodic', 'Emotional Autotune', 'Vibrato on Holds', 'Bilingual'],
    sunoWeirdness: 40,
    sunoStyleInfluence: 82,
    sunoExcludeStyles: 'aggressive drill, dark minimal, industrial, bright pop',
    vocalDNA: 'Melodic with raï influences, controlled autotune, emotional voice, alternation singing/rap. Subtle vibrato on held notes.',
    flowPattern: 'Melodic raï phrasing with rap sections. Emotional delivery with Mediterranean warmth.',
    productionFingerprint: 'Signature: oud melodic lines, mandole, darbuka percussion, acoustic guitar, deep 808, oriental melodies, Mediterranean emotional atmosphere',
    culturalAnchors: 'Algerian nostalgia (Houma), exile, solar melancholy, the two shores, sea, destiny (Mektoub), impossible love',
    antiPatterns: 'No aggressive delivery, no dark minimal, no bright commercial pop',
    sunoMetatags: { vocalStyle: 'Raï Melodic', vocalEffect: 'Autotune, Reverb', mood: 'Nostalgic, Melancholic', energy: 'Medium', texture: 'Mediterranean Warm', instrument: 'Oud, Mandole, Darbuka, Guitar, 808' }
  },

  'WIZKID': {
    artist: 'WIZKID',
    sunoStyleTemplate: 'Smooth Afrobeats, Effortless Afro-Pop, Lagos Nonchalant Groove, 100-112 BPM, Key: Eb Minor, Log Drums Afrobeats, Shekere Percussion, Warm Sub Bass, Soft Synth Pads, Clean Afro Guitar Licks, Silky Male Tenor Voice, Effortless Cool Vibes, 2020s',
    sunoBpmRange: '100-112',
    sunoKey: 'Eb Minor',
    sunoVocalTags: ['Silky Tenor', 'Effortless Delivery', 'Yoruba Inflection', 'Smooth Melodic'],
    sunoWeirdness: 35,
    sunoStyleInfluence: 85,
    sunoExcludeStyles: 'aggressive, dark, trap heavy, rock, minimal',
    vocalDNA: 'MALE silky tenor, nonchalant effortless delivery. Melodic fluid singing with Yoruba inflection. NEVER aggressive — everything is cool and laid-back.',
    flowPattern: 'Effortless flowing delivery, voice glides on beat. Nonchalant phrasing that sounds natural.',
    productionFingerprint: 'Signature: log drums, shekere percussion, warm sub bass, soft synth pads, clean afro guitar licks, warm spacious analog production',
    culturalAnchors: 'Love, dance, Lagos nightlife, African pride, feminine beauty, positive vibes, success',
    antiPatterns: 'No aggression, no dark themes, no heavy trap bass, no forcing — everything must feel natural',
    sunoMetatags: { vocalStyle: 'Smooth Singing', vocalEffect: 'Minimal', mood: 'Cool, Smooth', energy: 'Medium', texture: 'Warm Analog', instrument: 'Log Drums, Shekere, Sub Bass, Guitar' }
  },

  'TEMS': {
    artist: 'TEMS',
    sunoStyleTemplate: 'Alt-Afro Soul, Ethereal R&B, Haunting African Soul, 95-110 BPM, Key: D Minor, Soft Afro Percussion, Warm Bass, Ethereal Synth Pads, Fingerpicked Acoustic Guitar, Layered Vocal Harmonies, Ethereal Female Voice Whisper to Power, Dreamy Warm Atmosphere, 2020s',
    sunoBpmRange: '95-110',
    sunoKey: 'D Minor',
    sunoVocalTags: ['Ethereal Alto-Soprano', 'Breathy Haunting', 'Whisper to Peak', 'Natural Vibrato'],
    sunoWeirdness: 55,
    sunoStyleInfluence: 85,
    sunoExcludeStyles: 'aggressive rap, trap, drill, EDM, bright commercial pop',
    vocalDNA: 'FEMALE ethereal alto-soprano, breathy haunting delivery. Capable of shifting from intimate whisper to powerful emotional peak. Natural vibrato. NEVER rap — all soul singing.',
    flowPattern: 'Soul-driven melodic phrasing, emotional crescendos, intimate passages building to peaks.',
    productionFingerprint: 'Signature: soft afro percussion, warm bass, ethereal synth pads, fingerpicked acoustic guitar, layered vocal harmonies as production element',
    culturalAnchors: 'Complex love, feminine independence, spirituality, introspection, quiet strength, earth connection',
    antiPatterns: 'No rap, no aggressive energy, no trap beats, no commercial pop hooks',
    sunoMetatags: { vocalStyle: 'Ethereal Singing', vocalEffect: 'Reverb, Harmonies', mood: 'Ethereal, Haunting', energy: 'Low-Medium', texture: 'Dreamy Warm', instrument: 'Afro Percussion, Bass, Guitar, Synth Pads' }
  },

  'ASAKE': {
    artist: 'ASAKE',
    sunoStyleTemplate: 'Amapiano-Fuji Fusion, Street Lagos Energy, Percussive Afrobeats, 108-118 BPM, Key: G Minor, Deep Amapiano Bass, Heavy Log Drums, Talking Drum Yoruba, Polyrhythmic Fuji Layers, Punchy Minimal Synth Stabs, Energetic Male Tenor, Stadium Crowd Energy, 2020s',
    sunoBpmRange: '108-118',
    sunoKey: 'G Minor',
    sunoVocalTags: ['Energetic Tenor', 'Percussive Attack', 'Fuji Ornaments', 'Crowd Chant'],
    sunoWeirdness: 55,
    sunoStyleInfluence: 85,
    sunoExcludeStyles: 'slow R&B, dark trap, minimal lo-fi, acoustic folk',
    vocalDNA: 'MALE energetic tenor, street chant/communal singing delivery. Percussive vocal attacks. Fuji traditional vocal ornaments. Designed for stadium energy.',
    flowPattern: 'Call-and-response communal phrasing, percussive vocal attacks, energetic hooks designed for group chanting.',
    productionFingerprint: 'Signature: deep amapiano bass, heavy log drums, talking drum Yoruba, polyrhythmic fuji layers, punchy minimal synth stabs, crisp digital production',
    culturalAnchors: 'Street party, Yoruba pride, Lagos nightlife, success, communal energy, faith',
    antiPatterns: 'No slow ballads, no dark introspective, no minimal quiet production',
    sunoMetatags: { vocalStyle: 'Energetic Chant', vocalEffect: 'Minimal', mood: 'Festive, Energetic', energy: 'Maximum', texture: 'Crisp Percussive', instrument: 'Amapiano Bass, Log Drums, Talking Drum, Synth Stabs' }
  },

  'JOÉ DWÈT FILÉ': {
    artist: 'JOÉ DWÈT FILÉ',
    sunoStyleTemplate: 'Modern Zouk R&B, Romantic Caribbean Pop, Gentle Island Groove, 90-105 BPM, Key: Ab Major, Warm Zouk Bass, Zouk Drum Machine Groove, Steel Pan Textures, Island Acoustic Guitar, Lush Synth Pads, Warm Male Tenor Voice, Tropical Romance Atmosphere, 2020s',
    sunoBpmRange: '90-105',
    sunoKey: 'Ab Major',
    sunoVocalTags: ['Warm Tenor', 'Romantic Delivery', 'Creole Accent', 'Natural Vibrato'],
    sunoWeirdness: 30,
    sunoStyleInfluence: 82,
    sunoExcludeStyles: 'aggressive, trap, drill, dark, minimal, rock',
    vocalDNA: 'MALE warm tender tenor, romantic intimate delivery. Melodic fluid singing with Creole accent. Natural vibrato. Never aggressive — all softness and sensuality.',
    flowPattern: 'Romantic melodic phrasing, gentle flowing delivery. French-Creole blend. Everything is soft, warm, enveloping.',
    productionFingerprint: 'Signature: warm zouk bass, zouk drum machine groove, steel pan textures, island acoustic guitar, lush synth pads, tropical warmth',
    culturalAnchors: 'Romantic love, Caribbean nostalgia, feminine beauty, gentle living, Caribbean nights, soft seduction',
    antiPatterns: 'No aggression, no trap/drill, no dark themes, NEVER rap — pure zouk/R&B singing',
    sunoMetatags: { vocalStyle: 'Romantic Singing', vocalEffect: 'Reverb', mood: 'Romantic, Warm', energy: 'Low-Medium', texture: 'Warm Tropical', instrument: 'Zouk Bass, Steel Pan, Guitar, Synth Pads' }
  },

  'NATE DOGG': {
    artist: 'NATE DOGG',
    sunoStyleTemplate: 'G-Funk West Coast, Gangsta Soul R&B, Smooth Baritone Hooks, 88-100 BPM, Key: Ab Major, Moog Minimoog Synths, Deep Funk Bass, Talk Box, Groove Claps, Slow Drums, Velvety Baritone Male Voice, Rich Harmonies, West Coast Chill, 1990s-2000s',
    sunoBpmRange: '88-100',
    sunoKey: 'Ab Major',
    sunoVocalTags: ['Velvety Baritone', 'Smooth R&B Hooks', 'Rich Harmonies', 'Street Attitude'],
    sunoWeirdness: 30,
    sunoStyleInfluence: 85,
    sunoExcludeStyles: 'aggressive trap, drill, EDM, dark minimal, industrial',
    vocalDNA: 'Velvety baritone male voice, ultra-smooth R&B hooks, rich harmonies. Pure singing with street attitude. The ultimate hook singer.',
    flowPattern: 'Smooth melodic hooks, slow groove delivery, laid-back West Coast phrasing.',
    productionFingerprint: 'Signature: G-Funk synths (Moog/Minimoog), deep funk bass, talk box, groove claps, slow drums',
    culturalAnchors: 'West Coast party, chill cruising, laid-back love, G-Funk lifestyle',
    antiPatterns: 'No aggressive energy, no fast tempo, no dark themes, no minimal production',
    sunoMetatags: { vocalStyle: 'Smooth Singing', vocalEffect: 'Reverb, Harmonies', mood: 'Chill, Smooth', energy: 'Medium', texture: 'G-Funk Vintage', instrument: 'Moog Synths, Funk Bass, Talk Box, Claps' }
  },

  'AUGXST': {
    artist: 'AUGXST',
    sunoStyleTemplate: 'Dark Emotional Cloud Rap, Ambient Trap, Melancholic Nocturnal Bass-Driven, Deep Ominous Sub Bass, Dark Melodic 808s, Ultra Slow Half-Time, Hazy Atmospheric Lonely Introspective, Dreamy Pads, Washed Synths, Distant Bell Plucks, Soft Autotuned Male Vocals Almost Sung Not Quite Singing, Toxic Romance Night Drive Luxury Sadness, Cinematic Fog, 2020s',
    sunoBpmRange: '60-80',
    sunoKey: 'Eb Minor',
    sunoVocalTags: ['Soft Autotune', 'Almost Sung Rap', 'Whisper-Croon', 'Breathy Close-Mic', 'Hazy Delivery'],
    sunoWeirdness: 45,
    sunoStyleInfluence: 82,
    sunoExcludeStyles: 'drill, rage, hyperpop, edm, bright pop, techno, rock, cinematic rock, upbeat, happy, acoustic, aggressive trap, R&B belting, full singing, soul runs, gospel, power vocals',
    vocalDNA: 'Soft autotuned MALE voice that ALMOST sings but never fully commits to singing. Breathy close-mic whisper-croon delivery — sits in the liminal space between rapping and singing. Voice drips with melancholy. NOT R&B singing — this is rap that gently floats over beats. No belting, no runs, no power. Everything is understated, hazy, barely there.',
    flowPattern: 'Ultra-slow half-time delivery. Words drip out slowly like condensation. Minimal syllable density — space and silence between phrases. The voice floats IN the production, not above it. Phrases trail off into reverb.',
    productionFingerprint: 'Signature: deep ominous sub bass, dark melodic 808s in half-time, dreamy atmospheric pads, washed-out detuned synths, distant bell plucks, sparse percussion, heavy reverb on everything, nocturnal fog, cinematic but intimate not epic',
    culturalAnchors: 'Toxic romance, night drives at 3am, luxury sadness, emotional isolation, intimate vulnerability, bedroom confessionals, nocturnal loneliness, rainy city aesthetics',
    antiPatterns: 'NEVER full R&B singing — the voice ALMOST sings but stays in whisper-croon rap. NEVER bright or uplifting. NEVER aggressive or loud. NEVER uptempo. NEVER acoustic or organic. NEVER drill or rage energy. NEVER power ballad. The whole point is understated darkness.',
    sunoMetatags: {
      vocalStyle: 'Whisper-Croon Rap',
      vocalEffect: 'Soft Autotune, Heavy Reverb, Close-Mic Breath',
      mood: 'Melancholic, Nocturnal, Lonely',
      energy: 'Low',
      texture: 'Hazy Atmospheric',
      instrument: 'Sub Bass, Dark 808, Dreamy Pads, Washed Synths, Distant Bells'
    }
  },

  'DEFAULT': {
    artist: 'DEFAULT',
    sunoStyleTemplate: 'Urban contemporary trap, dynamic 808 bass, hi-hat complexity, atmospheric production, street credibility, genre-adaptive',
    sunoBpmRange: '90-140',
    sunoKey: 'Minor',
    sunoVocalTags: ['Contemporary Rap', 'Urban Delivery'],
    sunoWeirdness: 50,
    sunoStyleInfluence: 75,
    sunoExcludeStyles: 'excessive acoustic, minimal beats',
    vocalDNA: 'Contemporary urban rap delivery, adaptable to genre, street credibility.',
    flowPattern: 'Contemporary rap flow, genre-adaptive phrasing.',
    productionFingerprint: 'Signature: modern urban production, dynamic drums, contemporary textures',
    culturalAnchors: 'Contemporary urban culture, street themes, modern production aesthetics',
    antiPatterns: 'None specific',
    sunoMetatags: {
      vocalStyle: 'Rap',
      vocalEffect: 'Reverb',
      mood: 'Contemporary',
      energy: 'Medium-High',
      texture: 'Modern Urban',
      instrument: '808 Bass, Contemporary Drums'
    }
  }
};

// FIX #1: Artist matching with exact then substring fallback
export function getArtistSonicDNA(inspiredBy: string): SonicDNA | null {
  if (!inspiredBy || inspiredBy === 'none') return null;

  const upper = inspiredBy.toUpperCase();

  // Exact match first
  const exactKey = Object.keys(SONIC_DNA_MAP).find(k => k.toUpperCase() === upper);
  if (exactKey) return SONIC_DNA_MAP[exactKey];

  // Substring match fallback (FIX #1)
  for (const key of Object.keys(SONIC_DNA_MAP)) {
    if (upper.includes(key.toUpperCase()) || key.toUpperCase().includes(upper)) {
      return SONIC_DNA_MAP[key];
    }
  }

  return SONIC_DNA_MAP['DEFAULT'] || null;
}

export function getArtistSunoSettings(inspiredBy: string) {
  const sonicDNA = getArtistSonicDNA(inspiredBy);
  if (!sonicDNA) return null;

  return {
    template: sonicDNA.sunoStyleTemplate,
    bpmRange: sonicDNA.sunoBpmRange,
    key: sonicDNA.sunoKey,
    vocalTags: sonicDNA.sunoVocalTags,
    weirdness: sonicDNA.sunoWeirdness,
    styleInfluence: sonicDNA.sunoStyleInfluence
  };
}
