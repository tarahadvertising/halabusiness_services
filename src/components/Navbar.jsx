import React, { useState } from 'react';
import { Menu, X, ChevronDown, Sparkles, Shield, Calculator, Crown } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, setSelectedCategory }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Our Services', hasDropdown: true },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId, category = null) => {
    setActivePage(pageId);
    if (category && setSelectedCategory) {
      setSelectedCategory(category);
    }
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-hala-blue/95 backdrop-blur-md shadow-lg border-b border-white/15 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left focus:outline-none"
          >
            <img
              src="/logos/logo-white.svg"
              alt="Hala Business Service"
              className="h-8 sm:h-9 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.src = "/public/logos/logo-white.svg";
              }}
            />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <div key={link.id} className="relative">
                {link.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      onClick={() => handleNavClick('services', 'all')}
                      className={`inline-flex items-center gap-1.5 font-semibold text-xs xl:text-sm px-3.5 py-2 transition-colors relative ${
                        activePage === 'services'
                          ? 'text-white font-extrabold border-b-2 border-white pb-1'
                          : 'text-white/80 hover:text-white hover:bg-white/10 rounded-full'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Rich Services Dropdown */}
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-2xl shadow-lg p-2.5 border border-slate-100 text-slate-800 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                        <div className="text-[11px] font-extrabold uppercase text-slate-400 px-3 py-1.5 tracking-wider">
                          Browse by Category
                        </div>

                        <button
                          onClick={() => handleNavClick('services', 'visa')}
                          className="w-full text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold hover:bg-hala-subtle hover:text-hala-blue transition-colors"
                        >
                          <div className="font-bold text-hala-darker">Golden Visa &amp; Residency</div>
                          <div className="text-[11px] text-slate-500 font-normal">10-Year Investor &amp; Executive Visas</div>
                        </button>

                        <button
                          onClick={() => handleNavClick('services', 'business')}
                          className="w-full text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold hover:bg-hala-subtle hover:text-hala-blue transition-colors"
                        >
                          <div className="font-bold text-hala-darker">Mainland &amp; Free Zone Setup</div>
                          <div className="text-[11px] text-slate-500 font-normal">100% Foreign Ownership &amp; LLC</div>
                        </button>

                        <button
                          onClick={() => handleNavClick('services', 'gov')}
                          className="w-full text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold hover:bg-hala-subtle hover:text-hala-blue transition-colors"
                        >
                          <div className="font-bold text-hala-darker">Amer, Tasheel &amp; Tadbeer</div>
                          <div className="text-[11px] text-slate-500 font-normal">Fast Government Approvals</div>
                        </button>

                        <button
                          onClick={() => handleNavClick('services', 'corporate')}
                          className="w-full text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold hover:bg-hala-subtle hover:text-hala-blue transition-colors"
                        >
                          <div className="font-bold text-hala-darker">Virtual Office &amp; Ejari</div>
                          <div className="text-[11px] text-slate-500 font-normal">Tenancy &amp; Banking Support</div>
                        </button>

                        <div className="border-t border-slate-100 mt-2 pt-2">
                          <button
                            onClick={() => handleNavClick('services', 'all')}
                            className="w-full text-center px-3 py-2 rounded-xl text-xs font-extrabold text-hala-blue bg-hala-subtle hover:bg-hala-blue hover:text-white transition-colors"
                          >
                            Explore All 15 Specialized Services →
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`font-semibold text-xs xl:text-sm px-3.5 py-2 transition-colors relative ${
                      activePage === link.id
                        ? 'text-white font-extrabold border-b-2 border-white pb-1'
                        : 'text-white/80 hover:text-white hover:bg-white/10 rounded-full'
                    }`}
                  >
                    {link.label}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2 focus:outline-none rounded-lg hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-hala-dark border-t border-white/15 px-4 pt-3 pb-6 space-y-1.5 animate-in fade-in duration-200">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id, link.id === 'services' ? 'all' : null)}
              className={`block w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                activePage === link.id ? 'text-white font-extrabold bg-white/15' : 'text-slate-100 hover:bg-white/10'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
