import React from 'react';
import { MessageSquare, Phone, MapPin, ArrowRight } from 'lucide-react';
import { businessData, getWhatsAppUrl } from '../../data/business';

interface ContactCTAProps {
  onVisitStore: () => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ onVisitStore }) => {
  return (
    <section className="py-16 md:py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-tr from-zinc-950 via-zinc-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden shadow-2xl">
          {/* Subtle lighting */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-sky-500/10 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-sky-400">
              Need Something Specific?
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Tell us what you need.
            </h2>

            <p className="text-base text-zinc-300 leading-relaxed">
              Looking for a particular laptop model, high-capacity SSD, custom PC build, or quick repair estimate? Contact us right away.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <a
                href={getWhatsAppUrl('Hello YASH COMPUTER, I am looking for a specific laptop/computer requirement. Please assist.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-xs sm:text-sm font-semibold text-zinc-950 bg-white hover:bg-zinc-100 rounded-xl transition-all shadow-md flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={`tel:${businessData.phone}`}
                className="px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-all border border-zinc-700 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Store ({businessData.phoneFormatted})</span>
              </a>

              <button
                onClick={onVisitStore}
                className="px-6 py-3.5 text-xs sm:text-sm font-semibold text-zinc-300 hover:text-white bg-transparent hover:bg-zinc-800/60 rounded-xl transition-all border border-zinc-800 flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-rose-400" />
                <span>Visit Store</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
