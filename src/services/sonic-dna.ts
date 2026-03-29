/**
 * Sonic DNA Map v2 - Enhanced artist sound profiles for Suno AI music generation
 * Features ultra-specific textures, vocal characteristics, flow patterns, production fingerprints, and cultural anchors
 * 38 international artists with detailed sonic DNA mapping
 */

export interface SonicDNA {
  // Core production parameters
  sunoStyleTemplate: string;      // 200-250 chars, ultra-specific textures instead of generic genres
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
}

export const SONIC_DNA_MAP: Record<string, SonicDNA> = {
  JUL: {
    sunoStyleTemplate: "Saturated Sub-Bass Crawl, Crystalline High-Pitched Autotune, Marseille Festival Bounce, Punchy 808 Kick, Bright Synth Stabs, Wide Stereo Reverb, Bouncy Chanté-Rappé Flow, Catchy Urban Hooks, Luminous Digital Clarity",
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
    antiPatterns: "Never dark or aggressive, never technical boom-bap flows, never sparse minimalist production, never serious tone, never melancholic atmosphere"
  },
  NINHO: {
    sunoStyleTemplate: "Elastic Vocal Stretching Across Beats, Warm Midrange Fluid Autotune, Melancholic Piano Bed, Round Deep 808, Complex Hi-Hat Rolls, Intimate Booth Reverb, Immigrant Journey Narrative, Smooth Rap-Singing Hybrid, 2020s Melodic Street Soul",
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
    antiPatterns: "Never boom-bap traditional, never fully acoustic, never detached cold delivery, never aggressive energy, never ignoring melody entirely"
  },
  DAMSO: {
    sunoStyleTemplate: "Grave Whisper-Delivery Intimacy, Saturated Grain Industrial Synths, Minimalist Dark Void, Cavernous Sub-Bass Depth, Empty Space Dynamics, Nocturnal Bedroom Reverb, Hypnotic Slow-Burn Intensity, Existential Nihilist Themes, Sensual Darkness",
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
    antiPatterns: "Never bright or uplifting, never fast tempo, never cheerful tone, never acoustic instruments, never major key resolution"
  },
  GAZO: {
    sunoStyleTemplate: "Deep Aggressive Growl, Syncopated Drill Brutality, Sliding 808 Violence, Frantic Triplet Hi-Hats, Dark Piano Stab Accents, Raw Unprocessed Vocals, Rapid-Fire Burst Intensity, Underground Bunker Echo, 2020s French Drill Aggression",
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
    antiPatterns: "Never melodic or singing-oriented, never smooth or polished vocals, never soft production, never cheerful energy, never braggadocio without substance"
  },
  "FREEZE CORLEONE": {
    sunoStyleTemplate: "Monotone Cold Clinical Delivery, Dark Drill Boom-Bap Hybrid, Sliding 808 Unease, Dense Triplet Hi-Hat Walls, Pitched-Down Orchestral Samples, Mathematical Syllable Density, Internal Rhyme Percussion, Metronomic Precision, Occult References, 667 Collective Energy",
    sunoExcludeStyles: "singing autotune, emotional delivery, bright production, major keys, humor, simple rhyme schemes, acoustic instruments, soulful warmth",
    sunoVocalTags: ["[monotone compressed midrange]", "[mechanical precision delivery]", "[zero melodic inflection]", "[clinical detachment]"],
    sunoWeirdness: 28,
    sunoStyleInfluence: 75,
    sunoBpmRange: "125-140",
    sunoKey: "C Minor",
    vocalDNA: "Monotone cold clinical delivery with slightly nasal compressed midrange register. Zero melodic inflection maintaining constant pitch level regardless of lyrical content. Mechanical precision with metronomic syllable placement. Voice used purely as percussion instrument.",
    flowPattern: "Strictly metronomic on-beat syllable placement with mathematical density of multi-syllabic internal rhymes creating rhythmic complexity. Voice becomes percussion within the beat grid. No syncopation or behind-the-beat phrasing, purely mathematical alignment.",
    productionFingerprint: "Dark drill base with boom-bap drum structures, sliding 808s creating pitch movement unease, dense triplet hi-hat rolls at rapid tempo, pitched-down orchestral samples creating ominous atmosphere, sparse melodic elements",
    culturalAnchors: "Occultism and Raëlism references, 667 collective mythology, conspiracy theory language, coded esoteric communication, manga/anime references, Pan-Africanism, sports metaphors as life narrative",
    antiPatterns: "NEVER sings or uses melodic inflection, NEVER uses autotune, NEVER emotional vulnerable delivery, NEVER humor or lightness, NEVER bright uplifting production, NEVER simple rhyme schemes"
  },
  NIRO: {
    sunoStyleTemplate: "Deep Gravelly Raw Street Texture, Heavy Aggressive Vocal Strikes, Decaying 808 Long Tails, Complex Hi-Hat Rolls, Eastern-Influenced String Samples, Sparse Raw Compressed Mix, Locked-Snare Tight Delivery, Franco-Moroccan Identity, Prison Narratives, Blois Suburb Reality",
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
    antiPatterns: "NEVER melodic singing or R&B inflection, NEVER autotune or vocal processing, NEVER polished studio sound, NEVER major-key uplift or hopeful resolution, NEVER braggadocio without emotional grounding"
  },
  ZAHO: {
    sunoStyleTemplate: "Warm Soulful Alto Elegance, Clean Polished R&B Tone, Subtle Vibrato Control, Selective Melisma Moments, Layered Synth Pad Warmth, Crisp Timbaland-Style Hi-Hats, Defined 808 Bass Definition, Orchestral String Climax, Arabic Instrumentation Texture, Montreal Urban Sophistication",
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
    antiPatterns: "NEVER oversinging or gospel pyrotechnics, NEVER aggressive trap production, NEVER heavy autotune distortion, NEVER reggaeton/dembow rhythms, NEVER sparse minimalist arrangements"
  },
  PNL: {
    sunoStyleTemplate: "Ethereal Floating Autotune, Atmospheric Cloud Drift, Spatial Cathedral Reverb, Deep Slow 808 Rumble, Ethereal Synth Pad Layers, Minimal Ghost Percussion, Layered Floating Harmonies, Massive Reverb Trails, Nocturnal Contemplation, 2010s Cloud Rap Ethereality",
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
    antiPatterns: "Never aggressive or fast-paced, never bright uplifting energy, never drum-heavy percussion, never lyrical technique showcase, never cheerful tone"
  },
  BOOBA: {
    sunoStyleTemplate: "Hardcore Cinematic Orchestration, Dark Choir Pads Menace, Dramatic String Arrangements, Aggressive Percussion Assault, Heavy Distorted 808 Dominance, Stadium Dark Reverb, Authoritative Baritone Power, Saccadic Rhythmic Attacks, Dark Orchestral Authority, 2020s Cinematic Dominance",
    sunoExcludeStyles: "soft acoustic pop, country folk gentle, happy bright atmosphere, nursery rhymes, lo-fi chill, smooth R&B warmth, acoustic guitar layers",
    sunoVocalTags: ["[deep authoritative baritone]", "[dominant aggressive delivery]", "[stadium-filling projection]", "[orchestral dramatic phrasing]"],
    sunoWeirdness: 18,
    sunoStyleInfluence: 82,
    sunoBpmRange: "130-142",
    sunoKey: "C# Minor",
    vocalDNA: "Deep authoritative baritone with commanding projection designed to fill stadiums. Aggressive vocal strikes emphasizing power and dominance. Orchestral phrasing treating voice as instrument within symphonic arrangement. Minimal melodic inflection, focus on vocal power.",
    flowPattern: "Saccadic rhythmic attacks with sudden pauses and dramatic emphasis. Syllables struck with percussive force locking to kick/snare. Breath control emphasizing power over flow smoothness. Occasional long-held syllables for dramatic effect.",
    productionFingerprint: "Dark orchestral arrangement with choir pads creating menace, dramatic string sweeps, aggressive percussion layers with multiple kick/snare hits, heavy distorted 808 bass creating sub-bass rumble, stadium reverb creating massive space",
    culturalAnchors: "French rap godfather mythology, criminal undertones and street hierarchy, material success narratives, international dominance claims, generational authority, African heritage pride",
    antiPatterns: "Never soft or gentle delivery, never acoustic warmth, never happy uplifting tone, never lo-fi minimalist production, never vulnerable emotional display"
  },
  HAMZA: {
    sunoStyleTemplate: "Smooth Nonchalant R&B-Rap, Suave Nocturnal Intimacy, Polished Digital Sheen, Luxurious Synth Pad Layers, Clean Hi-Hat Precision, Smooth Warm Key Tones, Deep Round 808 Pocket, Intimate Club Ambience, Sauce-Influenced Elegance, 2020s Melodic Smoothness",
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
    antiPatterns: "Never aggressive or dark, never raw gritty production, never boom-bap traditional, never harsh consonant strikes, never serious confrontational tone"
  },
  "TRAVIS SCOTT": {
    sunoStyleTemplate: "Psychedelic Distorted Saturation, Cosmic Ambient Layers, Beat-Switch Heavy Production, Flanger Percussion Chaos, Reverbed Ad-Lib Loops, Spacey Autotune Chopping, Phase Reverb Massive, Atmospheric Synth Drowning, Psychotropic Mood Landscape, 2020s Psychedelic Trap Cosmos",
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
    antiPatterns: "Never straightforward clear vocals, never acoustic instrument-focused, never simple beat structures, never calm ambient music, never polished clean production"
  },
  DRAKE: {
    sunoStyleTemplate: "Emotional Smooth R&B-Trap Hybrid, Intimate Nocturnal Mood, Polished Studio Clarity, Warm 808 Pocket Depth, R&B Piano Chord Layers, Soft Pad Warmth, Clean Trap Drum Precision, Room Ambience Intimacy, Smooth Versatile Delivery, 2020s Melodic Rap Gold Standard",
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
    antiPatterns: "Never aggressive metal or screaming, never hard rock approach, never industrial harshness, never experimental noise, never detached emotional tone"
  },
  TIAKOLA: {
    sunoStyleTemplate: "Ultra-Melodic Afro-Pop Luminosity, Joyful Singing Flow, Warm Bouncy 808 Energy, Melodic Guitar Riff Brightness, Afro Percussion Shaker Layers, Luminous Synth Pad Glow, High Melodic Voice Soaring, Wide Open Stereo Celebration, 2020s Afro-Melodic Joy Standard",
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
    antiPatterns: "Never dark or aggressive atmosphere, never drill energy, never metal or loud noise, never depressing melancholic tone, never sparse minimalist arrangement"
  },
  "AYA NAKAMURA": {
    sunoStyleTemplate: "Afro-Pop Urbaine Catchiness, Dancehall-Pop Groove Machine, Hook-Focused Composition, Bright Pop Polish Production, Warm Round Bass Bounce, Pop Melodic Guitar Riffs, Light Afro Percussion Layers, Bouncy Synth Stabs, Powerful Female Voice, Catchy Vocal Hooks, 2020s French Pop Phenomenon",
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
    antiPatterns: "Never dark serious atmosphere, never metal or aggressive sound, never slow depressing ballad, never boom-bap rap technique, never minimalist sparse production"
  },
  KALASH: {
    sunoStyleTemplate: "Dancehall-Rap Fusion Energy, Infectious Groove Bounce, Lyrical Jamaica Vibes, Bright Reggae Percussion, Warm Punchy Bass Pocket, Light Reggae Drum Riddim, Bouncy Synth Horn Stabs, Energetic Confident Vocal Delivery, 2010s Dancehall-Rap Bridge Standard",
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
    antiPatterns: "Never dark or aggressive atmosphere, never metal or hard sound, never slow depressing tone, never boom-bap traditional technique, never sparse minimalist production"
  },
  NEKFEU: {
    sunoStyleTemplate: "Lyrical Pop-Rap Storytelling, Poetic Modern Boom Bap, Luminous Narrative Flow, Warm Round Bass Foundation, Acoustic Guitar Melody Lines, Jazz Piano Chord Sophistication, Organic Drum Character, Clear Articulate Vocal Delivery, 2010s Lyrical French Rap Excellence Standard",
    sunoExcludeStyles: "heavy autotune distortion, generic trap beats, dark orchestral horror, aggressive screaming, industrial noise, fast drill energy",
    sunoVocalTags: ["[clear articulate delivery]", "[poetic narrative phrasing]", "[storytelling mastery]", "[warm conversational tone]"],
    sunoWeirdness: 20,
    sunoStyleInfluence: 75,
    sunoBpmRange: "90-105",
    sunoKey: "A Minor",
    vocalDNA: "Clear articulate male voice emphasizing lyrical clarity and narrative phrasing. Poetic intonation suggesting intellectualism and emotional depth. Zero autotune processing, organic delivery emphasizing vocal authenticity. Warm tone inviting listener intimacy.",
    flowPattern: "Behind-the-beat phrasing creating pocket comfort and lyrical emphasis. Storytelling focus with clear enunciation. Verse construction prioritizing narrative arc over technical rhyme density. Melodic variation supporting emotional content.",
    productionFingerprint: "Warm round bass providing foundation, acoustic guitar melody lines adding warmth, jazz piano chord sophistication supporting harmony, organic drum character with emphasis on live feel, studio polished clarity without coldness",
    culturalAnchors: "Parisian intellectual hip-hop, poetic storytelling tradition, introspective narrative themes, social commentary, personal memoir elements, lyrical sophistication emphasis",
    antiPatterns: "Never heavy autotune or vocal distortion, never generic trap production, never dark orchestral atmosphere, never aggressive screaming, never fast drill energy"
  },
  LAYLOW: {
    sunoStyleTemplate: "Futuristic Digital Glitch Texture, Experimental R&B-Rap Hybrid, Cinematic Dystopian Mood, Granular Texture Processing, Void Space Immersion, Deep Pitched 808 Experimentation, Futuristic Synth Pads Innovation, Glitchy Electronic Percussion, Pitch-Shifted Layered Vocals, 2020s Experimental Boundary-Pushing",
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
    antiPatterns: "Never acoustic or traditional instruments, never conventional boom-bap production, never clear straightforward vocals, never folk or traditional music, never lo-fi chill aesthetic"
  },
  SDM: {
    sunoStyleTemplate: "Dark Afro-Street Melodic Blend, Nocturnal Urban Autotune, Somber Melodic Rap-Flow Hybrid, Warm Tape Saturation, Intimate Dark Space, Deep Round 808 Pocket, Melancholic Piano Key Layers, Subtle Afro Percussion Accents, Complex Hi-Hat Roll Patterns, Grave Melodic Delivery, 2020s Dark Afro-Trap Soul",
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
    antiPatterns: "Never bright or happy atmosphere, never festive celebratory energy, never country rock influence, never classical operatic approach, never minimalist sparse production"
  },
  NISKA: {
    sunoStyleTemplate: "Festive Afro-Trap Energy Explosion, Dancehall-Rap Bounce Mastery, Energetic Street Party Vibes, Bright Digital Polish, Open Air Festival Space, Bouncy 808 Kick Punch, Synthetic Conga Percussion Layers, Dancehall Riddim Element Integration, Festive Brass Stab Accents, Energetic Male Vocal Projection, 2020s Afro-Trap Festival Phenomenon",
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
    antiPatterns: "Never dark or depressing atmosphere, never minimalist sparse production, never slow tempo, never serious aggressive tone, never metal or industrial noise"
  },
  "CENTRAL CEE": {
    sunoStyleTemplate: "UK Melodic Drill Signature, London Street Cool Swagger, Sliding Syncopated Flow Mastery, Crisp Digital Clarity, Underground Club Echo, Sliding 808 Bass Menace, Triplet Hi-Hat Precision, Melancholic Piano Melody Support, Clean Snare Hit Punch, Cool Confident Vocal Tone, 2020s UK Drill Global Bridge",
    sunoExcludeStyles: "singing pop vocals, country folk, rock metal, opera classical, happy bright, French rap, boom-bap traditional",
    sunoVocalTags: ["[cool confident delivery]", "[sliding syncopated phrasing]", "[london accent inflection]", "[melodic drill flow]"],
    sunoWeirdness: 18,
    sunoStyleInfluence: 80,
    sunoBpmRange: "140-145",
    sunoKey: "G Minor",
    vocalDNA: "Cool confident male voice with London accent influence and melodic sensibility within drill context. Sliding syncopated delivery riding beat wave. Conversational tone with street authority. Minimal emotion display, maximum cool positioning.",
    flowPattern: "Sliding syncopated placement riding beat wave with melodic contours. Syllables stretched across beat boundaries creating elasticity. Behind-the-beat pocket creating cool swagger. Rapid bursts alternating with spacious moments.",
    productionFingerprint: "Crisp digital clarity emphasizing precision, underground club echo creating space, sliding 808 bass creating movement unease, triplet hi-hat patterns at rapid precision, melancholic piano melody providing emotional anchor, clean snare hits providing punch",
    culturalAnchors: "London street culture and British drill innovation, international UK rap bridge, cool swagger positioning, street narrative credibility, African-British heritage pride, global hip-hop reach",
    antiPatterns: "Never singing pop vocals, never country rock influence, never happy bright atmosphere, never boom-bap traditional, never French rap aesthetics"
  },
  "ALPHA WANN": {
    sunoStyleTemplate: "Elite Technical Lyrical French Rap, Modern Dark Boom Bap Minimalism, Cold Surgical Flow Precision, Raw Studio Dryness, Intimate Dry Booth Space, Minimal Dark Bass Presence, Sparse Piano Key Accents, Heavy Punchy Drum Hits, Tight Snare Crack Precision, Dry Baritone Detachment, 2010s Dark Minimalist Excellence",
    sunoExcludeStyles: "singing autotune pop, happy melodic, bright festive, jazz warm soulful, country rock, classical opera, generic trap",
    sunoVocalTags: ["[dry baritone delivery]", "[cold surgical precision]", "[minimal melodic inflection]", "[technical rhyme mastery]"],
    sunoWeirdness: 15,
    sunoStyleInfluence: 82,
    sunoBpmRange: "88-98",
    sunoKey: "D Minor",
    vocalDNA: "Dry baritone with cold surgical precision and minimal emotional inflection. Technical vocal control emphasizing word articulation over melodic shaping. Zero autotune or warmth, pure raw delivery. Detached intellectual positioning.",
    flowPattern: "Technical rhyme density with surgical syllable placement, on-beat emphasis with occasional syncopation, internal rhyme complexity demonstrated, minimal breath spaces, precise word articulation emphasized throughout.",
    productionFingerprint: "Raw studio dryness with intimate dry booth feel, minimal dark bass presence avoiding boom, sparse piano key accents providing minimal harmony, heavy punchy drum hits with emphasis on snare crack precision, minimalist overall aesthetic",
    culturalAnchors: "Lyrical technical excellence showcase, intellectual hip-hop positioning, Parisian elite rap credibility, dark atmospheric mood, literary reference density, complex multi-layered messaging",
    antiPatterns: "Never singing or melodic hooks, never autotune application, never happy uplifting tone, never bright festive atmosphere, never warm soulful jazz influence"
  },
  KAARIS: {
    sunoStyleTemplate: "Dark Aggressive French Trap Dominance, Heavy Distorted Bass Foundation, Cold Menacing Production Atmosphere, Underground Echo Space, Heavy Distorted 808 Bass Layer, Frantic Triplet Hi-Hat Rolls, Dark Synth Stab Accents, Metallic Percussion Elements, Commanding Baritone Force, 2010s Dark Trap Authority Standard",
    sunoExcludeStyles: "singing melodic pop, acoustic guitar, happy bright, country rock, soft gentle, opera classical, festive energy",
    sunoVocalTags: ["[commanding baritone force]", "[aggressive vocal delivery]", "[zero melodic inflection]", "[dark authority presence]"],
    sunoWeirdness: 20,
    sunoStyleInfluence: 82,
    sunoBpmRange: "135-145",
    sunoKey: "B Minor",
    vocalDNA: "Commanding baritone with aggressive vocal delivery and zero melodic inflection. Percussive vocal strikes emphasizing force and authority. Deep register creating masculine dominance. Minimal emotion display, maximum power positioning.",
    flowPattern: "Aggressive delivery locked to beat grid with percussive consonant attacks. Rapid syllable density alternating with dramatic pauses. Zero behind-the-beat phrasing, strictly on-beat aggression. Rhythmic precision emphasized.",
    productionFingerprint: "Dark aggressive atmosphere with menacing mood, heavy distorted 808 bass creating deep rumble, frantic triplet hi-hat rolls at breakneck precision, dark synth stab accents creating tension, metallic percussion elements adding texture",
    culturalAnchors: "Dark French trap dominance, aggressive street narratives, physical power posturing, territorial authority claims, dark mood embracement, aggressive swagger positioning",
    antiPatterns: "Never singing or melodic pop, never acoustic guitar, never happy bright atmosphere, never soft gentle delivery, never festive energy"
  },
  "NATE DOGG": {
    sunoStyleTemplate: "G-Funk R&B West Coast Smoothness, Smooth Melodic Hook Mastery, Synth-Heavy Harmonic Layers, Warm Analog Warmth Character, Open Stadium Space, Deep Bouncy Bass Pocket, Lush Synth String Arrangements, Funky Drum Character Feel, Warm Soulful Male Voice, 1990s G-Funk Soul Bridge Standard",
    sunoExcludeStyles: "aggressive metal screaming, country rock, opera classical, dark orchestral, industrial noise, fast drill energy",
    sunoVocalTags: ["[warm soulful voice]", "[smooth melodic phrasing]", "[r&b vocal control]", "[comfortable pocket delivery]"],
    sunoWeirdness: 16,
    sunoStyleInfluence: 80,
    sunoBpmRange: "95-110",
    sunoKey: "F Minor",
    vocalDNA: "Warm soulful male voice with smooth melodic phrasing and R&B vocal control. Extended note holding with controlled vibrato. Conversational accessibility with musical sophistication. West Coast cool laid-back delivery.",
    flowPattern: "Smooth behind-the-beat placement creating pocket comfort, extended melodic phrases allowing vocal showmanship, conversational verses with soaring hook moments, rhythmic pocket emphasized throughout.",
    productionFingerprint: "Warm analog warmth throughout production, open stadium space with wide stereo imaging, deep bouncy bass pocket providing groove, lush synth string arrangements supporting melody, funky drum character emphasizing organic feel",
    culturalAnchors: "1990s West Coast G-Funk legend, R&B/rap hybrid innovation, smooth cool positioning, laid-back California vibes, soulful vocal mastery, hip-hop soul bridge building",
    antiPatterns: "Never aggressive metal or screaming, never country rock approach, never dark orchestral mood, never industrial noise, never fast aggressive energy"
  },
  VALD: {
    sunoStyleTemplate: "Dark Lyrically Complex Rap Study, Experimental Cold Production Innovation, Introspective Minimal Beat Space, Raw Studio Dryness, Intimate Dry Booth Recording, Dark Minimal Bass Presence, Distorted Synth Stab Accents, Sparse Drum Minimalism, Cold Detached Vocal Delivery, 2010s Dark Experimental Boundary-Pushing",
    sunoExcludeStyles: "singing autotune pop, happy melodic, bright festive, warm soulful, country rock, opera classical, aggressive noise",
    sunoVocalTags: ["[cold detached delivery]", "[minimal vocal variation]", "[intellectually complex flow]", "[dark moody phrasing]"],
    sunoWeirdness: 26,
    sunoStyleInfluence: 74,
    sunoBpmRange: "90-100",
    sunoKey: "D Minor",
    vocalDNA: "Cold detached male voice emphasizing lyrical complexity over melodic accessibility. Minimal vocal variation maintaining consistent tone throughout. Technical vocal control emphasizing word clarity. Intellectually-focused delivery suggesting philosophical depth.",
    flowPattern: "Complex internal rhyme structures with technical precision, minimal melodic inflection, on-beat emphasis with occasional syncopation, word articulation emphasized, minimal emotional vocal expression.",
    productionFingerprint: "Raw studio dryness with intimate dry booth feel, dark minimal bass presence, distorted synth stab accents creating unease, sparse drum minimalism reducing percussion to essentials, overall dark minimalist aesthetic",
    culturalAnchors: "Dark experimental French rap innovation, intellectual lyrical focus, philosophical complexity, experimental production boundaries, introspective mood exploration, literary reference density",
    antiPatterns: "Never singing or melodic pop hooks, never autotune warmth, never happy uplifting tone, never bright festive atmosphere, never warm soulful approach"
  },
  "PLAYBOI CARTI": {
    sunoStyleTemplate: "Experimental Trap-Rap Psychedelia, Psychedelic Vocal Chopping Texture, Baby Voice Ad-Lib Layers, Distorted Saturated Grain, Chaotic Psychedelic Space, Heavy Distorted 808 Chaos, Triplet Hi-Hat Roll Frenzy, Synth Chaos Layers, Pitched Layered Vocal Processing, 2020s Experimental Trap Boundary Breaking",
    sunoExcludeStyles: "singing acoustic, country folk, rock metal, opera classical, folk traditional, boom-bap conventional, clear straightforward vocals",
    sunoVocalTags: ["[experimental vocal chopping]", "[baby voice ad-libs]", "[pitched vocal layers]", "[psychedelic vocal texture]"],
    sunoWeirdness: 45,
    sunoStyleInfluence: 76,
    sunoBpmRange: "130-145",
    sunoKey: "B Minor",
    vocalDNA: "Experimental vocal chopping creating psychedelic texture, baby voice ad-lib layers added as sonic elements. Pitched vocal processing removing natural tone. Intelligibility secondary to sonic experimentation. Voice as instrument rather than communication vehicle.",
    flowPattern: "Rhythm experimental and unconventional with beat grid as suggestion. Rapid ad-lib loops creating texture. Syncopation inconsistent and disorienting by design. Vocal stuttering and repetition creating percussive elements.",
    productionFingerprint: "Distorted saturated grain throughout, chaotic psychedelic space with layered effects, heavy distorted 808 creating bass chaos, triplet hi-hat roll frenzy at breakneck pace, synth chaos layers creating walls of sound",
    culturalAnchors: "Experimental trap innovation, Gen-Z aesthetics and youth culture, psychedelic drug-adjacent imagery, boundary-pushing production experimentation, viral culture references, unconventional artistic positioning",
    antiPatterns: "Never singing or acoustic, never country rock, never straightforward clear vocals, never boom-bap conventional, never folk traditional approach"
  },
  "KANYE WEST": {
    sunoStyleTemplate: "Ambitious Orchestral Soul Sampling, Melodic Innovative Flow Mastery, Soul Sample Chopping Expertise, Polished Epic Clarity, Cathedral Grand Reverb Space, Deep Warm Bass Foundation, Orchestral String Layers, Chopped Soul Sample Integration, Emotional Male Vocal Expression, 2010s Orchestral Hip-Hop Innovation",
    sunoExcludeStyles: "country folk, rock metal, opera cliché, cheap generic trap, lo-fi chill minimalist, nursery rhymes, industrial noise",
    sunoVocalTags: ["[emotional expressive delivery]", "[melodic vocal phrasing]", "[ambitious vocal range]", "[innovative flow variation]"],
    sunoWeirdness: 28,
    sunoStyleInfluence: 80,
    sunoBpmRange: "90-110",
    sunoKey: "C Minor",
    vocalDNA: "Emotional expressive male voice with melodic sensibility and innovative flow variation capability. Range spanning rapped and sung phrasing. Ambitious vocal approach matching orchestral production. Vulnerability balanced with authority.",
    flowPattern: "Melodic rap-singing hybrid with frequent phrasing shifts, beat placement emphasizing musical contour, conversational accessibility with ambitious moments, flow variation supporting emotional architecture.",
    productionFingerprint: "Polished epic clarity with cathedral grand reverb, orchestral string layers providing harmonic richness, deep warm bass foundation creating body, chopped soul samples creating rhythmic texture, overall orchestral grandeur",
    culturalAnchors: "Hip-hop production innovation pioneer, orchestral soul sampling mastery, ambitious artistic vision, controversial provocative positioning, cultural influence scope, philanthropic narratives",
    antiPatterns: "Never country folk or rock metal, never cheap generic trap production, never lo-fi chill minimalism, never operatic cliché, never industrial noise approach"
  },
  "KENDRICK LAMAR": {
    sunoStyleTemplate: "Lyrical Conscious Rap Mastery, Dynamic Complex Production Intelligence, Emotional Storytelling Depth, Raw Studio Clarity, Room Ambience Warmth, Round Organic Bass Pocket, Jazz Piano Chord Sophistication, Orchestral Element Integration, Varied Drum Pattern Creativity, Clear Powerful Vocal Delivery, 2010s Conscious Rap Excellence Standard",
    sunoExcludeStyles: "singing autotune heavy, country rock metal, pop generic, aggressive screaming, industrial noise, nursery rhymes, bright happy",
    sunoVocalTags: ["[clear powerful delivery]", "[dynamic vocal variation]", "[storytelling mastery]", "[emotionally intelligent phrasing]"],
    sunoWeirdness: 20,
    sunoStyleInfluence: 78,
    sunoBpmRange: "85-105",
    sunoKey: "D Minor",
    vocalDNA: "Clear powerful male voice emphasizing lyrical clarity and storytelling mastery. Dynamic vocal variation supporting narrative emotional arc. Zero autotune processing, organic delivery emphasizing vocal authenticity. Range spanning rapped and sung phrasing.",
    flowPattern: "Dynamic flow variation supporting narrative structure, behind-the-beat placement creating pocket comfort, conversational clarity emphasized, emotional vocal expression supporting lyrical content.",
    productionFingerprint: "Raw studio clarity with room ambience warmth, round organic bass pocket providing groove, jazz piano chord sophistication supporting harmony, orchestral elements supporting emotional moments, varied drum pattern creativity throughout",
    culturalAnchors: "Conscious hip-hop excellence standard, introspective personal narrative mastery, social commentary depth, spiritual exploration themes, west coast family legacy, hip-hop consciousness leadership",
    antiPatterns: "Never heavy autotune or vocal distortion, never country rock metal, never generic pop approach, never aggressive screaming, never bright happy atmosphere"
  },
  "LANA DEL REY": {
    sunoStyleTemplate: "Dark Cinematic Pop Atmosphere, Noir-Influenced Melancholic Mood, Orchestral Vintage Hollywood, Warm Analog Saturation, Cathedral Reverb Space, Deep Round Bass Rumble, Lush Orchestral String Arrangements, Soft Pad Warmth Layers, Ethereal Breathy Female Voice, Vintage Cigarette Smoke Aesthetic, 2010s Cinematic Pop Standard",
    sunoExcludeStyles: "aggressive metal screaming, rock hard, country uplifting, pop bright generic, nursery children, happy uplifting, industrial noise",
    sunoVocalTags: ["[ethereal breathy voice]", "[melancholic vocal tone]", "[vintage hollywood delivery]", "[slow contemplative phrasing]"],
    sunoWeirdness: 26,
    sunoStyleInfluence: 80,
    sunoBpmRange: "60-80",
    sunoKey: "G Minor",
    vocalDNA: "Ethereal breathy female voice with melancholic vocal tone and vintage Hollywood inflection. Slow contemplative phrasing emphasizing space over speed. Controlled vibrato adding dimension. Nostalgic longing permeates delivery.",
    flowPattern: "Slow contemplative phrasing with extended pauses, behind-the-beat placement creating space and reflection, minimal rhythmic urgency, melodic contour driving emotional expression.",
    productionFingerprint: "Warm analog saturation adding vintage character, cathedral reverb space creating massive environment, deep round bass rumble providing foundation, lush orchestral string arrangements, soft synth pad warmth creating intimacy",
    culturalAnchors: "Vintage Hollywood nostalgia and aesthetics, noir cinematic mood, melancholic romantic narratives, cigarette smoke aesthetic, retro-futurism references, dark romance mythology",
    antiPatterns: "Never aggressive metal or screaming, never rock hard approach, never country uplifting, never bright generic pop, never children nursery, never happy uplifting tone"
  },
  ROSALÍA: {
    sunoStyleTemplate: "Latin Experimental Flamenco-Trap Fusion, Ethereal Vocal Innovation Boundary, Minimal Spanish Beat Space, Distorted Guitar Sample Walls, Cave Reverb Space Depth, Deep Minimal Bass Foundation, Percussive Click Textures, Flamenco String Accent Moments, Ethereal Female Voice Processing, 2020s Experimental Latin Boundary-Breaking",
    sunoExcludeStyles: "traditional boom-bap conventional, country rock, pop generic cliché, opera classical, reggaeton cliché overdone, straightforward mainstream",
    sunoVocalTags: ["[ethereal vocal processing]", "[experimental vocal manipulation]", "[flamenco-influenced phrasing]", "[innovative vocal techniques]"],
    sunoWeirdness: 35,
    sunoStyleInfluence: 80,
    sunoBpmRange: "95-110",
    sunoKey: "E Minor",
    vocalDNA: "Ethereal female voice with experimental vocal manipulation creating alien texture. Flamenco-influenced phrasing with innovative processing techniques. Vocal emotion conveyed through texture rather than straightforward delivery. Spanish inflection permeates.",
    flowPattern: "Experimental rhythmic placement with beat grid as suggestion, syllable stretching creating tension, call-and-response moments with layered harmonies, unconventional phrasing emphasizing artistic expression.",
    productionFingerprint: "Distorted guitar sample walls creating atmospheric foundation, cave reverb space creating depth and distance, deep minimal bass providing structure, percussive click textures replacing traditional drums, flamenco string accents adding cultural anchor",
    culturalAnchors: "Experimental Latin music innovation, flamenco tradition recontextualization, Spanish cultural pride with modern approach, boundary-pushing artistic vision, visual aesthetic innovation, feminist artistic positioning",
    antiPatterns: "Never traditional boom-bap conventional, never country rock approach, never generic pop cliché, never opera classical, never reggaeton cliché overdone"
  },
  "BILLIE EILISH": {
    sunoStyleTemplate: "Dark Whisper-Rap Lo-Fi Intimacy, Minimalist Intimate Production Space, Heavy Bass Lo-Fi Foundation, Sparse Digital Grain Character, Dark Close Booth Proximity, Deep Heavy 808 Bass Rumble, Dark Synth Pad Layers, Minimal Click Percussion, Breathy Airy Female Voice, Moody Atmospheric Dark Pop, 2020s Dark Pop Whisper Standard",
    sunoExcludeStyles: "bright pop acoustic, country rock, opera classical, energetic uplifting, clean bright production, aggressive metal, loud noise",
    sunoVocalTags: ["[breathy airy voice]", "[whisper-like delivery]", "[intimate booth proximity]", "[moody dark tone]"],
    sunoWeirdness: 28,
    sunoStyleInfluence: 82,
    sunoBpmRange: "100-120",
    sunoKey: "G# Minor",
    vocalDNA: "Breathy airy female voice with whisper-like delivery suggesting intimacy and vulnerability. Minimal vocal projection creating proximity effect. Dark moody tone throughout. Minimal emotion display despite emotional content.",
    flowPattern: "Whisper-like delivery with minimal projection, behind-the-beat placement creating pocket, minimal rhythmic urgency, sparse syllable delivery with extended spaces between phrases.",
    productionFingerprint: "Sparse digital grain character creating lo-fi texture, dark close booth proximity with minimal reverb, deep heavy 808 bass rumble providing weight, dark synth pad layers creating minimal harmony, minimal click percussion replacing traditional drums",
    culturalAnchors: "Gen-Z dark pop standard, vulnerability and emotional honesty in youth context, bedroom pop aesthetics, dark mood embracement, minimal aesthetic positioning, youth cultural influence",
    antiPatterns: "Never bright pop acoustic, never country rock, never operatic classical, never energetic uplifting, never clean bright production, never aggressive metal"
  },
  ORELSAN: {
    sunoStyleTemplate: "French Alt-Rap Poetic Mastery, Poetic Storytelling Narrative, Introspective Dark Boom Bap, Warm Indie Production Character, Room Ambience Intimacy, Organic Round Bass Pocket, Jazz Piano Chord Sophistication, Acoustic Guitar Layer Integration, Organic Drum Feel Character, Clear Articulate Vocal Delivery, 2010s French Alt-Rap Excellence",
    sunoExcludeStyles: "trap aggressive, auto-tune heavy distortion, country rock metal, pop generic, aggressive screaming, industrial noise",
    sunoVocalTags: ["[clear articulate delivery]", "[poetic narrative phrasing]", "[warm conversational tone]", "[introspective expression]"],
    sunoWeirdness: 18,
    sunoStyleInfluence: 76,
    sunoBpmRange: "85-95",
    sunoKey: "D Minor",
    vocalDNA: "Clear articulate male voice emphasizing poetic narrative mastery and lyrical sophistication. Warm conversational tone suggesting intellectualism. Zero autotune processing, organic delivery. Introspective emotional expression conveyed through phrasing.",
    flowPattern: "Behind-the-beat placement creating pocket comfort, poetic phrasing emphasizing narrative over technical rhyming, conversational accessibility with literary sophistication, emotional vocal expression supporting introspective content.",
    productionFingerprint: "Warm indie production character, room ambience intimacy creating closeness, organic round bass providing foundation, jazz piano chord sophistication, acoustic guitar layer integration, organic drum feel emphasizing live instruments",
    culturalAnchors: "French poetic rap tradition, introspective personal narrative, social commentary and observations, philosophical depth, indie hip-hop credibility, literary influence",
    antiPatterns: "Never trap aggressive energy, Never heavy autotune distortion, never country rock metal, never generic pop approach, never aggressive screaming"
  },
  "BURNA BOY": {
    sunoStyleTemplate: "Afrobeats Dancehall-Rap Infectious, Smooth Melodic Hook Mastery, Global Groove Innovation, Warm Afro Percussion Authenticity, Open Stereo Space Breadth, Warm Bouncy Bass Groove, Layered Synth Pad Richness, Afro Drum Pattern Authenticity, Smooth Confident Vocal Delivery, Positive Uplifting Energy, 2020s Afrobeats Global Phenomenon",
    sunoExcludeStyles: "dark aggressive atmosphere, metal screaming, classical opera, slow depressing ballad, industrial noise, minimalist sparse production",
    sunoVocalTags: ["[smooth confident delivery]", "[melodic hook mastery]", "[afro-influenced phrasing]", "[globally appealing tone]"],
    sunoWeirdness: 14,
    sunoStyleInfluence: 80,
    sunoBpmRange: "96-108",
    sunoKey: "F Minor",
    vocalDNA: "Smooth confident male voice with melodic hook mastery and afro-influenced phrasing. Conversational accessibility with infectious energy. Warm tone suggesting laid-back sophistication. Positive uplifting delivery throughout.",
    flowPattern: "Groove-locking placement emphasizing infectious bounce, melodic phrasing with conversational accessibility, call-and-response moments with infectious energy, rhythmic pocket emphasized throughout.",
    productionFingerprint: "Warm afro percussion authenticity with genuine cultural flavor, open stereo space breadth, warm bouncy bass groove pocket, layered synth pad richness, afro drum pattern authenticity, positive uplifting atmosphere",
    culturalAnchors: "Nigerian afrobeats global dominance, infectious groove celebration, positive uplifting energy, international cultural bridge, African diaspora pride, musical infectious joy",
    antiPatterns: "Never dark or aggressive atmosphere, never metal screaming, never classical operatic, never slow depressing, never industrial noise, never minimalist sparse"
  },
  "BAD BUNNY": {
    sunoStyleTemplate: "Reggaeton-Trap Fusion Urban Melodic, Latin Urban Rhythmic Flow, Rhythmic Spanish Phrasing Style, Bright Synth-Heavy Production, Open Stereo Width, Bouncy Reggaeton Bass Line, Synthetic Conga Percussion, Bouncy Riddim Drum Pattern, Layered Male Vocal Delivery, Catchy Ad-Lib Moments, 2020s Urban Latin Global Standard",
    sunoExcludeStyles: "dark aggressive atmosphere, classical opera, rock metal, slow depressing ballad, lo-fi chill minimalist",
    sunoVocalTags: ["[rhythmic urban delivery]", "[melodic reggaeton phrasing]", "[latino-influenced vocal tone]", "[catchy hook specialist]"],
    sunoWeirdness: 16,
    sunoStyleInfluence: 82,
    sunoBpmRange: "92-105",
    sunoKey: "A Minor",
    vocalDNA: "Rhythmic urban male voice with melodic reggaeton phrasing and latino-influenced vocal tone. Conversational accessibility with rhythmic complexity. Energetic uplifting delivery throughout. Catchy hook specialist capabilities.",
    flowPattern: "Reggaeton-influenced syncopation emphasizing groove pocket, syllable placement rhythmically tight, call-and-response ad-lib moments, conversational verses with melodic chorus moments.",
    productionFingerprint: "Bright synth-heavy production with urban polish, open stereo width emphasizing space, bouncy reggaeton bass line, synthetic conga percussion adding rhythm flavor, bouncy riddim drum pattern, infectious uplifting atmosphere",
    culturalAnchors: "Reggaeton-trap global bridge, Puerto Rican identity pride, Latin urban culture innovation, infectious party energy, international reggaeton ambassadorship, cultural fusion celebration",
    antiPatterns: "Never dark aggressive atmosphere, never classical opera, never rock metal approach, never slow depressing ballad, never lo-fi chill minimalism"
  },
  "DAFT PUNK": {
    sunoStyleTemplate: "French House-Electronic Robotic Soul, Disco-Funk Groove Foundation, Robotic Vocoder Soul Exploration, Polished Digital Clarity, Wide Stereo Reverb Space, Punchy Synth Bass Foundation, Pulsing House Drum Framework, Layered Synth String Arrangement, Robotic Vocoded Vocal Processing, 2000s French House Legend Standard",
    sunoExcludeStyles: "acoustic country folk, classical opera, rock aggressive, dark orchestral, acoustic guitar layers, aggressive metal noise",
    sunoVocalTags: ["[robotic vocoded voice]", "[electronic vocal processing]", "[synthesizer-based tone]", "[mechanical rhythmic delivery]"],
    sunoWeirdness: 20,
    sunoStyleInfluence: 82,
    sunoBpmRange: "120-130",
    sunoKey: "A Minor",
    vocalDNA: "Robotic vocoded vocal processing creating mechanical texture, voice treated as synthesizer element rather than human delivery. Electronic vocal transformation complete. Inhuman robotic quality intentional and essential.",
    flowPattern: "Mechanical rhythmic delivery with beat grid precision, minimal organic variation, syllable delivery synchronized with electronic precision, voice integrated as synthesizer layer.",
    productionFingerprint: "Polished digital clarity emphasizing precision, wide stereo reverb space creating width, punchy synth bass providing groove foundation, pulsing house drum framework, layered synth string arrangements creating harmonic richness",
    culturalAnchors: "French house legend pioneers, disco-funk groove innovation, electronic music boundary-breaking, robotic soul paradox, helmets and mystery aesthetic, dance floor dominance",
    antiPatterns: "Never acoustic country folk, never classical operatic, never rock aggressive, never dark orchestral, never acoustic guitar layers"
  },
  "TAME IMPALA": {
    sunoStyleTemplate: "Psychedelic Indie Rock Dreamy, Dreamy Ethereal Layered Texture, Lo-Fi Ambient Atmosphere Immersion, Distorted Guitar Wall Creation, Cathedral Reverb Space Depth, Fuzzy Warm Bass Foundation, Lush Synth Pad Layering, Delayed Drum Pattern Feel, Falsetto Layered Vocal Harmony, 2010s Psychedelic Pop Innovation Standard",
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
    antiPatterns: "Never aggressive metal hard rock, never country rap approach, never dark orchestral, never opera classical, never loud industrial noise"
  },
  SOOLKING: {
    sunoStyleTemplate: "Afro-Dancehall-Trap Energy Fusion, Caribbean Energetic Vibes Celebration, Infectious Modern Groove Innovation, Warm Afro-Reggae Percussion Authenticity, Open Festival Space Breadth, Bouncy Round Bass Pocket, Layered Synth Horn Stab Accents, Bouncy Riddim Drum Pattern, Confident Energetic Vocal Delivery, 2020s Afro-Dancehall Cultural Bridge",
    sunoExcludeStyles: "dark depressing atmosphere, metal aggressive, classical opera, slow ballad, industrial noise, minimalist sparse production",
    sunoVocalTags: ["[confident energetic delivery]", "[afro-influenced phrasing]", "[dancing rhythm locking]", "[positive uplifting tone]"],
    sunoWeirdness: 14,
    sunoStyleInfluence: 80,
    sunoBpmRange: "98-110",
    sunoKey: "C Minor",
    vocalDNA: "Confident energetic male voice with afro-influenced phrasing and dancing rhythm-locking ability. Conversational accessibility with infectious energy. Positive uplifting delivery emphasizing joy. Caribbean-influenced inflection.",
    flowPattern: "Groove-locking placement emphasizing infectious bounce and head-nod rhythm, syncopated afro-dancehall phrasing, call-and-response moments with infectious energy, rhythmic pocket emphasized throughout.",
    productionFingerprint: "Warm afro-reggae percussion authenticity with cultural flavor, open festival space breadth, bouncy round bass pocket, layered synth horn stab accents, bouncy riddim drum pattern, infectious positive atmosphere",
    culturalAnchors: "Afro-dancehall cultural bridge, Caribbean-African diaspora fusion, infectious groove celebration, festival culture energy, pan-African pride positioning, modern cultural innovation",
    antiPatterns: "Never dark depressing atmosphere, never metal aggressive, never classical operatic, never slow ballad approach, never industrial noise, never minimalist sparse"
  },
  STROMAE: {
    sunoStyleTemplate: "Belgian Electro-Pop Dark Introspection, Dark Introspective Minimal Aesthetic, Witty Smart Wordplay Mastery, Clean Digital Production Precision, Room Ambience Moderate Reverb, Minimal Synth Bass Presence, Sparse Percussion Minimalism, Layered Synth Pad Support, Clear Intelligent Vocal Delivery, 2010s Belgian Electro-Pop Excellence Standard",
    sunoExcludeStyles: "country rock metal, opera classical, aggressive dark orchestral, loud noise industrial, acoustic guitar warmth, generic trap",
    sunoVocalTags: ["[clear intelligent delivery]", "[witty lyrical phrasing]", "[electronic vocal processing]", "[minimalist tone approach]"],
    sunoWeirdness: 22,
    sunoStyleInfluence: 78,
    sunoBpmRange: "95-108",
    sunoKey: "E Minor",
    vocalDNA: "Clear intelligent male voice with witty lyrical phrasing and electronic vocal processing subtlety. Intellectual positioning emphasized through delivery. Minimal emotional expression, maximum cerebral focus. Belgian accent inflecting delivery.",
    flowPattern: "Minimalist syllable placement with surgical precision, on-beat emphasis with occasional electronic syncopation, word articulation emphasized for wit comprehension, intelligent delivery supporting lyrical complexity.",
    productionFingerprint: "Clean digital production precision, room ambience moderate reverb, minimal synth bass presence, sparse percussion minimalism, layered synth pad support, overall clean minimalist aesthetic",
    culturalAnchors: "Belgian electro-pop innovation, intellectual witty wordplay, dark introspection balanced with pop accessibility, social commentary through humor, European indie credibility",
    antiPatterns: "Never country rock metal, never opera classical, never aggressive dark orchestral, never loud industrial noise, never acoustic guitar warmth"
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
