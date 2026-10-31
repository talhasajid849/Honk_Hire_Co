"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { MessageCircle, Truck, Wallet, RotateCcw } from "lucide-react";

const STEPS = [
  {
    label: "Dates",
    title: "Tell us your dates",
    desc: "Reach out with your window, pickup preference, and scooter tier (50cc or 125cc).",
    Icon: MessageCircle,
  },
  {
    label: "Pickup",
    title: "Collect or we deliver",
    desc: "Free pickup from Tewantin, or $40 delivery within 20km (further away is quoted individually).",
    Icon: Truck,
  },
  {
    label: "Pay",
    title: "Pay weekly + bond",
    desc: "Pay week 1 + bond upfront, then weekly as you go. Minimum 2 weeks. 500 km/week included; extra at $0.23/km.",
    Icon: Wallet,
  },
  {
    label: "Ride",
    title: "Ride & return",
    desc: "Enjoy Noosa to Caloundra. Return on time; we refund your bond minus any km extras.",
    Icon: RotateCcw,
  },
];

// Where the stops sit along the road, as a percentage of the scene width.
const START = 9;
const END = 91;
const stopAt = (i: number) => START + ((END - START) * i) / (STEPS.length - 1);

const HILLS =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='120' viewBox='0 0 800 120'%3E%3Cpath d='M0 120V70Q100 20 200 62T400 52T600 66T800 56V120Z' fill='%231b2150'/%3E%3C/svg%3E\")";
const HILLS_FAR =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1000' height='120' viewBox='0 0 1000 120'%3E%3Cpath d='M0 120V80Q120 30 260 70T520 60T760 78T1000 64V120Z' fill='%23151a40'/%3E%3C/svg%3E\")";

