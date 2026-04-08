import React from 'react';
import { motion } from 'motion/react';
import { Music, Mic2, Sparkles, Zap, Headphones, Disc, Radio, Layers, ArrowRight, Play } from 'lucide-react';
import { SessionState } from '../types';

interface HomeProps {
  onSelect: (view: 'studio' | 'suno') => void;
}

export const Home: React.FC<HomeProps> = ({ onSelect }) => {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#10B981]/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#10B981]/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.03)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-6xl w-full z-10">
        <header className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-12 h-12 bg-[#10B981] rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.3)]">
              <Zap size={24} className="text-black fill-current" />
            </div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tighter uppercase italic">
              Aura <span className="text-[#10B981]">Studio</span>
            </h1>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-black tracking-tight leading-[0.9] uppercase mb-8"
          >
            The Future of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/20">Music Creation</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto font-medium"
          >
            Experience the ultimate AI-powered music production suite. 
            From virtual artist visualization to professional Suno prompting.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Virtual Studio Card */}
          <motion.button
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            onClick={() => onSelect('studio')}
            className="group relative bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-12 text-left overflow-hidden transition-all hover:border-[#10B981]/50 hover:bg-white/[0.07]"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Mic2 size={120} />
            </div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#10B981] group-hover:text-black transition-colors">
                <Layers size={28} />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tight">Virtual Studio</h3>
              <p className="text-white/50 text-lg mb-8 max-w-[280px]">
                Visualize your artist, customize their look, and generate full-stack music identities.
              </p>
              
              <div className="flex items-center gap-2 text-[#10B981] font-bold uppercase tracking-widest text-sm">
                Enter Studio <ArrowRight size={18} />
              </div>
            </div>

            {/* Decorative Grid */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_bottom_left,black,transparent_70%)] pointer-events-none" />
          </motion.button>

          {/* Suno Engine Card */}
          <motion.button
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            onClick={() => onSelect('suno')}
            className="group relative bg-[#10B981] rounded-[32px] p-8 md:p-12 text-left overflow-hidden transition-all hover:shadow-[0_0_50px_rgba(16,185,129,0.3)]"
          >
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-30 transition-opacity text-black">
              <Music size={120} />
            </div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-black/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-black group-hover:text-[#10B981] transition-colors text-black">
                <Disc size={28} />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tight text-black">Suno Engine</h3>
              <p className="text-black/60 text-lg mb-8 max-w-[280px]">
                Direct access to professional Suno V5.2 prompting with advanced style controls.
              </p>
              
              <div className="flex items-center gap-2 text-black font-bold uppercase tracking-widest text-sm">
                Start Prompting <ArrowRight size={18} />
              </div>
            </div>

            {/* Decorative Waves */}
            <div className="absolute bottom-0 right-0 w-full h-1/2 opacity-20 pointer-events-none">
              <svg viewBox="0 0 400 200" className="w-full h-full">
                <path d="M0 100 Q 100 50 200 100 T 400 100" fill="none" stroke="black" strokeWidth="2" />
                <path d="M0 120 Q 100 70 200 120 T 400 120" fill="none" stroke="black" strokeWidth="2" />
                <path d="M0 140 Q 100 90 200 140 T 400 140" fill="none" stroke="black" strokeWidth="2" />
              </svg>
            </div>
          </motion.button>
        </div>

        <footer className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-8 text-white/30 font-mono text-[10px] uppercase tracking-[0.2em]">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              System Online
            </div>
            <div>V5.2 Engine Ready</div>
            <div>Aura Studio © 2026</div>
          </div>

          <div className="flex items-center gap-4">
            {[Headphones, Radio, Sparkles].map((Icon, i) => (
              <div key={i} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all cursor-pointer">
                <Icon size={16} />
              </div>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
};
