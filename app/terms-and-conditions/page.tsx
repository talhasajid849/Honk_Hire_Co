import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Honk Hire Co",
  description: "Terms and conditions for scooter rentals with Honk Hire Co.",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] px-6 py-24 text-[var(--fg)]">
      <div className="mx-auto max-w-3xl rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-12">
        <h1 className="font-display text-4xl font-semibold italic">Terms & Conditions</h1>
        <p className="mt-2 text-sm text-[var(--fg-subtle)]">Last updated: 10 April 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-[var(--fg-muted)]">
          <section>
            <h2 className="mb-2 text-base font-semibold text-[var(--fg)]">Eligibility</h2>
            <ul className="list-disc space-y-1 pl-5">
              <li>Minimum rider age: 18 years.</li>
              <li>50cc hires require a valid car licence.</li>
              <li>125cc hires require a valid motorcycle licence.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-[var(--fg)]">Rates and minimum period</h2>
            <ul className="list-disc space-y-1 pl-5">
              <li>50cc scooter: $150 per week.</li>
              <li>125cc scooter: $160 per week.</li>
              <li>Minimum hire period: 2 weeks.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-[var(--fg)]">Fees and bond</h2>
            <ul className="list-disc space-y-1 pl-5">
              <li>Security bond: $300 (refundable subject to conditions).</li>
              <li>Delivery fee: $30.</li>
              <li>Free pickup points: Tewantin or Maroochydore.</li>
              <li>Included distance: 500 km per week.</li>
              <li>Excess distance: $0.23 per km over allowance.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-[var(--fg)]">Rider responsibility</h2>
            <p>
              Riders must follow Queensland road laws, use the scooter safely, and return the scooter in the
              agreed condition and time period.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-[var(--fg)]">Passenger rules</h2>
            <p>Passengers are allowed on 125cc scooters only. 50cc scooters are solo rider only.</p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-[var(--fg)]">Cancellations and changes</h2>
            <p>
              Booking changes are subject to availability. Cancellation terms and any applicable charges are
              confirmed at the time of booking.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-[var(--fg)]">Contact</h2>
            <p>
              For all bookings and support, contact Honk Hire Co via WhatsApp through the website buttons.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
