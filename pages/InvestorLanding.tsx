
import React, { useState } from 'react';

const InvestorLanding: React.FC = () => {
  const [allocation, setAllocation] = useState(62);
  const [submitted, setSubmitted] = useState(false);

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const yieldScenarios = [
    { title: 'STATION 100 POOL', invest: '$1,000', tokens: '10', annual: '$300', threeYear: '$1,900' },
    { title: 'SCALED GROWTH', invest: '$5,000', tokens: '50', annual: '$1,500', threeYear: '$9,500' },
    { title: 'INSTITUTIONAL RIG', invest: '$25,000', tokens: '250', annual: '$7,500', threeYear: '$47,500' }
  ];

  return (
    <div className="bg-brand-blue text-white min-h-screen">
      {/* Hero */}
      <section className="relative h-[950px] flex items-center justify-center bg-brand-blue overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://img1.wsimg.com/isteam/ip/37a8ab41-aaa8-4049-a9e8-582b390ede34/MS-425-header-1.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280,h:512" 
            className="w-full h-full object-cover" 
            alt="Scout Station Header Asset" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-brand-blue/60 to-brand-blue/40"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center space-x-4 bg-brand-teal/20 border border-brand-teal/40 px-8 py-4 rounded-full mb-12 backdrop-blur-3xl">
            <span className="w-4 h-4 bg-brand-teal rounded-full animate-pulse shadow-[0_0_20px_#208080]"></span>
            <span className="text-sm font-black tracking-[0.3em] uppercase text-brand-teal">SCOUT TOKEN ALLOCATION: Q1 2026 ACTIVE</span>
          </div>
          <h1 className="text-7xl md:text-[10rem] font-black mb-12 leading-[0.8] tracking-tighter drop-shadow-3xl uppercase">
            YIELD FROM <br/><span className="text-brand-gold italic">REAL POWER.</span>
          </h1>
          <p className="text-2xl md:text-5xl text-gray-300 mb-20 max-w-5xl mx-auto font-medium leading-tight tracking-tight">
            The DOE forecasts a <span className="text-white border-b-4 border-brand-teal">100 GW gap</span>. We own the bridge. You own the yield. RWA tokenization for modular energy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <a href="#allocation" className="bg-brand-teal hover:bg-brand-tealDark px-16 py-10 rounded-[2.5rem] text-3xl font-black transition-all shadow-[0_30px_80px_rgba(32,128,128,0.5)] transform hover:scale-105 active:scale-95 flex items-center justify-center uppercase tracking-tighter">
              REQUEST ALLOCATION ACCESS <i className="fas fa-arrow-right ml-6 text-xl"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Yield Scenarios */}
      <section className="py-48 bg-white/5 border-y border-white/10 relative z-10 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-32">
            <h2 className="text-7xl font-black mb-10 uppercase tracking-tighter">CASH-FLOW TIERS</h2>
            <p className="text-gray-400 text-3xl font-light tracking-tight">Based on Scout Station 100 baseline performance of 30.2% APY.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {yieldScenarios.map((s, i) => (
              <div key={i} className="bg-white/[0.03] border-4 border-white/5 p-20 rounded-[5rem] hover:border-brand-teal hover:bg-white/[0.08] transition-all text-center group relative overflow-hidden flex flex-col shadow-2xl">
                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-teal/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-brand-teal/30 transition-all"></div>
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] mb-6">{s.title}</p>
                <p className="text-7xl font-black mb-16 group-hover:text-brand-teal transition-colors tracking-tighter leading-none">{s.invest}</p>
                <div className="space-y-8 text-lg mb-16 text-gray-400 flex-grow font-bold">
                  <div className="flex justify-between border-b border-white/5 pb-6"><span>SCOUT Units:</span> <span className="text-white">{s.tokens}</span></div>
                  <div className="flex justify-between border-b border-white/5 pb-6"><span>Monthly Cash:</span> <span className="text-brand-gold">{s.annual} / MO</span></div>
                  <div className="flex justify-between pt-4"><span>3-Yr Return:</span> <span className="text-white text-2xl">{s.threeYear}</span></div>
                </div>
                <button className="w-full py-8 rounded-[2rem] bg-white/10 border-4 border-white/20 font-black text-2xl hover:bg-brand-teal hover:border-brand-teal transition-all shadow-2xl uppercase tracking-tighter">SELECT ALLOCATION</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Allocation Queue Form */}
      <section id="allocation" className="py-48 max-w-6xl mx-auto px-6">
        <div className="bg-white/5 border-2 border-white/10 p-24 rounded-[6rem] shadow-[0_80px_150px_rgba(0,0,0,0.6)] relative overflow-hidden">
          <div className="absolute -bottom-32 -left-32 w-[30rem] h-[30rem] bg-brand-teal/20 rounded-full blur-[150px]"></div>
          <h2 className="text-6xl font-black mb-10 uppercase leading-none tracking-tighter">SECURE YOUR<br/>CHECK SIZE</h2>
          <p className="text-gray-400 mb-20 text-2xl font-light max-w-3xl">Station Series #1 allocation is nearly closed. Secure priority rights for our multi-gigawatt pipeline.</p>
          
          <div className="mb-24 p-14 bg-white/[0.02] rounded-[4rem] border border-white/10 shadow-inner backdrop-blur-md">
            <div className="flex justify-between items-center text-xs font-black uppercase tracking-[0.4em] mb-8">
              <span className="text-gray-500">Rig Series #1 Alpha Pool</span>
              <span className="text-brand-teal">{allocation}% Allocated</span>
            </div>
            <div className="w-full h-5 bg-white/10 rounded-full overflow-hidden shadow-2xl">
              <div className="h-full bg-brand-teal transition-all duration-1000 shadow-[0_0_50px_rgba(32,128,128,0.9)]" style={{ width: `${allocation}%` }}></div>
            </div>
          </div>

          {submitted ? (
            <div className="text-center py-32 bg-brand-teal/10 rounded-[5rem] border-2 border-brand-teal/30 animate-fadeIn">
              <i className="fas fa-lock-open text-9xl text-brand-gold mb-12 shadow-2xl"></i>
              <h4 className="text-5xl font-black mb-6 uppercase tracking-tighter">PORTAL ACCESS GRANTED</h4>
              <p className="text-gray-400 text-2xl">Check your encrypted email for the Scout Station Private Placement Memo (PPM).</p>
            </div>
          ) : (
            <form onSubmit={handleJoin} className="space-y-12 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <input required type="text" placeholder="Full Name" className="w-full bg-white/5 border-4 border-white/10 rounded-[2.5rem] px-12 py-8 focus:outline-none focus:border-brand-teal transition-all text-2xl font-bold placeholder-gray-700" />
                <input required type="email" placeholder="Institutional Email" className="w-full bg-white/5 border-4 border-white/10 rounded-[2.5rem] px-12 py-8 focus:outline-none focus:border-brand-teal transition-all text-2xl font-bold placeholder-gray-700" />
              </div>
              <div>
                <label className="block text-[11px] font-black text-gray-500 uppercase tracking-[0.4em] mb-6 ml-8">Target Asset Allocation</label>
                <select className="w-full bg-brand-blue border-4 border-white/10 rounded-[2.5rem] px-12 py-8 focus:outline-none focus:border-brand-teal transition-all text-2xl font-black">
                  <option>&lt; $10,000</option>
                  <option>$10,000 – $50,000</option>
                  <option>$50,000 – $250,000</option>
                  <option>$250,000+</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-brand-teal py-10 rounded-[2.5rem] font-black text-4xl shadow-[0_40px_100px_rgba(32,128,128,0.5)] transition-all hover:scale-[1.02] transform active:scale-95 uppercase tracking-tighter">
                REQUEST ACCESS PORTAL
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default InvestorLanding;
