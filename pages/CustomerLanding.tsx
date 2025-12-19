
import React, { useState } from 'react';

const CustomerLanding: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleQueue = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white text-brand-blue">
      {/* Hero */}
      <section className="relative min-h-[850px] flex items-center bg-brand-light py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 grayscale-[50%] opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover" 
            alt="Modular Rig" 
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="inline-flex items-center space-x-3 bg-red-600 text-white px-6 py-3 rounded-full mb-10 font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-red-500/30">
                <i className="fas fa-exclamation-triangle mr-2"></i> GRID QUEUE: 36 MONTH DELAY
              </div>
              <h1 className="text-6xl md:text-8xl font-black mb-10 leading-[0.85] tracking-tighter">
                STOP WAITING. <br/><span className="text-brand-teal">START POWERING.</span>
              </h1>
              <p className="text-2xl text-gray-600 mb-12 max-w-xl leading-snug font-medium">
                DOE warnings confirm the grid can't keep up. Bridge the 18-month power gap with containerized solar + battery rigs. Deployed in weeks.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <a href="#queue" className="bg-brand-teal hover:bg-teal-500 text-white px-12 py-7 rounded-2xl font-black text-2xl shadow-[0_25px_50px_rgba(32,128,128,0.4)] transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center">
                  SECURE A RIG <i className="fas fa-bolt ml-4 text-lg"></i>
                </a>
                <button className="bg-brand-blue text-white px-12 py-7 rounded-2xl font-black text-2xl shadow-xl shadow-blue-500/20 transition-all hover:scale-105 active:scale-95">
                  RIG SPEC SHEET
                </button>
              </div>
            </div>

            <div className="bg-white p-16 rounded-[4rem] shadow-[0_60px_120px_rgba(0,0,0,0.1)] border border-gray-100 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-teal/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <h3 className="text-xs font-black mb-12 text-center text-gray-400 uppercase tracking-[0.3em]">Path Comparison Analysis</h3>
              <div className="grid grid-cols-2 gap-12 relative before:absolute before:left-1/2 before:top-4 before:bottom-4 before:w-px before:bg-gray-100">
                <div className="space-y-10 pr-6">
                  <p className="font-black text-red-500 uppercase text-[10px] tracking-[0.3em] text-center">Standard Grid</p>
                  <ul className="space-y-6 text-sm font-bold">
                    <li className="flex items-start space-x-3 text-gray-300">
                      <i className="fas fa-times-circle mt-1 text-xs"></i>
                      <span>Impact Studies (12mo)</span>
                    </li>
                    <li className="flex items-start space-x-3 text-gray-300">
                      <i className="fas fa-times-circle mt-1 text-xs"></i>
                      <span>Transformer Lead (18mo)</span>
                    </li>
                    <li className="flex items-start space-x-3 text-gray-300">
                      <i className="fas fa-times-circle mt-1 text-xs"></i>
                      <span>Line Install (6mo)</span>
                    </li>
                    <li className="text-center pt-6 font-black text-3xl text-gray-200">3 YRS+</li>
                  </ul>
                </div>
                <div className="space-y-10 pl-6">
                  <p className="font-black text-brand-teal uppercase text-[10px] tracking-[0.3em] text-center">Solar Rig</p>
                  <ul className="space-y-6 text-sm font-black">
                    <li className="flex items-start space-x-3 text-brand-blue">
                      <i className="fas fa-check-circle mt-1 text-xs text-brand-teal"></i>
                      <span>Site Review (1wk)</span>
                    </li>
                    <li className="flex items-start space-x-3 text-brand-blue">
                      <i className="fas fa-check-circle mt-1 text-xs text-brand-teal"></i>
                      <span>Transport (1wk)</span>
                    </li>
                    <li className="flex items-start space-x-3 text-brand-blue">
                      <i className="fas fa-check-circle mt-1 text-xs text-brand-teal"></i>
                      <span>Operational (2wks)</span>
                    </li>
                    <li className="text-center pt-6 font-black text-3xl text-brand-teal">4 WKS</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-40 max-w-7xl mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="text-6xl font-black mb-6 uppercase tracking-tight">The Grid Is Breaking</h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto font-medium">Interconnection is no longer a utility service—it's a multi-year risk. We eliminate it.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { t: 'Lost Revenue', d: 'Every month of idle infrastructure is capital burning. Start compute operations on Day 30.', v: '$6k–15k/mo', l: 'Cost of Waiting' },
            { t: 'Diesel Risk', d: 'Stop worrying about diesel price spikes and the logistics of constant refueling in remote pads.', v: 'FIXED RATE', l: 'Energy Budget' },
            { t: 'ESG Compliance', d: 'Transition remote ops to clean power immediately. Documentable carbon offsets for SEC reporting.', v: 'NET ZERO', l: 'Carbon Impact' }
          ].map((item, i) => (
            <div key={i} className="bg-brand-light p-14 rounded-[3rem] border border-gray-100 flex flex-col items-center text-center hover:shadow-2xl transition-all">
              <h4 className="font-black text-2xl mb-6 text-brand-blue">{item.t}</h4>
              <p className="text-base text-gray-500 mb-12 font-medium leading-relaxed">{item.d}</p>
              <div className="mt-auto">
                <p className="text-4xl font-black text-brand-teal tracking-tighter">{item.v}</p>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mt-3">{item.l}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Queue Form */}
      <section id="queue" className="py-40 bg-brand-blue text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-6xl font-black mb-8 leading-none">RESERVE YOUR<br/>WINDOW.</h2>
            <p className="text-gray-300 text-2xl mb-12 font-light">Capacity is allocated on a first-come, first-served basis. Secure your Q3/Q4 rig windows today.</p>
            
            <div className="bg-white/5 p-12 rounded-[3.5rem] border border-white/10 shadow-2xl">
              <h4 className="text-xs font-black text-brand-teal uppercase tracking-[0.3em] mb-10">2026 PIPELINE SLOTS</h4>
              <div className="space-y-6">
                {[
                  { q: 'Q1 Window', s: 'WAITLIST ONLY', c: 'bg-red-500/20 text-red-400' },
                  { q: 'Q2 Window', s: 'WAITLIST ONLY', c: 'bg-red-500/20 text-red-400' },
                  { q: 'Q3 Window', s: '2 RIGS AVAIL', c: 'bg-brand-teal/20 text-brand-teal' },
                  { q: 'Q4 Window', s: '4 RIGS AVAIL', c: 'bg-brand-teal/20 text-brand-teal' }
                ].map((s, i) => (
                  <div key={i} className="flex justify-between items-center p-5 border-b border-white/5">
                    <span className="font-black text-lg">{s.q}</span>
                    <span className={`text-[10px] font-black px-4 py-1.5 rounded-full ${s.c}`}>{s.s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-16 rounded-[4rem] shadow-[0_60px_120px_rgba(0,0,0,0.4)] text-brand-blue">
            {submitted ? (
              <div className="text-center py-20 bg-teal-50 rounded-[3rem]">
                <i className="fas fa-truck-loading text-brand-teal text-8xl mb-8 animate-pulse"></i>
                <h3 className="text-3xl font-black uppercase">RESERVATION LOGGED</h3>
                <p className="text-gray-500 text-lg mt-4">An applications engineer will contact you with a site survey schedule.</p>
              </div>
            ) : (
              <form onSubmit={handleQueue} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <input required type="text" placeholder="Contact Name" className="w-full bg-gray-50 border-2 border-transparent focus:border-brand-teal/30 rounded-[1.5rem] px-8 py-5 focus:outline-none font-medium" />
                  <input required type="text" placeholder="Company Name" className="w-full bg-gray-50 border-2 border-transparent focus:border-brand-teal/30 rounded-[1.5rem] px-8 py-5 focus:outline-none font-medium" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <input required type="number" placeholder="Estimated kW Needed" className="w-full bg-gray-50 border-2 border-transparent focus:border-brand-teal/30 rounded-[1.5rem] px-8 py-5 focus:outline-none font-medium" />
                  <select className="w-full bg-gray-50 border-2 border-transparent focus:border-brand-teal/30 rounded-[1.5rem] px-8 py-5 focus:outline-none font-black text-gray-500">
                    <option>Region: Permian Basin</option>
                    <option>Region: South Texas</option>
                    <option>Region: West Texas / NM</option>
                  </select>
                </div>
                <input required type="email" placeholder="Work Email" className="w-full bg-gray-50 border-2 border-transparent focus:border-brand-teal/30 rounded-[1.5rem] px-8 py-5 focus:outline-none font-medium" />
                <button type="submit" className="w-full bg-brand-teal text-white py-7 rounded-[1.5rem] font-black text-2xl shadow-[0_25px_50px_rgba(32,128,128,0.4)] transition-all hover:scale-[1.02] transform active:scale-95 uppercase tracking-tighter">
                  RESERVE DEPLOYMENT WINDOW
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerLanding;
