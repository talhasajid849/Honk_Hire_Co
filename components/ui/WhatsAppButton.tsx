import { FaWhatsapp } from "react-icons/fa6";
import { CONTACT_PHONE_DISPLAY, WHATSAPP_PHONE_E164 } from "@/lib/contact/site";

const whatsappHref = `https://wa.me/${WHATSAPP_PHONE_E164}?text=${encodeURIComponent("Hi Honk Hire Co, I would like to enquire about scooter hire.")}`;

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat on WhatsApp: ${CONTACT_PHONE_DISPLAY}`}
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-[70] inline-flex h-14 w-14 items-center justify-center gap-2 rounded-full bg-[#128c4a] text-sm font-bold text-white shadow-xl shadow-black/25 transition-transform hover:scale-[1.03] hover:bg-[#0f7a40] active:scale-[0.98] sm:bottom-5 sm:right-5 sm:h-auto sm:w-auto sm:px-5 sm:py-3.5"
    >
      <FaWhatsapp className="h-5 w-5" aria-hidden />
      <span className="hidden sm:inline">Book now</span>
    </a>
  );
}
