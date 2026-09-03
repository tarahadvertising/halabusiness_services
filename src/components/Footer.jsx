import React from 'react';
import { MapPin, Phone, MessageSquare, ArrowUp, Crown, Calculator, HelpCircle, ShieldCheck, Mail, ArrowRight } from 'lucide-react';

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
              src="/logos/logo.svg"
              alt="Hala Business Service Logo"
              className="h-9 sm:h-10 lg:h-11 w-auto object-contain"
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
                  ■ Business Setup
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services', 'visa')} className="hover:underline hover:text-white transition-all text-left">
                  ■ Visa Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services', 'gov')} className="hover:underline hover:text-white transition-all text-left">
                  ■ Attestation Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services', 'corporate')} className="hover:underline hover:text-white transition-all text-left">
                  ■ VAT Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services', 'corporate')} className="hover:underline hover:text-white transition-all text-left">
                  ■ Trademark &amp; ISO Registration Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services', 'corporate')} className="hover:underline hover:text-white transition-all text-left">
                  ■ Notary Services
                </button>
              </li>
              <li className="pt-2 border-t border-white/20">
                <button
                  onClick={() => onNavigate('services', 'all')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-slate-200 transition-all group"
                >
                  <span>View More Services</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
                <span>Al Khail Mall, Latifa Bint Hamdan St - Al Qouz Fourth - Al Quoz - Dubai</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-white flex-shrink-0" />
                <a href="tel:+971554408208" className="hover:underline font-semibold text-white">
                  +97155 4408208
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-whatsapp flex-shrink-0" />
                <a
                  href="https://wa.me/971554408208?text=Hello%20Hala%20Business%20Service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline font-semibold text-white"
                >
                  +97155 4408208
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
            Copyright © hala business services | Designed by <a href="https://tarah.ae" target="_blank" rel="noopener noreferrer">tarah.ae</a> | Built with  {" "}
            <svg
              className="w-4 h-4 inline"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="2" fill="#61DAFB" />
              <ellipse
                cx="12"
                cy="12"
                rx="9"
                ry="3.5"
                stroke="#61DAFB"
                strokeWidth="1.5"
                fill="none"
              />
              <ellipse
                cx="12"
                cy="12"
                rx="9"
                ry="3.5"
                stroke="#61DAFB"
                strokeWidth="1.5"
                fill="none"
                transform="rotate(60 12 12)"
              />
              <ellipse
                cx="12"
                cy="12"
                rx="9"
                ry="3.5"
                stroke="#61DAFB"
                strokeWidth="1.5"
                fill="none"
                transform="rotate(120 12 12)"
              />
            </svg>
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
