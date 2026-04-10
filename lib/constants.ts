import { ScooterType, PricingRule, NavItem, FAQ } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Rates", href: "#pricing" },
  { label: "Fleet", href: "#scooters" },
  { label: "FAQ", href: "#faq" },
  { label: "Book", href: "#contact" },
];

export const SCOOTERS: ScooterType[] = [
  {
    id: "50cc",
    name: "Coastal 50",
    cc: 50,
    weeklyPrice: 150,
    licenceRequired: "Car licence accepted",
    passengerAllowed: false,
    image: "🛵",
    imageSrc: "/images/honk-scooter-showcase.png",
    color: "#3d6b4a",
    features: [
      "Automatic — twist and go",
      "Car licence accepted (QLD rules apply)",
      "Solo rider only — no passengers",
      "500 km included per week",
    ],
  },
  {
    id: "125cc",
    name: "Classic 125",
    cc: 125,
    weeklyPrice: 160,
    licenceRequired: "Motorcycle licence required",
    passengerAllowed: true,
    image: "🏍️",
    imageSrc: "/images/honk-scooter-hero.png",
    color: "#2f4a3c",
    features: [
      "Retro style, comfortable ride",
      "Motorcycle licence required",
      "Passenger allowed",
      "500 km included per week",
    ],
  },
];

export const PRICING_RULES: PricingRule[] = [
  { label: "Minimum hire", value: "2 weeks", icon: "📅" },
  { label: "Security deposit", value: "$300 (refundable)", icon: "🔐" },
  { label: "Delivery", value: "$30 Sunshine Coast", icon: "🚚" },
  { label: "Free pickup", value: "Tewantin or Maroochydore", icon: "📍" },
  { label: "Included distance", value: "500 km / week", icon: "🛣️" },
  { label: "Extra distance", value: "$0.23 / km over allowance", icon: "⚡" },
];

export const FAQS: FAQ[] = [
  {
    question: "What licence do I need?",
    answer:
      "50cc: a valid car licence. 125cc: a valid motorcycle licence. If you are unsure, send your licence class on WhatsApp before you book.",
  },
  {
    question: "How do I book or pay?",
    answer:
      "All enquiries go through WhatsApp — we’ll confirm availability, pickup, and payment steps there. No email or web forms required.",
  },
  {
    question: "Can I carry a passenger?",
    answer:
      "125cc scooters allow a passenger where road rules permit. 50cc hires are solo only — no passengers.",
  },
  {
    question: "How does the security deposit work?",
    answer:
      "We hold a $300 refundable security deposit. It is returned when the scooter comes back in the agreed condition, subject to any extra-kilometre charges.",
  },
  {
    question: "What if I ride over 500 km in a week?",
    answer:
      "Additional kilometres are charged at $0.23/km over the weekly 500 km allowance. We reconcile at the end of your hire.",
  },
  {
    question: "Where is pickup and delivery?",
    answer:
      "Free pickup and drop-off at Tewantin or Maroochydore. Delivery anywhere on the Sunshine Coast (between Noosa and Caloundra) is $30 each way unless you collect from those hubs.",
  },
  {
    question: "What is the minimum hire?",
    answer:
      "Minimum hire is 2 weeks — perfect for a real Coast holiday without rushing.",
  },
];

export const SERVICE_AREA = [
  "Noosa Heads",
  "Noosaville",
  "Tewantin",
  "Sunrise Beach",
  "Marcus Beach",
  "Peregian",
  "Coolum",
  "Maroochydore",
  "Mooloolaba",
  "Kawana",
  "Caloundra",
];
