'use client';

export default function ShivAiBadge({ variant = 'default', className = '' }) {
  if (variant === 'large') {
    return (
      <a
        href="https://www.shivai.co.in"
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-4 p-6 rounded-2xl bg-gold-500/10 border border-gold-500/20 hover:border-gold-500/40 transition-colors ${className}`}
      >
        <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center">
          <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div>
          <p className="text-lg font-bold text-gold-500">Powered by Shiv.ai</p>
          <p className="text-sm text-silver-400">Global AI Service Provider</p>
          <p className="text-xs text-silver-500">India | Singapore</p>
        </div>
      </a>
    );
  }

  if (variant === 'inline') {
    return (
      <a
        href="https://www.shivai.co.in"
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 transition-colors ${className}`}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <span className="text-sm font-medium">Powered by Shiv.ai</span>
      </a>
    );
  }

  return (
    <a
      href="https://www.shivai.co.in"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 hover:border-gold-500/50 transition-colors hover:bg-gold-500/15 ${className}`}
    >
      <svg className="w-4 h-4 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
      <span className="text-sm font-medium text-gold-500">Powered by Shiv.ai</span>
    </a>
  );
}
