import Link from "next/link";
import { ArrowRight, Bike, Car, Truck } from "lucide-react";

const VEHICLES = [
  {
    icon: Car,
    title: "Car Hire",
    price: "From $199/week",
    note: "4-week minimum",
    href: "/mg3-hire",
    color: "#2f4a3c",
  },
  {
    icon: Truck,
    title: "Ute Hire",
    price: "$120/day · $600/week",
    note: "2-day minimum",
    href: "/amarok-hire",
    color: "#3d6b4a",
  },
  {
    icon: Bike,
    title: "Scooter Hire",
    price: "From $135/week",
    note: "2-week minimum",
    href: "/scooter-hire-sunshine-coast",
    color: "#2f4a3c",
  },
];

export default function VehiclePricingSection() {
  return (
    <section id="vehicles" className="bg-[var(--bg)] px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-4 sm:grid-cols-3">
          {VEHICLES.map(({ icon: Icon, title, price, note, href, color }) => (
            <Link
              key={title}
              href={href}
              className="group flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all hover:border-[var(--accent)]/40 hover:shadow-md"
            >
              <div
                className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ background: `${color}1a`, color }}
              >
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="font-display text-xl font-semibold italic text-[var(--fg)]">{title}</h3>
              <p className="mt-2 text-lg font-semibold text-[var(--accent)]">{price}</p>
              <p className="mt-1 text-sm text-[var(--fg-muted)]">{note}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--fg-muted)] transition-colors group-hover:text-[var(--accent)]">
                View details
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
