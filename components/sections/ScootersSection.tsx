import { SCOOTERS } from "@/lib/constants";
import ScooterCard from "@/components/ui/ScooterCard";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ScootersSection() {
  return (
    <section id="scooters" className="bg-[var(--bg)] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge="Fleet"
          title="Two scooters. Two licence paths."
          subtitle="Pick the tier that matches your licence — we spell out passengers, bond, and weekly km upfront."
        />

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {SCOOTERS.map((scooter, i) => (
            <ScooterCard key={scooter.id} scooter={scooter} index={i} />
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-xl text-center text-sm text-[var(--fg-muted)]">
          <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 font-medium text-[var(--fg)]">
            Minimum hire: 2 weeks
          </span>
        </p>
      </div>
    </section>
  );
}
