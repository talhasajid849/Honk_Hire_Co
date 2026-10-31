"use client";

import { motion } from "framer-motion";
import { CalendarDays, Gauge, LockKeyhole, MapPin, Truck, Zap, type LucideIcon } from "lucide-react";
import { PRICING_RULES, SCOOTERS } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";

// Each rule keeps its label and value from the shared list; only the icon is drawn here.
const RULE_ICONS: Record<string, LucideIcon> = {
  "Minimum hire": CalendarDays,
  "Security deposit": LockKeyhole,
  Delivery: Truck,
  "Free pickup": MapPin,
  "Included distance": Gauge,
  "Extra distance": Zap,
};

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-[var(--bg)] px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge="Rates & conditions"
          title="Transparent numbers. No surprises."
          subtitle="Weekly hire, bond, delivery, and km policy — all in one place."
        />

        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
          {SCOOTERS.map((scooter, i) => (
            <motion.div
              key={scooter.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="flex items-center justify-between rounded-[1.5rem] bg-[var(--ink)] px-6 py-5 text-[var(--ink-fg)] shadow-[var(--shadow-card)]"
            >
              <div>
                <p className="font-display text-lg font-bold">{scooter.name}</p>
                <p className="text-xs text-[var(--ink-muted)]">{scooter.cc}cc · weekly</p>
              </div>
              <p className="font-display text-4xl font-extrabold text-[var(--sun-on-ink)]">
                ${scooter.weeklyPrice}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-[1.75rem] border border-[var(--border-strong)] bg-[var(--surface)]"
        >
          <ul className="divide-y divide-[var(--border)]">
            {PRICING_RULES.map((rule) => (
              <li
                key={rule.label}
                className="flex items-start justify-between gap-4 px-6 py-4 sm:items-center"
              >
                <div className="flex items-start gap-3">
                  {(() => {
                    const RuleIcon = RULE_ICONS[rule.label];
                    return RuleIcon ? (
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--sun-soft)] text-[var(--sun)]" aria-hidden>
                        <RuleIcon className="h-[18px] w-[18px]" strokeWidth={2} />
                      </span>
                    ) : (
                      <span className="text-xl" aria-hidden>
                        {rule.icon}
                      </span>
                    );
                  })()}
                  <span className="text-sm font-semibold text-[var(--fg)]">{rule.label}</span>
                </div>
                <span className="text-right text-sm font-bold text-[var(--accent)]">
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
