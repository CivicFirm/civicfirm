import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";

type ProjectCategory = "Community & Nonprofit" | "Education" | "Health & Research" | "Public Infrastructure";

type Project = {
  name: string;
  sector: string;
  descriptor: string;
  summary: string;
  image: string;
  url: string;
  accent: string;
  category: ProjectCategory;
  featured?: boolean;
};

const categories: ProjectCategory[] = [
  "Community & Nonprofit",
  "Education",
  "Health & Research",
  "Public Infrastructure",
];

const projects: Project[] = [
  {
    name: "Visio",
    sector: "Nonprofit & Community Media",
    descriptor: "Community media production hub",
    summary: "A multi-format media platform supporting public outreach, grant reporting, and community storytelling.",
    image: "/portfolio/visio-hero.png",
    url: "https://visio.ca",
    accent: "#dc5050",
    category: "Community & Nonprofit",
  },
  {
    name: "Tucson Tots",
    sector: "K–12 & Early Education",
    descriptor: "Family enrollment & outreach platform",
    summary: "A standards-compliant website for a licensed early learning institution — built to drive enrollment, communicate with families, and meet district accessibility requirements.",
    image: "/portfolio/tucsontots-hero.png",
    url: "https://tucsontots.com",
    accent: "#ffc83c",
    category: "Education",
    featured: true,
  },
  {
    name: "Kinship AI",
    sector: "Health Equity & AI Research",
    descriptor: "Indigenous-led health AI research hub",
    summary: "A research platform co-designing equitable AI-enabled healthcare systems through Indigenous-led, community-grounded participatory approaches and cross-cultural collaboration.",
    image: "/portfolio/kinshipai-hero.png",
    url: "https://kinshipai.org",
    accent: "#2dd4a8",
    category: "Health & Research",
    featured: true,
  },
  {
    name: "EagleFeather",
    sector: "Public Health & Wellness",
    descriptor: "National health resource directory",
    summary: "A searchable, WCAG-compliant health directory serving communities across all 13 provinces and territories.",
    image: "/portfolio/eaglefeather-hero.png",
    url: "https://eaglefeather.ca",
    accent: "#ffa03c",
    category: "Health & Research",
  },
  {
    name: "Research Circle",
    sector: "Research & Data Governance",
    descriptor: "Knowledge mobilization platform",
    summary: "Digital infrastructure for community-led research, data sovereignty, and accessible knowledge sharing.",
    image: "/portfolio/researchcircle-hero.png",
    url: "https://researchcircle.ca",
    accent: "#64a0ff",
    category: "Public Infrastructure",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative block overflow-hidden rounded-xl bg-[oklch(0.14_0.03_155)] ${project.featured ? "lg:col-span-2" : ""}`}
    >
      <div className={`relative w-full overflow-hidden ${project.featured ? "aspect-[16/9]" : "aspect-[16/10]"}`}>
        <img src={project.image} alt={`${project.name} — ${project.descriptor}`} className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-3 left-3 md:top-4 md:left-5">
          <span className="inline-block text-[10px] md:text-[11px] uppercase tracking-[0.14em] font-bold px-3 py-1.5 rounded-full bg-black/75 text-white border border-white/20 backdrop-blur-sm">
            {project.sector}
          </span>
        </div>
        <div className="absolute top-3 right-3 md:top-4 md:right-5 w-9 h-9 rounded-full border border-white/25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm bg-white/10">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>
      </div>

      <div className="bg-[oklch(0.14_0.03_155)] px-4 py-5 md:px-6 md:py-6">
        <p className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] font-semibold mb-1" style={{ color: project.accent }}>{project.descriptor}</p>
        <h3 className="font-[var(--font-display)] font-bold text-white tracking-tight leading-tight text-xl md:text-2xl">{project.name}</h3>
        <p className="text-white/62 leading-relaxed mt-2 text-sm md:text-[15px]">{project.summary}</p>
      </div>
      <div className="h-[3px] w-0 group-hover:w-full transition-all duration-500" style={{ background: project.accent }} />
    </motion.a>
  );
}

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>(categories[0]);
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-100px" });
  const filteredProjects = projects.filter((project) => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="relative bg-[oklch(0.14_0.04_155)] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border border-white/[0.03]" />
          <div className="absolute -bottom-60 -left-60 w-[800px] h-[800px] rounded-full border border-white/[0.03]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/[0.04] blur-3xl" />
        </div>
        <div className="container relative z-10 pt-32 pb-20 md:pt-44 md:pb-28" ref={heroRef}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-6">
            <Link href="/"><a className="text-white/45 text-xs uppercase tracking-[0.15em] hover:text-white/75 transition-colors inline-flex items-center gap-1.5"><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>Back to Home</a></Link>
          </motion.div>
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="flex items-center justify-center gap-3 mb-8">
              <div className="w-10 h-0.5 bg-[oklch(0.78_0.14_75)]" />
              <span className="text-[oklch(0.78_0.14_75)] text-xs font-semibold uppercase tracking-[0.25em]">Portfolio</span>
              <div className="w-10 h-0.5 bg-[oklch(0.78_0.14_75)]" />
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="font-[var(--font-display)] font-extrabold text-white leading-[1.08] tracking-tight mb-7" style={{ fontSize: "clamp(2.4rem, 5vw, 4.8rem)" }}>
              Work that <br className="hidden sm:block" /><span className="text-primary">speaks for itself.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }} className="text-white/72 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
              A focused portfolio of compliant, community-serving, and institution-ready digital projects.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="bg-background border-b border-border">
        <div className="container -mt-8 relative z-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 bg-background p-2 rounded-xl shadow-xl border border-border max-w-6xl mx-auto">
            {categories.map((category) => (
              <button key={category} onClick={() => setActiveCategory(category)} className={`px-4 py-4 rounded-lg text-xs font-bold uppercase tracking-[0.14em] transition-all ${activeCategory === category ? "bg-primary text-white shadow-md" : "bg-white dark:bg-[oklch(0.22_0.035_155)] text-foreground hover:bg-primary/10"}`}>
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background" ref={gridRef}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={gridInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4"><div className="w-8 h-0.5 bg-[oklch(0.72_0.12_75)]" /><span className="section-label">{activeCategory}</span></div>
              <h2 className="font-[var(--font-display)] font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground leading-tight">Selected project work.</h2>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">Use the category buttons above to move between portfolio areas while staying on one page.</p>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div key={activeCategory} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} transition={{ duration: 0.35 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredProjects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-border pt-8 gap-4">
            <p className="text-muted-foreground text-xs">All projects are built with accessibility, responsive design, and maintainability in mind.</p>
            <Link href="/contact"><a className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline underline-offset-4">Start a project<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></a></Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
