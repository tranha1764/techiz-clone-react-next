import type { Capability } from '@/data/site-data';

interface CapabilityCardProps {
  capability: Capability;
}

export default function CapabilityCard({ capability }: CapabilityCardProps) {
  return (
    <div className="card group">
      <span className="text-2xl mb-3 block group-hover:scale-110 transition-transform duration-300">
        {capability.icon}
      </span>
      <h3 className="text-lg font-semibold text-text-primary mb-2">{capability.title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed">{capability.description}</p>
    </div>
  );
}
