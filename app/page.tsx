import Link from 'next/link';
import { stats, heroTags, services, capabilities, trustedBrands } from '@/data/site-data';
import StatCounter from '@/components/StatCounter';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import CapabilityCard from '@/components/CapabilityCard';

export default function HomePage() {
  return (
    <>
      {/* ===== Hero Section ===== */}
      <section className="relative overflow-hidden" id="hero">
        {/* Background glow */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 glow-bg-blue opacity-50 pointer-events-none" />

        <div className="container-custom py-24 md:py-36 lg:py-44 relative">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">
            {/* Left: Headline */}
            <div className="lg:w-1/2">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-accent bg-glow-lime mb-6 mt-4">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-lime" />
                <span className="text-accent-lime text-sm font-medium">
                  Scalable Platform & AI Engineering Partner
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-8">
                Engineering Growth{' '}
                <br className="hidden md:block" />
                Through{' '}
                <span className="text-accent-lime">Scalable Systems</span>
              </h1>

              <p className="text-text-secondary text-lg leading-relaxed mb-10 max-w-lg">
                We are a 70-engineer product engineering company delivering
                high-performance digital platforms for growing SMEs and global
                enterprise brands across Europe, Australia, and the US.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <Link href="/contact" className="btn-accent">
                  Start a Project
                </Link>
                <Link href="/services" className="btn-outline">
                  Explore Services
                </Link>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {heroTags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Stats Bento Grid */}
            <div className="lg:w-1/2 grid grid-cols-2 gap-5 w-full mt-4">
              {stats.map((stat) => (
                <StatCounter
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  icon={stat.icon}
                  highlight={stat.highlight}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Services Preview ===== */}
      <section className="bg-bg-secondary relative pt-24 pb-16 md:pt-6 md:pb-12" id="services-preview">
        <div className="container-custom">
          <SectionHeading
            label="What We Build"
            title="Three pillars of engineering excellence"
            ctaText="Explore All Services"
            ctaHref="/services"
          />

          {services.map((service) => (
            <ServiceCard key={service.id} service={service} detailed />
          ))}
        </div>
      </section>

      {/* ===== Trusted Brands ===== */}
      <section className="border-y border-border-default py-8 md:py-4" id="trusted-brands">
        <div className="container-custom">
          <p className="text-text-muted text-sm text-center mb-8 uppercase tracking-widest font-medium">
            Trusted by Global Brands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20">
            {trustedBrands.map((brand) => (
              <span
                key={brand.name}
                className="text-text-muted text-lg md:text-xl font-bold tracking-wider hover:text-text-primary transition-colors cursor-default"
              >
                {brand.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Capabilities Grid ===== */}
      <section id="capabilities" className="py-8 md:py-4">
        <div className="container-custom">
          <SectionHeading
            label="Why Us"
            title="Built for scale from the ground up"
            ctaText="Learn More About Us"
            ctaHref="/about"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((cap) => (
              <CapabilityCard key={cap.title} capability={cap} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Bottom CTA ===== */}
      <section className="bg-bg-secondary relative overflow-hidden  py-8 md:py-12" id="bottom-cta">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] glow-bg-blue opacity-30 pointer-events-none" />
        <div className="container-custom text-center relative">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Let&apos;s Build Your Next{' '}
            <br className="hidden md:block" />
            <span className="text-accent-lime">Scalable Digital Platform</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-10">
            Contact us for a free consultation. Our team is ready to help you
            design and build the product you need.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="btn-accent">
              Get a Free Consultation
            </Link>
            <Link href="/technology" className="btn-outline">
              Explore Our Tech Stack
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}