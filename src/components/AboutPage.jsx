import React from 'react';
import {
  ShieldCheck, Award, Users, Building2, Handshake,
  Target, Sparkles, CheckCircle2, HeartHandshake,
  Clock, ArrowRight, Landmark, Scale, Globe, PhoneCall
} from 'lucide-react';

export default function AboutPage({ onNavigate }) {
  const stats = [
    { label: 'Years of UAE PRO Excellence', value: '2+', icon: Award },
    { label: 'Visas & Immigration Clearances', value: '15,000+', icon: Users },
    { label: 'Companies Successfully Formed', value: '5,000+', icon: Building2 },
    { label: 'Government Approval Success', value: '99.8%', icon: ShieldCheck },
  ];

  const values = [
    {
      title: '100% Fee Transparency',
      desc: 'We operate with upfront, itemized government fee schedules. Zero hidden charges, surprise retainers, or unexpected invoices.',
      icon: Target,
    },
    {
      title: 'Direct Government Liaison',
      desc: 'Accredited with DET, GDRFA, MOHRE, Amer, Tasheel, Tadbeer, and Dubai Courts for rapid VIP document clearance.',
      icon: Landmark,
    },
    {
      title: 'Speed & VIP Turnarounds',
      desc: 'We specialize in express trade license issuance, 2-hour VIP medical fitness testing, and fast-track biometric appointments.',
      icon: Clock,
    },
    {
      title: 'Dedicated Senior PRO Officer',
      desc: 'Every client is assigned an experienced bilingual Arabic-English PRO specialist managing filings from name reservation to corporate banking.',
      icon: HeartHandshake,
    },
  ];

  const milestones = [
    {
      step: '01',
      title: 'Strategic Consultation',
      desc: 'We analyze your commercial goals, shareholding structure, and tax strategy to recommend the ideal Mainland, Free Zone, or Offshore jurisdiction.',
    },
    {
      step: '02',
      title: 'Legal Drafting & Approvals',
      desc: 'Our legal drafters formulate bilingual MOAs, trade name reservations, initial approvals, and municipal clearances.',
    },
    {
      step: '03',
      title: 'Express Residency & Stamping',
      desc: 'We escort you through VIP express medical fitness and Emirates ID biometrics with zero queuing or bureaucratic friction.',
    },
    {
      step: '04',
      title: 'Banking & Annual Corporate Compliance',
      desc: 'We connect you with tier-1 UAE banks and manage annual trade license renewals, Ejari registrations, and labor quotas.',
    },
  ];

  return (
    <div className="bg-white">

      {/* 1. Dedicated About Us Hero Banner */}
      <section className="relative bg-gradient-to-br from-hala-deep via-hala-darker to-hala-blue text-white py-16 lg:py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-hala-blue/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-hala-light/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Empowering Global Visionaries to Thrive in <span className="text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]">Dubai &amp; UAE</span>
            </h1>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              Headquartered in Office 217, Mozna Building, Dubai, Hala Business Service is an authorized corporate services firm delivering seamless company formation, 10-Year Golden Visas, and high-speed government documentation.
            </p>

            <div className="flex justify-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-white hover:bg-slate-100 text-hala-blue font-extrabold text-sm px-7 py-3.5 rounded-full shadow-xl transition-all inline-flex items-center gap-2"
              >
                Meet With A Senior Consultant <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Stats Bar */}
      <section className="bg-hala-ice py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-hala-subtle text-hala-blue flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-hala-darker mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-500">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Company Story & Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-1.5 bg-hala-subtle text-hala-blue border border-hala-blue/20 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" /> Our Mission &amp; Vision
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-hala-darker tracking-tight leading-tight">
                Navigating UAE Regulations So You Can Focus On Building Your Empire
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                Establishing a company in the United Arab Emirates offers unprecedented global advantages—from 0% personal income tax and 100% foreign ownership to world-class infrastructure. However, navigating ministerial clearances, licensing authorities, and legal drafting requires seasoned local expertise.
              </p>

              <p className="text-slate-600 text-base leading-relaxed">
                At <strong>Hala Business Service</strong>, we bridge the gap between foreign investors and government departments. With direct electronic access to DED, GDRFA, MOHRE, Amer, Tasheel, and Dubai Courts, our accredited PRO consultants ensure every trade license, residency visa, and corporate contract is executed flawlessly.
              </p>

              <div className="pt-2">
                <div className="flex items-center gap-3 p-4 bg-hala-ice rounded-xl border border-slate-200">
                  <div className="w-10 h-10 rounded-full bg-hala-blue text-white flex items-center justify-center font-bold flex-shrink-0">
                    ✓
                  </div>
                  <div className="text-sm font-bold text-hala-darker">
                    Full Compliance Guarantee with updated UAE Corporate &amp; Commercial Laws
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <img
                src="/images/consulting.jpg"
                alt="Hala Business Service Dubai Team"
                className="rounded-card shadow-hala-xl w-full object-cover border-4 border-white aspect-[4/3]"
                onError={(e) => {
                  e.currentTarget.src = "/public/images/consulting.jpg";
                }}
              />
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-hala-darker text-white p-5 rounded-2xl shadow-hala-xl border border-white/20 max-w-xs">
                <div className="text-xs font-bold text-slate-300 uppercase">Headquarters</div>
                <div className="text-sm font-extrabold mt-1">Office 217, Mozna Building, Al Nahda, Dubai, UAE</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Core Values & Principles */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 bg-hala-subtle text-hala-blue border border-hala-blue/20 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider mb-3">
              Core Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-hala-darker tracking-tight mb-4">
              Why Global Investors Choose Hala Business Service
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We stand apart through our commitment to transparency, speed, and bespoke corporate advisory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, index) => {
              const Icon = val.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-card p-7 border border-slate-200 shadow-sm hover:shadow-hala-lg hover:border-hala-blue transition-all duration-300 transform hover:-translate-y-1.5"
                >
                  <div className="w-12 h-12 rounded-xl bg-hala-subtle text-hala-blue flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-hala-darker mb-2">
                    {val.title}
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. End-to-End Roadmap */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 bg-hala-subtle text-hala-blue border border-hala-blue/20 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider mb-3">
              Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-hala-darker tracking-tight mb-4">
              Our 4-Step Client Journey
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              A proven, stress-free pathway from your initial business concept to a fully operational entity in Dubai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((m, idx) => (
              <div key={idx} className="bg-hala-ice rounded-card p-7 border border-slate-200 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-hala-blue text-white font-extrabold text-lg flex items-center justify-center mb-4 shadow">
                  {m.step}
                </div>
                <h4 className="text-lg font-bold text-hala-darker mb-2">{m.title}</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Call to Action Banner */}
      <section className="py-16 bg-hala-blue text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Ready to Launch or Expand in Dubai?</h2>
          <p className="text-slate-100 text-base sm:text-lg">
            Schedule a complimentary advisory session with our accredited senior PRO desk today.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white hover:bg-slate-100 text-hala-blue font-extrabold text-sm px-8 py-3.5 rounded-full shadow-xl transition-all inline-flex items-center gap-2"
            >
              Book Free Consultation <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
