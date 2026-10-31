"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { whatsappHref } from "@/lib/contact/site";
import { defaultGreetingMessage } from "@/lib/contact/messages";

const WORDS = ["Car", "Ute", "Scooter"];

const CARDS = [
  { src: "/images/mg3-coastal.jpeg", alt: "MG3 hatchback, car hire", label: "Car · from $199/wk", short: "$199/wk", pos: "lg:right-[1%] lg:top-[0%] lg:h-[230px] lg:w-[310px]", tilt: -5, delay: "0s" },
  { src: "/images/amarok-exterior.jpeg", alt: "Volkswagen Amarok, ute hire", label: "Ute · $900/wk", short: "$900/wk", pos: "lg:right-[26%] lg:top-[56%] lg:h-[230px] lg:w-[320px]", tilt: 4, delay: "-2s" },
  { src: "/images/50cc-coastal.jpeg", alt: "Crox 50 scooter, scooter hire", label: "Scooter · from $150/wk", short: "$150/wk", pos: "lg:right-[3%] lg:top-[48%] lg:h-[290px] lg:w-[280px]", tilt: -3, delay: "-4s" },
];

const FACTS = [
  ["Pickup", "Tewantin"],
  ["Delivery", "$40 · 20km"],
  ["Included", "500 km / wk"],
  ["Bond", "$300"],
];

const BULLETS = [
  "Pickup from Tewantin",
  "Delivery available across the Sunshine Coast",
  "Short & long-term options",
  "International drivers welcome, subject to approval",
  "Business & delivery-driver options available",
];

