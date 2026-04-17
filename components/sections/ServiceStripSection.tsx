"use client";

import { motion } from "framer-motion";
import { SERVICE_AREA } from "@/lib/constants";

export default function ServiceStripSection() {
  return (
    <section
      aria-label="Service area along the Sunshine Coast"
      className="border-y border-[var(--border)] bg-[var(--surface)] py-14 px-6"
    >
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">
          Service corridor
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display mt-3 text-3xl font-semibold italic text-[var(--fg)] md:text-4xl"
        >
          Noosa to Caloundra
        </motion.h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-[var(--fg-muted)]">
          Free pickup hubs in <strong className="text-[var(--fg)]">Tewantin</strong> or{" "}
          <strong className="text-[var(--fg)]">Maroochydore</strong>. Delivery elsewhere on
          the Coast: <strong className="text-[var(--fg)]">$40</strong>.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {["Noosa", "···", "Maroochydore", "···", "Caloundra"].map((chip, i) => (
            <span
              key={`${chip}-${i}`}
              className={`rounded-full px-4 py-1.5 text-sm ${
                chip === "···"
                  ? "text-[var(--fg-subtle)]"
                  : "border border-[var(--border)] bg-[var(--surface-elevated)] font-medium text-[var(--fg)]"
              }`}
            >
              {chip}
            </span>
          ))}
        </div>

        <div className="mt-8 overflow-hidden">
          <div className="animate-marquee gap-6 text-[var(--fg-subtle)]">
            {[...SERVICE_AREA, ...SERVICE_AREA].map((area, i) => (
              <span key={`${area}-${i}`} className="mx-3 text-xs font-medium uppercase tracking-wider">
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
