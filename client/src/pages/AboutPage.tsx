import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/CU5JQUQHP3FutNoS5xA4np/hero-community-2_ceaeeeb0.jpg";

type AboutPanel = {
  key: string;
  label: string;
  eyebrow: string;
  title: string;
  body: string[];
  stat: string;
  statLabel: string;
};

const panels: AboutPanel[] = [
  {
    key: "mission",
    label: "Mission",
    eyebrow: "Mission",
    title: "Building digital infrastructure worthy of the work behind it.",
    body: [
      "Civic Firm exists to help serious organizations present their work with the clarity, accessibility, and reliability their communities deserve. We partner with governments, nonprofits, schools, community organizations, and local enterprises that need a digital presence built for trust.",
      "Our role is to translate institutional priorities into websites, content systems, and public-facing experiences that are easy to understand, simple to maintain, and ready for stakeholder review.",
    ],
    stat: "50+",
    statLabel: "Projects delivered",
  },
  {
    key: "standards",
    label: "Standards",
    eyebrow: "Standards",
    title: "Transparent process, accessible delivery, and no loose ends.",
    body: [
      "Every engagement is structured around accountable delivery. We document requirements, set clear milestones, test against accessibility standards, and prepare teams to manage their platforms after launch.",
      "Whether the project moves through procurement, board review, or internal stakeholder approval, our process is designed to keep decision-makers aligned and confident from discovery through launch.",
    ],
    stat: "100%",
    statLabel: "On-time delivery focus",
  },
  {
    key: "vision",
    label: "Vision",
    eyebrow: "Vision",
    title: "A calmer, more capable web for organizations that matter.",
    body: [
      "We believe institutional websites should feel human, useful, and durable. They should help people find what they need, understand what an organization does, and take action without confusion.",
      "Our long-term vision is to make high-quality digital work more accessible to the organizations that serve communities every day, without unnecessary complexity or performative design.",
    ],
    stat: "12",
    statLabel: "Sectors served",
  },
];

export default function AboutPage() {
  const [activeKey, setActiveKey] = useState("mission");
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const contentRef = useRef(null);
  const contentInView = useInView(contentRef, { once: true, margin: "-100px" });
  const activePanel = panels.find((panel) => panel.key === activeKey) ?? panels[0];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="relative bg-[oklch(0.14_0.04_155)] overflow-hidden">
        <div className="absolute inset-0">
          <img src={ABOUT_IMG} alt="Civic Firm community-centered digital work" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.14_0.04_155)]/85 via-[oklch(0.14_0.04_155)]/92 to-[oklch(0.14_0.04_155)]" />
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border border-white/[0.05]" />
          <div className="absolute -bottom-60 -left-60 w-[800px] h-[800px] rounded-full border border-white/[0.04]" />
        </div>

        <div className="container relative z-10 pt-32 pb-20 md:pt-44 md:pb-28" ref={heroRef}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-6">
            <Link href="/">
              <a className="text-white/45 text-xs uppercase tracking-[0.15em] hover:text-white/75 transition-colors inline-flex items-center gap-1.5">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </a>
            </Link>
          </motion.div>

          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="flex items-center justify-center gap-3 mb-8">
              <div className="w-10 h-0.5 bg-[oklch(0.78_0.14_75)]" />
              <span className="text-[oklch(0.78_0.14_75)] text-xs font-semibold uppercase tracking-[0.25em]">About Civic Firm</span>
              <div className="w-10 h-0.5 bg-[oklch(0.78_0.14_75)]" />
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="font-[var(--font-display)] font-extrabold text-white leading-[1.08] tracking-tight mb-7" style={{ fontSize: "clamp(2.4rem, 5vw, 4.8rem)" }}>
              Serious design. <br className="hidden sm:block" />Honest <span className="text-primary">partnership.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }} className="text-white/72 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
              Civic Firm helps organizations turn important work into clear, accessible, and trustworthy digital experiences.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="bg-background border-b border-border">
        <div className="container -mt-8 relative z-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-background p-2 rounded-xl shadow-xl border border-border max-w-4xl mx-auto">
            {panels.map((panel) => (
              <button key={panel.key} onClick={() => setActiveKey(panel.key)} className={`px-5 py-4 rounded-lg text-xs font-bold uppercase tracking-[0.18em] transition-all ${activeKey === panel.key ? "bg-primary text-white shadow-md" : "bg-white dark:bg-[oklch(0.22_0.035_155)] text-foreground hover:bg-primary/10"}`}>
                {panel.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background" ref={contentRef}>
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div key={activePanel.key} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} transition={{ duration: 0.35 }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={contentInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-0.5 bg-[oklch(0.72_0.12_75)]" />
                  <span className="section-label">{activePanel.eyebrow}</span>
                </motion.div>
                <h2 className="font-[var(--font-display)] font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground leading-tight mb-6">
                  {activePanel.title}
                </h2>
                <div className="space-y-4">
                  {activePanel.body.map((paragraph) => (
                    <p key={paragraph} className="text-muted-foreground text-sm md:text-base leading-relaxed">{paragraph}</p>
                  ))}
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4 pt-8 border-t border-border max-w-md">
                  <div>
                    <div className="font-[var(--font-display)] font-bold text-3xl text-primary">{activePanel.stat}</div>
                    <div className="text-muted-foreground text-xs mt-1 uppercase tracking-[0.12em]">{activePanel.statLabel}</div>
                  </div>
                  <div>
                    <div className="font-[var(--font-display)] font-bold text-3xl text-primary">WCAG</div>
                    <div className="text-muted-foreground text-xs mt-1 uppercase tracking-[0.12em]">Accessibility-first builds</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[oklch(0.14_0.04_155)]">
                  <img src={ABOUT_IMG} alt="Civic Firm project planning and stakeholder work" className="w-full h-full object-cover opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[oklch(0.14_0.04_155)]/45 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 bg-white/95 dark:bg-[oklch(0.22_0.035_155)] rounded-lg p-5 shadow-xl">
                    <p className="text-xs uppercase tracking-[0.18em] text-primary font-bold mb-2">Built for review</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">Every page, milestone, and deliverable is shaped for clarity, accountability, and stakeholder confidence.</p>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-28 h-1 bg-[oklch(0.72_0.12_75)] rounded" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="py-16 bg-[oklch(0.14_0.04_155)]">
        <div className="container text-center max-w-3xl">
          <h2 className="font-[var(--font-display)] font-bold text-3xl md:text-4xl text-white tracking-tight mb-4">Ready to talk through the work?</h2>
          <p className="text-white/65 text-sm md:text-base leading-relaxed mb-8">Start with a conversation about your audience, goals, timeline, and the standards your organization needs to meet.</p>
          <Link href="/contact"><a className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-colors">Connect With Us</a></Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
