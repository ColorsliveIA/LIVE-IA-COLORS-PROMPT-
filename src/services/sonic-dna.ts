/**
 * Sonic DNA Map v2 - Enhanced artist sound profiles for Suno AI music generation
 * Features ultra-specific textures, vocal characteristics, flow patterns, production fingerprints, and cultural anchors
 * 38 international artists with detailed sonic DNA mapping
 */

export interface SonicDNA {
  // Core production parameters
  sunoStyleTemplate: string;      // 500-600 chars, ultra-specific textures with 10 dimensions
  sunoExcludeStyles: string;      // Styles to explicitly exclude
  sunoVocalTags: string[];        // Unique vocal characteristics per artist
  sunoWeirdness: number;          // Creative/unconventional factor (0-50)
  sunoStyleInfluence: number;     // How strongly to follow the style (70-90)
  sunoBpmRange: string;           // Tempo range (e.g., "122-128")
  sunoKey: string;                // Musical key
  // New v2 fields for enhanced sonic specificity
  vocalDNA: string;               // Ultra-detailed voice description (pitch, grain, nasality, breathiness)
  flowPattern: string;            // Rhythmic placement signature and syllable treatment
  productionFingerprint: string;  // Signature production sounds and sonic markers
  culturalAnchors: string;        // Lyrical themes, slang, cultural universe
  antiPatterns: string;           // What the artist NEVER does (critical for negative prompting)
  sunoMetatags: {
    vocalStyle: string;           // e.g. "Rap", "Whisper", "Raspy", "Belt", "Soft", "Power", "Falsetto"
    vocalEffect: string;          // e.g. "Auto-tune", "Reverb", "Delay", "Vocoder", "Distortion"
    mood: string;                 // e.g. "Dark", "Melancholic", "Aggressive", "Uplifting", "Peaceful"
    energy: string;               // e.g. "Low", "Medium", "High", "Maximum"
    texture: string;              // e.g. "Tape-Saturated", "Lo-fi", "Crisp Digital", "Vinyl Hiss"
    instrument: string;           // e.g. "Piano, 808 Bass, Strings (Legato)"
  };
}

