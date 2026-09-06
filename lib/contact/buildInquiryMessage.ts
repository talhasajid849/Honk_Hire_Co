import type { ScooterTierId } from "@/lib/booking/pricingConfig";

export interface InquiryDraft {
  scooterId: ScooterTierId | "";
  scooterLabel: string;
  weeks: number;
  wantsDelivery: boolean;
  weeklyRate: number;
  deposit: number;
  delivery: number;
  dueTodayFormatted: string;
  fullStayFormatted: string;
  notes: string;
}

/** Composes a polite enquiry body from the hire planner (pure function). */
export function buildInquiryMessage(d: InquiryDraft): string {
  const lines: string[] = [
    "Hi Honk Hire Co — enquiry from your website:",
    "",
    d.scooterId
      ? `• Scooter: ${d.scooterLabel}`
      : "• Scooter: (please advise)",
    `• Weeks: ${d.weeks >= 1 ? d.weeks : "—"}`,
    `• Delivery ($40 within 20km of Tewantin, quoted individually beyond that): ${d.wantsDelivery ? "Yes" : "No — I'll use free Tewantin pickup"}`,
  ];

  if (d.scooterId && d.weeks >= 1) {
    lines.push(
      "",
      "Rough estimate (guide only):",
      `• Week 1 (due now): $${d.weeklyRate}`,
      `• Bond: $${d.deposit}`
    );
    if (d.delivery > 0) {
      lines.push(`• Delivery: $${d.delivery}`);
    }
    lines.push(`• Due today: ${d.dueTodayFormatted}`);
    if (d.weeks > 1) {
      lines.push(
        `• Then $${d.weeklyRate}/wk billed as you go — full ${d.weeks}-week stay est.: ${d.fullStayFormatted}`
      );
    }
  }

  lines.push("");
  if (d.notes.trim()) {
    lines.push("Notes:", d.notes.trim());
  } else {
    lines.push("I'd love to hear back with availability. Thanks!");
  }

  return lines.filter(Boolean).join("\n");
}
