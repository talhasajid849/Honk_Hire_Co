"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { mailtoHref } from "@/lib/contact/mailto";
import { defaultGreetingMessage } from "@/lib/contact/messages";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
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
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 rounded-full py-1 text-left transition-opacity hover:opacity-90"
        >
          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[var(--logo-ring)] bg-white shadow-sm">
            <Image
              src="/images/honk-logo.png"
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
        </button>

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
