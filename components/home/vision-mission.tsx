"use client";

import { motion } from "framer-motion";
import { GoldLabel } from "@/components/shared/gold-label";

const values = [
  "Commitment",
  "Effective communication",
  "Teamwork",
  "Passion",
  "Solution-oriented service",
];

export function VisionMission() {
  return (
    <section className="bg-[#002a8a] py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Vision panel */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-[#002a8a] p-8 sm:p-10 lg:col-span-7 lg:p-14"
          >
            <GoldLabel>Vision</GoldLabel>
            <h2 className="mt-4 text-2xl font-medium tracking-tight text-white sm:text-3xl lg:text-4xl">
              To become an innovative, technology-adapted and leading global
              logistics company by growing together with our customers.
            </h2>
          </motion.div>

          {/* Mission panel */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex-1 rounded-3xl border border-white/10 bg-[#002a8a] p-8 sm:p-10"
            >
              <GoldLabel>Mission</GoldLabel>
              <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
                To simplify international logistics and improve air freight,
                export, port and cargo-handling operations through advanced
                logistics-management systems. We work to reduce waiting times,
                optimize cargo handling, improve operational efficiency and help
                clients reduce logistics costs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-3xl border border-white/10 bg-[#002a8a] p-8 sm:p-10"
            >
              <GoldLabel>Core Values</GoldLabel>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {values.map((value, index) => (
                  <li key={value} className="flex items-center gap-3 text-sm text-white/85 sm:text-base">
                    <span className="text-[#d2a456]">0{index + 1}</span>
                    {value}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
