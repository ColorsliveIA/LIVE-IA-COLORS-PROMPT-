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
    sunoStyleTemplate: 'French drill, dark aggressive trap, sliding 808s, frenzied hi-hats, menacing synth piano, metallic percussion, intense energy',
    sunoBpmRange: '140-145',
    sunoKey: 'Minor',
    sunoVocalTags: ['Aggressive Rap', 'Drill Flow', 'Dark Delivery', 'Percussive'],
    sunoWeirdness: 50,
    sunoStyleInfluence: 80,
    sunoExcludeStyles: 'melodic singing, pop, happy, uplifting, acoustic',
    vocalDNA: 'Deep grave voice, aggressive percussive rap, characteristic drill sliding delivery. No autotune singing — pure aggressive rap.',
    flowPattern: 'Syncopated drill flow with dramatic pauses. Fast and percussive delivery. Territorial, aggressive phrasing.',
    productionFingerprint: 'Signature: sliding 808s (drill core), rapid triplet hi-hats, dark threatening synth piano, metallic percussion, threatening ambiance',
    culturalAnchors: 'Street territory, violence, competition, dirty money, survival, intimidation, street credibility',
    antiPatterns: 'No melodic singing, no pop hooks, no uplifting messages, no acoustic instruments, no bright moments',
    sunoMetatags: {
      vocalStyle: 'Aggressive Rap',
      vocalEffect: 'Reverb',
      mood: 'Dark, Aggressive',
      energy: 'Maximum',
      texture: 'Crisp Metallic',
      instrument: '808 Bass, Hi-Hats'
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
    sunoStyleTemplate: 'Hardcore trap, aggressive rap, dark minimalist production, heavy bass, cold industrial textures, territorial street sound',
    sunoBpmRange: '120-140',
    sunoKey: 'Minor',
    sunoVocalTags: ['Aggressive Rap', 'Deep Voice', 'Intense Delivery', 'Hardcore Tone'],
    sunoWeirdness: 55,
    sunoStyleInfluence: 85,
    sunoExcludeStyles: 'melodic, singing, soft, pop, uplifting',
    vocalDNA: 'Deep aggressive voice, intense delivery, pure rap energy. No melodic singing — hardcore territorial rap only.',
    flowPattern: 'Aggressive percussive rapid flow, territorial phrasing, intense delivery without melodic bends.',
    productionFingerprint: 'Signature: heavy dark bass, industrial minimal beats, cold synths, aggressive percussion, street credibility',
    culturalAnchors: 'Street dominance, aggression, competition, material success, territorial claims, street credibility',
    antiPatterns: 'No singing, no soft moments, no melodic hooks, no pop crossover',
    sunoMetatags: {
      vocalStyle: 'Aggressive Rap',
      vocalEffect: 'Reverb',
      mood: 'Aggressive, Dark',
      energy: 'High',
      texture: 'Cold Metallic',
      instrument: '808 Bass, Industrial Drums'
    }
  },

  'KAARIS': {
    artist: 'KAARIS',
    sunoStyleTemplate: 'Hardcore aggressive trap, dark trap metal fusion, heavy synths, pounding drums, brutal energy, street warfare themes',
    sunoBpmRange: '120-140',
    sunoKey: 'Minor',
    sunoVocalTags: ['Aggressive Rap', 'Heavy Voice', 'Intense Delivery'],
    sunoWeirdness: 60,
    sunoStyleInfluence: 85,
    sunoExcludeStyles: 'melodic, soft, pop, acoustic',
    vocalDNA: 'Deep powerful aggressive voice, intense volume, pure hardcore rap delivery without melodic softening.',
    flowPattern: 'Aggressive intense rapid flow, percussive delivery, territorial dominance phrasing.',
    productionFingerprint: 'Signature: heavy pounding 808s, aggressive synths, brutal drums, metal-influenced textures, street warfare',
    culturalAnchors: 'Street warfare, gang culture, street dominance, survival, territorial aggression',
    antiPatterns: 'No melodic singing, no soft production, no pop elements',
    sunoMetatags: {
      vocalStyle: 'Aggressive Rap',
      vocalEffect: 'Reverb',
      mood: 'Aggressive, Brutal',
      energy: 'Maximum',
      texture: 'Heavy Metallic',
      instrument: '808 Bass, Heavy Drums'
    }
  },

  'VALD': {
    artist: 'VALD',
    sunoStyleTemplate: 'Technical trap, lyrical rap, atmospheric production, dark synths, complex drums, street consciousness, introspective trap',
    sunoBpmRange: '90-120',
    sunoKey: 'Minor',
    sunoVocalTags: ['Technical Rap', 'Articulate Delivery', 'Consciousness Flow'],
    sunoWeirdness: 50,
    sunoStyleInfluence: 80,
    sunoExcludeStyles: 'melodic singing, pop, bright, minimal',
    vocalDNA: 'Clear articulate voice, technical flow, social consciousness in delivery, intelligent phrasing without autotune.',
    flowPattern: 'Technical complex flow, lyrical density, intelligent pacing, street consciousness delivery.',
    productionFingerprint: 'Signature: dark atmospheric synths, complex trap drums, intelligent bass, street-conscious atmosphere',
    culturalAnchors: 'Street consciousness, social themes, intelligence, technical superiority, introspective trap',
    antiPatterns: 'No melodic singing, no pop elements, no minimal beats',
    sunoMetatags: {
      vocalStyle: 'Rap',
      vocalEffect: 'Reverb',
      mood: 'Dark, Conscious',
      energy: 'Medium-High',
      texture: 'Dark Atmospheric',
      instrument: 'Synths, Trap Drums'
    }
  },

  // Additional International Artists
  'DRAKE': {
    artist: 'DRAKE',
    sunoStyleTemplate: 'Melodic hip-hop, singing rap, warm 808s, smooth production, hook-oriented, contemporary R&B rap blend',
    sunoBpmRange: '85-105',
    sunoKey: 'Minor',
    sunoVocalTags: ['Melodic Rap', 'Singing Hooks', 'Smooth Delivery', 'Hook Master'],
    sunoWeirdness: 35,
    sunoStyleInfluence: 85,
    sunoExcludeStyles: 'aggressive, minimal, dark, experimental',
    vocalDNA: 'Melodic smooth voice, capable of both rap and singing, hook-oriented delivery, emotional vulnerability in tone.',
    flowPattern: 'Melodic conversational rap alternating with sung hooks. Emotional pacing, accessible flow.',
    productionFingerprint: 'Signature: warm 808s, smooth synths, soulful samples, contemporary R&B influenced production',
    culturalAnchors: 'Toronto culture, relationships, success narrative, vulnerability, contemporary urban luxury',
    antiPatterns: 'No harsh aggressive rap, no minimal beats',
    sunoMetatags: {
      vocalStyle: 'Melodic Rap',
      vocalEffect: 'Autotune',
      mood: 'Smooth, Emotional',
      energy: 'Medium',
      texture: 'Warm Smooth',
      instrument: '808 Bass, Synths'
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
