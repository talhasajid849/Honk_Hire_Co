import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Users, Truck, CalendarCheck } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://honkhireco.com.au"),
  title: "Amarok Ute Hire Noosa | Tow Vehicle Rental $104/day | Honk Hire Co",
  description:
    "Hire a near-new 2023 VW Amarok on the Sunshine Coast. $104/day including insurance. Electronic brake controller fitted. Perfect for caravan and camper towing. Pickup from Noosa.",
  alternates: { canonical: "/amarok-hire" },
  openGraph: {
    title: "Amarok Ute Hire Noosa | Tow Vehicle Rental $104/day | Honk Hire Co",
    description:
      "Hire a near-new 2023 VW Amarok on the Sunshine Coast. $104/day including insurance. Electronic brake controller fitted. Perfect for caravan and camper towing.",
    url: "https://honkhireco.com.au/amarok-hire",
    siteName: "Honk Hire Co",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amarok Ute Hire Noosa | Tow Vehicle Rental $104/day | Honk Hire Co",
    description:
      "Hire a near-new 2023 VW Amarok on the Sunshine Coast. $104/day including insurance. Electronic brake controller fitted.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "VW Amarok Ute Hire — Noosa & Sunshine Coast",
  serviceType: "Vehicle Rental",
  description:
    "Near-new 2023 Volkswagen Amarok Life available for daily hire on the Sunshine Coast. $104/day including insurance. Electronic brake controller fitted for caravan and camper towing. Pickup from Noosa.",
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
    price: "104",
    priceCurrency: "AUD",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "104",
      priceCurrency: "AUD",
      unitText: "DAY",
    },
  },
  areaServed: { "@type": "State", name: "Queensland" },
  url: "https://honkhireco.com.au/amarok-hire",
};

const FEATURES = [
  "Electronic brake controller fitted",
  "Tow bar fitted",
  "Turbo diesel — power & efficiency",
  "Automatic transmission",
  "Selectable 2WD / 4WD capability",
  "Reverse camera + parking sensors",
  "Apple CarPlay / Android Auto",
  "Ice cold air conditioning",
  "Spacious dual cab — 5 seats",
  "Premium comfortable interior",
  "Plenty of room for luggage & gear",
  "North shore beach driving available (subject to conditions)",
];

const IDEAL_FOR = [
  { icon: "🚐", title: "Caravan towing", desc: "Electronic brake controller already fitted — just hook up and go." },
  { icon: "⛺", title: "Camper trailer adventures", desc: "Turbo diesel torque handles loaded trailers without breaking a sweat." },
  { icon: "👨‍👩‍👧‍👦", title: "Family road trips", desc: "Five seats, a massive tray, and all the gear space you need." },
  { icon: "✈️", title: "Airport pickup runs", desc: "Spacious enough for a full family landing with luggage." },
  { icon: "🏖️", title: "North shore beach access", desc: "Subject to conditions — ask us when you enquire." },
  { icon: "🛣️", title: "Queensland exploration", desc: "Reliable, comfortable, and capable across the state." },
];

const SPECS = [
  { label: "Rate", value: "$104/day", sub: "insurance included" },
  { label: "Vehicle", value: "2023 Amarok", sub: "VW Life — near-new" },
  { label: "Seats", value: "5 seats", sub: "dual cab" },
  { label: "Towing", value: "Up to 3.5t", sub: "brake controller fitted" },
];

export default function AmarokHirePage() {
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
              <span className="text-[var(--fg-muted)]">Amarok Ute Hire</span>
            </nav>

            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--fg-muted)] shadow-sm">
              <Truck className="h-3 w-3 text-[var(--accent)]" aria-hidden />
              Ute Hire · Noosa / Sunshine Coast
            </div>

            <h1 className="font-display mt-5 text-4xl font-semibold italic leading-tight text-[var(--fg)] sm:text-5xl lg:text-6xl">
              VW Amarok Ute Hire — Sunshine Coast
            </h1>

            <p className="mt-3 text-xl font-medium text-[var(--fg-muted)]">
              Near-new 2023 Amarok Life, set up and ready to tow. $104/day including insurance.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--fg-muted)]">
              Need a capable tow vehicle for your next adventure? Our 2023 Volkswagen Amarok Life is fitted with an
              electronic brake controller and tow bar, making it ready for caravans, camper trailers, and heavy loads.
              Turbo diesel, automatic, selectable 4WD — and north shore beach driving is available subject to conditions.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--accent-soft)] px-4 py-2 text-sm font-semibold text-[var(--accent)]">
              <Users className="h-4 w-4" aria-hidden />
              Pickup from Noosa / Sunshine Coast
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.camplify.com.au/rv/154095"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-semibold text-[var(--accent-fg)] shadow-lg shadow-[var(--accent)]/25 transition-colors hover:bg-[var(--accent-hover)]"
              >
                <CalendarCheck className="h-4 w-4" aria-hidden />
                Book now
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
            {/* Hero exterior — full width */}
            <div className="relative w-full overflow-hidden rounded-2xl border border-[var(--border)]">
              <Image
                src="/images/amarok-exterior.jpeg"
                alt="2023 Volkswagen Amarok Life — exterior front, rear, and side"
                width={1270}
                height={952}
                className="h-auto w-full"
                sizes="100vw"
                priority
              />
            </div>
            {/* 4-image grid below */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--border)]">
                <Image
                  src="/images/amarok-interior.jpeg"
                  alt="Amarok interior — premium cabin and infotainment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--border)]">
                <Image
                  src="/images/amarok-controls.jpeg"
                  alt="Amarok electronic brake controller and 12V/USB ports"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--border)]">
                <Image
                  src="/images/amarok-tray.jpeg"
                  alt="Amarok roller tonneau cover — secure tray storage"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--border)]">
                <Image
                  src="/images/amarok-towbar.jpeg"
                  alt="Amarok tow bar and electronic brake controller fitted"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
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
              No extra setup, no third-party installs. The Amarok leaves Noosa ready to tow.
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
              Built for adventure, ready for work
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
                  <span><strong className="text-[var(--fg)]">North shore beach driving</strong> — available subject to conditions. Ask us when you enquire and we will walk you through what applies.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-[var(--accent)]">•</span>
                  <span><strong className="text-[var(--fg)]">Child seats</strong> — available on request. You will need to fit them yourself.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-[var(--accent)]">•</span>
                  <span><strong className="text-[var(--fg)]">Towing compatibility</strong> — message us with your caravan or camper make and model and we can confirm compatibility before you book.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-[var(--accent)]">•</span>
                  <span><strong className="text-[var(--fg)]">Clean, reliable, professionally maintained</strong> — the Amarok is serviced and presented to a high standard on every hire.</span>
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
              Ready to hire the Amarok?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[var(--fg-muted)]">
              Message us with your dates and towing requirements. We will get back to you quickly —
              no booking fees, no forms, just a straight reply.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://www.camplify.com.au/rv/154095"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-8 py-4 text-sm font-semibold text-[var(--accent-fg)] shadow-lg shadow-[var(--accent)]/25 transition-colors hover:bg-[var(--accent-hover)]"
              >
                <CalendarCheck className="h-5 w-5" aria-hidden />
                Book now
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
