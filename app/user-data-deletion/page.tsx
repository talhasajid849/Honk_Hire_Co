import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Data Deletion | Honk Hire Co",
  description: "How to request deletion of your personal data from Honk Hire Co and Facebook-connected data.",
};

export default function UserDataDeletionPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] px-6 py-24 text-[var(--fg)]">
      <div className="mx-auto max-w-3xl rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-12">
        <h1 className="font-display text-4xl font-semibold italic">User Data Deletion</h1>
        <p className="mt-2 text-sm text-[var(--fg-subtle)]">Last updated: 10 April 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-[var(--fg-muted)]">
          <section>
            <h2 className="mb-2 text-base font-semibold text-[var(--fg)]">How to request deletion</h2>
            <p>
              To request deletion of your personal data (including data received from Facebook/Meta forms or
              messages), contact Honk Hire Co via WhatsApp and include:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Your full name.</li>
              <li>The phone number or account used to contact us.</li>
              <li>A clear statement: &quot;Please delete my personal data.&quot;</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-[var(--fg)]">Processing timeline</h2>
            <p>
              We aim to process verified deletion requests within 30 days, unless retention is required for legal
              or regulatory obligations.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-[var(--fg)]">What gets deleted</h2>
            <ul className="list-disc space-y-1 pl-5">
              <li>Enquiry and lead details we control directly.</li>
              <li>Booking communication records that are no longer legally required.</li>
              <li>Associated profile/contact data in our operational tools.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-[var(--fg)]">Facebook/Meta platform data</h2>
            <p>
              Some data may also exist in your Facebook or Instagram account history. For platform-level deletion,
              use Meta account privacy settings in addition to contacting us.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
