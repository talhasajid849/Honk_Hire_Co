"use client";

import { motion } from "framer-motion";
import { PRICING_RULES, SCOOTERS } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";

export default function PricingSection() {
  return (
    <section id="pricing" className="border-y border-[var(--border)] bg-[var(--surface)] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge="Rates & conditions"
          title="Transparent numbers. No surprises."
          subtitle="Weekly hire, bond, delivery, and km policy — all in one place."
        />

        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
          {SCOOTERS.map((scooter, i) => (
            <motion.div
              key={scooter.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] px-5 py-4"
            >
              <div>
                <p className="text-sm font-semibold text-[var(--fg)]">{scooter.name}</p>
                <p className="text-xs text-[var(--fg-muted)]">{scooter.cc}cc · weekly</p>
              </div>
              <p className="font-display text-2xl font-semibold italic text-[var(--accent)]">
                ${scooter.weeklyPrice}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg)] shadow-inner"
        >
          <ul className="divide-y divide-[var(--border)]">
            {PRICING_RULES.map((rule) => (
              <li
                key={rule.label}
                className="flex items-start justify-between gap-4 px-6 py-4 sm:items-center"
              >
                <div className="flex items-start gap-3">
                  <span className="text-xl" aria-hidden>
                    {rule.icon}
                  </span>
                  <span className="text-sm font-medium text-[var(--fg)]">{rule.label}</span>
                </div>
                <span className="text-right text-sm font-semibold text-[var(--accent)]">
                  {rule.value}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-xl text-center text-sm text-[var(--fg-muted)]"
        >
          The <strong className="text-[var(--fg)]">$300</strong> bond is separate from your weekly hire
          and is refunded when the scooter returns in agreed condition, subject to any extra-km charges.
        </motion.p>
      </div>
    </section>
  );
}
