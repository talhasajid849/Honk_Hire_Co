import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const VEHICLES = [
  {
    imageSrc: "/images/mg3-coastal.jpeg",
    imageAlt: "MG3 automatic hatchback — car hire",
    title: "Car Hire",
    price: "From $199/week",
    note: "4-week minimum",
    href: "/mg3-hire",
  },
  {
    imageSrc: "/images/amarok-exterior.jpeg",
    imageAlt: "2023 Volkswagen Amarok — ute hire",
    title: "Ute Hire",
    price: "$150/day · $900/week",
    note: "2-day minimum",
    href: "/amarok-hire",
  },
  {
    imageSrc: "/images/50cc-coastal.jpeg",
    imageAlt: "Crox 50 scooter — scooter hire",
    title: "Scooter Hire",
    price: "From $150/week",
    note: "2-week minimum",
    href: "/scooter-hire-sunshine-coast",
  },
];

export default function VehiclePricingSection({ embedded = false }: { embedded?: boolean }) {
  const cards = (
    <div className="grid gap-5 md:grid-cols-3">
      {VEHICLES.map(({ imageSrc, imageAlt, title, price, note, href }) => (
        <Link
          key={title}
          href={href}
          className="group relative flex aspect-[5/4] flex-col sm:aspect-[4/5] justify-end overflow-hidden rounded-[2rem] bg-[var(--ink)] text-[var(--ink-fg)] shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1 md:aspect-[3/4]"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/55 to-transparent" />
          <span className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition-colors group-hover:bg-[var(--sun)] group-hover:text-[var(--sun-fg)]">
            <ArrowUpRight className="h-5 w-5" aria-hidden />
          </span>
          <div className="relative p-6 md:p-7">
            <h3 className="font-display text-3xl font-bold">{title}</h3>
            <p className="mt-2 text-xl font-semibold text-[var(--sun-on-ink)]">{price}</p>
            <div className="mt-3 flex items-center justify-between gap-3 text-sm text-[var(--ink-muted)]">
              <span>{note}</span>
              <span className="inline-flex items-center gap-1 font-semibold text-[var(--ink-fg)]">
                View details
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );

  if (embedded) return cards;

  return (
    <section id="fleet" className="bg-[var(--bg)] px-5 py-16 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge="Fleet"
          title="Cars, utes and scooters."
          subtitle="Pick the vehicle that suits your stay — tap any card for full rates, terms and photos."
        />
        <div className="mt-10 sm:mt-14">{cards}</div>
      </div>
    </section>
  );
}
