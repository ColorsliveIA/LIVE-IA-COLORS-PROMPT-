/**
 * Harmonic Profiles v1 — 19 profils sonores distincts
 * ----------------------------------------------------
 * Fix au "piano monoculture" : remplace le token générique "Dark Piano Loop"
 * par 19 palettes harmoniques dérivées de l'analyse corpus 25 artistes.
 *
 * Chaque profil contient :
 *   - id : identifiant stable (utilisable en enum côté UI)
 *   - label : nom affichable
 *   - artistAnchors : artistes-témoins (référence pédagogique uniquement)
 *   - instruments : palette concrète à injecter dans les prompts Suno
 *   - sunoTags : tags Suno V5.5 mappés
 *   - bpmRange : fourchette tempo typique
 *   - antiPatterns : ce que ce profil NE doit JAMAIS contenir
 *
 * Utilisation :
 *   - `getHarmonicProfile(id)` → profil complet
 *   - `buildHarmonicBlock(id)` → bloc texte injecté dans le system prompt
 *   - `HARMONIC_PROFILE_IDS` → enum pour le schema Gemini + UI
 */

export type HarmonicProfileId =
  | 'synth-dark-boom-bap'
  | 'jazz-soul-rhodes'
  | 'mystic-orchestral-808'
  | 'italo-cinematic-minor'
  | 'afro-trap-melodic'
  | 'cloud-rnb-velvet'
  | 'gospel-kalimba-afro'
  | 'rai-mediterranean-vintage'
  | 'pop-chanson-acoustic'
  | 'boom-bap-piano-loop'
  | 'drill-fr-cold'
  | 'cloud-trap-arabe'
  | 'synth-retro-futur'
  | 'lofi-glitch-808'
  | 'conscient-jazz-soul'
  | 'marseille-pop-naive'
  | 'conscient-oriental-sampled'
  | 'poet-jazz-noir'
  | 'street-grave-808-vocoder';

export interface HarmonicProfile {
  id: HarmonicProfileId;
  label: string;
  artistAnchors: string[];
  instruments: string[];
  sunoTags: string[];
  bpmRange: string;
  antiPatterns: string[];
  description: string;
}

