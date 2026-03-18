import React, { useState } from 'react';
import { analyzeFace } from '../services/gemini';

interface Props {
  onFaceDetected: (prompt: string) => void;
  onToggle: (active: boolean) => void;
  active: boolean;
}

export const FaceAnalyzer: React.FC<Props> = ({ onFaceDetected, onToggle, active }) => {
  const [status, setStatus] = useState('Aucune ref');
  const [desc, setDesc] = useState('');
  const [thumb, setThumb] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleFile = async (file: File) => {
    if (!file || !file.type.startsWith('image/')) return;
    
    setIsAnalyzing(true);
    setStatus('Analyse…');
    
    const reader = new FileReader();
    reader.onload = async (e) => {
      const dataUrl = e.target.result as string;
      setThumb(dataUrl);
      
      const base64 = dataUrl.split(',')[1];
      try {
        const prompt = await analyzeFace(base64, file.type);
        setDesc(prompt);
        onFaceDetected(prompt);
        setStatus('✓ Analysé · Actif');
      } catch (err) {
        console.error(err);
        setStatus('✗ Erreur');
        setDesc('Erreur lors de l\'analyse. Vérifiez votre clé API.');
      } finally {
        setIsAnalyzing(false);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="border border-[#242420] rounded-lg">
      <div className="px-3 py-1.5 bg-[#0a0806] border-b border-[#242420] flex items-center justify-between">
        <span className="font-mono text-[8px] tracking-widest uppercase text-[#888880] font-bold">Référence visuelle · Artiste</span>
        <span className={`font-mono text-[8px] font-bold uppercase ${status.includes('✓') ? 'text-[#3d8c52]' : status.includes('✗') ? 'text-[#c44a4a]' : 'text-[#888880]'}`}>
          {status}
        </span>
      </div>
      <div className="p-2.5 flex flex-col gap-2">
        <label className="border border-dashed border-[#242420] rounded-md p-2 text-center cursor-pointer hover:border-[#E8712A] hover:bg-[#17120a] transition-all relative">
          <input 
            type="file" 
            accept="image/*" 
            className="absolute inset-0 opacity-0 cursor-pointer" 
            onChange={(e) => e.target.files && handleFile(e.target.files[0])}
          />
          <div className="font-mono text-[8px] tracking-widest text-[#666] uppercase font-bold">
            ↑ Photo artiste · Analyse IA du visage
          </div>
        </label>
        
        {thumb && (
          <div className="flex gap-3 items-start">
            <img src={thumb} className="w-[48px] h-[48px] rounded-md object-cover border border-[#242420] flex-shrink-0" alt="Face ref" />
            <div className="flex-1 bg-[#090907] border border-[#242420] rounded-md p-2 font-mono text-[8px] leading-tight text-[#888] min-h-[48px] uppercase tracking-tight">
              {isAnalyzing ? 'Analyse en cours...' : desc}
            </div>
          </div>
        )}
        
        <div className="flex gap-2">
          <button 
            onClick={() => document.querySelector<HTMLInputElement>('input[accept="image/*"]')?.click()}
            className="flex-1 bg-[#E8712A] text-[#0d0d0b] border-none rounded-md py-1.5 font-bebas text-[12px] tracking-widest hover:opacity-80 transition-opacity"
          >
            CHANGER
          </button>
          <button 
            onClick={() => onToggle(!active)}
            className={`flex-1 border rounded-md py-1.5 font-bebas text-[12px] tracking-widest transition-all ${
              active ? 'bg-[#0a1a0a] border-[#1a4a1a] text-[#3a9a4a]' : 'bg-[#1a1a14] border-[#242420] text-[#666]'
            }`}
          >
            {active ? 'ACTIF ✓' : 'INACTIF'}
          </button>
          <button 
            onClick={() => { setThumb(null); setDesc(''); setStatus('Aucune ref'); onFaceDetected(''); }}
            className="flex-1 bg-[#1a1a14] border border-[#242420] text-[#666] rounded-md py-1.5 font-bebas text-[12px] tracking-widest hover:opacity-80 transition-opacity"
          >
            EFFACER
          </button>
        </div>
      </div>
    </div>
  );
};
