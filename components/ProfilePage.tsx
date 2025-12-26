import React, { useState } from 'react';
import { MapPin, Link as LinkIcon, Twitter, Instagram, Settings, UploadCloud, Sparkles, RefreshCw, Heart, Palette, CheckCircle, Loader2, Zap } from 'lucide-react';
import { USER_ARTIST, MOCK_POSTS } from '../constants';
import PostCard from './PostCard';

const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'portfolio' | 'collections' | 'about' | 'customization'>('portfolio');
  const [uploadState, setUploadState] = useState<'idle' | 'uploading' | 'success'>('idle');

  const handleFileUpload = () => {
    setUploadState('uploading');
    // Simulate upload delay
    setTimeout(() => {
      setUploadState('success');
    }, 2500);
  };

  return (
    <div className="animate-in fade-in zoom-in duration-300">
      {/* Cover Image */}
      <div className="h-48 md:h-64 rounded-xl bg-gradient-to-r from-[#1a0b2e] to-[#0b0514] relative overflow-hidden mb-16 border border-white/5">
         <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         <button className="absolute top-4 right-4 bg-black/30 backdrop-blur-md p-2 rounded-full text-white hover:bg-black/50 transition-colors border border-white/10">
            <Settings size={20} />
         </button>
      </div>

      {/* Profile Header */}
      <div className="relative px-4 md:px-8 -mt-24 mb-12">
         <div className="flex flex-col md:flex-row items-end md:items-center gap-6">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#0b0514] overflow-hidden bg-[#1a0b2e] shadow-2xl z-10">
               <img src={USER_ARTIST.avatar} alt={USER_ARTIST.name} className="w-full h-full object-cover" />
            </div>
            
            <div className="flex-1 mb-2">
               <div className="flex items-center gap-3 mb-1">
                  <h1 className="text-3xl font-bold font-['Sora']">{USER_ARTIST.name}</h1>
                  {USER_ARTIST.role === 'artist' && (
                     <span className="bg-[#9b72cf]/20 text-[#9b72cf] px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider border border-[#9b72cf]/30">Artist</span>
                  )}
               </div>
               <p className="text-[#c8b1e4] max-w-2xl">{USER_ARTIST.bio}</p>
               
               <div className="flex flex-wrap gap-4 mt-4 text-sm text-[#c8b1e4]/80">
                  <div className="flex items-center gap-1">
                     <MapPin size={16} />
                     <span>Kyoto, Japan</span>
                  </div>
                  <div className="flex items-center gap-1">
                     <LinkIcon size={16} />
                     <a href="#" className="hover:text-[#9b72cf] transition-colors">artstation.com/alexrender</a>
                  </div>
                  <div className="flex gap-3 ml-2">
                     <Twitter size={18} className="cursor-pointer hover:text-[#9b72cf]" />
                     <Instagram size={18} className="cursor-pointer hover:text-[#9b72cf]" />
                  </div>
               </div>
            </div>

            <div className="flex gap-3 w-full md:w-auto mt-4 md:mt-0">
               <button className="flex-1 md:flex-none bg-[#9b72cf] hover:bg-[#8a63b8] text-white px-6 py-2 rounded-lg font-semibold transition-colors shadow-lg">
                  Follow
               </button>
               <button className="flex-1 md:flex-none glass-panel hover:bg-white/10 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                  Message
               </button>
            </div>
         </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
         <div className="glass-panel p-4 rounded-xl text-center">
            <div className="text-2xl font-bold text-[#f4effa]">12.5k</div>
            <div className="text-xs text-[#c8b1e4] uppercase tracking-wider">Followers</div>
         </div>
         <div className="glass-panel p-4 rounded-xl text-center">
            <div className="text-2xl font-bold text-[#f4effa]">482</div>
            <div className="text-xs text-[#c8b1e4] uppercase tracking-wider">Following</div>
         </div>
         <div className="glass-panel p-4 rounded-xl text-center">
            <div className="text-2xl font-bold text-[#f4effa]">89k</div>
            <div className="text-xs text-[#c8b1e4] uppercase tracking-wider">Likes</div>
         </div>
         <div className="glass-panel p-4 rounded-xl text-center">
            <div className="text-2xl font-bold text-[#f4effa]">4</div>
            <div className="text-xs text-[#c8b1e4] uppercase tracking-wider">Bounty Wins</div>
         </div>
      </div>

      {/* Content Tabs */}
      <div className="border-b border-white/10 mb-8">
         <div className="flex gap-8 overflow-x-auto pb-1 no-scrollbar">
            <button 
               onClick={() => setActiveTab('portfolio')}
               className={`border-b-2 pb-3 font-medium transition-colors whitespace-nowrap ${activeTab === 'portfolio' ? 'border-[#9b72cf] text-[#f4effa]' : 'border-transparent text-[#c8b1e4] hover:text-[#f4effa]'}`}
            >
               Portfolio
            </button>
            <button 
               onClick={() => setActiveTab('collections')}
               className={`border-b-2 pb-3 font-medium transition-colors whitespace-nowrap ${activeTab === 'collections' ? 'border-[#9b72cf] text-[#f4effa]' : 'border-transparent text-[#c8b1e4] hover:text-[#f4effa]'}`}
            >
               Collections
            </button>
            <button 
               onClick={() => setActiveTab('customization')}
               className={`border-b-2 pb-3 font-medium transition-colors flex items-center gap-2 whitespace-nowrap ${activeTab === 'customization' ? 'border-[#9b72cf] text-[#f4effa]' : 'border-transparent text-[#c8b1e4] hover:text-[#f4effa]'}`}
            >
               <Palette size={16} />
               Interface Icons
            </button>
            <button 
               onClick={() => setActiveTab('about')}
               className={`border-b-2 pb-3 font-medium transition-colors whitespace-nowrap ${activeTab === 'about' ? 'border-[#9b72cf] text-[#f4effa]' : 'border-transparent text-[#c8b1e4] hover:text-[#f4effa]'}`}
            >
               About
            </button>
         </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'portfolio' && (
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {MOCK_POSTS.map(post => (
               <PostCard key={post.id} post={post} />
            ))}
         </div>
      )}

      {activeTab === 'collections' && (
         <div className="text-center py-20 text-[#c8b1e4] glass-panel rounded-xl border border-white/5">
            <p>No public collections available.</p>
         </div>
      )}

      {activeTab === 'about' && (
         <div className="glass-panel p-8 rounded-xl max-w-2xl text-[#c8b1e4] leading-relaxed border border-white/5">
            <h3 className="text-white text-xl font-bold mb-4">About {USER_ARTIST.name}</h3>
            <p>{USER_ARTIST.bio || "No bio available."}</p>
         </div>
      )}

      {activeTab === 'customization' && (
          <div className="glass-panel p-8 rounded-xl border border-white/10">
            <div className="flex flex-col md:flex-row items-start justify-between mb-8 gap-4">
               <div>
                  <h3 className="text-2xl font-bold font-['Sora'] mb-2 text-[#f4effa]">Interface Customization</h3>
                  <p className="text-[#c8b1e4] max-w-xl text-sm leading-relaxed">
                    Personalize your Models.3D experience. Upload a custom asset pack to replace standard UI animations like the refresh spinner, like heart explosion, and loading states.
                  </p>
               </div>
               <div className="bg-gradient-to-br from-[#9b72cf]/20 to-blue-500/20 p-4 rounded-xl border border-white/10">
                  <Sparkles className="text-[#9b72cf]" size={28} />
               </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Upload Area */}
                <div 
                  onClick={uploadState !== 'uploading' ? handleFileUpload : undefined}
                  className={`lg:col-span-2 border-2 border-dashed rounded-2xl p-12 flex flex-col items-center justify-center text-center transition-all cursor-pointer group bg-black/20 relative overflow-hidden
                    ${uploadState === 'success' 
                      ? 'border-[#4ade80]/50 bg-[#4ade80]/5' 
                      : 'border-white/10 hover:border-[#9b72cf]/50 hover:bg-[#9b72cf]/5'}
                  `}
                >
                    {uploadState === 'uploading' && (
                      <div className="absolute inset-0 bg-black/60 z-10 flex flex-col items-center justify-center">
                        <Loader2 className="animate-spin text-[#9b72cf] mb-4" size={48} />
                        <span className="text-sm font-bold text-white tracking-widest uppercase">Processing Assets...</span>
                      </div>
                    )}

                    <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 shadow-[0_0_30px_-5px_rgba(0,0,0,0.5)] border border-white/10 
                      ${uploadState === 'success' ? 'bg-[#4ade80]/20 border-[#4ade80]/30' : 'bg-[#0b0514] group-hover:scale-110 group-hover:border-[#9b72cf]/30'}
                    `}>
                       {uploadState === 'success' ? (
                         <CheckCircle className="text-[#4ade80]" size={36} />
                       ) : (
                         <UploadCloud className="text-[#c8b1e4] group-hover:text-[#9b72cf]" size={36} />
                       )}
                    </div>
                    
                    <h4 className="text-xl font-bold mb-2 text-white">
                      {uploadState === 'success' ? 'Icon Pack Active' : 'Upload Icon Pack'}
                    </h4>
                    
                    <p className="text-sm text-[#c8b1e4] mb-8 max-w-xs mx-auto">
                      {uploadState === 'success' 
                        ? 'Your custom assets have been compiled and applied to your interface.' 
                        : 'Drag & drop your .zip file here, or click to browse. Supported contents: SVG, JSON (Lottie).'}
                    </p>
                    
                    {uploadState !== 'success' && (
                      <button className="px-8 py-3 bg-white text-black font-bold rounded-full text-sm group-hover:bg-[#9b72cf] group-hover:text-white transition-all shadow-lg hover:shadow-[#9b72cf]/25">
                         Select Zip File
                      </button>
                    )}
                </div>

                {/* Preview / Instructions */}
                <div className="space-y-6">
                   <div>
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-[#c8b1e4]">Preview Elements</h4>
                        {uploadState === 'success' && (
                          <span className="text-[10px] bg-[#9b72cf] text-white px-2 py-0.5 rounded-full font-bold">CUSTOM</span>
                        )}
                      </div>
                      
                      <div className="space-y-3">
                        {/* Preview Item 1 */}
                        <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                            <div className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center shadow-inner relative overflow-hidden">
                              {uploadState === 'success' ? (
                                <Zap size={24} className="text-[#ffd700] animate-pulse" />
                              ) : (
                                <RefreshCw size={24} className="text-[#9b72cf] animate-spin" />
                              )}
                            </div>
                            <div>
                              <div className="font-bold text-sm text-[#f4effa]">
                                {uploadState === 'success' ? 'Power Loader' : 'Refresh Spinner'}
                              </div>
                              <div className="text-xs text-[#c8b1e4] opacity-70 font-mono">
                                {uploadState === 'success' ? 'energy_load.svg' : 'loader.svg'}
                              </div>
                            </div>
                        </div>

                        {/* Preview Item 2 */}
                        <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                            <div className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center shadow-inner">
                               {uploadState === 'success' ? (
                                <Heart size={24} className="text-[#9b72cf] fill-current animate-bounce" />
                              ) : (
                                <Heart size={24} className="text-pink-500 fill-current animate-pulse" />
                              )}
                            </div>
                            <div>
                              <div className="font-bold text-sm text-[#f4effa]">
                                {uploadState === 'success' ? 'Neon Like' : 'Like Animation'}
                              </div>
                              <div className="text-xs text-[#c8b1e4] opacity-70 font-mono">
                                {uploadState === 'success' ? 'neon_heart.json' : 'like_anim.json'}
                              </div>
                            </div>
                        </div>
                      </div>
                   </div>

                   <div className="p-5 bg-[#9b72cf]/10 rounded-xl border border-[#9b72cf]/20">
                      <h5 className="text-[#9b72cf] font-bold text-sm mb-1 flex items-center gap-2">
                        <Palette size={14} /> Theme Compatibility
                      </h5>
                      <p className="text-xs text-[#c8b1e4] leading-relaxed">
                        Uploaded assets will automatically adapt to the dark mode theme. Ensure SVGs use <code>currentColor</code> for fill/stroke.
                      </p>
                   </div>
                   
                   <button className="w-full py-3 border border-white/10 rounded-lg text-xs font-medium text-[#c8b1e4] hover:bg-white/5 hover:text-white transition-colors">
                      Download Starter Kit (.zip)
                   </button>
                </div>
            </div>
          </div>
      )}
    </div>
  );
};

export default ProfilePage;