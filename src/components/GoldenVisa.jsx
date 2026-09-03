import React from 'react';
import { 
  Crown, Home, Users, Plane, CreditCard, 
  CheckCircle2, Sparkles, Building, Briefcase, 
  Stethoscope, Code2, Rocket, ArrowRight, MessageSquare, ShieldCheck
} from 'lucide-react';

export default function GoldenVisa({ onNavigate }) {
  const pathways = [
    { title: 'Real Estate Investors', criteria: 'AED 2M+ Property Title Deed', icon: Building },
    { title: 'Senior Executives & Directors', criteria: 'AED 30k+ Salary & Degree', icon: Briefcase },
    { title: 'Doctors & Healthcare Experts', criteria: 'DHA / MOHAP Certified', icon: Stethoscope },
    { title: 'AI Engineers & Scientists', criteria: 'Accredited Degree / Patent', icon: Code2 },
    { title: 'Entrepreneurs & Innovators', criteria: 'Audited Business Approval', icon: Rocket },
  ];

  const perks = [
    { title: '100% Self-Sponsored', desc: 'No national sponsor or employer tie required', icon: Home },
    { title: 'Full Family Sponsorship', desc: 'Sponsor spouse and children of any age', icon: Users },
    { title: 'Unlimited Travel', desc: 'Stay outside UAE > 6 months with zero cancellation', icon: Plane },
    { title: 'Esaad Privilege Card', desc: 'VIP discounts across thousands of luxury brands', icon: CreditCard },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-hala-deep via-hala-darker to-hala-blue text-white relative overflow-hidden" id="golden-visa">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Overview & Benefits */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider">
              <Crown className="w-4 h-4 text-amber-300" />
              <span>Exclusive UAE 10-Year Residency</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              UAE 10-Year Golden Visa VIP Fast-Track
            </h2>

            <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl">
              Live, work, and invest in Dubai with complete autonomy. Hala Business Service manages your government nomination, document legalization, VIP 2-hour medical testing, and priority biometrics.
            </p>

            {/* Perks Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {perks.map((perk, i) => {
                const Icon = perk.icon;
                return (
                  <div key={i} className="bg-white/10 border border-white/15 rounded-2xl p-4.5 flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-white flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white">{perk.title}</h4>
                      <p className="text-xs text-slate-300 leading-snug mt-0.5">{perk.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-white hover:bg-slate-100 text-hala-blue font-extrabold text-sm px-7 py-3.5 rounded-full transition-colors inline-flex items-center gap-2"
              >
                Check Free Eligibility <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="https://wa.me/971554408208?text=Hello%20Hala%20Business%20Service,%20I%20want%20to%20apply%20for%20a%2010-Year%20Golden%20Visa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/20 font-bold text-sm px-6 py-3.5 rounded-full transition-colors"
              >
                <MessageSquare className="w-4 h-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Qualifying Pathways Box */}
          <div className="lg:col-span-5">
            <div className="bg-hala-darker/95 border border-white/20 rounded-box p-6 sm:p-8 relative">
              <div className="flex items-center justify-between mb-5">
                <span className="bg-white text-hala-blue text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  Qualifying Pathways
                </span>
                <span className="text-xs text-slate-300 font-semibold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" /> 48h Fast-Track
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">Who Qualifies For 10-Year Residency?</h3>
              <p className="text-xs text-slate-300 mb-5">Direct nomination &amp; ICP / GDRFA express clearance for:</p>

              <div className="space-y-3">
                {pathways.map((path, index) => {
                  const Icon = path.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3.5 bg-white/10 border border-white/15 rounded-xl text-xs sm:text-sm font-semibold"
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4 text-slate-200" />
                        <span>{path.title}</span>
                      </div>
                      <span className="text-amber-300 font-extrabold text-[11px] sm:text-xs">
                        {path.criteria}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-white/10 border border-dashed border-white/30 text-xs text-slate-200 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span><strong>VIP Service Guarantee:</strong> Document audit, police clearance, VIP medical test, and biometric booking handled seamlessly with zero queueing.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
