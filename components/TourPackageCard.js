'use client';

import Link from 'next/link';

export default function TourPackageCard({ title, destination, duration, highlights = [], price, image, href }) {
  return (
    <div className="card-base card-light dark:card-dark p-0 overflow-hidden group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gold-500/20 to-zinc-800 flex items-center justify-center">
            <span className="text-4xl">🏝️</span>
          </div>
        )}
        
        {/* Duration Badge */}
        <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-xs text-white">
          {duration}
        </div>
        
        {/* Destination */}
        <div className="absolute bottom-4 left-4 z-20">
          <p className="text-gold-500 text-xs font-medium">{destination}</p>
          <h3 className="text-white font-bold text-lg">{title}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Highlights */}
        <ul className="space-y-2 mb-4">
          {highlights.slice(0, 3).map((highlight, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-silver-600 dark:text-silver-400">
              <svg className="w-4 h-4 text-gold-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {highlight}
            </li>
          ))}
        </ul>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-silver-200 dark:border-zinc-800">
          {price && (
            <div>
              <span className="text-xs text-silver-600 dark:text-silver-500">Starting from</span>
              <p className="text-gold-500 font-bold">{price}</p>
            </div>
          )}
          {href && (
            <Link href={href} className="btn-secondary text-sm py-2 px-4">
              View Details
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
