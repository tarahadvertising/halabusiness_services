import React, { useState } from 'react';
import {
  Crown, Building2, RefreshCw, Laptop, FileCheck, Landmark,
  FileBadge, Users, ShieldCheck, Award, Scale, FileText,
  IdCard, Home, Stamp, ArrowRight, CheckCircle2, Search, MessageSquare
} from 'lucide-react';
import { servicesData } from '../data/servicesData';

const iconMap = {
  Crown,
  Building2,
  RefreshCw,
  Laptop,
  FileCheck,
  Landmark,
  FileBadge,
  Users,
  ShieldCheck,
  Award,
  Scale,
  FileText,
  IdCard,
  Home,
  Stamp
};

export default function ServicesSection({ selectedCategory, setSelectedCategory, onSelectService }) {
  const displayServices = selectedCategory && selectedCategory !== 'all'
    ? servicesData.filter((s) => s.category === selectedCategory)
    : servicesData;

  const handleWhatsAppInquiry = (service) => {
    const text = `*Service Inquiry - Hala Business Service*%0A%0A*Service:* ${service.title}%0A*Category:* ${service.categoryLabel}%0A*Price Estimate:* ${service.price}%0A%0APlease provide full details on documents required and processing timeline.`;
    window.open(`https://wa.me/971551272700?text=${text}`, '_blank');
  };

  return (
    <section className="py-20 bg-slate-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-hala-darker tracking-tight mb-4">
            Our 15 Specialized Business &amp; Government Solutions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            From mainland company formation and 10-year Golden Visas to Amer/Tasheel typing, Ejari leasing, and court clearances across Dubai.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayServices.map((service) => {
            const IconComponent = iconMap[service.icon] || Building2;
            return (
              <div
                key={service.id}
                className={`bg-white rounded-card p-6 sm:p-7 border flex flex-col justify-between transition-colors ${service.featured ? 'border-hala-blue/40' : 'border-slate-200'
                  }`}
              >
                <div>
                  {/* Top Row: Icon + Badge */}
                  <div className="flex justify-between items-start mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-hala-subtle text-hala-blue flex items-center justify-center p-3">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-[11px] font-extrabold uppercase px-3 py-1 rounded-full ${service.badgeType === 'vip'
                        ? 'bg-hala-blue text-white'
                        : 'bg-hala-ice text-hala-blue border border-hala-subtle'
                        }`}
                    >
                      {service.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-hala-darker mb-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    {service.shortDesc}
                  </p>

                  {/* Bullet Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-hala-blue flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer: Pricing + Actions */}
                <div className="pt-5 border-t border-slate-100 mt-auto space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                        Pricing Estimate
                      </span>
                      <span className="text-sm font-extrabold text-hala-blue">
                        {service.price}
                      </span>
                    </div>

                    <button
                      onClick={() => onSelectService(service)}
                      className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-hala-blue bg-hala-subtle hover:bg-hala-blue hover:text-white px-3.5 py-1.5 rounded-full transition-colors"
                    >
                      <span>Full Scope</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Quick WhatsApp Quote Action */}
                  <button
                    onClick={() => handleWhatsAppInquiry(service)}
                    className="w-full text-center text-xs font-bold text-slate-600 hover:text-emerald-600 bg-slate-50 hover:bg-emerald-50 py-2 rounded-xl border border-slate-100 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-whatsapp" />
                    <span>Inquire on WhatsApp</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
