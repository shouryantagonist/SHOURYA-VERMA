import React from 'react';
import { Heart, Bookmark, ExternalLink, PlayCircle } from 'lucide-react';
import { Post } from '../types';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const isCampaign = post.type === 'campaign';
  const isTutorial = post.type === 'tutorial';

  return (
    <div className={`group relative rounded-xl overflow-hidden glass-panel transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(155,114,207,0.3)] ${isCampaign ? 'border-l-4 border-l-[#9b72cf]' : ''}`}>
      
      {/* Campaign Badge */}
      {isCampaign && (
        <div className="absolute top-3 left-3 z-20 bg-[#9b72cf] text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider shadow-lg">
          Verified Campaign
        </div>
      )}

      {/* Tutorial Badge */}
      {isTutorial && (
        <div className="absolute top-3 right-3 z-20 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
          <PlayCircle size={10} className="text-[#9b72cf]" />
          Tutorial
        </div>
      )}

      {/* Image/Preview */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#0b0514]">
        <img 
          src={post.imageUrl} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Play Icon Center for Videos (Tutorials or Campaigns) */}
        {post.isVideo && (
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20 group-hover:scale-110 transition-transform duration-300">
                 <PlayCircle size={32} className="text-white fill-current" />
              </div>
           </div>
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0514] via-[#0b0514]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
             <div className="flex justify-between items-end mb-2">
                <div>
                   <h3 className="text-white font-bold text-lg leading-tight font-['Sora'] drop-shadow-md">{post.title}</h3>
                   <p className="text-[#c8b1e4] text-xs mt-1">by {post.creator.name}</p>
                </div>
             </div>
             
             <div className="flex gap-2 mb-4 flex-wrap">
               {post.software.slice(0, 2).map(soft => (
                 <span key={soft} className="text-[10px] bg-white/10 backdrop-blur-sm text-white/90 px-2 py-0.5 rounded border border-white/10">
                   {soft}
                 </span>
               ))}
             </div>

             <div className="flex items-center justify-between border-t border-white/10 pt-3">
               <div className="flex gap-3">
                 <button className="text-white hover:text-[#9b72cf] transition-colors flex items-center gap-1 text-xs">
                   <Heart size={16} /> {post.likes}
                 </button>
                 <button className="text-white hover:text-[#9b72cf] transition-colors">
                   <Bookmark size={16} />
                 </button>
               </div>
               <button className="text-white hover:text-[#9b72cf] opacity-0 group-hover:opacity-100 transition-opacity">
                 <ExternalLink size={16} />
               </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;