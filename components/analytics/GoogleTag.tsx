import Script from "next/script";

// Google tag (gtag.js) for Google Ads. The ID (AW-XXXXXXXXXX) comes from Google Ads and is set once in
// NEXT_PUBLIC_GOOGLE_TAG_ID (Vercel, Settings, Environment Variables). With no ID nothing is added.
const GOOGLE_TAG_ID = (process.env.NEXT_PUBLIC_GOOGLE_TAG_ID ?? "").trim();
const VALID_ID = /^(AW|G|GT)-[A-Z0-9]+$/;

export default function GoogleTag() {
  if (!VALID_ID.test(GOOGLE_TAG_ID)) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`} strategy="afterInteractive" />
      <Script id="google-tag" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GOOGLE_TAG_ID}');`}
      </Script>
    </>
  );
}
