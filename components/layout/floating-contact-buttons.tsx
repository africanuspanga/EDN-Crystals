"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { siteAssets } from "@/data/assets";
import { Phone, ArrowUp } from "lucide-react";

const whatsappEnabled = true;

export function FloatingContactButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const phoneHref = `tel:${siteConfig.telephone.replace(/\s/g, "")}`;
  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber.replace(/\+/g, "")}`;

  return (
    <>
      {/* Desktop floating buttons */}
      <div className="fixed bottom-6 right-6 z-40 hidden flex-col items-end gap-3 lg:flex">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#002a8a] text-white shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#d2a456]"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        )}
        {whatsappEnabled && (
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#d2a456]"
            aria-label="Chat on WhatsApp"
          >
            <Image
              src={siteAssets.whatsappIcon}
              alt="WhatsApp"
              fill
              className="object-cover"
              sizes="48px"
            />
          </a>
        )}
        <a
          href={phoneHref}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d2a456] text-[#002a8a] shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Call us"
        >
          <Phone className="h-5 w-5" />
        </a>
      </div>

      {/* Mobile bottom contact bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-around gap-3 border-t border-white/10 bg-[#002a8a]/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-lg lg:hidden">
        <a
          href={phoneHref}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-white/10 py-3 text-sm font-medium text-white transition-colors hover:bg-white/20"
        >
          <Phone className="h-4 w-4" />
          Call
        </a>
        {whatsappEnabled && (
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#128C7E]"
          >
            <span className="relative block h-5 w-5 overflow-hidden rounded-full">
              <Image
                src={siteAssets.whatsappIcon}
                alt="WhatsApp"
                fill
                className="object-cover"
                sizes="20px"
              />
            </span>
            WhatsApp
          </a>
        )}
        <Link
          href="/request-a-quote"
          className="flex flex-1 items-center justify-center rounded-full bg-white py-3 text-sm font-semibold text-[#002a8a] transition-colors hover:bg-white/90"
        >
          Quote
        </Link>
      </div>
    </>
  );
}
