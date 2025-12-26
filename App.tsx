import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import VisualLayer from './components/VisualLayer';
import PostCard from './components/PostCard';
import BountyCard from './components/BountyCard';
import CollectionsPage from './components/CollectionsPage';
import ProfilePage from './components/ProfilePage';
import AdminDashboard from './components/AdminDashboard';
import { MOCK_POSTS, MOCK_CAMPAIGNS, MOCK_TUTORIALS, MOCK_BOUNTIES, COLORS } from './constants';
import { Hash, Star, Trophy, BookOpen } from 'lucide-react';

type ViewType = 'inspiration' | 'tutorials' | 'campaigns' | 'bounties' | 'collections' | 'profile' | 'admin';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('inspiration');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (currentView) {
      case 'tutorials':
        return (
          <section className="animate-in fade-in duration-300 pt-10">
             <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold flex items-center gap-3 font-['Sora']">
                <div className="p-2 bg-[#9b72cf]/10 rounded-lg">
                  <BookOpen className="text-[#9b72cf]" size={24} />
                </div>
                Tutorials & Learning
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {MOCK_TUTORIALS.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </section>
        );
      case 'campaigns':
        return (
          <section className="animate-in fade-in duration-300 pt-10">
            <div className="mb-8">
               <h2 className="text-3xl font-bold text-[#f4effa] font-['Sora']">Verified Campaigns</h2>
               <p className="text-[#c8b1e4] mt-2 max-w-2xl">Production-level works from verified studios & brands. Quality assured assets.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {MOCK_CAMPAIGNS.map(campaign => (
                <PostCard key={campaign.id} post={campaign} />
              ))}
            </div>
          </section>
        );
      case 'bounties':
        return (
          <section className="animate-in fade-in duration-300 pt-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
               <div>
                  <h2 className="text-3xl font-bold text-[#f4effa] font-['Sora']">Active Bounties</h2>
                  <p className="text-[#c8b1e4] mt-1">Structured tasks. Guaranteed payouts. No revisions.</p>
               </div>
               <div className="flex gap-2">
                  <button className="px-4 py-2 bg-white/5 rounded-full text-sm font-medium hover:bg-white/10 transition-colors text-[#c8b1e4] hover:text-white">All Bounties</button>
                  <button className="px-4 py-2 bg-[#9b72cf]/20 text-[#9b72cf] rounded-full text-sm font-medium border border-[#9b72cf]/20">Ending Soon</button>
               </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {MOCK_BOUNTIES.map(bounty => (
                <BountyCard key={bounty.id} bounty={bounty} />
              ))}
               {/* Call to Action Card as a matching card */}
              <div className="group relative w-full h-[400px] glass-panel rounded-3xl overflow-hidden cursor-pointer border border-dashed border-white/10 hover:border-[#9b72cf] transition-all duration-300 flex flex-col items-center justify-center p-8 text-center">
                 <div className="bg-white/5 p-6 rounded-full mb-6 group-hover:scale-110 transition-transform border border-white/10 group-hover:bg-[#9b72cf]/20">
                   <Trophy className="text-[#9b72cf]" size={32} />
                 </div>
                 <h3 className="font-bold text-2xl mb-2 font-['Sora'] text-[#f4effa]">Host a Bounty</h3>
                 <p className="text-sm text-[#c8b1e4] mb-6 max-w-xs">Need specific assets? Deposit funds, set a brief, and get agency-grade submissions.</p>
                 <span className="px-6 py-3 bg-white text-black font-bold rounded-full text-sm group-hover:bg-[#9b72cf] group-hover:text-white transition-colors">Start Now</span>
              </div>
            </div>
          </section>
        );
      case 'collections':
        return <div className="pt-10"><CollectionsPage /></div>;
      case 'profile':
        return <div className="pt-10"><ProfilePage /></div>;
      case 'admin':
        return <div className="pt-10"><AdminDashboard /></div>;
      case 'inspiration':
      default:
        return (
          <>
             {/* SECTION 1: HERO */}
             <div className="-mt-32 mb-10">
                <Hero onNavigate={setCurrentView} />
             </div>

             {/* SECTION 2: GRID */}
            <section className="mb-20">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold flex items-center gap-2 font-['Sora']">
                  <Star className="text-[#9b72cf]" fill={COLORS.primary} size={20} />
                  Trending Assets
                </h2>
                <div className="flex gap-2 text-sm text-[#c8b1e4] bg-white/5 p-1 rounded-full border border-white/5">
                   <button className="px-3 py-1 rounded-full bg-[#9b72cf]/20 text-white font-medium shadow-sm">Trending</button>
                   <button className="px-3 py-1 rounded-full hover:text-white transition-colors">New</button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {MOCK_POSTS.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
              <div className="mt-12 text-center">
                <button className="px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 hover:border-[#9b72cf] text-[#c8b1e4] hover:text-[#f4effa] text-sm font-medium transition-all">
                  Load More Inspiration
                </button>
              </div>
            </section>

             {/* SECTION 3: SEARCH */}
            <section className="mb-10 py-20 border-y border-white/5 relative overflow-hidden">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-full bg-[#9b72cf]/5 blur-3xl rounded-full pointer-events-none"></div>
               <div className="relative z-10 text-center max-w-2xl mx-auto">
                 <h2 className="text-3xl font-bold mb-6 font-['Sora']">Find your spark</h2>
                 <div className="relative group max-w-lg mx-auto">
                    <input 
                      type="text" 
                      placeholder="Search tags..."
                      className="w-full bg-[#0b0514]/50 backdrop-blur-sm border border-white/10 focus:border-[#9b72cf] rounded-full py-4 px-12 text-lg text-[#f4effa] placeholder-[#c8b1e4]/30 outline-none transition-all shadow-xl focus:shadow-[0_0_30px_-5px_rgba(155,114,207,0.3)]"
                    />
                    <Hash className="absolute left-5 top-1/2 -translate-y-1/2 text-[#9b72cf] opacity-50" size={20} />
                 </div>
                 <div className="mt-8 flex flex-wrap justify-center gap-3">
                   {['#beginner', '#blender', '#houdini', '#character', '#environment', '#assets'].map(tag => (
                     <span key={tag} className="cursor-pointer text-xs font-medium text-[#c8b1e4] bg-white/5 border border-white/5 px-4 py-2 rounded-full hover:bg-[#9b72cf] hover:text-white hover:border-[#9b72cf] transition-all">
                       {tag}
                     </span>
                   ))}
                 </div>
               </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0514] text-[#f4effa] relative overflow-x-hidden selection:bg-[#9b72cf]/30 selection:text-white">
      <Navbar onToggleSidebar={() => setIsSidebarOpen(true)} onNavigate={setCurrentView} />
      
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        activePage={currentView}
        onNavigate={setCurrentView}
      />

      <VisualLayer />

      <main 
        className="relative z-10 pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto"
      >
        {renderContent()}
      </main>

      <footer className="bg-[#05020a] py-12 border-t border-white/5 text-center relative z-10">
        <p className="text-[#c8b1e4] mb-4 font-semibold font-['Sora'] tracking-tight">MODELS<span className="text-[#9b72cf]">.3D</span></p>
        <p className="text-[#c8b1e4]/30 text-xs">
          &copy; {new Date().getFullYear()} The Creative Liquidity Engine. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
