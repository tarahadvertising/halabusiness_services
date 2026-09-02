import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import ProcessWorkflow from './components/ProcessWorkflow';
import AboutSection from './components/AboutSection';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';
import ServiceModal from './components/ServiceModal';
import Toast from './components/Toast';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalService, setActiveModalService] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 4000);
  };

  const handleNavigate = (pageId, category = null) => {
    setActivePage(pageId);
    if (category) {
      setSelectedCategory(category);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-hala-darker flex flex-col font-body antialiased selection:bg-hala-blue selection:text-white">
      {/* Main Sticky Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={handleNavigate}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Main Content Areas based on activePage view state */}
      <main className="flex-grow">
        {activePage === 'home' && (
          <>
            <Hero onNavigate={handleNavigate} />
            <AboutSection onNavigate={handleNavigate} />
            <ServicesSection
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              onSelectService={setActiveModalService}
            />
            <ProcessWorkflow />
          </>
        )}

        {activePage === 'services' && (
          <div className="pt-2">
            <ServicesSection
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              onSelectService={setActiveModalService}
            />
          </div>
        )}

        {activePage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {activePage === 'contact' && (
          <div className="pt-2">
            <AboutSection onNavigate={handleNavigate} />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Service Detail Modal */}
      {activeModalService && (
        <ServiceModal
          service={activeModalService}
          onClose={() => setActiveModalService(null)}
          onBookNow={handleNavigate}
        />
      )}

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Notification Toast */}
      <Toast message={toastMessage} />
    </div>
  );
}