export const SONIC_DNA_MAP: Record<string, SonicDNA> = {
  JUL: {
    sunoStyleTemplate: "Melodic Autotune Marseille Pop, Bouncy Chanté-Rappé, Bright Festival Energy, Euphorique Street Anthem, 95-112 BPM, Key: G Minor, Crisp digital clarity, Wide stereo reverb, Piano Stabs, Punchy 808, Synthetic Percs, Shimmering Hi-Hats, High-Pitched Nasal Autotune Crystalline Vocals, Building Verse to Euphoric Chorus Drop, Bright Polished Master Loud Stereo Width, Mediterranean Sun-Kissed Party Energy, 2020s",
    sunoExcludeStyles: "dark orchestral, aggressive rap technique, country, rock, opera, classical, slow ballad, industrial, somber atmosphere",
    sunoVocalTags: ["[nasal crystalline voice]", "[high-pitched autotune]", "[Marseille accent inflection]", "[bouncy rhythmic delivery]"],
    sunoWeirdness: 12,
    sunoStyleInfluence: 85,
    sunoBpmRange: "95-112",
    sunoKey: "G Minor",
    vocalDNA: "Nasal, high-pitched soprano register with crystalline autotune applied heavy but musicality-preserving. Bright tone with almost ethereal quality despite street context. Marseille accent flavors the delivery with local inflection markers.",
    flowPattern: "Bouncy chanté-rappé where syllables ride the beat crest with upward melodic contours. Syncopated placement emphasizing on-beat drops with percussive articulation. Festival-friendly rhythm breaks with celebratory cadences.",
    productionFingerprint: "Bright punchy 808 kicking with immediate attack, crystalline piano stabs in major key, shimmering hi-hat rolls at 16th notes, wide stereo reverb on vocal layers creating space and euphoria",
    culturalAnchors: "Marseille street loyalty codes, love stories with local slang (ouais, chelou), festival celebration energy, neighborhood pride, emotional authenticity despite party vibes",
    antiPatterns: "Never dark or aggressive, never technical boom-bap flows, never sparse minimalist production, never serious tone, never melancholic atmosphere",
    sunoMetatags: {
      vocalStyle: "Melodic Autotune",
      vocalEffect: "Heavy Auto-tune, Reverb",
      mood: "Uplifting",
      energy: "High",
      texture: "Crisp Digital",
      instrument: "Piano, 808 Bass, Synthetic Percs"
    }
  },
  NINHO: {
    sunoStyleTemplate: "Melodic Trap Street Soul, Fluid Rap-Singing Hybrid, Warm Intimate Delivery, Emotional Street Confessional, 132-142 BPM, Key: D Minor, Warm tape saturation, Intimate dry booth, Melancholic Piano Broken Chords, Deep Round 808 Sustained Tail, Acoustic Guitar Layers, Complex Hi-Hat Rolls with Swing, Smooth Warm Autotune Elastic Vocals, Slow Build Intimate Verse to Melodic Chorus, Warm Analog Master Gentle Compression, Seine-Saint-Denis Immigrant Soul, 2020s",
    sunoExcludeStyles: "boom-bap acoustic, country, rock, opera, classical, bright happy production, aggressive trap, industrial noise",
    sunoVocalTags: ["[warm fluid baritone-tenor]", "[elastic syllable stretching]", "[smooth autotune application]", "[intimate vulnerable delivery]"],
    sunoWeirdness: 18,
    sunoStyleInfluence: 80,
    sunoBpmRange: "132-142",
    sunoKey: "D Minor",
    vocalDNA: "Fluid warm midrange register sitting between singing and rapping with organic tone quality. Smooth autotune that enhances rather than transforms. Capable of stretching syllables across beat boundaries with musical phrasing. Emotional accessibility without melodrama.",
    flowPattern: "Elastic phrasing that stretches syllables across beat subdivisions, sitting slightly behind the beat creating laid-back pocket. Internal rhyme density high but conversational. Verse builds to melodic chorus with call-and-response moments.",
    productionFingerprint: "Melancholic piano playing broken chord patterns, round deep 808 with sustained tail, complex hi-hat rolls with swing feel, subtle acoustic guitar layers, warm tape saturation creating analog warmth",
    culturalAnchors: "Street success narratives, immigrant journey themes, money and loyalty dynamics, romantic vulnerability, Seine-Saint-Denis identity, coded street language mixed with introspection",
    antiPatterns: "Never boom-bap traditional, never fully acoustic, never detached cold delivery, never aggressive energy, never ignoring melody entirely",
    sunoMetatags: {
      vocalStyle: "Melodic Rap",
      vocalEffect: "Subtle Auto-tune, Reverb",
      mood: "Melancholic",
      energy: "Medium",
      texture: "Tape-Saturated",
      instrument: "Piano, 808 Bass, Acoustic Guitar"
    }
  },
  DAMSO: {
    sunoStyleTemplate: "Dark Whisper Rap, Intimate Sensual Delivery, Nocturnal R&B Noir, Hypnotic Bedroom Vulnerability, 125-140 BPM, Key: Eb Minor, Lo-fi grit, Void space, Industrial Synths, Sub-Bass Rumble, Sparse Minimal Drums, Grave Cavernous Baritone Whisper Vocals, Slow Hypnotic Build with Rare Intensity Spikes, Dark Minimalist Mix Heavy Sub Frequencies, Belgian Underground Existential Darkness, 2020s",
    sunoExcludeStyles: "bright production, fast tempos, cheerful atmosphere, country, rock, opera, classical, aggressive shouting, festive energy",
    sunoVocalTags: ["[grave cavernous baritone]", "[intimate whisper-like delivery]", "[saturated vocal grain]", "[dramatic pause master]"],
    sunoWeirdness: 35,
    sunoStyleInfluence: 80,
    sunoBpmRange: "125-140",
    sunoKey: "Eb Minor",
    vocalDNA: "Grave cavernous baritone in lowest register, intimate whisper-like delivery creating bedroom vulnerability at high fidelity. Heavy vocal grain saturation giving analog warmth despite dark themes. Rare intensity spikes punctuate extended passages of restraint.",
    flowPattern: "Slow hypnotic delivery stretching syllables into space, dramatic pauses creating suspense and introspection. Minimal syllable density allowing silence to speak. Rare rapid-fire bursts of intensity breaking the meditative trance, then retreating back.",
    productionFingerprint: "Minimalist dark synths with industrial texture, sub-bass frequencies rumbling beneath threshold of hearing, empty reverberated space, sparse percussion reducing to silence, minimal melodic elements creating void aesthetic",
    culturalAnchors: "Sexual darkness and sensuality, existential nihilism and philosophy, Belgian-French identity with northern grimness, intimate vulnerability, drug-adjacent imagery, references to Belgian underground",
    antiPatterns: "Never bright or uplifting, never fast tempo, never cheerful tone, never acoustic instruments, never major key resolution",
    sunoMetatags: {
      vocalStyle: "Whisper",
      vocalEffect: "Reverb, Distortion",
      mood: "Dark",
      energy: "Low",
      texture: "Lo-fi",
      instrument: "Industrial Synths, Sub-Bass, Sparse Drums"
    }
  },
  GAZO: {
    sunoStyleTemplate: "Aggressive French Drill, Raw Growl Delivery, Syncopated Brutal Flow, 140-145 BPM, Key: F# Minor, Raw unprocessed, Underground bunker, Sliding 808, Frantic Triplet Hi-Hats, Dark Piano Stabs, Metallic Percs, 2020s",
    sunoExcludeStyles: "melodic singing, soft production, country, rock, opera, classical, bright atmosphere, smooth autotune, acoustic instruments",
    sunoVocalTags: ["[deep aggressive growl]", "[raw unprocessed delivery]", "[syncopated rhythmic intensity]", "[brutal pause master]"],
    sunoWeirdness: 15,
    sunoStyleInfluence: 82,
    sunoBpmRange: "140-145",
    sunoKey: "F# Minor",
    vocalDNA: "Deep aggressive growl from lowest register, raw unprocessed delivery with minimal production sheen. Harsh consonant articulation creating percussive vocal strikes. Zero melodic inflection, pure rhythmic weapon used to attack the beat.",
    flowPattern: "Syncopated drill with brutal pauses breaking the rhythmic flow unexpectedly, rapid-fire multi-syllabic bursts of intensity followed by silence. Syllables locked to 16th note triplet hi-hats. High internal rhyme density within aggressive bursts.",
    productionFingerprint: "Sliding 808s with pitch movement throughout sustain creating unease, frantic triplet hi-hat rolls at breakneck speed, dark piano stabs on off-beats, metallic percussion strikes, raw compressed mix with no sweetening",
    culturalAnchors: "Street violence narratives, drill crew flex and hierarchy, Paris suburban gang dynamics, raw honesty about street life, hyperlocal references, aggressive posturing and territorial themes",
    antiPatterns: "Never melodic or singing-oriented, never smooth or polished vocals, never soft production, never cheerful energy, never braggadocio without substance",
    sunoMetatags: {
      vocalStyle: "Rap",
      vocalEffect: "Distortion",
      mood: "Aggressive",
      energy: "Maximum",
      texture: "Raw unprocessed",
      instrument: "808 Bass, Triplet Hi-Hats, Dark Piano"
    }
  },
  "FREEZE CORLEONE": {
    sunoStyleTemplate: "Cold Clinical Monotone Rap, Mathematical Syllable Density, Dark Drill Boom-Bap Hybrid, Occult Esoteric Atmosphere, 125-140 BPM, Key: C Minor, Raw unprocessed, Underground bunker, Dark Vinyl Sample Loops, Chopped Orchestral Loops Pitched Down, Dense Triplet Hi-Hat Rolls, Deep Sub-808 Rumble, Monotone Compressed Nasal Mechanical Precision Vocals, Relentless Metronomic Density No Breathing Room, Dark Compressed Mix Heavy Mid-Range, Occult Pan-African Esoteric Coded Underground, 2020s",
    sunoExcludeStyles: "singing autotune, emotional delivery, bright production, major keys, humor, simple rhyme schemes, acoustic instruments, soulful warmth",
    sunoVocalTags: ["[monotone compressed midrange]", "[mechanical precision delivery]", "[zero melodic inflection]", "[clinical detachment]"],
    sunoWeirdness: 35,
    sunoStyleInfluence: 85,
    sunoBpmRange: "125-140",
    sunoKey: "C Minor",
    vocalDNA: "Monotone cold clinical delivery with slightly nasal compressed midrange register. Zero melodic inflection maintaining constant pitch level regardless of lyrical content. Mechanical precision with metronomic syllable placement. Voice used purely as percussion instrument.",
    flowPattern: "Strictly metronomic on-beat syllable placement with mathematical density of multi-syllabic internal rhymes creating rhythmic complexity. Voice becomes percussion within the beat grid. No syncopation or behind-the-beat phrasing, purely mathematical alignment.",
    productionFingerprint: "Dark vinyl sample loops creating ominous atmosphere, chopped orchestral loops pitched down for menace, boom-bap drum patterns with hard-hitting snares, deep sub-808 bass rumble, dense triplet hi-hat rolls, dark drill energy with boom-bap structure",
    culturalAnchors: "Occultism and esoteric references, underground collective mythology, conspiracy theory language, coded esoteric communication, manga/anime references, Pan-Africanism, sports metaphors as life narrative",
    antiPatterns: "NEVER sings or uses melodic inflection, NEVER uses autotune, NEVER emotional vulnerable delivery, NEVER humor or lightness, NEVER bright uplifting production, NEVER simple rhyme schemes",
    sunoMetatags: {
      vocalStyle: "Monotone Rap",
      vocalEffect: "Dry, Compressed",
      mood: "Dark",
      energy: "Medium",
      texture: "Raw unprocessed",
      instrument: "Dark Vinyl Samples, Orchestral Loops, Boom-Bap Drums, Sub-808"
    }
  },
  NIRO: {
    sunoStyleTemplate: "Raw Street Rap, Gravelly Aggressive Delivery, Deep Vocal Strikes, slow tempo 85-100 BPM, fast tempo 130-145 BPM, Key: Eb Minor, Raw unprocessed, Intimate dry booth, Deep 808 Long Tails, Eastern String Samples, Sparse Compressed Mix, 2020s",
    sunoExcludeStyles: "melodic singing, autotune, polished vocals, major-key uplift, aggressive braggadocio without substance, bright production, reggaeton dembow",
    sunoVocalTags: ["[deep gravelly mid-low register]", "[raw unpolished street texture]", "[audible heavy breathing]", "[aggressive vocal strikes]"],
    sunoWeirdness: 18,
    sunoStyleInfluence: 80,
    sunoBpmRange: "85-100, 130-145",
    sunoKey: "Eb Minor",
    vocalDNA: "Deep gravelly mid-low register with raw unpolished street texture and heavy audible breathing between phrases. Aggressive vocal strikes with percussive consonant articulation. No autotune or processing, pure organic delivery. Controlled power without oversinging.",
    flowPattern: "Locks tightly to snare/kick with medium-to-fast syllable density interrupted by strategic pauses for breath. High internal rhyme density packed within lines. Conversational tone maintained even within aggressive energy. Introspective verses shift to rapid-fire aggressive passages.",
    productionFingerprint: "Deep decaying 808 with extended tail creating rumble, complex hi-hat roll patterns with swing feel, Eastern-influenced strings and woodwind samples adding exotic texture, sparse arrangement allowing voice space, raw compressed mix emphasizing organic qualities",
    culturalAnchors: "Blois and 93 suburban reality, prison narratives and redemption arc, Franco-Moroccan immigrant identity, family loyalty and generational trauma, brutal emotional honesty, street justice themes",
    antiPatterns: "NEVER melodic singing or R&B inflection, NEVER autotune or vocal processing, NEVER polished studio sound, NEVER major-key uplift or hopeful resolution, NEVER braggadocio without emotional grounding",
    sunoMetatags: {
      vocalStyle: "Raspy Rap",
      vocalEffect: "Dry, Compressed",
      mood: "Dark",
      energy: "High",
      texture: "Raw unprocessed",
      instrument: "808 Bass, Eastern Strings, Sparse Drums"
    }
  },
  ZAHO: {
    sunoStyleTemplate: "Warm Soulful R&B, Clean Alto Elegance, Subtle Vibrato Control, 85-120 BPM, Key: A Minor, Studio polished, Room ambience, Layered Synth Pads, Crisp Hi-Hats, 808 Bass, Orchestral Strings, Arabic Oud Textures, 2020s",
    sunoExcludeStyles: "oversinging gospel pyrotechnics, aggressive trap, heavy autotune distortion, reggaeton dembow, sparse minimalist production, harsh industrial sound",
    sunoVocalTags: ["[warm soulful alto register]", "[clean polished R&B tone]", "[controlled subtle vibrato]", "[conversational yet soaring]"],
    sunoWeirdness: 15,
    sunoStyleInfluence: 82,
    sunoBpmRange: "85-120",
    sunoKey: "A Minor",
    vocalDNA: "Warm soulful alto register with clean polished R&B tone and controlled subtle vibrato adding dimension without excess. Capable of selective melisma moments that feel earned rather than gratuitous. Emotional accessibility and vocal control in balance. Franco-Algerian inflection present in phrasing.",
    flowPattern: "Sits slightly behind the beat with syllabic precision, selective melisma expanding moments for emotional impact. Conversational verses building to soaring melodic choruses. Call-and-response moments with layered harmonies. Rhythmic pocket maintains R&B swagger throughout.",
    productionFingerprint: "Warm layered synth pads creating harmonic bed, crisp Timbaland-influenced hi-hats at 16th note precision, defined 808 bass providing punch without boom, orchestral strings building to climax moments, subtle Arabic instrumentation (oud, qanun textures) adding cultural flavor",
    culturalAnchors: "Romantic relationship narratives and female empowerment, Algerian-French-Canadian identity bridging three cultures, Montreal urban life and cosmopolitan sophistication, chanson française sensibility meeting modern R&B, love as political and personal statement",
    antiPatterns: "NEVER oversinging or gospel pyrotechnics, NEVER aggressive trap production, NEVER heavy autotune distortion, NEVER reggaeton/dembow rhythms, NEVER sparse minimalist arrangements",
    sunoMetatags: {
      vocalStyle: "Soft",
      vocalEffect: "Reverb, Delay",
      mood: "Melancholic",
      energy: "Medium",
      texture: "Studio polished",
      instrument: "Synth Pads, 808 Bass, Orchestral Strings, Oud"
    }
  },
  PNL: {
    sunoStyleTemplate: "Ethereal Cloud Rap, Floating Autotune Harmonies, Contemplative Atmospheric Drift, slow tempo 72-88 BPM, Key: F Minor, Granular texture, Cathedral reverb, Deep Slow 808, Ethereal Synth Pads, Minimal Ghost Percussion, 2010s",
    sunoExcludeStyles: "aggressive fast drill, punk rock metal, happy bright pop, festive energy, country, loud industrial noise, boom-bap traditional",
    sunoVocalTags: ["[ethereal floating tone]", "[layered harmonic vocals]", "[breathy space-creating delivery]", "[contemplative melodic phrases]"],
    sunoWeirdness: 40,
    sunoStyleInfluence: 85,
    sunoBpmRange: "72-88",
    sunoKey: "F Minor",
    vocalDNA: "Ethereal floating autotune maintaining melodic lines while creating spacious tone quality. Layered vocal harmonies thickening the texture without clarity loss. Breathy delivery suggesting intimacy at massive scale. Vocal tone meant to float rather than anchor.",
    flowPattern: "Syllables placed in spacious manner with extended pauses and reverb trails creating contemplation. Behind-the-beat phrasing with syncopated placement emphasizing space over density. Melodic contours drift rather than lock to beat grid.",
    productionFingerprint: "Cathedral reverb space creating massive ambience, deep slow 808 rumbling beneath range, ethereal synth pads layered in frequency spectrum, minimal ghost percussion (snares, kicks mostly implied), floating vocal layers with spatial effects",
    culturalAnchors: "Parisian street mythology, criminal undertones and escapism narratives, visual album universe, French rap philosophical depth, brotherhood and crew loyalty, melancholic observation of street life",
    antiPatterns: "Never aggressive or fast-paced, never bright uplifting energy, never drum-heavy percussion, never lyrical technique showcase, never cheerful tone",
    sunoMetatags: {
      vocalStyle: "Melodic Autotune",
      vocalEffect: "Heavy Auto-tune, Reverb, Delay",
      mood: "Melancholic",
      energy: "Low",
      texture: "Granular texture",
      instrument: "Synth Pads, Sub-Bass, Ghost Percussion"
    }
  },
  BOOBA: {
    sunoStyleTemplate: "Aggressive Trap-Orchestral Rap, Heavy 808 Dominance, Cinematic Dark Power, Stadium Authority Anthem, 130-142 BPM, Key: C# Minor, Studio polished, Stadium reverb, Massive Distorted 808 Bass, Dark Choir Pads, Dramatic String Sweeps, Hard Trap Kick Snare Patterns, Deep Authoritative Baritone Power Projection, Explosive Percussion Assault Building to Stadium Drop, Loud Polished Master Maximum Stereo Impact, French Rap Godfather Street Hierarchy, 2020s",
    sunoExcludeStyles: "soft acoustic pop, country folk gentle, happy bright atmosphere, nursery rhymes, lo-fi chill, smooth R&B warmth, acoustic guitar layers",
    sunoVocalTags: ["[deep authoritative baritone]", "[dominant aggressive delivery]", "[stadium-filling projection]", "[orchestral dramatic phrasing]"],
    sunoWeirdness: 18,
    sunoStyleInfluence: 82,
    sunoBpmRange: "130-142",
    sunoKey: "C# Minor",
    vocalDNA: "Deep authoritative baritone with commanding projection designed to fill stadiums. Aggressive vocal strikes emphasizing power and dominance. Orchestral phrasing treating voice as instrument within symphonic arrangement. Minimal melodic inflection, focus on vocal power.",
    flowPattern: "Saccadic rhythmic attacks with sudden pauses and dramatic emphasis. Syllables struck with percussive force locking to kick/snare. Breath control emphasizing power over flow smoothness. Occasional long-held syllables for dramatic effect.",
    productionFingerprint: "Massive distorted 808 bass as foundation of every track, hard trap drum patterns with aggressive kick/snare, dark orchestral arrangement with choir pads creating menace, dramatic string sweeps, stadium reverb creating massive space, modern trap hi-hat rolls layered with orchestral power",
    culturalAnchors: "French rap godfather mythology, criminal undertones and street hierarchy, material success narratives, international dominance claims, generational authority, African heritage pride",
    antiPatterns: "Never soft or gentle delivery, never acoustic warmth, never happy uplifting tone, never lo-fi minimalist production, never vulnerable emotional display",
    sunoMetatags: {
      vocalStyle: "Power Rap",
      vocalEffect: "Reverb, Compressed",
      mood: "Aggressive",
      energy: "High",
      texture: "Studio polished",
      instrument: "Massive 808 Bass, Trap Drums, Choir Pads, Orchestral Strings"
    }
  },
  HAMZA: {
    sunoStyleTemplate: "Smooth Nonchalant R&B-Rap, Suave Nocturnal Delivery, Luxurious Sauce Melodic, 130-142 BPM, Key: Ab Minor, Digital crisp, Intimate dry booth, Warm Synth Pads, Clean Hi-Hats, Deep Round 808, Smooth Keys, 2020s",
    sunoExcludeStyles: "aggressive dark orchestral, country rock metal, boom-bap raw, gritty street noise, operatic classical, hard aggressive energy",
    sunoVocalTags: ["[smooth nonchalant delivery]", "[warm autotune application]", "[suave confident tone]", "[intimate club crooning]"],
    sunoWeirdness: 20,
    sunoStyleInfluence: 80,
    sunoBpmRange: "130-142",
    sunoKey: "Ab Minor",
    vocalDNA: "Smooth warm autotune maintaining natural tone while adding melodic sheen. Suave confident delivery conveying effortless coolness. Nonchalant phrasing suggesting laid-back sophistication. Zero aggression in vocal tone, pure silk delivery.",
    flowPattern: "Sits in the pocket with relaxed behind-the-beat placement, syllables ride smooth with minimal sharp attacks. Conversational phrasing with occasional melodic flourishes. Club-friendly rhythm bouncing without urgency.",
    productionFingerprint: "Polished digital sheen with warm synth pad layers, clean hi-hat precision at moderate tempo, smooth warm key tones (piano, strings), deep round 808 providing pocket bass, intimate club reverb creating cozy space",
    culturalAnchors: "Romantic success narratives with material trappings, nocturnal club culture, Belgian sauce tradition, luxury lifestyle references, effortless coolness mythology, sophisticated street positioning",
    antiPatterns: "Never aggressive or dark, never raw gritty production, never boom-bap traditional, never harsh consonant strikes, never serious confrontational tone",
    sunoMetatags: {
      vocalStyle: "Soft Melodic Rap",
      vocalEffect: "Subtle Auto-tune, Reverb",
      mood: "Peaceful",
      energy: "Medium",
      texture: "Digital crisp",
      instrument: "Synth Pads, 808 Bass, Smooth Keys"
    }
  },
  "TRAVIS SCOTT": {
    sunoStyleTemplate: "Psychedelic Distorted Trap, Spacey Autotune Chopping, Cosmic Beat-Switch Production, 132-148 BPM, Key: E Minor, Distorted saturated grain, Cave echo, Flanger Percussion, Reverbed Ad-Lib Loops, Phase Synths, Heavy 808, 2020s",
    sunoExcludeStyles: "acoustic country folk, classical opera, jazz warm, boom-bap traditional, bright clean pop, minimalist sparse arrangement",
    sunoVocalTags: ["[spacey autotune chopping]", "[looped ad-lib texture]", "[psychedelic vocal manipulation]", "[floated ethereal delivery]"],
    sunoWeirdness: 38,
    sunoStyleInfluence: 80,
    sunoBpmRange: "132-148",
    sunoKey: "E Minor",
    vocalDNA: "Spacey autotune chopping voice into textural elements rather than clear delivery. Looped ad-lib processing creating psychedelic texture. Vocal phrases layered and repeated to create atmospheric walls. Intelligibility secondary to sonic texture.",
    flowPattern: "Rapid ad-lib loops creating rhythmic texture rather than clear melodic line. Beat switches disrupting rhythmic stability. Vocal stuttering and chopping creating percussive elements. Syncopation secondary to production chaos.",
    productionFingerprint: "Psychedelic distorted saturation throughout, cosmic ambient layer padding, beat-switch moments dropping into new sonic universe, flanger percussion creating modulation chaos, reverbed ad-lib loops stacking in texture, phase reverb creating movement",
    culturalAnchors: "Houston rap legacy and astroworld mythology, psychotropic drug-adjacent themes, spacey otherworldly aesthetics, youth culture dominance, viral moment creation, production innovation focus",
    antiPatterns: "Never straightforward clear vocals, never acoustic instrument-focused, never simple beat structures, never calm ambient music, never polished clean production",
    sunoMetatags: {
      vocalStyle: "Auto-tuned Rap",
      vocalEffect: "Heavy Auto-tune, Reverb, Distortion",
      mood: "Dark",
      energy: "High",
      texture: "Tape-Saturated",
      instrument: "808 Bass, Synth Pads, Flanger Percs"
    }
  },
  DRAKE: {
    sunoStyleTemplate: "Smooth R&B-Trap Hybrid, Emotional Melodic Delivery, Intimate Nocturnal Mood, 130-142 BPM, Key: Bb Minor, Studio polished, Room ambience, R&B Piano Chords, Warm 808, Soft Pads, Clean Trap Drums, 2020s",
    sunoExcludeStyles: "aggressive metal screaming, industrial noise, country folk, operatic classical, hard rock, experimental avant-garde noise",
    sunoVocalTags: ["[smooth versatile baritone]", "[emotional melodic delivery]", "[warm autotune subtlety]", "[intimate booth vulnerability]"],
    sunoWeirdness: 15,
    sunoStyleInfluence: 82,
    sunoBpmRange: "130-142",
    sunoKey: "Bb Minor",
    vocalDNA: "Smooth versatile baritone capable of both rapped and sung phrasing with equal conviction. Warm autotune applied subtly enhancing rather than transforming. Emotional accessibility without melodrama. Vocal control and range command.",
    flowPattern: "Flexible phrasing shifting between rap and singing within single bars. Behind-the-beat placement creating pocket comfort. Conversational tone with occasional melodic flourishes. Rhythm control emphasizing pocket over technical display.",
    productionFingerprint: "Polished studio clarity with room ambience warmth, R&B piano chord progressions, soft pad layers (strings, synths), warm deep 808 creating bass pocket, clean trap drums with crisp snare, subtle acoustic guitar layers",
    culturalAnchors: "Romantic vulnerability narratives, Toronto upbringing mythology, global dominance positioning, emotional accessibility in hip-hop, party culture sophistication, relationship tumult dramatization",
    antiPatterns: "Never aggressive metal or screaming, never hard rock approach, never industrial harshness, never experimental noise, never detached emotional tone",
    sunoMetatags: {
      vocalStyle: "Melodic Rap",
      vocalEffect: "Subtle Auto-tune, Reverb",
      mood: "Melancholic",
      energy: "Medium",
      texture: "Studio polished",
      instrument: "Piano, 808 Bass, Soft Synth Pads"
    }
  },
  TIAKOLA: {
    sunoStyleTemplate: "Joyful Afro-Pop Melodic, High Singing Flow, Luminous Warm Bounce, 102-118 BPM, Key: F Major, Digital crisp, Open air, Bouncy 808, Melodic Guitar Riffs, Afro Percussion Shakers, Luminous Synth Pads, 2020s",
    sunoExcludeStyles: "dark aggressive drill, metal screaming, classical opera, slow depressing ballad, industrial noise, minimalist sparse production",
    sunoVocalTags: ["[high melodic male voice]", "[bright joyful delivery]", "[singing-oriented phrasing]", "[energetic uplifting tone]"],
    sunoWeirdness: 15,
    sunoStyleInfluence: 82,
    sunoBpmRange: "102-118",
    sunoKey: "F Major",
    vocalDNA: "High melodic male voice register with bright joyful tone and natural singing ability. Clear articulation emphasizing melody over rap technique. Energetic uplifting delivery suggesting celebration. Zero darkness in vocal tone.",
    flowPattern: "Singing-oriented phrasing with vocal line leading melodic movement. On-beat placement creating uplifting cadence. Verse and chorus distinction clear with chorus soaring higher. Rhythmic pocket secondary to melodic contour.",
    productionFingerprint: "Wide open stereo with luminous synth pads creating glow, warm bouncy 808 kicking energetically, melodic guitar riffs dancing over rhythm, afro percussion shakers adding human touch, bright digital clarity throughout",
    culturalAnchors: "Afro-pop international appeal, joyful celebration of African diaspora, party energy and dancefloor focus, love and romantic themes, cultural pride messages, youthful exuberance",
    antiPatterns: "Never dark or aggressive atmosphere, never drill energy, never metal or loud noise, never depressing melancholic tone, never sparse minimalist arrangement",
    sunoMetatags: {
      vocalStyle: "Belt",
      vocalEffect: "Reverb",
      mood: "Uplifting",
      energy: "High",
      texture: "Crisp Digital",
      instrument: "Guitar, 808 Bass, Afro Percussion, Synth Pads"
    }
  },
  "AYA NAKAMURA": {
    sunoStyleTemplate: "Catchy Afro-Pop Urbaine, Dancehall-Pop Groove, Hook-Focused Bright Production, 96-112 BPM, Key: G Minor, Digital crisp, Open air, Warm Round Bass, Pop Guitar Riffs, Afro Percussion, Bouncy Synth Stabs, 2020s",
    sunoExcludeStyles: "dark aggressive drill, metal screaming, classical opera, slow depressing ballad, boom-bap traditional rap technique, industrial noise",
    sunoVocalTags: ["[powerful female voice]", "[catchy hook specialist]", "[bright rhythmic delivery]", "[dancehall-influenced phrasing]"],
    sunoWeirdness: 12,
    sunoStyleInfluence: 85,
    sunoBpmRange: "96-112",
    sunoKey: "G Minor",
    vocalDNA: "Powerful female voice with bright confident tone and excellent rhythm pocket. Conversational yet punchy delivery emphasizing catchiness over technical complexity. Natural vibrato adding warmth. Accent flavoring adds personality.",
    flowPattern: "Rhythmically tight with percussive consonant articulation. Hook-focused design with memorable melodic phrases. Conversational verses leading to radio-friendly chorus hooks. Dancehall-influenced syncopation adding groove.",
    productionFingerprint: "Bright pop polish with clear digital clarity, warm round 808 bass providing bounce, pop-oriented melodic guitar riffs, light afro percussion shaker layers adding human feel, bouncy synth stabs punctuating hooks",
    culturalAnchors: "Afro-pop international success mythology, Paris urban culture, female empowerment in French rap space, catchy hook-driven songwriting, party culture embrace, Parisian swagger positioning",
    antiPatterns: "Never dark serious atmosphere, never metal or aggressive sound, never slow depressing ballad, never boom-bap rap technique, never minimalist sparse production",
    sunoMetatags: {
      vocalStyle: "Power",
      vocalEffect: "Reverb",
      mood: "Uplifting",
      energy: "High",
      texture: "Crisp Digital",
      instrument: "Guitar, 808 Bass, Afro Percussion, Synth Stabs"
    }
  },
  KALASH: {
    sunoStyleTemplate: "Dancehall-Rap Fusion, Infectious Caribbean Bounce, Reggae Groove Energy, 95-110 BPM, Key: A Minor, Analog warmth, Open air, Punchy Bass, Reggae Percussion, Riddim Drums, Synth Horn Stabs, 2010s",
    sunoExcludeStyles: "dark metal aggressive, classical opera, slow ballad depressing, heavy industrial noise, aggressive boom-bap, minimalist sparse production",
    sunoVocalTags: ["[energetic confident delivery]", "[dancehall-influenced phrasing]", "[rhythmic groove-locking]", "[infectious vocal bounce]"],
    sunoWeirdness: 14,
    sunoStyleInfluence: 78,
    sunoBpmRange: "95-110",
    sunoKey: "A Minor",
    vocalDNA: "Energetic confident male voice with Caribbean inflection and dancehall phrasing influence. Bouncy vocal delivery locking to groove. Conversational accessibility without technical complexity. Positive uplifting tone throughout.",
    flowPattern: "Groove-locking placement emphasizing infectious bounce and head-nod rhythm. Syncopated dancehall-influenced phrasing creating movement. Call-and-response moments with infectious energy. Rhythmic pocket emphasized over lyrical complexity.",
    productionFingerprint: "Bright reggae percussion with authentic flavoring, warm punchy bass providing groove pocket, light reggae drum riddim patterns, bouncy synth horn stabs punctuating melodic moments, infectious energy throughout",
    culturalAnchors: "Jamaican dancehall bridge to French rap, Caribbean cultural pride, party culture and dancefloor energy, infectious groove celebration, tropical vibes, cultural fusion pride",
    antiPatterns: "Never dark or aggressive atmosphere, never metal or hard sound, never slow depressing tone, never boom-bap traditional technique, never sparse minimalist production",
    sunoMetatags: {
      vocalStyle: "Rap",
      vocalEffect: "Reverb",
      mood: "Uplifting",
      energy: "High",
      texture: "Analog warmth",
      instrument: "Bass, Reggae Drums, Synth Horns"
    }
  },
  NEKFEU: {
    sunoStyleTemplate: "Lyrical Boom-Bap Pop-Rap, Chopped Soul Sample Hooks, Warm Poetic Hip-Hop, Introspective Narrative Flow, 90-105 BPM, Key: A Minor, Analog warmth, Room ambience, Boom-Bap Punchy Kicks Crisp Snares, Chopped Soul Vocal Samples, Warm Synth Bass, Jazz Piano Chords, Clear Articulate Natural Voice Poetic Delivery, Storytelling Verse Building to Melodic Hook, Warm Analog Mix Round Low-End, Parisian Intellectual Poetic Tradition, 2010s",
    sunoExcludeStyles: "heavy autotune distortion, generic trap beats, dark orchestral horror, aggressive screaming, industrial noise, fast drill energy",
    sunoVocalTags: ["[clear articulate delivery]", "[poetic narrative phrasing]", "[storytelling mastery]", "[warm conversational tone]"],
    sunoWeirdness: 20,
    sunoStyleInfluence: 75,
    sunoBpmRange: "90-105",
    sunoKey: "A Minor",
    vocalDNA: "Clear articulate male voice emphasizing lyrical clarity and narrative phrasing. Poetic intonation suggesting intellectualism and emotional depth. Zero autotune processing, organic delivery emphasizing vocal authenticity. Warm tone inviting listener intimacy.",
    flowPattern: "Behind-the-beat phrasing creating pocket comfort and lyrical emphasis. Storytelling focus with clear enunciation. Verse construction prioritizing narrative arc over technical rhyme density. Melodic variation supporting emotional content.",
    productionFingerprint: "Boom-bap drum patterns with punchy kicks and crisp snares, chopped soul vocal samples as melodic hooks, warm synth bass providing foundation, piano chord progressions adding sophistication, occasional guitar loops layered for texture",
    culturalAnchors: "Parisian intellectual hip-hop, poetic storytelling tradition, introspective narrative themes, social commentary, personal memoir elements, lyrical sophistication emphasis",
    antiPatterns: "Never heavy autotune or vocal distortion, never generic trap production, never dark orchestral atmosphere, never aggressive screaming, never fast drill energy",
    sunoMetatags: {
      vocalStyle: "Rap",
      vocalEffect: "Subtle Reverb",
      mood: "Melancholic",
      energy: "Medium",
      texture: "Analog warmth",
      instrument: "Boom-Bap Drums, Soul Samples, Synth Bass, Piano"
    }
  },
  LAYLOW: {
    sunoStyleTemplate: "Futuristic Glitch-Rap Experimental, Dystopian R&B-Trap Hybrid, Granular Vocal Processing, 128-140 BPM, Key: Bb Minor, Granular texture, Void space, Deep Pitched 808, Futuristic Synth Pads, Glitchy Electronic Percs, 2020s",
    sunoExcludeStyles: "acoustic traditional instruments, country folk, classical opera, boom-bap conventional, traditional folk music, nursery rhymes, lo-fi chill",
    sunoVocalTags: ["[pitch-shifted vocal layers]", "[experimental vocal processing]", "[robotic texture elements]", "[avant-garde phrasing]"],
    sunoWeirdness: 50,
    sunoStyleInfluence: 75,
    sunoBpmRange: "128-140",
    sunoKey: "Bb Minor",
    vocalDNA: "Pitch-shifted and layered vocal processing creating robotic/futuristic texture. Vocals treated as sonic element rather than clear delivery vehicle. Experimental vocal chopping and manipulation. Zero concern for vocal clarity, maximum texture experimentation.",
    flowPattern: "Rhythm placement experimental and unconventional with beat grid as suggestion not rule. Stuttering vocal repetition creating percussive texture. Syncopation inconsistent and disorienting by design. Voice integrated as production element.",
    productionFingerprint: "Granular texture glitch processing throughout, void space immersion with spacious reverb, deep pitched 808 experimentation with unusual tone, futuristic synth pads creating alien atmosphere, glitchy electronic percussion replacing conventional drums",
    culturalAnchors: "Futuristic dystopian aesthetics, experimental music innovation, boundary-pushing production techniques, sci-fi references, digital culture exploration, avant-garde artistic positioning",
    antiPatterns: "Never acoustic or traditional instruments, never conventional boom-bap production, never clear straightforward vocals, never folk or traditional music, never lo-fi chill aesthetic",
    sunoMetatags: {
      vocalStyle: "Auto-tuned Rap",
      vocalEffect: "Vocoder, Distortion, Delay",
      mood: "Dark",
      energy: "Medium",
      texture: "Granular texture",
      instrument: "Synth Pads, 808 Bass, Glitch Percs"
    }
  },
  SDM: {
    sunoStyleTemplate: "Dark Afro-Melodic Street Rap, Nocturnal Autotune Flow, Somber Intimate Delivery, 125-135 BPM, Key: E Minor, Tape saturation, Intimate dry booth, Deep Round 808, Melancholic Piano, Afro Percussion, Complex Hi-Hats, 2020s",
    sunoExcludeStyles: "bright happy pop, festive celebration energy, country rock, opera classical, generic pop production, industrial noise, aggressive screaming",
    sunoVocalTags: ["[grave melodic voice]", "[dark intimate delivery]", "[warm autotune application]", "[melancholic phrasing]"],
    sunoWeirdness: 18,
    sunoStyleInfluence: 78,
    sunoBpmRange: "125-135",
    sunoKey: "E Minor",
    vocalDNA: "Grave melodic voice with dark intimate delivery and warm autotune application enhancing without transforming. Somber tone throughout with occasional moments of tenderness. Melodic sensibility balanced with street credibility.",
    flowPattern: "Melodic rap-flow hybrid placing syllables for musical contour rather than purely rhythmic impact. Behind-the-beat pocket creating space. Conversational vulnerability mixed with street authority. Melodic phrases rising and falling with emotional architecture.",
    productionFingerprint: "Warm tape saturation adding vintage warmth to dark production, intimate dark space with moderate reverb, deep round 808 providing bass pocket, melancholic piano key layers supporting melody, subtle afro percussion accents adding cultural flavor, complex hi-hat patterns",
    culturalAnchors: "African diaspora street reality, dark melancholic mood balancing joy, nocturnal urban life narratives, emotional vulnerability in street context, afro-trap culture, continental African pride",
    antiPatterns: "Never bright or happy atmosphere, never festive celebratory energy, never country rock influence, never classical operatic approach, never minimalist sparse production",
    sunoMetatags: {
      vocalStyle: "Melodic Rap",
      vocalEffect: "Auto-tune, Reverb",
      mood: "Dark",
      energy: "Medium",
      texture: "Tape-Saturated",
      instrument: "Piano, 808 Bass, Afro Percussion"
    }
  },
  NISKA: {
    sunoStyleTemplate: "Festive Afro-Trap Banger, Energetic Dancehall-Rap Bounce, Party Street Energy, 100-112 BPM, Key: C Minor, Digital crisp, Open air, Bouncy 808, Synthetic Congas, Dancehall Riddim, Brass Stabs, 2020s",
    sunoExcludeStyles: "dark depressing atmosphere, industrial noise, metal aggressive, classical opera, slow ballad, boom-bap traditional, minimalist sparse",
    sunoVocalTags: ["[energetic aggressive rap]", "[festive vocal projection]", "[rhythmic groove-locking]", "[party-focused delivery]"],
    sunoWeirdness: 15,
    sunoStyleInfluence: 80,
    sunoBpmRange: "100-112",
    sunoKey: "C Minor",
    vocalDNA: "Energetic aggressive male voice with festive uplifting tone and excellent rhythmic placement. Vocal strikes emphasizing percussive energy. No autotune processing, raw confident delivery. Festival-friendly projection and charisma.",
    flowPattern: "Rhythm-locked delivery emphasizing beat pocket and groove. Rapid syllable delivery with percussive consonant strikes. Festive vocal ad-libs and moment breaks. Infectious energy and positive attitude throughout.",
    productionFingerprint: "Bright digital polish with festival-friendly clarity, open air space with wide stereo imaging, bouncy 808 kick with punchy attack, synthetic conga percussion adding dancehall texture, dancehall riddim elements, festive brass stab accents punctuating moments",
    culturalAnchors: "Afro-trap festival culture, Paris street credibility with African pride, party culture energy, street party celebration, festive positivity, dancehall-influenced swagger",
    antiPatterns: "Never dark or depressing atmosphere, never minimalist sparse production, never slow tempo, never serious aggressive tone, never metal or industrial noise",
    sunoMetatags: {
      vocalStyle: "Rap",
      vocalEffect: "Reverb",
      mood: "Uplifting",
      energy: "Maximum",
      texture: "Crisp Digital",
      instrument: "808 Bass, Congas, Dancehall Drums, Brass"
    }
  },
  "CENTRAL CEE": {
    sunoStyleTemplate: "UK Melodic Drill, Cool Sliding Syncopated Flow, London Street Swagger, 140-145 BPM, Key: G Minor, Digital crisp, Underground bunker, Sliding 808, Triplet Hi-Hats, Melancholic Piano, Clean Snare, 2020s",
    sunoExcludeStyles: "singing pop vocals, country folk, rock metal, opera classical, happy bright, French rap, boom-bap traditional",
    sunoVocalTags: ["[cool confident delivery]", "[sliding syncopated phrasing]", "[london accent inflection]", "[melodic drill flow]"],
    sunoWeirdness: 18,
    sunoStyleInfluence: 80,
    sunoBpmRange: "140-145",
    sunoKey: "G Minor",
    vocalDNA: "Cool confident male voice with London accent influence and melodic sensibility within drill context. Sliding syncopated delivery riding beat wave. Conversational tone with street authority. Minimal emotion display, maximum cool positioning.",
    flowPattern: "Sliding syncopated phrasing with on-beat and off-beat placement interchanging for dynamic flow. Melodic contours within drill structure. Conversational tone with occasional percussive hits. Rhythmic complexity through syncopation rather than density.",
    productionFingerprint: "UK drill base with crisp digital clarity, underground club echo creating intimacy, sliding 808 with pitch movement creating tension, triplet hi-hat precision, melancholic piano melody support, clean punchy snare hits",
    culturalAnchors: "UK drill global bridge, London street credibility, European international positioning, melodic drill innovation, street cool mythology, cultural export positioning",
    antiPatterns: "Never singing or pop vocals, never country folk approach, never happy bright atmosphere, never French rap style, never boom-bap traditional",
    sunoMetatags: {
      vocalStyle: "Melodic Rap",
      vocalEffect: "Dry",
      mood: "Dark",
      energy: "High",
      texture: "Crisp Digital",
      instrument: "808 Bass, Triplet Hi-Hats, Piano"
    }
  },
  "ALPHA WANN": {
    sunoStyleTemplate: "Elite Technical Boom-Bap, Chopped Soul Sample Loops, Dusty Vinyl Hip-Hop, Surgical Lyrical Precision, 88-98 BPM, Key: D Minor, Dusty sample, Intimate dry booth, Vinyl Drum Breaks Crisp Snares, Jazz Saxophone Melodic Loops, Chopped Soul Vocal Samples, Round NY Bass Foundation, Cold Surgical Technical Delivery Razor Articulation, Steady Metronomic Flow Zero Wasted Syllables, Dusty Vintage Mix Vinyl Warmth, Parisian Underground Boom-Bap Purist Legacy, 2010s",
    sunoExcludeStyles: "singing melodic, autotune warmth, bright uplifting, country folk, opera classical, festive energy, lo-fi chill, trap generic, drill",
    sunoVocalTags: ["[clinical precise delivery]", "[technical rap mastery]", "[cold detached tone]", "[surgical syllable placement]"],
    sunoWeirdness: 22,
    sunoStyleInfluence: 76,
    sunoBpmRange: "88-98",
    sunoKey: "D Minor",
    vocalDNA: "Clinical precise male voice emphasizing technical accuracy and cold detached delivery. Zero emotional inflection, pure technical display. Surgical syllable placement with mechanical precision. Intellectual positioning through vocal austerity.",
    flowPattern: "Surgical syllable placement with metronomic precision on boom-bap grid. Internal rhyme density maximized within sampled arrangement. Technical display emphasis over groove comfort. Behind-the-beat pocket with mathematical alignment.",
    productionFingerprint: "Chopped soul sample loops providing melodic bed, dusty vinyl drum breaks with heavy kick and snapping snare, jazz saxophone loops weaving through arrangement, round warm NY-style bass, vinyl crackle texture, overall golden-era boom-bap modernized",
    culturalAnchors: "French technical rap excellence, intellectual lyrical depth, boom-bap purist philosophy, Parisian underground credibility, literary artistic positioning, refined hip-hop culture",
    antiPatterns: "Never singing or melodic inflection, never autotune warmth, never bright uplifting, never festive energy, never lo-fi chill aesthetic, never generic trap production",
    sunoMetatags: {
      vocalStyle: "Rap",
      vocalEffect: "Dry",
      mood: "Dark",
      energy: "Medium",
      texture: "Dusty sample",
      instrument: "Vinyl Drum Breaks, Jazz Saxophone, Chopped Soul Samples, Round Bass"
    }
  },
  KAARIS: {
    sunoStyleTemplate: "Dark Aggressive French Trap, Hardcore Rap, Deep Baritone Rap Voice, Sevran Street Energy, 135-145 BPM, Key: B Minor, Heavy 808 Sub Bass, Trap Snare Rolls, Triplet Hi-Hats, Dark Piano Keys, Minimalist Dark Synth Pads, Aggressive French Rap Delivery, 2010s",
    sunoExcludeStyles: "metal, rock, guitar riffs, singing pop, soft acoustic, country folk, bright happy, classical opera, lo-fi chill, reggaeton dembow, screaming, metal guitar, electric guitar distortion",
    sunoVocalTags: ["[deep commanding baritone rap]", "[aggressive street delivery]", "[menacing French rap presence]", "[hard trap vocal]"],
    sunoWeirdness: 20,
    sunoStyleInfluence: 80,
    sunoBpmRange: "135-145",
    sunoKey: "B Minor",
    vocalDNA: "Deep commanding baritone rapper with aggressive street delivery. Menacing rap presence with hard consonant attacks. Zero melodic singing — pure aggressive rap flow. Voice projects raw street dominance like French hardcore trap.",
    flowPattern: "Rapid percussive rap delivery with hard consonant strikes, aggressive on-beat attacks, saccadé phrasing with punch-in intensity. Occasional dramatic pauses. Maximum aggression without ever crossing into singing or melodic territory.",
    productionFingerprint: "Heavy 808 sub bass foundation, hard-hitting trap snares and claps, frantic triplet hi-hat rolls, dark minor piano keys, minimalist dark synth pads, sparse atmospheric textures, punchy kick drums, overall dark trap aesthetic — NO guitars, NO rock elements",
    culturalAnchors: "Sevran hardcore French trap, street aggression narratives, 93 banlieue energy, French trap dominance era, raw street reality, uncompromising aggressive rap positioning",
    antiPatterns: "NEVER metal, NEVER rock guitar, NEVER electric guitar, NEVER singing or pop vocals, NEVER soft acoustic, NEVER bright happy, NEVER country folk, NEVER lo-fi chill, NEVER reggaeton dembow, NEVER screaming metal vocals",
    sunoMetatags: {
      vocalStyle: "Aggressive Rap",
      vocalEffect: "Dry, Light Reverb",
      mood: "Aggressive",
      energy: "Maximum",
      texture: "Dark Trap",
      instrument: "808 Sub Bass, Trap Drums, Dark Piano, Synth Pads"
    }
  },
  "NATE DOGG": {
    sunoStyleTemplate: "G-Funk R&B Smoothness, Melodic Hook Soul, West Coast Groove, 95-110 BPM, Key: F Minor, Analog warmth, Stadium reverb, Deep Bouncy Bass, Lush Synth Strings, Funky Drums, Warm Soulful Voice, 1990s",
    sunoExcludeStyles: "aggressive metal, industrial noise, classical opera, fast drill energy, minimalist sparse, dark orchestral horror",
    sunoVocalTags: ["[warm soulful delivery]", "[melodic hook master]", "[smooth crooning tone]", "[laid-back confident]"],
    sunoWeirdness: 16,
    sunoStyleInfluence: 80,
    sunoBpmRange: "95-110",
    sunoKey: "F Minor",
    vocalDNA: "Warm soulful male voice with melodic hook mastery and smooth crooning tone. Laid-back confident delivery conveying easy coolness. Natural vibrato adding warmth without excess. West Coast inflection in phrasing.",
    flowPattern: "Behind-the-beat pocket placement with relaxed swagger, melodic hook lines soaring over beats, conversational verses with memorable chorus moments, rhythmic pocket maintenance throughout.",
    productionFingerprint: "Analog warmth throughout production, stadium reverb creating space, deep bouncy bass grooving infectiously, lush synth string arrangements, funky drum patterns with G-Funk influence, overall smooth soulful atmosphere",
    culturalAnchors: "West Coast G-Funk legacy, Long Beach rap mythology, smooth R&B-rap fusion, party and celebration themes, soulful authenticity, generational rap influence",
    antiPatterns: "Never aggressive metal or screaming, never industrial harsh, never classical operatic, never fast drill energy, never dark orchestral, never minimalist sparse",
    sunoMetatags: {
      vocalStyle: "Soft",
      vocalEffect: "Reverb, Delay",
      mood: "Peaceful",
      energy: "Medium",
      texture: "Analog warmth",
      instrument: "Synth Strings, Bouncy Bass, Funky Drums"
    }
  },
  VALD: {
    sunoStyleTemplate: "Dark Aggressive Trap-Rap, Heavy 808 Distorted Bass, Experimental Horrorcore Hip-Hop, Sardonic Dark Humor Flow, 130-145 BPM, Key: D Minor, Raw unprocessed, Underground bunker, Heavy Distorted 808, Dark Trap Hi-Hat Rolls, Eerie Synth Melodies, Aggressive Kick Patterns, Cold Aggressive Rapid-Fire Technical Vocals, Explosive Bursts then Deadpan Sardonic Drops, Raw Compressed Mix Aggressive Low-End, French Experimental Provocateur Dark Satire, 2020s",
    sunoExcludeStyles: "singing melodic, bright happy pop, country folk, opera classical, festive energy, smooth R&B",
    sunoVocalTags: ["[cold aggressive delivery]", "[rapid-fire technical flow]", "[dark sardonic tone]", "[explosive energy bursts]"],
    sunoWeirdness: 45,
    sunoStyleInfluence: 78,
    sunoBpmRange: "130-145",
    sunoKey: "D Minor",
    vocalDNA: "Cold aggressive male voice shifting between rapid-fire technical delivery and sardonic detached tone. Capable of explosive energy bursts and dark humor. Technical precision with intentional raw edge. Versatile between introspective and aggressive modes.",
    flowPattern: "Rapid-fire syllable density with technical multisyllabic rhymes, aggressive on-beat attacks, shifting between fast technical passages and dramatic pauses for punchlines. Dark humor delivered with deadpan timing.",
    productionFingerprint: "Heavy distorted 808 bass creating aggressive low-end, dark trap hi-hat rolls with complex patterns, eerie synth melodies creating unsettling atmosphere, aggressive kick patterns, experimental beat switches, overall dark aggressive trap aesthetic",
    culturalAnchors: "Experimental French rap innovation, dark humor and satire, provocative shock value, intellectual artistic positioning, horror-adjacent imagery, boundary-pushing content",
    antiPatterns: "Never singing or melodic, never bright happy, never country folk, never opera classical, never festive energy, never smooth R&B",
    sunoMetatags: {
      vocalStyle: "Rap",
      vocalEffect: "Dry, Compressed",
      mood: "Aggressive",
      energy: "High",
      texture: "Raw unprocessed",
      instrument: "Heavy 808, Trap Hi-Hats, Dark Synths, Aggressive Drums"
    }
  },
  "PLAYBOI CARTI": {
    sunoStyleTemplate: "Experimental Psychedelic Trap, Baby Voice Ad-Lib Layers, Distorted Vocal Chopping, 130-145 BPM, Key: B Minor, Distorted saturated grain, Cave echo, Heavy Distorted 808, Frantic Triplet Hi-Hats, Synth Chaos Layers, 2020s",
    sunoExcludeStyles: "acoustic instruments, country folk, classical opera, boom-bap traditional, minimalist sparse, lo-fi chill",
    sunoVocalTags: ["[baby voice ad-libs]", "[experimental vocal processing]", "[distorted vocal textures]", "[chaotic layered delivery]"],
    sunoWeirdness: 50,
    sunoStyleInfluence: 72,
    sunoBpmRange: "130-145",
    sunoKey: "B Minor",
    vocalDNA: "Baby voice ad-lib processing creating experimental psychedelic texture. Distorted vocal chopping and layering as primary production element. Vocals treated as sonic chaos rather than clear communication. Intelligibility completely secondary to texture.",
    flowPattern: "Chaotic ad-lib layering creating rhythmic texture from repetition, beat grid secondary to vocal texture, stuttering vocal repetition, syncopation disorienting by design, voice integrated as primary production element.",
    productionFingerprint: "Distorted saturated grain throughout, cave echo creating spacious chaos, heavy distorted 808 bass, frantic triplet hi-hat rolls, synth chaos layers creating confusion and intrigue, overall experimental psychedelic atmosphere",
    culturalAnchors: "Experimental trap boundary-pushing, psychedelic drug-adjacent aesthetics, avant-garde vocal processing, youth culture influence, viral moment creation, artistic innovation focus",
    antiPatterns: "Never straightforward vocals, never acoustic instruments, never country folk, never classical, never boom-bap traditional, never minimalist sparse, never lo-fi chill",
    sunoMetatags: {
      vocalStyle: "Auto-tuned Rap",
      vocalEffect: "Heavy Auto-tune, Distortion",
      mood: "Aggressive",
      energy: "Maximum",
      texture: "Distorted saturated grain",
      instrument: "808 Bass, Triplet Hi-Hats, Chaotic Synths"
    }
  },
  "KANYE WEST": {
    sunoStyleTemplate: "Gospel Soul-Sampling Hip-Hop, Chopped Chipmunk Soul Vocals, Maximalist 808 Production, Ambitious Cinematic Vision, 90-110 BPM, Key: C Minor, Studio polished, Cathedral reverb, Heavy 808 Bass Cinematic Low-End, Gospel Choir Layers Triumphant, Chipmunk Pitched Soul Vocal Samples, Orchestral String Sweeps, Melodic Voice Rapping and Singing Emotional Conviction, Maximalist Build Multiple Beat Switches per Track, Loud Polished Master Layered Complexity, Soul Heritage Gospel Innovation Ambition, 2010s",
    sunoExcludeStyles: "country folk, minimal sparse, lo-fi chill, aggressive metal screaming, industrial harsh noise",
    sunoVocalTags: ["[melodic sampling voice]", "[ambitious delivery]", "[innovative vocal placement]", "[soulful emotional tone]"],
    sunoWeirdness: 40,
    sunoStyleInfluence: 80,
    sunoBpmRange: "90-110",
    sunoKey: "C Minor",
    vocalDNA: "Melodic male voice capable of both rapping and singing with emotional conviction. Ambitious delivery emphasizing innovation and emotional accessibility. Vocal flexibility allowing multiple approaches within single track. Soulful emotional expression.",
    flowPattern: "Flexible phrasing shifting between rap, sung passages, and ad-libs, behind-the-beat placement creating pocket, conversational accessibility with occasional melodic flourishes, rhythm control emphasizing emotional over technical.",
    productionFingerprint: "Chipmunk soul vocal samples pitched up as melodic hooks, heavy 808 bass providing cinematic low-end, gospel choir layers building triumphant atmosphere, orchestral string sweeps, chopped soul samples creating emotional texture, maximalist layered production with beat switches",
    culturalAnchors: "Hip-hop production innovation, ambitious artistic vision mythology, soul music heritage celebration, emotional vulnerability in rap, generational influence positioning, artistic evolution narrative",
    antiPatterns: "Never country folk, never minimal sparse, never lo-fi chill, never aggressive metal, never industrial harsh, never detached cold tone",
    sunoMetatags: {
      vocalStyle: "Melodic Rap",
      vocalEffect: "Auto-tune, Reverb",
      mood: "Triumphant",
      energy: "High",
      texture: "Studio polished",
      instrument: "808 Bass, Gospel Choir, Soul Samples, Orchestral Strings"
    }
  },
  "KENDRICK LAMAR": {
    sunoStyleTemplate: "Conscious Jazz-Funk Hip-Hop, Live Drum Grooves, West Coast G-Funk Soul, Storytelling Cinematic Narrative, 85-105 BPM, Key: D Minor, Raw unprocessed, Room ambience, Funk Bass Guitar Groove, Jazz Trumpet Brass Section, Live Acoustic Drums with Swing, Saxophone Solo Passages, Soul Piano Chords, Dynamic Versatile Voice Shifting Aggressive to Vulnerable, Building Intensity Verse to Climactic Bridge, Organic Raw Mix Live Room Feel, Compton West Coast Conscious Legacy, 2010s",
    sunoExcludeStyles: "repetitive trap beats, generic pop production, country folk, opera classical, overly autotune distortion",
    sunoVocalTags: ["[dynamic versatile delivery]", "[storytelling mastery]", "[emotional intelligence]", "[rhythmic precision]"],
    sunoWeirdness: 30,
    sunoStyleInfluence: 82,
    sunoBpmRange: "85-105",
    sunoKey: "D Minor",
    vocalDNA: "Dynamic versatile male voice capable of shifting between aggressive, melodic, and vulnerable delivery within single track. Storytelling mastery through vocal nuance. Emotional intelligence conveyed through phrasing control. Technical precision meets soulful expression.",
    flowPattern: "Dynamic flow shifting between aggressive bursts and vulnerable moments, behind-the-beat pocket for introspection, on-beat attack for emphasis, conversational accessibility within complex narrative structures, rhythmic control emphasizing emotional arc.",
    productionFingerprint: "Live jazz-funk instrumentation with funk bass guitar driving groove, jazz trumpet and saxophone adding harmonic richness, live acoustic drums with swing feel, soul piano chords providing warmth, West Coast G-funk influence, orchestral arrangements for cinematic moments",
    culturalAnchors: "Conscious hip-hop tradition, storytelling narrative complexity, emotional vulnerability in rap, social commentary depth, West Coast rap legacy, artistic mastery positioning",
    antiPatterns: "Never repetitive trap beats, never generic pop production, never country folk, never opera classical, never overly autotune distorted",
    sunoMetatags: {
      vocalStyle: "Rap",
      vocalEffect: "Dry, Subtle Reverb",
      mood: "Melancholic",
      energy: "Medium→High",
      texture: "Raw unprocessed",
      instrument: "Funk Bass, Jazz Trumpet, Live Drums, Saxophone, Piano"
    }
  },
  "LANA DEL REY": {
    sunoStyleTemplate: "Cinematic Dark Pop Noir, Breathy Melancholic Delivery, Vintage Hollywood Atmosphere, slow tempo 60-80 BPM, Key: G Minor, Analog warmth, Cathedral reverb, Deep Bass Rumble, Lush Orchestral Strings, Soft Pads, 2010s",
    sunoExcludeStyles: "aggressive screaming, metal hard rock, upbeat dance pop, country folk, industrial noise, bright cheerful",
    sunoVocalTags: ["[breathy soft vocal]", "[cinematic melancholic]", "[vintage noir delivery]", "[ethereal emotional tone]"],
    sunoWeirdness: 28,
    sunoStyleInfluence: 76,
    sunoBpmRange: "60-80",
    sunoKey: "G Minor",
    vocalDNA: "Breathy soft female voice with cinematic melancholic delivery and vintage Hollywood aesthetic. Vocal restraint creating space and intimacy. Emotional vulnerability conveyed through minimalist vocal approach. Lyrical storytelling emphasized over technical display.",
    flowPattern: "Spacious phrasing with extended pauses allowing song atmosphere to speak, behind-the-beat pocket creating languid feeling, minimalist syllable placement, melodic contours drifting rather than locking, vocal layering adding texture.",
    productionFingerprint: "Cinematic dark pop arrangement, analog warmth throughout, cathedral reverb creating massive space, deep bass rumble providing foundation, lush orchestral strings building emotional moments, soft pad layers, vintage Hollywood aesthetic",
    culturalAnchors: "Cinematic visual album storytelling, dark melancholic romantic narratives, vintage Americana nostalgia, film noir aesthetics, emotional vulnerability mythology, artistic control positioning",
    antiPatterns: "Never aggressive screaming, never metal hard rock, never upbeat dance pop, never country folk, never industrial noise, never bright cheerful",
    sunoMetatags: {
      vocalStyle: "Breathy Soft",
      vocalEffect: "Reverb, Delay",
      mood: "Melancholic",
      energy: "Low",
      texture: "Analog warmth",
      instrument: "Orchestral Strings, Soft Pads, Bass"
    }
  },
  ROSALÍA: {
    sunoStyleTemplate: "Experimental Flamenco-Trap Fusion, Ethereal Latin Vocal Innovation, Minimal Spanish Beat, 95-110 BPM, Key: E Minor, Granular texture, Cave echo, Deep Minimal Bass, Percussive Clicks, Flamenco Strings, Distorted Guitar, 2020s",
    sunoExcludeStyles: "country folk, classical opera, lo-fi chill, aggressive screaming, industrial noise, reggaeton dembow",
    sunoVocalTags: ["[ethereal powerful voice]", "[experimental vocal processing]", "[latin vocal tradition]", "[innovative phrasing]"],
    sunoWeirdness: 32,
    sunoStyleInfluence: 74,
    sunoBpmRange: "95-110",
    sunoKey: "E Minor",
    vocalDNA: "Ethereal powerful female voice with Spanish inflection and innovative vocal processing. Capable of both traditional flamenco vocals and experimental contemporary techniques. Emotional expression through vocal texture and control. Cultural authenticity maintained through innovation.",
    flowPattern: "Experimental phrasing mixing traditional flamenco vocal ornamentation with contemporary syncopation, percussive vocal elements integrated into rhythm, dynamic range emphasizing emotional moments, cultural vocal techniques honored through modern arrangement.",
    productionFingerprint: "Granular texture glitch processing, cave echo creating spacious atmosphere, deep minimal bass foundation, percussive clicks as primary rhythm element, flamenco string arrangements meeting contemporary production, distorted guitar layers",
    culturalAnchors: "Spanish flamenco tradition modernization, Latin cultural pride, experimental innovation boundary-pushing, visual artistic collaboration, multilingual artistic identity, contemporary classical fusion",
    antiPatterns: "Never country folk, never classical opera traditional, never lo-fi chill, never aggressive screaming, never industrial noise, never reggaeton dembow",
    sunoMetatags: {
      vocalStyle: "Power",
      vocalEffect: "Reverb, Delay",
      mood: "Dark",
      energy: "Medium",
      texture: "Granular texture",
      instrument: "Flamenco Strings, Bass, Percussive Clicks"
    }
  },
  "BILLIE EILISH": {
    sunoStyleTemplate: "Dark Whisper Pop Intimate, Minimal Lo-Fi Production, Heavy Bass Foundation, 100-120 BPM, Key: G# Minor, Lo-fi grit, Close-mic presence, Heavy 808 Bass, Dark Synth Pads, Minimal Click Percs, 2020s",
    sunoExcludeStyles: "bright cheerful pop, aggressive screaming, country folk, opera classical, heavy metal, loud industrial noise",
    sunoVocalTags: ["[breathy whisper voice]", "[dark intimate delivery]", "[minimal vocal processing]", "[emotional vulnerability]"],
    sunoWeirdness: 20,
    sunoStyleInfluence: 80,
    sunoBpmRange: "100-120",
    sunoKey: "G# Minor",
    vocalDNA: "Breathy whisper female voice with dark intimate delivery and minimal vocal processing. Close-mic recording capturing breath and subtle textures. Emotional vulnerability emphasized through restraint. Zero oversinging, maximum authenticity.",
    flowPattern: "Spacious phrasing with extended pauses, minimal syllable placement emphasizing silence, behind-the-beat pocket creating distance, breathy vocal texture as primary production element, dynamic range limited but emotionally impactful.",
    productionFingerprint: "Lo-fi grit creating intimate atmosphere, close-mic presence capturing breath details, heavy 808 bass contrasting with soft vocals, dark synth pads providing harmonic support, minimal click percussion, overall dark minimal aesthetic",
    culturalAnchors: "Millennial dark pop innovation, mental health awareness in lyrics, intimate authenticity mythology, bedroom pop aesthetic, generational voice positioning, artistic control emphasis",
    antiPatterns: "Never bright cheerful pop, never aggressive screaming, never country folk, never opera classical, never heavy metal, never loud industrial noise",
    sunoMetatags: {
      vocalStyle: "Whisper",
      vocalEffect: "Reverb",
      mood: "Dark",
      energy: "Low",
      texture: "Lo-fi",
      instrument: "808 Bass, Dark Synth Pads, Minimal Percs"
    }
  },
  ORELSAN: {
    sunoStyleTemplate: "French Alt-Rap Electronic, Synth-Driven Introspective Hip-Hop, Cinematic Pop-Rap Hybrid, Witty Narrative Storytelling, 85-100 BPM, Key: D Minor, Studio polished, Room ambience, Analog Synth Layers, Punchy Electronic Drum Programming, Warm Sub-Bass Foundation, Orchestral Swells at Emotional Peaks, Conversational Natural Voice Intellectual Delivery, Dynamic Build from Intimate Verse to Cinematic Chorus, Polished Clean Mix Wide Soundstage, Norman Identity Social Commentary Wit, 2010s",
    sunoExcludeStyles: "aggressive trap, heavy autotune, dark orchestral, minimalist sparse, country folk, opera classical",
    sunoVocalTags: ["[conversational storytelling]", "[poetic narrative voice]", "[warm introspective tone]", "[intellectual delivery]"],
    sunoWeirdness: 18,
    sunoStyleInfluence: 76,
    sunoBpmRange: "85-100",
    sunoKey: "D Minor",
    vocalDNA: "Conversational male voice with poetic narrative sensibility and warm introspective tone. Intellectual positioning through vocal authenticity and lyrical complexity. Emotional accessibility without melodrama. Organic delivery emphasizing authenticity.",
    flowPattern: "Behind-the-beat phrasing creating pocket comfort, storytelling focus with clear word articulation, conversational accessibility within complex rhyme schemes, dynamic phrasing supporting narrative emotional arc.",
    productionFingerprint: "Synth-driven electronic production with analog warmth, cinematic orchestral swells building emotional peaks, punchy electronic drum programming, layered synth textures creating atmosphere, warm sub-bass foundation, Skread signature production with pop-rap accessibility",
    culturalAnchors: "French poetic rap tradition, introspective narrative storytelling, intellectual artistic positioning, Norman cultural identity, social commentary depth, literary artistic credibility",
    antiPatterns: "Never aggressive trap, never heavy autotune, never dark orchestral, never minimalist sparse, never country folk, never opera classical",
    sunoMetatags: {
      vocalStyle: "Rap",
      vocalEffect: "Subtle Reverb",
      mood: "Melancholic",
      energy: "Medium",
      texture: "Studio polished",
      instrument: "Analog Synths, Electronic Drums, Sub-Bass, Orchestral Strings"
    }
  },
  "BURNA BOY": {
    sunoStyleTemplate: "Afrobeats Dancehall Groove, Smooth Melodic Hook Delivery, Global Infectious Energy, 96-108 BPM, Key: F Minor, Analog warmth, Open air, Warm Bouncy Bass, Afro Drums, Layered Synth Pads, 2020s",
    sunoExcludeStyles: "aggressive metal screaming, dark orchestral horror, minimalist sparse, country folk, opera classical",
    sunoVocalTags: ["[smooth melodic delivery]", "[afrobeats phrasing]", "[infectious groove locking]", "[uplifting confident tone]"],
    sunoWeirdness: 16,
    sunoStyleInfluence: 80,
    sunoBpmRange: "96-108",
    sunoKey: "F Minor",
    vocalDNA: "Smooth melodic male voice with afrobeats phrasing and infectious groove-locking ability. Conversational accessibility with uplifting confident tone. Natural vibrato adding warmth. Nigerian inflection flavorful.",
    flowPattern: "Groove-locking placement emphasizing infectious bounce, syncopated afrobeats phrasing, conversational verses building to melodic chorus moments, call-and-response moments with infectious energy throughout.",
    productionFingerprint: "Analog warmth throughout, open air space with wide stereo, warm bouncy bass providing groove pocket, authentic afro drum patterns, layered synth pads providing harmonic richness, infectious positive atmosphere",
    culturalAnchors: "Afrobeats global movement leadership, African cultural pride, infectious groove celebration, party culture energy, international diaspora connection, pan-African influence",
    antiPatterns: "Never aggressive metal screaming, never dark orchestral, never minimalist sparse, never country folk, never opera classical, never depressing mood",
    sunoMetatags: {
      vocalStyle: "Melodic Rap",
      vocalEffect: "Reverb",
      mood: "Uplifting",
      energy: "High",
      texture: "Analog warmth",
      instrument: "Afro Drums, Bass, Synth Pads"
    }
  },
  "BAD BUNNY": {
    sunoStyleTemplate: "Reggaeton-Trap Urban Fusion, Rhythmic Latin Melodic Flow, Bright Synth-Heavy Production, 92-105 BPM, Key: A Minor, Digital crisp, Open air, Bouncy Reggaeton Bass, Synthetic Congas, Riddim Drums, 2020s",
    sunoExcludeStyles: "classical opera, metal screaming, slow ballad, industrial noise, country folk, minimalist sparse",
    sunoVocalTags: ["[smooth latin melodic]", "[reggaeton phrasing]", "[rhythmic groove locking]", "[confident uplifting tone]"],
    sunoWeirdness: 18,
    sunoStyleInfluence: 80,
    sunoBpmRange: "92-105",
    sunoKey: "A Minor",
    vocalDNA: "Smooth Latin melodic male voice with reggaeton phrasing and rhythmic groove-locking ability. Confident uplifting delivery emphasizing catchiness. Puerto Rican inflection authentic and flavorful. Conversational accessibility.",
    flowPattern: "Reggaeton rhythm-locked placement emphasizing infectious bounce, syncopated Latin phrasing, conversational verses with memorable hooks, call-and-response moments with infectious energy throughout.",
    productionFingerprint: "Digital crisp clarity, open air space, bouncy reggaeton bass with punchy attack, synthetic conga percussion layers, riddim drum patterns, bright synth-heavy production, infectious uplifting atmosphere",
    culturalAnchors: "Reggaeton global movement, Puerto Rican cultural pride, Latin music innovation, urban contemporary positioning, infectious groove celebration, international diaspora connection",
    antiPatterns: "Never classical opera, never metal screaming, never slow ballad, never industrial noise, never country folk, never minimalist sparse",
    sunoMetatags: {
      vocalStyle: "Melodic Rap",
      vocalEffect: "Auto-tune, Reverb",
      mood: "Uplifting",
      energy: "High",
      texture: "Crisp Digital",
      instrument: "Reggaeton Bass, Congas, Riddim Drums"
    }
  },
  "DAFT PUNK": {
    sunoStyleTemplate: "French House Robotic Soul, Disco-Funk Groove, Vocoded Electronic Delivery, 120-130 BPM, Key: A Minor, Digital crisp, Wide stereo reverb, Punchy Synth Bass, Pulsing House Drums, Layered Synth Strings, 2000s",
    sunoExcludeStyles: "aggressive metal screaming, country folk, classical opera, lo-fi chill, minimalist sparse, dark orchestral",
    sunoVocalTags: ["[vocoded robotic voice]", "[electronic soul delivery]", "[house phrasing]", "[funky confident tone]"],
    sunoWeirdness: 26,
    sunoStyleInfluence: 78,
    sunoBpmRange: "120-130",
    sunoKey: "A Minor",
    vocalDNA: "Vocoded robotic voice with electronic soul delivery maintaining human musicality. House phrasing with funky confident tone. Vocal processing as primary artistic choice rather than effect. Synthetic yet soulful expression.",
    flowPattern: "House rhythm-locked placement with funky syncopation, vocoded vocal lines melodic and memorable, conversational accessibility within electronic context, rhythmic groove emphasized throughout.",
    productionFingerprint: "French house aesthetic, digital crisp clarity, wide stereo reverb creating space, punchy synth bass providing groove pocket, pulsing house drum patterns, layered synth string arrangements, disco-funk influence throughout",
    culturalAnchors: "French house movement innovation, disco-funk heritage celebration, electronic music mastery, funk groove prioritization, robotic soul mythology, generational influence positioning",
    antiPatterns: "Never aggressive metal screaming, never country folk, never classical opera, never lo-fi chill, never minimalist sparse, never dark orchestral",
    sunoMetatags: {
      vocalStyle: "Vocoder",
      vocalEffect: "Vocoder",
      mood: "Uplifting",
      energy: "High",
      texture: "Digital crisp",
      instrument: "Synth Bass, House Drums, Synth Strings"
    }
  },
  SOOLKING: {
    sunoStyleTemplate: "Modern Raï-Pop Algerian, Melodic French-Arabic Rap-Singing, Warm Mediterranean Groove, 95-112 BPM, Key: C Minor, Studio polished, Wide reverb, Warm 808 Bass, Oriental Piano Melodies, Modern Accordion Layers, Darbuka-Trap Hybrid Drums, Mandole Accents, Smooth Raï Tenor French-Arabic Melodic Delivery, Emotional Build Intimate Verse to Catchy Pop-Raï Chorus, Warm Polished Mix Oriental-Pop Balance, Algiers-Paris Raï-Pop Modern Pioneer, 2020s",
    sunoExcludeStyles: "dark depressing atmosphere, metal aggressive, classical opera, industrial noise, hard drill, country folk, boom-bap traditional",
    sunoVocalTags: ["[smooth raï tenor]", "[French-Arabic bilingual flow]", "[melodic pop-raï delivery]", "[warm emotional singing]"],
    sunoWeirdness: 14,
    sunoStyleInfluence: 80,
    sunoBpmRange: "95-112",
    sunoKey: "C Minor",
    vocalDNA: "Smooth raï tenor with French-Arabic bilingual melodic flow. Warm emotional singing blending modern pop accessibility with raï ornamentation. Voice carries both street credibility and pop polish. Algerian accent natural and authentic, switching fluidly between darija and French.",
    flowPattern: "Melodic rap-singing alternating French verses with Arabic melodic hooks. Raï ornamentation on chorus sustained notes. Pop-friendly verse structure with catchy refrains. Smooth rhythmic pocket blending trap timing with raï groove.",
    productionFingerprint: "Warm 808 bass providing modern groove, oriental piano melodies as harmonic foundation, modern accordion layers adding raï authenticity, darbuka-trap hybrid drum patterns, mandole accents on melodic passages, polished studio clarity with warm Mediterranean feel",
    culturalAnchors: "Algerian diaspora anthem legacy, Algiers-Paris cultural bridge, modern raï-pop pioneer, artistic depth and emotional maturity, Algerian diaspora voice, raï modernization without losing roots",
    antiPatterns: "Never afro-dancehall, never Caribbean riddim, never dark orchestral, never industrial, never hard drill, never boom-bap, never pure anglophone style",
    sunoMetatags: {
      vocalStyle: "Melodic Rap",
      vocalEffect: "Auto-tune Light, Reverb",
      mood: "Uplifting",
      energy: "Medium→High",
      texture: "Studio polished",
      instrument: "808 Bass, Oriental Piano, Accordion, Darbuka, Mandole"
    }
  },
  STROMAE: {
    sunoStyleTemplate: "Belgian Electro-World Pop, Rumba Congolaise Rhythms, Dark Danceable Chanson, Theatrical Dramatic Performance, 100-120 BPM, Key: E Minor, Digital crisp, Room ambience, African Percussion Polyrhythms, Synth Bass Driving Groove, Congolaise Drum Patterns, Marimba Melodic Textures, Electronic String Arrangements, Clear Dynamic Voice Whisper to Powerful Projection, Danceable Build African Rhythms to Electronic Climax, Clean Digital Master Precise Stereo Imaging, Rwandan-Belgian Heritage Jacques Brel Chanson Drama, 2010s",
    sunoExcludeStyles: "country rock metal, opera classical, aggressive dark orchestral, loud noise industrial, acoustic guitar warmth, generic trap",
    sunoVocalTags: ["[clear intelligent delivery]", "[witty lyrical phrasing]", "[dramatic vocal dynamics]", "[chanson-meets-electro tone]"],
    sunoWeirdness: 30,
    sunoStyleInfluence: 82,
    sunoBpmRange: "100-120",
    sunoKey: "E Minor",
    vocalDNA: "Clear intelligent male voice with dramatic dynamics shifting between whisper and powerful projection. Belgian-Rwandan heritage infusing phrasing with African rhythmic sensibility. Chanson française tradition meets electronic pop. Emotional range from dark humor to raw vulnerability.",
    flowPattern: "Rhythmic syllable placement locked to African polyrhythmic percussion, on-beat emphasis with danceable syncopation, word articulation emphasized for wit comprehension, dramatic vocal dynamics building to powerful choruses.",
    productionFingerprint: "Rumba congolaise and African percussion patterns as rhythmic foundation, electronic synth bass driving groove, marimba and world percussion textures, electronic string arrangements, danceable world-pop fusion production, Jacques Brel dramatic chanson influence",
    culturalAnchors: "Belgian electro-pop innovation, intellectual witty wordplay, Rwandan-Belgian identity, rumba congolaise heritage, dark introspection balanced with pop accessibility, social commentary through humor",
    antiPatterns: "Never country rock metal, never opera classical, never aggressive dark orchestral, never loud industrial noise, never acoustic guitar warmth",
    sunoMetatags: {
      vocalStyle: "Melodic Rap",
      vocalEffect: "Reverb, Subtle Vocoder",
      mood: "Melancholic",
      energy: "Medium→High",
      texture: "Digital crisp",
      instrument: "African Percussion, Synth Bass, Marimba, Electronic Strings"
    }
  },
  SCH: {
    sunoStyleTemplate: "Cinematic Mafieux Rap, Dark Orchestral Strings, Italian Noir Atmosphere, Storytelling Narratif, 125-140 BPM, Key: C# Minor, Studio polished, Cathedral reverb, Dark Orchestral String Sweeps, Deep Cinematic 808 Bass, Dramatic Piano Movements, Choir Pads Ominous, Tense Percussion Build-Ups, Deep Grave Baritone Commanding Theatrical Delivery, Slow Cinematic Build Tension to Explosive Climax, Polished Cinematic Mix Wide Stereo Depth, Mediterranean Mafia Saga Cinematic Universe, 2020s",
    sunoExcludeStyles: "bright happy pop, festive energy, country folk, acoustic soft, lo-fi chill, generic trap, boom-bap traditional, dancehall reggaeton",
    sunoVocalTags: ["[deep grave theatrical baritone]", "[cinematic narrative delivery]", "[commanding authoritative tone]", "[dramatic pause mastery]"],
    sunoWeirdness: 32,
    sunoStyleInfluence: 82,
    sunoBpmRange: "125-140",
    sunoKey: "C# Minor",
    vocalDNA: "Deep grave baritone with theatrical commanding presence. Cinematic narrative delivery treating each track as a film scene. Authoritative tone conveying power and menace. Dramatic pause mastery creating tension. Voice used as storytelling instrument within orchestral arrangements.",
    flowPattern: "Cinematic phrasing with dramatic tension-release cycles. Slow deliberate verse delivery building to explosive chorus moments. Narrative focus with clear word articulation for story comprehension. Rhythmic control emphasizing dramatic effect over technical speed.",
    productionFingerprint: "Dark orchestral string sweeps creating cinematic atmosphere, deep cinematic 808 bass rumbling beneath, dramatic piano movements supporting emotional peaks, ominous choir pads adding menace, tense percussion build-ups, Italian mafia film atmosphere, polished mix with cathedral reverb creating massive space",
    culturalAnchors: "Mafia saga cinematic universe, southern France street mythology meets Italian cinema, Mediterranean gangster narrative, cinematic storytelling ambition, artistic evolution through dark alter ego, orchestral rap visionary",
    antiPatterns: "Never bright happy pop, never festive celebratory, never lo-fi chill, never generic trap patterns, never acoustic soft warmth, never boom-bap traditional",
    sunoMetatags: {
      vocalStyle: "Power Rap",
      vocalEffect: "Reverb, Compressed",
      mood: "Dark",
      energy: "Medium→High",
      texture: "Studio polished",
      instrument: "Orchestral Strings, 808 Bass, Piano, Choir Pads"
    }
  },
  WERENOI: {
    sunoStyleTemplate: "Melodic Street Rap, Warm Melancholic Flow, Emotional Autotune Sensitivity, Nostalgic Night Drive, 125-138 BPM, Key: E Minor, Tape saturation, Room ambience, Melancholic Piano Arpeggios, Deep Warm 808 Bass, Soft Pad Layers, Clean Hi-Hat Patterns, Warm Melodic Autotune Sensitive Tenor, Gentle Build Intimate Verse to Emotional Hook, Warm Analog Mix Round Low-End, Seine-Saint-Denis Melodic Street Soul, 2020s",
    sunoExcludeStyles: "aggressive drill, hard trap, metal screaming, industrial noise, country folk, opera classical, festive party energy, boom-bap raw",
    sunoVocalTags: ["[warm sensitive tenor]", "[melodic autotune flow]", "[emotional vulnerable delivery]", "[nostalgic melancholic phrasing]"],
    sunoWeirdness: 12,
    sunoStyleInfluence: 82,
    sunoBpmRange: "125-138",
    sunoKey: "E Minor",
    vocalDNA: "Warm sensitive tenor with melodic autotune applied smoothly enhancing emotional quality. Vulnerable delivery conveying authenticity and melancholy. Old school meets new school fusion in vocal approach. Nostalgic phrasing suggesting both pain and hope.",
    flowPattern: "Melodic flow riding behind the beat with emotional weight. Syllables stretched for melodic effect. Verses build from intimate conversational delivery to emotional melodic hooks. Rhythmic pocket comfortable and accessible.",
    productionFingerprint: "Melancholic piano arpeggios as melodic foundation, deep warm 808 bass with round sustained tail, soft synth pad layers creating atmosphere, clean hi-hat patterns with subtle swing, tape saturation adding analog warmth, overall warm and emotional sonic space",
    culturalAnchors: "Seine-Saint-Denis street reality, melodic street rap evolution, emotional vulnerability in gangster context, immigrant identity themes, success and loss narratives, 93 cultural pride",
    antiPatterns: "Never aggressive hard drill, never metal or screaming, never industrial noise, never festive party energy, never raw boom-bap, never detached cold delivery",
    sunoMetatags: {
      vocalStyle: "Melodic Autotune",
      vocalEffect: "Auto-tune, Reverb",
      mood: "Melancholic",
      energy: "Medium",
      texture: "Tape-Saturated",
      instrument: "Piano, 808 Bass, Soft Pads"
    }
  },
  MAES: {
    sunoStyleTemplate: "Melodic Street Anthem Rap, Raw-to-Catchy Hybrid, Hard Melody Street Pop, 128-142 BPM, Key: G Minor, Studio polished, Underground bunker, Heavy Punchy 808 Bass, Dark Piano Melody Hooks, Aggressive Hi-Hat Rolls, Dramatic Synth Stabs, Deep Versatile Voice Alternating Raw and Melodic, Dynamic Build Hard Verse to Catchy Pop Hook, Polished Mix Hard Low-End Clean Top, Banlieue Street Reality Pop Crossover, 2020s",
    sunoExcludeStyles: "soft acoustic, country folk, opera classical, lo-fi chill, slow ballad, experimental avant-garde, boom-bap traditional",
    sunoVocalTags: ["[deep versatile delivery]", "[raw-to-melodic shifting]", "[street authority tone]", "[catchy hook instinct]"],
    sunoWeirdness: 15,
    sunoStyleInfluence: 82,
    sunoBpmRange: "128-142",
    sunoKey: "G Minor",
    vocalDNA: "Deep versatile male voice alternating between raw aggressive delivery and catchy melodic hooks. Street authority tone with pop crossover instinct. Capable of hard rap verses transitioning to radio-friendly chorus. Natural hook-writing ability.",
    flowPattern: "Hard aggressive verses with rapid syllable delivery shifting to melodic catchy hooks. Rhythmic versatility between street rap and pop accessibility. On-beat aggressive attacks in verses, behind-the-beat melodic pocket in choruses. Dynamic flow matching production energy.",
    productionFingerprint: "Heavy punchy 808 bass as foundation, dark piano melody hooks creating memorable moments, aggressive hi-hat rolls, dramatic synth stabs punctuating, polished studio clarity, hard low-end combined with clean top-end for street-pop crossover sound",
    culturalAnchors: "Banlieue street reality narratives, raw-to-mainstream crossover success, melodic street rap evolution, Franco-Moroccan identity, street credibility maintained through pop success, hard-melodic duality pioneer",
    antiPatterns: "Never soft acoustic, never country folk, never lo-fi chill, never slow ballad, never experimental avant-garde, never boom-bap traditional",
    sunoMetatags: {
      vocalStyle: "Melodic Rap",
      vocalEffect: "Subtle Auto-tune, Reverb",
      mood: "Aggressive",
      energy: "High",
      texture: "Studio polished",
      instrument: "808 Bass, Piano, Hi-Hats, Synth Stabs"
    }
  },
  THEODORA: {
    sunoStyleTemplate: "Bouyon Afro-Urbain Fusion, Hyperpop Energy Burst, Multi-Genre Dancehall Pop, Explosive Rhythmic Carnival, 100-120 BPM, Key: F Minor, Digital crisp, Open air, Bouncy Caribbean Bass, Bouyon Percussion Patterns, Synth Brass Stabs, Electronic Textures, Powerful Female Voice Rap-Singing Switch-Up, Explosive Build Festival Drop to Dancehall Groove, Bright Polished Mix Maximum Energy, 93 Banlieue Meets Congo Meets Caribbean, 2020s",
    sunoExcludeStyles: "slow ballad, dark depressing, country folk, opera classical, lo-fi chill, boom-bap traditional, minimal sparse, soft acoustic",
    sunoVocalTags: ["[powerful female rap-singing]", "[explosive energetic delivery]", "[multilingual phrasing]", "[dancehall-influenced flow]"],
    sunoWeirdness: 35,
    sunoStyleInfluence: 75,
    sunoBpmRange: "100-120",
    sunoKey: "F Minor",
    vocalDNA: "Powerful female voice with explosive energy and versatile rap-singing ability. Multilingual phrasing blending French, Creole, and Lingala. Dancehall-influenced rhythmic delivery. Capable of rapid genre-switching within single track. Festival-level projection.",
    flowPattern: "Explosive rhythmic bursts with Caribbean syncopation. Genre-switching flow moving between rap, singing, dancehall toasting. High energy maintained throughout with dynamic peaks. Percussive consonant delivery with melodic hooks.",
    productionFingerprint: "Bouyon percussion as rhythmic foundation, bouncy Caribbean bass with punchy attack, synth brass stabs adding carnival energy, electronic textures and hyperpop elements layered, bright digital clarity, festival-level energy production, multi-genre fusion aesthetic",
    culturalAnchors: "Franco-Congolese identity, bouyon genre pioneer in France, 93 banlieue culture meets Caribbean energy, Kongolese heritage pride, Gen Z cultural fusion, viral dancehall energy",
    antiPatterns: "Never slow or depressing, never dark minimal, never lo-fi chill, never acoustic soft, never boom-bap traditional, never sparse production",
    sunoMetatags: {
      vocalStyle: "Power",
      vocalEffect: "Reverb, Auto-tune",
      mood: "Uplifting",
      energy: "Maximum",
      texture: "Crisp Digital",
      instrument: "Bouyon Percussion, Caribbean Bass, Synth Brass, Electronic Textures"
    }
  },
  LITHE: {
    sunoStyleTemplate: "Spectral Dark R&B, Futuristic Trap Soul, Nocturnal Lo-Fi Atmosphere, Immersive Ghostly Textures, 120-135 BPM, Key: Db Minor, Lo-fi grit, Void space, Deep Submerged 808, Ghostly Pad Layers, Sparse Glitch Percussion, Reverb-Drenched Melodic Elements, Smooth Dark Tenor Spectral Autotune, Slow Haunting Build to Immersive Drop, Dark Lo-Fi Mix Submerged Frequencies, Melbourne Underground Nocturnal Soul, 2020s",
    sunoExcludeStyles: "bright happy pop, festive energy, country folk, opera classical, boom-bap traditional, aggressive drill, hard trap, clean polished pop",
    sunoVocalTags: ["[smooth dark tenor]", "[spectral autotune processing]", "[ghostly intimate delivery]", "[nocturnal emotional tone]"],
    sunoWeirdness: 25,
    sunoStyleInfluence: 78,
    sunoBpmRange: "120-135",
    sunoKey: "Db Minor",
    vocalDNA: "Smooth dark tenor with spectral autotune processing creating ghostly quality. Intimate delivery suggesting nocturnal vulnerability. Voice submerged within production creating immersive texture. Futuristic soul quality balancing warmth and digital processing.",
    flowPattern: "Behind-the-beat placement creating haunting lag effect. Melodic rap-singing with spectral vocal layers. Syllables drift through production space rather than locking rigidly. Sparse delivery allowing atmosphere to breathe.",
    productionFingerprint: "Deep submerged 808 bass creating underwater rumble, ghostly pad layers drifting through mix, sparse glitch percussion creating rhythmic tension, reverb-drenched melodic elements, lo-fi grit and tape warmth, overall dark immersive nocturnal atmosphere",
    culturalAnchors: "Melbourne underground R&B scene, nocturnal emotional vulnerability, futuristic spectral aesthetics, hip-hop meets soul innovation, dark introspective narratives, Fall Back viral breakthrough",
    antiPatterns: "Never bright happy pop, never festive energy, never country folk, never aggressive drill, never clean polished pop, never boom-bap traditional",
    sunoMetatags: {
      vocalStyle: "Melodic Autotune",
      vocalEffect: "Auto-tune, Reverb, Delay",
      mood: "Dark",
      energy: "Low→Medium",
      texture: "Lo-fi",
      instrument: "Sub-808, Ghostly Pads, Glitch Percs"
    }
  },
  VACRA: {
    sunoStyleTemplate: "Sensual Rap-Chanté Romantique, Smooth Pop-Trap Melodic, Warm Intimate Love Ballad, Seductive Night Groove, 100-118 BPM, Key: Bb Minor, Studio polished, Room ambience, Warm Round 808 Bass, Melodic Guitar Riffs, Soft Synth Pad Layers, Clean Hi-Hat Patterns, Smooth High Tenor Seductive Crooning, Gentle Build Whispered Verse to Soaring Romantic Hook, Warm Polished Mix Intimate Stereo, Mysterious Romantic French Rap-Chanté, 2020s",
    sunoExcludeStyles: "aggressive drill, dark orchestral, metal screaming, industrial noise, country folk, opera classical, hard trap, boom-bap raw",
    sunoVocalTags: ["[smooth high tenor]", "[seductive crooning delivery]", "[romantic intimate phrasing]", "[soft melodic versatility]"],
    sunoWeirdness: 20,
    sunoStyleInfluence: 82,
    sunoBpmRange: "100-118",
    sunoKey: "Bb Minor",
    vocalDNA: "Smooth high tenor venturing into high notes with seductive crooning quality. Romantic intimate delivery celebrating sensuality and love. Soft melodic versatility between rap phrasing and singing. Mysterious persona adding depth to vocal performance.",
    flowPattern: "Smooth melodic flow prioritizing romance and sensuality over technical display. Behind-the-beat pocket creating seductive laid-back feel. Verses whispered and intimate building to soaring romantic hooks. Rhythmic phrasing emphasizing groove and mood.",
    productionFingerprint: "Warm round 808 bass providing groove, melodic guitar riffs adding romantic texture, soft synth pad layers creating intimate atmosphere, clean hi-hat patterns, polished studio clarity, overall warm romantic production aesthetic",
    culturalAnchors: "Mysterious romantic persona, French rap-chanté tradition, sensuality and love celebration, Fontainebleau identity, Pygmalion artistic concept, anonymous artist mythology",
    antiPatterns: "Never aggressive drill or hard trap, never dark orchestral, never metal or screaming, never industrial noise, never boom-bap raw, never cold detached delivery",
    sunoMetatags: {
      vocalStyle: "Soft Melodic Rap",
      vocalEffect: "Reverb, Subtle Auto-tune",
      mood: "Romantic",
      energy: "Medium",
      texture: "Studio polished",
      instrument: "808 Bass, Guitar, Soft Synth Pads"
    }
  },
  AUGXST: {
    sunoStyleTemplate: "Intimate Cinematic R&B, Melodic Rap-Singing Hybrid, Warm Emotional Vulnerability, Dreamy Atmospheric Soul, 75-90 BPM, Key: Ab Major, Warm analog saturation, Spacious intimate reverb, Lush Pad Layers, Soft Round Sub Bass, Rhodes Electric Piano, Ambient Guitar Textures, Delicate Hi-Hat Taps, Smooth Warm Tenor Rap-Singing Natural Voice, Gentle Build Whispered Verse to Soaring Melodic Hook, Warm Cinematic Master Wide Stereo Depth, Fashion-Forward Boston Soul Late-Night Emotion, 2020s Modern R&B",
    sunoExcludeStyles: "afro trap, glitchy experimental, harsh distortion, aggressive trap, heavy 808, country rock, metal, opera, boom-bap, drill, hard bass, industrial, vocoder heavy, basic autotune pitch correction",
    sunoVocalTags: ["[warm smooth tenor]", "[natural rap-singing delivery]", "[intimate whispered verses]", "[soaring melodic hooks]", "[emotional vulnerability]"],
    sunoWeirdness: 15,
    sunoStyleInfluence: 82,
    sunoBpmRange: "75-90",
    sunoKey: "Ab Major",
    vocalDNA: "Warm smooth tenor with natural grain and emotional transparency. Rap-singing hybrid where spoken verses flow seamlessly into melodic hooks without hard transitions. Intimate whispered delivery in verses building to soaring open-chested singing in choruses. No heavy vocoder or autotune — voice carries raw, organic, vulnerable.",
    flowPattern: "Fluid rap-singing where syllables glide between spoken word and melody. Verses delivered in intimate whispered cadence with rhythmic phrasing. Choruses open up into full melodic singing with sustained notes. Syllable placement rides behind the beat creating dreamy laid-back feel.",
    productionFingerprint: "Lush ambient pad layers creating cinematic depth, soft sub bass with rounded warmth, Rhodes electric piano chords with gentle shimmer, ambient reverb-drenched guitar textures, delicate programmed hi-hats with minimal percussion, spacious mix with wide stereo imaging, tape-warm saturation on vocals",
    culturalAnchors: "Boston independent artist identity, cinematic emotional storytelling, fashion-forward aesthetic (Gucci/Demna Milan connection), manifestation through music, intimate late-night atmosphere, vulnerability as strength, from-nothing-to-something narrative",
    antiPatterns: "Never afro trap or dancehall energy, never glitchy experimental textures, never heavy vocoder or pitch-corrected robotic vocals, never aggressive hard-hitting 808s, never fast BPM party music, never basic trap patterns, never harsh distorted production",
    sunoMetatags: {
      vocalStyle: "Rap-Singing",
      vocalEffect: "Light Reverb, Warm Saturation",
      mood: "Intimate",
      energy: "Low→Medium",
      texture: "Warm Analog",
      instrument: "Rhodes Piano, Ambient Pads, Sub Bass, Guitar Textures"
    }
  },
  "THE WEEKND": {
    sunoStyleTemplate: "Dark Synth-Pop R&B, Nocturnal Falsetto Darkness, 80s Retro-Futuristic Production, Cinematic Lonely Drive, 100-120 BPM, Key: Ab Minor, Studio polished, Wide stereo reverb, Pulsing Analog Synths, Deep Sub Bass, Crisp Drum Machine, Lush String Pads, Breathy Dark Falsetto Layered Harmonies, Dynamic Build Dark Verse to Soaring Synth Chorus, Polished Hi-Fi Mix Maximum Stereo Width, Toronto After-Hours Melancholic Hedonism, 2020s",
    sunoExcludeStyles: "country folk, boom-bap traditional, metal screaming, opera classical, acoustic soft, bright cheerful pop, reggaeton dembow",
    sunoVocalTags: ["[breathy dark falsetto]", "[layered vocal harmonies]", "[nocturnal emotional delivery]", "[Michael Jackson-influenced runs]"],
    sunoWeirdness: 22, sunoStyleInfluence: 80, sunoBpmRange: "100-120", sunoKey: "Ab Minor",
    vocalDNA: "Breathy dark falsetto with layered harmonies creating ethereal nocturnal atmosphere. Michael Jackson-influenced vocal runs and ad-libs. Emotional delivery shifting between vulnerability and hedonistic confidence. Voice treated as primary melodic instrument.",
    flowPattern: "Melodic phrasing with sustained falsetto notes over synth-driven production. Behind-the-beat pocket creating languid nocturnal feel. Verse intimacy building to soaring chorus moments. R&B melisma balanced with pop accessibility.",
    productionFingerprint: "Pulsing analog synths creating 80s retro-futuristic atmosphere, deep sub bass foundation, crisp drum machine patterns, lush string pad layers, wide stereo reverb creating cinematic space, overall dark nocturnal aesthetic with pop polish",
    culturalAnchors: "Toronto after-hours culture, hedonistic melancholy, dark romantic narratives, 80s retro-futurism, cinematic visual albums, global pop R&B dominance",
    antiPatterns: "Never country folk, never boom-bap, never metal screaming, never acoustic soft, never bright cheerful, never reggaeton",
    sunoMetatags: { vocalStyle: "Falsetto", vocalEffect: "Reverb, Delay", mood: "Dark", energy: "Medium", texture: "Studio polished", instrument: "Analog Synths, Sub Bass, Drum Machine, String Pads" }
  },
  SZA: {
    sunoStyleTemplate: "Neo-Soul R&B Modern, Breathy Vulnerable Confession, Organic Warm Production, Emotional Intimate Storytelling, 80-100 BPM, Key: Db Major, Analog warmth, Room ambience, Warm Bass Guitar, Soft Rhodes Piano, Organic Live Drums, Lush Vocal Layers, Breathy Alto Vulnerable Emotional Delivery, Gentle Organic Build to Soaring Vocal Climax, Warm Organic Mix Natural Feel, TDE Soul Confessional Intimacy, 2020s",
    sunoExcludeStyles: "aggressive trap, metal screaming, industrial noise, country folk, opera classical, hard drill, fast tempo party",
    sunoVocalTags: ["[breathy vulnerable alto]", "[emotional confessional delivery]", "[layered vocal harmonies]", "[soulful R&B phrasing]"],
    sunoWeirdness: 20, sunoStyleInfluence: 80, sunoBpmRange: "80-100", sunoKey: "Db Major",
    vocalDNA: "Breathy vulnerable alto with emotional confessional delivery. Layered vocal harmonies creating rich texture. Soulful R&B phrasing with neo-soul influence. Capable of shifting between whispered intimacy and powerful belted moments.",
    flowPattern: "Behind-the-beat organic phrasing with emotional weight. Conversational verses building to melodic soaring choruses. Syllable placement emphasizing emotional truth over technical display. Dynamic range from whisper to full-voice belt.",
    productionFingerprint: "Warm organic production with live instrumentation feel, bass guitar providing groove, soft Rhodes piano chords, organic drum programming with live feel, lush vocal layer stacking, overall warm intimate atmosphere",
    culturalAnchors: "Modern R&B confessional tradition, emotional vulnerability as strength, TDE artistic depth, Black female empowerment, intimate storytelling, generational voice of modern soul",
    antiPatterns: "Never aggressive trap, never metal screaming, never industrial, never hard drill, never fast party music, never cold detached delivery",
    sunoMetatags: { vocalStyle: "Soft", vocalEffect: "Reverb, Warm Saturation", mood: "Melancholic", energy: "Low→Medium", texture: "Analog warmth", instrument: "Bass Guitar, Rhodes Piano, Live Drums, Vocal Layers" }
  },
  "JUICE WRLD": {
    sunoStyleTemplate: "Emo Melodic Rap, Freestyle Emotional Outpour, Guitar-Driven Sad Trap, Vulnerable Autotune Confession, 140-160 BPM, Key: E Minor, Lo-fi grit, Room ambience, Electric Guitar Melodies, Deep 808 Bass, Trap Hi-Hats, Soft Piano Layers, Melodic Autotune Emotional Tenor Raw Freestyle, Continuous Emotional Flow No Structure Breaks, Warm Lo-Fi Mix Guitar-Forward, Heartbreak Generation Emo-Trap Pioneer, 2010s",
    sunoExcludeStyles: "country folk, opera classical, boom-bap traditional, bright happy pop, festive party energy, industrial noise, hard drill",
    sunoVocalTags: ["[emotional autotune tenor]", "[freestyle stream-of-consciousness]", "[vulnerable raw delivery]", "[melodic crying quality]"],
    sunoWeirdness: 18, sunoStyleInfluence: 82, sunoBpmRange: "140-160", sunoKey: "E Minor",
    vocalDNA: "Emotional autotune tenor with raw freestyle quality and vulnerable crying delivery. Stream-of-consciousness phrasing suggesting improvisation. Melodic ability within emo-rap context. Voice carries genuine emotional weight.",
    flowPattern: "Continuous freestyle flow with minimal structural breaks. Emotional outpouring where words flow in stream-of-consciousness. Melodic contours following emotional rather than rhythmic logic. Behind-the-beat phrasing with sustained autotune notes.",
    productionFingerprint: "Electric guitar melodies driving emotional atmosphere, deep 808 bass with trap patterns, trap hi-hat rolls, soft piano layers adding melancholy, lo-fi warmth and tape texture, guitar-forward production separating from standard trap",
    culturalAnchors: "Emo-trap pioneer, heartbreak generation voice, freestyle mastery legend, vulnerable masculinity in rap, drug-adjacent emotional narratives, Chicago melodic rap scene",
    antiPatterns: "Never country folk, never boom-bap traditional, never bright happy pop, never festive party, never hard drill, never cold detached delivery",
    sunoMetatags: { vocalStyle: "Melodic Autotune", vocalEffect: "Auto-tune, Reverb", mood: "Melancholic", energy: "Medium", texture: "Lo-fi", instrument: "Electric Guitar, 808 Bass, Piano, Trap Hi-Hats" }
  },
  "DR. DRE": {
    sunoStyleTemplate: "G-Funk West Coast Hip-Hop, Deep Synth Bass Groove, Cinematic Gangsta Funk, Polished Studio Mastery, 92-105 BPM, Key: C Minor, Studio polished, Stadium reverb, Deep Moog Synth Bass, Funk Guitar Wah, Crisp Drum Programming, Talk Box Melodic Lines, Layered Synth Pads, Deep Authoritative Baritone Commanding Presence, Groove-Locked Pocket Building to Epic Drop, Pristine Polished Mix Maximum Clarity, Compton G-Funk Legacy Production Legend, 1990s-2010s",
    sunoExcludeStyles: "lo-fi chill, country folk, opera classical, emo rap, cloud rap, UK drill, mumble rap, acoustic soft",
    sunoVocalTags: ["[deep commanding baritone]", "[authoritative delivery]", "[groove-locked placement]", "[West Coast swagger]"],
    sunoWeirdness: 12, sunoStyleInfluence: 85, sunoBpmRange: "92-105", sunoKey: "C Minor",
    vocalDNA: "Deep commanding baritone with authoritative delivery and West Coast swagger. Groove-locked placement emphasizing pocket and rhythm. Voice used as instrument of dominance within production architecture. Clear articulation for lyrical impact.",
    flowPattern: "Groove-locked on-beat delivery with West Coast swagger. Medium syllable density allowing production space. Commanding presence without rushing. Rhythmic pocket emphasizing head-nod groove over technical complexity.",
    productionFingerprint: "Deep Moog synth bass creating G-Funk foundation, funk guitar with wah effect, crisp drum programming with punchy kick and snare, talk box melodic lines, layered synth pads, pristine polished studio clarity, cinematic gangsta funk atmosphere",
    culturalAnchors: "Compton G-Funk legacy, production legend mythology, Aftermath Records empire, gangsta rap genesis, West Coast dominance, studio perfectionism",
    antiPatterns: "Never lo-fi or rough production, never country folk, never emo rap, never cloud rap, never UK drill, never acoustic soft",
    sunoMetatags: { vocalStyle: "Rap", vocalEffect: "Reverb, Compressed", mood: "Dark", energy: "Medium→High", texture: "Studio polished", instrument: "Moog Synth Bass, Funk Guitar, Crisp Drums, Talk Box" }
  },
  NAS: {
    sunoStyleTemplate: "Lyrical Boom-Bap East Coast, Jazz Sample Sophistication, Storytelling Narrative Mastery, Queensbridge Street Poetry, 85-95 BPM, Key: Eb Minor, Dusty sample, Room ambience, Chopped Jazz Piano Samples, Boom-Bap Drum Breaks, Warm Vinyl Bass, Saxophone Loops, Clear Articulate Baritone Storytelling Authority, Narrative Flow Building to Climactic Verse, Warm Dusty Mix Vinyl Warmth, Queensbridge East Coast Poet Laureate, 1990s",
    sunoExcludeStyles: "autotune heavy, generic trap, bright pop, country folk, opera classical, industrial noise, festive party energy, cloud rap",
    sunoVocalTags: ["[clear articulate baritone]", "[storytelling authority]", "[poetic narrative delivery]", "[Queensbridge inflection]"],
    sunoWeirdness: 15, sunoStyleInfluence: 85, sunoBpmRange: "85-95", sunoKey: "Eb Minor",
    vocalDNA: "Clear articulate baritone with storytelling authority and poetic narrative delivery. Queensbridge inflection adding authenticity. Intellectual yet street-accessible vocal tone. Voice conveys both wisdom and street reality.",
    flowPattern: "Behind-the-beat storytelling flow with clear word articulation. Narrative arc within verse structure. Internal rhyme density balanced with conversational accessibility. Rhythmic pocket locked to boom-bap drum patterns.",
    productionFingerprint: "Chopped jazz piano samples providing melodic sophistication, boom-bap drum breaks with punchy kick and snapping snare, warm vinyl bass foundation, saxophone loops adding jazz flavor, dusty vinyl texture creating nostalgic warmth",
    culturalAnchors: "East Coast mythology, hip-hop poet laureate, legendary debut album legacy, street storytelling mastery, lyrical excellence standard, golden era hip-hop heritage",
    antiPatterns: "Never heavy autotune, never generic trap, never bright pop, never cloud rap, never festive party, never cold mechanical delivery",
    sunoMetatags: { vocalStyle: "Rap", vocalEffect: "Dry, Subtle Reverb", mood: "Melancholic", energy: "Medium", texture: "Dusty sample", instrument: "Jazz Piano Samples, Boom-Bap Drums, Saxophone, Vinyl Bass" }
  },
  MHD: {
    sunoStyleTemplate: "Afro Trap Fusion Originator, Danceable African Rhythms over Trap Base, Festive Multilingual Energy, 100-115 BPM, Key: G Minor, Digital crisp, Open air, Bouncy 808 Bass, African Drum Patterns, Trap Hi-Hats, Synth Horn Stabs, Energetic Confident Rap-Singing Multilingual Flow, Infectious Dance Build to Festival Drop, Bright Polished Mix Maximum Energy, Paris-Senegal Afro Trap Pioneer, 2010s",
    sunoExcludeStyles: "dark depressing, metal screaming, classical opera, slow ballad, industrial noise, lo-fi chill, boom-bap traditional",
    sunoVocalTags: ["[energetic multilingual delivery]", "[afro trap phrasing]", "[danceable groove-locking]", "[confident uplifting tone]"],
    sunoWeirdness: 14, sunoStyleInfluence: 82, sunoBpmRange: "100-115", sunoKey: "G Minor",
    vocalDNA: "Energetic confident male voice with multilingual delivery in French, Fula, and Bambara. Afro trap phrasing blending rap flow with African melodic sensibility. Danceable groove-locking ability. Positive uplifting festival energy.",
    flowPattern: "Groove-locking placement emphasizing infectious African rhythm bounce. Multilingual phrase switching between French and West African languages. Rap-singing hybrid with dancehall influence. High energy maintained with dance-focused delivery.",
    productionFingerprint: "Bouncy 808 bass providing trap foundation, authentic African drum patterns layered over trap hi-hats, synth horn stabs punctuating, bright digital clarity, open air festival production, Afro trap fusion pioneering sound",
    culturalAnchors: "Afro trap genre creator, Paris-Senegal cultural bridge, West African heritage pride, multilingual artistry, viral dance culture, African diaspora celebration",
    antiPatterns: "Never dark depressing, never metal screaming, never slow ballad, never industrial, never lo-fi chill, never boom-bap traditional",
    sunoMetatags: { vocalStyle: "Melodic Rap", vocalEffect: "Reverb", mood: "Uplifting", energy: "High", texture: "Crisp Digital", instrument: "808 Bass, African Drums, Trap Hi-Hats, Synth Horns" }
  },
  HUGEL: {
    sunoStyleTemplate: "Latin House Groove, Tech House Energy, Infectious Dancefloor Rhythm, 120-128 BPM, Key: A Minor, Digital crisp, Wide stereo reverb, Pumping House Bass, Latin Percussion Congas, Pulsing Synth Stabs, Rhythmic House Drums, Vocal Chops Melodic Hooks, Infectious Build to Peak-Time Drop, Bright Polished Mix Club Ready, Ibiza Latin House Festival Energy, 2020s",
    sunoExcludeStyles: "dark orchestral, metal screaming, slow ballad, country folk, boom-bap rap, lo-fi chill, industrial noise",
    sunoVocalTags: ["[vocal chop hooks]", "[latin-infused phrasing]", "[house groove locking]", "[festival energy delivery]"],
    sunoWeirdness: 12, sunoStyleInfluence: 80, sunoBpmRange: "120-128", sunoKey: "A Minor",
    vocalDNA: "Vocal chops and sampled hooks creating melodic house elements. Latin-infused vocal phrasing when present. Festival energy delivery designed for peak-time dancefloor moments. Vocals as production tool rather than traditional singing.",
    flowPattern: "House rhythm-locked 4/4 groove with Latin syncopation. Vocal chops as rhythmic hooks. Build-up and drop structure for club impact. Infectious groove emphasis throughout.",
    productionFingerprint: "Pumping house bass with sidechain compression, Latin percussion (congas, bongos) adding groove, pulsing synth stabs, rhythmic house drum patterns, vocal chop melodic hooks, bright polished club-ready mix",
    culturalAnchors: "Ibiza house culture, Latin house movement leadership, Marseille DJ heritage, Pacha/Ushuaia residency credibility, global dancefloor focus, Bella Ciao viral success",
    antiPatterns: "Never dark orchestral, never metal, never slow ballad, never country, never rap-focused, never lo-fi chill",
    sunoMetatags: { vocalStyle: "Vocal Chops", vocalEffect: "Reverb, Delay", mood: "Uplifting", energy: "High", texture: "Crisp Digital", instrument: "House Bass, Latin Percussion, Synth Stabs, House Drums" }
  },
  "SNOH AALEGRA": {
    sunoStyleTemplate: "Cinematic Soul R&B, Breathy Jazz-Inflected Vocals, Lush Orchestral R&B, Intimate Emotional Depth, 75-95 BPM, Key: Db Minor, Analog warmth, Room ambience, Lush String Arrangements, Warm Bass Guitar, Jazz Piano Chords, Soft Brush Drums, Breathy Smoky Alto Soulful Jazz-Inflected Delivery, Gentle Intimate Build to Full-Voice Climax, Warm Cinematic Mix Wide Depth, Swedish-Persian Cinematic Soul Artistry, 2020s",
    sunoExcludeStyles: "aggressive trap, metal screaming, country folk, opera classical, hard drill, fast party energy, industrial noise, heavy autotune",
    sunoVocalTags: ["[breathy smoky alto]", "[jazz-inflected delivery]", "[cinematic emotional phrasing]", "[Sade-like intimacy]"],
    sunoWeirdness: 18, sunoStyleInfluence: 80, sunoBpmRange: "75-95", sunoKey: "Db Minor",
    vocalDNA: "Breathy smoky alto with golden jazz-inflected timbre. Compared to Sade and Amy Winehouse for smoky emotive quality. Moves between breathy tenderness and fuller powerful delivery. Cinematic soul quality defining vocal identity.",
    flowPattern: "Behind-the-beat languid phrasing creating intimate atmosphere. Melodic contours following emotional arc. Selective melisma at climactic moments. Jazz-influenced rhythmic pocket with R&B accessibility.",
    productionFingerprint: "Lush orchestral string arrangements creating cinematic depth, warm bass guitar providing groove, jazz piano chord progressions, soft brush drum patterns, analog warmth throughout, overall cinematic soul atmosphere",
    culturalAnchors: "Cinematic soul artistry, Swedish-Persian heritage, neo-soul modern evolution, intimate emotional storytelling, film score-influenced production, Sade-lineage contemporary R&B",
    antiPatterns: "Never aggressive trap, never metal screaming, never heavy autotune, never hard drill, never fast party energy, never cold detached delivery",
    sunoMetatags: { vocalStyle: "Soft", vocalEffect: "Reverb, Delay", mood: "Melancholic", energy: "Low→Medium", texture: "Analog warmth", instrument: "Strings, Bass Guitar, Jazz Piano, Brush Drums" }
  },
  "REDA TALIANI": {
    sunoStyleTemplate: "Urban Raï-Chaâbi Algerian, Street Energy Oriental Groove, Raw Festive Mediterranean, 105-120 BPM, Key: Bb Minor, Analog warmth, Open air, Darbuka Heavy Percussion, Mandole Melodic Lines, Oriental Violin Stabs, Derbouka Patterns, Punchy Bass, Powerful Raï Tenor Raw Urban Delivery, Dynamic Build Street Verse to Festive Chaâbi Chorus, Warm Live Mix Raw Festival Energy, Algerian Urban Raï-Chaâbi Modernizer, 2010s",
    sunoExcludeStyles: "metal screaming, country folk, opera classical, dark orchestral, industrial noise, lo-fi chill, hard drill, soft ballad whisper",
    sunoVocalTags: ["[powerful raw raï tenor]", "[urban chaâbi energy]", "[Arabic darija delivery]", "[festive street ornamentation]"],
    sunoWeirdness: 10, sunoStyleInfluence: 85, sunoBpmRange: "105-120", sunoKey: "Bb Minor",
    vocalDNA: "Powerful raw raï tenor with urban chaâbi energy and street credibility. Arabic darija delivery with festive ornamentation. Voice combines celebration with raw street emotion. Algerian accent proudly present, singing in darija with occasional French switches.",
    flowPattern: "Raï-chaâbi melodic phrasing with urban street energy. Festive rhythm-locked delivery building from intimate street stories to celebratory chaâbi chorus peaks. Call-and-response with audience. Dynamic range from raw verse to powerful festive release.",
    productionFingerprint: "Darbuka heavy percussion driving groove, mandole melodic lines providing Algerian identity, oriental violin stabs on emotional peaks, derbouka rhythmic patterns, punchy bass groove, warm analog production with live festival energy",
    culturalAnchors: "Algerian urban raï-chaâbi fusion, street-to-festival energy, C'est la vie cultural impact, diaspora urban identity, wedding and festival heritage, Algerian street pride",
    antiPatterns: "Never metal screaming, never country folk, never dark orchestral, never industrial, never lo-fi chill, never cold detached, never afro-dancehall",
    sunoMetatags: { vocalStyle: "Belt", vocalEffect: "Reverb", mood: "Uplifting", energy: "High", texture: "Analog warmth", instrument: "Darbuka, Mandole, Oriental Violin, Derbouka, Bass" }
  },
  "CHEB HASNI": {
    sunoStyleTemplate: "Sentimental Raï Love Ballad, Emotional Algerian Romance, Warm Intimate Vocal, 90-110 BPM, Key: G Minor, Analog warmth, Room ambience, Oud Melodic Foundation, Darbuka Light Percussion, Accordion Melody, Soft Synth Pads, Warm Emotional Tenor Heartbreak Delivery, Gentle Intimate Build to Emotional Vocal Peak, Warm Analog Mix Intimate Feel, Algerian Raï Sentimental King of Love, 1990s",
    sunoExcludeStyles: "aggressive rap, metal screaming, industrial noise, fast party tempo, hard drill, heavy bass trap, country folk",
    sunoVocalTags: ["[warm emotional raï tenor]", "[heartbreak darija vocal delivery]", "[Algerian romantic melisma]", "[sentimental Arabic ornamentation]"],
    sunoWeirdness: 8, sunoStyleInfluence: 88, sunoBpmRange: "90-110", sunoKey: "G Minor",
    vocalDNA: "Warm emotional raï tenor with heartbreak delivery and sentimental Arabic melisma. Voice carries deep romantic vulnerability in Algerian darija. Oranic raï phrasing with traditional maqam ornamentation. King of raï sentimental — singing exclusively in Arabic dialect with pure vocal emotion.",
    flowPattern: "Sentimental melodic phrasing with emotional weight. Gentle rhythm following heartbeat tempo. Arabic ornamentation on sustained notes. Intimate delivery building to emotional vocal peaks.",
    productionFingerprint: "Oud melodic foundation, light darbuka percussion, accordion melody adding sentimental texture, soft synth pads, warm analog production, intimate room ambience, overall romantic sentimental atmosphere",
    culturalAnchors: "King of raï sentimental, Algerian romantic tradition, love ballad heritage, Oran musical legacy, sentimental pop-raï, generational influence on North African music",
    antiPatterns: "Never aggressive rap, never metal screaming, never industrial, never fast party, never hard drill, never heavy bass trap",
    sunoMetatags: { vocalStyle: "Belt", vocalEffect: "Reverb, Delay", mood: "Romantic", energy: "Low→Medium", texture: "Analog warmth", instrument: "Oud, Darbuka, Accordion, Soft Synth Pads" }
  },
  KHALED: {
    sunoStyleTemplate: "Anthemic Raï Pop, Grand Mediterranean Celebration, Powerful Emotional Vocal, Festival Euphoric Energy, 100-118 BPM, Key: A Minor, Studio polished, Stadium reverb, Grand Orchestral Arrangement, Darbuka Festival Percussion, Oud and Mandole Melodic, Synth Brass Section, Powerful Raï Baritone-Tenor Grand Emotional Delivery, Epic Build Verse to Anthemic Festival Chorus, Polished Grand Mix Stadium Ready, King of Raï Global Anthem Legacy, 2000s",
    sunoExcludeStyles: "metal screaming, industrial noise, lo-fi chill, dark depressing, hard drill, country folk",
    sunoVocalTags: ["[powerful grand raï voice]", "[anthemic Arabic-French delivery]", "[Mediterranean maqam warmth]", "[festival-commanding darija presence]"],
    sunoWeirdness: 8, sunoStyleInfluence: 88, sunoBpmRange: "100-118", sunoKey: "A Minor",
    vocalDNA: "Powerful grand raï baritone-tenor with anthemic emotional delivery and Mediterranean warmth. Voice designed to fill stadiums and festivals. Grand emotional presence commanding attention. King of Raï vocal authority.",
    flowPattern: "Grand melodic phrasing building to anthemic chorus moments. Festival-commanding delivery with audience participation design. Emotional crescendo architecture. Mediterranean groove pocket with Arabic ornamentation.",
    productionFingerprint: "Grand orchestral arrangements, darbuka festival percussion driving rhythm, oud and mandole melodic lines, synth brass section adding anthemic power, polished studio clarity, stadium-ready production",
    culturalAnchors: "King of Raï global mythology, international anthem success, Mediterranean celebration culture, Algerian cultural ambassador, festival anthem tradition, global world music bridge",
    antiPatterns: "Never metal screaming, never industrial, never lo-fi chill, never dark depressing, never hard drill, never cold detached delivery",
    sunoMetatags: { vocalStyle: "Power", vocalEffect: "Reverb, Delay", mood: "Uplifting", energy: "High", texture: "Studio polished", instrument: "Orchestra, Darbuka, Oud, Synth Brass" }
  },
  "CHEB MAMI": {
    sunoStyleTemplate: "High Tenor Raï Orchestral, Melismatic Arabic Vocal Virtuosity, Mediterranean Crossover Elegance, 90-115 BPM, Key: C Minor, Analog warmth, Wide reverb, Darbuka Percussion, Violin Oriental Lines, Accordion Melodic, Electric Guitar Wah, Synth String Pads, High Emotional Tenor Melismatic Raï Delivery, Intimate Verse to Soaring Orchestral Chorus, Warm Polished Mix Raï-World Balance, Oran Raï Crossover Vocal Pioneer, 2000s",
    sunoExcludeStyles: "heavy trap, metal screaming, industrial noise, hard drill, country folk, lo-fi chill, aggressive rap, heavy autotune",
    sunoVocalTags: ["[high raï tenor]", "[melismatic Arabic phrasing]", "[darija emotional delivery]", "[three-octave range]"],
    sunoWeirdness: 12, sunoStyleInfluence: 85, sunoBpmRange: "90-115", sunoKey: "C Minor",
    vocalDNA: "High raï tenor with three-octave range and melismatic Arabic phrasing. Darija emotional delivery with improvised vocal ornamentation. Raw poignant timbre conveying deep romantic vulnerability. Organic delivery without autotune, pure vocal virtuosity.",
    flowPattern: "Melismatic raï phrasing stretching syllables for emotional intensity. Intimate verse delivery building to soaring vocal peaks. Arabic maqam ornamentation on sustained notes. Mediterranean groove pocket with organic feel.",
    productionFingerprint: "Darbuka percussion providing raï groove, oriental violin lines adding emotional depth, accordion melodic counterpoint, wah electric guitar adding funk texture, synth string pads for orchestral warmth, warm analog production",
    culturalAnchors: "Oran raï vocal tradition, three-octave vocal mastery, Mediterranean-Andalusian heritage, raï-world music crossover pioneer, 1990s-2000s world fusion era, romantic longing themes",
    antiPatterns: "Never heavy trap, never metal screaming, never autotune, never hard drill, never aggressive rap, never cold electronic delivery",
    sunoMetatags: { vocalStyle: "Belt", vocalEffect: "Reverb, Delay", mood: "Romantic", energy: "Medium", texture: "Analog warmth", instrument: "Darbuka, Violin, Accordion, Electric Guitar, Synth Strings" }
  },
  RIMK: {
    sunoStyleTemplate: "Dark Raï-Rap Street Fusion, Gritty Minimalist Maghreb Beat, Raw Urban Arabic-French Delivery, 90-110 BPM, Key: D Minor, Raw unprocessed, Underground bunker, Dark Synth Bass Heavy, Darbuka Hip-Hop Hybrid Drums, Distorted Electric Guitar, Minimal Dark Pads, Raspy Deep Baritone Raw Street Rap Delivery, Relentless Dark Build to Aggressive Peak, Dark Compressed Mix Street Grit, Banlieue Raï-Rap Street Fusion Pioneer, 2010s",
    sunoExcludeStyles: "bright pop, melodic singing, festive party, soft acoustic, country folk, smooth R&B, lo-fi chill, opera classical",
    sunoVocalTags: ["[raspy deep baritone]", "[raw street rap delivery]", "[Arabic-French bilingual flow]", "[percussive aggressive tone]"],
    sunoWeirdness: 15, sunoStyleInfluence: 82, sunoBpmRange: "90-110", sunoKey: "D Minor",
    vocalDNA: "Raspy deep baritone with raw street authority. Percussive aggressive rap delivery with Algerian raï inflections. Arabic-French bilingual flow switching between darija phrases and French rap. No autotune, raw organic vocal grit.",
    flowPattern: "Hard-edged rhythmic rap delivery over dark minimalist production. Maghreb-influenced syllable placement with hip-hop groove. Aggressive on-beat attacks with occasional raï melodic turns. Street narrative focus with raw energy.",
    productionFingerprint: "Dark synth bass heavy foundation, darbuka patterns merged with hip-hop breakbeats, distorted electric guitar grit, minimal dark atmospheric pads, raw compressed mix, dark minimalist raï-rap aesthetic",
    culturalAnchors: "Paris banlieue raï-rap fusion, Algerian immigrant street experience, dark minimalist production aesthetic, 2000s French rap evolution, street culture authenticity, zero commercial compromise",
    antiPatterns: "Never bright pop, never melodic singing, never festive party, never soft acoustic, never smooth R&B, never lo-fi chill",
    sunoMetatags: { vocalStyle: "Rap", vocalEffect: "Dry, Compressed", mood: "Dark", energy: "High", texture: "Raw unprocessed", instrument: "Dark Synth Bass, Darbuka, Electric Guitar, Dark Pads" }
  },
  "DJMAWI AFRICA": {
    sunoStyleTemplate: "Chaâbi-Gnaoua-Rock Fusion, World Ensemble Energy, North African Festival Groove, 100-130 BPM, Key: G Minor, Live room warmth, Open air, Guembri Bass Lines, Qraqab Iron Castanets, Darbuka Chaâbi Groove, Electric Guitar Rock Riffs, Clarinet Melodic Lines, Kora Harp Textures, Ensemble Vocal Call-and-Response Chaâbi Delivery, Festival Build Chaâbi Verse to Rock Climax, Warm Live Mix Ensemble Energy, North African World Fusion Festival Band, 2010s",
    sunoExcludeStyles: "pure electronic, autotune, trap beats, gentle ballad, industrial noise, lo-fi chill, country folk, minimalist sparse",
    sunoVocalTags: ["[ensemble call-and-response]", "[chaâbi folk vocal energy]", "[darija festival delivery]", "[rock-influenced projection]"],
    sunoWeirdness: 28, sunoStyleInfluence: 75, sunoBpmRange: "100-130", sunoKey: "G Minor",
    vocalDNA: "Ensemble vocal delivery with call-and-response chaâbi tradition. Multiple voices creating festival energy. Darija folk singing with rock-influenced projection. Soulful grounded chaâbi vocal quality anchoring world fusion production.",
    flowPattern: "Chaâbi groove-locked ensemble delivery with festival energy. Call-and-response vocal patterns building communal atmosphere. Rock energy crescendos within traditional North African rhythmic framework. Multilingual switching between darija and French.",
    productionFingerprint: "Guembri bass providing gnaoua foundation, qraqab iron castanets creating hypnotic rhythm, darbuka chaâbi groove, electric guitar rock riffs layered, clarinet melodic lines, kora harp textures, live room warmth with ensemble energy",
    culturalAnchors: "Gnaoua spiritual-ritual music tradition, North African chaâbi street heritage, rock-metal fusion experimentation, multi-instrumental live ensemble aesthetic, cross-genre world fusion rooted in tradition",
    antiPatterns: "Never pure electronic, never autotune, never trap beats, never gentle ballad, never minimalist, never cold synthetic production",
    sunoMetatags: { vocalStyle: "Belt", vocalEffect: "Live Room Reverb", mood: "Uplifting", energy: "High", texture: "Live room warmth", instrument: "Guembri, Qraqab, Darbuka, Electric Guitar, Clarinet, Kora" }
  },
  BABYLONE: {
    sunoStyleTemplate: "Acoustic Dziri Pop-Raï, Intimate Mediterranean Warmth, Storytelling Romantic Ballad, 95-110 BPM, Key: G Major, Analog warmth, Room ambience, Acoustic Guitar Fingerpicked, Darbuka Subtle Percussion, Piano Emotional, Soft Violin Strings, Light Bass Melodic, Smooth Warm Tenor Darija Storytelling Delivery, Gentle Intimate Build to Emotional Acoustic Chorus, Warm Organic Mix Acoustic Mediterranean Feel, Algerian Dziri Acoustic Romance, 2010s",
    sunoExcludeStyles: "electronic production, trap beats, aggressive rap, heavy rock, industrial noise, autotune, fast dance tempo, hard drill",
    sunoVocalTags: ["[smooth warm tenor]", "[darija storytelling delivery]", "[intimate conversational tone]", "[emotional restraint]"],
    sunoWeirdness: 8, sunoStyleInfluence: 88, sunoBpmRange: "95-110", sunoKey: "G Major",
    vocalDNA: "Smooth warm tenor with intimate storytelling quality. Darija delivery with clear enunciation for lyrical accessibility. Emotional but restrained, conveying vulnerability without excess. Conversational intimate tone inviting listener closeness.",
    flowPattern: "Gentle melodic phrasing with acoustic guitar accompaniment. Story-driven verse delivery building to emotional chorus peaks. Relaxed Mediterranean groove with organic feel. No rushing, space between phrases for emotional breathing.",
    productionFingerprint: "Acoustic guitar fingerpicked as primary foundation, subtle darbuka percussion, emotional piano accompaniment, soft violin string arrangements, light melodic bass, warm organic production with room ambience, no electronic elements",
    culturalAnchors: "Algerian dziri urban storytelling tradition, acoustic Mediterranean romance, intimate love narratives, modern raï-pop acoustic accessibility, diaspora nostalgia and homeland themes",
    antiPatterns: "Never electronic production, never trap beats, never aggressive delivery, never heavy rock, never autotune, never fast dance tempo",
    sunoMetatags: { vocalStyle: "Soft", vocalEffect: "Subtle Reverb", mood: "Romantic", energy: "Low→Medium", texture: "Analog warmth", instrument: "Acoustic Guitar, Darbuka, Piano, Violin, Bass" }
  },
  "L'ALGERINO": {
    sunoStyleTemplate: "Melodic Raï-Trap-Pop Hybrid, Oriental Beat Modern Production, Marseille Mediterranean Crossover, 90-110 BPM, Key: E Minor, Studio polished, Wide reverb, Trap 808 Bass, Derbouka-Trap Hybrid Drums, Synth Oriental Melodies, Electric Guitar Modern, Atmospheric Pads, Smooth Melodic Rap-Singing Auto-tune Raï Delivery, Catchy Build to Pop-Raï Hook, Polished Modern Mix Oriental-Trap Balance, Marseille Raï-Rap Mediterranean Crossover, 2010s",
    sunoExcludeStyles: "pure acoustic raï, classical orchestral, metal screaming, boom-bap traditional, country folk, industrial noise, lo-fi minimal",
    sunoVocalTags: ["[smooth melodic rap-singing]", "[French-darija bilingual flow]", "[auto-tune raï delivery]", "[catchy hook instinct]"],
    sunoWeirdness: 14, sunoStyleInfluence: 80, sunoBpmRange: "90-110", sunoKey: "E Minor",
    vocalDNA: "Smooth melodic rap-singing blend with bilingual French-darija delivery. Auto-tune used as creative instrument adding modern raï texture. Soulful not harsh, prioritizing catchiness and groove. Laid-back reggae-influenced inflection at times.",
    flowPattern: "Melodic rap-singing alternating between French verses and darija melodic hooks. Catchy hook-focused design with pop accessibility. Laid-back rhythmic pocket blending trap timing with raï groove. Behind-the-beat relaxed delivery.",
    productionFingerprint: "Trap 808 bass providing modern low-end, derbouka-trap hybrid drum patterns, synth oriental melodies as hooks, modern electric guitar, atmospheric pads, polished production bridging street and pop",
    culturalAnchors: "Marseille raï-rap Mediterranean fusion, Algerian diaspora urban identity, melodic street crossover, 2000s French rap evolution, social consciousness with street mentality balance",
    antiPatterns: "Never pure acoustic raï, never classical orchestral, never metal screaming, never boom-bap traditional, never lo-fi minimal",
    sunoMetatags: { vocalStyle: "Melodic Rap", vocalEffect: "Auto-tune, Reverb", mood: "Uplifting", energy: "Medium", texture: "Studio polished", instrument: "808 Bass, Derbouka, Oriental Synths, Electric Guitar" }
  },
  "MOHAMED LAMINE": {
    sunoStyleTemplate: "Emotional Raï Love Ballad, Orchestral Sentimental Romance, Warm Intimate Vocal Performance, 80-100 BPM, Key: E Minor, Analog warmth, Room ambience, Accordion Raï Melodic, Violin Orchestral Sweeps, Darbuka Light Percussion, Piano Emotional, Electric Guitar Gentle, String Arrangements, Warm Emotional Tenor Melismatic Darija Love Delivery, Gentle Intimate Build to Emotional Vocal Climax, Warm Analog Mix Intimate Orchestral Feel, Oran Raï-Love Sentimental Ballad Tradition, 2000s",
    sunoExcludeStyles: "aggressive rap, trap beats, electronic dance, metal screaming, industrial noise, fast party tempo, hard drill, cold detached delivery",
    sunoVocalTags: ["[warm emotional raï tenor]", "[melismatic darija delivery]", "[vulnerable intimate quality]", "[sentimental ornamentation]"],
    sunoWeirdness: 8, sunoStyleInfluence: 88, sunoBpmRange: "80-100", sunoKey: "E Minor",
    vocalDNA: "Rich warm tenor voice focused on emotional expression. Melismatic phrasing stretching notes for romantic feeling. Sings purely in darija with vulnerable intimate quality. Sentimental vocal ornamentation rooted in Oran raï-love tradition.",
    flowPattern: "Sentimental melodic phrasing with emotional weight on every word. Gentle rhythm following heartbeat tempo. Arabic maqam ornamentation on sustained notes. Intimate delivery building to emotional vocal peaks with orchestral support.",
    productionFingerprint: "Accordion raï melodic lead providing sentimental color, violin orchestral sweeps on emotional peaks, light darbuka percussion, emotional piano accompaniment, gentle electric guitar, string arrangements adding warmth, analog production with intimate room ambience",
    culturalAnchors: "Oran raï-love sentimental tradition, romantic heartbreak and devotion themes, duet culture with female vocalists, 1990s-2000s golden raï era, raï ballad heritage, sentimental Arabic melody mastery",
    antiPatterns: "Never aggressive rap, never trap beats, never electronic dance, never metal screaming, never fast party, never cold detached delivery",
    sunoMetatags: { vocalStyle: "Belt", vocalEffect: "Reverb, Delay", mood: "Romantic", energy: "Low→Medium", texture: "Analog warmth", instrument: "Accordion, Violin, Darbuka, Piano, Electric Guitar, Strings" }
  },
  "CHEBA ZAHOUANIA": {
    sunoStyleTemplate: "Festive Raï Féminin Puissant, Celebration Wedding Energy, Powerful Female Oriental Groove, 120-135 BPM, Key: D Major, Analog warmth, Open air, Accordion Lead Melodic, Bendir Frame Drum, Electric Guitar Rhythm, Qanun Strings, Electric Bass Punchy, Powerful Female Mezzo-Soprano Festive Raï Delivery, High Energy Festive Build to Celebratory Dance Peak, Warm Bright Mix Festival Energy, Algerian Female Raï Festive Pioneer, 2000s",
    sunoExcludeStyles: "slow ballad, melancholic minor, dark orchestral, industrial noise, lo-fi chill, aggressive rap, metal screaming, intimate whisper",
    sunoVocalTags: ["[powerful female raï voice]", "[festive assertive delivery]", "[darija celebration phrasing]", "[sharp vocal ornamentation]"],
    sunoWeirdness: 10, sunoStyleInfluence: 85, sunoBpmRange: "120-135", sunoKey: "D Major",
    vocalDNA: "Powerful mezzo-soprano with assertive festive projection. Sharp clear articulation with raï vocal ornamentation on word endings. Confident commanding tone filling festive spaces. Slight vibrato on held notes adding emotional warmth.",
    flowPattern: "Festive raï phrasing locked to dance groove. High energy delivery maintaining celebration throughout. Call-and-response patterns with audience energy. Powerful vocal projection designed for wedding and festival atmosphere.",
    productionFingerprint: "Accordion lead melodic counterpoint, bendir frame drum driving pulse, electric guitar rhythm, qanun or synth strings adding oriental texture, punchy electric bass, bright warm analog production, open air festival energy",
    culturalAnchors: "Female raï empowerment pioneer, wedding celebration atmosphere, Algerian festive culture, powerful female voice in traditional space, urban Algerian social gathering energy, joy and resilience themes",
    antiPatterns: "Never slow ballad, never melancholic, never dark orchestral, never industrial, never lo-fi, never intimate whisper",
    sunoMetatags: { vocalStyle: "Power", vocalEffect: "Reverb", mood: "Uplifting", energy: "High", texture: "Analog warmth", instrument: "Accordion, Bendir, Electric Guitar, Qanun, Bass" }
  },
  "BILAL SGHIR": {
    sunoStyleTemplate: "Modern Raï Sentimental, Lovesick Melancholic Groove, Emotional Tenor Arabic Romance, 100-115 BPM, Key: E Major, Analog warmth, Room ambience, Accordion Melancholic Lead, Electric Guitar Overdrive Bluesy, Darbuka Steady Groove, Bouzouki Oud Textures, Synth Atmospheric Pads, Raspy Emotional Tenor Breathy Darija Love Delivery, Melancholic Build Intimate Verse to Emotional Vocal Peak, Warm Analog Mix Intimate Romance, Modern Raï Sentimental Lovesick Heir, 2020s",
    sunoExcludeStyles: "festive upbeat party, aggressive rap, metal screaming, industrial noise, bright pop, hard drill, country folk, fast dance tempo",
    sunoVocalTags: ["[raspy emotional raï tenor]", "[breathy darija phrasing]", "[lovesick melancholic delivery]", "[sentimental vocal cracks]"],
    sunoWeirdness: 8, sunoStyleInfluence: 88, sunoBpmRange: "100-115", sunoKey: "E Major",
    vocalDNA: "Raspy emotional tenor with breathy phrasing on vulnerable lines. Glottal attacks for emotional emphasis. Smooth legato between phrases with minor vocal cracks conveying authenticity. Darija love delivery rooted in modern raï sentimental tradition.",
    flowPattern: "Sentimental melodic phrasing with melancholic emotional weight. Slower introspective pace allowing emotional breathing. Arabic ornamentation on sustained romantic notes. Intimate verse delivery building to emotional vocal peaks.",
    productionFingerprint: "Accordion melancholic lead providing sentimental color, electric guitar with bluesy overdrive bends, steady darbuka groove, bouzouki/oud melodic textures, atmospheric synth pads, warm analog production with intimate room feel",
    culturalAnchors: "Modern raï sentimental movement, romantic heartbreak narratives, urban Algerian youth perspective, late-night emotional intensity, heir to classic raï emotional tradition, darija love ballad evolution",
    antiPatterns: "Never festive party, never aggressive rap, never bright pop, never hard drill, never fast dance, never cold electronic delivery",
    sunoMetatags: { vocalStyle: "Belt", vocalEffect: "Reverb, Delay", mood: "Melancholic", energy: "Medium", texture: "Analog warmth", instrument: "Accordion, Electric Guitar, Darbuka, Bouzouki, Synth Pads" }
  },
  "DJALIL PALERMO": {
    sunoStyleTemplate: "Urban Raï Moderne, Trap-Raï Hybrid Youth, Street Confident Groove, 90-110 BPM, Key: F# Minor, Digital crisp, Wide reverb, 808 Bass Heavy, Trap Hi-Hat Rolls, Guitar Trap Rhythmic, Minimal Synth Strings, Atmospheric Pads, Youthful Tenor Rap-Sung Darija Street Delivery, Modern Build Verse to Catchy Urban Hook, Crisp Digital Mix Trap-Raï Balance, New Generation Urban Raï Street Pioneer, 2020s",
    sunoExcludeStyles: "classical orchestral, pure acoustic raï, slow romantic ballad, metal screaming, country folk, opera classical, industrial noise, boom-bap traditional",
    sunoVocalTags: ["[youthful confident tenor]", "[rap-sung darija hybrid]", "[urban street delivery]", "[modern melodic hooks]"],
    sunoWeirdness: 15, sunoStyleInfluence: 78, sunoBpmRange: "90-110", sunoKey: "F# Minor",
    vocalDNA: "Youthful tenor with conversational rap-sung hybrid delivery. Street vernacular darija pronunciation and modern slang. Rhythmic percussive vocal delivery with minimal vibrato. Confident urban energy with melodic hook instinct.",
    flowPattern: "Urban rap-sung delivery locked to trap-raï groove. Conversational verse flow building to catchy melodic hooks. Rhythmic percussive phrasing with modern cadence. Ad-libs and vocal layering adding depth.",
    productionFingerprint: "808 bass heavy foundation, trap hi-hat rolls mechanical and fast, rhythmic guitar trap patterns, minimal synth strings atmospheric, digital crisp production, modern trap-raï hybrid aesthetic",
    culturalAnchors: "New generation urban raï movement, Algerian street culture youth perspective, trap-raï genre fusion pioneer, digital-native production aesthetic, urban rebellion and confidence themes, modern streaming era raï evolution",
    antiPatterns: "Never classical orchestral, never pure acoustic raï, never slow ballad, never metal screaming, never boom-bap traditional, never overly sentimental delivery",
    sunoMetatags: { vocalStyle: "Melodic Rap", vocalEffect: "Auto-tune Light, Reverb", mood: "Aggressive", energy: "Medium→High", texture: "Crisp Digital", instrument: "808 Bass, Trap Hi-Hats, Guitar, Synth Strings" }
  },
  FAIRUZ: {
    sunoStyleTemplate: "Classical Arabic Orchestral, Timeless Lebanese Elegance, Ethereal Female Voice Masterpiece, 80-110 BPM, Key: F Major, Analog warmth, Concert hall reverb, Full Orchestral Strings Lush, Oud Rhythmic Melodic, Qanun Delicate Ornamental, French Horn Woodwinds, Acoustic Guitar Fingerpicked, Contralto Crystalline Ethereal Pure Arabic Delivery, Elegant Orchestral Build to Emotional Vocal Climax, Warm Analog Mix Concert Hall Grandeur, Timeless Classical Arabic Vocal Legend, 1970s",
    sunoExcludeStyles: "electronic production, trap beats, aggressive rap, heavy rock, industrial noise, autotune, modern pop compression, fast dance tempo",
    sunoVocalTags: ["[crystalline contralto]", "[ethereal pure Arabic delivery]", "[classical maqam ornamentation]", "[intimate yet grand projection]"],
    sunoWeirdness: 10, sunoStyleInfluence: 90, sunoBpmRange: "80-110", sunoKey: "F Major",
    vocalDNA: "Crystalline contralto-mezzo with ethereal pure quality. Perfectly controlled classical vibrato. Lyrical legato where every word is poetic. Minimal artifice, pure emotional expression. Breathy intimate moments despite orchestral grandeur surrounding.",
    flowPattern: "Elegant classical phrasing with poetic lyrical delivery. Moderate pacing with grand emotional arcs. Arabic maqam melodic structure guiding vocal movement. Intimate verse moments expanding to orchestral emotional climax.",
    productionFingerprint: "Full orchestral string arrangements lush and sweeping, oud rhythmic accompaniment in verses, qanun delicate ornamental passages, French horn and woodwinds adding classical depth, fingerpicked acoustic guitar, concert hall reverb creating grand space, zero electronic elements",
    culturalAnchors: "Timeless classical Arabic vocal tradition, mid-20th century golden age preservation, pan-Arab cultural pride, intimate storytelling with orchestral grandeur, romantic and patriotic themes, Lebanese musical heritage preservation",
    antiPatterns: "Never electronic production, never trap beats, never autotune, never heavy rock, never modern compression, never fast dance tempo",
    sunoMetatags: { vocalStyle: "Soft", vocalEffect: "Concert Hall Reverb", mood: "Peaceful", energy: "Low→Medium", texture: "Analog warmth", instrument: "Orchestral Strings, Oud, Qanun, Woodwinds, Acoustic Guitar" }
  },
  "AMR DIAB": {
    sunoStyleTemplate: "Modern Egyptian Pop King, Romantic Arabic Pop Upbeat, Polished Mediterranean Dance, 110-130 BPM, Key: G Major, Studio polished, Wide stereo, Bright Synth Leads, Electric Guitar Melodic, Modern Drum Kit Crisp, Acoustic Oud Verse Touch, Keyboard Atmospheric Pads, Backing Vocal Harmonies, Smooth Polished Tenor Romantic Arabic Pop Delivery, Bright Build to Uplifting Pop-Arabic Hook, Clean Polished Mix Radio Ready, Egyptian Pop Romantic Superstar, 2010s",
    sunoExcludeStyles: "heavy raï accordion, classical orchestral strings only, melancholic dark, aggressive rap, metal screaming, country folk, industrial noise, lo-fi minimal",
    sunoVocalTags: ["[smooth polished tenor]", "[romantic Arabic pop delivery]", "[melodic hook precision]", "[controlled emotional projection]"],
    sunoWeirdness: 10, sunoStyleInfluence: 85, sunoBpmRange: "110-130", sunoKey: "G Major",
    vocalDNA: "Smooth polished tenor with romantic expressiveness and controlled emotion. Melodic hook-driven phrasing designed for maximum radio impact. Clean theatrical projection with occasional vocal runs on held notes. Arabic pop vocal tradition with modern production polish.",
    flowPattern: "Hook-driven pop phrasing with upbeat Mediterranean groove. Romantic verse delivery building to bright infectious chorus. Clean rhythmic pocket designed for dancefloor and radio. Melodic precision prioritizing catchiness and accessibility.",
    productionFingerprint: "Bright synth leads providing modern pop energy, melodic electric guitar, modern crisp drum kit production, acoustic oud touch in verses for authenticity, keyboard atmospheric pads, layered backing vocal harmonies, polished studio clarity",
    culturalAnchors: "Egyptian pop stardom, radio-friendly romantic themes, bridge between traditional Arabic music and contemporary pop, pan-Arab commercial appeal, love and celebration narratives, Mediterranean modern pop sound",
    antiPatterns: "Never heavy accordion raï, never classical strings only, never dark melancholic, never aggressive rap, never metal screaming, never lo-fi minimal",
    sunoMetatags: { vocalStyle: "Melodic", vocalEffect: "Reverb", mood: "Uplifting", energy: "Medium→High", texture: "Studio polished", instrument: "Synth Leads, Electric Guitar, Modern Drums, Oud, Keyboards" }
  },
  "NANCY AJRAM": {
    sunoStyleTemplate: "Danceable Lebanese Oriental Pop, Energetic Arabic Club Groove, Bright Feminine Pop Energy, 120-140 BPM, Key: E Major, Studio polished, Wide stereo, Synth Dance-Pop Leads, Modern Drum Machine Club, Electric Guitar Energetic, Electric Bass Groove, Oud Qanun Oriental Samples, Backing Female Harmonies, Bright Playful Soprano Energetic Arabic Pop Delivery, High Energy Build to Infectious Dance-Pop Hook, Bright Polished Mix Maximum Club Energy, Lebanese Oriental Pop Dance Queen, 2010s",
    sunoExcludeStyles: "melancholic introspective, slow ballad, heavy orchestra alone, aggressive rap, metal screaming, raï accordion, country folk, industrial noise, lo-fi chill",
    sunoVocalTags: ["[bright playful soprano]", "[energetic Arabic pop delivery]", "[rhythmic punchy articulation]", "[youthful infectious tone]"],
    sunoWeirdness: 10, sunoStyleInfluence: 82, sunoBpmRange: "120-140", sunoKey: "E Major",
    vocalDNA: "Bright playful soprano with energetic youthful quality. Rhythmic punchy articulation with syllables perfectly placed for dance groove. Some vocal melismas kept upbeat. Girl-next-door intimacy despite polished pop production. Infectious tone designed for club and radio impact.",
    flowPattern: "Dance-pop phrasing locked to club groove. Energetic delivery maintaining high energy throughout. Catchy hook design with memorable melodic phrases. Upbeat Arabic pop structure with infectious chorus moments.",
    productionFingerprint: "Synth dance-pop leads uplifting, modern drum machine club-ready patterns, energetic electric guitar, groove-driven electric bass, oud and qanun samples adding oriental flavor in modern mix, stacked female backing harmonies, bright polished production",
    culturalAnchors: "Modern Lebanese pop glamour, club and party energy, youth-oriented playful confidence, blending Arabic pop with global dance trends, celebration and fun themes, feminine empowerment through music",
    antiPatterns: "Never melancholic introspective, never slow ballad, never heavy orchestra alone, never aggressive rap, never raï accordion, never lo-fi chill",
    sunoMetatags: { vocalStyle: "Melodic", vocalEffect: "Reverb", mood: "Uplifting", energy: "High", texture: "Studio polished", instrument: "Dance Synths, Drum Machine, Electric Guitar, Bass, Oud, Qanun" }
  },
  "FRED AGAIN..": {
    sunoStyleTemplate: "Emotional Sampling Electronic, Voice-Memo Dance Music, Euphoric Rave Intimacy, 125-140 BPM, Key: C Minor, Digital crisp, Cathedral reverb, Pulsing House Bass, Breakbeat Drums, Pitched Vocal Samples, Warm Synth Pads, Sampled Voice Memos as Melodic Foundation, Emotional Build from Intimate Sample to Euphoric Rave Drop, Bright Reverbed Mix Maximum Emotion, London Emotional Dance Music Pioneer, 2020s",
    sunoExcludeStyles: "country folk, metal screaming, opera classical, boom-bap hip-hop, slow ballad, dark orchestral, lo-fi chill static",
    sunoVocalTags: ["[pitched voice memo samples]", "[emotional rave delivery]", "[sampled everyday voices]", "[euphoric chant moments]"],
    sunoWeirdness: 28, sunoStyleInfluence: 75, sunoBpmRange: "125-140", sunoKey: "C Minor",
    vocalDNA: "Pitched and manipulated voice memo samples as primary vocal element. Everyday voices transformed into euphoric dance hooks. Emotional rave delivery through sampling rather than traditional singing. Human intimacy within electronic dance context.",
    flowPattern: "Emotional build from intimate sampled voice to euphoric rave drop. Voice memos looped and pitched creating melodic foundation. Breakbeat rhythmic energy with emotional human core. Dynamic range from quiet intimacy to full rave intensity.",
    productionFingerprint: "Sampled voice memos as melodic hooks, pulsing house bass, breakbeat drum patterns, pitched vocal samples creating texture, warm synth pads, reverb and delay creating floating space, overall emotional dance music aesthetic",
    culturalAnchors: "London rave culture evolution, emotional sampling innovation, voice memo art form, rave intimacy concept, Brian Eno mentorship lineage, Actual Life series documentation",
    antiPatterns: "Never country folk, never metal screaming, never boom-bap hip-hop, never slow ballad, never dark orchestral, never static lo-fi chill",
    sunoMetatags: { vocalStyle: "Vocal Chops", vocalEffect: "Reverb, Delay, Pitch Shift", mood: "Uplifting", energy: "High", texture: "Digital crisp", instrument: "House Bass, Breakbeat Drums, Vocal Samples, Synth Pads" }
  },
  "PEGGY GOU": {
    sunoStyleTemplate: "Groovy House Disco Fusion, Smooth Tech-House Groove, Warm Analog Dance, 120-128 BPM, Key: F Minor, Analog warmth, Wide stereo reverb, Deep House Bass, Funky Synth Riffs, Crisp House Drums, Retro Synth Arps, Smooth Vocal House Hooks Warm Delivery, Groove-Locked Build to Peak-Time Dancefloor, Warm Analog Mix Club Ready, Seoul-Berlin House-Disco Groove Queen, 2020s",
    sunoExcludeStyles: "aggressive rap, metal screaming, country folk, opera classical, dark orchestral, lo-fi chill, slow ballad",
    sunoVocalTags: ["[smooth house vocal hooks]", "[warm confident delivery]", "[groove-locking phrasing]", "[disco-influenced tone]"],
    sunoWeirdness: 15, sunoStyleInfluence: 78, sunoBpmRange: "120-128", sunoKey: "F Minor",
    vocalDNA: "Smooth house vocal hooks with warm confident delivery. Groove-locking phrasing designed for dancefloor impact. Disco-influenced tone with modern house sensibility. Vocals serve groove rather than dominate.",
    flowPattern: "House rhythm 4/4 groove-locked delivery. Funky syncopation in vocal hooks. Build-up and release structure for club impact. Continuous groove emphasis without dramatic breaks.",
    productionFingerprint: "Deep house bass providing groove foundation, funky synth riffs adding melodic interest, crisp house drum patterns, retro synth arpeggios, warm analog production aesthetic, wide stereo club-ready mix",
    culturalAnchors: "Seoul-Berlin cultural bridge, house-disco groove mastery, DJ culture credibility, Gudu Records label founder, It Makes You Forget viral success, female DJ representation",
    antiPatterns: "Never aggressive rap, never metal screaming, never country folk, never dark orchestral, never lo-fi chill, never slow ballad",
    sunoMetatags: { vocalStyle: "Soft", vocalEffect: "Reverb, Delay", mood: "Uplifting", energy: "Medium→High", texture: "Analog warmth", instrument: "House Bass, Funky Synths, House Drums, Retro Arps" }
  },
  LACRIM: {
    sunoStyleTemplate: "Raw Street Rap Legend, Raspy Aggressive Flow, Dark Mafia-Trap Menace, 125-140 BPM, Key: C Minor, Raw unprocessed, Underground bunker, Heavy 808 Bass, Dark Piano Stabs, Aggressive Hi-Hat Rolls, Orchestral Tension Strings, Raspy Deep Baritone Raw Aggressive Chopped Flow, Hard Aggressive Build to Menacing Drop, Raw Compressed Mix Heavy Low-End, Algerian-French Street Mafia Legend, 2010s",
    sunoExcludeStyles: "bright happy pop, soft acoustic, country folk, opera classical, lo-fi chill, melodic singing, smooth R&B",
    sunoVocalTags: ["[raspy deep baritone]", "[raw aggressive delivery]", "[choppy staccato flow]", "[mafia menace tone]"],
    sunoWeirdness: 10, sunoStyleInfluence: 85, sunoBpmRange: "125-140", sunoKey: "C Minor",
    vocalDNA: "Raspy deep baritone with raw aggressive delivery and choppy staccato flow. Mafia menace tone conveying street authority. Voice carries rough texture and prison-hardened authenticity. Capable of vocoder moments in recent evolution.",
    flowPattern: "Choppy staccato aggressive delivery with sharp consonant strikes. Rapid-fire bursts followed by dramatic pauses. Punchline-focused structure. Raw energy maintained without melodic softness.",
    productionFingerprint: "Heavy 808 bass creating menacing low-end, dark piano stabs, aggressive hi-hat roll patterns, orchestral tension strings adding cinematic menace, raw compressed mix, underground bunker echo, overall dark mafia-trap aesthetic",
    culturalAnchors: "Algerian-French street legend, Italian mafia cinema mythology, prison narrative authenticity, raw street credibility, Hauts-de-Seine street culture, vocoder evolution in recent work",
    antiPatterns: "Never bright happy pop, never soft acoustic, never smooth R&B, never lo-fi chill, never melodic singing focus, never country folk",
    sunoMetatags: { vocalStyle: "Raspy Rap", vocalEffect: "Dry, Compressed", mood: "Dark", energy: "High", texture: "Raw unprocessed", instrument: "808 Bass, Dark Piano, Hi-Hats, Orchestral Strings" }
  },
  SALIF: {
    sunoStyleTemplate: "Boom-Bap Street Rap, Lyrical Technique Mastery, Dark Introspective Underground, 85-100 BPM, Key: D Minor, Dusty sample, Intimate dry booth, Boom-Bap Drum Breaks, Dark Piano Sample Loops, Warm Vinyl Bass, String Sample Tension, Deep Baritone Introspective Lyrical Authority, Technical Flow Building to Emotional Climax, Dusty Warm Mix Boom-Bap Foundation, Hauts-de-Seine Underground Street Poetry, 2000s",
    sunoExcludeStyles: "autotune heavy, generic trap, bright pop, festive party, country folk, reggaeton, smooth R&B, industrial noise",
    sunoVocalTags: ["[deep introspective baritone]", "[lyrical technique mastery]", "[street poetry delivery]", "[emotional raw authority]"],
    sunoWeirdness: 8, sunoStyleInfluence: 85, sunoBpmRange: "85-100", sunoKey: "D Minor",
    vocalDNA: "Deep introspective baritone with lyrical technique mastery. Street poetry delivery conveying both intelligence and street reality. Emotional raw authority without melodrama. Banlieue parisienne accent flavoring authentic delivery.",
    flowPattern: "Technical boom-bap flow with high internal rhyme density. Behind-the-beat pocket emphasizing lyrical content. Storytelling verse structure building to emotional climax. Introspective phrasing balanced with aggressive moments.",
    productionFingerprint: "Boom-bap drum breaks with hard kick and snapping snare, dark piano sample loops, warm vinyl bass foundation, string sample tension building, dusty production aesthetic, overall dark introspective boom-bap atmosphere",
    culturalAnchors: "Banlieue underground legend, 2000s collective heritage, street movement founder, lyrical technique excellence, street poetry tradition, French boom-bap golden era",
    antiPatterns: "Never autotune heavy, never generic trap, never bright pop, never festive party, never reggaeton, never smooth R&B",
    sunoMetatags: { vocalStyle: "Rap", vocalEffect: "Dry, Subtle Reverb", mood: "Dark", energy: "Medium", texture: "Dusty sample", instrument: "Boom-Bap Drums, Piano Samples, Vinyl Bass, String Samples" }
  },
  DICIDENS: {
    sunoStyleTemplate: "Raw Grimy Boom-Bap, East Coast French Underground, 90s New York Influenced Darkness, 85-98 BPM, Key: C# Minor, Raw unprocessed, Underground bunker, Hard Boom-Bap Drums, Dark Minor Piano Loops, Deep Vinyl Bass, Eerie Sample Chops, Dual Raw Aggressive Delivery Grimy Intensity, Relentless Dark Energy Uncompromising, Raw Compressed Mix Maximum Grit, Banlieue Underground Raw Legend, 2000s",
    sunoExcludeStyles: "melodic singing, autotune, bright pop, festive energy, smooth R&B, country folk, lo-fi chill, soft acoustic",
    sunoVocalTags: ["[raw grimy dual delivery]", "[aggressive intensity]", "[underground street authority]", "[90s East Coast influenced menace]"],
    sunoWeirdness: 8, sunoStyleInfluence: 88, sunoBpmRange: "85-98", sunoKey: "C# Minor",
    vocalDNA: "Raw grimy dual delivery with two MCs trading aggressive verses. Underground street authority conveyed through uncompromising intensity. 90s East Coast-influenced menace in vocal tone. Zero melodic compromise, pure raw street rap.",
    flowPattern: "Locked to boom-bap grid with aggressive on-beat delivery. Dual MC interplay creating relentless energy. High syllable density within dark production. Uncompromising intensity without commercial concession.",
    productionFingerprint: "Hard boom-bap drums with maximum impact, dark minor piano loops, deep vinyl bass rumbling, eerie sample chops adding menace, raw compressed mix maximizing grit, 90s East Coast-influenced dark production",
    culturalAnchors: "Banlieue underground legend, French equivalent of 90s East Coast grimy duo, classic street rap album legacy, raw uncompromising street rap, Île-de-France department identity, French underground golden era",
    antiPatterns: "Never melodic singing, never autotune, never bright pop, never festive, never smooth R&B, never lo-fi chill, never soft acoustic",
    sunoMetatags: { vocalStyle: "Rap", vocalEffect: "Dry, Compressed", mood: "Dark", energy: "High", texture: "Raw unprocessed", instrument: "Boom-Bap Drums, Dark Piano, Vinyl Bass, Eerie Samples" }
  },
  TAYC: {
    sunoStyleTemplate: "Afrolov Sensual R&B, Smooth Vocal Crooning, Warm Afro-R&B Groove, Romantic Night Atmosphere, 95-112 BPM, Key: Bb Minor, Studio polished, Room ambience, Warm Round Bass, Afro Percussion Light, Soft Synth Pads, Clean Guitar Riffs, Smooth Warm Tenor Sensual Crooning Delivery, Gentle Romantic Build to Melodic Emotional Peak, Warm Polished Mix Intimate Stereo, Marseille-Cameroon Afrolov Romantic King, 2020s",
    sunoExcludeStyles: "aggressive drill, metal screaming, industrial noise, country folk, boom-bap traditional, hard trap, dark orchestral",
    sunoVocalTags: ["[smooth warm tenor]", "[sensual crooning delivery]", "[afro-R&B phrasing]", "[romantic intimate tone]"],
    sunoWeirdness: 12, sunoStyleInfluence: 82, sunoBpmRange: "95-112", sunoKey: "Bb Minor",
    vocalDNA: "Smooth warm tenor with sensual crooning delivery and afro-R&B phrasing. Romantic intimate tone celebrating love and sensuality. Voice naturally suited to velvety French R&B. Cameroonian heritage adding rhythmic warmth.",
    flowPattern: "Smooth melodic phrasing riding afro groove pocket. Behind-the-beat sensual delivery creating romantic atmosphere. Verse intimacy building to melodic emotional peaks. R&B melisma balanced with pop accessibility.",
    productionFingerprint: "Warm round bass providing groove, light afro percussion adding cultural texture, soft synth pad layers, clean guitar riffs, polished studio clarity, overall warm romantic afro-R&B atmosphere",
    culturalAnchors: "Afrolov genre creator, Marseille-Cameroon heritage, romantic king of French R&B, sensual love celebration, modern lover boy positioning, Fleur Froide breakthrough",
    antiPatterns: "Never aggressive drill, never metal screaming, never industrial, never hard trap, never dark orchestral, never cold detached delivery",
    sunoMetatags: { vocalStyle: "Soft", vocalEffect: "Reverb, Delay", mood: "Romantic", energy: "Medium", texture: "Studio polished", instrument: "Bass, Afro Percussion, Synth Pads, Guitar" }
  },
  DADJU: {
    sunoStyleTemplate: "Modern French R&B Crooner, Velvety Romantic Pop-R&B, Warm Melodic Trap Hybrid, 100-120 BPM, Key: Ab Minor, Studio polished, Room ambience, Warm 808 Bass, Melodic Piano Chords, Clean Hi-Hats, Soft String Arrangement, Velvety Smooth Tenor Romantic Crooning, Gentle Build Intimate Verse to Pop-R&B Hook, Polished Warm Mix Radio Ready, Bobigny Congolese R&B Gentleman, 2020s",
    sunoExcludeStyles: "aggressive drill, metal screaming, industrial noise, country folk, boom-bap traditional, dark orchestral, hard trap raw",
    sunoVocalTags: ["[velvety smooth tenor]", "[romantic crooning delivery]", "[pop-R&B hook master]", "[gentle intimate tone]"],
    sunoWeirdness: 10, sunoStyleInfluence: 85, sunoBpmRange: "100-120", sunoKey: "Ab Minor",
    vocalDNA: "Velvety smooth tenor with romantic crooning delivery and pop-R&B hook mastery. Gentle intimate tone celebrating romance. Natural melodic ability from Congolese musical family (Gims brother). Voice suited for radio-friendly R&B.",
    flowPattern: "Smooth melodic phrasing with pop-R&B structure. Intimate verse delivery building to catchy chorus hooks. Behind-the-beat pocket creating romantic atmosphere. Melodic contours designed for maximum catchiness.",
    productionFingerprint: "Warm 808 bass providing modern groove, melodic piano chord progressions, clean hi-hat patterns, soft string arrangement adding elegance, polished studio production, overall warm romantic pop-R&B aesthetic",
    culturalAnchors: "French R&B Gentleman mythology, Bobigny Congolese heritage, Gims family musical legacy, romantic pop-R&B mastery, Jaloux viral success, modern crooner positioning",
    antiPatterns: "Never aggressive drill, never metal screaming, never industrial, never dark orchestral, never hard trap raw, never cold detached delivery",
    sunoMetatags: { vocalStyle: "Soft", vocalEffect: "Reverb", mood: "Romantic", energy: "Medium", texture: "Studio polished", instrument: "808 Bass, Piano, Hi-Hats, Strings" }
  },
  "ANGÈLE": {
    sunoStyleTemplate: "Belgian Electro-Pop Chanson, Witty Minimalist Pop, Bright Electronic Dance-Pop, 110-125 BPM, Key: F Major, Digital crisp, Room ambience, Punchy Synth Bass, Electronic Drum Machine, Bright Synth Melodies, Minimal Clean Arrangement, Sweet Clear Female Voice Witty Humorous Delivery, Catchy Minimal Build to Pop Hook, Bright Clean Mix Maximum Pop Clarity, Brussels Feminist Pop Innovation, 2020s",
    sunoExcludeStyles: "aggressive rap, metal screaming, dark orchestral, industrial noise, country folk, boom-bap traditional, heavy bass trap",
    sunoVocalTags: ["[sweet clear female voice]", "[witty humorous delivery]", "[Belgian accent charm]", "[pop hook precision]"],
    sunoWeirdness: 15, sunoStyleInfluence: 80, sunoBpmRange: "110-125", sunoKey: "F Major",
    vocalDNA: "Sweet clear female voice with witty humorous delivery and Belgian accent charm. Pop hook precision combining chanson française tradition with electronic pop. Emotional accessibility through humor and sincerity. Roméo Elvis sister musical heritage.",
    flowPattern: "Catchy minimalist pop phrasing with memorable hook design. Witty lyrical delivery emphasizing word play. Verse-chorus pop structure with maximum catchiness. Electronic pop rhythm driving vocal placement.",
    productionFingerprint: "Punchy synth bass providing pop groove, electronic drum machine patterns, bright synth melodies, minimal clean arrangement letting voice shine, digital crisp clarity, overall bright electronic pop aesthetic",
    culturalAnchors: "Belgian pop innovation, feminist pop messaging, Brol breakthrough, Brussels artistic identity, Roméo Elvis family connection, French-language pop global reach",
    antiPatterns: "Never aggressive rap, never metal screaming, never dark orchestral, never industrial, never heavy bass trap, never cold detached delivery",
    sunoMetatags: { vocalStyle: "Melodic", vocalEffect: "Reverb", mood: "Uplifting", energy: "Medium→High", texture: "Crisp Digital", instrument: "Synth Bass, Drum Machine, Bright Synths" }
  },
  LOMEPAL: {
    sunoStyleTemplate: "Skate-Rap Melodic Hybrid, Introspective Chanson-Rap, Eclectic Indie Hip-Hop, 90-110 BPM, Key: A Minor, Analog warmth, Room ambience, Warm Guitar Layers, Soft Electronic Beats, Piano Melodic Lines, Subtle Synth Textures, Natural Voice Rap-Singing Introspective Vulnerable, Intimate Build to Melodic Emotional Release, Warm Organic Mix Natural Feel, Parisian 13ème Skate Culture Poetic, 2010s",
    sunoExcludeStyles: "aggressive drill, metal screaming, industrial noise, generic trap, dark orchestral, country folk, festive party energy",
    sunoVocalTags: ["[natural introspective voice]", "[rap-singing hybrid delivery]", "[vulnerable emotional tone]", "[poetic storytelling]"],
    sunoWeirdness: 22, sunoStyleInfluence: 76, sunoBpmRange: "90-110", sunoKey: "A Minor",
    vocalDNA: "Natural introspective male voice with rap-singing hybrid delivery. Vulnerable emotional tone conveying personal depth. Poetic storytelling influenced by chanson française tradition. Zero pretension, maximum authenticity.",
    flowPattern: "Fluid rap-singing shifting between spoken verses and melodic moments. Behind-the-beat introspective phrasing. Intimate conversational delivery building to emotional melodic releases. Eclectic rhythmic approach reflecting skate culture diversity.",
    productionFingerprint: "Warm guitar layers providing organic melodic bed, soft electronic beats mixing organic and synthetic, piano melodic lines adding sophistication, subtle synth textures creating atmosphere, overall warm organic production with indie sensibility",
    culturalAnchors: "Parisian 13ème arrondissement identity, skateboarding culture bridge, chanson-rap fusion pioneer, Jeannine personal narrative depth, eclectic musical influences, indie hip-hop positioning",
    antiPatterns: "Never aggressive drill, never metal screaming, never generic trap, never dark orchestral, never festive party energy, never cold detached delivery",
    sunoMetatags: { vocalStyle: "Melodic Rap", vocalEffect: "Subtle Reverb", mood: "Melancholic", energy: "Medium", texture: "Analog warmth", instrument: "Guitar, Electronic Beats, Piano, Synth Textures" }
  },
  "MONSIEUR NOV": {
    sunoStyleTemplate: "French Neo-Soul R&B, Modern Soul-Trap Hybrid, Warm Organic Grooves, 90-108 BPM, Key: Eb Minor, Analog warmth, Room ambience, Warm Bass Guitar, Neo-Soul Keys Rhodes, Gospel-Influenced Chords, Modern Trap Hi-Hats, Warm Soulful Tenor Gospel-Influenced Delivery, Organic Build to Full-Voice Soul Climax, Warm Organic Mix Natural Room, Vietnamese-French Neo-Soul Pioneer, 2020s",
    sunoExcludeStyles: "aggressive drill, metal screaming, industrial noise, country folk, dark orchestral, fast party energy, hard trap raw",
    sunoVocalTags: ["[warm soulful tenor]", "[gospel-influenced delivery]", "[neo-soul phrasing]", "[emotional R&B melisma]"],
    sunoWeirdness: 15, sunoStyleInfluence: 80, sunoBpmRange: "90-108", sunoKey: "Eb Minor",
    vocalDNA: "Warm soulful tenor with gospel and soul influences. Neo-soul phrasing bridging classic soul tradition with modern trap-R&B. Emotional R&B melisma at climactic moments. Vietnamese-French heritage adding unique vocal texture.",
    flowPattern: "Behind-the-beat soul phrasing with gospel-influenced delivery. Organic groove pocket emphasizing feel over technical precision. Verse intimacy building to full-voice soul climax moments. R&B melisma balanced with modern trap rhythmic sensibility.",
    productionFingerprint: "Warm bass guitar providing organic groove, neo-soul Rhodes keys, gospel-influenced chord progressions, modern trap hi-hat patterns blending with organic elements, warm analog production, overall French neo-soul atmosphere",
    culturalAnchors: "French neo-soul pioneer, Vietnamese-French heritage, gospel and soul tradition in French context, New Original Vibes identity, Love Therapy artistic concept, rare French R&B representation",
    antiPatterns: "Never aggressive drill, never metal screaming, never industrial, never dark orchestral, never fast party energy, never cold detached delivery",
    sunoMetatags: { vocalStyle: "Belt", vocalEffect: "Reverb, Warm Saturation", mood: "Romantic", energy: "Medium", texture: "Analog warmth", instrument: "Bass Guitar, Rhodes Keys, Gospel Piano, Trap Hi-Hats" }
  },
  POMME: {
    sunoStyleTemplate: "Intimate Indie-Folk Chanson, Fragile Acoustic Vulnerability, Nostalgic French Folk-Pop, 80-100 BPM, Key: C Minor, Analog warmth, Room ambience, Acoustic Guitar Fingerpicking, Autoharp Texture, Soft String Quartet, Minimal Piano, Thin Fragile Female Voice Emotionally Transparent, Gentle Intimate Build to Orchestral Emotional Swell, Warm Acoustic Mix Natural Room, Lyon Folk-Pop Nostalgic Sensitivity, 2020s",
    sunoExcludeStyles: "aggressive rap, metal screaming, industrial noise, heavy bass trap, fast party energy, dark drill, electronic dance, autotune",
    sunoVocalTags: ["[thin fragile voice]", "[emotionally transparent delivery]", "[intimate folk phrasing]", "[nostalgic gentle tone]"],
    sunoWeirdness: 18, sunoStyleInfluence: 78, sunoBpmRange: "80-100", sunoKey: "C Minor",
    vocalDNA: "Thin fragile female voice with emotionally transparent delivery. Intimate folk phrasing suggesting vulnerability and nostalgia. Gentle tone inviting closeness. French chanson tradition meeting indie folk sensibility.",
    flowPattern: "Gentle intimate phrasing with acoustic guitar accompaniment. Minimal melodic movement emphasizing lyrical intimacy. Verse builds to orchestral emotional swells. Overall restraint creating powerful emotional impact.",
    productionFingerprint: "Acoustic guitar fingerpicking as foundation, autoharp adding unique texture, soft string quartet arrangements, minimal piano moments, warm analog production, intimate room ambience, overall nostalgic indie-folk atmosphere",
    culturalAnchors: "French indie-folk sensitivity, Victoires de la Musique recognition, Lyon artistic identity, Saisons album with Aaron Dessner, LGBTQ+ representation, nostalgic vulnerability as artistic identity",
    antiPatterns: "Never aggressive rap, never metal screaming, never heavy bass trap, never fast party, never dark drill, never electronic dance, never autotune",
    sunoMetatags: { vocalStyle: "Soft", vocalEffect: "Subtle Reverb", mood: "Melancholic", energy: "Low", texture: "Analog warmth", instrument: "Acoustic Guitar, Autoharp, String Quartet, Piano" }
  },
  TIF: {
    sunoStyleTemplate: "Algerian Nostalgic Melodic Rap, Raï-Chaâbi-Gnaoua Fusion, Joyful Melancholic Diaspora, 95-112 BPM, Key: Bb Minor, Analog warmth, Open air, Traditional Algerian Percussion, Oud and Mandole Melodic, Modern Trap Bass, Chaâbi String Textures, Warm Emotional Tenor Arabic-French Bilingual Delivery, Nostalgic Build to Joyful Celebratory Chorus, Warm Organic Mix Blending Traditional and Modern, Algiers-Paris Exile Nostalgic Pride, 2020s",
    sunoExcludeStyles: "metal screaming, industrial noise, dark orchestral, country folk, aggressive drill, hard trap raw, opera classical",
    sunoVocalTags: ["[warm emotional tenor]", "[Arabic-French bilingual delivery]", "[nostalgic joyful phrasing]", "[raï-influenced ornamentation]"],
    sunoWeirdness: 18, sunoStyleInfluence: 80, sunoBpmRange: "95-112", sunoKey: "Bb Minor",
    vocalDNA: "Warm emotional tenor with Arabic-French bilingual delivery. Nostalgic joyful phrasing combining melancholy with celebration. Raï-influenced vocal ornamentation adding Algerian authenticity. Voice carries exile longing and pride simultaneously.",
    flowPattern: "Melodic rap-singing blending French verses with Arabic melodic hooks. Nostalgic phrasing with chaâbi and raï rhythmic influences. Verse intimacy building to joyful celebratory chorus moments. Bilingual switching creating unique rhythmic texture.",
    productionFingerprint: "Traditional Algerian percussion (darbuka, bendir) blending with modern trap bass, oud and mandole melodic lines, chaâbi string textures, modern electronic elements layered with traditional, warm organic production bridging old and new",
    culturalAnchors: "Algerian diaspora identity, exile nostalgia and longing, Algiers-Paris cultural bridge, chaâbi-raï-gnaoua fusion, international live session recognition, breakthrough viral hit, joyful nostalgia as artistic identity",
    antiPatterns: "Never metal screaming, never industrial, never dark orchestral, never aggressive drill, never hard trap raw, never opera classical",
    sunoMetatags: { vocalStyle: "Melodic Rap", vocalEffect: "Reverb", mood: "Melancholic", energy: "Medium", texture: "Analog warmth", instrument: "Algerian Percussion, Oud, Trap Bass, Chaâbi Strings" }
  },
  "KAROL G": {
    sunoStyleTemplate: "Reggaeton Latin Pop Queen, Powerful Female Reggaeton Groove, Bright Latin Dance Energy, 92-105 BPM, Key: G Minor, Digital crisp, Open air, Bouncy Reggaeton Bass, Dembow Rhythm Pattern, Latin Percussion, Bright Synth Stabs, Powerful Female Voice Latin Melodic Delivery, Infectious Build to Dance-Pop Hook, Bright Polished Mix Maximum Latin Energy, Medellín Global Reggaeton Queen, 2020s",
    sunoExcludeStyles: "metal screaming, industrial noise, country folk, opera classical, dark orchestral, lo-fi chill, boom-bap traditional",
    sunoVocalTags: ["[powerful female reggaeton voice]", "[Latin melodic delivery]", "[confident uplifting tone]", "[reggaeton phrasing]"],
    sunoWeirdness: 12, sunoStyleInfluence: 82, sunoBpmRange: "92-105", sunoKey: "G Minor",
    vocalDNA: "Powerful female voice with Latin melodic delivery and reggaeton phrasing. Confident uplifting tone commanding dancefloor. Natural vibrato adding warmth. Colombian accent authentic and flavorful.",
    flowPattern: "Reggaeton dembow-locked placement with Latin syncopation. Catchy hook-focused design. Verse-to-chorus build maximizing dance impact. Infectious groove emphasis throughout.",
    productionFingerprint: "Bouncy reggaeton bass with dembow rhythm pattern, Latin percussion layers, bright synth stabs, polished digital clarity, overall bright Latin dance-pop energy",
    culturalAnchors: "Colombian reggaeton queen, female empowerment anthems, Latin female artist global dominance, Colombian cultural pride, massive album success, Latin pop crossover mastery",
    antiPatterns: "Never metal screaming, never industrial, never dark orchestral, never lo-fi chill, never boom-bap, never country folk",
    sunoMetatags: { vocalStyle: "Power", vocalEffect: "Auto-tune, Reverb", mood: "Uplifting", energy: "High", texture: "Crisp Digital", instrument: "Reggaeton Bass, Dembow Drums, Latin Percussion, Synths" }
  },
  "JUSTIN BIEBER": {
    sunoStyleTemplate: "Pop-R&B Crossover, Smooth Falsetto Pop, Modern Electronic Pop Production, 100-120 BPM, Key: E Minor, Studio polished, Wide stereo reverb, Warm Pop Bass, Clean Electronic Drums, Bright Synth Layers, Acoustic Guitar Accent, Smooth Versatile Tenor-Falsetto Pop Delivery, Catchy Build to Euphoric Pop Chorus, Polished Maximum Pop Clarity, Global Pop-R&B Superstar, 2020s",
    sunoExcludeStyles: "aggressive rap, metal screaming, dark orchestral, industrial noise, country folk extreme, boom-bap traditional, hard drill",
    sunoVocalTags: ["[smooth versatile tenor-falsetto]", "[pop vocal precision]", "[emotional accessibility]", "[radio-friendly delivery]"],
    sunoWeirdness: 10, sunoStyleInfluence: 82, sunoBpmRange: "100-120", sunoKey: "E Minor",
    vocalDNA: "Smooth versatile tenor-falsetto with pop vocal precision. Emotional accessibility without melodrama. Radio-friendly delivery balancing R&B soul with pop catchiness. Capable of both vulnerable ballad and uptempo pop energy.",
    flowPattern: "Pop verse-chorus structure with maximum hook impact. Smooth melodic phrasing with R&B influence. Falsetto moments at emotional peaks. Behind-the-beat pocket creating laid-back pop feel.",
    productionFingerprint: "Warm pop bass, clean electronic drum patterns, bright synth layers, acoustic guitar accents, polished maximum pop clarity, wide stereo mix, overall modern pop-R&B crossover production",
    culturalAnchors: "Global pop superstar, Canadian-American pop mythology, acoustic intimate evolution, pop-R&B crossover mastery, generational pop influence, electronic pop innovation",
    antiPatterns: "Never aggressive rap, never metal screaming, never dark orchestral, never industrial, never hard drill, never country folk extreme",
    sunoMetatags: { vocalStyle: "Falsetto", vocalEffect: "Reverb", mood: "Uplifting", energy: "Medium", texture: "Studio polished", instrument: "Pop Bass, Electronic Drums, Bright Synths, Acoustic Guitar" }
  },
  "POST MALONE": {
    sunoStyleTemplate: "Genre-Bending Melodic Rap-Rock, Emotional Crooning over Trap Beats, Acoustic-Electronic Hybrid, 130-145 BPM, Key: G Minor, Tape saturation, Room ambience, Heavy 808 Bass, Acoustic Guitar Melodic, Trap Hi-Hats, Rock Guitar Layers, Raspy Warm Tenor Melodic Crooning, Emotional Build Intimate Verse to Anthemic Chorus, Warm Hybrid Mix Guitar-Forward, Dallas Genre-Bending Melodic Pioneer, 2020s",
    sunoExcludeStyles: "opera classical, industrial noise, country folk extreme, lo-fi minimal, dark orchestral, boom-bap traditional",
    sunoVocalTags: ["[raspy warm tenor]", "[melodic crooning delivery]", "[genre-bending versatility]", "[emotional vulnerability]"],
    sunoWeirdness: 18, sunoStyleInfluence: 78, sunoBpmRange: "130-145", sunoKey: "G Minor",
    vocalDNA: "Raspy warm tenor with melodic crooning delivery and genre-bending versatility. Emotional vulnerability conveyed through vocal texture. Capable of singing across rap, rock, pop, and country contexts. Distinctive raspy quality as trademark.",
    flowPattern: "Melodic crooning over trap beats with acoustic guitar foundation. Emotional verse intimacy building to anthemic chorus moments. Behind-the-beat relaxed delivery. Genre-switching within single tracks.",
    productionFingerprint: "Heavy 808 bass combined with acoustic guitar melodies, trap hi-hat rolls, rock guitar layers adding depth, tape saturation warmth, overall genre-bending hybrid production",
    culturalAnchors: "Genre-bending pioneer, Southern American identity, emotional evolution across albums, rap-rock-country fluid identity, country genre exploration, artistic depth and vulnerability",
    antiPatterns: "Never opera classical, never industrial, never lo-fi minimal, never dark orchestral, never boom-bap traditional",
    sunoMetatags: { vocalStyle: "Melodic Rap", vocalEffect: "Auto-tune, Reverb", mood: "Melancholic", energy: "Medium", texture: "Tape-Saturated", instrument: "808 Bass, Acoustic Guitar, Trap Hi-Hats, Rock Guitar" }
  },
  "J BALVIN": {
    sunoStyleTemplate: "Reggaeton Pop Minimalist, Colorful Latin Urban, Catchy Melodic Groove, 92-105 BPM, Key: A Minor, Digital crisp, Open air, Bouncy Reggaeton Bass, Clean Dembow Pattern, Minimal Synth Hooks, Bright Pop Polish, Smooth Confident Tenor Latin Melodic Flow, Minimal Build to Colorful Pop-Reggaeton Hook, Bright Clean Mix Maximum Pop Appeal, Medellín Reggaeton Global Ambassador, 2020s",
    sunoExcludeStyles: "metal screaming, industrial noise, dark orchestral, country folk, opera classical, lo-fi chill, boom-bap traditional",
    sunoVocalTags: ["[smooth confident tenor]", "[Latin melodic flow]", "[reggaeton phrasing]", "[colorful pop energy]"],
    sunoWeirdness: 12, sunoStyleInfluence: 80, sunoBpmRange: "92-105", sunoKey: "A Minor",
    vocalDNA: "Smooth confident tenor with Latin melodic flow and reggaeton phrasing. Colorful pop energy conveying celebration. Colombian accent authentic. Minimalist vocal approach letting production shine.",
    flowPattern: "Reggaeton dembow-locked delivery with Latin groove. Catchy minimal hooks designed for maximum pop appeal. Verse-to-chorus pop structure. Infectious groove maintained throughout.",
    productionFingerprint: "Bouncy reggaeton bass, clean dembow rhythm pattern, minimal synth hooks, bright pop polish, digital crisp clarity, overall colorful minimalist Latin urban aesthetic",
    culturalAnchors: "Colombian reggaeton global ambassador, colorful artistic concept albums, Latin urban pop pioneer, global reggaeton mainstream bridge, massive crossover success, minimalist Latin aesthetic",
    antiPatterns: "Never metal screaming, never industrial, never dark orchestral, never lo-fi chill, never boom-bap, never country folk",
    sunoMetatags: { vocalStyle: "Melodic Rap", vocalEffect: "Auto-tune, Reverb", mood: "Uplifting", energy: "Medium→High", texture: "Crisp Digital", instrument: "Reggaeton Bass, Dembow Drums, Minimal Synths" }
  },
  REMA: {
    sunoStyleTemplate: "Afrobeats-Rave Fusion, Infectious Global Groove, High Energy Dance, 105-120 BPM, Key: F# Minor, Digital crisp, Open air, Bouncy Afro Bass, Afrobeats Percussion, Rave Synth Stabs, Electronic Textures, Energetic Melodic Tenor Infectious Afro Delivery, High Energy Build to Rave-Afrobeats Drop, Bright Polished Mix Maximum Groove, Benin City Global Afrobeats Rave Pioneer, 2020s",
    sunoExcludeStyles: "metal screaming, industrial noise, dark orchestral, country folk, opera classical, lo-fi chill, boom-bap traditional, slow ballad",
    sunoVocalTags: ["[energetic melodic tenor]", "[infectious afro delivery]", "[rave energy phrasing]", "[danceable groove-locking]"],
    sunoWeirdness: 20, sunoStyleInfluence: 78, sunoBpmRange: "105-120", sunoKey: "F# Minor",
    vocalDNA: "Energetic melodic tenor with infectious afro delivery and rave energy. Nigerian accent adding authenticity. Danceable groove-locking ability. Voice designed for global dancefloor impact.",
    flowPattern: "Infectious afrobeats groove with rave energy injection. Melodic hooks designed for maximum global appeal. Verse-to-chorus dance build. High energy maintained with groove emphasis.",
    productionFingerprint: "Bouncy afro bass, afrobeats percussion patterns, rave synth stabs adding electronic energy, electronic textures layered, bright polished digital clarity, overall afrobeats-rave fusion production",
    culturalAnchors: "Nigerian afrobeats pioneer, global crossover breakthrough, afrobeats-rave genre fusion, Nigerian cultural export, major label artistic development, global dancefloor domination",
    antiPatterns: "Never metal screaming, never industrial, never dark orchestral, never lo-fi chill, never boom-bap, never slow ballad",
    sunoMetatags: { vocalStyle: "Melodic", vocalEffect: "Reverb, Auto-tune", mood: "Uplifting", energy: "High", texture: "Crisp Digital", instrument: "Afro Bass, Afrobeats Percussion, Rave Synths, Electronic Textures" }
  },
  SADE: {
    sunoStyleTemplate: "Smooth Jazz-Soul Elegance, Silky Intimate Vocals, Sophisticated Groove Minimalism, 90-110 BPM, Key: Eb Minor, Analog warmth, Room ambience, Warm Fretless Bass, Jazz Guitar Clean, Soft Saxophone Melody, Brush Drums, Silky Smooth Alto Effortless Cool Intimate Delivery, Gentle Continuous Groove No Dynamic Extremes, Warm Analog Mix Natural Room, Nigerian-British Smooth Soul Timeless Elegance, 1980s-2000s",
    sunoExcludeStyles: "aggressive rap, metal screaming, industrial noise, fast party energy, heavy bass trap, hard drill, bright pop, autotune",
    sunoVocalTags: ["[silky smooth alto]", "[effortless cool delivery]", "[intimate sophisticated phrasing]", "[timeless elegant tone]"],
    sunoWeirdness: 10, sunoStyleInfluence: 85, sunoBpmRange: "90-110", sunoKey: "Eb Minor",
    vocalDNA: "Silky smooth alto with effortless cool delivery and intimate sophisticated phrasing. Timeless elegant tone conveying both warmth and restraint. Nigerian-British heritage adding unique vocal texture. Voice defines smooth jazz-soul aesthetic.",
    flowPattern: "Gentle continuous groove without dynamic extremes. Behind-the-beat languid phrasing creating cool sophistication. Minimal melodic ornamentation emphasizing simplicity. Vocal restraint as strength.",
    productionFingerprint: "Warm fretless bass providing silky groove, clean jazz guitar, soft saxophone melodic passages, brush drum patterns, analog warmth throughout, intimate room ambience, overall timeless smooth jazz-soul elegance",
    culturalAnchors: "Smooth Operator iconic timelessness, Nigerian-British cultural bridge, jazz-soul sophistication, timeless elegance mythology, minimal but maximum impact artistry, Your Love Is King landmark",
    antiPatterns: "Never aggressive rap, never metal screaming, never fast party energy, never heavy bass trap, never hard drill, never bright pop, never autotune",
    sunoMetatags: { vocalStyle: "Soft", vocalEffect: "Subtle Reverb", mood: "Peaceful", energy: "Low→Medium", texture: "Analog warmth", instrument: "Fretless Bass, Jazz Guitar, Saxophone, Brush Drums" }
  },
};

/**
 * Retrieves the complete Sonic DNA profile for a given artist
 * @param artistName - The name of the artist (case-insensitive, trimmed)
 * @returns The SonicDNA object if found, null otherwise
 */
export function getArtistSonicDNA(artistName: string): SonicDNA | null {
  const key = artistName.toUpperCase().trim();
  return SONIC_DNA_MAP[key] || null;
}

/**
 * Retrieves only the Suno production settings for a given artist
 * Useful for quickly accessing production parameters without the full profile
 * @param artistName - The name of the artist (case-insensitive, trimmed)
 * @returns An object with production settings (weirdness, styleInfluence, bpmRange, key) or null
 */
export function getArtistSunoSettings(
  artistName: string
): {
  weirdness: number;
  styleInfluence: number;
  bpmRange: string;
  key: string;
} | null {
  const dna = getArtistSonicDNA(artistName);
  if (!dna) return null;
  return {
    weirdness: dna.sunoWeirdness,
    styleInfluence: dna.sunoStyleInfluence,
    bpmRange: dna.sunoBpmRange,
    key: dna.sunoKey,
  };
}
