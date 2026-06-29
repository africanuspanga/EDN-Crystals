"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { DesktopNavigation } from "./desktop-navigation";
import { MobileNavigation } from "./mobile-navigation";
import { Button } from "@/components/shared/button";
import { siteConfig } from "@/data/site-config";
import { siteAssets } from "@/data/assets";
import { Menu } from "lucide-react";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-6 lg:px-10 transition-all duration-300 ${
          scrolled ? "pt-2 sm:pt-3" : ""
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1440px] items-center justify-between rounded-full border px-4 py-3 shadow-[0_16px_50px_rgba(0,0,0,0.20)] backdrop-blur-xl transition-all duration-300 sm:px-5 ${
            scrolled
              ? "border-white/10 bg-[#1b294c]/95 py-2.5"
              : "border-white/15 bg-[#1b294c]/80 py-3.5"
          }`}
        >
          <Link href="/" className="flex items-center">
            <span className="relative block h-12 w-12 overflow-hidden rounded-full bg-white p-1.5 sm:h-14 sm:w-14">
              <Image
                src={siteAssets.logo}
                alt={`${siteConfig.name} logo`}
                fill
                className="object-contain"
                priority
                sizes="(max-width: 640px) 48px, 56px"
              />
            </span>
          </Link>

          <DesktopNavigation />

          <div className="flex items-center gap-3">
            <Button
              href="/request-a-quote"
              variant="primary"
              className="hidden px-5 py-2.5 text-xs sm:inline-flex lg:px-6 lg:py-3 lg:text-sm"
            >
              Request a Quote
            </Button>
            <button
              onClick={() => setMobileOpen(true)}
              className="inline-flex rounded-full p-2.5 text-white transition-colors hover:bg-white/10 lg:hidden"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>
      <MobileNavigation isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
