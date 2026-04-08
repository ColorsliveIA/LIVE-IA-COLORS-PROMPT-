import React, { useState, useEffect, useCallback } from 'react';
import { SessionState, MusicState, Verse } from '../types';
import { Music, Mic, Mic2, Zap, Copy, RefreshCw, FileText, ChevronDown, Globe, User, Languages, History as HistoryIcon, BarChart3, Activity, Heart, Video as VideoIcon, Upload, Loader2, Clock, LayoutGrid, Sparkles, Flame, Wind, Moon, Sun, Star, Headphones, Disc, Radio, Layers, Settings2, Sliders, Play, Pause, SkipForward, Volume2, Search, Filter, CheckCircle2, AlertCircle, Info, Waves, UserCircle, X, HelpCircle, Edit3, RotateCcw } from 'lucide-react';
import { generateMusicContext, analyzeAudio, getArtistVocalIdentity, rerollVerse, suggestArtistAndTitle } from '../services/gemini';
import { getArtistSunoSettings } from '../services/sonic-dna';
import { fetchArtistMetadata } from '../services/musicbrainz';
import { motion, AnimatePresence } from 'motion/react';
import copy from 'copy-to-clipboard';
import { MUSIC_GENRES, MUSIC_MOODS, MUSIC_LANGUAGES, MUSIC_ARTISTS, MUSIC_COMMERCIALITY, MUSIC_VOICE_TYPES, MUSIC_TIMBRES, MUSIC_SINGING_STYLES, MUSIC_VOCAL_PRESENCE, MUSIC_EMOTION_LEVELS, MUSIC_PRODUCTION_STYLES, MUSIC_VOCAL_TECHNIQUES, MUSIC_VOCAL_TEXTURES, MUSIC_VOCAL_INTERPRETATIONS, MUSIC_FLOW_TAGS, MUSIC_WRITING_TAGS, MUSIC_DRUM_BASS_TAGS, MUSIC_MELODY_TAGS, MUSIC_ATMOSPHERE_TAGS, MUSIC_MIX_TAGS, MUSIC_STRUCTURE_TAGS } from '../constants';

interface MusicStudioProps {
  state: SessionState;
  setState: React.Dispatch<React.SetStateAction<SessionState>>;
  onMenuClick?: () => void;
}