export const HARMONIC_PROFILES: Record<HarmonicProfileId, HarmonicProfile> = {
  'synth-dark-boom-bap': {
    id: 'synth-dark-boom-bap',
    label: 'Synth Dark Boom-Bap',
    artistAnchors: ['Booba'],
    instruments: ['dark sub bass', 'analog synth pads', 'evolved boom-bap drums', 'minimal piano stabs', '808 sub'],
    sunoTags: ['Dark Synth Bass', 'Boom-Bap Drums', 'Minimal Piano', 'Cold Pads'],
    bpmRange: '88-96',
    antiPatterns: ['velvet pads', 'kalimba', 'oud', 'flamenca guitar'],
    description: 'Imperial cold synth bass + percussive boom-bap, no melodic piano lead.'
  },
  'jazz-soul-rhodes': {
    id: 'jazz-soul-rhodes',
    label: 'Jazz-Soul Rhodes',
    artistAnchors: ['Damso'],
    instruments: ['Fender Rhodes', 'jazz guitar clean', 'mellow upright bass', 'soul drums', 'string pads'],
    sunoTags: ['Jazz Rhodes', 'Soul Guitar', 'Upright Bass', 'Mellow Drums'],
    bpmRange: '78-92',
    antiPatterns: ['drill 808', 'distorted bass', 'kalimba', 'orchestral cinematic'],
    description: 'Melancholic jazz-soul Rhodes with intimate harmonic depth.'
  },
  'mystic-orchestral-808': {
    id: 'mystic-orchestral-808',
    label: 'Mystic Orchestral 808',
    artistAnchors: ['Kaaris'],
    instruments: ['orchestral strings', 'distorted 808', 'tribal percussions', 'horns', 'cinematic choir'],
    sunoTags: ['Orchestral Strings', 'Distorted 808', 'Tribal Drums', 'Cinematic Horns'],
    bpmRange: '85-100',
    antiPatterns: ['velvet pads', 'kalimba', 'jazz guitar', 'pop synth'],
    description: 'War-mystic orchestral grandeur over distorted 808 detonation.'
  },
  'italo-cinematic-minor': {
    id: 'italo-cinematic-minor',
    label: 'Italo Cinematic Minor',
    artistAnchors: ['SCH'],
    instruments: ['cinematic minor piano', 'italo strings', 'flamenca guitar', 'autotune lead', 'vintage horns'],
    sunoTags: ['Cinematic Piano Minor', 'Italo Strings', 'Flamenca Guitar', 'Vintage Horns'],
    bpmRange: '88-100',
    antiPatterns: ['drill 808', 'kalimba', 'gospel choir', 'cloud reverb'],
    description: 'Mafia-cinematic Italian noir with mournful melodic piano in minor key.'
  },
  'afro-trap-melodic': {
    id: 'afro-trap-melodic',
    label: 'Afro-Trap Melodic',
    artistAnchors: ['Ninho'],
    instruments: ['afro melodic piano', 'kalimba', 'ethnic flute', 'trap drums', 'warm 808'],
    sunoTags: ['Afro Trap Piano', 'Kalimba Melody', 'Ethnic Flute', 'Warm 808'],
    bpmRange: '95-105',
    antiPatterns: ['italo strings', 'jazz Rhodes', 'orchestral choir', 'lofi crackle'],
    description: 'Warm afro-trap melodic landscape, hooks that ride waves.'
  },
  'cloud-rnb-velvet': {
    id: 'cloud-rnb-velvet',
    label: 'Cloud R&B Velvet',
    artistAnchors: ['Hamza'],
    instruments: ['lush synth pads', 'reverb drone', 'soft 808', 'subtle autotune lead', 'velvet R&B chords'],
    sunoTags: ['Lush Synth Pads', 'Reverb Drone', 'Soft 808', 'Velvet R&B'],
    bpmRange: '70-90',
    antiPatterns: ['drill drums', 'aggressive 808', 'orchestral horns', 'flamenca'],
    description: 'Sensual nocturnal velvet — texture-first, melody-first, hook-pillar.'
  },
  'gospel-kalimba-afro': {
    id: 'gospel-kalimba-afro',
    label: 'Gospel Kalimba Afro',
    artistAnchors: ['Tiakola'],
    instruments: ['kalimba', 'afro minor piano', 'church organ tail', 'legato flute', 'analog warm pads'],
    sunoTags: ['Kalimba', 'Afro Minor Piano', 'Church Organ', 'Legato Flute'],
    bpmRange: '88-100',
    antiPatterns: ['drill 808', 'orchestral horns', 'flamenca', 'lofi crackle'],
    description: 'Congolese gospel harmonies layered on trap grid — contemplative, never combative.'
  },
  'rai-mediterranean-vintage': {
    id: 'rai-mediterranean-vintage',
    label: 'Raï Mediterranean Vintage',
    artistAnchors: ["Rim'K"],
    instruments: ['oud', 'mandole', 'mediterranean guitar', 'Moog filtered bass', 'vintage live drums'],
    sunoTags: ['Oud', 'Mandole', 'Mediterranean Guitar', 'Moog Bass', 'Vintage Drums'],
    bpmRange: '90-100',
    antiPatterns: ['drill 808', 'cloud pads', 'kalimba', 'autotune lead'],
    description: 'Diasporic raï-fusion with oud loops and analog warmth — territorial anchor maximal.'
  },
  'pop-chanson-acoustic': {
    id: 'pop-chanson-acoustic',
    label: 'Pop Chanson Acoustic',
    artistAnchors: ['Lomepal'],
    instruments: ['classical piano', 'Hammond organ', 'harpsichord', 'acoustic guitar', 'minimal programmatic drums'],
    sunoTags: ['Classical Piano', 'Hammond Organ', 'Acoustic Guitar', 'Minimal Drums'],
    bpmRange: '80-110',
    antiPatterns: ['808 sub', 'drill drums', 'autotune lead', 'orchestral horns'],
    description: 'French chanson revival — acoustic instruments first, no rap drums, voice frontal.'
  },
  'boom-bap-piano-loop': {
    id: 'boom-bap-piano-loop',
    label: 'Boom-Bap Piano Loop',
    artistAnchors: ['Alpha Wann'],
    instruments: ['sampled piano loop', 'dry kicks', 'jazz upright bass', 'analog hi-hats', 'subtle horns'],
    sunoTags: ['Sampled Piano', 'Dry Kicks 90s', 'Jazz Bass', 'Analog Hi-Hats'],
    bpmRange: '85-95',
    antiPatterns: ['808 trap', 'autotune lead', 'cloud reverb', 'orchestral'],
    description: 'Modern boom-bap with surgical sampled piano loops — 90s heritage, virtuoso flow.'
  },
  'drill-fr-cold': {
    id: 'drill-fr-cold',
    label: 'Drill FR Cold',
    artistAnchors: ['Gazo', 'Kalash Criminel'],
    instruments: ['UK drill 808', 'rapid hi-hats', 'glacial synth lead', 'minimalist pads', 'snare rolls'],
    sunoTags: ['UK Drill 808', 'Rapid Hi-Hats', 'Glacial Synth', 'Snare Rolls'],
    bpmRange: '140-150',
    antiPatterns: ['kalimba', 'jazz Rhodes', 'orchestral', 'velvet pads'],
    description: 'Cold percussive UK drill — emotional flatness as design choice.'
  },
  'cloud-trap-arabe': {
    id: 'cloud-trap-arabe',
    label: 'Cloud Trap Arabe',
    artistAnchors: ['PNL'],
    instruments: ['infinite reverb', 'soft 808', 'arabian strings', 'oneiric synth pads', 'distant choir'],
    sunoTags: ['Infinite Reverb', 'Soft 808', 'Arabian Strings', 'Oneiric Pads'],
    bpmRange: '75-95',
    antiPatterns: ['drill drums', 'jazz guitar', 'flamenca', 'classical piano'],
    description: 'Oneiric cloud-trap with arabesque harmonic textures and saturated lyrical density.'
  },
  'synth-retro-futur': {
    id: 'synth-retro-futur',
    label: 'Synth Retro-Futur',
    artistAnchors: ['Laylow'],
    instruments: ['FM synth lead', 'autotune as instrument', 'vintage Moog pads', 'modified 808', 'electronic transitions'],
    sunoTags: ['FM Synth', 'Autotune Lead', 'Vintage Moog', 'Modified 808'],
    bpmRange: '90-130',
    antiPatterns: ['acoustic guitar', 'oud', 'jazz Rhodes', 'orchestral horns'],
    description: 'Sci-fi concept-album texture — synth retro-futur with autotune as expressive instrument.'
  },
  'lofi-glitch-808': {
    id: 'lofi-glitch-808',
    label: 'Lo-Fi Glitch 808',
    artistAnchors: ['Lujipeka'],
    instruments: ['heavy 808 sub', 'glitched vocals', 'vaporwave pads', 'lo-fi hi-hat grain', 'controlled clipping'],
    sunoTags: ['Heavy 808', 'Glitch Vocals', 'Vaporwave Pads', 'Lo-Fi Hi-Hats'],
    bpmRange: '70-100',
    antiPatterns: ['classical piano', 'jazz guitar', 'orchestral', 'flamenca'],
    description: 'Gen-Z lo-fi cloud — broken aesthetic assumed, autotune as texture not correction.'
  },
  'conscient-jazz-soul': {
    id: 'conscient-jazz-soul',
    label: 'Conscient Jazz-Soul',
    artistAnchors: ['Dinos'],
    instruments: ['jazz samples', 'lush pads', 'warm contrabass', 'soul drums', 'orchestral string accents'],
    sunoTags: ['Jazz Samples', 'Lush Pads', 'Warm Contrabass', 'Soul Drums'],
    bpmRange: '85-95',
    antiPatterns: ['drill 808', 'autotune lead', 'cloud reverb', 'flamenca'],
    description: 'Conscious technical rap with jazz/soul samples and arc emotional structure.'
  },
  'marseille-pop-naive': {
    id: 'marseille-pop-naive',
    label: 'Marseille Pop Naive',
    artistAnchors: ['Jul'],
    instruments: ['naive synth lead', 'raw autotune', 'pop-trap drums', 'warm bass', 'sing-along melody'],
    sunoTags: ['Naive Synth', 'Raw Autotune', 'Pop-Trap Drums', 'Warm Bass'],
    bpmRange: '95-110',
    antiPatterns: ['orchestral', 'jazz Rhodes', 'kalimba', 'oud'],
    description: 'Volunteer-simple Marseille pop-trap — anti-technical melodic candor.'
  },
  'conscient-oriental-sampled': {
    id: 'conscient-oriental-sampled',
    label: 'Conscient Oriental Sampled',
    artistAnchors: ['IAM', 'Médine'],
    instruments: ['oud', 'darbouka', 'orchestral strings', 'sampled ethnic chants', 'minimal bass', 'frame drums'],
    sunoTags: ['Oud', 'Darbouka', 'Orchestral Strings', 'Ethnic Samples', 'Frame Drums'],
    bpmRange: '85-95',
    antiPatterns: ['drill 808', 'autotune lead', 'kalimba', 'lofi crackle'],
    description: 'Mature conscious rap with layered oriental samples and Wu-Tang/RZA heritage.'
  },
  'poet-jazz-noir': {
    id: 'poet-jazz-noir',
    label: 'Poet Jazz Noir',
    artistAnchors: ['Oxmo Puccino'],
    instruments: ['violins', 'flute', 'minimalist guitar', 'discrete bass', 'jazz hip-hop drums'],
    sunoTags: ['Violins', 'Flute', 'Minimalist Guitar', 'Jazz Hip-Hop Drums'],
    bpmRange: '85-100',
    antiPatterns: ['drill 808', 'autotune lead', 'orchestral horns', 'flamenca'],
    description: 'Urban-noir poetry — film noir atmosphere with literary delivery.'
  },
  'street-grave-808-vocoder': {
    id: 'street-grave-808-vocoder',
    label: 'Street Grave 808 Vocoder',
    artistAnchors: ['Lacrim', 'Rohff'],
    instruments: ['massive 808 sub', 'descending 3-note synth', 'minimal reverb', 'open kicks', 'discrete vocoder'],
    sunoTags: ['Massive 808', 'Descending Synth', 'Open Kicks', 'Discrete Vocoder'],
    bpmRange: '80-95',
    antiPatterns: ['kalimba', 'jazz Rhodes', 'cloud pads', 'flamenca'],
    description: 'Slow grave street-mafia — vocoder discrete, 808 sub-bass massive, tempo gravity max.'
  }
};

