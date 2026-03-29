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
    sunoStyleTemplate: "Melodic Autotune Marseille Pop, Bouncy Chanté-Rappé, Bright Festival Energy, Euphorique Street Anthem, 122-128 BPM, Key: G Minor, Crisp digital clarity, Wide stereo reverb, Piano Stabs, Punchy 808, Synthetic Percs, Shimmering Hi-Hats, High-Pitched Nasal Autotune Crystalline Vocals, Building Verse to Euphoric Chorus Drop, Bright Polished Master Loud Stereo Width, Mediterranean Sun-Kissed Party Energy, 2020s",
    sunoExcludeStyles: "dark orchestral, aggressive rap technique, country, rock, opera, classical, slow ballad, industrial, somber atmosphere",
    sunoVocalTags: ["[nasal crystalline voice]", "[high-pitched autotune]", "[Marseille accent inflection]", "[bouncy rhythmic delivery]"],
    sunoWeirdness: 12,
    sunoStyleInfluence: 85,
    sunoBpmRange: "122-128",
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
    sunoWeirdness: 30,
    sunoStyleInfluence: 78,
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
    sunoStyleTemplate: "Cold Clinical Monotone Rap, Mathematical Syllable Density, Dark Drill Boom-Bap Hybrid, Occult Esoteric Atmosphere, 125-140 BPM, Key: C Minor, Raw unprocessed, Underground bunker, Dark Vinyl Sample Loops, Chopped Orchestral Loops Pitched Down, Dense Triplet Hi-Hat Rolls, Deep Sub-808 Rumble, Monotone Compressed Nasal Mechanical Precision Vocals, Relentless Metronomic Density No Breathing Room, Dark Compressed Mix Heavy Mid-Range, 667 Occultism Pan-African Esoteric Codes, 2020s",
    sunoExcludeStyles: "singing autotune, emotional delivery, bright production, major keys, humor, simple rhyme schemes, acoustic instruments, soulful warmth",
    sunoVocalTags: ["[monotone compressed midrange]", "[mechanical precision delivery]", "[zero melodic inflection]", "[clinical detachment]"],
    sunoWeirdness: 28,
    sunoStyleInfluence: 75,
    sunoBpmRange: "125-140",
    sunoKey: "C Minor",
    vocalDNA: "Monotone cold clinical delivery with slightly nasal compressed midrange register. Zero melodic inflection maintaining constant pitch level regardless of lyrical content. Mechanical precision with metronomic syllable placement. Voice used purely as percussion instrument.",
    flowPattern: "Strictly metronomic on-beat syllable placement with mathematical density of multi-syllabic internal rhymes creating rhythmic complexity. Voice becomes percussion within the beat grid. No syncopation or behind-the-beat phrasing, purely mathematical alignment.",
    productionFingerprint: "Dark vinyl sample loops creating ominous atmosphere, chopped orchestral loops pitched down for menace, boom-bap drum patterns with hard-hitting snares, deep sub-808 bass rumble, dense triplet hi-hat rolls, dark drill energy with boom-bap structure",
    culturalAnchors: "Occultism and Raëlism references, 667 collective mythology, conspiracy theory language, coded esoteric communication, manga/anime references, Pan-Africanism, sports metaphors as life narrative",
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
    sunoWeirdness: 35,
    sunoStyleInfluence: 78,
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
    sunoWeirdness: 30,
    sunoStyleInfluence: 78,
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
    sunoWeirdness: 40,
    sunoStyleInfluence: 72,
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
    sunoStyleTemplate: "Dark Aggressive French Trap, Commanding Baritone Force, Cold Menacing Atmosphere, 135-145 BPM, Key: B Minor, Raw unprocessed, Underground bunker, Heavy Distorted 808, Frantic Triplet Hi-Hats, Dark Synth Stabs, Metallic Percs, 2010s",
    sunoExcludeStyles: "singing pop, soft acoustic, country folk, bright happy, classical opera, lo-fi chill, reggaeton dembow",
    sunoVocalTags: ["[deep commanding baritone]", "[aggressive forceful delivery]", "[menacing vocal presence]", "[dark intense phrasing]"],
    sunoWeirdness: 25,
    sunoStyleInfluence: 78,
    sunoBpmRange: "135-145",
    sunoKey: "B Minor",
    vocalDNA: "Deep commanding baritone with aggressive forceful delivery emphasizing menace and dominance. Guttural vocal quality suggesting danger and intensity. Zero melodic inflection, pure aggressive force. Voice used as weapon.",
    flowPattern: "Rapid syllable delivery with percussive consonant strikes, aggressive vocal attacks, minimal behind-the-beat phrasing, maximum intensity throughout. Occasional pause breaks for dramatic effect. Aggressive energy unwavering.",
    productionFingerprint: "Dark aggressive trap base, raw unprocessed sound emphasizing brutality, underground bunker echo creating heaviness, heavy distorted 808 bass, frantic triplet hi-hat rolls, dark synth stabs creating menace, metallic percussion strikes",
    culturalAnchors: "Dark French trap dominance, street aggression narratives, criminal mythology positioning, parisian grime influence, raw street reality, uncompromising artistic positioning",
    antiPatterns: "Never singing or pop vocals, never soft acoustic, never bright happy, never country folk, never lo-fi chill, never reggaeton dembow",
    sunoMetatags: {
      vocalStyle: "Power Rap",
      vocalEffect: "Distortion",
      mood: "Aggressive",
      energy: "Maximum",
      texture: "Raw unprocessed",
      instrument: "808 Bass, Triplet Hi-Hats, Dark Synths"
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
    sunoWeirdness: 26,
    sunoStyleInfluence: 74,
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
    sunoWeirdness: 38,
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
    sunoWeirdness: 24,
    sunoStyleInfluence: 78,
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
    sunoWeirdness: 22,
    sunoStyleInfluence: 78,
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
  "TAME IMPALA": {
    sunoStyleTemplate: "Psychedelic Dreamy Indie Pop, Ethereal Layered Textures, Lo-Fi Ambient Immersion, 100-115 BPM, Key: D Minor, Analog warmth, Cathedral reverb, Fuzzy Warm Bass, Lush Synth Pads, Distorted Guitar, Delayed Drums, 2010s",
    sunoExcludeStyles: "aggressive metal hard rock, country rap, dark orchestral, opera classical, loud industrial noise, boom-bap hip-hop",
    sunoVocalTags: ["[falsetto layered harmony]", "[ethereal vocal delivery]", "[dreamy vocal texture]", "[psychedelic vocal processing]"],
    sunoWeirdness: 32,
    sunoStyleInfluence: 78,
    sunoBpmRange: "100-115",
    sunoKey: "D Minor",
    vocalDNA: "Falsetto layered vocal harmony creating ethereal texture and dreamy quality. Psychedelic vocal processing creating spacious effect. Vocal layering emphasizing texture over clarity. Ethereal emotional expression conveyed through processing.",
    flowPattern: "Spacious phrasing with extended reverb creating distance, syncopation minimal with floating sensation, delayed drum patterns creating rhythmic ambiguity, vocal placement emphasizing space and texture.",
    productionFingerprint: "Distorted guitar wall creation emphasizing texture, cathedral reverb space creating massive environment, fuzzy warm bass providing foundation, lush synth pad layering, delayed drum patterns creating rhythmic ambiguity",
    culturalAnchors: "Psychedelic indie rock innovation, dreamy ethereal aesthetics, lo-fi ambient exploration, youth nostalgia mythology, Australian indie credibility, experimental production boundary-pushing",
    antiPatterns: "Never aggressive metal hard rock, never country rap approach, never dark orchestral, never opera classical, never loud industrial noise",
    sunoMetatags: {
      vocalStyle: "Falsetto",
      vocalEffect: "Reverb, Delay",
      mood: "Peaceful",
      energy: "Medium",
      texture: "Analog warmth",
      instrument: "Synth Pads, Distorted Guitar, Bass"
    }
  },
  SOOLKING: {
    sunoStyleTemplate: "Algerian Afro-Pop Dancehall, Caribbean Melodic Energy, Infectious Groove Celebration, 98-110 BPM, Key: C Minor, Digital crisp, Open air, Bouncy Round Bass, Afro Percussion, Synth Horn Stabs, Riddim Drums, 2020s",
    sunoExcludeStyles: "dark depressing atmosphere, metal aggressive, classical opera, slow ballad, industrial noise, minimalist sparse production",
    sunoVocalTags: ["[confident energetic delivery]", "[afro-influenced phrasing]", "[dancing rhythm locking]", "[positive uplifting tone]"],
    sunoWeirdness: 14,
    sunoStyleInfluence: 80,
    sunoBpmRange: "98-110",
    sunoKey: "C Minor",
    vocalDNA: "Confident energetic male voice with afro-influenced phrasing and dancing rhythm-locking ability. Conversational accessibility with infectious energy. Positive uplifting delivery emphasizing joy. Caribbean-influenced inflection.",
    flowPattern: "Groove-locking placement emphasizing infectious bounce and head-nod rhythm, syncopated afro-dancehall phrasing, call-and-response moments with infectious energy, rhythmic pocket emphasized throughout.",
    productionFingerprint: "Digital crisp clarity, open air space with wide stereo, bouncy round bass pocket, authentic afro percussion layers, synth horn stab accents, riddim drum patterns, infectious positive atmosphere",
    culturalAnchors: "Afro-dancehall cultural bridge, Caribbean-African diaspora fusion, infectious groove celebration, festival culture energy, pan-African pride positioning, modern cultural innovation",
    antiPatterns: "Never dark depressing atmosphere, never metal aggressive, never classical operatic, never slow ballad approach, never industrial noise, never minimalist sparse",
    sunoMetatags: {
      vocalStyle: "Melodic Rap",
      vocalEffect: "Auto-tune, Reverb",
      mood: "Uplifting",
      energy: "High",
      texture: "Crisp Digital",
      instrument: "Bass, Afro Percussion, Synth Horns"
    }
  },
  STROMAE: {
    sunoStyleTemplate: "Belgian Electro-World Pop, Rumba Congolaise Rhythms, Dark Danceable Chanson, Theatrical Dramatic Performance, 100-120 BPM, Key: E Minor, Digital crisp, Room ambience, African Percussion Polyrhythms, Synth Bass Driving Groove, Congolaise Drum Patterns, Marimba Melodic Textures, Electronic String Arrangements, Clear Dynamic Voice Whisper to Powerful Projection, Danceable Build African Rhythms to Electronic Climax, Clean Digital Master Precise Stereo Imaging, Rwandan-Belgian Heritage Jacques Brel Chanson Drama, 2010s",
    sunoExcludeStyles: "country rock metal, opera classical, aggressive dark orchestral, loud noise industrial, acoustic guitar warmth, generic trap",
    sunoVocalTags: ["[clear intelligent delivery]", "[witty lyrical phrasing]", "[dramatic vocal dynamics]", "[chanson-meets-electro tone]"],
    sunoWeirdness: 22,
    sunoStyleInfluence: 78,
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
