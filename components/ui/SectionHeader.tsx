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
  const words = title.split(" ");
  return (
    <div className={centre ? "text-center" : "text-left"}>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className={`mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] ${
          ink ? "text-[var(--sun-on-ink)]" : "text-[var(--accent)]"
        }`}
      >
        <span aria-hidden className="h-px w-8 bg-current opacity-60" />
        {badge}
      </motion.div>
      {/* each word slides up from behind its own line */}
      <h2
        className={`font-display text-4xl font-bold leading-[1.05] md:text-5xl lg:text-[3.4rem] ${
          ink ? "text-[var(--ink-fg)]" : "text-[var(--fg)]"
        }`}
      >
        {words.map((word, i) => (
          <span key={`${word}-${i}`}>
            <span className="inline-block overflow-hidden pb-[0.12em] align-bottom">
              <motion.span
                className="inline-block"
                initial={{ y: "110%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}
              </motion.span>
            </span>
            {i < words.length - 1 ? " " : ""}
          </span>
        ))}
      </h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className={`mt-5 max-w-xl text-lg ${centre ? "mx-auto" : ""} ${
            ink ? "text-[var(--ink-muted)]" : "text-[var(--fg-muted)]"
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
