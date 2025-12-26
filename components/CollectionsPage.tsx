import React from 'react';
import { Lock, Unlock, FolderOpen } from 'lucide-react';
import { MOCK_COLLECTIONS } from '../constants';

const CollectionsPage: React.FC = () => {
  return (
    <div className="animate-in fade-in zoom-in duration-300">
      <div className="mb-8">
         <h2 className="text-3xl font-bold text-[#f4effa] mb-2 font-['Sora']">My Collections</h2>
         <p className="text-[#c8b1e4]">Organize your inspiration, tutorials, and references.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         {/* Create New Card */}
         <div className="border border-dashed border-white/20 rounded-xl flex flex-col items-center justify-center p-8 cursor-pointer hover:border-[#9b72cf] hover:bg-white/5 transition-all group min-h-[250px] glass-panel">
            <div className="bg-white/5 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform border border-white/10">
               <FolderOpen className="text-[#9b72cf]" size={32} />
            </div>
            <span className="font-bold text-[#f4effa]">Create Collection</span>
         </div>

         {MOCK_COLLECTIONS.map(col => (
           <div key={col.id} className="group relative glass-panel rounded-xl overflow-hidden cursor-pointer">
              <div className="h-40 overflow-hidden relative">
                 <img src={col.coverImage} alt={col.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                 <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md p-1.5 rounded-full text-white/80 border border-white/10">
                    {col.isPrivate ? <Lock size={14} /> : <Unlock size={14} />}
                 </div>
              </div>
              <div className="p-5">
                 <h3 className="font-bold text-lg text-[#f4effa] mb-1 font-['Sora']">{col.name}</h3>
                 <p className="text-[#c8b1e4] text-sm">{col.postCount} items</p>
                 
                 <div className="mt-4 flex -space-x-2 overflow-hidden">
                    {[1,2,3].map(i => (
                       <div key={i} className="inline-block h-6 w-6 rounded-full ring-2 ring-[#0b0514] bg-[#1a0b2e] bg-center bg-cover" style={{backgroundImage: `url(https://picsum.photos/seed/${col.id}${i}/50)`}}></div>
                    ))}
                 </div>
              </div>
           </div>
         ))}
      </div>
    </div>
  );
};

export default CollectionsPage;
