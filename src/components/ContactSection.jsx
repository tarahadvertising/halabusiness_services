import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Clock, Send, ShieldCheck, Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ContactSection({ showToast }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Mainland LLC Company Formation',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `*Contact Form Inquiry - Hala Business Service*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Service:* ${formData.service}%0A*Message:* ${formData.message || 'None'}`;
    
    if (showToast) {
      showToast('Inquiry submitted! Redirecting you directly to our senior PRO on WhatsApp...');
    }

    setTimeout(() => {
      window.open(`https://wa.me/971551272700?text=${msg}`, '_blank');
    }, 800);
  };

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-hala-deep via-hala-darker to-hala-blue rounded-box p-8 sm:p-12 lg:p-16 text-white shadow-hala-xl border border-white/20 relative overflow-hidden">
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-hala-blue/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-hala-light/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left: Contact Info */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/25 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider mb-4 backdrop-blur-md">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> Direct PRO Assistance Desk
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
                  Speak Directly With Our Senior Business Advisors
                </h2>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  Have questions about company formation, trade license renewal, Ejari registration, or 10-year Golden Visas? Visit our Dubai office or message us on WhatsApp for an instant consultation.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center flex-shrink-0 text-white shadow-sm">
                    <MapPin className="w-5 h-5 text-hala-light" />
                  </div>
                  <div>
                    <h5 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-300">Office Location</h5>
                    <p className="text-sm font-semibold text-white">Office 217, Mozna Building, Al Nahda, Dubai, UAE</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center flex-shrink-0 text-white shadow-sm">
                    <Phone className="w-5 h-5 text-hala-light" />
                  </div>
                  <div>
                    <h5 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-300">Landline &amp; Telephone</h5>
                    <a href="tel:+97142230028" className="text-sm font-semibold text-white hover:text-emerald-300 transition-colors">
                      +971 4 223 0028
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center flex-shrink-0 text-white shadow-sm">
                    <MessageSquare className="w-5 h-5 text-whatsapp" />
                  </div>
                  <div>
                    <h5 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-300">WhatsApp Instant Desk</h5>
                    <a
                      href="https://wa.me/971551272700?text=Hello%20Hala%20Business%20Service,%20I%20would%20like%20a%20consultation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-white hover:text-emerald-300 transition-colors"
                    >
                      +971 55 127 2700
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center flex-shrink-0 text-white shadow-sm">
                    <Mail className="w-5 h-5 text-amber-300" />
                  </div>
                  <div>
                    <h5 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-300">Official Email</h5>
                    <a
                      href="mailto:info@haladubai.ae"
                      className="text-sm font-semibold text-white hover:text-emerald-300 transition-colors"
                    >
                      info@haladubai.ae
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center flex-shrink-0 text-white shadow-sm">
                    <Clock className="w-5 h-5 text-hala-light" />
                  </div>
                  <div>
                    <h5 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-300">Working Hours</h5>
                    <p className="text-sm font-semibold text-white">Mon - Sat: 8:00 AM – 8:00 PM (Sunday On-Call PRO)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Booking Form */}
            <div className="lg:col-span-6">
              <div className="bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Book Free Consultation</h3>
                <p className="text-xs text-slate-300 mb-6">Our dedicated consultant will reach out in under 15 minutes.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1.5">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1.5">WhatsApp / Phone *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+971 50 000 0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1.5">Required Service *</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 bg-hala-darker border border-white/20 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-white transition-colors"
                      >
                        <option value="Mainland LLC Company Formation">Mainland LLC Company Formation</option>
                        <option value="UAE Free Zone Setup">UAE Free Zone Setup</option>
                        <option value="10-Year Golden Visa VIP Program">10-Year Golden Visa VIP Program</option>
                        <option value="Trade License Renewal">Trade License Renewal</option>
                        <option value="Virtual Office & Ejari Tenancy">Virtual Office &amp; Ejari Tenancy</option>
                        <option value="Amer, Tasheel & Tadbeer Visa Typing">Amer, Tasheel &amp; Tadbeer Visa Typing</option>
                        <option value="Emirates ID & VIP Medical Fitness">Emirates ID &amp; VIP Medical Fitness</option>
                        <option value="Document Attestation & Notary">Document Attestation &amp; Notary</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1.5">Your Message (Optional)</label>
                    <textarea
                      rows="3"
                      placeholder="Specify your business activity, visa count, or any current licensing requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-white transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-white hover:bg-slate-100 text-hala-blue font-extrabold text-sm sm:text-base py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 mt-2"
                  >
                    <span>Submit &amp; Connect on WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
