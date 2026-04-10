import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { NAV_ITEMS } from "@/lib/constants";
import { defaultGreetingMessage, whatsAppHref } from "@/lib/contact/whatsapp";

export default function Footer() {
  const wa = whatsAppHref(defaultGreetingMessage());

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
            <p className="mb-4 text-sm text-[var(--fg-muted)]">
              Message us on WhatsApp for bookings and questions.
            </p>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] px-5 py-2.5 text-sm font-semibold text-[var(--whatsapp-fg)] shadow-md shadow-[var(--whatsapp)]/20 transition-colors hover:bg-[var(--whatsapp-hover)]"
            >
              <FaWhatsapp className="h-4 w-4" aria-hidden />
              Open WhatsApp
            </a>
            <div className="mt-6 space-y-2 text-sm text-[var(--fg-muted)]">
              <p>Free pickup: Tewantin or Maroochydore</p>
              <p>Delivery: $30 across the Sunshine Coast</p>
              <p className="text-[var(--fg-subtle)]">Queensland, Australia</p>
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
