"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeading } from "@/components/shared/section-heading";
import { industries } from "@/data/industries";
import { ArrowRight } from "lucide-react";

export function IndustriesSection() {
  return (
    <section className="bg-[#f8fafc] py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Industries"
          title="Logistics capabilities suitable for businesses operating in"
          align="center"
          className="mx-auto mb-14 max-w-3xl lg:mb-20"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-2xl border border-[#e5e7eb] bg-white p-6 transition-shadow duration-300 hover:shadow-md"
            >
              <h3 className="text-base font-semibold text-[#002a8a]">
                {industry.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#667085]">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/industries"
            className="group inline-flex items-center gap-2 rounded-full bg-[#002a8a] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#002a8a]"
          >
            View all industries
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
