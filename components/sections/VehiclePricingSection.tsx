import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
    price: "$120/day · $600/week",
    note: "2-day minimum",
    href: "/amarok-hire",
  },
  {
    imageSrc: "/images/50cc-coastal.jpeg",
    imageAlt: "Coastal 50 scooter — scooter hire",
    title: "Scooter Hire",
    price: "From $135/week",
    note: "2-week minimum",
    href: "/scooter-hire-sunshine-coast",
  },
];

export default function VehiclePricingSection() {
  return (
    <section id="vehicles" className="bg-[var(--bg)] px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-4 sm:grid-cols-3">
          {VEHICLES.map(({ imageSrc, imageAlt, title, price, note, href }) => (
            <Link
              key={title}
              href={href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition-all hover:border-[var(--accent)]/40 hover:shadow-md"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--bg-alt)]">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold italic text-[var(--fg)]">{title}</h3>
                <p className="mt-2 text-lg font-semibold text-[var(--accent)]">{price}</p>
                <p className="mt-1 text-sm text-[var(--fg-muted)]">{note}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--fg-muted)] transition-colors group-hover:text-[var(--accent)]">
                  View details
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
