import React, { useState } from 'react';
import {
  Crown, Building2, RefreshCw, Laptop, FileCheck, Landmark,
  FileBadge, Users, ShieldCheck, Award, Scale, FileText,
  IdCard, Home, Stamp, ArrowRight, CheckCircle2, Search, MessageSquare,
  Receipt, BadgeCheck, Calculator
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
  Stamp,
  Receipt,
  BadgeCheck,
  Calculator
};

export default function ServicesSection({
  selectedCategory,
  setSelectedCategory,
  onSelectService,
  isHome = false,
  limit = null,
  onNavigate
}) {
  let displayServices = selectedCategory && selectedCategory !== 'all'
    ? servicesData.filter((s) => s.category === selectedCategory)
    : servicesData;

  if (limit) {
    displayServices = displayServices.slice(0, limit);
  }

  const handleWhatsAppInquiry = (service) => {
    const text = `*Service Inquiry - Hala Business Service*%0A%0A*Service:* ${service.title}%0A*Category:* ${service.categoryLabel}%0A%0APlease provide full details on documents required and processing timeline.`;
    window.open(`https://wa.me/971554408208?text=${text}`, '_blank');
  };

  return (
    <section className="py-20 bg-hala-blue/10 border-y border-hala-blue/15" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-white/90 border border-hala-blue/20 text-hala-blue px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider mb-3 shadow-xs">
            <span>{isHome ? "Premier Corporate Solutions" : "Complete Service Catalog"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-hala-darker tracking-tight mb-4">
            {isHome ? "Our Core Business & Government Services" : "Our Specialized Business & Government Solutions"}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {isHome
              ? "From mainland company formation and fast-track residency visas to attestation, VAT compliance, and trademark registration across Dubai."
              : "From mainland company formation, VAT & tax filing, and trademark protection to 10-year Golden Visas, Amer/Tasheel typing, and certificate attestation across Dubai."}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((service) => {
            const IconComponent = iconMap[service.icon] || Building2;
            return (
              <div
                key={service.id}
                className={`group bg-white rounded-2xl overflow-hidden border flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 ${
                  service.featured ? 'border-hala-blue/40 ring-1 ring-hala-blue/20' : 'border-slate-200'
                }`}
              >
                {/* Service Card Image Header */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-hala-deep to-hala-blue flex items-center justify-center">
                      <IconComponent className="w-12 h-12 text-white/40" />
                    </div>
                  )}

                  {/* Gradient Overlay for visual polish */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* Badge in top right */}
                  <div className="absolute top-3.5 right-3.5 z-10">
                    <span
                      className={`text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md backdrop-blur-md ${
                        service.badgeType === 'vip'
                          ? 'bg-amber-500 text-white border border-amber-400/50'
                          : 'bg-hala-blue text-white border border-white/20'
                      }`}
                    >
                      {service.badge}
                    </span>
                  </div>

                </div>

                {/* Card Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category Label */}
                    <div className="text-[11px] font-bold text-hala-blue uppercase tracking-wider mb-1">
                      {service.categoryLabel}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-hala-darker mb-2 group-hover:text-hala-blue transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-sm leading-relaxed mb-5 line-clamp-3">
                      {service.shortDesc}
                    </p>

                    {/* Bullet Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feat, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-hala-blue flex-shrink-0" />
                          <span className="line-clamp-1">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Footer: Actions */}
                  <div className="pt-4 border-t border-slate-100 mt-auto space-y-2.5">
                    <button
                      onClick={() => onSelectService(service)}
                      className="w-full text-center text-xs sm:text-sm font-bold text-hala-blue bg-hala-subtle hover:bg-hala-blue hover:text-white py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>View Full Scope</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    {/* Quick WhatsApp Quote Action */}
                    <button
                      onClick={() => handleWhatsAppInquiry(service)}
                      className="w-full text-center text-xs font-bold text-slate-600 hover:text-emerald-700 bg-slate-50 hover:bg-emerald-50 py-2.5 rounded-xl border border-slate-200 flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-whatsapp" />
                      <span>Inquire on WhatsApp</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* If on Home page / limited view, display 'Show More Services' Button */}
        {isHome && (
          <div className="text-center mt-14 pt-4">
            <button
              onClick={() => onNavigate && onNavigate('services', 'all')}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-hala-deep to-hala-blue hover:from-hala-darker hover:to-hala-deep text-white font-extrabold text-sm sm:text-base px-9 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <span>Show More Services (Explore All Solutions)</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
