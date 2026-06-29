"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/shared/button";
import { GoldLabel } from "@/components/shared/gold-label";

export function DestinationAdvisory() {
  return (
    <section className="relative overflow-hidden bg-[#1b294c] py-20 sm:py-28 lg:py-36">
      {/* Decorative grid lines */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GoldLabel>Plan Before You Ship</GoldLabel>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
              The right information can prevent costly delays
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
              Understanding destination requirements before dispatching cargo can
              significantly reduce risk. Our team provides guidance on import
              documentation, customs procedures, duty-free exemptions and shipment
              requirements for the countries we serve.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
              Do not wait until your shipment reaches its destination to discover
              that important documents are missing. Early preparation can reduce
              delays, storage charges and unexpected expenses.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative border-l-2 border-[#d2a456] bg-[#1b294c]/40 p-8 backdrop-blur-sm sm:p-10 lg:p-12"
          >
            <span className="absolute -left-[2px] top-0 h-16 w-[2px] bg-[#d2a456]" />
            <span
              className="text-7xl font-semibold leading-none text-[#d2a456]/30 sm:text-8xl"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <blockquote className="relative -mt-6 text-2xl font-medium italic text-white sm:text-3xl">
              Asking is free, but storage charges are not.
            </blockquote>
            <div className="mt-8">
              <Button href="/contact" variant="primary">
                Consult Our Logistics Team
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
