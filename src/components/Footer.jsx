import React from 'react';
import { MapPin, Phone, MessageSquare, ArrowUp, Crown, Calculator, HelpCircle, ShieldCheck, Mail } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-hala-blue text-white pt-16 pb-8 border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/20">

          {/* Col 1: Brand */}
          <div className="lg:col-span-5 space-y-4">
            <img
              src="/logos/logo-white.svg"
              alt="Hala Business Service Logo"
              className="h-9 sm:h-10 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.src = "/public/logos/logo-white.svg";
              }}
            />
            <p className="text-slate-100 text-xs sm:text-sm leading-relaxed max-w-sm">
              Hala Business Service is an accredited corporate service provider and government PRO consultancy in Dubai, empowering international founders, investors, and families to thrive in the UAE.
            </p>
          </div>

          {/* Col 2: Core Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm sm:text-base font-extrabold text-white border-b border-white/30 pb-2">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-100">
              <li>
                <button onClick={() => onNavigate('services', 'business')} className="hover:underline hover:text-white transition-all text-left">
                  ■ Company Formation (Mainland &amp; Freezone)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services', 'business')} className="hover:underline hover:text-white transition-all text-left">
                  ■ Trade License Renewal &amp; Modification
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services', 'corporate')} className="hover:underline hover:text-white transition-all text-left">
                  ■ Virtual Office &amp; Ejari Tenancy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services', 'gov')} className="hover:underline hover:text-white transition-all text-left">
                  ■ Amer, Tasheel &amp; Tadbeer Typing
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services', 'visa')} className="hover:underline hover:text-white transition-all text-left">
                  ■ Residence Visa &amp; Emirates ID
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm sm:text-base font-extrabold text-white border-b border-white/30 pb-2">
              Contact &amp; Location
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-100">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                <span>Office 000, Building Name, Area, Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-white flex-shrink-0" />
                <a href="tel:+97142230028" className="hover:underline font-semibold text-white">
                  +971 00 000 0000
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-whatsapp flex-shrink-0" />
                <a
                  href="https://wa.me/971551272700?text=Hello%20Hala%20Business%20Service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline font-semibold text-white"
                >
                  +971 00 000 0000
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-300 flex-shrink-0" />
                <a
                  href="mailto:info@haladubai.ae"
                  className="hover:underline font-semibold text-white"
                >
                  info@haladubai.ae
                </a>
              </div>
            </div>
          </div>

        </div>
        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-200">
          <div>
            &copy; {new Date().getFullYear()} Hala Business Service. All Rights Reserved. Officially Registered in Dubai, UAE.
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button onClick={() => onNavigate('home')} className="hover:underline hover:text-white">
              Home
            </button>
            <button onClick={() => onNavigate('about')} className="hover:underline hover:text-white">
              About Us
            </button>
            <button onClick={() => onNavigate('services', 'all')} className="hover:underline hover:text-white">
              Our Services
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:underline hover:text-white">
              Contact
            </button>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-white text-hala-blue flex items-center justify-center hover:bg-slate-100 transition-colors ml-2"
              title="Scroll to Top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
