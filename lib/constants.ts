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
    passengerAllowed: true,
    image: "🛵",
    imageSrc: "/images/50cc.jpeg",
    color: "#3d6b4a",
    features: [
      "Automatic — twist and go",
      "Car licence accepted (QLD rules apply)",
      "Passenger allowed only with a full motorcycle licence",
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
    imageSrc: "/images/125cc.jpeg",
    color: "#2f4a3c",
    features: [
      "Retro style, comfortable ride",
      "Motorcycle licence required",
      "Passenger allowed (full motorcycle licence required)",
      "500 km included per week",
    ],
  },
];

export const PRICING_RULES: PricingRule[] = [
  { label: "Minimum hire", value: "2 weeks", icon: "📅" },
  { label: "Security deposit", value: "$300 (refundable)", icon: "🔐" },
  { label: "Delivery", value: "$40 Sunshine Coast", icon: "🚚" },
  { label: "Free pickup", value: "Tewantin or Maroochydore", icon: "📍" },
  { label: "Included distance", value: "500 km / week", icon: "🛣️" },
  { label: "Extra distance", value: "$0.23 / km over allowance", icon: "⚡" },
];

export const FAQS: FAQ[] = [
  {
    question: "What happens if I’m involved in an accident?",
    answer:
      "Safety first — make sure you and anyone else involved are safe. If there are injuries or significant damage call 000 immediately. Exchange details with any other parties involved, take photos of the scene, both vehicles, and any damage. Contact us straight away on 0493 654 132 — we’re available 24/7. Do not admit fault or liability to the other party.",
  },
  {
    question: "Do I need my own insurance?",
    answer:
      "All Honk Hire Co scooters are covered by third party, fire and theft insurance. This means damage you cause to another person’s vehicle or property is covered. It does not cover damage to the hired scooter itself — you are responsible for the scooter while it’s in your care. We recommend having your own travel insurance that covers personal injury and recreational activities.",
  },
  {
    question: "What if the scooter breaks down?",
    answer:
      "We offer 24/7 breakdown support. If your scooter breaks down contact us immediately on 0493 654 132. For mechanical faults not caused by misuse we’ll arrange repair or a replacement bike as quickly as possible at no cost to you.",
  },
  {
    question: "Are the scooters tracked?",
    answer:
      "Yes — all bikes are fitted with GPS tracking devices. This is for fleet management, security, and your safety. In the event of theft or a breakdown we can locate the bike immediately.",
  },
  {
    question: "Is servicing included?",
    answer:
      "Yes — for long term hire all scheduled servicing is included. Our bikes are serviced every 2,000km. When your bike is due we’ll arrange a quick 10 minute oil change at a convenient time and location. You won’t be left without a bike.",
  },
  {
    question: "What ID do I need to hire?",
    answer:
      "You’ll need a valid driver’s licence — any country accepted for the 50cc. An open motorcycle licence is required for the 125cc. We’ll ask you to send a photo of the front and back of your licence via WhatsApp before your hire is confirmed.",
  },
  {
    question: "Can I carry a passenger?",
    answer:
      "Only riders with a full motorcycle licence can carry a passenger. With a full motorcycle licence, passengers are allowed on both 50cc and 125cc scooters where road rules permit.",
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
