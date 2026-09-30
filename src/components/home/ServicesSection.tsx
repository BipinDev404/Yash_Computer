import React from 'react';
import { ArrowRight, MessageSquare, Wrench, Zap, Monitor, Disc, Printer, Shield, Cpu } from 'lucide-react';
import { servicesData } from '../../data/services';
import { getServiceWhatsAppUrl } from '../../data/business';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
  onViewAllServices: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onViewAllServices,
}) => {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'laptop-repair':
        return <Wrench className="w-5 h-5 text-sky-600" />;
      case 'ssd-ram-upgrade':
        return <Zap className="w-5 h-5 text-amber-500" />;
      case 'desktop-repair':
        return <Monitor className="w-5 h-5 text-indigo-600" />;
      case 'windows-software-setup':
        return <Disc className="w-5 h-5 text-cyan-600" />;
      case 'printer-service':
        return <Printer className="w-5 h-5 text-emerald-600" />;
      case 'cctv-networking':
        return <Shield className="w-5 h-5 text-rose-500" />;
      case 'custom-pc-build':
        return <Cpu className="w-5 h-5 text-purple-600" />;
      default:
        return <Wrench className="w-5 h-5 text-zinc-600" />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white hairline-t hairline-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-sky-600 mb-2">
              Expert Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
              More than just products.
            </h2>
          </div>
          <button
            onClick={onViewAllServices}
            className="text-xs font-semibold text-zinc-900 hover:text-sky-600 flex items-center gap-1.5 transition-colors group"
          >
            <span>View all services</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.slice(0, 6).map((service) => (
            <div
              key={service.id}
              className="bg-zinc-50/60 hover:bg-zinc-50 rounded-2xl p-6 border border-zinc-200/80 hover:border-zinc-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 shadow-xs flex items-center justify-center">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="text-[11px] font-mono font-medium text-zinc-500">
                    {service.turnaround}
                  </span>
                </div>

                <h3 className="text-base font-bold text-zinc-950 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                  {service.shortDesc}
                </p>

                <ul className="mt-4 pt-3 border-t border-zinc-200/60 space-y-1.5">
                  {service.features.slice(0, 2).map((item, idx) => (
                    <li key={idx} className="text-[11px] text-zinc-600 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-sky-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-200/60 flex items-center justify-between">
                <button
                  onClick={() => onSelectService(service.id)}
                  className="text-xs font-semibold text-zinc-800 hover:text-sky-600 transition-colors"
                >
                  Learn details
                </button>
                <a
                  href={getServiceWhatsAppUrl(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg transition-colors"
                >
                  <MessageSquare className="w-3 h-3 text-emerald-400" />
                  <span>Talk to us</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
