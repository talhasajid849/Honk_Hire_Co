import type { Metadata } from "next";
import { LocationPageTemplate } from "@/components/location/LocationPageTemplate";
import { LOCATIONS } from "@/lib/locations";

const location = LOCATIONS.noosa;

export const metadata: Metadata = {
  metadataBase: new URL("https://honkhireco.com.au"),
  title: location.metaTitle,
  description: location.metaDescription,
  alternates: { canonical: "/scooter-hire-noosa" },
  openGraph: {
    title: location.metaTitle,
    description: location.metaDescription,
    url: "https://honkhireco.com.au/scooter-hire-noosa",
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

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Scooter Hire Noosa",
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
  areaServed: { "@type": "City", name: "Noosa Heads" },
  serviceType: "Scooter Hire",
  url: "https://honkhireco.com.au/scooter-hire-noosa",
};

export default function NoosaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />
      <LocationPageTemplate location={location} />
    </>
  );
}
