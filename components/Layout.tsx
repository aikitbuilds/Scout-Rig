
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/partners', label: 'Partner Landing' },
    { path: '/investors', label: 'Investor Landing' },
    { path: '/customers', label: 'Customer Landing' },
    { path: '/strategic', label: 'Strategic Landing' },
    { path: '/dashboard', label: 'Live Dashboard', primary: true },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-brand-blue text-white shadow-xl border-b border-brand-teal/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-brand-teal rounded-lg flex items-center justify-center">
                  <i className="fas fa-solar-panel text-white text-xs"></i>
                </div>
                <span className="text-xl font-bold tracking-tight">SOLARRIG<span className="text-brand-teal">PORTAL</span></span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`${
                    link.primary 
                    ? 'bg-brand-teal hover:bg-teal-600 px-4 py-2 rounded-full font-semibold transition-all'
                    : 'text-gray-300 hover:text-white transition-colors'
                  } ${location.pathname === link.path ? 'text-white' : ''}`}
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
          <div className="md:hidden bg-brand-blue px-2 pt-2 pb-3 space-y-1 sm:px-3 animate-slideDown">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-brand-teal transition-all"
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
      <footer className="bg-brand-blue text-gray-400 py-12 border-t border-brand-teal/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 text-white mb-4">
                <div className="w-6 h-6 bg-brand-teal rounded flex items-center justify-center">
                  <i className="fas fa-solar-panel text-white text-[10px]"></i>
                </div>
                <span className="text-lg font-bold">SOLARRIG</span>
              </div>
              <p className="max-w-xs mb-4">
                Scaling mobile solar power for high-demand industries in the Permian Basin via blockchain RWA tokenization.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-brand-teal transition-colors"><i className="fab fa-twitter"></i></a>
                <a href="#" className="hover:text-brand-teal transition-colors"><i className="fab fa-discord"></i></a>
                <a href="#" className="hover:text-brand-teal transition-colors"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Whitepaper</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Legal Framework</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tokenomics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Technical Specs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partner Training</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Service Status</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; 2025 SolarRig Portal. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Compliance</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
