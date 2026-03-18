import React, { useState } from 'react';
import { SessionState } from '../types';
import { Music, Mic, Zap, Copy, RefreshCw, FileText, ChevronDown, Globe, User, History as HistoryIcon, BarChart3, Activity, Heart, Video as VideoIcon } from 'lucide-react';
import { generateMusicContext } from '../services/gemini';
import { motion, AnimatePresence } from 'motion/react';
import { MUSIC_GENRES, MUSIC_MOODS, MUSIC_LANGUAGES, MUSIC_ARTISTS, MUSIC_ERAS, MUSIC_COMMERCIALITY, MUSIC_VOICE_TYPES, MUSIC_TIMBRES, MUSIC_SINGING_STYLES, MUSIC_VOCAL_PRESENCE, MUSIC_EMOTION_LEVELS } from '../constants';

interface MusicStudioProps {
  state: SessionState;
  setState: React.Dispatch<React.SetStateAction<SessionState>>;
}

export const MusicStudio: React.FC<MusicStudioProps> = ({ state, setState }) => {
  const [showGenreSelect, setShowGenreSelect] = useState(false);
  const [showMoodSelect, setShowMoodSelect] = useState(false);
  const [showLangSelect, setShowLangSelect] = useState(false);
  const [showArtistSelect, setShowArtistSelect] = useState(false);
  const [showEraSelect, setShowEraSelect] = useState(false);
  const [showCommSelect, setShowCommSelect] = useState(false);
  const [showVoiceSelect, setShowVoiceSelect] = useState(false);
  const [showTimbreSelect, setShowTimbreSelect] = useState(false);
  const [showStyleSelect, setShowStyleSelect] = useState(false);
  const [showPresenceSelect, setShowPresenceSelect] = useState(false);
  const [showEmotionSelect, setShowEmotionSelect] = useState(false);

  const [customGenre, setCustomGenre] = useState('');
  const [customMood, setCustomMood] = useState('');
  const [customLang, setCustomLang] = useState('');
  const [customArtist, setCustomArtist] = useState('');
  const [customEra, setCustomEra] = useState('');
  const [customVoice, setCustomVoice] = useState('');
  const [customTimbre, setCustomTimbre] = useState('');
  const [customStyle, setCustomStyle] = useState('');

  const handleGenerate = async (mode: 'all' | 'lyrics' | 'style' = 'all') => {
    setState(prev => ({ ...prev, music: { ...prev.music, isGenerating: true, error: null } }));
    
    const finalGenre = state.music.genre === 'CUSTOM' ? customGenre : state.music.genre;
    const finalMood = state.music.mood === 'CUSTOM' ? customMood : state.music.mood;
    const finalLang = state.music.language === 'CUSTOM' ? customLang : state.music.language;
    const finalArtist = state.music.inspiredBy === 'CUSTOM' ? customArtist : state.music.inspiredBy;
    const finalEra = state.music.era === 'CUSTOM' ? customEra : state.music.era;
    const finalVoice = state.music.voiceType === 'CUSTOM' ? customVoice : state.music.voiceType;
    const finalTimbre = state.music.vocalTimbre === 'CUSTOM' ? customTimbre : state.music.vocalTimbre;
    const finalStyle = state.music.singingStyle === 'CUSTOM' ? customStyle : state.music.singingStyle;

    try {
      const result = await generateMusicContext(
        finalGenre || state.genre,
        finalMood,
        state.music.theme,
        state.artist || 'Artiste',
        finalLang || 'FRANÇAIS',
        finalArtist,
        finalEra,
        state.music.commerciality,
        state.music.energy,
        state.music.emotionalIntensity,
        finalVoice,
        finalTimbre,
        finalStyle,
        state.music.vocalPresence,
        state.music.accent,
        state.music.vocalReference,
        state.music.emotionLevel,
        state.manualBpm ? state.bpm : null
      );
      
      setState(prev => {
        const newHistory = [
          {
            id: Math.random().toString(36).substr(2, 9),
            timestamp: Date.now(),
            sunoPrompt: result.sunoPrompt,
            lyrics: result.lyrics,
            lipSyncExcerpt: result.lipSyncExcerpt,
            quality: result.quality
          },
          ...(prev.music.history || [])
        ].slice(0, 10);

        return {
          ...prev,
          music: {
            ...prev.music,
            sunoPrompt: mode === 'lyrics' ? prev.music.sunoPrompt : result.sunoPrompt,
            sunoPrompts: mode === 'lyrics' ? prev.music.sunoPrompts : result.sunoPrompts,
            lyrics: mode === 'style' ? prev.music.lyrics : result.lyrics,
            lipSyncExcerpt: mode === 'style' ? prev.music.lipSyncExcerpt : result.lipSyncExcerpt,
            quality: result.quality,
            isGenerating: false,
            error: result.quality?.score === 0 ? "La génération a échoué après plusieurs tentatives. Veuillez réessayer." : null,
            history: newHistory
          }
        };
      });
    } catch (error) {
      console.error('Music generation error:', error);
      setState(prev => ({ 
        ...prev, 
        music: { 
          ...prev.music, 
          isGenerating: false, 
          error: "Une erreur réseau est survenue. Veuillez vérifier votre connexion et réessayer." 
        } 
      }));
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const selectedGenre = MUSIC_GENRES.find(g => g.name === state.music.genre) || MUSIC_GENRES[0];
  const selectedMood = MUSIC_MOODS.find(m => m.name === state.music.mood) || MUSIC_MOODS[0];
  const selectedLang = MUSIC_LANGUAGES.find(l => l.name === state.music.language) || MUSIC_LANGUAGES[0];
  const selectedArtist = MUSIC_ARTISTS.find(a => a.name === state.music.inspiredBy) || MUSIC_ARTISTS[0];
  const selectedEra = MUSIC_ERAS.find(e => e.name === state.music.era) || MUSIC_ERAS[0];
  const selectedComm = MUSIC_COMMERCIALITY.find(c => c.name === state.music.commerciality) || MUSIC_COMMERCIALITY[0];
  const selectedVoice = MUSIC_VOICE_TYPES.find(v => v.name === state.music.voiceType) || MUSIC_VOICE_TYPES[0];
  const selectedTimbre = MUSIC_TIMBRES.find(t => t.name === state.music.vocalTimbre) || MUSIC_TIMBRES[0];
  const selectedStyle = MUSIC_SINGING_STYLES.find(s => s.name === state.music.singingStyle) || MUSIC_SINGING_STYLES[0];
  const selectedPresence = MUSIC_VOCAL_PRESENCE.find(p => p.name === state.music.vocalPresence) || MUSIC_VOCAL_PRESENCE[0];
  const selectedEmotion = MUSIC_EMOTION_LEVELS.find(e => e.name === state.music.emotionLevel) || MUSIC_EMOTION_LEVELS[0];

  return (
    <div className="flex-1 flex flex-col bg-[#050505] overflow-hidden">
      {/* Header */}
      <div className="min-h-16 border-b border-[#1a1a14] flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 py-3 sm:py-0 bg-[#0a0a08] gap-4 sm:gap-0">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="w-8 h-8 rounded-full bg-[#E8712A]/10 flex items-center justify-center border border-[#E8712A]/20 shrink-0">
            <Music size={16} className="text-[#E8712A]" />
          </div>
          <div>
            <h2 className="font-bebas text-xl tracking-widest text-[#e8e4dc]">SUNO MUSIC EDITOR</h2>
            <p className="font-mono text-[8px] text-[#666] uppercase tracking-tighter">Production Audio & Lyrics Engine</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
          <div className="flex items-center gap-2 px-3 py-1 bg-[#E8712A]/10 border border-[#E8712A]/30 rounded-full">
            <Zap size={10} className="text-[#E8712A]" />
            <span className="font-mono text-[9px] text-[#E8712A] font-bold uppercase tracking-widest">V5 OPTIMIZED</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-end">
              <span className="font-mono text-[8px] text-[#444] uppercase tracking-widest">Status</span>
              <span className="font-mono text-[9px] text-[#3a9a7a] font-bold uppercase tracking-tighter">Ready to Produce</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#3a9a7a] animate-pulse" />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 sm:p-8 flex flex-col lg:flex-row gap-6 sm:gap-8">
        {/* Left Column: Controls */}
        <div className="w-full lg:w-80 flex flex-col gap-6">
          <div className="bg-[#0c0c0a] border border-[#1a1a14] rounded-xl p-5 flex flex-col gap-5">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <Zap size={14} className="text-[#E8712A]" />
                <span className="font-bebas text-sm tracking-widest text-[#888]">CONFIGURATION</span>
              </div>
              <span className="font-mono text-[7px] text-[#444] uppercase tracking-tighter">PRODUCER MODE</span>
            </div>

            {/* Genre Select */}
            <div className="relative">
              <label className="font-mono text-[9px] text-[#444] uppercase tracking-widest mb-2 block">Genre Musical</label>
              <button 
                onClick={() => setShowGenreSelect(!showGenreSelect)}
                className="w-full bg-[#050505] border border-[#1a1a14] rounded-lg px-3 py-2.5 flex items-center justify-between group hover:border-[#E8712A]/30 transition-all"
              >
                <div className="text-left">
                  <div className="font-mono text-xs text-[#e8e4dc]">{state.music.genre || 'Choisir genre'}</div>
                  <div className="font-mono text-[8px] text-[#444] uppercase">{selectedGenre.sub}</div>
                </div>
                <ChevronDown size={14} className={`text-[#444] transition-transform ${showGenreSelect ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {showGenreSelect && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-[#0c0c0a] border border-[#1a1a14] rounded-xl overflow-hidden z-[100] shadow-2xl"
                  >
                    <div className="max-h-[240px] overflow-y-auto py-2">
                      {MUSIC_GENRES.map(g => (
                        <button
                          key={g.id}
                          onClick={() => {
                            setState(prev => ({ ...prev, music: { ...prev.music, genre: g.name } }));
                            setShowGenreSelect(false);
                          }}
                          className="w-full px-4 py-2.5 text-left hover:bg-[#141411] transition-all group"
                        >
                          <div className={`font-mono text-xs ${state.music.genre === g.name ? 'text-[#E8712A]' : 'text-[#888] group-hover:text-[#e8e4dc]'}`}>
                            {g.name}
                          </div>
                          <div className="font-mono text-[8px] text-[#444] uppercase">{g.sub}</div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {state.music.genre === 'CUSTOM' && (
                <input 
                  type="text"
                  value={customGenre}
                  onChange={(e) => setCustomGenre(e.target.value)}
                  placeholder="Saisir genre personnalisé..."
                  className="w-full mt-2 bg-[#050505] border border-[#1a1a14] rounded-lg px-3 py-2.5 font-mono text-xs text-[#e8e4dc] focus:border-[#E8712A]/50 outline-none transition-all"
                />
              )}
            </div>

            {/* Inspired By Select */}
            <div className="relative">
              <label className="font-mono text-[9px] text-[#444] uppercase tracking-widest mb-2 block">Inspiré Par</label>
              <button 
                onClick={() => setShowArtistSelect(!showArtistSelect)}
                className="w-full bg-[#050505] border border-[#1a1a14] rounded-lg px-3 py-2.5 flex items-center justify-between group hover:border-[#E8712A]/30 transition-all"
              >
                <div className="text-left flex items-center gap-2">
                  <User size={12} className="text-[#444]" />
                  <div>
                    <div className="font-mono text-xs text-[#e8e4dc]">{state.music.inspiredBy || 'Choisir artiste'}</div>
                    <div className="font-mono text-[8px] text-[#444] uppercase">{selectedArtist.sub}</div>
                  </div>
                </div>
                <ChevronDown size={14} className={`text-[#444] transition-transform ${showArtistSelect ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {showArtistSelect && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-[#0c0c0a] border border-[#1a1a14] rounded-xl overflow-hidden z-[100] shadow-2xl"
                  >
                    <div className="max-h-[240px] overflow-y-auto py-2">
                      {MUSIC_ARTISTS.map(a => (
                        <button
                          key={a.id}
                          onClick={() => {
                            setState(prev => ({ ...prev, music: { ...prev.music, inspiredBy: a.name } }));
                            setShowArtistSelect(false);
                          }}
                          className="w-full px-4 py-2.5 text-left hover:bg-[#141411] transition-all group"
                        >
                          <div className={`font-mono text-xs ${state.music.inspiredBy === a.name ? 'text-[#E8712A]' : 'text-[#888] group-hover:text-[#e8e4dc]'}`}>
                            {a.name}
                          </div>
                          <div className="font-mono text-[8px] text-[#444] uppercase">{a.sub}</div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {state.music.inspiredBy === 'CUSTOM' && (
                <input 
                  type="text"
                  value={customArtist}
                  onChange={(e) => setCustomArtist(e.target.value)}
                  placeholder="Saisir artiste personnalisé..."
                  className="w-full mt-2 bg-[#050505] border border-[#1a1a14] rounded-lg px-3 py-2.5 font-mono text-xs text-[#e8e4dc] focus:border-[#E8712A]/50 outline-none transition-all"
                />
              )}
            </div>

            {/* Era Select */}
            <div className="relative">
              <label className="font-mono text-[9px] text-[#444] uppercase tracking-widest mb-2 block">Époque / Era</label>
              <button 
                onClick={() => setShowEraSelect(!showEraSelect)}
                className="w-full bg-[#050505] border border-[#1a1a14] rounded-lg px-3 py-2.5 flex items-center justify-between group hover:border-[#E8712A]/30 transition-all"
              >
                <div className="text-left flex items-center gap-2">
                  <HistoryIcon size={12} className="text-[#444]" />
                  <div>
                    <div className="font-mono text-xs text-[#e8e4dc]">{state.music.era || 'Choisir époque'}</div>
                    <div className="font-mono text-[8px] text-[#444] uppercase">{selectedEra.sub}</div>
                  </div>
                </div>
                <ChevronDown size={14} className={`text-[#444] transition-transform ${showEraSelect ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {showEraSelect && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-[#0c0c0a] border border-[#1a1a14] rounded-xl overflow-hidden z-[100] shadow-2xl"
                  >
                    <div className="max-h-[240px] overflow-y-auto py-2">
                      {MUSIC_ERAS.map(e => (
                        <button
                          key={e.id}
                          onClick={() => {
                            setState(prev => ({ ...prev, music: { ...prev.music, era: e.name } }));
                            setShowEraSelect(false);
                          }}
                          className="w-full px-4 py-2.5 text-left hover:bg-[#141411] transition-all group"
                        >
                          <div className={`font-mono text-xs ${state.music.era === e.name ? 'text-[#E8712A]' : 'text-[#888] group-hover:text-[#e8e4dc]'}`}>
                            {e.name}
                          </div>
                          <div className="font-mono text-[8px] text-[#444] uppercase">{e.sub}</div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {state.music.era === 'CUSTOM' && (
                <input 
                  type="text"
                  value={customEra}
                  onChange={(e) => setCustomEra(e.target.value)}
                  placeholder="Saisir année/époque..."
                  className="w-full mt-2 bg-[#050505] border border-[#1a1a14] rounded-lg px-3 py-2.5 font-mono text-xs text-[#e8e4dc] focus:border-[#E8712A]/50 outline-none transition-all"
                />
              )}
            </div>

            {/* Commerciality Select */}
            <div className="relative">
              <label className="font-mono text-[9px] text-[#444] uppercase tracking-widest mb-2 block">Commercialité</label>
              <button 
                onClick={() => setShowCommSelect(!showCommSelect)}
                className="w-full bg-[#050505] border border-[#1a1a14] rounded-lg px-3 py-2.5 flex items-center justify-between group hover:border-[#E8712A]/30 transition-all"
              >
                <div className="text-left flex items-center gap-2">
                  <BarChart3 size={12} className="text-[#444]" />
                  <div>
                    <div className="font-mono text-xs text-[#e8e4dc]">{state.music.commerciality || 'Choisir niveau'}</div>
                    <div className="font-mono text-[8px] text-[#444] uppercase">{selectedComm.sub}</div>
                  </div>
                </div>
                <ChevronDown size={14} className={`text-[#444] transition-transform ${showCommSelect ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {showCommSelect && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-[#0c0c0a] border border-[#1a1a14] rounded-xl overflow-hidden z-[100] shadow-2xl"
                  >
                    <div className="max-h-[240px] overflow-y-auto py-2">
                      {MUSIC_COMMERCIALITY.map(c => (
                        <button
                          key={c.id}
                          onClick={() => {
                            setState(prev => ({ ...prev, music: { ...prev.music, commerciality: c.name } }));
                            setShowCommSelect(false);
                          }}
                          className="w-full px-4 py-2.5 text-left hover:bg-[#141411] transition-all group"
                        >
                          <div className={`font-mono text-xs ${state.music.commerciality === c.name ? 'text-[#E8712A]' : 'text-[#888] group-hover:text-[#e8e4dc]'}`}>
                            {c.name}
                          </div>
                          <div className="font-mono text-[8px] text-[#444] uppercase">{c.sub}</div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Vocal Production Section */}
            <div className="pt-4 border-t border-[#1a1a14] mt-2">
              <div className="flex items-center gap-2 mb-4">
                <Mic size={14} className="text-[#E8712A]" />
                <span className="font-bebas text-sm tracking-widest text-[#888]">PRODUCTION VOCALE</span>
              </div>

              <div className="flex flex-col gap-4">
                {/* Voice Type Select */}
                <div className="relative">
                  <label className="font-mono text-[9px] text-[#444] uppercase tracking-widest mb-2 block">Type de Voix</label>
                  <button 
                    onClick={() => setShowVoiceSelect(!showVoiceSelect)}
                    className="w-full bg-[#050505] border border-[#1a1a14] rounded-lg px-3 py-2.5 flex items-center justify-between group hover:border-[#E8712A]/30 transition-all"
                  >
                    <div className="text-left">
                      <div className="font-mono text-xs text-[#e8e4dc]">{state.music.voiceType || 'Choisir type'}</div>
                      <div className="font-mono text-[8px] text-[#444] uppercase">{selectedVoice.sub}</div>
                    </div>
                    <ChevronDown size={14} className={`text-[#444] transition-transform ${showVoiceSelect ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {showVoiceSelect && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-[#0c0c0a] border border-[#1a1a14] rounded-xl overflow-hidden z-[100] shadow-2xl"
                      >
                        <div className="max-h-[240px] overflow-y-auto py-2">
                          {MUSIC_VOICE_TYPES.map(v => (
                            <button
                              key={v.id}
                              onClick={() => {
                                setState(prev => ({ ...prev, music: { ...prev.music, voiceType: v.name } }));
                                setShowVoiceSelect(false);
                              }}
                              className="w-full px-4 py-2.5 text-left hover:bg-[#141411] transition-all group"
                            >
                              <div className={`font-mono text-xs ${state.music.voiceType === v.name ? 'text-[#E8712A]' : 'text-[#888] group-hover:text-[#e8e4dc]'}`}>
                                {v.name}
                              </div>
                              <div className="font-mono text-[8px] text-[#444] uppercase">{v.sub}</div>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {state.music.voiceType === 'CUSTOM' && (
                    <input 
                      type="text"
                      value={customVoice}
                      onChange={(e) => setCustomVoice(e.target.value)}
                      placeholder="Saisir type de voix..."
                      className="w-full mt-2 bg-[#050505] border border-[#1a1a14] rounded-lg px-3 py-2.5 font-mono text-xs text-[#e8e4dc] focus:border-[#E8712A]/50 outline-none transition-all"
                    />
                  )}
                </div>

                {/* Vocal Timbre Select */}
                <div className="relative">
                  <label className="font-mono text-[9px] text-[#444] uppercase tracking-widest mb-2 block">Timbre</label>
                  <button 
                    onClick={() => setShowTimbreSelect(!showTimbreSelect)}
                    className="w-full bg-[#050505] border border-[#1a1a14] rounded-lg px-3 py-2.5 flex items-center justify-between group hover:border-[#E8712A]/30 transition-all"
                  >
                    <div className="text-left">
                      <div className="font-mono text-xs text-[#e8e4dc]">{state.music.vocalTimbre || 'Choisir timbre'}</div>
                      <div className="font-mono text-[8px] text-[#444] uppercase">{selectedTimbre.sub}</div>
                    </div>
                    <ChevronDown size={14} className={`text-[#444] transition-transform ${showTimbreSelect ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {showTimbreSelect && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-[#0c0c0a] border border-[#1a1a14] rounded-xl overflow-hidden z-[100] shadow-2xl"
                      >
                        <div className="max-h-[240px] overflow-y-auto py-2">
                          {MUSIC_TIMBRES.map(t => (
                            <button
                              key={t.id}
                              onClick={() => {
                                setState(prev => ({ ...prev, music: { ...prev.music, vocalTimbre: t.name } }));
                                setShowTimbreSelect(false);
                              }}
                              className="w-full px-4 py-2.5 text-left hover:bg-[#141411] transition-all group"
                            >
                              <div className={`font-mono text-xs ${state.music.vocalTimbre === t.name ? 'text-[#E8712A]' : 'text-[#888] group-hover:text-[#e8e4dc]'}`}>
                                {t.name}
                              </div>
                              <div className="font-mono text-[8px] text-[#444] uppercase">{t.sub}</div>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {state.music.vocalTimbre === 'CUSTOM' && (
                    <input 
                      type="text"
                      value={customTimbre}
                      onChange={(e) => setCustomTimbre(e.target.value)}
                      placeholder="Saisir timbre personnalisé..."
                      className="w-full mt-2 bg-[#050505] border border-[#1a1a14] rounded-lg px-3 py-2.5 font-mono text-xs text-[#e8e4dc] focus:border-[#E8712A]/50 outline-none transition-all"
                    />
                  )}
                </div>

                {/* Singing Style Select */}
                <div className="relative">
                  <label className="font-mono text-[9px] text-[#444] uppercase tracking-widest mb-2 block">Façon de chanter</label>
                  <button 
                    onClick={() => setShowStyleSelect(!showStyleSelect)}
                    className="w-full bg-[#050505] border border-[#1a1a14] rounded-lg px-3 py-2.5 flex items-center justify-between group hover:border-[#E8712A]/30 transition-all"
                  >
                    <div className="text-left">
                      <div className="font-mono text-xs text-[#e8e4dc]">{state.music.singingStyle || 'Choisir style'}</div>
                      <div className="font-mono text-[8px] text-[#444] uppercase">{selectedStyle.sub}</div>
                    </div>
                    <ChevronDown size={14} className={`text-[#444] transition-transform ${showStyleSelect ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {showStyleSelect && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-[#0c0c0a] border border-[#1a1a14] rounded-xl overflow-hidden z-[100] shadow-2xl"
                      >
                        <div className="max-h-[240px] overflow-y-auto py-2">
                          {MUSIC_SINGING_STYLES.map(s => (
                            <button
                              key={s.id}
                              onClick={() => {
                                setState(prev => ({ ...prev, music: { ...prev.music, singingStyle: s.name } }));
                                setShowStyleSelect(false);
                              }}
                              className="w-full px-4 py-2.5 text-left hover:bg-[#141411] transition-all group"
                            >
                              <div className={`font-mono text-xs ${state.music.singingStyle === s.name ? 'text-[#E8712A]' : 'text-[#888] group-hover:text-[#e8e4dc]'}`}>
                                {s.name}
                              </div>
                              <div className="font-mono text-[8px] text-[#444] uppercase">{s.sub}</div>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {state.music.singingStyle === 'CUSTOM' && (
                    <input 
                      type="text"
                      value={customStyle}
                      onChange={(e) => setCustomStyle(e.target.value)}
                      placeholder="Saisir style de chant..."
                      className="w-full mt-2 bg-[#050505] border border-[#1a1a14] rounded-lg px-3 py-2.5 font-mono text-xs text-[#e8e4dc] focus:border-[#E8712A]/50 outline-none transition-all"
                    />
                  )}
                </div>

                {/* Vocal Presence Select */}
                <div className="relative">
                  <label className="font-mono text-[9px] text-[#444] uppercase tracking-widest mb-2 block">Présence Vocale</label>
                  <button 
                    onClick={() => setShowPresenceSelect(!showPresenceSelect)}
                    className="w-full bg-[#050505] border border-[#1a1a14] rounded-lg px-3 py-2.5 flex items-center justify-between group hover:border-[#E8712A]/30 transition-all"
                  >
                    <div className="text-left">
                      <div className="font-mono text-xs text-[#e8e4dc]">{state.music.vocalPresence || 'Choisir présence'}</div>
                      <div className="font-mono text-[8px] text-[#444] uppercase">{selectedPresence.sub}</div>
                    </div>
                    <ChevronDown size={14} className={`text-[#444] transition-transform ${showPresenceSelect ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {showPresenceSelect && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-[#0c0c0a] border border-[#1a1a14] rounded-xl overflow-hidden z-[100] shadow-2xl"
                      >
                        <div className="max-h-[240px] overflow-y-auto py-2">
                          {MUSIC_VOCAL_PRESENCE.map(p => (
                            <button
                              key={p.id}
                              onClick={() => {
                                setState(prev => ({ ...prev, music: { ...prev.music, vocalPresence: p.name } }));
                                setShowPresenceSelect(false);
                              }}
                              className="w-full px-4 py-2.5 text-left hover:bg-[#141411] transition-all group"
                            >
                              <div className={`font-mono text-xs ${state.music.vocalPresence === p.name ? 'text-[#E8712A]' : 'text-[#888] group-hover:text-[#e8e4dc]'}`}>
                                {p.name}
                              </div>
                              <div className="font-mono text-[8px] text-[#444] uppercase">{p.sub}</div>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Accent Input */}
                <div>
                  <label className="font-mono text-[9px] text-[#444] uppercase tracking-widest mb-2 block">Accent / Couleur Linguistique</label>
                  <input 
                    type="text"
                    value={state.music.accent}
                    onChange={(e) => setState(prev => ({ ...prev, music: { ...prev.music, accent: e.target.value } }))}
                    placeholder="ex: British, Southern, Patois..."
                    className="w-full bg-[#050505] border border-[#1a1a14] rounded-lg px-3 py-2.5 font-mono text-xs text-[#e8e4dc] focus:border-[#E8712A]/50 outline-none transition-all"
                  />
                </div>

                {/* Vocal Reference Input */}
                <div>
                  <label className="font-mono text-[9px] text-[#444] uppercase tracking-widest mb-2 block">Référence d'interprétation</label>
                  <input 
                    type="text"
                    value={state.music.vocalReference}
                    onChange={(e) => setState(prev => ({ ...prev, music: { ...prev.music, vocalReference: e.target.value } }))}
                    placeholder="ex: Jorja-like restraint..."
                    className="w-full bg-[#050505] border border-[#1a1a14] rounded-lg px-3 py-2.5 font-mono text-xs text-[#e8e4dc] focus:border-[#E8712A]/50 outline-none transition-all"
                  />
                </div>

                {/* Emotion Level Select */}
                <div className="relative">
                  <label className="font-mono text-[9px] text-[#444] uppercase tracking-widest mb-2 block">Niveau d'Émotion</label>
                  <button 
                    onClick={() => setShowEmotionSelect(!showEmotionSelect)}
                    className="w-full bg-[#050505] border border-[#1a1a14] rounded-lg px-3 py-2.5 flex items-center justify-between group hover:border-[#E8712A]/30 transition-all"
                  >
                    <div className="text-left">
                      <div className="font-mono text-xs text-[#e8e4dc]">{state.music.emotionLevel || 'Choisir niveau'}</div>
                      <div className="font-mono text-[8px] text-[#444] uppercase">{selectedEmotion.sub}</div>
                    </div>
                    <ChevronDown size={14} className={`text-[#444] transition-transform ${showEmotionSelect ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {showEmotionSelect && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-[#0c0c0a] border border-[#1a1a14] rounded-xl overflow-hidden z-[100] shadow-2xl"
                      >
                        <div className="max-h-[240px] overflow-y-auto py-2">
                          {MUSIC_EMOTION_LEVELS.map(e => (
                            <button
                              key={e.id}
                              onClick={() => {
                                setState(prev => ({ ...prev, music: { ...prev.music, emotionLevel: e.name } }));
                                setShowEmotionSelect(false);
                              }}
                              className="w-full px-4 py-2.5 text-left hover:bg-[#141411] transition-all group"
                            >
                              <div className={`font-mono text-xs ${state.music.emotionLevel === e.name ? 'text-[#E8712A]' : 'text-[#888] group-hover:text-[#e8e4dc]'}`}>
                                {e.name}
                              </div>
                              <div className="font-mono text-[8px] text-[#444] uppercase">{e.sub}</div>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Sliders */}
            <div className="flex flex-col gap-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="font-mono text-[9px] text-[#444] uppercase tracking-widest flex items-center gap-2">
                    <Activity size={10} /> Énergie
                  </label>
                  <span className="font-mono text-[9px] text-[#E8712A]">{state.music.energy}%</span>
                </div>
                <input 
                  type="range"
                  min="0"
                  max="100"
                  value={state.music.energy}
                  onChange={(e) => setState(prev => ({ ...prev, music: { ...prev.music, energy: parseInt(e.target.value) } }))}
                  className="w-full h-1 bg-[#1a1a14] rounded-lg appearance-none cursor-pointer accent-[#E8712A]"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="font-mono text-[9px] text-[#444] uppercase tracking-widest flex items-center gap-2">
                    <Heart size={10} /> Intensité Émotionnelle
                  </label>
                  <span className="font-mono text-[9px] text-[#E8712A]">{state.music.emotionalIntensity}%</span>
                </div>
                <input 
                  type="range"
                  min="0"
                  max="100"
                  value={state.music.emotionalIntensity}
                  onChange={(e) => setState(prev => ({ ...prev, music: { ...prev.music, emotionalIntensity: parseInt(e.target.value) } }))}
                  className="w-full h-1 bg-[#1a1a14] rounded-lg appearance-none cursor-pointer accent-[#E8712A]"
                />
              </div>

              <div className="pt-2">
                <div className="flex justify-between items-center mb-2">
                  <label className="font-mono text-[9px] text-[#444] uppercase tracking-widest flex items-center gap-2 cursor-pointer select-none">
                    <input 
                      type="checkbox"
                      checked={state.manualBpm}
                      onChange={(e) => setState(prev => ({ ...prev, manualBpm: e.target.checked, bpm: e.target.checked ? (prev.bpm || 120) : prev.bpm }))}
                      className="w-3 h-3 rounded border-[#1a1a14] bg-[#050505] text-[#E8712A] focus:ring-0 focus:ring-offset-0"
                    />
                    BPM MANUEL
                  </label>
                  {state.manualBpm && (
                    <span className="font-mono text-[9px] text-[#E8712A]">{state.bpm} BPM</span>
                  )}
                </div>
                {state.manualBpm && (
                  <input 
                    type="range"
                    min="40"
                    max="220"
                    step="1"
                    value={state.bpm || 120}
                    onChange={(e) => setState(prev => ({ ...prev, bpm: parseInt(e.target.value) }))}
                    className="w-full h-1 bg-[#1a1a14] rounded-lg appearance-none cursor-pointer accent-[#E8712A] animate-in fade-in slide-in-from-top-1 duration-200"
                  />
                )}
              </div>
            </div>

            {/* Mood Select */}
            <div className="relative">
              <label className="font-mono text-[9px] text-[#444] uppercase tracking-widest mb-2 block">Ambiance / Mood</label>
              <button 
                onClick={() => setShowMoodSelect(!showMoodSelect)}
                className="w-full bg-[#050505] border border-[#1a1a14] rounded-lg px-3 py-2.5 flex items-center justify-between group hover:border-[#E8712A]/30 transition-all"
              >
                <div className="text-left">
                  <div className="font-mono text-xs text-[#e8e4dc]">{state.music.mood || 'Choisir mood'}</div>
                  <div className="font-mono text-[8px] text-[#444] uppercase">{selectedMood.sub}</div>
                </div>
                <ChevronDown size={14} className={`text-[#444] transition-transform ${showMoodSelect ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {showMoodSelect && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-[#0c0c0a] border border-[#1a1a14] rounded-xl overflow-hidden z-[100] shadow-2xl"
                  >
                    <div className="max-h-[240px] overflow-y-auto py-2">
                      {MUSIC_MOODS.map(m => (
                        <button
                          key={m.id}
                          onClick={() => {
                            setState(prev => ({ ...prev, music: { ...prev.music, mood: m.name } }));
                            setShowMoodSelect(false);
                          }}
                          className="w-full px-4 py-2.5 text-left hover:bg-[#141411] transition-all group"
                        >
                          <div className={`font-mono text-xs ${state.music.mood === m.name ? 'text-[#E8712A]' : 'text-[#888] group-hover:text-[#e8e4dc]'}`}>
                            {m.name}
                          </div>
                          <div className="font-mono text-[8px] text-[#444] uppercase">{m.sub}</div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {state.music.mood === 'CUSTOM' && (
                <input 
                  type="text"
                  value={customMood}
                  onChange={(e) => setCustomMood(e.target.value)}
                  placeholder="Saisir mood personnalisé..."
                  className="w-full mt-2 bg-[#050505] border border-[#1a1a14] rounded-lg px-3 py-2.5 font-mono text-xs text-[#e8e4dc] focus:border-[#E8712A]/50 outline-none transition-all"
                />
              )}
            </div>

            {/* Language Select */}
            <div className="relative">
              <label className="font-mono text-[9px] text-[#444] uppercase tracking-widest mb-2 block">Langue des Paroles</label>
              <button 
                onClick={() => setShowLangSelect(!showLangSelect)}
                className="w-full bg-[#050505] border border-[#1a1a14] rounded-lg px-3 py-2.5 flex items-center justify-between group hover:border-[#E8712A]/30 transition-all"
              >
                <div className="text-left flex items-center gap-2">
                  <Globe size={12} className="text-[#444]" />
                  <div>
                    <div className="font-mono text-xs text-[#e8e4dc]">{state.music.language || 'Choisir langue'}</div>
                    <div className="font-mono text-[8px] text-[#444] uppercase">{selectedLang.sub}</div>
                  </div>
                </div>
                <ChevronDown size={14} className={`text-[#444] transition-transform ${showLangSelect ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {showLangSelect && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-[#0c0c0a] border border-[#1a1a14] rounded-xl overflow-hidden z-[100] shadow-2xl"
                  >
                    <div className="max-h-[240px] overflow-y-auto py-2">
                      {MUSIC_LANGUAGES.map(l => (
                        <button
                          key={l.id}
                          onClick={() => {
                            setState(prev => ({ ...prev, music: { ...prev.music, language: l.name } }));
                            setShowLangSelect(false);
                          }}
                          className="w-full px-4 py-2.5 text-left hover:bg-[#141411] transition-all group"
                        >
                          <div className={`font-mono text-xs ${state.music.language === l.name ? 'text-[#E8712A]' : 'text-[#888] group-hover:text-[#e8e4dc]'}`}>
                            {l.name}
                          </div>
                          <div className="font-mono text-[8px] text-[#444] uppercase">{l.sub}</div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {state.music.language === 'CUSTOM' && (
                <input 
                  type="text"
                  value={customLang}
                  onChange={(e) => setCustomLang(e.target.value)}
                  placeholder="Saisir langue personnalisée..."
                  className="w-full mt-2 bg-[#050505] border border-[#1a1a14] rounded-lg px-3 py-2.5 font-mono text-xs text-[#e8e4dc] focus:border-[#E8712A]/50 outline-none transition-all"
                />
              )}
            </div>

            <div>
              <label className="font-mono text-[9px] text-[#444] uppercase tracking-widest mb-2 block">Thème des Paroles</label>
              <textarea 
                value={state.music.theme}
                onChange={(e) => setState(prev => ({ ...prev, music: { ...prev.music, theme: e.target.value } }))}
                placeholder="De quoi parle la chanson ?"
                rows={3}
                className="w-full bg-[#050505] border border-[#1a1a14] rounded-lg px-3 py-2.5 font-mono text-xs text-[#e8e4dc] focus:border-[#E8712A]/50 outline-none transition-all resize-none"
              />
            </div>

            <button
              onClick={handleGenerate}
              disabled={state.music.isGenerating}
              className={`w-full py-4 rounded-lg font-bebas text-lg tracking-[0.2em] transition-all flex items-center justify-center gap-3 ${state.music.isGenerating ? 'bg-[#1a1a14] text-[#444] cursor-not-allowed' : 'bg-[#E8712A] text-black hover:bg-[#ff7d2f] active:scale-[0.98]'}`}
            >
              {state.music.isGenerating ? (
                <>
                  <RefreshCw size={18} className="animate-spin" />
                  PROD EN COURS...
                </>
              ) : (
                <>
                  <Zap size={18} />
                  GÉNÉRER LA PROD
                </>
              )}
            </button>

            {state.music.error && (
              <div className="mt-3 p-3 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="w-4 h-4 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-red-500 text-[10px] font-bold">!</span>
                </div>
                <p className="font-mono text-[10px] text-red-400 leading-relaxed uppercase tracking-tighter">
                  {state.music.error}
                </p>
              </div>
            )}
          </div>

          <div className="bg-[#0c0c0a] border border-[#1a1a14] rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <FileText size={14} className="text-[#666]" />
                <span className="font-bebas text-sm tracking-widest text-[#666]">SUNO V5 PROMPT</span>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => handleGenerate('style')}
                  disabled={state.music.isGenerating}
                  className="p-1.5 bg-[#1a1a14] rounded border border-[#242420] text-[#666] hover:text-[#E8712A] transition-all"
                  title="Remix Style Only"
                >
                  <RefreshCw size={10} className={state.music.isGenerating ? 'animate-spin' : ''} />
                </button>
                <div className="px-1.5 py-0.5 bg-[#E8712A]/10 rounded border border-[#E8712A]/20">
                  <span className="font-mono text-[7px] text-[#E8712A] font-bold">OPTIMIZED</span>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="bg-[#050505] border border-[#1a1a14] rounded-lg p-4 font-mono text-[10px] text-[#888] leading-relaxed min-h-[80px]">
                {state.music.sunoPrompt || "Le prompt de style Suno apparaîtra ici..."}
              </div>
              <div className="absolute bottom-2 right-2 flex items-center gap-2">
                <span className={`font-mono text-[8px] ${(state.music.sunoPrompt || '').length > 1000 ? 'text-red-500' : 'text-[#444]'}`}>
                  {(state.music.sunoPrompt || '').length}/1000
                </span>
                {state.music.sunoPrompt && (
                  <button 
                    onClick={() => copyToClipboard(state.music.sunoPrompt)}
                    className="p-1.5 bg-[#1a1a14] rounded border border-[#242420] text-[#666] hover:text-[#E8712A] transition-all opacity-0 group-hover:opacity-100"
                  >
                    <Copy size={12} />
                  </button>
                )}
              </div>
            </div>

            {state.music.sunoPrompts && state.music.sunoPrompts.length > 0 && (
              <div className="mt-4 flex flex-col gap-3">
                <span className="font-mono text-[8px] text-[#444] uppercase tracking-widest">Variantes de Production</span>
                {state.music.sunoPrompts.map((variant, idx) => (
                  <div key={idx} className="relative group">
                    <div className="bg-[#050505] border border-[#1a1a14] rounded-lg p-3 font-mono text-[9px] text-[#666] leading-relaxed">
                      <span className="text-[#E8712A] mr-2">V{idx + 1}</span>
                      {variant}
                    </div>
                    <button 
                      onClick={() => copyToClipboard(variant)}
                      className="absolute top-1.5 right-1.5 p-1 bg-[#1a1a14] rounded border border-[#242420] text-[#444] hover:text-[#E8712A] transition-all opacity-0 group-hover:opacity-100"
                    >
                      <Copy size={10} />
                    </button>
                  </div>
                ))}
              </div>
            )}
            <p className="mt-3 font-mono text-[7px] text-[#444] uppercase leading-tight">
              Direction artistique sonore optimisée pour les modèles V5. Copiez ce prompt dans Suno AI.
            </p>
          </div>

          {/* Quality Assessment */}
          {state.music.quality && (
            <div className="bg-[#0c0c0a] border border-[#1a1a14] rounded-xl p-5 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 size={14} className="text-[#E8712A]" />
                  <span className="font-bebas text-sm tracking-widest text-[#888]">QUALITÉ DU PROMPT</span>
                </div>
                <div className="text-right">
                  <span className="font-bebas text-2xl text-[#E8712A]">{state.music.quality.score}</span>
                  <span className="font-mono text-[10px] text-[#444]">/100</span>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { label: 'Cohérence stylistique', value: state.music.quality.coherence },
                  { label: 'Richesse de prod', value: state.music.quality.richness },
                  { label: 'Clarté vocale', value: state.music.quality.clarity },
                  { label: 'Force du hook', value: state.music.quality.hook },
                  { label: 'Précision lyrique', value: state.music.quality.precision },
                ].map((metric, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-mono text-[8px] text-[#666] uppercase tracking-widest">{metric.label}</span>
                      <span className="font-mono text-[8px] text-[#E8712A]">{metric.value}%</span>
                    </div>
                    <div className="h-0.5 bg-[#1a1a14] rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${metric.value}%` }}
                        className="h-full bg-[#E8712A]"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-2 p-3 bg-[#E8712A]/5 border border-[#E8712A]/10 rounded-lg">
                <p className="font-mono text-[9px] text-[#E8712A] italic leading-relaxed">
                  "{state.music.quality.message}"
                </p>
              </div>
            </div>
          )}

          {/* History Section */}
          {state.music.history && state.music.history.length > 0 && (
            <div className="bg-[#0c0c0a] border border-[#1a1a14] rounded-xl p-5 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <HistoryIcon size={14} className="text-[#666]" />
                <span className="font-bebas text-sm tracking-widest text-[#666]">HISTORIQUE DES SESSIONS</span>
              </div>
              <div className="flex flex-col gap-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                {state.music.history.map((item) => (
                  <div key={item.id} className="p-3 bg-[#050505] border border-[#1a1a14] rounded-lg group hover:border-[#E8712A]/30 transition-all">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-mono text-[7px] text-[#444]">{new Date(item.timestamp).toLocaleTimeString()}</span>
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => copyToClipboard(item.sunoPrompt)}
                          className="p-1 bg-[#1a1a14] rounded border border-[#242420] text-[#444] hover:text-[#E8712A] transition-all"
                          title="Copy Style"
                        >
                          <FileText size={10} />
                        </button>
                        <button 
                          onClick={() => copyToClipboard(item.lyrics)}
                          className="p-1 bg-[#1a1a14] rounded border border-[#242420] text-[#444] hover:text-[#E8712A] transition-all"
                          title="Copy Lyrics"
                        >
                          <Mic size={10} />
                        </button>
                      </div>
                    </div>
                    <p className="font-mono text-[8px] text-[#666] line-clamp-2 italic">"{item.sunoPrompt}"</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Lyrics */}
        <div className="flex-1 flex flex-col gap-6 min-h-[600px] lg:min-h-0">
          <div className="flex-1 bg-[#0c0c0a] border border-[#1a1a14] rounded-xl overflow-hidden flex flex-col">
            <div className="px-6 py-4 border-b border-[#1a1a14] flex items-center justify-between bg-[#0e0e0c]">
              <div className="flex items-center gap-3">
                <Mic size={16} className="text-[#E8712A]" />
                <span className="font-bebas text-lg tracking-widest text-[#e8e4dc]">LYRICS & TOPLINE ENGINE</span>
              </div>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => handleGenerate('lyrics')}
                  disabled={state.music.isGenerating}
                  className="flex items-center gap-2 px-3 py-1.5 bg-[#1a1a14] rounded border border-[#242420] text-[#888] hover:text-[#E8712A] transition-all font-mono text-[9px] uppercase tracking-widest"
                  title="Remix Lyrics Only"
                >
                  <RefreshCw size={12} className={state.music.isGenerating ? 'animate-spin' : ''} />
                  Remix Lyrics
                </button>
                {state.music.lyrics && (
                  <button 
                    onClick={() => copyToClipboard(state.music.lyrics)}
                    className="flex items-center gap-2 px-3 py-1.5 bg-[#1a1a14] rounded border border-[#242420] text-[#888] hover:text-[#E8712A] transition-all font-mono text-[9px] uppercase tracking-widest"
                  >
                    <Copy size={12} />
                    Copier Tout
                  </button>
                )}
              </div>
            </div>
            
            <div className="flex-1 p-8 overflow-y-auto font-mono text-sm text-[#888] leading-loose whitespace-pre-wrap selection:bg-[#E8712A]/30 selection:text-[#E8712A]">
              {state.music.lyrics ? (
                <div className="relative">
                  {/* Highlight structure tags */}
                  {state.music.lyrics.split('\n').map((line, i) => {
                    const isTag = line.startsWith('[') && line.endsWith(']');
                    return (
                      <div key={i} className={isTag ? "text-[#E8712A] font-bold mt-4 mb-2 tracking-widest text-[11px] border-l-2 border-[#E8712A] pl-3" : ""}>
                        {line}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-20 grayscale">
                  <Mic size={48} className="mb-4" />
                  <p className="font-bebas text-2xl tracking-[0.2em]">AUCUNE PAROLE GÉNÉRÉE</p>
                  <p className="font-mono text-[10px] uppercase mt-2">Configurez le style et cliquez sur générer</p>
                </div>
              )}

              {state.music.lipSyncExcerpt && (
                <div className="mt-12 pt-12 border-t border-[#1a1a14]">
                  <div className="flex items-center gap-2 mb-6">
                    <VideoIcon size={16} className="text-[#E8712A]" />
                    <span className="font-bebas text-lg tracking-widest text-[#E8712A]">GUIDE LIP-SYNC (15 SEC)</span>
                  </div>
                  <div className="bg-[#E8712A]/5 border border-[#E8712A]/10 rounded-2xl p-6">
                    <p className="font-mono text-[11px] text-[#E8712A]/80 mb-6 leading-relaxed italic">
                      Utilisez ce guide pour synchroniser précisément les mouvements de bouche sur votre vidéo Suno. Les mentions entre crochets indiquent l'émotion, et les barres obliques la phonétique.
                    </p>
                    <div className="whitespace-pre-wrap font-mono text-[12px] text-[#e8e4dc] leading-loose bg-[#050505] p-6 rounded-xl border border-[#1a1a14] shadow-inner">
                      {state.music.lipSyncExcerpt}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
