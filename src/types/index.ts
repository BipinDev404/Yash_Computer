export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: 'laptops' | 'desktops' | 'monitors' | 'storage' | 'accessories' | 'networking' | 'printers' | 'cctv';
  categoryLabel: string;
  shortDesc: string;
  fullDesc: string;
  priceNote: string;
  inStock: boolean;
  featured?: boolean;
  keySpecs: string[];
  specs: Record<string, string>;
  modelNumber?: string;
  badge?: string;
  graphicType: 'laptop' | 'desktop' | 'monitor' | 'ssd' | 'ram' | 'keyboard' | 'mouse' | 'router' | 'printer' | 'cctv';
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  desc: string;
  itemCount: number;
  graphicType: 'laptop' | 'desktop' | 'monitor' | 'ssd' | 'keyboard' | 'router' | 'printer' | 'cctv';
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  turnaround: string;
  features: string[];
  graphicType: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  content: string;
  highlight?: string;
  source: string;
  date: string;
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  shortBio: string;
  phone: string;
  phoneFormatted: string;
  whatsapp: string;
  email: string;
  addressLine: string;
  landmark: string;
  city: string;
  state: string;
  pincode: string;
  fullAddress: string;
  timings: {
    weekdays: string;
    sunday: string;
  };
  mapsUrl: string;
  mapsEmbedQuery: string;
}
