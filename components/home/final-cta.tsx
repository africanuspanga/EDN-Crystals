"use client";

import Image from "next/image";
import { Button } from "@/components/shared/button";
import { siteAssets } from "@/data/assets";
import { siteConfig } from "@/data/site-config";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#07132f] py-24 sm:py-32 lg:py-40">
      <Image
        src={siteAssets.portSunset}
        alt="Port at sunset"
        fill
        className="object-cover opacity-30"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#07132f]/95 via-[#07132f]/85 to-[#2849a2]/70" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 text-center sm:px-6 lg:px-10">
        <h2 className="mx-auto max-w-4xl text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
          Ready to move your cargo?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
          Speak with our logistics team before your shipment leaves its origin. We
          will help you understand the requirements, prepare the necessary
          documents, arrange transportation, coordinate customs clearance and
          deliver your cargo to its final destination.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/request-a-quote" variant="primary" showArrow>
            Request a Quote
          </Button>
          <a
            href={`tel:${siteConfig.telephone.replace(/\s/g, "")}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            Call {siteConfig.telephone}
          </a>
        </div>
      </div>
    </section>
  );
}
