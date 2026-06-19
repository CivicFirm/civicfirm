/*
 * DESIGN: Institutional — Footer
 * Deep navy background. Clean 4-column grid.
 * Logo, tagline, compliance badges, nav links, contact, social.
 */
import { Link } from "wouter";
import { trackEvent } from "@/lib/analytics";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
    <footer className="bg-[oklch(0.18_0.04_155)] border-t border-[oklch(0.26_0.03_155)]" role="contentinfo">
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Logo + tagline */}
          <div className="md:col-span-4">
            <Link href="/">
              <a className="flex items-center gap-2.5 mb-4">
                <img
                  src="/logo-dark.png"
                  alt="Civic Firm — Return to homepage"
                  className="h-8 w-auto object-contain"
                  style={{ maxWidth: '200px' }}
                />
              </a>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-5">
              Custom websites for local businesses — fitness, wellness, construction, food, childcare, and more. Built to convert.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Custom Design", "SEO Optimized", "Mobile-First"].map((badge) => (
                <span key={badge} className="text-[9px] uppercase tracking-[0.12em] text-[#5cb85c] border border-[#5cb85c]/30 px-2 py-1 rounded">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div className="md:col-span-2">
            <h2 className="text-white text-xs uppercase tracking-[0.18em] font-semibold mb-4">
              Navigate
            </h2>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-3 list-none p-0 m-0">
                {[
                  { label: "Work", href: "/#work" },
                  { label: "Services", href: "/#services" },
                  { label: "Sectors", href: "/#sectors" },
                  { label: "Process", href: "/#process" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/60 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <Link href="/rfp">
                    <a className="text-[#5cb85c] text-sm hover:text-[#5cb85c]/80 transition-colors font-semibold mt-1">
                      Our Approach
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Sectors */}
          <div className="md:col-span-3">
            <h2 className="text-white text-xs uppercase tracking-[0.18em] font-semibold mb-4">
              Sectors
            </h2>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              {[
                "Fitness & Training",
                "Health & Wellness",
                "Construction & Trades",
                "Food & Restaurant",
                "Childcare & Education",
              ].map((sector) => (
                <li key={sector}>
                  <a
                    href="/#sectors"
                    className="text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {sector}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h2 className="text-white text-xs uppercase tracking-[0.18em] font-semibold mb-4">
              Contact
            </h2>
            <div className="flex flex-col gap-3">
              <a
                href="/contact"
                className="text-white/60 text-sm hover:text-white transition-colors"
              >
                Contact Us
              </a>
              <span className="text-white/60 text-sm">
                Remote-First, North America
              </span>
              <a
                href="/contact"
                onClick={() => trackEvent("cta_click", "Connect With Us", { location: "footer" })}
                className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-xs px-4 py-2.5 rounded-md hover:bg-[oklch(0.40_0.14_150)] transition-all mt-2 w-fit"
              >
                Connect With Us
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-12 pt-8 border-t border-[oklch(0.26_0.03_155)]">
          <span className="text-white/50 text-xs">
            &copy; {currentYear} Civic Firm. All rights reserved.
          </span>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="/privacy-policy" className="text-white/50 text-xs hover:text-white/80 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-and-conditions" className="text-white/50 text-xs hover:text-white/80 transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>

    {/* Developed by Mentee */}
    <div style={{ backgroundColor: "oklch(0.95 0.015 70)", borderTop: "1px solid oklch(0.88 0.02 70)" }}>
      <div className="container py-5 flex items-center justify-center gap-4">
        <span
          className="text-xs uppercase font-medium"
          style={{ letterSpacing: "0.25em", color: "oklch(0.45 0.04 40)" }}
        >
          Developed by
        </span>
        <a href="https://mentee.ca" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
          <img src="/images/mentee.png" alt="Mentee" className="h-8 w-auto" />
        </a>
      </div>
    </div>
    </>
  );
}
