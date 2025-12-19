
import React from 'react';

const prototypes = [
  {
    id: 'P-100A',
    name: 'Scout Rig Alpha',
    type: 'Mobile Beta Unit (SS-100)',
    image: 'https://shop.rpssolarpumps.com/cdn/shop/files/solar-trailer-1.png?v=1707629061&width=600',
    status: 'In Field Testing',
    specs: [
      '8kW Bifacial Array (Trina 310W)',
      '10kWh LiFePO4 Battery Buffer',
      'Growatt 3kW Inverter Integration',
      'Deploy Time: < 72 Hours'
    ],
    highlights: 'Engineered for rapid response on 50-acre parcels. First unit to prove 100% off-grid autonomy in West Texas winds.',
    docs: ['Product Data Sheet', 'Field Test Report V1', 'Installation Manual']
  },
  {
    id: 'P-200B',
    name: 'Scout Rig Bravo',
    type: 'Standard Modular Station (SS-200)',
    image: 'https://img1.wsimg.com/isteam/ip/37a8ab41-aaa8-4049-a9e8-582b390ede34/0c23ce636dd324851dc098be7d27d7a7.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280',
    status: 'Pre-Production',
    specs: [
      '12kW Peak Generation',
      'Scout Compass AI Tracking Standard',
      'IP67 Weatherproof Modular Shell',
      'Integrated Starlink Mini Uplink'
    ],
    highlights: 'The workhorse of energy independence. Features our proprietary dual-axis tracking for +30% annual energy harvest.',
    docs: ['SS-200 White Paper', 'Compass AI Technical Memo', 'RWA Tokenization Guide']
  },
  {
    id: 'P-300G',
    name: 'Scout Rig Gamma',
    type: 'Enterprise Cluster Station (SS-300)',
    image: 'https://img1.wsimg.com/isteam/ip/37a8ab41-aaa8-4049-a9e8-582b390ede34/MS-425-header-1.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280,h:512',
    status: 'Prototype Phase',
    specs: [
      '16kW High-Yield Capacity',
      'Multi-Station Syncing (up to 1MW Clusters)',
      'Enterprise Grid Protection Suite',
      'Industrial Battery Management (BMS)'
    ],
    highlights: 'Designed for the DOE 100GW crisis. Bypasses 5-year interconnection delays for data centers and industrial pads.',
    docs: ['Enterprise Power Thesis', 'MW Cluster Architecture', 'ROI Projection Model']
  },
  {
    id: 'C-01T',
    name: 'Scout Compass Prototype',
    type: 'AI Sun-Tracking Controller',
    image: 'https://images.unsplash.com/photo-1548613053-2200705f4265?q=80&w=2000&auto=format&fit=crop',
    status: 'Core Tech Testing',
    specs: [
      'Dual-Axis Precision Actuators',
      'Real-time Cloud Optimization',
      'Edge-AI Orientation Sensors',
      'Universal Mount Compatibility'
    ],
    highlights: 'The brain of every Scout Station. Our proprietary Edge-AI calculates the optimal photon path every 60 seconds.',
    docs: ['Compass Algorithm Overview', 'Edge-AI vs Static Testing', 'Patent Portfolio']
  },
  {
    id: 'D-01H',
    name: 'Scout Hub Node',
    type: 'SaaS Connectivity Hardware',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
    status: 'Beta Hardware',
    specs: [
      'Military Grade Encryption',
      'Global Satellite Mesh Connection',
      'Rig-Status Haptic Alerts',
      'Remote Shutdown Failsafe'
    ],
    highlights: 'Ensuring 100% uptime visibility. Connects the Scout Dashboard to the furthest corners of the Permian Basin.',
    docs: ['Cybersecurity Standard', 'Global Connectivity Map', 'SaaS Pricing Tiers']
  }
];