// True when the visitor's device asks for less motion. False while rendering on the server.
function usePrefersReducedMotion() {
  return useSyncExternalStore(
    (notify) => {
      const query = window.matchMedia("(prefers-reduced-motion: reduce)");
      query.addEventListener("change", notify);
      return () => query.removeEventListener("change", notify);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const stage = useRef<HTMLDivElement>(null);

  // The first word rotates. People who ask their device for less motion see "Car, Ute & Scooter" instead.
  const still = usePrefersReducedMotion();
  useEffect(() => {
    if (still) return undefined;
    const timer = setInterval(() => setIndex((i) => (i + 1) % WORDS.length), 2600);
    return () => clearInterval(timer);
  }, [still]);

  // The floating photos lean a little toward the pointer (desktop only).
  useEffect(() => {
    const node = stage.current;
    if (!node || !window.matchMedia("(hover: hover) and (min-width: 1024px) and (prefers-reduced-motion: no-preference)").matches) {
      return undefined;
    }
    const onMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 24;
      const y = (event.clientY / window.innerHeight - 0.5) * 24;
      node.querySelectorAll<HTMLElement>("[data-float]").forEach((card, i) => {
        card.style.translate = `${x * (i + 1) * 0.4}px ${y * (i + 1) * 0.4}px`;
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };
  const chatHero = whatsappHref(defaultGreetingMessage());

  return (
    <section ref={stage} className="relative overflow-hidden bg-[var(--bg)] pt-24 text-[var(--fg)] lg:min-h-[920px] lg:pt-28">
      {/* big words drifting behind everything */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-28 select-none overflow-hidden text-[12rem] font-extrabold leading-[0.9] tracking-[-0.05em] lg:top-32 lg:text-[14.5rem]">
        <div className="kt-marquee text-transparent [-webkit-text-stroke:2px_var(--outline-word)]">
          CAR · UTE · SCOOTER · CAR · UTE · SCOOTER · CAR · UTE · SCOOTER · CAR · UTE · SCOOTER ·
        </div>
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-[26rem] hidden select-none overflow-hidden text-[14.5rem] font-extrabold leading-[0.9] tracking-[-0.05em] text-[var(--fill-word)] lg:block">
        <div className="kt-marquee kt-marquee-rev">
          SUNSHINE COAST · NOOSA TO CALOUNDRA · SUNSHINE COAST · NOOSA TO CALOUNDRA · SUNSHINE COAST · NOOSA TO CALOUNDRA ·
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-10 lg:px-8">
        <div className="max-w-[880px]">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full bg-[var(--fg)] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[var(--bg)]"
          >
            Sunshine Coast, QLD
          </motion.span>

          <h1 className="font-display mt-6 text-[2.9rem] font-extrabold leading-[1.02] sm:text-7xl lg:text-[5.3rem] lg:leading-[1]">
            <span className="sr-only">Car, Ute &amp; Scooter Hire Sunshine Coast</span>
            <span aria-hidden>
              {still ? (
                <span className="text-[var(--accent)]">Car, Ute &amp; Scooter</span>
              ) : (
                <span className="relative inline-block h-[1.05em] min-w-[3.6em] overflow-hidden align-bottom text-[var(--accent)]">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.span
                      key={WORDS[index]}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      exit={{ y: "-100%", opacity: 0 }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute left-0 top-0"
                    >
                      {WORDS[index]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              )}
              <br />
              Hire Sunshine Coast
            </span>
          </h1>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mt-6 max-w-xl text-xl font-bold leading-snug sm:text-2xl"
          >
            Affordable wheels. Flexible hire. Delivered across the Coast.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.5 }}
            className="mt-4 max-w-lg text-base leading-relaxed text-[var(--fg-muted)] md:text-lg"
          >
            Vehicle hire for travellers, workers, local businesses and longer stays — available across the Sunshine Coast, from{" "}
            <strong className="font-semibold text-[var(--fg)]">Noosa to Caloundra</strong>.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.5 }}
            className="mt-6 flex max-w-xl flex-wrap gap-2"
          >
            {BULLETS.map((line) => (
              <li key={line} className="rounded-full border border-[var(--border-strong)] bg-[var(--surface)]/70 px-3.5 py-1.5 text-[13px] font-medium text-[var(--fg-muted)]">
                {line}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34, duration: 0.5 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <motion.a
              href={chatHero}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-8 py-4 text-sm font-bold text-[var(--accent-fg)] shadow-[0_18px_36px_-14px_var(--accent)] transition-colors hover:bg-[var(--accent-hover)]"
            >
              <FaWhatsapp className="h-5 w-5" aria-hidden />
              Get a quote on WhatsApp
            </motion.a>
            <button
              type="button"
              onClick={() => scrollTo("#fleet")}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[var(--fg)] px-8 py-3.5 text-sm font-bold text-[var(--fg)] transition-colors hover:bg-[var(--fg)] hover:text-[var(--bg)]"
            >
              View fleet
              <ArrowDown className="h-4 w-4" aria-hidden />
            </button>
          </motion.div>
        </div>

        {/* photos: floating on large screens, a tidy row on small ones */}
        <div className="mt-10 grid grid-cols-3 gap-3 lg:static lg:mt-0 lg:block">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.src}
              data-float
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.7 }}
              className={`transition-[translate] duration-300 ease-out lg:absolute ${card.pos}`}
              style={{ ["--r" as string]: `${card.tilt}deg` }}
            >
              <div
                className="kt-bob relative aspect-[4/5] overflow-hidden rounded-[1.4rem] border-[5px] border-[var(--surface)] bg-[var(--surface)] shadow-[var(--shadow-card)] lg:aspect-auto lg:h-full lg:w-full lg:rounded-[1.75rem] lg:border-[6px]"
                style={{ ["--r" as string]: `${card.tilt}deg`, animationDelay: card.delay }}
              >
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 1024px) 33vw, 340px"
                  className="object-cover"
                  priority={i === 0}
                />
                <span className="absolute bottom-2 left-2 rounded-full bg-[var(--ink)] px-2.5 py-1 text-[11px] font-extrabold text-[var(--ink-fg)] lg:bottom-3 lg:left-3 lg:px-3.5 lg:py-1.5 lg:text-[13px]">
                  <span className="lg:hidden">{card.short}</span>
                  <span className="hidden lg:inline">{card.label}</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* the facts that matter, at a glance */}
        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="relative z-10 mt-10 flex flex-wrap gap-3 lg:mt-14"
        >
          {FACTS.map(([label, value]) => (
            <div key={label} className="rounded-[1.25rem] bg-[var(--surface)] px-5 py-3.5 shadow-[0_14px_30px_-18px_rgba(14,19,48,0.5)]">
              <dt className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[var(--accent)]">{label}</dt>
              <dd className="mt-0.5 text-xl font-extrabold tracking-tight">{value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
