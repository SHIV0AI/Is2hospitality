'use client';

export default function DestinationCard({ name, country, attractions, image }) {
  const attractionList = Array.isArray(attractions) ? attractions : [];
  
  return (
    <div className="card-base card-light dark:card-dark p-0 overflow-hidden group cursor-pointer">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gold-500/20 to-zinc-800 flex items-center justify-center">
            <span className="text-5xl">🌍</span>
          </div>
        )}
        
        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
          <p className="text-gold-500 text-xs font-medium mb-1">{country}</p>
          <h3 className="text-white font-bold text-xl mb-2">{name}</h3>
          
          {/* Attractions Tags */}
          <div className="flex flex-wrap gap-2">
            {attractionList.slice(0, 3).map((attraction, index) => (
              <span key={index} className="px-2 py-1 rounded-full bg-white/10 backdrop-blur-sm text-xs text-white">
                {attraction}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
