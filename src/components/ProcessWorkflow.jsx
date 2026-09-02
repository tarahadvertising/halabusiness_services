import React from 'react';
import { FileSearch, FileSignature, Stethoscope, Award, Clock } from 'lucide-react';

export default function ProcessWorkflow() {
  const steps = [
    {
      num: '01',
      title: 'Free PRO Consultation',
      desc: 'We analyze your commercial goals, shareholding structure, and jurisdiction requirements to recommend the optimal license.',
      icon: FileSearch,
      timeline: 'Day 1'
    },
    {
      num: '02',
      title: 'Name & Initial Approval',
      desc: 'We reserve your trade name, draft bilingual MOAs, and obtain express security & DED / Free Zone clearances.',
      icon: FileSignature,
      timeline: 'Day 1 - 2'
    },
    {
      num: '03',
      title: 'VIP Medical & Biometrics',
      desc: 'We escort you through express 2-hour VIP medical fitness testing and fast-track Emirates ID biometrics with zero queuing.',
      icon: Stethoscope,
      timeline: 'Day 2 - 3'
    },
    {
      num: '04',
      title: 'License & Bank Account',
      desc: 'Receive your official Trade License, electronic establishment card, and guaranteed introduction to tier-1 UAE banks.',
      icon: Award,
      timeline: 'Day 3 - 5'
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-hala-darker tracking-tight mb-4">
            How We Fast-Track Your UAE Company &amp; Visas
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Our express methodology ensures transparent timelines, minimal documentation, and 100% legal compliance from start to finish.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-hala-ice rounded-card p-6 sm:p-7 border border-slate-200 text-center flex flex-col justify-between"
              >
                <div>
                  {/* Step Badge */}
                  <div className="w-12 h-12 mx-auto rounded-2xl bg-hala-blue text-white font-extrabold text-base flex items-center justify-center mb-5">
                    {step.num}
                  </div>

                  <div className="w-10 h-10 mx-auto rounded-xl bg-hala-subtle text-hala-blue flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h4 className="text-lg font-bold text-hala-darker mb-2">
                    {step.title}
                  </h4>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/60 flex items-center justify-center gap-1.5 text-xs font-extrabold text-hala-blue">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Timeline: {step.timeline}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
