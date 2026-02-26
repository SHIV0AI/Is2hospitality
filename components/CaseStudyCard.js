'use client';

import Link from 'next/link';

export default function CaseStudyCard({ title, category, result, description, href }) {
  return (
    <div className="card-base card-light dark:card-dark group hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Category Badge */}
      <span className="badge badge-gold text-xs mb-4 relative">{category}</span>

      {/* Content */}
      <div className="relative">
        <h3 className="text-lg font-bold mb-2 group-hover:text-gold-500 transition-colors line-clamp-2">{title}</h3>
        
        {/* Result Highlight */}
        <div className="p-3 rounded-lg bg-gold-500/10 border border-gold-500/20 mb-4">
          <p className="text-gold-500 font-semibold text-sm">{result}</p>
        </div>

        <p className="text-silver-600 dark:text-silver-400 text-sm leading-relaxed mb-4 line-clamp-3">{description}</p>

        {/* CTA */}
        {href && (
          <Link href={href} className="inline-flex items-center gap-2 text-gold-500 font-medium text-sm hover:gap-3 transition-all">
            Read Case Study
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}
