'use client';

import { useState, useEffect, useRef } from 'react';

export default function StatCard({ value, label, prefix = '', suffix = '', icon }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const numValue = parseInt(value, 10);
    const duration = 2000;
    const steps = 60;
    const increment = numValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numValue) {
        setCount(numValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={cardRef} className="card-base card-dark dark:card-dark text-center group">
      {/* Icon */}
      {icon && (
        <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
          <span className="text-2xl">{icon}</span>
        </div>
      )}

      {/* Value */}
      <div className="text-4xl font-bold text-gradient-gold mb-2">
        {prefix}{count.toLocaleString()}{suffix}
      </div>

      {/* Label */}
      <p className="text-silver-400 text-sm">{label}</p>
    </div>
  );
}
