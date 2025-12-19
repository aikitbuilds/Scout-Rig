
import React, { useState, useEffect } from 'react';

const PartnerLanding: React.FC = () => {
  const [calc, setCalc] = useState({ rigs: 1, revShare: 15 });
  const [submitted, setSubmitted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const baselineStationRevenue = 68000;
  const annualPartnerRevenue = calc.rigs * baselineStationRevenue * (calc.revShare / 100);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scenarios = [
    {
      title: 'Scout Station 100',
      pain: 'Residential & Small Ops. Waiting years for grid ties.',
      action: 'You manage local install + Starlink setup.',
      revenue: '$6,800 - $10,200/yr per unit'
    },
    {
      title: 'Scout Station 200',
      pain: 'O&G Remote Pads. Paying 3x diesel premium.',
      action: 'You handle Compass AI sun-tracking O&M.',
      revenue: '$10,200 - $15,300/yr per unit'
    },
    {
      title: 'Scout Station 300',
      pain: 'Data Center Clusters. Grid interconnection is dead.',
      action: 'You deploy high-capacity modular grids.',
      revenue: '$13,600 - $20,400/yr per unit'
    }
  ];

  return (
    <div className="bg-brand-light">
      {/* Hero Section */}
      <section className="relative min-h-[900px] flex items-center justify-center bg-brand-blue text-white py-24 overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none z-0"
          style={{ 
            transform: `translateY(${scrollY * 0.2}px) scale(1.05)`,
            transition: 'transform 0.05s linear',
            willChange: 'transform'
          }}
        >
          <img 
            src="https://img1.wsimg.com/isteam/ip/37a8ab41-aaa8-4049-a9e8-582b390ede34/0c23ce636dd324851dc098be7d27d7a7.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280" 
            className="w-full h-full object-cover opacity-40 grayscale-[20%]" 
            alt="Scout Station Array" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/80 via-transparent to-brand-blue"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center space-x-3 bg-brand-gold/20 border border-brand-gold/30 px-6 py-3 rounded-full mb-12 backdrop-blur-2xl">
            <span className="w-3 h-3 bg-brand-gold rounded-full animate-pulse shadow-[0_0_15px_#FFB800]"></span>
            <span className="text-sm font-black tracking-[0.2em] uppercase text-brand-gold">DOE ALERT: 100GW GRID DEFICIT BY 2030</span>
          </div>
          <h1 className="text-6xl md:text-[8rem] font-black mb-10 leading-[0.85] tracking-tighter drop-shadow-2xl uppercase">
            POWER <span className="text-brand-teal">INDEPENDENCE.</span>
          </h1>
          <p className="text-2xl md:text-4xl text-gray-300 mb-16 max-w-4xl mx-auto font-light leading-tight">
            The grid is stalled. <span className="text-white font-bold underline decoration-brand-teal decoration-4">Scout Rig</span> is moving. Join our regional partner network and own the power gap.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <a href="#apply" className="bg-brand-teal hover:bg-brand-tealDark text-white px-14 py-8 rounded-[2rem] text-2xl font-black shadow-[0_30px_60px_rgba(32,128,128,0.4)] transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center uppercase tracking-tighter">
              APPLY FOR BETA ACCESS <i className="fas fa-compass ml-5 text-lg"></i>
            </a>
            <a href="#scenarios" className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 backdrop-blur-md px-14 py-8 rounded-[2rem] text-2xl font-black transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center uppercase tracking-tighter">
              PRODUCT SPECS
            </a>
          </div>
        </div>
      </section>

      {/* Product Scenarios */}
      <section id="scenarios" className="py-40 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-6xl font-black text-brand-blue mb-6 uppercase tracking-tight">SCOUT STATION LINEUP</h2>
            <p className="text-gray-400 text-2xl font-medium max-w-3xl mx-auto">Modular power stations built for every scale of independence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {scenarios.map((s, i) => (
              <div key={i} className="bg-brand-light p-16 rounded-[4rem] border border-gray-100 flex flex-col h-full hover:shadow-2xl transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                <div className="w-20 h-20 bg-white rounded-3xl shadow-lg flex items-center justify-center mb-10 text-brand-teal text-3xl group-hover:rotate-6 transition-transform">
                  <i className={`fas ${i === 0 ? 'fa-home' : i === 1 ? 'fa-industry' : 'fa-server'}`}></i>
                </div>
                <h3 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">{s.title}</h3>
                <div className="space-y-8 flex-grow">
                  <div>
                    <p className="text-[10px] font-black text-brand-gold uppercase tracking-[0.3em] mb-3">Market Crisis</p>
                    <p className="text-gray-600 font-bold leading-relaxed">{s.pain}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-brand-teal uppercase tracking-[0.3em] mb-3">Partner Responsibility</p>
                    <p className="text-gray-600 font-bold leading-relaxed">{s.action}</p>
                  </div>
                </div>
                <div className="mt-12 pt-12 border-t border-gray-200">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-3">Target Annual Share</p>
                  <p className="text-4xl font-black text-brand-teal tracking-tighter">{s.revenue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Economics Section */}
      <section className="py-40 bg-brand-blue text-white relative z-10 overflow-hidden">
        <div className="absolute top-0 left-0 p-20 opacity-5"><i className="fas fa-compass text-[30rem]"></i></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div>
              <h2 className="text-6xl font-black mb-10 leading-none uppercase tracking-tighter">PARTNER<br/>ECONOMICS</h2>
              <p className="text-gray-400 text-2xl mb-16 font-medium leading-tight">Scale your business with zero capex. Earn 15-25% of net income for every <span className="text-brand-gold">Scout Station</span> you manage.</p>
              <div className="space-y-14">
                <div>
                  <div className="flex justify-between mb-8">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Units in Management</span>
                    <span className="text-brand-teal text-4xl font-black">{calc.rigs}</span>
                  </div>
                  <input type="range" min="1" max="10" step="1" value={calc.rigs} onChange={(e) => setCalc({...calc, rigs: parseInt(e.target.value)})} className="w-full accent-brand-teal h-3 bg-white/10 rounded-full appearance-none cursor-pointer" />
                </div>
                <div>
                  <div className="flex justify-between mb-8">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Partner Rev Share</span>
                    <span className="text-brand-teal text-4xl font-black">{calc.revShare}%</span>
                  </div>
                  <input type="range" min="10" max="25" step="5" value={calc.revShare} onChange={(e) => setCalc({...calc, revShare: parseInt(e.target.value)})} className="w-full accent-brand-teal h-3 bg-white/10 rounded-full appearance-none cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-20 rounded-[5rem] backdrop-blur-3xl shadow-2xl relative">
              <div className="absolute top-0 right-0 p-10 opacity-10">
                <i className="fas fa-chart-line text-8xl"></i>
              </div>
              <div className="space-y-14">
                <div>
                  <p className="text-brand-teal uppercase text-[10px] font-black tracking-[0.3em] mb-6">Annual Recurring Revenue</p>
                  <p className="text-8xl font-black tracking-tighter">${annualPartnerRevenue.toLocaleString()}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 border-t border-white/10 pt-12">
                  <div>
                    <p className="text-gray-500 uppercase text-[10px] font-black tracking-widest mb-3">3-Year Growth Target</p>
                    <p className="text-4xl font-black">${(annualPartnerRevenue * 3).toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 uppercase text-[10px] font-black tracking-widest mb-3">Equity Options Avail.</p>
                    <p className="text-4xl font-black text-brand-gold">YES</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-40 bg-brand-light relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white p-20 rounded-[5rem] shadow-[0_80px_150px_rgba(0,0,0,0.1)] border border-gray-100">
            <h2 className="text-6xl font-black text-brand-blue mb-8 leading-tight tracking-tighter uppercase">JOIN THE<br/>SCOUT NETWORK</h2>
            <p className="text-gray-500 text-2xl mb-16 font-medium">Limited beta partner slots available for Q3/Q4 2026. Be the local anchor for independence.</p>
            {submitted ? (
              <div className="text-center py-24 bg-brand-teal/5 rounded-[4rem]">
                <i className="fas fa-check-circle text-brand-teal text-9xl mb-10 animate-bounce shadow-2xl"></i>
                <h4 className="text-4xl font-black text-brand-blue mb-4 uppercase">APPLICATION RECEIVED</h4>
                <p className="text-gray-500 text-xl">A regional director will call you within 24 hours to schedule a rig demo.</p>
              </div>
            ) : (
              <form onSubmit={handleApply} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 ml-6">Partner Name</label>
                    <input required type="text" placeholder="Sarah Mitchell" className="w-full bg-brand-light border-4 border-transparent focus:border-brand-teal/20 rounded-[2rem] px-10 py-6 focus:outline-none transition-all font-bold text-lg" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 ml-6">Company Entity</label>
                    <input required type="text" placeholder="Scout Field Ops TX" className="w-full bg-brand-light border-4 border-transparent focus:border-brand-teal/20 rounded-[2rem] px-10 py-6 focus:outline-none transition-all font-bold text-lg" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 ml-6">Work Email</label>
                    <input required type="email" placeholder="sarah@scoutops.com" className="w-full bg-brand-light border-4 border-transparent focus:border-brand-teal/20 rounded-[2rem] px-10 py-6 focus:outline-none transition-all font-bold text-lg" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 ml-6">Operations Hub</label>
                    <input required type="text" placeholder="Midland / Odessa Region" className="w-full bg-brand-light border-4 border-transparent focus:border-brand-teal/20 rounded-[2rem] px-10 py-6 focus:outline-none transition-all font-bold text-lg" />
                  </div>
                </div>
                <button type="submit" className="w-full bg-brand-teal text-white py-8 rounded-[2rem] font-black text-3xl shadow-[0_30px_80px_rgba(32,128,128,0.4)] transition-all hover:scale-[1.03] active:scale-95 uppercase tracking-tighter">
                  SUBMIT PARTNER INQUIRY
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnerLanding;
