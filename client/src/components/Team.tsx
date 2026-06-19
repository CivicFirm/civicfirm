/*
 * DESIGN: Institutional — Team Section
 * 2x2 grid with photo + text side by side.
 * Photos: grayscale on desktop until hover.
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const team = [
  {
    name: "Reza Amari, M.Mgt.",
    role: "Founder & Chief Executive Officer",
    bio: "Leads business strategy, client partnerships, and growth across all verticals. Specialist in building high-performing digital teams and delivering results for local businesses.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/CU5JQUQHP3FutNoS5xA4np/reza-amari_6e0b802d.png",
  },
  {
    name: "Brian Lee",
    role: "Lead Developer & Technical Architect",
    bio: "Builds and maintains the technical infrastructure behind every project. Specializes in full-stack development, performance optimization, and secure deployment for public-sector platforms.",
    image: "/images/team-brian.png",
  },
  {
    name: "Kathrina Cabrera",
    role: "Lead UX Designer & Front-End Developer",
    bio: "Designs user interfaces and builds responsive front-end experiences. Translates wireframes into accessible, pixel-perfect code that meets WCAG standards across all devices.",
    image: "/images/team-kathrina.png",
  },
];

export function TeamCard({ member, index }: { member: (typeof team)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col"
    >
      <div className="relative overflow-hidden aspect-[3/4] rounded-lg mb-4">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top transition-all duration-700 md:grayscale md:group-hover:grayscale-0 md:group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[oklch(0.72_0.12_75)] md:scale-x-0 md:group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>
      <h4 className="font-[var(--font-display)] font-semibold text-foreground text-sm md:text-base tracking-tight">
        {member.name}
      </h4>
      <p className="text-primary text-xs font-medium mt-0.5 mb-2">
        {member.role}
      </p>
      <p className="text-muted-foreground text-xs leading-relaxed">
        {member.bio}
      </p>
    </motion.div>
  );
}

export default function Team() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-100px" });

  return (
    <section id="team" className="pb-6 md:pb-8 bg-background">
      <div className="container">
        {/* Header */}
        <div ref={headRef} className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-8 h-0.5 bg-[oklch(0.72_0.12_75)]" />
              <span className="section-label">Our Team</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-[var(--font-display)] font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground"
            >
              Meet some of{" "}
              <span className="text-primary">our team.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={headInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="mt-4 md:mt-0 max-w-xs"
          >
            <p className="text-muted-foreground text-sm leading-relaxed">
              Strategy, design, development, and delivery — backed by a broader network of specialists.
            </p>
          </motion.div>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
