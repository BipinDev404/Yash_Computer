import React from 'react';
import { MapPin, Phone, MessageSquare, CheckCircle, ShieldCheck, HeartHandshake, Laptop, Cpu, Clock } from 'lucide-react';
import { businessData, getWhatsAppUrl } from '../../data/business';

interface AboutPageProps {
  onExploreProducts: () => void;
  onContactStore: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onExploreProducts,
  onContactStore,
}) => {
  return (
    <div className="py-12 md:py-20 bg-[#fafafa]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Editorial Brand Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-600">
            About Yash Computer
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight">
            Your local destination for computers, laptops, and technology in Aurangabad.
          </h1>
          <p className="text-base text-zinc-600 leading-relaxed max-w-2xl mx-auto">
            Located conveniently on MG Road near Annapurna Hotel and Axis Bank, Yash Computer provides authentic computer hardware, rapid upgrades, and friendly technical repair.
          </p>
        </div>

        {/* Storefront Atmosphere Card */}
        <div className="bg-white rounded-3xl border border-zinc-200 p-8 sm:p-12 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold text-sky-600 uppercase">
                Our Philosophy
              </span>
              <h2 className="text-2xl font-bold text-zinc-950 tracking-tight">
                Honest advice. Genuine parts. No unnecessary upselling.
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Whether you need an affordable laptop for your child's online education, a dedicated desktop for GST accounting in your shop, or high-performance workstation hardware for coding and gaming, we take the time to understand your needs and recommend only what works best for you.
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-zinc-800">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>GST Invoices</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Authorized Brands</span>
                </div>
              </div>
            </div>

            {/* Visual Store Box */}
            <div className="bg-zinc-950 text-white rounded-2xl p-6 sm:p-8 space-y-4 relative overflow-hidden">
              <div className="text-xs font-mono text-sky-400">STORE INFORMATION</div>
              <div className="space-y-2 text-xs text-zinc-300">
                <div className="font-bold text-white text-base">YASH COMPUTER</div>
                <div>{businessData.fullAddress}</div>
                <div className="text-zinc-400 pt-1">Phone: {businessData.phoneFormatted}</div>
                <div className="text-zinc-400">Timings: {businessData.timings.weekdays}</div>
              </div>
              <div className="pt-3">
                <a
                  href={businessData.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-sky-400 hover:text-sky-300 underline"
                >
                  <span>Open in Google Maps →</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* What We Offer Pillars */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
              What We Offer
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="text-base font-bold text-zinc-950">Laptops & Hardware</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Brand new HP, Lenovo, Dell, and ASUS laptops sealed in box with official Indian warranty and free setup.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="text-base font-bold text-zinc-950">Fast Component Upgrades</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Instant Samsung & Crucial NVMe SSD upgrades and DDR4/DDR5 RAM installations in 30 minutes with zero data loss.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="text-base font-bold text-zinc-950">Repairs & Networking</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Laptop screen and hinge repairs, clean Windows 11 installation, Wi-Fi 6 routers, and CCTV setups.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 bg-zinc-100 rounded-3xl border border-zinc-200 text-center space-y-4">
          <h2 className="text-xl font-bold text-zinc-950">Ready to upgrade or need assistance?</h2>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={onExploreProducts}
              className="px-5 py-2.5 bg-zinc-950 text-white hover:bg-zinc-800 text-xs font-semibold rounded-xl transition-colors"
            >
              Browse Products
            </button>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-white text-zinc-900 hover:bg-zinc-50 border border-zinc-200 text-xs font-semibold rounded-xl transition-colors flex items-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
              <span>Message on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
