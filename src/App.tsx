import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { StudioPreview } from './components/StudioPreview';
import { PromptBlock } from './components/PromptBlock';
import { MusicStudio } from './components/MusicStudio';
import { SessionState, GenerationMode, MotionType, AppTab } from './types';
import { COLORS, PLANS, ARTIST_STYLES, ETHNICITY_DESC, EXPRESSIONS, WARDROBE_MATERIALS, WARDROBE_SILHOUETTES, WARDROBE_STYLES } from './constants';
import { generateCreativeContext } from './services/gemini';
import { buildStudioPrompt, buildArtistePrompt, buildMultiShotPrompts, buildKlingPrompt, buildVidmusePrompt, buildHiggsfieldPrompt, buildVidPrompt } from './services/prompts';
import { motion, AnimatePresence } from 'motion/react';

const INITIAL_STATE: SessionState = {
  activeTab: 'visual',
  artist: '',
  sex: 'male',
  height: 170,
  age: 'none',
  ethnicity: 'none',
  genre: 'none',
  mode: 'studio',
  color: COLORS[0],
  motion: 'none',
  selectedPlan: 'none',
  model: 'sonnet' as any,
  bpm: null,
  manualBpm: false,
  facePrompt: '',
  faceActive: true,
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
  wardrobe: {
    colors: [],
    mats: [],
    sils: [],
    styles: [],
  },
  music: {
    genre: '',
    mood: '',
    theme: '',
    language: 'FRANÇAIS',
    inspiredBy: 'DRAKE',
    era: 'MODERNE',
    commerciality: 'ACCESSIBLE',
    energy: 50,
    emotionalIntensity: 50,
    voiceType: 'FÉMININE',
    vocalTimbre: 'VELOUTÉ',
    singingStyle: 'INTIME',
    vocalPresence: 'STUDIO CLOSE-MIC',
    accent: '',
    vocalReference: '',
    emotionLevel: 'MOYEN',
    lyrics: '',
    lipSyncExcerpt: '',
    sunoPrompt: '',
    isGenerating: false,
    history: []
  }
};