const MarketingLanding: React.FC = () => {
  return (
    <div className="bg-brand-light min-h-screen">
      {/* Hero */}
      <section className="bg-brand-blue text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="grid grid-cols-12 h-full w-full">
            {Array.from({length: 48}).map((_, i) => (
              <div key={i} className="border border-white/20"></div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center space-x-3 bg-brand-gold/20 border border-brand-gold/30 px-6 py-3 rounded-full mb-10 backdrop-blur-3xl">
            <span className="w-3 h-3 bg-brand-gold rounded-full animate-pulse shadow-[0_0_15px_#FFB800]"></span>
            <span className="text-sm font-black tracking-[0.2em] uppercase text-brand-gold">R&D PROTOTYPE REPOSITORY</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.85] tracking-tighter uppercase">
            SCOUT <span className="text-brand-teal">RIG</span> <span className="text-brand-gold italic">INC.</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-400 max-w-4xl mx-auto font-light leading-snug">
            Professional, investor-ready prototypes solving the <span className="text-white font-bold underline decoration-brand-teal decoration-4">DOE 100 GW crisis</span> through modular energy independence.
          </p>
        </div>
      </section>

      {/* Superiority Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[4rem] p-16 shadow-2xl border border-gray-100 flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-black text-brand-blue uppercase mb-8 leading-tight">Why Scout Rig <br/>is Superior</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              In a niche dominated by static, slow-to-deploy utility assets, Scout Rig stands alone as a high-velocity, unitized infrastructure provider. 
              We don't build "solar farms"—we build <strong>Autonomous Power Stations</strong>.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { t: '2-Week Deploy', d: 'Utility grid waits are 5-10 years. We deploy in 14 days.' },
                { t: 'AI Yield Boost', d: 'Scout Compass adds 30% more energy than static racks.' },
                { t: 'RWA Liquidity', d: 'Tokenized asset pools allow for rapid capital exit and entry.' },
                { t: 'Starlink Built-In', d: 'Every rig is a remote connectivity hub from Day 1.' }
              ].map((point, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center space-x-2 text-brand-teal">
                    <i className="fas fa-check-circle"></i>
                    <span className="font-black uppercase text-xs tracking-widest">{point.t}</span>
                  </div>
                  <p className="text-sm text-gray-500 font-medium">{point.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://shop.rpssolarpumps.com/cdn/shop/files/solar-trailer-1.png?v=1707629061&width=600" 
              className="rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500"
              alt="Superior Rig Technology"
            />
          </div>
        </div>
      </section>

      {/* Prototypes Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h3 className="text-[10px] font-black text-brand-teal uppercase tracking-[0.4em] mb-4">The Pipeline</h3>
            <h2 className="text-5xl font-black text-brand-blue uppercase tracking-tighter">Active Prototypes</h2>
          </div>
          <button className="bg-brand-blue text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-brand-teal transition-all">
            Download Full Portfolio
          </button>
        </div>

        <div className="grid grid-cols-1 gap-20">
          {prototypes.map((proto, idx) => (
            <div key={idx} className="flex flex-col lg:flex-row bg-white rounded-[5rem] overflow-hidden shadow-2xl border border-gray-100 group">
              <div className="lg:w-2/5 relative h-80 lg:h-auto overflow-hidden">
                <img src={proto.image} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={proto.name} />
                <div className="absolute top-10 left-10 bg-brand-gold text-brand-blue px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-widest shadow-xl">PROTOTYPE {proto.id}</div>
              </div>
              <div className="lg:w-3/5 p-16 lg:p-24 space-y-12">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-6">
                  <div>
                    <h3 className="text-xs font-black text-brand-teal uppercase tracking-[0.3em] mb-2">{proto.type}</h3>
                    <h2 className="text-5xl font-black text-brand-blue tracking-tighter uppercase">{proto.name}</h2>
                  </div>
                  <span className="bg-brand-light border border-gray-200 px-6 py-2 rounded-full text-[10px] font-black text-gray-500 uppercase tracking-widest">{proto.status}</span>
                </div>
                
                <p className="text-xl text-gray-500 leading-relaxed font-medium">{proto.highlights}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div>
                    <h4 className="text-[10px] font-black text-brand-blue uppercase tracking-[0.3em] mb-6">Technical Specs</h4>
                    <ul className="space-y-4">
                      {proto.specs.map((spec, sIdx) => (
                        <li key={sIdx} className="flex items-center space-x-3 text-sm font-bold text-gray-700">
                          <span className="w-1.5 h-1.5 bg-brand-teal rounded-full"></span>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-brand-blue uppercase tracking-[0.3em] mb-6">White Pages & Docs</h4>
                    <div className="flex flex-col space-y-3">
                      {proto.docs.map((doc, dIdx) => (
                        <a key={dIdx} href="#" className="flex items-center space-x-3 text-xs font-black text-brand-teal hover:underline group/link">
                          <i className="fas fa-file-pdf text-red-500 text-base"></i>
                          <span className="uppercase tracking-widest">{doc}</span>
                          <i className="fas fa-arrow-right text-[10px] opacity-0 group-hover/link:opacity-100 transition-opacity"></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-12 border-t border-gray-100 flex gap-6">
                  <button className="flex-grow bg-brand-blue text-white py-6 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-brand-blue/20 hover:bg-brand-teal transition-all">
                    Request Full Documentation
                  </button>
                  <button className="w-20 bg-brand-gold text-brand-blue rounded-2xl flex items-center justify-center text-2xl shadow-xl shadow-brand-gold/20 hover:scale-105 transition-all">
                    <i className="fas fa-star"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-brand-blue text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <h2 className="text-5xl font-black uppercase tracking-tighter leading-tight">Ready to Back the Revolution?</h2>
          <p className="text-xl text-gray-400 font-medium">Join our whitelist for the Q2 Series A round or apply for a beta deployment slot today.</p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
             <button className="bg-brand-teal text-white px-12 py-7 rounded-2xl font-black text-xl uppercase tracking-widest shadow-2xl shadow-brand-teal/20 transform hover:scale-105 transition-all">
                Investor Access
             </button>
             <button className="bg-white text-brand-blue px-12 py-7 rounded-2xl font-black text-xl uppercase tracking-widest shadow-2xl transform hover:scale-105 transition-all">
                Customer Queue
             </button>
          </div>
          <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.4em]">Official Case Study Site: scoutrig.com | hello@scoutrig.com</p>
        </div>
      </section>
    </div>
  );
};

export default MarketingLanding;
