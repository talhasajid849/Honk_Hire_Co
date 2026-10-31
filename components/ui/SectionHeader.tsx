"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle?: string;
  /** Left-aligned (default is centred); "ink" is for dark sections. */
  align?: "center" | "left";
  tone?: "default" | "ink";
}

export default function SectionHeader({ badge, title, subtitle, align = "center", tone = "default" }: SectionHeaderProps) {
  const ink = tone === "ink";
  const centre = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55 }}
      className={centre ? "text-center" : "text-left"}
    >
      <div
        className={`mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] ${
          ink ? "text-[var(--sun-on-ink)]" : "text-[var(--accent)]"
        }`}
      >
        <span aria-hidden className="h-px w-8 bg-current opacity-60" />
        {badge}
      </div>
      <h2
        className={`font-display text-4xl font-bold leading-[1.05] md:text-5xl lg:text-[3.4rem] ${
          ink ? "text-[var(--ink-fg)]" : "text-[var(--fg)]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 max-w-xl text-lg ${centre ? "mx-auto" : ""} ${
            ink ? "text-[var(--ink-muted)]" : "text-[var(--fg-muted)]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
