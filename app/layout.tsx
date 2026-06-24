import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { THEME_STORAGE_KEY } from "@/lib/theme/types";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://honkhireco.com.au"),
  title: "Scooter Hire Sunshine Coast | Pickup in Tewantin & Delivery | Honk Hire Co",
  description:
    "Affordable scooter hire on the Sunshine Coast with pickup from Tewantin or delivery to your door. Weekly rentals from Noosa to Caloundra. Book online today.",
  keywords: [
    "scooter hire sunshine coast",
    "scooter rental noosa",
    "scooter hire caloundra",
    "scooter hire tewantin",
    "honk hire co",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Scooter Hire Sunshine Coast | Pickup in Tewantin & Delivery | Honk Hire Co",
    description:
      "Affordable scooter hire on the Sunshine Coast with pickup from Tewantin or delivery to your door. Weekly rentals from Noosa to Caloundra.",
    url: "https://honkhireco.com.au",
    siteName: "Honk Hire Co",
    type: "website",
    locale: "en_AU",
    images: [
      {
        url: "/images/honk-logo.jpg",
        width: 512,
        height: 512,
        alt: "Honk Hire Co scooter hire",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scooter Hire Sunshine Coast | Pickup in Tewantin & Delivery | Honk Hire Co",
    description:
      "Affordable scooter hire on the Sunshine Coast with pickup from Tewantin or delivery to your door.",
    images: ["/images/honk-logo.jpg"],
  },
  icons: {
    icon: "/images/honk-logo.jpg",
    shortcut: "/images/honk-logo.jpg",
    apple: "/images/honk-logo.jpg",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Honk Hire Co",
  description:
    "Affordable scooter hire on the Sunshine Coast with pickup from Tewantin or delivery to your door.",
  url: "https://honkhireco.com.au",
  telephone: "0493 654 132",
  address: {
    "@type": "PostalAddress",
    streetAddress: "10 Forest Ct",
    addressLocality: "Tewantin",
    addressRegion: "QLD",
    postalCode: "4565",
    addressCountry: "AU",
  },
  areaServed: [
    "Noosa Heads",
    "Tewantin",
    "Maroochydore",
    "Caloundra",
    "Sunshine Coast",
  ],
  sameAs: ["https://www.facebook.com/HonkHireCo/", "https://www.instagram.com/honkhireco/"],
};

const themeInitScript = `(function(){try{var k='${THEME_STORAGE_KEY}';var s=localStorage.getItem(k);var d=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';var t=s==='light'||s==='dark'?s:d;document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t==='dark'?'dark':'light';}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="zThE97Bc_hO8EZ-xy_5ie6swTNM41Qn65UXQWldq3Ek" />
        <link rel="icon" href="/images/honk-logo.jpg" type="image/jpeg" />
        <link rel="shortcut icon" href="/images/honk-logo.jpg" />
        <link rel="apple-touch-icon" href="/images/honk-logo.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${dmSans.variable} font-sans-ui antialiased grain min-h-screen`}
      >
        <Script id="honk-theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <ThemeProvider>
          {children}
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
