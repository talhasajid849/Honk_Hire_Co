"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { HiEnvelope, HiOutlineClock, HiOutlineShieldCheck } from "react-icons/hi2";
import { TbScooter } from "react-icons/tb";
import SectionHeader from "@/components/ui/SectionHeader";
import { calculateBookingQuote } from "@/lib/booking/calculateQuote";
import type { ScooterTierId } from "@/lib/booking/pricingConfig";
import { SCOOTERS } from "@/lib/constants";
import { buildInquiryMessage } from "@/lib/contact/buildInquiryMessage";
import { mailtoHref } from "@/lib/contact/mailto";
import { CONTACT_EMAIL, FACEBOOK_URL, INSTAGRAM_URL } from "@/lib/contact/site";

interface PlannerState {
  scooter: ScooterTierId | "";
  weeks: string;
  wantsDelivery: boolean;
  notes: string;
}

const INITIAL: PlannerState = {
  scooter: "",
  weeks: "2",
  wantsDelivery: false,
  notes: "",
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ContactSection() {
  const [state, setState] = useState(INITIAL);

  const quote = useMemo(
    () =>
      calculateBookingQuote({
        scooterId: state.scooter,
        weeks: Number.parseInt(state.weeks, 10) || 0,
        wantsDelivery: state.wantsDelivery,
      }),
    [state.scooter, state.weeks, state.wantsDelivery]
  );

  const scooterLabel = useMemo(() => {
    const found = SCOOTERS.find((s) => s.id === state.scooter);
    return found ? `${found.name} (${found.cc}cc)` : "";
  }, [state.scooter]);

  const inquiryBody = useMemo(
    () =>
      buildInquiryMessage({
        scooterId: state.scooter,
        scooterLabel,
        weeks: Number.parseInt(state.weeks, 10) || 0,
        wantsDelivery: state.wantsDelivery,
        hireSubtotal: quote.hireSubtotal,
        deposit: quote.deposit,
        delivery: quote.delivery,
        totalFormatted: quote.estimatedTotal,
        notes: state.notes,
      }),
    [state, scooterLabel, quote]
  );

  const emailLink = useMemo(
    () =>
      mailtoHref({
        subject: "Scooter hire enquiry — Honk Hire Co",
        body: inquiryBody,
      }),
    [inquiryBody]
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setState((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[var(--bg-alt)] px-6 py-28">
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-[var(--accent-soft)] blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[var(--accent-soft)] blur-[90px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          badge="Contact"
          title="Let's get you on the road."
          subtitle="Email us for availability, or reach out on Facebook and Instagram — we keep it fast, clear, and mobile-friendly."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-12"
        >
          <motion.div variants={item} className="lg:col-span-5">
            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)]/80 p-8 shadow-[var(--shadow-card)] backdrop-blur-md">
              <p className="font-display text-2xl font-semibold italic leading-snug text-[var(--fg)]">
                Bookings &amp; questions —{" "}
                <a
                  className="text-[var(--accent)] underline-offset-4 hover:underline"
                  href={mailtoHref()}
                >
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
              <ul className="mt-8 space-y-5">
                {[
                  {
                    Icon: HiEnvelope,
                    title: "Email enquiries",
                    text: "Use the hire planner or your own email — we reply to every serious enquiry.",
                  },
                  {
                    Icon: TbScooter,
                    title: "Fleet & rates",
                    text: "50cc & 125cc, bond, km allowance — confirmed in writing before you ride.",
                  },
                  {
                    Icon: HiOutlineShieldCheck,
                    title: "Clear conditions",
                    text: "Licence rules, passengers, and delivery — no guesswork.",
                  },
                  {
                    Icon: HiOutlineClock,
                    title: "Coastal hours",
                    text: "We aim to reply quickly during daylight hours on the Sunshine Coast.",
                  },
                ].map(({ Icon, title, text }) => (
                  <li key={title} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="font-semibold text-[var(--fg)]">{title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-[var(--fg-muted)]">{text}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-[var(--border)] pt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--fg-subtle)]">
                  Social
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-2.5 text-sm font-medium text-[var(--fg)] transition-colors hover:border-[var(--accent)]/40 hover:bg-[var(--accent-soft)]"
                  >
                    <FaFacebook className="h-4 w-4 text-[#1877F2]" aria-hidden />
                    Facebook
                  </a>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-2.5 text-sm font-medium text-[var(--fg)] transition-colors hover:border-[var(--accent)]/40 hover:bg-[var(--accent-soft)]"
                  >
                    <FaInstagram className="h-4 w-4 text-[#E4405F]" aria-hidden />
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={item} className="lg:col-span-7">
            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-card)] md:p-10">
              <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[var(--border)] pb-6">
                <div>
                  <h3 className="font-display text-xl font-semibold italic text-[var(--fg)]">
                    Hire planner
                  </h3>
                  <p className="mt-1 text-sm text-[var(--fg-muted)]">
                    Adjust options — your email draft updates automatically.
                  </p>
                </div>
                <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                  Live preview
                </span>
              </div>

              <div className="mt-8 flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[var(--fg-muted)]">
                      Scooter
                    </span>
                    <select
                      name="scooter"
                      value={state.scooter}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-3 text-sm text-[var(--fg)] transition-shadow focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30"
                    >
                      <option value="">Select model</option>
                      <option value="50cc">Coastal 50 — $150/wk</option>
                      <option value="125cc">Classic 125 — $160/wk</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[var(--fg-muted)]">
                      Weeks (min. 2)
                    </span>
                    <input
                      name="weeks"
                      type="number"
                      min={1}
                      max={52}
                      value={state.weeks}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-3 text-sm text-[var(--fg)] transition-shadow focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30"
                    />
                  </label>
                </div>

                <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-3.5 transition-colors hover:border-[var(--accent)]/30">
                  <input
                    type="checkbox"
                    name="wantsDelivery"
                    checked={state.wantsDelivery}
                    onChange={handleChange}
                    className="mt-0.5 h-4 w-4 rounded border-[var(--border)] text-[var(--accent)] focus:ring-[var(--accent)]/40"
                  />
                  <span className="text-sm text-[var(--fg-muted)]">
                    Include <strong className="text-[var(--fg)]">$30</strong> Sunshine Coast delivery
                    (or use free pickup at Tewantin / Maroochydore).
                  </span>
                </label>

                <motion.div
                  layout
                  className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--fg-subtle)]">
                    Estimate
                  </p>
                  {!quote.valid ? (
                    <p className="mt-3 text-sm text-[var(--fg-muted)]">{quote.validationMessage}</p>
                  ) : (
                    <ul className="mt-3 space-y-2 text-sm text-[var(--fg-muted)]">
                      <li className="flex justify-between gap-4">
                        <span>
                          Hire ({quote.weeksBilled} wk × ${quote.weeklyRate})
                        </span>
                        <span className="font-medium tabular-nums text-[var(--fg)]">
                          ${quote.hireSubtotal.toLocaleString("en-AU")}
                        </span>
                      </li>
                      <li className="flex justify-between gap-4">
                        <span>Refundable bond</span>
                        <span className="font-medium tabular-nums text-[var(--fg)]">${quote.deposit}</span>
                      </li>
                      {quote.delivery > 0 && (
                        <li className="flex justify-between gap-4">
                          <span>Delivery</span>
                          <span className="font-medium tabular-nums text-[var(--fg)]">${quote.delivery}</span>
                        </li>
                      )}
                      <li className="mt-3 flex justify-between gap-4 border-t border-[var(--border)] pt-3 font-semibold text-[var(--fg)]">
                        <span>Typical upfront total</span>
                        <span className="font-display text-lg italic text-[var(--accent)]">
                          {quote.estimatedTotal}
                        </span>
                      </li>
                    </ul>
                  )}
                </motion.div>

                <label className="block">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[var(--fg-muted)]">
                    Anything else?
                  </span>
                  <textarea
                    name="notes"
                    value={state.notes}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Arrival dates, suburb, questions…"
                    className="w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-3 text-sm text-[var(--fg)] placeholder:text-[var(--fg-subtle)] transition-shadow focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30"
                  />
                </label>

                <motion.a
                  href={emailLink}
                  layout
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-[var(--accent)] px-6 py-4 text-base font-semibold text-[var(--accent-fg)] shadow-lg shadow-[var(--accent)]/25 transition-shadow hover:bg-[var(--accent-hover)] hover:shadow-xl hover:shadow-[var(--accent)]/30"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity group-hover:opacity-100" />
                  <HiEnvelope className="relative h-6 w-6 shrink-0" aria-hidden />
                  <span className="relative">Send enquiry by email</span>
                </motion.a>

                <p className="text-center text-xs text-[var(--fg-subtle)]">
                  Opens your email app with hire details pre-filled — edit before sending if you like.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
