import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Car, Mail } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { mailtoHref } from "@/lib/contact/mailto";

export const metadata: Metadata = {
  metadataBase: new URL("https://honkhireco.com.au"),
  title: "MG3 Car Hire Sunshine Coast | From $50/day | Honk Hire Co",
  description:
    "Hire an automatic MG3 hatchback on the Sunshine Coast. From $50/day, $298/week, or $1,050/month. Apple CarPlay, reverse camera, 4-star ANCAP safety. Pickup from Tewantin.",
  alternates: { canonical: "/mg3-hire" },
  openGraph: {
    title: "MG3 Car Hire Sunshine Coast | From $50/day | Honk Hire Co",
    description:
      "Hire an automatic MG3 hatchback on the Sunshine Coast. From $50/day, $298/week, or $1,050/month. Apple CarPlay, reverse camera, 4-star ANCAP safety.",
    url: "https://honkhireco.com.au/mg3-hire",
    siteName: "Honk Hire Co",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "MG3 Car Hire Sunshine Coast | From $50/day | Honk Hire Co",
    description:
      "Hire an automatic MG3 hatchback on the Sunshine Coast. From $50/day, $298/week, or $1,050/month.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "MG3 Car Hire — Sunshine Coast",
  serviceType: "Vehicle Rental",
  description:
    "Automatic MG3 hatchback available for daily, weekly, or monthly hire on the Sunshine Coast. Apple CarPlay & Android Auto, reverse camera, 4-star ANCAP safety rating. Pickup from Tewantin.",
  provider: {
    "@type": "LocalBusiness",
    name: "Honk Hire Co",
    telephone: "0493 654 132",
    url: "https://honkhireco.com.au",
    address: {
      "@type": "PostalAddress",
      streetAddress: "10 Forest Ct",
      addressLocality: "Tewantin",
      addressRegion: "QLD",
      postalCode: "4565",
      addressCountry: "AU",
    },
  },
  offers: {
    "@type": "Offer",
    price: "50",
    priceCurrency: "AUD",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "50",
      priceCurrency: "AUD",
      unitText: "DAY",
    },
  },
  areaServed: { "@type": "State", name: "Queensland" },
  url: "https://honkhireco.com.au/mg3-hire",
};

const FEATURES = [
  "Automatic transmission — easy to drive",
  "Apple CarPlay & Android Auto",
  "Reverse camera",
  "USB charging ports",
  "4-Star ANCAP safety rating (2025)",
  "Fuel-efficient — approx. 6.5L/100km combined",
  "Seats 5 comfortably",
  "293L boot space",
  "Approved for DiDi, Ola & other rideshare platforms",
];

const IDEAL_FOR = [
  { icon: "🚗", title: "Everyday driving", desc: "Easy, economical transport for getting around the Sunshine Coast." },
  { icon: "🧳", title: "Visitors & tourists", desc: "No car? Explore Noosa to Caloundra at your own pace." },
  { icon: "🚕", title: "Rideshare driving", desc: "Approved for DiDi, Ola, and other rideshare platforms." },
  { icon: "✈️", title: "Airport pickup & drop-off", desc: "Land, collect, and go — no waiting around." },
  { icon: "🛍️", title: "Weekly errands & commuting", desc: "Fuel-efficient and easy to park around town." },
  { icon: "📅", title: "Short or long-term hire", desc: "Daily, weekly, or monthly rates to suit your stay." },
];

const SPECS = [
  { label: "Rate", value: "$50/day", sub: "or $298/week" },
  { label: "Vehicle", value: "MG3", sub: "automatic hatchback" },
  { label: "Seats", value: "5 seats", sub: "293L boot" },
  { label: "Safety", value: "4★ ANCAP", sub: "2025 rating" },
];