function Scooter({ spin }: { spin: ReturnType<typeof useTransform<number, number>> }) {
  return (
    <svg viewBox="0 -26 230 176" className="h-full w-full overflow-visible" aria-hidden>
      <ellipse cx="118" cy="137" rx="98" ry="6" fill="#000" opacity=".3" />
      {/* rider */}
      <path d="M64 56 L84 56 L104 14 L88 8 Z" fill="#f1eee7" />
      <path d="M70 58 L114 74 L132 98" fill="none" stroke="#5b6fe0" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M98 18 L150 38" stroke="#f1eee7" strokeWidth="8" strokeLinecap="round" />
      <circle cx="99" cy="0" r="12" fill="#ffe9a8" />
      <path d="M100 -2 h12 a12 12 0 0 1 -12 10 Z" fill="#0e1330" opacity=".75" />
      {/* body */}
      <path d="M18 100 C16 76 34 64 62 64 L110 64 C114 64 116 68 118 72 L122 100 Z" fill="#2b4bff" />
      <path d="M34 60 Q38 52 56 52 L110 52 Q116 52 116 60 L116 64 L34 64 Z" fill="#0e1330" />
      <rect x="114" y="94" width="42" height="8" rx="4" fill="#a3b2ff" />
      <path d="M152 102 L144 62 Q142 50 150 42 L162 42 L180 102 Z" fill="#2b4bff" />
      <path d="M166 46 L186 110" stroke="#0e1330" strokeWidth="6" strokeLinecap="round" />
      <path d="M164 104 Q184 86 206 100" fill="none" stroke="#2b4bff" strokeWidth="7" strokeLinecap="round" />
      <path d="M150 40 L168 35" stroke="#0e1330" strokeWidth="6" strokeLinecap="round" />
      <circle cx="173" cy="50" r="6" fill="#ffe9a8" />
      {/* wheels */}
      {[50, 186].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="112" r="22" fill="#0e1330" />
          <motion.g style={{ rotate: spin, transformBox: "fill-box", transformOrigin: "center" }}>
            <circle cx={cx} cy="112" r="11" fill="#c9d1ff" />
            <path d={`M${cx} 101v22M${cx - 11} 112h22M${cx - 7.8} 104.2l15.6 15.6M${cx + 7.8} 104.2l-15.6 15.6`} stroke="#0e1330" strokeWidth="2" />
          </motion.g>
          <circle cx={cx} cy="112" r="3" fill="#0e1330" />
        </g>
      ))}
    </svg>
  );
}

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });

  // The scooter rides from the first stop to the last while you scroll.
  const ride = useTransform(scrollYProgress, [0.04, 0.96], [START, END], { clamp: true });
  const left = useTransform(ride, (v) => `${v}%`);
  const spin = useTransform(scrollYProgress, [0, 1], [0, 3600]);
  const road = useTransform(scrollYProgress, [0, 1], ["0px", "-2400px"]);
  const hillsFar = useTransform(scrollYProgress, [0, 1], ["0px", "-300px"]);
  const hillsNear = useTransform(scrollYProgress, [0, 1], ["0px", "-700px"]);
  const bob = useTransform(scrollYProgress, (v) => Math.sin(v * 90) * 1.6);

  useMotionValueEvent(ride, "change", (v) => {
    const next = Math.min(STEPS.length - 1, Math.max(0, Math.round(((v - START) / (END - START)) * (STEPS.length - 1))));
    setActive((current) => (current === next ? current : next));
  });

  const step = STEPS[active];
  const StepIcon = step.Icon;

  return (
    <section id="how-it-works" className="relative bg-[var(--ink)] text-[var(--ink-fg)]">
      <div ref={sectionRef} className="relative h-[300vh] sm:h-[340vh]">
        <div className="sticky top-0 flex h-screen min-h-[600px] flex-col justify-center overflow-hidden px-5 pb-8 pt-24 lg:px-8">
          <div className="mx-auto w-full max-w-7xl">
            <div className="grid items-end gap-6 lg:grid-cols-[1fr_minmax(0,28rem)] lg:gap-16">
              <div>
                <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-[var(--sun-on-ink)]">
                  <span aria-hidden className="h-px w-8 bg-current opacity-60" />
                  How it works
                </p>
                <h2 className="font-display mt-3 text-3xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
                  Four calm steps from enquiry to ride.
                </h2>
              </div>

              <div className="min-h-[9.5rem] rounded-3xl border border-[var(--ink-border)] bg-[var(--ink-2)] p-5 sm:min-h-[10.5rem] sm:p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--sun)] text-[var(--sun-fg)]">
                        <StepIcon size={19} />
                      </span>
                      <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--sun-on-ink)]">
                        Step {active + 1} of {STEPS.length}
                      </span>
                    </div>
                    <h3 className="font-display mt-3 text-xl font-bold sm:text-2xl">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--ink-muted)]">{step.desc}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* The road scene */}
            <div className="relative mt-8 h-[15rem] overflow-hidden rounded-[1.75rem] border border-[var(--ink-border)] bg-gradient-to-b from-[#0b0f2e] to-[#1a2052] sm:mt-10 sm:h-[19rem]">
              <motion.div aria-hidden style={{ backgroundImage: HILLS_FAR, backgroundPositionX: hillsFar }} className="absolute inset-x-0 bottom-[34%] h-24 bg-repeat-x opacity-90 sm:h-32" />
              <motion.div aria-hidden style={{ backgroundImage: HILLS, backgroundPositionX: hillsNear }} className="absolute inset-x-0 bottom-[28%] h-20 bg-repeat-x sm:h-28" />

              {/* road */}
              <div aria-hidden className="absolute inset-x-0 bottom-0 h-[30%] bg-[#10142e]" />
              <motion.div
                aria-hidden
                style={{ backgroundPositionX: road }}
                className="absolute inset-x-0 bottom-[13%] h-1 bg-[repeating-linear-gradient(90deg,#ffe9a8_0_36px,transparent_36px_72px)]"
              />
              {/* the part of the road already ridden */}
              <motion.div aria-hidden style={{ width: left }} className="absolute bottom-[29.2%] left-0 h-[3px] bg-[var(--sun-on-ink)]" />

              {/* stops */}
              {STEPS.map((item, i) => {
                const Icon = item.Icon;
                const reached = i <= active;
                return (
                  <div key={item.label} className="absolute bottom-[30%] -translate-x-1/2" style={{ left: `${stopAt(i)}%` }}>
                    <div className="flex flex-col items-center">
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-full border-2 transition-all duration-500 sm:h-11 sm:w-11 ${
                          reached
                            ? "scale-110 border-[var(--sun-on-ink)] bg-[var(--sun)] text-[var(--sun-fg)] shadow-[0_0_0_6px_rgba(43,75,255,0.25)]"
                            : "border-white/20 bg-[var(--ink-2)] text-white/50"
                        }`}
                      >
                        <Icon size={16} />
                      </span>
                      <span className={`h-5 w-0.5 sm:h-7 ${reached ? "bg-[var(--sun-on-ink)]" : "bg-white/20"}`} />
                    </div>
                  </div>
                );
              })}
              {STEPS.map((item, i) => (
                <span
                  key={item.label}
                  className={`absolute bottom-[4%] -translate-x-1/2 text-[11px] font-bold uppercase tracking-[0.18em] transition-colors duration-500 sm:text-xs ${
                    i <= active ? "text-[var(--sun-on-ink)]" : "text-white/35"
                  }`}
                  style={{ left: `${stopAt(i)}%` }}
                >
                  {item.label}
                </span>
              ))}

              {/* scooter */}
              <motion.div aria-hidden style={{ left, y: bob }} className="absolute bottom-[19%] h-28 w-36 -translate-x-1/2 sm:h-40 sm:w-52">
                <Scooter spin={spin} />
              </motion.div>
            </div>

            <div className="mt-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2" aria-hidden>
                {STEPS.map((item, i) => (
                  <span
                    key={item.label}
                    className={`h-1.5 rounded-full transition-all duration-500 ${i === active ? "w-10 bg-[var(--sun-on-ink)]" : i < active ? "w-4 bg-[var(--sun-on-ink)]/60" : "w-4 bg-white/15"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
