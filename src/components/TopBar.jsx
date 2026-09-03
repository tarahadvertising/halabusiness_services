import React from 'react';
import { MapPin, Clock, Phone, ShieldCheck, MessageSquare } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-hala-darker text-slate-300 text-xs py-2 border-b border-white/10 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-4">
        <div className="flex items-center gap-5 lg:gap-8">
          <div className="flex items-center gap-1.5 hover:text-white transition-colors">
            <MapPin className="w-3.5 h-3.5 text-hala-light flex-shrink-0" />
            <span>Al Khail Mall, Latifa Bint Hamdan St, Al Quoz, Dubai</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-hala-light flex-shrink-0" />
            <span>Mon - Sat: 8:00 AM – 8:00 PM</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-hala-light flex-shrink-0" />
            <a href="tel:+971554408208" className="hover:text-white font-semibold transition-colors">
              +97155 4408208
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1 bg-white/10 text-white px-2.5 py-0.5 rounded-full font-semibold border border-white/20 text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> DED &amp; Amer Authorized
          </span>
          <a
            href="https://wa.me/971554408208?text=Hello%20Hala%20Business%20Service,%20I%20would%20like%20a%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-white font-bold hover:text-emerald-400 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-whatsapp" />
            <span>WhatsApp Direct</span>
          </a>
        </div>
      </div>
    </div>
  );
}
