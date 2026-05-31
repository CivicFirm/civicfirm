/*
 * DESIGN: Homepage Team Entry
 * Concise teaser that routes users to the standalone team page.
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";

const teamGroups = [
  "Compliance & Delivery",
  "Content & Research",
  "Design & Development",
  "Strategy & Leadership",
];

const previewMembers = [
  {
    name: "Dr. Jason Bruce",
    role: "Strategy & Leadership",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/CU5JQUQHP3FutNoS5xA4np/jason-bruce_24906696.png",
  },
  {
    name: "Dr. Marisol Campos Navarrete",
    role: "Content & Research",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/CU5JQUQHP3FutNoS5xA4np/marisol-navarrete_4717efd6.png",
  },
  {
    name: "Kathrina Cabrera",
    role: "Design & Development",
    image: "/images/team-kathrina.png",
  },
  {
    name: "Mazen Cheikh",
    role: "Compliance & Delivery",
    image: "/images/team-mazen.png",
  },
];

export default function Team() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div ref={headRef} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-12">
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={headInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[oklch(0.72_0.12_75)]" />
              <span className="section-label">Our Team</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 30 }} animate={headInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="font-[var(--font-display)] font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground leading-tight">
              Four groups. <span className="text-primary">One delivery standard.</span>
            </motion.h2>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={headInView ? { opacity: 1 } : {}} transition={{ delay: 0.35 }} className="lg:col-span-5">
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
              Meet the people behind strategy, content, design, accessibility, and delivery on the standalone team page.
            </p>
            <Link href="/team">
              <a className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-colors">
                Meet the Team
              </a>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {teamGroups.map((group) => (
            <Link key={group} href="/team">
              <a className="rounded-xl border border-border bg-white dark:bg-[oklch(0.20_0.035_155)] p-5 hover:border-primary/50 hover:shadow-md transition-all">
                <p className="text-[10px] uppercase tracking-[0.18em] text-primary font-bold mb-2">Team Section</p>
                <h3 className="font-[var(--font-display)] font-bold text-lg text-foreground tracking-tight">{group}</h3>
              </a>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {previewMembers.map((member, index) => (
            <motion.div key={member.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.55, delay: index * 0.08 }} className="group">
              <div className="relative aspect-square overflow-hidden rounded-xl mb-3 bg-[oklch(0.14_0.04_155)]">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top transition-all duration-700 md:grayscale md:group-hover:grayscale-0 md:group-hover:scale-105" loading="lazy" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[oklch(0.72_0.12_75)]" />
              </div>
              <h4 className="font-[var(--font-display)] font-semibold text-foreground text-sm tracking-tight">{member.name}</h4>
              <p className="text-primary text-xs mt-0.5">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
