import Link from 'next/link';
import { techCategories, techPrinciples } from '@/data/site-data';

export const metadata = {
  title: 'Technology | Open Techiz Clone',
  description: 'Explore our full technology stack spanning frontend, backend, cloud, databases, ecommerce platforms, and applied AI.',
};

export default function TechnologyPage() {
  return (
    <>
      {/* Hero */}
      <section className="mb-6 relative" id="tech-hero">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 glow-bg-blue opacity-30 pointer-events-none" />
        <div className="container-custom py-24 md:py-36 relative">
          <Link href="/" className="text-text-muted text-sm hover:text-text-primary transition-colors">Home</Link>
          <span className="text-text-muted text-sm mx-2">›</span>
          <span className="text-text-secondary text-sm">Technology</span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mt-10 mb-8">
            The stack behind<br />
            <span className="text-text-secondary">every scalable product</span>
          </h1>

          <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mb-10">
            We choose technology based on what&apos;s right for your product — not what&apos;s trendy. Our engineers
            have production experience across the full stack: frontend, backend, cloud, data, and AI.
          </p>

          {/* Anchor tabs */}
          <div className="flex flex-wrap gap-8">
            {techCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="text-accent-lime text-sm hover:text-accent-lime-hover transition-colors"
              >
                <span className="text-text-muted mr-1">{cat.number}</span>
                {cat.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Categories */}
      <section className="bg-bg-secondary pt-24 pb-16 md:pt-6 md:pb-24" id="tech-stack">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-5">
            Six domains, production-proven
          </h2>
          <p className="text-text-secondary mb-16 max-w-2xl">
            Every tool chosen for production suitability, not hype. Real engineers, real project experience across each domain.
          </p>

          <div className="space-y-16">
            {techCategories.map((category) => (
              <div key={category.id} id={category.id} className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-5">
                  <span className="number-label">{category.number}</span>
                  <h3 className="text-xl font-semibold text-text-primary">{category.title}</h3>
                </div>
                <p className="text-text-secondary text-sm mb-6">{category.description}</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="card flex items-center justify-center text-center py-4 px-3"
                    >
                      <span className="text-text-primary text-sm font-medium">{item.name}</span>
                    </div>
                  ))}
                </div>
                <div className="section-divider mt-12" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section id="tech-principles" className="py-8 md:py-8">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-5">
            Right tool, right job
          </h2>
          <p className="text-text-secondary mb-14 max-w-2xl">
            We don&apos;t lock you into a single framework or vendor. Every decision serves your product&apos;s performance, cost, and long-term maintainability.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {techPrinciples.map((principle) => (
              <div key={principle.title} className="card">
                <span className="text-2xl mb-4 block">{principle.icon}</span>
                <h3 className="text-lg font-semibold text-text-primary mb-3">{principle.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg-secondary border-t border-border-default py-8 md:py-12" id="tech-cta">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-5">
            Have a technical challenge we can help solve?
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-10">
            Our architects are available for a free technical consultation to assess your current stack and propose the right path forward.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="btn-accent">Request Technical Consultation</Link>
            <Link href="/services" className="btn-outline">Explore Our Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
