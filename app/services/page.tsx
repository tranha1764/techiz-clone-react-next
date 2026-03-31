import Link from 'next/link';
import { services, serviceDetails } from '@/data/site-data';

export const metadata = {
  title: 'Services | Open Techiz Clone',
  description: 'Three pillars of engineering excellence: Ecommerce Platforms, Scalable Product Engineering, and AI-Driven Enhancements.',
};

export default function ServicesPage() {
  const details = [
    { key: 'ecommerce', data: serviceDetails.ecommerce },
    { key: 'productEngineering', data: serviceDetails.productEngineering },
    { key: 'aiDriven', data: serviceDetails.aiDriven },
  ];

  return (
    <>
      {/* Hero */}
      <section className="mb-6 relative" id="services-hero">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 glow-bg-blue opacity-30 pointer-events-none" />
        <div className="container-custom py-24 md:py-36 relative">
          <Link href="/" className="text-text-muted text-sm hover:text-text-primary transition-colors">Home</Link>
          <span className="text-text-muted text-sm mx-2">›</span>
          <span className="text-text-secondary text-sm">Services</span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mt-10 mb-8">
            Engineering built for<br />
            <span className="text-text-secondary">the real world</span>
          </h1>

          <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mb-10">
            Three core service pillars — Ecommerce Platforms, Scalable Product Engineering, and AI-Driven
            Enhancements — designed to take your digital product from concept to production at scale.
          </p>

          {/* Anchor Navigation */}
          <div className="flex flex-wrap gap-8">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-accent-lime text-sm hover:text-accent-lime-hover transition-colors"
              >
                <span className="text-text-muted mr-1">{s.number}</span>
                {s.title.split(' ').slice(-1)}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service, index) => {
        const detail = details[index]?.data;
        return (
          <section
            key={service.id}
            id={service.id}
            className={`scroll-mt-20 ${index % 2 === 0 ? 'bg-bg-secondary' : ''} py-8 md:py-12`}
          >
            <div className="container-custom">
              {/* Section header */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-6xl md:text-8xl font-bold text-accent-lime/10">{service.number}</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-6 h-0.5 bg-accent-lime" />
                  <span className="text-accent-lime text-xs font-semibold uppercase tracking-widest">
                    {service.title}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="max-w-3xl mb-10">
                <p className="text-text-secondary leading-relaxed mb-5">{detail?.heroText}</p>
                <p className="text-text-secondary leading-relaxed text-sm">{detail?.subtitle}</p>
              </div>

              {/* Capability Cards */}
              {detail?.capabilities && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                  {detail.capabilities.map((cap) => (
                    <div key={cap.title} className="card">
                      <span className="text-2xl mb-4 block">{cap.icon}</span>
                      <h3 className="text-lg font-semibold text-text-primary mb-3">{cap.title}</h3>
                      <p className="text-text-secondary text-sm leading-relaxed">{cap.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              {index === 0 && (
                <div className="mt-10">
                  <Link href="/contact" className="btn-accent">Start a Project</Link>
                </div>
              )}
            </div>
          </section>
        );
      })}

      {/* Bottom CTA */}
      <section className="border-t border-border-default py-8 md:py-12" id="services-cta">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-5">
            Not sure which service fits your needs?
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-10">
            Let&apos;s have a free 30-minute consultation to map out the right engineering approach for your product.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="btn-accent">Book a Free Consultation</Link>
            <Link href="/about" className="btn-outline">Learn About Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
