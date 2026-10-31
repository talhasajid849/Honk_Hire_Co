import { SCOOTERS } from "@/lib/constants";
import ScooterCard from "@/components/ui/ScooterCard";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ScootersSection() {
  return (
    <section id="scooters" className="bg-[var(--bg-alt)] px-5 py-16 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge="Scooters"
          title="Two scooters. Two licence paths."
          subtitle="Pick the tier that matches your licence — we spell out passengers, bond, and weekly km upfront."
        />

        <div className="mx-auto mt-10 grid max-w-5xl sm:mt-16 grid-cols-1 gap-8 md:grid-cols-2">
          {SCOOTERS.map((scooter, i) => (
            <ScooterCard key={scooter.id} scooter={scooter} index={i} />
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-xl text-center text-sm text-[var(--fg-muted)]">
          <span className="rounded-full bg-[var(--ink)] px-5 py-2.5 font-semibold text-[var(--ink-fg)]">
            Minimum hire: 2 weeks
          </span>
        </p>
      </div>
    </section>
  );
}
