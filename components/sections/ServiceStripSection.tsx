"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SERVICE_AREA } from "@/lib/constants";

// A simple drawn map of the coast (not to scale): the route draws itself, the stops pop up in order,
// and a dot drives along it. Free pickup (Tewantin) is marked in the accent colour.
const ROUTE = "M170 150 C 260 250, 250 340, 330 420 S 430 560, 520 640 S 650 750, 720 820";
const STOPS = [
  { name: "Noosa", x: 170, y: 150, d: 0.8, tx: 196, ty: 145 },
  { name: "Tewantin", x: 262, y: 262, d: 1.5, tx: 288, ty: 258, note: "Free pickup", pickup: true },
  { name: "Coolum", x: 330, y: 420, d: 2.3, tx: 356, ty: 425 },
  { name: "Maroochydore", x: 430, y: 540, d: 3.0, tx: 456, ty: 545 },
  { name: "Mooloolaba", x: 520, y: 640, d: 3.6, tx: 546, ty: 645 },
  { name: "Caloundra", x: 720, y: 820, d: 4.2, tx: 540, ty: 862 },
];

export default function ServiceStripSection() {
  const mapRef = useRef<HTMLDivElement>(null);
  const inView = useInView(mapRef, { once: true, margin: "-120px" });

  return (
    <section aria-label="Service area along the Sunshine Coast" className="bg-[var(--bg-alt)] px-5 py-14 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_minmax(0,520px)] lg:gap-16">
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
              <strong className="text-[var(--fg)]">20km</strong>: <strong className="text-[var(--fg)]">$40</strong>— further away,
              we&apos;ll quote you.
            </p>

            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Areas we cover">
              {SERVICE_AREA.map((area) => (
                <li key={area} className="rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-3.5 py-1.5 text-[13px] font-semibold text-[var(--fg-muted)]">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div
            ref={mapRef}
            className={`map-card relative aspect-square w-full overflow-hidden rounded-[2rem] shadow-[var(--shadow-card)] ${inView ? "map-play" : ""}`}
          >
            <svg viewBox="0 0 900 900" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" role="img" aria-label="Map of the Sunshine Coast from Noosa to Caloundra, with Tewantin marked as the free pickup point">
              <defs>
                <linearGradient id="map-sea" x1="0" x2="1">
                  <stop offset="0" stopColor="#bfd8ee" />
                  <stop offset="1" stopColor="#8fb4e6" />
                </linearGradient>
              </defs>
              <rect width="900" height="900" fill="url(#map-sea)" />
              <g className="map-wave" opacity=".55" fill="none" stroke="#fff" strokeWidth="3">
                <path d="M520 120 q30 -14 60 0 t60 0 t60 0" />
                <path d="M600 300 q30 -14 60 0 t60 0 t60 0" />
                <path d="M640 520 q30 -14 60 0 t60 0 t60 0" />
                <path d="M700 700 q30 -14 60 0 t60 0" />
              </g>
              <path d="M0 0 H170 C260 120 290 200 300 280 C320 360 420 420 440 520 C470 620 560 700 600 800 C620 850 650 880 680 900 H0Z" fill="#f3efe0" />
              <path d="M0 0 H130 C220 130 250 210 262 290 C282 370 380 430 402 530 C432 630 520 710 560 810 C575 850 590 880 604 900 H0Z" fill="#dfe6d4" />
              <path className="map-route" d={ROUTE} fill="none" stroke="#2b4bff" strokeWidth="7" strokeLinecap="round" />
              {inView && (
                <circle r="13" fill="#0e1330" stroke="#fff" strokeWidth="4" className="map-dot">
                  <animateMotion dur="9s" begin="2s" repeatCount="indefinite" path={ROUTE} />
                </circle>
              )}
              <g fontFamily="var(--font-sans), system-ui, sans-serif" fontWeight={800} fontSize={22} fill="#0e1330">
                {STOPS.map((stop) => (
                  <g key={stop.name} className="map-pin" style={{ ["--d" as string]: `${stop.d}s` }}>
                    <circle cx={stop.x} cy={stop.y} r={stop.pickup ? 14 : 12} fill={stop.pickup ? "#ff6a3d" : "#2b4bff"} stroke="#fff" strokeWidth={4} />
                    {stop.pickup && <circle className="map-pulse" cx={stop.x} cy={stop.y} r={14} fill="#ff6a3d" opacity=".4" />}
                    <text x={stop.tx} y={stop.ty}>{stop.name}</text>
                    {stop.note && (
                      <text x={stop.tx} y={stop.ty + 24} fontSize={14} fontWeight={700} fill="#c8401a">
                        {stop.note}
                      </text>
                    )}
                  </g>
                ))}
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
