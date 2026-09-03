import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero({ onNavigate }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'business-setup',
      title: 'Hala Business Service',
      subtitle: 'Your trusted partner for 100% foreign-owned UAE Company Formation, 10-Year Golden Visas, Trade License Renewals, and complete government clearing across Dubai.',
      bgImage: '/images/bg.png',
      primaryBtnText: 'Explore 15 Services',
      primaryBtnAction: () => onNavigate && onNavigate('services', 'all'),
      whatsappText: 'Hello Hala Business Service, I would like to consult about starting a business in Dubai'
    },
    {
      id: 'tours-travels',
      title: 'Hala Tours & Travels',
      subtitle: 'Discover Dubai with luxury desert safaris, private yacht charters, iconic city tours, international tourist visa assistance, and VIP airport transfers.',
      bgImage: '/images/tours-travels-bg.jpg',
      primaryBtnText: 'Explore Travel Packages',
      primaryBtnAction: () => {
        window.open('https://wa.me/971554408208?text=Hello%20Hala%20Tours%20&%20Travels,%20I%20would%20like%20to%20inquire%20about%20Dubai%20tour%20packages%20and%20visas', '_blank');
      },
      whatsappText: 'Hello Hala Tours & Travels, I would like to book a Dubai tour package'
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative min-h-[85vh] py-16 sm:py-20 lg:py-24 flex items-center justify-center overflow-hidden bg-hala-darker select-none">
      {/* Sliding Background Images (Cross-Fade) */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out pointer-events-none ${index === currentSlide ? 'opacity-85' : 'opacity-0'
            }`}
          style={{ backgroundImage: `url('${slide.bgImage}')` }}
        />
      ))}

      {/* Soft Tint Overlay for Text Legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-hala-darker/85 via-hala-darker/50 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-hala-darker/70 via-transparent to-hala-darker/30 pointer-events-none" />

      {/* Main Slide Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left w-full">
        <div className="max-w-3xl">
          {/* Main Brand Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-tight mb-6 text-white transition-all duration-300">
            {slides[currentSlide].title}
          </h1>

          {/* Subtitle */}
          <p className="text-slate-100 text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed font-normal mb-10 transition-all duration-300">
            {slides[currentSlide].subtitle}
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-wrap justify-start items-center gap-3 sm:gap-4">
            <button
              onClick={slides[currentSlide].primaryBtnAction}
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-hala-blue font-extrabold text-xs sm:text-sm px-6 py-2.5 sm:py-3 rounded-full transition-colors duration-200 border border-white/20 shadow-md"
            >
              <span>{slides[currentSlide].primaryBtnText}</span>
              <ArrowRight className="w-3.5 h-3.5 text-hala-blue" />
            </button>

            <a
              href={`https://wa.me/971554408208?text=${encodeURIComponent(slides[currentSlide].whatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-hala-blue hover:bg-hala-dark text-white font-bold text-xs sm:text-sm px-6 py-2.5 sm:py-3 rounded-full transition-colors duration-200 border border-white/20 shadow-md"
            >
              <MessageSquare className="w-3.5 h-3.5 text-white" />
              <span>WhatsApp Desk</span>
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="hidden sm:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/30 hover:bg-black/50 text-white items-center justify-center border border-white/20 transition-colors backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="hidden sm:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/30 hover:bg-black/50 text-white items-center justify-center border border-white/20 transition-colors backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Interactive Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full ${currentSlide === index
              ? 'w-8 h-2.5 bg-white'
              : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
              }`}
          />
        ))}
      </div>
    </section>
  );
}
