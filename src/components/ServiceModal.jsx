import React from 'react';
import { X, CheckCircle2, FileText, Clock, Landmark, MessageSquare, ArrowRight } from 'lucide-react';

export default function ServiceModal({ service, onClose, onBookNow }) {
  if (!service) return null;

  const handleWhatsAppInquiry = () => {
    const text = `*Service Inquiry - Hala Business Service*%0A%0A*Service:* ${service.title}%0A*Category:* ${service.categoryLabel}%0A*Price Estimate:* ${service.price}%0A%0APlease assist me with the application prerequisites and fast-track booking.`;
    window.open(`https://wa.me/971551272700?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-hala-deep/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-slate-200 overflow-hidden">
        
        {/* Service Header Banner with Image */}
        {service.image && (
          <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-100">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-black/30" />
            
            {/* Close Button on top of banner */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-slate-700 flex items-center justify-center shadow-md transition-colors z-20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Banner Text overlay */}
            <div className="absolute bottom-4 left-6 right-6 z-10">
              <span className="inline-block bg-hala-blue text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-2 shadow">
                {service.categoryLabel}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white drop-shadow-sm">
                {service.title}
              </h3>
            </div>
          </div>
        )}

        <div className="p-6 sm:p-8">
          {/* If no image, render standard header with close button */}
          {!service.image && (
            <div className="mb-6 pr-8 relative">
              <button
                onClick={onClose}
                className="absolute top-0 right-0 w-9 h-9 rounded-full bg-slate-100 text-slate-500 hover:text-hala-darker hover:bg-slate-200 flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="inline-block bg-hala-subtle text-hala-blue text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                {service.categoryLabel}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-hala-darker">
                {service.title}
              </h3>
            </div>
          )}

          <p className="text-slate-600 text-sm mb-6 leading-relaxed">
            {service.details?.overview || service.shortDesc}
          </p>

          {/* Deliverables */}
          <div className="mb-6 bg-hala-ice p-5 rounded-2xl border border-slate-200">
            <h4 className="text-xs sm:text-sm font-extrabold text-hala-darker uppercase tracking-wider mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-hala-blue" /> Key Deliverables &amp; Scope
            </h4>
            <ul className="space-y-2">
              {service.details?.deliverables.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-hala-blue mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Required Documents / Prerequisites */}
          <div className="mb-6">
            <h4 className="text-xs sm:text-sm font-extrabold text-hala-darker uppercase tracking-wider mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4 text-hala-blue" /> Required Documents &amp; Prerequisites
            </h4>
            <ul className="space-y-2">
              {service.details?.prerequisites.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Meta Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 pt-4 border-t border-slate-100">
            <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <Clock className="w-5 h-5 text-hala-blue flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-[10px] font-bold uppercase text-slate-400">Processing Timeline</div>
                <div className="text-xs sm:text-sm font-bold text-hala-darker">{service.details?.timeline}</div>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <Landmark className="w-5 h-5 text-hala-blue flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-[10px] font-bold uppercase text-slate-400">Government Authority</div>
                <div className="text-xs sm:text-sm font-bold text-hala-darker">{service.details?.governmentAuthority}</div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleWhatsAppInquiry}
              className="flex-1 bg-white hover:bg-slate-100 text-hala-blue border-2 border-hala-blue font-extrabold text-sm py-3.5 rounded-full transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-hala-blue" /> Fast-Track on WhatsApp
            </button>
            <button
              onClick={() => {
                onClose();
                if (onBookNow) onBookNow('contact');
              }}
              className="flex-1 bg-hala-blue hover:bg-hala-dark text-white font-extrabold text-sm py-3.5 rounded-full transition-colors flex items-center justify-center gap-2"
            >
              Book Free Consultation <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
