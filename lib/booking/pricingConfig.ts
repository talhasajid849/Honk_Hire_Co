/** Central pricing constants — single source of truth for quote logic */

export const MIN_HIRE_WEEKS = 2;
export const SECURITY_DEPOSIT = 300;
export const DELIVERY_FEE = 40;
/** Flat $40 delivery applies within this radius; beyond it, delivery is quoted individually. */
export const DELIVERY_FREE_RADIUS_KM = 20;
export const EXTRA_KM_RATE = 0.23;
export const INCLUDED_KM_PER_WEEK = 500;

export const WEEKLY_RATES = {
  "50cc": 135,
  "125cc": 145,
} as const;

export type ScooterTierId = keyof typeof WEEKLY_RATES;
