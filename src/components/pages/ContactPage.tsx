import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Clock, Navigation, ExternalLink, Send, Check } from 'lucide-react';
import { businessData, getWhatsAppUrl } from '../../data/business';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [inquiryType, setInquiryType] = useState('Laptop Purchase');
  const [message, setMessage] = useState('');

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const fullMsg = `Hello YASH COMPUTER, my name is ${name || 'Customer'}. I am inquiring about [${inquiryType}]: ${message || 'Please share information and price.'}`;
    window.open(getWhatsAppUrl(fullMsg), '_blank');
  };

  return (
    <div className="py-12 md:py-20 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-600 mb-2">
            Store Location & Contact
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-950 tracking-tight">
            Visit Our Store in Aurangabad
          </h1>
          <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
            We are located right in the heart of Aurangabad on MG Road. Walk in anytime during business hours for consultations, purchases, and repairs.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-6 space-y-6">
            {/* Store Location Card */}
            <div className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 space-y-4 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-zinc-950">Store Address</h2>
                  <p className="text-xs sm:text-sm text-zinc-700 mt-1 font-medium">
                    {businessData.addressLine}
                  </p>
                  <p className="text-xs text-zinc-500">
                    {businessData.city}, {businessData.state} – {businessData.pincode}
                  </p>
                  <p className="text-[11px] text-zinc-400 mt-1">
                    Landmark: Near Axis Bank & Annapurna Hotel
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href={businessData.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <Navigation className="w-3.5 h-3.5 text-sky-400" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Timings Card */}
            <div className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 space-y-4 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-zinc-950">Opening Hours</h2>
                  <div className="text-xs text-zinc-700 mt-1 space-y-1">
                    <div>Monday – Saturday: <strong className="text-zinc-900">{businessData.timings.weekdays}</strong></div>
                    <div>Sunday: <strong className="text-zinc-900">{businessData.timings.sunday}</strong></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Phone & WhatsApp */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-zinc-200 shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-950">
                  <Phone className="w-4 h-4 text-sky-600" />
                  <span>Call Store</span>
                </div>
                <div className="text-xs text-zinc-500">Instant verbal assistance</div>
                <a
                  href={`tel:${businessData.phone}`}
                  className="block text-sm font-bold text-zinc-900 hover:text-sky-600 font-mono pt-1"
                >
                  {businessData.phoneFormatted}
                </a>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-zinc-200 shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-950">
                  <MessageSquare className="w-4 h-4 text-emerald-500" />
                  <span>WhatsApp Chat</span>
                </div>
                <div className="text-xs text-zinc-500">Ask price, availability & quotes</div>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-xs font-bold text-emerald-700 hover:underline pt-1"
                >
                  Open WhatsApp Chat →
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Quick Enquiry Form */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-mono font-bold text-sky-600 uppercase">
                Fast Inquiry
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight mt-1">
                Send a Message to Yash Computer
              </h2>
              <p className="text-xs text-zinc-500 mt-1">
                Fill this form to automatically connect with our MG Road store on WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSendWhatsApp} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1">Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-zinc-50 rounded-xl border border-zinc-200 focus:outline-none focus:border-zinc-400 text-zinc-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1">Inquiry Type</label>
                <select
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-zinc-50 rounded-xl border border-zinc-200 focus:outline-none text-zinc-800 font-medium"
                >
                  <option value="Laptop Purchase">Laptop Purchase (HP / Lenovo / Dell / ASUS)</option>
                  <option value="Desktop / Custom PC Build">Desktop / Custom PC Build</option>
                  <option value="SSD & RAM Speed Upgrade">SSD & RAM Speed Upgrade</option>
                  <option value="Laptop Repair / Screen / Battery">Laptop Repair / Screen / Battery</option>
                  <option value="Printer / Ink Tank">Printer / Ink Tank</option>
                  <option value="CCTV Security Setup">CCTV Security Setup</option>
                  <option value="General Inquiry">General Inquiry / Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1">Message / Requirements</label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what you are looking for, your budget or the computer problem..."
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-zinc-50 rounded-xl border border-zinc-200 focus:outline-none focus:border-zinc-400 text-zinc-900"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Send WhatsApp Enquiry</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
