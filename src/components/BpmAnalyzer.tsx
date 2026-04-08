import React, { useState } from 'react';

interface Props {
  onBpmDetected: (bpm: number) => void;
}

export const BpmAnalyzer: React.FC<Props> = ({ onBpmDetected }) => {
  const [bpm, setBpm] = useState<number | null>(null);
  const [fileName, setFileName] = useState<string>('Aucun fichier');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const detectBPM = (buffer: AudioBuffer) => {
    const data = buffer.getChannelData(0);
    const sr = buffer.sampleRate;
    const maxSamples = Math.min(data.length, sr * 60);
    const winSize = Math.floor(sr * 0.02);
    const energies: number[] = [];
    
    for (let i = 0; i < maxSamples - winSize; i += winSize) {
      let sum = 0;
      for (let j = 0; j < winSize; j++) sum += data[i + j] ** 2;
      energies.push(sum / winSize);
    }
    
    const wf = 43;
    const peaks: number[] = [];
    for (let i = wf; i < energies.length - wf; i++) {
      const local = energies.slice(i - wf, i + wf);
      const avg = local.reduce((a, b) => a + b, 0) / local.length;
      if (energies[i] > avg * 1.4 && energies[i] > energies[i-1] && energies[i] > energies[i+1]) {
        peaks.push(i);
      }
    }
    
    if (peaks.length < 4) return 120;
    
    const intervals: number[] = [];
    for (let i = 1; i < Math.min(peaks.length, 100); i++) {
      const interval = (peaks[i] - peaks[i-1]) * winSize / sr;
      if (interval > 0.25 && interval < 2.0) intervals.push(interval);
    }
    
    if (!intervals.length) return 120;
    
    intervals.sort((a, b) => a - b);
    const median = intervals[Math.floor(intervals.length / 2)];
    let detected = Math.round(60 / median);
    if (detected < 60) detected *= 2;
    if (detected > 180) detected = Math.round(detected / 2);
    return Math.max(60, Math.min(200, detected));
  };

  const handleFile = async (file: File) => {
    if (!file || !file.type.startsWith('audio/')) return;
    
    setFileName(file.name);
    setIsAnalyzing(true);
    
    try {
      const arrayBuffer = await file.arrayBuffer();
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
      const detected = detectBPM(audioBuffer);
      setBpm(detected);
      onBpmDetected(detected);
      audioCtx.close();
    } catch (e) {
      console.error('BPM Analysis error:', e);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const bpmLabel = (b: number) => {
    if (b < 70) return 'Très lent · Ballad';
    if (b < 90) return 'Lent · Soul / R&B';
    if (b < 110) return 'Modéré · Hip-Hop';
    if (b < 125) return 'Medium · Afrobeats';
    if (b < 135) return 'Uptempo · Reggaeton';
    if (b < 150) return 'Rapide · House';
    return 'Très rapide · Drum & Bass';
  };

  return (
    <div className="border border-[#242420] rounded-xl overflow-hidden bg-[#0d0d0b] shadow-xl shadow-black/30 group/bpm">
      <div className="px-4 py-2 bg-[#141411] border-b border-[#242420] flex items-center justify-between relative overflow-hidden">
        {/* Subtle glow effect */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#10B981]/30 to-transparent" />
        
        <div className="flex items-center gap-2">
          <div className={`w-1 h-1 rounded-full ${isAnalyzing ? 'bg-[#10B981] animate-ping' : 'bg-[#444]'}`} />
          <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#888880] font-black">BPM_ANALYZER_v1</span>
        </div>
        <div className="font-bebas text-[18px] tracking-[0.1em] text-[#10B981] leading-none drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]">
          {isAnalyzing ? 'SCANNING' : bpm ? `${bpm} BPM` : 'IDLE'}
        </div>
      </div>
      
      <div className="p-4 flex flex-col gap-4">
        <label className="border border-dashed border-[#242420] rounded-lg p-4 text-center cursor-pointer hover:border-[#10B981] hover:bg-[#17120a] transition-all relative group/drop">
          <input 
            type="file" 
            accept="audio/*" 
            className="absolute inset-0 opacity-0 cursor-pointer" 
            onChange={(e) => e.target.files && handleFile(e.target.files[0])}
          />
          <div className="flex flex-col items-center gap-2">
            <svg className="w-5 h-5 text-[#444] group-hover/drop:text-[#10B981] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
            <div className="font-mono text-[9px] tracking-[0.15em] text-[#666] uppercase font-bold group-hover/drop:text-[#e8e4dc]">
              IMPORT AUDIO SOURCE
            </div>
          </div>
        </label>

        <div className="flex items-center justify-between gap-4 bg-[#090907] border border-[#242420] rounded-lg p-3">
          <div className="flex flex-col">
            <div className="font-mono text-[10px] text-[#e8e4dc] truncate max-w-[120px] mb-1">{fileName}</div>
            <div className="font-mono text-[7px] text-[#444] uppercase tracking-widest font-bold">SOURCE_FILE</div>
          </div>
          
          <div className="flex flex-col items-end">
            <div className={`font-bebas text-[32px] tracking-widest leading-none ${bpm ? 'text-[#10B981]' : 'text-[#333]'}`}>
              {isAnalyzing ? '...' : bpm || '000'}
            </div>
            <div className="font-mono text-[8px] tracking-[0.2em] text-[#888880] font-black">DETECTED_BPM</div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="font-mono text-[8px] text-[#555] uppercase font-bold tracking-widest">Tempo Classification</span>
            <span className="font-mono text-[8px] text-[#10B981] uppercase font-bold tracking-widest">
              {isAnalyzing ? 'ANALYZING...' : bpm ? bpmLabel(bpm) : 'WAITING'}
            </span>
          </div>
          <div className="h-1 bg-[#1a1a14] rounded-full overflow-hidden border border-[#242420]">
            <div 
              className="h-full bg-gradient-to-r from-[#10B981] to-[#34D399] transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(16,185,129,0.5)]" 
              style={{ width: bpm ? `${Math.min(100, Math.max(0, ((bpm - 60) / 140) * 100))}%` : '0%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
