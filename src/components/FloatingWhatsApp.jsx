import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="WhatsApp quick contact" className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 group">
      {/* Tooltip on Hover */}
      <div className="hidden sm:block bg-hala-darker text-white text-xs font-bold py-2 px-3.5 rounded-full shadow-lg border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none transform translate-x-2 group-hover:translate-x-0">
        Chat with Senior PRO
      </div>

      {/* Trigger Button */}
      <a
        href="https://wa.me/971551272700?text=Hello%20Hala%20Business%20Service,%20I%20would%20like%20to%20consult%20with%20a%20PRO%20officer"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-hala-blue text-white shadow-lg hover:bg-hala-dark transition-colors focus:outline-none border-2 border-white/40"
        aria-label="Chat with Senior PRO on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
      </a>
    </aside>
  );
}
