import type { Metadata } from "next";
import { LocationPageTemplate } from "@/components/location/LocationPageTemplate";
import { LOCATIONS } from "@/lib/locations";
import { buildLocalBusinessSchema } from "@/lib/schema";

const location = LOCATIONS["sunshine-coast"];

export const metadata: Metadata = {
  metadataBase: new URL("https://honkhireco.com.au"),
  title: location.metaTitle,
  description: location.metaDescription,
  alternates: { canonical: "/scooter-hire-sunshine-coast" },
  openGraph: {
    title: location.metaTitle,
    description: location.metaDescription,
    url: "https://honkhireco.com.au/scooter-hire-sunshine-coast",
    siteName: "Honk Hire Co",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: location.metaTitle,
    description: location.metaDescription,
  },
};

const localBusinessSchema = buildLocalBusinessSchema([
  "Noosa", "Tewantin", "Noosaville", "Sunshine Beach",
  "Coolum Beach", "Maroochydore", "Mooloolaba",
  "Kawana", "Caloundra", "Sunshine Coast",
]);

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Scooter Hire Sunshine Coast",
  description: location.metaDescription,
  provider: {
    "@type": "LocalBusiness",
    name: "Honk Hire Co",
    telephone: "0493 654 132",
    url: "https://honkhireco.com.au",
    address: {
      "@type": "PostalAddress",
      streetAddress: "10 Forest Ct",
      addressLocality: "Tewantin",
      addressRegion: "QLD",
      postalCode: "4565",
      addressCountry: "AU",
    },
  },
  areaServed: {
    "@type": "State",
    name: "Sunshine Coast",
  },
  serviceType: "Scooter Hire",
  url: "https://honkhireco.com.au/scooter-hire-sunshine-coast",
};

export default function SunshineCoastPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />
      <LocationPageTemplate location={location} />
    </>
  );
}
