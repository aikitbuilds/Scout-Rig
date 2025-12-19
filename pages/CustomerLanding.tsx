
import React, { useState } from 'react';

const CustomerLanding: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleQueue = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-brand-light text-brand-blue">
      {/* Hero */}
      <section className="relative min-h-[950px] flex items-center bg-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://shop.rpssolarpumps.com/cdn/shop/files/solar-trailer-1.png?v=1707629061&width=600" 
            className="w-full h-full object-cover scale-110 blur-[1px]" 
            alt="Scout Station Mobile Unit" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div>
              <div className="inline-flex items-center space-x-4 bg-brand-blue text-white px-8 py-4 rounded-full mb-12 font-black text-xs uppercase tracking-[0.3em] shadow-2xl">
                <i className="fas fa-exclamation-triangle mr-3 text-brand-gold"></i> DOE: 100GW GRID SHORTAGE
              </div>
              <h1 className="text-7xl md:text-[9rem] font-black mb-12 leading-[0.8] tracking-tighter uppercase">
                BUILT FOR <br/><span className="text-brand-teal">INDEPENDENCE.</span>
              </h1>
              <p className="text-3xl text-gray-600 mb-16 max-w-2xl leading-tight font-medium tracking-tight">
                Stop waiting 5 years for the grid. Deploy <span className="text-brand-blue font-black underline decoration-brand-gold decoration-8">Scout Stations</span> in 2 weeks. Modular power for properties that can't wait.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 mb-16">
                <a href="#queue" className="bg-brand-teal hover:bg-brand-tealDark text-white px-16 py-10 rounded-[2.5rem] font-black text-3xl shadow-[0_30px_60px_rgba(32,128,128,0.4)] transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center uppercase tracking-tighter">
                  ORDER A STATION <i className="fas fa-bolt ml-6 text-xl text-brand-gold"></i>
                </a>
                <button className="bg-brand-blue text-white px-16 py-10 rounded-[2.5rem] font-black text-3xl shadow-2xl transition-all hover:scale-105 active:scale-95 uppercase tracking-tighter">
                  VIEW BETA CASE STUDY
                </button>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-md p-20 rounded-[5rem] shadow-[0_80px_160px_rgba(0,0,0,0.1)] border border-gray-100 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-56 h-56 bg-brand-teal/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <h3 className="text-[10px] font-black mb-16 text-center text-gray-400 uppercase tracking-[0.4em]">Grid vs. Scout Deployment</h3>
              <div className="grid grid-cols-2 gap-16 relative before:absolute before:left-1/2 before:top-8 before:bottom-8 before:w-1 before:bg-gray-100">
                <div className="space-y-12 pr-8 text-center">
                  <p className="font-black text-red-500 uppercase text-[11px] tracking-[0.4em]">Legacy Utility</p>
                  <ul className="space-y-8 text-base font-bold text-gray-400">
                    <li>Impact Studies (12mo)</li>
                    <li>Easements (18mo)</li>
                    <li>Construction (12mo)</li>
                    <li className="pt-8 font-black text-5xl text-gray-300">5 YRS+</li>
                  </ul>
                </div>
                <div className="space-y-12 pl-8 text-center">
                  <p className="font-black text-brand-teal uppercase text-[11px] tracking-[0.4em]">Scout Station</p>
                  <ul className="space-y-8 text-base font-black text-brand-blue">
                    <li>Site Survey (48hr)</li>
                    <li>Transport (1wk)</li>
                    <li>Commission (1wk)</li>
                    <li className="pt-8 font-black text-5xl text-brand-teal">2 WKS</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-48 max-w-7xl mx-auto px-6">
        <div className="text-center mb-32">
          <h2 className="text-7xl font-black mb-10 uppercase tracking-tighter leading-none">GRID FAILURE IS NOT<br/>YOUR PROBLEM.</h2>
          <p className="text-gray-400 text-3xl max-w-4xl mx-auto font-medium tracking-tight">Interconnection is a 5-year risk. Modular stations are a 2-week solution.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            { t: 'Immediate ROI', d: 'Stop burning cash on diesel or idle infrastructure. Start operations on Day 15.', v: '$1,021/YR', l: 'Station 100 Savings' },
            { t: 'Zero Logistics', d: 'No fuel deliveries. No theft risk. No spill liability. Just reliable sun-tracking power.', v: 'FIXED COST', l: 'O&M Baseline' },
            { t: 'Built-In Starlink', d: 'Every Scout Station comes with Starlink Mini built-in for 100% remote uptime.', v: '4G/5G/SAT', l: 'Connectivity' }
          ].map((item, i) => (
            <div key={i} className="bg-white p-16 rounded-[4rem] border-2 border-gray-50 flex flex-col items-center text-center hover:shadow-2xl transition-all shadow-lg group">
              <div className="w-20 h-20 bg-brand-light rounded-3xl flex items-center justify-center mb-10 text-brand-teal text-3xl group-hover:bg-brand-teal group-hover:text-white transition-all shadow-sm">
                <i className={`fas ${i === 0 ? 'fa-chart-line' : i === 1 ? 'fa-shield-halved' : 'fa-satellite'}`}></i>
              </div>
              <h4 className="font-black text-3xl mb-8 text-brand-blue uppercase tracking-tighter">{item.t}</h4>
              <p className="text-lg text-gray-500 mb-14 font-medium leading-relaxed">{item.d}</p>
              <div className="mt-auto">
                <p className="text-5xl font-black text-brand-teal tracking-tighter">{item.v}</p>
                <p className="text-[11px] font-black text-brand-gold uppercase tracking-[0.3em] mt-4">{item.l}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Queue Form */}
      <section id="queue" className="py-48 bg-brand-blue text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-20 opacity-5"><i className="fas fa-bolt text-[40rem]"></i></div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10">
          <div>
            <h2 className="text-7xl font-black mb-10 leading-[0.9] uppercase tracking-tighter">CLAIM YOUR<br/>WINDOW.</h2>
            <p className="text-gray-300 text-3xl mb-16 font-light leading-tight">Capacity for the Station 100 Beta is 85% full. Secure your West Texas / NM deployment window today.</p>
            
            <div className="bg-white/5 p-16 rounded-[5rem] border border-white/10 shadow-3xl backdrop-blur-xl">
              <h4 className="text-[11px] font-black text-brand-teal uppercase tracking-[0.4em] mb-12">BETA DEPLOYMENT QUEUE</h4>
              <div className="space-y-8">
                {[
                  { q: 'Midland/Odessa', s: 'WAITLIST ONLY', c: 'text-red-400 bg-red-400/10' },
                  { q: 'South TX / Pecos', s: 'WAITLIST ONLY', c: 'text-red-400 bg-red-400/10' },
                  { q: 'West TX / Remote', s: '2 UNITS AVAIL', c: 'text-brand-teal bg-brand-teal/10' },
                  { q: 'Southern NM', s: '4 UNITS AVAIL', c: 'text-brand-teal bg-brand-teal/10' }
                ].map((s, i) => (
                  <div key={i} className="flex justify-between items-center p-6 border-b border-white/5">
                    <span className="font-black text-2xl tracking-tight">{s.q}</span>
                    <span className={`text-[11px] font-black px-6 py-2 rounded-full uppercase tracking-widest ${s.c}`}>{s.s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-20 rounded-[5rem] shadow-[0_100px_200px_rgba(0,0,0,0.4)] text-brand-blue">
            {submitted ? (
              <div className="text-center py-32 bg-teal-50 rounded-[4rem]">
                <i className="fas fa-compass text-brand-teal text-9xl mb-12 animate-pulse shadow-2xl"></i>
                <h3 className="text-4xl font-black uppercase tracking-tighter">ORDER LOGGED</h3>
                <p className="text-gray-500 text-xl mt-6 font-medium">A Scout Engineer will contact you for a virtual site survey within 4 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleQueue} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-6">Owner/Contact</label>
                    <input required type="text" placeholder="Mark Stevens" className="w-full bg-brand-light border-4 border-transparent focus:border-brand-teal/20 rounded-[2rem] px-10 py-6 focus:outline-none font-bold text-lg" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-6">Property Name</label>
                    <input required type="text" placeholder="Legacy Ranch 50" className="w-full bg-brand-light border-4 border-transparent focus:border-brand-teal/20 rounded-[2rem] px-10 py-6 focus:outline-none font-bold text-lg" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-6">Daily Load (kWh)</label>
                    <input required type="number" placeholder="Estimated 10kWh" className="w-full bg-brand-light border-4 border-transparent focus:border-brand-teal/20 rounded-[2rem] px-10 py-6 focus:outline-none font-bold text-lg" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-6">Deployment Hub</label>
                    <select className="w-full bg-brand-light border-4 border-transparent focus:border-brand-teal/20 rounded-[2rem] px-10 py-6 focus:outline-none font-black text-gray-500">
                      <option>West TX (Remote)</option>
                      <option>Southern New Mexico</option>
                      <option>Pecos Industrial</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-6">Official Email</label>
                  <input required type="email" placeholder="mark@legacyranch.com" className="w-full bg-brand-light border-4 border-transparent focus:border-brand-teal/20 rounded-[2rem] px-10 py-6 focus:outline-none font-bold text-lg" />
                </div>
                <button type="submit" className="w-full bg-brand-teal text-white py-10 rounded-[2.5rem] font-black text-3xl shadow-[0_40px_80px_rgba(32,128,128,0.4)] transition-all hover:scale-[1.03] transform active:scale-95 uppercase tracking-tighter">
                  RESERVE STATION 100 BETA
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
