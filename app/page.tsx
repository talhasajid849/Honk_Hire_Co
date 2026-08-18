import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServiceStripSection from "@/components/sections/ServiceStripSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import PricingSection from "@/components/sections/PricingSection";
import ScootersSection from "@/components/sections/ScootersSection";
import CoastHighlightsSection from "@/components/sections/CoastHighlightsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import { FAQS } from "@/lib/constants";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
      />
      <main className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
        <Navbar />
        <HeroSection />
        <ServiceStripSection />
        <HowItWorksSection />
        <PricingSection />
        <ScootersSection />
        <CoastHighlightsSection />
        <FAQSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
