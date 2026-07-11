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
    desc: "Free pickup from Tewantin — or $40 delivery anywhere on the Sunshine Coast.",
    Icon: Truck,
  },
  {
    step: "03",
    title: "Pay weekly + bond",
    desc: "Minimum 2 weeks. $300 refundable deposit. 500 km/week included; extra at $0.23/km.",
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
    <section id="how-it-works" className="bg-[var(--bg)] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge="How it works"
          title="Four calm steps from enquiry to ride."
          subtitle="Built for travellers who want clarity, not a call centre maze."
        />

        <div className="relative mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-[8%] right-[8%] top-9 hidden h-px bg-gradient-to-r from-transparent via-[var(--border-strong)] to-transparent lg:block" />

          {STEPS.map((item, i) => {
            const StepIcon = item.Icon;
            return (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              className="relative rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm"
            >
              <div className="relative z-10 mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]">
                <StepIcon size={24} strokeWidth={1.75} />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
                Step {item.step}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold italic text-[var(--fg)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">{item.desc}</p>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
