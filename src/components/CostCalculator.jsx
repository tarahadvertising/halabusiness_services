import React, { useState } from 'react';
import {
  Building2, Globe, Shield, MessageSquare,
  FileText, CheckCircle2, Sliders, ArrowRight, Plus, Minus, Check
} from 'lucide-react';

export default function CostCalculator({ onNavigate, showToast }) {
  const [jurisdiction, setJurisdiction] = useState('mainland');
  const [visas, setVisas] = useState(1);
  const [office, setOffice] = useState('virtual');

  const jurisdictions = [
    {
      id: 'mainland',
      title: 'Dubai Mainland (DED)',
      desc: '100% foreign ownership, trade anywhere in UAE & globally',
      baseCost: 14500,
      icon: Building2,
      badge: 'Most Popular'
    },
    {
      id: 'freezone',
      title: 'UAE Free Zone',
      desc: '0% corporate tax options, 100% profit repatriation',
      baseCost: 11500,
      icon: Globe,
      badge: 'Tax Optimized'
    },
    {
      id: 'offshore',
      title: 'Offshore Entity',
      desc: 'International asset protection & global invoicing',
      baseCost: 9500,
      icon: Shield,
      badge: 'International'
    }
  ];

  const officeOptions = [
    {
      id: 'virtual',
      title: 'Virtual Desk + Ejari',
      desc: 'DED-approved address & tenancy certification',
      cost: 4500,
      badge: 'Standard'
    },
    {
      id: 'flexi',
      title: 'Dedicated Flexi-Desk',
      desc: 'Coworking space & meeting room access',
      cost: 7500,
      badge: 'Coworking'
    },
    {
      id: 'physical',
      title: 'Private Physical Office',
      desc: 'Dedicated commercial lease in prime Dubai',
      cost: 18000,
      badge: 'Dedicated'
    }
  ];

  const currentJurisdiction = jurisdictions.find((j) => j.id === jurisdiction) || jurisdictions[0];
  const currentOffice = officeOptions.find((o) => o.id === office) || officeOptions[0];

  const licenseCost = currentJurisdiction.baseCost;
  const visaCost = visas * 3800;
  const officeCost = currentOffice.cost;
  const totalCost = licenseCost + visaCost + officeCost;

  const handleSendWhatsApp = () => {
    const text = `*Business Setup Cost Estimation - Hala Business Service*%0A%0A*Jurisdiction:* ${currentJurisdiction.title} (AED ${licenseCost.toLocaleString()})%0A*Visas:* ${visas} Visa(s) (AED ${visaCost.toLocaleString()})%0A*Workspace:* ${currentOffice.title} (AED ${officeCost.toLocaleString()})%0A*Total Estimated Investment:* AED ${totalCost.toLocaleString()}/year%0A%0APlease lock in this quote and assist me with setup!`;

    if (showToast) {
      showToast('Locking your quote... Connecting to senior PRO on WhatsApp!');
    }

    setTimeout(() => {
      window.open(`https://wa.me/971554408208?text=${text}`, '_blank');
    }, 600);
  };

  return (
    <section className="py-20 bg-slate-50" id="calculator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 bg-hala-subtle text-hala-blue border border-hala-blue/20 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider mb-3">
            <Sliders className="w-3.5 h-3.5" /> Instant Pricing Engine
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-hala-darker tracking-tight mb-4">
            Dubai Business Setup Cost Estimator
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Customize your UAE corporate setup package in real-time. Transparent government and PRO fee breakdown with instant WhatsApp export.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="bg-white rounded-card border border-slate-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12">

          {/* Controls Panel (Left 7 Columns) */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-8">

            {/* Step 1: Legal Jurisdiction */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-hala-darker flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-hala-blue text-white text-xs flex items-center justify-center font-bold">1</span>
                  Select Legal Jurisdiction
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {jurisdictions.map((item) => {
                  const Icon = item.icon;
                  const isSelected = jurisdiction === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setJurisdiction(item.id)}
                      className={`p-4 rounded-2xl border-2 text-left transition-colors flex flex-col justify-between relative ${isSelected
                        ? 'border-hala-blue bg-hala-subtle/80 text-hala-darker'
                        : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-600'
                        }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <Icon className={`w-5 h-5 ${isSelected ? 'text-hala-blue' : 'text-slate-400'}`} />
                          {isSelected && (
                            <span className="w-5 h-5 rounded-full bg-hala-blue text-white flex items-center justify-center">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </span>
                          )}
                        </div>
                        <div className="font-extrabold text-sm text-hala-darker mb-1">{item.title}</div>
                        <div className="text-xs text-slate-500 leading-snug">{item.desc}</div>
                      </div>

                      <div className="mt-3 pt-2 border-t border-slate-200/60 text-xs font-bold text-hala-blue">
                        From AED {item.baseCost.toLocaleString()}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Number of Visas */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-hala-darker flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-hala-blue text-white text-xs flex items-center justify-center font-bold">2</span>
                  Investor &amp; Employee Visas Required
                </label>
                <span className="bg-hala-blue text-white text-xs font-extrabold px-3 py-1 rounded-full">
                  {visas} {visas === 1 ? 'Visa' : 'Visas'} (AED {visaCost.toLocaleString()})
                </span>
              </div>

              {/* Quick Preset Buttons */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {[0, 1, 2, 3, 5, 10].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVisas(v)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors ${visas === v
                      ? 'bg-hala-blue text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                  >
                    {v === 0 ? '0 (License Only)' : `${v} ${v === 1 ? 'Visa' : 'Visas'}`}
                  </button>
                ))}
              </div>

              {/* Counter Buttons & Range */}
              <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-200">
                <button
                  onClick={() => setVisas(Math.max(0, visas - 1))}
                  className="w-9 h-9 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-hala-darker font-bold flex items-center justify-center transition-colors"
                  aria-label="Decrease visas"
                >
                  <Minus className="w-4 h-4" />
                </button>

                <input
                  type="range"
                  min="0"
                  max="10"
                  value={visas}
                  onChange={(e) => setVisas(parseInt(e.target.value))}
                  className="flex-1 accent-hala-blue h-2.5 bg-slate-200 rounded-lg cursor-pointer"
                />

                <button
                  onClick={() => setVisas(Math.min(10, visas + 1))}
                  className="w-9 h-9 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-hala-darker font-bold flex items-center justify-center transition-colors"
                  aria-label="Increase visas"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Step 3: Workspace Infrastructure */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-hala-darker flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-hala-blue text-white text-xs flex items-center justify-center font-bold">3</span>
                  Workspace &amp; Physical Infrastructure
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {officeOptions.map((item) => {
                  const isSelected = office === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setOffice(item.id)}
                      className={`p-4 rounded-2xl border-2 text-left transition-colors flex flex-col justify-between relative ${isSelected
                        ? 'border-hala-blue bg-hala-subtle/80 text-hala-darker'
                        : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-600'
                        }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] uppercase tracking-wider font-extrabold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                            {item.badge}
                          </span>
                          {isSelected && (
                            <span className="w-5 h-5 rounded-full bg-hala-blue text-white flex items-center justify-center">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </span>
                          )}
                        </div>
                        <div className="font-extrabold text-sm text-hala-darker mb-1">{item.title}</div>
                        <div className="text-xs text-slate-500 leading-snug">{item.desc}</div>
                      </div>

                      <div className="mt-3 pt-2 border-t border-slate-200/60 text-xs font-extrabold text-hala-blue">
                        {item.cost === 0 ? 'Included' : `+AED ${item.cost.toLocaleString()}`}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Live Summary Panel (Right 5 Columns) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-hala-darker to-hala-deep text-white p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10">
            <div className="space-y-6">
              <h3 className="text-lg sm:text-xl font-extrabold text-white pb-3 border-b border-white/15 flex items-center gap-2">
                <FileText className="w-5 h-5 text-hala-light" /> Estimated Investment Breakdown
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between items-center text-slate-300 pb-2 border-b border-white/10">
                  <span>Selected Jurisdiction:</span>
                  <span className="font-bold text-white text-right">{currentJurisdiction.title}</span>
                </div>
                <div className="flex justify-between items-center text-slate-300 pb-2 border-b border-white/10">
                  <span>License &amp; Approvals:</span>
                  <span className="font-bold text-white">AED {licenseCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-slate-300 pb-2 border-b border-white/10">
                  <span>Visa Allocation ({visas}):</span>
                  <span className="font-bold text-white">AED {visaCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-slate-300 pb-2 border-b border-white/10">
                  <span>Workspace &amp; Ejari:</span>
                  <span className="font-bold text-white">AED {officeCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-slate-300 pb-2 border-b border-white/10">
                  <span>VIP PRO Stamping:</span>
                  <span className="font-bold text-emerald-400">Included (FREE)</span>
                </div>
              </div>

              {/* Total Card */}
              <div className="bg-white/10 border border-white/20 rounded-2xl p-5">
                <div className="text-xs uppercase tracking-wider font-extrabold text-slate-300 mb-1">
                  Total Estimated Investment
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white">
                  AED {totalCost.toLocaleString()} <span className="text-sm font-normal text-slate-300">/ year</span>
                </div>
                <p className="text-[11px] text-slate-300 mt-2">
                  *Covers government registration fees, initial approvals, and VIP PRO processing.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 space-y-3">
              <button
                onClick={handleSendWhatsApp}
                className="w-full bg-whatsapp hover:bg-emerald-600 text-white font-extrabold text-sm py-3.5 rounded-full transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" /> Lock This Quote on WhatsApp
              </button>
              <button
                onClick={() => onNavigate && onNavigate('about')}
                className="w-full bg-white hover:bg-slate-100 text-hala-blue font-extrabold text-sm py-3.5 rounded-full transition-colors flex items-center justify-center gap-2"
              >
                Schedule Free PRO Review <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
