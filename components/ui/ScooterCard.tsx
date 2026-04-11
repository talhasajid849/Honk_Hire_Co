"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Mail, X } from "lucide-react";
import { ScooterType } from "@/types";
import { mailtoHref } from "@/lib/contact/mailto";
import { quickScooterMessage } from "@/lib/contact/messages";

interface ScooterCardProps {
  scooter: ScooterType;
  index: number;
}

export default function ScooterCard({ scooter, index }: ScooterCardProps) {
  const enquire = mailtoHref({
    subject: `Enquiry: ${scooter.name}`,
    body: quickScooterMessage(scooter.name, scooter.cc),
  });

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      className="group relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-card)] transition-all duration-300 hover:border-[var(--accent)]/35"
    >
      <div
        className="absolute inset-x-0 top-0 h-1"
        style={{ background: scooter.color }}
      />

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
            <h3 className="font-display text-2xl font-semibold italic text-[var(--fg)]">
              {scooter.name}
            </h3>
            <p className="text-sm text-[var(--fg-muted)]">{scooter.cc}cc automatic</p>
          </div>
          <div className="text-right">
            <p className="font-display text-3xl font-semibold italic text-[var(--accent)]">
              ${scooter.weeklyPrice}
            </p>
            <p className="text-xs text-[var(--fg-subtle)]">per week</p>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <div
          className="mb-5 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold"
          style={{
            borderColor: `${scooter.color}55`,
            background: `${scooter.color}14`,
            color: scooter.color,
          }}
        >
          {scooter.licenceRequired}
        </div>

        <div className="mb-6 flex items-center gap-2 text-sm text-[var(--fg-muted)]">
          {scooter.passengerAllowed ? (
            <Check size={16} className="text-[var(--accent)]" />
          ) : (
            <X size={16} className="text-red-500/80" />
          )}
          <span>
            {scooter.passengerAllowed ? "Passenger allowed" : "Solo rider — no passengers"}
          </span>
        </div>

        <ul className="mb-8 space-y-3">
          {scooter.features.map((feat) => (
            <li key={feat} className="flex items-start gap-3 text-sm text-[var(--fg-muted)]">
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ background: scooter.color }}
              />
              {feat}
            </li>
          ))}
        </ul>

        <motion.a
          href={enquire}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--accent)] py-3.5 text-sm font-semibold text-[var(--accent-fg)] transition-colors hover:bg-[var(--accent-hover)]"
        >
          <Mail className="h-4 w-4" aria-hidden />
          Enquire by email
        </motion.a>
      </div>
    </motion.article>
  );
}
