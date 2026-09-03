import React from 'react';
import ServicesSection from '../components/ServicesSection';

export default function ServicesPage({
  selectedCategory,
  setSelectedCategory,
  onSelectService,
  onNavigate
}) {
  return (
    <div className="pt-2">
      <ServicesSection
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        onSelectService={onSelectService}
        onNavigate={onNavigate}
      />
    </div>
  );
}
