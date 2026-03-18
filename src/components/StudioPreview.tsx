import React from 'react';
import { SessionState } from '../types';
import { PLANS } from '../constants';

interface Props {
  state: SessionState;
  onPlanChange: (planId: string) => void;
  onMotionChange: (motion: any) => void;
}

const PLAN_VIEWS: Record<string, [number, number, number, number]> = {
  'none': [0, 0, 456, 256],
  'plan-entier': [30, 10, 400, 236],
  'plan-americain': [60, 30, 310, 196],
  'plan-buste': [120, 20, 220, 160],
  'plan-portrait': [155, 10, 180, 240],
};

const PLAN_LABELS: Record<string, string> = {
  'none': 'MICRO PLAFOND',
  'plan-entier': 'PLAN ENTIER · 50mm',
  'plan-americain': 'PLAN AMÉRICAIN · 85mm',
  'plan-buste': 'PLAN BUSTE · 85mm',
  'plan-portrait': 'PORTRAIT · 85mm · 3:4',
};

const MOT_LABELS: Record<string, string> = {
  none: '○ AUCUN MOTION',
  static: '● STATIQUE',
  trucklr: '↔ G → D',
  zoomin: '⊕ ZOOM +',
  zoomout: '⊖ ZOOM −',
};

export const StudioPreview: React.FC<Props> = ({ state, onPlanChange, onMotionChange }) => {
  const isLight = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return (r * 299 + g * 587 + b * 114) / 1000 > 140;
  };

  const light = isLight(state.color.hex);
  const vb = PLAN_VIEWS[state.selectedPlan] || PLAN_VIEWS['none'];

  // Artist scale calculations
  const FLOOR = 200;
  const PX_PER_CM = (FLOOR - 74) / 170;
  const totalH = Math.round(state.height * PX_PER_CM);
  const headTop = FLOOR - totalH;
  const headCy = headTop + 26;
  const mouthY = headCy + 10;
  const neckTop = headCy + 26;
  const torsoTop = neckTop + 12;
  const torsoH = Math.round(totalH * 0.32);
  const legTop = torsoTop + torsoH;
  const legH = FLOOR - legTop;
  const shoeY = FLOOR + 6;

  const micBodyBottom = mouthY;
  const micBodyTop = micBodyBottom - 32;
  const micConnTop = micBodyTop - 8;

  const iemStart = neckTop + 4;
  const iemPath = `M 305 ${iemStart} Q 290 ${iemStart + 28} 288 ${iemStart + 50}`;

  const motionClass = state.motion === 'trucklr' ? 'animate-truck' : 
                      state.motion === 'zoomin' ? 'animate-zoomin' : 
                      state.motion === 'zoomout' ? 'animate-zoomout' : '';

  return (
    <div className="border border-[#242420] rounded-xl overflow-hidden bg-[#0d0d0b] shadow-2xl shadow-black/50">
      <div className="flex items-center justify-between px-3 py-2 bg-[#141411] border-b border-[#242420]">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#E8712A] animate-pulse" />
          <span className="font-mono text-[9px] tracking-widest text-[#e8e4dc] uppercase font-bold">
            LIVE PREVIEW
          </span>
        </div>
        <span className="font-mono text-[8px] text-[#888880] uppercase tracking-tighter">
          {state.color.name} · {state.height}cm
        </span>
      </div>

      <div className="p-1 bg-[#0a0a0a] relative group">
        <svg 
          viewBox={vb.join(' ')} 
          className="w-full rounded-lg block transition-all duration-700 ease-in-out shadow-inner"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="vign" cx="55%" cy="50%" r="70%">
              <stop offset="0%" stopColor={light ? state.color.hex : state.color.n2} stopOpacity={light ? '0' : '0.7'} />
              <stop offset="60%" stopColor={light ? '#0a0a0a' : state.color.n1} stopOpacity={light ? '0.55' : '1'} />
              <stop offset="100%" stopColor="#000000" stopOpacity={light ? '0.85' : '1'} />
            </radialGradient>
            <clipPath id="pv-clip"><rect width="456" height="256" /></clipPath>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          <rect width="456" height="256" fill={state.color.hex} />
          
          <g className={motionClass} clipPath="url(#pv-clip)" style={{ transformOrigin: '228px 128px' }}>
            <g>
              <rect width="456" height="256" fill="url(#vign)" />
              <rect x="0" y="200" width="456" height="56" fill={state.color.n1} opacity={light ? '.3' : '.5'} />
              
              {/* Floor reflection */}
              <ellipse cx="310" cy="205" rx="40" ry="10" fill="black" opacity="0.2" />
              
              <line x1="176" y1="0" x2="176" y2={micBodyTop} stroke={light ? '#111' : '#444'} strokeWidth="2" />
              <rect x="169" y={micBodyTop} width="14" height="32" rx="7" fill={light ? '#666' : '#c0c0c0'} />
              <rect x="167" y={micConnTop} width="18" height="8" rx="2" fill={light ? '#555' : '#aaa'} />
              
              <ellipse cx="310" cy={headCy} rx="22" ry="26" fill={light ? '#7a4010' : '#c8945a'} opacity={light ? '.75' : '.55'} />
              <rect x="304" y={neckTop} width="12" height="12" fill={light ? '#b07840' : '#b07840'} opacity=".7" />
              <rect x="284" y={torsoTop} width="52" height={torsoH} rx="4" fill={light ? '#1a0e04' : '#2a1a0a'} opacity={light ? '.7' : '.5'} />
              <rect x="264" y={torsoTop + 2} width="20" height={Math.max(10, torsoH - 4)} rx="6" fill={light ? '#1a0e04' : '#2a1a0a'} opacity=".6" />
              <rect x="336" y={torsoTop + 2} width="20" height={Math.max(10, torsoH - 4)} rx="6" fill={light ? '#1a0e04' : '#2a1a0a'} opacity=".6" />
              <rect x="287" y={legTop} width="20" height={Math.max(8, legH)} rx="4" fill="#1a0e04" opacity=".7" />
              <rect x="313" y={legTop} width="20" height={Math.max(8, legH)} rx="4" fill="#1a0e04" opacity=".7" />
              <ellipse cx="297" cy={shoeY} rx="16" ry="7" fill="#0a0604" opacity=".8" />
              <ellipse cx="323" cy={shoeY} rx="16" ry="7" fill="#0a0604" opacity=".8" />
              
              <path d={iemPath} stroke="#888" strokeWidth="1" fill="none" opacity=".4" />
              
              <rect x="8" y="226" width="36" height="22" rx="1.5" fill={light ? '#1a1a1a' : '#ffffff'} fillOpacity={light ? '.85' : '.95'} />
              <text x="11" y="234" fontFamily="monospace" fontSize="6" fontWeight="bold" fill={light ? '#fff' : '#0a0a0a'}>AI</text>
              <text x="11" y="241" fontFamily="monospace" fontSize="5" fill={light ? '#bbb' : '#333'}>COL</text>
              <text x="11" y="247" fontFamily="monospace" fontSize="4.5" fill={light ? '#888' : '#555'}>ORS</text>
            </g>
          </g>
        </svg>
        
        <div className="absolute top-3 right-3 flex flex-col items-end gap-1 pointer-events-none">
          <div className="bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 font-mono text-[7px] text-[#E8712A] font-bold tracking-widest">
            {PLAN_LABELS[state.selectedPlan] || 'MICRO PLAFOND'}
          </div>
          <div className="bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 font-mono text-[7px] text-[#4a7aaa] font-bold tracking-widest">
            {MOT_LABELS[state.motion] || '● STATIQUE'}
          </div>
        </div>
      </div>

      <div className="p-3 bg-[#0d0d0b] flex flex-col gap-3">
        <div>
          <label className="font-mono text-[8px] tracking-widest uppercase text-[#484840] mb-2 block font-bold">Cadrage & Optique</label>
          <div className="grid grid-cols-5 gap-1">
            {['none', 'plan-entier', 'plan-americain', 'plan-buste', 'plan-portrait'].map(pId => (
              <button
                key={pId}
                onClick={() => onPlanChange(pId)}
                className={`border rounded-md py-2 transition-all flex flex-col items-center justify-center gap-1 ${
                  state.selectedPlan === pId 
                    ? 'border-[#E8712A] bg-[#17120a] shadow-[0_0_10px_rgba(232,113,42,0.15)]' 
                    : 'border-[#242420] bg-[#141411] hover:border-[#333] grayscale opacity-60'
                }`}
              >
                <div className={`font-bebas text-[11px] tracking-widest leading-none ${
                  state.selectedPlan === pId ? 'text-[#E8712A]' : 'text-[#e8e4dc]'
                }`}>
                  {pId === 'none' ? '—' : pId.split('-')[1].toUpperCase().substring(0, 3)}
                </div>
                <div className="font-mono text-[6px] text-[#666660] uppercase tracking-tighter font-bold">
                  {pId === 'none' ? 'AUTO' : PLANS.find(p => p.id === pId)?.focal}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="font-mono text-[8px] tracking-widest uppercase text-[#484840] mb-2 block font-bold">Mouvement Caméra</label>
          <div className="grid grid-cols-4 gap-1">
            {['static', 'trucklr', 'zoomin', 'zoomout'].map(mId => (
              <button
                key={mId}
                onClick={() => onMotionChange(mId)}
                className={`border rounded-md py-2 transition-all flex flex-col items-center justify-center gap-1 ${
                  state.motion === mId 
                    ? 'border-[#4a7aaa] bg-[#0a0f1a] shadow-[0_0_10px_rgba(74,122,170,0.15)]' 
                    : 'border-[#242420] bg-[#141411] hover:border-[#333] grayscale opacity-60'
                }`}
              >
                <div className={`font-bebas text-[11px] tracking-widest leading-none ${
                  state.motion === mId ? 'text-[#6a9adc]' : 'text-[#e8e4dc]'
                }`}>
                  {mId === 'static' ? 'FIXE' : mId === 'trucklr' ? '↔' : mId === 'zoomin' ? '⊕' : '⊖'}
                </div>
                <div className="font-mono text-[6px] text-[#666660] uppercase tracking-tighter font-bold">
                  {mId === 'static' ? 'STAT' : mId === 'trucklr' ? 'TRAV' : mId === 'zoomin' ? 'IN' : 'OUT'}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
