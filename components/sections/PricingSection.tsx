"use client";

import { motion } from "framer-motion";
import { CalendarDays, CalendarRange, Gauge, LockKeyhole, MapPin, Truck, Zap, type LucideIcon } from "lucide-react";
import CountUp from "@/components/ui/CountUp";
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
    <section id="pricing" className="bg-[var(--bg)] px-5 py-16 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge="Rates & conditions"
          title="Transparent numbers. No surprises."
          subtitle="Weekly hire, bond, delivery, and km policy — all in one place."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-[1.75rem] border border-[var(--border-strong)] bg-[var(--surface)]"
        >
          <ul className="divide-y divide-[var(--border)]">
            {/* the weekly price of each scooter, once, here; the cards below show the detail */}
            <li className="flex flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--sun-soft)] text-[var(--sun)]" aria-hidden>
                  <CalendarRange className="h-[18px] w-[18px]" strokeWidth={2} />
                </span>
                <span className="text-sm font-semibold text-[var(--fg)]">Weekly hire</span>
              </div>
              <div className="flex flex-wrap gap-2 sm:justify-end">
                {SCOOTERS.map((scooter) => (
                  <span key={scooter.id} className="inline-flex items-baseline gap-2 rounded-full bg-[var(--ink)] px-4 py-1.5 text-[var(--ink-fg)]">
                    <span className="text-xs font-semibold text-[var(--ink-muted)]">
                      {scooter.name} · {scooter.cc}cc
                    </span>
                    <span className="font-display text-lg font-extrabold text-[var(--sun-on-ink)]">
                      $<CountUp to={scooter.weeklyPrice} />
                    </span>
                  </span>
                ))}
              </div>
            </li>
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
