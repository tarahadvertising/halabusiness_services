import React from 'react';
import { Building2, Landmark, Users, Home, HeartPulse, Scale, Globe, ShieldCheck } from 'lucide-react';

export default function PartnerStrip() {
  const partners = [
    { name: 'Dubai Economy & Tourism (DET)', icon: Building2 },
    { name: 'GDRFA / Amer Dubai', icon: Landmark },
    { name: 'MOHRE / Tasheel Centers', icon: Users },
    { name: 'Tadbeer Domestic Visa Desk', icon: Home },
    { name: 'Dubai Health Authority (DHA)', icon: HeartPulse },
    { name: 'Dubai Courts & Notary Public', icon: Scale },
    { name: 'Ministry of Foreign Affairs (MOFA)', icon: Globe },
  ];

  return (
    <section className="bg-white py-10 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-hala-blue">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Authorized &amp; Direct Liaison Across UAE Government Authorities</span>
          </span>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-3">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div
                key={index}
                className="inline-flex items-center gap-2 bg-hala-ice border border-hala-subtle px-4 py-2 rounded-full text-xs sm:text-sm font-bold text-hala-blue hover:bg-hala-blue hover:text-white transition-all shadow-sm group hover:scale-105"
              >
                <Icon className="w-4 h-4 text-hala-blue group-hover:text-white transition-colors flex-shrink-0" />
                <span>{partner.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
