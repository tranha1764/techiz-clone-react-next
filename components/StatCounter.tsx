'use client';

import { useEffect, useRef, useState } from 'react';

interface StatCounterProps {
  value: string;
  label: string;
  icon: string;
  highlight?: boolean;
}

export default function StatCounter({ value, label, icon, highlight }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [displayValue, setDisplayValue] = useState('0');

  // Extract numeric part for animation
  const numericMatch = value.match(/^(\d+)/);
  const numericValue = numericMatch ? parseInt(numericMatch[1], 10) : 0;
  const suffix = numericMatch ? value.slice(numericMatch[1].length) : value;
  const isNumeric = numericMatch !== null;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    if (!isNumeric) {
      setDisplayValue(value);
      return;
    }

    let current = 0;
    const duration = 1500;
    const steps = 40;
    const increment = numericValue / steps;
    const interval = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        current = numericValue;
        clearInterval(timer);
      }
      setDisplayValue(Math.floor(current).toString());
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible, isNumeric, numericValue, value]);

  return (
    <div
      ref={ref}
      className={`card flex flex-col gap-3 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <span className="text-2xl">{icon}</span>
      <div className={`text-3xl md:text-4xl font-bold ${highlight ? 'text-accent-lime' : 'text-text-primary'}`}>
        {isNumeric ? (
          <>
            {displayValue}
            {suffix}
          </>
        ) : (
          <span className={isVisible ? 'animate-fade-in' : 'opacity-0'}>{value}</span>
        )}
      </div>
      <p className="text-text-secondary text-sm leading-relaxed">{label}</p>
    </div>
  );
}
