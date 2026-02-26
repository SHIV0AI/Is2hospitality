'use client';

export default function FeatureCard({ title, description, icon, badge }) {
  return (
    <div className="card-base card-light dark:card-dark group hover:scale-[1.02] transition-all duration-300">
      {/* Badge */}
      {badge && (
        <span className="badge badge-gold text-xs mb-4">{badge}</span>
      )}

      {/* Icon Container */}
      <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mb-4 group-hover:bg-gold-500/20 transition-colors">
        <span className="text-2xl">{icon}</span>
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold mb-2 group-hover:text-gold-500 transition-colors">{title}</h3>
      <p className="text-silver-600 dark:text-silver-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
