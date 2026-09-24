export interface LocationHighlight {
  title: string;
  description: string;
}

export interface LocationData {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  tagline: string;
  intro: string;
  carUteSection: { heading: string; body: string };
  pickupType: "free" | "delivery";
  pickupLabel: string;
  /** "flat" = within the 20km $40 radius; "quote" = beyond it, priced individually. Omit for pickupType "free". */
  deliveryPricing?: "flat" | "quote";
  highlights: LocationHighlight[];
  nearbyLocations: string[];
}

export function locationPath(slug: string): string {
  return `/scooter-hire-${slug}`;
}

export function getLocation(slug: string): LocationData | null {
  return LOCATIONS[slug] ?? null;
}

export const LOCATIONS: Record<string, LocationData> = {
  "sunshine-coast": {
    slug: "sunshine-coast",
    name: "Sunshine Coast",
    metaTitle: "Car, Ute & Scooter Hire Sunshine Coast | From $135/week | Honk Hire Co",
    metaDescription:
      "Rent a car, ute or scooter anywhere on the Sunshine Coast. Free pickup from Tewantin or delivery across the Coast. Noosa to Caloundra. Book now.",
    h1: "Car, Ute & Scooter Hire Sunshine Coast",
    tagline: "From Noosa to Caloundra — pickup or delivery, your way",
    intro:
      "Honk Hire Co covers the full Sunshine Coast. Free pickup from Tewantin, or we deliver your car, ute or scooter anywhere on the Coast — $40 covers delivery within 20km of our Tewantin base, and anywhere further is quoted individually based on your exact location. Weekly hire from $135, minimum 2 weeks. 50cc automatic (car licence accepted) or 125cc retro — both built for coastal riding.",
    carUteSection: {
      heading: "Need a car or ute instead?",
      body:
        "Prefer four wheels? We've also got you covered. Our MG3 hatchback is perfect for couples and small families exploring the Coast, and our Amarok ute suits tradies, movers, and anyone needing extra space. Same easy process, same Tewantin pickup or Sunshine Coast delivery.",
    },
    pickupType: "free",
    pickupLabel: "Free pickup: Tewantin · $40 delivery within 20km, quoted beyond",
    highlights: [
      {
        title: "Noosa & Noosa Heads",
        description:
          "The northern jewel of the Sunshine Coast — National Park, Hastings St, and pristine beaches. Delivered to your door or free pickup from nearby Tewantin.",
      },
      {
        title: "Maroochydore & Mooloolaba",
        description:
          "The Coast's most popular beach strips. Cruise The Esplanade and Cotton Tree without the parking headache.",
      },
      {
        title: "Caloundra & the south",
        description:
          "Kings Beach, Bulcock Beach, and views to the Glass House Mountains — all reachable; delivery this far south is quoted individually.",
      },
      {
        title: "Tewantin — our home base",
        description:
          "Free pickup from 10 Forest Ct, Tewantin. 5 minutes from Noosa and the most cost-effective way to start your ride.",
      },
    ],
    nearbyLocations: ["noosa", "tewantin", "maroochydore", "mooloolaba", "caloundra"],
  },

  noosa: {
    slug: "noosa",
    name: "Noosa",
    metaTitle: "Car, Ute & Scooter Hire Noosa | Rent Near Noosa Heads | Honk Hire Co",
    metaDescription:
      "Explore Noosa Heads, the National Park & Hastings Street by scooter, car or ute. Delivery to Noosa available. Book with Honk Hire Co.",
    h1: "Car, Ute & Scooter Hire Noosa",
    tagline: "Noosa National Park, Hastings Street & the Noosa River — on your schedule",
    intro:
      "Noosa is one of Australia's most iconic coastal destinations, whether you're weaving through town on a scooter or exploring further afield in a car or ute, we've got the right vehicle for it. We deliver your scooter to your Noosa accommodation for $40 — then you ride between Main Beach, the National Park, and Hastings Street without ever stressing about parking.",
    carUteSection: {
      heading: "Prefer a car or ute in Noosa?",
      body:
        "If you're travelling with family, carrying luggage, or just prefer four wheels, our MG3 (car) and Amarok (ute) are available with delivery to Noosa too.",
    },
    pickupType: "delivery",
    pickupLabel: "$40 flat delivery to Noosa",
    deliveryPricing: "flat",
    highlights: [
      {
        title: "Noosa National Park",
        description:
          "Ride to the park entrance and hit the coastal walking tracks. No parking drama, no shuttle bus needed.",
      },
      {
        title: "Hastings Street",
        description:
          "Boutiques, cafes, and restaurants without the traffic. A scooter fits anywhere along Hastings Street.",
      },
      {
        title: "Noosa River & Noosaville",
        description:
          "Follow the river west through Noosaville — quieter, local, and beautiful.",
      },
      {
        title: "Sunshine Beach",
        description:
          "A 5-minute ride south of Main Beach. Less touristy, just as good.",
      },
    ],
    nearbyLocations: ["tewantin", "maroochydore", "sunshine-coast"],
  },

  tewantin: {
    slug: "tewantin",
    name: "Tewantin",
    metaTitle: "Car, Ute & Scooter Hire Tewantin | Free Pickup | Honk Hire Co",
    metaDescription:
      "Free pickup on scooters, cars and utes from our Tewantin base. Explore the Sunshine Coast your way. Book with Honk Hire Co today.",
    h1: "Car, Ute & Scooter Hire Tewantin",
    tagline: "Our home base — free pickup, 5 minutes from Noosa",
    intro:
      "Tewantin is where Honk Hire Co is based, making it the most cost-effective place to start your Sunshine Coast adventure. Pick up your car, ute or scooter for free from 10 Forest Ct and you are immediately minutes from Noosa, the Noosa River, and the National Park — with no delivery fee to pay.",
    carUteSection: {
      heading: "Cars and utes also available for free pickup",
      body:
        "Since Tewantin is our home base, it's the most cost-effective way to pick up any vehicle in our fleet, not just scooters. Our MG3 (car) and Amarok (ute) are both available for free pickup here too.",
    },
    pickupType: "free",
    pickupLabel: "Free pickup — 10 Forest Ct, Tewantin QLD 4565",
    highlights: [
      {
        title: "Save $40 with free pickup",
        description:
          "Collect directly from our Tewantin address and skip the delivery fee entirely. In and out in minutes.",
      },
      {
        title: "5 minutes from Noosa Heads",
        description:
          "Tewantin sits just across the Noosa River from Noosa Heads. You are immediately in the thick of things.",
      },
      {
        title: "Noosa River Ferry",
        description:
          "Cross the river by the pontoon ferry and arrive in Noosaville along the waterfront.",
      },
      {
        title: "Tewantin National Park",
        description:
          "Bush trails right on your doorstep — a quiet, beautiful contrast to the busy beach towns nearby.",
      },
    ],
    nearbyLocations: ["noosa", "maroochydore", "sunshine-coast"],
  },

  caloundra: {
    slug: "caloundra",
    name: "Caloundra",
    metaTitle: "Car, Ute & Scooter Hire Caloundra | Honk Hire Co",
    metaDescription:
      "Rent a scooter, car or ute in Caloundra. Delivery quoted individually, free pickup from nearby Tewantin. Book with Honk Hire Co.",
    h1: "Car, Ute & Scooter Hire Caloundra",
    tagline: "Kings Beach, Bulcock Beach & the Glass House Mountains — all within reach",
    intro:
      "Caloundra sits at the southern gateway to the Sunshine Coast with a string of beautiful beaches and a relaxed pace that makes scooter riding genuinely enjoyable but if you prefer 4 wheels, we’ve got you covered. We deliver straight to your accommodation — Caloundra is outside our 20km flat-rate radius from Tewantin, so delivery here is quoted individually based on your exact address — then the whole coastline is yours.",
    carUteSection: {
      heading: "Also need a car or ute in Caloundra?",
      body:
        "Kings Beach, Bulcock Beach and the Glass House Mountains are all easy to reach, whether you're on a scooter or prefer our MG3 (car) or Amarok (ute).",
    },
    pickupType: "delivery",
    pickupLabel: "Delivery quoted — outside 20km radius",
    deliveryPricing: "quote",
    highlights: [
      {
        title: "Kings Beach",
        description:
          "Caloundra's most popular patrolled beach. Pull up on the esplanade and walk straight in.",
      },
      {
        title: "Bulcock Beach",
        description:
          "Calmer water and a great strip of restaurants and cafes right on the beachfront.",
      },
      {
        title: "Glass House Mountains views",
        description:
          "Ride a little west and catch views of the iconic volcanic peaks — especially beautiful at sunrise.",
      },
      {
        title: "Pumicestone Passage",
        description:
          "The scenic waterway between the mainland and Bribie Island — flat, coastal, and great scooter territory.",
      },
    ],
    nearbyLocations: ["mooloolaba", "maroochydore", "sunshine-coast"],
  },

  mooloolaba: {
    slug: "mooloolaba",
    name: "Mooloolaba",
    metaTitle: "Car, Ute & Scooter Hire Mooloolaba | Honk Hire Co",
    metaDescription:
      "Rent a scooter, car or ute in Mooloolaba. Delivery available, free pickup from nearby Tewantin. Book with Honk Hire Co.",
    h1: "Car, Ute & Scooter Hire Mooloolaba",
    tagline: "The Esplanade, the marina & Alexandra Headland — cruise it all",
    intro:
      "Mooloolaba is one of the Sunshine Coast's most popular beach towns and one of the best for scooter riding but if you prefer 4 wheels, we’ve got you covered. The flat esplanade, the marina strip, and the headland roads make for easy, enjoyable cruising — and we deliver your car, ute or scooter right to where you are staying. Mooloolaba sits outside our 20km flat-rate radius from Tewantin, so delivery is quoted individually based on your exact address.",
    carUteSection: {
      heading: "Also need a car or ute in Mooloolaba?",
      body:
        "Cruising the Esplanade is great on a scooter, but if you'd rather four wheels, our MG3 (car) and Amarok (ute) are available with delivery to Mooloolaba too.",
    },
    pickupType: "delivery",
    pickupLabel: "Delivery quoted — outside 20km radius",
    deliveryPricing: "quote",
    highlights: [
      {
        title: "Mooloolaba Beach & Esplanade",
        description:
          "One of Queensland's top-rated beaches with a wide, flat esplanade that is made for slow cruising.",
      },
      {
        title: "Mooloolah River & Marina",
        description:
          "Explore the marina area at your own pace — fishing, dining, or just watching the boats come in.",
      },
      {
        title: "Alexandra Headland",
        description:
          "A 5-minute ride north brings you to Alex, with panoramic views and great surf.",
      },
      {
        title: "SEA LIFE Sunshine Coast",
        description:
          "Easy scooter access with parking right out front — great for a day out with the family.",
      },
    ],
    nearbyLocations: ["maroochydore", "caloundra", "sunshine-coast"],
  },

  maroochydore: {
    slug: "maroochydore",
    name: "Maroochydore",
    metaTitle: "Car, Ute & Scooter Hire Maroochydore | Honk Hire Co",
    metaDescription:
      "Rent a scooter, car or ute in Maroochydore. Delivery available, free pickup from nearby Tewantin. Book with Honk Hire Co.",
    h1: "Car, Ute & Scooter Hire Maroochydore",
    tagline: "Cotton Tree, Alexandra Headland & the Sunshine Coast hub — delivered to your door",
    intro:
      "Maroochydore is the commercial and lifestyle heart of the Sunshine Coast. We deliver your car, ute or scooter straight to your accommodation — Maroochydore sits outside our 20km flat-rate radius from Tewantin, so delivery is quoted individually based on your exact address — then you are instantly positioned to ride north toward Noosa or south toward Caloundra. Cotton Tree, Alexandra Headland, and the new city centre are all within easy reach.",
    carUteSection: {
      heading: "Also need a car or ute in Maroochydore?",
      body:
        "Whether it's for exploring The Esplanade or getting around for work, our MG3 (car) and Amarok (ute) are available with delivery to Maroochydore.",
    },
    pickupType: "delivery",
    pickupLabel: "Delivery quoted — outside 20km radius",
    deliveryPricing: "quote",
    highlights: [
      {
        title: "Cotton Tree",
        description:
          "A beautiful riverside park on the Maroochy River with flat, easy paths and a great local vibe.",
      },
      {
        title: "Alexandra Headland",
        description:
          "Just north of Maroochydore — world-class surf, panoramic coastal views, and easy scooter access.",
      },
      {
        title: "Sunshine Coast Airport nearby",
        description:
          "Flying in? Maroochydore is minutes from the airport — collect your scooter and start riding immediately.",
      },
      {
        title: "Sunshine Coast CBD",
        description:
          "Maroochydore's emerging new city precinct is a great urban cruise on two wheels.",
      },
    ],
    nearbyLocations: ["mooloolaba", "tewantin", "sunshine-coast"],
  },
};
