'use client';

import { useState } from 'react';
import type { PortfolioItem } from '@/data/portfolio';

interface PortfolioCardProps {
  item: PortfolioItem;
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="card" id={`portfolio-${item.id}`}>
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <span className="tag text-xs">{item.category}</span>
        <span className="text-text-muted text-sm font-medium">{item.client}</span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-text-primary mb-3">{item.title}</h3>

      {/* Description */}
      <p className="text-text-secondary text-sm leading-relaxed mb-4">{item.description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {item.techStack.map((tech) => (
          <span key={tech} className="px-2 py-0.5 rounded text-xs bg-bg-surface-light text-text-secondary border border-border-default">
            {tech}
          </span>
        ))}
      </div>

      {/* Expandable Details */}
      {expanded && (
        <div className="mt-4 pt-4 border-t border-border-default animate-fade-in">
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-text-primary mb-2">Challenge</h4>
            <p className="text-text-secondary text-sm leading-relaxed">{item.challenge}</p>
          </div>
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-text-primary mb-2">Solution</h4>
            <p className="text-text-secondary text-sm leading-relaxed">{item.solution}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-2">Results</h4>
            <ul className="space-y-1.5">
              {item.results.map((result) => (
                <li key={result} className="flex items-start gap-2 text-sm text-text-secondary">
                  <span className="text-accent-green mt-0.5">✓</span>
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 text-sm text-accent-lime hover:text-accent-lime-hover transition-colors font-medium"
      >
        {expanded ? 'Show Less' : 'View Details →'}
      </button>
    </div>
  );
}
