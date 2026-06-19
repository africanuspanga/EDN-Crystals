"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/shared/button";
import { StatBlock } from "@/components/shared/stat-block";
import { siteAssets } from "@/data/assets";
import { siteConfig } from "@/data/site-config";

const stats = [
  { title: "Air, Sea & Road", description: "Integrated transport options" },
  { title: "Door to Door", description: "From clearance to final delivery" },
  { title: "Africa & Worldwide", description: "Coordinated logistics coverage" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#07132f]">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={siteAssets.heroPoster}
      >
        <source src={siteAssets.heroVideo} type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-[#07132f]/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#07132f]/90 via-[#07132f]/50 to-[#07132f]/30" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-[#07132f]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[100svh] flex-col justify-center px-4 pb-36 pt-32 sm:px-6 lg:px-10">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-5xl font-medium leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
            >
              Move. Clear. Deliver.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl"
            >
              {siteConfig.name} coordinates freight, customs clearance and final
              delivery across Tanzania, Africa and international markets.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 flex flex-wrap justify-center gap-4"
            >
              <Button href="/request-a-quote" variant="primary" showArrow>
                Request a Quote
              </Button>
              <Button href="/services" variant="secondary">
                Explore Services
              </Button>
            </motion.div>
          </div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="absolute bottom-10 left-0 right-0 px-4 sm:px-6 lg:bottom-14 lg:px-10"
          >
            <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3 lg:gap-0 lg:pt-10">
              {stats.map((stat, index) => (
                <div key={stat.title} className="relative px-0 sm:px-8">
                  <StatBlock
                    title={stat.title}
                    description={stat.description}
                    className="text-center"
                  />
                  {index < stats.length - 1 && (
                    <div
                      className="absolute right-0 top-1/2 hidden h-10 w-px -translate-y-1/2 rotate-12 bg-[#ce9f3d]/40 sm:block"
                      aria-hidden="true"
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-24 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 lg:bottom-8 lg:flex"
      >
        <span className="text-[10px] font-medium uppercase tracking-widest text-white/70">
          Explore
        </span>
        <motion.div
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-px bg-gradient-to-b from-white/70 to-transparent"
        />
      </motion.div>
    </section>
  );
}
