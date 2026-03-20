import React, { useState } from 'react';
import { Tooltip } from './Tooltip';

interface Props {
  id: string;
  hdrColor: string;
  iaLabel: string;
  params: string[];
  negText?: string;
  promptText: string;
  openUrl?: string;
}

export const PromptBlock: React.FC<Props> = ({ id, hdrColor, iaLabel, params, negText, promptText, openUrl }) => {
  const [copied, setCopied] = useState(false);
  const [showFull, setShowFull] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(promptText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  const trimPrompt = (txt: string, maxLen: number) => {
    if (txt.length <= maxLen) return txt;
    return txt.substring(0, maxLen) + '…';
  };

  const displayedText = showFull ? promptText : trimPrompt(promptText, 1800);

  const getTooltipText = (param: string) => {
    const dict: Record<string, string> = {
      '16:9': 'Format cinéma large',
      '9:16': 'Format vertical mobile',
      '4:3': 'Format classique photo',
      '1:1': 'Format carré réseaux',
      'Guidance 7.5': 'Équilibre entre créativité et fidélité au prompt',
      'vivid': 'Couleurs saturées et contrastées',
      'Slow motion': 'Ralenti fluide pour un effet dramatique',
      'Audio-driven': 'Synchronisation basée sur le rythme sonore',
      'Beat sync': 'Calage précis sur les temps forts',
      'Cinematic': 'Rendu visuel type long-métrage',
      'Static camera': 'Caméra fixe sans mouvement',
      '24fps': 'Fréquence d\'images standard cinéma',
      'Coherent': 'Maintien de la cohérence visuelle entre les plans',
      'Photorealistic': 'Rendu ultra-réaliste type photographie'
    };
    return dict[param] || `Paramètre technique: ${param}`;
  };

  return (
    <div className="border border-[#242420] rounded-xl overflow-hidden mb-6 bg-[#0d0d0b] shadow-2xl shadow-black/40 transition-all hover:border-[#3a3a35] group/block relative">
      {/* Decorative hardware corner */}
      <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none opacity-20">
        <div className="absolute top-2 right-2 w-1 h-1 bg-[#E8712A] rounded-full" />
        <div className="absolute top-2 right-4 w-1 h-1 bg-[#444] rounded-full" />
      </div>

      <div className="flex items-center justify-between flex-wrap gap-3 px-5 py-3 bg-[#141411] border-b border-[#242420] relative overflow-hidden">
        {/* Subtle scanline effect on header */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
        
        <div className="flex items-center gap-3 relative z-10">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-0.5">
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 animate-pulse" style={{ background: hdrColor, boxShadow: `0 0 10px ${hdrColor}` }} />
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase font-black" style={{ color: hdrColor }}>{iaLabel}</span>
            </div>
            <div className="font-mono text-[7px] text-[#444] tracking-[0.1em] uppercase font-bold">ENGINE_CORE_v4.2 // ACTIVE</div>
          </div>
        </div>

        <div className="flex gap-1.5 flex-wrap items-center relative z-10">
          {params.map((p, i) => (
            <Tooltip key={i} text={getTooltipText(p)}>
              <div className="bg-[#1a1a14] border border-[#242420] rounded-sm px-2 py-0.5 font-mono text-[8px] tracking-widest text-[#888880] font-bold uppercase cursor-help hover:text-[#e8e4dc] hover:border-[#444] transition-colors">
                {p}
              </div>
            </Tooltip>
          ))}
          {negText && (
            <Tooltip text="Éléments à exclure de la génération">
              <div className="bg-[#1a0a0a] border border-[#2e1a1a] rounded-sm px-2 py-0.5 font-mono text-[8px] tracking-widest text-[#c44a4a] font-bold uppercase cursor-help hover:bg-[#2a0a0a] transition-colors">
                NEG: {negText}
              </div>
            </Tooltip>
          )}
        </div>
      </div>
      
      <div className="bg-[#090907] p-6 font-mono text-[13px] leading-relaxed text-[#e8e4dc] whitespace-pre-wrap max-h-[400px] overflow-y-auto selection:bg-[#E8712A] selection:text-black relative group/text">
        {/* Text area decorative elements */}
        <div className="absolute top-2 left-2 w-1 h-4 bg-[#242420] opacity-30" />
        <div className="absolute top-2 left-2 w-4 h-1 bg-[#242420] opacity-30" />
        
        <div className="relative z-10">
          {displayedText}
        </div>
      </div>
      
      <div className="flex items-center justify-between px-5 py-3 bg-[#141411] border-t border-[#242420]">
        <div className="flex items-center gap-3">
          <button 
            onClick={handleCopy}
            className={`font-bebas text-[13px] tracking-[0.2em] px-5 py-2 rounded-md transition-all border flex items-center gap-2.5 group/btn ${
              copied 
                ? 'bg-[#17200f] border-[#2a4a1a] text-[#5a9a3a] shadow-[0_0_15px_rgba(42,74,26,0.2)]' 
                : 'bg-[#1a1a14] border-[#242420] text-[#e8e4dc] hover:bg-[#E8712A] hover:text-black hover:border-[#E8712A] shadow-lg'
            }`}
          >
            {copied ? (
              <>
                <span className="w-1.5 h-1.5 rounded-full bg-[#5a9a3a] animate-ping" />
                COPIÉ
              </>
            ) : (
              <>
                <svg className="w-3 h-3 opacity-50 group-hover/btn:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                COPIER LE PROMPT
              </>
            )}
          </button>
          
          {openUrl && (
            <a 
              href={openUrl} 
              target="_blank" 
              rel="noreferrer"
              className="bg-[#1a1a14] border border-[#242420] text-[#e8e4dc] hover:bg-[#242420] hover:border-[#444] px-4 py-2 rounded-md transition-all font-bebas text-[13px] tracking-[0.2em] flex items-center gap-2"
            >
              OUVRIR ↗
            </a>
          )}
        </div>

        <div className="flex items-center gap-5">
          <div className="flex flex-col items-end">
            <div className={`font-mono text-[10px] font-black tracking-tighter ${promptText.length > 1800 ? 'text-[#c44a4a]' : 'text-[#555]'}`}>
              {promptText.length} / 1800
            </div>
            <div className="font-mono text-[6px] text-[#333] tracking-[0.2em] uppercase font-bold">CHARACTER_COUNT</div>
          </div>
          
          {promptText.length > 1800 && (
            <button 
              onClick={() => setShowFull(!showFull)}
              className={`font-bebas text-[13px] tracking-[0.2em] px-4 py-2 rounded-md transition-all border ${
                showFull 
                  ? 'bg-[#17120a] border-[#E8712A] text-[#E8712A] shadow-[0_0_15px_rgba(232,113,42,0.1)]' 
                  : 'bg-[#1a1a14] border-[#242420] text-[#e8e4dc] hover:border-[#444]'
              }`}
            >
              {showFull ? 'RÉDUIRE ▲' : 'VOIR TOUT ↓'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
