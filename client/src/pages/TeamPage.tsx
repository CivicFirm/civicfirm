import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import { team, TeamCard } from "@/components/Team";
import Footer from "@/components/Footer";

const leadership = team.slice(0, 3);
const technical = team.slice(3);

const tabs = [
  { id: "leadership", label: "Leadership", bg: "bg-background" },
  { id: "technical", label: "Design & Development", bg: "bg-secondary" },
];

export default function TeamPage() {
  const [activeTab, setActiveTab] = useState("leadership");
  const activeTabData = tabs.find((t) => t.id === activeTab)!;
  const members = activeTab === "leadership" ? leadership : technical;

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
          <section className={`pt-10 pb-20 md:pt-12 md:pb-28 ${activeTabData.bg}`}>
            <div className="container">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
                {members.map((member, i) => (
                  <TeamCard key={member.name} member={member} index={i} />
                ))}
              </div>
            </div>
          </section>
        </motion.div>
      </AnimatePresence>

      <Footer />
    </div>
  );
}
