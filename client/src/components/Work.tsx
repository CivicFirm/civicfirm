/*
 * DESIGN: Homepage Portfolio Entry
 * Concise teaser that routes users to the standalone portfolio page.
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";

const featuredProjects = [
  { name: "Tucson Tots", sector: "Education", image: "/portfolio/tucsontots-hero.png", accent: "#ffc83c" },
  { name: "Kinship AI", sector: "Health & Research", image: "/portfolio/kinshipai-hero.png", accent: "#2dd4a8" },
  { name: "Visio", sector: "Community & Nonprofit", image: "/portfolio/visio-hero.png", accent: "#dc5050" },
];

export default function Work() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-20 md:py-28 bg-[oklch(0.12_0.03_155)]">
      <div className="container">
        <div ref={headRef} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-12">
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={headInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[oklch(0.72_0.12_75)]" />
              <span className="text-[oklch(0.78_0.14_75)] text-xs font-semibold uppercase tracking-[0.2em]">Portfolio</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 30 }} animate={headInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="font-[var(--font-display)] font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white leading-tight">
              Work that now has <span className="text-primary">its own space.</span>
            </motion.h2>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={headInView ? { opacity: 1 } : {}} transition={{ delay: 0.35 }} className="lg:col-span-5">
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6">
              Explore Civic Firm projects by category, including education, health and research, community media, and public-facing infrastructure.
            </p>
            <Link href="/portfolio">
              <a className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-colors">
                View Portfolio
              </a>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredProjects.map((project, index) => (
            <motion.div key={project.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.55, delay: index * 0.08 }} className="group overflow-hidden rounded-xl bg-[oklch(0.16_0.03_155)] border border-white/10">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[10px] uppercase tracking-[0.16em] font-bold mb-1" style={{ color: project.accent }}>{project.sector}</p>
                  <h3 className="font-[var(--font-display)] font-bold text-white text-xl tracking-tight">{project.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
