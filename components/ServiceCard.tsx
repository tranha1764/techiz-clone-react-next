import type { Service } from '@/data/site-data';

interface ServiceCardProps {
  service: Service;
  detailed?: boolean;
}

export default function ServiceCard({ service, detailed = false }: ServiceCardProps) {
  return (
    <div id={service.id} className="py-6 md:py-10 scroll-mt-24">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
        {/* Left: Number + Title + Tags */}
        <div className="lg:w-1/3 shrink-0">
          <span className="number-label">{service.number}</span>
          <h3 className="text-2xl md:text-3xl font-bold text-text-primary mt-3 mb-5">
            {service.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        {/* Right: Description + Features */}
        <div className="lg:w-2/3">
          <p className="text-text-secondary leading-relaxed mb-8">{service.description}</p>
          {detailed && (
            <ul className="space-y-4">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-text-secondary">
                  <span className="text-accent-lime mt-0.5">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="section-divider mt-6 md:mt-10" />
    </div>
  );
}
