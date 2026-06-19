/*
 * DESIGN: Kinetic Brutalism — Marquee Ticker
 * Horizontal scrolling text divider between sections.
 * Uppercase, spaced, muted color. Continuous loop.
 * Uses CSS animation for reliable mobile support.
 */

interface MarqueeProps {
  items: string[];
  speed?: number;
  separator?: string;
}

export default function Marquee({ items, speed = 30, separator = "\u2014" }: MarqueeProps) {
  const text = items.join(` ${separator} `) + ` ${separator} `;

  return (
    <div
      className="overflow-hidden border-y border-border py-5 bg-secondary"
      aria-hidden="true"
      role="presentation"
    >
      <div
        className="whitespace-nowrap inline-flex"
        style={{
          animation: `marquee-scroll ${speed}s linear infinite`,
        }}
      >
        <span className="text-sm md:text-base uppercase tracking-[0.25em] text-muted-foreground font-medium">
          {text}
        </span>
        <span className="text-sm md:text-base uppercase tracking-[0.25em] text-muted-foreground font-medium">
          {text}
        </span>
      </div>
    </div>
  );
}
