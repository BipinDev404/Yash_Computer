import React, { useState } from 'react';
import { Cpu, Check, MessageSquare, ArrowRight, Layers, Sparkles } from 'lucide-react';
import { getWhatsAppUrl } from '../../data/business';

interface PresetConfig {
  id: string;
  title: string;
  subtitle: string;
  cpu: string;
  ram: string;
  storage: string;
  graphics: string;
  idealFor: string;
}

export const QuickPCEstimator: React.FC = () => {
  const presets: PresetConfig[] = [
    {
      id: 'student-study',
      title: 'Student & Daily Study',
      subtitle: 'Fast, reliable & battery efficient',
      cpu: 'Intel Core i3 / AMD Ryzen 3',
      ram: '8 GB DDR4',
      storage: '512 GB NVMe SSD',
      graphics: 'Integrated HD Graphics',
      idealFor: 'Online classes, web browsing, college assignments, Zoom & video streaming',
    },
    {
      id: 'office-accounting',
      title: 'Office, Tally & Business',
      subtitle: 'Multi-tasking workhorse',
      cpu: 'Intel Core i5 / AMD Ryzen 5',
      ram: '16 GB DDR4',
      storage: '512 GB PCIe Gen4 SSD',
      graphics: 'Intel Iris Xe / Radeon',
      idealFor: 'Tally Prime, Excel spreadsheets, GST billing, multi-tab browsing & dual screens',
    },
    {
      id: 'creator-editing',
      title: 'Coding & Content Creation',
      subtitle: 'Speed for compiling & rendering',
      cpu: 'Intel Core i5/i7 (13th/14th Gen) / Ryzen 7',
      ram: '16 GB / 32 GB DDR5',
      storage: '1 TB NVMe SSD + 1TB HDD',
      graphics: 'NVIDIA RTX 3050 / 4060 ready',
      idealFor: 'Premiere Pro, Photoshop, AutoCAD, VS Code programming, Blender & 4K video rendering',
    },
    {
      id: 'gaming-station',
      title: 'High-FPS Gaming Rig',
      subtitle: 'Maximum performance & airflow',
      cpu: 'Intel Core i7 / AMD Ryzen 7 7700X',
      ram: '32 GB DDR5 6000MHz',
      storage: '1 TB PCIe Gen4 High-Speed SSD',
      graphics: 'Dedicated RTX 4060 / 4070 Series',
      idealFor: 'AAA Gaming, high FPS esports, VR, live streaming & heavy simulation tasks',
    },
  ];

  const [activePreset, setActivePreset] = useState<PresetConfig>(presets[1]);

  const whatsappMessage = `Hello YASH COMPUTER, I am looking for a configuration for "${activePreset.title}". Requirements: CPU: ${activePreset.cpu}, RAM: ${activePreset.ram}, Storage: ${activePreset.storage}. Could you share available models and price quotation?`;

  return (
    <section className="py-16 md:py-24 bg-white hairline-t hairline-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-600 mb-2">
            Configuration Advisor
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            Not sure what specs you need?
          </h2>
          <p className="text-sm text-zinc-500 mt-2 leading-relaxed">
            Select your primary usage below. We’ll show you the balanced configuration and give you an instant quote on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Preset Selector Tabs */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-2.5">
            {presets.map((preset) => {
              const isSelected = activePreset.id === preset.id;
              return (
                <button
                  key={preset.id}
                  onClick={() => setActivePreset(preset)}
                  className={`p-4 rounded-2xl text-left transition-all border ${
                    isSelected
                      ? 'bg-zinc-950 text-white border-zinc-950 shadow-md'
                      : 'bg-zinc-50/70 hover:bg-zinc-100 text-zinc-800 border-zinc-200/80'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold tracking-tight">{preset.title}</div>
                      <div
                        className={`text-xs mt-0.5 ${
                          isSelected ? 'text-zinc-400' : 'text-zinc-500'
                        }`}
                      >
                        {preset.subtitle}
                      </div>
                    </div>
                    {isSelected && (
                      <div className="w-5 h-5 rounded-full bg-sky-500 text-zinc-950 flex items-center justify-center">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Recommended Hardware Blueprint Stage */}
          <div className="lg:col-span-7 bg-zinc-50 rounded-3xl border border-zinc-200 p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-zinc-200">
                <div>
                  <span className="text-xs font-mono font-semibold text-sky-600 tracking-wider uppercase">
                    Recommended Setup
                  </span>
                  <h3 className="text-xl font-bold text-zinc-950 mt-1">
                    {activePreset.title}
                  </h3>
                </div>
                <div className="text-right text-xs text-zinc-500 font-mono">
                  Customizable in store
                </div>
              </div>

              {/* Specs Breakdown Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                <div className="p-3.5 bg-white rounded-xl border border-zinc-200/80">
                  <div className="text-[10px] font-mono uppercase text-zinc-400">Processor (CPU)</div>
                  <div className="text-xs font-bold text-zinc-900 mt-1">{activePreset.cpu}</div>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-zinc-200/80">
                  <div className="text-[10px] font-mono uppercase text-zinc-400">Memory (RAM)</div>
                  <div className="text-xs font-bold text-zinc-900 mt-1">{activePreset.ram}</div>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-zinc-200/80">
                  <div className="text-[10px] font-mono uppercase text-zinc-400">Fast Storage</div>
                  <div className="text-xs font-bold text-zinc-900 mt-1">{activePreset.storage}</div>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-zinc-200/80">
                  <div className="text-[10px] font-mono uppercase text-zinc-400">Display / Graphics</div>
                  <div className="text-xs font-bold text-zinc-900 mt-1">{activePreset.graphics}</div>
                </div>
              </div>

              {/* Ideal For note */}
              <div className="p-4 bg-sky-50/60 rounded-xl border border-sky-100 text-xs text-zinc-700 leading-relaxed">
                <span className="font-semibold text-sky-950">Ideal Workflow: </span>
                {activePreset.idealFor}
              </div>
            </div>

            {/* Bottom Action */}
            <div className="pt-6 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              <span className="text-xs text-zinc-500 text-center sm:text-left">
                Available as pre-built laptop or custom assembled desktop tower.
              </span>

              <a
                href={getWhatsAppUrl(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs whitespace-nowrap"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>Get WhatsApp Quote</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
