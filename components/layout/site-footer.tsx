import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { siteAssets } from "@/data/assets";
import {
  footerCompanyLinks,
  footerServiceLinks,
  footerLegalLinks,
} from "@/data/navigation";
import { Phone, Mail, MapPin } from "lucide-react";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#d2a456]/30 bg-[#1b294c] pb-20 text-white lg:pb-0">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex rounded-full bg-white p-3">
              <span className="relative block h-16 w-16 overflow-hidden sm:h-20 sm:w-20">
                <Image
                  src={siteAssets.logo}
                  alt={`${siteConfig.name} logo`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 64px, 80px"
                />
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/75">
              {siteConfig.name} is a Tanzania-based logistics company providing
              freight forwarding, customs clearance, cargo transportation,
              warehousing support, distribution and technology-driven
              supply-chain solutions.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-[#d2a456]">Company</h3>
              <ul className="mt-4 space-y-2.5">
                {footerCompanyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/75 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#d2a456]">Services</h3>
              <ul className="mt-4 space-y-2.5">
                {footerServiceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/75 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#d2a456]">Legal</h3>
              <ul className="mt-4 space-y-2.5">
                {footerLegalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/75 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-[#d2a456]">Contact</h3>
            <ul className="mt-4 space-y-4">
              <li className="space-y-1">
                <a
                  href={`tel:${siteConfig.telephone.replace(/\s/g, "")}`}
                  className="flex items-start gap-3 text-sm text-white/75 transition-colors hover:text-white"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#d2a456]" />
                  {siteConfig.telephone}
                </a>
                <a
                  href={`tel:${siteConfig.secondaryTelephone.replace(/\s/g, "")}`}
                  className="flex items-start gap-3 pl-7 text-sm text-white/75 transition-colors hover:text-white"
                >
                  {siteConfig.secondaryTelephone}
                </a>
              </li>
              <li className="space-y-1">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 text-sm text-white/75 transition-colors hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#d2a456]" />
                  {siteConfig.email}
                </a>
                <a
                  href={`mailto:${siteConfig.secondaryEmail}`}
                  className="flex items-start gap-3 pl-7 text-sm text-white/75 transition-colors hover:text-white"
                >
                  {siteConfig.secondaryEmail}
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-sm text-white/75">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#d2a456]" />
                  {siteConfig.address.street}, {siteConfig.address.city}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/60">
            © {currentYear} {siteConfig.name}. All rights reserved.{" "}
            <a
              href="https://www.driftmark.co.tz/"
              target="_blank"
              rel="noopener noreferrer"
              className="sr-only"
            >
              Website by Driftmark
            </a>
          </p>
          <p className="text-xs text-white/60">
            Designed for logistics across Tanzania, Africa and worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}
