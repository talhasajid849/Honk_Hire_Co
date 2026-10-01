/** Canonical public contact endpoints — single source of truth for the site. */

export const CONTACT_EMAIL = "info@honkhireco.com.au";
export const CONTACT_PHONE_DISPLAY = "+61 493 654 132";
export const WHATSAPP_PHONE_E164 = "61493654132";

export const FACEBOOK_URL = "https://www.facebook.com/HonkHireCo/";

export const INSTAGRAM_URL = "https://www.instagram.com/honkhireco/";

/** WhatsApp click-to-chat link with a pre-filled message. */
export function whatsappHref(message: string): string {
  return `https://wa.me/${WHATSAPP_PHONE_E164}?text=${encodeURIComponent(message)}`;
}
