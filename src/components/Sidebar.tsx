import React, { useState } from 'react';
import { SessionState, Sex, GenerationMode, ModelType, MotionType, StudioColor } from '../types';
import { COLORS, ARTIST_STYLES, RAPPER_STYLES, POP_ARTIST_STYLES, RNB_ARTIST_STYLES, ETHNICITY_DESC, EXPRESSIONS, WARDROBE_SILHOUETTES, WARDROBE_STYLES } from '../constants';
import { BpmAnalyzer } from './BpmAnalyzer';
import { Tooltip } from './Tooltip';
import { ChevronDown, ChevronUp, User, Music, Shirt, Video, Palette, Cpu, Sparkles } from 'lucide-react';

interface Props {
  state: SessionState;
  setState: React.Dispatch<React.SetStateAction<SessionState>>;
  onRandomize: () => void;
}

interface CollapsibleProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  badge?: string | number;
  tooltip?: string;
  toggle?: {
    active: boolean;
    onToggle: (e: React.MouseEvent) => void;
  };
}

const Screw = () => (
  <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center shadow-inner">
    <div className="w-full h-[1px] bg-white/5 rotate-45" />
  </div>
);

const CollapsibleSection: React.FC<CollapsibleProps> = ({ title, icon, children, isOpen, onToggle, badge, tooltip, toggle }) => (
  <div className={`border border-white/5 rounded-xl bg-[#0a0a0a] mb-2 transition-all duration-300 relative overflow-hidden ${isOpen ? 'ring-1 ring-[#E8712A]/10 shadow-xl shadow-black/40' : 'hover:border-white/10'}`}>
    {/* Rack Screws */}
    <div className="absolute top-1.5 left-1.5"><Screw /></div>
    <div className="absolute top-1.5 right-1.5"><Screw /></div>
    
    <div 
      onClick={onToggle}
      className={`w-full px-4 py-3 flex items-center justify-between transition-all group cursor-pointer ${isOpen ? 'bg-white/5' : 'bg-transparent hover:bg-white/[0.02]'}`}
    >
      <div className="flex items-center gap-3 pl-2">
        <span className={`${isOpen ? 'text-[#E8712A]' : 'text-white/20'} group-hover:text-[#E8712A] transition-colors`}>{icon}</span>
        {tooltip ? (
          <Tooltip text={tooltip} position="right">
            <span className={`font-mono text-[10px] tracking-[0.15em] uppercase transition-colors ${isOpen ? 'text-[#E8712A] font-black' : 'text-white/60 font-bold'}`}>{title}</span>
          </Tooltip>
        ) : (
          <span className={`font-mono text-[10px] tracking-[0.15em] uppercase transition-colors ${isOpen ? 'text-[#E8712A] font-black' : 'text-white/60 font-bold'}`}>{title}</span>
        )}
        {badge ? (
          <span className="bg-[#E8712A] text-black font-mono text-[9px] px-1.5 rounded min-w-[16px] h-[16px] flex items-center justify-center font-black">
            {badge}
          </span>
        ) : null}
      </div>
      <div className="flex items-center gap-3 pr-2">
        {toggle && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggle.onToggle(e);
            }}
            className={`font-bebas text-[11px] tracking-widest px-3 py-1 rounded transition-all border ${toggle.active ? 'bg-[#E8712A]/10 border-[#E8712A]/30 text-[#E8712A] shadow-[0_0_10px_rgba(232,113,42,0.1)]' : 'bg-white/5 border-white/10 text-white/20 hover:border-white/20'}`}
          >
            {toggle.active ? 'ACTIF ✓' : 'INACTIF'}
          </button>
        )}
        {isOpen ? <ChevronUp size={12} className="text-[#E8712A]" /> : <ChevronDown size={12} className="text-white/20" />}
      </div>
    </div>
    {isOpen && (
      <div className="p-4 border-t border-white/5 bg-[#0c0c0c]">
        {children}
      </div>
    )}
  </div>
);

