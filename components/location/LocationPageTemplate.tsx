"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, MapPin, Mail, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { mailtoHref } from "@/lib/contact/mailto";
import { getLocation, locationPath, type LocationData } from "@/lib/locations";

const QUICK_FACTS = [
  { label: "From", value: "$150/week", sub: "50cc automatic" },
  { label: "Minimum", value: "2 weeks", sub: "hire period" },
  { label: "Bond", value: "$300", sub: "fully refundable" },
  { label: "Included", value: "500 km/week", sub: "$0.23/km over" },
];

interface Props {
  location: LocationData;
}

export function LocationPageTemplate({ location }: Props) {
  const emailHref = mailtoHref({
    subject: `Scooter hire enquiry — ${location.name}`,
    body: `Hi, I'm interested in hiring a scooter near ${location.name}. Please let me know about availability and pricing.`,
  });

  const nearbyPages = location.nearbyLocations
    .map((slug) => getLocation(slug))
    .filter((l): l is LocationData => l !== null);

  const howItWorksSteps =
    location.pickupType === "free"
      ? [
          {
            step: "01",
            title: "Email or WhatsApp us",
            desc: "Tell us your preferred dates, scooter choice, and any questions. We reply fast.",
          },
          {
            step: "02",
            title: "Free pickup at our base",
            desc: "Come to 10 Forest Ct, Tewantin QLD 4565. We go through the scooter together and you are on your way.",
          },
          {
            step: "03",
            title: "Ride & enjoy",
            desc: "500 km per week included. Drop off at the end of your hire, or extend on the go.",
          },
        ]
      : [
          {
            step: "01",
            title: "Email or WhatsApp us",
            desc: "Tell us your suburb, preferred dates, and scooter choice. We confirm availability quickly.",
          },
          {
            step: "02",
            title: "$40 delivery to you",
            desc: `We bring the scooter to your ${location.name} accommodation. You don't lift a finger.`,
          },
          {
            step: "03",
            title: "Ride & enjoy",
            desc: "500 km per week included. We collect at the end, or you can drop off at our Tewantin base for free.",
          },
        ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-[var(--bg)] px-6 pb-20 pt-24">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 60% 20%, var(--accent-soft), transparent 60%)",
            }}
            aria-hidden
          />
          <div className="relative z-10 mx-auto max-w-5xl">

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-[var(--fg-subtle)]">
              <Link href="/" className="transition-colors hover:text-[var(--accent)]">Home</Link>
              <span>/</span>
              <Link href="/scooter-hire-sunshine-coast" className="transition-colors hover:text-[var(--accent)]">
                Sunshine Coast
              </Link>
              {location.slug !== "sunshine-coast" && (
                <>
                  <span>/</span>
                  <span className="text-[var(--fg-muted)]">{location.name}</span>
                </>
              )}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--fg-muted)] shadow-sm"
            >
              <MapPin className="h-3 w-3 text-[var(--accent)]" aria-hidden />
              {location.name}, Sunshine Coast QLD
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.07, duration: 0.52 }}
              className="font-display mt-5 text-4xl font-semibold italic leading-tight text-[var(--fg)] sm:text-5xl lg:text-6xl"
            >
              {location.h1}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.48 }}
              className="mt-3 text-xl font-medium text-[var(--fg-muted)]"
            >
              {location.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.48 }}
              className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--fg-muted)]"
            >
              {location.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.44 }}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--accent-soft)] px-4 py-2 text-sm font-semibold text-[var(--accent)]"
            >
              <MapPin className="h-4 w-4" aria-hidden />
              {location.pickupLabel}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, duration: 0.44 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href={emailHref}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-semibold text-[var(--accent-fg)] shadow-lg shadow-[var(--accent)]/25 transition-colors hover:bg-[var(--accent-hover)]"
              >
                <Mail className="h-4 w-4" aria-hidden />
                Get a quote
              </a>
              <Link
                href="/#scooters"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-7 py-3.5 text-sm font-semibold text-[var(--fg)] transition-colors hover:border-[var(--accent)]/40"
              >
                View fleet &amp; rates
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── Quick facts strip ── */}
        <section className="border-y border-[var(--border)] bg-[var(--surface)] px-6 py-10">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-4">
            {QUICK_FACTS.map((fact) => (
              <div key={fact.label} className="text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--fg-subtle)]">
                  {fact.label}
                </p>
                <p className="font-display mt-1 text-2xl font-semibold italic text-[var(--accent)]">
                  {fact.value}
                </p>
                <p className="mt-0.5 text-xs text-[var(--fg-muted)]">{fact.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Highlights ── */}
        {location.highlights.length > 0 && (
          <section className="bg-[var(--bg)] px-6 py-20">
            <div className="mx-auto max-w-5xl">
              <div className="mb-5 inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--accent-soft)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                Explore
              </div>
              <h2 className="font-display text-3xl font-semibold italic text-[var(--fg)] sm:text-4xl">
                Why explore {location.name} by scooter?
              </h2>
              <p className="mt-3 max-w-xl text-[var(--fg-muted)]">
                A scooter gives you the freedom to stop where you want, park anywhere, and discover the
                side of {location.name} that most visitors miss.
              </p>
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {location.highlights.map((h) => (
                  <div
                    key={h.title}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-shadow hover:shadow-md"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-soft)]">
                      <CheckCircle2 className="h-5 w-5 text-[var(--accent)]" aria-hidden />
                    </div>
                    <h3 className="font-semibold text-[var(--fg)]">{h.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">{h.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── How it works ── */}
        <section className="bg-[var(--bg-alt)] px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-5 inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--accent-soft)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              How it works
            </div>
            <h2 className="font-display text-3xl font-semibold italic text-[var(--fg)] sm:text-4xl">
              Getting your scooter in {location.name}
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {howItWorksSteps.map((s) => (
                <div
                  key={s.step}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6"
                >
                  <p className="font-display text-4xl font-semibold italic text-[var(--accent)] opacity-40">
                    {s.step}
                  </p>
                  <h3 className="mt-3 font-semibold text-[var(--fg)]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Nearby locations ── */}
        <section className="bg-[var(--bg)] px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-5 inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--accent-soft)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Sunshine Coast
            </div>
            <h2 className="font-display text-3xl font-semibold italic text-[var(--fg)] sm:text-4xl">
              Explore more of the Coast
            </h2>
            <p className="mt-3 text-[var(--fg-muted)]">
              Your hire covers the full Sunshine Coast — ride to any of these areas on the same booking.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {nearbyPages.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={locationPath(nearby.slug)}
                  className="group flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4 transition-all hover:border-[var(--accent)]/40 hover:shadow-md"
                >
                  <div>
                    <p className="font-semibold text-[var(--fg)] transition-colors group-hover:text-[var(--accent)]">
                      {nearby.name}
                    </p>
                    <p className="mt-0.5 text-xs text-[var(--fg-subtle)]">
                      {nearby.pickupType === "free" ? "Free pickup available" : "$40 delivery"}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-[var(--fg-subtle)] transition-transform group-hover:translate-x-1 group-hover:text-[var(--accent)]" aria-hidden />
                </Link>
              ))}
            </div>
            {location.slug !== "sunshine-coast" && (
              <div className="mt-6">
                <Link
                  href="/scooter-hire-sunshine-coast"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:underline"
                >
                  View all Sunshine Coast locations
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-[var(--bg-alt)] px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--accent-soft)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Book now
            </div>
            <h2 className="font-display text-3xl font-semibold italic text-[var(--fg)] sm:text-4xl">
              Ready to explore {location.name}?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[var(--fg-muted)]">
              Email us with your dates and we will get back to you quickly. No booking fees, no forms —
              just a straight reply.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={emailHref}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-8 py-4 text-sm font-semibold text-[var(--accent-fg)] shadow-lg shadow-[var(--accent)]/25 transition-colors hover:bg-[var(--accent-hover)]"
              >
                <Mail className="h-5 w-5" aria-hidden />
                Get a quote
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-8 py-4 text-sm font-semibold text-[var(--fg)] transition-colors hover:border-[var(--accent)]/40"
              >
                Use the hire planner
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
