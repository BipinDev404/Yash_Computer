import React, { useState, useEffect } from 'react';
import { Search, MessageSquare, Phone, Menu, X, MapPin, ExternalLink } from 'lucide-react';
import { businessData, getWhatsAppUrl } from '../../data/business';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string, meta?: any) => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenSearch,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'services', label: 'Services' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Visit Store' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'glass-nav hairline-b shadow-xs py-3'
            : 'bg-[#fafafa] hairline-b py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Brand Wordmark (Single text element) */}
          <button
            onClick={() => {
              onNavigate('home');
              setMobileMenuOpen(false);
            }}
            className="text-lg sm:text-xl font-extrabold tracking-tight text-zinc-950 hover:text-sky-600 transition-colors flex items-center gap-2 text-left"
          >
            <span>YASH COMPUTER</span>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-600">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`transition-colors relative py-1 hover:text-zinc-950 ${
                    isActive ? 'text-zinc-950 font-semibold' : 'text-zinc-600'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-950 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger Button */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-zinc-600 hover:text-zinc-950 bg-zinc-100 hover:bg-zinc-200/80 rounded-lg transition-colors"
              aria-label="Search tech and laptops"
            >
              <Search className="w-3.5 h-3.5 text-zinc-500" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[9px] font-mono text-zinc-400 bg-white rounded border border-zinc-200">
                ⌘K
              </kbd>
            </button>

            {/* WhatsApp Quick Action */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors whitespace-nowrap shadow-xs"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden xs:inline">WhatsApp</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 rounded-lg transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[57px] z-30 bg-white/95 backdrop-blur-md md:hidden flex flex-col justify-between p-6 animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-4">
            <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
              Menu
            </div>
            <div className="grid gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between p-3 rounded-xl text-left text-base font-medium transition-colors ${
                    currentPage === link.id
                      ? 'bg-zinc-100 text-zinc-950 font-semibold'
                      : 'text-zinc-700 hover:bg-zinc-50'
                  }`}
                >
                  <span>{link.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Quick info in mobile drawer */}
          <div className="pt-6 border-t border-zinc-200 space-y-3">
            <div className="text-xs text-zinc-500">
              <div className="font-semibold text-zinc-800">YASH COMPUTER</div>
              <div>{businessData.addressLine}, Aurangabad, Bihar</div>
              <div className="text-zinc-400 mt-1">{businessData.timings.weekdays}</div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <a
                href={`tel:${businessData.phone}`}
                className="flex items-center justify-center gap-2 p-2.5 text-xs font-semibold bg-zinc-100 hover:bg-zinc-200 text-zinc-900 rounded-lg transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Store</span>
              </a>
              <a
                href={businessData.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-2.5 text-xs font-semibold bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>Directions</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
