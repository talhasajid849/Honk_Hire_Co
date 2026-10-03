import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Car,
  ShieldCheck,
  Phone,
  MessageSquare,
  Clock,
  UserCheck,
  MapPin,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EligibilityChecker from "@/components/sections/EligibilityChecker";
import FAQItem from "@/components/ui/FAQItem";
import { whatsappHref } from "@/lib/contact/site";
import type { FAQ } from "@/types";

const PAGE_URL = "https://honkhireco.com.au/not-at-fault-car-hire-sunshine-coast";
const TITLE = "Not-at-Fault Car Hire Sunshine Coast | Replacement Car | Honk Hire Co";
const DESCRIPTION =
  "Been hit by another driver on the Sunshine Coast? You may be eligible for a not-at-fault replacement car. Check your eligibility in 30 seconds. Local team based in Tewantin.";

const ENQUIRY_MESSAGE = [
  "Hi Honk Hire Co, I've been in a not-at-fault accident and need a replacement car.",
  "",
  "Date of accident: ",
  "Other driver's name & rego: ",
  "Other driver's insurer (and claim number if known): ",
  "My location: ",
  "Your name: ",
].join("\n");

export const metadata: Metadata = {
  metadataBase: new URL("https://honkhireco.com.au"),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/not-at-fault-car-hire-sunshine-coast" },
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

const STEPS = [
  {
    icon: ClipboardCheck,
    title: "Check your eligibility",
    desc: "Answer three quick questions below. No claim number needed to get started.",
  },
  {
    icon: Car,
    title: "We arrange your car",
    desc: "Our team confirms your details and organises pickup from Tewantin or delivery to you.",
  },
  {
    icon: ShieldCheck,
    title: "We deal with the insurer",
    desc: "We seek recovery of the hire costs from the at-fault driver's insurer. You cover fuel, tolls and parking.",
  },
];

const REQUIREMENTS = [
  "You were not at fault — another driver caused the accident",
  "You have the other driver's details (name, phone and registration)",
  "You have the other party's insurer details",
];

const WHY_LOCAL = [
  { icon: MapPin, title: "Sunshine Coast local", desc: "Based in Tewantin, serving Noosa to Caloundra." },
  { icon: Phone, title: "Talk to a real person", desc: "Call or WhatsApp us directly — no call centres or hold queues." },
  { icon: UserCheck, title: "One point of contact", desc: "The same person looks after your hire from start to finish." },
  { icon: Clock, title: "Fast turnaround", desc: "We move quickly once your details are confirmed." },
];

const FAQS: FAQ[] = [
  {
    question: "What does \"not at fault\" mean?",
    answer:
      "It means another driver caused the accident — for example, they ran into the back of you, failed to give way, or ran a red light. If fault is unclear or disputed, check anyway and we'll talk it through with you.",
  },
  {
    question: "What details do I need?",
    answer:
      "The other driver's name, phone number and vehicle registration, plus the name of their insurance company. A claim number helps but isn't required to get started. Photos of the scene and any police report number are also useful.",
  },
  {
    question: "What if I don't have the other driver's insurer details?",
    answer:
      "The other driver can usually tell you who they're insured with. Without the insurer details we can't arrange a not-at-fault replacement car, but message us — we may be able to help with a standard hire in the meantime.",
  },
  {
    question: "What if I caused the accident?",
    answer:
      "You may not be eligible for a not-at-fault replacement car. Our standard car hire is still available — see the MG3 car hire page or get in touch to discuss your options.",
  },
  {
    question: "What do I pay for during the hire?",
    answer:
      "You're responsible for fuel, tolls, parking and any fines while the car is in your care. We'll explain everything clearly before your hire begins.",
  },
  {
    question: "Where can you deliver the car?",
    answer:
      "Free pickup from our Tewantin base, or delivery across the Sunshine Coast — from Noosa to Caloundra. Tell us your location and we'll confirm.",
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

export default function NotAtFaultPage() {
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
          <div className="relative z-10 mx-auto max-w-5xl">
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-[var(--fg-subtle)]">
              <Link href="/" className="transition-colors hover:text-[var(--accent)]">Home</Link>
              <span>/</span>
              <span className="text-[var(--fg-muted)]">Not-at-Fault Car Hire</span>
            </nav>

            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--fg-muted)] shadow-sm">
              <ShieldCheck className="h-3 w-3 text-[var(--accent)]" aria-hidden />
              Accident replacement · Sunshine Coast
            </div>

            <h1 className="font-display mt-5 text-4xl font-semibold italic leading-tight text-[var(--fg)] sm:text-5xl lg:text-6xl">
              Not at fault? Get a replacement car.
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--fg-muted)]">
              If another driver caused your accident, you may be eligible for a replacement car while yours is
              off the road. We handle the paperwork with the at-fault driver&apos;s insurer — you get back to
              your day.
            </p>

            <p className="mt-4 text-sm font-medium text-[var(--fg-subtle)]">
              Tewantin-based · Sunshine Coast delivery · Local team you can call directly
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#eligibility-checker"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-semibold text-[var(--accent-fg)] shadow-lg shadow-[var(--accent)]/25 transition-colors hover:bg-[var(--accent-hover)]"
              >
                <ClipboardCheck className="h-4 w-4" aria-hidden />
                Check eligibility
              </a>
              <a
                href="tel:0493654132"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-7 py-3.5 text-sm font-semibold text-[var(--fg)] transition-colors hover:border-[var(--accent)]/40"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Call 0493 654 132
              </a>
            </div>
          </div>
        </section>

        {/* ── Eligibility checker ── */}
        <section id="eligibility-checker" className="scroll-mt-20 border-y border-[var(--border)] bg-[var(--bg-alt)] px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <div className="mb-5 inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--accent-soft)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                30-second check
              </div>
              <h2 className="font-display text-3xl font-semibold italic text-[var(--fg)] sm:text-4xl">
                Check your eligibility
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-[var(--fg-muted)]">
                Three quick questions. Takes about 30 seconds.
              </p>
            </div>
            <div className="mt-10">
              <EligibilityChecker />
            </div>
          </div>
        </section>

        {/* ── How it works ── */}
        <section className="bg-[var(--bg)] px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-5 inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--accent-soft)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              How it works
            </div>
            <h2 className="font-display text-3xl font-semibold italic text-[var(--fg)] sm:text-4xl">
              Three steps back on the road
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {STEPS.map(({ icon: Icon, title, desc }, i) => (
                <div key={title} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--fg-subtle)]">
                      Step {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 font-semibold text-[var(--fg)]">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Requirements ── */}
        <section className="bg-[var(--bg-alt)] px-6 py-20">
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--accent-soft)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                Who qualifies
              </div>
              <h2 className="font-display text-3xl font-semibold italic text-[var(--fg)] sm:text-4xl">
                To qualify, you need
              </h2>
              <ul className="mt-8 space-y-3">
                {REQUIREMENTS.map((req) => (
                  <li
                    key={req}
                    className="flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent)]" aria-hidden />
                    <span className="text-sm font-medium text-[var(--fg)]">{req}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-[var(--fg-muted)]">
                Not sure? Check anyway — we&apos;ll confirm it for you.
              </p>
            </div>

            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--accent-soft)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                Why Honk Hire Co
              </div>
              <h2 className="font-display text-3xl font-semibold italic text-[var(--fg)] sm:text-4xl">
                A local team on your side
              </h2>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {WHY_LOCAL.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4">
                    <Icon className="h-5 w-5 text-[var(--accent)]" aria-hidden />
                    <h3 className="mt-3 text-sm font-semibold text-[var(--fg)]">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--fg-muted)]">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-[var(--bg)] px-6 py-20">
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
        <section className="bg-[var(--bg-alt)] px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-semibold italic text-[var(--fg)] sm:text-4xl">
              Been in an accident that wasn&apos;t your fault?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[var(--fg-muted)]">
              Send us the details and we&apos;ll let you know quickly whether you qualify.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={whatsappHref(ENQUIRY_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-8 py-4 text-sm font-semibold text-[var(--accent-fg)] shadow-lg shadow-[var(--accent)]/25 transition-colors hover:bg-[var(--accent-hover)]"
              >
                <MessageSquare className="h-5 w-5" aria-hidden />
                WhatsApp us
              </a>
              <Link
                href="/mg3-hire"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-8 py-4 text-sm font-semibold text-[var(--fg)] transition-colors hover:border-[var(--accent)]/40"
              >
                Standard car hire
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
