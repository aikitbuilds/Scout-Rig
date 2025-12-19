
import React, { useState } from 'react';
// Added Link import from react-router-dom to fix undefined component error
import { Link } from 'react-router-dom';
import { StakeholderRole, RigData } from '../types';

const DashboardPortal: React.FC = () => {
  const [role, setRole] = useState<StakeholderRole>(StakeholderRole.ADMIN);
  const [selectedForm, setSelectedForm] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const stats = {
    monthlyGross: 5666,
    partnerShare: 850,
    investorPool: 875,
    kwhMonth: 7300,
    dieselSavings: 2100,
  };

  const rigs: RigData[] = [
    { id: 'RIG-001', customer: 'Data Center X', location: 'Midland, TX', status: 'Operational', kwhMonth: 7300, revenue: 5666, uptime: 98.6, nextPayment: 'Jan 15' },
    { id: 'RIG-002', customer: 'Oil & Gas Op', location: 'Odessa, TX', status: 'Operational', kwhMonth: 7100, revenue: 5520, uptime: 98.1, nextPayment: 'Jan 10' },
    { id: 'RIG-003', customer: 'Construction', location: 'Permian (remote)', status: 'In transit', kwhMonth: 0, revenue: 0, uptime: 0, nextPayment: 'Feb 1' },
  ];

  const handleQueueSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const isPartner = role === StakeholderRole.PARTNER || role === StakeholderRole.ADMIN;
  const isInvestor = role === StakeholderRole.INVESTOR || role === StakeholderRole.ADMIN;
  const isCustomer = role === StakeholderRole.CUSTOMER || role === StakeholderRole.ADMIN;
  const isStrategic = role === StakeholderRole.STRATEGIC || role === StakeholderRole.ADMIN;

  return (
    <div className="bg-brand-light min-h-screen p-4 md:p-8">
      {/* Role Switcher Demo */}
      <div className="max-w-7xl mx-auto mb-10 flex flex-wrap gap-4 items-center bg-white p-5 rounded-[2rem] shadow-xl border border-gray-100 sticky top-20 z-40 backdrop-blur-md bg-white/95">
        <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-2">DEMO ROLE SELECTOR:</span>
        {Object.values(StakeholderRole).map((r) => (
          <button
            key={r}
            onClick={() => setRole(r)}
            className={`px-6 py-2 rounded-full text-xs font-black transition-all border-2 ${
              role === r 
              ? 'bg-brand-teal text-white border-brand-teal shadow-[0_10px_20px_rgba(32,128,128,0.3)] scale-105' 
              : 'bg-white text-gray-400 border-gray-100 hover:border-gray-200'
            }`}
          >
            {r}
          </button>
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Overview Hero */}
        <div className="mb-12 flex flex-col lg:flex-row justify-between items-center gap-10 bg-brand-blue p-12 rounded-[4rem] text-white shadow-[0_50px_100px_rgba(0,0,0,0.3)] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="grid grid-cols-12 h-full w-full">
              {Array.from({length: 48}).map((_, i) => (
                <div key={i} className="border border-white/20"></div>
              ))}
            </div>
          </div>
          <div className="relative z-10 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter leading-none">RIG PORTAL <span className="text-brand-teal">/ {role.split(' ')[1]}</span></h1>
            <p className="text-gray-400 text-lg max-w-xl font-medium">
              {isPartner && "Real-time field operations and revenue share tracking."}
              {isInvestor && !isPartner && "Portfolio-wide yield distributions and on-chain verification."}
              {isCustomer && !isInvestor && "Visualizing power production and fuel cost offsets."}
              {isStrategic && !isPartner && !isInvestor && "High-level IRR and capital efficiency monitoring."}
            </p>
          </div>
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full lg:w-auto">
            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl text-center shadow-2xl backdrop-blur-xl">
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Fleet Total</p>
              <p className="text-3xl font-black text-white">5 Rigs</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl text-center shadow-2xl backdrop-blur-xl">
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Queue Filled</p>
              <p className="text-3xl font-black text-brand-teal">84%</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl text-center shadow-2xl backdrop-blur-xl">
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Avg Uptime</p>
              <p className="text-3xl font-black text-white">98.6%</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          <div className="lg:col-span-2 bg-white p-12 rounded-[4rem] shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-gray-100">
            <div className="flex justify-between items-center mb-12">
              <h3 className="text-xs font-black text-brand-blue uppercase tracking-[0.3em]">
                {isInvestor ? 'DISTRIBUTION PERFORMANCE' : isCustomer ? 'ENERGY OFFSET ANALYTICS' : 'OPERATIONAL YIELD'}
              </h3>
              <span className="flex items-center text-[10px] font-black text-green-500 uppercase bg-green-50 px-4 py-1.5 rounded-full shadow-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span> LIVE METRICS
              </span>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              {isPartner && (
                <div className="animate-fadeIn">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">O&M Payout</p>
                  <p className="text-3xl font-black text-brand-blue">${stats.partnerShare}</p>
                  <p className="text-[10px] font-bold text-gray-400 mt-2">15% NET SHARE</p>
                </div>
              )}
              
              {isInvestor && (
                <div className="animate-fadeIn">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Current Yield</p>
                  <p className="text-3xl font-black text-brand-teal">$2.50</p>
                  <p className="text-[10px] font-bold text-gray-400 mt-2">PER RIG TOKEN</p>
                </div>
              )}

              {isCustomer && (
                <div className="animate-fadeIn">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Fuel Savings</p>
                  <p className="text-3xl font-black text-blue-600">${stats.dieselSavings}</p>
                  <p className="text-[10px] font-bold text-gray-400 mt-2">VS. DIESEL AVG</p>
                </div>
              )}

              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Real Output</p>
                <p className="text-3xl font-black text-brand-blue">{stats.kwhMonth} <span className="text-xs font-normal">kWh</span></p>
                <p className="text-[10px] font-bold text-gray-400 mt-2">RIG #001 (MO)</p>
              </div>
            </div>

            <div className="mt-14 pt-10 border-t border-gray-100 flex items-center justify-between">
              <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest italic">Data updated: Just now</span>
              <button className="bg-brand-teal/10 text-brand-teal px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-brand-teal hover:text-white transition-all">AUDIT FULL DATA</button>
            </div>
          </div>

          <div className="bg-brand-blue text-white p-12 rounded-[4rem] shadow-[0_40px_80px_rgba(0,0,0,0.2)]">
            <h3 className="text-xs font-black mb-10 uppercase tracking-[0.3em] text-brand-teal">PRIORITY PIPELINE</h3>
            <div className="space-y-10">
              {[
                { l: 'Partner Slots', v: '3 of 5 Slots', p: 60, show: isPartner || role === StakeholderRole.ADMIN },
                { l: 'Token Alloc', v: '62% Reserved', p: 62, show: isInvestor || role === StakeholderRole.ADMIN },
                { l: 'Deploy Queue', v: 'Next Window: Q3', p: 100, show: isCustomer || role === StakeholderRole.ADMIN },
                { l: 'Series A Pledges', v: '70% Commited', p: 70, show: isStrategic || role === StakeholderRole.ADMIN }
              ].filter(q => q.show).map((q, i) => (
                <div key={i} className="animate-fadeIn">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-4">
                    <span>{q.l}</span>
                    <span className="text-brand-teal">{q.v}</span>
                  </div>
                  <div className="h-2.5 bg-white/10 rounded-full overflow-hidden shadow-inner">
                    <div className="h-full bg-brand-teal transition-all duration-1000 shadow-[0_0_15px_rgba(32,128,128,0.5)]" style={{ width: `${q.p}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-12 text-[10px] text-gray-500 font-black uppercase tracking-widest leading-relaxed">Early entrants receive preferential priority for Rig Series #2 (Q2 2026).</p>
          </div>
        </div>

        {/* Not in line yet? CTA Section */}
        <section className="max-w-5xl mx-auto mb-32 text-center">
          <h2 className="text-4xl font-black text-brand-blue mb-4 uppercase tracking-tighter leading-none">WANT IN ON THE NEXT RIG?</h2>
          <p className="text-gray-400 mb-12 text-xl font-medium">Select your role to view the full briefing and lock your window.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { id: 'partner', l: 'Partner', i: 'fa-tools', path: '/partners', color: 'bg-brand-teal' },
              { id: 'investor', l: 'Investor', i: 'fa-wallet', path: '/investors', color: 'bg-blue-600' },
              { id: 'customer', l: 'Customer', i: 'fa-plug', path: '/customers', color: 'bg-orange-500' },
              { id: 'strategic', l: 'Strategic', i: 'fa-handshake', path: '/strategic', color: 'bg-brand-blue' }
            ].map((f) => (
              <Link
                key={f.id}
                to={f.path}
                className="p-10 rounded-[3rem] border-2 border-gray-100 hover:border-brand-teal bg-white transition-all flex flex-col items-center gap-6 group shadow-lg hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl shadow-xl transition-all group-hover:scale-110 ${f.color}`}>
                  <i className={`fas ${f.i}`}></i>
                </div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 group-hover:text-brand-blue transition-colors">{f.l} Briefing</span>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <div className="fixed bottom-10 right-10 z-[100]">
        <AIChat role={role} />
      </div>
    </div>
  );
};

const AIChat: React.FC<{ role: StakeholderRole }> = ({ role }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', text: string}[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!query.trim()) return;
    const userMsg = query;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setQuery('');
    setLoading(true);
    const { askAssistant } = await import('../services/geminiService');
    const response = await askAssistant(`[User Role: ${role}] ${userMsg}`);
    setMessages(prev => [...prev, { role: 'assistant', text: response || 'No response' }]);
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-end">
      {isOpen && (
        <div className="bg-white w-[400px] h-[600px] rounded-[3.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.2)] border border-gray-100 mb-8 flex flex-col overflow-hidden animate-slideUp">
          <div className="bg-brand-blue p-8 text-white flex justify-between items-center shadow-lg">
            <span className="font-black flex items-center uppercase tracking-[0.2em] text-[10px]">
              <i className="fas fa-robot mr-4 text-brand-teal text-lg"></i> AI RIG ASSISTANT
            </span>
            <button onClick={() => setIsOpen(false)} className="text-white/30 hover:text-white transition-colors"><i className="fas fa-times"></i></button>
          </div>
          <div className="flex-grow overflow-y-auto p-8 space-y-6 bg-gray-50/50">
            {messages.length === 0 && (
              <div className="text-center mt-20">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <i className="fas fa-bolt text-brand-teal text-xl"></i>
                </div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Ask about yield or deployment</p>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`max-w-[85%] p-5 rounded-[1.5rem] text-sm font-medium leading-relaxed shadow-sm ${m.role === 'user' ? 'bg-brand-teal text-white ml-auto rounded-tr-none' : 'bg-white text-gray-700 mr-auto rounded-tl-none border border-gray-100'}`}>
                {m.text}
              </div>
            ))}
            {loading && (
              <div className="flex space-x-2 p-5 bg-white w-fit rounded-2xl mr-auto shadow-sm border border-gray-100">
                <div className="w-2 h-2 bg-brand-teal rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-brand-teal rounded-full animate-bounce [animation-delay:-.3s]"></div>
                <div className="w-2 h-2 bg-brand-teal rounded-full animate-bounce [animation-delay:-.5s]"></div>
              </div>
            )}
          </div>
          <div className="p-6 border-t bg-white flex space-x-4 items-center">
            <input 
              type="text" 
              value={query} 
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask anything..." 
              className="flex-grow text-sm font-bold border-2 border-gray-50 rounded-2xl px-8 py-4 focus:outline-none focus:border-brand-teal/20 transition-all"
            />
            <button 
              onClick={handleSend}
              className="bg-brand-teal text-white w-14 h-14 rounded-2xl flex items-center justify-center hover:scale-105 shadow-xl shadow-brand-teal/30 active:scale-95 transition-all"
            >
              <i className="fas fa-paper-plane text-xl"></i>
            </button>
          </div>
        </div>
      )}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-24 h-24 bg-brand-blue text-white rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.3)] flex items-center justify-center hover:scale-110 transition-all text-4xl border-4 border-brand-teal relative group"
      >
        <div className="absolute -top-3 -right-3 w-8 h-8 bg-brand-teal rounded-full flex items-center justify-center border-4 border-brand-blue animate-pulse group-hover:scale-125 transition-all">
          <i className="fas fa-bolt text-[10px]"></i>
        </div>
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-solar-panel'} text-brand-teal`}></i>
      </button>
    </div>
  );
};

export default DashboardPortal;
