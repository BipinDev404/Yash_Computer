import React from 'react';
import { UserCheck, ShieldCheck, MapPin, MessageSquare, Cpu, Layers } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const points = [
    {
      icon: <UserCheck className="w-5 h-5 text-sky-600" />,
      title: 'Personal Assistance',
      desc: 'No confusing jargon. We understand your exact daily workload and recommend what fits your budget best.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-indigo-600" />,
      title: 'Computer & Laptop Expertise',
      desc: 'From component-level board diagnostics to custom high-performance PC assembly with proper thermal management.',
    },
    {
      icon: <Layers className="w-5 h-5 text-emerald-600" />,
      title: 'All Under One Roof',
      desc: 'Laptops, monitors, SSDs, RAM, printers, networking gear, cables, and CCTV security kits in one convenient store.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-amber-600" />,
      title: 'Genuine Products & Warranty',
      desc: 'Every laptop and component is 100% authentic from authorized brand channels with valid manufacturer warranty.',
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-cyan-600" />,
      title: 'Instant WhatsApp Enquiry',
      desc: 'Check stock, ask for prices, or ask technical questions directly with our MG Road team without waiting.',
    },
    {
      icon: <MapPin className="w-5 h-5 text-rose-500" />,
      title: 'Central Aurangabad Location',
      desc: 'Easily accessible on MG Road near Annapurna Hotel and Axis Bank with dedicated testing bench.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white hairline-t hairline-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-600 mb-2">
            Why Yash Computer
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            Built on trust, speed, and local expertise.
          </h2>
          <p className="text-sm text-zinc-500 mt-3 leading-relaxed">
            We believe buying or fixing a computer should be simple, transparent, and completely stress-free.
          </p>
        </div>

        {/* Qualitative Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-zinc-50/70 border border-zinc-200/70 hover:border-zinc-300 transition-colors space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 shadow-xs flex items-center justify-center">
                {point.icon}
              </div>
              <h3 className="text-base font-bold text-zinc-950 tracking-tight">
                {point.title}
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
