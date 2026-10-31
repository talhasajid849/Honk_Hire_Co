"use client";

import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { HiEnvelope, HiOutlineClock, HiOutlineShieldCheck } from "react-icons/hi2";
import { TbScooter } from "react-icons/tb";
import SectionHeader from "@/components/ui/SectionHeader";
import DeliveryQuoteRequest from "@/components/ui/DeliveryQuoteRequest";
import { defaultGreetingMessage } from "@/lib/contact/messages";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, FACEBOOK_URL, INSTAGRAM_URL, whatsappHref } from "@/lib/contact/site";

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

// Each button opens the WhatsApp chat with the matching message already typed.
const QUICK_CHATS = [
  { label: "Car hire", note: "from $199/wk", message: "Hi Honk Hire Co! I'd like to hire a car on the Sunshine Coast. What's available?" },
  { label: "Ute hire", note: "$900/wk", message: "Hi Honk Hire Co! I'd like to hire the ute on the Sunshine Coast. What's available?" },
  { label: "Scooter hire", note: "from $150/wk", message: "Hi Honk Hire Co! I'd like to hire a scooter on the Sunshine Coast. What's available?" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[var(--bg)] px-5 py-16 sm:py-24 lg:px-8 lg:py-32">
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-[var(--sun-soft)] blur-[110px]"
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
          subtitle="Message us on WhatsApp for availability and a quote, or reach out on Facebook and Instagram — we keep it fast, clear, and mobile-friendly."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid gap-8 sm:mt-16 lg:grid-cols-12 lg:gap-12"
        >
          {/* the chat comes first on phones: it is what most people came to do */}
          <motion.div variants={item} className="lg:order-2 lg:col-span-7">
            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-card)] md:p-10">
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#128c4a] text-white">
                  <FaWhatsapp className="h-8 w-8" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold text-[var(--fg)]">Chat with us on WhatsApp</h3>
                  <p className="mt-1 text-sm text-[var(--fg-muted)]">Ask about dates, prices or delivery. We reply to every message.</p>
                </div>
              </div>

              <a
                href={whatsappHref(defaultGreetingMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 flex w-full items-center justify-center gap-3 rounded-full bg-[#128c4a] px-6 py-4 text-base font-bold text-white shadow-lg shadow-black/15 transition-colors hover:bg-[#0f7a40]"
              >
                <FaWhatsapp className="h-6 w-6 shrink-0" aria-hidden />
                Start a WhatsApp chat
              </a>
              <p className="mt-3 text-center text-sm text-[var(--fg-muted)]">
                {CONTACT_PHONE_DISPLAY} · opens WhatsApp with your message already typed
              </p>

              <div className="mt-8 border-t border-[var(--border)] pt-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--fg-subtle)]">What are you after?</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {QUICK_CHATS.map((chat) => (
                    <a
                      key={chat.label}
                      href={whatsappHref(chat.message)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-3 rounded-2xl border border-[var(--border-strong)] bg-[var(--surface-elevated)] px-4 py-3.5 transition-colors hover:border-[var(--accent)] sm:flex-col sm:items-start sm:gap-1"
                    >
                      <span className="font-bold text-[var(--fg)]">{chat.label}</span>
                      <span className="text-sm font-semibold text-[var(--accent)]">{chat.note}</span>
                    </a>
                  ))}
                </div>
              </div>

              <DeliveryQuoteRequest className="mt-7" />
            </div>
          </motion.div>

          <motion.div variants={item} className="lg:order-1 lg:col-span-5">
            <div className="rounded-[2rem] bg-[var(--ink)] p-6 text-[var(--ink-fg)] shadow-[var(--shadow-card)] sm:p-8">
              <p className="font-display text-2xl font-bold leading-snug text-[var(--ink-fg)]">
                Bookings &amp; questions —{" "}
                <a className="block text-[1.15rem] text-[var(--sun-on-ink)] underline-offset-4 hover:underline sm:inline sm:text-2xl" href={`mailto:${CONTACT_EMAIL}`}>
                  {CONTACT_EMAIL}
                </a>
              </p>
              <ul className="mt-8 space-y-5">
                {[
                  {
                    Icon: HiEnvelope,
                    title: "WhatsApp enquiries",
                    text: "Message us your dates and the vehicle you like — we reply to every serious enquiry.",
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
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[var(--sun-on-ink)]">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="font-semibold text-[var(--ink-fg)]">{title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-[var(--ink-muted)]">{text}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-[var(--ink-border)] pt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ink-muted)]">Pickup & delivery</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)]">
                  Pickup from 10 Forest Ct, Tewantin QLD 4565, with delivery available across the Sunshine Coast for longer stays and convenience.
                </p>
                <div className="mt-4 overflow-hidden rounded-2xl border border-[var(--ink-border)]">
                  <iframe
                    title="Honk Hire Co Tewantin pickup location"
                    src="https://www.google.com/maps?q=10+Forest+Ct+Tewantin+QLD+4565&z=14&output=embed"
                    className="h-48 w-full sm:h-56"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              <div className="mt-8 border-t border-[var(--ink-border)] pt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ink-muted)]">Social</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--ink-border)] bg-white/5 px-4 py-2.5 text-sm font-medium text-[var(--ink-fg)] transition-colors hover:bg-white/10"
                  >
                    <FaFacebook className="h-4 w-4 text-[#1877F2]" aria-hidden />
                    Facebook
                  </a>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--ink-border)] bg-white/5 px-4 py-2.5 text-sm font-medium text-[var(--ink-fg)] transition-colors hover:bg-white/10"
                  >
                    <FaInstagram className="h-4 w-4 text-[#E4405F]" aria-hidden />
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
