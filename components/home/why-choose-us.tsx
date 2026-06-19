"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { FeatureItem } from "@/components/shared/feature-item";
import {
  Ship,
  Plane,
  Truck,
  FileCheck,
  Globe2,
  PackageCheck,
} from "lucide-react";

const benefits = [
  {
    icon: Ship,
    title: "Complete Logistics Support",
    description:
      "Support from shipment planning and documentation through clearance, transportation and final delivery.",
  },
  {
    icon: Globe2,
    title: "Tanzania-Based Expertise",
    description:
      "A Dar es Salaam presence close to one of East Africa’s important international trade gateways.",
  },
  {
    icon: Plane,
    title: "African and International Reach",
    description:
      "Coordinated cargo movement between African countries and international destinations.",
  },
  {
    icon: PackageCheck,
    title: "Specialized Cargo Experience",
    description:
      "Support for general cargo, dangerous-goods coordination, loose cargo, vehicles, biological samples and clinical-trial materials.",
  },
  {
    icon: FileCheck,
    title: "Documentation Assistance",
    description:
      "Guidance with import, export, customs and destination documentation.",
  },
  {
    icon: Truck,
    title: "Door-to-Door Delivery",
    description:
      "Freight, customs clearance and distribution coordinated as one connected service.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-white py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Why EDN Crystals"
          title="Practical logistics expertise from origin to destination"
          align="center"
          className="mx-auto mb-14 max-w-3xl lg:mb-20"
        />

        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <FeatureItem
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
