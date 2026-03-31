import Link from 'next/link';
import { contactInfo, contactSteps } from '@/data/site-data';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Us | Open Techiz Clone',
  description: 'Reach out to Open Techiz to start your next scalable digital platform project. Free consultation available.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="mb-6 relative" id="contact-hero">
        <div className="absolute top-1/3 left-1/2 w-96 h-96 glow-bg-blue opacity-30 pointer-events-none" />
        <div className="container-custom py-24 md:py-36 relative">
          <Link href="/" className="text-text-muted text-sm hover:text-text-primary transition-colors">Home</Link>
          <span className="text-text-muted text-sm mx-2">›</span>
          <span className="text-text-secondary text-sm">Contact</span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mt-10 mb-8">
            Let&apos;s build something<br />
            <span className="text-accent-lime">worth scaling.</span>
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-bg-secondary md:pt-6 md:pb-10" id="contact-content">
        <div className="container-custom pt-24 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24">
            {/* Form (wider) */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-10 lg:space-y-12">
              {/* Contact Info */}
              <div className="card">
                <h3 className="text-lg font-semibold text-text-primary mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-text-muted text-xs uppercase tracking-wider mb-1.5">Email</p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-accent-lime hover:text-accent-lime-hover text-sm transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-text-muted text-xs uppercase tracking-wider mb-1.5">Website</p>
                    <p className="text-text-primary text-sm">{contactInfo.website}</p>
                  </div>
                  <div>
                    <p className="text-text-muted text-xs uppercase tracking-wider mb-1.5">Markets Served</p>
                    <p className="text-text-primary text-sm">{contactInfo.markets}</p>
                  </div>
                  <div>
                    <p className="text-text-muted text-xs uppercase tracking-wider mb-1.5">Response Time</p>
                    <p className="text-text-primary text-sm">{contactInfo.responseTime}</p>
                  </div>
                </div>
              </div>

              {/* What happens next */}
              <div className="card">
                <h3 className="text-lg font-semibold text-text-primary mb-8">What happens next?</h3>
                <div className="space-y-6">
                  {contactSteps.map((step, index) => (
                    <div key={index} className="flex gap-5">
                      <div className="w-8 h-8 rounded-full bg-accent-lime/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-accent-lime text-xs font-bold">{index + 1}</span>
                      </div>
                      <p className="text-text-secondary text-sm leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
