"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/shared/button";
import { siteAssets } from "@/data/assets";

export function SpecializedLogistics() {
  return (
    <section className="overflow-hidden bg-[#e6eefd] py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl sm:aspect-[16/10] lg:aspect-[4/3]"
          >
            <Image
              src={siteAssets.services.biologicalSamples}
              alt="Technician carefully handling biological samples for clinical-trial logistics"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <SectionHeading
              eyebrow="Specialized Logistics"
              title="Careful coordination for biological and clinical-trial shipments"
              description="Moving biological samples and clinical-trial materials requires careful planning, accurate documentation and dependable logistics coordination. EDN Crystals supports specialized biopharmaceutical cargo moving into and out of Africa. Our team coordinates transportation and helps clients prepare the required shipping and customs documentation."
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" showArrow>
                Discuss a Specialized Shipment
              </Button>
            </div>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-[#667085]">
              Specific handling, packaging, temperature-control and certification
              requirements are reviewed individually for each shipment.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
