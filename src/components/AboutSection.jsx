import React from 'react';
import { ShieldCheck, UserCheck, Eye, Zap, Building, Handshake, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AboutSection({ onNavigate }) {
  const whyPoints = [
    {
      title: 'Dedicated Senior PRO Officer',
      desc: 'Direct bilingual personal account manager handling your filings end-to-end.',
      icon: UserCheck,
    },
    {
      title: '100% Fee Transparency',
      desc: 'Fixed government fee schedules with zero hidden extras or surprise invoices.',
      icon: Eye,
    },
    {
      title: 'VIP 2-Hour Express Lane',
      desc: 'Instant trade licenses, 2-hour medical testing, and priority biometric bookings.',
      icon: Zap,
    },
    {
      title: 'Tier-1 Banking Assistance',
      desc: 'Guaranteed corporate bank account introduction with Emirates NBD, Mashreq & Wio.',
      icon: Building,
    },
  ];

  const stats = [
    { value: '5+', label: 'Years Exp' },
    { value: '5k+', label: 'Clients' },
    { value: '99%', label: 'Approval' },
    { value: '24/7', label: 'Support' },
  ];

  return (
    <section className="py-20 bg-hala-ice" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Visual Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-box overflow-hidden border border-slate-200 bg-white">
              <img
                src="/images/consulting.jpg"
                alt="Hala Business Service Dubai Consulting Desk"
                className="w-full h-80 sm:h-96 object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/public/images/consulting.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hala-darker/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-lg sm:text-xl font-extrabold">
                  Al Khail Mall, Latifa Bint Hamdan St, Al Quoz, Dubai
                </div>
              </div>
            </div>

            {/* Quick 2x2 Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white p-4 rounded-2xl border border-slate-200 text-center">
                  <div className="text-2xl font-extrabold text-hala-blue mb-0.5">{stat.value}</div>
                  <div className="text-[11px] text-slate-500 font-semibold leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-hala-darker tracking-tight leading-tight">
              Your Trusted Partner for UAE Government Clearances
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              At <strong className="text-hala-darker font-bold">Hala Business Service</strong>, we eliminate bureaucratic complexity from company formation, licensing renewals, Ejari contracts, and visa processing for foreign investors, SMEs, and corporate entities in Dubai.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {whyPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200">
                    <div className="w-9 h-9 rounded-lg bg-hala-subtle text-hala-blue flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-hala-darker mb-1">{point.title}</h4>
                      <p className="text-xs text-slate-500 leading-snug">{point.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-hala-blue hover:bg-hala-dark text-white font-extrabold text-sm px-7 py-3.5 rounded-full transition-colors"
              >
                Speak With Senior PRO Officer
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="bg-white hover:bg-slate-50 text-hala-blue border border-hala-blue/20 font-bold text-sm px-6 py-3.5 rounded-full transition-colors flex items-center gap-1.5"
              >
                <span>Read Full Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
