import React from 'react';
import { Phone, MessageSquare, Navigation } from 'lucide-react';
import { businessData, getWhatsAppUrl } from '../../data/business';

export const MobileStickyBar: React.FC = () => {
  return (
    <aside aria-label="Mobile quick contact bar" className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-white/95 backdrop-blur-md border-t border-zinc-200 px-3 py-2 shadow-lg">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        <a
          href={`tel:${businessData.phone}`}
          className="flex items-center justify-center gap-1.5 py-2 px-1 text-xs font-semibold text-zinc-800 bg-zinc-100 active:bg-zinc-200 rounded-lg transition-colors text-center"
        >
          <Phone className="w-3.5 h-3.5 text-zinc-600" />
          <span>Call</span>
        </a>

        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2 px-1 text-xs font-semibold text-white bg-zinc-900 active:bg-zinc-800 rounded-lg transition-colors text-center"
        >
          <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
          <span>WhatsApp</span>
        </a>

        <a
          href={businessData.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2 px-1 text-xs font-semibold text-zinc-800 bg-zinc-100 active:bg-zinc-200 rounded-lg transition-colors text-center"
        >
          <Navigation className="w-3.5 h-3.5 text-sky-600" />
          <span>Directions</span>
        </a>
      </div>
    </aside>
  );
};
