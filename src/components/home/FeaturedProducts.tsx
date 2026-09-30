import React from 'react';
import { ArrowRight, MessageSquare, ExternalLink, ShieldCheck } from 'lucide-react';
import { productsData } from '../../data/products';
import { ProductGraphic } from '../common/ProductGraphic';
import { getProductWhatsAppUrl } from '../../data/business';
import { Product } from '../../types';

interface FeaturedProductsProps {
  onSelectProduct: (product: Product) => void;
  onViewAll: () => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  onSelectProduct,
  onViewAll,
}) => {
  const featuredList = productsData.filter((p) => p.featured).slice(0, 6);

  return (
    <section className="py-16 md:py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-sky-600 mb-2">
              Featured Hardware
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
              Some things worth seeing.
            </h2>
          </div>
          <button
            onClick={onViewAll}
            className="text-xs font-semibold text-zinc-900 hover:text-sky-600 flex items-center gap-1.5 transition-colors group"
          >
            <span>Explore full catalog ({productsData.length} items)</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredList.map((product) => {
            return (
              <div
                key={product.id}
                className="group relative bg-white rounded-2xl border border-zinc-200/80 hover:border-zinc-300 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Visual Area */}
                <div
                  onClick={() => onSelectProduct(product)}
                  className="cursor-pointer p-6 bg-gradient-to-b from-zinc-50/70 to-white flex items-center justify-center relative overflow-hidden"
                >
                  <ProductGraphic
                    type={product.graphicType}
                    variant="card"
                    className="w-full h-44 drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3.5 left-4 flex items-center gap-2 text-xs font-medium text-zinc-500">
                    <span className="font-bold text-sky-600">{product.brand}</span>
                    <span>·</span>
                    <span>{product.categoryLabel}</span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 pt-2 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3
                      onClick={() => onSelectProduct(product)}
                      className="text-base font-bold text-zinc-950 tracking-tight cursor-pointer hover:text-sky-600 transition-colors line-clamp-1"
                    >
                      {product.name}
                    </h3>
                    <p className="text-xs text-zinc-500 mt-1.5 line-clamp-2 leading-relaxed">
                      {product.shortDesc}
                    </p>

                    {/* Clean specs snippet */}
                    <div className="mt-3 pt-3 border-t border-zinc-100 space-y-1">
                      {product.keySpecs.slice(0, 2).map((spec, idx) => (
                        <div key={idx} className="text-[11px] text-zinc-600 flex items-center gap-1.5 truncate">
                          <span className="w-1 h-1 rounded-full bg-zinc-300 shrink-0" />
                          <span className="truncate">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & Actions */}
                  <div className="pt-4 border-t border-zinc-100 flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[11px] text-zinc-400 block font-mono">AVAILABILITY</span>
                      <span className="text-xs font-semibold text-zinc-900">{product.priceNote}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="px-3 py-1.5 text-xs font-semibold text-zinc-800 bg-zinc-100 hover:bg-zinc-200/80 rounded-lg transition-colors"
                      >
                        View
                      </button>
                      <a
                        href={getProductWhatsAppUrl(product.name, product.brand)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors flex items-center justify-center"
                        title="Ask on WhatsApp"
                      >
                        <MessageSquare className="w-4 h-4 text-emerald-400" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
