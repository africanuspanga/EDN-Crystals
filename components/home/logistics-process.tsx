"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "The client shares cargo details, origin, destination, preferred transport method and expected delivery requirements.",
  },
  {
    number: "02",
    title: "Requirements Review",
    description:
      "Our team reviews the relevant import, export, customs and destination requirements.",
  },
  {
    number: "03",
    title: "Documentation",
    description:
      "Required cargo, customs and shipping documentation is prepared and reviewed.",
  },
  {
    number: "04",
    title: "Booking and Transportation",
    description:
      "We coordinate the appropriate air, sea, road or railway transportation service.",
  },
  {
    number: "05",
    title: "Customs Clearance",
    description:
      "The shipment is processed through the applicable customs-clearance procedures.",
  },
  {
    number: "06",
    title: "Final Distribution",
    description:
      "After clearance, the cargo is transported to the agreed final destination.",
  },
];

export function LogisticsProcess() {
  return (
    <section className="bg-[#f8fafc] py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="How It Works"
          title="A coordinated process from enquiry to delivery"
          align="center"
          className="mx-auto mb-14 max-w-3xl lg:mb-20"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="rounded-2xl border border-[#e5e7eb] bg-white p-6 transition-shadow duration-300 hover:shadow-md sm:p-8"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f6eedc] text-sm font-semibold text-[#10265f]">
                {step.number}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-[#07132f]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#667085]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
