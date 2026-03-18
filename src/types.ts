export type Sex = 'male' | 'female';
export type GenerationMode = 'studio' | 'artiste' | 'ensemble' | 'multishot';
export type MotionType = 'none' | 'static' | 'trucklr' | 'zoomin' | 'zoomout';
export type ModelType = 'flash' | 'pro';
export type AppTab = 'visual' | 'music';

export interface MusicState {
  genre: string;
  mood: string;
  theme: string;
  language: string;
  inspiredBy: string;
  era: string;
  commerciality: string;
  energy: number;
  emotionalIntensity: number;
  voiceType: string;
  vocalTimbre: string;
  singingStyle: string;
  vocalPresence: string;
  accent: string;
  vocalReference: string;
  emotionLevel: string;
  lyrics: string;
  lipSyncExcerpt?: string;
  sunoPrompt: string;
  sunoPrompts?: string[];
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
  error?: string | null;
  history?: {
    id: string;
    timestamp: number;
    sunoPrompt: string;
    lyrics: string;
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
  facePrompt: string;
  faceActive: boolean;
  styleRefActive: boolean;
  styleRefSelected: string | null;
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
    mats: string[];
    sils: string[];
    styles: string[];
  };
  music: MusicState;
}
