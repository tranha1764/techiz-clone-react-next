import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border-default bg-bg-secondary py-8 md:py-10" id="footer">
      <div className="container-custom">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-full bg-accent-lime flex items-center justify-center text-[#050811] font-bold text-base">
                P
              </div>
              <span className="font-bold text-text-primary text-base tracking-wide">
                OPEN<span className="text-text-muted text-xs ml-0.5">TECHIZ</span>
              </span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed">
              Scalable Platform & AI Engineering Partner. Building digital products that grow with your business.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-text-primary font-semibold text-sm mb-5 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3.5">
              <li>
                <Link href="/about" className="text-text-secondary text-sm hover:text-accent-lime transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-text-secondary text-sm hover:text-accent-lime transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-text-secondary text-sm hover:text-accent-lime transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-text-secondary text-sm hover:text-accent-lime transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-text-primary font-semibold text-sm mb-5 uppercase tracking-wider">Services</h4>
            <ul className="space-y-3.5">
              <li>
                <Link href="/services#ecommerce" className="text-text-secondary text-sm hover:text-accent-lime transition-colors">
                  Ecommerce Platforms
                </Link>
              </li>
              <li>
                <Link href="/services#product-engineering" className="text-text-secondary text-sm hover:text-accent-lime transition-colors">
                  Product Engineering
                </Link>
              </li>
              <li>
                <Link href="/services#ai-driven" className="text-text-secondary text-sm hover:text-accent-lime transition-colors">
                  AI-Driven Solutions
                </Link>
              </li>
              <li>
                <Link href="/ai-service" className="text-text-secondary text-sm hover:text-accent-lime transition-colors">
                  AI Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Technology */}
          <div>
            <h4 className="text-text-primary font-semibold text-sm mb-5 uppercase tracking-wider">Technology</h4>
            <ul className="space-y-3.5">
              <li>
                <Link href="/technology#frontend" className="text-text-secondary text-sm hover:text-accent-lime transition-colors">
                  Frontend & Mobile
                </Link>
              </li>
              <li>
                <Link href="/technology#backend" className="text-text-secondary text-sm hover:text-accent-lime transition-colors">
                  Backend & Cloud
                </Link>
              </li>
              <li>
                <Link href="/technology#applied-ai" className="text-text-secondary text-sm hover:text-accent-lime transition-colors">
                  Applied AI
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="section-divider mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-muted">
          <p>© 2026 Open Techiz. All rights reserved.</p>
          <p>Europe &nbsp;|&nbsp; Australia &nbsp;|&nbsp; US</p>
        </div>
      </div>
    </footer>
  );
}
