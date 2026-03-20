import React from 'react';
import { LayoutGrid } from 'lucide-react';

interface HeaderProps {
  onMenuClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <div className="flex items-stretch border-b border-white/5 h-[64px] bg-[#0a0a0a] relative overflow-hidden">
      {/* Scanline effect for header */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%]" />
      
      <div className="px-6 border-r border-white/5 flex items-center gap-6 flex-shrink-0 relative z-20">
        <button 
          onClick={onMenuClick}
          className="p-2.5 rounded-lg hover:bg-white/5 transition-all text-white/20 hover:text-[#E8712A] border border-transparent hover:border-white/10 group"
          title="Menu Principal"
        >
          <LayoutGrid size={20} />
        </button>
        <div className="flex flex-col justify-center gap-0.5">
          <div className="font-bebas text-[32px] tracking-[0.2em] leading-none text-white">COLORS</div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#34D399] shadow-[0_0_8px_#34D399] animate-pulse" />
            <div className="font-mono text-[8px] tracking-[0.2em] text-white/30 uppercase font-bold">SYSTEM_ONLINE · v16.4.0</div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center px-6 gap-3 border-r border-white/5 overflow-x-auto no-scrollbar relative z-20">
        <div className="rounded-md px-3 py-1.5 font-mono text-[9px] tracking-widest border border-white/5 bg-white/[0.02] text-white/40 whitespace-nowrap uppercase font-bold flex items-center gap-2">
          <div className="w-1 h-1 rounded-full bg-white/20" />
          NANO BANANA
        </div>
        <div className="rounded-md px-3 py-1.5 font-mono text-[9px] tracking-widest border border-white/5 bg-white/[0.02] text-white/40 whitespace-nowrap uppercase font-bold flex items-center gap-2">
          <div className="w-1 h-1 rounded-full bg-white/20" />
          CHAT GPT
        </div>
        <div className="rounded-md px-3 py-1.5 font-mono text-[9px] tracking-widest border border-[#E8712A]/20 bg-[#E8712A]/5 text-[#E8712A] whitespace-nowrap uppercase font-bold flex items-center gap-2">
          <div className="w-1 h-1 rounded-full bg-[#E8712A] shadow-[0_0_4px_#E8712A]" />
          KLING 3.0
        </div>
        <div className="rounded-md px-3 py-1.5 font-mono text-[9px] tracking-widest border border-white/5 bg-white/[0.02] text-white/40 whitespace-nowrap uppercase font-bold flex items-center gap-2">
          <div className="w-1 h-1 rounded-full bg-white/20" />
          VIDMUSE
        </div>
        <div className="rounded-md px-3 py-1.5 font-mono text-[9px] tracking-widest border border-white/5 bg-white/[0.02] text-white/40 whitespace-nowrap uppercase font-bold flex items-center gap-2">
          <div className="w-1 h-1 rounded-full bg-white/20" />
          HIGGSFIELD
        </div>
      </div>

      <div className="px-6 flex items-center gap-2 relative z-20">
        <a className="rounded-md px-3 py-2 font-mono text-[9px] tracking-widest cursor-pointer border border-white/10 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-all font-bold uppercase" href="https://nanobanana.ai" target="_blank" rel="noreferrer">NB_LINK</a>
        <a className="rounded-md px-3 py-2 font-mono text-[9px] tracking-widest cursor-pointer border border-white/10 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-all font-bold uppercase" href="https://chatgpt.com" target="_blank" rel="noreferrer">GPT_LINK</a>
        <a className="rounded-md px-3 py-2 font-mono text-[9px] tracking-widest cursor-pointer border border-[#E8712A]/30 bg-[#E8712A]/10 text-[#E8712A] hover:bg-[#E8712A]/20 transition-all font-bold uppercase" href="https://klingai.com" target="_blank" rel="noreferrer">KLING_LINK</a>
      </div>
    </div>
  );
};
