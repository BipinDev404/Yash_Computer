import React, { useState } from 'react';
import { Phone, Navigation, ArrowRight, CheckCircle2, MessageSquare, Wrench } from 'lucide-react';
import { businessData, getWhatsAppUrl } from '../../data/business';

interface RepairHighlightProps {
  onContactStore: () => void;
  onGetDirections: () => void;
}

export const RepairHighlight: React.FC<RepairHighlightProps> = ({
  onContactStore,
  onGetDirections,
}) => {
  const [selectedIssue, setSelectedIssue] = useState<string>('Laptop Slow & Freezing');

  const commonIssues = [
    { label: 'Laptop Slow & Freezing', solution: 'High-speed SSD upgrade & RAM expansion (Done in 30 mins)' },
    { label: 'Broken Screen or Lines', solution: 'Original panel replacement with brand warranty' },
    { label: 'No Power / Battery Dead', solution: 'Motherboard circuit repair & certified battery swap' },
    { label: 'Windows & Virus Errors', solution: 'Clean OS reinstall, driver fix & data backup' },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-950 text-white rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle background glow */}
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-sky-600/20 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-cyan-600/15 blur-3xl rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Column: Minimal editorial statement */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400">
                <Wrench className="w-4 h-4" />
                <span>Walk-in Hardware Support</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Something not working?
              </h2>

              <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl">
                Bring your laptop or computer to our store in MG Road. We’ll test it in front of you, explain the issue clearly, and give you honest, upfront advice.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onContactStore}
                  className="px-6 py-3 text-xs sm:text-sm font-semibold text-zinc-950 bg-white hover:bg-zinc-100 rounded-xl transition-colors flex items-center gap-2 shadow-xs"
                >
                  <Phone className="w-4 h-4 text-zinc-800" />
                  <span>Contact Store</span>
                </button>

                <a
                  href={businessData.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-colors border border-zinc-700 flex items-center gap-2"
                >
                  <Navigation className="w-4 h-4 text-sky-400" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Right Column: Quick Issue Selector Demo */}
            <div className="lg:col-span-5 bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 space-y-4">
              <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                Common Problems We Resolve Daily:
              </div>

              <div className="space-y-2">
                {commonIssues.map((item) => {
                  const isSelected = selectedIssue === item.label;
                  return (
                    <div
                      key={item.label}
                      onClick={() => setSelectedIssue(item.label)}
                      className={`p-3 rounded-xl cursor-pointer transition-all border ${
                        isSelected
                          ? 'bg-zinc-800 border-sky-500/80 text-white'
                          : 'bg-zinc-950/60 border-zinc-800/80 text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      <div className="text-xs font-semibold">{item.label}</div>
                      {isSelected && (
                        <div className="text-[11px] text-sky-300 mt-1 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-sky-400" />
                          <span>{item.solution}</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl(`Hello YASH COMPUTER, I have an issue with: ${selectedIssue}. Can I bring it to your MG Road store today?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-sky-500 hover:bg-sky-400 text-zinc-950 font-semibold text-xs rounded-xl transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Enquire about this issue on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
