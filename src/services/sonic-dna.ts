/**
 * Sonic DNA Map v3 - Music Generation Control Engine for Suno AI
 * Shifted from artistic description → behavioral generation control.
 * Each profile answers: "Does this help Suno generate BEHAVIOR, not just aesthetics?"
 * 60+ international artists with full engine mapping.
 */

export interface SonicDNA {
  artist: string;
  // ── STYLE CORE ──
  sunoStyleTemplate: string;       // One clear sentence defining the sonic identity + Suno tags
  sunoBpmRange: string;
  sunoKey: string;
  sunoVocalTags: string[];
  sunoWeirdness: number;
  sunoStyleInfluence: number;
  sunoExcludeStyles: string;
  // ── VOCAL ENGINE ──
  vocalDNA: string;                // Voice type, tone, processing, articulation, autotune, intensity, mix position
  // ── FLOW ENGINE ──
  flowPattern: string;             // Rhythm, pacing, density, pauses, repetition, delivery style
  // ── PRODUCTION ENGINE ──
  productionFingerprint: string;   // Core instrumentation, textures, drum patterns, density, sonic space
  // ── STRUCTURE DNA (CRITICAL) ──
  structureDNA?: string;           // Verse length, hook presence, repetition logic, beat switch, arrangement style
  // ── HOOK TYPE (CRITICAL) ──
  hookType?: string;               // no hook | chant hook | melodic autotune hook | hypnotic loop | anthem chorus
  // ── VOCAL PLACEMENT (CRITICAL) ──
  vocalPlacement?: string;         // ahead of beat | laid-back | floating in mix | percussive attack | close-mic intimate
  // ── ENERGY CURVE (CRITICAL) ──
  energyCurve?: string;            // flat hypnotic | slow burn | wave dynamics | constant aggression | explosive peaks
  // ── PRODUCTION MARKERS (MANDATORY) ──
  productionMarkers?: string;      // drum pattern, 808 behavior, melodic structure, arrangement density, spatial design
  // ── HOOK STRATEGY (MANDATORY) ──
  hookStrategy?: string;           // energy level, melodic complexity, repetition, hook type behavior
  // ── VERSE BEHAVIOR (MANDATORY) ──
  verseBehavior?: string;          // rhythm behavior, flow variation, articulation style, breath control
  // ── CONTEXT ──
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
  // ── CURSEURS V3 (D11–D18) — Sprint 1 corpus 25 artistes ──
  // Tous optionnels pour rétrocompatibilité. Quand absents, comportement par défaut inchangé.
  /** D11 — text-first (rap classique) | melody-first (Hamza/Tiakola) | hook-driven (Jul) */
  compositionMode?: 'text-first' | 'melody-first' | 'hook-driven';
  /** D12 — ancrage territorial linguistique. lang + density 0..100 */
  territorialAnchor?: {
    lang: 'none' | 'arabe' | 'kabyle' | 'lingala' | 'creole' | 'italo' | 'darija';
    density: number;
    role?: 'lexical' | 'samples' | 'both';
  };
  /** D13 — registre dominant : combatif | contemplatif | hybride */
  registerMode?: 'combative' | 'contemplative' | 'hybrid';
  /** D14 — non-narratif | narratif réaliste | concept fictionnel (Laylow) */
  conceptualMode?: 'non-narrative' | 'narrative-real' | 'concept-fictional';
  /** D15 — densité de références externes 0..100 (Freeze=encyclopédique) */
  referenceDensity?: number;
  /** D16 — simple-volontaire (Jul) | standard | virtuose (Alpha Wann) */
  technicityMode?: 'simple-volunteer' | 'standard' | 'virtuoso';
  /** D17 — code d'honneur : none | implicite | central (Rohff/Lacrim) */
  honorCode?: 'none' | 'implicit' | 'central';
  /** D18 — gravité tempo BPM ressentie (slow/mid/fast) */
  tempoGravity?: 'slow' | 'mid' | 'fast';
  /** Profil harmonique explicite (override le productionFingerprint quand présent) */
  harmonicProfileId?: string;
}

