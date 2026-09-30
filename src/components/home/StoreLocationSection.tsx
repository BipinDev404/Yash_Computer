import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, Navigation, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { businessData, getWhatsAppUrl } from '../../data/business';

export const StoreLocationSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white hairline-t hairline-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Store Details */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-sky-600 mb-2">
                Visit Us
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
                Come Say Hello.
              </h2>
              <p className="text-sm text-zinc-600 mt-3 leading-relaxed">
                Step into our store on MG Road to test any laptop, consult on custom PC configurations, or get your computer diagnosed on the spot.
              </p>
            </div>

            {/* Address & Timings card */}
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-zinc-950">YASH COMPUTER</div>
                    <div className="text-xs text-zinc-600 mt-0.5">{businessData.addressLine}</div>
                    <div className="text-xs text-zinc-500">{businessData.city}, {businessData.state} – {businessData.pincode}</div>
                    <div className="text-[11px] text-zinc-400 mt-1">Landmark: {businessData.landmark}</div>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-zinc-950">Store Opening Timings</div>
                    <div className="text-xs text-zinc-600 mt-0.5">{businessData.timings.weekdays}</div>
                    <div className="text-xs text-zinc-500">Sunday: {businessData.timings.sunday}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href={businessData.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white bg-zinc-950 hover:bg-zinc-800 rounded-xl transition-colors shadow-xs"
              >
                <Navigation className="w-3.5 h-3.5 text-sky-400" />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${businessData.phone}`}
                className="flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-zinc-900 bg-zinc-100 hover:bg-zinc-200 rounded-xl transition-colors border border-zinc-200"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Store</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-zinc-900 bg-zinc-100 hover:bg-zinc-200 rounded-xl transition-colors border border-zinc-200"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Store Map & Location Showcase */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="h-full min-h-[380px] bg-zinc-950 text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-xl border border-zinc-800">
              {/* Subtle background ambient map lines */}
              <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid-map" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid-map)" />
                </svg>
              </div>

              {/* Top Tag */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-xs font-mono text-sky-400 tracking-wider">
                  AURANGABAD HUB
                </span>
                <span className="text-xs text-zinc-400 font-mono">PIN: 824101</span>
              </div>

              {/* Center Location Pin Marker Graphic */}
              <div className="relative z-10 my-auto text-center space-y-3">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-sky-500/20 border border-sky-400/40 backdrop-blur-sm text-sky-400">
                  <MapPin className="w-8 h-8 text-sky-400 animate-bounce" />
                </div>
                <div className="text-xl font-bold tracking-tight text-white">
                  YASH COMPUTER STORE
                </div>
                <p className="text-xs text-zinc-400 max-w-sm mx-auto">
                  Opposite / Near Annapurna Hotel & Axis Bank, Main MG Road Commercial Market.
                </p>
              </div>

              {/* Bottom Quick Route Helper */}
              <div className="relative z-10 pt-4 border-t border-zinc-800 flex items-center justify-between">
                <div className="text-xs text-zinc-400">
                  Parking space & Walk-in diagnostics available
                </div>
                <a
                  href={businessData.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <span>Open in Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
