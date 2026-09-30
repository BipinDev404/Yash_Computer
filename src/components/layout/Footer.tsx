import React from 'react';
import { MapPin, Phone, MessageSquare, ExternalLink, ArrowUpRight } from 'lucide-react';
import { businessData, getWhatsAppUrl } from '../../data/business';

interface FooterProps {
  onNavigate: (page: string, meta?: any) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white hairline-t mt-20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 hairline-b">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4 md:col-span-1">
            <h3 className="text-lg font-bold text-zinc-950 tracking-tight">YASH COMPUTER</h3>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Computer · Laptop · Accessories · Hardware Services
            </p>
            <p className="text-xs text-zinc-400">
              MG Road, near Annapurna Hotel / Axis Bank, Aurangabad, Bihar – 824101
            </p>
            <div className="pt-2">
              <a
                href={businessData.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-sky-600 hover:text-sky-700 transition-colors"
              >
                <span>View on Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Explore
            </div>
            <ul className="space-y-2 text-xs font-medium text-zinc-600">
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-zinc-950 transition-colors"
                >
                  All Products & Hardware
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products', { category: 'laptops' })}
                  className="hover:text-zinc-950 transition-colors"
                >
                  Laptops (HP, Lenovo, Dell)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products', { category: 'storage' })}
                  className="hover:text-zinc-950 transition-colors"
                >
                  NVMe SSDs & RAM Upgrades
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products', { category: 'monitors' })}
                  className="hover:text-zinc-950 transition-colors"
                >
                  Monitors & Displays
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Services
            </div>
            <ul className="space-y-2 text-xs font-medium text-zinc-600">
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-zinc-950 transition-colors"
                >
                  Laptop & Desktop Diagnostics
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-zinc-950 transition-colors"
                >
                  SSD Cloning & RAM Installation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-zinc-950 transition-colors"
                >
                  Windows Setup & Virus Cleaning
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-zinc-950 transition-colors"
                >
                  CCTV & Network Cabling
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Store & Contact */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Store Contact
            </div>
            <div className="space-y-2 text-xs text-zinc-600">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <a href={`tel:${businessData.phone}`} className="hover:text-zinc-950 font-mono">
                  {businessData.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-950"
                >
                  WhatsApp Store Chat
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                <span className="text-zinc-500">Aurangabad, Bihar 824101</span>
              </div>
              <div className="pt-2 text-[11px] text-zinc-400">
                <div>Mon – Sat: 10:00 AM – 8:30 PM</div>
                <div>Sunday: 10:30 AM – 4:00 PM</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4">
          <p>© {new Date().getFullYear()} YASH COMPUTER. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('about')} className="hover:text-zinc-700">
              About Shop
            </button>
            <span className="text-zinc-300">·</span>
            <button onClick={() => onNavigate('reviews')} className="hover:text-zinc-700">
              Customer Reviews
            </button>
            <span className="text-zinc-300">·</span>
            <button onClick={() => onNavigate('contact')} className="hover:text-zinc-700">
              Store Location
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
