"use client";

import { siteConfig } from "@/data/siteConfig";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

export function WhatsAppIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347zM12 2C6.477 2 2 6.477 2 12c0 2.019.538 3.913 1.47 5.553L2 22l4.576-1.442C8.17 21.482 10.035 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.77 0-3.424-.467-4.86-1.284l-.348-.2-.25.079-2.585.814.829-2.527.085-.26-.217-.367C3.766 14.82 3.2 13.468 3.2 12c0-4.852 3.948-8.8 8.8-8.8s8.8 3.948 8.8 8.8-3.948 8.8-8.8 8.8z" />
    </svg>
  );
}

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const widgetRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Determine context-aware pre-filled WhatsApp message
  const getContextMessage = () => {
    if (!pathname) return siteConfig.defaultWhatsAppMessage;

    const path = pathname.toLowerCase();
    if (path.includes("visa")) {
      return "Hello Royal Travels, I would like to know more about your visa services.";
    }
    if (path.includes("recruitment") || path.includes("job") || path.includes("vacancy")) {
      return "Hello Royal Travels, I would like to know more about overseas recruitment opportunities.";
    }
    if (path.includes("ticket") || path.includes("flight")) {
      return "Hello Royal Travels, I would like to know more about flight ticketing services.";
    }
    if (path.includes("attestation") || path.includes("emigration")) {
      return "Hello Royal Travels, I would like to know more about certificate attestation and emigration services.";
    }
    if (path.includes("tour") || path.includes("umrah")) {
      return "Hello Royal Travels, I would like to know more about Umrah and tour packages.";
    }
    return siteConfig.defaultWhatsAppMessage;
  };

  const message = getContextMessage();
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;

  // Mouse hover handlers for desktop smooth interaction
  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 250);
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  return (
    <motion.div
      ref={widgetRef}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="fixed z-40 right-[14px] sm:right-[16px] lg:right-[20px] bottom-[18px] sm:bottom-[24px] lg:bottom-[30px] flex flex-col items-end pointer-events-auto"
    >
      {/* Expanded Contact Panel */}
      <div
        className={`mb-3 w-[290px] sm:w-[320px] bg-white rounded-2xl p-5 shadow-2xl border border-stone-200/90 transition-all duration-300 transform origin-bottom-right ${isOpen
          ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
          : "opacity-0 scale-95 translate-y-3 pointer-events-none"
          }`}
        role="dialog"
        aria-label="WhatsApp Contact Panel"
      >
        <div className="flex items-start justify-between border-b border-stone-100 pb-3 mb-3">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#0075be] font-sans block mb-0.5">
              WHATSAPP US
            </span>
            <h3 className="font-serif text-lg font-bold text-[#101A2B]">
              Chat with Royal Travels
            </h3>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-stone-400 hover:text-stone-700 p-1 rounded-full hover:bg-stone-100 transition-colors"
            aria-label="Close WhatsApp card"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <p className="text-xs text-stone-500 font-sans mb-3">
          Get assistance with:
        </p>

        <ul className="space-y-2 mb-5 text-xs text-[#101A2B] font-medium font-sans">
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0075be]" />
            Visa Services
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0075be]" />
            Overseas Recruitment
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0075be]" />
            Attestation & Emigration
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0075be]" />
            Flight Ticketing
          </li>
        </ul>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
          className="w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-[#0075be] hover:bg-[#0086C2] text-white py-3 px-4 text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 font-sans"
        >
          <WhatsAppIcon className="h-4 w-4 text-white" />
          <span>CHAT ON WHATSAPP</span>
        </a>
      </div>

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat with Royal Travels on WhatsApp"
        aria-expanded={isOpen}
        className="relative group flex h-[52px] w-[52px] sm:h-[56px] sm:w-[56px] items-center justify-center rounded-full bg-[#0075be] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#0075be] focus:ring-offset-2"
      >
        {/* Icon */}
        <WhatsAppIcon className="relative z-10 h-7 w-7 text-white transition-transform duration-300 group-hover:scale-105" />
      </button>
    </motion.div>
  );
}
