"use client";

import { motion } from "framer-motion";
import { MapPin, ShieldCheck, Sparkles } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const HIGHLIGHTS = [
  {
    title: "Noosa → Caloundra",
    body: "Hire built for the full Sunshine Coast strip — beaches, towns, and back roads at scooter pace.",
    icon: MapPin,
  },
  {
    title: "Clear, upfront rules",
    body: "Licence requirements, passenger policy, bond, and km allowance are spelled out before you ride.",
    icon: ShieldCheck,
  },
  {
    title: "Holiday-simple",
    body: "Automatic scooters, helmets sorted, and a booking flow that estimates your hire total in seconds.",
    icon: Sparkles,
  },
];

export default function CoastHighlightsSection() {
  return (
    <section className="border-y border-[var(--border)] bg-[var(--bg-alt)] py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge="Why Honk Hire Co"
          title="Coastal hire, without the fine print stress."
          subtitle="Tourists and backpackers — we keep the experience breezy and the terms honest."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {HIGHLIGHTS.map((item, i) => {
            const Icon = item.icon;
            return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              className="group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow-card)] transition-colors hover:border-[var(--accent)]/35"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]">
                <Icon size={22} strokeWidth={1.75} />
              </div>
              <h3 className="font-display text-xl font-semibold italic text-[var(--fg)]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--fg-muted)]">
                {item.body}
              </p>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
