import React from 'react';
import { FileSearch, FileSignature, Stethoscope, Award, Clock } from 'lucide-react';

export default function ProcessWorkflow() {
  const steps = [
    {
      num: '01',
      title: 'Free PRO Consultation',
      desc: 'We analyze your commercial goals, shareholding structure, and jurisdiction requirements to recommend the optimal license.',
      icon: FileSearch,
      image: '/images/workflow/step-1-consultation.jpg',
      timeline: 'Day 1'
    },
    {
      num: '02',
      title: 'Name & Initial Approval',
      desc: 'We reserve your trade name, draft bilingual MOAs, and obtain express security & DED / Free Zone clearances.',
      icon: FileSignature,
      image: '/images/workflow/step-2-approval.jpg',
      timeline: 'Day 1 - 2'
    },
    {
      num: '03',
      title: 'VIP Medical & Biometrics',
      desc: 'We escort you through express 2-hour VIP medical fitness testing and fast-track Emirates ID biometrics with zero queuing.',
      icon: Stethoscope,
      image: '/images/workflow/step-3-medical.jpg',
      timeline: 'Day 2 - 3'
    },
    {
      num: '04',
      title: 'License & Bank Account',
      desc: 'Receive your official Trade License, electronic establishment card, and guaranteed introduction to tier-1 UAE banks.',
      icon: Award,
      image: '/images/workflow/step-4-license.jpg',
      timeline: 'Day 3 - 5'
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-hala-subtle border border-hala-blue/20 text-hala-blue px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider mb-3">
            <span>Fast-Track Roadmap</span>
          </div>
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
                className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-hala-blue/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Card Image Header */}
                  <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

                    {/* Step Number Badge */}
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <span className="bg-hala-blue text-white font-extrabold text-xs px-3 py-1 rounded-full shadow-md border border-white/20">
                        Step {step.num}
                      </span>
                    </div>

                    {/* Floating Icon in bottom right of image */}
                    <div className="absolute -bottom-3 right-4 z-10 w-9 h-9 rounded-xl bg-white text-hala-blue flex items-center justify-center shadow-lg border border-slate-100">
                      <Icon className="w-4 h-4 text-hala-blue" />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 pt-6">
                    <h4 className="text-lg font-bold text-hala-darker mb-2 group-hover:text-hala-blue transition-colors">
                      {step.title}
                    </h4>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-5 pb-5 pt-3 border-t border-slate-100 mt-auto flex items-center justify-between text-xs font-bold text-hala-blue">
                  <div className="flex items-center gap-1.5 text-slate-700 font-semibold">
                    <Clock className="w-3.5 h-3.5 text-hala-blue" />
                    <span>Estimated:</span>
                  </div>
                  <span className="bg-hala-subtle text-hala-blue px-2.5 py-1 rounded-lg">
                    {step.timeline}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
