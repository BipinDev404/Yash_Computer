import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Laptop, Cpu, ShieldCheck, Tag } from 'lucide-react';
import { productsData } from '../../data/products';
import { categoriesData } from '../../data/categories';
import { servicesData } from '../../data/services';
import { Product } from '../../types';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
  onSelectCategory: (categorySlug: string) => void;
  onSelectService: (serviceId: string) => void;
}

export const SearchOverlay: React.FC<SearchOverlayProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onSelectCategory,
  onSelectService,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  const filteredProducts = trimmed
    ? productsData.filter(
        (p) =>
          p.name.toLowerCase().includes(trimmed) ||
          p.brand.toLowerCase().includes(trimmed) ||
          p.category.toLowerCase().includes(trimmed) ||
          p.shortDesc.toLowerCase().includes(trimmed)
      )
    : productsData.slice(0, 4);

  const filteredCategories = trimmed
    ? categoriesData.filter(
        (c) =>
          c.name.toLowerCase().includes(trimmed) ||
          c.desc.toLowerCase().includes(trimmed)
      )
    : categoriesData.slice(0, 4);

  const filteredServices = trimmed
    ? servicesData.filter(
        (s) =>
          s.title.toLowerCase().includes(trimmed) ||
          s.shortDesc.toLowerCase().includes(trimmed)
      )
    : servicesData.slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-zinc-950/70 backdrop-blur-md animate-in fade-in duration-200">
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden z-10">
        {/* Search Input Bar */}
        <div className="flex items-center px-5 py-4 border-b border-zinc-100 gap-3">
          <Search className="w-5 h-5 text-zinc-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search laptops, SSDs, printers, repairs, brands..."
            className="w-full bg-transparent text-base text-zinc-900 placeholder:text-zinc-400 focus:outline-none"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-zinc-400 hover:text-zinc-700 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono text-zinc-400 bg-zinc-100 rounded border border-zinc-200">
              ESC
            </kbd>
          )}
        </div>

        {/* Search Results Area */}
        <div className="max-h-[65vh] overflow-y-auto p-5 space-y-6">
          {/* Quick Category Chips if empty query */}
          {!trimmed && (
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2.5">
                Popular Categories
              </div>
              <div className="flex flex-wrap gap-2">
                {categoriesData.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      onSelectCategory(cat.slug);
                      onClose();
                    }}
                    className="px-3 py-1.5 text-xs font-medium bg-zinc-50 hover:bg-zinc-100 text-zinc-700 rounded-lg border border-zinc-200 transition-colors flex items-center gap-1.5"
                  >
                    <span>{cat.name}</span>
                    <span className="text-[10px] text-zinc-400">({cat.itemCount})</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Products Section */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2.5 flex items-center justify-between">
              <span>Products {trimmed ? `(${filteredProducts.length})` : 'Featured'}</span>
              <span className="text-[11px] font-normal text-zinc-500">MG Road Store</span>
            </div>

            {filteredProducts.length === 0 ? (
              <p className="text-sm text-zinc-500 py-2">No matching products found.</p>
            ) : (
              <div className="space-y-1.5">
                {filteredProducts.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => {
                      onSelectProduct(product);
                      onClose();
                    }}
                    className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-zinc-50 transition-colors text-left group border border-transparent hover:border-zinc-200"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center shrink-0 text-zinc-700">
                        <Laptop className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-sky-600">{product.brand}</span>
                          <span className="text-xs text-zinc-400">·</span>
                          <span className="text-xs text-zinc-500">{product.categoryLabel}</span>
                        </div>
                        <h4 className="text-sm font-medium text-zinc-900 truncate group-hover:text-sky-600 transition-colors">
                          {product.name}
                        </h4>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 ml-3">
                      <span className="text-xs font-medium text-zinc-500 hidden sm:inline">Enquire</span>
                      <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Services Section */}
          {filteredServices.length > 0 && (
            <div className="pt-2 border-t border-zinc-100">
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2.5">
                Repair & Services
              </div>
              <div className="space-y-1.5">
                {filteredServices.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => {
                      onSelectService(service.id);
                      onClose();
                    }}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-zinc-50 transition-colors text-left group"
                  >
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span className="text-sm font-medium text-zinc-800 group-hover:text-sky-600 transition-colors">
                        {service.title}
                      </span>
                    </div>
                    <span className="text-xs text-zinc-400">{service.turnaround}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-5 py-3 bg-zinc-50 border-t border-zinc-100 text-xs text-zinc-500 flex items-center justify-between">
          <span>YASH COMPUTER · MG Road Aurangabad</span>
          <span className="font-mono text-zinc-600">090971 98198</span>
        </div>
      </div>
    </div>
  );
};