export const HARMONIC_PROFILE_IDS: HarmonicProfileId[] = Object.keys(HARMONIC_PROFILES) as HarmonicProfileId[];

/** Récupère un profil harmonique par id */
export function getHarmonicProfile(id?: string | null): HarmonicProfile | null {
  if (!id) return null;
  return (HARMONIC_PROFILES as Record<string, HarmonicProfile>)[id] || null;
}

/** Auto-suggère un profil harmonique à partir d'un nom d'artiste-référence */
export function suggestHarmonicProfileForArtist(inspiredBy: string): HarmonicProfileId | null {
  if (!inspiredBy) return null;
  const upper = inspiredBy.toUpperCase().trim();
  const map: Record<string, HarmonicProfileId> = {
    'BOOBA': 'synth-dark-boom-bap',
    'DAMSO': 'jazz-soul-rhodes',
    'KAARIS': 'mystic-orchestral-808',
    'SCH': 'italo-cinematic-minor',
    'NINHO': 'afro-trap-melodic',
    'HAMZA': 'cloud-rnb-velvet',
    'TIAKOLA': 'gospel-kalimba-afro',
    "RIM'K": 'rai-mediterranean-vintage',
    'RIMK': 'rai-mediterranean-vintage',
    'LOMEPAL': 'pop-chanson-acoustic',
    'ALPHA WANN': 'boom-bap-piano-loop',
    'GAZO': 'drill-fr-cold',
    'KALASH CRIMINEL': 'drill-fr-cold',
    'KALASH': 'drill-fr-cold',
    'PNL': 'cloud-trap-arabe',
    'LAYLOW': 'synth-retro-futur',
    'LUJIPEKA': 'lofi-glitch-808',
    'DINOS': 'conscient-jazz-soul',
    'JUL': 'marseille-pop-naive',
    'IAM': 'conscient-oriental-sampled',
    'MÉDINE': 'conscient-oriental-sampled',
    'MEDINE': 'conscient-oriental-sampled',
    'OXMO PUCCINO': 'poet-jazz-noir',
    'OXMO': 'poet-jazz-noir',
    'LACRIM': 'street-grave-808-vocoder',
    'ROHFF': 'street-grave-808-vocoder'
  };
  if (map[upper]) return map[upper];
  for (const [k, v] of Object.entries(map)) {
    if (upper.includes(k) || k.includes(upper)) return v;
  }
  return null;
}

