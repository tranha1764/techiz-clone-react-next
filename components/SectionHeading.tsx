import Link from 'next/link';

interface SectionHeadingProps {
  label?: string;
  title: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function SectionHeading({ label, title, ctaText, ctaHref }: SectionHeadingProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 md:mb-20">
      <div>
        {label && (
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-0.5 bg-accent-lime" />
            <span className="text-accent-lime text-xs font-semibold uppercase tracking-widest">
              {label}
            </span>
          </div>
        )}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
          {title}
        </h2>
      </div>
      {ctaText && ctaHref && (
        <Link href={ctaHref} className="btn-outline text-sm shrink-0">
          {ctaText}
        </Link>
      )}
    </div>
  );
}
