export type Sex = 'male' | 'female';
export type GenerationMode = 'studio' | 'artiste' | 'ensemble' | 'multishot';
export type MotionType = 'none' | 'static' | 'trucklr' | 'zoomin' | 'zoomout';
export type ModelType = 'flash' | 'pro';
export type AppTab = 'visual' | 'music';

export interface Verse {
  id: string;
  type: string;
  text: string;
  prompt: string;
}

export interface ArtistMetadata {
  id: string;
  name: string;
  country?: string;
  lifeSpan?: {
    begin?: string;
    end?: string;
    ended?: boolean;
  };
  type?: string;
  gender?: string;
  tags?: string[];
  primaryGenre?: string;
}

export interface MusicState {
  genre: string;
  mood: string;
  theme: string;
  language: string;
  inspiredBy: string;
  secondaryInspiredBy: string;
  era: string;
  performanceActive: boolean;
  energy: number;
  emotionalIntensity: number;
  voiceType: string;
  vocalTimbre: string;
  singingStyle: string;
  vocalPresence: string;
  accent: string;
  vocalReference: string;
  emotionLevel: string;
  instrumentation: string;
  productionStyle: string;
  styleBlend: string;
  bpm: number | null;
  structure: string;
  lyrics: Verse[];
  lipSyncExcerpt?: string;
  duration: number;
  sunoPrompt: string;
  sunoPrompts?: string[];
  negativePrompt?: string;
  customNegativePrompt?: string;
  artistName?: string;
  songTitle?: string;
  artistIdentitySummary?: string;
  artistMetadata?: ArtistMetadata;
  quality?: {
    score: number;
    coherence: number;
    richness: number;
    clarity: number;
    hook: number;
    precision: number;
    message: string;
  };
  isGenerating: boolean;
  weirdness: number;
  styleInfluence: number;
  vocalTechnique: string;
  productionFinish: string;
  advancedTags: string[];
  error?: string | null;
  history?: {
    id: string;
    timestamp: number;
    sunoPrompt: string;
    negativePrompt?: string;
    lyrics: Verse[];
    lipSyncExcerpt?: string;
    quality: any;
  }[];
}

export interface StudioColor {
  hex: string;
  n1: string;
  n2: string;
  name: string;
  outfitMale: string;
  outfitFemale: string;
}

export interface CameraPlan {
  id: string;
  name: string;
  focal: string;
  fstop: string;
  dist: string;
  h: string;
  ratio: string;
  frame: string;
  mic_pos: string;
}

export interface ArtistStyle {
  name: string;
  gender: Sex;
  prompt: string;
}

export interface SessionState {
  activeTab: AppTab;
  artist: string;
  sex: Sex;
  height: number;
  age: string;
  ethnicity: string;
  genre: string;
  mode: GenerationMode;
  color: StudioColor;
  motion: MotionType;
  selectedPlan: string;
  model: ModelType;
  bpm: number | null;
  manualBpm: boolean;
  styleRefActive: boolean;
  styleRefSelected: string | null;
  studioStyle: 'none' | 'epic' | 'film' | 'soundtrack';
  expressionKey: string;
  expressionPrompt: string;
  videoActive: boolean;
  videoParams: {
    duration: '5s' | '10s';
    intensity: number;
    angle: 'eye-level' | 'low-angle' | 'high-angle';
    lighting: 'soft' | 'dramatic' | 'neon' | 'natural';
  };
  wardrobe: {
    colors: string[];
    sils: string[];
    styles: string[];
  };
  selectedArtistOutfit: ArtistStyle | null;
  music: MusicState;
  view: 'home' | 'studio' | 'suno';
  aiProvider: 'gemini' | 'grok';
}
