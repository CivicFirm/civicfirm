import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";

type TeamCategory = "Compliance & Delivery" | "Content & Research" | "Design & Development" | "Strategy & Leadership";

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  category: TeamCategory;
};

const categories: TeamCategory[] = [
  "Compliance & Delivery",
  "Content & Research",
  "Design & Development",
  "Strategy & Leadership",
];

const categoryDescriptions: Record<TeamCategory, string> = {
  "Compliance & Delivery": "The people who keep projects accountable, accessible, documented, and ready for institutional review.",
  "Content & Research": "The people who turn complex ideas, policy needs, and stakeholder priorities into clear digital structure.",
  "Design & Development": "The people who shape interfaces, build responsive systems, and make the experience work across every device.",
  "Strategy & Leadership": "The people who guide partnerships, project direction, and the long-term quality of the work.",
};

const team: TeamMember[] = [
  {
    name: "Mazen Cheikh",
    role: "Director of Compliance & Accessibility",
    bio: "Oversees WCAG 2.1 AA, ADA Title II, and Section 508 compliance across all projects. Conducts accessibility audits, remediation planning, and standards documentation.",
    image: "/images/team-mazen.png",
    category: "Compliance & Delivery",
  },
  {
    name: "Ray Amari, M.Mgt.",
    role: "Director of Operations & Delivery",
    bio: "Manages project timelines, budgets, and milestone delivery across all active engagements. Ensures every project ships on time, on scope, and within budget.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/CU5JQUQHP3FutNoS5xA4np/reza-amari_6e0b802d.png",
    category: "Compliance & Delivery",
  },
  {
    name: "Dr. Marisol Campos Navarrete",
    role: "Co-Founder & Director of Content Strategy",
    bio: "Leads content architecture, instructional design, and user-focused content strategy across all projects. Specializes in translating complex subject matter into clear, accessible digital experiences for public and institutional audiences.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/CU5JQUQHP3FutNoS5xA4np/marisol-navarrete_4717efd6.png",
    category: "Content & Research",
  },
  {
    name: "Brian Lee",
    role: "Lead Developer & Technical Architect",
    bio: "Builds and maintains the technical infrastructure behind every project. Specializes in full-stack development, performance optimization, and secure deployment for public-sector platforms.",
    image: "/images/team-brian.png",
    category: "Design & Development",
  },
  {
    name: "Kathrina Cabrera",
    role: "Lead UX Designer & Front-End Developer",
    bio: "Designs user interfaces and builds responsive front-end experiences. Translates wireframes into accessible, pixel-perfect code that meets WCAG standards across all devices.",
    image: "/images/team-kathrina.png",
    category: "Design & Development",
  },
  {
    name: "Dr. Jason Bruce",
    role: "Co-Founder & Chief Executive Officer",
    bio: "Leads all client strategy, institutional partnerships, and business development. Specialist in accessible digital transformation for public-sector organizations across North America.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/CU5JQUQHP3FutNoS5xA4np/jason-bruce_24906696.png",
    category: "Strategy & Leadership",
  },
];

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }} className="group bg-white dark:bg-[oklch(0.20_0.035_155)] border border-border rounded-xl overflow-hidden shadow-sm">
      <div className="relative aspect-square overflow-hidden bg-[oklch(0.14_0.04_155)]">
        <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top transition-all duration-700 md:grayscale md:group-hover:grayscale-0 md:group-hover:scale-105" loading="lazy" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[oklch(0.72_0.12_75)] md:scale-x-0 md:group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>
      <div className="p-5 md:p-6">
        <h3 className="font-[var(--font-display)] font-bold text-xl tracking-tight text-foreground">{member.name}</h3>
        <p className="text-primary text-xs font-semibold uppercase tracking-[0.12em] mt-1 mb-3">{member.role}</p>
        <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
        <button className="mt-5 text-primary text-sm font-semibold hover:underline underline-offset-4" type="button">Read More...</button>
      </div>
    </motion.div>
  );
}

export default function TeamPage() {
  const [activeCategory, setActiveCategory] = useState<TeamCategory>(categories[0]);
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const teamRef = useRef(null);
  const teamInView = useInView(teamRef, { once: true, margin: "-100px" });
  const filteredTeam = team.filter((member) => member.category === activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="relative bg-[oklch(0.14_0.04_155)] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border border-white/[0.03]" />
          <div className="absolute -bottom-60 -left-60 w-[800px] h-[800px] rounded-full border border-white/[0.03]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-primary/[0.04] blur-3xl" />
        </div>
        <div className="container relative z-10 pt-32 pb-20 md:pt-44 md:pb-28" ref={heroRef}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-6">
            <Link href="/"><a className="text-white/45 text-xs uppercase tracking-[0.15em] hover:text-white/75 transition-colors inline-flex items-center gap-1.5"><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>Back to Home</a></Link>
          </motion.div>
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="flex items-center justify-center gap-3 mb-8">
              <div className="w-10 h-0.5 bg-[oklch(0.78_0.14_75)]" />
              <span className="text-[oklch(0.78_0.14_75)] text-xs font-semibold uppercase tracking-[0.25em]">Our Team</span>
              <div className="w-10 h-0.5 bg-[oklch(0.78_0.14_75)]" />
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="font-[var(--font-display)] font-extrabold text-white leading-[1.08] tracking-tight mb-7" style={{ fontSize: "clamp(2.4rem, 5vw, 4.8rem)" }}>
              The people behind <br className="hidden sm:block" /><span className="text-primary">the work.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }} className="text-white/72 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
              A cross-functional team organized around strategy, content, design, compliance, and dependable delivery.
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

      <section className="py-20 md:py-28 bg-background" ref={teamRef}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={teamInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10 md:mb-14">
            <div>
              <div className="flex items-center gap-3 mb-4"><div className="w-8 h-0.5 bg-[oklch(0.72_0.12_75)]" /><span className="section-label">{activeCategory}</span></div>
              <h2 className="font-[var(--font-display)] font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground leading-tight">Focused expertise, shared standards.</h2>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">{categoryDescriptions[activeCategory]}</p>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div key={activeCategory} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} transition={{ duration: 0.35 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredTeam.map((member, index) => <TeamCard key={member.name} member={member} index={index} />)}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="py-16 bg-[oklch(0.14_0.04_155)]">
        <div className="container text-center max-w-3xl">
          <h2 className="font-[var(--font-display)] font-bold text-3xl md:text-4xl text-white tracking-tight mb-4">Need the right team for a serious project?</h2>
          <p className="text-white/65 text-sm md:text-base leading-relaxed mb-8">Tell us what you are building, who it needs to serve, and what standards it needs to meet.</p>
          <Link href="/contact"><a className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-colors">Connect With Us</a></Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
