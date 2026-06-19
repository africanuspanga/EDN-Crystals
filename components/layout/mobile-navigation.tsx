"use client";

import Link from "next/link";
import { useEffect } from "react";
import { mainNav } from "@/data/navigation";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";
import { X, Phone } from "lucide-react";
import { siteConfig } from "@/data/site-config";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] lg:hidden" role="dialog" aria-modal="true">
      <div
        className="absolute inset-0 bg-[#07132f]/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="absolute right-0 top-0 h-full w-full max-w-sm overflow-y-auto bg-[#07132f] p-6 shadow-2xl">
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-white">Menu</span>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="mt-8" aria-label="Mobile">
          <ul className="space-y-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "block rounded-lg px-3 py-3 text-base font-medium transition-colors",
                    item.label === "Services"
                      ? "text-[#ce9f3d]"
                      : "text-white/90 hover:bg-white/10 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 border-t border-white/10 pt-6">
            <span className="px-3 text-xs font-semibold uppercase tracking-wider text-white/50">
              Services
            </span>
            <ul className="mt-3 space-y-1">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    onClick={onClose}
                    className="block rounded-lg px-3 py-2.5 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <Link
              href="/request-a-quote"
              onClick={onClose}
              className="rounded-full bg-[#ce9f3d] px-5 py-3 text-center text-sm font-semibold text-[#10265f] transition-colors hover:bg-[#dcb666]"
            >
              Request a Quote
            </Link>
            <a
              href={`tel:${siteConfig.telephone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.telephone}
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
