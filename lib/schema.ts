const openingHoursSpecification = {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: [
    "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday", "Sunday",
  ],
  opens: "08:00",
  closes: "18:00",
};

export function buildLocalBusinessSchema(areaServed: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://honkhireco.com.au/#business",
    name: "Honk Hire Co",
    description:
      "Weekly scooter hire on the Sunshine Coast. 50cc automatic from $150/week, car licence accepted. Free pickup from Tewantin or $40 delivery anywhere on the Sunshine Coast.",
    url: "https://honkhireco.com.au",
    telephone: "+61493654132",
    email: "info@honkhireco.com.au",
    image: "https://honkhireco.com.au/images/honk-logo.jpg",
    logo: "https://honkhireco.com.au/images/honk-logo.jpg",
    priceRange: "$150-$160 per week",
    currenciesAccepted: "AUD",
    address: {
      "@type": "PostalAddress",
      streetAddress: "10 Forest Ct",
      addressLocality: "Tewantin",
      addressRegion: "QLD",
      postalCode: "4565",
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -26.3956190,
      longitude: 153.0005820,
    },
    openingHoursSpecification,
    areaServed,
    sameAs: [
      "https://www.facebook.com/HonkHireCo/",
      "https://www.instagram.com/honkhireco/",
    ],
  };
}
