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
      className="fixed bottom-5 right-5 z-[70] inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-transform hover:scale-[1.02] hover:bg-[#1ebe5d] active:scale-[0.98]"
    >
      <FaWhatsapp className="h-5 w-5" aria-hidden />
      <span>WhatsApp</span>
    </a>
  );
}
