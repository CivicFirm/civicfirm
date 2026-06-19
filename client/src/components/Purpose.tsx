/*
 * DESIGN: Warm — Purpose Statement
 * Full-width warm cream section. Large centered serif text.
 * Key phrases highlighted in golden amber.
 * Inspired by Mentee's "Our Purpose" section.
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Purpose() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-[oklch(0.97_0.012_80)]">
      <div className="container" ref={ref}>
        <div className="max-w-4xl mx-auto text-center">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="w-8 h-0.5 bg-[oklch(0.72_0.12_75)]" />
            <span className="section-label">Our Purpose</span>
            <div className="w-8 h-0.5 bg-[oklch(0.72_0.12_75)]" />
          </motion.div>

          {/* Statement */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-[var(--font-display)] text-foreground leading-[1.4] tracking-tight"
            style={{ fontSize: "clamp(1.5rem, 3.2vw, 2.75rem)" }}
          >
            Too many great businesses are held back by{" "}
            <span className="text-[oklch(0.72_0.12_75)] italic">
              websites that don't do them justice
            </span>
            . We build the sites, brands, and digital strategies that help
            local businesses{" "}
            <span className="text-primary font-semibold">
              get found, build trust, and grow
            </span>{" "}
            — on their own terms.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
