import React from 'react';
import { SessionState } from '../types';
import { PLANS } from '../constants';
import { Maximize, User, UserCheck, UserPlus, Camera, MoveHorizontal, ZoomIn, ZoomOut, StopCircle } from 'lucide-react';

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

const PLAN_ICONS: Record<string, React.ReactNode> = {
  'none': <Camera size={12} />,
  'plan-entier': <Maximize size={12} />,
  'plan-americain': <User size={12} />,
  'plan-buste': <UserCheck size={12} />,
  'plan-portrait': <UserPlus size={12} />,
};

const MOTION_ICONS: Record<string, React.ReactNode> = {
  'static': <StopCircle size={12} />,
  'trucklr': <MoveHorizontal size={12} />,
  'zoomin': <ZoomIn size={12} />,
  'zoomout': <ZoomOut size={12} />,
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
  const upperLipY = headCy + 8; // Precise upper lip level
  const mouthY = headCy + 11; // Lower mouth
  const neckTop = headCy + 26;
  const torsoTop = neckTop + 12;
  const torsoH = Math.round(totalH * 0.32);
  const legTop = torsoTop + torsoH;
  const legH = FLOOR - legTop;
  const shoeY = FLOOR + 6;

  const micBodyBottom = upperLipY; // Capsule at upper lip
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
          <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
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
              
              {/* Alignment Guide (Subtle) */}
              <g opacity="0.4">
                <line 
                  x1="160" y1={upperLipY} x2="192" y2={upperLipY} 
                  stroke="#10B981" strokeWidth="0.2" strokeDasharray="1,1" 
                />
                <text 
                  x="195" y={upperLipY + 1} 
                  fontFamily="monospace" fontSize="3" fill="#10B981" 
                  className="uppercase tracking-tighter"
                >
                  Align: Upper Lip
                </text>
              </g>
              
              {/* HUD Elements */}
              <g opacity="0.4">
                <path d="M 10 10 L 30 10 M 10 10 L 10 30" stroke="white" strokeWidth="0.5" fill="none" />
                <path d="M 446 10 L 426 10 M 446 10 L 446 30" stroke="white" strokeWidth="0.5" fill="none" />
                <path d="M 10 246 L 30 246 M 10 246 L 10 226" stroke="white" strokeWidth="0.5" fill="none" />
                <path d="M 446 246 L 426 246 M 446 246 L 446 226" stroke="white" strokeWidth="0.5" fill="none" />
                
                <line x1="228" y1="123" x2="228" y2="133" stroke="white" strokeWidth="0.5" />
                <line x1="223" y1="128" x2="233" y2="128" stroke="white" strokeWidth="0.5" />
              </g>

              <rect x="8" y="226" width="36" height="22" rx="1.5" fill={light ? '#1a1a1a' : '#ffffff'} fillOpacity={light ? '.85' : '.95'} />
              <text x="11" y="234" fontFamily="monospace" fontSize="6" fontWeight="bold" fill={light ? '#fff' : '#0a0a0a'}>AI</text>
              <text x="11" y="241" fontFamily="monospace" fontSize="5" fill={light ? '#bbb' : '#333'}>COL</text>
              <text x="11" y="247" fontFamily="monospace" fontSize="4.5" fill={light ? '#888' : '#555'}>ORS</text>
            </g>
          </g>
        </svg>
        
        <div className="absolute top-3 right-3 flex flex-col items-end gap-1 pointer-events-none">
          <div className="bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 font-mono text-[7px] text-[#10B981] font-bold tracking-widest">
            {PLAN_LABELS[state.selectedPlan] || 'MICRO PLAFOND'}
          </div>
          <div className="bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 font-mono text-[7px] text-[#4a7aaa] font-bold tracking-widest">
            {MOT_LABELS[state.motion] || '● STATIQUE'}
          </div>
        </div>
      </div>

      <div className="p-3 bg-[#0d0d0b] flex flex-col gap-4">
        <div>
          <label className="font-mono text-[8px] tracking-widest uppercase text-[#484840] mb-3 block font-bold">Cadrage & Optique</label>
          <div className="grid grid-cols-5 gap-2">
            {['none', 'plan-entier', 'plan-americain', 'plan-buste', 'plan-portrait'].map(pId => (
              <button
                key={pId}
                onClick={() => onPlanChange(pId)}
                className={`relative group border rounded-xl p-2 transition-all flex flex-col items-center justify-center gap-2 overflow-hidden ${
                  state.selectedPlan === pId 
                    ? 'border-[#10B981] bg-[#17120a] shadow-[0_0_15px_rgba(16,185,129,0.2)]' 
                    : 'border-[#242420] bg-[#141411] hover:border-[#333] grayscale opacity-50 hover:opacity-100 hover:grayscale-0'
                }`}
              >
                <div className={`p-2 rounded-lg transition-colors ${
                  state.selectedPlan === pId ? 'bg-[#10B981]/20 text-[#10B981]' : 'bg-white/5 text-white/40'
                }`}>
                  {PLAN_ICONS[pId]}
                </div>
                
                <div className="flex flex-col items-center">
                  <div className={`font-bebas text-[10px] tracking-widest leading-none mb-1 ${
                    state.selectedPlan === pId ? 'text-[#10B981]' : 'text-[#e8e4dc]'
                  }`}>
                    {pId === 'none' ? 'AUTO' : pId.split('-')[1].toUpperCase().substring(0, 3)}
                  </div>
                  <div className="font-mono text-[6px] text-[#666660] uppercase tracking-tighter font-bold">
                    {pId === 'none' ? 'FIXED' : PLANS.find(p => p.id === pId)?.focal}
                  </div>
                </div>

                {state.selectedPlan === pId && (
                  <div className="absolute top-0 right-0 w-4 h-4 bg-[#10B981] flex items-center justify-center rounded-bl-lg">
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="font-mono text-[8px] tracking-widest uppercase text-[#484840] mb-3 block font-bold">Mouvement Caméra</label>
          <div className="grid grid-cols-4 gap-2">
            {['static', 'trucklr', 'zoomin', 'zoomout'].map(mId => (
              <button
                key={mId}
                onClick={() => onMotionChange(mId)}
                className={`relative group border rounded-xl p-2 transition-all flex flex-col items-center justify-center gap-2 overflow-hidden ${
                  state.motion === mId 
                    ? 'border-[#4a7aaa] bg-[#0a0f1a] shadow-[0_0_15px_rgba(74,122,170,0.2)]' 
                    : 'border-[#242420] bg-[#141411] hover:border-[#333] grayscale opacity-50 hover:opacity-100 hover:grayscale-0'
                }`}
              >
                <div className={`p-2 rounded-lg transition-colors ${
                  state.motion === mId ? 'bg-[#4a7aaa]/20 text-[#6a9adc]' : 'bg-white/5 text-white/40'
                }`}>
                  {MOTION_ICONS[mId]}
                </div>

                <div className="flex flex-col items-center">
                  <div className={`font-bebas text-[10px] tracking-widest leading-none mb-1 ${
                    state.motion === mId ? 'text-[#6a9adc]' : 'text-[#e8e4dc]'
                  }`}>
                    {mId === 'static' ? 'FIXE' : mId === 'trucklr' ? 'TRAV' : mId === 'zoomin' ? 'ZOOM' : 'ZOOM'}
                  </div>
                  <div className="font-mono text-[6px] text-[#666660] uppercase tracking-tighter font-bold">
                    {mId === 'static' ? 'STAT' : mId === 'trucklr' ? 'L-R' : mId === 'zoomin' ? 'IN' : 'OUT'}
                  </div>
                </div>

                {state.motion === mId && (
                  <div className="absolute top-0 right-0 w-4 h-4 bg-[#4a7aaa] flex items-center justify-center rounded-bl-lg">
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

