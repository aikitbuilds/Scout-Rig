
import React, { useState } from 'react';

const StrategicLanding: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleBriefing = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-brand-light text-brand-blue min-h-screen">
      {/* Hero */}
      <section className="py-32 bg-brand-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15 grayscale-[30%]">
          <img 
            src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover" 
            alt="Infrastructure" 
          />
        </div>
        <div className="absolute inset-0 bg-brand-blue/60 backdrop-blur-[2px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <div className="bg-brand-teal/30 text-brand-teal px-8 py-3 rounded-full text-xs font-black uppercase tracking-[0.4em] mb-12 border border-brand-teal/50 backdrop-blur-3xl shadow-[0_0_30px_rgba(32,128,128,0.3)]">
            STRATEGIC MEMORANDUM
          </div>
          <h1 className="text-7xl md:text-9xl font-black mb-10 leading-[0.85] tracking-tighter drop-shadow-2xl">
            THE $500M <br/><span className="text-brand-teal">POWER THESIS.</span>
          </h1>
          <p className="text-2xl md:text-4xl text-gray-300 mb-20 max-w-5xl font-light leading-snug">
            As the DOE warns of grid collapse, unitized mobile assets bypass interconnection delays to capture extreme energy margins.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20 w-full max-w-6xl">
            {[
              { l: 'Asset Capex', v: '$35K–105K' },
              { l: 'Avg Revenue', v: '$68K / YR' },
              { l: 'Target IRR', v: '18.4%' },
              { l: 'Equity Split', v: 'Project-Specific' }
            ].map((s, i) => (
              <div key={i} className="text-center group">
                <p className="text-4xl md:text-5xl font-black text-white group-hover:text-brand-teal transition-colors tracking-tighter">{s.v}</p>
                <p className="text-[10px] text-gray-500 uppercase font-black mt-4 tracking-[0.3em]">{s.l}</p>
              </div>
            ))}
          </div>
          <a href="#briefing" className="bg-brand-teal hover:bg-teal-500 px-16 py-8 rounded-[2.5rem] text-3xl font-black transition-all shadow-[0_30px_80px_rgba(32,128,128,0.5)] transform hover:scale-105 active:scale-95 uppercase tracking-tighter">
            REQUEST INSTITUTIONAL BRIEFING <i className="fas fa-arrow-right ml-4 text-xl"></i>
          </a>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-40 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          <div className="space-y-16">
            <h2 className="text-6xl font-black leading-[0.9] uppercase tracking-tighter">THE CAPITAL<br/>VELOCITY ADVANTAGE</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-xl transition-all">
                <h4 className="font-black text-brand-blue uppercase text-xs mb-8 tracking-[0.3em] text-gray-400">Utility-Scale Infra</h4>
                <ul className="space-y-6 text-sm font-bold text-gray-500 flex-grow">
                  <li className="flex items-center space-x-3"><i className="fas fa-minus-circle text-red-300"></i> <span>8-Year Lead Times</span></li>
                  <li className="flex items-center space-x-3"><i className="fas fa-minus-circle text-red-300"></i> <span>Permitting Quagmire</span></li>
                  <li className="flex items-center space-x-3"><i className="fas fa-minus-circle text-red-300"></i> <span>Transmission Risk</span></li>
                </ul>
                <div className="pt-8 mt-8 border-t border-gray-100 text-center font-black text-gray-300 uppercase text-[10px] tracking-widest">Low Velocity</div>
              </div>
              <div className="bg-brand-blue text-white p-12 rounded-[3.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.3)] flex flex-col h-full transform hover:scale-105 transition-all">
                <h4 className="font-black text-brand-teal uppercase text-xs mb-8 tracking-[0.3em]">Distributed Rigs</h4>
                <ul className="space-y-6 text-sm font-black text-gray-300 flex-grow">
                  <li className="flex items-center space-x-3"><i className="fas fa-plus-circle text-brand-teal"></i> <span>4-Week Deployment</span></li>
                  <li className="flex items-center space-x-3"><i className="fas fa-plus-circle text-brand-teal"></i> <span>Bypass Grid Queues</span></li>
                  <li className="flex items-center space-x-3"><i className="fas fa-plus-circle text-brand-teal"></i> <span>Liquid RWA Exit</span></li>
                </ul>
                <div className="pt-8 mt-8 border-t border-white/10 text-center font-black text-brand-teal uppercase text-[10px] tracking-widest">High Velocity</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-16 rounded-[5rem] shadow-[0_60px_120px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col justify-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <h3 className="text-xs font-black mb-12 uppercase tracking-[0.3em] text-gray-400">Target Pipeline Summary</h3>
            <div className="space-y-10">
              {[
                { s: 'Rig Pool Alpha', t: 'Fully Funded', d: '7.3MW Distributed Capacity' },
                { s: 'Rig Pool Beta', t: 'Allocation Open', d: 'Permian O&G Load Bridge' },
                { s: 'Rig Pool Gamma', t: 'Q3 Pipeline', d: 'Industrial Compute Clusters' }
              ].map((item, i) => (
                <div key={i} className="flex space-x-8 items-start group">
                  <div className="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center text-brand-blue flex-shrink-0 group-hover:bg-brand-teal group-hover:text-white transition-all shadow-sm">
                    <i className="fas fa-chart-line-up"></i>
                  </div>
                  <div>
                    <h5 className="font-black text-xl text-brand-blue">{item.s} <span className="text-[10px] font-black text-gray-400 ml-3 uppercase tracking-widest">{item.t}</span></h5>
                    <p className="text-base text-gray-500 font-medium">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Briefing Form */}
      <section id="briefing" className="py-40 max-w-4xl mx-auto px-4">
        <div className="bg-white p-20 rounded-[5rem] shadow-[0_60px_120px_rgba(0,0,0,0.1)] border border-gray-100">
          <h2 className="text-5xl font-black mb-6 uppercase tracking-tight">INSTITUTIONAL<br/>SHORTLIST</h2>
          <p className="text-gray-500 mb-16 text-xl font-medium">Request a private 30-minute briefing to review unit economics and compliance structures.</p>
          {submitted ? (
            <div className="text-center py-24 bg-brand-blue text-white rounded-[4rem] animate-fadeIn">
              <i className="fas fa-envelope-open-text text-brand-teal text-8xl mb-12 shadow-brand-teal/20"></i>
              <h4 className="text-4xl font-black mb-4 uppercase">BRIEFING REQUESTED</h4>
              <p className="text-gray-400 text-lg">Our CFO will send the Investor Memo and scheduling link shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleBriefing} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <input required type="text" placeholder="Principal Name" className="w-full bg-gray-50 border-2 border-transparent focus:border-brand-teal/30 rounded-[1.5rem] px-10 py-6 focus:outline-none font-bold text-xl" />
                <input required type="text" placeholder="Firm / Family Office" className="w-full bg-gray-50 border-2 border-transparent focus:border-brand-teal/30 rounded-[1.5rem] px-10 py-6 focus:outline-none font-bold text-xl" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <input required type="text" placeholder="Title" className="w-full bg-gray-50 border-2 border-transparent focus:border-brand-teal/30 rounded-[1.5rem] px-10 py-6 focus:outline-none font-bold text-xl" />
                <input required type="email" placeholder="Institutional Email" className="w-full bg-gray-50 border-2 border-transparent focus:border-brand-teal/30 rounded-[1.5rem] px-10 py-6 focus:outline-none font-bold text-xl" />
              </div>
              <button type="submit" className="w-full bg-brand-blue text-white py-8 rounded-[1.5rem] font-black text-3xl shadow-[0_30px_60px_rgba(0,0,0,0.3)] transition-all hover:scale-[1.02] transform active:scale-95 uppercase tracking-tighter">
                REQUEST DATA ROOM ACCESS
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default StrategicLanding;
