/*
 * DESIGN: Homepage Contact Teaser
 * Compact CTA only. Full form and contact details live on /contact.
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-16 md:py-20 bg-background">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-2xl bg-[oklch(0.17_0.04_155)] px-8 py-12 md:px-12 md:py-16 text-center shadow-xl"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(84,142,92,0.32),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(212,176,86,0.22),transparent_30%)]" />
          <div className="relative mx-auto max-w-3xl">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-[oklch(0.72_0.12_75)]" />
              <span className="text-xs uppercase tracking-[0.18em] text-white/70 font-semibold">Start a Conversation</span>
              <div className="w-8 h-0.5 bg-[oklch(0.72_0.12_75)]" />
            </div>

            <h2 className="font-[var(--font-display)] font-bold text-3xl md:text-5xl tracking-tight text-white leading-tight mb-5">
              Let’s build something that matters.
            </h2>

            <p className="text-white/72 text-sm md:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
              The homepage can stay simple. If you are ready to talk through scope, timeline, compliance, or stakeholder needs, the full contact form is one click away.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[oklch(0.17_0.04_155)] font-semibold text-sm px-6 py-3 rounded-md hover:bg-[oklch(0.90_0.03_90)] transition-all"
            >
              Connect With Us
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
