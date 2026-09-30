import React from 'react';
import { Wrench, Zap, Monitor, Disc, Printer, Shield, Cpu, Clock, CheckCircle2, MessageSquare, Phone, MapPin } from 'lucide-react';
import { servicesData } from '../../data/services';
import { getServiceWhatsAppUrl, businessData } from '../../data/business';

interface ServicesPageProps {
  onContactStore: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onContactStore }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'laptop-repair':
        return <Wrench className="w-6 h-6 text-sky-600" />;
      case 'ssd-ram-upgrade':
        return <Zap className="w-6 h-6 text-amber-500" />;
      case 'desktop-repair':
        return <Monitor className="w-6 h-6 text-indigo-600" />;
      case 'windows-software-setup':
        return <Disc className="w-6 h-6 text-cyan-600" />;
      case 'printer-service':
        return <Printer className="w-6 h-6 text-emerald-600" />;
      case 'cctv-networking':
        return <Shield className="w-6 h-6 text-rose-500" />;
      case 'custom-pc-build':
        return <Cpu className="w-6 h-6 text-purple-600" />;
      default:
        return <Wrench className="w-6 h-6 text-zinc-600" />;
    }
  };

  return (
    <div className="py-12 md:py-20 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-600 mb-2">
            Technical Services
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-950 tracking-tight">
            Repair, Upgrades & Support
          </h1>
          <p className="text-sm text-zinc-600 mt-3 leading-relaxed">
            Professional computer care in Aurangabad. From 30-minute SSD speed upgrades to precision motherboard repairs and CCTV network installations.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-6">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 md:p-10 shadow-xs hover:border-zinc-300 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Service Info */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-center shrink-0 shadow-xs">
                    {getIcon(service.id)}
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                      {service.title}
                    </h2>
                    <div className="flex items-center gap-2 text-xs text-zinc-500 mt-0.5">
                      <Clock className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Estimated Turnaround: <strong className="text-zinc-800">{service.turnaround}</strong></span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed pt-2">
                  {service.fullDesc}
                </p>

                {/* Features & Checklist */}
                <div className="pt-3">
                  <div className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2.5">
                    Included & Supported:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-zinc-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Service CTA Box */}
              <div className="lg:col-span-4 bg-zinc-50 rounded-2xl border border-zinc-200/80 p-5 sm:p-6 space-y-4">
                <div>
                  <div className="text-[10px] font-mono uppercase text-zinc-400">Walk-in Support</div>
                  <div className="text-sm font-bold text-zinc-900 mt-0.5">No appointment required</div>
                  <div className="text-xs text-zinc-500 mt-1">Direct testing on our MG Road technician bench.</div>
                </div>

                <div className="space-y-2 pt-2 border-t border-zinc-200/80">
                  <a
                    href={getServiceWhatsAppUrl(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-xs rounded-xl transition-colors shadow-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Inquire for {service.title}</span>
                  </a>

                  <a
                    href={`tel:${businessData.phone}`}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-white hover:bg-zinc-100 text-zinc-900 font-semibold text-xs rounded-xl transition-colors border border-zinc-200"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Store ({businessData.phoneFormatted})</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-zinc-950 text-white rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Have an unlisted issue or need on-site office setup?
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
            We handle business IT maintenance, school computer labs, commercial Wi-Fi, and custom server requirements across Aurangabad district.
          </p>
          <div className="pt-2">
            <button
              onClick={onContactStore}
              className="px-6 py-3 bg-white text-zinc-950 hover:bg-zinc-100 text-xs sm:text-sm font-semibold rounded-xl transition-colors"
            >
              Get Store Location & Contact Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
