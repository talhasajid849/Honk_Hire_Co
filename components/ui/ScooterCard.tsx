"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { ScooterType } from "@/types";
import { whatsappHref } from "@/lib/contact/site";
import { quickScooterMessage } from "@/lib/contact/messages";

interface ScooterCardProps {
  scooter: ScooterType;
  index: number;
}

export default function ScooterCard({ scooter, index }: ScooterCardProps) {
  const enquire = whatsappHref(quickScooterMessage(scooter.name, scooter.cc));

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      className="group relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--bg-alt)]">
        {scooter.imageSrc ? (
          <Image
            src={scooter.imageSrc}
            alt={`${scooter.name} scooter`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-6xl">{scooter.image}</div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)]/90 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
          <div>
            <h3 className="font-display text-3xl font-bold text-[var(--fg)]">
              {scooter.name}
            </h3>
            <p className="text-sm text-[var(--fg-muted)]">{scooter.cc}cc automatic</p>
          </div>
          <div className="text-right">
            <p className="font-display text-4xl font-extrabold text-[var(--accent)]">
              ${scooter.weeklyPrice}
            </p>
            <p className="text-xs text-[var(--fg-subtle)]">per week</p>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/30 bg-[var(--accent-soft)] px-3 py-1.5 text-xs font-bold text-[var(--accent)]">
          {scooter.licenceRequired}
        </div>

        <div className="mb-6 flex items-center gap-2 text-sm text-[var(--fg-muted)]">
          {scooter.passengerAllowed ? (
            <Check size={16} className="text-[var(--accent)]" />
          ) : (
            <X size={16} className="text-red-500/80" />
          )}
          <span>
            {scooter.passengerAllowed
              ? "Passenger allowed only with full motorcycle licence"
              : "Solo rider — no passengers"}
          </span>
        </div>

        <ul className="mb-8 space-y-3">
          {scooter.features.map((feat) => (
            <li key={feat} className="flex items-start gap-3 text-sm text-[var(--fg-muted)]">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
              {feat}
            </li>
          ))}
        </ul>

        <motion.a
          href={enquire}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--ink)] py-4 text-sm font-bold text-[var(--ink-fg)] transition-colors hover:bg-[var(--ink-2)]"
        >
          <FaWhatsapp className="h-4 w-4" aria-hidden />
          Enquire on WhatsApp
        </motion.a>
      </div>
    </motion.article>
  );
}
