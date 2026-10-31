"use client";

import { motion } from "framer-motion";
import { SERVICE_AREA } from "@/lib/constants";

export default function ServiceStripSection() {
  return (
    <section
      aria-label="Service area along the Sunshine Coast"
      className="bg-[var(--bg-alt)] px-5 py-14 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
          <div className="min-w-0">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-[var(--accent)]">
              <span aria-hidden className="h-px w-8 bg-current opacity-60" />
              Service corridor
            </p>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display mt-4 text-4xl font-extrabold leading-none text-[var(--fg)] sm:text-5xl md:text-7xl"
            >
              Noosa to Caloundra
            </motion.h2>
            <p className="mt-5 max-w-xl text-base text-[var(--fg-muted)]">
              Free pickup from <strong className="text-[var(--fg)]">Tewantin</strong>. Delivery within{" "}
              <strong className="text-[var(--fg)]">20km</strong>:{" "}
              <strong className="text-[var(--fg)]">$40</strong> — further away, we&apos;ll quote you.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3" aria-hidden>
            {["Noosa", "Maroochydore", "Caloundra"].map((chip, i) => (
              <div key={chip} className="flex items-center gap-3">
                <span className="rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--fg)]">
                  {chip}
                </span>
                {i < 2 && <span className="hidden h-px w-6 bg-[var(--border-strong)] sm:block" />}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 overflow-hidden sm:mt-12 border-y border-[var(--border-strong)] py-4">
          <div className="animate-marquee gap-6 text-[var(--fg-muted)]">
            {[...SERVICE_AREA, ...SERVICE_AREA].map((area, i) => (
              <span key={`${area}-${i}`} className="mx-4 text-sm font-semibold uppercase tracking-[0.18em]">
                {area}
                <span className="ml-8 text-[var(--sun)]" aria-hidden>
                  ✦
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
