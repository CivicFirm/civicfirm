/*
 * DESIGN: Homepage Approach Teaser
 * Short entry point only. Full process and proposal detail lives on /rfp.
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const approachPoints = [
  {
    title: "Discovery",
    desc: "We clarify audience, content, compliance needs, and approval paths before design starts.",
  },
  {
    title: "Delivery",
    desc: "Work moves through clear milestones, review checkpoints, accessible builds, and launch QA.",
  },
  {
    title: "Support",
    desc: "Your team leaves with training, documentation, and a site built for long-term maintenance.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-16 md:py-20 bg-secondary dark:bg-[oklch(0.22_0.035_155)]">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-12 items-start"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[oklch(0.72_0.12_75)]" />
              <span className="section-label">Our Approach</span>
            </div>

            <h2 className="font-[var(--font-display)] font-bold text-3xl md:text-5xl tracking-tight text-foreground leading-tight mb-5">
              Structured enough for review. Flexible enough for real work.
            </h2>

            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8 max-w-xl">
              The homepage only needs the overview. The full delivery model, milestones, and proposal-ready detail live on the dedicated approach page.
            </p>

            <a
              href="/rfp"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-sm px-6 py-3 rounded-md hover:bg-[oklch(0.40_0.14_150)] transition-all"
            >
              View Our Approach
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="grid gap-4">
            {approachPoints.map((point, index) => (
              <div key={point.title} className="rounded-xl border border-border bg-background/80 p-6 shadow-sm">
                <div className="flex items-start gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary font-bold text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground tracking-tight mb-1">{point.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