const SONIC_DNA_MAP: Record<string, SonicDNA> = {
  // French Artists

  'JUL': {
    artist: 'JUL',
    sunoStyleTemplate: 'Melodic Marseille Rap, Continuous Sing-Rap Flow, Repetitive Sticky Toplines, Simple Chord Progressions, 120-130 BPM, Key: C Minor, Bouncy 808 Kick, Simple Melodic Piano Loop, Bright Synth Pads, Standard Trap Hi-Hats, High-Pitched Nasal Autotune Male Voice, Mediterranean Upbeat Energy, 2020s',
    sunoBpmRange: '120-130',
    sunoKey: 'C Minor',
    sunoVocalTags: ['Melodic Singing', 'Autotune', 'Bright Timbre', 'Rapid Phrasing'],
    sunoWeirdness: 25,
    sunoStyleInfluence: 85,
    sunoExcludeStyles: 'no dark minor key atmospherics, no aggressive drill patterns, no boom bap samples, no heavy distorted 808, no whisper/ASMR vocals, no orchestral arrangements',
    vocalDNA: 'High-pitched nasal male voice, constant light autotune, continuous sing-rap with no separation between verse and hook. Rapid syllable delivery, uplifting inflection. Never pure rap, never spoken — always melodic continuous stream.',
    flowPattern: 'Ultra-melodic, rapid syllabic flow with constant rising inflections. Bouncy, optimistic phrasing.',
    productionFingerprint: 'Signature: bright piano lines (major key bursts), punchy rebound 808s, fast hi-hats, digital synths, Mediterranean warmth',
    culturalAnchors: 'Marseille street culture, quartier loyalty, sun and sea, uplifting street love, popular victory',
    structureDNA: 'Standard verse-hook-verse. Short verses (8-12 bars). Strong melodic hook. Bright bouncy arrangement.',
    hookType: 'Melodic sung hook with uplifting inflection',
    vocalPlacement: 'Floating in mix, laid-back with bright presence',
    energyCurve: 'Constant high energy — maintains bright optimism throughout',
    productionMarkers: 'bouncy 808 kick with short decay, simple melodic piano loop repeating, bright synth pad chords, standard trap hi-hat pattern, low arrangement density, no beat switches, constant groove',
    hookStrategy: 'repetitive melodic phrase, simple sticky topline, narrow pitch range, high repetition count, sing-along singability over complexity, no dramatic uplift',
    verseBehavior: 'continuous sing-rap stream, no clear verse/hook separation, rapid syllable delivery, minimal pauses, constant melodic flow, low rhythmic variation',
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
    sunoStyleTemplate: 'Melodic French Trap, Hit-Making Duality Rap-Chorus, Street Anthem Energy, 130-145 BPM, Key: A Minor, Punchy 808 Sub, Emotional Piano Melodies, Atmospheric String Pads, Crisp Trap Drums, Deep Masculine Voice Alternating Rap-Singing, Autotune Melodic Hooks, Street Success Anthemic, 2020s',
    sunoBpmRange: '130-145',
    sunoKey: 'A Minor',
    sunoVocalTags: ['Melodic Rap', 'Autotune', 'Emotional Delivery', 'Technical Flow'],
    sunoWeirdness: 25,
    sunoStyleInfluence: 80,
    sunoExcludeStyles: 'no experimental structure, no minimal ambient production, no acoustic folk, no lo-fi bedroom sound, no aggressive drill patterns, no whisper/ASMR delivery',
    vocalDNA: 'Deep masculine voice with clear duality: technical rap flow on verses (minimal autotune), melodic autotune singing on hooks (emotional uplift). Hitmaking instinct — hooks are designed to be anthemic and memorable. Street sincerity in tone.',
    flowPattern: 'Technical rap passages alternate with melodic singing sections. Capable of both fast-paced delivery and emotional holds.',
    productionFingerprint: 'Signature: deep 808s, dark moody piano, acoustic melancholy guitar, complex hi-hat patterns (rolls, triplets), atmospheric pads',
    structureDNA: 'Standard verse-hook-verse. Dense verses (16+ bars). Strong melodic hook sections. Clear contrast between rap verses and sung choruses.',
    hookType: 'Melodic autotune hook with emotional resonance',
    vocalPlacement: 'Floating in mix, laid-back delivery with emotional presence',
    energyCurve: 'Wave dynamics — builds from verse into powerful melodic hooks, peaks on chorus',
    productionMarkers: 'punchy 808 sub with medium decay, emotional piano melody loops, atmospheric string pads on hooks, crisp trap drums with standard pattern, moderate arrangement density building on chorus, anthemic production swell on hooks',
    hookStrategy: 'melodic emotional chorus with autotune, anthem-level memorability, clear pitch variation, repetitive enough to sing along, dramatic emotional uplift from verse to hook',
    verseBehavior: 'dense technical rap flow, clear articulation, steady rhythm with occasional acceleration, minimal autotune on verses, street sincerity — earnest not ironic, builds intensity toward hook transition',
    culturalAnchors: 'Street ascension narrative, 91 district, melancholy at the top, solitude, family bonds, monetary escape',
    antiPatterns: 'Avoid cheerful themes, minimal beats, bright synths, spoken word, jazz chords',
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
    sunoStyleTemplate: 'Dark Brussels Trap-Noir, Intimate Atmospheric Rap, Elastic Phrasing, Sensual-to-Sinister Shifts, 130-142 BPM, Key: G Minor, Moody Minor Piano Loops, Deep Sub 808, Dark Ambient Pads, Minimal Crisp Drums, Whispered Intimate Male Voice, Spoken-Sung Ambiguity, Nocturnal Underground Brussels, 2020s',
    sunoBpmRange: '130-142',
    sunoKey: 'G Minor',
    sunoVocalTags: ['Masculine Raspy Rap', 'Cold Metallic Autotune', 'Nonchalant Authoritative', 'Staccato Flow Phrase-End Doubling'],
    sunoWeirdness: 65,
    sunoStyleInfluence: 85,
    sunoExcludeStyles: 'no bright pop uplift, no afro-pop festive energy, no standard trap flow patterns, no acoustic folk warmth, no choir or gospel layers, no conventional verse-chorus',
    vocalDNA: 'Low sensual male voice, elastic delivery with deliberate pauses. Spoken-sung ambiguity — neither clearly rapping nor singing. Light processing, close-mic intimacy. Shifts between whispered vulnerability and cold menace. Belgian-Congolese accent subtle.',
    flowPattern: 'Staccato rap flow with heavy phrase-end doubling and short echo delays. Authoritative nonchalant delivery. Strategic pauses. Alternates between drill flow (142 BPM) and nocturnal trap (130 BPM).',
    productionFingerprint: 'MODE 1 (DRILL 142 BPM): Moody minor key piano loops, haunting atmospheric textures, sliding distorted sub-bass 808, crisp metallic triplet hi-hats, hard-hitting snare, analog saturation, wide soundstage, close-mic intimacy. MODE 2 (NOCTURNAL 130 BPM): Nocturnal atmospheric pads, filtered Rhodes cold, heavy sliding 808 sub-bass, crisp digital trap drums, lush reverb and delay, sophisticated expensive soundscape.',
    culturalAnchors: 'Sexual rawness as dark philosophy, existential introspection, toxic relationships, duality of street and intellect, Belgian-French noir identity, provocateur intellectual',
    structureDNA: 'Verse-hook-verse with atmospheric spacing. Dark verses building to nocturnal peak. Minimalist hook sections with metallic autotune crooning.',
    hookType: 'Cold metallic autotune rap-croon hook — NEVER warm melodic R&B hook',
    vocalPlacement: 'Close-mic intimate with wide soundstage reverb, laid-back nonchalant positioning',
    energyCurve: 'Nocturnal build — starts dark and intimate, builds to expensive sophisticated peak',
    productionMarkers: 'moody minor key piano loops with haunting repetition, deep sub 808 with slow attack, dark ambient floating pads, minimal crisp drum pattern, wide stereo field, intimate close-mic spatial design, low arrangement density with intentional emptiness',
    hookStrategy: 'half-sung murmur hook, low melodic complexity, hypnotic repetition, sensual undertone, spoken-sung delivery on hooks too, no bright chorus swell',
    verseBehavior: 'elastic phrasing with deliberate pauses and silence, spoken-sung ambiguity, low-to-mid tempo delivery, breath-heavy intimate flow, unpredictable rhythm shifts, sensual-to-sinister tone changes within same verse',
    antiPatterns: 'Avoid afro-trap or afrobeats influence. Avoid warm festive bounce. Avoid smooth R&B crooner tone. Avoid heavy metallic autotune dominance — autotune is restrained. Production stays COLD and MINIMAL.',
    sunoMetatags: {
      vocalStyle: 'Rap',
      vocalEffect: 'Cold Metallic Autotune',
      mood: 'Dark, Nocturnal, Sophisticated',
      energy: 'Medium',
      texture: 'Dark Trap Drill',
      instrument: 'Minor Piano Loops, Sliding 808, Filtered Rhodes, Metallic Hi-Hats'
    }
  },

  'GAZO': {
    artist: 'GAZO',
    sunoStyleTemplate: 'Dark French Drill, Aggressive Percussive Rap, 93 Energy Street Raw, 140-145 BPM, Key: D Minor, Heavy Sliding 808, Dark Minor Piano Loop, Crisp UK-Style Drill Hi-Hats, Analog Saturation, Deep Masculine Voice Close-Mic, Breath Impacts as Percussion, Raw Ad-Lib Energy, Seine-Saint-Denis Darkness, 2020s',
    sunoBpmRange: '140-145',
    sunoKey: 'D Minor',
    sunoVocalTags: ['Masculine Raspy Vocals', 'Grainy Timber', 'Authoritative Nonchalant Delivery', 'Staccato Melodic Flow'],
    sunoWeirdness: 30,
    sunoStyleInfluence: 85,
    sunoExcludeStyles: 'no melodic singing hooks, no bright synth pads, no soft R&B chords, no acoustic instruments, no clean polished mix, no lo-fi or ambient textures',
    vocalDNA: 'Deep masculine voice, raw close-mic intimacy with analog saturation. Percussive choppy delivery — voice acts as percussion. Breath impacts audible between phrases. Heavy ad-lib presence (93 accent markers). No autotune, no singing — pure aggressive rap.',
    flowPattern: 'Staccato melodic drill flow with heavy phrase-end doubling. Syncopated delivery with dramatic pauses. Authoritative nonchalant phrasing. Fast percussive bursts alternating with spaced menacing bars.',
    productionFingerprint: 'Signature: moody minor-key piano loops, haunting atmospheric textures, sliding distorted sub-bass 808, crisp metallic triplet hi-hats, hard-hitting snare, short echo delays, wide soundstage, analog saturation, hi-end studio mix, close-mic intimacy, nocturnal urban street vibe',
    culturalAnchors: 'Seine-Saint-Denis 93 street territory, nocturnal urban vibe, violence, competition, dirty money, survival, intimidation, street credibility',
    structureDNA: 'Standard verse-hook-verse. Dense verses (16+ bars). Short melodic hook sections.',
    hookType: 'Aggressive chant hook with phrase-end doubling — NEVER melodic singing',
    vocalPlacement: 'Ahead of beat, percussive aggressive attack',
    energyCurve: 'Constant aggression — high drill intensity',
    productionMarkers: 'heavy sliding 808 with aggressive attack, dark minor key piano loop repeating, crisp UK-style drill hi-hat rolls, analog tape saturation on master, close-mic raw vocal recording, minimal arrangement — 808 + piano + drums only, no pads',
    hookStrategy: 'chant hook with repeated short aggressive phrase, phrase-end doubling effect, no melodic variation, raw energy over melody, ad-libs fill gaps, slogan-style repetition',
    verseBehavior: 'percussive choppy delivery, breath impacts as rhythmic element, staccato phrasing, aggressive consonant emphasis, rapid short phrases with hard stops, ad-libs between bars',
    antiPatterns: 'Avoid melodic singing, pop hooks, uplifting messages, acoustic instruments, bright moments, lo-fi or chill',
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
    sunoStyleTemplate: 'Dark French Drill-Trap, Cold Monotone Rap, Repetitive Dark Loop Production, Minimalist Menacing Atmosphere, 130-145 BPM, Key: D Minor, Sliding 808 Sub Bass, Dark Repetitive Piano Loop, Crisp Drill Hi-Hats, Cold Reverb Space, Monotone Male Voice No Autotune, Occult Dark Aura, 2020s',
    sunoBpmRange: '130-145',
    sunoKey: 'D Minor',
    sunoVocalTags: ['Monotone Cold Delivery', 'Dense Technical Flow', 'No Autotune', 'Detached Menacing'],
    sunoWeirdness: 40,
    sunoStyleInfluence: 90,
    sunoExcludeStyles: 'no melodic singing hooks, no bright major key chords, no warm R&B textures, no acoustic instruments, no uplifting energy builds, no afro or dancehall rhythms',
    vocalDNA: 'Monotone cold grave voice. Zero autotune. Flat detached delivery — emotion is suppressed, not absent. Dense rapid articulation with surgical precision. Voice sits dry in the mix, close-mic.',
    flowPattern: 'Dense technical flow with rapid syllable stacking. Constant tempo — rarely slows down. Short percussive phrases chained together. No pauses for hooks.',
    productionFingerprint: 'Signature: dark repetitive loops (piano/synth), sliding 808 sub bass, drill hi-hats, cold reverb space, minimalist menacing atmosphere, occasional dark sample drops',
    structureDNA: 'Long verses with minimal breaks. Hooks are short chanted phrases or absent entirely. No conventional chorus — repetitive loop carries the track. Static arrangement with subtle textural shifts.',
    hookType: 'Chant hook or no hook — short repeated phrase, never melodic. Hypnotic loop repetition.',
    vocalPlacement: 'Dry close-mic, ahead of beat, percussive attack delivery',
    energyCurve: 'Flat hypnotic — constant cold intensity from start to finish',
    productionMarkers: 'repetitive dark loop (single melodic phrase), cold sub 808 with short decay, UK drill hi-hat patterns, sparse arrangement with hypnotic repetition, no variation within sections, dark ambient drone underneath',
    hookStrategy: 'no traditional hook — verse runs continuously, occasional chant repetition of key phrase, monotone delivery consistent throughout, no melodic shift for chorus',
    verseBehavior: 'cold monotone flow, steady relentless pace, minimal pitch variation, dense lyrical content delivered flat, no emotional projection, machine-like consistency',
    culturalAnchors: 'Occult references, conspiracy theories, lyrical supremacy, dark coded language, intellectual provocation',
    antiPatterns: 'No melodic singing, no emotional display, no bright or uplifting production, no conventional pop chorus',
    sunoMetatags: {
      vocalStyle: 'Cold Monotone Rap',
      vocalEffect: 'Dry, Minimal Reverb',
      mood: 'Dark, Cold, Menacing',
      energy: 'Medium-High',
      texture: 'Dark Minimalist Loop',
      instrument: 'Sliding 808, Dark Piano Loop, Drill Hi-Hats'
    }
  },

  'NEKFEU': {
    artist: 'NEKFEU',
    sunoStyleTemplate: 'Versatile French Lyrical Rap, Mixed Production Palette, Clear Articulate Male Voice, Poetic Introspective Atmosphere, 85-115 BPM, Key: D Minor, Diverse Beats (Trap Drums to Boom Bap to Pop-Rap), Piano Melodies, Warm Bass, Subtle Synth Textures, Organic and Electronic Blended, Natural Voice No Heavy Autotune, 2020s',
    sunoBpmRange: '85-115',
    sunoKey: 'D Minor',
    sunoVocalTags: ['Clear Articulate Voice', 'Technical Lyrical Rap', 'Warm Singing on Hooks', 'No Heavy Autotune'],
    sunoWeirdness: 30,
    sunoStyleInfluence: 75,
    sunoExcludeStyles: 'no aggressive drill energy, no heavy distorted 808, no screaming or hardcore delivery, no mumble rap, no lo-fi bedroom production, no pure R&B singing',
    vocalDNA: 'Clear articulate male voice with natural warmth. Zero heavy autotune — natural voice. Technical rapid flow on verses. Can sing warmly on hooks with real melodic ability. Voice sits clean in the mix.',
    flowPattern: 'Technical lyrical rap with dense internal rhymes. Conversational storytelling cadence. Accelerations on verse peaks. Slows for emotional moments. Versatile — adapts to beat.',
    productionFingerprint: 'Signature: mixed palette — can be boom bap samples, trap drums, pop-rap piano, or electronic textures. Piano melodies, warm bass, subtle synths. Production varies by track but always polished.',
    structureDNA: 'Classic verse-hook-verse. Clear contrast between dense lyrical verses and more open melodic hooks. Bridges and outros common. Evolving arrangement — each section adds texture.',
    hookType: 'Melodic sung hook (natural voice, not autotune) or catchy rap hook with rhythmic repetition',
    vocalPlacement: 'Clean in mix, slightly ahead of beat, clear articulation priority',
    energyCurve: 'Slow burn — starts calm, builds through verses, peaks on final verse or bridge',
    productionMarkers: 'mixed production palette — jazz samples to electronic beats to live instruments, moderate arrangement density, varied drum patterns per track, warm-to-cold range depending on mood, clean polished mix',
    hookStrategy: 'melodic sung hook with clear articulation, moderate complexity, lyrical wordplay in hooks, accessible but intelligent, no autotune — natural voice melody',
    verseBehavior: 'versatile flow — can be rapid technical or relaxed melodic, clear French articulation, literary phrasing, breath control allows long complex sentences, intellectual delivery not street aggressive',
    culturalAnchors: 'Travel, love, introspection, literature, gentle melancholy, Parisian beauty, creative exploration',
    antiPatterns: 'No aggressive shouting throughout, no street clichés, no heavy autotune',
    sunoMetatags: {
      vocalStyle: 'Lyrical Rap with Sung Hooks',
      vocalEffect: 'Natural, Minimal Processing',
      mood: 'Introspective, Poetic, Warm',
      energy: 'Medium',
      texture: 'Polished Mixed',
      instrument: 'Piano, Diverse Drums, Bass, Synth Textures'
    }
  },

  'LAYLOW': {
    artist: 'LAYLOW',
    sunoStyleTemplate: 'Digital trap, experimental R&B-rap, futuristic melodic, pitch-shifted vocals, atmospheric synths, glitchy textures, cinematic space',
    sunoBpmRange: '100-120',
    sunoKey: 'Minor',
    sunoVocalTags: ['Experimental Autotune', 'Pitch-Shifted Vocals', 'Melodic Effects', 'Modulated Delivery'],
    sunoWeirdness: 60,
    sunoStyleInfluence: 85,
    sunoExcludeStyles: 'no acoustic organic production, no boom bap dusty drums, no aggressive drill patterns, no standard pop structure, no raw unprocessed vocals, no bright cheerful energy',
    vocalDNA: 'Artistic autotune with heavy modulation, pitch shifts, creative vocal effects. Elastic unpredictable flow between rap and singing.',
    flowPattern: 'Elastic unpredictable phrasing, glitch-like rhythmic breaks, melodic bursts treated with effects, cinematic build-ups.',
    productionFingerprint: 'Signature: futuristic synths, deep 808s, electronic atmospheric textures, manipulated samples, subtle glitches, immersive space',
    culturalAnchors: 'Technology and emotion duality, digital solitude, dystopian love, futurism, modern anxiety, digital aesthetics',
    structureDNA: 'Unconventional structure with beat switches. Long atmospheric sections. Experimental arrangement.',
    hookType: 'Hypnotic loop hook or minimal repetitive phrase',
    vocalPlacement: 'Floating in effects and reverb, experimental placement',
    energyCurve: 'Flat hypnotic with textural shifts',
    productionMarkers: 'digital trap with R&B undertones, futuristic synth textures, processed spatial drums, wide stereo imaging, layered ambient pads, moderate-to-high arrangement density, experimental sound design elements',
    hookStrategy: 'layered cloud hook with processed vocals, melodic autotune floating delivery, ethereal repetition, dreamy atmospheric chorus, low energy but hypnotic pull',
    verseBehavior: 'elastic phrasing between rap and singing, smooth transitions between delivery modes, futuristic processing on voice, deliberate cool detachment, mid-tempo flow with R&B rhythmic feel',
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
    sunoWeirdness: 25,
    sunoStyleInfluence: 80,
    sunoExcludeStyles: 'no aggressive trap heavy 808, no dark drill patterns, no heavy autotune, no screaming or hardcore delivery, no minimal ambient, no experimental noise',
    vocalDNA: 'Clear unfiltered voice, excellent articulation, conversational rhythm, capable of humor and pathos. Zero autotune, natural delivery.',
    flowPattern: 'Conversational storytelling with ironic wit and narrative clarity. Capable of rapid technical passages and slow introspective moments. Emphasis on narrative structure and lyrical precision.',
    productionFingerprint: 'Signature: warm live samples, organic instrumentation, acoustic guitars, live drums, literary atmosphere, accessibility',
    structureDNA: 'Verse-hook-verse with emphasis on storytelling clarity. Verses build narrative (12-16 bars). Hooks provide reprieve with melodic or rhythmic simplicity. Strong structural narrative arc.',
    hookType: 'Melodic sung hook or rhythmic rap hook emphasizing clarity over complexity',
    vocalPlacement: 'Clean forward in mix, ahead of beat, natural intimate articulation',
    energyCurve: 'Slow burn — starts conversational, builds through narrative development, peaks on final verse or bridge',
    productionMarkers: 'warm sample-based production, electronic-pop beats, moderate arrangement density, clean polished mix, occasional guitar textures, standard song structure, accessible production choices',
    hookStrategy: 'conversational spoken hook or simple melodic phrase, witty punchline as hook, accessible singable chorus, moderate repetition, humor-driven memorability',
    verseBehavior: 'conversational narrative delivery, storytelling pacing, clear French articulation, low-to-moderate tempo, natural speech rhythm, witty observation style, never aggressive — wry and intelligent',
    culturalAnchors: 'Social observation, introspection, love, melancholy humor, Parisian life, literary references, human vulnerability',
    antiPatterns: 'Avoid autotune, minimal trap, aggressive shouting, dark sinister themes',
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
    sunoStyleTemplate: 'Minimal Luxury French Rap, Dark Authoritative Trap, Sparse Dominant Phrasing, 125-140 BPM, Key: C# Minor, Deep Dominant 808 Sub, Dark Minimal Piano, Sparse Orchestral Stabs, Crisp Trap Drums, Deep Authoritative Baritone Voice, Slow Dominant Phrasing, Luxury Nocturnal Confidence, 2020s',
    sunoBpmRange: '125-140',
    sunoKey: 'C# Minor',
    sunoVocalTags: ['Authoritative Rap', 'Deep Baritone', 'Dark Hook Singing', 'Precise Punchlines'],
    sunoWeirdness: 35,
    sunoStyleInfluence: 85,
    sunoExcludeStyles: 'no soft melodic R&B, no acoustic warmth, no lo-fi chill textures, no fast drill hi-hats, no bright pop hooks, no gospel or choir layers',
    vocalDNA: 'Deep authoritative baritone, dominant presence. Dry close-mic, minimal processing. Slow deliberate phrasing with weight on each word. Never rushed, never soft. Voice IS the beat — everything else serves it.',
    flowPattern: 'Choppy precise punchline delivery. Short impactful phrases. Dark melodic hooks on choruses with somber autotune. Verses are pure rap technique.',
    productionFingerprint: 'Signature: dark cinematic orchestrations (dramatic violins, somber choirs), distorted heavy 808s, industrial synth textures, massive production with cinematic scope, punchy trap drums',
    culturalAnchors: 'Solitary dominance, fierce competition, cold luxury, betrayal, heritage, street credibility elevated to cinematic art',
    structureDNA: 'Long dense verses (18+ bars). Short or minimal hooks. Repetitive production carries track.',
    hookType: 'Chant hook or no hook — short phrase repetition',
    vocalPlacement: 'Dry ahead of beat, percussive attack',
    energyCurve: 'Constant aggression — high intensity throughout',
    productionMarkers: 'deep dominant 808 sub bass with long sustain, dark minimal piano stabs (not loops), sparse orchestral brass/string stabs, crisp trap drums, low arrangement density — space is luxury, wide stereo panoramic',
    hookStrategy: 'dominant baritone refrain, sparse phrasing as hook, low melodic complexity, weight and authority over catchiness, no sing-along melody — presence IS the hook',
    verseBehavior: 'slow dominant phrasing, deliberate word weight, low syllable density, controlled powerful delivery, minimal pauses — continuous authoritative stream, never fast never rushed',
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
    sunoExcludeStyles: 'no melodic singing hooks, no rock guitar riffs, no soft acoustic instruments, no bright pop energy, no lo-fi chill textures, no R&B smooth chords',
    vocalDNA: 'Very deep baritone imposing voice, aggressive choppy flow, ZERO melodic autotune, percussive punchy delivery. Guttural ad-libs. Rap aggression from VOICE not instruments.',
    flowPattern: 'Aggressive choppy flow with percussive impact. Short punchy phrases. Territorial dominance. Dramatic pauses between brutal bars.',
    productionFingerprint: 'Signature: heavy 808 sub bass, trap snare rolls, fast triplet hi-hats, dark minor piano chords, minimal dark synth pads. NO guitar, NO rock, NO metal — pure trap production.',
    culturalAnchors: 'Sevran street warfare, 93 banlieue, physical domination, intimidation, dirty money, survival, territorial aggression',
    structureDNA: 'Dense verse-hook-verse. Long technical verses (18+ bars). Hard hitting hook.',
    hookType: 'Aggressive chant hook or rhythmic rap hook',
    vocalPlacement: 'Ahead of beat, percussive aggressive attack',
    energyCurve: 'Constant aggression — high tension throughout',
    productionMarkers: 'heavy 808 sub bass punchy, trap snare rolls aggressive, fast triplet hi-hats, dark minor piano chords sparse, minimal dark synth pads, no guitar or rock instruments — pure trap only',
    hookStrategy: 'aggressive chant hook, short brutal repeated phrase, no melodic variation, raw energy and dominance as hook, percussive vocal delivery, territorial slogan repetition',
    verseBehavior: 'aggressive choppy percussive delivery, short punchy phrases with hard stops, dramatic pauses between bars, deep baritone territorial dominance, guttural ad-libs, no smooth flow — impact over musicality',
    antiPatterns: 'Avoid metal, rock guitar, electric guitar, singing or pop vocals, bright or happy, acoustic instruments',
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
    sunoStyleTemplate: 'Technical French Rap, Dark Ironic Trap, Controlled Tonal Instability, 100-135 BPM, Key: C Minor, Varied 808 Patterns, Dark Melodic Loops with Dissonance, Unconventional Drum Patterns, Surprise Elements, Articulate Mid-Range Male Voice, Ironic Detached Delivery, Absurd Structural Shifts, 2020s',
    sunoBpmRange: '100-135',
    sunoKey: 'C Minor',
    sunoVocalTags: ['Technical Rap', 'Clear Dry Voice', 'Fast Delivery', 'Ironic Tone Shifts'],
    sunoWeirdness: 60,
    sunoStyleInfluence: 80,
    sunoExcludeStyles: 'no standard melodic trap hooks, no warm emotional R&B, no acoustic folk sincerity, no predictable verse-chorus structure, no one-dimensional aggressive flow, no conventional pop chorus',
    vocalDNA: 'Mid-range articulate male voice, ironic detached tone. Shifts between cold technical rap and exaggerated theatrical delivery. Clean enunciation, no autotune. Controlled chaos — voice is precise even when content is absurd.',
    flowPattern: 'Fast technical flow as baseline. Dense multisyllabic rhymes. Occasional mid-verse tempo shifts (not every bar). Ironic comedic timing — pauses for effect before punchlines. Technical precision over chaos.',
    productionFingerprint: 'Signature: hard trap drums as main axis, dark synth textures, punchy 808 bass, occasional beat switch (not constant), unexpected sample drops, production that supports rather than dominates',
    structureDNA: 'Standard verse-hook structure but hooks can be ironic spoken phrases or rapid-fire bars instead of melodic. Occasional beat switch between sections. Verses are dense and long.',
    hookType: 'Ironic chant hook or rapid-fire punchline hook — never melodic autotune. Catchy through repetition and rhythm, not melody.',
    vocalPlacement: 'Dry forward in mix, percussive attack, ahead of beat on fast sections',
    energyCurve: 'Wave dynamics — builds through verse, drops for ironic aside, re-accelerates for climax',
    productionMarkers: 'varied 808 patterns (changes within track), dark melodic loops with dissonant notes, unconventional drum fills and pattern breaks, surprise sound design elements, moderate arrangement density with structural surprises, controlled sonic instability',
    hookStrategy: 'ironic slogan hook or absurd repetitive phrase, tonal instability in delivery, no standard melodic chorus — hooks work through memorability of phrase not melody, possible anti-hook (intentionally non-catchy)',
    verseBehavior: 'dense technical rap with clean articulation, controlled flow variation — accelerates and decelerates deliberately, ironic tone shifts mid-verse, precise multisyllabic rhymes, absurd content delivered with deadpan control',
    culturalAnchors: 'Dark ironic humor, social satire, absurdist wordplay, geek culture references, provocation with intelligence',
    antiPatterns: 'No melodic singing hooks, no standard commercial format, no purely serious tone throughout',
    sunoMetatags: {
      vocalStyle: 'Technical Ironic Rap',
      vocalEffect: 'Dry, Minimal Processing',
      mood: 'Ironic, Dark Humor, Unpredictable',
      energy: 'Medium-High Variable',
      texture: 'Hard Trap Dark',
      instrument: 'Trap Drums, 808, Dark Synths, Occasional Samples'
    }
  },

  'DRAKE': {
    artist: 'DRAKE',
    sunoStyleTemplate: 'Melodic R&B-Trap, Emotional Pop-Rap, Smooth Singing-Rap Hybrid, Nocturnal Intimate Vibes, 85-145 BPM, Key: D Minor, Warm Deep 808, R&B Piano Chords, Atmospheric Pads, Clean Trap Drums, Smooth Vocal Autotune, Iconic Hook Craft, Contemporary Urban Polish, 2020s',
    sunoBpmRange: '85-145',
    sunoKey: 'D Minor',
    sunoVocalTags: ['Melodic Rap', 'Singing Hooks', 'Smooth Delivery', 'Conversational Flow'],
    sunoWeirdness: 35,
    sunoStyleInfluence: 85,
    sunoExcludeStyles: 'no harsh screaming delivery, no rock guitar distortion, no acoustic folk simplicity, no experimental noise, no boom bap dusty drums, no minimal ambient',
    vocalDNA: 'Smooth voice transitioning fluidly between rap and singing with zero rupture. Subtle controlled autotune. Hooks are ultra-memorable, designed for mass singalong. Emotional vulnerability in tone.',
    flowPattern: 'Conversational rap verses transitioning seamlessly to sung choruses. Can shift from slow R&B (85 BPM) to uptempo trap (140+ BPM). Hook-first songwriting.',
    productionFingerprint: 'Signature: warm deep 808s, R&B piano/guitar, atmospheric pads, clean trap drums, nocturnal intimate production, soulful samples, wide stereo polish',
    structureDNA: 'Highly adaptable structure. MULTIPLE MODES: introspective rap verses with minimal hooks, melodic R&B verses with strong sung choruses, or global crossover with pop-friendly structures.',
    hookType: 'Ultra-memorable sung hook (mass singalong potential) or conversational rap-sung hybrid hook',
    vocalPlacement: 'Floating in mix, laid-back vocal delivery with intimate close-mic warmth',
    energyCurve: 'Variable — adapts to mode.',
    productionMarkers: 'warm deep 808 bass, R&B piano chords or guitar loop, atmospheric ambient pads, clean trap drums polished, nocturnal intimate production feel, wide stereo polish, soulful samples possible',
    hookStrategy: 'ultra-memorable sung hook designed for mass singalong, smooth rap-to-singing transition as hook device, emotional vulnerability peak on chorus, high melodic complexity, hook-first songwriting — hook IS the song',
    verseBehavior: 'conversational rap delivery, smooth natural phrasing, laid-back behind-the-beat feel, seamless transition to singing, emotional honesty in tone, no aggressive bursts — controlled vulnerability, intimate close-mic feel',
    culturalAnchors: 'Complex relationships, masculine vulnerability, success and loneliness, nostalgia, nocturnal Toronto vibes, contemporary urban luxury',
    antiPatterns: 'Avoid harsh aggressive-only delivery, minimize tracks without melodic hook, avoid raw unpolished production',
    sunoMetatags: {
      vocalStyle: 'Melodic Rap',
      vocalEffect: 'Subtle Autotune, Reverb',
      mood: 'Emotional, Nocturnal',
      energy: 'Medium',
      texture: 'Warm Polished',
      instrument: '808 Bass, Piano, Pads, Guitar'
    }
  },

  'PNL': {
    artist: 'PNL',
    sunoStyleTemplate: 'Atmospheric Cloud Rap, Ethereal Autotune, Slow Melodic Trap, Floating Dreamy Vocals, 70-90 BPM, Key: Eb Minor, Deep Slow 808, Ethereal Piano Pads, Massive Reverb Space, Layered Doubled Vocals, Minimalist Immersive Beats, Contemplative Urban Melancholy, 2020s',
    sunoBpmRange: '70-90',
    sunoKey: 'Eb Minor',
    sunoVocalTags: ['Ethereal Autotune', 'Floating Vocals', 'Doubled Layers', 'Slow Melodic Delivery'],
    sunoWeirdness: 55,
    sunoStyleInfluence: 90,
    sunoExcludeStyles: 'no aggressive fast delivery, no bright pop energy, no dry close-mic vocals, no boom bap drums, no acoustic instruments, no standard song structure',
    vocalDNA: 'Omnipresent artistic autotune, floating spatial voice, slow melodic delivery. Doubled/layered vocals creating ethereal effect. NEVER pure rap — always singing.',
    flowPattern: 'Slow spatial phrasing, words floating in massive reverb. Melodic contours over minimal beats. No rushing — everything floats.',
    productionFingerprint: 'Signature: atmospheric synth pads, deep slow 808, ethereal piano, massive reverb, minimalist but immersive production, spatial width',
    culturalAnchors: 'Solitude, family bonds, bitter success, urban contemplation, cité as universe, deep melancholy, nostalgia',
    structureDNA: 'Verse-hook-verse with hypnotic repetition. Medium verses (14-16 bars). Repeated hook loops.',
    hookType: 'Hypnotic melodic loop hook',
    vocalPlacement: 'Floating in mix, laid-back in atmospheric reverb',
    energyCurve: 'Flat hypnotic — consistent dreamy intensity',
    productionMarkers: 'atmospheric floating pads, deep reverb on everything, slow tempo trap drums, sub bass with long sustain, ethereal synth layers, high arrangement density but airy, spacious reverb-drenched mix',
    hookStrategy: 'layered autotune cloud hook, ethereal repetitive melody, floating above the beat, hypnotic repetition, no hard boundaries between hook and verse — everything blends',
    verseBehavior: 'slow melodic autotune flow, floating delivery behind the beat, minimal rhythmic variation, hypnotic repetitive cadence, breathy intimate, constant autotune — no raw voice moments',
    antiPatterns: 'Avoid fast or aggressive, pure rap/technical flow, bright or cheerful, dense production',
    sunoMetatags: { vocalStyle: 'Melodic Singing', vocalEffect: 'Heavy Autotune, Massive Reverb', mood: 'Melancholic, Ethereal', energy: 'Low', texture: 'Atmospheric Cloud', instrument: 'Synth Pads, Slow 808, Piano' }
  },

  'SDM': {
    artist: 'SDM',
    sunoStyleTemplate: 'French Trap Dark Banlieue, Afro-Drill Paris, 130-150 BPM, Key: F Minor, Deep Bass Sub-808 Heavy Slides, Dark Sparse Piano Minor Key, Glacial Icy Synth Pads, Crisp Drill Hi-Hats, DEEP LOW BASS MALE VOICE — Never High-Pitched Never Falsetto, Powerful Impact Dark Autotune Chorus, Nocturnal Urban Cold, 2020s',
    sunoBpmRange: '130-150',
    sunoKey: 'F Minor',
    sunoVocalTags: ['Deep Low Bass Baritone', 'Dark Low-Register Autotune Hooks', 'Cold Authoritative Delivery', 'Never High Pitched Never Falsetto'],
    sunoWeirdness: 35,
    sunoStyleInfluence: 85,
    sunoExcludeStyles: 'no high-pitched vocals, no falsetto, no tenor voice, no afro percussion or afrobeats bounce, no warm R&B chords, no bright pop melodies, no acoustic instruments, no dancehall riddim, NEVER feminine or high voice',
    vocalDNA: 'DEEP LOW BASS MALE VOICE — the lowest possible masculine register. NOT tenor, NOT high-pitched, NOT melodic falsetto. Cold authoritative baritone on verses (dry, no autotune). On hooks: low-register dark metallic autotune — pitch stays LOW and dark, never rises to high notes.',
    flowPattern: 'Minimal staccato rap on verses — cold, spaced, deliberate. Hooks switch to dark metallic autotune melodic phrases. No warmth, no bounce — everything is cold and cutting. Silence between phrases is part of the flow.',
    productionFingerprint: 'Signature: heavy 808 sub-bass with long slides, dark somber piano (minor key, sparse notes), glacial icy synths, airy ethereal pad textures, crisp drill-style hi-hats, minimal arrangement with lots of cold space, nocturnal urban atmosphere — think empty city streets at 3AM',
    culturalAnchors: 'Paris banlieue nocturnal life, cold urban solitude, arrogant street success, introspective darkness, loyalty codes, Ile-de-France concrete jungle, night drives, cold ambition',
    structureDNA: 'Verse-hook-verse. Verses dense (14-16 bars) but minimal in delivery. Hooks are short dark autotune phrases repeated. Beat switches possible. Arrangement is SPARSE — space and silence are weapons.',
    hookType: 'Powerful dark low-pitched autotune hook — strong impact, deep bass register, HIGH ENERGY CHORUS — NOT high-pitched melodic, NOT falsetto, NOT restrained',
    vocalPlacement: 'Dry forward close-mic on verses, glacial reverb on autotune hooks, cold stereo width',
    energyCurve: 'Flat cold intensity with hook peaks — no warm buildup, stays dark and controlled throughout',
    productionMarkers: 'sub-heavy 808 with long decay and slides, dark sparse piano notes (single notes not chords), glacial icy synth pads, crisp drill hi-hats, minimal arrangement with cold empty space, airy reverb textures, no warmth',
    hookStrategy: 'POWERFUL dark low-register autotune hook — deep bass voice on chorus, strong melodic impact, low pitch range, high repetition, IMPACTFUL not restrained — chorus must hit hard and dark',
    verseBehavior: 'stable linear flow, low variation, clean articulation, minimal pauses, controlled breath, cold presence through steadiness not aggression',
    antiPatterns: 'Avoid afro-trap or afrobeats influence. Avoid warm festive bounce. Avoid smooth R&B crooner tone. Avoid high-pitched or falsetto vocals. Production stays COLD and MINIMAL.',
    sunoMetatags: { vocalStyle: 'Deep Bass Masculine Rap', vocalEffect: 'Dark Low-Register Autotune on Hooks, Dry Deep Baritone Verses', mood: 'Cold, Nocturnal, Arrogant, Powerful', energy: 'Medium-High with Powerful Hook Impact', texture: 'Glacial Minimal Dark', instrument: 'Heavy 808 Sub-Bass, Dark Piano, Icy Synths, Drill Hi-Hats' }
  },

  'NISKA': {
    artist: 'NISKA',
    sunoStyleTemplate: 'Afro-Trap Festive, Dancehall-Rap Hybrid, Bouncy Party Energy, 100-115 BPM, Key: G Minor, Bouncy 808, Afro Percussion (Congas, Djembe), Festive Melodies, Dancehall Influence, Light Autotune, Contagious Energy, 2020s',
    sunoBpmRange: '100-115',
    sunoKey: 'G Minor',
    sunoVocalTags: ['Festive Flow', 'Light Autotune', 'Bouncy Delivery', 'Party Energy'],
    sunoWeirdness: 25,
    sunoStyleInfluence: 80,
    sunoExcludeStyles: 'no dark minimal atmospherics, no slow introspective delivery, no boom bap drums, no aggressive drill patterns, no heavy distorted bass, no experimental noise',
    vocalDNA: 'Recognizable voice, light autotune, bouncy danceable flow. Festive contagious energy. Alternation rap/chant.',
    flowPattern: 'Bouncy rebounding flow, danceable phrasing, festive energy with rap technique moments.',
    productionFingerprint: 'Signature: afro percussion (congas, djembe synth), bouncy 808s, festive melodies, dancehall influences',
    culturalAnchors: 'Party culture, dance, quartier pride, positive street energy, Congolese influences',
    structureDNA: 'Verse-hook-verse with festive structure. Short verses (12-14 bars). Strong catchy hook.',
    hookType: 'Chant hook with danceable rhythm',
    vocalPlacement: 'Floating in mix with party presence',
    energyCurve: 'Constant high energy — festive throughout',
    productionMarkers: 'bouncy 808 with danceable groove, afro percussion (synthetic congas djembe), festive melodic loops, dancehall-influenced riddim, moderate arrangement density, party energy production',
    hookStrategy: 'catchy melodic chant hook, high repetition, danceable singalong phrase, festive energy uplift, simple memorable melody, light autotune on hook',
    verseBehavior: 'bouncy rap-singing alternation, danceable flow riding the groove, energetic delivery with humor, light touch — never heavy or dark, party energy throughout',
    antiPatterns: 'No dark aggressive themes, no slow introspection, no minimal beats',
    sunoMetatags: { vocalStyle: 'Melodic Rap', vocalEffect: 'Light Autotune', mood: 'Festive, Uplifting', energy: 'High', texture: 'Bright Warm', instrument: 'Afro Percussion, 808 Bass, Synths' }
  },

  'CENTRAL CEE': {
    artist: 'CENTRAL CEE',
    sunoStyleTemplate: 'UK Melodic Drill, London Street Rap, Cool Sliding Flow, 140-145 BPM, Key: F Minor, Sliding 808, Drill Triplet Hi-Hats, Melancholic Piano, UK Guitar Licks, Light Melodic Autotune, Cool London Attitude, 2020s',
    sunoBpmRange: '140-145',
    sunoKey: 'F Minor',
    sunoVocalTags: ['UK Drill Flow', 'Melodic Hooks', 'Cool Delivery', 'London Accent'],
    sunoWeirdness: 25,
    sunoStyleInfluence: 82,
    sunoExcludeStyles: 'no bright pop melodies, no acoustic warmth, no boom bap samples, no aggressive screaming, no slow R&B ballad, no experimental ambient',
    vocalDNA: 'Clear voice, UK drill sliding syncopated flow, light melodic autotune on hooks. London accent marked. Cool not aggressive.',
    flowPattern: 'Sliding syncopated drill flow, catchy melodic hooks, alternation between technical rap and earworm melodies.',
    productionFingerprint: 'Signature: sliding 808s, triplet hi-hats, melancholic piano/guitar, UK drill ambiance but melodic touch',
    culturalAnchors: 'London street life, hustling, flexing, relationships, UK cool attitude',
    structureDNA: 'Long drill verses (18+ bars). Minimal hook structure.',
    hookType: 'Short rhythmic chant or no traditional hook',
    vocalPlacement: 'Ahead of beat, aggressive sharp attack',
    energyCurve: 'Constant aggression — tension from start to finish',
    productionMarkers: 'UK drill 808 slide pattern, crisp hi-hat rolls, dark melodic piano or guitar loop, moderate arrangement density, clean polished mix, London drill drum pattern',
    hookStrategy: 'cool melodic hook with sliding flow, restrained catchiness, no dramatic emotional swell, smooth delivery maintains cool throughout, moderate repetition',
    verseBehavior: 'cool sliding drill flow, rhythmic syncopation on hi-hat pattern, clean articulation with London accent, steady controlled pace, smooth transitions, no aggressive bursts',
    antiPatterns: 'No overly aggressive FR drill, no pop crossover, not minimal',
    sunoMetatags: { vocalStyle: 'Melodic Rap', vocalEffect: 'Light Autotune', mood: 'Cool, Melancholic', energy: 'Medium-High', texture: 'Crisp UK', instrument: '808 Bass, Piano, Guitar' }
  },

  'ALPHA WANN': {
    artist: 'ALPHA WANN',
    sunoStyleTemplate: 'Elite Technical French Rap, Modern Dark Boom Bap, Luxury Minimalism, 85-100 BPM, Key: D Minor, Sparse Dark Piano, Heavy Punchy Drums, Tight Snare Crack, Minimal Bass Line, Bell Textures, Dry Precise Vocals, Surgical Cold Flow, 2020s',
    sunoBpmRange: '85-100',
    sunoKey: 'D Minor',
    sunoVocalTags: ['Technical Rap', 'Dry Baritone', 'Precise Articulation', 'Cold Delivery'],
    sunoWeirdness: 28,
    sunoStyleInfluence: 88,
    sunoExcludeStyles: 'no heavy autotune, no melodic pop singing, no bright commercial production, no standard trap hi-hat rolls, no lo-fi bedroom sound, no aggressive screaming',
    vocalDNA: 'Dry baritone voice, ZERO autotune, hyper-precise articulation, rapid technical delivery, cold controlled precision. No singing ever.',
    flowPattern: 'Surgical technical flow, dense multisyllabic rhymes, rapid articulation without melodic inflection.',
    productionFingerprint: 'Signature: sparse dark piano (minor keys), subtle bell textures, heavy punchy drums, tight snare crack, minimal bass.',
    structureDNA: 'Dense verse-dominant structure. Long technical verses (18+ bars) with minimal hooks.',
    hookType: 'Chant hook or rhythmic rap hook, brief and technical',
    vocalPlacement: 'Clean forward in mix, ahead of beat, percussive technical attack',
    energyCurve: 'Constant technical density — high rhythmic intensity from start to finish',
    productionMarkers: 'dark boom bap drums with modern crispness, jazz-tinged samples, minimal elegant arrangement, deep sub bass (not 808), clean spatial mix, luxury minimalism in production',
    hookStrategy: 'rhythmic rap hook with wordplay, no sung melody — flow IS the hook, punchline-driven memorability, technical precision as catchiness, minimal repetition',
    verseBehavior: 'dense technical rap, multisyllabic internal rhymes, controlled precise delivery, clean articulation, moderate-to-fast tempo, no autotune, literary flow with street edge',
    culturalAnchors: 'Technical excellence, dense internal rhymes, Parisian independence, dark luxury, precision craftsmanship',
    antiPatterns: 'Avoid autotune, melodic hooks, pop elements, bright production',
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
    sunoExcludeStyles: 'no dark minimal atmospherics, no boom bap drums, no heavy 808 distortion, no acoustic folk, no experimental noise, no slow ballad',
    vocalDNA: 'Mix of melodic singing and rap, light autotune, marked Caribbean accent. Danceable bouncy flow.',
    flowPattern: 'Bouncy dancehall flow with Caribbean inflection, alternation between floating melodic passages and percussive rap.',
    productionFingerprint: 'Signature: dancehall riddims, tropical percussion, bouncy 808s, atmospheric synths, steel drum/flute tropical melodies',
    culturalAnchors: 'Caribbean identity, island pride, tropical melancholy, party, exile, Creole-French blend',
    structureDNA: 'Verse-hook-verse with dancehall bounce. Medium verses (12-14 bars). Strong melodic hook.',
    hookType: 'Melodic dancehall hook or chant',
    vocalPlacement: 'Floating in mix with percussive energy',
    energyCurve: 'Constant high energy — festive throughout',
    productionMarkers: 'dancehall riddim bass, Caribbean percussion patterns, ragga-influenced drums, moderate arrangement density, tropical atmosphere, crisp clean mix',
    hookStrategy: 'danceable melodic chant, Caribbean rhythm hook, high repetition, festive singalong, Creole phrasing',
    verseBehavior: 'ragga-rap hybrid flow, Caribbean rhythmic patterns, Creole-French switching, bouncy riding the riddim, energetic confident delivery',
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
    sunoExcludeStyles: 'no dark aggressive production, no boom bap drums, no industrial noise, no experimental dissonance, no dry unprocessed vocals, no slow ballad pacing',
    vocalDNA: 'Ultra-melodic, permanent autotune, bright high voice, constant tonal variations and harmonies.',
    flowPattern: 'Rapid melodic flow with constant pitch variations. Singing dominant with rap-based rhythmic structure.',
    productionFingerprint: 'Signature: afro percussion (congas, shakers, synth djembe), melodic guitars, warm bouncy 808s, bright synths, atmospheric pads',
    structureDNA: 'Verse-hook-verse with melodic density throughout.',
    hookType: 'Melodic sung hook with constant autotune variation',
    vocalPlacement: 'Floating in mix, laid-back melodic delivery',
    energyCurve: 'Constant high energy — maintains bright joyful intensity throughout',
    productionMarkers: 'afro-pop melodic loops, warm sub bass groove, synthetic afro percussion, bright melodic synth pads, moderate density danceable, clean polished mix',
    hookStrategy: 'ultra-melodic autotune hook, high repetition singalong, warm melodic uplift, simple memorable topline, afro-pop catchiness',
    verseBehavior: 'melodic autotune continuous flow, singing-dominant with rap anchoring, grounded in rhythm but always melodic, warm delivery, moderate pace',
    culturalAnchors: 'Joyful celebration, love, loyalty, dance, quartier pride, subtle Lingala influence',
    antiPatterns: 'Avoid aggressive rap, dark production, spoken word sections',
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
    sunoExcludeStyles: 'no aggressive hardcore delivery, no boom bap dusty drums, no bright bubblegum pop, no acoustic folk, no experimental noise, no fast drill patterns',
    vocalDNA: 'Omnipresent melodic autotune, suave nonchalant sensual voice. Elastic fluid flow. Singing IS the style.',
    flowPattern: 'Elastic fluid phrasing, nonchalant delivery, smooth melodic contours.',
    productionFingerprint: 'Signature: smooth luxury synths, deep round 808s, airy clean hi-hats, nocturnal intense atmosphere',
    culturalAnchors: 'Luxury, sensuality, nightlife, US aesthetic, women, sauce, Belgian cool',
    structureDNA: 'Standard verse-hook-verse. Medium verses (12-14 bars). Strong melodic hook.',
    hookType: 'Melodic autotune hook with sensual inflection',
    vocalPlacement: 'Floating in mix, laid-back intimate',
    energyCurve: 'Flat hypnotic — consistent cool sophistication',
    productionMarkers: 'smooth trap 808 with melodic bounce, R&B chord progressions, atmospheric pads, moderate trap drums, clean polished spatial mix, warm-to-cool tonal range',
    hookStrategy: 'smooth melodic autotune hook, nonchalant cool delivery, moderate repetition, R&B-trap melodic blend, laid-back catchiness',
    verseBehavior: 'nonchalant smooth rap-singing blend, laid-back behind-the-beat delivery, cool detached tone, Belgian accent subtle, elastic phrasing between modes',
    antiPatterns: 'No dry technical flow, no aggressive delivery, no bright happy pop',
    sunoMetatags: { vocalStyle: 'Melodic Singing', vocalEffect: 'Autotune', mood: 'Smooth, Nocturnal', energy: 'Medium', texture: 'Smooth Luxury', instrument: '808 Bass, Luxury Synths, Hi-Hats' }
  },

  'TRAVIS SCOTT': {
    artist: 'TRAVIS SCOTT',
    sunoStyleTemplate: 'Psychedelic Dark Trap, Ambient Atmospheric Rap, Cosmic Autotune, Beat Switch Artistry, 130-150 BPM, Key: F Minor, Saturated Deep 808, Atmospheric Floating Synths, Phaser-Flanger Effects, Massive Reverb, Thick Artistic Autotune, Cosmic Chaotic Energy, 2020s',
    sunoBpmRange: '130-150',
    sunoKey: 'F Minor',
    sunoVocalTags: ['Thick Autotune', 'Spatial Vocals', 'Melodic Ad-Libs', 'Cosmic Delivery'],
    sunoWeirdness: 70,
    sunoStyleInfluence: 85,
    sunoExcludeStyles: 'no acoustic folk warmth, no clean dry vocals, no minimal production, no standard pop structure, no boom bap drums, no bright cheerful energy',
    vocalDNA: 'Thick artistic autotune, modulated spatial voice, melodic ad-libs throughout. Singing is floating and planetary.',
    flowPattern: 'Spatial floating delivery, melodic ad-lib heavy, beat switch adaptation.',
    productionFingerprint: 'Signature: saturated deep bass, atmospheric floating synths, phaser/flanger effects, beat switches, massive reverb',
    culturalAnchors: 'Cosmic nightlife, chaotic festival energy, space themes, controlled chaos, psychedelic aesthetics',
    structureDNA: 'Long verses (16+ bars) with beat switches possible. Dynamic arrangement.',
    hookType: 'Melodic sung hook or ad-lib hook loops',
    vocalPlacement: 'Floating in effects, layered delivery',
    energyCurve: 'Explosive peaks — builds to dramatic moments',
    productionMarkers: 'psychedelic atmospheric synth layers, heavy 808 with phaser effects, spatial reverb-heavy mix, drum patterns with fills and switches, high arrangement density, cinematic production scope',
    hookStrategy: 'cosmic autotune melodic hook, spacious atmospheric delivery, floating above the beat, moderate repetition, psychedelic sonic immersion as hook',
    verseBehavior: 'melodic autotune rap-singing, spatial floating delivery, ad-lib heavy, mid-tempo elastic flow, cosmic detachment, voice as texture not just lyrics',
    antiPatterns: 'No acoustic simplicity, no minimal beats, no clean production, never static',
    sunoMetatags: { vocalStyle: 'Melodic Rap', vocalEffect: 'Heavy Autotune, Reverb, Phaser', mood: 'Dark, Cosmic', energy: 'High', texture: 'Psychedelic Saturated', instrument: '808 Bass, Atmospheric Synths, Effects' }
  },

  'KENDRICK LAMAR': {
    artist: 'KENDRICK LAMAR',
    sunoStyleTemplate: 'Conscious Jazz-Rap, West Coast Lyrical, Experimental Hip-Hop, Multi-Voice Narrative, 80-120 BPM, Key: D Minor, Jazz Samples (Saxophone Contrabass), Live Drums, Boom Bap Hybrid, Orchestral Arrangements, Character Voice Changes, Dense Storytelling Flow, 2020s',
    sunoBpmRange: '80-120',
    sunoKey: 'D Minor',
    sunoVocalTags: ['Technical Complex Flow', 'Character Voices', 'Dense Storytelling', 'Zero Autotune'],
    sunoWeirdness: 55,
    sunoStyleInfluence: 90,
    sunoExcludeStyles: 'no heavy autotune melodic, no standard commercial trap, no bright pop hooks, no simple repetitive structure, no lo-fi bedroom, no acoustic folk',
    vocalDNA: 'Ultra-complex technical flow, character voice changes mid-song, deep storytelling. ZERO autotune.',
    flowPattern: 'Multi-layered storytelling, character voice shifts, tempo-adaptive delivery.',
    productionFingerprint: 'Signature: jazz samples (contrabass, saxo, piano jazz), varied drums (boom bap, trap, live), orchestral arrangements',
    culturalAnchors: 'Social justice, racial politics, African-American heritage, religion, redemption, Compton identity',
    structureDNA: 'Dense verse-hook-verse with narrative structure. Long technical verses (18+ bars). Minimal hooks.',
    hookType: 'Chant hook or spoken hook phrase',
    vocalPlacement: 'Clean ahead of beat, clear articulation',
    energyCurve: 'Slow burn — builds through verses to peak',
    productionMarkers: 'jazz-funk live instruments, experimental beat structures, varied drum patterns, funk basslines, saxophone/brass accents, variable arrangement density — sparse to dense within one track',
    hookStrategy: 'rhythmic rap hook or spoken hook, conceptual repetition, no standard melodic chorus — hook is an idea not a melody, chant-style or spoken word',
    verseBehavior: 'dense lyrical rap with jazz-influenced rhythmic elasticity, variable tempo within verses, emotional range — calm to explosive, experimental flow patterns, storytelling narrative',
    antiPatterns: 'No autotune, no simple radio hooks, no conventional single-genre production',
    sunoMetatags: { vocalStyle: 'Rap', vocalEffect: 'Minimal', mood: 'Conscious, Intense', energy: 'Variable', texture: 'Jazz Organic', instrument: 'Jazz Ensemble, Live Drums, Orchestral' }
  },

  'PLAYBOI CARTI': {
    artist: 'PLAYBOI CARTI',
    sunoStyleTemplate: 'Rage Trap, Dark Minimalist Punk Rap, Distorted Heavy Bass, Aggressive High-Energy, 150-170 BPM, Key: E Minor, Extremely Saturated 808, Distorted Synth Stabs, Aggressive Minimal Drums, Dark Repetitive Melodies, High-Pitched Autotune Ad-Lib Vocals, Textural Voice Over Lyrics, Mosh Pit Energy, 2020s',
    sunoBpmRange: '150-170',
    sunoKey: 'E Minor',
    sunoVocalTags: ['High-Pitched Autotune', 'Ad-Lib Dominant', 'Textural Vocals', 'Punk Energy'],
    sunoWeirdness: 70,
    sunoStyleInfluence: 88,
    sunoExcludeStyles: 'no lyrical storytelling, no clean articulation, no jazz or soul samples, no acoustic instruments, no standard song structure, no emotional R&B',
    vocalDNA: 'High-pitched autotune voice used as texture/instrument. Short punchy ad-libs dominate. Voice is a rhythmic percussion tool.',
    flowPattern: 'Short repetitive phrases (2-4 words max per bar). Ad-lib chains. Rhythmic stabs rather than flowing bars.',
    productionFingerprint: 'Signature: extremely saturated 808, distorted synth stabs, aggressive minimal drums, dark repetitive melodies, high BPM rage energy',
    structureDNA: 'Minimal traditional structure. Short verses (8-12 bars max). Hooks are repeated ad-libs or chants.',
    hookType: 'Hypnotic loop hook — short repeated chant or ad-lib phrase, not melodic.',
    vocalPlacement: 'Floating in mix, swimming in reverb and delay, surrounded by distortion.',
    energyCurve: 'Constant aggression with explosive peaks on ad-lib chains',
    productionMarkers: 'distorted heavy 808 with clipping, minimal dark synth loop, aggressive hi-hat rolls, sparse raw arrangement — bass and drums dominant, lo-fi raw mix aesthetic, anti-polish',
    hookStrategy: 'repetitive baby-voice or distorted chant, anti-melodic hook, extreme repetition, ad-libs AS the hook, no traditional melody — vibe and energy over content',
    verseBehavior: 'minimal word count, ad-lib dominant, baby voice or distorted delivery, behind-the-beat floating, anti-lyrical — flow and texture over meaning, punk energy in rap form',
    culturalAnchors: 'Vamp aesthetic, punk attitude, mosh pit energy, dark fashion, minimalist-as-maximalist philosophy',
    antiPatterns: 'No long lyrical verses, no complex storytelling, no acoustic instruments, no slow tempos, no clean polished vocals',
    sunoMetatags: { vocalStyle: 'Rage Ad-Lib Rap', vocalEffect: 'Extreme Autotune, Heavy Reverb, Distortion', mood: 'Dark, Rage, Aggressive', energy: 'Maximum', texture: 'Distorted Saturated', instrument: 'Saturated 808, Distorted Synths, Minimal Aggressive Drums' }
  },

  'KANYE WEST': {
    artist: 'KANYE WEST',
    sunoStyleTemplate: 'Maximalist Gospel-Industrial Hip-Hop, Chopped Soul Samples, Grand Orchestration, 90-130 BPM, Key: Ab Minor, Chopped Soul Vocal Samples, Massive Gospel Choir, Heavy Industrial Drums, Grand Piano Chords, Orchestral Strings, Distorted Bass, Expressive Male Rap-Singing, Artistic Autotune Moments, Cinematic Grandiose Scale, 2020s',
    sunoBpmRange: '90-130',
    sunoKey: 'Ab Minor',
    sunoVocalTags: ['Expressive Rap-Singing', 'Artistic Autotune', 'Gospel Chanting', 'Dramatic Delivery'],
    sunoWeirdness: 65,
    sunoStyleInfluence: 90,
    sunoExcludeStyles: 'no minimal lo-fi production, no standard trap formula, no acoustic folk simplicity, no cool detached delivery, no monotone flow, no conventional structure',
    vocalDNA: 'Expressive male voice that alternates between rap, singing, and gospel chanting. Artistic autotune on melodic sections.',
    flowPattern: 'Conversational rap with dramatic pauses. Gospel-chant sections. Flow serves emotion over technique.',
    productionFingerprint: 'Signature: chopped soul vocal samples, massive gospel choir, grand piano, orchestral strings, industrial drums, distorted bass, maximalist layered production',
    structureDNA: 'Unconventional song structures. Beat switches between sections. Gospel breakdown sections.',
    hookType: 'Anthem chorus (gospel chant style) or hypnotic repeated phrase.',
    vocalPlacement: 'Center-forward, dramatic presence',
    energyCurve: 'Explosive peaks — builds from minimal to massive',
    productionMarkers: 'chopped soul samples, gospel choir layers, maximalist orchestral arrangements, varied drum patterns — electronic to live, grand production scope, high arrangement density, cinematic dynamic range',
    hookStrategy: 'anthem chorus with choir layers, gospel-inspired emotional peak, grand uplift, high melodic complexity, dramatic production swell behind hook',
    verseBehavior: 'varied delivery — spoken word to aggressive rap to singing, emotional conviction in delivery, conceptual approach, stream-of-consciousness phrasing, dynamic range from whisper to shout',
    culturalAnchors: 'Artistic grandeur, gospel/faith, fashion, ego and vulnerability, maximalism as philosophy',
    antiPatterns: 'No conventional single-genre approach, no subtle understated production, no standard trap format',
    sunoMetatags: { vocalStyle: 'Gospel Rap-Singing', vocalEffect: 'Artistic Autotune, Choir Layers', mood: 'Grandiose, Spiritual, Intense', energy: 'High Variable', texture: 'Maximalist Industrial', instrument: 'Soul Samples, Gospel Choir, Piano, Strings, Industrial Drums' }
  },

  'LANA DEL REY': {
    artist: 'LANA DEL REY',
    sunoStyleTemplate: 'Cinematic Dream Pop, Sadcore Americana, Languid Nostalgic Beauty, 70-100 BPM, Key: F Major, Surf Guitars, Cinematic Strings, Slow Heavy Drums, Massive Reverb, Velvety Low Female Voice, Golden Melancholic Memory Atmosphere, 2020s',
    sunoBpmRange: '70-100',
    sunoKey: 'F Major',
    sunoVocalTags: ['Languid Singing', 'Velvety Low Voice', 'Whisper to Power', 'Ethereal Harmonies'],
    sunoWeirdness: 35,
    sunoStyleInfluence: 88,
    sunoExcludeStyles: 'no trap drums or 808, no aggressive energy, no uptempo danceable, no digital electronic production, no rap delivery, no bright cheerful',
    vocalDNA: 'Languid trailing singing, whispers, ethereal harmonies, low velvety female voice.',
    flowPattern: 'Slow languid phrasing, drawn-out syllables, melodic trailing. Time feels suspended.',
    productionFingerprint: 'Signature: massive reverb, surf guitars, cinematic strings, slow heavy drums, 1960s reimagined atmosphere',
    culturalAnchors: 'Hollywood nostalgia, tragic glamour, Americana, toxic love, eternal summer, faded beauty',
    structureDNA: 'Verse-chorus-verse with cinematic structure. Short verses (8-12 bars). Strong melodic chorus.',
    hookType: 'Melodic sung hook with dark melancholy',
    vocalPlacement: 'Floating in mix, close-mic intimate',
    energyCurve: 'Slow burn — melancholic throughout',
    productionMarkers: 'cinematic string arrangements, reverb-heavy spacious mix, fingerpicked guitar, slow dreamy drums, wide stereo field, vintage analog warmth, low arrangement density with orchestral swells',
    hookStrategy: 'languid melodic hook with descending phrases, nostalgic melancholy, no uptempo uplift, dreamy sustained notes, moderate repetition, whispered-to-full voice dynamic',
    verseBehavior: 'languid behind-the-beat singing, breathed phrases, nostalgic spoken-sung delivery, low energy consistent, cinematic narrative pacing, no rush — every phrase floats',
    antiPatterns: 'No aggressive energy, no fast tempo, no trap beats, no EDM drops',
    sunoMetatags: { vocalStyle: 'Languid Singing', vocalEffect: 'Reverb, Delay', mood: 'Nostalgic, Melancholic', energy: 'Low', texture: 'Cinematic Vintage', instrument: 'Surf Guitar, Strings, Slow Drums' }
  },

  'ROSALIA': {
    artist: 'ROSALIA',
    sunoStyleTemplate: 'Experimental Flamenco Fusion, Art-Pop Deconstructed, Flamenco Melisma over Trap, 90-120 BPM, Key: A Minor, Flamenco Guitar, Palmas Claps, 808 Trap Bass, Modern Synths, Powerful Expressive Female Voice, Organic-Electronic Blend, 2020s',
    sunoBpmRange: '90-120',
    sunoKey: 'A Minor',
    sunoVocalTags: ['Flamenco Melisma', 'Powerful Expression', 'Whisper to Scream', 'Complex Textures'],
    sunoWeirdness: 55,
    sunoStyleInfluence: 88,
    sunoExcludeStyles: 'no standard pop structure, no acoustic folk simplicity, no boom bap drums, no clean minimal production, no monotone delivery, no conventional trap formula',
    vocalDNA: 'Powerful expressive voice, flamenco melisma, complex vocal textures. Capable of shifting from whisper to passionate cry.',
    flowPattern: 'Flamenco-influenced phrasing with modern rhythmic breaks.',
    productionFingerprint: 'Signature: flamenco guitar, palmas claps, 808 trap bass, modern synths, organic/electronic blend',
    culturalAnchors: 'Femininity and power, tradition vs modernity, Andalusian roots, passion',
    structureDNA: 'Unconventional structure with beat switches.',
    hookType: 'Melodic hook with flamenco/experimental elements',
    vocalPlacement: 'Floating in effects, experimentally processed',
    energyCurve: 'Wave dynamics with experimental intensity shifts',
    productionMarkers: 'deconstructed flamenco elements, electronic trap beats fused with hand claps, palmas percussion, experimental production with traditional fragments, variable density, avant-garde sound design',
    hookStrategy: 'flamenco melisma vocal hook, powerful emotional vocal peak, traditional-meets-modern vocal ornament, moderate repetition, raw vocal power as hook',
    verseBehavior: 'flamenco-influenced vocal runs and ornaments, rhythmic hand-clap patterns in delivery, code-switching Spanish delivery styles, elastic between traditional and modern, powerful controlled projection',
    antiPatterns: 'No conventional pop, no standard genre production',
    sunoMetatags: { vocalStyle: 'Flamenco Singing', vocalEffect: 'Minimal, Reverb', mood: 'Passionate, Intense', energy: 'Variable', texture: 'Organic-Electronic', instrument: 'Flamenco Guitar, Palmas, 808 Bass, Synths' }
  },

  'BILLIE EILISH': {
    artist: 'BILLIE EILISH',
    sunoStyleTemplate: 'Dark Minimalist Pop, ASMR Whisper Vocals, Intimate Massive Contrast, 60-120 BPM, Key: D Minor, Extreme Sub-Bass, Organic ASMR Textures, Silence as Instrument, Minimal Percussion, Close-Mic Whisper Female Voice, Silence-to-Power Dynamic, 2020s',
    sunoBpmRange: '60-120',
    sunoKey: 'D Minor',
    sunoVocalTags: ['Whisper Vocals', 'ASMR Intimacy', 'Dark Harmonies', 'Power Bursts'],
    sunoWeirdness: 50,
    sunoStyleInfluence: 85,
    sunoExcludeStyles: 'no loud aggressive delivery, no standard pop brightness, no acoustic guitar folk, no trap hi-hat rolls, no gospel or choir, no conventional verse-chorus',
    vocalDNA: 'Whispered close-mic singing, dark doubled harmonies, intimate ASMR quality. Capable of shifting to raw powerful bursts.',
    flowPattern: 'Whispered intimate delivery building to powerful moments. Silence as structural element.',
    productionFingerprint: 'Signature: extreme sub-bass, organic ASMR textures, silence as instrument, minimal percussion',
    culturalAnchors: 'Anxiety, nightmares, silent power, vulnerability, soft rebellion, youth angst',
    structureDNA: 'Verse-chorus-verse with minimalist structure.',
    hookType: 'Melodic sung hook with whispered intimacy',
    vocalPlacement: 'Close-mic intimate, ahead of beat slightly',
    energyCurve: 'Slow burn — builds from whisper to intensity',
    productionMarkers: 'ASMR-close whisper vocals, massive sub bass underneath, sparse minimal arrangement, intimate-to-massive dynamic contrast, dark ambient textures, unconventional song structure, low density with sudden bursts',
    hookStrategy: 'whispered intimate hook building to massive bass drop moment, dynamic contrast IS the hook, quiet-loud as structural device, low melodic complexity but high sonic impact',
    verseBehavior: 'whispered ASMR delivery, intimate close-mic, behind-the-beat floating, minimal vocal projection building to controlled power, breathy phrasing, anti-belting — power through restraint',
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
    sunoExcludeStyles: 'no dark minimal production, no heavy aggressive bass, no boom bap drums, no experimental noise, no slow ballad pacing, no rock instrumentation',
    vocalDNA: 'Powerful recognizable female voice, light autotune, danceable chaloupe flow. Hooks are priority.',
    flowPattern: 'Danceable melodic flow, hook-first approach, rhythmic bouncy phrasing.',
    productionFingerprint: 'Signature: warm pop 808s, light afro percussion, melodic pop guitar, bright synths',
    culturalAnchors: 'Feminine independence, love/heartbreak, dance, self-confidence, nightlife, unique urban French slang',
    structureDNA: 'Verse-hook-verse with danceable structure.',
    hookType: 'Melodic sung hook with afro-pop bounce',
    vocalPlacement: 'Floating in mix, rhythmically placed',
    energyCurve: 'Wave dynamics — builds to hook',
    productionMarkers: 'bouncy afro-pop drums, danceable 808 groove, bright melodic hooks, moderate arrangement density, clean polished mix, festive production energy',
    hookStrategy: 'ultra-catchy melodic hook, simple repetitive phrase, high singalong factor, bright energy uplift on chorus, francophone pop catchiness, hook-dominant structure',
    verseBehavior: 'rapid-fire melodic rap-singing, bouncy rhythmic delivery, francophone accent prominent, danceable flow, continuous energy, sing-rap without separation',
    antiPatterns: 'No dark themes, no aggressive production, no minimal beats',
    sunoMetatags: { vocalStyle: 'Melodic Singing', vocalEffect: 'Light Autotune', mood: 'Energetic, Danceable', energy: 'High', texture: 'Bright Pop', instrument: 'Pop 808, Afro Percussion, Guitar, Synths' }
  },

  'SOOLKING': {
    artist: 'SOOLKING',
    sunoStyleTemplate: 'Rai-Pop Moderne, Algerian Urban Melodic, Mediterranean Luminous, 95-115 BPM, Key: Bb Minor, Oriental Violins, Acoustic Guitar, Darbuka Percussion, Light 808, Emotional Melodic Voice, French-Darija Bilingual, Mediterranean Sunshine, 2020s',
    sunoBpmRange: '95-115',
    sunoKey: 'Bb Minor',
    sunoVocalTags: ['Rai Melodic', 'Light Autotune', 'Emotional Voice', 'Bilingual Delivery'],
    sunoWeirdness: 35,
    sunoStyleInfluence: 80,
    sunoExcludeStyles: 'no dark trap atmospherics, no aggressive drill patterns, no heavy distorted bass, no experimental noise, no acoustic folk (Western), no industrial',
    vocalDNA: 'Melodic singing with rai influences, light autotune, emotional luminous voice.',
    flowPattern: 'Melodic rai-influenced phrasing, emotional delivery, festive and nostalgic simultaneously.',
    productionFingerprint: 'Signature: oriental violins, acoustic guitars, darbuka percussion, modern pop melodies, light 808s',
    culturalAnchors: 'Algeria, nostalgia, love, festive spirit, dual cultural identity, Mediterranean sun',
    structureDNA: 'Verse-hook-verse with dancehall influence.',
    hookType: 'Melodic hook with dancehall/reggae inflection',
    vocalPlacement: 'Floating in mix with rhythmic presence',
    energyCurve: 'Constant festive energy',
    productionMarkers: 'rai melodic elements (derbouka, oud samples), modern pop-trap drums, Mediterranean melodic hooks, clean bright mix, moderate arrangement density, fusion traditional-modern',
    hookStrategy: 'melodic sung hook with rai inflection, Mediterranean brightness, high catchiness, moderate repetition, luminous emotional uplift, accessible pop structure',
    verseBehavior: 'melodic rap-singing with Algerian accent, rai vocal ornaments, smooth Mediterranean delivery, moderate pace, bright emotional tone, never dark or aggressive',
    antiPatterns: 'No aggressive themes, no dark production, no heavy bass trap',
    sunoMetatags: { vocalStyle: 'Melodic Singing', vocalEffect: 'Light Autotune', mood: 'Nostalgic, Festive', energy: 'Medium-High', texture: 'Mediterranean Warm', instrument: 'Violins, Guitar, Darbuka, 808' }
  },

  'CHEB MAMI': {
    artist: 'CHEB MAMI',
    sunoStyleTemplate: 'Traditional Rai, Organic Mediterranean Sound, High Tenor Male Vocals, Arabic Melisma Ornaments, 95-115 BPM, Key: Bb Minor, Darbuka Hand Drums, Rai Gasba Flute, Oriental Violin Section, Derbouka Rhythm, Warm Analog Production, Pure Male Tenor No Autotune, Emotional Romantic Atmosphere, 1990s-2000s',
    sunoBpmRange: '95-115',
    sunoKey: 'Bb Minor',
    sunoVocalTags: ['High Tenor', 'Arabic Melisma Ornaments', 'Wide Range', 'No Autotune Pure Voice'],
    sunoWeirdness: 35,
    sunoStyleInfluence: 90,
    sunoExcludeStyles: 'no trap or drill drums, no 808 bass, no autotune, no electronic synths, no aggressive delivery, no modern pop production',
    vocalDNA: 'Pure high tenor male voice with no autotune. Traditional rai melisma. Three-octave range. Powerful emotional projection.',
    flowPattern: 'Traditional rai melodic phrasing. Long sustained notes with melismatic ornaments. Call-and-response with instruments.',
    productionFingerprint: 'Signature: darbuka hand drums, gasba flute, oriental violin section, derbouka rhythm, warm analog production.',
    structureDNA: 'Rai traditional structure: long vocal intro, verse-refrain with instrumental interludes.',
    hookType: 'Melodic vocal hook — emotional sung refrain with melisma.',
    vocalPlacement: 'Absolute center of mix, close-mic intimate warmth',
    energyCurve: 'Slow burn — intimate opening, gradual emotional crescendo, powerful vocal climax',
    productionMarkers: 'traditional rai instruments (gasba flute, derbouka, oud), organic live percussion, simple harmonic progressions, acoustic arrangement, vocal-centered mix, traditional song structure',
    hookStrategy: 'high tenor vocal hook with rai melisma, traditional vocal ornaments as hook, emotional sustained notes, repeat melodic phrase, organic acoustic backdrop',
    verseBehavior: 'traditional rai vocal delivery, high tenor projection, emotional melisma and ornaments, organic phrasing with live musician feel, sustained notes, no rap elements',
    culturalAnchors: 'Romantic love, Algerian nostalgia, exile and return, Mediterranean passion, traditional rai heritage',
    antiPatterns: 'No autotune or heavy vocal processing, no trap/drill beats, no aggressive delivery',
    sunoMetatags: { vocalStyle: 'Rai Traditional Singing', vocalEffect: 'Natural Pure Voice, Light Reverb', mood: 'Romantic, Nostalgic, Passionate', energy: 'Medium Building', texture: 'Warm Organic Analog', instrument: 'Darbuka, Gasba Flute, Oriental Violins, Derbouka' }
  },

  'DJALIL PALERMO': {
    artist: 'DJALIL PALERMO',
    sunoStyleTemplate: 'Urban Trap-Rai, Modern Street Rai, Youth Algerian Sound, 90-110 BPM, Key: A Minor, Heavy 808 Bass, Fast Trap Hi-Hats, Rhythmic Trap Guitar, Minimal String Synths, Atmospheric Pads, Young Male Tenor Voice, French-Darija Bilingual 40/60, 2020s',
    sunoBpmRange: '90-110',
    sunoKey: 'A Minor',
    sunoVocalTags: ['Young Male Tenor', 'Rap-Singing Hybrid', 'Urban Confidence', 'Street Energy'],
    sunoWeirdness: 35,
    sunoStyleInfluence: 80,
    sunoExcludeStyles: 'no pure traditional rai only, no Western acoustic folk, no boom bap drums, no experimental ambient, no bright bubblegum pop, no heavy metal',
    vocalDNA: 'MALE young tenor confident voice, rap-singing hybrid delivery. NEVER female. Urban energy with melodic hooks.',
    flowPattern: 'Rap-singing hybrid, street conversational tone with melodic hooks.',
    productionFingerprint: 'Signature: heavy 808 bass, fast trap hi-hats, rhythmic trap guitar, minimal string synths, atmospheric pads',
    culturalAnchors: 'Street confidence, Algerian pride, urban love, youth energy, nightlife, quartier',
    structureDNA: 'Verse-hook-verse. Medium verses (12-14 bars).',
    hookType: 'Melodic sung or rap hook',
    vocalPlacement: 'Floating in mix, laid-back',
    energyCurve: 'Wave dynamics — builds to chorus',
    productionMarkers: 'modern trap drums with rai melodic samples, 808 bass with rai oud/synth melody, hybrid arrangement density, street-meets-traditional production, clean modern mix',
    hookStrategy: 'melodic hook blending trap melody with rai vocal inflection, moderate repetition, street energy with nostalgic undertone, sung hook with youth energy',
    verseBehavior: 'trap-influenced rap delivery with Algerian accent, street energy, moderate pace, rai vocal ornaments on transitions, youth directness in tone',
    antiPatterns: 'Avoid female voice, pure traditional rai, acoustic folk',
    sunoMetatags: { vocalStyle: 'Rap-Singing', vocalEffect: 'Light Autotune', mood: 'Confident, Urban', energy: 'Medium-High', texture: 'Crisp Digital', instrument: '808 Bass, Trap Drums, Guitar, Synths' }
  },

  'TIF': {
    artist: 'TIF',
    sunoStyleTemplate: 'Rai-Trap Mediterranean, Algerian Urban Melodic, Nostalgic Oriental Melancholy, 90-110 BPM, Key: C Minor, Deep 808, Oud Melodic Lines, Mandole, Darbuka Percussion, Acoustic Guitar, Emotional Rai Autotune, French-Darija 50/50, Mediterranean Warmth, 2020s',
    sunoBpmRange: '90-110',
    sunoKey: 'C Minor',
    sunoVocalTags: ['Rai Melodic', 'Emotional Autotune', 'Vibrato on Holds', 'Bilingual'],
    sunoWeirdness: 40,
    sunoStyleInfluence: 82,
    sunoExcludeStyles: 'no aggressive drill patterns, no bright pop cheerful, no boom bap drums, no heavy industrial, no experimental noise, no Western folk acoustic',
    vocalDNA: 'Melodic with rai influences, controlled autotune, emotional voice, alternation singing/rap.',
    flowPattern: 'Melodic rai phrasing with rap sections. Emotional delivery with Mediterranean warmth.',
    productionFingerprint: 'Signature: oud melodic lines, mandole, darbuka percussion, acoustic guitar, deep 808, oriental melodies',
    culturalAnchors: 'Algerian nostalgia (Houma), exile, solar melancholy, destiny (Mektoub), impossible love',
    structureDNA: 'Standard verse-hook-verse.',
    hookType: 'Melodic autotune hook',
    vocalPlacement: 'Floating in mix, melodic presence',
    energyCurve: 'Wave dynamics — builds from verse to hook',
    productionMarkers: 'rai-trap fusion production, oriental melodic synths, modern trap 808 pattern, nostalgic Mediterranean atmosphere, moderate density, blend of electronic and traditional textures',
    hookStrategy: 'nostalgic melodic hook with rai ornamentation, emotional Mediterranean melody, moderate repetition, melancholic beauty, sung delivery with oriental inflection',
    verseBehavior: 'melodic rap-singing with rai influence, nostalgic emotional delivery, Algerian accent, moderate pace, oriental vocal ornaments, sincere emotional projection',
    antiPatterns: 'No aggressive delivery, no dark minimal, no bright commercial pop',
    sunoMetatags: { vocalStyle: 'Rai Melodic', vocalEffect: 'Autotune, Reverb', mood: 'Nostalgic, Melancholic', energy: 'Medium', texture: 'Mediterranean Warm', instrument: 'Oud, Mandole, Darbuka, Guitar, 808' }
  },

  'TEMS': {
    artist: 'TEMS',
    sunoStyleTemplate: 'Alt-Afro Soul, Ethereal R&B, Haunting African Soul, 95-110 BPM, Key: D Minor, Soft Afro Percussion, Warm Bass, Ethereal Synth Pads, Fingerpicked Acoustic Guitar, Layered Vocal Harmonies, Ethereal Female Voice Whisper to Power, Dreamy Warm Atmosphere, 2020s',
    sunoBpmRange: '95-110',
    sunoKey: 'D Minor',
    sunoVocalTags: ['Ethereal Alto-Soprano', 'Breathy Haunting', 'Whisper to Peak', 'Natural Vibrato'],
    sunoWeirdness: 55,
    sunoStyleInfluence: 85,
    sunoExcludeStyles: 'no trap drums or 808, no aggressive energy, no autotune processing, no electronic synths heavy, no rap delivery, no bright pop production',
    vocalDNA: 'FEMALE ethereal alto-soprano, breathy haunting delivery. NEVER rap — all soul singing.',
    flowPattern: 'Soul-driven melodic phrasing, emotional crescendos.',
    productionFingerprint: 'Signature: soft afro percussion, warm bass, ethereal synth pads, fingerpicked acoustic guitar, layered harmonies',
    culturalAnchors: 'Complex love, feminine independence, spirituality, introspection, quiet strength',
    structureDNA: 'Verse-chorus-verse.',
    hookType: 'Melodic sung hook with soulful delivery',
    vocalPlacement: 'Floating in mix, warm intimate',
    energyCurve: 'Wave dynamics — builds to powerful chorus',
    productionMarkers: 'soft afro percussion, ethereal ambient pads, warm bass guitar, fingerpicked acoustic guitar, spacious reverb mix, low arrangement density, vocal-centered production',
    hookStrategy: 'ethereal powerful vocal hook, whisper-to-peak dynamic, natural voice as instrument, moderate melodic complexity, emotional sustained notes, no processing — raw voice power',
    verseBehavior: 'intimate whisper building to emotional power, behind-the-beat floating delivery, breathy sustained phrasing, no rap elements — pure singing, dynamic emotional range',
    antiPatterns: 'No rap, no aggressive energy, no trap beats',
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
    sunoExcludeStyles: 'no slow R&B ballad, no dark minimal production, no boom bap drums, no acoustic Western folk, no experimental ambient, no heavy electronic',
    vocalDNA: 'MALE energetic tenor, street chant/communal singing delivery. Percussive vocal attacks.',
    flowPattern: 'Call-and-response communal phrasing, percussive vocal attacks.',
    productionFingerprint: 'Signature: deep amapiano bass, heavy log drums, talking drum Yoruba, polyrhythmic fuji layers',
    culturalAnchors: 'Street party, Yoruba pride, Lagos nightlife, success, communal energy',
    structureDNA: 'Verse-hook-verse with afrobeats bounce.',
    hookType: 'Melodic hook with afrobeats rhythm',
    vocalPlacement: 'Floating in mix, rhythmic placement',
    energyCurve: 'Constant high energy — festive',
    productionMarkers: 'amapiano deep bass log drum, Fuji percussion patterns, percussive dense arrangement, call-and-response production, high energy groove, street Lagos raw energy in mix',
    hookStrategy: 'percussive chant hook with Yoruba phrasing, call-and-response singalong, high repetition, street energy as catchiness, danceable groove hook',
    verseBehavior: 'percussive chanting delivery, Yoruba vocal inflection, high energy bouncy flow, danceable rhythmic patterns, street rawness, no smooth — energetic and direct',
    antiPatterns: 'No slow ballads, no dark introspective, no minimal quiet production',
    sunoMetatags: { vocalStyle: 'Energetic Chant', vocalEffect: 'Minimal', mood: 'Festive, Energetic', energy: 'Maximum', texture: 'Crisp Percussive', instrument: 'Amapiano Bass, Log Drums, Talking Drum, Synth Stabs' }
  },

  'JOE DWET FILE': {
    artist: 'JOE DWET FILE',
    sunoStyleTemplate: 'Modern Zouk R&B, Romantic Caribbean Pop, Gentle Island Groove, 90-105 BPM, Key: Ab Major, Warm Zouk Bass, Zouk Drum Machine Groove, Steel Pan Textures, Island Acoustic Guitar, Lush Synth Pads, Warm Male Tenor Voice, Tropical Romance Atmosphere, 2020s',
    sunoBpmRange: '90-105',
    sunoKey: 'Ab Major',
    sunoVocalTags: ['Warm Tenor', 'Romantic Delivery', 'Creole Accent', 'Natural Vibrato'],
    sunoWeirdness: 30,
    sunoStyleInfluence: 82,
    sunoExcludeStyles: 'no aggressive energy, no trap heavy 808, no drill patterns, no dark atmospherics, no rock instruments, no experimental noise',
    vocalDNA: 'MALE warm tender tenor, romantic intimate delivery. Never aggressive — all softness.',
    flowPattern: 'Romantic melodic phrasing, gentle flowing delivery. French-Creole blend.',
    productionFingerprint: 'Signature: warm zouk bass, zouk drum machine groove, steel pan textures, island acoustic guitar, lush synth pads',
    culturalAnchors: 'Romantic love, Caribbean nostalgia, gentle living, Caribbean nights',
    structureDNA: 'Verse-hook-verse with creole structure.',
    hookType: 'Melodic hook with creole cadence',
    vocalPlacement: 'Floating in mix, rhythmic presence',
    energyCurve: 'Constant festive energy',
    productionMarkers: 'modern zouk rhythmic base, warm Caribbean synth pads, gentle bass groove, light percussion, clean polished intimate mix, low-to-moderate density, romantic atmosphere',
    hookStrategy: 'gentle melodic hook with zouk lilt, romantic sensual delivery, moderate repetition, warm emotional uplift, island groove catchiness',
    verseBehavior: 'smooth melodic singing with Creole inflection, gentle romantic delivery, behind-the-beat Caribbean groove, intimate warm tone, no aggression — pure tenderness',
    antiPatterns: 'Avoid aggression, trap/drill, dark themes',
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
    sunoExcludeStyles: 'no modern trap drums, no aggressive drill, no autotune processing, no bright pop energy, no electronic synth heavy, no fast tempo',
    vocalDNA: 'Velvety baritone male voice, ultra-smooth R&B hooks, rich harmonies.',
    flowPattern: 'Smooth melodic hooks, slow groove delivery, laid-back West Coast phrasing.',
    productionFingerprint: 'Signature: G-Funk synths (Moog/Minimoog), deep funk bass, talk box, groove claps, slow drums',
    culturalAnchors: 'West Coast party, chill cruising, laid-back love, G-Funk lifestyle',
    structureDNA: 'Verse-chorus-verse with R&B structure.',
    hookType: 'Melodic sung hook, iconic and memorable',
    vocalPlacement: 'Floating in mix, warm laid-back',
    energyCurve: 'Wave dynamics — builds to strong chorus',
    productionMarkers: 'G-Funk Moog/Minimoog synth leads, deep funk bass groove, talk box accents, slow groovy drums, warm analog mix, moderate arrangement with funk layers',
    hookStrategy: 'smooth baritone sung hook, silky melodic delivery, rich harmonies, ultra-smooth catchiness, laid-back groove, velvety vocal as the primary instrument',
    verseBehavior: 'smooth melodic singing dominant, velvety baritone delivery, behind-the-beat laid-back groove, rich vocal harmonies, never rap — always singing, G-Funk rhythmic feel',
    antiPatterns: 'No aggressive energy, no fast tempo, no dark themes',
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
    sunoExcludeStyles: 'no bright uptempo energy, no aggressive rap flow, no pop structure, no acoustic warmth, no R&B belting, no rock instruments',
    vocalDNA: 'Soft autotuned MALE voice that ALMOST sings but never fully commits. Breathy close-mic whisper-croon delivery. NOT R&B singing.',
    flowPattern: 'Ultra-slow half-time delivery. Words drip out slowly. Minimal syllable density.',
    productionFingerprint: 'Signature: deep ominous sub bass, dark melodic 808s in half-time, dreamy atmospheric pads, washed-out detuned synths, distant bell plucks',
    culturalAnchors: 'Toxic romance, night drives at 3am, luxury sadness, emotional isolation, nocturnal loneliness',
    structureDNA: 'Verse-hook-verse.',
    hookType: 'Dark ambient murmur hook — hazy whispered repetition, NOT melodic R&B hook',
    vocalPlacement: 'Deep in reverb fog, behind the beat, extreme close-mic',
    energyCurve: 'Flat hazy — no build, constant cinematic fog',
    productionMarkers: 'ambient atmospheric pads, deep sub bass with slow attack, dark reverb-heavy drums, floating spatial mix, very low arrangement density, nocturnal introspective atmosphere',
    hookStrategy: 'ambient murmur hook, whispered repetitive phrase, no melodic uplift — flat dark hypnotic, loop-based, atmospheric immersion as hook',
    verseBehavior: 'whispered dark delivery, slow pacing, minimal word density, breathy intimate, flat emotional projection — sadness through restraint not drama, behind-the-beat floating',
    antiPatterns: 'NEVER aggressive or loud. NEVER uptempo. NEVER acoustic. NEVER power ballad.',
    sunoMetatags: {
      vocalStyle: 'Whisper-Croon Rap',
      vocalEffect: 'Soft Autotune, Heavy Reverb, Close-Mic Breath',
      mood: 'Melancholic, Nocturnal, Lonely',
      energy: 'Low',
      texture: 'Hazy Atmospheric',
      instrument: 'Sub Bass, Dark 808, Dreamy Pads, Washed Synths, Distant Bells'
    }
  },

  'SCH': {
    artist: 'SCH',
    sunoStyleTemplate: 'Cinematic Dark Trap, Orchestral French Rap, Deep Grave Authoritative Voice, Dark Luxury Nocturnal Atmosphere, 130-140 BPM, Key: C Minor, Heavy Distorted 808, Dark Orchestral Strings, Cinematic Brass Stabs, Crisp Trap Hi-Hats, Reverb-Drenched Pads, Dramatic Build-Ups, Hi-End Polished Mix, 2020s',
    sunoBpmRange: '130-140',
    sunoKey: 'C Minor',
    sunoVocalTags: ['Deep Grave Voice', 'Authoritative Delivery', 'Dark Melodic Hooks', 'Cinematic Presence'],
    sunoWeirdness: 35,
    sunoStyleInfluence: 85,
    sunoExcludeStyles: 'no bright pop hooks, no acoustic warmth, no lo-fi chill textures, no playful ironic delivery, no fast drill syncopation, no light danceable energy',
    vocalDNA: 'Very deep grave voice, authoritative and imposing. Dark melodic hooks with light autotune on refrains only.',
    flowPattern: 'Deliberate measured flow with dramatic pauses.',
    productionFingerprint: 'Signature: orchestral strings, cinematic brass, heavy distorted 808, dramatic buildups, dark atmospheric pads, hi-end polished mix',
    culturalAnchors: 'Marseille luxury darkness, cinematic storytelling, power and domination, dark poetry',
    structureDNA: 'Dense verse-hook-verse. Long technical verses (16+ bars).',
    hookType: 'Short melodic autotune hook or chant',
    vocalPlacement: 'Dry ahead of beat, technical delivery',
    energyCurve: 'Slow burn — builds through verses',
    productionMarkers: 'cinematic dark orchestral stabs, heavy 808 sub bass, dark string arrangements, trap drums with aggressive pattern, wide cinematic stereo field, dramatic production builds, moderate-to-high density',
    hookStrategy: 'dominant deep voice refrain, cinematic gravitas as hook, deep authoritative repeated phrase, no singing — spoken-rapped hook with weight, orchestral swell behind voice',
    verseBehavior: 'deep grave authoritative delivery, steady controlled pace, deliberate word weight, cinematic narrative storytelling, French mafioso imagery delivery, minimal flow variation — consistency is power',
    antiPatterns: 'Avoid bright or cheerful, acoustic or folk, lo-fi, fast frantic delivery',
    sunoMetatags: { vocalStyle: 'Dark Melodic Rap', vocalEffect: 'Light Autotune on Hooks, Reverb', mood: 'Cinematic, Dark, Luxurious', energy: 'Medium-High', texture: 'Orchestral Dark', instrument: 'Distorted 808, Strings, Brass, Trap Drums, Pads' }
  },

  'THE WEEKND': {
    artist: 'THE WEEKND',
    sunoStyleTemplate: 'Dark Alternative R&B, Synthwave-Pop, Nocturnal Cinematic Atmosphere, 80s Synth Textures, 100-120 BPM, Key: Eb Minor, Warm Analog Synth Bass, Retro Drum Machine, Lush Reverb Layers, Falsetto Male Vocals, Emotional Melisma, Intimate Close-Mic, Wide Stereo Soundscape, Expensive Polished Mix, 2020s',
    sunoBpmRange: '100-120',
    sunoKey: 'Eb Minor',
    sunoVocalTags: ['Falsetto Male Vocals', 'Emotional Melisma', 'Dark R&B Singing', 'Intimate Breathy Delivery'],
    sunoWeirdness: 35,
    sunoStyleInfluence: 90,
    sunoExcludeStyles: 'no rap delivery, no aggressive drums, no acoustic folk, no boom bap, no bright daytime pop energy, no country or rock',
    vocalDNA: 'Signature falsetto male vocals with emotional melisma. Dark intimate breathy delivery.',
    flowPattern: 'Melodic singing with R&B runs. Falsetto on hooks. Never raps — always sings.',
    productionFingerprint: 'Signature: 80s analog synths, retro drum machines, lush reverb layers, wide stereo, synthwave textures',
    culturalAnchors: 'Nocturnal hedonism, toxic romance, drugs and excess, lonely luxury, dark city nightlife',
    structureDNA: 'Verse-chorus-verse with R&B/pop structure.',
    hookType: 'Melodic sung hook, emotionally powerful',
    vocalPlacement: 'Floating in mix with intimate close-mic warmth',
    energyCurve: 'Wave dynamics — builds to powerful chorus',
    productionMarkers: 'pulsing 80s analog synths (Juno/Jupiter), deep sub bass, crisp drum machine pattern, lush string pads, wide cinematic stereo, retro-futurist production, moderate-to-high density',
    hookStrategy: 'dark falsetto melodic hook, emotional vulnerability peak, 80s synth-pop catchiness, layered vocal harmonies on chorus, nocturnal emotional climax',
    verseBehavior: 'breathy dark falsetto delivery, emotional range — vulnerable whisper to confident belt, Michael Jackson-influenced rhythmic feel, R&B vocal runs, intimate-to-powerful dynamic',
    antiPatterns: 'Avoid rap delivery, aggressive, acoustic or folk, bright happy pop',
    sunoMetatags: { vocalStyle: 'R&B Falsetto', vocalEffect: 'Reverb, Delay, Light Autotune', mood: 'Dark, Nocturnal, Sensual', energy: 'Medium', texture: 'Warm Analog Synth', instrument: 'Analog Synth Bass, Retro Drums, Synth Pads, Strings' }
  },

  'MAES': {
    artist: 'MAES',
    sunoStyleTemplate: 'Street Melodic Trap, Dark French Rap, Sevran Energy, Deep Grave Voice, Melodic Hooks with Autotune, 125-140 BPM, Key: A Minor, Heavy 808 Sub Bass, Dark Piano Melodies, Crisp Trap Drums, Complex Hi-Hats, Nocturnal Street Atmosphere, Raw Authentic Delivery, 2020s',
    sunoBpmRange: '125-140',
    sunoKey: 'A Minor',
    sunoVocalTags: ['Deep Grave Voice', 'Melodic Autotune Hooks', 'Raw Street Delivery', 'Sevran Accent'],
    sunoWeirdness: 25,
    sunoStyleInfluence: 80,
    sunoExcludeStyles: 'no bright pop production, no experimental structure, no acoustic instruments, no heavy emotional R&B, no playful ironic tone, no fast UK drill patterns',
    vocalDNA: 'Deep masculine voice with nasal texture, restrained cold delivery. Tighter melodic usage than peers — not as open as NINHO. Street authenticity in tone. Moderate autotune on hooks, dry on verses.',
    flowPattern: 'Direct percussive rap on verses with melodic autotune hooks.',
    productionFingerprint: 'Signature: heavy 808 sub bass, dark piano melodies, crisp trap drums, complex hi-hats',
    culturalAnchors: 'Sevran street life, loyalty, money, survival, betrayal',
    structureDNA: 'Verse-hook-verse with melodic trap.',
    hookType: 'Melodic autotune hook',
    vocalPlacement: 'Floating in mix, melodic presence',
    energyCurve: 'Wave dynamics — builds to hook',
    productionMarkers: 'dark piano melody loops, punchy 808 sub, crisp trap drums standard pattern, minimal arrangement — piano + 808 + drums core, nocturnal street atmosphere, cold clean mix',
    hookStrategy: 'restrained melodic hook with nasal texture, tighter melodic usage than peers, no emotional swell — cold control on hooks, moderate repetition, street authenticity over catchiness',
    verseBehavior: 'restrained street tone, colder delivery than similar artists, nasal texture prominent, steady medium-fast flow, no dramatic emotional variation, controlled consistent intensity',
    antiPatterns: 'Avoid bright or cheerful, acoustic, overly polished',
    sunoMetatags: { vocalStyle: 'Street Melodic Rap', vocalEffect: 'Autotune on Hooks, Dry Verses', mood: 'Dark, Street, Nocturnal', energy: 'High', texture: 'Dark Trap', instrument: '808 Sub Bass, Dark Piano, Trap Drums' }
  },

  'LACRIM': {
    artist: 'LACRIM',
    sunoStyleTemplate: 'Hard French Trap, Street Hardcore Rap, Deep Authoritative Voice, Mediterranean Gangster Atmosphere, 120-135 BPM, Key: B Minor, Aggressive 808, Oriental Melodic Samples, Dark Synth Stabs, Hard Snare, Triplet Hi-Hats, Raw Street Energy, Nocturnal Cinematic, 2020s',
    sunoBpmRange: '120-135',
    sunoKey: 'B Minor',
    sunoVocalTags: ['Deep Authoritative Voice', 'Hard Street Delivery', 'Mediterranean Accent', 'Raw Aggressive Rap'],
    sunoWeirdness: 20,
    sunoStyleInfluence: 80,
    sunoExcludeStyles: 'no melodic pop singing, no soft R&B warmth, no acoustic instruments, no bright production, no experimental ambient, no playful humor',
    vocalDNA: 'Deep authoritative voice with Mediterranean accent. Hard aggressive rap delivery. No singing.',
    flowPattern: 'Hard percussive flow with dramatic pauses. Street storytelling.',
    productionFingerprint: 'Signature: aggressive 808, oriental melodic samples, dark synth stabs, hard snare',
    culturalAnchors: 'Mediterranean gangster culture, street business, loyalty codes, Maghreb-French identity',
    structureDNA: 'Verse-hook-verse.',
    hookType: 'Aggressive chant hook or spoken hook — NEVER melodic singing',
    vocalPlacement: 'Dry ahead of beat, hard percussive attack',
    energyCurve: 'Constant aggression — high intensity throughout',
    productionMarkers: 'hard 808 sub bass punchy, dark orchestral stabs, raw street drums crisp snare, minimal arrangement — voice dominant, dark piano sparse notes, street rawness in mix',
    hookStrategy: 'dominant street refrain, authoritative repeated phrase, no melodic singing — raw spoken-rap hook, street slogan memorability, low melodic complexity',
    verseBehavior: 'hard authoritative delivery, steady aggressive pace, deep commanding voice, no autotune, raw street flow, percussive consonant hits, deliberate word emphasis',
    antiPatterns: 'Avoid singing or melodic, soft or chill, bright pop, acoustic',
    sunoMetatags: { vocalStyle: 'Aggressive Rap', vocalEffect: 'Dry, Light Reverb', mood: 'Dark, Aggressive, Street', energy: 'High', texture: 'Hard Trap', instrument: '808 Bass, Oriental Samples, Synth Stabs, Hard Drums' }
  },

  'WERENOI': {
    artist: 'WERENOI',
    sunoStyleTemplate: 'Melodic French Trap, Emotional Street Rap, Deep Resonant Voice, Autotune Melodic Flow, 120-135 BPM, Key: G Minor, Deep Sliding 808, Melancholic Piano, Atmospheric Pads, Crisp Trap Drums, Emotional Nocturnal Atmosphere, Close-Mic Intimate, 2020s',
    sunoBpmRange: '120-135',
    sunoKey: 'G Minor',
    sunoVocalTags: ['Deep Resonant Voice', 'Melodic Autotune', 'Emotional Delivery', 'Street Sincerity'],
    sunoWeirdness: 28,
    sunoStyleInfluence: 80,
    sunoExcludeStyles: 'no bright energetic production, no dramatic emotional builds, no experimental structure, no acoustic warmth, no playful humorous delivery, no fast aggressive flow',
    vocalDNA: 'Deep resonant male voice, hypnotic monotone-adjacent delivery. Low emotional projection — presence through repetition and steadiness. Moderate autotune. Never dramatic, never explosive — flat controlled intensity.',
    flowPattern: 'Melodic emotional flow with autotune. Raw rap bursts on verse peaks.',
    productionFingerprint: 'Signature: deep sliding 808, melancholic piano, atmospheric pads, crisp trap drums',
    culturalAnchors: 'Street emotions, family loyalty, survival, authentic pain, nocturnal introspection',
    structureDNA: 'Verse-hook-verse.',
    hookType: 'Melodic hook',
    vocalPlacement: 'Floating in mix',
    energyCurve: 'Wave dynamics',
    productionMarkers: 'repetitive dark melodic loop, heavy 808 sub bass steady pattern, standard trap drums, minimal arrangement with hypnotic repetition, dark ambient pad underneath, low density — loop + bass + drums',
    hookStrategy: 'hypnotic repetitive hook, low melodic variation, repeated phrase with minimal change, no emotional swell — flat hypnotic delivery, loop-based memorability',
    verseBehavior: 'hypnotic steady delivery, low emotional expression, minimal flow variation, repetitive cadence pattern, monotone-adjacent delivery — presence through repetition not dynamics',
    antiPatterns: 'Avoid cheerful, bright, purely technical',
    sunoMetatags: { vocalStyle: 'Melodic Emotional Rap', vocalEffect: 'Melodic Autotune, Reverb', mood: 'Emotional, Melancholic, Street', energy: 'Medium', texture: 'Dark Warm', instrument: 'Sliding 808, Piano, Atmospheric Pads, Trap Drums' }
  },

  'MHD': {
    artist: 'MHD',
    sunoStyleTemplate: 'Afro-Trap Originator, African Rhythm Meets French Rap, Bouncy Festive Energy, 100-115 BPM, Key: F Minor, Bouncy 808, African Percussion (Djembe Sabar Congas), Festive Melodic Hooks, Bright Synth Melodies, Light Autotune, High-Energy Party Vibe, Danceable Groove, 2020s',
    sunoBpmRange: '100-115',
    sunoKey: 'F Minor',
    sunoVocalTags: ['Festive Vocal Energy', 'Light Autotune', 'Bouncy Melodic Flow', 'African-French Cadence'],
    sunoWeirdness: 25,
    sunoStyleInfluence: 85,
    sunoExcludeStyles: 'no dark minimal production, no slow introspective delivery, no boom bap drums, no heavy distorted bass, no experimental noise, no acoustic folk',
    vocalDNA: 'Festive energetic voice with light autotune. African-French cadence.',
    flowPattern: 'Bouncy rhythmic flow synced with African percussion.',
    productionFingerprint: 'Signature: bouncy 808, African percussion (djembe, sabar, congas), festive synth melodies',
    culturalAnchors: 'Afro-Trap originator, African diaspora pride, Paris street party, dance, celebration',
    structureDNA: 'Verse-hook-verse with afro-trap.',
    hookType: 'Melodic autotune hook',
    vocalPlacement: 'Floating in mix with afro-rhythmic placement',
    energyCurve: 'Wave dynamics',
    productionMarkers: 'afro-trap percussion (djembe conga), bouncy 808 bass groove, African melodic loops, festive energy production, danceable arrangement, moderate density, raw street energy in mix',
    hookStrategy: 'catchy afro-trap chant hook, French-African phrase repetition, high singalong factor, danceable energy, street festive catchiness',
    verseBehavior: 'bouncy afro-trap rap delivery, French with African rhythmic influence, danceable flow, energetic positive delivery, rapid-fire on verses, festive street energy',
    antiPatterns: 'Avoid dark or aggressive, minimal or lo-fi',
    sunoMetatags: { vocalStyle: 'Festive Melodic Rap', vocalEffect: 'Light Autotune', mood: 'Festive, Energetic, Bouncy', energy: 'High', texture: 'Bright Warm', instrument: 'Bouncy 808, Djembe, Congas, Sabar, Festive Synths' }
  },

  'DADJU': {
    artist: 'DADJU',
    sunoStyleTemplate: 'French Afro-Pop R&B, Romantic Melodic, Congolese-French Fusion, 95-115 BPM, Key: G Minor, Warm 808, Lush Keyboard Pads, Afro Percussion, Melodic Autotune Male Vocals, Romantic Nocturnal Atmosphere, Polished Production, 2020s',
    sunoBpmRange: '95-115',
    sunoKey: 'G Minor',
    sunoVocalTags: ['Melodic Autotune', 'Romantic Male Vocals', 'Congolese-French Cadence', 'Smooth Delivery'],
    sunoWeirdness: 20,
    sunoStyleInfluence: 80,
    sunoExcludeStyles: 'no aggressive rap delivery, no dark drill production, no heavy 808 distortion, no experimental noise, no boom bap drums, no industrial',
    vocalDNA: 'Smooth melodic male vocals with autotune. TOPLINE DOMINANT. Congolese-French vocal cadence with romantic inflection.',
    flowPattern: 'Singing-dominant throughout. Strong melodic hooks.',
    productionFingerprint: 'Signature: warm 808, lush keyboards, afro percussion, polished romantic atmosphere',
    structureDNA: 'Verse-chorus-verse with singing dominance.',
    hookType: 'Melodic sung hook with romantic emphasis',
    vocalPlacement: 'Floating in mix, laid-back intimate delivery',
    energyCurve: 'Wave dynamics',
    productionMarkers: 'warm keyboard pads, gentle afro percussion, melodic 808 bass groove, lush arrangement, clean polished romantic mix, Congolese rhythmic subtle influence',
    hookStrategy: 'romantic melodic hook, warm autotune singing, high catchiness, emotional love delivery, moderate complexity, accessible R&B-pop chorus',
    verseBehavior: 'singing-dominant delivery, romantic sensual tone, Congolese-French melodic cadence, smooth continuous flow, moderate pace, intimate warm projection',
    culturalAnchors: 'Congolese-French romance, family, love stories, nocturnal tenderness, diaspora identity',
    antiPatterns: 'Avoid aggressive delivery, drill/hard trap production',
    sunoMetatags: { vocalStyle: 'Melodic R&B', vocalEffect: 'Autotune, Reverb', mood: 'Romantic, Warm, Nocturnal', energy: 'Medium', texture: 'Warm Afro', instrument: '808, Congolese Guitar, Keyboards, Afro Percussion' }
  },

  'LOMEPAL': {
    artist: 'LOMEPAL',
    sunoStyleTemplate: 'Indie French Rap, Emotional Storytelling, Acoustic-Electronic Hybrid, Skateboard Culture Vibes, 85-110 BPM, Key: D Minor, Warm Bass, Acoustic Guitar Layers, Indie Synth Textures, Live Drum Feel, Emotional Raw Male Vocals, No Heavy Autotune, Intimate Confessional Atmosphere, 2010s-2020s',
    sunoBpmRange: '85-110',
    sunoKey: 'D Minor',
    sunoVocalTags: ['Emotional Raw Vocals', 'No Heavy Autotune', 'Confessional Delivery', 'Indie Rap Tone'],
    sunoWeirdness: 45,
    sunoStyleInfluence: 75,
    sunoExcludeStyles: 'no hard trap drill, no heavy autotune, no aggressive hardcore, no commercial pop formula, no EDM production, no dark minimal',
    vocalDNA: 'Raw emotional male voice with minimal processing. Confessional intimate delivery.',
    flowPattern: 'Fluid between rap and singing. Emotional storytelling flow.',
    productionFingerprint: 'Signature: acoustic guitar layers, indie synth textures, live drum feel, warm bass',
    culturalAnchors: 'Skateboard culture, Parisian indie scene, emotional vulnerability, youth angst',
    structureDNA: 'Verse-hook-verse.',
    hookType: 'Melodic hook',
    vocalPlacement: 'Clean in mix, articulate',
    energyCurve: 'Slow burn',
    productionMarkers: 'acoustic-electronic hybrid production, emotional guitar textures, moderate electronic beats, intimate mix, indie production aesthetic, moderate density, warm organic feel with electronic touches',
    hookStrategy: 'emotional melodic hook with natural voice, indie rap-singing delivery, genuine emotional expression, moderate repetition, introspective vulnerability, no autotune',
    verseBehavior: 'emotional storytelling delivery, skater/indie energy, natural voice — no heavy processing, oscillates between rap and singing naturally, breath-heavy intimate moments, genuine vulnerability',
    antiPatterns: 'Avoid hard trap, drill aggressive, heavy autotune',
    sunoMetatags: { vocalStyle: 'Indie Rap-Singing', vocalEffect: 'Minimal Processing, Light Reverb', mood: 'Emotional, Intimate, Melancholic', energy: 'Low-Medium', texture: 'Warm Organic Indie', instrument: 'Acoustic Guitar, Indie Synths, Live Drums, Warm Bass' }
  },

  'ANGELE': {
    artist: 'ANGELE',
    sunoStyleTemplate: 'Belgian Pop-Electro, Sophisticated Pop, Elegant Electro-Pop, Subtle Irony, 110-125 BPM, Key: C Major, Punchy Pop Bass, Bright Synth Arps, Electronic Drums, Pop Claps, Crystal Clear Female Vocals, No Autotune, Catchy Hook Craft, Colorful Polished Production, 2020s',
    sunoBpmRange: '110-125',
    sunoKey: 'C Major',
    sunoVocalTags: ['Crystal Clear Female Vocals', 'No Autotune', 'Pop Singing', 'Belgian French Accent'],
    sunoWeirdness: 20,
    sunoStyleInfluence: 85,
    sunoExcludeStyles: 'no rap aggressive delivery, no trap heavy bass, no dark atmospherics, no lo-fi production, no rock distortion, no experimental noise',
    vocalDNA: 'Crystal clear female vocals with no autotune. Belgian French accent. Sophisticated pop singing.',
    flowPattern: 'Pure pop singing with restraint. Catchy melodic hooks but with elegance and subtlety.',
    productionFingerprint: 'Signature: bright synth arps, electronic drums, pop claps, punchy pop bass',
    structureDNA: 'Verse-chorus-verse. Short verses (8-12 bars).',
    hookType: 'Melodic sung hook, catchy but with restraint and elegance',
    vocalPlacement: 'Clean forward in mix, slightly laid-back',
    energyCurve: 'Wave dynamics',
    productionMarkers: 'sophisticated electro-pop production, clean synth pads, precise drum machine, elegant bassline, polished bright mix, pop song structure, moderate density with electronic precision',
    hookStrategy: 'elegant pop melody hook, sophisticated catchy, witty lyrical hook, bright but not bubblegum, moderate complexity, French pop accessibility with intelligence',
    verseBehavior: 'clean French pop singing, precise pitch, witty lyrical delivery, moderate pace, elegant phrasing, controlled emotional expression, never aggressive — sophisticated',
    culturalAnchors: 'Belgian pop identity, feminism, self-empowerment, youth, social commentary',
    antiPatterns: 'Avoid rap, dark or aggressive production, trap or drill elements',
    sunoMetatags: { vocalStyle: 'Pop Singing', vocalEffect: 'Clean, Light Reverb', mood: 'Sophisticated, Nuanced, Elegant', energy: 'Medium-High', texture: 'Bright Pop Electronic', instrument: 'Synth Arps, Electronic Drums, Pop Bass, Claps' }
  },

  'BURNA BOY': {
    artist: 'BURNA BOY',
    sunoStyleTemplate: 'Afrobeats, Afro-Fusion, Nigerian Groove, Dancehall-Afrobeats Hybrid, 100-115 BPM, Key: G Minor, Deep Afro Bass, Complex African Percussion, Horns Section, Guitar Riffs, Powerful Male Vocals, Melodic Singing-Rap, Lagos Street Energy, Global Festival Sound, 2020s',
    sunoBpmRange: '100-115',
    sunoKey: 'G Minor',
    sunoVocalTags: ['Powerful Male Vocals', 'Melodic Singing-Rap', 'Nigerian Pidgin Cadence', 'Festival Energy'],
    sunoWeirdness: 30,
    sunoStyleInfluence: 90,
    sunoExcludeStyles: 'no dark minimal production, no trap heavy 808, no drill patterns, no lo-fi bedroom, no acoustic Western folk, no experimental noise',
    vocalDNA: 'Powerful expressive male vocals. Switches between melodic singing and rap-chanting.',
    flowPattern: 'Afrobeats bounce with melodic hooks. Singing-dominant with rap-chant verses.',
    productionFingerprint: 'Signature: complex African percussion, horns section, guitar riffs, deep afro bass',
    culturalAnchors: 'Lagos street energy, African giant pride, global Afrobeats ambassador, freedom, celebration',
    structureDNA: 'Verse-chorus-verse with afrobeats.',
    hookType: 'Melodic sung hook, global appeal',
    vocalPlacement: 'Floating in mix, energetic presence',
    energyCurve: 'Wave dynamics',
    productionMarkers: 'afrobeats percussion (shekere log drums), danceable bass groove, horn section accents, live instrument textures, moderate-to-high density, warm analog feel, Nigerian groove foundation',
    hookStrategy: 'powerful afrobeats melodic hook, danceable singalong, confident energy delivery, moderate complexity, global catchiness, African groove as hook driver',
    verseBehavior: 'confident powerful singing delivery, Nigerian Pidgin inflection, danceable rhythm in vocal delivery, versatile — can be aggressive or smooth, authoritative presence',
    antiPatterns: 'Avoid dark aggressive, drill, minimal lo-fi, slow ballad',
    sunoMetatags: { vocalStyle: 'Afrobeats Melodic', vocalEffect: 'Light Reverb, Vocal Layers', mood: 'Energetic, Proud, Celebratory', energy: 'High', texture: 'Warm Afro Groove', instrument: 'Afro Bass, Percussion, Horns, Guitar' }
  },

  'DAFT PUNK': {
    artist: 'DAFT PUNK',
    sunoStyleTemplate: 'French House, Electro-Funk, Robotic Vocoder Vocals, Disco-Electronic Fusion, 115-128 BPM, Key: F Minor, Funky Bass Guitar, Analog Synthesizers, Vocoder Robot Vocals, Disco Strings, Four-on-the-Floor Kick, Filtered Loops, Retro-Futuristic Atmosphere, 2000s-2010s',
    sunoBpmRange: '115-128',
    sunoKey: 'F Minor',
    sunoVocalTags: ['Robotic Vocoder Vocals', 'Talk Box', 'Filtered Voice', 'Disco-Robot Hybrid'],
    sunoWeirdness: 55,
    sunoStyleInfluence: 90,
    sunoExcludeStyles: 'no rap delivery, no acoustic instruments, no rock guitars, no classical orchestral, no unprocessed vocals, no slow ballad pacing',
    vocalDNA: 'Robotic vocoder vocals — NEVER natural human singing.',
    flowPattern: 'Repetitive hypnotic vocal loops through vocoder. Never rap.',
    productionFingerprint: 'Signature: funky bass guitar, analog synthesizers, vocoder robot vocals, disco strings, four-on-the-floor kick',
    culturalAnchors: 'French electronic music pioneer, retro-futurism, robot mythology, disco revival',
    structureDNA: 'Unconventional electronic structure.',
    hookType: 'Hypnotic loop hook or robotic vocal hook',
    vocalPlacement: 'Floating in effects and vocoder',
    energyCurve: 'Wave dynamics with electronic peaks',
    productionMarkers: 'French house four-on-the-floor kick, funky bassline (filtered), vocoder/talkbox processed vocals, analog synth arpeggios, disco string stabs, robotic repetitive structure, high groove density',
    hookStrategy: 'vocoder-processed robotic hook, repetitive hypnotic phrase, simple but infectious, mechanical repetition as dance groove, no human vocal expression — robotic precision',
    verseBehavior: 'robotic vocoder delivery, mechanical precision, repetitive phrasing as structural element, no variation in delivery — consistency IS the style, electronic voice processing throughout',
    antiPatterns: 'Avoid natural vocals, rap, trap/drill, acoustic without processing',
    sunoMetatags: { vocalStyle: 'Vocoder Robot', vocalEffect: 'Vocoder, Talk Box, Filter', mood: 'Groovy, Futuristic, Hypnotic', energy: 'Medium-High', texture: 'Analog Electronic Funk', instrument: 'Bass Guitar, Analog Synths, Disco Strings, Vocoder' }
  },

  'BAD BUNNY': {
    artist: 'BAD BUNNY',
    sunoStyleTemplate: 'Latin Trap-Reggaeton, Perreo Experimental, Caribbean Bass Music, 85-100 BPM, Key: D Minor, Heavy Reggaeton Dembow, 808 Sub Bass, Latin Percussion, Synth Melodies, Nasal Male Vocals, Autotune Melodic Singing-Rap, Puerto Rico Street Energy, Party Atmosphere, 2020s',
    sunoBpmRange: '85-100',
    sunoKey: 'D Minor',
    sunoVocalTags: ['Nasal Male Vocals', 'Autotune Singing-Rap', 'Reggaeton Cadence', 'Party Energy'],
    sunoWeirdness: 40,
    sunoStyleInfluence: 85,
    sunoExcludeStyles: 'no rock guitars, no boom bap drums, no acoustic folk Western, no classical strict, no minimal ambient, no dark industrial',
    vocalDNA: 'Distinctive nasal male vocals with autotune. Switches between melodic singing and rap-chanting.',
    flowPattern: 'Reggaeton dembow rhythm with melodic hooks. Never purely raps.',
    productionFingerprint: 'Signature: reggaeton dembow pattern, 808 sub bass, Latin percussion, synth melodies',
    culturalAnchors: 'Puerto Rico street culture, Latin trap pioneer, perreo, Caribbean party',
    structureDNA: 'Verse-chorus-verse with reggaeton/trap.',
    hookType: 'Melodic sung hook or rap hook',
    vocalPlacement: 'Floating in mix, rhythmically placed',
    energyCurve: 'Wave dynamics',
    productionMarkers: 'reggaeton dembow rhythm, Latin trap 808, perreo bass groove, Caribbean percussion, variable density — sparse to maximalist, experimental production choices within Latin framework',
    hookStrategy: 'catchy melodic hook with Latin rhythm, singalong repetition, bilingual accessibility, Caribbean bounce catchiness, party energy but also emotional depth possible',
    verseBehavior: 'elastic rap-singing in Spanish, reggaeton rhythmic flow, confident swagger delivery, varied pace — can be aggressive trap or smooth romantic, Puerto Rican accent prominent',
    antiPatterns: 'Avoid rock or metal, dark minimal, folk, without Latin rhythmic elements',
    sunoMetatags: { vocalStyle: 'Latin Trap Singing-Rap', vocalEffect: 'Autotune, Reverb', mood: 'Party, Energetic, Sensual', energy: 'High', texture: 'Latin Bass Heavy', instrument: 'Dembow Drums, 808 Sub, Latin Percussion, Synths' }
  },

  'JUICE WRLD': {
    artist: 'JUICE WRLD',
    sunoStyleTemplate: 'Emo Rap, Melodic Trap, Emotional Autotune, Heartbreak Anthem Energy, 140-165 BPM, Key: E Minor, Deep 808, Melancholic Guitar Loops, Atmospheric Pads, Trap Hi-Hats, Heavy Melodic Autotune Male Vocals, Freestyle Flow Energy, Emotional Vulnerability, 2010s-2020s',
    sunoBpmRange: '140-165',
    sunoKey: 'E Minor',
    sunoVocalTags: ['Heavy Melodic Autotune', 'Emo Rap Singing', 'Freestyle Energy', 'Emotional Vulnerability'],
    sunoWeirdness: 30,
    sunoStyleInfluence: 85,
    sunoExcludeStyles: 'no hard drill aggression, no boom bap structure, no acoustic folk, no bright pop polish, no minimal ambient, no funk groove',
    vocalDNA: 'Heavy melodic autotune male vocals. Emotional vulnerability. Freestyle-feel delivery.',
    flowPattern: 'Melodic autotune flow that blurs rap and singing. Freestyle energy.',
    productionFingerprint: 'Signature: melancholic guitar loops, deep 808, atmospheric pads, trap hi-hats',
    culturalAnchors: 'Emo rap generation, heartbreak, emotional vulnerability, youth anxiety',
    structureDNA: 'Verse-chorus-verse with melodic rap.',
    hookType: 'Melodic sung hook with emotional delivery',
    vocalPlacement: 'Floating in mix, intimate close-mic',
    energyCurve: 'Wave dynamics',
    productionMarkers: 'emo guitar melodies (clean electric), deep 808 with trap pattern, soft piano layers, lo-fi warmth texture, moderate density, emotional atmospheric production, melodic foundation',
    hookStrategy: 'emotional autotune melodic hook, freestyle feel even in hooks, raw vulnerability, emo-rap emotional peak, no calculated catchiness — genuine emotional overflow',
    verseBehavior: 'emotional freestyle autotune rap-singing, stream-of-consciousness delivery, vulnerable crying quality, rapid flow with emotional weight, no calculated bars — spontaneous feel',
    antiPatterns: 'Avoid hard aggressive drill, boom bap, acoustic or folk',
    sunoMetatags: { vocalStyle: 'Emo Melodic Rap', vocalEffect: 'Heavy Autotune, Reverb', mood: 'Emotional, Melancholic, Raw', energy: 'Medium-High', texture: 'Emo Trap', instrument: 'Guitar Loops, Deep 808, Pads, Trap Drums' }
  },

  'POST MALONE': {
    artist: 'POST MALONE',
    sunoStyleTemplate: 'Pop-Rap Melodic, Genre-Fluid Singing-Rap, Warm Acoustic-Trap Hybrid, 80-110 BPM, Key: G Major, Warm Bass, Acoustic Guitar Foundation, Trap Drums, Atmospheric Pads, Warm Raspy Male Vocals, Melodic Autotune Singing, Strong Melodic Hooks, Polished Radio Mix, 2020s',
    sunoBpmRange: '80-110',
    sunoKey: 'G Major',
    sunoVocalTags: ['Warm Raspy Male Vocals', 'Melodic Autotune Singing', 'Pop-Rap Delivery', 'Melodic Hook Focus'],
    sunoWeirdness: 20,
    sunoStyleInfluence: 80,
    sunoExcludeStyles: 'no dark drill patterns, no aggressive hardcore, no minimal ambient, no experimental noise, no punk energy, no classical orchestral',
    vocalDNA: 'Warm raspy male vocals with melodic autotune. Singing-dominant in delivery.',
    flowPattern: 'Singing-dominant with strong melodic hooks. Warm and accessible delivery.',
    productionFingerprint: 'Signature: acoustic guitar foundation, trap drums, warm bass, atmospheric pads, polished radio mix',
    structureDNA: 'Verse-chorus-verse.',
    hookType: 'Strong melodic sung hook, designed for mass singalong',
    vocalPlacement: 'Floating in mix, warm laid-back intimate delivery',
    energyCurve: 'Wave dynamics',
    productionMarkers: 'warm acoustic guitar textures, trap drums with pop structure, melodic production, accessible arrangement, clean bright mix, genre-fluid — acoustic to trap within one track, moderate density',
    hookStrategy: 'warm melodic sung hook, accessible pop catchiness, moderate complexity, no aggressive edge — pure melodic appeal, singalong friendly, genre-fluid hooks',
    verseBehavior: 'warm melodic singing-dominant, genre-fluid delivery, relaxed casual tone, sing-rap blend with singing dominant, clean articulation, no aggression — warm friendly',
    culturalAnchors: 'Genre-fluid pop culture, accessible mainstream, warm vibes, emotional storytelling',
    antiPatterns: 'Avoid aggressive delivery, dark drill production, minimal lo-fi',
    sunoMetatags: { vocalStyle: 'Pop-Rap Melodic Singing', vocalEffect: 'Melodic Autotune, Reverb', mood: 'Warm, Accessible, Emotional', energy: 'Medium', texture: 'Warm Acoustic-Trap', instrument: 'Acoustic Guitar, Trap Drums, Bass, Pads' }
  },

  'REMA': {
    artist: 'REMA',
    sunoStyleTemplate: 'Afrorave, Nigerian Pop-Rave, High-Energy Afrobeats, Electronic African Fusion, 105-120 BPM, Key: F# Minor, Punchy Afro Bass, Rave Synth Stabs, African Percussion, Electronic Hi-Hats, Youthful Male Vocals, Melodic Hooks, Rave Energy Atmosphere, Festival Sound, 2020s',
    sunoBpmRange: '105-120',
    sunoKey: 'F# Minor',
    sunoVocalTags: ['Youthful Male Vocals', 'Melodic Hooks', 'Afrorave Energy', 'Infectious Cadence'],
    sunoWeirdness: 40,
    sunoStyleInfluence: 85,
    sunoExcludeStyles: 'no dark slow atmospherics, no drill aggression, no boom bap drums, no acoustic folk, no experimental noise, no minimal production',
    vocalDNA: 'Youthful male vocals with infectious melodic hooks. High energy delivery.',
    flowPattern: 'Melodic hooks with afrorave energy. Never dark or slow.',
    productionFingerprint: 'Signature: rave synth stabs, punchy afro bass, African percussion, electronic hi-hats',
    culturalAnchors: 'Nigerian afrorave movement, youth culture, global dance floors, high energy celebration',
    structureDNA: 'Verse-hook-verse with afrorave.',
    hookType: 'Melodic hook with rave energy',
    vocalPlacement: 'Floating in mix, energetic presence',
    energyCurve: 'Constant high energy',
    productionMarkers: 'rave synth stabs, punchy afro bass, African percussion with electronic drums, high energy danceable, bright production, moderate-to-high density, global pop-rave fusion',
    hookStrategy: 'high energy melodic hook, rave-influenced catchiness, infectious repetition, dance energy peak, global pop accessibility, bright uplift',
    verseBehavior: 'youthful energetic melodic delivery, high energy consistent, infectious cadence, danceable vocal rhythm, bright positive delivery, no darkness — pure energy',
    antiPatterns: 'Avoid dark or slow, drill or aggressive, without rave energy',
    sunoMetatags: { vocalStyle: 'Afrorave Melodic', vocalEffect: 'Light Processing, Reverb', mood: 'Energetic, Festive, Infectious', energy: 'Very High', texture: 'Rave-Afro Electronic', instrument: 'Rave Synths, Afro Bass, Percussion, Electronic Drums' }
  },

  'JORJA SMITH': {
    artist: 'JORJA SMITH',
    sunoStyleTemplate: 'UK Neo-Soul R&B, Warm British Soul, Jazzy Vocal R&B, Organic Modern Production, 85-105 BPM, Key: Eb Minor, Live Bass Guitar, Warm Rhodes Electric Piano, Soft Jazz Drums with Brush Snare, Subtle String Pads, Fingerpicked Acoustic Guitar, Female Alto Vocal with Vibrato, Breathy Intimate Delivery, London Soul Atmosphere, UK Garage Subtle Influence, 2020s',
    sunoBpmRange: '85-105',
    sunoKey: 'Eb Minor',
    sunoVocalTags: ['Female Alto', 'Natural Vibrato', 'Breathy Intimate', 'British Soul Inflection', 'No Heavy Autotune'],
    sunoWeirdness: 22,
    sunoStyleInfluence: 85,
    sunoExcludeStyles: 'no trap 808 heavy, no aggressive rap delivery, no autotune processing, no bright pop sheen, no electronic heavy production, no drill patterns',
    vocalDNA: 'FEMALE warm alto voice with natural vibrato and British soul inflection. Breathy intimate delivery that builds to powerful emotional peaks. Jazz-influenced phrasing. No heavy autotune — voice is raw and organic.',
    flowPattern: 'Melodic singing with jazz phrasing and soul runs. Builds from intimate whisper to controlled emotional power. Rhythmic awareness — sits slightly behind the beat with UK groove.',
    productionFingerprint: 'Signature: live bass guitar groove, warm Rhodes electric piano, soft jazz drums (brush snare, light kick), subtle string pads, fingerpicked acoustic guitar, minimal electronic elements, UK garage subtle rhythmic influence in hi-hats',
    culturalAnchors: 'London modern soul scene, UK R&B renaissance, emotional honesty, femininity and strength, Walsall-to-London journey, jazz-club intimacy',
    structureDNA: 'Verse-pre-chorus-chorus with dynamic builds. Verses intimate and sparse, chorus opens up emotionally. Bridge often stripped back to voice + piano/guitar.',
    hookType: 'Melodic sung hook with emotional vocal swell — not chant, not rap',
    vocalPlacement: 'Clean warm in mix, slightly behind beat, close-mic intimate feel',
    energyCurve: 'Slow burn — intimate verses building to emotional chorus peaks, then pulls back',
    productionMarkers: 'live bass guitar groove, warm Rhodes electric piano, soft jazz drums with brush snare, subtle string pads, fingerpicked acoustic guitar, vocal-centered mix, low density organic',
    hookStrategy: 'emotional vocal swell hook, jazz-influenced melodic phrasing, natural voice power as hook, no processing — raw vocal beauty, moderate repetition, intimate-to-powerful dynamic',
    verseBehavior: 'jazz-influenced singing phrasing, slightly behind the beat, intimate breathy verses building control, UK groove rhythmic awareness, no rap — pure singing delivery, dynamic emotional range',
    antiPatterns: 'Avoid trap production, heavy 808s, autotune, aggressive delivery, bright pop sheen, EDM energy, male vocal energy, lo-fi dusty texture',
    sunoMetatags: { vocalStyle: 'UK Neo-Soul Singing', vocalEffect: 'Light Reverb, Natural Vibrato', mood: 'Intimate, Warm, Emotional, Honest', energy: 'Low-Medium with Dynamic Builds', texture: 'Warm Organic Live', instrument: 'Bass Guitar, Rhodes Piano, Jazz Drums, Strings, Acoustic Guitar' }
  },

  'NAS': {
    artist: 'NAS',
    sunoStyleTemplate: 'East Coast Boom Bap, Lyrical Hip-Hop, Storytelling Rap, Golden Era Production, 85-95 BPM, Key: C Minor, Boom Bap Drums, Jazz Samples, Soul Chops, Vinyl Crackle, Deep Male Voice, No Autotune, Lyrical Precision, New York Street Poetry, Classic Hip-Hop, 1990s-2020s',
    sunoBpmRange: '85-95',
    sunoKey: 'C Minor',
    sunoVocalTags: ['Deep Male Voice', 'No Autotune', 'Lyrical Precision', 'Storytelling Delivery'],
    sunoWeirdness: 25,
    sunoStyleInfluence: 90,
    sunoExcludeStyles: 'no autotune processing, no melodic singing, no trap hi-hat patterns, no electronic synths, no pop structure, no modern drill',
    vocalDNA: 'Deep male voice with no autotune. Lyrical precision. Storytelling cadence.',
    flowPattern: 'Classic boom bap flow. Dense multisyllabic rhymes. Storytelling narrative.',
    productionFingerprint: 'Signature: boom bap drums, jazz samples, soul chops, vinyl crackle',
    culturalAnchors: 'Queens NY street poetry, hip-hop golden era, lyrical supremacy, social commentary',
    structureDNA: 'Long lyrical verses (18+ bars).',
    hookType: 'Rhythmic rap hook or spoken hook',
    vocalPlacement: 'Clean ahead of beat, clear articulation',
    energyCurve: 'Slow burn',
    productionMarkers: 'boom bap drums crisp kick and snare, jazz samples and soul chops, vinyl crackle texture, minimal arrangement — drums + sample + voice, dry clean mix, golden era production',
    hookStrategy: 'rhythmic rap hook or scratched sample hook, no sung melody, punchline-driven memorability, DJ scratch as hook element, minimal repetition — hook is lyrical not melodic',
    verseBehavior: 'dense multisyllabic lyrical flow, steady controlled pace, clear articulation, storytelling narrative delivery, no autotune — dry natural voice, moderate tempo, literary precision',
    antiPatterns: 'Avoid autotune, singing, trap production, EDM or pop',
    sunoMetatags: { vocalStyle: 'Lyrical Boom Bap Rap', vocalEffect: 'Dry, Minimal Processing', mood: 'Reflective, Street Wise, Poetic', energy: 'Medium', texture: 'Classic Boom Bap', instrument: 'Boom Bap Drums, Jazz Samples, Soul Chops, Vinyl' }
  },

  'MOBB DEEP': {
    artist: 'MOBB DEEP',
    sunoStyleTemplate: 'Hardcore East Coast Boom Bap, Queensbridge Dark Hip-Hop, Grimy Street Rap, Minimalist Menacing Production, 90-96 BPM, Key: Eb Minor, Hard Boom Bap Drums, Dark Piano Loops, Eerie Minor Key Samples, Gritty Vinyl Texture, Deep Male Dual Voices, No Autotune, Raw Street Delivery, Queensbridge Project Atmosphere, 1990s Golden Era',
    sunoBpmRange: '90-96',
    sunoKey: 'Eb Minor',
    sunoVocalTags: ['Deep Male Dual Voices', 'No Autotune', 'Grimy Street Delivery', 'Monotone Menacing Cadence'],
    sunoWeirdness: 20,
    sunoStyleInfluence: 92,
    sunoExcludeStyles: 'no melodic singing, no autotune, no trap hi-hats, no bright production, no pop hooks, no modern electronic',
    vocalDNA: 'Prodigy: nasal monotone menacing baritone, cold and detached. Havoc: deeper grittier voice, complementary. Dual delivery trades verses. No autotune ever.',
    flowPattern: 'Tight compact bars, steady relentless flow. No flashy multisyllabic — direct, cold, punchy. Short hard-hitting lines.',
    productionFingerprint: 'Signature: Havoc minimalist dark piano loops, hard boom bap drums (crisp snare, punchy kick), eerie string samples, minor key melancholy, gritty vinyl dust, sparse arrangement — space in the beat is the weapon',
    culturalAnchors: 'Queensbridge projects, street survival, paranoia, loyalty and betrayal, NYC hardcore golden era, nihilistic realism',
    structureDNA: 'Verse-verse-hook structure. Long raw verses (16 bars). Hook is minimal — often just a repeated line or scratched sample. No sung chorus.',
    hookType: 'Chant hook or scratched DJ hook — never melodic singing',
    vocalPlacement: 'Dry in mix, close-mic, ahead of beat, punchy attack',
    energyCurve: 'Constant aggression — flat menacing intensity throughout',
    productionMarkers: 'dark minimal piano loop (Havoc signature), hard boom bap drums crisp snare punchy kick, eerie minor string samples, gritty vinyl texture, very sparse arrangement — space as weapon, dry raw mix',
    hookStrategy: 'chant hook or scratched DJ hook, no melodic singing ever, minimal repeated phrase, raw menacing repetition, street slogan as hook',
    verseBehavior: 'tight compact bars, steady relentless flow, cold detached monotone, no flashy multisyllabic — direct punchy short lines, dual voice delivery (Prodigy + Havoc), machine-like consistency',
    antiPatterns: 'Avoid autotune, melodic hooks, trap production, singing, bright chords, upbeat vibes, any modern pop element',
    sunoMetatags: { vocalStyle: 'Hardcore Boom Bap Rap', vocalEffect: 'Dry, Minimal Processing', mood: 'Dark, Menacing, Paranoid, Cold', energy: 'Medium-High Constant', texture: 'Gritty Raw Analog', instrument: 'Dark Piano Loops, Boom Bap Drums, Eerie Strings, Vinyl Crackle' }
  },

  'JEDI MIND TRICKS': {
    artist: 'JEDI MIND TRICKS',
    sunoStyleTemplate: 'Underground Hardcore Hip-Hop, Dark Orchestral Boom Bap, Militant Street Rap, Cinematic Violent Lyricism, 85-95 BPM, Key: D Minor, Orchestral String Samples, Dark Choir Vocals, Hard Boom Bap Drums, Cellos and Violins, Middle Eastern Samples, Deep Aggressive Male Voice, No Autotune, Vinnie Paz Gravel Delivery, Underground Philadelphia Sound, Late 1990s-2000s',
    sunoBpmRange: '85-95',
    sunoKey: 'D Minor',
    sunoVocalTags: ['Deep Gravel Voice', 'No Autotune', 'Aggressive Militant Delivery', 'Staccato Hard Punchlines'],
    sunoWeirdness: 28,
    sunoStyleInfluence: 90,
    sunoExcludeStyles: 'no melodic singing, no autotune, no trap beats modern, no pop hooks, no bright production, no chill ambient',
    vocalDNA: 'Vinnie Paz: deep gravelly aggressive baritone, Italian-American Philly accent, militant delivery, staccato punches. Raw unpolished power. No singing ever.',
    flowPattern: 'Dense aggressive bars, staccato punching delivery. Hard consonant emphasis. Multisyllabic internal rhymes. Rapid-fire then pause for impact.',
    productionFingerprint: 'Signature: Stoupe the Enemy of Mankind production — cinematic orchestral samples (cellos, violins, full orchestra), dark choir vocals, Middle Eastern/Arabic melodic samples, hard boom bap drums (heavy kick, crisp snare), dramatic builds, movie-score darkness',
    culturalAnchors: 'Philadelphia underground, militant spirituality, conspiracy theories, violent street metaphors, Italian-American identity, anti-establishment, boxing/combat imagery',
    structureDNA: 'Long dense verses (16-20 bars). Minimal hooks — often just an orchestral break or a scratched vocal sample. Guest verses frequent (Tragedy Khadafi, GZA, Sean Price).',
    hookType: 'No melodic hook — orchestral break or scratched sample or spoken word',
    vocalPlacement: 'Dry close-mic, aggressive in-your-face, ahead of beat',
    energyCurve: 'Constant aggression with orchestral crescendo peaks',
    productionMarkers: 'cinematic orchestral samples (cellos violins full strings), dark choir vocal pads, Middle Eastern melodic samples, hard boom bap drums heavy kick, dramatic orchestral builds, high density cinematic',
    hookStrategy: 'no melodic hook — orchestral break or scratched sample, cinematic instrumental as hook, dramatic pause then orchestral swell, spoken word fragment possible',
    verseBehavior: 'dense aggressive staccato delivery, hard consonant emphasis, rapid-fire then pause for impact, multisyllabic internal rhymes, gravel voice Vinnie Paz, raw unpolished power, militant intensity',
    antiPatterns: 'Avoid autotune, singing, trap beats, modern drill, pop hooks, bright production, chill vibes',
    sunoMetatags: { vocalStyle: 'Underground Hardcore Rap', vocalEffect: 'Dry, Raw, Minimal Processing', mood: 'Dark, Militant, Cinematic, Violent', energy: 'High Constant', texture: 'Orchestral Dark Analog', instrument: 'Orchestral Strings, Cellos, Dark Choir, Boom Bap Drums, Middle Eastern Samples' }
  },

  'NIRO': {
    artist: 'NIRO',
    sunoStyleTemplate: 'Dark Emotional French Rap, Street Confession Rap, Melodic Pain Trap, Slow Heavy Trap, Deep Urban Narrative, Raw Introspection, 75-90 BPM, Key: D Minor, Dark Minimalist Piano Loop, Heavy Sub Bass 808, Simple Slow Trap Drums, Melancholic Atmospheric Pads Wide Stereo, Deep Raspy Baritone Voice, Controlled Subtle Autotune, Emotional Cracks in Delivery, 2015-2023',
    sunoBpmRange: '75-90',
    sunoKey: 'D Minor',
    sunoVocalTags: ['Deep Raspy Baritone', 'Controlled Subtle Autotune', 'Emotional Cracks', 'Melodic Rap to Pain Singing'],
    sunoWeirdness: 28,
    sunoStyleInfluence: 90,
    sunoExcludeStyles: 'no bright celebratory energy, no fast aggressive drill, no punchline flex rap, no clean polished pop, no experimental noise, no playful ironic delivery',
    vocalDNA: 'Deep raspy baritone voice. Controlled autotune — present but NEVER dominant, just smoothing edges. Natural emotional cracks in delivery — voice breaks on painful words. Alternates between melodic rap and pain-driven singing. Slight drag behind the beat (lazy timing feel). Truth over technique.',
    flowPattern: 'Melodic rap on verses — introspective, building intensity. Pain-driven singing on hooks — emotional and memorable. Short impactful lines (6-10 syllables). Simple vocabulary, heavy emotional weight. No punchline flex — confessional truth delivery.',
    productionFingerprint: 'Signature: dark minimalist piano loop (repetitive, sparse notes), heavy sub bass 808 (not flashy, deep and constant), simple slow trap drums (slow hi-hats, strong kick and snare), melancholic atmospheric pads (wide stereo), occasional subtle cinematic strings for tension',
    culturalAnchors: 'Street survival, loyalty and betrayal, emotional scars, regret and solitude, faith vs doubt (dialogue with God), family and lost friends, prison and past mistakes, success with bitterness — never celebratory',
    structureDNA: 'Intro (spoken or low melodic) → Verse 1 (melodic rap, introspective) → Hook (emotional singing, memorable) → Verse 2 (more intensity, bitterness) → Hook (variation) → Outro (fading, reflective). Suno-optimized structure.',
    hookType: 'Emotional singing hook — pain-driven, memorable melodic phrase, genuine emotional weight, NOT aggressive chant, NOT pop chorus',
    vocalPlacement: 'Slightly behind the beat (lazy drag timing), close-mic intimate, voice forward in mix, emotional cracks exposed',
    energyCurve: 'Slow burn introspective — starts low and reflective, verse 2 builds bitterness and intensity, hooks are emotional peaks, outro fades reflective',
    productionMarkers: 'dark minimalist piano loop (sparse repetitive notes), heavy sub 808 bass constant presence, simple slow trap drums (slow hi-hats strong kick snare), melancholic wide atmospheric pads, occasional subtle strings for cinematic tension, low arrangement density — space for emotional voice',
    hookStrategy: 'emotional pain-singing hook, memorable melodic phrase carried by vocal emotion not production, genuine emotional cracks in delivery, moderate repetition with slight variation on second hook, NOT aggressive — vulnerable and raw',
    verseBehavior: 'melodic rap delivery — introspective and confessional, short impactful lines (6-10 syllables), simple vocabulary with heavy emotional weight, no punchline flex — truth over technique, uses contrasts (light/dark faith/doubt), personal confessions and internal dialogue, drag behind the beat timing',
    antiPatterns: 'NEVER celebratory or triumphant. NEVER fast aggressive flow. NEVER punchline-driven technique flex. NEVER bright or cheerful production. NEVER clean pop polish. Success is always bitter. Emotion is always raw, never manufactured.',
    sunoMetatags: { vocalStyle: 'Emotional Melodic Confession Rap', vocalEffect: 'Subtle Controlled Autotune, Natural Voice Cracks', mood: 'Melancholic, Raw, Confessional, Bitter', energy: 'Low-Medium Slow Burn', texture: 'Dark Minimalist Atmospheric', instrument: 'Dark Piano Loop, Heavy Sub 808, Slow Trap Drums, Melancholic Pads, Subtle Strings' }
  },

  'HUGEL': {
    artist: 'HUGEL',
    sunoStyleTemplate: 'French House, Tropical House, Afro House, DJ-Producer, 120-128 BPM, Key: A Minor, Four-on-the-Floor Kick, Tropical Percussion, House Bassline, Bright Synth Melodies, Filtered Vocal Chops, Summer Festival Energy, Groovy Dancefloor Atmosphere, 2020s',
    sunoBpmRange: '120-128',
    sunoKey: 'A Minor',
    sunoVocalTags: ['Filtered Vocal Chops', 'House Vocal Samples', 'Festival Energy', 'Tropical Hooks'],
    sunoWeirdness: 25,
    sunoStyleInfluence: 80,
    sunoExcludeStyles: 'no rap delivery, no dark atmospherics, no acoustic folk, no boom bap, no slow ballad, no aggressive energy',
    vocalDNA: 'Filtered vocal chops and house vocal samples. Production-driven.',
    flowPattern: 'Vocal chops and hooks only. Dancefloor-focused.',
    productionFingerprint: 'Signature: four-on-the-floor kick, tropical percussion, house bassline, bright synth melodies',
    culturalAnchors: 'French house scene, summer festivals, Ibiza energy, tropical vibes',
    structureDNA: 'Unconventional electronic structure.',
    hookType: 'Hypnotic loop hook or melodic synth hook',
    vocalPlacement: 'Floating in effects',
    energyCurve: 'Explosive peaks',
    productionMarkers: 'house four-on-the-floor kick, tropical melodic loops, afro house percussion, groovy bassline, festival-ready production, high energy mix, bright clean production',
    hookStrategy: 'vocal chop melodic hook, repetitive dance groove phrase, festival energy peak, simple infectious repetition, no complex melody — groove is the hook',
    verseBehavior: 'minimal vocal — production-driven music, vocal chops and samples as delivery, no rap or storytelling, repetitive melodic phrases, DJ/producer aesthetic',
    antiPatterns: 'Avoid rap, dark aggressive, folk or country, slow ballad',
    sunoMetatags: { vocalStyle: 'Vocal Chops', vocalEffect: 'Filter, Chop, Reverb', mood: 'Festive, Summer, Groovy', energy: 'High', texture: 'Tropical House', instrument: 'House Kick, Tropical Percussion, Synth Melodies, Bassline' }
  },

  'WIZKID': {
    artist: 'WIZKID',
    sunoStyleTemplate: 'Smooth Afrobeats, Effortless Afro-Pop, Lagos Nonchalant Groove, 100-112 BPM, Key: Eb Minor, Log Drums, Shekere Percussion, Warm Sub Bass, Soft Synth Pads, Clean Afro Guitar Licks, Silky Male Tenor, Nonchalant Delivery, Positive Lagos Vibes, 2020s',
    sunoBpmRange: '100-112',
    sunoKey: 'Eb Minor',
    sunoVocalTags: ['Silky Tenor', 'Nonchalant Delivery', 'Fluid Melodic Singing', 'Yoruba Inflection'],
    sunoWeirdness: 30,
    sunoStyleInfluence: 85,
    sunoExcludeStyles: 'no dark aggressive energy, no drill patterns, no heavy distorted bass, no experimental noise, no boom bap drums, no fast rap',
    vocalDNA: 'Silky male tenor, nonchalant effortless delivery, fluid melodic singing with Yoruba inflection. NEVER aggressive.',
    flowPattern: 'Effortless melodic flow, smooth Lagos groove, never forced.',
    productionFingerprint: 'Signature: log drums, shekere percussion, warm sub bass, soft synth pads, clean afro guitar licks',
    culturalAnchors: 'Love, dance, Lagos nightlife, African pride, feminine beauty, positive vibes',
    structureDNA: 'Verse-hook-verse with afrobeats.',
    hookType: 'Smooth melodic afrobeats hook',
    vocalPlacement: 'Floating in mix, warm laid-back',
    energyCurve: 'Constant smooth groove',
    productionMarkers: 'afrobeats log drums, shekere percussion, warm sub bass, clean afro guitar, soft atmospheric pads, smooth production, moderate density',
    hookStrategy: 'smooth infectious melodic hook, effortless singalong, African groove as catchiness, moderate repetition, positive energy uplift',
    verseBehavior: 'silky nonchalant melodic delivery, Yoruba vocal inflection, fluid singing-rap, laid-back behind-the-beat, effortless cool, never aggressive or urgent',
    antiPatterns: 'Avoid aggression, dark production, forced delivery, fast rap flow',
    sunoMetatags: { vocalStyle: 'Afrobeats Melodic', vocalEffect: 'Light Reverb', mood: 'Smooth, Positive, Groovy', energy: 'Medium', texture: 'Warm Afro', instrument: 'Log Drums, Shekere, Sub Bass, Guitar, Synth Pads' }
  },

  'STROMAE': {
    artist: 'STROMAE',
    sunoStyleTemplate: 'Belgian Art-Pop, Electro-Chanson Francaise, Danceable Melancholy, 110-130 BPM, Key: C Minor, Modern Electronic Synths, Congolese Rumba Influence, Dancefloor Drums, Theatrical Male Voice, Powerful Singing and Spoken-Sung, Poetic Social Commentary, Dark Humor, 2010s-2020s',
    sunoBpmRange: '110-130',
    sunoKey: 'C Minor',
    sunoVocalTags: ['Theatrical Male Voice', 'Sung and Spoken-Sung', 'Expressive Range', 'Belgian French Accent'],
    sunoWeirdness: 50,
    sunoStyleInfluence: 88,
    sunoExcludeStyles: 'no pure trap, no drill patterns, no acoustic folk simplicity, no standard pop formula, no monotone delivery, no aggressive rap',
    vocalDNA: 'Theatrical expressive male voice. Alternates between powerful singing and spoken-sung delivery. Wide emotional range.',
    flowPattern: 'Theatrical phrasing, alternation between sung sections and spoken-sung verses.',
    productionFingerprint: 'Signature: modern electronic synths, subtle Congolese rumba influences, dancefloor drums, occasional orchestral accents',
    culturalAnchors: 'Danceable melancholy, social critique (unemployment, fatherhood), Belgian-Congolese identity, dark humor',
    structureDNA: 'Verse-chorus-verse with theatrical structure.',
    hookType: 'Powerful sung hook with theatrical drama',
    vocalPlacement: 'Center-forward, dramatic theatrical presence',
    energyCurve: 'Wave dynamics with theatrical peaks',
    productionMarkers: 'electronic production with rumba rhythmic undertones, danceable drum patterns, modern synths, orchestral accents, moderate-to-high density, polished dark production',
    hookStrategy: 'powerful theatrical sung hook, dark theme with danceable energy, memorable chorus with dark subject matter, Belgian pop sophistication',
    verseBehavior: 'spoken-sung theatrical delivery, literary French vocabulary, dark ironic commentary, moderate pace, expressive vocal range, never aggressive — wry and theatrical',
    antiPatterns: 'Avoid pure happiness, standard pop formula, aggressive rap, conventional structure',
    sunoMetatags: { vocalStyle: 'Theatrical Singing', vocalEffect: 'Light Processing, Reverb', mood: 'Melancholic, Theatrical, Dark Humor', energy: 'Medium-High', texture: 'Electronic Dance', instrument: 'Electronic Synths, Rumba Drums, Bass, Orchestral Accents' }
  },

  'TAYC': {
    artist: 'TAYC',
    sunoStyleTemplate: 'French Afro-R&B, Smooth Melodic Pop-R&B, Warm Romantic Nocturnal, 90-110 BPM, Key: Ab Major, Lush Rhodes Chords, Warm Sub Bass, Subtle Afro Percussion, Smooth R&B Drums, Rich Smooth Male Tenor, Melodic Autotune, Romantic Sensual Warmth, 2020s',
    sunoBpmRange: '90-110',
    sunoKey: 'Ab Major',
    sunoVocalTags: ['Rich Smooth Tenor', 'Melodic Autotune', 'Romantic Delivery', 'Singing-Dominant'],
    sunoWeirdness: 20,
    sunoStyleInfluence: 80,
    sunoExcludeStyles: 'no aggressive rap, no dark drill, no heavy 808, no experimental noise, no boom bap, no industrial',
    vocalDNA: 'Rich smooth male tenor with melodic autotune. Singing-dominant delivery. Romantic sensual warmth.',
    flowPattern: 'Singing-dominant throughout. Warm melodic flow.',
    productionFingerprint: 'Signature: lush Rhodes chords, warm sub bass, subtle afro percussion, smooth R&B drums',
    culturalAnchors: 'Romance, sensuality, love stories, nocturnal tenderness, smooth lifestyle, diaspora identity',
    structureDNA: 'Verse-chorus-verse with R&B structure.',
    hookType: 'Romantic melodic sung hook',
    vocalPlacement: 'Floating in mix, warm intimate delivery',
    energyCurve: 'Wave dynamics',
    productionMarkers: 'warm Rhodes chord progressions, smooth R&B drum pattern, gentle afro percussion, warm bass groove, polished romantic mix, lush arrangement',
    hookStrategy: 'warm romantic melodic hook, smooth autotune singing, emotional love delivery, moderate complexity, accessible R&B chorus',
    verseBehavior: 'singing-dominant smooth delivery, romantic sensual tone, smooth continuous flow, moderate pace, intimate warm projection',
    antiPatterns: 'Avoid aggressive delivery, dark production, hard trap',
    sunoMetatags: { vocalStyle: 'Melodic R&B Singing', vocalEffect: 'Smooth Autotune, Reverb', mood: 'Romantic, Warm, Sensual', energy: 'Medium', texture: 'Warm R&B', instrument: 'Rhodes, Warm Bass, Afro Percussion, R&B Drums' }
  },

  'SZA': {
    artist: 'SZA',
    sunoStyleTemplate: 'Neo-Soul R&B, Alternative R&B, Warm Organic Contemporary Soul, 80-105 BPM, Key: F Minor, Live Drums, Rhodes Piano, Acoustic Guitar, Lush Vocal Harmonies, Ethereal Reverb, Breathy Female Vocals, Neo-Soul Melisma Runs, Confessional Intimate Atmosphere, 2020s',
    sunoBpmRange: '80-105',
    sunoKey: 'F Minor',
    sunoVocalTags: ['Breathy Female Vocals', 'Neo-Soul Melisma', 'Whisper to Belt', 'Confessional Delivery'],
    sunoWeirdness: 35,
    sunoStyleInfluence: 85,
    sunoExcludeStyles: 'no aggressive trap, no heavy 808, no drill patterns, no robotic processing, no loud aggressive delivery, no EDM drops',
    vocalDNA: 'Emotional breathy female vocals, neo-soul melisma runs. Switches between whisper intimacy and full emotional belt. Confessional delivery.',
    flowPattern: 'Organic melodic singing with R&B phrasing. Confessional intimate flow.',
    productionFingerprint: 'Signature: live drums, Rhodes piano, acoustic guitar, lush vocal harmonies, ethereal reverb',
    culturalAnchors: 'Emotional vulnerability, complex relationships, feminine empowerment, confessional storytelling, self-discovery',
    structureDNA: 'Verse-chorus-verse.',
    hookType: 'Emotional melodic sung hook',
    vocalPlacement: 'Warm in mix, close-mic intimate',
    energyCurve: 'Wave dynamics — builds to emotional chorus',
    productionMarkers: 'warm organic production, live drum feel, Rhodes piano, acoustic guitar textures, lush harmonies, ethereal reverb, vocal-centered mix',
    hookStrategy: 'emotional confessional hook, neo-soul vocal peak, natural voice power, moderate complexity, intimate-to-powerful dynamic',
    verseBehavior: 'intimate breathy delivery building to emotion, confessional phrasing, organic natural singing, soul runs on transitions, vulnerable honest projection',
    antiPatterns: 'Avoid trap aggression, hard 808, robotic processing, pop sheen',
    sunoMetatags: { vocalStyle: 'Neo-Soul Singing', vocalEffect: 'Reverb, Harmonies, Light Processing', mood: 'Emotional, Intimate, Vulnerable', energy: 'Low-Medium Building', texture: 'Warm Organic Soul', instrument: 'Live Drums, Rhodes, Acoustic Guitar, Harmonies' }
  },

  'BILAL SGHIR': {
    artist: 'BILAL SGHIR',
    sunoStyleTemplate: 'Modern Sentimental Rai, Lovesick Melancholic Groove, Algerian Romantic Youth, 100-115 BPM, Key: Bb Minor, Melancholic Accordion, Electric Guitar Bends, Darbuka Groove, Bouzouki Oud Textures, Raspy Emotional Rai Tenor, Sentimental Vocal Cracks, Darija French Mix, Mediterranean Romance, 2020s',
    sunoBpmRange: '100-115',
    sunoKey: 'Bb Minor',
    sunoVocalTags: ['Raspy Emotional Tenor', 'Sentimental Vocal Cracks', 'Darija Delivery', 'Lovesick Phrasing'],
    sunoWeirdness: 35,
    sunoStyleInfluence: 82,
    sunoExcludeStyles: 'no aggressive trap, no drill patterns, no clean polished pop, no experimental noise, no boom bap, no heavy electronic',
    vocalDNA: 'Raspy emotional rai tenor with breathy phrasing, sentimental vocal cracks.',
    flowPattern: 'Sentimental rai melodic phrasing, emotional lovesick delivery.',
    productionFingerprint: 'Signature: melancholic accordion, electric guitar with bluesy bends, darbuka groove, bouzouki/oud textures',
    culturalAnchors: 'Romantic heartbreak, lovesickness, late-night longing, Mediterranean romance',
    structureDNA: 'Verse-hook-verse with rai structure.',
    hookType: 'Emotional rai melodic hook with sentimental delivery',
    vocalPlacement: 'Warm in mix, close-mic emotional',
    energyCurve: 'Slow burn emotional',
    productionMarkers: 'melancholic accordion lead, electric guitar bends, darbuka percussion groove, oud/bouzouki textures, moderate arrangement density, Mediterranean emotional atmosphere',
    hookStrategy: 'sentimental rai hook, emotional vocal cracks as catchiness, nostalgic melodic phrase, Darija phrasing, lovesick authenticity',
    verseBehavior: 'emotional rai delivery, Darija-French flow, sentimental tone, raw vulnerability, moderate pace, genuine heartbreak expression',
    antiPatterns: 'Avoid polished pop, aggressive rap, overly processed vocals',
    sunoMetatags: { vocalStyle: 'Sentimental Rai Singing', vocalEffect: 'Light Reverb, Natural Voice', mood: 'Lovesick, Melancholic, Romantic', energy: 'Medium', texture: 'Mediterranean Warm', instrument: 'Accordion, Guitar, Darbuka, Bouzouki' }
  },

  'FRED AGAIN': {
    artist: 'FRED AGAIN',
    sunoStyleTemplate: 'Emotional Sampling Electronic, Voice-Memo Dance Music, Euphoric Rave Intimacy, 125-140 BPM, Key: Minor, Pitched Voice Memo Samples, Pulsing House Bass, Breakbeat Drums, Emotional Vocal Hooks, Human Intimacy within Electronic Dance, 2020s',
    sunoBpmRange: '125-140',
    sunoKey: 'Minor',
    sunoVocalTags: ['Pitched Voice Memo Samples', 'Emotional Hooks', 'House Vocal Fragments', 'Intimate Electronic'],
    sunoWeirdness: 55,
    sunoStyleInfluence: 85,
    sunoExcludeStyles: 'no aggressive rap, no heavy trap 808, no drill patterns, no cold electronic, no acoustic folk, no minimal ambient without emotion',
    vocalDNA: 'Pitched voice memo samples as primary melodic element. Human intimacy within electronic dance.',
    flowPattern: 'Voice memo fragments as melodic hooks over house/breakbeat production.',
    productionFingerprint: 'Signature: voice memo hooks, pulsing house bass, breakbeat drums, pitched vocal samples',
    culturalAnchors: 'Friendship, love, loss, euphoria, moments captured in time, collective dancefloor feeling',
    structureDNA: 'Electronic build-drop structure with emotional arcs.',
    hookType: 'Emotional voice memo hook — intimate human moment as dance hook',
    vocalPlacement: 'Floating in effects, emotionally central',
    energyCurve: 'Build to euphoric peak',
    productionMarkers: 'pitched voice memo samples, house bass groove, breakbeat drum pattern, emotional electronic atmosphere, raw vocal texture over dance production',
    hookStrategy: 'intimate voice memo as hook, emotional human moment drives catchiness, euphoric build to peak, vulnerability as dance energy',
    verseBehavior: 'minimal traditional vocal — voice memo fragments build the track, emotional intimacy within electronic framework',
    antiPatterns: 'Avoid cold electronic, aggressive, overly polished pop, clinical production',
    sunoMetatags: { vocalStyle: 'Electronic Voice Memo', vocalEffect: 'Pitch Shift, Reverb, Processing', mood: 'Euphoric, Emotional, Intimate', energy: 'High', texture: 'Emotional Electronic', instrument: 'Voice Samples, House Bass, Breakbeats, Synths' }
  },

  'PEGGY GOU': {
    artist: 'PEGGY GOU',
    sunoStyleTemplate: 'Groovy House Disco Fusion, Smooth Tech-House, Warm Analog Dance, 120-128 BPM, Key: A Minor, Deep House Bass, Funky Synth Riffs, Crisp House Drums, Retro Synth Arpeggios, Smooth House Vocal Hooks, Korean English Mix, Seoul-Berlin Dancefloor Energy, 2020s',
    sunoBpmRange: '120-128',
    sunoKey: 'A Minor',
    sunoVocalTags: ['Smooth House Vocals', 'Groove-Locking Delivery', 'Korean English Phrases', 'Dancefloor Energy'],
    sunoWeirdness: 40,
    sunoStyleInfluence: 82,
    sunoExcludeStyles: 'no aggressive rap, no dark atmospherics, no heavy trap, no acoustic folk, no slow ballad, no minimal without groove',
    vocalDNA: 'Smooth house vocal hooks, groove-locking phrasing for dancefloor.',
    flowPattern: 'House vocal hooks synced with groove. Danceable phrasing.',
    productionFingerprint: 'Signature: deep house bass, funky synth riffs, crisp house drums, retro synth arpeggios',
    culturalAnchors: 'Dancefloor liberation, summer nights, groove as lifestyle, Seoul-Berlin cultural fusion',
    structureDNA: 'Electronic house structure with build and drop.',
    hookType: 'Groovy melodic house hook',
    vocalPlacement: 'Floating in groove, rhythmically locked',
    energyCurve: 'Build to groove peak',
    productionMarkers: 'deep house bass, funky synth riff, crisp four-on-the-floor drums, retro synth arp, warm analog feel, dancefloor-optimized production',
    hookStrategy: 'groove-locked house hook, Korean/English phrase mix, danceable repetition, warm energy, feel-good catchiness',
    verseBehavior: 'minimal traditional verse — groove and feel drive the track, house vocal fragments, dancefloor energy focus',
    antiPatterns: 'Avoid heavy themes, dark production, aggressive energy, slow tempo',
    sunoMetatags: { vocalStyle: 'House Vocal', vocalEffect: 'Reverb, Light Processing', mood: 'Festive, Groovy, Liberating', energy: 'High', texture: 'Warm House Analog', instrument: 'House Bass, Funky Synths, House Drums, Synth Arps' }
  },

  'SNOH AALEGRA': {
    artist: 'SNOH AALEGRA',
    sunoStyleTemplate: 'Cinematic Soul R&B, Jazz-Inflected Vocals, Lush Orchestral R&B, 75-95 BPM, Key: Eb Minor, Lush Orchestral Strings, Warm Bass Guitar, Jazz Piano Chords, Soft Brush Drums, Breathy Smoky Female Alto, Golden Jazz Timbre, Cinematic Warmth, 2020s',
    sunoBpmRange: '75-95',
    sunoKey: 'Eb Minor',
    sunoVocalTags: ['Breathy Smoky Alto', 'Jazz Timbre', 'Cinematic Delivery', 'Tenderness to Power'],
    sunoWeirdness: 28,
    sunoStyleInfluence: 85,
    sunoExcludeStyles: 'no trap production, no heavy 808, no aggressive delivery, no bright pop, no EDM, no drill patterns',
    vocalDNA: 'Breathy smoky female alto with golden jazz timbre. Tenderness to powerful delivery.',
    flowPattern: 'Cinematic soul singing. Jazz-influenced melodic phrasing.',
    productionFingerprint: 'Signature: lush orchestral strings, warm bass guitar, jazz piano chords, soft brush drums',
    culturalAnchors: 'Yearning love, emotional complexity, feminine strength, cinematic loneliness, intimacy',
    structureDNA: 'Verse-chorus-verse with cinematic soul structure.',
    hookType: 'Cinematic emotional sung hook',
    vocalPlacement: 'Warm center of mix, close-mic intimate',
    energyCurve: 'Slow burn to emotional peak',
    productionMarkers: 'orchestral string arrangements, warm bass guitar groove, jazz piano comping, soft brush drum pattern, vocal-centered cinematic mix',
    hookStrategy: 'cinematic emotional hook, orchestral swell behind vocal peak, warm soul catchiness, intimate-to-powerful dynamic',
    verseBehavior: 'jazz-soul intimate delivery, cinematic narrative phrasing, warm emotional projection, controlled vulnerability',
    antiPatterns: 'Avoid trap, heavy 808, pop brightness, aggressive delivery',
    sunoMetatags: { vocalStyle: 'Cinematic Soul Singing', vocalEffect: 'Reverb, Harmonies', mood: 'Cinematic, Warm, Longing', energy: 'Low-Medium', texture: 'Lush Orchestral Soul', instrument: 'Strings, Bass Guitar, Jazz Piano, Brush Drums' }
  },

  'DEFAULT': {
    artist: 'DEFAULT',
    sunoStyleTemplate: 'Urban contemporary trap, dynamic 808 bass, hi-hat complexity, atmospheric production, street credibility, genre-adaptive',
    sunoBpmRange: '90-140',
    sunoKey: 'Minor',
    sunoVocalTags: ['Contemporary Rap', 'Urban Delivery'],
    sunoWeirdness: 50,
    sunoStyleInfluence: 75,
    sunoExcludeStyles: 'no metal screaming, no acoustic folk only, no industrial noise, no classical opera, no country twang, no hard techno',
    vocalDNA: 'Contemporary urban rap delivery, adaptable to genre, street credibility.',
    flowPattern: 'Contemporary rap flow, genre-adaptive phrasing.',
    productionFingerprint: 'Signature: modern urban production, dynamic drums, contemporary textures',
    culturalAnchors: 'Contemporary urban culture, street themes, modern production aesthetics',
    structureDNA: 'Standard verse-hook-verse structure',
    hookType: 'Melodic hook',
    vocalPlacement: 'Floating in mix',
    energyCurve: 'Wave dynamics',
    productionMarkers: 'modern 808 bass pattern, contemporary trap drums, atmospheric pads, clean polished mix, moderate arrangement density, genre-adaptive production',
    hookStrategy: 'melodic hook with moderate catchiness, standard verse-chorus structure, accessible delivery, moderate repetition',
    verseBehavior: 'contemporary rap flow, moderate pace, clean delivery, genre-adaptive phrasing, standard rhythmic patterns',
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

// ── SPRINT 3 — CORPUS CURSORS MAP (27 artistes) ──
// Mapping centralisé D11–D18 + harmonicProfileId pour le corpus.
// Source de vérité unique : édité ici au lieu de modifier 17 blocs DNA.
// Mergé au runtime par getArtistSonicDNA() — non destructif.
export type CursorOverrides = Pick<SonicDNA,
  | 'compositionMode' | 'territorialAnchor' | 'registerMode'
  | 'conceptualMode' | 'referenceDensity' | 'technicityMode'
  | 'honorCode' | 'tempoGravity' | 'harmonicProfileId'>;

const CORPUS_CURSORS: Record<string, CursorOverrides> = {
  BOOBA:        { compositionMode: 'hook-driven',  registerMode: 'combative',     conceptualMode: 'non-narrative',   referenceDensity: 70, technicityMode: 'virtuoso',         honorCode: 'central',  tempoGravity: 'mid',  harmonicProfileId: 'synth-dark-boom-bap' },
  DAMSO:        { compositionMode: 'melody-first', registerMode: 'hybrid',        conceptualMode: 'narrative-real',  referenceDensity: 55, technicityMode: 'virtuoso',         honorCode: 'implicit', tempoGravity: 'mid',  harmonicProfileId: 'jazz-soul-rhodes' },
  KAARIS:       { compositionMode: 'text-first',   registerMode: 'combative',     conceptualMode: 'non-narrative',   referenceDensity: 35, technicityMode: 'standard',         honorCode: 'implicit', tempoGravity: 'mid',  harmonicProfileId: 'mystic-orchestral-808' },
  SCH:          { compositionMode: 'text-first',   registerMode: 'combative',     conceptualMode: 'concept-fictional', referenceDensity: 60, technicityMode: 'virtuoso',       honorCode: 'central',  tempoGravity: 'mid',  harmonicProfileId: 'italo-cinematic-minor', territorialAnchor: { lang: 'italo', density: 25, role: 'lexical' } },
  NINHO:        { compositionMode: 'melody-first', registerMode: 'hybrid',        conceptualMode: 'narrative-real',  referenceDensity: 30, technicityMode: 'standard',         honorCode: 'implicit', tempoGravity: 'mid',  harmonicProfileId: 'afro-trap-melodic' },
  HAMZA:        { compositionMode: 'melody-first', registerMode: 'contemplative', conceptualMode: 'non-narrative',   referenceDensity: 40, technicityMode: 'standard',         honorCode: 'none',     tempoGravity: 'slow', harmonicProfileId: 'cloud-rnb-velvet' },
  TIAKOLA:      { compositionMode: 'melody-first', registerMode: 'hybrid',        conceptualMode: 'non-narrative',   referenceDensity: 25, technicityMode: 'standard',         honorCode: 'none',     tempoGravity: 'mid',  harmonicProfileId: 'gospel-kalimba-afro' },
  "RIM'K":      { compositionMode: 'text-first',   registerMode: 'hybrid',        conceptualMode: 'narrative-real',  referenceDensity: 50, technicityMode: 'standard',         honorCode: 'central',  tempoGravity: 'mid',  harmonicProfileId: 'rai-mediterranean-vintage', territorialAnchor: { lang: 'arabe', density: 35, role: 'both' } },
  JUL:          { compositionMode: 'hook-driven',  registerMode: 'hybrid',        conceptualMode: 'non-narrative',   referenceDensity: 15, technicityMode: 'simple-volunteer', honorCode: 'implicit', tempoGravity: 'mid',  harmonicProfileId: 'marseille-pop-naive' },
  ORELSAN:      { compositionMode: 'text-first',   registerMode: 'contemplative', conceptualMode: 'narrative-real',  referenceDensity: 75, technicityMode: 'standard',         honorCode: 'none',     tempoGravity: 'mid',  harmonicProfileId: 'pop-chanson-acoustic' },
  NEKFEU:       { compositionMode: 'text-first',   registerMode: 'contemplative', conceptualMode: 'narrative-real',  referenceDensity: 80, technicityMode: 'virtuoso',         honorCode: 'implicit', tempoGravity: 'mid',  harmonicProfileId: 'boom-bap-piano-loop' },
  PNL:          { compositionMode: 'melody-first', registerMode: 'contemplative', conceptualMode: 'non-narrative',   referenceDensity: 20, technicityMode: 'simple-volunteer', honorCode: 'implicit', tempoGravity: 'slow', harmonicProfileId: 'cloud-trap-arabe', territorialAnchor: { lang: 'arabe', density: 25, role: 'lexical' } },
  'FREEZE CORLEONE': { compositionMode: 'text-first', registerMode: 'combative', conceptualMode: 'non-narrative',   referenceDensity: 95, technicityMode: 'virtuoso',         honorCode: 'central',  tempoGravity: 'slow', harmonicProfileId: 'mystic-orchestral-808' },
  'ALPHA WANN': { compositionMode: 'text-first',   registerMode: 'combative',     conceptualMode: 'non-narrative',   referenceDensity: 65, technicityMode: 'virtuoso',         honorCode: 'implicit', tempoGravity: 'mid',  harmonicProfileId: 'boom-bap-piano-loop' },
  LAYLOW:       { compositionMode: 'melody-first', registerMode: 'contemplative', conceptualMode: 'concept-fictional', referenceDensity: 70, technicityMode: 'virtuoso',       honorCode: 'none',     tempoGravity: 'mid',  harmonicProfileId: 'synth-retro-futur' },
  GAZO:         { compositionMode: 'hook-driven',  registerMode: 'combative',     conceptualMode: 'non-narrative',   referenceDensity: 25, technicityMode: 'standard',         honorCode: 'implicit', tempoGravity: 'fast', harmonicProfileId: 'drill-fr-cold' },
  'KALASH CRIMINEL': { compositionMode: 'text-first', registerMode: 'combative',  conceptualMode: 'non-narrative',   referenceDensity: 30, technicityMode: 'standard',         honorCode: 'central',  tempoGravity: 'mid',  harmonicProfileId: 'drill-fr-cold' },
  DINOS:        { compositionMode: 'text-first',   registerMode: 'contemplative', conceptualMode: 'narrative-real',  referenceDensity: 70, technicityMode: 'virtuoso',         honorCode: 'implicit', tempoGravity: 'mid',  harmonicProfileId: 'conscient-jazz-soul' },
  LOMEPAL:      { compositionMode: 'melody-first', registerMode: 'contemplative', conceptualMode: 'narrative-real',  referenceDensity: 60, technicityMode: 'standard',         honorCode: 'none',     tempoGravity: 'mid',  harmonicProfileId: 'pop-chanson-acoustic' },
  LUJIPEKA:     { compositionMode: 'melody-first', registerMode: 'contemplative', conceptualMode: 'non-narrative',   referenceDensity: 50, technicityMode: 'standard',         honorCode: 'none',     tempoGravity: 'mid',  harmonicProfileId: 'lofi-glitch-808' },
  IAM:          { compositionMode: 'text-first',   registerMode: 'contemplative', conceptualMode: 'narrative-real',  referenceDensity: 90, technicityMode: 'virtuoso',         honorCode: 'central',  tempoGravity: 'mid',  harmonicProfileId: 'conscient-oriental-sampled' },
  MÉDINE:       { compositionMode: 'text-first',   registerMode: 'combative',     conceptualMode: 'narrative-real',  referenceDensity: 95, technicityMode: 'virtuoso',         honorCode: 'central',  tempoGravity: 'mid',  harmonicProfileId: 'conscient-oriental-sampled', territorialAnchor: { lang: 'arabe', density: 20, role: 'lexical' } },
  'OXMO PUCCINO': { compositionMode: 'text-first', registerMode: 'contemplative', conceptualMode: 'narrative-real',  referenceDensity: 85, technicityMode: 'virtuoso',         honorCode: 'implicit', tempoGravity: 'slow', harmonicProfileId: 'poet-jazz-noir' },
  ROHFF:        { compositionMode: 'text-first',   registerMode: 'combative',     conceptualMode: 'narrative-real',  referenceDensity: 50, technicityMode: 'virtuoso',         honorCode: 'central',  tempoGravity: 'mid',  harmonicProfileId: 'street-grave-808-vocoder' },
  LACRIM:       { compositionMode: 'text-first',   registerMode: 'combative',     conceptualMode: 'narrative-real',  referenceDensity: 40, technicityMode: 'standard',         honorCode: 'central',  tempoGravity: 'mid',  harmonicProfileId: 'street-grave-808-vocoder', territorialAnchor: { lang: 'arabe', density: 20, role: 'lexical' } },
  'MISTER YOU': { compositionMode: 'text-first',   registerMode: 'hybrid',        conceptualMode: 'narrative-real',  referenceDensity: 45, technicityMode: 'standard',         honorCode: 'central',  tempoGravity: 'mid',  harmonicProfileId: 'rai-mediterranean-vintage', territorialAnchor: { lang: 'arabe', density: 25, role: 'lexical' } },
  "HEUSS L'ENFOIRÉ": { compositionMode: 'hook-driven', registerMode: 'hybrid',    conceptualMode: 'narrative-real',  referenceDensity: 35, technicityMode: 'simple-volunteer', honorCode: 'implicit', tempoGravity: 'mid',  harmonicProfileId: 'street-grave-808-vocoder' },
};

/** Normalise une clé corpus pour lookup tolérant accents/quotes */
function normalizeCorpusKey(s: string): string {
  return (s || '').toUpperCase().trim().replace(/\s+/g, ' ');
}

/** Résout les curseurs corpus pour un nom d'artiste (fuzzy includes) */
function resolveCorpusCursors(inspiredBy: string): CursorOverrides | null {
  const target = normalizeCorpusKey(inspiredBy);
  if (!target) return null;
  if (CORPUS_CURSORS[target]) return CORPUS_CURSORS[target];
  for (const key of Object.keys(CORPUS_CURSORS)) {
    const k = normalizeCorpusKey(key);
    if (target.includes(k) || k.includes(target)) return CORPUS_CURSORS[key];
  }
  return null;
}

/**
 * SPRINT 3 — Merge cursor overrides into a SonicDNA without mutating the source.
 * Existing fields on the DNA take precedence (corpus curseurs ne casse pas un override manuel).
 */
export function mergeCursorsIntoDNA(dna: SonicDNA, overrides: Partial<CursorOverrides>): SonicDNA {
  if (!overrides) return dna;
  return {
    ...dna,
    compositionMode:    dna.compositionMode    ?? overrides.compositionMode,
    territorialAnchor:  dna.territorialAnchor  ?? overrides.territorialAnchor,
    registerMode:       dna.registerMode       ?? overrides.registerMode,
    conceptualMode:     dna.conceptualMode     ?? overrides.conceptualMode,
    referenceDensity:   dna.referenceDensity   ?? overrides.referenceDensity,
    technicityMode:     dna.technicityMode     ?? overrides.technicityMode,
    honorCode:          dna.honorCode          ?? overrides.honorCode,
    tempoGravity:       dna.tempoGravity       ?? overrides.tempoGravity,
    harmonicProfileId:  dna.harmonicProfileId  ?? overrides.harmonicProfileId,
  };
}

/**
 * SPRINT 4 — Explicit caller override. overrides WIN over whatever the DNA
 * already contains. Use this when the user/script explicitly wants to force
 * a cursor value (e.g. via HARMONIC_PRESETS or a future UI slider).
 */
export function overrideCursorsOnDNA(dna: SonicDNA, overrides: Partial<CursorOverrides>): SonicDNA {
  if (!overrides) return dna;
  return {
    ...dna,
    compositionMode:    overrides.compositionMode    ?? dna.compositionMode,
    territorialAnchor:  overrides.territorialAnchor  ?? dna.territorialAnchor,
    registerMode:       overrides.registerMode       ?? dna.registerMode,
    conceptualMode:     overrides.conceptualMode     ?? dna.conceptualMode,
    referenceDensity:   overrides.referenceDensity   ?? dna.referenceDensity,
    technicityMode:     overrides.technicityMode     ?? dna.technicityMode,
    honorCode:          overrides.honorCode          ?? dna.honorCode,
    tempoGravity:       overrides.tempoGravity       ?? dna.tempoGravity,
    harmonicProfileId:  overrides.harmonicProfileId  ?? dna.harmonicProfileId,
  };
}

export function getArtistSonicDNA(inspiredBy: string): SonicDNA | null {
  if (!inspiredBy || inspiredBy === 'none') return null;

  const upper = inspiredBy.toUpperCase().trim();

  let resolved: SonicDNA | null = null;

  const exactKey = Object.keys(SONIC_DNA_MAP).find(k => k.toUpperCase() === upper);
  if (exactKey) {
    resolved = SONIC_DNA_MAP[exactKey];
  } else {
    const candidates: { key: string; score: number }[] = [];
    for (const key of Object.keys(SONIC_DNA_MAP)) {
      if (key === 'DEFAULT') continue;
      const keyUpper = key.toUpperCase();
      if (upper.length < 4 && keyUpper.length < 4) continue;
      if (upper.includes(keyUpper) || keyUpper.includes(upper)) {
        const shorter = Math.min(upper.length, keyUpper.length);
        const longer = Math.max(upper.length, keyUpper.length);
        const ratio = shorter / longer;
        if (ratio >= 0.5) candidates.push({ key, score: ratio });
      }
    }
    if (candidates.length > 0) {
      candidates.sort((a, b) => b.score - a.score);
      resolved = SONIC_DNA_MAP[candidates[0].key];
    }
  }

  if (!resolved) resolved = SONIC_DNA_MAP['DEFAULT'] || null;
  if (!resolved) return null;

  // Merge corpus cursors (Sprint 3) — non destructif
  const cursors = resolveCorpusCursors(inspiredBy);
  if (cursors) return mergeCursorsIntoDNA(resolved, cursors);
  return resolved;
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
