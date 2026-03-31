import Link from 'next/link';
import { aiStats, aiServices, aiProcessSteps, aiPrinciples, trustedBrands } from '@/data/site-data';
import StatCounter from '@/components/StatCounter';

export const metadata = {
  title: 'AI Services | Open Techiz Clone',
  description: 'Scale without hiring. Cut process time by 70%. ROI in 90 days. AI Chatbot, Recommendations, Voice AI, and Workflow Automation.',
};

export default function AIServicePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" id="ai-hero">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 glow-bg-blue opacity-40 pointer-events-none" />
        <div className="container-custom py-24 md:py-36 relative">
          <Link href="/" className="text-text-muted text-sm hover:text-text-primary transition-colors">Home</Link>
          <span className="text-text-muted text-sm mx-2">›</span>
          <span className="text-text-secondary text-sm">AI Service</span>

          <p className="text-text-secondary text-lg leading-relaxed max-w-3xl mt-10 mb-10">
            We build and deploy four types of production AI: AI Chatbots for 24/7 customer support,
            Recommendation Engines that drive revenue, Voice AI for high-traffic environments, and
            Workflow Automation that eliminates manual processing — integrated into your existing stack.
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            <Link href="/contact" className="btn-accent">Contact Us</Link>
            <a href="#showcase" className="btn-outline">See What We Build</a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-bg-secondary border-y border-border-default py-8 md:py-4" id="ai-stats">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4 text-center">
            Results that show up on your bottom line
          </h2>
          <p className="text-text-muted text-center mb-10">Numbers from real deployments — not projections.</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {aiStats.map((stat) => (
              <StatCounter
                key={stat.description}
                value={stat.value}
                label={stat.description}
                icon=""
                highlight
              />
            ))}
          </div>
        </div>
      </section>

      {/* AI Service Sections */}
      <section id="showcase" className="py-8 md:py-12">
        <div className="container-custom">
          <div className="space-y-20 md:space-y-32">
            {aiServices.map((service, index) => (
              <div
                key={service.title}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-20`}
              >
                {/* Content */}
                <div className="lg:w-1/2">
                  <span className="text-4xl mb-5 block">{service.icon}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-5">{service.title}</h3>
                  <p className="text-text-secondary leading-relaxed mb-8">{service.description}</p>
                  <ul className="space-y-3.5">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-text-secondary text-sm">
                        <span className="text-accent-lime mt-0.5">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual placeholder */}
                <div className="lg:w-1/2 flex items-center justify-center">
                  <div className="w-full aspect-video rounded-xl bg-bg-surface border border-border-default dot-grid flex items-center justify-center">
                    <span className="text-6xl">{service.icon}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="border-y border-border-default py-8 md:py-4" id="ai-partners">
        <div className="container-custom">
          <p className="text-text-muted text-sm text-center mb-6 uppercase tracking-widest font-medium">
            Trusted Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20">
            {trustedBrands.map((brand) => (
              <span key={brand.name} className="text-text-muted text-lg font-bold tracking-wider hover:text-text-primary transition-colors cursor-default">
                {brand.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-bg-secondary py-8 md:py-12" id="ai-principles">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-12">Golden rules for business using AI</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-18">
            <div className="card bg-bg-surface-light border-border-accent">
              <span className="text-2xl mb-4 block">🛡️</span>
              <h3 className="text-lg font-semibold text-text-primary mb-3">AI Supports People</h3>
              <p className="text-text-secondary text-sm">AI should speed up work, but important decisions still need human review.</p>
            </div>
            <div className="card bg-bg-surface-light border-border-accent">
              <span className="text-2xl mb-4 block">🔒</span>
              <h3 className="text-lg font-semibold text-text-primary mb-3">Data Security First</h3>
              <p className="text-text-secondary text-sm">Do not put sensitive data into AI systems without clear controls and protection.</p>
            </div>
            <div className="card bg-bg-surface-light border-border-accent">
              <span className="text-2xl mb-4 block">🎯</span>
              <h3 className="text-lg font-semibold text-text-primary mb-3">Clear Business Goals</h3>
              <p className="text-text-secondary text-sm">Use AI only when it saves time, reduces costs, or improves performance.</p>
            </div>
          </div>

          {/* Process Steps */}
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-12">Our Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {aiProcessSteps.map((step) => (
              <div key={step.number} className="card">
                <span className="number-label text-lg">{step.number}</span>
                <h3 className="text-lg font-semibold text-text-primary mt-3 mb-5">{step.title}</h3>
                <ul className="space-y-3">
                  {step.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-accent-lime mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="ai-why-us" className="py-8 md:py-12">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {aiPrinciples.map((p) => (
              <div key={p.title} className="card">
                <span className="text-2xl mb-4 block">{p.icon}</span>
                <h3 className="text-lg font-semibold text-text-primary mb-3">{p.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg-secondary border-t border-border-default py-8 md:py-12" id="ai-cta">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-5">
            Ready to see what AI can do for your business?
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-3">
            Book a 30-minute discovery call. We&apos;ll identify the highest-impact AI use case
            for your operation and show you what a real deployment looks like.
          </p>
          <p className="text-text-muted text-sm mb-10">No commitment · Response within 24 hours · First call is free</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="btn-accent">Book a Free Discovery Call</Link>
          </div>
        </div>
      </section>
    </>
  );
}
