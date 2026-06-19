/*
 * Inline SVG logo — "CIVIC FIRM" with primary green for "FIRM" and the accent line.
 * Replaces PNG logos so the green matches the site's primary color exactly.
 */

interface LogoProps {
  variant: "light" | "dark";
  className?: string;
}

export default function Logo({ variant, className = "" }: LogoProps) {
  // "CIVIC" color: white on hero (dark variant), dark charcoal on scrolled (light variant)
  const civicColor = variant === "dark" ? "#ffffff" : "oklch(0.22 0.02 75)";
  // "FIRM" and accent line: always site primary green
  const firmColor = "oklch(0.30 0.12 150)";

  return (
    <svg
      viewBox="0 0 260 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`h-8 w-auto ${className}`}
      aria-label="Civic Firm"
      role="img"
    >
      {/* Accent line above */}
      <rect x="0" y="2" width="30" height="3" rx="1.5" fill={firmColor} />

      {/* CIVIC */}
      <text
        x="0"
        y="40"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="800"
        fontSize="36"
        letterSpacing="-0.5"
        fill={civicColor}
      >
        CIVIC
      </text>

      {/* FIRM */}
      <text
        x="135"
        y="40"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="400"
        fontSize="36"
        letterSpacing="-0.5"
        fill={firmColor}
      >
        FIRM
      </text>
    </svg>
  );
}
