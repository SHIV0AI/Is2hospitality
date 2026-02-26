'use client';

import Link from 'next/link';

export default function BlogCard({ title, excerpt, category, date, readTime, image, href }) {
  return (
    <div className="card-base card-dark dark:card-dark p-0 overflow-hidden group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gold-500/20 to-zinc-800 flex items-center justify-center">
            <span className="text-4xl">📰</span>
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="badge badge-gold text-xs">{category}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Meta */}
        <div className="flex items-center gap-3 text-xs text-silver-500 mb-3">
          <span>{date}</span>
          <span>•</span>
          <span>{readTime}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold mb-2 group-hover:text-gold-500 transition-colors line-clamp-2">{title}</h3>
        
        {/* Excerpt */}
        <p className="text-silver-400 text-sm leading-relaxed line-clamp-3 mb-4">{excerpt}</p>

        {/* CTA */}
        {href && (
          <Link href={href} className="inline-flex items-center gap-2 text-gold-500 font-medium text-sm hover:gap-3 transition-all">
            Read Article
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}
