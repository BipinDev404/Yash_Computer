import React, { useState, useMemo } from 'react';
import { Search, Filter, ArrowRight, MessageSquare, Laptop, ShieldCheck, ChevronRight } from 'lucide-react';
import { productsData } from '../../data/products';
import { categoriesData } from '../../data/categories';
import { ProductGraphic } from '../common/ProductGraphic';
import { getProductWhatsAppUrl } from '../../data/business';
import { Product } from '../../types';

interface ProductsPageProps {
  initialCategory?: string;
  onSelectProduct: (product: Product) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  initialCategory = 'all',
  onSelectProduct,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');

  // Extract unique brands
  const brands = useMemo(() => {
    const list = Array.from(new Set(productsData.map((p) => p.brand)));
    return ['all', ...list];
  }, []);

  // Filter products
  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const matchCategory =
        selectedCategory === 'all' || product.category === selectedCategory;
      const matchBrand =
        selectedBrand === 'all' || product.brand === selectedBrand;
      const matchQuery =
        !searchQuery.trim() ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());

      return matchCategory && matchBrand && matchQuery;
    });
  }, [selectedCategory, selectedBrand, searchQuery]);

  return (
    <div className="py-12 md:py-20 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-600 mb-2">
            Catalog
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-950 tracking-tight">
            Products & Hardware
          </h1>
          <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
            Explore genuine laptops, desktops, storage upgrades, and accessories available at our MG Road store in Aurangabad.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-2xl p-4 border border-zinc-200 shadow-xs mb-8 space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-3">
            {/* Search input */}
            <div className="relative w-full md:flex-1">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, brands, SSDs, laptops..."
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-zinc-50 rounded-xl border border-zinc-200 focus:outline-none focus:border-zinc-400 text-zinc-900"
              />
            </div>

            {/* Brand Filter Dropdown */}
            <div className="w-full md:w-auto flex items-center gap-2">
              <span className="text-xs font-medium text-zinc-500 whitespace-nowrap">Brand:</span>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full md:w-auto px-3 py-2 text-xs bg-zinc-50 rounded-xl border border-zinc-200 text-zinc-800 font-medium focus:outline-none"
              >
                <option value="all">All Brands</option>
                {brands.filter((b) => b !== 'all').map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Tabs (Single-line interactive scroll with min 44px hitboxes) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar snap-x snap-mandatory">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`snap-start min-h-[44px] px-4 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap shrink-0 border ${
                selectedCategory === 'all'
                  ? 'bg-zinc-950 text-white border-zinc-950 shadow-xs'
                  : 'bg-zinc-100 hover:bg-zinc-200/70 text-zinc-700 border-zinc-200/60'
              }`}
            >
              All Hardware ({productsData.length})
            </button>

            {categoriesData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`snap-start min-h-[44px] px-4 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap shrink-0 border ${
                  selectedCategory === cat.slug
                    ? 'bg-zinc-950 text-white border-zinc-950 shadow-xs'
                    : 'bg-zinc-100 hover:bg-zinc-200/70 text-zinc-700 border-zinc-200/60'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Results Header */}
        <div className="flex items-center justify-between mb-6 text-xs text-zinc-500">
          <span>
            Showing <strong className="text-zinc-900">{filteredProducts.length}</strong> items
          </span>
          <span className="font-mono text-zinc-400">YASH COMPUTER MG ROAD</span>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-zinc-200 p-8">
            <p className="text-zinc-600 font-medium text-sm">No products found matching your filters.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedBrand('all');
                setSearchQuery('');
              }}
              className="mt-3 px-4 py-2 text-xs font-semibold text-sky-600 hover:text-sky-700 underline"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative bg-white rounded-2xl border border-zinc-200/80 hover:border-zinc-300 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden"
              >
                {/* Visual Header */}
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

                {/* Content */}
                <div className="p-6 pt-2 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h2
                      onClick={() => onSelectProduct(product)}
                      className="text-base font-bold text-zinc-950 tracking-tight cursor-pointer hover:text-sky-600 transition-colors line-clamp-1"
                    >
                      {product.name}
                    </h2>
                    <p className="text-xs text-zinc-500 mt-1.5 line-clamp-2 leading-relaxed">
                      {product.shortDesc}
                    </p>

                    <div className="mt-3 pt-3 border-t border-zinc-100 space-y-1">
                      {product.keySpecs.slice(0, 2).map((spec, idx) => (
                        <div key={idx} className="text-[11px] text-zinc-600 flex items-center gap-1.5 truncate">
                          <span className="w-1 h-1 rounded-full bg-zinc-300 shrink-0" />
                          <span className="truncate">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-zinc-100 flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] text-zinc-400 block font-mono">STATUS</span>
                      <span className="text-xs font-semibold text-zinc-900">{product.priceNote}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="px-3.5 py-1.5 text-xs font-semibold text-zinc-800 bg-zinc-100 hover:bg-zinc-200 rounded-lg transition-colors"
                      >
                        Details
                      </button>
                      <a
                        href={getProductWhatsAppUrl(product.name, product.brand)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors flex items-center justify-center"
                        title="Enquire on WhatsApp"
                      >
                        <MessageSquare className="w-4 h-4 text-emerald-400" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Notice */}
        <div className="mt-12 p-6 bg-zinc-100/70 rounded-2xl border border-zinc-200 text-center max-w-xl mx-auto space-y-2">
          <div className="text-xs font-bold text-zinc-900">Looking for another model or specific configuration?</div>
          <p className="text-xs text-zinc-500">
            We stock and source components directly from authorized brand distributors.
          </p>
          <div className="pt-2">
            <a
              href={getProductWhatsAppUrl('Custom Model Requirement')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 hover:text-sky-700"
            >
              <span>Ask for custom model availability</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
