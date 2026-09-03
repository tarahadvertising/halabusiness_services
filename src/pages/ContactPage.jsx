import React, { useState } from 'react';
import {
  MapPin, Phone, MessageSquare, Send, Mail,
  ArrowRight, Navigation
} from 'lucide-react';

export default function ContactPage({ onNavigate, showToast }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Business Setup',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const servicesList = [
    'Business Setup',
    'Visa Services',
    'Attestation Services',
    'VAT Services',
    'Trademark & ISO Registration',
    'Notary Services',
    'Golden Visa 10 Year',
    'Trade License Renewal',
    'Virtual Office & Ejari',
    'Amer, Tasheel, Tadbeer & Documents Clearing',
    'Emirates ID / Medical'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const text = `*Contact Request - Hala Business Service*%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Email:* ${encodeURIComponent(formData.email || 'N/A')}%0A*Service:* ${encodeURIComponent(formData.service)}%0A*Message:* ${encodeURIComponent(formData.message || 'I would like more information.')}`;

    if (showToast) {
      showToast('Redirecting to WhatsApp...');
    }

    setTimeout(() => {
      window.open(`https://wa.me/971554408208?text=${text}`, '_blank');
      setSubmitted(false);
    }, 400);
  };

  const contactChannels = [
    {
      icon: MapPin,
      title: 'Office Address',
      subtitle: 'Al Quoz, Dubai',
      value: 'Al Khail Mall, Latifa Bint Hamdan St - Al Qouz Fourth - Al Quoz - Dubai',
      actionText: 'Get Directions',
      actionUrl: 'https://maps.google.com/?q=Al+Khail+Mall+Latifa+Bint+Hamdan+St+Al+Quoz+Dubai',
      color: 'bg-blue-50 text-hala-blue border-blue-100',
    },
    {
      icon: MessageSquare,
      title: 'Phone & WhatsApp',
      subtitle: 'Direct Call & Instant Chat',
      value: '+97155 4408208',
      actionText: 'Chat on WhatsApp',
      actionUrl: 'https://wa.me/971554408208?text=Hello%20Hala%20Business%20Service,%20I%20would%20like%20to%20inquire%20about%20your%20services',
      color: 'bg-emerald-50 text-whatsapp border-emerald-100',
    },
    {
      icon: Mail,
      title: 'Email Address',
      subtitle: 'Support & Inquiries',
      value: 'info@haladubai.ae',
      actionText: 'Send Email',
      actionUrl: 'mailto:info@haladubai.ae',
      color: 'bg-amber-50 text-amber-600 border-amber-100',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* 1. Hero Banner */}
      <section className="relative bg-gradient-to-br from-hala-deep via-hala-darker to-hala-blue text-white py-12 sm:py-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-hala-blue/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-hala-light/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Contact Us
          </h1>
          <p className="text-slate-200 text-sm sm:text-base mt-2 max-w-xl mx-auto leading-relaxed">
            Get in touch with our team in Dubai for fast business setup, visas, and PRO services.
          </p>
        </div>
      </section>

      {/* 2. Contact Channels Cards */}
      <section className="relative -mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactChannels.map((channel, i) => {
            const Icon = channel.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-md hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 border ${channel.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm text-hala-darker">
                    {channel.title}
                  </h3>
                  <span className="text-xs text-slate-400 block mb-1">
                    {channel.subtitle}
                  </span>
                  <p className="text-xs font-semibold text-slate-700 leading-snug mb-3">
                    {channel.value}
                  </p>
                </div>

                <a
                  href={channel.actionUrl}
                  target={channel.actionUrl.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-hala-blue hover:text-hala-darker transition-colors pt-2 border-t border-slate-100"
                >
                  <span>{channel.actionText}</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Form & Office Location */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left: Message Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg">
              <div className="mb-6">
                <h2 className="text-xl sm:text-2xl font-extrabold text-hala-darker">
                  Send Us a Message
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm mt-1">
                  Fill out the form below and we will respond promptly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-hala-blue/30 focus:border-hala-blue transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+971 55 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-hala-blue/30 focus:border-hala-blue transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-hala-blue/30 focus:border-hala-blue transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Service *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-hala-blue/30 focus:border-hala-blue transition-all"
                    >
                      {servicesList.map((srv, idx) => (
                        <option key={idx} value={srv}>{srv}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-hala-blue/30 focus:border-hala-blue transition-all resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full bg-hala-blue hover:bg-hala-darker text-white font-bold text-sm py-3 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>
              </form>
            </div>

            {/* Right: Location Map Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md h-full flex flex-col">
                <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-hala-darker">Our Location</h4>
                    <p className="text-xs text-slate-500">Al Khail Mall, Latifa Bint Hamdan St, Al Quoz, Dubai</p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Al+Khail+Mall+Latifa+Bint+Hamdan+St+Al+Quoz+Dubai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-hala-blue bg-hala-subtle px-3 py-1.5 rounded-full hover:text-hala-darker"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Open in Maps</span>
                  </a>
                </div>

                <div className="relative min-h-[320px] sm:min-h-[360px] flex-1 w-full bg-slate-100">
                  <iframe
                    title="Al Khail Mall Dubai Office Location"
                    src="https://maps.google.com/maps?q=Al+Khail+Mall+Latifa+Bint+Hamdan+St+Al+Quoz+Dubai&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
