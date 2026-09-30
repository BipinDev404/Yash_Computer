import React from 'react';
import { Star, ExternalLink, MessageCircle, MapPin, CheckCircle } from 'lucide-react';
import { reviewsData } from '../../data/reviews';
import { businessData } from '../../data/business';

export const ReviewsPage: React.FC = () => {
  return (
    <div className="py-12 md:py-20 bg-[#fafafa]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-600 mb-2">
            Verified Feedback
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-950 tracking-tight">
            Customer Reviews & Ratings
          </h1>
          <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
            Real experiences from customers who visited our MG Road store in Aurangabad for laptops, computer accessories, and repairs.
          </p>
        </div>

        {/* Rating Overview Box */}
        <div className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="text-4xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight">
              5.0
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-xs text-zinc-500 mt-1">Based on Google verified local ratings</div>
            </div>
          </div>

          <a
            href={businessData.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold rounded-xl transition-colors flex items-center gap-2 shadow-xs whitespace-nowrap"
          >
            <span>View All on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Full Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviewsData.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl border border-zinc-200/80 p-6 sm:p-7 shadow-xs flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    {review.date}
                  </span>
                </div>

                <blockquote className="text-sm font-medium text-zinc-800 leading-relaxed italic">
                  "{review.content}"
                </blockquote>
              </div>

              <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-zinc-950">{review.author}</div>
                  <div className="text-[11px] text-zinc-400">{review.source}</div>
                </div>
                <CheckCircle className="w-4 h-4 text-sky-600" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
