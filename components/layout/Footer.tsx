import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { mailtoHref } from "@/lib/contact/mailto";
import { defaultGreetingMessage } from "@/lib/contact/messages";
import { CONTACT_EMAIL, FACEBOOK_URL, INSTAGRAM_URL } from "@/lib/contact/site";

export default function Footer() {
  const email = mailtoHref({
    subject: "Scooter hire enquiry",
    body: defaultGreetingMessage(),
  });

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] px-6 pb-10 pt-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="relative flex h-11 w-11 overflow-hidden rounded-full border border-[var(--logo-ring)] bg-white">
                <Image
                  src="/images/honk-logo.png"
                  alt=""
                  width={44}
                  height={44}
                  className="object-cover"
                />
              </span>
              <span className="font-display text-lg font-semibold italic text-[var(--fg)]">
                Honk Hire Co
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[var(--fg-muted)]">
              Boutique scooter hire on the Sunshine Coast — Noosa to Caloundra — for visitors who want the
              coast without the parking headache.
            </p>
            <div className="mt-5 rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)]/70 p-4 text-sm text-[var(--fg-muted)]">
              <p className="font-semibold text-[var(--fg)]">Honk Hire Co</p>
              <p className="mt-1">10 Forest Ct, Tewantin QLD 4565</p>
              <a href="tel:0493654132" className="mt-1 inline-flex font-medium text-[var(--accent)] hover:underline">
                0493 654 132
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--fg-subtle)]">
              Navigate
            </h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-[var(--fg-muted)] transition-colors hover:text-[var(--accent)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--fg-subtle)]">
              Contact
            </h4>
            <p className="mb-3 text-sm text-[var(--fg-muted)]">
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-[var(--fg)] hover:underline">
                {CONTACT_EMAIL}
              </a>
            </p>
            <a
              href={email}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-[var(--accent-fg)] shadow-md shadow-[var(--accent)]/20 transition-colors hover:bg-[var(--accent-hover)]"
            >
              <Mail className="h-4 w-4" aria-hidden />
              Email us
            </a>
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--fg-muted)] transition-colors hover:border-[var(--accent)]/40 hover:text-[var(--accent)]"
                aria-label="Honk Hire Co on Facebook"
              >
                <FaFacebook className="h-5 w-5" aria-hidden />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--fg-muted)] transition-colors hover:border-[var(--accent)]/40 hover:text-[var(--accent)]"
                aria-label="Honk Hire Co on Instagram"
              >
                <FaInstagram className="h-5 w-5" aria-hidden />
              </a>
            </div>
            <div className="mt-6 space-y-2 text-sm text-[var(--fg-muted)]">
              <p>Free pickup: Tewantin or Maroochydore</p>
              <p>Delivery: $40 across the Sunshine Coast</p>
              <p className="text-[var(--fg-subtle)]">Queensland, Australia</p>
              <p className="text-[var(--fg-subtle)]">ABN: 56 651 543 292</p>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--fg-subtle)]">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-[var(--fg-muted)] transition-colors hover:text-[var(--accent)]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-sm text-[var(--fg-muted)] transition-colors hover:text-[var(--accent)]"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/user-data-deletion"
                  className="text-sm text-[var(--fg-muted)] transition-colors hover:text-[var(--accent)]"
                >
                  User Data Deletion
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] pt-8 text-xs text-[var(--fg-subtle)] md:flex-row">
          <p>© {new Date().getFullYear()} Honk Hire Co. All rights reserved.</p>
          <p>Sunshine Coast scooter hire</p>
        </div>
      </div>
    </footer>
  );
}
