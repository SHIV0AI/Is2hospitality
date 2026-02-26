'use client';

import { useState } from 'react';

export default function FAQCard({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card-base card-light dark:card-dark cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
      <div className="flex items-start justify-between gap-4">
        {/* Question */}
        <h3 className={`font-semibold transition-colors ${isOpen ? 'text-gold-500' : ''}`}>
          {question}
        </h3>
        
        {/* Toggle Icon */}
        <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gold-500/10 flex items-center justify-center transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-4 h-4 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Answer */}
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 mt-4 pt-4 border-t border-silver-200 dark:border-zinc-800' : 'max-h-0'}`}>
        <p className="text-silver-600 dark:text-silver-400 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}
