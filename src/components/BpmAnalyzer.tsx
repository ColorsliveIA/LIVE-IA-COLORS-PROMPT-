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
    <div className="border border-[#242420] rounded-lg">
      <div className="px-3 py-1.5 bg-[#0a0806] border-b border-[#242420] flex items-center justify-between">
        <span className="font-mono text-[8px] tracking-widest uppercase text-[#888880] font-bold">Analyse BPM</span>
        <div className="font-bebas text-[16px] tracking-widest text-[#E8712A] leading-none">
          {isAnalyzing ? '···' : bpm || '—'}
        </div>
      </div>
      <div className="p-2.5 flex flex-col gap-2">
        <label className="border border-dashed border-[#242420] rounded-md p-2 text-center cursor-pointer hover:border-[#E8712A] hover:bg-[#17120a] transition-all relative">
          <input 
            type="file" 
            accept="audio/*" 
            className="absolute inset-0 opacity-0 cursor-pointer" 
            onChange={(e) => e.target.files && handleFile(e.target.files[0])}
          />
          <div className="font-mono text-[8px] tracking-widest text-[#666] uppercase font-bold">
            ↑ Dépose ou clique · audio MP3 / WAV
          </div>
        </label>
        <div className="font-mono text-[7px] text-[#555] truncate uppercase tracking-tighter">{fileName}</div>
        <div className="flex items-center gap-3">
          <div className="min-w-[40px]">
            <div className={`font-bebas text-[28px] tracking-widest leading-none ${bpm ? 'text-[#E8712A]' : 'text-[#444]'}`}>
              {isAnalyzing ? '···' : bpm || '—'}
            </div>
            <div className="font-mono text-[8px] tracking-widest text-[#888880] font-bold">BPM</div>
          </div>
          <div className="font-mono text-[8px] text-[#888880] leading-tight flex-1 uppercase tracking-tight">
            {isAnalyzing ? 'Analyse en cours…' : bpm ? bpmLabel(bpm) : 'Importe un audio pour détecter le tempo automatiquement.'}
          </div>
        </div>
        <div className="h-[1.5px] bg-[#242420] rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#E8712A] transition-all duration-700" 
            style={{ width: bpm ? `${Math.min(100, Math.max(0, ((bpm - 60) / 140) * 100))}%` : '0%' }}
          />
        </div>
      </div>
    </div>
  );
};
