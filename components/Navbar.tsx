import React from 'react';
import { Search, PlusCircle, Menu, User, Trophy, Sparkles, Box } from 'lucide-react';
import { COLORS } from '../constants';
import { motion } from 'framer-motion';

interface NavbarProps {
  onToggleSidebar: () => void;
  onNavigate: (view: any) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar, onNavigate }) => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none"
    >
      <div className="pointer-events-auto glass-panel rounded-full px-6 py-3 flex items-center justify-between w-full max-w-5xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] bg-[#0b0514]/80 backdrop-blur-2xl border border-white/10">
        
        {/* Left: Logo & Toggle */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onToggleSidebar}
            className="p-2 -ml-2 text-[#c8b1e4] hover:text-[#f4effa] hover:bg-white/10 rounded-full transition-colors"
          >
            <Menu size={20} />
          </button>

          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('inspiration'); }} className="text-xl font-bold tracking-tighter text-[#f4effa] hover:text-white transition-colors font-['Sora']">
            MODELS<span className="text-[#9b72cf]">.3D</span>
          </a>
        </div>

        {/* Center Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8 text-sm text-[#c8b1e4] font-medium">
          <button onClick={() => onNavigate('inspiration')} className="hover:text-white transition-colors flex items-center gap-2">
             <Sparkles size={14} /> Explore
          </button>
          <button onClick={() => onNavigate('bounties')} className="hover:text-white transition-colors flex items-center gap-2">
             <Trophy size={14} /> Competitions
          </button>
          <button onClick={() => onNavigate('profile')} className="hover:text-white transition-colors flex items-center gap-2">
             <User size={14} /> Creators
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-white/5 rounded-full transition-colors group">
            <Search size={20} className="text-[#c8b1e4] group-hover:text-white" />
          </button>
          
          <button 
            onClick={() => onNavigate('bounties')}
            className="hidden md:flex items-center gap-2 bg-white/5 hover:bg-white/10 text-[#f4effa] px-4 py-2 rounded-full text-xs font-bold transition-all border border-white/10 hover:border-[#9b72cf]/50"
          >
            <span>Host Bounty</span>
          </button>

          <button 
            onClick={() => onNavigate('profile')}
            className="p-2 bg-[#9b72cf]/20 text-[#9b72cf] rounded-full hover:bg-[#9b72cf] hover:text-white transition-all border border-[#9b72cf]/20"
          >
            <User size={20} />
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;