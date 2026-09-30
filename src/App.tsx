import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { MobileStickyBar } from './components/layout/MobileStickyBar';
import { SearchOverlay } from './components/common/SearchOverlay';

// Home components
import { HeroShowcase } from './components/home/HeroShowcase';
import { CategoryShowcase } from './components/home/CategoryShowcase';
import { FeaturedProducts } from './components/home/FeaturedProducts';
import { QuickPCEstimator } from './components/home/QuickPCEstimator';
import { ServicesSection } from './components/home/ServicesSection';
import { RepairHighlight } from './components/home/RepairHighlight';
import { WhyUsSection } from './components/home/WhyUsSection';
import { ReviewsSection } from './components/home/ReviewsSection';
import { StoreLocationSection } from './components/home/StoreLocationSection';
import { ContactCTA } from './components/home/ContactCTA';

// Subpage components
import { ProductsPage } from './components/pages/ProductsPage';
import { ProductDetailPage } from './components/pages/ProductDetailPage';
import { ServicesPage } from './components/pages/ServicesPage';
import { AboutPage } from './components/pages/AboutPage';
import { ReviewsPage } from './components/pages/ReviewsPage';
import { ContactPage } from './components/pages/ContactPage';

import { productsData } from './data/products';
import { Product } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [initialCategory, setInitialCategory] = useState<string>('all');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigate = (page: string, meta?: any) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (meta?.category) {
      setInitialCategory(meta.category);
    } else {
      setInitialCategory('all');
    }
    setCurrentPage(page);
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (categorySlug: string) => {
    setInitialCategory(categorySlug);
    setCurrentPage('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectService = (_serviceId: string) => {
    setCurrentPage('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa] text-[#09090b] selection:bg-cyan-500 selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            <HeroShowcase
              onExploreProducts={() => handleNavigate('products')}
              onVisitStore={() => handleNavigate('contact')}
            />
            <CategoryShowcase onSelectCategory={handleSelectCategory} />
            <FeaturedProducts
              onSelectProduct={handleSelectProduct}
              onViewAll={() => handleNavigate('products')}
            />
            <QuickPCEstimator />
            <ServicesSection
              onSelectService={handleSelectService}
              onViewAllServices={() => handleNavigate('services')}
            />
            <RepairHighlight
              onContactStore={() => handleNavigate('contact')}
              onGetDirections={() => handleNavigate('contact')}
            />
            <WhyUsSection />
            <ReviewsSection onViewAllReviews={() => handleNavigate('reviews')} />
            <StoreLocationSection />
            <ContactCTA onVisitStore={() => handleNavigate('contact')} />
          </>
        )}

        {currentPage === 'products' && (
          <ProductsPage
            initialCategory={initialCategory}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {currentPage === 'product-detail' && selectedProduct && (
          <ProductDetailPage
            product={selectedProduct}
            onBack={() => handleNavigate('products')}
            onSelectProduct={handleSelectProduct}
            onVisitStore={() => handleNavigate('contact')}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage onContactStore={() => handleNavigate('contact')} />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onExploreProducts={() => handleNavigate('products')}
            onContactStore={() => handleNavigate('contact')}
          />
        )}

        {currentPage === 'reviews' && <ReviewsPage />}

        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Mobile Sticky Bar (<15% mobile viewport height) */}
      <MobileStickyBar />

      {/* Instant Search Overlay */}
      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={handleSelectProduct}
        onSelectCategory={handleSelectCategory}
        onSelectService={handleSelectService}
      />
    </div>
  );
}
