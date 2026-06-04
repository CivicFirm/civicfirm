/*
 * Our Story page — tabbed layout matching homepage pattern.
 * 4 tabs: Who We Are, Our Mission, Our Process, Standards & Compliance
 * Story page focuses on the company. Homepage covers offerings.
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import MissionCTA from "@/components/MissionCTA";
import Process from "@/components/Process";
import Compliance from "@/components/Compliance";
import Footer from "@/components/Footer";

const tabs = [
  { id: "about", label: "Who We Are", bg: "bg-background" },
  { id: "mission", label: "Our Mission", bg: "bg-[oklch(0.18_0.04_155)]" },
  { id: "process", label: "Our Process", bg: "bg-secondary" },
  { id: "compliance", label: "Standards & Compliance", bg: "bg-[oklch(0.18_0.04_155)]" },
];

const tabContent: Record<string, React.ReactNode> = {
  about: <About />,
  mission: <MissionCTA />,
  process: <Process />,
  compliance: <Compliance />,
};

export default function StoryPage() {
  const [activeTab, setActiveTab] = useState("about");
  const activeTabData = tabs.find((t) => t.id === activeTab)!;
  const isDarkBg = activeTab === "mission" || activeTab === "compliance";

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
                    : isDarkBg
                      ? "bg-white/10 text-white/80 border-white/20 hover:border-white/40 hover:shadow-sm"
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

      <Footer />
    </div>
  );
}
