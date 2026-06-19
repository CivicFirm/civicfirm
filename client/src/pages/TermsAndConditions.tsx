import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', -apple-system, sans-serif" }}>
      <Navbar />
      <main className="container py-24 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: "#0f1f3d" }}>Terms & Conditions</h1>
        <p className="text-sm mb-10" style={{ color: "#888" }}>Last updated: June 2026</p>

        <div className="prose prose-sm max-w-none" style={{ color: "#333" }}>
          <Section title="1. Overview">
            These Terms & Conditions govern your use of the Civic Firm website (civicfirm.com) and any services provided by Civic Firm. By accessing this site, you agree to these terms.
          </Section>

          <Section title="2. Services">
            Civic Firm provides web design, development, and digital consulting services. All project work is governed by individual service agreements between Civic Firm and the client.
          </Section>

          <Section title="3. Intellectual Property">
            All content on this website — including text, graphics, logos, and design — is the property of Civic Firm unless otherwise stated. Client project deliverables are subject to the terms of individual service agreements.
          </Section>

          <Section title="4. Use of This Site">
            You may not use this website for any unlawful purpose or in any way that could damage, disable, or impair the site. You may not attempt to gain unauthorized access to any part of the site.
          </Section>

          <Section title="5. Limitation of Liability">
            Civic Firm provides this website and its content on an "as is" basis. We make no warranties, expressed or implied, regarding the accuracy or reliability of the information provided. Civic Firm is not liable for any damages arising from the use of this site.
          </Section>

          <Section title="6. External Links">
            This site may contain links to third-party websites. Civic Firm is not responsible for the content or practices of linked sites.
          </Section>

          <Section title="7. Changes to These Terms">
            We reserve the right to update these Terms & Conditions at any time. Continued use of the site constitutes acceptance of any changes.
          </Section>

          <Section title="8. Contact">
            For questions about these terms, contact us at <a href="mailto:info@civicfirm.com" className="text-[#337444] hover:underline">info@civicfirm.com</a>.
          </Section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-3" style={{ color: "#0f1f3d" }}>{title}</h2>
      <p className="text-sm leading-relaxed" style={{ color: "#555" }}>{children}</p>
    </div>
  );
}
