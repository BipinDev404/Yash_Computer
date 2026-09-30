import React from 'react';

interface ProductGraphicProps {
  type: string;
  className?: string;
  variant?: 'hero' | 'card' | 'detail' | 'thumb';
  interactive?: boolean;
}

export const ProductGraphic: React.FC<ProductGraphicProps> = ({
  type,
  className = '',
  variant = 'card',
}) => {
  const isHero = variant === 'hero';
  const isDetail = variant === 'detail';

  switch (type) {
    case 'laptop':
      return (
        <div className={`relative flex items-center justify-center select-none overflow-hidden ${className}`}>
          {/* Subtle ambient lighting */}
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-100/80 via-white to-sky-50/50 rounded-2xl" />
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-sky-400/10 blur-2xl rounded-full pointer-events-none" />

          {/* Precision Laptop Vector Composition */}
          <div className={`relative z-10 flex flex-col items-center ${isHero ? 'scale-110 lg:scale-125 my-8' : isDetail ? 'scale-105 my-6' : 'scale-90 my-2'} transition-transform duration-500 group-hover:scale-95`}>
            {/* Screen Lid */}
            <div className="w-56 sm:w-64 md:w-72 h-36 sm:h-40 md:h-44 bg-gradient-to-b from-zinc-800 to-zinc-950 rounded-t-xl p-1.5 shadow-2xl border border-zinc-700/60 relative">
              {/* Webcam & Sensor */}
              <div className="absolute top-1 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-zinc-900 rounded-full border border-zinc-600/50 flex items-center justify-center">
                  <div className="w-0.5 h-0.5 bg-sky-400 rounded-full animate-pulse" />
                </div>
              </div>

              {/* Display Panel */}
              <div className="w-full h-full bg-gradient-to-br from-zinc-900 via-[#0a1128] to-zinc-900 rounded-lg overflow-hidden relative flex flex-col justify-between p-3 border border-zinc-800">
                {/* Wallpaper abstract art */}
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-600/20 via-transparent to-cyan-400/15" />
                <div className="absolute top-1/3 left-1/4 w-28 h-28 bg-cyan-500/15 blur-xl rounded-full" />

                {/* Status Bar */}
                <div className="relative z-10 flex items-center justify-between text-[8px] text-zinc-400 font-mono">
                  <span>YASH STUDIO DISPLAY</span>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>100% IPS</span>
                  </div>
                </div>

                {/* Center minimalist waveform / graphic */}
                <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                  <div className="w-8 h-8 rounded-full border border-sky-400/40 flex items-center justify-center bg-sky-950/40 backdrop-blur-sm">
                    <div className="w-3 h-3 rounded-full bg-sky-400/80 shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
                  </div>
                  <span className="text-[9px] font-medium tracking-widest text-zinc-300 mt-1.5">INTEL & RYZEN</span>
                </div>

                {/* Bottom App Dock */}
                <div className="relative z-10 flex items-center justify-center gap-1.5 py-0.5 px-2 bg-zinc-900/80 rounded-md backdrop-blur border border-zinc-700/50 mx-auto">
                  <div className="w-2.5 h-2.5 rounded bg-sky-500/80" />
                  <div className="w-2.5 h-2.5 rounded bg-zinc-700" />
                  <div className="w-2.5 h-2.5 rounded bg-zinc-700" />
                  <div className="w-2.5 h-2.5 rounded bg-cyan-500/70" />
                </div>
              </div>
            </div>

            {/* Laptop Base / Deck */}
            <div className="w-64 sm:w-72 md:w-80 h-3.5 bg-gradient-to-b from-zinc-200 via-zinc-300 to-zinc-400 rounded-b-lg shadow-md border-t border-zinc-300 relative flex items-center justify-center">
              {/* Notch */}
              <div className="w-10 h-1 bg-zinc-400 rounded-b-sm" />
            </div>

            {/* Shadow beneath */}
            <div className="w-56 sm:w-64 h-3 bg-zinc-900/10 blur-md rounded-full mt-1" />
          </div>
        </div>
      );

    case 'desktop':
      return (
        <div className={`relative flex items-center justify-center select-none overflow-hidden ${className}`}>
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-100/80 via-white to-indigo-50/40 rounded-2xl" />
          <div className={`relative z-10 flex items-end gap-3 ${isHero ? 'scale-110 lg:scale-120' : 'scale-90'} transition-transform duration-500`}>
            {/* Monitor */}
            <div className="flex flex-col items-center">
              <div className="w-40 sm:w-48 h-28 sm:h-32 bg-zinc-900 rounded-lg p-1 border border-zinc-700 shadow-xl relative overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-zinc-950 via-slate-900 to-zinc-900 rounded flex flex-col justify-between p-2">
                  <div className="flex justify-between items-center text-[7px] text-zinc-500 font-mono">
                    <span>4K 144Hz</span>
                    <span className="text-cyan-400">PRO TOWER</span>
                  </div>
                  <div className="flex items-center justify-center my-auto">
                    <div className="w-6 h-6 border border-cyan-500/40 rounded flex items-center justify-center text-[8px] text-cyan-400 font-bold">
                      YC
                    </div>
                  </div>
                  <div className="h-0.5 w-12 bg-cyan-500/60 rounded-full mx-auto" />
                </div>
              </div>
              <div className="w-3 h-4 bg-zinc-400" />
              <div className="w-14 h-1.5 bg-zinc-300 rounded-full shadow-sm" />
            </div>

            {/* Tower Case */}
            <div className="w-18 sm:w-20 h-32 sm:h-36 bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-lg border border-zinc-700/80 shadow-2xl p-1.5 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-500/10 blur-lg rounded-full" />
              <div className="flex items-center justify-between">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,1)]" />
                <div className="flex gap-0.5">
                  <div className="w-1 h-2 bg-zinc-700 rounded-xs" />
                  <div className="w-1 h-2 bg-zinc-700 rounded-xs" />
                </div>
              </div>

              {/* Tempered Glass Window with Internal Cooler */}
              <div className="w-full h-20 bg-zinc-950/80 rounded border border-zinc-800 flex flex-col items-center justify-center relative">
                <div className="w-8 h-8 rounded-full border border-cyan-500/60 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full border border-sky-400/40 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-cyan-400/80" />
                  </div>
                </div>
                <div className="w-10 h-2 bg-zinc-800 rounded mt-1 border border-zinc-700" />
              </div>

              {/* Lower Mesh */}
              <div className="grid grid-cols-4 gap-0.5 py-0.5 opacity-40">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="w-0.5 h-0.5 bg-zinc-400 rounded-full" />
                ))}
              </div>
            </div>
          </div>
        </div>
      );

    case 'monitor':
      return (
        <div className={`relative flex items-center justify-center select-none overflow-hidden ${className}`}>
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-100/80 via-white to-blue-50/40 rounded-2xl" />
          <div className="relative z-10 flex flex-col items-center scale-95 transition-transform duration-500 group-hover:scale-100">
            <div className="w-52 sm:w-60 h-32 sm:h-36 bg-zinc-900 rounded-lg p-1 border border-zinc-700/80 shadow-2xl relative overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-[#0c1222] via-[#090d16] to-[#04060b] rounded flex flex-col justify-between p-2.5 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-sky-500/20" />
                <div className="flex justify-between items-center text-[7px] text-zinc-400 font-mono relative z-10">
                  <span>DELL / LG IPS</span>
                  <span className="text-sky-400">99% sRGB</span>
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                  <span className="text-[11px] font-semibold text-zinc-200 tracking-wider">FULL HD 100Hz</span>
                  <span className="text-[8px] text-zinc-400">Ultra-thin Borderless</span>
                </div>
                <div className="relative z-10 flex items-center justify-center text-[6px] text-zinc-500 font-mono">
                  HDMI · VGA · COMFORTVIEW
                </div>
              </div>
            </div>
            {/* Stand */}
            <div className="w-4 h-6 bg-gradient-to-b from-zinc-400 to-zinc-500" />
            <div className="w-20 h-2 bg-zinc-300 rounded-full shadow-sm border-t border-zinc-200" />
          </div>
        </div>
      );

    case 'ssd':
    case 'ram':
      return (
        <div className={`relative flex items-center justify-center select-none overflow-hidden ${className}`}>
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-100/80 via-white to-amber-50/30 rounded-2xl" />
          <div className="relative z-10 flex flex-col items-center scale-95 transition-transform duration-500">
            {/* M.2 NVMe SSD Module */}
            <div className="w-48 sm:w-56 h-18 sm:h-20 bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 rounded-md border border-zinc-700/80 shadow-xl p-2 flex items-center justify-between relative overflow-hidden">
              {/* Gold pins on left */}
              <div className="w-3 h-full flex flex-col justify-between py-1">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="w-2 h-1 bg-amber-400 rounded-xs" />
                ))}
              </div>

              {/* Silicon Controller & V-NAND Chips */}
              <div className="flex-1 px-3 flex items-center gap-2">
                <div className="w-10 h-10 bg-zinc-800 rounded border border-zinc-700 flex flex-col items-center justify-center text-[6px] text-zinc-400 font-mono">
                  <span>NVMe</span>
                  <span className="text-amber-400 font-bold">3500</span>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <span className="text-[10px] font-bold text-zinc-200 font-mono tracking-wide">PCIe Gen4 SSD</span>
                  <span className="text-[8px] text-zinc-400">High-Speed Solid State</span>
                </div>
              </div>

              {/* Screw Notch */}
              <div className="w-2.5 h-4 bg-zinc-800 rounded-l border border-zinc-700" />
            </div>

            {/* RAM Module underneath */}
            <div className="w-44 sm:w-52 h-9 bg-zinc-800 rounded-sm border border-zinc-700 mt-2 p-1 flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="w-6 h-5 bg-zinc-900 rounded-xs border border-zinc-700 text-[5px] text-zinc-500 flex items-center justify-center">DDR4</div>
                <div className="w-6 h-5 bg-zinc-900 rounded-xs border border-zinc-700 text-[5px] text-zinc-500 flex items-center justify-center">3200</div>
                <div className="w-6 h-5 bg-zinc-900 rounded-xs border border-zinc-700 text-[5px] text-zinc-500 flex items-center justify-center">16GB</div>
              </div>
              <span className="text-[7px] font-mono text-zinc-400 font-semibold px-1">GENUINE DRAM</span>
            </div>
          </div>
        </div>
      );

    case 'keyboard':
    case 'mouse':
      return (
        <div className={`relative flex items-center justify-center select-none overflow-hidden ${className}`}>
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-100/80 via-white to-emerald-50/30 rounded-2xl" />
          <div className="relative z-10 flex items-center gap-3 scale-90 transition-transform duration-500">
            {/* Keyboard */}
            <div className="w-44 sm:w-52 h-20 sm:h-24 bg-zinc-900 rounded-lg border border-zinc-700/80 shadow-xl p-1.5 flex flex-col justify-between">
              <div className="flex justify-between items-center px-1">
                <span className="text-[6px] text-zinc-400 font-mono">LOGITECH / HP</span>
                <div className="w-1 h-1 rounded-full bg-emerald-400" />
              </div>
              <div className="grid grid-cols-8 gap-0.5 py-1">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div key={i} className="h-2.5 bg-zinc-800 rounded-xs border border-zinc-700/50" />
                ))}
              </div>
              <div className="w-20 h-2 bg-zinc-800 rounded-xs mx-auto border border-zinc-700/50" />
            </div>

            {/* Ergonomic Mouse */}
            <div className="w-12 sm:w-14 h-20 sm:h-24 bg-zinc-900 rounded-2xl border border-zinc-700 shadow-xl p-1 flex flex-col items-center justify-between">
              <div className="w-2 h-4 bg-cyan-500/80 rounded-full mt-2" />
              <div className="w-6 h-6 rounded-full border border-zinc-800 flex items-center justify-center text-[6px] text-zinc-500 font-mono">
                DPI
              </div>
              <div className="w-4 h-1 bg-zinc-800 rounded-full mb-1" />
            </div>
          </div>
        </div>
      );

    case 'router':
      return (
        <div className={`relative flex items-center justify-center select-none overflow-hidden ${className}`}>
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-100/80 via-white to-cyan-50/30 rounded-2xl" />
          <div className="relative z-10 flex flex-col items-center scale-95 transition-transform duration-500">
            {/* Antennas */}
            <div className="flex justify-between w-44 sm:w-52 px-2">
              <div className="w-1.5 h-12 bg-zinc-800 rounded-t -rotate-12 origin-bottom border border-zinc-700" />
              <div className="w-1.5 h-14 bg-zinc-800 rounded-t -rotate-3 origin-bottom border border-zinc-700" />
              <div className="w-1.5 h-14 bg-zinc-800 rounded-t rotate-3 origin-bottom border border-zinc-700" />
              <div className="w-1.5 h-12 bg-zinc-800 rounded-t rotate-12 origin-bottom border border-zinc-700" />
            </div>

            {/* Router Body */}
            <div className="w-48 sm:w-56 h-14 bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-lg border border-zinc-700 shadow-xl p-2 flex items-center justify-between relative -mt-2">
              <div className="flex items-center gap-1.5">
                <span className="text-[9px] font-bold text-zinc-200 font-mono">Wi-Fi 6</span>
                <span className="text-[7px] text-cyan-400 font-mono">AX1500</span>
              </div>
              {/* LED array */}
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </div>
            </div>
          </div>
        </div>
      );

    case 'printer':
      return (
        <div className={`relative flex items-center justify-center select-none overflow-hidden ${className}`}>
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-100/80 via-white to-slate-100 rounded-2xl" />
          <div className="relative z-10 flex flex-col items-center scale-95 transition-transform duration-500">
            {/* Top Paper Tray */}
            <div className="w-28 h-6 bg-zinc-200 rounded-t-sm border border-zinc-300" />
            {/* Main Printer Body */}
            <div className="w-52 sm:w-56 h-24 bg-gradient-to-b from-zinc-100 to-zinc-200 rounded-lg border border-zinc-300 shadow-xl p-2 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <span className="text-[8px] font-bold text-zinc-700 font-mono">HP INK TANK</span>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-cyan-500" />
                  <div className="w-2 h-2 rounded-full bg-pink-500" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <div className="w-2 h-2 rounded-full bg-zinc-900" />
                </div>
              </div>

              {/* Paper output tray */}
              <div className="w-full h-8 bg-zinc-900 rounded border border-zinc-700 flex items-center justify-center">
                <div className="w-32 h-1 bg-zinc-800 rounded-full" />
              </div>

              <div className="flex justify-between items-center text-[7px] text-zinc-500">
                <span>WIRELESS / USB</span>
                <span className="text-emerald-600 font-semibold">12000 PAGES</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'cctv':
      return (
        <div className={`relative flex items-center justify-center select-none overflow-hidden ${className}`}>
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-100/80 via-white to-zinc-100 rounded-2xl" />
          <div className="relative z-10 flex items-center gap-4 scale-95 transition-transform duration-500">
            {/* Bullet Camera */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-12 bg-zinc-900 rounded-r-2xl rounded-l-md border border-zinc-700 shadow-xl flex items-center p-1.5 relative">
                <div className="w-8 h-8 rounded-full bg-zinc-950 border-2 border-zinc-800 flex items-center justify-center relative">
                  {/* Lens */}
                  <div className="w-4 h-4 rounded-full bg-sky-950 border border-sky-600 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,1)]" />
                  </div>
                  {/* IR Ring LEDs */}
                  <div className="absolute top-0.5 right-1 w-1 h-1 bg-red-500 rounded-full animate-pulse" />
                </div>
                <div className="ml-2 text-[7px] text-zinc-400 font-mono">
                  <span>HIKVISION</span>
                  <div className="text-cyan-400 font-bold">1080P HD</div>
                </div>
              </div>
              <div className="w-3 h-5 bg-zinc-700" />
              <div className="w-10 h-2 bg-zinc-800 rounded-full" />
            </div>

            {/* Dome Camera */}
            <div className="w-16 h-16 bg-zinc-900 rounded-full border border-zinc-700 shadow-lg flex items-center justify-center relative">
              <div className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-sky-900 border border-sky-400 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className={`relative flex items-center justify-center select-none ${className}`}>
          <div className="w-48 h-32 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center justify-center text-zinc-400 text-xs font-mono">
            YASH COMPUTER TECH
          </div>
        </div>
      );
  }
};