export default function App() {
  const [state, setState] = useState<SessionState>(INITIAL_STATE);
  const [isGenerating, setIsGenerating] = useState(false);
  const [genProgress, setGenProgress] = useState(0);
  const [genStatus, setGenStatus] = useState('');
  const [results, setResults] = useState<any>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'image' | 'video' | 'multi'>('all');
  const [showSplash, setShowSplash] = useState(true);
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');

  const handleRandomize = () => {
    const sexes: ('male' | 'female')[] = ['male', 'female'];
    const sex = sexes[Math.floor(Math.random() * sexes.length)];
    const height = Math.floor(Math.random() * (sex === 'female' ? 25 : 35)) + 155;
    const ethnicities = Object.keys(ETHNICITY_DESC);
    const ethnicity = ethnicities[Math.floor(Math.random() * ethnicities.length)];
    const genres = ['reggaeton', 'trap-latino', 'hip-hop', 'drill', 'rnb', 'soul', 'afrobeats', 'pop', 'electronic', 'house', 'jazz'];
    const genre = genres[Math.floor(Math.random() * genres.length)];
    const ages = ['18', '20', '22', '24', '26', '28', '30', '32', '35', '38', '40'];
    const age = ages[Math.floor(Math.random() * ages.length)];
    
    const randomExp = EXPRESSIONS[Math.floor(Math.random() * EXPRESSIONS.length)];

    const randomMats = Math.random() > 0.5 ? [WARDROBE_MATERIALS[Math.floor(Math.random() * WARDROBE_MATERIALS.length)].key] : [];
    const availableSils = WARDROBE_SILHOUETTES.filter(s => s.gender === 'unisex' || s.gender === sex);
    const randomSils = Math.random() > 0.5 ? [availableSils[Math.floor(Math.random() * availableSils.length)].key] : [];
    const randomStyles = Math.random() > 0.5 ? [WARDROBE_STYLES[Math.floor(Math.random() * WARDROBE_STYLES.length)].key] : [];

    setState(prev => ({
      ...prev,
      sex,
      height,
      ethnicity,
      genre,
      age,
      expressionKey: randomExp.key,
      expressionPrompt: randomExp.prompt,
      wardrobe: {
        ...prev.wardrobe,
        mats: randomMats,
        sils: randomSils,
        styles: randomStyles
      },
      artist: prev.artist || 'Artiste'
    }));
  };

  const generatePrompts = async () => {
    setIsGenerating(true);
    setGenProgress(0);
    
    const steps = [
      { p: 15, m: 'Analyse du profil artiste...' },
      { p: 35, m: 'Configuration du studio monochromatic...' },
      { p: 55, m: 'Calcul des plans caméra ARRI...' },
      { p: 75, m: 'Génération des prompts IA (Kling, Vidmuse)...' },
      { p: 95, m: 'Finalisation des métadonnées...' },
      { p: 100, m: 'Prêt.' }
    ];

    const runSteps = async () => {
      for (const step of steps) {
        setGenStatus(step.m);
        setGenProgress(step.p);
        await new Promise(r => setTimeout(r, 400 + Math.random() * 600));
      }
    };

    const generationTask = (async () => {
      try {
        const context = await generateCreativeContext(state);
        const studioPrompt = buildStudioPrompt(state);
        const artistePrompts = PLANS.map(p => buildArtistePrompt(state, p));
        const multishotPrompts = buildMultiShotPrompts(state);
        const ensemblePrompt = buildArtistePrompt(state, PLANS[0]);
        const klingPrompt = buildKlingPrompt(state);
        const vidmusePrompt = buildVidmusePrompt(state);
        const higgsfieldPrompt = buildHiggsfieldPrompt(state);
        const vidPrompt = buildVidPrompt(state);

        return {
          context,
          studioPrompt,
          artistePrompts,
          multishotPrompts,
          ensemblePrompt,
          klingPrompt,
          vidmusePrompt,
          higgsfieldPrompt,
          vidPrompt
        };
      } catch (error) {
        console.error(error);
        return null;
      }
    })();

    const [res] = await Promise.all([generationTask, runSteps()]);
    
    if (res) {
      setResults(res);
    }
    setIsGenerating(false);
  };

  const launchMode = (mode: 'desktop' | 'mobile') => {
    setViewMode(mode);
    setShowSplash(false);
  };

  return (
    <AnimatePresence mode="wait">
      {showSplash ? (
        <motion.div 
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-[#080806] z-[9999] flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(rgba(232,113,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(232,113,42,0.03)_1px,transparent_1px)] bg-[length:40px_40px] pointer-events-none" />
          <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(232,113,42,0.06)_0%,transparent_70%)] pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-0 relative z-10"
          >
            <div className="font-mono text-[10px] tracking-[6px] text-[#585848] uppercase mb-3">Generative Studio · AI Production Tool</div>
            <div className="font-bebas text-[120px] tracking-[16px] text-[#e8e4dc] leading-[0.9] bg-gradient-to-b from-white via-[#e8e4dc] to-[#9a8a70] bg-clip-text text-transparent">COLORS</div>
            <div className="font-mono text-[10px] tracking-[4px] text-[#E8712A] uppercase mt-2">IA Studio Agent · v16</div>
            
            <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-[#2a2a24] to-transparent my-10" />
            
            <div className="font-mono text-[11px] tracking-[2px] text-[#888880] text-center leading-loose mb-12">
              Génère des sessions studio monochromes<br/>
              Prompts image · vidéo · multi-shot · coordonnés
            </div>

            <div className="flex gap-4">
              <button 
                onClick={() => launchMode('desktop')}
                className="flex flex-col items-center gap-3 border border-[#1e1e18] rounded-lg p-7 min-w-[180px] bg-gradient-to-br from-[#111110] to-[#0d0d0b] cursor-pointer transition-all hover:border-[#E8712A]/40 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(232,113,42,0.1)] group"
              >
                <div className="text-3xl grayscale group-hover:grayscale-0 transition-all">🖥</div>
                <div className="font-bebas text-[22px] tracking-[4px] text-[#e8e4dc]">DESKTOP</div>
                <div className="font-mono text-[8px] tracking-widest text-[#666660] text-center leading-relaxed">
                  Plein écran · Toutes fonctions<br/>Sidebar complète · Multi-shot
                </div>
              </button>

              <button 
                onClick={() => launchMode('mobile')}
                className="flex flex-col items-center gap-3 border border-[#1e1e18] rounded-lg p-7 min-w-[180px] bg-gradient-to-br from-[#111110] to-[#0d0d0b] cursor-pointer transition-all hover:border-[#E8712A]/40 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(232,113,42,0.1)] group"
              >
                <div className="text-3xl grayscale group-hover:grayscale-0 transition-all">📱</div>
                <div className="font-bebas text-[22px] tracking-[4px] text-[#e8e4dc]">MOBILE</div>
                <div className="font-mono text-[8px] tracking-widest text-[#666660] text-center leading-relaxed">
                  Interface tactile · Rapide<br/>Accordéon · FAB button
                </div>
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : viewMode === 'mobile' ? (
        <motion.div 
          key="mobile"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="min-h-screen bg-[#0a0a08] text-[#e8e4dc] flex flex-col"
        >
          <div className="flex items-center justify-between p-3.5 border-b border-[#242420] sticky top-0 bg-[#0a0a08] z-50">
            <div className="font-bebas text-[28px] tracking-[6px]">COLORS</div>
            <button 
              onClick={generatePrompts}
              disabled={isGenerating}
              className="bg-[#E8712A] text-[#0a0a08] border-none font-bebas text-[14px] tracking-[3px] px-4 py-2 rounded-md cursor-pointer disabled:opacity-50"
            >
              {isGenerating ? '...' : '⬤ GÉNÉRER'}
            </button>
          </div>

          {/* Mobile Tab Navigation */}
          <div className="flex border-b border-[#242420] bg-[#0a0a08] sticky top-[65px] z-40">
            <button 
              onClick={() => setState(prev => ({ ...prev, activeTab: 'visual' }))}
              className={`flex-1 py-3 font-bebas text-[12px] tracking-[0.2em] transition-all flex items-center justify-center gap-2 border-b-2 ${state.activeTab === 'visual' ? 'border-[#E8712A] text-[#E8712A]' : 'border-transparent text-[#444]'}`}
            >
              VISUAL
            </button>
            <button 
              onClick={() => setState(prev => ({ ...prev, activeTab: 'music' }))}
              className={`flex-1 py-3 font-bebas text-[12px] tracking-[0.2em] transition-all flex items-center justify-center gap-2 border-b-2 ${state.activeTab === 'music' ? 'border-[#E8712A] text-[#E8712A]' : 'border-transparent text-[#444]'}`}
            >
              MUSIC (SUNO)
            </button>
          </div>

          <div className="flex-1 overflow-y-auto pb-24">
            {state.activeTab === 'visual' ? (
              <div className="p-4 flex flex-col gap-4">
                <div className="border border-[#242420] rounded-lg p-4 bg-[#0d0d0b]">
                  <StudioPreview 
                    state={state} 
                    onPlanChange={p => setState(prev => ({ ...prev, selectedPlan: p }))}
                    onMotionChange={m => setState(prev => ({ ...prev, motion: m }))}
                  />
                </div>
                
                <div className="mobile-sidebar-wrapper">
                  <Sidebar state={state} setState={setState} onRandomize={handleRandomize} />
                </div>

                {isGenerating && (
                  <div className="py-10 flex flex-col items-center justify-center gap-3">
                    <div className="w-8 h-8 border-2 border-[#E8712A] border-t-transparent rounded-full animate-spin" />
                    <div className="font-mono text-[8px] tracking-widest text-[#484840]">GÉNÉRATION...</div>
                  </div>
                )}

                {results && !isGenerating && (
                  <div className="mt-4 flex flex-col gap-4">
                    <div className="font-bebas text-[22px] tracking-[4px] border-b border-[#242420] pb-2">
                      RÉSULTATS
                    </div>
                    {state.mode === 'studio' && (
                      <PromptBlock id="m-s-nb" hdrColor="#c4a030" iaLabel="NB" params={['16:9']} promptText={results.studioPrompt} />
                    )}
                    {state.mode === 'artiste' && results.artistePrompts.map((p: string, i: number) => (
                      <PromptBlock key={i} id={`m-a-nb-${i}`} hdrColor="#c4a030" iaLabel="NB" params={['16:9']} promptText={p} />
                    ))}
                    {state.mode === 'ensemble' && (
                      <>
                        <PromptBlock id="m-e-nb" hdrColor="#c4a030" iaLabel="NB" params={['16:9']} promptText={results.ensemblePrompt} />
                        <PromptBlock id="m-e-kl" hdrColor="#E8712A" iaLabel="KLING" params={['16:9']} promptText={results.klingPrompt} />
                      </>
                    )}
                    {state.mode === 'multishot' && results.multishotPrompts.map((p: string, i: number) => (
                      <PromptBlock key={i} id={`m-ms-nb-${i}`} hdrColor="#9a6adc" iaLabel="NB" params={['16:9']} promptText={p} />
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="p-0">
                <MusicStudio state={state} setState={setState} />
              </div>
            )}
          </div>

          <button 
            onClick={generatePrompts}
            disabled={isGenerating}
            className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-[#E8712A] text-[#0a0a08] border-none font-bebas text-[16px] tracking-[4px] px-10 py-3.5 rounded-full cursor-pointer shadow-[0_4px_20px_rgba(232,113,42,0.5)] z-[100] disabled:opacity-50"
          >
            {isGenerating ? 'GÉNÉRATION...' : '⬤ GÉNÉRER'}
          </button>
        </motion.div>
      ) : (
        <motion.div 
          key="main-app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="min-h-screen bg-[#0d0d0b] text-[#e8e4dc] flex flex-col"
        >
          {/* Tab Navigation */}
          <div className="h-12 border-b border-[#242420] flex items-center px-6 gap-8 bg-[#0a0a08] z-50">
            <button 
              onClick={() => setState(prev => ({ ...prev, activeTab: 'visual' }))}
              className={`h-full font-bebas text-sm tracking-[0.2em] transition-all flex items-center gap-2 border-b-2 ${state.activeTab === 'visual' ? 'border-[#E8712A] text-[#E8712A]' : 'border-transparent text-[#444] hover:text-[#666]'}`}
            >
              <div className={`w-1.5 h-1.5 rounded-full ${state.activeTab === 'visual' ? 'bg-[#E8712A]' : 'bg-[#444]'}`} />
              VISUAL STUDIO
            </button>
            <button 
              onClick={() => setState(prev => ({ ...prev, activeTab: 'music' }))}
              className={`h-full font-bebas text-sm tracking-[0.2em] transition-all flex items-center gap-2 border-b-2 ${state.activeTab === 'music' ? 'border-[#E8712A] text-[#E8712A]' : 'border-transparent text-[#444] hover:text-[#666]'}`}
            >
              <div className={`w-1.5 h-1.5 rounded-full ${state.activeTab === 'music' ? 'bg-[#E8712A]' : 'bg-[#444]'}`} />
              MUSIC STUDIO (SUNO)
            </button>
          </div>

          <div className="flex-1 flex overflow-hidden">
            {state.activeTab === 'visual' ? (
              <div className="flex-1 flex flex-col overflow-hidden relative">
                <Header />
                
                <div className="bg-[#0a0a08] border-b border-[#242420] px-[18px] py-2 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E8712A]" />
                  <div className="font-mono text-[10px] tracking-widest text-[#888880] leading-relaxed">
                    <strong>Caméra ref. COLORSxSTUDIOS:</strong> ARRI Alexa 35 · Super35 · Log-C4 · ProRes 4444 · 24fps
                  </div>
                </div>

                <div className="grid grid-cols-[320px_1fr] flex-1 overflow-hidden">
                  <Sidebar state={state} setState={setState} onRandomize={handleRandomize} />
                  
                  <div className="p-4 overflow-y-auto relative">
                    <motion.div 
                      drag
                      dragMomentum={false}
                      initial={{ x: 0, y: 0 }}
                      className="fixed top-24 right-5 w-[230px] z-50 cursor-move active:cursor-grabbing"
                    >
                      <StudioPreview 
                        state={state} 
                        onPlanChange={p => setState(prev => ({ ...prev, selectedPlan: p }))}
                        onMotionChange={m => setState(prev => ({ ...prev, motion: m }))}
                      />
                    </motion.div>

                    {!results && !isGenerating && (
                      <div className="min-h-[380px] flex flex-col items-center justify-center gap-2.5 opacity-30">
                        <div className="font-bebas text-[22px] tracking-[6px]">IA COLORS STUDIO</div>
                        <div className="font-mono text-[9px] tracking-widest text-center leading-[2.6] text-[#888880]">
                          Configure artiste · couleur · mode<br/>
                          puis tape GÉNÉRER
                        </div>
                      </div>
                    )}

                    {isGenerating && (
                      <div className="min-h-[420px] flex flex-col items-center justify-center gap-6">
                        <div className="relative w-48 h-48 flex items-center justify-center">
                          <svg width="180" height="180" viewBox="0 0 100 100" className="transform -rotate-90">
                            <circle cx="50" cy="50" r="45" fill="none" stroke="#1a1a17" strokeWidth="1" />
                            <motion.circle 
                              cx="50" cy="50" r="45" fill="none" stroke="#E8712A" strokeWidth="2" 
                              strokeDasharray="283"
                              animate={{ strokeDashoffset: 283 - (283 * genProgress) / 100 }}
                              transition={{ duration: 0.5, ease: "easeOut" }}
                            />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <div className="font-bebas text-[42px] tracking-tighter leading-none">{genProgress}%</div>
                            <div className="font-mono text-[8px] tracking-[2px] text-[#888880] uppercase mt-1">Status</div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-center gap-2 max-w-xs w-full">
                          <div className="font-mono text-[9px] tracking-[2px] text-[#E8712A] uppercase animate-pulse text-center h-4">
                            {genStatus}
                          </div>
                          <div className="w-full h-[1px] bg-[#242420] relative overflow-hidden">
                            <motion.div 
                              className="absolute inset-y-0 left-0 bg-[#E8712A]"
                              animate={{ width: `${genProgress}%` }}
                              transition={{ duration: 0.5 }}
                            />
                          </div>
                          <div className="flex justify-between w-full font-mono text-[7px] text-[#444] tracking-widest uppercase mt-1">
                            <span>Init</span>
                            <span>Processing</span>
                            <span>Complete</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {results && !isGenerating && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto"
                      >
                        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#242420] pb-4 mb-6 gap-4">
                          <div>
                            <div className="font-bebas text-[32px] tracking-[5px] leading-none">{state.artist.toUpperCase()}</div>
                            <div className="font-mono text-[9px] tracking-[2px] text-[#888880] mt-1.5 uppercase">
                              {state.genre.toUpperCase()} · {state.color.name.toUpperCase()} · {state.mode.toUpperCase()}
                            </div>
                          </div>

                          <div className="flex gap-1 bg-[#141411] p-1 rounded-lg border border-[#242420]">
                            {[
                              { id: 'all', label: 'TOUT' },
                              { id: 'image', label: 'IMAGES' },
                              { id: 'video', label: 'VIDÉOS' },
                              { id: 'multi', label: 'MULTI' }
                            ].map(tab => (
                              <button
                                key={tab.id}
                                onClick={() => setActiveFilter(tab.id as any)}
                                className={`font-mono text-[8px] px-3 py-1.5 rounded-md transition-all tracking-widest ${activeFilter === tab.id ? 'bg-[#E8712A] text-black font-bold' : 'text-[#666] hover:text-[#888]'}`}
                              >
                                {tab.label}
                              </button>
                            ))}
                          </div>
                        </div>
                        
                        {results.context.concept && activeFilter === 'all' && (
                          <div className="border border-[#242420] rounded-lg overflow-hidden mb-8">
                            <div className="px-3 py-2 bg-[#141411] border-b border-[#242420] flex items-center gap-1.5">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#E8712A]" />
                              <span className="font-mono text-[9px] tracking-widest uppercase text-[#888880]">Concept visuel</span>
                            </div>
                            <div className="p-3 text-[13px] leading-relaxed text-[#bbb]">
                              {results.context.concept}
                            </div>
                          </div>
                        )}

                        {state.mode === 'studio' && (activeFilter === 'all' || activeFilter === 'image') && (
                          <>
                            <div className="flex items-center gap-1.5 mb-2">
                              <div className="flex-1 h-px bg-[#242420]" />
                              <span className="font-mono text-[9px] tracking-widest uppercase text-[#888880]">IMAGE · STUDIO VIDE</span>
                              <div className="flex-1 h-px bg-[#242420]" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <PromptBlock 
                                id="s-nb" 
                                hdrColor="#c4a030" 
                                iaLabel="NANO BANANA" 
                                params={['Photorealistic', '16:9', 'Guidance 7.5']} 
                                promptText={results.studioPrompt}
                                openUrl="https://nanobanana.ai"
                              />
                              <PromptBlock 
                                id="s-cg" 
                                hdrColor="#4a7aaa" 
                                iaLabel="CHAT GPT" 
                                params={['16:9', 'vivid']} 
                                promptText={results.studioPrompt}
                                openUrl="https://chatgpt.com"
                              />
                            </div>
                          </>
                        )}

                        {state.mode === 'artiste' && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {PLANS.map((p, i) => {
                              const isVideo = p.id === 'plan-full' || p.id === 'plan-medium';
                              if (activeFilter === 'video' && !isVideo) return null;
                              if (activeFilter === 'image' && isVideo) return null;
                              if (activeFilter === 'multi') return null;

                              return (
                                <motion.div 
                                  key={p.id}
                                  initial={{ opacity: 0, scale: 0.98 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: i * 0.1 }}
                                >
                                  <PromptBlock 
                                    id={p.id} 
                                    hdrColor="#c4a030" 
                                    iaLabel="NANO BANANA" 
                                    params={[p.ratio, 'Guidance 7.5']} 
                                    promptText={results.artistePrompts[i]}
                                    openUrl="https://nanobanana.ai"
                                  />
                                </motion.div>
                              );
                            })}
                          </div>
                        )}

                        {state.mode === 'ensemble' && (
                          <div className="space-y-8">
                            {(activeFilter === 'all' || activeFilter === 'image') && (
                              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                                <div className="flex items-center gap-1.5 mb-4">
                                  <div className="flex-1 h-px bg-[#242420]" />
                                  <span className="font-mono text-[9px] tracking-widest uppercase text-[#888880]">IMAGE · STUDIO + ARTISTE</span>
                                  <div className="flex-1 h-px bg-[#242420]" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <PromptBlock 
                                    id="e-nb" 
                                    hdrColor="#c4a030" 
                                    iaLabel="NANO BANANA" 
                                    params={['16:9', 'Guidance 7.5']} 
                                    promptText={results.ensemblePrompt}
                                    openUrl="https://nanobanana.ai"
                                  />
                                  <PromptBlock 
                                    id="e-cg" 
                                    hdrColor="#4a7aaa" 
                                    iaLabel="CHAT GPT" 
                                    params={['16:9', 'vivid']} 
                                    promptText={results.ensemblePrompt}
                                    openUrl="https://chatgpt.com"
                                  />
                                </div>
                              </motion.div>
                            )}

                            {(activeFilter === 'all' || activeFilter === 'video') && (
                              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                                <div className="flex items-center gap-1.5 mb-4 mt-6">
                                  <div className="flex-1 h-px bg-[#242420]" />
                                  <span className="font-mono text-[9px] tracking-widest uppercase text-[#888880]">VIDÉO · APRÈS GÉNÉRATION IMAGE</span>
                                  <div className="flex-1 h-px bg-[#242420]" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <PromptBlock 
                                    id="e-kl" 
                                    hdrColor="#E8712A" 
                                    iaLabel="KLING 3.0" 
                                    params={['16:9', '--v 3.0', 'Slow motion']} 
                                    promptText={results.klingPrompt}
                                    openUrl="https://klingai.com"
                                  />
                                  <PromptBlock 
                                    id="e-vm" 
                                    hdrColor="#8c4a7c" 
                                    iaLabel="VIDMUSE" 
                                    params={['Audio-driven', 'Beat sync', 'Cinematic']} 
                                    promptText={results.vidmusePrompt}
                                    openUrl="https://vidmuse.ai"
                                  />
                                  <PromptBlock 
                                    id="e-hf" 
                                    hdrColor="#3d8c52" 
                                    iaLabel="HIGGSFIELD" 
                                    params={['Cinematic', 'Static camera']} 
                                    promptText={results.higgsfieldPrompt}
                                    openUrl="https://higgsfield.ai"
                                  />
                                  <PromptBlock 
                                    id="e-vd" 
                                    hdrColor="#2a7a9a" 
                                    iaLabel="VID" 
                                    params={['16:9', '24fps']} 
                                    promptText={results.vidPrompt}
                                  />
                                </div>
                              </motion.div>
                            )}
                          </div>
                        )}

                        {state.mode === 'multishot' && (activeFilter === 'all' || activeFilter === 'multi') && (
                          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                            <div className="flex items-center gap-1.5 mb-4">
                              <div className="flex-1 h-px bg-[#242420]" />
                              <span className="font-mono text-[9px] tracking-widest uppercase text-[#888880]">MULTI-SHOT SESSION</span>
                              <div className="flex-1 h-px bg-[#242420]" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              {results.multishotPrompts.map((p: string, i: number) => (
                                <PromptBlock 
                                  key={i}
                                  id={`ms-${i}`} 
                                  hdrColor="#c4a030" 
                                  iaLabel="NANO BANANA" 
                                  params={['16:9', 'Coherent']} 
                                  promptText={p}
                                  openUrl="https://nanobanana.ai"
                                />
                              ))}
                            </div>
                          </motion.div>
                        )}

                        {results.context.caption && activeFilter === 'all' && (
                          <div className="border border-[#242420] rounded-lg overflow-hidden mt-6">
                            <div className="px-3 py-2 bg-[#141411] border-b border-[#242420] flex items-center gap-1.5">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#E8712A]" />
                              <span className="font-mono text-[9px] tracking-widest uppercase text-[#888880]">CAPTION · SESSION {state.artist.toUpperCase()}</span>
                            </div>
                            <div className="p-3 font-mono text-[10px] leading-relaxed text-[#888]">
                              {results.context.caption}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </div>
                </div>

                <button 
                  onClick={generatePrompts}
                  disabled={isGenerating}
                  className="fixed bottom-5 right-5 z-[200] bg-[#E8712A] text-[#0d0d0b] border-none font-bebas text-[16px] tracking-[4px] px-6 py-3 rounded-md cursor-pointer shadow-[0_4px_22px_rgba(232,113,42,0.45)] transition-all hover:opacity-90 hover:-translate-y-0.5 active:scale-95 disabled:bg-[#2a2a24] disabled:text-[#444] disabled:cursor-not-allowed disabled:shadow-none"
                >
                  {isGenerating ? 'GÉNÉRATION...' : '⬤ GÉNÉRER'}
                </button>
              </div>
            ) : (
              <MusicStudio state={state} setState={setState} />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
