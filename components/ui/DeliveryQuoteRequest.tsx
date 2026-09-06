"use client";

import { useState } from "react";
import { Truck } from "lucide-react";
import { mailtoHref } from "@/lib/contact/mailto";

interface DeliveryQuoteRequestProps {
  locationName?: string;
  className?: string;
}

export default function DeliveryQuoteRequest({ locationName, className }: DeliveryQuoteRequestProps) {
  const [address, setAddress] = useState("");

  const quoteHref = mailtoHref({
    subject: `Delivery quote request${locationName ? ` — ${locationName}` : ""}`,
    body: address.trim()
      ? `Hi Honk Hire Co, I'm outside the 20km free-delivery radius from Tewantin. Please quote delivery to:\n\n${address.trim()}\n\nThanks!`
      : "Hi Honk Hire Co, I'm outside the 20km free-delivery radius from Tewantin. Please quote delivery to my address:\n\n",
  });

  return (
    <div
      className={`rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] p-4 ${className ?? ""}`}
    >
      <p className="text-sm font-medium text-[var(--fg)]">Delivering beyond 20km of Tewantin?</p>
      <p className="mt-1 text-xs text-[var(--fg-muted)]">
        No fixed $40 rate applies past 20km — enter your address and we&apos;ll confirm an exact price.
      </p>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Delivery address or suburb"
        className="mt-3 w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm text-[var(--fg)] placeholder:text-[var(--fg-subtle)] transition-shadow focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30"
      />
      <a
        href={quoteHref}
        className="mt-3 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-[var(--accent-fg)] transition-colors hover:bg-[var(--accent-hover)]"
      >
        <Truck className="h-4 w-4" aria-hidden />
        Request a delivery quote
      </a>
    </div>
  );
}
