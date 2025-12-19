
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { StakeholderRole, StationData } from '../types';

const DashboardPortal: React.FC = () => {
  const [role, setRole] = useState<StakeholderRole>(StakeholderRole.ADMIN);
  const [submitted, setSubmitted] = useState(false);

  const stats = {
    monthlyGross: 5666,
    partnerShare: 850,
    investorPool: 875,
    kwhMonth: 7300,
    dieselSavings: 2100,
  };

  const stations: StationData[] = [
    { id: 'SC-001', model: 'Scout Station 100', customer: 'West TX Property', location: 'Midland, TX', status: 'Operational', kwhMonth: 7300, revenue: 5666, uptime: 98.6, nextPayment: 'Feb 15', compassStatus: 'Active' },
    { id: 'SC-002', model: 'Scout Station 200', customer: 'O&G Remote Pad', location: 'Odessa, TX', status: 'Operational', kwhMonth: 7100, revenue: 5520, uptime: 98.1, nextPayment: 'Feb 10', compassStatus: 'Optimizing' },
    { id: 'SC-003', model: 'Scout Station 100', customer: 'Starlink Test Site', location: 'Remote (NM)', status: 'In transit', kwhMonth: 0, revenue: 0, uptime: 0, nextPayment: 'Mar 1', compassStatus: 'Standby' },
  ];

  const isPartner = role === StakeholderRole.PARTNER || role === StakeholderRole.ADMIN;
  const isInvestor = role === StakeholderRole.INVESTOR || role === StakeholderRole.ADMIN;
  const isCustomer = role === StakeholderRole.CUSTOMER || role === StakeholderRole.ADMIN;
  const isStrategic = role === StakeholderRole.STRATEGIC || role === StakeholderRole.ADMIN;

  return (
    <div className="bg-brand-light min-h-screen p-4 md:p-10">
      {/* Role Switcher Demo */}
      <div className="max-w-7xl mx-auto mb-12 flex flex-wrap gap-4 items-center bg-white p-6 rounded-[2.5rem] shadow-2xl shadow-brand-blue/5 border border-white sticky top-24 z-40 backdrop-blur-xl bg-white/90">
        <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] ml-2">SCOUT ROLE SELECTOR:</span>
        {Object.values(StakeholderRole).map((r) => (
          <button
            key={r}
            onClick={() => setRole(r)}
            className={`px-6 py-2.5 rounded-2xl text-xs font-black transition-all border-2 ${
              role === r 
              ? 'bg-brand-teal text-white border-brand-teal shadow-[0_15px_30px_rgba(32,128,128,0.2)] scale-105' 
              : 'bg-gray-50 text-gray-400 border-gray-100 hover:border-gray-200'
            }`}
          >
            {r}
          </button>
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Overview Hero */}
        <div className="mb-12 flex flex-col lg:flex-row justify-between items-center gap-12 bg-brand-blue p-12 rounded-[4.5rem] text-white shadow-[0_60px_100px_rgba(0,0,0,0.3)] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <img 
              src="https://shop.rpssolarpumps.com/cdn/shop/files/solar-trailer-1.png?v=1707629061&width=600"
              className="absolute right-0 bottom-0 w-96 opacity-10 grayscale brightness-200 rotate-12"
              alt="Decoration"
            />
            <div className="grid grid-cols-12 h-full w-full">
              {Array.from({length: 48}).map((_, i) => (
                <div key={i} className="border border-white/20"></div>
              ))}
            </div>
          </div>
          <div className="relative z-10 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter leading-none">
              SCOUT <span className="text-brand-teal">DASHBOARD</span> <span className="text-brand-gold italic">/ {role.split(' ')[1]}</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-xl font-medium">
              Monitoring <span className="text-white">Scout Compass</span> sun-tracking and <span className="text-white">Station 100/200</span> deployment health.
            </p>
          </div>
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full lg:w-auto">
            <div className="bg-white/5 border border-white/10 p-7 rounded-[2rem] text-center shadow-2xl backdrop-blur-2xl">
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Stations Active</p>
              <p className="text-3xl font-black text-white">5 Units</p>
            </div>
            <div className="bg-brand-teal/10 border border-brand-teal/20 p-7 rounded-[2rem] text-center shadow-2xl backdrop-blur-2xl">
              <p className="text-[10px] font-black text-brand-teal uppercase tracking-widest mb-2">Grid Independence</p>
              <p className="text-3xl font-black text-white">100%</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-7 rounded-[2rem] text-center shadow-2xl backdrop-blur-2xl">
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Fleet Health</p>
              <p className="text-3xl font-black text-white">98.6%</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          <div className="lg:col-span-2 bg-white p-14 rounded-[4rem] shadow-[0_40px_80px_rgba(0,0,0,0.04)] border border-gray-100 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-10 opacity-[0.03]">
               <i className="fas fa-solar-panel text-[20rem]"></i>
             </div>
            <div className="flex justify-between items-center mb-12 relative z-10">
              <h3 className="text-xs font-black text-brand-blue uppercase tracking-[0.4em]">
                {isInvestor ? 'PORTFOLIO YIELD' : isCustomer ? 'SAVINGS ANALYTICS' : 'OPERATIONAL DATA'}
              </h3>
              <div className="flex space-x-3">
                <span className="flex items-center text-[10px] font-black text-brand-teal uppercase bg-brand-teal/5 px-4 py-2 rounded-2xl border border-brand-teal/10">
                   SC-001 <i className="fas fa-signal ml-3"></i>
                </span>
                <span className="flex items-center text-[10px] font-black text-green-500 uppercase bg-green-50 px-4 py-2 rounded-2xl border border-green-100">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span> COMPASS LIVE
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
              {isPartner && (
                <div className="animate-fadeIn">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">O&M Share</p>
                  <p className="text-3xl font-black text-brand-blue">${stats.partnerShare}</p>
                  <p className="text-[10px] font-bold text-gray-400 mt-2">15% NET YIELD</p>
                </div>
              )}
              
              {isInvestor && (
                <div className="animate-fadeIn">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Monthly Cash</p>
                  <p className="text-3xl font-black text-brand-teal">$2.50</p>
                  <p className="text-[10px] font-bold text-gray-400 mt-2">PER SCOUT TOKEN</p>
                </div>
              )}

              {isCustomer && (
                <div className="animate-fadeIn">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Grid Offset</p>
                  <p className="text-3xl font-black text-brand-gold">${stats.dieselSavings}</p>
                  <p className="text-[10px] font-bold text-gray-400 mt-2">VS. DIESEL AVG</p>
                </div>
              )}

              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Compass Boost</p>
                <p className="text-3xl font-black text-brand-blue">+32% <span className="text-xs font-normal">UP</span></p>
                <p className="text-[10px] font-bold text-gray-400 mt-2">AI SUN TRACKING</p>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-gray-100 flex items-center justify-between relative z-10">
              <span className="text-[10px] text-gray-400 font-black uppercase tracking-[0.3em]">Scout Compass Core v2.4 Active</span>
              <button className="bg-brand-blue text-white px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-brand-teal transition-all shadow-xl shadow-brand-blue/20">AUDIT LOG</button>
            </div>
          </div>

          <div className="bg-brand-teal text-white p-14 rounded-[4rem] shadow-[0_50px_100px_rgba(32,128,128,0.2)] flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-black mb-12 uppercase tracking-[0.4em] text-white/60">BETA PIPELINE STATUS</h3>
              <div className="space-y-12">
                {[
                  { l: 'Station 100 Pre-Orders', v: '8 Units', p: 80, show: true },
                  { l: 'Compass Modules', v: '12 Active', p: 92, show: true },
                  { l: 'Partner Slots', v: '3 of 5 Filled', p: 60, show: isPartner || role === StakeholderRole.ADMIN },
                  { l: 'Token Pool A', v: 'Locked', p: 100, show: isInvestor || role === StakeholderRole.ADMIN }
                ].filter(q => q.show).map((q, i) => (
                  <div key={i} className="animate-fadeIn">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-4">
                      <span>{q.l}</span>
                      <span className="text-brand-gold font-black">{q.v}</span>
                    </div>
                    <div className="h-3 bg-white/20 rounded-full overflow-hidden shadow-inner">
                      <div className="h-full bg-brand-gold transition-all duration-1000 shadow-[0_0_20px_rgba(255,184,0,0.5)]" style={{ width: `${q.p}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-14 text-[10px] text-white/50 font-black uppercase tracking-[0.2em] leading-relaxed">Next Scout Rig allocation window opens: April 2026.</p>
          </div>
        </div>

        {/* CTA Section */}
        <section className="max-w-6xl mx-auto mb-32 text-center bg-white p-20 rounded-[5rem] shadow-2xl border border-gray-50">
          <h2 className="text-4xl font-black text-brand-blue mb-4 uppercase tracking-tighter leading-none">READY FOR INDEPENDENCE?</h2>
          <p className="text-gray-400 mb-14 text-xl font-medium max-w-2xl mx-auto">Explore our specialized briefings and find your role in the modular power revolution.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { id: 'partner', l: 'Partner', i: 'fa-handshake', path: '/partners', color: 'bg-brand-teal' },
              { id: 'investor', l: 'Investor', i: 'fa-chart-pie', path: '/investors', color: 'bg-brand-blue' },
              { id: 'customer', l: 'Customer', i: 'fa-home', path: '/customers', color: 'bg-brand-gold' },
              { id: 'strategic', l: 'Strategic', i: 'fa-building', path: '/strategic', color: 'bg-gray-400' }
            ].map((f) => (
              <Link
                key={f.id}
                to={f.path}
                className="p-12 rounded-[3.5rem] border-2 border-gray-50 hover:border-brand-teal bg-brand-light transition-all flex flex-col items-center gap-8 group shadow-lg hover:shadow-2xl transform hover:-translate-y-3"
              >
                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center text-white text-3xl shadow-2xl transition-all group-hover:scale-110 ${f.color}`}>
                  <i className={`fas ${f.i}`}></i>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-1">Scout</span>
                  <span className="text-sm font-black uppercase tracking-[0.1em] text-brand-blue group-hover:text-brand-teal">{f.l} Brief</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <div className="fixed bottom-12 right-12 z-[100]">
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
        <div className="bg-white w-[420px] h-[650px] rounded-[4rem] shadow-[0_80px_150px_rgba(0,0,0,0.2)] border border-gray-100 mb-10 flex flex-col overflow-hidden animate-slideUp">
          <div className="bg-brand-blue p-10 text-white flex justify-between items-center relative shadow-2xl">
             <div className="absolute top-0 right-0 p-4 opacity-5"><i className="fas fa-compass text-9xl"></i></div>
            <span className="font-black flex items-center uppercase tracking-[0.3em] text-[11px] relative z-10">
              <i className="fas fa-robot mr-4 text-brand-teal text-xl"></i> SCOUT ASSISTANT
            </span>
            <button onClick={() => setIsOpen(false)} className="text-white/30 hover:text-white transition-colors relative z-10"><i className="fas fa-times"></i></button>
          </div>
          <div className="flex-grow overflow-y-auto p-10 space-y-8 bg-gray-50/40">
            {messages.length === 0 && (
              <div className="text-center mt-24">
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-sm">
                  <i className="fas fa-compass text-brand-teal text-2xl"></i>
                </div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">Ask about independence</p>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`max-w-[85%] p-6 rounded-[2rem] text-sm font-medium leading-relaxed shadow-sm ${m.role === 'user' ? 'bg-brand-teal text-white ml-auto rounded-tr-none' : 'bg-white text-gray-700 mr-auto rounded-tl-none border border-gray-100'}`}>
                {m.text}
              </div>
            ))}
            {loading && (
              <div className="flex space-x-3 p-6 bg-white w-fit rounded-[1.5rem] mr-auto shadow-sm border border-gray-100">
                <div className="w-2.5 h-2.5 bg-brand-teal rounded-full animate-bounce"></div>
                <div className="w-2.5 h-2.5 bg-brand-teal rounded-full animate-bounce [animation-delay:-.3s]"></div>
                <div className="w-2.5 h-2.5 bg-brand-teal rounded-full animate-bounce [animation-delay:-.5s]"></div>
              </div>
            )}
          </div>
          <div className="p-8 border-t bg-white flex space-x-5 items-center">
            <input 
              type="text" 
              value={query} 
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask a question..." 
              className="flex-grow text-sm font-bold border-4 border-gray-50 rounded-[2rem] px-8 py-5 focus:outline-none focus:border-brand-teal/20 transition-all"
            />
            <button 
              onClick={handleSend}
              className="bg-brand-teal text-white w-16 h-16 rounded-[1.5rem] flex items-center justify-center hover:scale-105 shadow-2xl shadow-brand-teal/40 active:scale-95 transition-all"
            >
              <i className="fas fa-paper-plane text-xl"></i>
            </button>
          </div>
        </div>
      )}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-28 h-28 bg-brand-blue text-white rounded-[3.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.4)] flex items-center justify-center hover:scale-110 transition-all text-5xl border-4 border-brand-teal relative group"
      >
        <div className="absolute -top-4 -right-4 w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center border-4 border-brand-blue animate-pulse group-hover:scale-125 transition-all">
          <i className="fas fa-compass text-brand-blue text-sm"></i>
        </div>
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-compass'} text-brand-teal`}></i>
      </button>
    </div>
  );
};

export default DashboardPortal;
