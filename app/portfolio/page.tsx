'use client';

import { useState } from 'react';
import Link from 'next/link';
import { portfolioItems, getAllPortfolioCategories } from '@/data/portfolio';
import PortfolioCard from '@/components/PortfolioCard';

export default function PortfolioPage() {
  const categories = getAllPortfolioCategories();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredItems = activeCategory
    ? portfolioItems.filter((item) => item.category === activeCategory)
    : portfolioItems;

  return (
    <>
      {/* Hero */}
      <section className="relative" id="portfolio-hero">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 glow-bg-blue opacity-30 pointer-events-none" />
        <div className="container-custom py-24 md:py-36 relative">
          <Link href="/" className="text-text-muted text-sm hover:text-text-primary transition-colors">Home</Link>
          <span className="text-text-muted text-sm mx-2">›</span>
          <span className="text-text-secondary text-sm">Portfolio</span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mt-10 mb-8">
            Case Studies &<br />
            <span className="text-accent-lime">Proven Results</span>
          </h1>

          <p className="text-text-secondary text-lg max-w-2xl mb-10">
            Real projects, real outcomes. Here&apos;s how we&apos;ve helped global brands build
            scalable digital platforms and AI-powered solutions.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-4">
            <button
              onClick={() => setActiveCategory(null)}
              className={`tag cursor-pointer transition-all ${activeCategory === null ? 'border-accent-lime text-accent-lime' : ''
                }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`tag cursor-pointer transition-all ${activeCategory === cat ? 'border-accent-lime text-accent-lime' : ''
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="bg-bg-secondary pt-24 pb-16 md:pt-6 md:pb-24" id="portfolio-grid">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredItems.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-text-muted text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border-default py-8 md:py-12" id="portfolio-cta">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-5">
            Ready to be our next success story?
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-10">
            Let&apos;s discuss how we can apply the same engineering excellence to your project.
          </p>
          <Link href="/contact" className="btn-accent">
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
