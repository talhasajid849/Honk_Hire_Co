export interface ScooterType {
  id: string;
  name: string;
  cc: number;
  weeklyPrice: number;
  licenceRequired: string;
  passengerAllowed: boolean;
  image: string;
  /** Optional photo for fleet cards */
  imageSrc?: string;
  features: string[];
  /** Accent for card highlights (hex) */
  color: string;
}

export interface PricingRule {
  label: string;
  value: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
