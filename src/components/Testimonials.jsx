import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Marcus Reynolds',
      role: 'Real Estate Investor, UK',
      initials: 'MR',
      text: 'Hala Business Service processed my 10-Year Golden Visa in less than 4 days. The VIP medical fitness and Emirates ID express service saved me weeks of waiting. Truly exceptional corporate service!',
      service: '10-Year Golden Visa VIP'
    },
    {
      name: 'Sanjay Kapoor',
      role: 'Managing Director, Tech Ventures LLC',
      initials: 'SK',
      text: 'From Mainland company formation to Ejari and annual trade license renewals, Hala Business Service handles all our corporate PRO work without any friction. Highly recommended for any UAE entrepreneur.',
      service: 'Mainland LLC Setup & Renewal'
    },
    {
      name: 'Fatima Al-Mansoor',
      role: 'Business Owner, Dubai',
      initials: 'FA',
      text: 'Their Amer, Tasheel and Tadbeer desk sorted out our domestic staff visa and family residence permits within 48 hours. Transparent pricing and warm, responsive communication.',
      service: 'Amer & Tasheel Clearance'
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 bg-hala-subtle text-hala-blue border border-hala-blue/20 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider mb-3">
            Verified Client Success
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-hala-darker tracking-tight mb-4">
            Trusted by Thousands of Investors &amp; Founders
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            See what international founders, expats, and business leaders say about their experience with Hala Business Service.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white rounded-card p-6 sm:p-8 border border-slate-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex gap-1 text-hala-blue">
                    {[...Array(5)].map((_, starIndex) => (
                      <Star key={starIndex} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-hala-blue bg-hala-subtle px-2.5 py-0.5 rounded-full">
                    {review.service}
                  </span>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                  "{review.text}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-hala-blue text-white font-extrabold flex items-center justify-center text-sm flex-shrink-0">
                  {review.initials}
                </div>
                <div>
                  <h5 className="font-bold text-sm text-hala-darker">{review.name}</h5>
                  <span className="text-xs text-slate-500 font-medium">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
