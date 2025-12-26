import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Box, Search } from 'lucide-react';
import { COLORS } from '../constants';

interface HeroProps {
  onNavigate: (view: any) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#9b72cf]/30 via-blue-500/20 to-[#9b72cf]/30 blur-[120px] rounded-full opacity-60 pointer-events-none animate-pulse" />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl px-4 mt-10">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#9b72cf]/40 bg-[#9b72cf]/10 text-[#d8bbf5] text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-md shadow-[0_0_10px_-2px_rgba(155,114,207,0.4)]"
        >
          <span className="w-2 h-2 rounded-full bg-[#9b72cf] animate-pulse shadow-[0_0_8px_rgba(155,114,207,0.8)]" />
          The Creative Liquidity Engine
        </motion.div>

        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="w-full max-w-xl mx-auto mb-10 relative group"
        >
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none z-10">
            <Search className="h-5 w-5 text-[#c8b1e4] group-hover:text-white group-focus-within:text-[#9b72cf] transition-colors duration-300" />
          </div>
          <input
            type="text"
            className="w-full pl-12 pr-6 py-4 bg-[#0b0514]/70 border-2 border-white/10 rounded-full text-lg text-white placeholder-[#c8b1e4]/60 focus:outline-none focus:border-[#9b72cf] focus:bg-[#0b0514]/90 backdrop-blur-xl transition-all duration-300 shadow-[0_0_30px_-10px_rgba(0,0,0,0.5)] hover:border-white/30 hover:shadow-[0_0_40px_-5px_rgba(155,114,207,0.2)]"
            placeholder="Search for #beginners #sand #render"
          />
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/60 font-['Sora'] drop-shadow-2xl"
        >
          BUILD THE <br /> UNIMAGINABLE
        </motion.h1>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-[#e2d6f0] max-w-3xl mx-auto mb-12 leading-relaxed font-normal drop-shadow-lg"
        >
          Get inspired for 3D after making the Donut. 
          Host a bounty, select a winner, and own the rights.
        </motion.p>

        {/* The "Complex" Button Group */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          {/* Primary Action */}
          <button 
            onClick={() => onNavigate('bounties')}
            className="group relative px-10 py-5 bg-white text-black font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 w-full sm:w-auto shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Start a Bounty <ArrowRight size={20} />
            </span>
            <div className="absolute inset-0 bg-[#9b72cf] opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl" />
          </button>

          {/* Secondary Action */}
          <button 
            onClick={() => onNavigate('inspiration')}
            className="px-10 py-5 glass-panel rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-white border border-white/20 hover:border-white/40 shadow-lg"
          >
            <Box size={20} className="text-[#9b72cf]" />
            Explore Assets
          </button>
        </motion.div>
      </div>
      
    </section>
  );
}

export default Hero;