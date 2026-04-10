import type { ScooterTierId } from "@/lib/booking/pricingConfig";

export interface InquiryDraft {
  scooterId: ScooterTierId | "";
  scooterLabel: string;
  weeks: number;
  wantsDelivery: boolean;
  hireSubtotal: number;
  deposit: number;
  delivery: number;
  totalFormatted: string;
  notes: string;
}

/** Composes a polite WhatsApp message from the hire planner (pure function). */
export function buildInquiryMessage(d: InquiryDraft): string {
  const lines: string[] = [
    "Hi Honk Hire Co — enquiry from your website:",
    "",
    d.scooterId
      ? `• Scooter: ${d.scooterLabel}`
      : "• Scooter: (please advise)",
    `• Weeks: ${d.weeks >= 2 ? d.weeks : "—"} (min. 2 weeks)`,
    `• Sunshine Coast delivery ($30): ${d.wantsDelivery ? "Yes" : "No — I'll use free Tewantin/Maroochydore pickup"}`,
  ];

  if (d.scooterId && d.weeks >= 2) {
    lines.push("", "Rough estimate (guide only):", `• Hire: $${d.hireSubtotal.toLocaleString("en-AU")}`, `• Bond: $${d.deposit}`);
    if (d.delivery > 0) {
      lines.push(`• Delivery: $${d.delivery}`);
    }
    lines.push(`• Typical upfront total: ${d.totalFormatted}`);
  }

  lines.push("");
  if (d.notes.trim()) {
    lines.push("Notes:", d.notes.trim());
  } else {
    lines.push("I'd love to hear back with availability. Thanks!");
  }

  return lines.filter(Boolean).join("\n");
}
