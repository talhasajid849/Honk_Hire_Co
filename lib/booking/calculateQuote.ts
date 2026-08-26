import {
  DELIVERY_FEE,
  LONG_TERM_THRESHOLD_WEEKS,
  MIN_HIRE_WEEKS,
  SECURITY_DEPOSIT,
  SHORT_TERM_WEEKLY_RATES,
  WEEKLY_RATES,
  type ScooterTierId,
} from "./pricingConfig";

export interface BookingQuoteInput {
  scooterId: ScooterTierId | "";
  weeks: number;
  wantsDelivery: boolean;
}

export interface BookingQuoteResult {
  valid: boolean;
  weeklyRate: number;
  weeksBilled: number;
  hireSubtotal: number;
  deposit: number;
  delivery: number;
  dueToday: number;
  estimatedTotal: string;
  fullStayEstimate: string;
  validationMessage?: string;
}

const formatAud = (n: number) =>
  n.toLocaleString("en-AU", {
    style: "currency",
    currency: "AUD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

/**
 * Pure hire quote — no I/O. Open/closed: new fees extend pricingConfig, not this function.
 *
 * Only the first week is charged upfront (plus bond and delivery) — the rest of a
 * multi-week stay is billed as you go, so the "due today" total must never be the
 * full-stay hire cost.
 */
export function calculateBookingQuote(input: BookingQuoteInput): BookingQuoteResult {
  const weeks = Number.isFinite(input.weeks) ? Math.max(0, Math.floor(input.weeks)) : 0;

  const weeklyRate =
    input.scooterId && input.scooterId in WEEKLY_RATES
      ? weeks >= LONG_TERM_THRESHOLD_WEEKS
        ? WEEKLY_RATES[input.scooterId as ScooterTierId]
        : SHORT_TERM_WEEKLY_RATES[input.scooterId as ScooterTierId]
      : 0;

  const delivery = input.wantsDelivery ? DELIVERY_FEE : 0;

  if (!input.scooterId || weeks < MIN_HIRE_WEEKS) {
    return {
      valid: false,
      weeklyRate,
      weeksBilled: weeks,
      hireSubtotal: weeklyRate * weeks,
      deposit: SECURITY_DEPOSIT,
      delivery,
      dueToday: 0,
      estimatedTotal: "—",
      fullStayEstimate: "—",
      validationMessage: !input.scooterId
        ? "Select a scooter."
        : `Minimum hire is ${MIN_HIRE_WEEKS} week${MIN_HIRE_WEEKS === 1 ? "" : "s"}.`,
    };
  }

  const hireSubtotal = weeklyRate * weeks;
  const dueToday = weeklyRate + SECURITY_DEPOSIT + delivery;

  return {
    valid: true,
    weeklyRate,
    weeksBilled: weeks,
    hireSubtotal,
    deposit: SECURITY_DEPOSIT,
    delivery,
    dueToday,
    estimatedTotal: formatAud(dueToday),
    fullStayEstimate: formatAud(hireSubtotal + SECURITY_DEPOSIT + delivery),
  };
}