/** Construit le bloc texte à injecter dans le system prompt */
export function buildHarmonicBlock(
  explicitProfileId?: string | null,
  inspiredBy?: string
): string {
  let profile = getHarmonicProfile(explicitProfileId);
  if (!profile && inspiredBy) {
    const suggested = suggestHarmonicProfileForArtist(inspiredBy);
    if (suggested) profile = HARMONIC_PROFILES[suggested];
  }
  if (!profile) return '';

  return `\n# HARMONIC PROFILE — ${profile.label.toUpperCase()}:
${profile.description}
INSTRUMENTS (use these, NOT generic piano): ${profile.instruments.join(', ')}
SUNO TAGS to include: [${profile.sunoTags.join('] [')}]
BPM range: ${profile.bpmRange}
ANTI-PATTERNS for this profile (NEVER use): ${profile.antiPatterns.join(', ')}

CRITICAL: Do NOT default to "Dark Piano Loop" or generic "Cinematic Minor Piano". Use the specific instruments above. The profile is the source of truth for the harmonic identity.
`;
}

/**
 * SPRINT 2 — Validate that a generated sunoPrompt is coherent with the
 * resolved harmonic profile. Returns a list of violations (anti-patterns
 * present, or insufficient instrument coverage).
 *
 * Non-blocking : the caller decides what to do with the result.
 */
