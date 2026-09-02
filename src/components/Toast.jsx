import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 bg-hala-darker text-white px-5 py-3.5 rounded-xl shadow-2xl border-l-4 border-hala-light flex items-center gap-3 animate-in slide-in-from-bottom-5 duration-300">
      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
}
