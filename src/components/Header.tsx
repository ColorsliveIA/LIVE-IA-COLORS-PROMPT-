import React from 'react';

export const Header: React.FC = () => {
  return (
    <div className="flex items-stretch border-b border-[#242420] h-[54px] bg-[#0d0d0b]">
      <div className="px-[18px] border-r border-[#242420] flex flex-col justify-center gap-0.5 flex-shrink-0">
        <div className="font-bebas text-[30px] tracking-[8px] leading-none text-[#e8e4dc]">COLORS</div>
        <div className="font-mono text-[7px] tracking-[3px] text-[#484840] uppercase">IA Studio Agent · v16 · Final</div>
      </div>
      <div className="flex-1 flex items-center px-[14px] gap-2 border-r border-[#242420] overflow-hidden">
        <div className="rounded-sm px-2 py-1 font-mono text-[8px] tracking-widest border border-[#3a2a00] bg-[#1e1600] text-[#c4a030] whitespace-nowrap uppercase font-bold">NANO BANANA · Image</div>
        <div className="rounded-sm px-2 py-1 font-mono text-[8px] tracking-widest border border-[#1a2a3a] bg-[#0a0f1a] text-[#4a7aaa] whitespace-nowrap uppercase font-bold">CHAT GPT · Image</div>
        <div className="rounded-sm px-2 py-1 font-mono text-[8px] tracking-widest border border-[#3a2010] bg-[#1a0e08] text-[#E8712A] whitespace-nowrap uppercase font-bold">KLING 3.0 · Img→Vid</div>
        <div className="rounded-sm px-2 py-1 font-mono text-[8px] tracking-widest border border-[#2e1a3a] bg-[#150610] text-[#8c4a7c] whitespace-nowrap uppercase font-bold">VIDMUSE · Audio→Vid</div>
        <div className="rounded-sm px-2 py-1 font-mono text-[8px] tracking-widest border border-[#1a3020] bg-[#0a1410] text-[#3d8c52] whitespace-nowrap uppercase font-bold">HIGGSFIELD · Ciné</div>
        <div className="rounded-sm px-2 py-1 font-mono text-[8px] tracking-widest border border-[#1a2a2a] bg-[#0a1414] text-[#2a7a9a] whitespace-nowrap uppercase font-bold">VID · Vidéo</div>
      </div>
      <div className="px-3 flex items-center gap-1.5">
        <a className="rounded-sm px-2.5 py-1.5 font-mono text-[8px] tracking-widest cursor-pointer border border-[#3a2a00] bg-[#1e1600] text-[#c4a030] hover:opacity-70 transition-opacity font-bold" href="https://nanobanana.ai" target="_blank" rel="noreferrer">NB ↗</a>
        <a className="rounded-sm px-2.5 py-1.5 font-mono text-[8px] tracking-widest cursor-pointer border border-[#1a2a3a] bg-[#0a0f1a] text-[#4a7aaa] hover:opacity-70 transition-opacity font-bold" href="https://chatgpt.com" target="_blank" rel="noreferrer">GPT ↗</a>
        <a className="rounded-sm px-2.5 py-1.5 font-mono text-[8px] tracking-widest cursor-pointer border border-[#3a2010] bg-[#1a0e08] text-[#E8712A] hover:opacity-70 transition-opacity font-bold" href="https://klingai.com" target="_blank" rel="noreferrer">KLING ↗</a>
      </div>
    </div>
  );
};
