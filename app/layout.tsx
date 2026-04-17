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
  title: "Honk Hire Co | Scooter Hire Sunshine Coast",
  description:
    "Scooter hire on the Sunshine Coast, QLD. 50cc from $150/week, 125cc from $160/week. Noosa to Caloundra. Free pickup at Tewantin or Maroochydore.",
  keywords: [
    "scooter hire sunshine coast",
    "scooter rental noosa",
    "scooter hire caloundra",
    "honk hire co",
  ],
  icons: {
    icon: "/images/honk-logo.png",
    shortcut: "/images/honk-logo.png",
    apple: "/images/honk-logo.png",
  },
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
        <link rel="icon" href="/images/honk-logo.png" type="image/png" />
        <link rel="shortcut icon" href="/images/honk-logo.png" />
        <link rel="apple-touch-icon" href="/images/honk-logo.png" />
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
