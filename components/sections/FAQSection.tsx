import { FAQS } from "@/lib/constants";
import FAQItem from "@/components/ui/FAQItem";
import SectionHeader from "@/components/ui/SectionHeader";

export default function FAQSection() {
  return (
    <section id="faq" className="bg-[var(--bg)] px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          badge="FAQ"
          title="Straight answers."
          subtitle="Licences, passengers, bond, km, and pickup — covered."
        />

        <div className="mt-12 flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <FAQItem key={faq.question} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
