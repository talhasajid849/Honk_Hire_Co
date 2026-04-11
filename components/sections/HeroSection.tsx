"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Mail } from "lucide-react";
import { SERVICE_AREA } from "@/lib/constants";
import { mailtoHref } from "@/lib/contact/mailto";
import { defaultGreetingMessage } from "@/lib/contact/messages";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const emailHero = mailtoHref({
    subject: "Scooter hire enquiry",
    body: defaultGreetingMessage(),
  });

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[var(--bg)] pt-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 70% 20%, var(--accent-soft), transparent 55%)",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl min-h-[calc(100svh-5rem)] grid-cols-1 items-center gap-12 px-5 py-12 lg:grid-cols-2 lg:gap-8 lg:px-6 lg:py-0">
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--fg-muted)] shadow-sm"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--accent)]" />
            Sunshine Coast, QLD
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.55 }}
            className="font-display mt-6 text-4xl font-semibold italic leading-[1.05] text-[var(--fg)] sm:text-5xl lg:text-[3.35rem] xl:text-6xl"
          >
            Honk Hire Co —{" "}
            <span className="not-italic text-[var(--accent)]">ride the Coast</span>{" "}
            your way.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.5 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-[var(--fg-muted)] md:text-lg"
          >
            Scooter rental for tourists and short stays from{" "}
            <strong className="font-medium text-[var(--fg)]">Noosa to Caloundra</strong>.
            50cc from <strong className="text-[var(--fg)]">$150/week</strong>, 125cc from{" "}
            <strong className="text-[var(--fg)]">$160/week</strong>. Minimum 2 weeks.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.5 }}
            className="mt-6 flex flex-col gap-2 text-sm text-[var(--fg-muted)]"
          >
            {[
              "Free pickup: Tewantin or Maroochydore",
              "$300 refundable security deposit",
              "Extra km: $0.23/km over 500 km/week",
            ].map((line) => (
              <li key={line} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--accent)]" />
                {line}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.5 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <motion.a
              href={emailHero}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-8 py-4 text-sm font-semibold text-[var(--accent-fg)] shadow-lg shadow-[var(--accent)]/30 transition-colors hover:bg-[var(--accent-hover)]"
            >
              <Mail className="h-5 w-5" aria-hidden />
              Email us
            </motion.a>
            <button
              type="button"
              onClick={() => scrollTo("#scooters")}
              className="inline-flex items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-8 py-4 text-sm font-semibold text-[var(--fg)] transition-colors hover:border-[var(--accent)]/40"
            >
              View fleet &amp; rates
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-10 overflow-hidden border-t border-[var(--border)] pt-8"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
              Along the strip
            </p>
            <div className="animate-marquee text-[var(--fg-subtle)]">
              {[...SERVICE_AREA, ...SERVICE_AREA].map((area, i) => (
                <span key={`${area}-${i}`} className="mx-4 text-sm font-medium">
                  {area}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 flex justify-center lg:order-2 lg:justify-end"
        >
          <div className="relative w-full max-w-lg">
            <div
              className="absolute -inset-4 rounded-[2.5rem] opacity-60 blur-2xl"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, var(--accent-soft), transparent 65%)",
              }}
            />
            <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-card)]">
              <div className="absolute inset-0 z-10 bg-[var(--hero-veil)] lg:bg-none lg:opacity-0" />
              <Image
                src="/images/honk-scooter-hero.png"
                alt="Honk Hire Co classic black scooter"
                width={900}
                height={1200}
                className="h-auto w-full object-cover object-center"
                priority
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-4 left-4 right-4 z-20 sm:left-auto sm:right-6 sm:w-[min(100%,280px)]"
            >
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/95 p-4 shadow-xl backdrop-blur-md">
                <p className="text-xs font-medium uppercase tracking-wider text-[var(--fg-subtle)]">
                  From
                </p>
                <p className="font-display text-3xl font-semibold italic text-[var(--accent)]">
                  $150<span className="text-lg not-italic">/week</span>
                </p>
                <p className="mt-1 text-xs text-[var(--fg-muted)]">50cc · min. 2 weeks · bond extra</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