export const Sidebar: React.FC<Props> = ({ state, setState, onRandomize }) => {
  const [activeSection, setActiveSection] = useState<string | null>('identity');

  const toggleSection = (id: string) => {
    setActiveSection(prev => prev === id ? null : id);
  };

  const setSex = (sex: Sex) => {
    setState(prev => {
      // Find a default outfit for the new sex
      const defaultOutfit = RAPPER_STYLES.find(s => s.gender === sex) || null;
      
      return { 
        ...prev, 
        sex,
        selectedArtistOutfit: defaultOutfit,
        // Ensure street style is selected to show the default rapper outfit
        wardrobe: {
          ...prev.wardrobe,
          styles: prev.wardrobe.styles.includes('street') ? prev.wardrobe.styles : [...prev.wardrobe.styles, 'street']
        }
      };
    });
  };
  const setMode = (mode: GenerationMode) => setState(prev => ({ ...prev, mode }));
  const setModel = (model: ModelType) => setState(prev => ({ ...prev, model }));
  const setMotion = (motion: MotionType) => setState(prev => ({ ...prev, motion }));
  const setColor = (color: StudioColor) => setState(prev => ({ ...prev, color }));

  const setExpression = (key: string, prompt: string) => setState(prev => ({ ...prev, expressionKey: key, expressionPrompt: prompt }));

  const toggleWardrobe = (type: 'sils' | 'styles', key: string) => {
    setState(prev => {
      const current = prev.wardrobe[type];
      const next = current.includes(key) 
        ? current.filter(k => k !== key)
        : [...current, key];
      return {
        ...prev,
        wardrobe: { ...prev.wardrobe, [type]: next }
      };
    });
  };

  const activeWardrobeCount = state.wardrobe.sils.length + state.wardrobe.styles.length;

  return (
    <div className="border-b lg:border-b-0 lg:border-r border-white/5 p-4 flex flex-col gap-1 overflow-y-auto lg:h-[calc(100vh-86px)] lg:sticky lg:top-0 bg-[#0a0a0a] h-auto sticky-none custom-scrollbar relative">
      <div className="absolute top-2 left-2"><Screw /></div>
      <div className="absolute top-2 right-2"><Screw /></div>
      
      <Tooltip text="Génère aléatoirement tous les paramètres de la session" position="bottom">
        <button 
          onClick={onRandomize}
          className="w-full border border-white/10 rounded-lg p-3 font-bebas text-[14px] tracking-[3px] cursor-pointer transition-all bg-gradient-to-br from-white/5 via-transparent to-white/5 text-white/80 hover:bg-white/10 mb-4 shadow-lg shadow-black/40 relative overflow-hidden group/rand"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/rand:translate-x-full transition-transform duration-1000" />
          <span className="inline-flex items-center gap-2 relative z-10">
            <Sparkles size={14} className="text-[#E8712A]" /> PERSO RANDOM
          </span>
        </button>
      </Tooltip>

      <CollapsibleSection 
        title="Identité & Physique" 
        icon={<User size={12} />} 
        isOpen={activeSection === 'identity'} 
        onToggle={() => toggleSection('identity')}
        tooltip="Paramètres physiques de l'artiste"
      >
        <div className="flex flex-col gap-4">
          <div>
            <Tooltip text="Nom de l'artiste ou référence visuelle" position="right">
              <label className="font-mono text-[9px] tracking-widest uppercase text-white/30 mb-2 block cursor-help">Artiste / Session</label>
            </Tooltip>
            <input 
              className="bg-white/5 border border-white/10 text-white text-[12px] p-2.5 rounded-md outline-none w-full focus:border-[#E8712A]/50 transition-all placeholder:text-white/20"
              value={state.artist}
              onChange={e => setState(prev => ({ ...prev, artist: e.target.value }))}
              placeholder="ex: Lil Durk, Future, Drake…"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-mono text-[9px] tracking-widest uppercase text-white/30 mb-2 block">Sexe</label>
              <div className="flex gap-2">
                <button 
                  onClick={() => setSex('male')}
                  className={`flex-1 border rounded-md p-2 text-center transition-all ${state.sex === 'male' ? 'border-[#E8712A] bg-[#E8712A]/10 text-[#E8712A]' : 'border-white/10 bg-white/5 text-white/40'}`}
                >
                  <div className="font-bebas text-[14px] tracking-widest leading-none">♂</div>
                  <div className="font-mono text-[8px] mt-1 uppercase tracking-tighter font-bold">Homme</div>
                </button>
                <button 
                  onClick={() => setSex('female')}
                  className={`flex-1 border rounded-md p-2 text-center transition-all ${state.sex === 'female' ? 'border-[#E8712A] bg-[#E8712A]/10 text-[#E8712A]' : 'border-white/10 bg-white/5 text-white/40'}`}
                >
                  <div className="font-bebas text-[14px] tracking-widest leading-none">♀</div>
                  <div className="font-mono text-[8px] mt-1 uppercase tracking-tighter font-bold">Femme</div>
                </button>
              </div>
            </div>
            <div>
              <label className="font-mono text-[9px] tracking-widest uppercase text-white/30 mb-2 block">Taille</label>
              <select 
                className="bg-white/5 border border-white/10 text-white text-[12px] p-2 rounded-md outline-none w-full focus:border-white/20 transition-all h-[40px]"
                value={state.height}
                onChange={e => setState(prev => ({ ...prev, height: parseInt(e.target.value) }))}
              >
                {[155, 160, 165, 170, 175, 180, 185, 190].map(h => (
                  <option key={h} value={h} className="bg-[#0a0a0a]">{h} cm</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-mono text-[9px] tracking-widest uppercase text-white/30 mb-2 block">Âge</label>
              <select 
                className="bg-white/5 border border-white/10 text-white text-[12px] p-2 rounded-md outline-none w-full focus:border-white/20 transition-all h-[40px]"
                value={state.age}
                onChange={e => setState(prev => ({ ...prev, age: e.target.value }))}
              >
                <option value="none" className="bg-[#0a0a0a]">— Non spécifié</option>
                {[18, 20, 22, 24, 26, 28, 30, 32, 35, 38, 40].map(a => (
                  <option key={a} value={a} className="bg-[#0a0a0a]">{a} ans</option>
                ))}
              </select>
            </div>
            <div>
              <label className="font-mono text-[9px] tracking-widest uppercase text-white/30 mb-2 block">Origine</label>
              <select 
                className="bg-white/5 border border-white/10 text-white text-[12px] p-2 rounded-md outline-none w-full focus:border-white/20 transition-all h-[40px]"
                value={state.ethnicity}
                onChange={e => setState(prev => ({ ...prev, ethnicity: e.target.value }))}
              >
                <option value="none" className="bg-[#0a0a0a]">— Non spécifiée</option>
                {Object.keys(ETHNICITY_DESC).filter(k => k !== 'none').map(k => (
                  <option key={k} value={k} className="bg-[#0a0a0a]">{k.replace(/-/g, ' ').toUpperCase()}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      <CollapsibleSection 
        title="Performance & Pose" 
        icon={<Music size={12} />} 
        isOpen={activeSection === 'performance'} 
        onToggle={() => toggleSection('performance')}
        tooltip="Attitude, genre musical et analyse de visage"
      >
        <div className="flex flex-col gap-4">
          <div>
            <label className="font-mono text-[9px] tracking-widest uppercase text-white/30 mb-2 block">Expression / Pose</label>
            <div className="grid grid-cols-2 gap-2">
              {EXPRESSIONS.map(exp => (
                <button
                  key={exp.key}
                  onClick={() => {
                    if (state.expressionKey === exp.key) {
                      setExpression('none', '');
                    } else {
                      setExpression(exp.key, exp.prompt);
                    }
                  }}
                  className={`border rounded-md p-2 text-center transition-all ${state.expressionKey === exp.key ? 'border-[#E8712A] bg-[#E8712A]/10 text-[#E8712A]' : 'border-white/10 bg-white/5 hover:border-white/20 text-white/40'}`}
                >
                  <div className="font-bebas text-[12px] tracking-widest leading-none">
                    {exp.name}
                  </div>
                  <div className="font-mono text-[7px] mt-1 uppercase tracking-tighter opacity-70">
                    {exp.sub}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="font-mono text-[9px] tracking-widest uppercase text-white/30 mb-2 block">Genre musical</label>
            <select 
              className="bg-white/5 border border-white/10 text-white text-[12px] p-2.5 rounded-md outline-none w-full focus:border-white/20 transition-all h-[40px]"
              value={state.genre}
              onChange={e => setState(prev => ({ ...prev, genre: e.target.value }))}
            >
              <option value="none" className="bg-[#0a0a0a]">— Aucun style</option>
              <option value="reggaeton" className="bg-[#0a0a0a]">Reggaeton</option>
              <option value="trap-latino" className="bg-[#0a0a0a]">Trap Latino</option>
              <option value="hip-hop" className="bg-[#0a0a0a]">Hip-Hop</option>
              <option value="drill" className="bg-[#0a0a0a]">Drill</option>
              <option value="rnb" className="bg-[#0a0a0a]">R&B</option>
              <option value="soul" className="bg-[#0a0a0a]">Soul</option>
              <option value="afrobeats" className="bg-[#0a0a0a]">Afrobeats</option>
              <option value="pop" className="bg-[#0a0a0a]">Pop</option>
              <option value="electronic" className="bg-[#0a0a0a]">Electronic</option>
              <option value="house" className="bg-[#0a0a0a]">House</option>
              <option value="jazz" className="bg-[#0a0a0a]">Jazz</option>
            </select>
          </div>

          <BpmAnalyzer onBpmDetected={b => setState(prev => ({ ...prev, bpm: b }))} />
        </div>
      </CollapsibleSection>

      <CollapsibleSection 
        title="Garde-Robe" 
        icon={<Shirt size={12} />} 
        isOpen={activeSection === 'wardrobe'} 
        onToggle={() => toggleSection('wardrobe')}
        badge={activeWardrobeCount > 0 ? activeWardrobeCount : undefined}
        tooltip="Sélection des vêtements et styles d'artistes"
      >
        <div className="flex flex-col gap-5">
          <div>
            <label className="font-mono text-[9px] tracking-widest uppercase text-white/30 mb-2 block">Silhouettes</label>
            <div className="flex flex-wrap gap-2">
              {WARDROBE_SILHOUETTES
                .filter(s => s.gender === 'unisex' || s.gender === state.sex)
                .map(s => (
                <button
                  key={s.key}
                  onClick={() => toggleWardrobe('sils', s.key)}
                  className={`font-mono text-[9px] px-2.5 py-1.5 rounded-md border transition-all uppercase tracking-tight font-bold ${state.wardrobe.sils.includes(s.key) ? 'border-[#E8712A] text-[#E8712A] bg-[#E8712A]/10' : 'border-white/10 text-white/40 bg-white/5 hover:border-white/20'}`}
                >
                  {s.name}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="font-mono text-[9px] tracking-widest uppercase text-white/30 mb-2 block">Styles</label>
            <div className="flex flex-wrap gap-2">
              {WARDROBE_STYLES.map(s => (
                <button
                  key={s.key}
                  onClick={() => toggleWardrobe('styles', s.key)}
                  className={`font-mono text-[9px] px-2.5 py-1.5 rounded-md border transition-all uppercase tracking-tight font-bold ${state.wardrobe.styles.includes(s.key) ? 'border-[#E8712A] text-[#E8712A] bg-[#E8712A]/10' : 'border-white/10 text-white/40 bg-white/5 hover:border-white/20'}`}
                >
                  {s.name}
                </button>
              ))}
            </div>
          </div>

          {state.wardrobe.styles.includes('street') && (
            <div className="mt-4 border-t border-white/5 pt-4">
              <div className="flex items-center justify-between mb-2">
                <label className="font-mono text-[9px] tracking-widest uppercase text-[#E8712A] font-bold">Hip Hop / Rap Outfit</label>
                <button 
                  onClick={() => {
                    const randomRapper = RAPPER_STYLES[Math.floor(Math.random() * RAPPER_STYLES.length)];
                    setState(prev => ({ ...prev, selectedArtistOutfit: randomRapper }));
                  }}
                  className="font-mono text-[8px] text-white/40 hover:text-[#E8712A] transition-colors uppercase tracking-widest"
                >
                  Randomize
                </button>
              </div>
              <div className="grid grid-cols-1 gap-2 max-h-[250px] overflow-y-auto pr-1 custom-scrollbar">
                {RAPPER_STYLES.map(s => (
                  <button
                    key={s.name}
                    onClick={() => setState(prev => ({ ...prev, selectedArtistOutfit: prev.selectedArtistOutfit?.name === s.name ? null : s }))}
                    className={`text-left px-3 py-2 rounded border transition-all ${state.selectedArtistOutfit?.name === s.name ? 'border-[#E8712A] bg-[#E8712A]/10 text-[#E8712A]' : 'border-white/5 bg-white/[0.02] text-white/40 hover:border-white/10'}`}
                  >
                    <div className="font-bebas text-[11px] tracking-widest leading-none">{s.name}</div>
                    <div className="font-mono text-[7px] mt-1 opacity-60 truncate">{s.prompt}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {state.wardrobe.styles.includes('pop') && (
            <div className="mt-4 border-t border-white/5 pt-4">
              <div className="flex items-center justify-between mb-2">
                <label className="font-mono text-[9px] tracking-widest uppercase text-[#E8712A] font-bold">Pop Artist Outfit</label>
                <button 
                  onClick={() => {
                    const randomPop = POP_ARTIST_STYLES[Math.floor(Math.random() * POP_ARTIST_STYLES.length)];
                    setState(prev => ({ ...prev, selectedArtistOutfit: randomPop }));
                  }}
                  className="font-mono text-[8px] text-white/40 hover:text-[#E8712A] transition-colors uppercase tracking-widest"
                >
                  Randomize
                </button>
              </div>
              <div className="grid grid-cols-1 gap-2 max-h-[250px] overflow-y-auto pr-1 custom-scrollbar">
                {POP_ARTIST_STYLES.map(s => (
                  <button
                    key={s.name}
                    onClick={() => setState(prev => ({ ...prev, selectedArtistOutfit: prev.selectedArtistOutfit?.name === s.name ? null : s }))}
                    className={`text-left px-3 py-2 rounded border transition-all ${state.selectedArtistOutfit?.name === s.name ? 'border-[#E8712A] bg-[#E8712A]/10 text-[#E8712A]' : 'border-white/5 bg-white/[0.02] text-white/40 hover:border-white/10'}`}
                  >
                    <div className="font-bebas text-[11px] tracking-widest leading-none">{s.name}</div>
                    <div className="font-mono text-[7px] mt-1 opacity-60 truncate">{s.prompt}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {state.wardrobe.styles.includes('rnb') && (
            <div className="mt-4 border-t border-white/5 pt-4">
              <div className="flex items-center justify-between mb-2">
                <label className="font-mono text-[9px] tracking-widest uppercase text-[#E8712A] font-bold">R&B Artist Outfit</label>
                <button 
                  onClick={() => {
                    const randomRnb = RNB_ARTIST_STYLES[Math.floor(Math.random() * RNB_ARTIST_STYLES.length)];
                    setState(prev => ({ ...prev, selectedArtistOutfit: randomRnb }));
                  }}
                  className="font-mono text-[8px] text-white/40 hover:text-[#E8712A] transition-colors uppercase tracking-widest"
                >
                  Randomize
                </button>
              </div>
              <div className="grid grid-cols-1 gap-2 max-h-[250px] overflow-y-auto pr-1 custom-scrollbar">
                {RNB_ARTIST_STYLES.map(s => (
                  <button
                    key={s.name}
                    onClick={() => setState(prev => ({ ...prev, selectedArtistOutfit: prev.selectedArtistOutfit?.name === s.name ? null : s }))}
                    className={`text-left px-3 py-2 rounded border transition-all ${state.selectedArtistOutfit?.name === s.name ? 'border-[#E8712A] bg-[#E8712A]/10 text-[#E8712A]' : 'border-white/5 bg-white/[0.02] text-white/40 hover:border-white/10'}`}
                  >
                    <div className="font-bebas text-[11px] tracking-widest leading-none">{s.name}</div>
                    <div className="font-mono text-[7px] mt-1 opacity-60 truncate">{s.prompt}</div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </CollapsibleSection>

      <CollapsibleSection 
        title="Vidéo Cinématique" 
        icon={<Video size={14} />} 
        isOpen={activeSection === 'video'} 
        onToggle={() => toggleSection('video')}
        tooltip="Paramètres pour la génération vidéo (Kling, Luma...)"
        toggle={{
          active: state.videoActive,
          onToggle: () => setState(prev => ({ ...prev, videoActive: !prev.videoActive }))
        }}
      >
        <div className={`flex flex-col gap-4 transition-all duration-300 ${state.videoActive ? 'opacity-100' : 'opacity-30 pointer-events-none grayscale'}`}>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-mono text-[9px] tracking-widest uppercase text-white/30 mb-2 block font-bold">Durée</label>
              <div className="flex gap-1">
                {['5s', '10s'].map(d => (
                  <button
                    key={d}
                    onClick={() => setState(prev => ({ ...prev, videoParams: { ...prev.videoParams, duration: d as any } }))}
                    className={`flex-1 font-bebas text-[12px] py-1.5 rounded border transition-all ${state.videoParams.duration === d ? 'border-[#E8712A] bg-[#E8712A]/10 text-[#E8712A]' : 'border-white/10 bg-white/5 text-white/20'}`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="font-mono text-[9px] tracking-widest uppercase text-white/30 mb-2 block font-bold">Intensité ({state.videoParams.intensity})</label>
              <div className="pt-1">
                <input 
                  type="range" min="1" max="10" 
                  value={state.videoParams.intensity}
                  onChange={e => setState(prev => ({ ...prev, videoParams: { ...prev.videoParams, intensity: parseInt(e.target.value) } }))}
                  className="w-full h-1 bg-white/5 rounded-lg appearance-none cursor-pointer accent-[#E8712A]"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-mono text-[9px] tracking-widest uppercase text-white/30 mb-2 block font-bold">Angle</label>
              <select 
                className="bg-white/5 border border-white/10 text-white text-[11px] px-2 py-1.5 rounded outline-none w-full focus:border-white/20 transition-all font-mono"
                value={state.videoParams.angle}
                onChange={e => setState(prev => ({ ...prev, videoParams: { ...prev.videoParams, angle: e.target.value as any } }))}
              >
                <option value="eye-level" className="bg-[#0a0a0a]">Niveau Yeux</option>
                <option value="low-angle" className="bg-[#0a0a0a]">Contre-plongée</option>
                <option value="high-angle" className="bg-[#0a0a0a]">Plongée</option>
              </select>
            </div>
            <div>
              <label className="font-mono text-[9px] tracking-widest uppercase text-white/30 mb-2 block font-bold">Éclairage</label>
              <select 
                className="bg-white/5 border border-white/10 text-white text-[11px] px-2 py-1.5 rounded outline-none w-full focus:border-white/20 transition-all font-mono"
                value={state.videoParams.lighting}
                onChange={e => setState(prev => ({ ...prev, videoParams: { ...prev.videoParams, lighting: e.target.value as any } }))}
              >
                <option value="soft" className="bg-[#0a0a0a]">Doux</option>
                <option value="dramatic" className="bg-[#0a0a0a]">Dramatique</option>
                <option value="neon" className="bg-[#0a0a0a]">Néon</option>
                <option value="natural" className="bg-[#0a0a0a]">Naturel</option>
              </select>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      <CollapsibleSection 
        title="Studio & Génération" 
        icon={<Palette size={12} />} 
        isOpen={activeSection === 'studio'} 
        onToggle={() => toggleSection('studio')}
        tooltip="Configuration du décor et du mode de sortie"
      >
        <div className="flex flex-col gap-4">
          <div>
            <label className="font-mono text-[9px] tracking-widest uppercase text-white/30 mb-1.5 block">Mode de génération</label>
            <div className="grid grid-cols-2 gap-1.5">
              {['studio', 'artiste', 'ensemble', 'multishot'].map(m => (
                <button
                  key={m}
                  onClick={() => setMode(m as GenerationMode)}
                  className={`border rounded-md p-2 text-center transition-all ${state.mode === m ? 'border-[#E8712A] bg-[#E8712A]/10' : 'border-white/10 bg-white/5 hover:border-white/20'}`}
                >
                  <div className={`font-bebas text-[11px] tracking-widest leading-none ${m === 'multishot' ? 'text-[#9a6adc]' : 'text-white'}`}>
                    {m.toUpperCase()}
                  </div>
                  <div className="font-mono text-[7px] text-white/30 mt-1 uppercase tracking-tighter">
                    {m === 'studio' ? 'Décor seul' : m === 'artiste' ? '3 plans' : m === 'ensemble' ? 'Studio+Artiste' : '3 plans coord.'}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="font-mono text-[9px] tracking-widest uppercase text-white/30 mb-2 block">Couleur studio</label>
            <div className="grid grid-cols-4 gap-2">
              {COLORS.map(c => (
                <button
                  key={c.hex}
                  onClick={() => setColor(c)}
                  className={`h-8 rounded-md border-2 transition-all relative group ${state.color.hex === c.hex ? 'border-[#E8712A] scale-105' : 'border-transparent hover:scale-105'}`}
                  style={{ background: c.hex }}
                  title={c.name}
                >
                  <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 font-mono text-[6px] text-white pointer-events-none bg-black/60 rounded-sm font-bold uppercase tracking-tighter">
                    {c.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="font-mono text-[9px] tracking-widest uppercase text-white/30 mb-2 block">Studio Slide / Style</label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'none', name: 'AUCUN', sub: 'Standard' },
                { id: 'epic', name: 'EPIC', sub: 'Grandiose' },
                { id: 'film', name: 'FILM', sub: 'Cinematic' },
                { id: 'soundtrack', name: 'BO MUSIQUE', sub: 'OST Style' }
              ].map(s => (
                <button
                  key={s.id}
                  onClick={() => setState(prev => ({ ...prev, studioStyle: s.id as any }))}
                  className={`border rounded-md p-2 text-center transition-all ${state.studioStyle === s.id ? 'border-[#E8712A] bg-[#E8712A]/10 text-[#E8712A]' : 'border-white/10 bg-white/5 hover:border-white/20 text-white/40'}`}
                >
                  <div className="font-bebas text-[11px] tracking-widest leading-none">{s.name}</div>
                  <div className="font-mono text-[7px] mt-1 uppercase tracking-tighter opacity-70">{s.sub}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="border border-white/10 rounded-lg overflow-hidden">
            <div className="px-2.5 py-1.5 bg-white/5 border-b border-white/10 flex items-center justify-between">
              <span className="font-mono text-[8px] tracking-widest uppercase text-white/30">Référence Artiste</span>
              <button 
                onClick={() => setState(prev => ({ ...prev, styleRefActive: !prev.styleRefActive }))}
                className={`font-bebas text-[11px] tracking-widest px-2 py-0.5 rounded-sm transition-all ${state.styleRefActive ? 'bg-[#E8712A]/10 border border-[#E8712A]/30 text-[#E8712A]' : 'bg-white/5 border border-white/10 text-white/20'}`}
              >
                {state.styleRefActive ? 'ACTIF ✓' : 'INACTIF'}
              </button>
            </div>
            {state.styleRefActive && (
              <div className="p-2 flex flex-col gap-2">
                <div className="flex flex-wrap gap-1">
                  {ARTIST_STYLES.filter(s => s.gender === state.sex).map(s => (
                    <button
                      key={s.name}
                      onClick={() => setState(prev => ({ ...prev, styleRefSelected: prev.styleRefSelected === s.name ? null : s.name }))}
                      className={`font-mono text-[7px] px-2 py-1 rounded-sm border transition-all ${state.styleRefSelected === s.name ? 'border-[#E8712A] text-[#E8712A] bg-[#E8712A]/10' : 'border-white/10 text-white/40 bg-white/5 hover:border-white/20 hover:text-white'}`}
                    >
                      {s.name}
                    </button>
                  ))}
                </div>
                <div className="bg-black/20 border border-white/5 rounded-sm p-2 font-mono text-[7px] leading-tight text-white/40 min-h-[32px]">
                  {state.styleRefSelected ? ARTIST_STYLES.find(s => s.name === state.styleRefSelected)?.prompt : '— Sélectionne un artiste référence'}
                </div>
              </div>
            )}
          </div>
        </div>
      </CollapsibleSection>

      <CollapsibleSection 
        title="Moteur IA" 
        icon={<Cpu size={12} />} 
        isOpen={activeSection === 'engine'} 
        onToggle={() => toggleSection('engine')}
        tooltip="Choix du modèle de langage pour la génération"
      >
        <div className="border border-white/10 rounded-lg overflow-hidden">
          <div className="px-3 py-1.5 bg-white/5 border-b border-white/10 flex items-center justify-between">
            <span className="font-mono text-[9px] tracking-widest uppercase text-white/30 font-bold">MODÈLE ACTIF</span>
            <span className="font-mono text-[9px] tracking-widest font-bold uppercase" style={{ color: state.model === 'flash' ? '#3a9a7a' : '#8a4aaa' }}>
              {state.model === 'flash' ? 'Haiku 4.5' : 'Sonnet 4.6'}
            </span>
          </div>
          <div className="flex">
            <button 
              onClick={() => setModel('flash')}
              className={`flex-1 border-r border-white/10 p-2.5 cursor-pointer transition-all flex flex-col items-center gap-1.5 ${state.model === 'flash' ? 'bg-[#3a9a7a]/10 border-b-2 border-b-[#3a9a7a]' : 'bg-white/5 hover:bg-white/10'}`}
            >
              <div className="w-2 h-2 rounded-full bg-[#3a9a7a]" />
              <div className="font-bebas text-[12px] tracking-widest leading-none text-[#3a9a7a]">HAIKU</div>
              <div className="font-mono text-[7px] text-white/30 uppercase tracking-tighter font-bold">Rapide</div>
            </button>
            <button 
              onClick={() => setModel('pro')}
              className={`flex-1 p-2.5 cursor-pointer transition-all flex flex-col items-center gap-1.5 ${state.model === 'pro' ? 'bg-[#8a4aaa]/10 border-b-2 border-b-[#8a4aaa]' : 'bg-white/5 hover:bg-white/10'}`}
            >
              <div className="w-2 h-2 rounded-full bg-[#8a4aaa]" />
              <div className="font-bebas text-[12px] tracking-widest leading-none text-[#8a4aaa]">SONNET</div>
              <div className="font-mono text-[7px] text-white/30 uppercase tracking-tighter font-bold">Défaut</div>
            </button>
          </div>
        </div>
      </CollapsibleSection>
    </div>
  );
};
