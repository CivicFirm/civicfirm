/*
 * DESIGN: Institutional — Navbar
 * Civic Firm branding. Clean horizontal nav.
 * Nav: Home, Our Story, Portfolio, Our Team.
 * Primary CTA: "Connect With Us" → contact page.
 * Transparent on hero, solid white on scroll.
 * Mobile: hamburger menu with full-screen overlay.
 */
import { useState, useEffect, useCallback } from "react";
// useEffect still needed for body overflow lock
import { Link, useLocation } from "wouter";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/story" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Our Team", href: "/team" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMenuOpen(false);
    e.preventDefault();
    setLocation(href);
    window.scrollTo(0, 0);
  }, [setLocation]);

  const navBg = "bg-[oklch(0.12_0.04_155)] border-b border-[oklch(0.20_0.03_155)]";

  const linkClass = "text-white/80 hover:text-white";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link href="/">
              <a className="flex items-center gap-2.5 flex-shrink-0">
                <img
                  src="/logo-dark.png"
                  alt="Civic Firm"
                  className="h-8 w-auto object-contain"
                  style={{ maxWidth: '200px' }}
                />
              </a>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${linkClass}`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="/contact"
                className="text-sm font-semibold px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-all shadow-sm"
              >
                Connect With Us
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 transition-colors text-white"
            >
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "w-5 rotate-45 translate-y-2" : "w-5"}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0 w-0" : "w-4"}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "w-5 -rotate-45 -translate-y-2" : "w-5"}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[oklch(0.12_0.04_155)] transition-all duration-300 flex flex-col ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-16 md:h-18" />
        <div className="flex flex-col flex-1 container py-8 gap-2">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-2xl font-bold py-3 border-b border-[oklch(0.24_0.03_155)] transition-all text-white"
              style={{ transitionDelay: menuOpen ? `${i * 40}ms` : "0ms" }}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-6 flex flex-col gap-3">
            <a
              href="/contact"
              className="w-full text-center py-3 rounded-md bg-primary text-white font-semibold text-base"
            >
              Connect With Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
