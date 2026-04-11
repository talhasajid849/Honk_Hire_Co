import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Honk Hire Co",
  description: "Privacy policy for Honk Hire Co, including Facebook contact and lead form data handling.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] px-6 py-24 text-[var(--fg)]">
      <div className="mx-auto max-w-3xl rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-12">
        <h1 className="font-display text-4xl font-semibold italic">Privacy Policy</h1>
        <p className="mt-2 text-sm text-[var(--fg-subtle)]">Last updated: 10 April 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-[var(--fg-muted)]">
          <section>
            <h2 className="mb-2 text-base font-semibold text-[var(--fg)]">Who we are</h2>
            <p>
              Honk Hire Co provides scooter rental services on the Sunshine Coast, Australia. This policy
              explains how we collect, use, and protect personal information when you contact us through our
              website, email, and Facebook/Meta tools.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-[var(--fg)]">Information we collect</h2>
            <ul className="list-disc space-y-1 pl-5">
              <li>Contact details you provide (name, phone number, email if provided).</li>
              <li>Booking preference details (dates, scooter type, pickup/delivery preference).</li>
              <li>Messages sent via email or Facebook/Instagram direct messages.</li>
              <li>Basic analytics and device information from website visits.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-[var(--fg)]">Facebook and Meta data use</h2>
            <p>
              If you contact us via Facebook or Instagram, or submit a Meta lead form, we may receive
              information from Meta such as your name, phone number, and message content. We use this
              information only to respond to your enquiry, provide quotes, and manage bookings.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-[var(--fg)]">How we use your data</h2>
            <ul className="list-disc space-y-1 pl-5">
              <li>Respond to enquiries and confirm availability.</li>
              <li>Prepare quotes and booking details.</li>
              <li>Provide support before, during, and after hire.</li>
              <li>Meet legal and compliance obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-[var(--fg)]">Data sharing</h2>
            <p>
              We do not sell personal information. We only share data with service providers required to run
              operations (for example, communication, hosting, or payment tools) and only where needed.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-[var(--fg)]">Data retention</h2>
            <p>
              We keep information only as long as required for enquiries, bookings, legal obligations, and
              dispute handling, then securely delete or anonymize it.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-[var(--fg)]">Your rights</h2>
            <p>
              You may request access, correction, or deletion of your personal data at any time. For Facebook
              data deletion instructions, visit our User Data Deletion page.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
