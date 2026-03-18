import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  text: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export const Tooltip: React.FC<Props> = ({ text, children, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false);

  const positions = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={`absolute z-[1000] px-2 py-1 bg-[#1a1a14] border border-[#242420] rounded shadow-xl pointer-events-none min-w-[120px] max-w-[200px] ${positions[position]}`}
          >
            <div className="font-mono text-[8px] tracking-widest text-[#e8e4dc] leading-relaxed uppercase text-center">
              {text}
            </div>
            <div 
              className={`absolute w-1.5 h-1.5 bg-[#1a1a14] border-r border-b border-[#242420] rotate-45 ${
                position === 'top' ? 'top-full left-1/2 -translate-x-1/2 -translate-y-1/2' :
                position === 'bottom' ? 'bottom-full left-1/2 -translate-x-1/2 translate-y-1/2' :
                position === 'left' ? 'left-full top-1/2 -translate-y-1/2 -translate-x-1/2' :
                'right-full top-1/2 -translate-y-1/2 translate-x-1/2'
              }`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
