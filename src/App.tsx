import React, { useState } from 'react';
import { MusicStudio } from './components/MusicStudio';
import { Home } from './components/Home';
import { SessionState } from './types';
import { COLORS, RAPPER_STYLES } from './constants';
import { motion, AnimatePresence } from 'motion/react';
import { LayoutGrid } from 'lucide-react';

const INITIAL_STATE: SessionState = {
  activeTab: 'music',
  artist: '',
  sex: 'male',
  height: 170,
  age: 'none',
  ethnicity: 'none',
  genre: 'none',
  mode: 'artiste',
  color: COLORS[0],
  motion: 'none',
  selectedPlan: 'none',
  model: 'sonnet' as any,
  bpm: null,
  manualBpm: false,
  expressionKey: 'none',
  expressionPrompt: '',
  videoActive: true,
  videoParams: {
    duration: '5s',
    intensity: 5,
    angle: 'eye-level',
    lighting: 'soft',
  },
  styleRefActive: false,
  styleRefSelected: null,
  studioStyle: 'none',
  wardrobe: {
    colors: [],
    sils: [],
    styles: ['street'],
  },
  selectedArtistOutfit: RAPPER_STYLES[0],
  music: {
    genre: '',
    mood: '',
    theme: '',
    language: 'AUCUNE',
    inspiredBy: '',
    secondaryInspiredBy: 'none',
    era: '',
    performanceActive: false,
    energy: 0,
    emotionalIntensity: 0,
    voiceType: '',
    vocalTimbre: '',
    singingStyle: '',
    vocalPresence: '',
    accent: '',
    vocalReference: '',
    emotionLevel: '',
    instrumentation: '',
    productionStyle: '',
    styleBlend: '',
    bpm: 120,
    structure: 'STANDARD',
    lyrics: [],
    lipSyncExcerpt: '',
    duration: 180,
    sunoPrompt: '',
    isGenerating: false,
    weirdness: 0,
    styleInfluence: 100,
    vocalTechnique: 'none',
    productionFinish: 'none',
    advancedTags: [],
    history: []
  },
  view: 'home',
  aiProvider: 'gemini'
};

export default function App() {
  const [state, setState] = useState<SessionState>(INITIAL_STATE);

  return (
    <AnimatePresence mode="wait">
      {state.view === 'home' ? (
        <Home
          onSelect={(view, provider) => {
            setState(prev => ({
              ...prev,
              view,
              activeTab: 'music',
              aiProvider: provider || 'gemini'
            }));
          }}
        />
      ) : (
        <motion.div
          key="main-app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="min-h-screen bg-[#0d0d0b] text-[#e8e4dc] flex flex-col"
        >
          {/* Top Navigation */}
          <div className="h-12 border-b border-[#242420] flex items-center px-6 gap-4 bg-[#0a0a08] z-50">
            <button
              onClick={() => setState(prev => ({ ...prev, view: 'home' }))}
              className={`h-full font-bebas text-sm tracking-[0.2em] transition-all flex items-center gap-2 text-[#444] ${state.aiProvider === 'grok' ? 'hover:text-[#3B82F6]' : 'hover:text-[#10B981]'}`}
            >
              <LayoutGrid size={16} />
              MENU
            </button>
            <div className="w-px h-4 bg-[#242420]" />
            <div className="h-full font-bebas text-sm tracking-[0.2em] flex items-center gap-2 border-b-2"
              style={{ borderColor: state.aiProvider === 'grok' ? '#3B82F6' : '#10B981', color: state.aiProvider === 'grok' ? '#3B82F6' : '#10B981' }}
            >
              <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: state.aiProvider === 'grok' ? '#3B82F6' : '#10B981' }} />
              MUSIC STUDIO (SUNO)
            </div>
            <div className="font-mono text-[9px] tracking-widest px-2.5 py-1 rounded-md border"
              style={{
                backgroundColor: state.aiProvider === 'grok' ? 'rgba(59,130,246,0.1)' : 'rgba(16,185,129,0.1)',
                color: state.aiProvider === 'grok' ? '#3B82F6' : '#10B981',
                borderColor: state.aiProvider === 'grok' ? 'rgba(59,130,246,0.3)' : 'rgba(16,185,129,0.3)'
              }}
            >
              {state.aiProvider === 'grok' ? 'GROK · xAI' : 'GEMINI · Google'}
            </div>
          </div>

          <div className="flex-1 flex overflow-hidden">
            <MusicStudio state={state} setState={setState} onMenuClick={() => setState(prev => ({ ...prev, view: 'home' }))} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
