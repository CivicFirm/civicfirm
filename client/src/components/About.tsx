/*
 * DESIGN: Homepage About Teaser
 * Concise entry point only. Full story lives on /about.
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/CU5JQUQHP3FutNoS5xA4np/hero-community-2_ceaeeeb0.jpg";

const links = [
  { label: "Mission", href: "/about" },
  { label: "Standards", href: "/about" },
  { label: "Vision", href: "/about" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-16 md:py-20 bg-background">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[260px] lg:min-h-full">
              <img
                src={ABOUT_IMG}
                alt="Civic Firm community-centered digital work"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[oklch(0.17_0.04_155)]/35" />
            </div>

            <div className="p-8 md:p-12 lg:p-14">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-0.5 bg-[oklch(0.72_0.12_75)]" />
                <span className="section-label">About Civic Firm</span>
              </div>

              <h2 className="font-[var(--font-display)] font-bold text-3xl md:text-5xl tracking-tight text-foreground leading-tight mb-5">
                Serious design. Honest <span className="text-primary">partnership.</span>
              </h2>

              <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl mb-8">
                We help public-facing organizations turn important work into clear, accessible, and trustworthy digital experiences. The full story, standards, and operating principles now live on the About page.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="/about"
                  className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-sm px-6 py-3 rounded-md hover:bg-[oklch(0.40_0.14_150)] transition-all"
                >
                  Read Our Story
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="/rfp"
                  className="inline-flex items-center gap-2 text-muted-foreground text-sm font-semibold hover:text-primary transition-colors"
                >
                  View Our Approach
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
