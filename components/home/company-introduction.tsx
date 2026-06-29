"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { ImageReveal } from "@/components/shared/image-reveal";
import { siteAssets } from "@/data/assets";
import { ArrowRight } from "lucide-react";

export function CompanyIntroduction() {
  return (
    <section className="bg-white py-20 sm:py-28 lg:py-36">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow="About EDN Crystals"
            title="Reliable logistics built around your cargo"
            description="EDN Crystals Logistics Limited is a Tanzania-based logistics company dedicated to delivering innovative, reliable and technology-driven supply-chain solutions. With experience in general cargo, specialized shipments and dangerous-goods coordination, we work with established industry partners to transport goods across Africa and to destinations around the world."
          />
          <p className="mt-5 text-base leading-relaxed text-[#667085]">
            Our team supports clients from early shipment planning and
            documentation through customs clearance, transportation and final
            delivery.
          </p>
          <Link
            href="/about"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#1b294c] transition-colors hover:text-[#1b294c]"
          >
            Learn more about EDN Crystals
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <ImageReveal
          src={siteAssets.aboutImage}
          alt="Logistics professional reviewing cargo documentation"
          aspectClass="relative aspect-[16/10] w-full rounded-2xl lg:aspect-[4/3]"
          priority
        />
      </div>
    </section>
  );
}