export default function Mg3HirePage() {
  const emailHref = mailtoHref({
    subject: "MG3 car hire enquiry",
    body: "Hi, I'm interested in hiring the MG3. Please let me know about availability, rates, and delivery/pickup options.",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
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

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-[var(--fg-subtle)]">
              <Link href="/" className="transition-colors hover:text-[var(--accent)]">Home</Link>
              <span>/</span>
              <span className="text-[var(--fg-muted)]">MG3 Car Hire</span>
            </nav>

            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--fg-muted)] shadow-sm">
              <Car className="h-3 w-3 text-[var(--accent)]" aria-hidden />
              Car Hire · Sunshine Coast
            </div>

            <h1 className="font-display mt-5 text-4xl font-semibold italic leading-tight text-[var(--fg)] sm:text-5xl lg:text-6xl">
              MG3 Car Hire — Sunshine Coast
            </h1>

            <p className="mt-3 text-xl font-medium text-[var(--fg-muted)]">
              Automatic hatchback, ready for daily driving, rideshare, or weekly hire. From $50/day.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--fg-muted)]">
              Need an easy, fuel-efficient car for getting around the Sunshine Coast? Our MG3 automatic
              hatchback comes with Apple CarPlay &amp; Android Auto, a reverse camera, and a 4-star ANCAP
              safety rating (2025) — comfortable, economical, and approved for rideshare platforms like
              DiDi and Ola.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--accent-soft)] px-4 py-2 text-sm font-semibold text-[var(--accent)]">
              <Car className="h-4 w-4" aria-hidden />
              Pickup from Tewantin / Sunshine Coast
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={emailHref}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-semibold text-[var(--accent-fg)] shadow-lg shadow-[var(--accent)]/25 transition-colors hover:bg-[var(--accent-hover)]"
              >
                <Mail className="h-4 w-4" aria-hidden />
                Get a quote
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-7 py-3.5 text-sm font-semibold text-[var(--fg)] transition-colors hover:border-[var(--accent)]/40"
              >
                Contact us
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Specs strip ── */}
        <section className="border-y border-[var(--border)] bg-[var(--surface)] px-6 py-10">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-4">
            {SPECS.map((spec) => (
              <div key={spec.label} className="text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--fg-subtle)]">
                  {spec.label}
                </p>
                <p className="font-display mt-1 text-2xl font-semibold italic text-[var(--accent)]">
                  {spec.value}
                </p>
                <p className="mt-0.5 text-xs text-[var(--fg-muted)]">{spec.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Photo gallery ── */}
        <section className="bg-[var(--bg)] px-6 py-16">
          <div className="mx-auto max-w-5xl space-y-4">
            <div className="relative w-full overflow-hidden rounded-2xl border border-[var(--border)]">
              <Image
                src="/images/mg3-1.webp"
                alt="MG3 automatic hatchback — exterior"
                width={1080}
                height={608}
                className="h-auto w-full"
                sizes="100vw"
                priority
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-[var(--border)]">
                <Image
                  src="/images/mg3-interior-1.webp"
                  alt="MG3 interior — dashboard, infotainment, and steering wheel"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--fg-subtle)]">
                  Inside the MG3
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">
                  Apple CarPlay &amp; Android Auto keep you connected, the reverse camera makes parking easy,
                  and USB charging keeps your devices topped up on the go.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="bg-[var(--bg-alt)] px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-5 inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--accent-soft)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              What&apos;s included
            </div>
            <h2 className="font-display text-3xl font-semibold italic text-[var(--fg)] sm:text-4xl">
              Everything you need, already fitted
            </h2>
            <p className="mt-3 max-w-xl text-[var(--fg-muted)]">
              No extra setup required. The MG3 leaves Tewantin ready to drive.
            </p>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent)]" aria-hidden />
                  <p className="text-sm font-medium text-[var(--fg)]">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Ideal for ── */}
        <section className="bg-[var(--bg)] px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-5 inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--accent-soft)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Ideal for
            </div>
            <h2 className="font-display text-3xl font-semibold italic text-[var(--fg)] sm:text-4xl">
              Easy, economical driving
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {IDEAL_FOR.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-shadow hover:shadow-md"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-xl">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-[var(--fg)]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Important notes ── */}
        <section className="bg-[var(--bg-alt)] px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
              <h2 className="font-display text-xl font-semibold italic text-[var(--fg)]">
                Good to know
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--fg-muted)]">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-[var(--accent)]">•</span>
                  <span><strong className="text-[var(--fg)]">Driver&apos;s licence</strong> — a valid car licence is required. No special conditions apply.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-[var(--accent)]">•</span>
                  <span><strong className="text-[var(--fg)]">Bond</strong> — a refundable security bond applies, confirmed when you enquire.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-[var(--accent)]">•</span>
                  <span><strong className="text-[var(--fg)]">Pickup &amp; delivery</strong> — free pickup from our Tewantin base, or $40 delivery within 20km (further away is quoted individually).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-[var(--accent)]">•</span>
                  <span><strong className="text-[var(--fg)]">Clean, reliable, professionally maintained</strong> — the MG3 is serviced and presented to a high standard on every hire.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-[var(--bg)] px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--accent-soft)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Book now
            </div>
            <h2 className="font-display text-3xl font-semibold italic text-[var(--fg)] sm:text-4xl">
              Ready to hire the MG3?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[var(--fg-muted)]">
              Message us with your dates. We will get back to you quickly —
              no booking fees, no forms, just a straight reply.
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
                href="/scooter-hire-sunshine-coast"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-8 py-4 text-sm font-semibold text-[var(--fg)] transition-colors hover:border-[var(--accent)]/40"
              >
                Also need a scooter?
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
