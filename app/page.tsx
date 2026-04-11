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

export default function Home() {
  return (
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
  );
}
