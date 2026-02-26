'use client';

export default function UserTypeCard({ title, description, icon, targetCount }) {
  return (
    <div className="card-base card-light dark:card-dark text-center group hover:scale-105 transition-all duration-300">
      {/* Icon */}
      <div className="w-16 h-16 rounded-2xl bg-gold-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-500/20 transition-colors">
        <span className="text-3xl">{icon}</span>
      </div>

      {/* Content */}
      <h3 className="font-bold mb-2 group-hover:text-gold-500 transition-colors">{title}</h3>
      <p className="text-silver-600 dark:text-silver-400 text-sm leading-relaxed">{description}</p>
      
      {/* Target Count */}
      {targetCount && (
        <p className="text-gold-500 text-xs mt-4 font-medium">{targetCount}</p>
      )}
    </div>
  );
}
