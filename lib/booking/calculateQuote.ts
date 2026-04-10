import {
  DELIVERY_FEE,
  MIN_HIRE_WEEKS,
  SECURITY_DEPOSIT,
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
  estimatedTotal: string;
  validationMessage?: string;
}

/**
 * Pure hire quote — no I/O. Open/closed: new fees extend pricingConfig, not this function.
 */
export function calculateBookingQuote(input: BookingQuoteInput): BookingQuoteResult {
  const weeklyRate =
    input.scooterId && input.scooterId in WEEKLY_RATES
      ? WEEKLY_RATES[input.scooterId as ScooterTierId]
      : 0;

  const weeks = Number.isFinite(input.weeks) ? Math.max(0, Math.floor(input.weeks)) : 0;
  const delivery = input.wantsDelivery ? DELIVERY_FEE : 0;

  if (!input.scooterId || weeks < MIN_HIRE_WEEKS) {
    return {
      valid: false,
      weeklyRate,
      weeksBilled: weeks,
      hireSubtotal: weeklyRate * weeks,
      deposit: SECURITY_DEPOSIT,
      delivery,
      estimatedTotal: "—",
      validationMessage:
        !input.scooterId
          ? "Select a scooter."
          : `Minimum hire is ${MIN_HIRE_WEEKS} weeks.`,
    };
  }

  const hireSubtotal = weeklyRate * weeks;
  const total = hireSubtotal + SECURITY_DEPOSIT + delivery;

  return {
    valid: true,
    weeklyRate,
    weeksBilled: weeks,
    hireSubtotal,
    deposit: SECURITY_DEPOSIT,
    delivery,
    estimatedTotal: total.toLocaleString("en-AU", {
      style: "currency",
      currency: "AUD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }),
  };
}
