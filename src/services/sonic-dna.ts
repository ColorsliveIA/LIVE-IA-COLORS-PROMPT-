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
    sunoExcludeStyles: 'dark trap, aggressive drill, UK drill, minimal lo-fi, introspective cloud rap, low-energy ambient, boom bap, heavy 808 sub, metal, rock distortion, industrial, screaming, punk, country folk, classical orchestral, hard techno',
    vocalDNA: 'High-pitched nasal autotune, constant melodic singing, rapid syllable delivery, uplifting inflection. Never pure rap — always singing.',
    flowPattern: 'Ultra-melodic, rapid syllabic flow with constant rising inflections. Bouncy, optimistic phrasing.',
    productionFingerprint: 'Signature: bright piano lines (major key bursts), punchy rebound 808s, fast hi-hats, digital synths, Mediterranean warmth',
    culturalAnchors: 'Marseille street culture, quartier loyalty, sun and sea, uplifting street love, popular victory',
    structureDNA: 'Standard verse-hook-verse. Short verses (8-12 bars). Strong melodic hook. Bright bouncy arrangement.',
    hookType: 'Melodic sung hook with uplifting inflection',
    vocalPlacement: 'Floating in mix, laid-back with bright presence',
    energyCurve: 'Constant high energy — maintains bright optimism throughout',
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
    sunoExcludeStyles: 'bright bubblegum pop, cheerful acoustic, minimal lo-fi, EDM drops, metal, rock distortion, country folk, jazz acoustic, punk, classical orchestral, reggaeton, slow ballad R&B, industrial harsh, hard techno, ambient drone',
    vocalDNA: 'Medium voice, slightly raspy, masterful autotune on choruses, technical rap verses. Duality of rap speed + melodic singing.',
    flowPattern: 'Technical rap passages alternate with melodic singing sections. Capable of both fast-paced delivery and emotional holds.',
    productionFingerprint: 'Signature: deep 808s, dark moody piano, acoustic melancholy guitar, complex hi-hat patterns (rolls, triplets), atmospheric pads',
    structureDNA: 'Standard verse-hook-verse. Dense verses (16+ bars). Strong melodic hook sections. Clear contrast between rap verses and sung choruses.',
    hookType: 'Melodic autotune hook with emotional resonance',
    vocalPlacement: 'Floating in mix, laid-back delivery with emotional presence',
    energyCurve: 'Wave dynamics — builds from verse into powerful melodic hooks, peaks on chorus',
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
    sunoStyleTemplate: 'Dark French Drill-Trap Noir, Brussels Underground Nocturnal Atmospheric, Moody Minor Key Piano Loops Haunting, Filtered Rhodes Cold Distant, Heavy Sliding Distorted 808 Sub-Bass Deep Rumble, Crisp Metallic Triplet Hi-Hats Frantic, Hard-Hitting Snare Tight, 130-142 BPM, Key: G Minor, Warm Analog Saturation Grainy Close-Mic, Wide Soundstage Lush Reverb Delay Short Echo, Masculine Raspy Honeyed Nasal Vocals, Cold Heavy Metallic Autotune Nonchalant Authoritative, Staccato Rap Flow Phrase-End Doubling, Nocturnal Sophisticated Build Dark Verse to Expensive Peak, Hi-End Studio Mix Intimate Close-Mic, Seine-Saint-Denis Belgian Existential Noir, 2020s',
    sunoBpmRange: '130-142',
    sunoKey: 'G Minor',
    sunoVocalTags: ['Masculine Raspy Rap', 'Cold Metallic Autotune', 'Nonchalant Authoritative', 'Staccato Flow Phrase-End Doubling'],
    sunoWeirdness: 35,
    sunoStyleInfluence: 85,
    sunoExcludeStyles: 'R&B smooth, afro-pop cheerful, congolese pop, warm melodic singing, bright bubblegum pop, festive upbeat, tropical house, dancehall bounce, cheerful happy, reggaeton, country folk, jazz smooth, EDM drops, punk rock, metal screaming, gospel belting',
    vocalDNA: 'Masculine raspy voice with grainy authoritative timbre and honeyed nasal quality. TWO MODES: (1) dry staccato rap with Seine-Saint-Denis 93 accent, phrase-end doubling and short echo delays — RAPPER NOT SINGER; (2) laid-back nonchalant rap-crooner with cold heavy metallic autotune. NEVER warm R&B autotune. NEVER melodic singing. Cold, Belgian, nonchalant.',
    flowPattern: 'Staccato rap flow with heavy phrase-end doubling and short echo delays. Authoritative nonchalant delivery. Strategic pauses. Alternates between drill flow (142 BPM) and nocturnal trap (130 BPM).',
    productionFingerprint: 'MODE 1 (DRILL 142 BPM): Moody minor key piano loops, haunting atmospheric textures, sliding distorted sub-bass 808, crisp metallic triplet hi-hats, hard-hitting snare, analog saturation, wide soundstage, close-mic intimacy. MODE 2 (NOCTURNAL 130 BPM): Nocturnal atmospheric pads, filtered Rhodes cold, heavy sliding 808 sub-bass, crisp digital trap drums, lush reverb and delay, sophisticated expensive soundscape.',
    culturalAnchors: 'Sexual rawness as dark philosophy, existential introspection, toxic relationships, duality of street and intellect, Belgian-French noir identity, provocateur intellectual',
    structureDNA: 'Verse-hook-verse with atmospheric spacing. Dark verses building to nocturnal peak. Minimalist hook sections with metallic autotune crooning.',
    hookType: 'Cold metallic autotune rap-croon hook — NEVER warm melodic R&B hook',
    vocalPlacement: 'Close-mic intimate with wide soundstage reverb, laid-back nonchalant positioning',
    energyCurve: 'Nocturnal build — starts dark and intimate, builds to expensive sophisticated peak',
    antiPatterns: 'NEVER R&B, NEVER afro-pop, NEVER congolese pop, NEVER warm melodic singing, NEVER bright or festive, NEVER tropical, NEVER dancehall. Forbidden: warm R&B autotune, bright pop melodies, uplifting atmosphere',
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
    structureDNA: 'Standard verse-hook-verse. Dense verses (16+ bars). Short melodic hook sections.',
    hookType: 'Melodic autotune hook',
    vocalPlacement: 'Floating in mix, laid-back delivery',
    energyCurve: 'Wave dynamics — builds from verse to hook',
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
    sunoWeirdness: 70,
    sunoStyleInfluence: 90,
    sunoExcludeStyles: 'melodic singing, bright pop, uplifting cheerful, R&B smooth, acoustic guitar, folk, reggaeton, dancehall, afro-pop warm, country, jazz, EDM drops, commercial pop hooks, tropical house, gospel choir, lo-fi chill bedroom',
    vocalDNA: 'Monotone cold grave voice. Zero autotune. Flat detached delivery — emotion is suppressed, not absent. Dense rapid articulation with surgical precision. Voice sits dry in the mix, close-mic.',
    flowPattern: 'Dense technical flow with rapid syllable stacking. Constant tempo — rarely slows down. Short percussive phrases chained together. No pauses for hooks.',
    productionFingerprint: 'Signature: dark repetitive loops (piano/synth), sliding 808 sub bass, drill hi-hats, cold reverb space, minimalist menacing atmosphere, occasional dark sample drops',
    structureDNA: 'Long verses with minimal breaks. Hooks are short chanted phrases or absent entirely. No conventional chorus — repetitive loop carries the track. Static arrangement with subtle textural shifts.',
    hookType: 'Chant hook or no hook — short repeated phrase, never melodic. Hypnotic loop repetition.',
    vocalPlacement: 'Dry close-mic, ahead of beat, percussive attack delivery',
    energyCurve: 'Flat hypnotic — constant cold intensity from start to finish',
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
    sunoWeirdness: 40,
    sunoStyleInfluence: 75,
    sunoExcludeStyles: 'aggressive drill, hardcore trap, metal screaming, EDM drops, pure R&B belting, hard techno, industrial noise, mumble rap, rage trap, country folk, punk rock, reggaeton dembow, classical opera, lo-fi bedroom ambient, dark minimal',
    vocalDNA: 'Clear articulate male voice with natural warmth. Zero heavy autotune — natural voice. Technical rapid flow on verses. Can sing warmly on hooks with real melodic ability. Voice sits clean in the mix.',
    flowPattern: 'Technical lyrical rap with dense internal rhymes. Conversational storytelling cadence. Accelerations on verse peaks. Slows for emotional moments. Versatile — adapts to beat.',
    productionFingerprint: 'Signature: mixed palette — can be boom bap samples, trap drums, pop-rap piano, or electronic textures. Piano melodies, warm bass, subtle synths. Production varies by track but always polished.',
    structureDNA: 'Classic verse-hook-verse. Clear contrast between dense lyrical verses and more open melodic hooks. Bridges and outros common. Evolving arrangement — each section adds texture.',
    hookType: 'Melodic sung hook (natural voice, not autotune) or catchy rap hook with rhythmic repetition',
    vocalPlacement: 'Clean in mix, slightly ahead of beat, clear articulation priority',
    energyCurve: 'Slow burn — starts calm, builds through verses, peaks on final verse or bridge',
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
    sunoWeirdness: 80,
    sunoStyleInfluence: 85,
    sunoExcludeStyles: 'acoustic folk, organic live band, traditional boom bap, conventional pop structure, country, jazz standards, reggaeton, drill aggressive, hardcore rap, metal rock, classical, bright bubblegum pop, gospel, lo-fi dusty, punk',
    vocalDNA: 'Artistic autotune with heavy modulation, pitch shifts, creative vocal effects. Elastic unpredictable flow between rap and singing.',
    flowPattern: 'Elastic unpredictable phrasing, glitch-like rhythmic breaks, melodic bursts treated with effects, cinematic build-ups.',
    productionFingerprint: 'Signature: futuristic synths, deep 808s, electronic atmospheric textures, manipulated samples, subtle glitches, immersive space',
    culturalAnchors: 'Technology and emotion duality, digital solitude, dystopian love, futurism, modern anxiety, digital aesthetics',
    structureDNA: 'Unconventional structure with beat switches. Long atmospheric sections. Experimental arrangement.',
    hookType: 'Hypnotic loop hook or minimal repetitive phrase',
    vocalPlacement: 'Floating in effects and reverb, experimental placement',
    energyCurve: 'Flat hypnotic with textural shifts',
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
    sunoExcludeStyles: 'aggressive trap hard, dark drill, minimal lo-fi beats, heavy 808 sub bass, autotune melodic, metal screaming, rock distortion, EDM drops, reggaeton dembow, country folk, classical orchestral, punk, industrial noise, mumble rap, hard techno',
    vocalDNA: 'Clear unfiltered voice, excellent articulation, conversational rhythm, capable of humor and pathos. Zero autotune, natural delivery.',
    flowPattern: 'Conversational storytelling with ironic wit and narrative clarity. Capable of rapid technical passages and slow introspective moments. Emphasis on narrative structure and lyrical precision.',
    productionFingerprint: 'Signature: warm live samples, organic instrumentation, acoustic guitars, live drums, literary atmosphere, accessibility',
    structureDNA: 'Verse-hook-verse with emphasis on storytelling clarity. Verses build narrative (12-16 bars). Hooks provide reprieve with melodic or rhythmic simplicity. Strong structural narrative arc.',
    hookType: 'Melodic sung hook or rhythmic rap hook emphasizing clarity over complexity',
    vocalPlacement: 'Clean forward in mix, ahead of beat, natural intimate articulation',
    energyCurve: 'Slow burn — starts conversational, builds through narrative development, peaks on final verse or bridge',
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
    sunoStyleTemplate: 'Cinematic Hardcore Rap, Dark Orchestral Trap, Deep Authoritative Voice, Cold Luxury Atmosphere, 125-140 BPM, Key: C# Minor, Distorted Heavy 808, Dark Choir Samples, Dramatic Violins, Punchy Trap Snares, Industrial Synth Textures, Sombre Autotune on Hooks Only, Massive Cinematic Production, 2020s',
    sunoBpmRange: '125-140',
    sunoKey: 'C# Minor',
    sunoVocalTags: ['Authoritative Rap', 'Deep Baritone', 'Dark Hook Singing', 'Precise Punchlines'],
    sunoWeirdness: 55,
    sunoStyleInfluence: 85,
    sunoExcludeStyles: 'bright bubblegum pop, happy cheerful, soft acoustic, lo-fi chill bedroom, reggaeton, country folk, gentle R&B ballad, jazz smooth, classical, EDM drops, ambient drone, punk, indie folk, tropical house, gospel',
    vocalDNA: 'Deep grave authoritative voice, imposing presence. Sombre autotune ONLY on hooks/refrains, never on verses. Precise choppy delivery. Punchlines percutantes. Dark sung hooks since Ultra era.',
    flowPattern: 'Choppy precise punchline delivery. Short impactful phrases. Dark melodic hooks on choruses with somber autotune. Verses are pure rap technique.',
    productionFingerprint: 'Signature: dark cinematic orchestrations (dramatic violins, somber choirs), distorted heavy 808s, industrial synth textures, massive production with cinematic scope, punchy trap drums',
    culturalAnchors: 'Solitary dominance, fierce competition, cold luxury, betrayal, heritage, street credibility elevated to cinematic art',
    structureDNA: 'Long dense verses (18+ bars). Short or minimal hooks. Repetitive production carries track.',
    hookType: 'Chant hook or no hook — short phrase repetition',
    vocalPlacement: 'Dry ahead of beat, percussive attack',
    energyCurve: 'Constant aggression — high intensity throughout',
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
    structureDNA: 'Dense verse-hook-verse. Long technical verses (18+ bars). Hard hitting hook.',
    hookType: 'Aggressive chant hook or rhythmic rap hook',
    vocalPlacement: 'Ahead of beat, percussive aggressive attack',
    energyCurve: 'Constant aggression — high tension throughout',
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
    sunoStyleTemplate: 'Technical French Rap, Dark Ironic Trap, Controlled Unpredictability, 100-135 BPM, Key: C Minor, Hard Trap Drums, Dark Synth Textures, Punchy 808, Occasional Beat Switch, Clear Dry Male Voice No Autotune, Fast Technical Delivery, Ironic Dark Energy, 2020s',
    sunoBpmRange: '100-135',
    sunoKey: 'C Minor',
    sunoVocalTags: ['Technical Rap', 'Clear Dry Voice', 'Fast Delivery', 'Ironic Tone Shifts'],
    sunoWeirdness: 60,
    sunoStyleInfluence: 80,
    sunoExcludeStyles: 'melodic R&B singing, standard pop hooks, acoustic folk, serious conscious boom bap, country, jazz smooth, classical, reggaeton, dancehall, gospel choir, bright cheerful, soft ballad, tropical house, afro-pop, EDM drops',
    vocalDNA: 'Clear articulate male voice, no autotune. Fast technical delivery as default. Tone shifts between dead serious and ironic — but controlled, not chaotic. Can whisper then accelerate. Voice sits dry and forward in mix.',
    flowPattern: 'Fast technical flow as baseline. Dense multisyllabic rhymes. Occasional mid-verse tempo shifts (not every bar). Ironic comedic timing — pauses for effect before punchlines. Technical precision over chaos.',
    productionFingerprint: 'Signature: hard trap drums as main axis, dark synth textures, punchy 808 bass, occasional beat switch (not constant), unexpected sample drops, production that supports rather than dominates',
    structureDNA: 'Standard verse-hook structure but hooks can be ironic spoken phrases or rapid-fire bars instead of melodic. Occasional beat switch between sections. Verses are dense and long.',
    hookType: 'Ironic chant hook or rapid-fire punchline hook — never melodic autotune. Catchy through repetition and rhythm, not melody.',
    vocalPlacement: 'Dry forward in mix, percussive attack, ahead of beat on fast sections',
    energyCurve: 'Wave dynamics — builds through verse, drops for ironic aside, re-accelerates for climax',
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
    sunoExcludeStyles: 'harsh screaming, metal distortion, punk rock, country twang, classical orchestral, folk acoustic, industrial noise, hard techno, boom bap dusty, mumble rap, reggaeton heavy, gospel, ambient drone, lo-fi bedroom, rage trap',
    vocalDNA: 'Smooth voice transitioning fluidly between rap and singing with zero rupture. Subtle controlled autotune. Hooks are ultra-memorable, designed for mass singalong. Emotional vulnerability in tone.',
    flowPattern: 'Conversational rap verses transitioning seamlessly to sung choruses. Can shift from slow R&B (85 BPM) to uptempo trap (140+ BPM). Hook-first songwriting.',
    productionFingerprint: 'Signature: warm deep 808s, R&B piano/guitar, atmospheric pads, clean trap drums, nocturnal intimate production, soulful samples, wide stereo polish',
    structureDNA: 'Highly adaptable structure. MULTIPLE MODES: introspective rap verses with minimal hooks, melodic R&B verses with strong sung choruses, or global crossover with pop-friendly structures.',
    hookType: 'Ultra-memorable sung hook (mass singalong potential) or conversational rap-sung hybrid hook',
    vocalPlacement: 'Floating in mix, laid-back vocal delivery with intimate close-mic warmth',
    energyCurve: 'Variable — adapts to mode.',
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
    sunoWeirdness: 60,
    sunoStyleInfluence: 90,
    sunoExcludeStyles: 'aggressive drill, fast tempo hardcore, bright cheerful, happy pop, UK drill, boom bap dusty, commercial pop hooks, metal rock, country folk, reggaeton, jazz, classical, industrial, hard techno, punk, EDM drops',
    vocalDNA: 'Omnipresent artistic autotune, floating spatial voice, slow melodic delivery. Doubled/layered vocals creating ethereal effect. NEVER pure rap — always singing.',
    flowPattern: 'Slow spatial phrasing, words floating in massive reverb. Melodic contours over minimal beats. No rushing — everything floats.',
    productionFingerprint: 'Signature: atmospheric synth pads, deep slow 808, ethereal piano, massive reverb, minimalist but immersive production, spatial width',
    culturalAnchors: 'Solitude, family bonds, bitter success, urban contemplation, cité as universe, deep melancholy, nostalgia',
    structureDNA: 'Verse-hook-verse with hypnotic repetition. Medium verses (14-16 bars). Repeated hook loops.',
    hookType: 'Hypnotic melodic loop hook',
    vocalPlacement: 'Floating in mix, laid-back in atmospheric reverb',
    energyCurve: 'Flat hypnotic — consistent dreamy intensity',
    antiPatterns: 'Avoid fast or aggressive, pure rap/technical flow, bright or cheerful, dense production',
    sunoMetatags: { vocalStyle: 'Melodic Singing', vocalEffect: 'Heavy Autotune, Massive Reverb', mood: 'Melancholic, Ethereal', energy: 'Low', texture: 'Atmospheric Cloud', instrument: 'Synth Pads, Slow 808, Piano' }
  },

  'SDM': {
    artist: 'SDM',
    sunoStyleTemplate: 'Dark Afro-Trap Melodic Paris Banlieue, Nocturnal Street Energy, Deep Masculine Heavy Metallic Autotune, Moody Minor Key Melodies, Heavy Sliding 808 Sub-Bass, Crisp Digital Trap Drums, Sharp Hi-Hats, 125-140 BPM, Key: G Minor, Analog Warmth Dark Production, Wide Soundstage, Intimate Close-Mic, Dark Sung Melodic Hooks, Staccato Rap Flow, Paris Suburbs Nocturnal Melancholy, 2020s',
    sunoBpmRange: '125-140',
    sunoKey: 'G Minor',
    sunoVocalTags: ['Deep Masculine Rap', 'Heavy Metallic Autotune', 'Dark Melodic Hooks', 'Street Nonchalant'],
    sunoWeirdness: 35,
    sunoStyleInfluence: 82,
    sunoExcludeStyles: 'bright pop, cheerful, acoustic folk, R&B ballad, dancehall, tropical, rock, punk, edm, country',
    vocalDNA: 'Deep masculine voice with heavy metallic autotune. Street-level delivery. Alternates between staccato rap flow on verses and dark metallic autotune on melodic hooks. Paris banlieue energy — raw but polished. Never purely singing, never crooner-like.',
    flowPattern: 'Staccato rap flow on verses, heavy metallic autotune melodic hooks on refrains. Street sincerity dominates. Builds from dark verses to intense melodic hook peaks.',
    productionFingerprint: 'Signature: heavy sliding 808 sub-bass, moody minor-key melodies (piano/guitar), crisp digital trap drums, sharp hi-hats, dark atmospheric pads, analog warmth, wide soundstage, close-mic intimacy, nocturnal Paris banlieue street vibe',
    culturalAnchors: 'Paris banlieue nocturnal life, street success and melancholy, loyalty codes, authentic struggle, dark ambition, night city energy, Île-de-France urban identity',
    structureDNA: 'Verse-hook-verse with street energy. Dense verses (14-16 bars). Dark metallic melodic hook sections. Aggressive build throughout.',
    hookType: 'Dark metallic autotune melodic hook — Paris street energy, NOT smooth R&B crooner',
    vocalPlacement: 'Dry forward in mix on verses, floating in reverb on hooks, close-mic intimate throughout',
    energyCurve: 'Slow burn — builds from dark aggressive verses to intense melodic hook peaks',
    antiPatterns: 'NEVER Brussels or Belgian references. NEVER smooth R&B crooner. NEVER nonchalant laid-back like DAMSO. Avoid bright or cheerful, avoid acoustic, avoid dancehall, avoid R&B ballad softness',
    sunoMetatags: { vocalStyle: 'Dark Afro-Trap Rap', vocalEffect: 'Heavy Metallic Autotune, Reverb on Hooks', mood: 'Dark, Nocturnal, Street', energy: 'Medium-High', texture: 'Dark Warm Trap', instrument: 'Sliding 808 Sub-Bass, Moody Piano, Crisp Trap Drums, Sharp Hi-Hats' }
  },

  'NISKA': {
    artist: 'NISKA',
    sunoStyleTemplate: 'Afro-Trap Festive, Dancehall-Rap Hybrid, Bouncy Party Energy, 100-115 BPM, Key: G Minor, Bouncy 808, Afro Percussion (Congas, Djembe), Festive Melodies, Dancehall Influence, Light Autotune, Contagious Energy, 2020s',
    sunoBpmRange: '100-115',
    sunoKey: 'G Minor',
    sunoVocalTags: ['Festive Flow', 'Light Autotune', 'Bouncy Delivery', 'Party Energy'],
    sunoWeirdness: 35,
    sunoStyleInfluence: 80,
    sunoExcludeStyles: 'dark aggressive drill, minimal lo-fi, introspective cloud rap, slow R&B ballad, metal rock, classical, country folk, jazz, EDM drops, punk, ambient drone, industrial, hard techno, boom bap, gospel choir, reggaeton',
    vocalDNA: 'Recognizable voice, light autotune, bouncy danceable flow. Festive contagious energy. Alternation rap/chant.',
    flowPattern: 'Bouncy rebounding flow, danceable phrasing, festive energy with rap technique moments.',
    productionFingerprint: 'Signature: afro percussion (congas, djembe synth), bouncy 808s, festive melodies, dancehall influences',
    culturalAnchors: 'Party culture, dance, quartier pride, positive street energy, Congolese influences',
    structureDNA: 'Verse-hook-verse with festive structure. Short verses (12-14 bars). Strong catchy hook.',
    hookType: 'Chant hook with danceable rhythm',
    vocalPlacement: 'Floating in mix with party presence',
    energyCurve: 'Constant high energy — festive throughout',
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
    sunoExcludeStyles: 'aggressive French drill, bright bubblegum pop, acoustic folk, country twang, classical orchestral, reggaeton, jazz smooth, EDM drops, metal, gospel, ambient drone, lo-fi chill, industrial, hard techno, tropical house, punk',
    vocalDNA: 'Clear voice, UK drill sliding syncopated flow, light melodic autotune on hooks. London accent marked. Cool not aggressive.',
    flowPattern: 'Sliding syncopated drill flow, catchy melodic hooks, alternation between technical rap and earworm melodies.',
    productionFingerprint: 'Signature: sliding 808s, triplet hi-hats, melancholic piano/guitar, UK drill ambiance but melodic touch',
    culturalAnchors: 'London street life, hustling, flexing, relationships, UK cool attitude',
    structureDNA: 'Long drill verses (18+ bars). Minimal hook structure.',
    hookType: 'Short rhythmic chant or no traditional hook',
    vocalPlacement: 'Ahead of beat, aggressive sharp attack',
    energyCurve: 'Constant aggression — tension from start to finish',
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
    sunoExcludeStyles: 'heavy autotune, melodic pop singing, bright bubblegum pop, EDM drops, reggaeton dembow, country folk, metal rock, industrial noise, hard techno, tropical house, ambient drone, punk, dancehall, commercial trap, gospel choir',
    vocalDNA: 'Dry baritone voice, ZERO autotune, hyper-precise articulation, rapid technical delivery, cold controlled precision. No singing ever.',
    flowPattern: 'Surgical technical flow, dense multisyllabic rhymes, rapid articulation without melodic inflection.',
    productionFingerprint: 'Signature: sparse dark piano (minor keys), subtle bell textures, heavy punchy drums, tight snare crack, minimal bass.',
    structureDNA: 'Dense verse-dominant structure. Long technical verses (18+ bars) with minimal hooks.',
    hookType: 'Chant hook or rhythmic rap hook, brief and technical',
    vocalPlacement: 'Clean forward in mix, ahead of beat, percussive technical attack',
    energyCurve: 'Constant technical density — high rhythmic intensity from start to finish',
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
    sunoExcludeStyles: 'dark aggressive drill, minimal trap cold, industrial noise, boom bap dusty, metal rock, classical orchestral, country folk, EDM drops, punk, hard techno, lo-fi bedroom, ambient drone, jazz smooth, bright bubblegum pop, rage trap',
    vocalDNA: 'Mix of melodic singing and rap, light autotune, marked Caribbean accent. Danceable bouncy flow.',
    flowPattern: 'Bouncy dancehall flow with Caribbean inflection, alternation between floating melodic passages and percussive rap.',
    productionFingerprint: 'Signature: dancehall riddims, tropical percussion, bouncy 808s, atmospheric synths, steel drum/flute tropical melodies',
    culturalAnchors: 'Caribbean identity, island pride, tropical melancholy, party, exile, Creole-French blend',
    structureDNA: 'Verse-hook-verse with dancehall bounce. Medium verses (12-14 bars). Strong melodic hook.',
    hookType: 'Melodic dancehall hook or chant',
    vocalPlacement: 'Floating in mix with percussive energy',
    energyCurve: 'Constant high energy — festive throughout',
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
    sunoExcludeStyles: 'aggressive rap hardcore, dark minimal drill, boom bap dusty, industrial noise, slow ballad piano, metal rock, country folk, punk, hard techno, EDM drops, classical, ambient drone, lo-fi bedroom, screaming, rage trap',
    vocalDNA: 'Ultra-melodic, permanent autotune, bright high voice, constant tonal variations and harmonies.',
    flowPattern: 'Rapid melodic flow with constant pitch variations. Singing dominant with rap-based rhythmic structure.',
    productionFingerprint: 'Signature: afro percussion (congas, shakers, synth djembe), melodic guitars, warm bouncy 808s, bright synths, atmospheric pads',
    structureDNA: 'Verse-hook-verse with melodic density throughout.',
    hookType: 'Melodic sung hook with constant autotune variation',
    vocalPlacement: 'Floating in mix, laid-back melodic delivery',
    energyCurve: 'Constant high energy — maintains bright joyful intensity throughout',
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
    sunoExcludeStyles: 'aggressive hardcore drill, acoustic folk, bright bubblegum pop, boom bap dusty, metal rock, country, classical orchestral, punk, industrial, reggaeton, gospel, ambient drone, hard techno, lo-fi bedroom, screaming',
    vocalDNA: 'Omnipresent melodic autotune, suave nonchalant sensual voice. Elastic fluid flow. Singing IS the style.',
    flowPattern: 'Elastic fluid phrasing, nonchalant delivery, smooth melodic contours.',
    productionFingerprint: 'Signature: smooth luxury synths, deep round 808s, airy clean hi-hats, nocturnal intense atmosphere',
    culturalAnchors: 'Luxury, sensuality, nightlife, US aesthetic, women, sauce, Belgian cool',
    structureDNA: 'Standard verse-hook-verse. Medium verses (12-14 bars). Strong melodic hook.',
    hookType: 'Melodic autotune hook with sensual inflection',
    vocalPlacement: 'Floating in mix, laid-back intimate',
    energyCurve: 'Flat hypnotic — consistent cool sophistication',
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
    sunoExcludeStyles: 'acoustic guitar folk, minimal lo-fi, classical orchestral, bright bubblegum pop, country twang, jazz smooth, reggaeton, boom bap dusty, gospel choir, clean R&B ballad, industrial, punk, hard techno, gentle ambient',
    vocalDNA: 'Thick artistic autotune, modulated spatial voice, melodic ad-libs throughout. Singing is floating and planetary.',
    flowPattern: 'Spatial floating delivery, melodic ad-lib heavy, beat switch adaptation.',
    productionFingerprint: 'Signature: saturated deep bass, atmospheric floating synths, phaser/flanger effects, beat switches, massive reverb',
    culturalAnchors: 'Cosmic nightlife, chaotic festival energy, space themes, controlled chaos, psychedelic aesthetics',
    structureDNA: 'Long verses (16+ bars) with beat switches possible. Dynamic arrangement.',
    hookType: 'Melodic sung hook or ad-lib hook loops',
    vocalPlacement: 'Floating in effects, layered delivery',
    energyCurve: 'Explosive peaks — builds to dramatic moments',
    antiPatterns: 'No acoustic simplicity, no minimal beats, no clean production, never static',
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
    sunoExcludeStyles: 'heavy autotune melodic, commercial trap hooks, bright bubblegum pop, simple pop chorus, EDM drops, reggaeton, country folk, metal screaming, industrial, punk, hard techno, ambient drone, tropical house, gospel belting, lo-fi bedroom',
    vocalDNA: 'Ultra-complex technical flow, character voice changes mid-song, deep storytelling. ZERO autotune.',
    flowPattern: 'Multi-layered storytelling, character voice shifts, tempo-adaptive delivery.',
    productionFingerprint: 'Signature: jazz samples (contrabass, saxo, piano jazz), varied drums (boom bap, trap, live), orchestral arrangements',
    culturalAnchors: 'Social justice, racial politics, African-American heritage, religion, redemption, Compton identity',
    structureDNA: 'Dense verse-hook-verse with narrative structure. Long technical verses (18+ bars). Minimal hooks.',
    hookType: 'Chant hook or spoken hook phrase',
    vocalPlacement: 'Clean ahead of beat, clear articulation',
    energyCurve: 'Slow burn — builds through verses to peak',
    antiPatterns: 'No autotune, no simple radio hooks, no conventional single-genre production',
    sunoMetatags: { vocalStyle: 'Rap', vocalEffect: 'Minimal', mood: 'Conscious, Intense', energy: 'Variable', texture: 'Jazz Organic', instrument: 'Jazz Ensemble, Live Drums, Orchestral' }
  },

  'PLAYBOI CARTI': {
    artist: 'PLAYBOI CARTI',
    sunoStyleTemplate: 'Rage Trap, Dark Minimalist Punk Rap, Distorted Heavy Bass, Aggressive High-Energy, 150-170 BPM, Key: E Minor, Extremely Saturated 808, Distorted Synth Stabs, Aggressive Minimal Drums, Dark Repetitive Melodies, High-Pitched Autotune Ad-Lib Vocals, Textural Voice Over Lyrics, Mosh Pit Energy, 2020s',
    sunoBpmRange: '150-170',
    sunoKey: 'E Minor',
    sunoVocalTags: ['High-Pitched Autotune', 'Ad-Lib Dominant', 'Textural Vocals', 'Punk Energy'],
    sunoWeirdness: 85,
    sunoStyleInfluence: 88,
    sunoExcludeStyles: 'lyrical conscious rap, storytelling narrative, acoustic folk, jazz smooth, R&B ballad soft, boom bap golden era, country, classical, reggaeton, bright pop, gospel, ambient gentle, clean production, conventional song structure, verse-chorus pop',
    vocalDNA: 'High-pitched autotune voice used as texture/instrument. Short punchy ad-libs dominate. Voice is a rhythmic percussion tool.',
    flowPattern: 'Short repetitive phrases (2-4 words max per bar). Ad-lib chains. Rhythmic stabs rather than flowing bars.',
    productionFingerprint: 'Signature: extremely saturated 808, distorted synth stabs, aggressive minimal drums, dark repetitive melodies, high BPM rage energy',
    structureDNA: 'Minimal traditional structure. Short verses (8-12 bars max). Hooks are repeated ad-libs or chants.',
    hookType: 'Hypnotic loop hook — short repeated chant or ad-lib phrase, not melodic.',
    vocalPlacement: 'Floating in mix, swimming in reverb and delay, surrounded by distortion.',
    energyCurve: 'Constant aggression with explosive peaks on ad-lib chains',
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
    sunoWeirdness: 75,
    sunoStyleInfluence: 90,
    sunoExcludeStyles: 'conventional trap beats, standard pop chorus, acoustic folk, minimal lo-fi bedroom, UK drill, reggaeton, country twang, metal, punk, hard techno, ambient chill, classical strict, boom bap retro, jazz smooth, gentle R&B',
    vocalDNA: 'Expressive male voice that alternates between rap, singing, and gospel chanting. Artistic autotune on melodic sections.',
    flowPattern: 'Conversational rap with dramatic pauses. Gospel-chant sections. Flow serves emotion over technique.',
    productionFingerprint: 'Signature: chopped soul vocal samples, massive gospel choir, grand piano, orchestral strings, industrial drums, distorted bass, maximalist layered production',
    structureDNA: 'Unconventional song structures. Beat switches between sections. Gospel breakdown sections.',
    hookType: 'Anthem chorus (gospel chant style) or hypnotic repeated phrase.',
    vocalPlacement: 'Center-forward, dramatic presence',
    energyCurve: 'Explosive peaks — builds from minimal to massive',
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
    sunoWeirdness: 55,
    sunoStyleInfluence: 88,
    sunoExcludeStyles: 'aggressive rap, trap 808, drill dark, EDM drops, upbeat dance pop, punk rock, metal screaming, hard techno, reggaeton, country modern, hip-hop beats, industrial noise, lo-fi dusty, boom bap, bright bubblegum',
    vocalDNA: 'Languid trailing singing, whispers, ethereal harmonies, low velvety female voice.',
    flowPattern: 'Slow languid phrasing, drawn-out syllables, melodic trailing. Time feels suspended.',
    productionFingerprint: 'Signature: massive reverb, surf guitars, cinematic strings, slow heavy drums, 1960s reimagined atmosphere',
    culturalAnchors: 'Hollywood nostalgia, tragic glamour, Americana, toxic love, eternal summer, faded beauty',
    structureDNA: 'Verse-chorus-verse with cinematic structure. Short verses (8-12 bars). Strong melodic chorus.',
    hookType: 'Melodic sung hook with dark melancholy',
    vocalPlacement: 'Floating in mix, close-mic intimate',
    energyCurve: 'Slow burn — melancholic throughout',
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
    sunoExcludeStyles: 'conventional pop standard, basic trap beats, acoustic folk simple, country twang, metal, punk, classical strict, lo-fi bedroom, boom bap, industrial, hard techno, ambient drone, gospel, bright bubblegum, reggaeton standard, jazz smooth',
    vocalDNA: 'Powerful expressive voice, flamenco melisma, complex vocal textures. Capable of shifting from whisper to passionate cry.',
    flowPattern: 'Flamenco-influenced phrasing with modern rhythmic breaks.',
    productionFingerprint: 'Signature: flamenco guitar, palmas claps, 808 trap bass, modern synths, organic/electronic blend',
    culturalAnchors: 'Femininity and power, tradition vs modernity, Andalusian roots, passion',
    structureDNA: 'Unconventional structure with beat switches.',
    hookType: 'Melodic hook with flamenco/experimental elements',
    vocalPlacement: 'Floating in effects, experimentally processed',
    energyCurve: 'Wave dynamics with experimental intensity shifts',
    antiPatterns: 'No conventional pop, no standard genre production',
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
    sunoExcludeStyles: 'loud aggressive rap, standard pop hooks, bright cheerful, conventional song structure, metal screaming, EDM drops, reggaeton, country folk, hard techno, boom bap, jazz smooth, classical, punk rock, tropical house, gospel belting',
    vocalDNA: 'Whispered close-mic singing, dark doubled harmonies, intimate ASMR quality. Capable of shifting to raw powerful bursts.',
    flowPattern: 'Whispered intimate delivery building to powerful moments. Silence as structural element.',
    productionFingerprint: 'Signature: extreme sub-bass, organic ASMR textures, silence as instrument, minimal percussion',
    culturalAnchors: 'Anxiety, nightmares, silent power, vulnerability, soft rebellion, youth angst',
    structureDNA: 'Verse-chorus-verse with minimalist structure.',
    hookType: 'Melodic sung hook with whispered intimacy',
    vocalPlacement: 'Close-mic intimate, ahead of beat slightly',
    energyCurve: 'Slow burn — builds from whisper to intensity',
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
    sunoExcludeStyles: 'dark aggressive drill, minimal trap cold, boom bap dusty, industrial noise, metal rock, classical orchestral, country folk, punk, hard techno, lo-fi bedroom, ambient drone, jazz, screaming, EDM drops harsh, gospel',
    vocalDNA: 'Powerful recognizable female voice, light autotune, danceable chaloupe flow. Hooks are priority.',
    flowPattern: 'Danceable melodic flow, hook-first approach, rhythmic bouncy phrasing.',
    productionFingerprint: 'Signature: warm pop 808s, light afro percussion, melodic pop guitar, bright synths',
    culturalAnchors: 'Feminine independence, love/heartbreak, dance, self-confidence, nightlife, unique urban French slang',
    structureDNA: 'Verse-hook-verse with danceable structure.',
    hookType: 'Melodic sung hook with afro-pop bounce',
    vocalPlacement: 'Floating in mix, rhythmically placed',
    energyCurve: 'Wave dynamics — builds to hook',
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
    sunoExcludeStyles: 'aggressive trap hard, dark minimal drill, industrial noise, heavy 808 sub bass, metal rock, classical strict, country folk, punk, hard techno, ambient drone, boom bap, lo-fi bedroom, gospel, screaming, jazz',
    vocalDNA: 'Melodic singing with raï influences, light autotune, emotional luminous voice.',
    flowPattern: 'Melodic raï-influenced phrasing, emotional delivery, festive and nostalgic simultaneously.',
    productionFingerprint: 'Signature: oriental violins, acoustic guitars, darbuka percussion, modern pop melodies, light 808s',
    culturalAnchors: 'Algeria, nostalgia, love, festive spirit, dual cultural identity, Mediterranean sun',
    structureDNA: 'Verse-hook-verse with dancehall influence.',
    hookType: 'Melodic hook with dancehall/reggae inflection',
    vocalPlacement: 'Floating in mix with rhythmic presence',
    energyCurve: 'Constant festive energy',
    antiPatterns: 'No aggressive themes, no dark production, no heavy bass trap',
    sunoMetatags: { vocalStyle: 'Melodic Singing', vocalEffect: 'Light Autotune', mood: 'Nostalgic, Festive', energy: 'Medium-High', texture: 'Mediterranean Warm', instrument: 'Violins, Guitar, Darbuka, 808' }
  },

  'CHEB MAMI': {
    artist: 'CHEB MAMI',
    sunoStyleTemplate: 'Traditional Raï, Organic Mediterranean Sound, High Tenor Male Vocals, Arabic Melisma Ornaments, 95-115 BPM, Key: Bb Minor, Darbuka Hand Drums, Raï Gasba Flute, Oriental Violin Section, Derbouka Rhythm, Warm Analog Production, Pure Male Tenor No Autotune, Emotional Romantic Atmosphere, 1990s-2000s',
    sunoBpmRange: '95-115',
    sunoKey: 'Bb Minor',
    sunoVocalTags: ['High Tenor', 'Arabic Melisma Ornaments', 'Wide Range', 'No Autotune Pure Voice'],
    sunoWeirdness: 35,
    sunoStyleInfluence: 90,
    sunoExcludeStyles: 'trap 808, drill UK dark, aggressive rap hard, EDM drops, rock distortion, metal screaming, modern electronic synths, punk, hard techno, industrial noise, lo-fi bedroom, ambient drone, country twang, boom bap, reggaeton dembow, bright bubblegum pop',
    vocalDNA: 'Pure high tenor male voice with no autotune. Traditional raï melisma. Three-octave range. Powerful emotional projection.',
    flowPattern: 'Traditional raï melodic phrasing. Long sustained notes with melismatic ornaments. Call-and-response with instruments.',
    productionFingerprint: 'Signature: darbuka hand drums, gasba flute, oriental violin section, derbouka rhythm, warm analog production.',
    structureDNA: 'Raï traditional structure: long vocal intro, verse-refrain with instrumental interludes.',
    hookType: 'Melodic vocal hook — emotional sung refrain with melisma.',
    vocalPlacement: 'Absolute center of mix, close-mic intimate warmth',
    energyCurve: 'Slow burn — intimate opening, gradual emotional crescendo, powerful vocal climax',
    culturalAnchors: 'Romantic love, Algerian nostalgia, exile and return, Mediterranean passion, traditional raï heritage',
    antiPatterns: 'No autotune or heavy vocal processing, no trap/drill beats, no aggressive delivery',
    sunoMetatags: { vocalStyle: 'Raï Traditional Singing', vocalEffect: 'Natural Pure Voice, Light Reverb', mood: 'Romantic, Nostalgic, Passionate', energy: 'Medium Building', texture: 'Warm Organic Analog', instrument: 'Darbuka, Gasba Flute, Oriental Violins, Derbouka' }
  },

  'DJALIL PALERMO': {
    artist: 'DJALIL PALERMO',
    sunoStyleTemplate: 'Urban Trap-Raï, Modern Street Raï, Youth Algerian Sound, 90-110 BPM, Key: A Minor, Heavy 808 Bass, Fast Trap Hi-Hats, Rhythmic Trap Guitar, Minimal String Synths, Atmospheric Pads, Young Male Tenor Voice, French-Darija Bilingual 40/60, 2020s',
    sunoBpmRange: '90-110',
    sunoKey: 'A Minor',
    sunoVocalTags: ['Young Male Tenor', 'Rap-Singing Hybrid', 'Urban Confidence', 'Street Energy'],
    sunoWeirdness: 35,
    sunoStyleInfluence: 80,
    sunoExcludeStyles: 'female voice, acoustic folk gentle, classical strict, metal screaming, trap hard, drill dark, EDM drops, punk rock, industrial noise, hard techno, ambient drone, lo-fi bedroom, reggaeton, jazz smooth, boom bap, country',
    vocalDNA: 'MALE young tenor confident voice, rap-singing hybrid delivery. NEVER female. Urban energy with melodic hooks.',
    flowPattern: 'Rap-singing hybrid, street conversational tone with melodic hooks.',
    productionFingerprint: 'Signature: heavy 808 bass, fast trap hi-hats, rhythmic trap guitar, minimal string synths, atmospheric pads',
    culturalAnchors: 'Street confidence, Algerian pride, urban love, youth energy, nightlife, quartier',
    structureDNA: 'Verse-hook-verse. Medium verses (12-14 bars).',
    hookType: 'Melodic sung or rap hook',
    vocalPlacement: 'Floating in mix, laid-back',
    energyCurve: 'Wave dynamics — builds to chorus',
    antiPatterns: 'Avoid female voice, pure traditional raï, acoustic folk',
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
    sunoExcludeStyles: 'aggressive drill hard, dark minimal trap, industrial noise, bright bubblegum pop, metal rock, classical, country folk, punk, hard techno, boom bap, reggaeton, jazz, screaming, ambient drone, lo-fi dusty',
    vocalDNA: 'Melodic with raï influences, controlled autotune, emotional voice, alternation singing/rap.',
    flowPattern: 'Melodic raï phrasing with rap sections. Emotional delivery with Mediterranean warmth.',
    productionFingerprint: 'Signature: oud melodic lines, mandole, darbuka percussion, acoustic guitar, deep 808, oriental melodies',
    culturalAnchors: 'Algerian nostalgia (Houma), exile, solar melancholy, destiny (Mektoub), impossible love',
    structureDNA: 'Standard verse-hook-verse.',
    hookType: 'Melodic autotune hook',
    vocalPlacement: 'Floating in mix, melodic presence',
    energyCurve: 'Wave dynamics — builds from verse to hook',
    antiPatterns: 'No aggressive delivery, no dark minimal, no bright commercial pop',
    sunoMetatags: { vocalStyle: 'Raï Melodic', vocalEffect: 'Autotune, Reverb', mood: 'Nostalgic, Melancholic', energy: 'Medium', texture: 'Mediterranean Warm', instrument: 'Oud, Mandole, Darbuka, Guitar, 808' }
  },

  'TEMS': {
    artist: 'TEMS',
    sunoStyleTemplate: 'Alt-Afro Soul, Ethereal R&B, Haunting African Soul, 95-110 BPM, Key: D Minor, Soft Afro Percussion, Warm Bass, Ethereal Synth Pads, Fingerpicked Acoustic Guitar, Layered Vocal Harmonies, Ethereal Female Voice Whisper to Power, Dreamy Warm Atmosphere, 2020s',
    sunoBpmRange: '95-110',
    sunoKey: 'D Minor',
    sunoVocalTags: ['Ethereal Alto-Soprano', 'Breathy Haunting', 'Whisper to Peak', 'Natural Vibrato'],
    sunoWeirdness: 55,
    sunoStyleInfluence: 85,
    sunoExcludeStyles: 'aggressive rap hard, trap 808 heavy, drill dark, EDM drops, bright commercial pop, metal rock, punk, hard techno, industrial, country folk, reggaeton dembow, boom bap dusty, lo-fi dusty, classical, screaming',
    vocalDNA: 'FEMALE ethereal alto-soprano, breathy haunting delivery. NEVER rap — all soul singing.',
    flowPattern: 'Soul-driven melodic phrasing, emotional crescendos.',
    productionFingerprint: 'Signature: soft afro percussion, warm bass, ethereal synth pads, fingerpicked acoustic guitar, layered harmonies',
    culturalAnchors: 'Complex love, feminine independence, spirituality, introspection, quiet strength',
    structureDNA: 'Verse-chorus-verse.',
    hookType: 'Melodic sung hook with soulful delivery',
    vocalPlacement: 'Floating in mix, warm intimate',
    energyCurve: 'Wave dynamics — builds to powerful chorus',
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
    sunoExcludeStyles: 'slow R&B ballad, dark trap cold, minimal lo-fi bedroom, acoustic folk gentle, metal rock, classical strict, country, punk, hard techno, industrial, drill UK, boom bap, jazz smooth, screaming, ambient drone, EDM drops',
    vocalDNA: 'MALE energetic tenor, street chant/communal singing delivery. Percussive vocal attacks.',
    flowPattern: 'Call-and-response communal phrasing, percussive vocal attacks.',
    productionFingerprint: 'Signature: deep amapiano bass, heavy log drums, talking drum Yoruba, polyrhythmic fuji layers',
    culturalAnchors: 'Street party, Yoruba pride, Lagos nightlife, success, communal energy',
    structureDNA: 'Verse-hook-verse with afrobeats bounce.',
    hookType: 'Melodic hook with afrobeats rhythm',
    vocalPlacement: 'Floating in mix, rhythmic placement',
    energyCurve: 'Constant high energy — festive',
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
    sunoExcludeStyles: 'aggressive rap hard, trap 808, drill UK, dark industrial, minimal lo-fi, rock distortion, metal screaming, punk, hard techno, country folk, classical, boom bap, reggaeton, EDM drops, jazz, ambient harsh',
    vocalDNA: 'MALE warm tender tenor, romantic intimate delivery. Never aggressive — all softness.',
    flowPattern: 'Romantic melodic phrasing, gentle flowing delivery. French-Creole blend.',
    productionFingerprint: 'Signature: warm zouk bass, zouk drum machine groove, steel pan textures, island acoustic guitar, lush synth pads',
    culturalAnchors: 'Romantic love, Caribbean nostalgia, gentle living, Caribbean nights',
    structureDNA: 'Verse-hook-verse with creole structure.',
    hookType: 'Melodic hook with creole cadence',
    vocalPlacement: 'Floating in mix, rhythmic presence',
    energyCurve: 'Constant festive energy',
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
    sunoExcludeStyles: 'aggressive trap hard, drill UK, EDM drops, dark minimal lo-fi, industrial noise, metal screaming, punk rock, hard techno, country folk, classical, boom bap dusty, reggaeton, jazz modern, ambient drone, bright bubblegum pop',
    vocalDNA: 'Velvety baritone male voice, ultra-smooth R&B hooks, rich harmonies.',
    flowPattern: 'Smooth melodic hooks, slow groove delivery, laid-back West Coast phrasing.',
    productionFingerprint: 'Signature: G-Funk synths (Moog/Minimoog), deep funk bass, talk box, groove claps, slow drums',
    culturalAnchors: 'West Coast party, chill cruising, laid-back love, G-Funk lifestyle',
    structureDNA: 'Verse-chorus-verse with R&B structure.',
    hookType: 'Melodic sung hook, iconic and memorable',
    vocalPlacement: 'Floating in mix, warm laid-back',
    energyCurve: 'Wave dynamics — builds to strong chorus',
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
    sunoExcludeStyles: 'drill, rage, hyperpop, edm, bright pop, techno, rock, upbeat, happy, acoustic, aggressive trap, R&B belting, full singing, soul runs, gospel, power vocals',
    vocalDNA: 'Soft autotuned MALE voice that ALMOST sings but never fully commits. Breathy close-mic whisper-croon delivery. NOT R&B singing.',
    flowPattern: 'Ultra-slow half-time delivery. Words drip out slowly. Minimal syllable density.',
    productionFingerprint: 'Signature: deep ominous sub bass, dark melodic 808s in half-time, dreamy atmospheric pads, washed-out detuned synths, distant bell plucks',
    culturalAnchors: 'Toxic romance, night drives at 3am, luxury sadness, emotional isolation, nocturnal loneliness',
    structureDNA: 'Verse-hook-verse.',
    hookType: 'Melodic autotune hook',
    vocalPlacement: 'Floating in mix, laid-back',
    energyCurve: 'Wave dynamics — builds to hook',
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
    sunoWeirdness: 40,
    sunoStyleInfluence: 85,
    sunoExcludeStyles: 'bright bubblegum pop, cheerful happy, acoustic folk, lo-fi chill bedroom, reggaeton, country folk, EDM drops, punk rock, metal, jazz smooth, classical gentle, gospel, hard techno, ambient drone, tropical house',
    vocalDNA: 'Very deep grave voice, authoritative and imposing. Dark melodic hooks with light autotune on refrains only.',
    flowPattern: 'Deliberate measured flow with dramatic pauses.',
    productionFingerprint: 'Signature: orchestral strings, cinematic brass, heavy distorted 808, dramatic buildups, dark atmospheric pads, hi-end polished mix',
    culturalAnchors: 'Marseille luxury darkness, cinematic storytelling, power and domination, dark poetry',
    structureDNA: 'Dense verse-hook-verse. Long technical verses (16+ bars).',
    hookType: 'Short melodic autotune hook or chant',
    vocalPlacement: 'Dry ahead of beat, technical delivery',
    energyCurve: 'Slow burn — builds through verses',
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
    sunoExcludeStyles: 'aggressive rap hard, drill dark, punk rock, metal screaming, country twang, folk acoustic, reggaeton, boom bap, jazz acoustic, hard techno, industrial noise, lo-fi dusty, classical strict, gospel belting, bright bubblegum',
    vocalDNA: 'Signature falsetto male vocals with emotional melisma. Dark intimate breathy delivery.',
    flowPattern: 'Melodic singing with R&B runs. Falsetto on hooks. Never raps — always sings.',
    productionFingerprint: 'Signature: 80s analog synths, retro drum machines, lush reverb layers, wide stereo, synthwave textures',
    culturalAnchors: 'Nocturnal hedonism, toxic romance, drugs and excess, lonely luxury, dark city nightlife',
    structureDNA: 'Verse-chorus-verse with R&B/pop structure.',
    hookType: 'Melodic sung hook, emotionally powerful',
    vocalPlacement: 'Floating in mix with intimate close-mic warmth',
    energyCurve: 'Wave dynamics — builds to powerful chorus',
    antiPatterns: 'Avoid rap delivery, aggressive, acoustic or folk, bright happy pop',
    sunoMetatags: { vocalStyle: 'R&B Falsetto', vocalEffect: 'Reverb, Delay, Light Autotune', mood: 'Dark, Nocturnal, Sensual', energy: 'Medium', texture: 'Warm Analog Synth', instrument: 'Analog Synth Bass, Retro Drums, Synth Pads, Strings' }
  },

  'MAES': {
    artist: 'MAES',
    sunoStyleTemplate: 'Street Melodic Trap, Dark French Rap, Sevran Energy, Deep Grave Voice, Melodic Hooks with Autotune, 125-140 BPM, Key: A Minor, Heavy 808 Sub Bass, Dark Piano Melodies, Crisp Trap Drums, Complex Hi-Hats, Nocturnal Street Atmosphere, Raw Authentic Delivery, 2020s',
    sunoBpmRange: '125-140',
    sunoKey: 'A Minor',
    sunoVocalTags: ['Deep Grave Voice', 'Melodic Autotune Hooks', 'Raw Street Delivery', 'Sevran Accent'],
    sunoWeirdness: 30,
    sunoStyleInfluence: 80,
    sunoExcludeStyles: 'bright bubblegum pop, acoustic folk, chill lo-fi bedroom, rock distortion, EDM drops, classical orchestral, country twang, punk, jazz smooth, reggaeton, ambient drone, hard techno, gospel, industrial, metal screaming',
    vocalDNA: 'Deep grave voice with raw street authenticity. Melodic autotune on hooks/refrains.',
    flowPattern: 'Direct percussive rap on verses with melodic autotune hooks.',
    productionFingerprint: 'Signature: heavy 808 sub bass, dark piano melodies, crisp trap drums, complex hi-hats',
    culturalAnchors: 'Sevran street life, loyalty, money, survival, betrayal',
    structureDNA: 'Verse-hook-verse with melodic trap.',
    hookType: 'Melodic autotune hook',
    vocalPlacement: 'Floating in mix, melodic presence',
    energyCurve: 'Wave dynamics — builds to hook',
    antiPatterns: 'Avoid bright or cheerful, acoustic, overly polished',
    sunoMetatags: { vocalStyle: 'Street Melodic Rap', vocalEffect: 'Autotune on Hooks, Dry Verses', mood: 'Dark, Street, Nocturnal', energy: 'High', texture: 'Dark Trap', instrument: '808 Sub Bass, Dark Piano, Trap Drums' }
  },

  'LACRIM': {
    artist: 'LACRIM',
    sunoStyleTemplate: 'Hard French Trap, Street Hardcore Rap, Deep Authoritative Voice, Mediterranean Gangster Atmosphere, 120-135 BPM, Key: B Minor, Aggressive 808, Oriental Melodic Samples, Dark Synth Stabs, Hard Snare, Triplet Hi-Hats, Raw Street Energy, Nocturnal Cinematic, 2020s',
    sunoBpmRange: '120-135',
    sunoKey: 'B Minor',
    sunoVocalTags: ['Deep Authoritative Voice', 'Hard Street Delivery', 'Mediterranean Accent', 'Raw Aggressive Rap'],
    sunoWeirdness: 25,
    sunoStyleInfluence: 80,
    sunoExcludeStyles: 'bright bubblegum pop, melodic pop singing, soft gentle, acoustic folk, chill lo-fi, country, jazz smooth, classical, reggaeton, EDM drops, punk, ambient drone, hard techno, gospel, metal rock, tropical house',
    vocalDNA: 'Deep authoritative voice with Mediterranean accent. Hard aggressive rap delivery. No singing.',
    flowPattern: 'Hard percussive flow with dramatic pauses. Street storytelling.',
    productionFingerprint: 'Signature: aggressive 808, oriental melodic samples, dark synth stabs, hard snare',
    culturalAnchors: 'Mediterranean gangster culture, street business, loyalty codes, Maghreb-French identity',
    structureDNA: 'Verse-hook-verse.',
    hookType: 'Melodic autotune hook',
    vocalPlacement: 'Floating in mix, emotional delivery',
    energyCurve: 'Wave dynamics — builds to hook',
    antiPatterns: 'Avoid singing or melodic, soft or chill, bright pop, acoustic',
    sunoMetatags: { vocalStyle: 'Aggressive Rap', vocalEffect: 'Dry, Light Reverb', mood: 'Dark, Aggressive, Street', energy: 'High', texture: 'Hard Trap', instrument: '808 Bass, Oriental Samples, Synth Stabs, Hard Drums' }
  },

  'WERENOI': {
    artist: 'WERENOI',
    sunoStyleTemplate: 'Melodic French Trap, Emotional Street Rap, Deep Resonant Voice, Autotune Melodic Flow, 120-135 BPM, Key: G Minor, Deep Sliding 808, Melancholic Piano, Atmospheric Pads, Crisp Trap Drums, Emotional Nocturnal Atmosphere, Close-Mic Intimate, 2020s',
    sunoBpmRange: '120-135',
    sunoKey: 'G Minor',
    sunoVocalTags: ['Deep Resonant Voice', 'Melodic Autotune', 'Emotional Delivery', 'Street Sincerity'],
    sunoWeirdness: 30,
    sunoStyleInfluence: 80,
    sunoExcludeStyles: 'bright bubblegum pop, cheerful happy, acoustic folk, rock distortion, EDM drops, country twang, classical, jazz smooth, reggaeton, punk, hard techno, industrial, ambient drone, gospel, lo-fi bedroom, metal',
    vocalDNA: 'Deep resonant voice with emotional melodic autotune. Sincere delivery.',
    flowPattern: 'Melodic emotional flow with autotune. Raw rap bursts on verse peaks.',
    productionFingerprint: 'Signature: deep sliding 808, melancholic piano, atmospheric pads, crisp trap drums',
    culturalAnchors: 'Street emotions, family loyalty, survival, authentic pain, nocturnal introspection',
    structureDNA: 'Verse-hook-verse.',
    hookType: 'Melodic hook',
    vocalPlacement: 'Floating in mix',
    energyCurve: 'Wave dynamics',
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
    sunoExcludeStyles: 'dark aggressive drill, metal screaming, rock distortion, minimal lo-fi, country folk, classical strict, punk, hard techno, industrial, jazz smooth, boom bap dusty, ambient drone, EDM harsh, reggaeton slow, gospel',
    vocalDNA: 'Festive energetic voice with light autotune. African-French cadence.',
    flowPattern: 'Bouncy rhythmic flow synced with African percussion.',
    productionFingerprint: 'Signature: bouncy 808, African percussion (djembe, sabar, congas), festive synth melodies',
    culturalAnchors: 'Afro-Trap originator, African diaspora pride, Paris street party, dance, celebration',
    structureDNA: 'Verse-hook-verse with afro-trap.',
    hookType: 'Melodic autotune hook',
    vocalPlacement: 'Floating in mix with afro-rhythmic placement',
    energyCurve: 'Wave dynamics',
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
    sunoExcludeStyles: 'aggressive rap hard, drill dark, hard trap 808, metal screaming, rock distortion, punk, industrial noise, hard techno, country folk, classical, boom bap, EDM drops, lo-fi dusty, jazz, ambient harsh, reggaeton heavy',
    vocalDNA: 'Smooth melodic male vocals with autotune. TOPLINE DOMINANT. Congolese-French vocal cadence with romantic inflection.',
    flowPattern: 'Singing-dominant throughout. Strong melodic hooks.',
    productionFingerprint: 'Signature: warm 808, lush keyboards, afro percussion, polished romantic atmosphere',
    structureDNA: 'Verse-chorus-verse with singing dominance.',
    hookType: 'Melodic sung hook with romantic emphasis',
    vocalPlacement: 'Floating in mix, laid-back intimate delivery',
    energyCurve: 'Wave dynamics',
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
    sunoExcludeStyles: 'hard trap drill, aggressive hardcore, heavy autotune melodic, commercial pop hooks, EDM drops, metal rock, punk, country folk, reggaeton, classical, industrial, hard techno, gospel, ambient drone, boom bap, screaming',
    vocalDNA: 'Raw emotional male voice with minimal processing. Confessional intimate delivery.',
    flowPattern: 'Fluid between rap and singing. Emotional storytelling flow.',
    productionFingerprint: 'Signature: acoustic guitar layers, indie synth textures, live drum feel, warm bass',
    culturalAnchors: 'Skateboard culture, Parisian indie scene, emotional vulnerability, youth angst',
    structureDNA: 'Verse-hook-verse.',
    hookType: 'Melodic hook',
    vocalPlacement: 'Clean in mix, articulate',
    energyCurve: 'Slow burn',
    antiPatterns: 'Avoid hard trap, drill aggressive, heavy autotune',
    sunoMetatags: { vocalStyle: 'Indie Rap-Singing', vocalEffect: 'Minimal Processing, Light Reverb', mood: 'Emotional, Intimate, Melancholic', energy: 'Low-Medium', texture: 'Warm Organic Indie', instrument: 'Acoustic Guitar, Indie Synths, Live Drums, Warm Bass' }
  },

  'ANGÈLE': {
    artist: 'ANGÈLE',
    sunoStyleTemplate: 'Belgian Pop-Electro, Sophisticated Pop, Elegant Electro-Pop, Subtle Irony, 110-125 BPM, Key: C Major, Punchy Pop Bass, Bright Synth Arps, Electronic Drums, Pop Claps, Crystal Clear Female Vocals, No Autotune, Catchy Hook Craft, Colorful Polished Production, 2020s',
    sunoBpmRange: '110-125',
    sunoKey: 'C Major',
    sunoVocalTags: ['Crystal Clear Female Vocals', 'No Autotune', 'Pop Singing', 'Belgian French Accent'],
    sunoWeirdness: 20,
    sunoStyleInfluence: 85,
    sunoExcludeStyles: 'rap aggressive, trap 808 hard, drill dark, metal screaming, lo-fi dusty, country twang, industrial noise, hard techno, reggaeton dembow, boom bap, classical strict, punk rock, gospel belting, ambient drone harsh, screaming',
    vocalDNA: 'Crystal clear female vocals with no autotune. Belgian French accent. Sophisticated pop singing.',
    flowPattern: 'Pure pop singing with restraint. Catchy melodic hooks but with elegance and subtlety.',
    productionFingerprint: 'Signature: bright synth arps, electronic drums, pop claps, punchy pop bass',
    structureDNA: 'Verse-chorus-verse. Short verses (8-12 bars).',
    hookType: 'Melodic sung hook, catchy but with restraint and elegance',
    vocalPlacement: 'Clean forward in mix, slightly laid-back',
    energyCurve: 'Wave dynamics',
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
    sunoExcludeStyles: 'drill UK dark, metal screaming, rock distortion, dark trap cold, lo-fi bedroom, minimal ambient, acoustic folk gentle, country, classical strict, punk, hard techno, industrial, jazz smooth, boom bap, EDM harsh, reggaeton slow',
    vocalDNA: 'Powerful expressive male vocals. Switches between melodic singing and rap-chanting.',
    flowPattern: 'Afrobeats bounce with melodic hooks. Singing-dominant with rap-chant verses.',
    productionFingerprint: 'Signature: complex African percussion, horns section, guitar riffs, deep afro bass',
    culturalAnchors: 'Lagos street energy, African giant pride, global Afrobeats ambassador, freedom, celebration',
    structureDNA: 'Verse-chorus-verse with afrobeats.',
    hookType: 'Melodic sung hook, global appeal',
    vocalPlacement: 'Floating in mix, energetic presence',
    energyCurve: 'Wave dynamics',
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
    sunoExcludeStyles: 'rap aggressive, trap 808, drill dark, folk acoustic, country twang, metal screaming, punk, classical strict, reggaeton, jazz traditional, boom bap, lo-fi bedroom, industrial harsh, gospel, ambient gentle, hard techno',
    vocalDNA: 'Robotic vocoder vocals — NEVER natural human singing.',
    flowPattern: 'Repetitive hypnotic vocal loops through vocoder. Never rap.',
    productionFingerprint: 'Signature: funky bass guitar, analog synthesizers, vocoder robot vocals, disco strings, four-on-the-floor kick',
    culturalAnchors: 'French electronic music pioneer, retro-futurism, robot mythology, disco revival',
    structureDNA: 'Unconventional electronic structure.',
    hookType: 'Hypnotic loop hook or robotic vocal hook',
    vocalPlacement: 'Floating in effects and vocoder',
    energyCurve: 'Wave dynamics with electronic peaks',
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
    sunoExcludeStyles: 'rock distortion, metal screaming, folk acoustic, country twang, dark trap cold, drill UK, minimal lo-fi, classical strict, punk, hard techno, boom bap, jazz smooth, industrial noise, ambient drone, gospel, EDM harsh',
    vocalDNA: 'Distinctive nasal male vocals with autotune. Switches between melodic singing and rap-chanting.',
    flowPattern: 'Reggaeton dembow rhythm with melodic hooks. Never purely raps.',
    productionFingerprint: 'Signature: reggaeton dembow pattern, 808 sub bass, Latin percussion, synth melodies',
    culturalAnchors: 'Puerto Rico street culture, Latin trap pioneer, perreo, Caribbean party',
    structureDNA: 'Verse-chorus-verse with reggaeton/trap.',
    hookType: 'Melodic sung hook or rap hook',
    vocalPlacement: 'Floating in mix, rhythmically placed',
    energyCurve: 'Wave dynamics',
    antiPatterns: 'Avoid rock or metal, dark minimal, folk, without Latin rhythmic elements',
    sunoMetatags: { vocalStyle: 'Latin Trap Singing-Rap', vocalEffect: 'Autotune, Reverb', mood: 'Party, Energetic, Sensual', energy: 'High', texture: 'Latin Bass Heavy', instrument: 'Dembow Drums, 808 Sub, Latin Percussion, Synths' }
  },

  'JUICE WRLD': {
    artist: 'JUICE WRLD',
    sunoStyleTemplate: 'Emo Rap, Melodic Trap, Emotional Autotune, Heartbreak Anthem Energy, 140-165 BPM, Key: E Minor, Deep 808, Melancholic Guitar Loops, Atmospheric Pads, Trap Hi-Hats, Heavy Melodic Autotune Male Vocals, Freestyle Flow Energy, Emotional Vulnerability, 2010s-2020s',
    sunoBpmRange: '140-165',
    sunoKey: 'E Minor',
    sunoVocalTags: ['Heavy Melodic Autotune', 'Emo Rap Singing', 'Freestyle Energy', 'Emotional Vulnerability'],
    sunoWeirdness: 35,
    sunoStyleInfluence: 85,
    sunoExcludeStyles: 'hard drill UK, boom bap dusty, acoustic folk, bright bubblegum pop, country twang, jazz smooth, classical strict, reggaeton, metal screaming, industrial noise, hard techno, punk rock, ambient drone, gospel, lo-fi dusty minimal',
    vocalDNA: 'Heavy melodic autotune male vocals. Emotional vulnerability. Freestyle-feel delivery.',
    flowPattern: 'Melodic autotune flow that blurs rap and singing. Freestyle energy.',
    productionFingerprint: 'Signature: melancholic guitar loops, deep 808, atmospheric pads, trap hi-hats',
    culturalAnchors: 'Emo rap generation, heartbreak, emotional vulnerability, youth anxiety',
    structureDNA: 'Verse-chorus-verse with melodic rap.',
    hookType: 'Melodic sung hook with emotional delivery',
    vocalPlacement: 'Floating in mix, intimate close-mic',
    energyCurve: 'Wave dynamics',
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
    sunoExcludeStyles: 'dark drill UK, aggressive hardcore, minimal ambient, lo-fi bedroom, metal screaming, punk rock, EDM drops, classical strict, reggaeton, boom bap, industrial noise, hard techno, jazz traditional, country twang, gospel, ambient drone',
    vocalDNA: 'Warm raspy male vocals with melodic autotune. Singing-dominant in delivery.',
    flowPattern: 'Singing-dominant with strong melodic hooks. Warm and accessible delivery.',
    productionFingerprint: 'Signature: acoustic guitar foundation, trap drums, warm bass, atmospheric pads, polished radio mix',
    structureDNA: 'Verse-chorus-verse.',
    hookType: 'Strong melodic sung hook, designed for mass singalong',
    vocalPlacement: 'Floating in mix, warm laid-back intimate delivery',
    energyCurve: 'Wave dynamics',
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
    sunoExcludeStyles: 'dark trap cold, drill UK, metal screaming, rock distortion, folk acoustic, lo-fi bedroom, minimal ambient, slow ballad, classical strict, punk, hard techno, industrial, jazz, boom bap, EDM harsh, country twang',
    vocalDNA: 'Youthful male vocals with infectious melodic hooks. High energy delivery.',
    flowPattern: 'Melodic hooks with afrorave energy. Never dark or slow.',
    productionFingerprint: 'Signature: rave synth stabs, punchy afro bass, African percussion, electronic hi-hats',
    culturalAnchors: 'Nigerian afrorave movement, youth culture, global dance floors, high energy celebration',
    structureDNA: 'Verse-hook-verse with afrorave.',
    hookType: 'Melodic hook with rave energy',
    vocalPlacement: 'Floating in mix, energetic presence',
    energyCurve: 'Constant high energy',
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
    sunoExcludeStyles: 'aggressive rap, trap hi-hats, drill, heavy 808 sub bass, autotune, screaming, metal, rock distortion, EDM drops, bright bubblegum pop, country, folk acoustic, mumble rap, rage trap, industrial, punk, hard techno, reggaeton dembow, lo-fi bedroom, boom bap dusty',
    vocalDNA: 'FEMALE warm alto voice with natural vibrato and British soul inflection. Breathy intimate delivery that builds to powerful emotional peaks. Jazz-influenced phrasing. No heavy autotune — voice is raw and organic.',
    flowPattern: 'Melodic singing with jazz phrasing and soul runs. Builds from intimate whisper to controlled emotional power. Rhythmic awareness — sits slightly behind the beat with UK groove.',
    productionFingerprint: 'Signature: live bass guitar groove, warm Rhodes electric piano, soft jazz drums (brush snare, light kick), subtle string pads, fingerpicked acoustic guitar, minimal electronic elements, UK garage subtle rhythmic influence in hi-hats',
    culturalAnchors: 'London modern soul scene, UK R&B renaissance, emotional honesty, femininity and strength, Walsall-to-London journey, jazz-club intimacy',
    structureDNA: 'Verse-pre-chorus-chorus with dynamic builds. Verses intimate and sparse, chorus opens up emotionally. Bridge often stripped back to voice + piano/guitar.',
    hookType: 'Melodic sung hook with emotional vocal swell — not chant, not rap',
    vocalPlacement: 'Clean warm in mix, slightly behind beat, close-mic intimate feel',
    energyCurve: 'Slow burn — intimate verses building to emotional chorus peaks, then pulls back',
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
    sunoExcludeStyles: 'autotune heavy, singing pop melodic, trap hi-hats fast, EDM drops, bright bubblegum pop, drill UK, reggaeton dembow, metal rock, country folk, punk, hard techno, industrial, ambient drone, dancehall, gospel, lo-fi chill bedroom',
    vocalDNA: 'Deep male voice with no autotune. Lyrical precision. Storytelling cadence.',
    flowPattern: 'Classic boom bap flow. Dense multisyllabic rhymes. Storytelling narrative.',
    productionFingerprint: 'Signature: boom bap drums, jazz samples, soul chops, vinyl crackle',
    culturalAnchors: 'Queens NY street poetry, hip-hop golden era, lyrical supremacy, social commentary',
    structureDNA: 'Long lyrical verses (18+ bars).',
    hookType: 'Rhythmic rap hook or spoken hook',
    vocalPlacement: 'Clean ahead of beat, clear articulation',
    energyCurve: 'Slow burn',
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
    sunoExcludeStyles: 'autotune heavy, melodic singing pop, trap hi-hats fast, EDM drops, bright bubblegum pop, drill UK modern, cheerful happy, reggaeton dembow, country folk, punk rock, hard techno, industrial noise, ambient drone, gospel, tropical house, lo-fi chill bedroom, dancehall bounce',
    vocalDNA: 'Prodigy: nasal monotone menacing baritone, cold and detached. Havoc: deeper grittier voice, complementary. Dual delivery trades verses. No autotune ever.',
    flowPattern: 'Tight compact bars, steady relentless flow. No flashy multisyllabic — direct, cold, punchy. Short hard-hitting lines.',
    productionFingerprint: 'Signature: Havoc minimalist dark piano loops, hard boom bap drums (crisp snare, punchy kick), eerie string samples, minor key melancholy, gritty vinyl dust, sparse arrangement — space in the beat is the weapon',
    culturalAnchors: 'Queensbridge projects, street survival, paranoia, loyalty and betrayal, NYC hardcore golden era, nihilistic realism',
    structureDNA: 'Verse-verse-hook structure. Long raw verses (16 bars). Hook is minimal — often just a repeated line or scratched sample. No sung chorus.',
    hookType: 'Chant hook or scratched DJ hook — never melodic singing',
    vocalPlacement: 'Dry in mix, close-mic, ahead of beat, punchy attack',
    energyCurve: 'Constant aggression — flat menacing intensity throughout',
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
    sunoExcludeStyles: 'autotune, melodic singing, trap, EDM, pop, bright, cheerful, dancehall, reggaeton, lo-fi chill',
    vocalDNA: 'Vinnie Paz: deep gravelly aggressive baritone, Italian-American Philly accent, militant delivery, staccato punches. Raw unpolished power. No singing ever.',
    flowPattern: 'Dense aggressive bars, staccato punching delivery. Hard consonant emphasis. Multisyllabic internal rhymes. Rapid-fire then pause for impact.',
    productionFingerprint: 'Signature: Stoupe the Enemy of Mankind production — cinematic orchestral samples (cellos, violins, full orchestra), dark choir vocals, Middle Eastern/Arabic melodic samples, hard boom bap drums (heavy kick, crisp snare), dramatic builds, movie-score darkness',
    culturalAnchors: 'Philadelphia underground, militant spirituality, conspiracy theories, violent street metaphors, Italian-American identity, anti-establishment, boxing/combat imagery',
    structureDNA: 'Long dense verses (16-20 bars). Minimal hooks — often just an orchestral break or a scratched vocal sample. Guest verses frequent (Tragedy Khadafi, GZA, Sean Price).',
    hookType: 'No melodic hook — orchestral break or scratched sample or spoken word',
    vocalPlacement: 'Dry close-mic, aggressive in-your-face, ahead of beat',
    energyCurve: 'Constant aggression with orchestral crescendo peaks',
    antiPatterns: 'Avoid autotune, singing, trap beats, modern drill, pop hooks, bright production, chill vibes',
    sunoMetatags: { vocalStyle: 'Underground Hardcore Rap', vocalEffect: 'Dry, Raw, Minimal Processing', mood: 'Dark, Militant, Cinematic, Violent', energy: 'High Constant', texture: 'Orchestral Dark Analog', instrument: 'Orchestral Strings, Cellos, Dark Choir, Boom Bap Drums, Middle Eastern Samples' }
  },

  'NIRO': {
    artist: 'NIRO',
    sunoStyleTemplate: 'Melodic French Trap, Emotional Street Rap, Blois Energy, Deep Emotional Voice, Melodic Autotune, 115-130 BPM, Key: Bb Minor, Deep 808, Melancholic Piano Melodies, Atmospheric Strings, Trap Drums, Emotional Nocturnal Atmosphere, Raw Authentic Delivery, 2020s',
    sunoBpmRange: '115-130',
    sunoKey: 'Bb Minor',
    sunoVocalTags: ['Deep Emotional Voice', 'Melodic Autotune', 'Raw Street Delivery', 'Sincere Emotional Tone'],
    sunoWeirdness: 30,
    sunoStyleInfluence: 75,
    sunoExcludeStyles: 'bright bubblegum pop, cheerful happy, acoustic folk, rock distortion, EDM drops, country twang, classical orchestral, jazz smooth, reggaeton, punk, hard techno, industrial, ambient drone, gospel, lo-fi minimal, metal',
    vocalDNA: 'Deep emotional voice with melodic autotune. Raw authentic delivery.',
    flowPattern: 'Melodic emotional flow. Alternates singing hooks and rap verses.',
    productionFingerprint: 'Signature: deep 808, melancholic piano, atmospheric strings, trap drums',
    culturalAnchors: 'Blois street life, raw authenticity, emotional vulnerability, overlooked city pride',
    structureDNA: 'Verse-hook-verse.',
    hookType: 'Melodic hook',
    vocalPlacement: 'Floating in mix',
    energyCurve: 'Wave dynamics',
    antiPatterns: 'Avoid bright or cheerful, acoustic or folk, overly polished',
    sunoMetatags: { vocalStyle: 'Emotional Melodic Rap', vocalEffect: 'Melodic Autotune, Reverb', mood: 'Emotional, Melancholic, Authentic', energy: 'Medium', texture: 'Dark Warm', instrument: '808, Piano, Strings, Trap Drums' }
  },

  'HUGEL': {
    artist: 'HUGEL',
    sunoStyleTemplate: 'French House, Tropical House, Afro House, DJ-Producer, 120-128 BPM, Key: A Minor, Four-on-the-Floor Kick, Tropical Percussion, House Bassline, Bright Synth Melodies, Filtered Vocal Chops, Summer Festival Energy, Groovy Dancefloor Atmosphere, 2020s',
    sunoBpmRange: '120-128',
    sunoKey: 'A Minor',
    sunoVocalTags: ['Filtered Vocal Chops', 'House Vocal Samples', 'Festival Energy', 'Tropical Hooks'],
    sunoWeirdness: 25,
    sunoStyleInfluence: 80,
    sunoExcludeStyles: 'rap aggressive, trap 808, drill dark, folk acoustic, country twang, metal screaming, punk, classical strict, boom bap, industrial, jazz traditional, lo-fi bedroom, gospel, ambient drone, reggaeton, screaming harsh',
    vocalDNA: 'Filtered vocal chops and house vocal samples. Production-driven.',
    flowPattern: 'Vocal chops and hooks only. Dancefloor-focused.',
    productionFingerprint: 'Signature: four-on-the-floor kick, tropical percussion, house bassline, bright synth melodies',
    culturalAnchors: 'French house scene, summer festivals, Ibiza energy, tropical vibes',
    structureDNA: 'Unconventional electronic structure.',
    hookType: 'Hypnotic loop hook or melodic synth hook',
    vocalPlacement: 'Floating in effects',
    energyCurve: 'Explosive peaks',
    antiPatterns: 'Avoid rap, dark aggressive, folk or country, slow ballad',
    sunoMetatags: { vocalStyle: 'Vocal Chops', vocalEffect: 'Filter, Chop, Reverb', mood: 'Festive, Summer, Groovy', energy: 'High', texture: 'Tropical House', instrument: 'House Kick, Tropical Percussion, Synth Melodies, Bassline' }
  },

  'DEFAULT': {
    artist: 'DEFAULT',
    sunoStyleTemplate: 'Urban contemporary trap, dynamic 808 bass, hi-hat complexity, atmospheric production, street credibility, genre-adaptive',
    sunoBpmRange: '90-140',
    sunoKey: 'Minor',
    sunoVocalTags: ['Contemporary Rap', 'Urban Delivery'],
    sunoWeirdness: 50,
    sunoStyleInfluence: 75,
    sunoExcludeStyles: 'excessive acoustic folk, minimal beats only, metal screaming, industrial noise, hard techno aggressive, punk rock harsh, screaming, lo-fi dusty extreme, country twang, classical opera, ambient drone, reggaeton dembow heavy',
    vocalDNA: 'Contemporary urban rap delivery, adaptable to genre, street credibility.',
    flowPattern: 'Contemporary rap flow, genre-adaptive phrasing.',
    productionFingerprint: 'Signature: modern urban production, dynamic drums, contemporary textures',
    culturalAnchors: 'Contemporary urban culture, street themes, modern production aesthetics',
    structureDNA: 'Standard verse-hook-verse structure',
    hookType: 'Melodic hook',
    vocalPlacement: 'Floating in mix',
    energyCurve: 'Wave dynamics',
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

export function getArtistSonicDNA(inspiredBy: string): SonicDNA | null {
  if (!inspiredBy || inspiredBy === 'none') return null;

  const upper = inspiredBy.toUpperCase().trim();

  const exactKey = Object.keys(SONIC_DNA_MAP).find(k => k.toUpperCase() === upper);
  if (exactKey) return SONIC_DNA_MAP[exactKey];

  const candidates: { key: string; score: number }[] = [];
  for (const key of Object.keys(SONIC_DNA_MAP)) {
    if (key === 'DEFAULT') continue;
    const keyUpper = key.toUpperCase();
    if (upper.length < 4 && keyUpper.length < 4) continue;
    if (upper.includes(keyUpper) || keyUpper.includes(upper)) {
      const shorter = Math.min(upper.length, keyUpper.length);
      const longer = Math.max(upper.length, keyUpper.length);
      const ratio = shorter / longer;
      if (ratio >= 0.5) {
        candidates.push({ key, score: ratio });
      }
    }
  }
  if (candidates.length > 0) {
    candidates.sort((a, b) => b.score - a.score);
    return SONIC_DNA_MAP[candidates[0].key];
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