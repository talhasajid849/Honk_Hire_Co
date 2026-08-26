/** Central pricing constants — single source of truth for quote logic */

export const MIN_HIRE_WEEKS = 1;
export const SECURITY_DEPOSIT = 300;
export const DELIVERY_FEE = 40;
export const DELIVERY_FREE_RADIUS_KM = 30;
export const DELIVERY_EXTRA_KM_RATE = 1;
export const EXTRA_KM_RATE = 0.23;
export const INCLUDED_KM_PER_WEEK = 500;

/** Hires shorter than this many weeks are billed at SHORT_TERM_WEEKLY_RATES instead. */
export const LONG_TERM_THRESHOLD_WEEKS = 2;

/** Long-term rate (2+ weeks). */
export const WEEKLY_RATES = {
  "50cc": 135,
  "125cc": 145,
} as const;

/** Short-term rate (under 2 weeks). */
export const SHORT_TERM_WEEKLY_RATES = {
  "50cc": 180,
  "125cc": 200,
} as const;

export type ScooterTierId = keyof typeof WEEKLY_RATES;
