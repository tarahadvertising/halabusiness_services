import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Can a foreign national own 100% of a Mainland Dubai company?',
      a: 'Yes! Under the updated UAE Commercial Companies Law, foreign investors can own 100% of shares in mainland LLC companies across more than 1,000 commercial and industrial business activities without needing a local Emirati partner or sponsor.',
    },
    {
      q: 'What are the main qualification tracks for the 10-Year Golden Visa?',
      a: 'Key pathways include: (1) Real Estate: Owning UAE property valued at AED 2,000,000 or more; (2) Senior Executives: Holding a managerial title with a minimum monthly salary of AED 30,000 and an attested university degree; (3) Specialists, Doctors, and Scientists certified by respective UAE authorities.',
    },
    {
      q: 'How fast can I obtain a new Trade License in Dubai?',
      a: 'With our express DED Instant License setup, preliminary trade licenses and name approvals can be issued within 24 to 48 hours. Standard setups with Ejari and corporate MOA drafting typically take 3 to 5 working days.',
    },
    {
      q: 'What is the main difference between Mainland and Free Zone setups?',
      a: 'A Mainland (DED) company allows you to trade freely anywhere in the UAE local market as well as internationally, open retail shops, and bid on government tenders. A Free Zone company is ideal for international consulting, e-commerce, and import/export with customs duty exemptions and 0% tax options.',
    },
    {
      q: 'Do I need a physical office lease to renew my trade license?',
      a: 'A registered tenancy (Ejari) is required by DED. Hala Business Service provides DED-approved Virtual Office Space and Business Center flexi-desks starting from AED 4,500/year, satisfying 100% of compliance requirements without leasing costly physical real estate.',
    },
    {
      q: 'How does Hala Business Service assist with Corporate Bank Accounts?',
      a: 'We partner with major UAE banks including Emirates NBD, Mashreq, Wio Bank, RAKBANK, and FAB. We prepare your corporate profile, KYC documents, business plan, and arrange banker meetings to secure smooth corporate account opening.',
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-hala-ice" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 bg-hala-subtle text-hala-blue border border-hala-blue/20 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" /> Help &amp; Knowledge Base
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-hala-darker tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Everything you need to know about setting up, licensing, and running your company in Dubai.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl border transition-colors overflow-hidden ${
                  isOpen ? 'border-hala-blue' : 'border-slate-200'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex justify-between items-center gap-4 font-bold text-sm sm:text-base text-hala-darker hover:text-hala-blue transition-colors focus:outline-none"
                >
                  <span className="leading-snug">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-hala-blue flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-hala-blue' : 'text-slate-400'
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Support Prompt */}
        <div className="mt-12 text-center p-6 bg-white rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-sm text-hala-darker">Have a specific question not listed here?</h4>
            <p className="text-xs text-slate-500">Our bilingual senior PRO officers are available 6 days a week.</p>
          </div>
          <a
            href="https://wa.me/971554408208?text=Hello%20Hala%20Business%20Service,%20I%20have%20a%20question%20regarding%20Dubai%20business%20setup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-whatsapp hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-colors"
          >
            <MessageSquare className="w-4 h-4" /> Ask on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
