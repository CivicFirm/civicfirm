/*
 * DESIGN: Warm — Results Section (Institutional Metrics)
 * Warm cream background with elegant dark text.
 * Numbers in forest green, labels in warm charcoal.
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const metrics = [
  { value: "WCAG 2.1 AA", label: "Every Build Compliant" },
  { value: "100%", label: "On-Time Delivery" },
  { value: "12", label: "Sectors Served" },
  { value: "15+", label: "Institutional Projects" },
];

export default function Results() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 md:py-20 bg-[oklch(0.97_0.012_80)] border-y border-[oklch(0.89_0.015_80)]">
      <div className="container" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center flex flex-col items-center justify-center"
            >
              <div className="flex items-center justify-center w-full">
                {/* Left divider */}
                {i > 0 && (
                  <div className="hidden md:block w-px h-12 bg-[oklch(0.85_0.015_80)] flex-shrink-0" />
                )}
                <div className="flex-1 flex flex-col items-center justify-center px-4">
                  <div className="font-[var(--font-display)] font-bold text-lg sm:text-2xl md:text-3xl text-primary tracking-tight leading-tight">
                    {metric.value}
                  </div>
                  <div className="text-muted-foreground text-[10px] sm:text-xs uppercase tracking-[0.2em] mt-3" style={{ fontFamily: "var(--font-body)" }}>
                    {metric.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
