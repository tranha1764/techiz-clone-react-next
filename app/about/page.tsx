import Link from 'next/link';
import { capabilities, devApproaches, engagementModels } from '@/data/site-data';
import CapabilityCard from '@/components/CapabilityCard';

export const metadata = {
  title: 'About Us | Open Techiz Clone',
  description: 'Learn about Open Techiz — our team, capabilities, and engineering approach to building scalable digital platforms.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative mb-6" id="about-hero">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 glow-bg-blue opacity-30 pointer-events-none" />
        <div className="container-custom py-24 md:py-36 relative">
          <div className="max-w-3xl">
            <Link href="/" className="text-text-muted text-sm hover:text-text-primary transition-colors">Home</Link>
            <span className="text-text-muted text-sm mx-2">›</span>
            <span className="text-text-secondary text-sm">About</span>

            <p className="text-text-secondary text-lg leading-relaxed mt-10 mb-8">
              Open Techiz is a product engineering company delivering scalable digital platforms for growing SMEs and global brands. We combine agile squads, deep technical expertise, and applied AI to build systems built to last.
            </p>

            <Link href="/contact" className="btn-accent">
              Work With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-bg-secondary md:pt-6 md:pb-6" id="about-story">
        <div className="container-custom pt-24 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

            {/* Left Column: Our Story */}
            <div>
              <div className="flex items-center gap-3 mb-6 mt-6">
                <span className="w-8 h-px bg-text-muted/50" />
                <span className="text-text-muted text-xs font-bold uppercase tracking-widest">Our Story</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight mb-8">
                Engineering Growth<br className="hidden md:block" /> Through Scalable Systems
              </h2>

              <div className="space-y-8 text-text-secondary leading-relaxed">
                <p>
                  Founded with a clear mission: to help companies build digital products that don&apos;t just launch — they scale. We work with growing SMEs and global enterprise brands, providing the engineering muscle they need without the overhead of building large internal teams.
                </p>
                <p>
                  Our team operates in flexible agile squads (2–20 engineers), adapting to project needs from initial architecture to long-term product evolution — as a seamless extension of your in-house team.
                </p>
              </div>
            </div>

            {/* Right Column: Clients & Markets */}
            <div className="lg:pt-[5rem]">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-text-muted/50" />
                <span className="text-text-muted text-xs font-bold uppercase tracking-widest">Clients & Markets</span>
              </div>

              <p className="text-text-secondary leading-relaxed mb-8">
                We serve growing SMEs and global enterprise brands across Europe, Australia, and the United States. Our clients include GLAMIRA, Mektouke, Astek Group, and Toyota.
              </p>

              <div className="flex flex-wrap gap-4">
                {[
                  { name: 'Europe' },
                  { name: 'Australia' },
                  { name: 'United States' },
                ].map((market) => (
                  <div key={market.name} className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border-default bg-[#0d1323] text-text-muted text-sm transition-colors hover:text-text-primary hover:border-text-muted">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{market.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section id="about-capabilities" className="py-8 md:pt-8 md:pb-10">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-14">Our Capabilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((cap) => (
              <CapabilityCard key={cap.title} capability={cap} />
            ))}
          </div>
        </div>
      </section>

      {/* Development Approach */}
      <section className="bg-bg-secondary py-8 md:py-12" id="dev-approach">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-5">
            Our Development Approach
          </h2>
          <p className="text-text-secondary mb-14 max-w-2xl">
            We combine battle-tested software engineering practices with the latest AI-augmented tools to deliver faster, safer, and higher-quality software.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Traditional */}
            <div className="card">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-xl font-semibold text-text-primary">{devApproaches.traditional.title}</h3>
                <span className="tag text-xs">{devApproaches.traditional.badge}</span>
              </div>
              <ul className="space-y-3.5">
                {devApproaches.traditional.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-text-secondary text-sm">
                    <span className="text-accent-green mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* AI-Augmented */}
            <div className="card border-border-accent">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-xl font-semibold text-text-primary">{devApproaches.aiAugmented.title}</h3>
                <span className="px-2 py-0.5 rounded-full bg-accent-lime/20 text-accent-lime text-xs font-medium">
                  {devApproaches.aiAugmented.badge}
                </span>
              </div>
              <ul className="space-y-3.5">
                {devApproaches.aiAugmented.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-text-secondary text-sm">
                    <span className="text-accent-lime mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section id="engagement-models" className="py-8 md:py-12">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-5">
            Engagement Models
          </h2>
          <p className="text-text-secondary mb-14 max-w-2xl">
            Two flexible engagement models designed for different project needs and business goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {engagementModels.map((model) => (
              <div key={model.title} className="card">
                <h3 className="text-xl font-semibold text-text-primary mb-2">{model.title}</h3>
                <p className="text-text-secondary text-sm mb-6">{model.subtitle}</p>
                <ul className="space-y-3.5">
                  {model.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-accent-lime mt-0.5">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link href="/contact" className="btn-accent">
              Discuss Your Needs
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-bg-secondary py-8 md:py-12" id="about-cta">
        <div className="container-custom text-center">
          <p className="text-text-secondary text-lg mb-10 max-w-2xl mx-auto">
            Contact us for a free consultation and let&apos;s design the right engineering approach for your product.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="btn-accent">Get a Free Consultation</Link>
            <Link href="/services" className="btn-outline">See Our Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
