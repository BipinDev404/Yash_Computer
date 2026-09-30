import React from 'react';
import { Star, ArrowRight, ExternalLink, MessageCircle } from 'lucide-react';
import { reviewsData } from '../../data/reviews';
import { businessData } from '../../data/business';

interface ReviewsSectionProps {
  onViewAllReviews: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ onViewAllReviews }) => {
  return (
    <section className="py-16 md:py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-sky-600 mb-2">
              Customer Feedback
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
              What Aurangabad says.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={businessData.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-800 hover:text-sky-600 bg-white border border-zinc-200 px-3.5 py-2 rounded-xl transition-colors shadow-xs"
            >
              <span>View Google Reviews</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewsData.slice(0, 3).map((review) => (
            <div
              key={review.id}
              className="bg-white p-7 rounded-2xl border border-zinc-200/80 shadow-xs flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="text-sm font-medium text-zinc-800 leading-relaxed italic">
                  "{review.content}"
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-zinc-950">{review.author}</div>
                  <div className="text-[11px] text-zinc-400">{review.source}</div>
                </div>
                <span className="text-[10px] font-mono text-emerald-600 font-medium bg-emerald-50 px-2 py-0.5 rounded">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom review link bar */}
        <div className="mt-10 text-center">
          <button
            onClick={onViewAllReviews}
            className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-700 hover:text-zinc-950 transition-colors"
          >
            <span>Read all customer stories & feedback</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
