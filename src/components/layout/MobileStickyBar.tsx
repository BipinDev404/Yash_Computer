import React from 'react';
import { Phone, MessageSquare, Navigation } from 'lucide-react';
import { businessData, getWhatsAppUrl } from '../../data/business';

export const MobileStickyBar: React.FC = () => {
  return (
    <aside
      aria-label="Mobile quick contact bar"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/90 backdrop-blur-xl border-t border-zinc-200/90 px-3 py-2.5 pb-safe shadow-2xl"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        <a
          href={`tel:${businessData.phone}`}
          className="h-12 flex flex-col items-center justify-center gap-0.5 px-2 text-zinc-900 bg-zinc-100/90 active:bg-zinc-200 active:scale-[0.97] rounded-xl transition-all text-center border border-zinc-200/60"
        >
          <Phone className="w-4 h-4 text-zinc-800 shrink-0" />
          <span className="text-[11px] font-bold tracking-tight">Call Store</span>
        </a>

        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="h-12 flex flex-col items-center justify-center gap-0.5 px-2 text-white bg-zinc-950 active:bg-zinc-800 active:scale-[0.97] rounded-xl transition-all text-center shadow-xs"
        >
          <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="text-[11px] font-bold tracking-tight">WhatsApp</span>
        </a>

        <a
          href={businessData.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="h-12 flex flex-col items-center justify-center gap-0.5 px-2 text-zinc-900 bg-zinc-100/90 active:bg-zinc-200 active:scale-[0.97] rounded-xl transition-all text-center border border-zinc-200/60"
        >
          <Navigation className="w-4 h-4 text-sky-600 shrink-0" />
          <span className="text-[11px] font-bold tracking-tight">Directions</span>
        </a>
      </div>
    </aside>
  );
};

