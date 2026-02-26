'use client';

export default function IntegrationCard({ icon, name, description, logo, category }) {
  return (
    <div className="card-base card-light dark:card-dark flex flex-col items-center justify-center text-center py-8 group hover:scale-105 transition-all duration-300">
      {/* Logo/Icon */}
      <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-gold-500/10 to-gold-500/5 dark:from-gold-500/20 dark:to-gold-500/10 flex items-center justify-center mb-4 group-hover:bg-gold-500/20 dark:group-hover:from-gold-500/30 dark:group-hover:to-gold-500/20 transition-all duration-300">
        {icon ? (
          <div className="text-gold-500 w-12 h-12">
            {icon}
          </div>
        ) : logo ? (
          <img src={logo} alt={name} className="w-12 h-12 object-contain" />
        ) : (
          <span className="text-4xl">🔗</span>
        )}
      </div>

      {/* Name */}
      <h4 className="font-semibold text-sm mb-2">{name}</h4>
      
      {/* Description/Category */}
      {description ? (
        <span className={`text-xs ${description ? 'block' : 'hidden'}`}
          style={{color: 'currentColor', opacity: 0.7}}>
          {description}
        </span>
      ) : category && (
        <span className="text-xs text-silver-600 dark:text-silver-500">{category}</span>
      )}
    </div>
  );
}
