
import React, { useState } from 'react';

const InvestorLanding: React.FC = () => {
  const [allocation, setAllocation] = useState(60);
  const [submitted, setSubmitted] = useState(false);

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const yieldScenarios = [
    { title: 'ENTRY LEVEL', invest: '$500', tokens: '5', annual: '$150', threeYear: '$950' },
    { title: 'GROWTH ALLOC', invest: '$2,500', tokens: '25', annual: '$750', threeYear: '$4,750' },
    { title: 'INSTITUTIONAL', invest: '$10,000', tokens: '100', annual: '$3,000', threeYear: '$19,000' }
  ];

  return (
    <div className="bg-[#0f172a] text-white min-h-screen">
      {/* Hero */}
      <section className="relative h-[900px] flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 opacity-20 grayscale-[40%]">
          <img 
            src="https://images.unsplash.com/photo-1544207240-8b1025eb7aeb?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover" 
            alt="Energy Assets" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-[#0f172a]/80"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-3 bg-brand-teal/20 border border-brand-teal/40 px-6 py-3 rounded-full mb-12 backdrop-blur-2xl">
            <span className="w-3 h-3 bg-brand-teal rounded-full animate-pulse shadow-[0_0_15px_#208080]"></span>
            <span className="text-sm font-black tracking-[0.2em] uppercase text-brand-teal">RIG TOKEN #1: Q1 ALLOCATION OPEN</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-black mb-10 leading-[0.85] tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            OWN THE <br/><span className="text-brand-teal">YIELD.</span>
          </h1>
          <p className="text-xl md:text-3xl text-gray-300 mb-16 max-w-3xl mx-auto font-medium leading-tight">
            AI demand is breaking the grid. We build the bridge. You collect the cash flow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#allocation" className="bg-brand-teal hover:bg-teal-500 px-14 py-7 rounded-[2rem] text-2xl font-black transition-all shadow-[0_25px_60px_rgba(32,128,128,0.5)] transform hover:scale-105 active:scale-95 flex items-center justify-center">
              SECURE ALLOCATION <i className="fas fa-chevron-right ml-4 text-sm"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Yield Scenarios */}
      <section className="py-40 bg-brand-blue/30 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-6xl font-black mb-6 uppercase tracking-tight">Investment Tiers</h2>
            <p className="text-gray-400 text-xl font-light">Based on Rig #1 baseline performance of 30.2% APY.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {yieldScenarios.map((s, i) => (
              <div key={i} className="bg-white/5 border-2 border-white/10 p-14 rounded-[4rem] hover:border-brand-teal hover:bg-white/[0.07] transition-all text-center group relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-teal/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-brand-teal/20 transition-all"></div>
                <p className="text-xs font-black text-gray-500 uppercase tracking-[0.3em] mb-4">{s.title}</p>
                <p className="text-6xl font-black mb-12 group-hover:text-brand-teal transition-colors tracking-tighter">{s.invest}</p>
                <div className="space-y-6 text-base mb-12 text-gray-400 flex-grow">
                  <div className="flex justify-between border-b border-white/5 pb-4"><span>RIG Units:</span> <span className="font-bold text-white">{s.tokens}</span></div>
                  <div className="flex justify-between border-b border-white/5 pb-4"><span>Annual Cash:</span> <span className="font-bold text-brand-teal">{s.annual}</span></div>
                  <div className="flex justify-between pt-2"><span>3-Yr Projected:</span> <span className="font-bold text-white text-xl">{s.threeYear}</span></div>
                </div>
                <button className="w-full py-6 rounded-3xl bg-white/10 border-2 border-white/20 font-black text-xl hover:bg-brand-teal hover:border-brand-teal transition-all shadow-xl">CHOOSE TIER</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Allocation Queue Form */}
      <section id="allocation" className="py-40 max-w-5xl mx-auto px-4">
        <div className="bg-white/5 border border-white/10 p-20 rounded-[5rem] shadow-[0_50px_100px_rgba(0,0,0,0.5)] relative overflow-hidden">
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-teal/20 rounded-full blur-[120px]"></div>
          <h2 className="text-5xl font-black mb-6 uppercase leading-none">JOIN THE<br/>WHITESPACE LIST</h2>
          <p className="text-gray-400 mb-16 text-xl font-light">Rig #1 round is nearly finalized. Secure your priority access for follow-on rig deployments.</p>
          
          <div className="mb-20 p-10 bg-white/[0.03] rounded-[3rem] border border-white/10 shadow-inner">
            <div className="flex justify-between items-center text-xs font-black uppercase tracking-[0.3em] mb-6">
              <span className="text-gray-500">Rig #1 Round Progress</span>
              <span className="text-brand-teal">{allocation}% Allocated</span>
            </div>
            <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden shadow-2xl">
              <div className="h-full bg-brand-teal transition-all duration-1000 shadow-[0_0_30px_rgba(32,128,128,0.8)]" style={{ width: `${allocation}%` }}></div>
            </div>
          </div>

          {submitted ? (
            <div className="text-center py-24 bg-brand-teal/10 rounded-[4rem] border border-brand-teal/20 animate-fadeIn">
              <i className="fas fa-shield-check text-7xl text-brand-teal mb-10"></i>
              <h4 className="text-4xl font-black mb-4 uppercase">ACCESS GRANTED</h4>
              <p className="text-gray-400 text-lg">Check your email for Rig #1 PPM and KYC portal link.</p>
            </div>
          ) : (
            <form onSubmit={handleJoin} className="space-y-10 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <input required type="text" placeholder="Legal Name" className="w-full bg-white/5 border-2 border-white/10 rounded-[1.5rem] px-10 py-6 focus:outline-none focus:border-brand-teal transition-all text-xl font-medium" />
                <input required type="email" placeholder="Primary Email" className="w-full bg-white/5 border-2 border-white/10 rounded-[1.5rem] px-10 py-6 focus:outline-none focus:border-brand-teal transition-all text-xl font-medium" />
              </div>
              <div>
                <label className="block text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-4 ml-6">Planned Check Size</label>
                <select className="w-full bg-[#0f172a] border-2 border-white/10 rounded-[1.5rem] px-10 py-6 focus:outline-none focus:border-brand-teal transition-all text-xl font-black">
                  <option>&lt; $5,000</option>
                  <option>$5,000 – $25,000</option>
                  <option>$25,000 – $100,000</option>
                  <option>$100,000+</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-brand-teal py-8 rounded-[1.5rem] font-black text-3xl shadow-[0_25px_60px_rgba(32,128,128,0.4)] transition-all hover:scale-[1.02] transform active:scale-95 uppercase tracking-tighter">
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