export interface HarmonicViolation {
  kind: 'anti-pattern' | 'low-coverage';
  detail: string;
}

export function validateHarmonicCoherence(
  sunoPrompt: string,
  explicitProfileId?: string | null,
  inspiredBy?: string
): HarmonicViolation[] {
  if (!sunoPrompt) return [];
  let profile = getHarmonicProfile(explicitProfileId);
  if (!profile && inspiredBy) {
    const s = suggestHarmonicProfileForArtist(inspiredBy);
    if (s) profile = HARMONIC_PROFILES[s];
  }
  if (!profile) return [];

  const lower = sunoPrompt.toLowerCase();
  const violations: HarmonicViolation[] = [];

  // Anti-pattern detection
  for (const ap of profile.antiPatterns) {
    if (!ap || ap.length < 3) continue;
    if (lower.includes(ap.toLowerCase())) {
      violations.push({ kind: 'anti-pattern', detail: ap });
    }
  }

  // Coverage: at least 2 instruments from the profile palette must appear
  const matchedInstruments = profile.instruments.filter(inst => {
    if (!inst || inst.length < 3) return false;
    // Match on the meaningful core word(s)
    const core = inst.toLowerCase().split(/\s+/).filter(w => w.length > 3);
    return core.some(w => lower.includes(w));
  });
  if (matchedInstruments.length < 2) {
    violations.push({
      kind: 'low-coverage',
      detail: `only ${matchedInstruments.length}/${profile.instruments.length} instruments matched (expected ≥2 from: ${profile.instruments.slice(0, 4).join(', ')})`
    });
  }

  return violations;
}

// ── SPRINT 5 — SELF-HEALING FIX INSTRUCTION ──
// Builds a corrective directive from harmonic violations, to be re-injected
// into Gemini during a self-healing retry pass.
export function buildHarmonicFixInstruction(
  violations: HarmonicViolation[],
  profileId?: string | null,
  inspiredBy?: string
): string {
  if (!violations.length) return '';
  let profile = getHarmonicProfile(profileId);
  if (!profile && inspiredBy) {
    const s = suggestHarmonicProfileForArtist(inspiredBy);
    if (s) profile = HARMONIC_PROFILES[s];
  }
  const lines: string[] = ['⚠️ HARMONIC COHERENCE FIX REQUIRED ⚠️'];
  const antiPatterns = violations.filter(v => v.kind === 'anti-pattern').map(v => v.detail);
  const coverage = violations.find(v => v.kind === 'low-coverage');
  if (antiPatterns.length) {
    lines.push(`STRIP these forbidden harmonic anti-patterns from sunoPrompt: ${antiPatterns.join(', ')}`);
  }
  if (coverage && profile) {
    lines.push(`INSERT at least 2 instruments from this palette into sunoPrompt: ${profile.instruments.slice(0, 6).join(', ')}`);
    lines.push(`Use these Suno tags: ${profile.sunoTags.slice(0, 4).join(', ')}`);
  }
  return lines.join('\n');
}

