'use client';

export default function BenefitCard({ title, description, icon, metric }) {
  return (
    <div className="card-base card-light dark:card-dark group">
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <span className="text-2xl">{icon}</span>
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold mb-2 group-hover:text-gold-500 transition-colors">{title}</h3>
      
      {/* Metric Highlight */}
      {metric && (
        <p className="text-gold-500 font-bold text-xl mb-2">{metric}</p>
      )}
      
      <p className="text-silver-600 dark:text-silver-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
