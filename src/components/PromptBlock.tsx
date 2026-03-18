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
    <div className="border border-[#242420] rounded-xl overflow-hidden mb-4 bg-[#0d0d0b] shadow-lg shadow-black/20 transition-all hover:border-[#333]">
      <div className="flex items-center justify-between flex-wrap gap-2 px-4 py-2.5 bg-[#141411] border-b border-[#242420]">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: hdrColor, boxShadow: `0 0 8px ${hdrColor}` }} />
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase font-black" style={{ color: hdrColor }}>{iaLabel}</span>
        </div>
        <div className="flex gap-2 flex-wrap items-center">
          {params.map((p, i) => (
            <Tooltip key={i} text={getTooltipText(p)}>
              <div className="bg-[#1a1a14] border border-[#242420] rounded px-2 py-0.5 font-mono text-[8px] tracking-widest text-[#888880] font-bold uppercase cursor-help">
                {p}
              </div>
            </Tooltip>
          ))}
          {negText && (
            <Tooltip text="Éléments à exclure de la génération">
              <div className="bg-[#1a0a0a] border border-[#2e1a1a] rounded px-2 py-0.5 font-mono text-[8px] tracking-widest text-[#c44a4a] font-bold uppercase cursor-help">
                NEG: {negText}
              </div>
            </Tooltip>
          )}
        </div>
      </div>
      
      <div className="bg-[#090907] p-4 font-mono text-[12px] leading-relaxed text-[#e8e4dc] whitespace-pre-wrap max-h-[300px] overflow-y-auto selection:bg-[#E8712A] selection:text-black">
        {displayedText}
      </div>
      
      <div className="flex items-center justify-between px-4 py-2 bg-[#141411] border-t border-[#242420]">
        <div className="flex items-center gap-3">
          <button 
            onClick={handleCopy}
            className={`font-bebas text-[12px] tracking-[0.15em] px-4 py-1.5 rounded transition-all border flex items-center gap-2 ${
              copied 
                ? 'bg-[#17200f] border-[#2a4a1a] text-[#5a9a3a]' 
                : 'bg-[#1a1a14] border-[#242420] text-[#e8e4dc] hover:bg-[#242420] hover:border-[#444]'
            }`}
          >
            {copied ? 'COPIÉ ✓' : 'COPIER LE PROMPT'}
          </button>
          
          {openUrl && (
            <a 
              href={openUrl} 
              target="_blank" 
              rel="noreferrer"
              className="bg-[#1a1a14] border border-[#242420] text-[#e8e4dc] hover:bg-[#242420] hover:border-[#444] px-3 py-1.5 rounded transition-all font-bebas text-[12px] tracking-widest flex items-center gap-2"
            >
              OUVRIR ↗
            </a>
          )}
        </div>

        <div className="flex items-center gap-4">
          <span className={`font-mono text-[9px] font-bold tracking-tighter ${promptText.length > 1800 ? 'text-[#c44a4a]' : 'text-[#444]'}`}>
            {promptText.length} / 1800 CHARS
          </span>
          {promptText.length > 1800 && (
            <button 
              onClick={() => setShowFull(!showFull)}
              className={`font-bebas text-[12px] tracking-widest px-3 py-1.5 rounded transition-all border ${
                showFull 
                  ? 'bg-[#17120a] border-[#E8712A] text-[#E8712A]' 
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
