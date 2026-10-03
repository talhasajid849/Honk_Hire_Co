import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  ShieldCheck,
  Zap,
  CalendarRange,
  BadgeCheck,
  Car,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FAQItem from "@/components/ui/FAQItem";
import { whatsappHref } from "@/lib/contact/site";
import type { FAQ } from "@/types";

const PAGE_URL = "https://honkhireco.com.au/ride-share-car-hire";
const TITLE = "Ride-Share & Delivery Car Hire Sunshine Coast | From $199/week | Honk Hire Co";
const DESCRIPTION =
  "Weekly car hire for Uber Eats, DoorDash and delivery drivers on the Sunshine Coast. Automatic MG3 from $199/week, 1,000km/week included. Pickup from Tewantin.";

const BOOKING_MESSAGE = [
  "Hi Honk Hire Co, I'd like to hire the MG3 for ride-share / delivery work.",
  "",
  "Platform(s) I drive for: ",
  "Start date: ",
  "Number of weeks: ",
  "Pickup from Tewantin or delivery (address): ",
  "Your name: ",
].join("\n");

export const metadata: Metadata = {
  metadataBase: new URL("https://honkhireco.com.au"),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/ride-share-car-hire" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Honk Hire Co",
    type: "website",
    locale: "en_AU",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const WHY = [
  { icon: BadgeCheck, title: "Approved for delivery work", desc: "Food and parcel delivery — Uber Eats, DoorDash, Menulog & similar." },
  { icon: ShieldCheck, title: "Clean & maintained", desc: "Professionally serviced and presented to a high standard every hire." },
  { icon: Zap, title: "On the road fast", desc: "Message us your dates — we reply quickly and get you driving." },
  { icon: CalendarRange, title: "Weekly terms", desc: "Simple weekly billing, 4-week minimum. Keep it as long as you need." },
];

const FEATURES = [
  "Automatic MG3 hatchback — 5 seats",
  "Fuel-efficient — approx. 6.5L/100km combined",
  "1,000km per week included",
  "Apple CarPlay & Android Auto for navigation",
  "Reverse camera & USB charging",
  "4-Star ANCAP safety rating (2025)",
];

const TERMS = [
  { label: "Rate", value: "$199/week" },
  { label: "Minimum hire", value: "4 weeks" },
  { label: "Bond", value: "$500 refundable" },
  { label: "Included km", value: "1,000km/week" },
  { label: "Excess km", value: "$0.30/km" },
  { label: "Extra driver", value: "$25/week" },
];

const FAQS: FAQ[] = [
  {
    question: "Which platforms can I use the car for?",
    answer:
      "The MG3 is approved for food and parcel delivery work such as Uber Eats, DoorDash and Menulog. Each passenger ride-share platform sets its own vehicle rules — tell us which platform you drive for and we'll confirm before you book.",
  },
  {
    question: "Do I need to tell you I'm using the car for work?",
    answer:
      "Yes. Delivery and ride-share work must be declared and approved before your hire starts — it's an insurance requirement. Just mention it when you enquire.",
  },
  {
    question: "How much does it cost?",
    answer:
      "$199/week with a 4-week minimum, plus a refundable $500 bond. 1,000km per week is included, then $0.30/km. Additional approved drivers are $25/week.",
  },
  {
    question: "Can you deliver the car?",
    answer:
      "Free pickup from our Tewantin base, or delivery from $80 within 20km. Further away is quoted individually.",
  },
  {
    question: "What do I need to hire?",
    answer:
      "A valid car licence. Minimum age and any additional conditions are confirmed before your hire is issued.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function RideShareCarHirePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
      />
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
          <div className="relative z-10 mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
            <div>
              <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-[var(--fg-subtle)]">
                <Link href="/" className="transition-colors hover:text-[var(--accent)]">Home</Link>
                <span>/</span>
                <span className="text-[var(--fg-muted)]">Ride-Share Car Hire</span>
              </nav>

              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--fg-muted)] shadow-sm">
                <Car className="h-3 w-3 text-[var(--accent)]" aria-hidden />
                Drive & earn · Sunshine Coast
              </div>

              <h1 className="font-display mt-5 text-4xl font-semibold italic leading-tight text-[var(--fg)] sm:text-5xl">
                Ride-Share &amp; Delivery Car Hire
              </h1>

              <p className="mt-5 text-lg leading-relaxed text-[var(--fg-muted)]">
                A fuel-efficient automatic MG3, ready for delivery work on the Sunshine Coast. From
                $199/week with 1,000km a week included.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Uber Eats", "DoorDash", "Menulog"].map((p) => (
                  <span
                    key={p}
                    className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--accent)]"
                  >
                    {p}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={whatsappHref(BOOKING_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-semibold text-[var(--accent-fg)] shadow-lg shadow-[var(--accent)]/25 transition-colors hover:bg-[var(--accent-hover)]"
                >
                  <CalendarCheck className="h-4 w-4" aria-hidden />
                  Book now
                </a>
                <Link
                  href="/mg3-hire"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-7 py-3.5 text-sm font-semibold text-[var(--fg)] transition-colors hover:border-[var(--accent)]/40"
                >
                  View the MG3
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--border)] shadow-lg">
              <Image
                src="/images/mg3-coastal.jpeg"
                alt="MG3 automatic hatchback — ride-share and delivery car hire, Sunshine Coast"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </section>

        {/* ── Why ── */}
        <section className="border-y border-[var(--border)] bg-[var(--bg-alt)] px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-5 inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--accent-soft)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Why Honk Hire Co
            </div>
            <h2 className="font-display text-3xl font-semibold italic text-[var(--fg)] sm:text-4xl">
              Built for drivers who earn
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {WHY.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-4 font-semibold text-[var(--fg)]">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Vehicle & terms ── */}
        <section className="bg-[var(--bg)] px-6 py-20">
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--accent-soft)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                The car
              </div>
              <h2 className="font-display text-3xl font-semibold italic text-[var(--fg)] sm:text-4xl">
                MG3 automatic hatchback
              </h2>
              <ul className="mt-8 space-y-3">
                {FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent)]" aria-hidden />
                    <span className="text-sm font-medium text-[var(--fg)]">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
              <h2 className="font-display text-xl font-semibold italic text-[var(--fg)]">Rates &amp; terms</h2>
              <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5">
                {TERMS.map((t) => (
                  <div key={t.label}>
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--fg-subtle)]">
                      {t.label}
                    </dt>
                    <dd className="font-display mt-1 text-xl font-semibold italic text-[var(--accent)]">{t.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 border-t border-[var(--border)] pt-5 text-sm leading-relaxed text-[var(--fg-muted)]">
                Delivery and ride-share work must be declared and approved before your hire starts. Free
                pickup from Tewantin, or delivery from $80 within 20km.
              </p>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-[var(--bg-alt)] px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <div className="mb-5 inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--accent-soft)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                FAQ
              </div>
              <h2 className="font-display text-3xl font-semibold italic text-[var(--fg)] sm:text-4xl">
                Common questions
              </h2>
            </div>
            <div className="mt-10 flex flex-col gap-3">
              {FAQS.map((faq, i) => (
                <FAQItem key={faq.question} faq={faq} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-[var(--bg)] px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-semibold italic text-[var(--fg)] sm:text-4xl">
              Ready to start earning?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[var(--fg-muted)]">
              Tell us which platform you drive for and your start date — we&apos;ll get back to you quickly.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={whatsappHref(BOOKING_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-8 py-4 text-sm font-semibold text-[var(--accent-fg)] shadow-lg shadow-[var(--accent)]/25 transition-colors hover:bg-[var(--accent-hover)]"
              >
                <CalendarCheck className="h-5 w-5" aria-hidden />
                Book now
              </a>
              <Link
                href="/not-at-fault-car-hire-sunshine-coast"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-8 py-4 text-sm font-semibold text-[var(--fg)] transition-colors hover:border-[var(--accent)]/40"
              >
                Had an accident?
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
