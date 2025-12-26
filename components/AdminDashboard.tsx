import React, { useState } from 'react';
import { CheckCircle, XCircle, DollarSign, Shield, FileText } from 'lucide-react';
import { MOCK_BOUNTIES } from '../constants';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'submissions' | 'payouts' | 'verifications'>('submissions');

  return (
    <div className="animate-in fade-in zoom-in duration-300">
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
         <div>
            <h2 className="text-3xl font-bold text-[#f4effa] mb-2 font-['Sora']">Admin Dashboard</h2>
            <p className="text-[#c8b1e4]">Manage platform compliance, payouts, and verifications.</p>
         </div>
         <div className="flex gap-2 bg-white/5 p-1 rounded-lg border border-white/5 backdrop-blur-sm">
            {['submissions', 'payouts', 'verifications'].map((tab) => (
               <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`px-4 py-2 rounded-md text-sm font-medium capitalize transition-all
                     ${activeTab === tab ? 'bg-[#9b72cf] text-white shadow-lg' : 'text-[#c8b1e4] hover:text-white'}
                  `}
               >
                  {tab}
               </button>
            ))}
         </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
         <div className="glass-panel p-6 rounded-xl flex items-center justify-between">
            <div>
               <p className="text-[#c8b1e4] text-sm uppercase font-bold mb-1">Pending Reviews</p>
               <h3 className="text-3xl font-bold text-[#f4effa] font-['Sora']">24</h3>
            </div>
            <div className="bg-[#9b72cf]/20 p-3 rounded-full text-[#9b72cf] border border-[#9b72cf]/20">
               <FileText size={24} />
            </div>
         </div>
         <div className="glass-panel p-6 rounded-xl flex items-center justify-between">
            <div>
               <p className="text-[#c8b1e4] text-sm uppercase font-bold mb-1">Pending Payouts</p>
               <h3 className="text-3xl font-bold text-[#f4effa] font-['Sora']">$12,450</h3>
            </div>
            <div className="bg-green-500/20 p-3 rounded-full text-green-400 border border-green-500/20">
               <DollarSign size={24} />
            </div>
         </div>
         <div className="glass-panel p-6 rounded-xl flex items-center justify-between">
            <div>
               <p className="text-[#c8b1e4] text-sm uppercase font-bold mb-1">Verifications</p>
               <h3 className="text-3xl font-bold text-[#f4effa] font-['Sora']">8</h3>
            </div>
            <div className="bg-blue-500/20 p-3 rounded-full text-blue-400 border border-blue-500/20">
               <Shield size={24} />
            </div>
         </div>
      </div>

      {/* Main Content Area */}
      <div className="glass-panel rounded-xl overflow-hidden">
         {activeTab === 'submissions' && (
            <div className="overflow-x-auto">
               <table className="w-full text-left">
                  <thead className="bg-white/5 text-[#c8b1e4] text-xs uppercase backdrop-blur-sm">
                     <tr>
                        <th className="px-6 py-4 font-semibold">Bounty / Campaign</th>
                        <th className="px-6 py-4 font-semibold">Artist</th>
                        <th className="px-6 py-4 font-semibold">Submitted</th>
                        <th className="px-6 py-4 font-semibold">Status</th>
                        <th className="px-6 py-4 font-semibold text-right">Actions</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                     {[1, 2, 3, 4].map((i) => (
                        <tr key={i} className="hover:bg-white/5 transition-colors">
                           <td className="px-6 py-4">
                              <div className="font-medium text-[#f4effa]">Cyberpunk Helmet Design</div>
                              <div className="text-xs text-[#c8b1e4]">Bounty #{100+i}</div>
                           </td>
                           <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                 <div className="w-6 h-6 rounded-full bg-gray-600"></div>
                                 <span className="text-sm">ArtistUser_{i}</span>
                              </div>
                           </td>
                           <td className="px-6 py-4 text-sm text-[#c8b1e4]">2 hours ago</td>
                           <td className="px-6 py-4">
                              <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-xs font-bold border border-yellow-500/20">Pending</span>
                           </td>
                           <td className="px-6 py-4 text-right">
                              <div className="flex justify-end gap-2">
                                 <button className="p-1 hover:text-green-400 transition-colors"><CheckCircle size={18} /></button>
                                 <button className="p-1 hover:text-red-400 transition-colors"><XCircle size={18} /></button>
                              </div>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         )}

         {activeTab === 'payouts' && (
            <div className="p-8 text-center text-[#c8b1e4]">
               <DollarSign size={48} className="mx-auto mb-4 opacity-50" />
               <h3 className="text-xl font-bold mb-2">Payout Management</h3>
               <p>Secure escrow release system allows admins to manually approve payments to bounty winners.</p>
               <div className="mt-8 space-y-4 max-w-2xl mx-auto text-left">
                  {MOCK_BOUNTIES.map(b => (
                     <div key={b.id} className="flex items-center justify-between bg-black/40 p-4 rounded-lg border border-white/5">
                        <div>
                           <div className="font-bold">{b.title}</div>
                           <div className="text-sm text-[#c8b1e4]">Winner: Selected</div>
                        </div>
                        <div className="flex items-center gap-4">
                           <span className="font-bold text-[#9b72cf]">${b.prizePool}</span>
                           <button className="bg-[#9b72cf] text-white px-3 py-1 rounded text-sm hover:bg-[#8a63b8] transition-colors">Release Funds</button>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         )}
      </div>
    </div>
  );
};

export default AdminDashboard;
