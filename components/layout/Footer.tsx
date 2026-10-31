import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { NAV_ITEMS } from "@/lib/constants";
import { defaultGreetingMessage } from "@/lib/contact/messages";
import { CONTACT_EMAIL, FACEBOOK_URL, INSTAGRAM_URL, whatsappHref } from "@/lib/contact/site";

export default function Footer() {
  const chat = whatsappHref(defaultGreetingMessage());

  return (
    <footer className="bg-[var(--ink)] px-5 pb-10 pt-14 sm:pt-20 text-[var(--ink-fg)] lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-5">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="relative flex h-11 w-11 overflow-hidden rounded-full border border-[var(--logo-ring)] bg-white">
                <Image
                  src="/images/honk-logo.jpg"
                  alt=""
                  width={44}
                  height={44}
                  className="object-cover"
                />
              </span>
              <span className="font-display text-xl font-bold text-[var(--ink-fg)]">
                Honk Hire Co
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[var(--ink-muted)]">
              Boutique scooter hire on the Sunshine Coast — Noosa to Caloundra — for visitors who want the
              coast without the parking headache.
            </p>
            <div className="mt-5 rounded-2xl border border-[var(--ink-border)] bg-white/5 p-4 text-sm text-[var(--ink-muted)]">
              <p className="font-semibold text-[var(--ink-fg)]">Honk Hire Co</p>
              <p className="mt-1">10 Forest Ct, Tewantin QLD 4565</p>
              <a href="tel:0493654132" className="mt-1 inline-flex font-medium text-[var(--sun-on-ink)] hover:underline">
                0493 654 132
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--sun-on-ink)]">
              Navigate
            </h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={`/${item.href}`}
                    className="text-sm text-[var(--ink-muted)] transition-colors hover:text-[var(--sun-on-ink)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/amarok-hire"
                  className="text-sm text-[var(--ink-muted)] transition-colors hover:text-[var(--sun-on-ink)]"
                >
                  Ute Hire
                </Link>
              </li>
              {[
                { label: "Car Hire", href: "/mg3-hire" },
                { label: "Ride-Share Car Hire", href: "/ride-share-car-hire" },
                { label: "Not-at-Fault Car Hire", href: "/not-at-fault-car-hire-sunshine-coast" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--ink-muted)] transition-colors hover:text-[var(--sun-on-ink)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--sun-on-ink)]">
              Locations
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Sunshine Coast", href: "/scooter-hire-sunshine-coast" },
                { label: "Noosa", href: "/scooter-hire-noosa" },
                { label: "Tewantin", href: "/scooter-hire-tewantin" },
                { label: "Maroochydore", href: "/scooter-hire-maroochydore" },
                { label: "Mooloolaba", href: "/scooter-hire-mooloolaba" },
                { label: "Caloundra", href: "/scooter-hire-caloundra" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--ink-muted)] transition-colors hover:text-[var(--sun-on-ink)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--sun-on-ink)]">
              Contact
            </h4>
            <p className="mb-3 text-sm text-[var(--ink-muted)]">
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-[var(--ink-fg)] hover:underline">
                {CONTACT_EMAIL}
              </a>
            </p>
            <a
              href={chat}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--sun)] px-5 py-2.5 text-sm font-bold text-[var(--sun-fg)] transition-all hover:brightness-105"
            >
              <FaWhatsapp className="h-4 w-4" aria-hidden />
              WhatsApp us
            </a>
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--ink-border)] text-[var(--ink-muted)] transition-colors hover:border-[var(--sun-on-ink)]/60 hover:text-[var(--sun-on-ink)]"
                aria-label="Honk Hire Co on Facebook"
              >
                <FaFacebook className="h-5 w-5" aria-hidden />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--ink-border)] text-[var(--ink-muted)] transition-colors hover:border-[var(--sun-on-ink)]/60 hover:text-[var(--sun-on-ink)]"
                aria-label="Honk Hire Co on Instagram"
              >
                <FaInstagram className="h-5 w-5" aria-hidden />
              </a>
            </div>
            <div className="mt-6 space-y-2 text-sm text-[var(--ink-muted)]">
              <p>Free pickup: Tewantin</p>
              <p>Delivery: $40 within 20km (quoted beyond)</p>
              <p className="text-[var(--ink-muted)]/80">Queensland, Australia</p>
              <p className="text-[var(--ink-muted)]/80">ABN: 56 651 543 292</p>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--sun-on-ink)]">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-[var(--ink-muted)] transition-colors hover:text-[var(--sun-on-ink)]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-sm text-[var(--ink-muted)] transition-colors hover:text-[var(--sun-on-ink)]"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/user-data-deletion"
                  className="text-sm text-[var(--ink-muted)] transition-colors hover:text-[var(--sun-on-ink)]"
                >
                  User Data Deletion
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-[var(--ink-border)] pt-8 text-xs text-[var(--ink-muted)]/80 md:flex-row">
          <p>© {new Date().getFullYear()} Honk Hire Co. All rights reserved.</p>
          <p>Sunshine Coast scooter hire</p>
        </div>
      </div>
    </footer>
  );
}
