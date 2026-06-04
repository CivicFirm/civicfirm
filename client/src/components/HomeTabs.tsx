/*
 * DESIGN: Tabbed Section — Mentee-style horizontal buttons
 * 4 tabs: Our Purpose, What We Do, Sectors We Serve, FAQs
 * Homepage focuses on offerings. Story page covers who we are.
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Purpose from "./Purpose";
import Services from "./Services";
import Sectors from "./Sectors";
import FAQ from "./FAQ";

const tabs = [
  { id: "purpose", label: "Our Purpose", bg: "bg-[oklch(0.97_0.012_80)]" },
  { id: "services", label: "What We Do", bg: "bg-background" },
  { id: "sectors", label: "Sectors We Serve", bg: "bg-secondary" },
  { id: "faq", label: "FAQs", bg: "bg-background" },
];

const tabContent: Record<string, React.ReactNode> = {
  purpose: <Purpose />,
  services: <Services />,
  sectors: <Sectors />,
  faq: <FAQ />,
};

export default function HomeTabs() {
  const [activeTab, setActiveTab] = useState("purpose");
  const activeTabData = tabs.find((t) => t.id === activeTab)!;

  return (
    <section>
      {/* Tab buttons — background matches active content */}
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
                    : "bg-background text-foreground border-border hover:border-primary/40 hover:shadow-sm"
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
          {tabContent[activeTab]}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
