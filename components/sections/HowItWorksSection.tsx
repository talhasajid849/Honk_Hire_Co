"use client";

import { motion } from "framer-motion";
import { MessageCircle, Truck, Wallet, RotateCcw } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const STEPS = [
  {
    step: "01",
    title: "Tell us your dates",
    desc: "Reach out with your window, pickup preference, and scooter tier (50cc or 125cc).",
    Icon: MessageCircle,
  },
  {
    step: "02",
    title: "Collect or we deliver",
    desc: "Free pickup from Tewantin — or $40 delivery within 20km (further away is quoted individually).",
    Icon: Truck,
  },
  {
    step: "03",
    title: "Pay weekly + bond",
    desc: "Pay week 1 + bond upfront, then weekly as you go. Minimum 2 weeks. 500 km/week included; extra at $0.23/km.",
    Icon: Wallet,
  },
  {
    step: "04",
    title: "Ride & return",
    desc: "Enjoy Noosa to Caloundra. Return on time; we refund your bond minus any km extras.",
    Icon: RotateCcw,
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-[var(--ink)] px-5 py-16 text-[var(--ink-fg)] sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          tone="ink"
          align="left"
          badge="How it works"
          title="Four calm steps from enquiry to ride."
          subtitle="Built for travellers who want clarity, not a call centre maze."
        />

        <div className="mt-10 grid grid-cols-1 sm:mt-16 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((item, i) => {
            const StepIcon = item.Icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                className="relative flex flex-col overflow-hidden rounded-[1.75rem] border border-[var(--ink-border)] bg-[var(--ink-2)] p-7"
              >
                <span
                  aria-hidden
                  className="font-display pointer-events-none absolute -right-2 -top-4 text-[7.5rem] font-extrabold leading-none text-white/[0.05]"
                >
                  {item.step}
                </span>
                <div className="relative mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--sun)] text-[var(--sun-fg)]">
                  <StepIcon size={22} strokeWidth={2} />
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--sun-on-ink)]">
                  Step {item.step}
                </p>
                <h3 className="font-display mt-2 text-xl font-bold text-[var(--ink-fg)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)]">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
