import React from 'react';
import { 
  Sparkles, 
  BookOpen, 
  Megaphone, 
  Trophy, 
  Grid, 
  User, 
  ShieldAlert,
  X
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activePage: string;
  onNavigate: (page: any) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, activePage, onNavigate }) => {
  const links = [
    { id: 'inspiration', label: 'Inspiration', icon: Sparkles },
    { id: 'tutorials', label: 'Tutorials', icon: BookOpen },
    { id: 'campaigns', label: 'Ads & Campaigns', icon: Megaphone },
    { id: 'bounties', label: 'Bounties', icon: Trophy },
    { id: 'collections', label: 'Collections', icon: Grid },
  ];

  const handleNav = (id: string) => {
    onNavigate(id);
    onClose();
  };

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      <aside 
        className={`fixed top-0 left-0 h-full w-72 bg-[#0b0514]/80 backdrop-blur-xl border-r border-white/5 z-[70] transform transition-transform duration-300 ease-in-out pt-20 px-4 pb-6 flex flex-col shadow-2xl
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-4 p-2 text-[#c8b1e4] hover:text-white"
        >
          <X size={24} />
        </button>

        <div className="space-y-1 mb-8">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`w-full flex items-center gap-3 px-4 py-4 rounded-lg text-lg font-medium transition-all duration-200
                ${activePage === link.id 
                  ? 'bg-[#9b72cf]/20 text-[#f4effa] border-l-2 border-[#9b72cf]' 
                  : 'text-[#c8b1e4] hover:bg-white/5 hover:text-[#f4effa]'
                }
              `}
            >
              <link.icon size={20} className={activePage === link.id ? 'text-[#9b72cf]' : ''} />
              {link.label}
            </button>
          ))}
        </div>

        <div className="space-y-1 mt-auto border-t border-white/5 pt-6">
           <button
              onClick={() => handleNav('profile')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
                ${activePage === 'profile' 
                  ? 'bg-[#9b72cf]/20 text-[#f4effa] border-l-2 border-[#9b72cf]' 
                  : 'text-[#c8b1e4] hover:bg-white/5 hover:text-[#f4effa]'
                }
              `}
            >
              <User size={18} />
              Profile
            </button>
            <button
              onClick={() => handleNav('admin')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
                ${activePage === 'admin' 
                  ? 'bg-[#9b72cf]/20 text-[#f4effa] border-l-2 border-[#9b72cf]' 
                  : 'text-[#c8b1e4] hover:bg-white/5 hover:text-[#f4effa]'
                }
              `}
            >
              <ShieldAlert size={18} />
              Admin
            </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
