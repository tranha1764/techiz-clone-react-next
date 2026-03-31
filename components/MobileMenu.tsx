'use client';

import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { href: string; label: string }[];
  pathname: string;
}

export default function MobileMenu({ isOpen, onClose, navLinks, pathname }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden" id="mobile-menu">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div className="absolute top-0 right-0 h-full w-72 bg-bg-primary border-l border-border-default animate-slide-down p-6 flex flex-col">
        {/* Close button */}
        <button
          onClick={onClose}
          className="self-end w-9 h-9 rounded-full border border-border-default flex items-center justify-center text-text-secondary hover:text-text-primary transition-all mb-8"
          aria-label="Close menu"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Nav Links */}
        <nav className="flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`px-4 py-3 rounded-lg text-base font-medium transition-all
                  ${isActive
                    ? 'bg-bg-surface-light text-accent-lime'
                    : 'text-text-secondary hover:text-text-primary hover:bg-bg-surface'
                  }
                `}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="mt-auto pt-6">
          <Link
            href="/contact"
            onClick={onClose}
            className="btn-accent w-full justify-center text-sm"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
