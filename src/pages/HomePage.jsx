import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProcessWorkflow from '../components/ProcessWorkflow';

export default function HomePage({ onNavigate, onSelectService }) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <AboutSection onNavigate={onNavigate} />
      <ServicesSection
        isHome={true}
        limit={6}
        onSelectService={onSelectService}
        onNavigate={onNavigate}
      />
      <ProcessWorkflow />
    </>
  );
}
