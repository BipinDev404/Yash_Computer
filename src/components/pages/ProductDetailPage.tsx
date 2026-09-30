import React, { useEffect } from 'react';
import { ArrowLeft, MessageSquare, Phone, MapPin, ShieldCheck, Check, Truck, Zap, Share2 } from 'lucide-react';
import { ProductGraphic } from '../common/ProductGraphic';
import { getProductWhatsAppUrl, businessData } from '../../data/business';
import { productsData } from '../../data/products';
import { Product } from '../../types';

interface ProductDetailPageProps {
  product: Product;
  onBack: () => void;
  onSelectProduct: (product: Product) => void;
  onVisitStore: () => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  onBack,
  onSelectProduct,
  onVisitStore,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [product]);

  // Find related products in the same category or brand
  const relatedProducts = productsData
    .filter((p) => p.id !== product.id && (p.category === product.category || p.brand === product.brand))
    .slice(0, 3);

  return (
    <div className="py-8 md:py-16 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation Button */}
        <div className="mb-6">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-600 hover:text-zinc-950 transition-colors py-1.5 px-3 rounded-lg hover:bg-zinc-200/60"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Products</span>
          </button>
        </div>

        {/* Product Showcase Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Visual Hardware Stage */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-zinc-200 p-8 sm:p-12 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="flex items-center justify-between text-xs text-zinc-500 font-medium">
              <div className="flex items-center gap-2">
                <span className="font-bold text-sky-600">{product.brand}</span>
                <span>·</span>
                <span>{product.categoryLabel}</span>
              </div>
              {product.modelNumber && (
                <span className="font-mono text-zinc-400 text-[11px]">
                  Model: {product.modelNumber}
                </span>
              )}
            </div>

            {/* Main Center Hardware Render */}
            <div className="my-8 flex items-center justify-center">
              <ProductGraphic
                type={product.graphicType}
                variant="detail"
                className="w-full max-w-md drop-shadow-xl"
              />
            </div>

            {/* Trust highlights under image */}
            <div className="pt-6 border-t border-zinc-100 grid grid-cols-3 gap-2 text-center text-xs text-zinc-600">
              <div className="p-2 bg-zinc-50 rounded-xl">
                <div className="font-bold text-zinc-900">100% Genuine</div>
                <div className="text-[10px] text-zinc-400">Brand Sealed</div>
              </div>
              <div className="p-2 bg-zinc-50 rounded-xl">
                <div className="font-bold text-zinc-900">Official Bill</div>
                <div className="text-[10px] text-zinc-400">GST Invoice</div>
              </div>
              <div className="p-2 bg-zinc-50 rounded-xl">
                <div className="font-bold text-zinc-900">Local Support</div>
                <div className="text-[10px] text-zinc-400">MG Road Store</div>
              </div>
            </div>
          </div>

          {/* Right Column: Contiguous Purchase / Enquiry Module */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <div className="text-xs font-semibold text-sky-600 uppercase tracking-wider mb-1">
                {product.brand} Hardware
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight leading-snug">
                {product.name}
              </h1>
              <p className="text-xs sm:text-sm text-zinc-600 mt-3 leading-relaxed">
                {product.fullDesc}
              </p>
            </div>

            {/* Price Note Area */}
            <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200/80 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono text-zinc-400 block uppercase">Pricing</span>
                <span className="text-base font-bold text-zinc-950">
                  {product.priceNote}
                </span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-emerald-700 font-bold bg-emerald-100/80 px-2 py-0.5 rounded-full inline-block">
                  In Stock & Ready
                </span>
              </div>
            </div>

            {/* Key Specifications Bulleted */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-zinc-900 uppercase tracking-wider">
                Key Highlights
              </div>
              <div className="space-y-2">
                {product.keySpecs.map((spec, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-700">
                    <Check className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-2">
              <a
                href={getProductWhatsAppUrl(product.name, product.brand)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Ask on WhatsApp (Best Price)</span>
              </a>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={`tel:${businessData.phone}`}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-semibold text-xs rounded-xl transition-colors border border-zinc-200"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Store</span>
                </a>

                <button
                  onClick={onVisitStore}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-semibold text-xs rounded-xl transition-colors border border-zinc-200"
                >
                  <MapPin className="w-3.5 h-3.5 text-rose-500" />
                  <span>Visit Store</span>
                </button>
              </div>
            </div>

            {/* Store Location Notice */}
            <div className="text-[11px] text-zinc-500 pt-3 border-t border-zinc-100 flex items-center justify-between">
              <span>Available at MG Road Aurangabad</span>
              <span className="font-mono text-zinc-600">090971 98198</span>
            </div>
          </div>
        </div>

        {/* Detailed Technical Specifications Table */}
        <div className="mt-12 bg-white rounded-3xl border border-zinc-200 p-6 sm:p-10 shadow-xs">
          <div className="max-w-3xl">
            <h2 className="text-xl font-bold text-zinc-950 tracking-tight mb-2">
              Technical Specifications
            </h2>
            <p className="text-xs text-zinc-500 mb-6">
              Complete technical parameters and hardware architecture for {product.name}.
            </p>

            <div className="divide-y divide-zinc-100 border-t border-b border-zinc-100">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  <div className="font-semibold text-zinc-500">{key}</div>
                  <div className="sm:col-span-2 text-zinc-900 font-medium">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 mb-12 md:mb-0">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-zinc-950 tracking-tight">
                Similar Hardware & Accessories
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onSelectProduct(rel)}
                  className="bg-white rounded-2xl border border-zinc-200 p-5 hover:border-zinc-300 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
                >
                  <ProductGraphic type={rel.graphicType} variant="thumb" className="h-32 mb-3" />
                  <div>
                    <div className="text-xs font-bold text-sky-600">{rel.brand}</div>
                    <div className="text-sm font-bold text-zinc-950 line-clamp-1">{rel.name}</div>
                    <div className="text-xs text-zinc-500 mt-1 line-clamp-1">{rel.shortDesc}</div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-xs">
                    <span className="font-semibold text-zinc-800">{rel.priceNote}</span>
                    <span className="text-sky-600 font-semibold">View →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mobile Sticky Bottom Enquiry Bar (md:hidden) */}
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-xl border-t border-zinc-200 p-3 pb-safe shadow-2xl flex items-center gap-2">
          <a
            href={getProductWhatsAppUrl(product.name, product.brand)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 h-12 bg-zinc-950 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-2 shadow-xs active:scale-[0.98] transition-all"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Ask Price on WhatsApp</span>
          </a>

          <a
            href={`tel:${businessData.phone}`}
            className="w-12 h-12 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 rounded-xl flex items-center justify-center border border-zinc-200 active:scale-[0.98] transition-all shrink-0"
            title="Call Store"
          >
            <Phone className="w-4 h-4 text-zinc-800" />
          </a>
        </div>
      </div>
    </div>
  );
};
