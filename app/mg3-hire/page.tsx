import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Car, CalendarCheck } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { whatsappHref } from "@/lib/contact/site";

const BOOKING_MESSAGE = [
  "Hi Honk Hire Co, I'd like to hire a car (from $199/week, 4-week minimum).",
  "",
  "Automatic or manual: ",
  "",
  "Start date: ",
  "Number of weeks: ",
  "Pickup from Tewantin or delivery (address): ",
  "What will you use it for (e.g. personal, Uber Eats/DoorDash): ",
  "Your name: ",
].join("\n");

export const metadata: Metadata = {
  metadataBase: new URL("https://honkhireco.com.au"),
  title: "Affordable Car Hire Sunshine Coast | From $199/week | Honk Hire Co",
  description:
    "Affordable, reliable car hire on the Sunshine Coast from $199/week, 4-week minimum. Economical automatic and manual vehicles for travellers, seasonal workers, locals and delivery drivers. Pickup from Tewantin.",
  alternates: { canonical: "/mg3-hire" },
  openGraph: {
    title: "Affordable Car Hire Sunshine Coast | From $199/week | Honk Hire Co",
    description:
      "Affordable, reliable car hire on the Sunshine Coast from $199/week, 4-week minimum. Economical automatic and manual vehicles.",
    url: "https://honkhireco.com.au/mg3-hire",
    siteName: "Honk Hire Co",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable Car Hire Sunshine Coast | From $199/week | Honk Hire Co",
    description:
      "Affordable, reliable car hire on the Sunshine Coast from $199/week, 4-week minimum.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Affordable Car Hire — Sunshine Coast",
  serviceType: "Vehicle Rental",
  description:
    "Economical automatic and manual vehicles for long-term hire on the Sunshine Coast, from $199/week with a 4-week minimum. Pickup from Tewantin.",
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
    price: "199",
    priceCurrency: "AUD",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "199",
      priceCurrency: "AUD",
      unitText: "WEEK",
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
  "Available for approved delivery-driver work (Uber Eats, DoorDash & similar)",
];

const IDEAL_FOR = [
  { icon: "🚗", title: "Everyday driving", desc: "Easy, economical transport for getting around the Sunshine Coast." },
  { icon: "🧳", title: "Visitors & tourists", desc: "No car? Explore Noosa to Caloundra at your own pace." },
  { icon: "📦", title: "Delivery driving", desc: "Approved for food and parcel delivery work — declare your intended use when you enquire." },
  { icon: "✈️", title: "Airport pickup & drop-off", desc: "Land, collect, and go — no waiting around." },
  { icon: "🛍️", title: "Weekly errands & commuting", desc: "Fuel-efficient and easy to park around town." },
  { icon: "🏢", title: "Business & longer stays", desc: "Weekly hire suits workers, local businesses, and extended visits." },
];

const SPECS = [
  { label: "Rate", value: "$199/week", sub: "4-week minimum" },
  { label: "Vehicles", value: "Auto & manual", sub: "economical options" },
  { label: "Kilometres", value: "Flexible", sub: "km packages available" },
  { label: "Pickup", value: "Tewantin", sub: "or delivery available" },
];

export default function Mg3HirePage() {
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
              <span className="text-[var(--fg-muted)]">Car Hire</span>
            </nav>

            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--fg-muted)] shadow-sm">
              <Car className="h-3 w-3 text-[var(--accent)]" aria-hidden />
              Car Hire · Sunshine Coast
            </div>

            <h1 className="font-display mt-5 text-4xl font-semibold italic leading-tight text-[var(--fg)] sm:text-5xl lg:text-6xl">
              Affordable Car Hire — Sunshine Coast
            </h1>

            <p className="mt-3 text-xl font-medium text-[var(--fg-muted)]">
              Reliable, economical vehicles from $199 per week. 4-week minimum hire.
            </p>

            <div className="mt-5 max-w-2xl space-y-3 text-base leading-relaxed text-[var(--fg-muted)]">
              <p>
                Looking for affordable, reliable transport on the Sunshine Coast? Honk Hire Co offers a range
                of economical vehicles for long-term hire, including automatic and manual options.
              </p>
              <p>
                Perfect for travellers, seasonal workers, locals and delivery drivers. We offer competitive
                weekly rates, flexible kilometre packages and straightforward booking.
              </p>
            </div>

            <p className="font-display mt-5 text-xl font-semibold italic text-[var(--fg)]">
              Affordable Cars. Flexible Hire. No Fuss.
            </p>

            {/* Pricing display */}
            <div className="mt-6 max-w-2xl rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
              <p className="font-display text-3xl font-semibold italic text-[var(--accent)]">
                <span className="text-sm font-semibold not-italic uppercase tracking-[0.18em] text-[var(--fg-subtle)]">From </span>
                $199/week
              </p>
              <p className="mt-2 text-sm text-[var(--fg-muted)]">
                4-week minimum hire. Security bond, optional extras and applicable surcharges are additional.
              </p>
              <p className="mt-3 border-t border-[var(--border)] pt-3 text-xs text-[var(--fg-subtle)]">
                <strong className="text-[var(--fg-muted)]">Important:</strong> Vehicle makes, models and features
                vary depending on availability.
              </p>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--accent-soft)] px-4 py-2 text-sm font-semibold text-[var(--accent)]">
              <Car className="h-4 w-4" aria-hidden />
              Pickup from Tewantin / Sunshine Coast
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
                src="/images/mg3-coastal.jpeg"
                alt="MG3 automatic hatchback — exterior, Sunshine Coast"
                width={1290}
                height={739}
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
                  Example vehicle — MG3
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
              Example vehicle
            </div>
            <h2 className="font-display text-3xl font-semibold italic text-[var(--fg)] sm:text-4xl">
              MG3 automatic hatchback
            </h2>
            <p className="mt-3 max-w-xl text-[var(--fg-muted)]">
              One of the cars in our fleet. Makes, models and features vary depending on availability.
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
          <div className="mx-auto max-w-5xl space-y-4">
            {/* Other car hire options */}
            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="/not-at-fault-car-hire-sunshine-coast"
                className="group flex items-center justify-between gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--accent)]/40"
              >
                <div>
                  <p className="font-semibold text-[var(--fg)]">Not-at-fault accident?</p>
                  <p className="mt-1 text-sm text-[var(--fg-muted)]">Check if you qualify for a replacement car.</p>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-[var(--accent)] transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
              <Link
                href="/ride-share-car-hire"
                className="group flex items-center justify-between gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--accent)]/40"
              >
                <div>
                  <p className="font-semibold text-[var(--fg)]">Driving for Uber Eats or DoorDash?</p>
                  <p className="mt-1 text-sm text-[var(--fg-muted)]">See our ride-share &amp; delivery car hire.</p>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-[var(--accent)] transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
              <h2 className="font-display text-xl font-semibold italic text-[var(--fg)]">
                Good to know
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--fg-muted)]">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-[var(--accent)]">•</span>
                  <span><strong className="text-[var(--fg)]">Driver&apos;s licence</strong> — a valid car licence is required. Minimum age and any additional conditions are confirmed before your hire is issued.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-[var(--accent)]">•</span>
                  <span><strong className="text-[var(--fg)]">Minimum hire</strong> — 4 weeks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-[var(--accent)]">•</span>
                  <span><strong className="text-[var(--fg)]">Bond</strong> — a refundable $500 security deposit applies.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-[var(--accent)]">•</span>
                  <span><strong className="text-[var(--fg)]">Included distance</strong> — 500km per week included; $0.30/km for any excess.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-[var(--accent)]">•</span>
                  <span><strong className="text-[var(--fg)]">Additional driver</strong> — $25/week per approved additional driver.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-[var(--accent)]">•</span>
                  <span><strong className="text-[var(--fg)]">Pickup &amp; delivery</strong> — free pickup from our Tewantin base, or delivery from $80 within 20km (further away is quoted individually).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-[var(--accent)]">•</span>
                  <span><strong className="text-[var(--fg)]">Clean, reliable, professionally maintained</strong> — every vehicle is serviced and presented to a high standard on every hire.</span>
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
              Ready to hire a car?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[var(--fg-muted)]">
              Message us with your dates. We will get back to you quickly —
              no booking fees, no forms, just a straight reply.
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
