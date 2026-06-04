import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import { projects, ProjectCard } from "@/components/Work";
import Footer from "@/components/Footer";

const institutional = projects.filter((p) =>
  ["Tucson Tots", "Visio", "EagleFeather"].includes(p.name)
);
const research = projects.filter((p) =>
  ["Kinship AI", "Research Circle"].includes(p.name)
);

const tabs = [
  { id: "institutional", label: "Institutional", bg: "bg-[oklch(0.12_0.03_155)]" },
  { id: "research", label: "Research & Innovation", bg: "bg-[oklch(0.12_0.03_155)]" },
];

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("institutional");
  const activeTabData = tabs.find((t) => t.id === activeTab)!;
  const filtered = activeTab === "institutional" ? institutional : research;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-20" />

      {/* Tab buttons */}
      <div className={`${activeTabData.bg} transition-colors duration-300`}>
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3 pt-8 pb-4 md:pt-10 md:pb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-md text-sm font-semibold transition-all duration-300 border ${
                  activeTab === tab.id
                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                    : "bg-white/10 text-white/80 border-white/20 hover:border-white/40 hover:shadow-sm"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <section className="pt-10 pb-20 md:pt-12 md:pb-28 bg-[oklch(0.12_0.03_155)]">
            <div className="container">
              <div className={`grid grid-cols-1 ${filtered.length >= 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"} gap-4`}>
                {filtered.map((project, i) => (
                  <ProjectCard key={project.name} project={project} index={i} />
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-[oklch(0.24_0.03_155)] pt-8 gap-4"
              >
                <p className="text-white/55 text-xs">
                  All projects built to WCAG 2.1 AA accessibility standards.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline underline-offset-4"
                >
                  Start a project
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </section>
        </motion.div>
      </AnimatePresence>

      <Footer />
    </div>
  );
}
