"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Menu, X, ChevronDown, MapPin } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { locationPath } from "@/lib/locations";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { mailtoHref } from "@/lib/contact/mailto";
import { defaultGreetingMessage } from "@/lib/contact/messages";

const LOCATION_LINKS = [
  { label: "Sunshine Coast", slug: "sunshine-coast", tag: "All areas", hub: true },
  { label: "Noosa", slug: "noosa", tag: "$40 delivery" },
  { label: "Tewantin", slug: "tewantin", tag: "Free pickup" },
  { label: "Maroochydore", slug: "maroochydore", tag: "Free pickup" },
  { label: "Mooloolaba", slug: "mooloolaba", tag: "$40 delivery" },
  { label: "Caloundra", slug: "caloundra", tag: "$40 delivery" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setMobileLocationsOpen(false);
  }, [pathname]);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    if (isHome) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/${href}`;
    }
  };

  const openLocations = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setLocationsOpen(true);
  };

  const closeLocations = () => {
    closeTimer.current = setTimeout(() => setLocationsOpen(false), 120);
  };

  const emailQuick = mailtoHref({
    subject: "Scooter hire enquiry",
    body: defaultGreetingMessage(),
  });

  return (
    <motion.header
      initial={{ y: -72 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--border)] bg-[var(--surface)]/85 backdrop-blur-xl shadow-sm"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 rounded-full py-1 text-left transition-opacity hover:opacity-90"
        >
          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[var(--logo-ring)] bg-white shadow-sm">
            <Image
              src="/images/honk-logo.jpg"
              alt="Honk Hire Co logo"
              width={40}
              height={40}
              className="object-cover"
              priority
            />
          </span>
          <span className="font-display text-lg font-semibold italic leading-tight text-[var(--fg)] md:text-xl">
            Honk Hire Co
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => handleNav(item.href)}
              className="rounded-full px-3 py-2 text-sm font-medium tracking-wide text-[var(--fg-muted)] transition-colors hover:bg-[var(--accent-soft)] hover:text-[var(--fg)]"
            >
              {item.label}
            </button>
          ))}

          {/* Locations dropdown */}
          <div
            className="relative"
            onMouseEnter={openLocations}
            onMouseLeave={closeLocations}
          >
            <button
              type="button"
              className={`flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium tracking-wide transition-colors hover:bg-[var(--accent-soft)] hover:text-[var(--fg)] ${
                locationsOpen
                  ? "bg-[var(--accent-soft)] text-[var(--fg)]"
                  : "text-[var(--fg-muted)]"
              }`}
              aria-expanded={locationsOpen}
              aria-haspopup="true"
            >
              Areas
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${locationsOpen ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>

            <AnimatePresence>
              {locationsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  onMouseEnter={openLocations}
                  onMouseLeave={closeLocations}
                  className="absolute right-0 top-full mt-2 w-64 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/95 p-2 shadow-xl backdrop-blur-lg"
                >
                  {/* Hub link */}
                  <Link
                    href="/scooter-hire-sunshine-coast"
                    className="flex items-center gap-3 rounded-xl bg-[var(--accent-soft)] px-3 py-2.5 transition-colors hover:bg-[var(--accent-soft)]/80"
                    onClick={() => setLocationsOpen(false)}
                  >
                    <MapPin className="h-4 w-4 shrink-0 text-[var(--accent)]" aria-hidden />
                    <div>
                      <p className="text-sm font-semibold text-[var(--fg)]">Sunshine Coast</p>
                      <p className="text-xs text-[var(--fg-subtle)]">All areas & service overview</p>
                    </div>
                  </Link>

                  <div className="my-2 border-t border-[var(--border)]" />

                  {/* Individual locations */}
                  <div className="grid grid-cols-1 gap-0.5">
                    {LOCATION_LINKS.filter((l) => !l.hub).map((loc) => (
                      <Link
                        key={loc.slug}
                        href={locationPath(loc.slug)}
                        className="flex items-center justify-between rounded-xl px-3 py-2 transition-colors hover:bg-[var(--accent-soft)]"
                        onClick={() => setLocationsOpen(false)}
                      >
                        <span className="text-sm font-medium text-[var(--fg)]">{loc.label}</span>
                        <span
                          className={`text-xs font-medium ${
                            loc.tag === "Free pickup"
                              ? "text-[var(--accent)]"
                              : "text-[var(--fg-subtle)]"
                          }`}
                        >
                          {loc.tag}
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="ml-2 flex items-center gap-2 pl-2">
            <ThemeToggle />
            <a
              href={emailQuick}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-[var(--accent-fg)] shadow-md shadow-[var(--accent)]/25 transition-transform hover:bg-[var(--accent-hover)] active:scale-[0.98]"
            >
              <Mail className="h-4 w-4" aria-hidden />
              Email us
            </a>
          </div>
        </nav>

        {/* Mobile hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-full border border-[var(--border)] p-2 text-[var(--fg)]"
            aria-expanded={menuOpen}
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => handleNav(item.href)}
                  className="rounded-xl px-3 py-3 text-left text-[var(--fg)]"
                >
                  {item.label}
                </button>
              ))}

              {/* Mobile locations section */}
              <button
                type="button"
                onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
                className="flex items-center justify-between rounded-xl px-3 py-3 text-left text-[var(--fg)]"
              >
                <span>Areas we serve</span>
                <ChevronDown
                  className={`h-4 w-4 text-[var(--fg-muted)] transition-transform duration-200 ${
                    mobileLocationsOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden
                />
              </button>

              <AnimatePresence>
                {mobileLocationsOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="ml-3 overflow-hidden border-l-2 border-[var(--accent-soft)] pl-3"
                  >
                    {LOCATION_LINKS.map((loc) => (
                      <Link
                        key={loc.slug}
                        href={locationPath(loc.slug)}
                        className="flex items-center justify-between py-2.5 text-sm"
                        onClick={() => setMenuOpen(false)}
                      >
                        <span className={loc.hub ? "font-semibold text-[var(--fg)]" : "text-[var(--fg-muted)]"}>
                          {loc.label}
                        </span>
                        {loc.tag && !loc.hub && (
                          <span
                            className={`text-xs ${
                              loc.tag === "Free pickup" ? "text-[var(--accent)]" : "text-[var(--fg-subtle)]"
                            }`}
                          >
                            {loc.tag}
                          </span>
                        )}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <a
                href={emailQuick}
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] py-3 text-center text-sm font-semibold text-[var(--accent-fg)]"
              >
                <Mail className="h-4 w-4" aria-hidden />
                Email us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
