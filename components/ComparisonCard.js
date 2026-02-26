'use client';

export default function ComparisonCard({ title, is2Features = [], competitorFeatures = [] }) {
  return (
    <div className="card-base card-light dark:card-dark">
      <h3 className="text-xl font-bold mb-6 text-center">{title}</h3>
      
      <div className="grid grid-cols-2 gap-6">
        {/* IS2 Column */}
        <div>
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gold-500/30">
            <div className="w-8 h-8 rounded-lg bg-gradient-gold flex items-center justify-center">
              <span className="text-black font-bold text-sm">IS2</span>
            </div>
            <span className="font-semibold text-gold-500">IS2 Platform</span>
          </div>
          <ul className="space-y-3">
            {is2Features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-silver-600 dark:text-silver-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Competitor Column */}
        <div>
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-silver-200 dark:border-zinc-700">
            <div className="w-8 h-8 rounded-lg bg-silver-200 dark:bg-zinc-700 flex items-center justify-center">
              <span className="text-silver-400 text-sm">?</span>
            </div>
            <span className="font-semibold text-silver-400">Others</span>
          </div>
          <ul className="space-y-3">
            {competitorFeatures.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-silver-500">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
