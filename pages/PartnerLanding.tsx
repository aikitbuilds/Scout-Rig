
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

  const baselineRigRevenue = 68000;
  const annualPartnerRevenue = calc.rigs * baselineRigRevenue * (calc.revShare / 100);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scenarios = [
    {
      title: 'Data Centers',
      pain: 'Compute revenue stalled by 5-year interconnection queues.',
      action: 'You handle installation + 24/7 uptime O&M.',
      revenue: '$6,800 - $10,200/yr per rig'
    },
    {
      title: 'Oil & Gas',
      pain: 'Remote pads paying $0.45/kWh for diesel generators.',
      action: 'You manage rig mobility and field service.',
      revenue: '$6,800 - $10,200/yr per rig'
    },
    {
      title: 'Construction',
      pain: 'Fuel logistics and theft liabilities on long-term sites.',
      action: 'You deploy rigs in weeks, not years.',
      revenue: '$6,800 - $10,200/yr per rig'
    }
  ];

  return (
    <div className="bg-brand-light">
      {/* Hero Section */}
      <section className="relative min-h-[800px] flex items-center justify-center bg-brand-blue text-white py-20 overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none z-0"
          style={{ 
            transform: `translateY(${scrollY * 0.25}px) scale(1.1)`,
            transition: 'transform 0.05s linear',
            willChange: 'transform'
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-30 grayscale-[20%]" 
            alt="Permian Basin Solar Rig" 
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-red-500/30 border border-red-500/50 px-5 py-2.5 rounded-full mb-10 backdrop-blur-xl">
            <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-black tracking-[0.1em] uppercase text-white">⚠️ CRITICAL GRID CAPACITY ALERT</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tight drop-shadow-2xl">
            OWN THE <span className="text-brand-teal">POWER GAP.</span>
          </h1>
          <p className="text-xl md:text-3xl text-gray-200 mb-12 max-w-3xl mx-auto font-medium leading-tight">
            Deploy mobile solar rigs in weeks, not decades. Secure your 2026 revenue share now.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#apply" className="bg-brand-teal hover:bg-teal-500 text-white px-12 py-6 rounded-2xl text-xl font-black shadow-[0_20px_50px_rgba(32,128,128,0.4)] transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center">
              SECURE PARTNER SLOT <i className="fas fa-arrow-right ml-3 text-sm"></i>
            </a>
            <a href="#scenarios" className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 backdrop-blur-md px-12 py-6 rounded-2xl text-xl font-black transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center">
              VIEW ROI MODELS
            </a>
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section id="scenarios" className="py-32 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-brand-blue mb-4">High-Yield Deployments</h2>
            <p className="text-gray-500 text-lg">Targeting the highest-demand industrial sectors in the Permian Basin.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {scenarios.map((s, i) => (
              <div key={i} className="bg-brand-light p-12 rounded-[2.5rem] border border-gray-100 flex flex-col h-full hover:shadow-2xl transition-all group">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 text-brand-teal text-2xl group-hover:scale-110 transition-transform">
                  <i className={`fas ${i === 0 ? 'fa-server' : i === 1 ? 'fa-oil-well' : 'fa-hard-hat'}`}></i>
                </div>
                <h3 className="text-3xl font-black text-brand-blue mb-6">{s.title}</h3>
                <div className="space-y-6 flex-grow">
                  <div>
                    <p className="text-xs font-black text-red-500 uppercase tracking-widest mb-2">Market Pain</p>
                    <p className="text-gray-600 font-medium">{s.pain}</p>
                  </div>
                  <div>
                    <p className="text-xs font-black text-brand-teal uppercase tracking-widest mb-2">Your Role</p>
                    <p className="text-gray-600 font-medium">{s.action}</p>
                  </div>
                </div>
                <div className="mt-10 pt-10 border-t border-gray-200">
                  <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Est. Annual Partner Take</p>
                  <p className="text-4xl font-black text-brand-teal">{s.revenue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Calculator */}
      <section className="py-32 bg-brand-blue text-white relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-5xl font-black mb-8 leading-none">THE PARTNER ECONOMICS</h2>
              <p className="text-gray-400 text-xl mb-12 font-medium">Earn up to 25% of net operating income per rig. Scaling is seamless with our capital stack.</p>
              <div className="space-y-12">
                <div>
                  <label className="flex justify-between mb-6 text-lg font-black uppercase tracking-widest">
                    <span>Rig Units Deployed</span>
                    <span className="text-brand-teal text-3xl">{calc.rigs}</span>
                  </label>
                  <input type="range" min="1" max="10" step="1" value={calc.rigs} onChange={(e) => setCalc({...calc, rigs: parseInt(e.target.value)})} className="w-full accent-brand-teal h-3 bg-white/10 rounded-full appearance-none cursor-pointer" />
                </div>
                <div>
                  <label className="flex justify-between mb-6 text-lg font-black uppercase tracking-widest">
                    <span>Revenue Share</span>
                    <span className="text-brand-teal text-3xl">{calc.revShare}%</span>
                  </label>
                  <input type="range" min="10" max="25" step="5" value={calc.revShare} onChange={(e) => setCalc({...calc, revShare: parseInt(e.target.value)})} className="w-full accent-brand-teal h-3 bg-white/10 rounded-full appearance-none cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-16 rounded-[3.5rem] backdrop-blur-xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]"></div>
              <div className="space-y-12 relative z-10">
                <div>
                  <p className="text-brand-teal uppercase text-xs font-black tracking-[0.2em] mb-4">Projected Annual Payout</p>
                  <p className="text-7xl font-black">${annualPartnerRevenue.toLocaleString()}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 border-t border-white/10 pt-10">
                  <div>
                    <p className="text-gray-500 uppercase text-xs font-black tracking-widest mb-2">3-Year Cumulative</p>
                    <p className="text-3xl font-black">${(annualPartnerRevenue * 3).toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 uppercase text-xs font-black tracking-widest mb-2">5-Year Cumulative</p>
                    <p className="text-3xl font-black text-white">${(annualPartnerRevenue * 5).toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Application Form */}
      <section id="apply" className="py-32 bg-brand-light relative z-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white p-16 rounded-[4rem] shadow-[0_50px_100px_rgba(0,0,0,0.08)] border border-gray-100">
            <h2 className="text-5xl font-black text-brand-blue mb-6 leading-tight">JOIN THE PARTNER<br/>PRIORITY LIST</h2>
            <p className="text-gray-500 text-xl mb-12 font-medium">Slots are limited to ensure operational excellence. Lock in your region now.</p>
            {submitted ? (
              <div className="text-center py-20 bg-teal-50 rounded-[3rem]">
                <i className="fas fa-check-circle text-brand-teal text-8xl mb-8 animate-bounce"></i>
                <h4 className="text-3xl font-black text-brand-blue mb-4">APPLICATION LOGGED</h4>
                <p className="text-gray-500 text-lg">A regional director will be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleApply} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Full Name</label>
                    <input required type="text" placeholder="John Doe" className="w-full bg-gray-50 border-2 border-transparent focus:border-brand-teal/30 rounded-[1.5rem] px-8 py-5 focus:outline-none transition-all font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Company Name</label>
                    <input required type="text" placeholder="Solar Pros LLC" className="w-full bg-gray-50 border-2 border-transparent focus:border-brand-teal/30 rounded-[1.5rem] px-8 py-5 focus:outline-none transition-all font-medium" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Work Email</label>
                    <input required type="email" placeholder="john@solarpros.com" className="w-full bg-gray-50 border-2 border-transparent focus:border-brand-teal/30 rounded-[1.5rem] px-8 py-5 focus:outline-none transition-all font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Deployment Region</label>
                    <input required type="text" placeholder="Permian Basin, TX" className="w-full bg-gray-50 border-2 border-transparent focus:border-brand-teal/30 rounded-[1.5rem] px-8 py-5 focus:outline-none transition-all font-medium" />
                  </div>
                </div>
                <button type="submit" className="w-full bg-brand-teal text-white py-6 rounded-[1.5rem] font-black text-2xl shadow-[0_20px_50px_rgba(32,128,128,0.3)] hover:scale-[1.02] active:scale-95 transition-all">
                  SUBMIT PARTNER APPLICATION
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
