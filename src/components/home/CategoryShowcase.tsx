import React, { useState } from 'react';
import { ArrowRight, ChevronRight, Layers, Sparkles } from 'lucide-react';
import { categoriesData } from '../../data/categories';
import { ProductGraphic } from '../common/ProductGraphic';
import { Category } from '../../types';

interface CategoryShowcaseProps {
  onSelectCategory: (categorySlug: string) => void;
}

export const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({ onSelectCategory }) => {
  const [activeCategory, setActiveCategory] = useState<Category>(categoriesData[0]);

  return (
    <section className="py-16 md:py-24 bg-white hairline-t hairline-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-sky-600 mb-2">
              Categories
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
              Find what you need.
            </h2>
          </div>
          <p className="text-sm text-zinc-500 max-w-md">
            Browse genuine hardware, verified upgrades, and electronics designed for high reliability.
          </p>
        </div>

        {/* Interactive Showroom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Category List Tabs (Interactive trigger) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-2">
            {categoriesData.map((cat) => {
              const isActive = activeCategory.id === cat.id;
              return (
                <div
                  key={cat.id}
                  onMouseEnter={() => setActiveCategory(cat)}
                  onClick={() => {
                    setActiveCategory(cat);
                    onSelectCategory(cat.slug);
                  }}
                  className={`group relative p-4 rounded-2xl cursor-pointer transition-all duration-200 border ${
                    isActive
                      ? 'bg-zinc-950 text-white border-zinc-950 shadow-md translate-x-1'
                      : 'bg-zinc-50/70 hover:bg-zinc-100 text-zinc-800 border-zinc-200/70'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="min-w-0 pr-4">
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-semibold tracking-tight truncate">
                          {cat.name}
                        </h3>
                        <span
                          className={`text-xs ${
                            isActive ? 'text-zinc-400' : 'text-zinc-400'
                          }`}
                        >
                          ({cat.itemCount})
                        </span>
                      </div>
                      <p
                        className={`text-xs mt-0.5 line-clamp-1 ${
                          isActive ? 'text-zinc-300' : 'text-zinc-500'
                        }`}
                      >
                        {cat.subtitle}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span
                        className={`text-xs font-medium hidden sm:inline transition-opacity ${
                          isActive ? 'opacity-100 text-sky-400' : 'opacity-0 group-hover:opacity-100 text-zinc-600'
                        }`}
                      >
                        Explore
                      </span>
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                          isActive
                            ? 'bg-white text-zinc-950'
                            : 'bg-zinc-200/80 text-zinc-700 group-hover:bg-zinc-300'
                        }`}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dynamic Interactive Preview Stage */}
          <div className="lg:col-span-6">
            <div className="h-full min-h-[380px] bg-gradient-to-b from-zinc-50 to-zinc-100/80 rounded-3xl border border-zinc-200 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-sm">
              {/* Dynamic Top Badge & Category info */}
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-mono font-medium text-sky-600 tracking-wider">
                    INTERACTIVE HARDWARE SHOWCASE
                  </div>
                  <span className="text-xs text-zinc-400 font-mono">
                    {activeCategory.itemCount} models available
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-zinc-950 mt-3 tracking-tight">
                  {activeCategory.name}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 mt-1.5 leading-relaxed max-w-lg">
                  {activeCategory.desc}
                </p>
              </div>

              {/* Dynamic Center Graphic (Transforms dynamically on hover) */}
              <div className="my-6 relative z-10 flex items-center justify-center">
                <ProductGraphic
                  key={activeCategory.id}
                  type={activeCategory.graphicType}
                  variant="hero"
                  className="w-full max-w-sm drop-shadow-lg"
                />
              </div>

              {/* Bottom Action for selected category */}
              <div className="relative z-10 pt-4 border-t border-zinc-200 flex items-center justify-between">
                <div className="text-xs text-zinc-500 font-medium">
                  Official Warranty · Local Aurangabad Support
                </div>
                <button
                  onClick={() => onSelectCategory(activeCategory.slug)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-zinc-950 hover:bg-zinc-800 rounded-xl transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <span>View {activeCategory.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
