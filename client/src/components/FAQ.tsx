/*
 * DESIGN: Kinetic Brutalism — FAQ Section (Procurement-Focused)
 * Accordion style. Theme-aware borders.
 * Questions target institutional decision-makers and project stakeholders.
 */
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const faqs = [
  {
    q: "How much does a website cost?",
    a: "Most of our projects range from $3,000 to $10,000 depending on the number of pages, features, and complexity. We provide a detailed, itemized quote before any work begins — no surprises.",
  },
  {
    q: "How long does it take to build a website?",
    a: "Most sites launch within 3–5 weeks from kickoff. Larger projects with custom features or e-commerce can take 6–8 weeks. We set a clear timeline upfront and stick to it.",
  },
  {
    q: "Will I be able to update my website myself?",
    a: "Yes. Every site we build comes with an easy-to-use content management system. We train you on how to update text, images, and pages — no coding required.",
  },
  {
    q: "Do you help with SEO and Google rankings?",
    a: "Absolutely. Every site is built with SEO best practices — fast loading, proper meta tags, mobile optimization, and clean code. We also set up Google Analytics and Google Business Profile integration.",
  },
  {
    q: "Can you build online booking or e-commerce?",
    a: "Yes. We integrate online booking systems, appointment scheduling, online ordering, and e-commerce depending on what your business needs. We'll recommend the best solution for your specific use case.",
  },
  {
    q: "I already have a website — can you redesign it?",
    a: "Yes. We handle full redesigns including content migration from your existing site. We'll move everything over, set up proper redirects, and make sure you don't lose any SEO value in the transition.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes. We offer monthly maintenance plans that cover security updates, performance monitoring, content updates, and technical support. Most clients stay on a plan to keep things running smoothly.",
  },
  {
    q: "What makes Civic Firm different from other agencies?",
    a: "We specialize in local service businesses — not big corporations. Every site is custom-designed (no templates), built to convert visitors into customers, and delivered on time by a team that actually picks up the phone.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="border-b border-border"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 md:py-6 text-left group"
      >
        <span className="font-[var(--font-display)] font-semibold text-sm sm:text-base md:text-lg text-foreground group-hover:text-primary transition-colors pr-4 md:pr-8">
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-6 h-6 flex items-center justify-center flex-shrink-0"
        >
          <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-muted-foreground text-sm leading-relaxed pb-5 md:pb-6 pr-8 md:pr-12">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 items-start">

          {/* Left: heading */}
          <div ref={headRef}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4 md:mb-6"
            >
              <div className="w-12 h-px bg-[oklch(0.72_0.12_75)]" />
              <span className="section-label">
                FAQs
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-[var(--font-display)] font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground leading-[1.1] mb-6"
            >
              Common questions<br />
              <span className="text-primary">from business owners.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-muted-foreground text-sm leading-relaxed"
            >
              Straight answers for business owners who want to know what they're getting.
            </motion.p>
          </div>

          {/* Right: accordion */}
          <div className="border-t border-border">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
