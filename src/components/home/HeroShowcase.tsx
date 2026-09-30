import React from 'react';
import { ArrowRight, MapPin, Sparkles, Shield, Clock, Zap } from 'lucide-react';
import { ProductGraphic } from '../common/ProductGraphic';
import { businessData } from '../../data/business';

interface HeroShowcaseProps {
  onExploreProducts: () => void;
  onVisitStore: () => void;
}

export const HeroShowcase: React.FC<HeroShowcaseProps> = ({
  onExploreProducts,
  onVisitStore,
}) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-28 bg-[#fafafa]">
      {/* Background subtle mesh glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-sky-200/20 via-cyan-100/15 to-transparent blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Subtle location trust indicator */}
          <div className="inline-flex items-center gap-2 text-xs font-medium text-zinc-500 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Aurangabad, Bihar</span>
            <span className="text-zinc-300">·</span>
            <span>MG Road Near Axis Bank</span>
          </div>

          {/* Editorial Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-950 leading-[1.1] text-balance">
            Technology,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-zinc-800 to-sky-700">
              Made Simple.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-zinc-600 font-normal max-w-xl mx-auto leading-relaxed">
            Laptops, computers, accessories and everyday tech — all in one place at Aurangabad’s premier hardware destination.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={onExploreProducts}
              className="w-full sm:w-auto min-h-[48px] px-7 py-3 text-sm font-semibold text-white bg-zinc-950 hover:bg-zinc-800 active:scale-[0.98] rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-xs group"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4 text-zinc-300 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={onVisitStore}
              className="w-full sm:w-auto min-h-[48px] px-7 py-3 text-sm font-semibold text-zinc-800 bg-white hover:bg-zinc-100/80 active:scale-[0.98] rounded-xl transition-all duration-200 border border-zinc-200 flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4 text-zinc-500" />
              <span>Visit Store</span>
            </button>
          </div>
        </div>

        {/* Hero Visual Composition */}
        <div className="mt-12 md:mt-16 max-w-4xl mx-auto relative">
          <div className="relative rounded-3xl bg-gradient-to-b from-white to-zinc-50 border border-zinc-200/80 shadow-xl overflow-hidden p-6 sm:p-10">
            {/* Ambient lighting backdrop */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />

            {/* Hardware Showcase */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Main Laptop Visual */}
              <div className="md:col-span-8 flex justify-center">
                <ProductGraphic type="laptop" variant="hero" className="w-full max-w-lg" />
              </div>

              {/* Side Floating Highlights */}
              <div className="md:col-span-4 space-y-3">
                <div className="p-3.5 bg-white/90 rounded-xl border border-zinc-100 shadow-xs hover:border-zinc-300 transition-colors">
                  <div className="text-[11px] font-bold text-sky-700 tracking-wider">GENUINE LAPTOPS</div>
                  <div className="text-xs font-medium text-zinc-800 mt-0.5">HP · Lenovo · Dell · ASUS</div>
                  <div className="text-[11px] text-zinc-500 mt-1">Official brand warranty & bill</div>
                </div>

                <div className="p-3.5 bg-white/90 rounded-xl border border-zinc-100 shadow-xs hover:border-zinc-300 transition-colors">
                  <div className="text-[11px] font-bold text-sky-700 tracking-wider">SPEED UPGRADES</div>
                  <div className="text-xs font-medium text-zinc-800 mt-0.5">NVMe SSD & RAM in 30 Mins</div>
                  <div className="text-[11px] text-zinc-500 mt-1">Boost speed up to 10x instantly</div>
                </div>

                <div className="p-3.5 bg-white/90 rounded-xl border border-zinc-100 shadow-xs hover:border-zinc-300 transition-colors">
                  <div className="text-[11px] font-bold text-sky-700 tracking-wider">CERTIFIED REPAIR</div>
                  <div className="text-xs font-medium text-zinc-800 mt-0.5">Display, Battery & Motherboard</div>
                  <div className="text-[11px] text-zinc-500 mt-1">Expert local diagnosis & support</div>
                </div>
              </div>
            </div>

            {/* Bottom Proof Strip */}
            <div className="mt-6 pt-5 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-500">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-sky-600 shrink-0" />
                <span>100% Genuine Branded Hardware</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Instant In-Store Diagnostics</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Open Mon–Sat 10AM–8:30PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