// ── SPRINT 4 — HARMONIC PRESETS ──
// Named recipes combining a harmonic profile + a curated set of cursor
// overrides. Consumed by callers (scripts, tests, future UI) via
// applyHarmonicPreset(id), which returns a Partial<CursorOverrides>
// ready to pass into generateMusicContext's cursorOverrides param.

import type { CursorOverrides } from './sonic-dna';

export interface HarmonicPreset {
  id: string;
  label: string;
  description: string;
  cursors: Partial<CursorOverrides>;
}

export const HARMONIC_PRESETS: HarmonicPreset[] = [
  {
    id: 'dark-combative-drill',
    label: 'Dark Combative Drill',
    description: 'Cold drill instrumentation, confrontational register, no narrative, fast tempo.',
    cursors: {
      harmonicProfileId: 'drill-fr-cold',
      compositionMode: 'hook-driven',
      registerMode: 'combative',
      conceptualMode: 'non-narrative',
      technicityMode: 'standard',
      honorCode: 'implicit',
      tempoGravity: 'fast',
      referenceDensity: 25,
    }
  },
  {
    id: 'contemplative-jazz-soul',
    label: 'Contemplative Jazz Soul',
    description: 'Jazz/soul palette, introspective register, virtuoso writing, mid tempo.',
    cursors: {
      harmonicProfileId: 'jazz-soul-rhodes',
      compositionMode: 'text-first',
      registerMode: 'contemplative',
      conceptualMode: 'narrative-real',
      technicityMode: 'virtuoso',
      honorCode: 'implicit',
      tempoGravity: 'mid',
      referenceDensity: 70,
    }
  },
  {
    id: 'cloud-melodic-arabe',
    label: 'Cloud Melodic Arabe',
    description: 'Cloud trap with Arabic lexical anchors, melody-first, slow gravity.',
    cursors: {
      harmonicProfileId: 'cloud-trap-arabe',
      compositionMode: 'melody-first',
      registerMode: 'contemplative',
      conceptualMode: 'non-narrative',
      technicityMode: 'simple-volunteer',
      honorCode: 'implicit',
      tempoGravity: 'slow',
      referenceDensity: 20,
      territorialAnchor: { lang: 'arabe', density: 30, role: 'lexical' },
    }
  },
  {
    id: 'boom-bap-virtuoso',
    label: 'Boom-Bap Virtuoso',
    description: 'Boom-bap piano loop, virtuoso technicity, text-first, high reference density.',
    cursors: {
      harmonicProfileId: 'boom-bap-piano-loop',
      compositionMode: 'text-first',
      registerMode: 'combative',
      conceptualMode: 'non-narrative',
      technicityMode: 'virtuoso',
      honorCode: 'implicit',
      tempoGravity: 'mid',
      referenceDensity: 80,
    }
  },
  {
    id: 'marseille-pop-naive',
    label: 'Marseille Pop Naïve',
    description: 'Sunny Mediterranean pop, simple-volunteer writing, hook-driven, hybrid register.',
    cursors: {
      harmonicProfileId: 'marseille-pop-naive',
      compositionMode: 'hook-driven',
      registerMode: 'hybrid',
      conceptualMode: 'non-narrative',
      technicityMode: 'simple-volunteer',
      honorCode: 'implicit',
      tempoGravity: 'mid',
      referenceDensity: 15,
    }
  },
  {
    id: 'street-honor-code',
    label: 'Street Honor Code',
    description: 'Street 808 + vocoder, central honor code, narrative-real, combative.',
    cursors: {
      harmonicProfileId: 'street-grave-808-vocoder',
      compositionMode: 'text-first',
      registerMode: 'combative',
      conceptualMode: 'narrative-real',
      technicityMode: 'standard',
      honorCode: 'central',
      tempoGravity: 'mid',
      referenceDensity: 45,
    }
  },
];

/** Returns a Partial<CursorOverrides> recipe for a given preset id, or null. */
export function applyHarmonicPreset(presetId: string): Partial<CursorOverrides> | null {
  const preset = HARMONIC_PRESETS.find(p => p.id === presetId);
  return preset ? { ...preset.cursors } : null;
}

export const HARMONIC_PRESET_IDS = HARMONIC_PRESETS.map(p => p.id);
