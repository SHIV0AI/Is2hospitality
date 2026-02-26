'use client';

import Link from 'next/link';

export default function PricingCard({ name, price, period = 'month', description, features = [], isPopular = false, cta = 'Get Started', href = '/contact' }) {
  return (
    <div className={`card-base relative overflow-hidden ${isPopular ? 'border-2 border-gold-500' : 'card-light dark:card-dark'}`}>
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute top-0 right-0 bg-gold-500 text-black text-xs font-bold px-4 py-1 rounded-bl-lg">
          POPULAR
        </div>
      )}

      {/* Plan Name */}
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-silver-600 dark:text-silver-400 text-sm mb-6">{description}</p>

      {/* Price */}
      <div className="mb-6">
        <span className="text-4xl font-bold text-gradient-gold">{price}</span>
        {period && <span className="text-silver-600 dark:text-silver-400 text-sm">/{period}</span>}
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-sm">
            <svg className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-silver-600 dark:text-silver-300">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Link href={href} className={`block text-center w-full ${isPopular ? 'btn-primary' : 'btn-secondary'}`}>
        {cta}
      </Link>
    </div>
  );
}
