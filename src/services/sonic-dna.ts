/**
 * Sonic DNA Map - A comprehensive mapping of artist sound profiles for Suno AI
 * Defines the sonic characteristics, production settings, and vocal styling for 36 international artists
 */

export interface SonicDNA {
  sunoStyleTemplate: string;
  sunoExcludeStyles: string;
  sunoVocalTags: string[];
  sunoWeirdness: number;
  sunoStyleInfluence: number;
  sunoBpmRange: string;
  sunoKey: string;
}

export const SONIC_DNA_MAP: Record<string, SonicDNA> = {
  JUL: {
    sunoStyleTemplate: "Melodic Marseille Street Pop, Emotional Urban Autotune, Bouncy Chanté-Rappé, 122-128 BPM, G Minor, Crisp Digital Clarity, Wide Stereo Reverb, Punchy 808, Bright Piano, Synthetic Percs, Warm Autotune Voice, Catchy Hooks, 2020s French Urban",
    sunoExcludeStyles: "singing pop vocals, country, rock, opera, classical, generic trap, dark orchestral, heavy metal, screaming",
    sunoVocalTags: ["[male voice]", "[Vocal Style: Soft]", "[Vocal Effect: Auto-tune]", "[Energy: Medium→High]"],
    sunoWeirdness: 12,
    sunoStyleInfluence: 85,
    sunoBpmRange: "122-128",
    sunoKey: "G Minor",
  },
  NINHO: {
    sunoStyleTemplate: "Dark Emotional Melodic Trap, Street Melancholy Autotune, Fluid Rap-Chant Hybrid, 132-142 BPM, D Minor, Warm Analog Saturation, Intimate Dry Booth, Deep Round 808 Bass, Melancholic Piano, Acoustic Guitar Layers, Complex Hi-Hat Rolls, 2020s French Trap",
    sunoExcludeStyles: "pop vocals, country, rock, opera, classical, bright happy, festive, generic boom bap",
    sunoVocalTags: ["[male voice]", "[Vocal Style: Soft]", "[Vocal Effect: Auto-tune]", "[Energy: Medium→High]"],
    sunoWeirdness: 18,
    sunoStyleInfluence: 80,
    sunoBpmRange: "132-142",
    sunoKey: "D Minor",
  },
  DAMSO: {
    sunoStyleTemplate: "Dark Belgian R&B-Rap, Experimental Sensual Trap, Nocturnal Cinematic Mood, 125-140 BPM, Eb Minor, Industrial Subtle Grain, Void Space Darkness, Saturated 808 Sub Bass, Dark Atmospheric Synths, Minimalist Percussions, Grave Sensual Voice, 2020s Dark Urban",
    sunoExcludeStyles: "happy pop, bright acoustic, country, rock, festive, generic trap beats, nursery, opera",
    sunoVocalTags: ["[male voice]", "[Vocal Style: Soft]", "[Vocal Effect: Auto-tune]", "[Energy: Medium→High]"],
    sunoWeirdness: 30,
    sunoStyleInfluence: 78,
    sunoBpmRange: "125-140",
    sunoKey: "Eb Minor",
  },
  GAZO: {
    sunoStyleTemplate: "Aggressive French Drill, Dark Menacing Street Rap, Syncopated Sliding Flow, 140-145 BPM, F# Minor, Raw Unprocessed Grit, Underground Bunker Echo, Heavy Sliding 808 Bass, Frantic Triplet Hi-Hats, Dark Piano Stabs, Metallic Percs, Deep Aggressive Voice, 2020s FR Drill",
    sunoExcludeStyles: "singing, melodic pop, acoustic guitar, happy, bright, country, rock, opera, soft, gentle",
    sunoVocalTags: ["[male voice]", "[Vocal Style: Rap]", "[Vocal Effect: None]", "[Energy: High]"],
    sunoWeirdness: 15,
    sunoStyleInfluence: 82,
    sunoBpmRange: "140-145",
    sunoKey: "F# Minor",
  },
  "FREEZE CORLEONE": {
    sunoStyleTemplate: "Dark Lyrical Boom Bap, Horrorcore Technical Rap, Cold Monotone Flow, 85-95 BPM, C Minor, Dusty Sample Grain, Cave Echo Darkness, Deep Vinyl Bass, Chopped Jazz Samples, Heavy Boom Bap Drums, Dark Orchestral Stabs, Cold Detached Voice, 2010s Dark Hip-Hop",
    sunoExcludeStyles: "singing, autotune, pop, happy, bright, melodic hooks, dancehall, reggaeton, festive, generic trap",
    sunoVocalTags: ["[male voice]", "[Vocal Style: Rap]", "[Vocal Effect: None]", "[Energy: High]"],
    sunoWeirdness: 25,
    sunoStyleInfluence: 75,
    sunoBpmRange: "85-95",
    sunoKey: "C Minor",
  },
  NEKFEU: {
    sunoStyleTemplate: "Lyrical Pop-Rap, Poetic Modern Boom Bap, Luminous Storytelling Flow, 90-105 BPM, A Minor, Studio Polished Clarity, Room Ambience Warmth, Warm Round Bass, Acoustic Guitar Melodies, Jazz Piano Chords, Organic Drums, Clear Articulate Voice, 2010s French Rap",
    sunoExcludeStyles: "heavy autotune, generic trap, dark orchestral, aggressive, screaming, industrial, drill",
    sunoVocalTags: ["[male voice]", "[Vocal Style: Rap]", "[Vocal Effect: None]", "[Energy: Medium]"],
    sunoWeirdness: 20,
    sunoStyleInfluence: 75,
    sunoBpmRange: "90-105",
    sunoKey: "A Minor",
  },
  LAYLOW: {
    sunoStyleTemplate: "Futuristic Digital Trap, Experimental R&B-Rap Hybrid, Cinematic Dystopian Mood, 128-140 BPM, Bb Minor, Granular Texture Glitch, Void Space Immersion, Deep Pitched 808, Futuristic Synth Pads, Glitchy Electronic Percs, Pitch-Shifted Layered Vocals, 2020s Experimental",
    sunoExcludeStyles: "acoustic, country, rock, classical, opera, boom bap, traditional, folk, nursery",
    sunoVocalTags: ["[male voice]", "[Vocal Style: Experimental]", "[Vocal Effect: Auto-tune]", "[Energy: Variable]"],
    sunoWeirdness: 40,
    sunoStyleInfluence: 72,
    sunoBpmRange: "128-140",
    sunoKey: "Bb Minor",
  },
  SDM: {
    sunoStyleTemplate: "Dark Afro-Street Melodic, Nocturnal Urban Autotune, Somber Melodic Flow, 125-135 BPM, E Minor, Warm Tape Saturation, Intimate Dark Space, Deep Round 808, Melancholic Piano Keys, Subtle Afro Percs, Complex Hi-Hats, Grave Melodic Voice, 2020s Dark Afro-Trap",
    sunoExcludeStyles: "bright pop, happy, festive, country, rock, opera, classical, generic pop",
    sunoVocalTags: ["[male voice]", "[Vocal Style: Soft]", "[Vocal Effect: Auto-tune]", "[Energy: Medium→High]"],
    sunoWeirdness: 18,
    sunoStyleInfluence: 78,
    sunoBpmRange: "125-135",
    sunoKey: "E Minor",
  },
  NISKA: {
    sunoStyleTemplate: "Festive Afro-Trap, Dancehall-Rap Bounce, Energetic Street Party, 100-112 BPM, C Minor, Bright Digital Polish, Open Air Festival, Bouncy 808 Kick, Synthetic Conga Percs, Dancehall Riddim Elements, Festive Brass Stabs, Energetic Male Voice, 2020s Afro-Trap",
    sunoExcludeStyles: "dark, depressing, industrial, metal, classical, opera, slow ballad, boom bap",
    sunoVocalTags: ["[male voice]", "[Vocal Style: Rap]", "[Vocal Effect: None]", "[Energy: High]"],
    sunoWeirdness: 15,
    sunoStyleInfluence: 80,
    sunoBpmRange: "100-112",
    sunoKey: "C Minor",
  },
  "CENTRAL CEE": {
    sunoStyleTemplate: "UK Melodic Drill, London Street Cool, Sliding Syncopated Flow, 140-145 BPM, G Minor, Crisp Digital Clarity, Underground Club Echo, Sliding 808 Bass, Triplet Hi-Hats, Melancholic Piano Melody, Clean Snare Hits, Cool Confident Voice, 2020s UK Drill",
    sunoExcludeStyles: "singing pop, country, rock, opera, classical, happy bright, French rap, boom bap",
    sunoVocalTags: ["[male voice]", "[Vocal Style: Rap]", "[Vocal Effect: None]", "[Energy: High]"],
    sunoWeirdness: 18,
    sunoStyleInfluence: 80,
    sunoBpmRange: "140-145",
    sunoKey: "G Minor",
  },
  "ALPHA WANN": {
    sunoStyleTemplate: "Elite Technical French Rap, Modern Dark Boom Bap, Cold Surgical Flow, 88-98 BPM, D Minor, Raw Studio Dryness, Intimate Dry Booth, Minimal Dark Bass, Sparse Piano Keys, Heavy Punchy Drums, Tight Snare Crack, Dry Baritone Voice, 2010s Dark Minimalism",
    sunoExcludeStyles: "singing, autotune, pop, happy, melodic hooks, bright, festive, jazz warm, soulful",
    sunoVocalTags: ["[male voice]", "[Vocal Style: Rap]", "[Vocal Effect: None]", "[Energy: Medium]"],
    sunoWeirdness: 15,
    sunoStyleInfluence: 82,
    sunoBpmRange: "88-98",
    sunoKey: "D Minor",
  },
  PNL: {
    sunoStyleTemplate: "Atmospheric Cloud Rap, Ethereal Melodic Trap, Spatial Floating Autotune, 72-88 BPM, F Minor, Lo-fi Hazy Grain, Cathedral Reverb Space, Deep Slow 808, Ethereal Synth Pads, Minimal Ghost Percs, Layered Floating Vocals, Massive Reverb Trails, 2010s Cloud Rap",
    sunoExcludeStyles: "aggressive, fast, drill, punk, rock, metal, happy pop, festive, bright, country",
    sunoVocalTags: ["[male voice]", "[Vocal Style: Soft]", "[Vocal Effect: Auto-tune]", "[Energy: Medium→High]"],
    sunoWeirdness: 35,
    sunoStyleInfluence: 78,
    sunoBpmRange: "72-88",
    sunoKey: "F Minor",
  },
  BOOBA: {
    sunoStyleTemplate: "Hardcore Cinematic Rap, Dark Orchestral Street, Dominant Saccadic Flow, 130-142 BPM, C# Minor, Raw Punchy Clarity, Stadium Dark Reverb, Heavy Distorted 808, Dark Choir Pads, Dramatic Strings, Aggressive Drums, Deep Authoritative Voice, 2020s Dark Cinematic",
    sunoExcludeStyles: "soft pop, acoustic gentle, country, folk, happy, bright, nursery, lo-fi chill",
    sunoVocalTags: ["[male voice]", "[Vocal Style: Rap]", "[Vocal Effect: None]", "[Energy: High]"],
    sunoWeirdness: 18,
    sunoStyleInfluence: 82,
    sunoBpmRange: "130-142",
    sunoKey: "C# Minor",
  },
  HAMZA: {
    sunoStyleTemplate: "Smooth Belgian Melodic Trap, Suave Nocturnal R&B-Rap, Nonchalant Autotune Flow, 130-142 BPM, Ab Minor, Polished Digital Sheen, Intimate Club Ambience, Deep Round 808, Luxurious Synth Pads, Clean Hi-Hats, Smooth Warm Keys, Suave Autotune Voice, 2020s Sauce Music",
    sunoExcludeStyles: "aggressive, dark orchestral, country, rock, metal, opera, boom bap, raw, gritty",
    sunoVocalTags: ["[male voice]", "[Vocal Style: Soft]", "[Vocal Effect: Auto-tune]", "[Energy: Medium→High]"],
    sunoWeirdness: 20,
    sunoStyleInfluence: 80,
    sunoBpmRange: "130-142",
    sunoKey: "Ab Minor",
  },
  "TRAVIS SCOTT": {
    sunoStyleTemplate: "Psychedelic Dark Trap, Cosmic Ambient Melodic, Beat-Switch Heavy Production, 132-148 BPM, E Minor, Distorted Saturated Grain, Massive Phase Reverb, Heavy Saturated 808, Atmospheric Synth Layers, Flanger Percs, Reverbed Ad-Libs, Spacey Autotune Voice, 2020s Psychedelic Trap",
    sunoExcludeStyles: "acoustic, country, folk, classical, opera, jazz, boom bap, bright pop, clean",
    sunoVocalTags: ["[male voice]", "[Vocal Style: Experimental]", "[Vocal Effect: Auto-tune]", "[Energy: Variable]"],
    sunoWeirdness: 30,
    sunoStyleInfluence: 78,
    sunoBpmRange: "132-148",
    sunoKey: "E Minor",
  },
  DRAKE: {
    sunoStyleTemplate: "Emotional R&B-Trap, Smooth Melodic Rap, Intimate Nocturnal Mood, 130-142 BPM, Bb Minor, Polished Studio Clarity, Intimate Room Warmth, Deep Warm 808, R&B Piano Chords, Soft Pad Layers, Clean Trap Drums, Smooth Versatile Voice, 2020s Melodic Rap",
    sunoExcludeStyles: "aggressive, screaming, metal, rock, country, industrial, noise, experimental avant-garde",
    sunoVocalTags: ["[male voice]", "[Vocal Style: Soft]", "[Vocal Effect: Auto-tune]", "[Energy: Medium]"],
    sunoWeirdness: 15,
    sunoStyleInfluence: 82,
    sunoBpmRange: "130-142",
    sunoKey: "Bb Minor",
  },
  TIAKOLA: {
    sunoStyleTemplate: "Ultra-Melodic Afro-Pop, Luminous Singing Flow, Joyful Urban Energy, 102-118 BPM, F Major, Bright Digital Clarity, Wide Open Stereo, Warm Bouncy 808, Melodic Guitar Riffs, Afro Percussion Shakers, Luminous Synth Pads, High Melodic Voice, 2020s Afro-Melo",
    sunoExcludeStyles: "dark, aggressive, drill, metal, classical, opera, slow depressing, industrial",
    sunoVocalTags: ["[male voice]", "[Vocal Style: Soft]", "[Vocal Effect: Auto-tune]", "[Energy: Medium→High]"],
    sunoWeirdness: 15,
    sunoStyleInfluence: 82,
    sunoBpmRange: "102-118",
    sunoKey: "F Major",
  },
  "AYA NAKAMURA": {
    sunoStyleTemplate: "Afro-Pop Urbaine, Dancehall-Pop Groove, Catchy Hook Machine, 96-112 BPM, G Minor, Bright Pop Polish, Open Wide Stereo, Warm Round Bass, Pop Melodic Guitar, Light Afro Percs, Bouncy Synth Stabs, Powerful Female Voice, Catchy Hooks, 2020s French Pop Urban",
    sunoExcludeStyles: "dark, aggressive, metal, classical, opera, slow ballad, rap technique, boom bap",
    sunoVocalTags: ["[female voice]", "[Vocal Style: Singing]", "[Vocal Effect: None]", "[Energy: High]"],
    sunoWeirdness: 12,
    sunoStyleInfluence: 85,
    sunoBpmRange: "96-112",
    sunoKey: "G Minor",
  },
  KALASH: {
    sunoStyleTemplate: "Dancehall-Rap Fusion, Infectious Groove, Lyrical Jamaica Vibes, 95-110 BPM, A Minor, Bright Reggae Percussion, Open Stereo Space, Warm Punchy Bass, Light Reggae Drums, Bouncy Synth Horns, Energetic Confident Voice, 2010s Dancehall Rap",
    sunoExcludeStyles: "dark, metal, classical, opera, slow ballad, heavy aggressive, industrial",
    sunoVocalTags: ["[male voice]", "[Vocal Style: Rap]", "[Vocal Effect: None]", "[Energy: High]"],
    sunoWeirdness: 14,
    sunoStyleInfluence: 78,
    sunoBpmRange: "95-110",
    sunoKey: "A Minor",
  },
  TIF: {
    sunoStyleTemplate: "Lyrical Introspective Rap, Poetic Underground Boom Bap, Jazz-Influenced Vibes, 88-100 BPM, C Minor, Warm Studio Clarity, Room Ambience, Round Warm Bass, Acoustic Guitar Layers, Jazz Piano Chords, Organic Drums, Clear Lyrical Voice, 2010s Underground Rap",
    sunoExcludeStyles: "trap, heavy autotune, country, rock, metal, opera, aggressive, screaming",
    sunoVocalTags: ["[male voice]", "[Vocal Style: Rap]", "[Vocal Effect: None]", "[Energy: Medium]"],
    sunoWeirdness: 16,
    sunoStyleInfluence: 75,
    sunoBpmRange: "88-100",
    sunoKey: "C Minor",
  },
  ROSALÍA: {
    sunoStyleTemplate: "Latin Experimental Flamenco-Trap, Ethereal Vocal Innovation, Minimal Spanish Beats, 95-110 BPM, E Minor, Distorted Guitar Samples, Cave Reverb Space, Deep Minimal Bass, Percussive Clicks, Flamenco String Accents, Ethereal Female Voice, 2020s Experimental Latin",
    sunoExcludeStyles: "traditional boom bap, country, rock, pop generic, opera, reggaeton cliché",
    sunoVocalTags: ["[female voice]", "[Vocal Style: Experimental]", "[Vocal Effect: Reverb]", "[Energy: Variable]"],
    sunoWeirdness: 35,
    sunoStyleInfluence: 80,
    sunoBpmRange: "95-110",
    sunoKey: "E Minor",
  },
  "BILLIE EILISH": {
    sunoStyleTemplate: "Dark Whisper-Rap, Minimalist Intimate Production, Heavy Bass Lo-Fi, 100-120 BPM, G# Minor, Sparse Digital Grain, Dark Close Booth, Deep Heavy 808 Bass, Dark Synth Pads, Minimal Clicks, Breathy Airy Voice, Moody Atmosphere, 2020s Dark Pop",
    sunoExcludeStyles: "bright pop, acoustic, country, rock, opera, classical, energetic uplifting, clean bright",
    sunoVocalTags: ["[female voice]", "[Vocal Style: Soft]", "[Vocal Effect: Reverb]", "[Energy: Low→Medium]"],
    sunoWeirdness: 28,
    sunoStyleInfluence: 82,
    sunoBpmRange: "100-120",
    sunoKey: "G# Minor",
  },
  ORELSAN: {
    sunoStyleTemplate: "French Alt-Rap, Poetic Storytelling, Introspective Dark Boom Bap, 85-95 BPM, D Minor, Warm Indie Production, Room Ambience, Organic Round Bass, Jazz Piano Chords, Acoustic Guitar, Organic Drums, Clear Articulate Voice, 2010s French Alt",
    sunoExcludeStyles: "trap, aggressive, auto-tune heavy, country, rock, metal, pop generic",
    sunoVocalTags: ["[male voice]", "[Vocal Style: Rap]", "[Vocal Effect: None]", "[Energy: Medium]"],
    sunoWeirdness: 18,
    sunoStyleInfluence: 76,
    sunoBpmRange: "85-95",
    sunoKey: "D Minor",
  },
  "BURNA BOY": {
    sunoStyleTemplate: "Afrobeats Dancehall-Rap, Smooth Melodic Hooks, Global Infectious Groove, 96-108 BPM, F Minor, Warm Afro Percussion, Open Stereo Space, Warm Bouncy Bass, Layered Synth Pads, Afro Drums, Smooth Confident Voice, Positive Energy, 2020s Afrobeats",
    sunoExcludeStyles: "dark, aggressive, metal, classical, opera, slow depressing, industrial",
    sunoVocalTags: ["[male voice]", "[Vocal Style: Soft]", "[Vocal Effect: None]", "[Energy: High]"],
    sunoWeirdness: 14,
    sunoStyleInfluence: 80,
    sunoBpmRange: "96-108",
    sunoKey: "F Minor",
  },
  "BAD BUNNY": {
    sunoStyleTemplate: "Reggaeton-Trap Fusion, Latin Urban Melodic, Rhythmic Spanish Flow, 92-105 BPM, A Minor, Bright Synth-Heavy Production, Open Stereo, Bouncy Reggaeton Bass, Synthetic Congas, Bouncy Riddim Drums, Layered Male Voice, Catchy Ad-Libs, 2020s Urban Latin",
    sunoExcludeStyles: "dark, aggressive, classical, opera, rock, metal, lo-fi slow",
    sunoVocalTags: ["[male voice]", "[Vocal Style: Singing]", "[Vocal Effect: None]", "[Energy: High]"],
    sunoWeirdness: 16,
    sunoStyleInfluence: 82,
    sunoBpmRange: "92-105",
    sunoKey: "A Minor",
  },
  "DAFT PUNK": {
    sunoStyleTemplate: "French House-Electronic, Disco-Funk Grooves, Robotic Vocoder Soul, 120-130 BPM, A Minor, Polished Digital Clarity, Wide Stereo Reverb, Punchy Synth Bass, Pulsing House Drums, Layered Synth Strings, Robotic Vocoded Voice, 2000s French House",
    sunoExcludeStyles: "acoustic, country, folk, classical, opera, rock, aggressive, dark orchestral",
    sunoVocalTags: ["[male voice]", "[Vocal Style: Electronic]", "[Vocal Effect: Vocoder]", "[Energy: High]"],
    sunoWeirdness: 20,
    sunoStyleInfluence: 82,
    sunoBpmRange: "120-130",
    sunoKey: "A Minor",
  },
  "TAME IMPALA": {
    sunoStyleTemplate: "Psychedelic Indie Rock, Dreamy Ethereal Layers, Lo-Fi Ambient Atmosphere, 100-115 BPM, D Minor, Distorted Guitar Walls, Cathedral Reverb Space, Fuzzy Warm Bass, Lush Synth Pads, Delayed Drums, Falsetto Layered Voice, 2010s Psychedelic Pop",
    sunoExcludeStyles: "aggressive, metal, hard rock, country, rap, dark orchestral, opera, classical",
    sunoVocalTags: ["[male voice]", "[Vocal Style: Falsetto]", "[Vocal Effect: Reverb]", "[Energy: Medium]"],
    sunoWeirdness: 32,
    sunoStyleInfluence: 78,
    sunoBpmRange: "100-115",
    sunoKey: "D Minor",
  },
  SOOLKING: {
    sunoStyleTemplate: "Afro-Dancehall-Trap, Caribbean Energetic Vibes, Infectious Modern Groove, 98-110 BPM, C Minor, Warm Afro-Reggae Percussion, Open Festival Space, Bouncy Round Bass, Layered Synth Horns, Bouncy Riddim Drums, Confident Energetic Voice, 2020s Afro-Dancehall",
    sunoExcludeStyles: "dark, depressing, metal, classical, opera, slow ballad, industrial",
    sunoVocalTags: ["[male voice]", "[Vocal Style: Rap]", "[Vocal Effect: None]", "[Energy: High]"],
    sunoWeirdness: 14,
    sunoStyleInfluence: 80,
    sunoBpmRange: "98-110",
    sunoKey: "C Minor",
  },
  STROMAE: {
    sunoStyleTemplate: "Belgian Electro-Pop, Dark Introspective Minimal, Witty Smart Wordplay, 95-108 BPM, E Minor, Clean Digital Production, Room Ambience, Minimal Synth Bass, Sparse Percussion, Layered Synth Pads, Clear Intelligent Voice, 2010s Belgian Electro-Pop",
    sunoExcludeStyles: "country, rock, metal, opera, classical, aggressive, dark orchestral, loud",
    sunoVocalTags: ["[male voice]", "[Vocal Style: Electronic]", "[Vocal Effect: Vocal Processing]", "[Energy: Medium]"],
    sunoWeirdness: 22,
    sunoStyleInfluence: 78,
    sunoBpmRange: "95-108",
    sunoKey: "E Minor",
  },
  KAARIS: {
    sunoStyleTemplate: "Dark Aggressive French Trap, Heavy Distorted Bass, Cold Menacing Production, 135-145 BPM, B Minor, Raw Punchy Clarity, Underground Echo, Heavy Distorted 808 Bass, Frantic Triplet Hi-Hats, Dark Synth Stabs, Metallic Percs, Commanding Baritone Voice, 2010s Dark Trap",
    sunoExcludeStyles: "singing, melodic pop, acoustic guitar, happy, bright, country, rock, soft, gentle",
    sunoVocalTags: ["[male voice]", "[Vocal Style: Rap]", "[Vocal Effect: None]", "[Energy: High]"],
    sunoWeirdness: 20,
    sunoStyleInfluence: 82,
    sunoBpmRange: "135-145",
    sunoKey: "B Minor",
  },
  "NATE DOGG": {
    sunoStyleTemplate: "G-Funk R&B, West Coast Smooth Vibes, Synth-Heavy Melodic Hooks, 95-110 BPM, F Minor, Warm Analog Warmth, Open Stadium Space, Deep Bouncy Bass, Lush Synth Strings, Funky Drums, Warm Soulful Voice, 1990s G-Funk",
    sunoExcludeStyles: "aggressive, metal, country, rock, opera, classical, dark orchestral, industrial",
    sunoVocalTags: ["[male voice]", "[Vocal Style: Soft]", "[Vocal Effect: None]", "[Energy: Medium]"],
    sunoWeirdness: 16,
    sunoStyleInfluence: 80,
    sunoBpmRange: "95-110",
    sunoKey: "F Minor",
  },
  VALD: {
    sunoStyleTemplate: "Dark Lyrically Complex Rap, Experimental Cold Production, Introspective Minimal Beats, 90-100 BPM, D Minor, Raw Studio Dryness, Intimate Dry Booth, Dark Minimal Bass, Distorted Synth Stabs, Sparse Drums, Cold Detached Voice, 2010s Dark Experimental",
    sunoExcludeStyles: "singing, autotune, pop, happy, melodic hooks, bright, festive, warm soulful",
    sunoVocalTags: ["[male voice]", "[Vocal Style: Rap]", "[Vocal Effect: None]", "[Energy: Medium]"],
    sunoWeirdness: 26,
    sunoStyleInfluence: 74,
    sunoBpmRange: "90-100",
    sunoKey: "D Minor",
  },
  "PLAYBOI CARTI": {
    sunoStyleTemplate: "Experimental Trap-Rap, Psychedelic Vocal Chopping, Baby Voice Ad-Libs, 130-145 BPM, B Minor, Distorted Saturated Grain, Chaotic Psychedelic Space, Heavy Distorted 808, Triplet Hi-Hat Rolls, Synth Chaos, Pitched Layered Voice, 2020s Experimental Trap",
    sunoExcludeStyles: "singing, acoustic, country, rock, opera, classical, folk, boom bap traditional",
    sunoVocalTags: ["[male voice]", "[Vocal Style: Experimental]", "[Vocal Effect: Auto-tune]", "[Energy: Variable]"],
    sunoWeirdness: 45,
    sunoStyleInfluence: 76,
    sunoBpmRange: "130-145",
    sunoKey: "B Minor",
  },
  "KANYE WEST": {
    sunoStyleTemplate: "Ambitious Experimental Hip-Hop, Orchestral Soul Sampling, Melodic Innovative Flow, 90-110 BPM, C Minor, Polished Epic Clarity, Cathedral Grand Reverb, Deep Warm Bass, Orchestral String Layers, Chopped Soul Samples, Emotional Male Voice, 2010s Orchestral Hip-Hop",
    sunoExcludeStyles: "country, folk, rock, opera cliché, cheap trap, lo-fi chill, nursery",
    sunoVocalTags: ["[male voice]", "[Vocal Style: Soft]", "[Vocal Effect: None]", "[Energy: Medium]"],
    sunoWeirdness: 28,
    sunoStyleInfluence: 80,
    sunoBpmRange: "90-110",
    sunoKey: "C Minor",
  },
  "KENDRICK LAMAR": {
    sunoStyleTemplate: "Lyrical Conscious Rap, Dynamic Complex Production, Emotional Storytelling, 85-105 BPM, D Minor, Raw Studio Clarity, Room Ambience Warmth, Round Organic Bass, Jazz Piano, Orchestral Elements, Varied Drums, Clear Powerful Voice, 2010s Conscious Rap",
    sunoExcludeStyles: "singing, autotune heavy, country, rock, metal, pop generic, nursery, bright happy",
    sunoVocalTags: ["[male voice]", "[Vocal Style: Rap]", "[Vocal Effect: None]", "[Energy: Medium]"],
    sunoWeirdness: 20,
    sunoStyleInfluence: 78,
    sunoBpmRange: "85-105",
    sunoKey: "D Minor",
  },
  "LANA DEL REY": {
    sunoStyleTemplate: "Dark Cinematic Pop, Noir-Influenced Melancholic, Orchestral Vintage Hollywood, 60-80 BPM, G Minor, Warm Analog Saturation, Cathedral Reverb Space, Deep Round Bass, Lush Orchestral Strings, Soft Pad Layers, Ethereal Breathy Voice, 2010s Cinematic Pop",
    sunoExcludeStyles: "aggressive, metal, rock, country, pop bright, nursery, happy uplifting, industrial",
    sunoVocalTags: ["[female voice]", "[Vocal Style: Soft]", "[Vocal Effect: Reverb]", "[Energy: Low]"],
    sunoWeirdness: 26,
    sunoStyleInfluence: 80,
    sunoBpmRange: "60-80",
    sunoKey: "G Minor",
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
