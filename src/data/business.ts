import { BusinessInfo } from '../types';

export const businessData: BusinessInfo = {
  name: 'YASH COMPUTER',
  tagline: 'Technology, Made Simple.',
  shortBio: 'Aurangabad’s premier destination for genuine laptops, desktop computers, high-speed upgrades, authentic accessories, and certified repair services.',
  phone: '+919097198198',
  phoneFormatted: '090971 98198',
  whatsapp: '919097198198',
  email: 'contact@yashcomputer.in',
  addressLine: 'MG Road, near Annapurna Hotel / Axis Bank',
  landmark: 'Near Annapurna Hotel & Axis Bank Branch',
  city: 'Aurangabad',
  state: 'Bihar',
  pincode: '824101',
  fullAddress: 'MG Road, near Annapurna Hotel / Axis Bank, Aurangabad, Bihar – 824101',
  timings: {
    weekdays: '10:00 AM – 8:30 PM (Mon – Sat)',
    sunday: '10:30 AM – 4:00 PM',
  },
  mapsUrl: 'https://maps.google.com/?q=Yash+Computer+MG+Road+Aurangabad+Bihar+824101',
  mapsEmbedQuery: 'Yash Computer, MG Road, Aurangabad, Bihar 824101',
};

export function getWhatsAppUrl(customMessage?: string): string {
  const defaultText = 'Hello YASH COMPUTER, I would like to inquire about your laptops and computer services in Aurangabad.';
  const text = encodeURIComponent(customMessage || defaultText);
  return `https://wa.me/${businessData.whatsapp}?text=${text}`;
}

export function getProductWhatsAppUrl(productName: string, brand?: string): string {
  const text = encodeURIComponent(`Hello YASH COMPUTER, I am interested in ${brand ? brand + ' ' : ''}${productName}. Please share price, specifications, and availability at your MG Road store.`);
  return `https://wa.me/${businessData.whatsapp}?text=${text}`;
}

export function getServiceWhatsAppUrl(serviceTitle: string): string {
  const text = encodeURIComponent(`Hello YASH COMPUTER, I need assistance with "${serviceTitle}". Could you please guide me on estimate and turnaround time?`);
  return `https://wa.me/${businessData.whatsapp}?text=${text}`;
}
