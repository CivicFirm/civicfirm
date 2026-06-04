/*
 * DESIGN: Hero — Full-bleed photo with directional gradient
 * Photo covers the entire section. A left-to-right gradient overlay
 * keeps the left side (where text lives) dark and readable, while
 * the right side lets the photo come through visibly.
 * Best of both worlds: atmosphere + readability.
 */
import { motion } from "framer-motion";

const HERO_IMAGE = "/images/hero-diverse.jpg";

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-center overflow-hidden">
      {/* Background photo — full bleed, visible */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />

      {/* Directional gradient: strong left → transparent right
          Left side is solid enough for text, right side shows the photo */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            to right,
            oklch(0.12 0.04 155 / 0.95) 0%,
            oklch(0.12 0.04 155 / 0.88) 30%,
            oklch(0.12 0.04 155 / 0.55) 60%,
            oklch(0.12 0.04 155 / 0.25) 80%,
            oklch(0.12 0.04 155 / 0.15) 100%
          )`,
        }}
      />

      {/* Subtle bottom gradient for scroll transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[oklch(0.12_0.04_155/0.6)] to-transparent" />

      {/* Content — left-aligned so it sits on the dark side */}
      <div className="container relative z-10 pt-28 pb-12 md:pt-32 md:pb-14">
        <div className="max-w-2xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-10 h-0.5 bg-[oklch(0.78_0.14_75)]" />
            <span className="text-[oklch(0.78_0.14_75)] text-xs font-semibold uppercase tracking-[0.25em]">
              Accessible Web Design for Organizations That Matter
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-[var(--font-display)] font-extrabold text-white leading-[1.05] tracking-tight mb-8"
            style={{ fontSize: "clamp(1.8rem, 4.5vw, 5rem)" }}
          >
            Built for organizations{" "}
            <span className="text-primary">that mean something</span> to their communities.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/85 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-xl font-light"
          >
            Accessible, compliant, and beautifully designed websites for governments, nonprofits, small businesses, and community organizations across North America.
          </motion.p>


        </div>
      </div>

      {/* Scroll indicator — centered, animated bounce */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="relative z-10 flex justify-center pb-6"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-6 h-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
