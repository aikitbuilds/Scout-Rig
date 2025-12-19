
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/marketing', label: 'Marketing & Prototypes' },
    { path: '/partners', label: 'Partners' },
    { path: '/investors', label: 'Investors' },
    { path: '/customers', label: 'Customers' },
    { path: '/strategic', label: 'Institutional' },
    { path: '/dashboard', label: 'Scout Dashboard', primary: true },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-teal/30">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-brand-blue text-white shadow-xl border-b border-brand-teal/20 backdrop-blur-md bg-brand-blue/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-brand-teal rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                  <i className="fas fa-compass text-white text-xl"></i>
                </div>
                <div className="flex flex-col text-white">
                  <span className="text-xl font-black tracking-tighter leading-none uppercase">
                    SCOUT <span className="text-brand-teal">RIG</span> <span className="text-brand-gold italic">INC.</span>
                  </span>
                  <span className="text-[10px] font-bold text-brand-teal uppercase tracking-[0.2em] mt-0.5">Modular Independence</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 lg:space-x-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`${
                    link.primary 
                    ? 'bg-brand-teal hover:bg-brand-tealDark px-5 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-brand-teal/20 text-xs lg:text-sm uppercase tracking-wider'
                    : 'text-gray-400 hover:text-white transition-colors text-xs lg:text-sm font-semibold'
                  } ${location.pathname === link.path ? 'text-white underline decoration-brand-teal decoration-2 underline-offset-8' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-brand-blue px-2 pt-2 pb-6 space-y-2 sm:px-3 border-t border-white/5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-bold transition-all ${
                  link.primary ? 'bg-brand-teal text-white' : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-blue text-gray-400 py-16 border-t border-brand-teal/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 text-white mb-6">
                <div className="w-8 h-8 bg-brand-teal rounded-lg flex items-center justify-center">
                  <i className="fas fa-compass text-white text-sm"></i>
                </div>
                <span className="text-xl font-black tracking-tighter uppercase">
                  SCOUT <span className="text-brand-teal">RIG</span> <span className="text-brand-gold italic">INC.</span>
                </span>
              </div>
              <p className="max-w-sm mb-8 leading-relaxed">
                Building modular power stations for independence. Solving the DOE's 100 GW grid capacity shortage through rapid-deploy AI-tracked solar infrastructure.
              </p>
              <div className="flex space-x-5">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-teal hover:text-white transition-all"><i className="fab fa-twitter"></i></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-teal hover:text-white transition-all"><i className="fab fa-discord"></i></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-teal hover:text-white transition-all"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-black uppercase text-xs tracking-[0.2em] mb-6">Products</h4>
              <ul className="space-y-3 font-medium">
                <li><a href="#" className="hover:text-brand-teal transition-colors">Scout Compass</a></li>
                <li><a href="#" className="hover:text-brand-teal transition-colors">Scout Station 100</a></li>
                <li><a href="#" className="hover:text-brand-teal transition-colors">Scout Station 200</a></li>
                <li><a href="#" className="hover:text-brand-teal transition-colors">Scout Dashboard</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black uppercase text-xs tracking-[0.2em] mb-6">Contact</h4>
              <ul className="space-y-3 font-medium">
                <li><a href="mailto:hello@scoutrig.com" className="hover:text-brand-teal transition-colors">hello@scoutrig.com</a></li>
                <li><a href="#" className="hover:text-brand-teal transition-colors">Midland, TX Operations</a></li>
                <li><a href="#" className="hover:text-brand-teal transition-colors">Partner Inquiry</a></li>
                <li><a href="#" className="hover:text-brand-teal transition-colors">Press Inquiries</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs font-bold uppercase tracking-widest">
            <p>&copy; 2025 Scout Rig Inc. | Built for Independence.</p>
            <div className="flex space-x-8 mt-6 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">DOE Grid Data</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
