import React from 'react';
import { Clock, DollarSign, Users, Trophy } from 'lucide-react';
import { Bounty } from '../types';

interface BountyCardProps {
  bounty: Bounty;
}

const BountyCard: React.FC<BountyCardProps> = ({ bounty }) => {
  // Generate a deterministic image based on ID for visuals
  const bgImage = `https://picsum.photos/seed/${bounty.id}/800/600`;

  return (
    <div className="group relative w-full h-[400px] glass-panel rounded-3xl overflow-hidden cursor-pointer border border-white/5 hover:border-[#9b72cf]/50 transition-all duration-300 shadow-xl">
      
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
         <img 
            src={bgImage} 
            alt={bounty.title} 
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
         />
      </div>

      {/* Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0514] via-[#0b0514]/50 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0514]/30 to-transparent z-10" />
      
      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between">
        
        {/* Header */}
        <div className="flex justify-between items-start">
          <span className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#c8b1e4] border border-white/10 uppercase tracking-wider">
            {bounty.host.name}
          </span>
          <div className="flex items-center gap-1.5 bg-[#9b72cf]/20 text-[#9b72cf] px-3 py-1 rounded-full backdrop-blur-md border border-[#9b72cf]/20 shadow-[0_0_15px_-3px_rgba(155,114,207,0.3)]">
            <Trophy size={14} />
            <span className="font-bold text-sm">${bounty.prizePool}</span>
          </div>
        </div>

        {/* Footer Info */}
        <div>
           <div className="mb-4">
              <div className="flex gap-2 mb-2">
                  <span className={`w-2 h-2 rounded-full ${bounty.status === 'open' ? 'bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.5)]' : 'bg-yellow-400'}`}></span>
                  <span className="text-[10px] uppercase font-bold text-white/70 tracking-widest">{bounty.status}</span>
              </div>
              <h3 className="text-2xl font-bold mb-1 text-white group-hover:text-[#9b72cf] transition-colors font-['Sora'] leading-tight">
                {bounty.title}
              </h3>
              <p className="text-sm text-[#c8b1e4]/80 line-clamp-1">{bounty.brief}</p>
           </div>
          
          <div className="flex items-center gap-4 text-xs text-[#c8b1e4] font-medium border-t border-white/10 pt-4">
            <div className="flex items-center gap-1.5">
              <Clock size={14} />
              <span>Ends {bounty.deadline}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users size={14} />
              <span>{bounty.submissionCount} Entries</span>
            </div>
            <div className="ml-auto flex gap-1">
               {bounty.tags.slice(0, 1).map(tag => (
                  <span key={tag} className="bg-white/10 px-2 py-0.5 rounded text-[10px] text-white/80">{tag}</span>
               ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BountyCard;
