/*
 * DESIGN: Institutional — Stats Section
 * Clean white background. Stats row with key metrics.
 * Replaces the old stats bar that was in the Hero section.
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "50+", label: "Institutional Clients" },
  { value: "100%", label: "On-Time Delivery" },
  { value: "WCAG 2.1 AA", label: "Compliant" },
  { value: "8", label: "Sectors Served" },
];

export default function Clients() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-12 md:py-16 border-b border-border bg-background">
      <div className="container" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-muted-foreground text-xs uppercase tracking-[0.25em] text-center mb-8"
        >
          Trusted by public organizations across North America
        </motion.p>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="flex flex-col items-center py-4 px-3 rounded-lg bg-secondary dark:bg-[oklch(0.22_0.035_155)] border border-border"
            >
              <span className="font-[var(--font-display)] font-bold text-lg md:text-2xl text-primary tracking-tight">
                {stat.value}
              </span>
              <span className="text-muted-foreground text-[10px] uppercase tracking-[0.15em] mt-1">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
