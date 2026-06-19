/*
 * DESIGN: Warm — Results Section (Institutional Metrics)
 * Warm cream background with elegant dark text.
 * Numbers in forest green, labels in warm charcoal.
 * More refined than a solid green banner.
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const metrics = [
  { value: "WCAG 2.1 AA", label: "Every Build Compliant" },
  { value: "100%", label: "On-Time Delivery" },
  { value: "8", label: "Sectors Served" },
  { value: "15+", label: "Institutional Projects" },
];

export default function Results() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 md:py-20 bg-[oklch(0.97_0.012_80)] border-y border-[oklch(0.89_0.015_80)]">
      <div className="container" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`text-center ${
                i < metrics.length - 1 ? "md:border-r md:border-[oklch(0.85_0.015_80)]" : ""
              }`}
            >
              <div className="font-[var(--font-display)] font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl text-primary tracking-tight leading-tight">
                {metric.value}
              </div>
              <div className="text-muted-foreground text-xs uppercase tracking-[0.2em] mt-2" style={{ fontFamily: "var(--font-body)" }}>
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