export const MusicStudio: React.FC<MusicStudioProps> = ({ state, setState, onMenuClick }) => {
  const [showGenreSelect, setShowGenreSelect] = useState(false);
  const [showMoodSelect, setShowMoodSelect] = useState(false);
  const [showLangSelect, setShowLangSelect] = useState(false);
  const [showArtistSelect, setShowArtistSelect] = useState(false);
  const [showArtistModal, setShowArtistModal] = useState(false);
  const [showSecondaryArtistModal, setShowSecondaryArtistModal] = useState(false);
  const [showAdvancedTagsModal, setShowAdvancedTagsModal] = useState(false);
  const [artistSearch, setArtistSearch] = useState('');
  const [secondaryArtistSearch, setSecondaryArtistSearch] = useState('');
  const [showCommSelect, setShowCommSelect] = useState(false);
  const [showVoiceSelect, setShowVoiceSelect] = useState(false);
  const [showTimbreSelect, setShowTimbreSelect] = useState(false);
  const [showStyleSelect, setShowStyleSelect] = useState(false);
  const [showPresenceSelect, setShowPresenceSelect] = useState(false);
  const [showEmotionSelect, setShowEmotionSelect] = useState(false);
  const [showProductionSelect, setShowProductionSelect] = useState(false);
  const [showVocalTechniqueSelect, setShowVocalTechniqueSelect] = useState(false);
  const [showProductionFinishSelect, setShowProductionFinishSelect] = useState(false);
  const [showAllGenres, setShowAllGenres] = useState(false);
  const [showAllMoods, setShowAllMoods] = useState(false);
  const [showAllSingingStyles, setShowAllSingingStyles] = useState(false);
  const [showAllProductionStyles, setShowAllProductionStyles] = useState(false);
  const [isScanningArtist, setIsScanningArtist] = useState(false);
  const [isSuggestingIdentity, setIsSuggestingIdentity] = useState(false);
  const [scannedIdentityArtist, setScannedIdentityArtist] = useState<string | null>(null);
  const [preScanState, setPreScanState] = useState<Partial<MusicState> | null>(null);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'composition' | 'vocals' | 'performance'>('composition');
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [isEditingPrompt, setIsEditingPrompt] = useState(false);
  const [editedPrompt, setEditedPrompt] = useState('');
  const [genreSearch, setGenreSearch] = useState('');
  const [toastMessage, setToastMessage] = useState<{ text: string; type: 'success' | 'error' | 'info' } | null>(null);

  const LOADING_MESSAGES = [
    "Un producteur légendaire rentre dans le studio...",
    "Le beatmaker te regarde avec insistance...",
    "Un label majeur veut te racheter à 20%...",
    "L'ingénieur du son valide le kick...",
    "Le compositeur hoche la tête...",
    "Un rappeur anonyme réclame la prod...",
    "Le directeur artistique ferme les yeux et écoute...",
    "Le mixeur ajoute des synthés analogiques...",
    "Un parolier prépare un couplet...",
    "Le mentor sourit dans le coin...",
    "Le chef d'orchestre ramène ses musiciens...",
    "Les robots branchent les synthétiseurs...",
    "Ça va, pas trop dur ?",
    "T'es un vrai créatif toi !",
    "On cuisine le prochain hit...",
    "L'inspiration arrive, patience...",
    "Le studio est en feu !",
    "C'est ça le talent !",
    "On ajuste les fréquences...",
    "La magie opère..."
  ];

  useEffect(() => {
    let progressInterval: NodeJS.Timeout;
    let messageInterval: NodeJS.Timeout;

    if (state.music.isGenerating) {
      setLoadingProgress(0);
      
      const shuffled = [...LOADING_MESSAGES].sort(() => 0.5 - Math.random());
      setLoadingMessage(shuffled[0]);

      progressInterval = setInterval(() => {
        setLoadingProgress(p => {
          if (p >= 99) return 99;
          // ENHANCED PERFORMANCE: Slower progress as we approach 99% to avoid 'stuck' feeling
          const increment = p > 95 ? 0.05 : (p > 90 ? 0.1 : (p > 80 ? 0.3 : (p > 50 ? 0.8 : 1.5)));
          return Math.min(99, p + increment);
        });
      }, 100);

      let msgIndex = 0;
      messageInterval = setInterval(() => {
        msgIndex = (msgIndex + 1) % shuffled.length;
        // If progress is high, show a 'still processing' message
        setLoadingProgress(current => {
          if (current >= 98) {
            setLoadingMessage("L'IA peaufine les derniers détails... encore un instant.");
          } else {
            setLoadingMessage(shuffled[msgIndex]);
          }
          return current;
        });
      }, 2500);
    }

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, [state.music.isGenerating]);

  const GENRE_ICONS: Record<string, any> = {
    'RAÏ ALGÉRIEN': Globe,
    'DARK R&B': Moon,
    '90s BOOM BAP': Disc,
    'AFRO-FUSION': Zap,
    'PLUGGNB': Music,
    'GHETTO HOUSE': Radio,
    'ZOUK BASS': Wind,
    'DRILL': Flame,
    'R&B CLASSIC': Heart,
    'TRAP SOUL': Sparkles,
    'LO-FI BEATS': Headphones,
    'EPIC ANIME': Star,
    'BO De MUSIQUE': Disc,
    'AMAPIANO': Headphones,
    'AFROBEATS': Sun,
    'K-POP': Star,
    'CLOUD RAP': Wind,
    'JERSEY CLUB': Zap,
    'UK GARAGE': Settings2,
    'FRENCH TOUCH': Disc,
    'BOOM BAP': Mic,
    'G-FUNK': Sun,
    'RAGE TRAP': Flame,
    'EMO RAP': Heart,
    'POP PUNK': Zap,
    'BEDROOM POP': Radio,
    'CITY POP': Sun,
    'BOSSA NOVA': Wind,
    'SALSA / BACHATA': Flame,
    'DRUM & BASS': Activity,
    'TECHNO': Zap,
    'JAZZ RAP': Music,
    'HYPERPOP': Sparkles,
    'PHONK': Flame,
    'SYNTHWAVE': Moon,
    'ALT ROCK': Zap,
    'DEEP HOUSE': Moon,
    'REGGAETON': Flame,
    'REGGAETON POP': Sun,
    'NEO SOUL': Heart,
    'GRIME': Flame,
    'BAILE FUNK': Zap,
    'DANCEHALL': Sun,
    'AMBIENT POP': Wind,
  };

  const MOOD_ICONS: Record<string, any> = {
    'SOMBRE': Moon,
    'ÉNERGIQUE': Flame,
    'CHILL': Wind,
    'AGRESSIF': Zap,
    'ROMANTIQUE': Heart,
    'MYSTÉRIEUX': Sparkles,
    'JOYEUX': Sun,
    'NOSTALGIQUE': Clock,
    'CINÉMATIQUE': VideoIcon,
    'EPIC': Star,
    'FILM': VideoIcon,
    'HÉROÏQUE': Star,
    'TRIPPY': Sparkles,
    'RÊVEUR': Wind,
    'BOUNCY': Activity,
    'CYBERPUNK': Zap,
    'AMER-SUCRÉ': Heart,
    'CALME': Wind,
    'TENDU': Activity,
    'MINIMALISTE': Layers,
    'SOULFUL': Heart,
    'INDUSTRIEL': Settings2,
    'VIBRANT': Sun,
  };

  const updateMusicState = (updates: Partial<SessionState['music']>) => {
    setState(prev => {
      let newUpdates = { ...updates };
      
      // If inspiredBy is being updated, check if we have preset weirdness/influence
      if (updates.inspiredBy && updates.inspiredBy !== prev.music.inspiredBy) {
        const artistPreset = MUSIC_ARTISTS.find(a => a.name === updates.inspiredBy);
        if (artistPreset) {
          if ((artistPreset as any).weirdness !== undefined) {
            newUpdates.weirdness = (artistPreset as any).weirdness;
          }
          if ((artistPreset as any).styleInfluence !== undefined) {
            newUpdates.styleInfluence = (artistPreset as any).styleInfluence;
          }
        }
      }

      return {
        ...prev,
        music: {
          ...prev.music,
          ...newUpdates
        }
      };
    });
  };

  const [customGenre, setCustomGenre] = useState('');
  const [customMood, setCustomMood] = useState('');
  const [customLang, setCustomLang] = useState('');
  const [customArtist, setCustomArtist] = useState('');
  const [customVoice, setCustomVoice] = useState('');
  const [customTimbre, setCustomTimbre] = useState('');
  const [customStyle, setCustomStyle] = useState('');
  const [customProduction, setCustomProduction] = useState('');
  const [scanError, setScanError] = useState<string | null>(null);

  const handleScanArtist = async () => {
    const artistToScan = state.music.inspiredBy === 'CUSTOM' ? customArtist : state.music.inspiredBy;
    if (!artistToScan || artistToScan === 'Select Artist') return;
    
    // REDUCE API CALL: Prevent redundant scans for the same artist
    if (artistToScan === scannedIdentityArtist && state.music.artistIdentitySummary) return;
    if (isScanningArtist) return;

    setPreScanState({
      voiceType: state.music.voiceType,
      vocalTimbre: state.music.vocalTimbre,
      singingStyle: state.music.singingStyle,
      vocalPresence: state.music.vocalPresence,
      accent: state.music.accent,
      vocalReference: state.music.vocalReference,
      language: state.music.language,
      weirdness: state.music.weirdness,
      styleInfluence: state.music.styleInfluence
    });

    setIsScanningArtist(true);
    setScanError(null);
    try {
      // Parallel calls for Gemini analysis and MusicBrainz metadata
      const [identity, metadata] = await Promise.all([
        getArtistVocalIdentity(artistToScan),
        fetchArtistMetadata(artistToScan)
      ]);

      if (identity) {
        let newLanguage = state.music.language;
        if (identity.language) {
          const matchedLang = MUSIC_LANGUAGES.find(l => 
            l.name.toUpperCase() === identity.language?.toUpperCase() || 
            l.sub.toUpperCase() === identity.language?.toUpperCase()
          );
          if (matchedLang) {
            newLanguage = matchedLang.name;
          } else {
            newLanguage = 'CUSTOM';
            setCustomLang(identity.language);
          }
        }

        updateMusicState({
          voiceType: identity.voiceType,
          vocalTimbre: identity.vocalTimbre,
          singingStyle: identity.singingStyle,
          vocalPresence: identity.vocalPresence,
          accent: identity.accent,
          vocalReference: identity.vocalReference,
          language: newLanguage,
          weirdness: identity.weirdness || state.music.weirdness,
          styleInfluence: identity.styleInfluence || state.music.styleInfluence,
          artistIdentitySummary: identity.summary,
          artistMetadata: metadata || undefined,
          error: null
        });
        setScannedIdentityArtist(artistToScan);
      }
    } catch (error: any) {
      console.error("Scan error:", error);
      const msg = error.message || "Une erreur est survenue lors du scan.";
      setScanError(msg);
      updateMusicState({ error: msg });
    } finally {
      setIsScanningArtist(false);
    }
  };

  const handleCancelIdentity = () => {
    if (preScanState) {
      updateMusicState({
        ...preScanState,
        artistIdentitySummary: undefined,
        artistMetadata: undefined
      });
    }
    setScannedIdentityArtist(null);
    setPreScanState(null);
  };

  const handleRandomize = () => {
    const getRandom = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

    const randomGenre = getRandom(MUSIC_GENRES.filter(g => g.id !== 'custom'));
    const randomMood = getRandom(MUSIC_MOODS.filter(m => m.id !== 'custom'));
    const randomLang = getRandom(MUSIC_LANGUAGES.filter(l => l.id !== 'custom'));
    const randomArtist = getRandom(MUSIC_ARTISTS.filter(a => a.id !== 'custom'));
    const randomVoice = getRandom(MUSIC_VOICE_TYPES.filter(v => v.id !== 'custom'));
    const randomTimbre = getRandom(MUSIC_TIMBRES.filter(t => t.id !== 'custom'));
    const randomStyle = getRandom(MUSIC_SINGING_STYLES.filter(s => s.id !== 'custom'));
    const randomPresence = getRandom(MUSIC_VOCAL_PRESENCE);
    const randomEmotion = getRandom(MUSIC_EMOTION_LEVELS);
    const randomProduction = getRandom(MUSIC_PRODUCTION_STYLES.filter(p => p.id !== 'custom'));

    updateMusicState({
      genre: randomGenre.name,
      mood: randomMood.name,
      language: randomLang.name,
      inspiredBy: randomArtist.name,
      voiceType: randomVoice.name,
      vocalTimbre: randomTimbre.name,
      singingStyle: randomStyle.name,
      vocalPresence: randomPresence.name,
      emotionLevel: randomEmotion.name,
      styleBlend: randomProduction.name,
      energy: Math.floor(Math.random() * 100),
      emotionalIntensity: Math.floor(Math.random() * 100),
    });
  };

  const handleSuggestArtistAndTitle = async () => {
    if (isSuggestingIdentity) return;
    setIsSuggestingIdentity(true);
    try {
      const finalGenre = state.music.genre === 'CUSTOM' ? customGenre : state.music.genre;
      const finalMood = state.music.mood === 'CUSTOM' ? customMood : state.music.mood;
      const result = await suggestArtistAndTitle(state.music.theme, finalGenre || '', finalMood || '');
      updateMusicState({ artistName: result.artistName, songTitle: result.songTitle, error: null });
    } catch (e: any) {
      console.error("Error suggesting artist/title:", e);
      updateMusicState({ error: e.message || "Impossible de suggérer un nom d'artiste et un titre." });
    } finally {
      setIsSuggestingIdentity(false);
    }
  };

  const [isBangerExploding, setIsBangerExploding] = useState(false);

  const handleBangerClick = () => {
    if (state.music.isGenerating) return;
    setIsBangerExploding(true);
    setTimeout(() => setIsBangerExploding(false), 1000);
    handleGenerate('all');
  };

  const handleGenerate = async (mode: 'all' | 'lyrics' | 'style' = 'all') => {
    if (state.music.isGenerating) return;
    setState(prev => ({ ...prev, music: { ...prev.music, isGenerating: true, error: null } }));
    
    const finalGenre = state.music.genre === 'CUSTOM' ? customGenre : state.music.genre;
    const finalMood = state.music.mood === 'CUSTOM' ? customMood : state.music.mood;
    const finalLang = state.music.language === 'CUSTOM' ? customLang : state.music.language;
    const finalArtist = state.music.inspiredBy === 'CUSTOM' ? customArtist : state.music.inspiredBy;
    const finalVoice = state.music.voiceType === 'CUSTOM' ? customVoice : state.music.voiceType;
    const finalTimbre = state.music.vocalTimbre === 'CUSTOM' ? customTimbre : state.music.vocalTimbre;
    const finalStyle = state.music.singingStyle === 'CUSTOM' ? customStyle : state.music.singingStyle;
    const finalProduction = state.music.productionStyle === 'CUSTOM' ? customProduction : state.music.productionStyle;
    const finalStyleBlend = state.music.styleBlend;

    try {
      // Add a timeout to the generation call
      const generationPromise = generateMusicContext(
        finalGenre || state.genre,
        finalMood,
        state.music.theme,
        state.music.artistName || state.music.inspiredBy || state.artist || 'Artiste',
        finalLang || 'FRANÇAIS',
        finalArtist,
        '',
        state.music.performanceActive,
        state.music.energy,
        state.music.emotionalIntensity,
        finalVoice,
        finalTimbre,
        finalStyle,
        state.music.vocalPresence,
        state.music.accent,
        state.music.vocalReference,
        state.music.emotionLevel,
        '',
        finalProduction,
        state.manualBpm ? state.bpm : null,
        '',
        finalStyleBlend,
        state.music.artistIdentitySummary,
        state.music.customNegativePrompt,
        state.music.weirdness,
        state.music.styleInfluence,
        state.music.vocalTechnique,
        '',
        state.music.secondaryInspiredBy,
        state.music.advancedTags,
        mode
      );

      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error("La génération prend plus de temps que prévu. Veuillez réessayer.")), 90000)
      );

      const result = await Promise.race([generationPromise, timeoutPromise]) as any;
      
      setState(prev => {
        const newHistory = [
          {
            id: Math.random().toString(36).substr(2, 9),
            timestamp: Date.now(),
            sunoPrompt: result.sunoPrompt,
            negativePrompt: result.negativePrompt,
            lyrics: result.structuredLyrics,
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
            negativePrompt: mode === 'lyrics' ? prev.music.negativePrompt : result.negativePrompt,
            artistName: result.artistName,
            songTitle: result.songTitle,
            lyrics: mode === 'style' ? prev.music.lyrics : result.structuredLyrics,
            lipSyncExcerpt: mode === 'style' ? prev.music.lipSyncExcerpt : result.lipSyncExcerpt,
            quality: result.quality,
            isGenerating: false,
            error: result.quality?.score === 0 ? (result.quality.message || "La génération a échoué après plusieurs tentatives. Veuillez réessayer.") : null,
            history: newHistory
          }
        };
      });

      // Scroll to results on mobile
      setTimeout(() => {
        const resultsEl = document.getElementById('music-results');
        if (resultsEl && window.innerWidth < 1024) {
          resultsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } catch (error: any) {
      console.error('Music generation error:', error);
      setState(prev => ({ 
        ...prev, 
        music: { 
          ...prev.music, 
          isGenerating: false, 
          error: error?.message || "Une erreur réseau est survenue. Veuillez vérifier votre connexion et réessayer." 
        } 
      }));
    }
  };

  const showToast = useCallback((text: string, type: 'success' | 'error' | 'info' = 'success') => {
    setToastMessage({ text, type });
    setTimeout(() => setToastMessage(null), 2500);
  }, []);

  const copyToClipboard = (text: string, type: string = 'text') => {
    if (!text) return;
    try {
      copy(text);
      setCopiedText(type);
      showToast('Copié dans le presse-papiers', 'success');
      setTimeout(() => setCopiedText(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      showToast('Erreur de copie', 'error');
    }
  };

  // Keyboard shortcut: Cmd/Ctrl + Enter to generate
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'Enter' && !state.music.isGenerating) {
        e.preventDefault();
        handleGenerate('all');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [state.music.isGenerating]);

  const handleRerollVerse = async (verse: Verse, index: number) => {
    if (state.music.isGenerating) return;
    setState(prev => ({ ...prev, music: { ...prev.music, isGenerating: true, error: null } }));
    try {
      const context = {
        genre: state.music.genre === 'CUSTOM' ? customGenre : state.music.genre,
        mood: state.music.mood === 'CUSTOM' ? customMood : state.music.mood,
        theme: state.music.theme,
        inspiredBy: state.music.inspiredBy === 'CUSTOM' ? customArtist : state.music.inspiredBy,
      };
      const newText = await rerollVerse(context, verse);
      const newLyrics = [...state.music.lyrics];
      newLyrics[index].text = newText;
      updateMusicState({ lyrics: newLyrics, isGenerating: false });
    } catch (error: any) {
      console.error('Reroll verse error:', error);
      setState(prev => ({ 
        ...prev, 
        music: { 
          ...prev.music, 
          isGenerating: false, 
          error: error?.message || "Une erreur est survenue lors de la régénération du couplet." 
        } 
      }));
    }
  };

  const Screw = () => (
    <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center shadow-inner">
      <div className="w-full h-[1px] bg-white/5 rotate-45" />
    </div>
  );

  const handleAudioUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setState(prev => ({ ...prev, music: { ...prev.music, isAnalyzingAudio: true } }));

    try {
      const reader = new FileReader();
      reader.onload = async () => {
        const base64 = (reader.result as string).split(',')[1];
        const analysis = await analyzeAudio(base64, file.type);
        
        if (analysis) {
          setState(prev => ({
            ...prev,
            bpm: analysis.bpm || prev.bpm,
            manualBpm: analysis.bpm ? true : prev.manualBpm,
            music: {
              ...prev.music,
              genre: analysis.genre || prev.music.genre,
              mood: analysis.mood || prev.music.mood,
              energy: analysis.energy || prev.music.energy,
              isAnalyzingAudio: false
            }
          }));
          
          // If artist info found, maybe we can use it
          if (analysis.artistInfo) {
            console.log("Artist Info found:", analysis.artistInfo);
          }
        } else {
          setState(prev => ({ ...prev, music: { ...prev.music, isAnalyzingAudio: false } }));
        }
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error("Audio analysis error:", error);
      setState(prev => ({ ...prev, music: { ...prev.music, isAnalyzingAudio: false } }));
    }
  };

  const selectedGenre = MUSIC_GENRES.find(g => g.name === state.music.genre) || { name: '', sub: 'Select Genre' };
  const selectedMood = MUSIC_MOODS.find(m => m.name === state.music.mood) || { name: '', sub: 'Select Mood' };
  const selectedLang = MUSIC_LANGUAGES.find(l => l.name === state.music.language) || { name: '', sub: 'Select Language' };
  const selectedArtist = MUSIC_ARTISTS.find(a => a.name === state.music.inspiredBy) || { name: '', sub: 'Select Artist' };
  const selectedVoice = MUSIC_VOICE_TYPES.find(v => v.name === state.music.voiceType) || { name: '', sub: 'Select Voice Type' };
  const selectedTimbre = MUSIC_TIMBRES.find(t => t.name === state.music.vocalTimbre) || { name: '', sub: 'Select Timbre' };
  const selectedStyle = MUSIC_SINGING_STYLES.find(s => s.name === state.music.singingStyle) || { name: '', sub: 'Select Style' };
  const selectedPresence = MUSIC_VOCAL_PRESENCE.find(p => p.name === state.music.vocalPresence) || { name: '', sub: 'Select Presence' };
  const selectedEmotion = MUSIC_EMOTION_LEVELS.find(e => e.name === state.music.emotionLevel) || { name: '', sub: 'Select Emotion' };
  const selectedProduction = MUSIC_PRODUCTION_STYLES.find(p => p.name === state.music.productionStyle) || { name: '', sub: 'Select Production' };
  const selectedVocalTechnique = MUSIC_VOCAL_TECHNIQUES.find(t => t.name === state.music.vocalTechnique) || { name: '', sub: 'Select Technique' };

  return (
    <div className="flex-1 flex flex-col bg-bg-deep overflow-hidden selection:bg-accent/30 selection:text-accent relative">
      <div className="scanline-effect" />

      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -30, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -20, x: '-50%' }}
            className={`fixed top-5 left-1/2 z-[200] px-5 py-3 rounded-xl border backdrop-blur-xl shadow-2xl font-mono text-[11px] font-bold tracking-wider ${
              toastMessage.type === 'success' ? 'bg-green-950/80 border-green-500/30 text-green-300' :
              toastMessage.type === 'error' ? 'bg-red-950/80 border-red-500/30 text-red-300' :
              'bg-[#E8712A]/10 border-[#E8712A]/30 text-[#E8712A]'
            }`}
          >
            <div className="flex items-center gap-2">
              {toastMessage.type === 'success' && <CheckCircle2 size={14} />}
              {toastMessage.type === 'error' && <AlertCircle size={14} />}
              {toastMessage.type === 'info' && <Info size={14} />}
              {toastMessage.text}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full-screen Loading Overlay */}
      <AnimatePresence>
        {state.music.isGenerating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md"
          >
            {/* Background Glitch Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
              <motion.div 
                animate={{ 
                  x: [-10, 10, -10],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{ duration: 0.2, repeat: Infinity }}
                className="absolute inset-0 bg-accent/10 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            </div>

            <div className="bg-[#0a0a0a] border-2 border-accent/30 rounded-3xl p-10 max-w-lg w-full mx-4 shadow-[0_0_100px_rgba(232,113,42,0.3)] relative overflow-hidden">
              {/* Animated Corner Accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-accent/50 rounded-tl-3xl" />
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-accent/50 rounded-tr-3xl" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-accent/50 rounded-bl-3xl" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-accent/50 rounded-br-3xl" />

              <div className="flex flex-col items-center text-center gap-8">
                <div className="relative">
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.5, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-accent/20 blur-2xl rounded-full" 
                  />
                  <div className="w-24 h-24 rounded-full bg-accent/10 border-2 border-accent/40 flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(232,113,42,0.4)]">
                    <Zap size={40} className="text-accent fill-current animate-pulse" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <motion.h2 
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="font-bebas text-5xl tracking-[0.2em] text-white"
                  >
                    BANGER IN THE MAKING
                  </motion.h2>
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-[1px] w-8 bg-accent/30" />
                    <p className="font-mono text-xs text-accent uppercase tracking-[0.3em] font-bold">
                      {loadingMessage || "COOKING THE VIBE"}
                    </p>
                    <div className="h-[1px] w-8 bg-accent/30" />
                  </div>
                </div>

                <div className="w-full space-y-3">
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden relative border border-white/10">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-accent via-[#ff8c42] to-accent"
                      initial={{ width: "0%" }}
                      animate={{ width: `${loadingProgress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]" />
                  </div>
                  <div className="flex justify-between items-center px-1">
                    <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest">Processing Audio DNA</span>
                    <span className="font-mono text-sm text-accent font-bold">{Math.floor(loadingProgress)}%</span>
                  </div>
                </div>

                {/* Status Indicators */}
                <div className="grid grid-cols-3 gap-4 w-full pt-4 border-t border-white/5">
                  <div className="flex flex-col items-center gap-1">
                    <div className={`w-1.5 h-1.5 rounded-full ${loadingProgress > 30 ? 'bg-accent shadow-[0_0_8px_rgba(232,113,42,0.8)]' : 'bg-white/10'}`} />
                    <span className="font-mono text-[8px] text-white/20 uppercase">Lyrics</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className={`w-1.5 h-1.5 rounded-full ${loadingProgress > 60 ? 'bg-accent shadow-[0_0_8px_rgba(232,113,42,0.8)]' : 'bg-white/10'}`} />
                    <span className="font-mono text-[8px] text-white/20 uppercase">Style</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className={`w-1.5 h-1.5 rounded-full ${loadingProgress > 90 ? 'bg-accent shadow-[0_0_8px_rgba(232,113,42,0.8)]' : 'bg-white/10'}`} />
                    <span className="font-mono text-[8px] text-white/20 uppercase">Finalize</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Atmosphere */}
      <div className="fixed inset-0 atmosphere-bg pointer-events-none z-0" />
      <div className="fixed inset-0 bg-grid-white pointer-events-none opacity-[0.01] z-0" />
      
      {/* Header */}
      <div className="min-h-14 sm:min-h-20 border-b border-white/5 flex flex-col sm:flex-row items-center justify-between px-3 sm:px-10 py-2 sm:py-0 glass-panel sticky top-0 z-50 gap-2 sm:gap-0">
        <div className="flex items-center gap-3 sm:gap-6 w-full sm:w-auto">
          <button 
            onClick={onMenuClick}
            className="p-1.5 sm:p-2 rounded-xl bg-white/5 text-white/40 hover:text-[#E8712A] hover:bg-white/10 transition-all group shrink-0"
            title="Menu Principal"
          >
            <LayoutGrid size={18} className="sm:w-5 sm:h-5" />
          </button>
          
          <div className="flex items-center gap-2.5 sm:gap-4 flex-1 min-w-0">
            <div className="hidden md:flex items-end gap-1 h-4 px-4 border-x border-white/10">
              {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8, 0.4].map((h, i) => (
                <motion.div
                  key={i}
                  animate={{ height: [`${h*100}%`, `${Math.min(100, h*150)}%`, `${h*100}%`] }}
                  transition={{ duration: 0.5 + Math.random(), repeat: Infinity, ease: "easeInOut" }}
                  className="w-0.5 bg-accent/40 rounded-full"
                />
              ))}
            </div>
            <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-accent to-accent-hover flex items-center justify-center shadow-[0_0_20px_rgba(232,113,42,0.3)] shrink-0">
              <Music size={14} className="text-black sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <h2 className="font-bebas text-lg sm:text-2xl tracking-[0.15em] text-white leading-none truncate">SUNO STUDIO <span className="text-accent">V5</span></h2>
              <p className="micro-label mt-0.5 sm:mt-1 truncate text-[7px] sm:text-[9px]">Advanced Audio Intelligence Engine</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-6 w-full sm:w-auto">
          <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1 sm:py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
            <div className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)] animate-pulse`} />
            <span className="font-mono text-[8px] sm:text-[10px] text-white/70 font-medium uppercase tracking-widest">
              API: ACTIVE
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 border-l border-white/10 pl-3 sm:pl-6">
            <div className="flex flex-col items-end">
              <span className="font-mono text-[6px] sm:text-[8px] text-white/30 uppercase tracking-widest">Latency</span>
              <span className="font-mono text-[8px] sm:text-[10px] text-[#3a9a7a] font-bold tracking-tighter">12ms</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-3 sm:p-6 lg:p-10 flex flex-col xl:flex-row gap-4 sm:gap-8 lg:gap-10 custom-scrollbar relative z-10">
        {/* Left Column: Controls (The Rack) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full xl:w-[400px] flex flex-col gap-6"
        >
          {/* Tab Navigation */}
          <div className="flex bg-black/40 border border-white/5 rounded-xl p-1 mb-2">
            {[
              { id: 'composition', label: 'Composition', icon: LayoutGrid },
              { id: 'vocals', label: 'Vocals', icon: Mic },
              { id: 'performance', label: 'Performance', icon: Activity },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 py-1.5 sm:py-2 rounded-lg font-mono text-[8px] sm:text-[10px] uppercase tracking-widest transition-all ${
                  activeTab === tab.id 
                    ? 'bg-[#E8712A] text-black shadow-[0_0_15px_rgba(232,113,42,0.3)]' 
                    : 'text-white/40 hover:text-white/60 hover:bg-white/5'
                }`}
              >
                <tab.icon size={12} className="sm:w-3.5 sm:h-3.5" />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.substring(0, 4)}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'composition' && (
              <motion.div 
                key="composition"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                whileHover={{ scale: 1.002 }}
                className="hardware-card shadow-2xl relative group"
              >
            {/* Rack Screws */}
            <div className="absolute top-2 left-2"><Screw /></div>
            <div className="absolute top-2 right-2"><Screw /></div>
            <div className="absolute bottom-2 left-2"><Screw /></div>
            <div className="absolute bottom-2 right-2"><Screw /></div>

            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-[#E8712A]/10 border border-[#E8712A]/20">
                  <LayoutGrid size={14} className="text-[#E8712A]" />
                </div>
                <div>
                  <h3 className="font-bebas text-lg tracking-widest text-white">COMPOSITION</h3>
                  <p className="editorial-heading">Core Style & Structure</p>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#E8712A] animate-pulse shadow-[0_0_10px_#E8712A]" />
              </div>
            </div>

            <div className="space-y-5">
              {/* Audio Analysis Upload */}
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 transition-all hover:bg-white/[0.04] hover:border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Activity size={12} className="text-[#E8712A]" />
                    <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest">Reference Analysis</span>
                  </div>
                  {state.music.isAnalyzingAudio && <Loader2 size={12} className="text-[#E8712A] animate-spin" />}
                </div>
                <label className="flex flex-col items-center justify-center w-full h-20 border-2 border-dashed border-white/5 rounded-xl cursor-pointer hover:border-[#E8712A]/40 transition-all group bg-black/40">
                  <div className="flex flex-col items-center justify-center">
                    <Upload size={18} className="text-white/20 group-hover:text-[#E8712A] transition-all transform group-hover:-translate-y-1" />
                    <p className="font-mono text-[9px] text-white/30 mt-2 group-hover:text-white/60 transition-colors uppercase tracking-widest">
                      {state.music.isAnalyzingAudio ? 'Processing...' : 'Drop Reference MP3'}
                    </p>
                  </div>
                  <input type="file" className="hidden" accept="audio/mpeg" onChange={handleAudioUpload} disabled={state.music.isAnalyzingAudio} />
                </label>
              </div>
            </div>

            {/* Genre Selection Grid */}
            <div className="space-y-3">
              <div className="flex items-center justify-between ml-1">
                <label className="font-mono text-[9px] text-white/30 uppercase tracking-widest">Genre & Style</label>
                <button
                  onClick={() => setShowAllGenres(!showAllGenres)}
                  className="font-mono text-[8px] text-[#E8712A] hover:text-white transition-colors uppercase tracking-tighter"
                >
                  {showAllGenres ? 'Show Less' : 'Show All'}
                </button>
              </div>
              {showAllGenres && (
                <div className="relative">
                  <Search size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20" />
                  <input
                    type="text"
                    value={genreSearch}
                    onChange={(e) => setGenreSearch(e.target.value)}
                    placeholder="Rechercher un genre..."
                    className="w-full bg-black/40 border border-white/10 rounded-xl pl-8 pr-3 py-2.5 font-mono text-[10px] text-white/60 placeholder-white/20 focus:outline-none focus:border-[#E8712A]/40 transition-all"
                  />
                </div>
              )}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(showAllGenres ? MUSIC_GENRES.filter(g => !genreSearch || g.name.toLowerCase().includes(genreSearch.toLowerCase()) || (g.sub && g.sub.toLowerCase().includes(genreSearch.toLowerCase()))) : MUSIC_GENRES.slice(0, 8)).map((g) => {
                  const Icon = GENRE_ICONS[g.name] || Music;
                  const isActive = state.music.genre === g.name;
                  return (
                    <button
                      key={g.id}
                      onClick={() => updateMusicState({ genre: isActive ? '' : g.name })}
                      className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all relative group overflow-hidden ${
                        isActive 
                          ? 'bg-[#E8712A]/10 border-[#E8712A]/40 shadow-[0_0_15px_rgba(232,113,42,0.1)]' 
                          : 'bg-black/40 border-white/5 hover:border-white/20'
                      }`}
                    >
                      {isActive && (
                        <motion.div 
                          layoutId="genre-active"
                          className="absolute inset-0 bg-[#E8712A]/5 pointer-events-none"
                        />
                      )}
                      <Icon size={14} className={`mb-2 transition-colors ${isActive ? 'text-[#E8712A]' : 'text-white/20 group-hover:text-white/40'}`} />
                      <span className={`font-mono text-[9px] font-bold text-center leading-tight z-10 ${isActive ? 'text-white' : 'text-white/40 group-hover:text-white/60'}`}>
                        {g.name}
                      </span>
                      <span className="font-mono text-[7px] text-white/20 uppercase mt-1 tracking-tighter z-10 text-center line-clamp-1">
                        {g.sub}
                      </span>
                    </button>
                  );
                })}
              </div>
              
              {state.music.genre === 'CUSTOM' && (
                <input 
                  type="text"
                  value={customGenre}
                  onChange={(e) => setCustomGenre(e.target.value)}
                  placeholder="Enter custom genre..."
                  className="w-full mt-3 bg-black/60 border border-white/10 rounded-xl px-4 py-3 font-mono text-xs text-white focus:border-[#E8712A]/50 outline-none transition-all placeholder:text-white/20"
                />
              )}
            </div>

            {/* Inspired By Select */}
            <div className="relative">
              <div className="flex items-center justify-between mb-2.5 ml-1">
                <label className="font-mono text-[9px] text-white/30 uppercase tracking-widest">Inspired By</label>
                <div className="flex items-center gap-2">
                  {scannedIdentityArtist === (state.music.inspiredBy === 'CUSTOM' ? customArtist : state.music.inspiredBy) && (
                    <button 
                      onClick={handleCancelIdentity}
                      className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
                    >
                      <X size={10} className="text-white/50 group-hover:text-white transition-colors" />
                      <span className="font-mono text-[8px] text-white/50 group-hover:text-white uppercase font-bold transition-colors">Undo</span>
                    </button>
                  )}
                  <button 
                    onClick={handleScanArtist}
                    disabled={isScanningArtist || !state.music.inspiredBy || state.music.inspiredBy === 'Select Artist' || scannedIdentityArtist === (state.music.inspiredBy === 'CUSTOM' ? customArtist : state.music.inspiredBy)}
                    className={`flex items-center gap-1.5 px-2 py-0.5 rounded-md transition-all disabled:cursor-not-allowed group ${
                      scannedIdentityArtist === (state.music.inspiredBy === 'CUSTOM' ? customArtist : state.music.inspiredBy)
                        ? 'bg-green-500/10 border border-green-500/20 text-green-500'
                        : 'bg-[#E8712A]/10 border border-[#E8712A]/20 hover:bg-[#E8712A]/20 disabled:opacity-30'
                    }`}
                  >
                    {isScanningArtist ? (
                      <Loader2 size={10} className="animate-spin text-[#E8712A]" />
                    ) : scannedIdentityArtist === (state.music.inspiredBy === 'CUSTOM' ? customArtist : state.music.inspiredBy) ? (
                      <CheckCircle2 size={10} className="text-green-500" />
                    ) : (
                      <Zap size={10} className="text-[#E8712A] group-hover:scale-110 transition-transform" />
                    )}
                    <span className={`font-mono text-[8px] uppercase font-bold ${
                      scannedIdentityArtist === (state.music.inspiredBy === 'CUSTOM' ? customArtist : state.music.inspiredBy)
                        ? 'text-green-500'
                        : 'text-[#E8712A]'
                    }`}>
                      {scannedIdentityArtist === (state.music.inspiredBy === 'CUSTOM' ? customArtist : state.music.inspiredBy) ? 'Identity Scanned' : 'Scan Identity'}
                    </span>
                  </button>
                </div>
              </div>

              {scanError && (
                <motion.div 
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-3 px-3 py-2 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-2"
                >
                  <AlertCircle size={12} className="text-red-500" />
                  <span className="font-mono text-[9px] text-red-500 uppercase font-bold">{scanError}</span>
                  <button onClick={() => setScanError(null)} className="ml-auto p-1 hover:bg-red-500/10 rounded">
                    <X size={10} className="text-red-500" />
                  </button>
                </motion.div>
              )}

              <button 
                onClick={() => setShowArtistModal(true)}
                className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 flex items-center justify-between group hover:border-[#E8712A]/40 transition-all shadow-inner"
              >
                <div className="text-left flex items-center gap-3">
                  <User size={14} className="text-[#E8712A]" />
                  <div>
                    <div className="font-mono text-xs text-white font-medium">{state.music.inspiredBy || 'Select Artist'}</div>
                    <div className="font-mono text-[9px] text-white/30 uppercase mt-0.5 tracking-tighter">
                      {state.music.inspiredBy === 'CUSTOM' ? 'User Defined Artist' : selectedArtist.sub}
                    </div>
                  </div>
                </div>
                <div className="p-1.5 bg-white/5 rounded-lg group-hover:bg-[#E8712A]/10 transition-colors">
                  <Search size={14} className="text-white/20 group-hover:text-[#E8712A]" />
                </div>
              </button>

              {state.music.inspiredBy === 'CUSTOM' && (
                <input 
                  type="text"
                  value={customArtist}
                  onChange={(e) => setCustomArtist(e.target.value)}
                  placeholder="Enter custom artist..."
                  className="w-full mt-3 bg-black/60 border border-white/10 rounded-xl px-4 py-3 font-mono text-xs text-white focus:border-[#E8712A]/50 outline-none transition-all placeholder:text-white/20"
                />
              )}

              {/* Exclude Style (Negative Prompt) */}
              <div className="mt-4 space-y-3">
                <label className="font-mono text-[9px] text-white/30 uppercase tracking-widest ml-1 flex items-center justify-between">
                  <span>Exclude Styles (Negative Prompt)</span>
                  <AlertCircle size={10} className="text-red-500/50" />
                </label>
                <div className="relative group">
                  <input 
                    type="text"
                    value={state.music.customNegativePrompt || ''}
                    onChange={(e) => updateMusicState({ customNegativePrompt: e.target.value })}
                    placeholder="Ex: No autotune, No trap, No acoustic..."
                    className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 font-mono text-xs text-white focus:border-red-500/40 outline-none transition-all placeholder:text-white/10"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-focus-within:opacity-100 transition-opacity">
                    <div className="px-1.5 py-0.5 rounded bg-red-500/10 border border-red-500/20 font-mono text-[8px] text-red-400 uppercase">Exclude</div>
                  </div>
                </div>
              </div>

              {state.music.artistMetadata && scannedIdentityArtist === (state.music.inspiredBy === 'CUSTOM' ? customArtist : state.music.inspiredBy) && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-2 p-2.5 bg-white/5 border border-white/10 rounded-xl"
                >
                  <div className="flex flex-wrap gap-2">
                    {state.music.artistMetadata.country && (
                      <div className="px-2 py-0.5 bg-white/5 rounded border border-white/10 flex items-center gap-1.5">
                        <Globe size={10} className="text-white/40" />
                        <span className="font-mono text-[8px] text-white/60 uppercase">{state.music.artistMetadata.country}</span>
                      </div>
                    )}
                    {state.music.artistMetadata.primaryGenre && (
                      <div className="px-2 py-0.5 bg-white/5 rounded border border-white/10 flex items-center gap-1.5">
                        <Music size={10} className="text-white/40" />
                        <span className="font-mono text-[8px] text-white/60 uppercase">{state.music.artistMetadata.primaryGenre}</span>
                      </div>
                    )}
                    {state.music.artistMetadata.lifeSpan?.begin && (
                      <div className="px-2 py-0.5 bg-white/5 rounded border border-white/10 flex items-center gap-1.5">
                        <Clock size={10} className="text-white/40" />
                        <span className="font-mono text-[8px] text-white/60 uppercase">
                          Since {state.music.artistMetadata.lifeSpan.begin.split('-')[0]}
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {state.music.artistIdentitySummary && scannedIdentityArtist === (state.music.inspiredBy === 'CUSTOM' ? customArtist : state.music.inspiredBy) && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-3 p-3 bg-[#E8712A]/5 border border-[#E8712A]/10 rounded-xl"
                >
                  <div className="flex items-start gap-2">
                    <Info size={12} className="text-[#E8712A] mt-0.5 shrink-0" />
                    <p className="font-mono text-[9px] text-white/60 leading-relaxed italic">
                      {state.music.artistIdentitySummary}
                    </p>
                  </div>
                </motion.div>
              )}
              
              <p className="mt-2 font-mono text-[7px] text-white/20 uppercase tracking-tighter leading-relaxed ml-1">
                <Zap size={8} className="inline mr-1 text-[#E8712A]" />
                AI will perform deep data scraping of the artist's lyrical style, song structure, and production approach for maximum authenticity.
              </p>

              {/* Secondary Artist Selection (Blending) */}
              <div className="space-y-3 mt-4">
                <label className="font-mono text-[9px] text-white/30 uppercase tracking-widest ml-1 flex items-center gap-2">
                  <Layers size={10} className="text-[#E8712A]" />
                  <span>Secondary Artist (Style Blending)</span>
                </label>
                <button 
                  onClick={() => setShowSecondaryArtistModal(true)}
                  className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 flex items-center justify-between group hover:border-[#E8712A]/40 transition-all shadow-inner"
                >
                  <div className="text-left flex items-center gap-3">
                    <User size={14} className="text-white/40" />
                    <div>
                      <div className="font-mono text-xs text-white font-medium">{state.music.secondaryInspiredBy === 'none' ? 'None (Pure Style)' : state.music.secondaryInspiredBy}</div>
                      <div className="font-mono text-[9px] text-white/30 uppercase mt-0.5 tracking-tighter">
                        {state.music.secondaryInspiredBy === 'none' ? 'Single Artist DNA' : 'Hybrid DNA Active'}
                      </div>
                    </div>
                  </div>
                  <div className="p-1.5 bg-white/5 rounded-lg group-hover:bg-[#E8712A]/10 transition-colors">
                    <Search size={14} className="text-white/20 group-hover:text-[#E8712A]" />
                  </div>
                </button>
              </div>
            </div>

            {/* Variantes de production Selection Grid */}
            <div className="space-y-3">
              <div className="flex items-center justify-between ml-1">
                <label className="font-mono text-[9px] text-white/30 uppercase tracking-widest">Variantes de production</label>
                <button 
                  onClick={() => setShowAllProductionStyles(!showAllProductionStyles)}
                  className="font-mono text-[8px] text-[#E8712A] hover:text-white transition-colors uppercase tracking-tighter"
                >
                  {showAllProductionStyles ? 'Show Less' : 'Show All'}
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(showAllProductionStyles ? MUSIC_PRODUCTION_STYLES : MUSIC_PRODUCTION_STYLES.slice(0, 4)).map((p) => {
                  const isActive = state.music.productionStyle === p.name;
                  return (
                    <button
                      key={p.id}
                      onClick={() => updateMusicState({ productionStyle: isActive ? '' : p.name })}
                      className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all relative group overflow-hidden ${
                        isActive 
                          ? 'bg-[#E8712A]/10 border-[#E8712A]/40 shadow-[0_0_15px_rgba(232,113,42,0.1)]' 
                          : 'bg-black/40 border-white/5 hover:border-white/20'
                      }`}
                    >
                      <Sliders size={14} className={`mb-2 transition-colors ${isActive ? 'text-[#E8712A]' : 'text-white/20 group-hover:text-white/40'}`} />
                      <span className={`font-mono text-[9px] font-bold text-center leading-tight z-10 ${isActive ? 'text-white' : 'text-white/40 group-hover:text-white/60'}`}>
                        {p.name}
                      </span>
                      <span className="font-mono text-[7px] text-white/20 uppercase mt-1 tracking-tighter z-10 text-center line-clamp-1">
                        {p.sub}
                      </span>
                    </button>
                  );
                })}
              </div>
              
              {state.music.productionStyle === 'CUSTOM' && (
                <input 
                  type="text"
                  value={customProduction}
                  onChange={(e) => setCustomProduction(e.target.value)}
                  placeholder="Enter custom production style..."
                  className="w-full mt-3 bg-black/60 border border-white/10 rounded-xl px-4 py-3 font-mono text-xs text-white focus:border-[#E8712A]/50 outline-none transition-all placeholder:text-white/20"
                />
              )}
            </div>

            {/* Mood Selection Grid */}
            <div className="space-y-3">
              <div className="flex items-center justify-between ml-1">
                <label className="font-mono text-[9px] text-white/30 uppercase tracking-widest">Mood / Vibe</label>
                <button 
                  onClick={() => setShowAllMoods(!showAllMoods)}
                  className="font-mono text-[8px] text-[#E8712A] hover:text-white transition-colors uppercase tracking-tighter"
                >
                  {showAllMoods ? 'Show Less' : 'Show All'}
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(showAllMoods ? MUSIC_MOODS : MUSIC_MOODS.slice(0, 8)).map((m) => {
                  const Icon = MOOD_ICONS[m.name] || Sparkles;
                  const isActive = state.music.mood === m.name;
                  return (
                    <button
                      key={m.id}
                      onClick={() => updateMusicState({ mood: isActive ? '' : m.name })}
                      className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all relative group overflow-hidden ${
                        isActive 
                          ? 'bg-[#E8712A]/10 border-[#E8712A]/40 shadow-[0_0_15px_rgba(232,113,42,0.1)]' 
                          : 'bg-black/40 border-white/5 hover:border-white/20'
                      }`}
                    >
                      {isActive && (
                        <motion.div 
                          layoutId="mood-active"
                          className="absolute inset-0 bg-[#E8712A]/5 pointer-events-none"
                        />
                      )}
                      <Icon size={14} className={`mb-2 transition-colors ${isActive ? 'text-[#E8712A]' : 'text-white/20 group-hover:text-white/40'}`} />
                      <span className={`font-mono text-[9px] font-bold text-center leading-tight z-10 ${isActive ? 'text-white' : 'text-white/40 group-hover:text-white/60'}`}>
                        {m.name}
                      </span>
                      <span className="font-mono text-[7px] text-white/20 uppercase mt-1 tracking-tighter z-10 text-center line-clamp-1">
                        {m.sub}
                      </span>
                    </button>
                  );
                })}
              </div>
              
              {state.music.mood === 'CUSTOM' && (
                <input 
                  type="text"
                  value={customMood}
                  onChange={(e) => setCustomMood(e.target.value)}
                  placeholder="Enter custom mood..."
                  className="w-full mt-3 bg-black/60 border border-white/10 rounded-xl px-4 py-3 font-mono text-xs text-white focus:border-[#E8712A]/50 outline-none transition-all placeholder:text-white/20"
                />
              )}
            </div>

            {/* Language Select */}
            <div className="relative">
              <label className="font-mono text-[9px] text-white/30 uppercase tracking-widest mb-2.5 block ml-1">Lyrics Language</label>
              <button 
                onClick={() => setShowLangSelect(!showLangSelect)}
                className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 flex items-center justify-between group hover:border-[#E8712A]/40 transition-all shadow-inner"
              >
                <div className="text-left flex items-center gap-2">
                  <Globe size={14} className="text-[#E8712A]" />
                  <div>
                    <div className="font-mono text-xs text-white font-medium">{state.music.language || 'Select Language'}</div>
                    <div className="font-mono text-[9px] text-white/30 uppercase mt-0.5 tracking-tighter">{selectedLang.sub}</div>
                  </div>
                </div>
                <ChevronDown size={16} className={`text-white/20 transition-transform duration-300 ${showLangSelect ? 'rotate-180 text-[#E8712A]' : ''}`} />
              </button>

              <AnimatePresence>
                {showLangSelect && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="absolute top-full left-0 w-full mt-2 bg-[#0a0a0a] border border-white/10 rounded-xl shadow-2xl z-[60] overflow-hidden backdrop-blur-xl"
                  >
                    <div className="max-h-[300px] overflow-y-auto custom-scrollbar p-1">
                      {MUSIC_LANGUAGES.map(l => (
                        <button
                          key={l.id}
                          onClick={() => {
                            updateMusicState({ language: l.name });
                            setShowLangSelect(false);
                          }}
                          className={`w-full text-left px-4 py-3 rounded-lg transition-all flex flex-col gap-0.5 hover:bg-white/5 ${
                            state.music.language === l.name ? 'bg-[#E8712A]/10 border border-[#E8712A]/20' : 'border border-transparent'
                          }`}
                        >
                          <span className={`font-mono text-xs font-bold tracking-tight ${state.music.language === l.name ? 'text-[#E8712A]' : 'text-white/80'}`}>
                            {l.name}
                          </span>
                          <span className="font-mono text-[8px] text-white/30 uppercase tracking-tighter">{l.sub}</span>
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
                  placeholder="Enter custom language..."
                  className="w-full mt-3 bg-black/60 border border-white/10 rounded-xl px-4 py-3 font-mono text-xs text-white focus:border-[#E8712A]/50 outline-none transition-all placeholder:text-white/20"
                />
              )}
            </div>

            {/* Lyrics Theme */}
            <div>
              <label className="font-mono text-[9px] text-white/30 uppercase tracking-widest mb-2.5 block ml-1">Thème des Paroles</label>
              <textarea 
                defaultValue={state.music.theme}
                onBlur={(e) => updateMusicState({ theme: e.target.value })}
                placeholder="De quoi parle la chanson ?"
                rows={3}
                className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 font-mono text-xs text-white focus:border-[#E8712A]/50 outline-none transition-all resize-none placeholder:text-white/20 shadow-inner"
              />
            </div>

            {/* BPM */}
            <div>
              <div className="relative">
                <label className="font-mono text-[9px] text-white/30 uppercase tracking-widest mb-2.5 block ml-1">Tempo (BPM)</label>
                <div className="flex items-center gap-3 bg-black/40 border border-white/5 rounded-xl px-4 py-3 group hover:border-[#E8712A]/40 transition-all shadow-inner">
                  <Clock size={14} className="text-[#E8712A]" />
                  <input
                    type="number"
                    value={state.music.bpm || ''}
                    onChange={(e) => updateMusicState({ bpm: parseInt(e.target.value) || null })}
                    placeholder="Auto"
                    className="w-full bg-transparent font-mono text-xs text-white outline-none placeholder:text-white/20"
                  />
                  <span className="font-mono text-[8px] text-white/30 uppercase tracking-tighter">BPM</span>
                </div>
              </div>

              <div className="relative">
                {/* Advanced DNA Tags Button */}
                <div className="mt-6 pt-6 border-t border-white/5">
                  <button
                    onClick={() => setShowAdvancedTagsModal(true)}
                    className="w-full group relative overflow-hidden p-4 rounded-2xl bg-gradient-to-br from-[#E8712A]/5 to-transparent border border-[#E8712A]/20 hover:border-[#E8712A]/40 transition-all"
                  >
                    <div className="flex items-center justify-between relative z-10">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-[#E8712A]/10 border border-[#E8712A]/20 group-hover:scale-110 transition-transform">
                          <Sparkles size={16} className="text-[#E8712A]" />
                        </div>
                        <div className="text-left">
                          <h4 className="font-bebas text-lg tracking-widest text-white">ADVANCED DNA TAGS</h4>
                          <p className="font-mono text-[9px] text-white/30 uppercase tracking-widest">
                            {state.music.advancedTags.length > 0 
                              ? `${state.music.advancedTags.length} tags active` 
                              : 'Inject specific sonic elements'}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {state.music.advancedTags.length > 0 && (
                          <div className="flex -space-x-1">
                            {state.music.advancedTags.slice(0, 3).map((tag, i) => (
                              <div key={i} className="w-5 h-5 rounded-full bg-[#E8712A] border border-black flex items-center justify-center">
                                <span className="font-mono text-[8px] text-black font-bold">{tag[0]}</span>
                              </div>
                            ))}
                            {state.music.advancedTags.length > 3 && (
                              <div className="w-5 h-5 rounded-full bg-white/10 border border-black flex items-center justify-center">
                                <span className="font-mono text-[8px] text-white/60">+{state.music.advancedTags.length - 3}</span>
                              </div>
                            )}
                          </div>
                        )}
                        <ChevronDown size={16} className="text-white/20 group-hover:text-[#E8712A] transition-colors" />
                      </div>
                    </div>
                    {/* Animated Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E8712A]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </button>
                </div>
              </div>
            </div>

            {state.music.isGenerating && (
              <div className="absolute bottom-0 left-0 w-full h-12 flex items-end justify-center gap-1 px-4 pb-2 opacity-20 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-full bg-[#E8712A] vu-meter-bar" 
                    style={{ animationDelay: `${i * 0.05}s` }}
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}

        {activeTab === 'vocals' && (
          <motion.div 
            key="vocals"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            whileHover={{ scale: 1.002 }}
            className="hardware-card shadow-2xl relative group"
          >
            {/* Rack Screws */}
            <div className="absolute top-2 left-2"><Screw /></div>
            <div className="absolute top-2 right-2"><Screw /></div>
            <div className="absolute bottom-2 left-2"><Screw /></div>
            <div className="absolute bottom-2 right-2"><Screw /></div>

            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-[#E8712A]/10 border border-[#E8712A]/20">
                  <Mic size={14} className="text-[#E8712A]" />
                </div>
                <div>
                  <h3 className="font-bebas text-lg tracking-widest text-white">VOCAL PRODUCTION</h3>
                  <p className="editorial-heading">Voice & Performance</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
                {/* Voice Type Selection Grid */}
                <div className="space-y-3">
                  <label className="font-mono text-[9px] text-white/30 uppercase tracking-widest ml-1">Voice Type</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {MUSIC_VOICE_TYPES.slice(0, 4).map((v) => {
                      const isActive = state.music.voiceType === v.name;
                      return (
                        <button
                          key={v.id}
                          onClick={() => updateMusicState({ voiceType: isActive ? '' : v.name })}
                          className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all relative group overflow-hidden ${
                            isActive 
                              ? 'bg-[#E8712A]/10 border-[#E8712A]/40 shadow-[0_0_15px_rgba(232,113,42,0.1)]' 
                              : 'bg-black/40 border-white/5 hover:border-white/20'
                          }`}
                        >
                          <UserCircle size={14} className={`mb-2 transition-colors ${isActive ? 'text-[#E8712A]' : 'text-white/20 group-hover:text-white/40'}`} />
                          <span className={`font-mono text-[9px] font-bold text-center leading-tight z-10 ${isActive ? 'text-white' : 'text-white/40 group-hover:text-white/60'}`}>
                            {v.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Vocal Timbre Selection Grid */}
                <div className="space-y-3">
                  <label className="font-mono text-[9px] text-white/30 uppercase tracking-widest ml-1">Vocal Timbre</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {MUSIC_TIMBRES.slice(0, 4).map((t) => {
                      const isActive = state.music.vocalTimbre === t.name;
                      return (
                        <button
                          key={t.id}
                          onClick={() => updateMusicState({ vocalTimbre: isActive ? '' : t.name })}
                          className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all relative group overflow-hidden ${
                            isActive 
                              ? 'bg-[#E8712A]/10 border-[#E8712A]/40 shadow-[0_0_15px_rgba(232,113,42,0.1)]' 
                              : 'bg-black/40 border-white/5 hover:border-white/20'
                          }`}
                        >
                          <Waves size={14} className={`mb-2 transition-colors ${isActive ? 'text-[#E8712A]' : 'text-white/20 group-hover:text-white/40'}`} />
                          <span className={`font-mono text-[9px] font-bold text-center leading-tight z-10 ${isActive ? 'text-white' : 'text-white/40 group-hover:text-white/60'}`}>
                            {t.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Singing Style Selection Grid */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between ml-1">
                    <label className="font-mono text-[9px] text-white/30 uppercase tracking-widest">Singing Style</label>
                    <button 
                      onClick={() => setShowAllSingingStyles(!showAllSingingStyles)}
                      className="font-mono text-[8px] text-[#E8712A] hover:text-white transition-colors uppercase tracking-tighter"
                    >
                      {showAllSingingStyles ? 'Show Less' : 'Show All'}
                    </button>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {(showAllSingingStyles ? MUSIC_SINGING_STYLES : MUSIC_SINGING_STYLES.slice(0, 4)).map((s) => {
                      const isActive = state.music.singingStyle === s.name;
                      return (
                        <button
                          key={s.id}
                          onClick={() => updateMusicState({ singingStyle: isActive ? '' : s.name })}
                          className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all relative group overflow-hidden ${
                            isActive 
                              ? 'bg-[#E8712A]/10 border-[#E8712A]/40 shadow-[0_0_15px_rgba(232,113,42,0.1)]' 
                              : 'bg-black/40 border-white/5 hover:border-white/20'
                          }`}
                        >
                          <Mic2 size={14} className={`mb-2 transition-colors ${isActive ? 'text-[#E8712A]' : 'text-white/20 group-hover:text-white/40'}`} />
                          <span className={`font-mono text-[9px] font-bold text-center leading-tight z-10 ${isActive ? 'text-white' : 'text-white/40 group-hover:text-white/60'}`}>
                            {s.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Vocal Presence Select */}
                <div className="relative">
                  <label className="font-mono text-[9px] text-white/30 uppercase tracking-widest mb-2.5 block ml-1">Vocal Presence</label>
                  <button 
                    onClick={() => setShowPresenceSelect(!showPresenceSelect)}
                    className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 flex items-center justify-between group hover:border-[#E8712A]/40 transition-all shadow-inner"
                  >
                    <div className="text-left">
                      <div className="font-mono text-xs text-white font-medium">{state.music.vocalPresence || 'Select Presence'}</div>
                      <div className="font-mono text-[9px] text-white/30 uppercase mt-0.5 tracking-tighter">
                        {state.music.vocalPresence === 'CUSTOM' ? 'User Defined Presence' : selectedPresence.sub}
                      </div>
                    </div>
                    <ChevronDown size={16} className={`text-white/20 transition-transform duration-300 ${showPresenceSelect ? 'rotate-180 text-[#E8712A]' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {showPresenceSelect && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        className="absolute top-full left-0 w-full mt-2 bg-[#0a0a0a] border border-white/10 rounded-xl shadow-2xl z-[60] overflow-hidden backdrop-blur-xl"
                      >
                        <div className="max-h-[300px] overflow-y-auto custom-scrollbar p-1">
                          {MUSIC_VOCAL_PRESENCE.map(p => (
                            <button
                              key={p.id}
                              onClick={() => {
                                updateMusicState({ vocalPresence: state.music.vocalPresence === p.name ? '' : p.name });
                                setShowPresenceSelect(false);
                              }}
                              className={`w-full text-left px-4 py-3 rounded-lg transition-all flex flex-col gap-0.5 hover:bg-white/5 ${
                                state.music.vocalPresence === p.name ? 'bg-[#E8712A]/10 border border-[#E8712A]/20' : 'border border-transparent'
                              }`}
                            >
                              <span className={`font-mono text-xs font-bold tracking-tight ${state.music.vocalPresence === p.name ? 'text-[#E8712A]' : 'text-white/80'}`}>
                                {p.name}
                              </span>
                              <span className="font-mono text-[8px] text-white/30 uppercase tracking-tighter">{p.sub}</span>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Vocal Technique Select */}
                <div className="relative">
                  <label className="font-mono text-[9px] text-white/30 uppercase tracking-widest mb-2.5 block ml-1">Vocal Technique (V5.2)</label>
                  <button 
                    onClick={() => setShowVocalTechniqueSelect(!showVocalTechniqueSelect)}
                    className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 flex items-center justify-between group hover:border-[#E8712A]/40 transition-all shadow-inner"
                  >
                    <div className="text-left flex items-center gap-2">
                      <Mic2 size={14} className="text-[#E8712A]" />
                      <div>
                        <div className="font-mono text-xs text-white font-medium">{state.music.vocalTechnique || 'Standard'}</div>
                        <div className="font-mono text-[9px] text-white/30 uppercase mt-0.5 tracking-tighter">{selectedVocalTechnique.sub}</div>
                      </div>
                    </div>
                    <ChevronDown size={16} className={`text-white/20 transition-transform duration-300 ${showVocalTechniqueSelect ? 'rotate-180 text-[#E8712A]' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {showVocalTechniqueSelect && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        className="absolute top-full left-0 w-full mt-2 bg-[#0a0a0a] border border-white/10 rounded-xl shadow-2xl z-[60] overflow-hidden backdrop-blur-xl"
                      >
                        <div className="max-h-[300px] overflow-y-auto custom-scrollbar p-1">
                          {MUSIC_VOCAL_TECHNIQUES.map(t => (
                            <button
                              key={t.id}
                              onClick={() => {
                                updateMusicState({ vocalTechnique: state.music.vocalTechnique === t.name ? '' : t.name });
                                setShowVocalTechniqueSelect(false);
                              }}
                              className={`w-full text-left px-4 py-3 rounded-lg transition-all flex flex-col gap-0.5 hover:bg-white/5 ${
                                state.music.vocalTechnique === t.name ? 'bg-[#E8712A]/10 border border-[#E8712A]/20' : 'border border-transparent'
                              }`}
                            >
                              <span className={`font-mono text-xs font-bold tracking-tight ${state.music.vocalTechnique === t.name ? 'text-[#E8712A]' : 'text-white/80'}`}>
                                {t.name}
                              </span>
                              <span className="font-mono text-[8px] text-white/30 uppercase tracking-tighter">{t.sub}</span>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Accent Input */}
                <div>
                  <label className="font-mono text-[9px] text-white/30 uppercase tracking-widest mb-2.5 block ml-1">Accent / Language Color</label>
                  <input 
                    type="text"
                    defaultValue={state.music.accent}
                    onBlur={(e) => updateMusicState({ accent: e.target.value })}
                    placeholder="e.g. British, Southern, Patois..."
                    className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 font-mono text-xs text-white focus:border-[#E8712A]/50 outline-none transition-all placeholder:text-white/20"
                  />
                </div>

                {/* Vocal Reference Input */}
                <div className="relative group/ref">
                  <div className="flex items-center justify-between mb-2.5 ml-1">
                    <div className="flex items-center gap-2">
                      <div className="p-1 rounded-md bg-[#E8712A]/10">
                        <User size={10} className="text-[#E8712A]" />
                      </div>
                      <label className="font-mono text-[9px] text-white/30 uppercase tracking-widest">Vocal Reference</label>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-[#E8712A]/40 group-focus-within/ref:bg-[#E8712A] transition-colors" />
                  </div>
                  <textarea 
                    rows={2}
                    defaultValue={state.music.vocalReference}
                    onBlur={(e) => updateMusicState({ vocalReference: e.target.value })}
                    placeholder="e.g. Jorja Smith-like restraint, airy falsetto with deep soul resonance..."
                    className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 font-mono text-xs text-white focus:border-[#E8712A]/50 outline-none transition-all placeholder:text-white/20 resize-none custom-scrollbar"
                  />
                  <div className="absolute bottom-3 right-3 opacity-0 group-focus-within/ref:opacity-100 transition-opacity">
                    <div className="font-mono text-[8px] text-[#E8712A] uppercase tracking-widest">Ref. Mode</div>
                  </div>
                </div>

                {/* Emotion Level Selection Grid */}
                <div className="space-y-3">
                  <label className="font-mono text-[9px] text-white/30 uppercase tracking-widest ml-1">Emotion Level</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {MUSIC_EMOTION_LEVELS.slice(0, 4).map((e) => {
                      const isActive = state.music.emotionLevel === e.name;
                      return (
                        <button
                          key={e.id}
                          onClick={() => updateMusicState({ emotionLevel: isActive ? '' : e.name })}
                          className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all relative group overflow-hidden ${
                            isActive 
                              ? 'bg-[#E8712A]/10 border-[#E8712A]/40 shadow-[0_0_15px_rgba(232,113,42,0.1)]' 
                              : 'bg-black/40 border-white/5 hover:border-white/20'
                          }`}
                        >
                          <Heart size={14} className={`mb-2 transition-colors ${isActive ? 'text-[#E8712A]' : 'text-white/20 group-hover:text-white/40'}`} />
                          <span className={`font-mono text-[9px] font-bold text-center leading-tight z-10 ${isActive ? 'text-white' : 'text-white/40 group-hover:text-white/60'}`}>
                            {e.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
          </motion.div>
        )}

        {activeTab === 'performance' && (
          <motion.div 
            key="performance"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            whileHover={{ scale: 1.005 }}
            className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-4 sm:p-6 flex flex-col gap-4 sm:gap-6 shadow-2xl relative group"
          >
            {/* Rack Screws */}
            <div className="absolute top-2 left-2"><Screw /></div>
            <div className="absolute top-2 right-2"><Screw /></div>
            <div className="absolute bottom-2 left-2"><Screw /></div>
            <div className="absolute bottom-2 right-2"><Screw /></div>

            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E8712A]/50 to-transparent opacity-30" />
            
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-[#E8712A]/10 border border-[#E8712A]/20">
                  <Activity size={14} className="text-[#E8712A]" />
                </div>
                <div>
                  <h3 className="font-bebas text-lg tracking-widest text-white">PERFORMANCE & DYNAMICS</h3>
                  <p className="font-mono text-[8px] text-white/30 uppercase tracking-tighter">Energy & Vibe Control</p>
                </div>
              </div>
              <label className="relative flex items-center cursor-pointer">
                <input 
                  type="checkbox"
                  checked={state.music.performanceActive}
                  onChange={(e) => updateMusicState({ performanceActive: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-9 h-5 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#E8712A]"></div>
              </label>
            </div>

            {/* Sliders */}
            <div className="flex flex-col gap-6">
              <AnimatePresence>
                {state.music.performanceActive && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
                    animate={{ opacity: 1, height: 'auto', overflow: 'visible' }}
                    exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
                    className="flex flex-col gap-6"
                  >
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <label className="font-mono text-[9px] text-white/30 uppercase tracking-widest flex items-center gap-2 ml-1">
                          <Activity size={12} className="text-[#E8712A]" /> Energy
                        </label>
                        <span className="font-mono text-[10px] text-[#E8712A] font-bold bg-[#E8712A]/10 px-2 py-0.5 rounded-full">{state.music.energy}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={state.music.energy}
                        onChange={(e) => updateMusicState({ energy: parseInt(e.target.value) })}
                        className="w-full h-1.5 bg-white/5 rounded-full appearance-none cursor-pointer accent-[#E8712A] hover:bg-white/10 transition-colors"
                      />
                      <div className="flex justify-between mt-1">
                        <span className="font-mono text-[7px] text-white/15">Calme</span>
                        <span className="font-mono text-[7px] text-white/15">Explosif</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <label className="font-mono text-[9px] text-white/30 uppercase tracking-widest flex items-center gap-2 ml-1">
                          <Heart size={12} className="text-[#E8712A]" /> Emotional Intensity
                        </label>
                        <span className="font-mono text-[10px] text-[#E8712A] font-bold bg-[#E8712A]/10 px-2 py-0.5 rounded-full">{state.music.emotionalIntensity}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={state.music.emotionalIntensity}
                        onChange={(e) => updateMusicState({ emotionalIntensity: parseInt(e.target.value) })}
                        className="w-full h-1.5 bg-white/5 rounded-full appearance-none cursor-pointer accent-[#E8712A] hover:bg-white/10 transition-colors"
                      />
                      <div className="flex justify-between mt-1">
                        <span className="font-mono text-[7px] text-white/15">Neutre</span>
                        <span className="font-mono text-[7px] text-white/15">Intense</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <label className="font-mono text-[9px] text-white/30 uppercase tracking-widest flex items-center gap-2 ml-1">
                          <Sparkles size={12} className="text-[#E8712A]" /> Weirdness (V5.2)
                        </label>
                        <span className="font-mono text-[10px] text-[#E8712A] font-bold bg-[#E8712A]/10 px-2 py-0.5 rounded-full">{state.music.weirdness}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={state.music.weirdness}
                        onChange={(e) => updateMusicState({ weirdness: parseInt(e.target.value) })}
                        className="w-full h-1.5 bg-white/5 rounded-full appearance-none cursor-pointer accent-[#E8712A] hover:bg-white/10 transition-colors"
                      />
                      <div className="flex justify-between mt-1">
                        <span className="font-mono text-[7px] text-white/15">Classique</span>
                        <span className="font-mono text-[7px] text-white/15">Expérimental</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <label className="font-mono text-[9px] text-white/30 uppercase tracking-widest flex items-center gap-2 ml-1">
                          <Flame size={12} className="text-[#E8712A]" /> Style Influence
                        </label>
                        <span className="font-mono text-[10px] text-[#E8712A] font-bold bg-[#E8712A]/10 px-2 py-0.5 rounded-full">{state.music.styleInfluence}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={state.music.styleInfluence}
                        onChange={(e) => updateMusicState({ styleInfluence: parseInt(e.target.value) })}
                        className="w-full h-1.5 bg-white/5 rounded-full appearance-none cursor-pointer accent-[#E8712A] hover:bg-white/10 transition-colors"
                      />
                      <div className="flex justify-between mt-1">
                        <span className="font-mono text-[7px] text-white/15">Libre</span>
                        <span className="font-mono text-[7px] text-white/15">Fidèle</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="font-mono text-[9px] text-white/30 uppercase tracking-widest flex items-center gap-2 ml-1">
                    <Clock size={12} className="text-[#E8712A]" /> Duration (sec)
                  </label>
                  <span className="font-mono text-[10px] text-[#E8712A] font-bold bg-[#E8712A]/10 px-2 py-0.5 rounded-full">{state.music.duration}s</span>
                </div>
                <input 
                  type="range"
                  min="10"
                  max="240"
                  step="5"
                  value={state.music.duration}
                  onChange={(e) => updateMusicState({ duration: parseInt(e.target.value) })}
                  className="w-full h-1.5 bg-white/5 rounded-full appearance-none cursor-pointer accent-[#E8712A] hover:bg-white/10 transition-colors"
                />
              </div>

              <div className="pt-2">
                <div className="flex justify-between items-center mb-3">
                  <label className="font-mono text-[9px] text-white/30 uppercase tracking-widest flex items-center gap-2 cursor-pointer select-none ml-1 group">
                    <div className="relative flex items-center">
                      <input 
                        type="checkbox"
                        checked={state.manualBpm}
                        onChange={(e) => setState(prev => ({ ...prev, manualBpm: e.target.checked, bpm: e.target.checked ? (prev.bpm || 120) : prev.bpm }))}
                        className="peer sr-only"
                      />
                      <div className="w-4 h-4 border border-white/10 rounded bg-black/40 peer-checked:bg-[#E8712A] peer-checked:border-[#E8712A] transition-all flex items-center justify-center">
                        <Zap size={10} className={`text-white transition-opacity ${state.manualBpm ? 'opacity-100' : 'opacity-0'}`} />
                      </div>
                    </div>
                    <span className={`transition-colors ${state.manualBpm ? 'text-white' : 'text-white/30'}`}>MANUAL BPM</span>
                  </label>
                  {state.manualBpm && (
                    <span className="font-mono text-[10px] text-[#E8712A] font-bold bg-[#E8712A]/10 px-2 py-0.5 rounded-full">{state.bpm} BPM</span>
                  )}
                </div>
                {state.manualBpm && (
                  <motion.input 
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    type="range"
                    min="40"
                    max="220"
                    step="1"
                    value={state.bpm || 120}
                    onChange={(e) => setState(prev => ({ ...prev, bpm: parseInt(e.target.value) }))}
                    className="w-full h-1.5 bg-white/5 rounded-full appearance-none cursor-pointer accent-[#E8712A] hover:bg-white/10 transition-colors"
                  />
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="relative group/gen"
          >
            {/* Floating BANGER Button */}
            <div className="fixed bottom-3 right-3 sm:bottom-8 sm:right-8 z-50 group/banger flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleRandomize}
                className="p-3 sm:p-5 rounded-full bg-white/10 text-white hover:bg-white/20 border border-white/10 transition-all shadow-lg backdrop-blur-md"
                title="Randomize Parameters"
              >
                <Sparkles size={20} className="sm:w-7 sm:h-7" />
              </motion.button>
              
              <div className="relative">
                {/* Shockwave Effect */}
                <AnimatePresence>
                  {isBangerExploding && (
                    <motion.div
                      initial={{ scale: 1, opacity: 0.8 }}
                      animate={{ scale: 2.5, opacity: 0 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 rounded-full bg-accent z-[-1]"
                    />
                  )}
                </AnimatePresence>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleBangerClick}
                  disabled={state.music.isGenerating || state.isGenerating}
                  className={`px-4 py-2 sm:px-8 sm:py-4 rounded-full font-bebas text-lg sm:text-2xl tracking-[0.25em] transition-all flex items-center justify-center gap-3 relative overflow-hidden shadow-[0_0_30px_rgba(232,113,42,0.4)] hover:shadow-[0_0_50px_rgba(232,113,42,0.6)] group/btn ${
                    (state.music.isGenerating || state.isGenerating) 
                      ? 'bg-white/10 text-white/40 border border-white/10 cursor-not-allowed' 
                      : 'bg-accent text-black hover:bg-accent-hover border-2 border-accent/50'
                  }`}
                >
                  {/* Animated Background Shine */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite] transition-transform" />
                  
                  {(state.music.isGenerating || state.isGenerating) ? (
                    <>
                      <RefreshCw size={20} className="sm:w-8 sm:h-8 animate-spin" />
                      <span>{state.isGenerating ? 'VISUAL GEN...' : 'PROCESSING...'}</span>
                    </>
                  ) : (
                    <>
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 10, -10, 0]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Zap size={20} className="sm:w-8 sm:h-8 fill-current" />
                      </motion.div>
                      <span className="relative z-10">BANGER</span>
                      <span className="hidden sm:inline font-mono text-[8px] opacity-40 ml-1">⌘↵</span>
                    </>
                  )}
                </motion.button>
              </div>
            </div>

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

            {state.music.isGenerating && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 p-4 bg-[#0a0a0a] border border-accent/20 rounded-xl overflow-hidden relative"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-mono text-[10px] text-accent font-bold tracking-widest uppercase animate-pulse">
                    {loadingMessage || "Banger en cours de production..."}
                  </span>
                  <span className="font-mono text-[10px] text-white/50">
                    <RefreshCw size={10} className="inline animate-spin mr-1" />
                    {Math.round(loadingProgress)}%
                  </span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-accent"
                    initial={{ width: "0%" }}
                    animate={{ width: `${loadingProgress}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
              </motion.div>
            )}
          </motion.div>


          {/* Quality Assessment */}
          {state.music.quality && (
            <motion.div 
              whileHover={{ scale: 1.002 }}
              className="hardware-card shadow-2xl relative group"
            >
              {/* Rack Screws */}
              <div className="absolute top-2 left-2"><Screw /></div>
              <div className="absolute top-2 right-2"><Screw /></div>
              <div className="absolute bottom-2 left-2"><Screw /></div>
              <div className="absolute bottom-2 right-2"><Screw /></div>

              <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-[#E8712A]/10 border border-[#E8712A]/20">
                    <BarChart3 size={14} className="text-[#E8712A]" />
                  </div>
                  <div>
                    <h3 className="font-bebas text-lg tracking-widest text-white">QUALITÉ DU PROMPT</h3>
                    <p className="editorial-heading">AI Assessment Score</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-bebas text-4xl text-[#E8712A] drop-shadow-[0_0_10px_rgba(232,113,42,0.3)]">{state.music.quality.score}</span>
                  <span className="font-mono text-[10px] text-white/20 ml-1">/100</span>
                </div>
              </div>

              <div className="space-y-4 bg-black/40 p-5 rounded-xl border border-white/5 shadow-inner">
                {[
                  { label: 'Cohérence stylistique', value: state.music.quality.coherence },
                  { label: 'Richesse de prod', value: state.music.quality.richness },
                  { label: 'Clarté vocale', value: state.music.quality.clarity },
                  { label: 'Force du hook', value: state.music.quality.hook },
                  { label: 'Précision lyrique', value: state.music.quality.precision },
                ].map((metric, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest ml-1">{metric.label}</span>
                      <span className="font-mono text-[10px] text-[#E8712A] font-bold">{metric.value}%</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden shadow-inner">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${metric.value}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="h-full bg-gradient-to-r from-[#E8712A]/50 to-[#E8712A]"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-[#E8712A]/5 border border-[#E8712A]/10 rounded-xl backdrop-blur-sm relative">
                <div className="absolute top-2 left-2 opacity-20">
                  <FileText size={10} className="text-[#E8712A]" />
                </div>
                <p className="font-mono text-[10px] text-[#E8712A] italic leading-relaxed text-center px-4">
                  "{state.music.quality.message}"
                </p>
              </div>
            </motion.div>
          )}

          {/* History Section */}
          {state.music.history && state.music.history.length > 0 && (
            <motion.div 
              whileHover={{ scale: 1.002 }}
              className="hardware-card shadow-2xl relative group"
            >
              {/* Rack Screws */}
              <div className="absolute top-2 left-2"><Screw /></div>
              <div className="absolute top-2 right-2"><Screw /></div>
              <div className="absolute bottom-2 left-2"><Screw /></div>
              <div className="absolute bottom-2 right-2"><Screw /></div>

              <div className="flex items-center gap-2.5 px-2">
                <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">
                  <HistoryIcon size={14} className="text-white/40" />
                </div>
                <div>
                  <h3 className="font-bebas text-lg tracking-widest text-white/60">SESSION HISTORY</h3>
                  <p className="editorial-heading">Previous Generations</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 max-h-[300px] sm:max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {state.music.history.map((item) => (
                  <div key={item.id} className="p-4 bg-black/40 border border-white/5 rounded-xl group/item hover:border-[#E8712A]/30 transition-all shadow-inner relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#E8712A] opacity-0 group-hover/item:opacity-100 transition-opacity" />
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-2">
                        <Clock size={10} className="text-white/20" />
                        <span className="font-mono text-[8px] text-white/20 font-bold uppercase tracking-widest">{new Date(item.timestamp).toLocaleTimeString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => copyToClipboard(item.sunoPrompt, `history-style-${item.id}`)}
                          className="p-2 bg-white/5 rounded-lg border border-white/10 text-white/30 hover:text-[#E8712A] hover:bg-[#E8712A]/10 hover:border-[#E8712A]/40 transition-all"
                          title="Copy Style"
                        >
                          {copiedText === `history-style-${item.id}` ? <CheckCircle2 size={12} className="text-[#E8712A]" /> : <FileText size={12} />}
                        </button>
                        {item.negativePrompt && (
                          <button 
                            onClick={() => copyToClipboard(item.negativePrompt || '', `history-negative-${item.id}`)}
                            className="p-2 bg-white/5 rounded-lg border border-white/10 text-white/30 hover:text-red-400 hover:bg-red-500/10 hover:border-red-500/40 transition-all"
                            title="Copy Negative Prompt"
                          >
                            {copiedText === `history-negative-${item.id}` ? <CheckCircle2 size={12} className="text-red-400" /> : <AlertCircle size={12} />}
                          </button>
                        )}
                        <button
                          onClick={() => copyToClipboard(item.lyrics, `history-lyrics-${item.id}`)}
                          className="p-2 bg-white/5 rounded-lg border border-white/10 text-white/30 hover:text-[#E8712A] hover:bg-[#E8712A]/10 hover:border-[#E8712A]/40 transition-all"
                          title="Copy Lyrics"
                        >
                          {copiedText === `history-lyrics-${item.id}` ? <CheckCircle2 size={12} className="text-[#E8712A]" /> : <Mic size={12} />}
                        </button>
                        <button
                          onClick={() => {
                            updateMusicState({
                              sunoPrompt: item.sunoPrompt,
                              negativePrompt: item.negativePrompt || '',
                              lyrics: item.parsedLyrics || state.music.lyrics,
                            });
                            showToast('Génération restaurée', 'info');
                          }}
                          className="p-2 bg-white/5 rounded-lg border border-white/10 text-white/30 hover:text-green-400 hover:bg-green-500/10 hover:border-green-500/40 transition-all"
                          title="Restaurer cette génération"
                        >
                          <RotateCcw size={12} />
                        </button>
                      </div>
                    </div>
                    <p className="font-mono text-[10px] text-white/40 line-clamp-2 italic leading-relaxed group-hover/item:text-white/60 transition-colors">"{item.sunoPrompt}"</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Right Column: Lyrics */}
        <motion.div 
          id="music-results"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex-1 flex flex-col gap-6 sm:gap-8 min-h-[600px] lg:min-h-0"
        >
          {/* Module: Artist & Song Title */}
          <motion.div 
            whileHover={{ scale: 1.002 }}
            className="hardware-card shadow-2xl relative"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-[#E8712A]/10 border border-[#E8712A]/20">
                    <Music size={14} className="text-[#E8712A]" />
                  </div>
                  <div>
                    <h3 className="font-bebas text-lg tracking-widest text-white">IDENTITY</h3>
                    <p className="editorial-heading">Artist & Song Title</p>
                  </div>
              </div>
              <button 
                onClick={handleSuggestArtistAndTitle}
                disabled={isSuggestingIdentity}
                className="p-2 rounded-lg bg-[#E8712A]/10 border border-[#E8712A]/20 hover:bg-[#E8712A]/20 transition-all group disabled:opacity-50"
                title="Suggérer un nom et un titre"
              >
                {isSuggestingIdentity ? (
                  <Loader2 size={14} className="text-[#E8712A] animate-spin" />
                ) : (
                  <Sparkles size={14} className="text-[#E8712A] group-hover:scale-110 transition-transform" />
                )}
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="font-mono text-[8px] text-white/20 uppercase tracking-widest ml-1">Artist Name</label>
                <input 
                  type="text"
                  defaultValue={state.music.artistName || ''}
                  onBlur={(e) => updateMusicState({ artistName: e.target.value })}
                  placeholder="ARTISTE"
                  className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-2.5 font-mono text-xs text-white focus:border-[#E8712A]/50 outline-none transition-all placeholder:text-white/10"
                />
              </div>
              <div className="space-y-1.5">
                <label className="font-mono text-[8px] text-white/20 uppercase tracking-widest ml-1">Song Title</label>
                <input 
                  type="text"
                  defaultValue={state.music.songTitle || ''}
                  onBlur={(e) => updateMusicState({ songTitle: e.target.value })}
                  placeholder="TITRE"
                  className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-2.5 font-mono text-xs text-white focus:border-[#E8712A]/50 outline-none transition-all placeholder:text-white/10"
                />
              </div>
            </div>
          </motion.div>

          {/* Module: Suno V5 Prompt */}
          <motion.div 
            whileHover={{ scale: 1.002 }}
            className="hardware-card shadow-2xl relative group"
          >
            {/* Rack Screws */}
            <div className="absolute top-2 left-2"><Screw /></div>
            <div className="absolute top-2 right-2"><Screw /></div>
            <div className="absolute bottom-2 left-2"><Screw /></div>
            <div className="absolute bottom-2 right-2"><Screw /></div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between px-2 gap-4 sm:gap-0">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-[#E8712A]/10 border border-[#E8712A]/20">
                  <FileText size={14} className="text-[#E8712A]" />
                </div>
                <div>
                  <h3 className="font-bebas text-lg tracking-widest text-white">SUNO V5 PROMPT</h3>
                  <p className="editorial-heading">Optimized Style Direction</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => handleGenerate('style')}
                  disabled={state.music.isGenerating}
                  className="p-2 bg-white/5 rounded-xl border border-white/10 text-white/40 hover:text-[#E8712A] hover:bg-[#E8712A]/10 hover:border-[#E8712A]/40 transition-all"
                  title="Remix Style Only"
                >
                  <RefreshCw size={14} className={state.music.isGenerating ? 'animate-spin' : ''} />
                </button>
                <div className="px-2 py-1 bg-[#E8712A]/10 rounded-lg border border-[#E8712A]/20">
                  <span className="font-mono text-[8px] text-[#E8712A] font-bold tracking-widest uppercase">V5.2 Evolution</span>
                </div>
              </div>
            </div>
            
            <div className="relative group/prompt">
              {isEditingPrompt ? (
                <div className="relative">
                  <textarea
                    value={editedPrompt}
                    onChange={(e) => setEditedPrompt(e.target.value)}
                    className="w-full bg-black/80 border border-[#E8712A]/40 rounded-xl p-5 font-mono text-[10px] text-white/80 leading-relaxed min-h-[120px] shadow-inner backdrop-blur-md resize-y focus:outline-none focus:border-[#E8712A]/60 focus:ring-1 focus:ring-[#E8712A]/20"
                    autoFocus
                  />
                  <div className="absolute bottom-3 right-3 flex items-center gap-2">
                    <span className={`font-mono text-[9px] font-bold ${editedPrompt.length > 3000 ? 'text-red-500' : 'text-white/30'}`}>
                      {editedPrompt.length}/3000
                    </span>
                    <button
                      onClick={() => { setIsEditingPrompt(false); setEditedPrompt(''); }}
                      className="px-3 py-1.5 bg-white/5 rounded-lg border border-white/10 text-white/40 hover:text-white/60 text-[9px] font-mono uppercase tracking-widest transition-all"
                    >
                      Annuler
                    </button>
                    <button
                      onClick={() => { updateMusicState({ sunoPrompt: editedPrompt }); setIsEditingPrompt(false); showToast('Prompt mis à jour', 'success'); }}
                      className="px-3 py-1.5 bg-[#E8712A]/20 rounded-lg border border-[#E8712A]/40 text-[#E8712A] hover:bg-[#E8712A]/30 text-[9px] font-mono uppercase tracking-widest font-bold transition-all"
                    >
                      Appliquer
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-black/60 border border-white/5 rounded-xl p-5 font-mono text-[10px] text-white/60 leading-relaxed min-h-[100px] shadow-inner backdrop-blur-md">
                  {state.music.sunoPrompt || "Le prompt de style Suno apparaîtra ici..."}
                </div>
              )}
              {!isEditingPrompt && (
                <div className="absolute bottom-3 right-3 flex items-center gap-2">
                  <span className={`font-mono text-[9px] font-bold ${(state.music.sunoPrompt || '').length > 3000 ? 'text-red-500' : 'text-white/20'}`}>
                    {(state.music.sunoPrompt || '').length}/3000
                  </span>
                  {state.music.sunoPrompt && (
                    <>
                      <button
                        onClick={() => { setEditedPrompt(state.music.sunoPrompt); setIsEditingPrompt(true); }}
                        className="p-2 bg-white/10 rounded-xl border border-white/10 text-white/60 hover:text-[#E8712A] hover:border-[#E8712A]/40 transition-all opacity-0 group-hover/prompt:opacity-100 backdrop-blur-md"
                        title="Modifier le prompt"
                      >
                        <Edit3 size={14} />
                      </button>
                      <button
                        onClick={() => copyToClipboard(state.music.sunoPrompt, 'sunoPrompt')}
                        className="p-2 bg-white/10 rounded-xl border border-white/10 text-white/60 hover:text-[#E8712A] hover:border-[#E8712A]/40 transition-all opacity-0 group-hover/prompt:opacity-100 backdrop-blur-md"
                        title="Copier le prompt"
                      >
                        {copiedText === 'sunoPrompt' ? <CheckCircle2 size={14} className="text-[#E8712A]" /> : <Copy size={14} />}
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>

            {state.music.sunoPrompts && state.music.sunoPrompts.length > 0 && (
              <div className="mt-2 flex flex-col gap-3">
                <span className="font-mono text-[9px] text-white/30 uppercase tracking-widest ml-1">Variantes de Production</span>
                {state.music.sunoPrompts.map((variant, idx) => (
                  <div key={idx} className="relative group/variant">
                    <div className="bg-black/40 border border-white/5 rounded-xl p-4 font-mono text-[10px] text-white/50 leading-relaxed shadow-inner hover:border-white/10 transition-all">
                      <span className="text-[#E8712A] font-bold mr-3">V{idx + 1}</span>
                      {variant}
                    </div>
                    <button 
                      onClick={() => copyToClipboard(variant, `variant-${idx}`)}
                      className="absolute top-2 right-2 p-2 bg-white/10 rounded-xl border border-white/10 text-white/40 hover:text-[#E8712A] hover:border-[#E8712A]/40 transition-all opacity-0 group-hover/variant:opacity-100 backdrop-blur-md"
                    >
                      {copiedText === `variant-${idx}` ? <CheckCircle2 size={12} className="text-[#E8712A]" /> : <Copy size={12} />}
                    </button>
                  </div>
                ))}
              </div>
            )}

            {state.music.negativePrompt && (
              <div className="mt-4 flex flex-col gap-3">
                <div className="flex items-center gap-2 ml-1">
                  <AlertCircle size={12} className="text-red-500/80" />
                  <span className="font-mono text-[9px] text-red-500/80 uppercase tracking-widest font-bold">Prompt à exclure (Negative Prompt)</span>
                </div>
                <div className="relative group/negative">
                  <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-4 font-mono text-[10px] text-red-200/60 leading-relaxed shadow-inner hover:border-red-500/40 transition-all">
                    {state.music.negativePrompt}
                  </div>
                  <button 
                    onClick={() => copyToClipboard(state.music.negativePrompt || '', 'negativePrompt')}
                    className="absolute top-2 right-2 p-2 bg-red-500/10 rounded-xl border border-red-500/20 text-red-400/60 hover:text-red-400 hover:border-red-500/60 transition-all opacity-0 group-hover/negative:opacity-100 backdrop-blur-md"
                  >
                    {copiedText === 'negativePrompt' ? <CheckCircle2 size={12} className="text-red-400" /> : <Copy size={12} />}
                  </button>
                </div>
              </div>
            )}

            {/* SONIC DNA — AUTO-APPLIED SETTINGS */}
            {state.music.inspiredBy && (() => {
              const dnaSettings = getArtistSunoSettings(state.music.inspiredBy);
              if (!dnaSettings) return null;
              return (
                <div className="mt-4 flex flex-col gap-3">
                  <div className="flex items-center gap-2 ml-1">
                    <Sliders size={12} className="text-[#E8712A]/80" />
                    <span className="font-mono text-[9px] text-[#E8712A]/80 uppercase tracking-widest font-bold">Sonic DNA — Auto-applied · {state.music.inspiredBy}</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="bg-[#E8712A]/5 border border-[#E8712A]/15 rounded-xl p-3 text-center">
                      <span className="font-mono text-[7px] text-[#E8712A]/70 block mb-1 uppercase tracking-wider">Weirdness</span>
                      <span className="font-mono text-lg text-white/90 font-bold">{dnaSettings.weirdness}</span>
                      <span className="font-mono text-[8px] text-white/25 ml-0.5">/100</span>
                    </div>
                    <div className="bg-[#E8712A]/5 border border-[#E8712A]/15 rounded-xl p-3 text-center">
                      <span className="font-mono text-[7px] text-[#E8712A]/70 block mb-1 uppercase tracking-wider">Style Infl.</span>
                      <span className="font-mono text-lg text-white/90 font-bold">{dnaSettings.styleInfluence}</span>
                      <span className="font-mono text-[8px] text-white/25 ml-0.5">%</span>
                    </div>
                    <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 text-center">
                      <span className="font-mono text-[7px] text-white/30 block mb-1 uppercase tracking-wider">BPM</span>
                      <span className="font-mono text-[11px] text-white/60 font-medium">{dnaSettings.bpmRange}</span>
                    </div>
                    <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 text-center">
                      <span className="font-mono text-[7px] text-white/30 block mb-1 uppercase tracking-wider">Key</span>
                      <span className="font-mono text-[11px] text-white/60 font-medium">{dnaSettings.key}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-2">
                    <CheckCircle2 size={10} className="text-emerald-500/50 flex-shrink-0" />
                    <span className="font-mono text-[8px] text-emerald-500/40">Valeurs calibrées automatiquement pour {state.music.inspiredBy}</span>
                  </div>
                </div>
              );
            })()}

            <div className="mt-6 pt-6 border-t border-white/5">
              <div className="flex items-center gap-2 mb-3 ml-1">
                <div className="p-1 rounded bg-[#E8712A]/10 border border-[#E8712A]/20">
                  <HelpCircle size={10} className="text-[#E8712A]" />
                </div>
                <span className="font-mono text-[9px] text-white/30 uppercase tracking-widest font-bold">Suno V5.2 Workflow Guide</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                  <span className="font-mono text-[8px] text-[#E8712A] block mb-1">STEP 1</span>
                  <p className="font-mono text-[9px] text-white/40 leading-relaxed">Copiez le <span className="text-white/60">Style Prompt</span> dans la case "Style of Music" de Suno.</p>
                </div>
                <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                  <span className="font-mono text-[8px] text-[#E8712A] block mb-1">STEP 2</span>
                  <p className="font-mono text-[9px] text-white/40 leading-relaxed">Copiez le <span className="text-white/60">Negative Prompt</span> dans "Exclude Styles" (Custom Mode).</p>
                </div>
                <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                  <span className="font-mono text-[8px] text-[#E8712A] block mb-1">STEP 3</span>
                  <p className="font-mono text-[9px] text-white/40 leading-relaxed">Copiez les <span className="text-white/60">Lyrics</span>. Les balises [ ] et ( ) sont déjà optimisées.</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.002 }}
            className="hardware-card shadow-2xl relative group/lyrics flex-1 flex flex-col min-h-[500px]"
          >
            {/* Rack Screws */}
            <div className="absolute top-2 left-2"><Screw /></div>
            <div className="absolute top-2 right-2"><Screw /></div>
            <div className="absolute bottom-2 left-2"><Screw /></div>
            <div className="absolute bottom-2 right-2"><Screw /></div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between px-2 gap-4 sm:gap-0 mb-6 sticky top-0 z-10 bg-[#0c0c0c]/40 backdrop-blur-xl py-2">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="p-2 rounded-xl bg-[#E8712A]/10 border border-[#E8712A]/20">
                  <Mic size={18} className="text-[#E8712A]" />
                </div>
                <div>
                  <h3 className="font-bebas text-lg sm:text-xl tracking-widest text-white/90">LYRICAL ARCHITECTURE</h3>
                  <p className="editorial-heading">AI Generated Poetry & Structure</p>
                </div>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <button 
                  onClick={() => handleGenerate('lyrics')}
                  disabled={state.music.isGenerating}
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-white/60 hover:text-[#E8712A] hover:bg-[#E8712A]/10 hover:border-[#E8712A]/40 transition-all font-mono text-[10px] uppercase tracking-widest backdrop-blur-md"
                  title="Remix & Refine Lyrics to match artist style"
                >
                  <RefreshCw size={14} className={state.music.isGenerating ? 'animate-spin' : ''} />
                  Remix & Refine
                </button>
                {state.music.lyrics && (
                  <button 
                    onClick={() => copyToClipboard(state.music.lyrics.map(v => `[${v.type}]\n${v.text}`).join('\n\n'), 'lyrics')}
                    className="flex items-center gap-2 px-4 py-2 bg-[#E8712A] rounded-xl text-black hover:bg-[#ff7d2f] transition-all font-mono text-[10px] font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(232,113,42,0.3)]"
                  >
                    {copiedText === 'lyrics' ? <CheckCircle2 size={14} /> : <Copy size={14} />}
                    {copiedText === 'lyrics' ? 'Copié !' : 'Copier Tout'}
                  </button>
                )}
              </div>
            </div>
            
            <div className="flex-1 p-4 sm:p-8 lg:p-12 overflow-y-auto font-mono text-xs sm:text-sm text-white/40 leading-loose whitespace-pre-wrap selection:bg-[#E8712A]/30 selection:text-[#E8712A] custom-scrollbar bg-[radial-gradient(circle_at_top_right,rgba(232,113,42,0.03),transparent_40%)]">
              {state.music.lyrics && state.music.lyrics.length > 0 ? (
                <div className="relative max-w-2xl mx-auto space-y-4">
                  {state.music.lyrics.map((verse, i) => (
                    <motion.div 
                      key={verse.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      className="group relative bg-[#0c0c0c] border border-white/5 rounded-xl p-5 hover:border-[#E8712A]/30 transition-all"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-mono text-[9px] text-[#E8712A] font-bold uppercase tracking-widest bg-[#E8712A]/10 px-2 py-1 rounded">
                          {verse.type}
                        </span>
                        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button 
                            onClick={() => handleRerollVerse(verse, i)}
                            className="p-1.5 hover:bg-white/10 rounded-lg text-white/40 hover:text-white transition-colors"
                            title="Reroll Verse"
                          >
                            <RefreshCw size={12} />
                          </button>
                          <button 
                            onClick={() => copyToClipboard(verse.text, `verse-${verse.id}`)}
                            className="p-1.5 hover:bg-white/10 rounded-lg text-white/40 hover:text-white transition-colors"
                            title="Copy Verse"
                          >
                            {copiedText === `verse-${verse.id}` ? <CheckCircle2 size={12} className="text-accent" /> : <Copy size={12} />}
                          </button>
                        </div>
                      </div>
                      <textarea
                        value={verse.text}
                        onChange={(e) => {
                          const newLyrics = [...state.music.lyrics];
                          newLyrics[i].text = e.target.value;
                          updateMusicState({ lyrics: newLyrics });
                        }}
                        className="w-full bg-transparent border-none focus:ring-0 text-white/80 text-sm leading-relaxed resize-none font-mono"
                        rows={verse.text.split('\n').length}
                      />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-10 grayscale">
                  <div className="relative">
                    <Mic size={64} className="mb-6" />
                    <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#E8712A] animate-ping" />
                  </div>
                  <p className="font-bebas text-3xl tracking-[0.3em]">AUCUNE PAROLE GÉNÉRÉE</p>
                  <p className="font-mono text-[11px] uppercase mt-3 tracking-widest">Configurez le style et cliquez sur générer</p>
                </div>
              )}

              {state.music.lipSyncExcerpt && (
                <div className="mt-10 sm:mt-16 pt-10 sm:pt-16 border-t border-white/5 max-w-2xl mx-auto">
                  <div className="flex items-center gap-3 mb-6 sm:mb-8">
                    <div className="p-2 rounded-xl bg-[#E8712A]/10 border border-[#E8712A]/20">
                      <VideoIcon size={16} className="text-[#E8712A] sm:w-[18px] sm:h-[18px]" />
                    </div>
                    <span className="font-bebas text-lg sm:text-xl tracking-widest text-[#E8712A]">GUIDE LIP-SYNC (15 SEC)</span>
                  </div>
                  <div className="bg-[#E8712A]/5 border border-[#E8712A]/10 rounded-2xl p-4 sm:p-8 backdrop-blur-sm relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#E8712A] opacity-50" />
                    <p className="font-mono text-[9px] sm:text-[11px] text-[#E8712A]/70 mb-6 sm:mb-8 leading-relaxed italic">
                      Utilisez ce guide pour synchroniser précisément les mouvements de bouche sur votre vidéo Suno. Les mentions entre crochets indiquent l'émotion, et les barres obliques la phonétique.
                    </p>
                    <div className="whitespace-pre-wrap font-mono text-[11px] sm:text-[13px] text-white/80 leading-loose bg-black/60 p-4 sm:p-8 rounded-xl border border-white/5 shadow-inner group-hover:border-[#E8712A]/20 transition-all">
                      {state.music.lipSyncExcerpt}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
      <AnimatePresence>
        {showArtistModal && (
          <ArtistSelectionModal 
            isOpen={showArtistModal}
            onClose={() => setShowArtistModal(false)}
            artists={MUSIC_ARTISTS}
            onSelect={(name) => updateMusicState({ inspiredBy: state.music.inspiredBy === name ? '' : name })}
            selectedArtist={state.music.inspiredBy}
            artistSearch={artistSearch}
            setArtistSearch={setArtistSearch}
            onCustomSelect={(name) => {
              updateMusicState({ inspiredBy: 'CUSTOM' });
              setCustomArtist(name);
            }}
          />
        )}
        {showSecondaryArtistModal && (
          <ArtistSelectionModal 
            isOpen={showSecondaryArtistModal}
            onClose={() => setShowSecondaryArtistModal(false)}
            artists={[{ id: 'none', name: 'none', sub: 'None (Pure Style)' }, ...MUSIC_ARTISTS]}
            onSelect={(name) => {
              updateMusicState({ secondaryInspiredBy: state.music.secondaryInspiredBy === name ? 'none' : name });
              setShowSecondaryArtistModal(false);
            }}
            selectedArtist={state.music.secondaryInspiredBy}
            artistSearch={secondaryArtistSearch}
            setArtistSearch={setSecondaryArtistSearch}
            onCustomSelect={(name) => {
              updateMusicState({ secondaryInspiredBy: name });
              setShowSecondaryArtistModal(false);
            }}
          />
        )}
        {showAdvancedTagsModal && (
          <AdvancedTagsModal 
            selectedTags={state.music.advancedTags}
            onSelect={(tag) => {
              const current = state.music.advancedTags || [];
              const next = current.includes(tag) 
                ? current.filter(t => t !== tag)
                : [...current, tag];
              updateMusicState({ advancedTags: next });
            }}
            onClose={() => setShowAdvancedTagsModal(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const ArtistSelectionModal = ({ isOpen, onClose, artists, onSelect, selectedArtist, artistSearch, setArtistSearch, onCustomSelect }: { 
  isOpen: boolean; 
  onClose: () => void; 
  artists: typeof MUSIC_ARTISTS; 
  onSelect: (name: string) => void; 
  selectedArtist: string;
  artistSearch: string;
  setArtistSearch: (s: string) => void;
  onCustomSelect: (s: string) => void;
}) => {
  if (!isOpen) return null;

  const filteredArtists = artists.filter(a => 
    a.name.toLowerCase().includes(artistSearch.toLowerCase()) || 
    a.sub.toLowerCase().includes(artistSearch.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
      >
        <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#E8712A]/10 border border-[#E8712A]/20">
              <User size={20} className="text-[#E8712A]" />
            </div>
            <div>
              <h2 className="font-bebas text-2xl tracking-widest text-white">SELECT ARTIST DNA</h2>
              <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest">Choose an inspiration for your track</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/5 rounded-xl transition-colors text-white/40 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 bg-black/40">
          <div className="relative group">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#E8712A] transition-colors" />
            <input
              type="text"
              value={artistSearch}
              onChange={(e) => setArtistSearch(e.target.value)}
              placeholder="Search by name, genre, or style..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-4 font-mono text-sm text-white focus:border-[#E8712A]/50 outline-none transition-all placeholder:text-white/20 shadow-inner"
              autoFocus
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 pt-0 custom-scrollbar">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filteredArtists.map(a => (
              <button
                key={a.id}
                onClick={() => {
                  onSelect(a.name);
                  onClose();
                }}
                className={`text-left p-4 rounded-2xl transition-all flex flex-col gap-1 group relative overflow-hidden ${
                  selectedArtist === a.name 
                    ? 'bg-[#E8712A]/10 border border-[#E8712A]/40 shadow-[0_0_20px_rgba(232,113,42,0.1)]' 
                    : 'bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.05]'
                }`}
              >
                <div className="flex items-center justify-between relative z-10">
                  <span className={`font-mono text-sm font-bold tracking-tight ${selectedArtist === a.name ? 'text-[#E8712A]' : 'text-white/80 group-hover:text-white'}`}>
                    {a.name}
                  </span>
                  {selectedArtist === a.name && <CheckCircle2 size={14} className="text-[#E8712A]" />}
                </div>
                <span className="font-mono text-[9px] text-white/30 uppercase tracking-widest relative z-10 group-hover:text-white/50 transition-colors">{a.sub}</span>
                
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E8712A]/0 to-[#E8712A]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>

          {filteredArtists.length === 0 && (
            <div className="py-12 text-center">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/10">
                <Search size={24} className="text-white/10" />
              </div>
              <p className="font-mono text-xs text-white/20 uppercase tracking-[0.2em] mb-4">No artist found in database</p>
              <button 
                onClick={() => {
                  onCustomSelect(artistSearch);
                  onClose();
                }}
                className="px-6 py-3 bg-[#E8712A]/10 border border-[#E8712A]/20 rounded-xl font-mono text-[10px] text-[#E8712A] hover:bg-[#E8712A] hover:text-black transition-all uppercase font-bold tracking-widest"
              >
                Use "{artistSearch}" as custom artist
              </button>
            </div>
          )}
        </div>
        
        <div className="p-4 border-t border-white/5 bg-white/[0.01] flex justify-center">
          <p className="font-mono text-[8px] text-white/20 uppercase tracking-[0.3em]">Select an artist to inject their DNA into the generation</p>
        </div>
      </motion.div>
    </div>
  );
};

const AdvancedTagsModal: React.FC<{
  selectedTags: string[];
  onSelect: (tag: string) => void;
  onClose: () => void;
}> = ({ selectedTags, onSelect, onClose }) => {
  const categories = [
    { title: 'VOCAL TEXTURE', tags: MUSIC_VOCAL_TEXTURES },
    { title: 'INTERPRETATION', tags: MUSIC_VOCAL_INTERPRETATIONS },
    { title: 'FLOW & TECHNIQUE', tags: MUSIC_FLOW_TAGS },
    { title: 'WRITING & THEMES', tags: MUSIC_WRITING_TAGS },
    { title: 'DRUMS & BASS', tags: MUSIC_DRUM_BASS_TAGS },
    { title: 'MELODY & HARMONY', tags: MUSIC_MELODY_TAGS },
    { title: 'ATMOSPHERE', tags: MUSIC_ATMOSPHERE_TAGS },
    { title: 'MIX & TEXTURE', tags: MUSIC_MIX_TAGS },
    { title: 'STRUCTURE', tags: MUSIC_STRUCTURE_TAGS }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/90 backdrop-blur-xl"
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#E8712A]/10 border border-[#E8712A]/20">
              <Sparkles size={20} className="text-[#E8712A]" />
            </div>
            <div>
              <h2 className="font-bebas text-2xl tracking-widest text-white">ADVANCED DNA TAGS</h2>
              <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest">Inject specific sonic & lyrical elements</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-3 py-1.5 rounded-full bg-[#E8712A]/10 border border-[#E8712A]/20">
              <span className="font-mono text-[10px] text-[#E8712A] font-bold">{selectedTags.length} SELECTED</span>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white/5 rounded-xl transition-colors text-white/40 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar space-y-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-white/5" />
                <h3 className="font-mono text-[10px] text-white/40 uppercase tracking-[0.3em] font-bold">{cat.title}</h3>
                <div className="h-px flex-1 bg-white/5" />
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {cat.tags.map((tag) => {
                  const isActive = selectedTags.includes(tag.name);
                  return (
                    <button
                      key={tag.id}
                      onClick={() => onSelect(tag.name)}
                      className={`text-left p-3 rounded-xl transition-all flex flex-col gap-1 group relative overflow-hidden border ${
                        isActive 
                          ? 'bg-[#E8712A]/10 border-[#E8712A]/40 shadow-[0_0_15px_rgba(232,113,42,0.05)]' 
                          : 'bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.05]'
                      }`}
                    >
                      <div className="flex items-center justify-between relative z-10">
                        <span className={`font-mono text-[10px] font-bold tracking-tight ${isActive ? 'text-[#E8712A]' : 'text-white/60 group-hover:text-white'}`}>
                          {tag.name}
                        </span>
                        {isActive && <CheckCircle2 size={10} className="text-[#E8712A]" />}
                      </div>
                      <span className="font-mono text-[8px] text-white/20 uppercase tracking-tighter relative z-10 group-hover:text-white/40 transition-colors">{tag.sub}</span>
                      
                      {/* Hover Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#E8712A]/0 to-[#E8712A]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-6 border-t border-white/5 bg-white/[0.01] flex justify-between items-center">
          <p className="font-mono text-[8px] text-white/20 uppercase tracking-[0.2em]">Select multiple tags to refine the AI's musical direction</p>
          <button 
            onClick={onClose}
            className="px-8 py-3 bg-[#E8712A] text-black rounded-xl font-bebas text-xl tracking-widest hover:bg-[#ff7d33] transition-all shadow-[0_0_20px_rgba(232,113,42,0.2)]"
          >
            CONFIRM SELECTION
          </button>
        </div>
      </motion.div>
    </div>
  );
};
