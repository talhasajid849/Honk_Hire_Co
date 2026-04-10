/**
 * WhatsApp deep links — client-side only, no server.
 * Replace WHATSAPP_E164 with your Australian mobile in international format (no +).
 */

export const WHATSAPP_E164 = "61400000000";

const BASE = `https://wa.me/${WHATSAPP_E164}`;

export function whatsAppHref(message?: string): string {
  const trimmed = message?.trim();
  if (!trimmed) return BASE;
  return `${BASE}?text=${encodeURIComponent(trimmed)}`;
}

export function defaultGreetingMessage(): string {
  return "Hi Honk Hire Co! I'd like to check availability for a scooter hire on the Sunshine Coast.";
}

export function quickScooterMessage(scooterName: string, cc: number): string {
  return `Hi Honk Hire Co! I'm interested in the ${scooterName} (${cc}cc). What's available?`;
}
