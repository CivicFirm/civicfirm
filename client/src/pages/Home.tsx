/*
 * DESIGN: Warm — Home Page
 * Hero → Marquee → Tabbed sections → Footer
 */
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import HomeTabs from "@/components/HomeTabs";
import Footer from "@/components/Footer";

const clientNames = [
  "Municipal Government",
  "K–12 Education",
  "Nonprofit",
  "Indigenous Organizations",
  "Small Business",
  "Arts & Culture",
  "Associations",
  "Public Health",
  "Local Enterprise",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Marquee items={clientNames} speed={35} />
      <HomeTabs />
      <Footer />
    </div>
  );
}
