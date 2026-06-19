import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', -apple-system, sans-serif" }}>
      <Navbar />
      <main className="container py-24 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: "#0f1f3d" }}>Privacy Policy</h1>
        <p className="text-sm mb-10" style={{ color: "#888" }}>Last updated: June 2026</p>

        <div className="prose prose-sm max-w-none" style={{ color: "#333" }}>
          <Section title="1. Information We Collect">
            We may collect personal information you voluntarily provide when you contact us, submit a form, or request a proposal. This may include your name, email address, phone number, organization name, and project details.
          </Section>

          <Section title="2. How We Use Your Information">
            We use the information we collect to respond to inquiries, prepare proposals, deliver services, and communicate about projects. We do not sell, rent, or share your personal information with third parties for marketing purposes.
          </Section>

          <Section title="3. Cookies & Analytics">
            Our website may use cookies and analytics tools to understand how visitors interact with our site. This data is anonymized and used solely to improve the user experience. You can disable cookies in your browser settings.
          </Section>

          <Section title="4. Data Security">
            We take reasonable measures to protect your personal information from unauthorized access, alteration, or destruction. However, no method of transmission over the internet is 100% secure.
          </Section>

          <Section title="5. Third-Party Services">
            Our site may contain links to third-party websites or use third-party services (such as form providers or analytics). We are not responsible for the privacy practices of these external services.
          </Section>

          <Section title="6. Your Rights">
            You may request access to, correction of, or deletion of your personal information at any time by contacting us at info@civicfirm.com.
          </Section>

          <Section title="7. Changes to This Policy">
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.
          </Section>

          <Section title="8. Contact">
            If you have questions about this Privacy Policy, please contact us at <a href="mailto:info@civicfirm.com" className="text-[#337444] hover:underline">info@civicfirm.com</a>.
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
