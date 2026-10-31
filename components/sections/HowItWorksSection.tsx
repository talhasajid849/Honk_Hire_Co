"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { MessageCircle, Truck, Wallet, RotateCcw } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const STEPS = [
  {
    step: "01",
    title: "Tell us your dates",
    desc: "Reach out with your window, pickup preference, and scooter tier (50cc or 125cc).",
    Icon: MessageCircle,
  },
  {
    step: "02",
    title: "Collect or we deliver",
    desc: "Free pickup from Tewantin — or $40 delivery within 20km (further away is quoted individually).",
    Icon: Truck,
  },
  {
    step: "03",
    title: "Pay weekly + bond",
    desc: "Pay week 1 + bond upfront, then weekly as you go. Minimum 2 weeks. 500 km/week included; extra at $0.23/km.",
    Icon: Wallet,
  },
  {
    step: "04",
    title: "Ride & return",
    desc: "Enjoy Noosa to Caloundra. Return on time; we refund your bond minus any km extras.",
    Icon: RotateCcw,
  },
];

export default function HowItWorksSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const inView = useInView(gridRef, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const [active, setActive] = useState(-1);

  // After the cards come in, light up each step in turn, then keep cycling gently.
  useEffect(() => {
    if (!inView || reduce) return;
    let i = 0;
    const first = setTimeout(() => setActive(0), 700);
    const timer = setInterval(() => {
      i = (i + 1) % STEPS.length;
      setActive(i);
    }, 2600);
    return () => {
      clearTimeout(first);
      clearInterval(timer);
    };
  }, [inView, reduce]);

  return (
    <section id="how-it-works" className="bg-[var(--ink)] px-5 py-16 text-[var(--ink-fg)] sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          tone="ink"
          align="left"
          badge="How it works"
          title="Four calm steps from enquiry to ride."
          subtitle="Built for travellers who want clarity, not a call centre maze."
        />

        <div ref={gridRef} className="mt-10 grid grid-cols-1 sm:mt-16 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((item, i) => {
            const StepIcon = item.Icon;
            const isActive = active === i;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                className={`relative flex flex-col rounded-[1.75rem] border bg-[var(--ink-2)] p-7 transition-[border-color,box-shadow,transform] duration-500 ${
                  isActive
                    ? "-translate-y-1.5 border-[var(--sun-on-ink)] shadow-[0_24px_60px_-24px_var(--sun)]"
                    : "border-[var(--ink-border)]"
                }`}
              >
                <span aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-[1.75rem]">
                  <span
                    className={`font-display absolute -right-2 -top-4 text-[7.5rem] font-extrabold leading-none transition-colors duration-500 ${
                      isActive ? "text-[var(--sun-on-ink)]/25" : "text-white/[0.05]"
                    }`}
                  >
                    {item.step}
                  </span>
                </span>
                {i < STEPS.length - 1 && (
                  <span aria-hidden className="absolute left-[5.25rem] top-[3.25rem] -right-5 z-10 hidden h-0.5 bg-white/10 lg:block">
                    <motion.span
                      initial={{ scaleX: 0 }}
                      animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                      transition={{ delay: 0.6 + i * 0.8, duration: 0.8, ease: "easeInOut" }}
                      className="block h-full origin-left bg-[var(--sun-on-ink)]"
                    />
                  </span>
                )}
                <div
                  className={`step-icon step-icon-${i} relative mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--sun)] text-[var(--sun-fg)] transition-transform duration-500 ${
                    isActive ? "scale-110" : ""
                  }`}
                >
                  {isActive && <span aria-hidden className="step-ring absolute inset-0 rounded-2xl border-2 border-[var(--sun-on-ink)]" />}
                  <StepIcon size={22} strokeWidth={2} className={isActive ? "step-glyph" : ""} />
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--sun-on-ink)]">
                  Step {item.step}
                </p>
                <h3 className="font-display mt-2 text-xl font-bold text-[var(--ink-fg)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)]">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
