'use client';

import Link from 'next/link';

export default function ServiceCard({ title, description, icon, href, features = [], accentColor = 'gold' }) {
  return (
    <div className="card-base card-light dark:card-dark group relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon */}
      <div className="relative w-14 h-14 rounded-xl bg-gold-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <span className="text-3xl">{icon}</span>
      </div>

      {/* Content */}
      <div className="relative">
        <h3 className="text-xl font-bold mb-3 group-hover:text-gold-500 transition-colors">{title}</h3>
        <p className="text-silver-600 dark:text-silver-400 text-sm mb-4 leading-relaxed">{description}</p>

        {/* Features List */}
        {features.length > 0 && (
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-silver-600 dark:text-silver-400">
                <svg className="w-4 h-4 text-gold-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* CTA Link */}
        {href && (
          <Link href={href} className="inline-flex items-center gap-2 text-gold-500 font-medium text-sm hover:gap-3 transition-all">
            Learn More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}
