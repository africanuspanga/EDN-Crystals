"use client";

import Link from "next/link";
import { useState } from "react";
import { mainNav } from "@/data/navigation";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export function DesktopNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
      {mainNav.map((item) =>
        item.label === "Services" ? (
          <div
            key={item.href}
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              className="group flex items-center gap-1 py-2 text-sm font-medium text-white/90 transition-colors hover:text-white"
              aria-expanded={open}
              aria-haspopup="true"
            >
              {item.label}
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  open && "rotate-180"
                )}
              />
            </button>
            {open && (
              <div className="absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3">
                <div className="rounded-2xl border border-white/10 bg-[#1b294c]/95 p-2 shadow-2xl backdrop-blur-xl">
                  <ul className="space-y-1">
                    {services.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/services/${service.slug}`}
                          className="block rounded-lg px-4 py-2.5 text-sm text-white/85 transition-colors hover:bg-white/10 hover:text-white"
                        >
                          {service.title}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        href="/services"
                        className="block rounded-lg px-4 py-2.5 text-sm font-medium text-[#d2a456] transition-colors hover:bg-white/10"
                      >
                        View all services
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link
            key={item.href}
            href={item.href}
            className="group relative py-2 text-sm font-medium text-white/90 transition-colors hover:text-white"
          >
            <span className="relative">
              {item.label}
              <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-[#d2a456] transition-all duration-300 group-hover:w-full" />
            </span>
          </Link>
        )
      )}
    </nav>
  );
}
