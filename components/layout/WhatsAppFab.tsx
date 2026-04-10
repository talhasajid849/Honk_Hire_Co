"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import { defaultGreetingMessage, whatsAppHref } from "@/lib/contact/whatsapp";

export default function WhatsAppFab() {
  const href = whatsAppHref(defaultGreetingMessage());

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 320, damping: 22, delay: 0.6 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      className="animate-wa-pulse fixed bottom-6 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[var(--whatsapp)] text-[var(--whatsapp-fg)] shadow-lg shadow-[var(--whatsapp)]/35 md:bottom-8 md:right-8 md:h-16 md:w-16"
    >
      <FaWhatsapp className="h-8 w-8 md:h-9 md:w-9" aria-hidden />
    </motion.a>
  );
}
