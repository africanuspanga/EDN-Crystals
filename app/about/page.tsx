import Image from "next/image";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { FeatureItem } from "@/components/shared/feature-item";
import { Button } from "@/components/shared/button";
import { siteAssets } from "@/data/assets";
import {
  Ship,
  Globe2,
  FileCheck,
  Truck,
  Users,
  PackageCheck,
} from "lucide-react";

export const metadata = createMetadata({
  title: "About",
  description:
    "Learn about EDN Crystals Logistics Limited, a Tanzania-based logistics partner providing freight forwarding, customs clearance and supply-chain solutions across Africa and worldwide.",
  pathname: "/about",
});

const values = [
  "Commitment",
  "Effective communication",
  "Teamwork",
  "Passion",
  "Solution-oriented service",
];

const strengths = [
  {
    icon: Ship,
    title: "Complete Logistics Support",
    description:
      "Support from shipment planning and documentation through clearance, transportation and final delivery.",
  },
  {
    icon: Globe2,
    title: "African and International Reach",
    description:
      "Coordinated cargo movement between African countries and international destinations.",
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
  {
    icon: Users,
    title: "Tanzania-Based Team",
    description:
      "A Dar es Salaam presence close to one of East Africa’s important trade gateways.",
  },
  {
    icon: PackageCheck,
    title: "Specialized Cargo Experience",
    description:
      "Support for general cargo, dangerous-goods coordination, loose cargo, vehicles and biological samples.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A dependable logistics partner based in Tanzania"
        subtitle="EDN Crystals Logistics Limited provides coordinated freight, customs-clearance and supply-chain solutions for businesses transporting cargo within Africa and internationally."
        image={siteAssets.aboutImage}
      />

      <section className="bg-white py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Company Overview"
                title="Built to move cargo across borders"
                description="EDN Crystals Logistics Limited is a Tanzania-based logistics company dedicated to delivering innovative, reliable and technology-driven supply-chain solutions. The company offers freight forwarding, customs clearance, air freight, sea freight, loose cargo transportation, warehousing support, cargo distribution, biological sample movement, importer and exporter of record services, and logistics consultancy."
              />
            </div>
            <div className="space-y-6 text-base leading-relaxed text-[#667085]">
              <p>
                We work with established industry partners to transport goods
                across Africa and to destinations around the world. Our team
                supports clients from early shipment planning and documentation
                through customs clearance, transportation and final delivery.
              </p>
              <p>
                {/* TODO: Replace with verified establishment year and history */}
                <span className="font-medium text-[#002a8a]">
                  Company history:
                </span>{" "}
                Detailed historical information, including the year of
                establishment, will be added once verified by the company.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-3xl bg-[#002a8a] p-8 text-white sm:p-10 lg:p-12">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#d2a456]">
                Vision
              </span>
              <h2 className="mt-4 text-2xl font-medium tracking-tight sm:text-3xl">
                To become an innovative, technology-adapted and leading global
                logistics company by growing together with our customers.
              </h2>
            </div>
            <div className="rounded-3xl bg-white p-8 sm:p-10 lg:p-12">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#d2a456]">
                Mission
              </span>
              <p className="mt-4 text-base leading-relaxed text-[#667085] sm:text-lg">
                To simplify international logistics and improve air freight,
                export, port and cargo-handling operations through advanced
                logistics-management systems. We work to reduce waiting times,
                optimize cargo handling, improve operational efficiency and help
                clients reduce logistics costs.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-[#e5e7eb] bg-white p-8 sm:p-10 lg:p-12">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#d2a456]">
              Core Values
            </span>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {values.map((value, index) => (
                <div
                  key={value}
                  className="flex items-center gap-3 rounded-xl bg-[#e6eefd] px-4 py-3"
                >
                  <span className="text-sm font-semibold text-[#002a8a]">
                    0{index + 1}
                  </span>
                  <span className="text-sm font-medium text-[#002a8a]">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl lg:aspect-[4/3]">
              <Image
                src={siteAssets.teamImage}
                alt="EDN Crystals logistics professionals in a warehouse meeting"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <SectionHeading
                eyebrow="Geographic Reach"
                title="Operating from Dar es Salaam, serving Africa and the world"
                description="Our Dar es Salaam location places us close to one of East Africa’s most important international trade gateways. From here we coordinate cargo moving between African countries and destinations around the world."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-[#e5e7eb] p-5">
                  <h3 className="font-semibold text-[#002a8a]">Tanzania</h3>
                  <p className="mt-1 text-sm text-[#667085]">
                    Dar es Salaam base with port and airport coordination.
                  </p>
                </div>
                <div className="rounded-xl border border-[#e5e7eb] p-5">
                  <h3 className="font-semibold text-[#002a8a]">Africa</h3>
                  <p className="mt-1 text-sm text-[#667085]">
                    Coordinated cargo movement between African countries.
                  </p>
                </div>
                <div className="rounded-xl border border-[#e5e7eb] p-5">
                  <h3 className="font-semibold text-[#002a8a]">International</h3>
                  <p className="mt-1 text-sm text-[#667085]">
                    Sea and air freight links to global destinations.
                  </p>
                </div>
                <div className="rounded-xl border border-[#e5e7eb] p-5">
                  <h3 className="font-semibold text-[#002a8a]">Door-to-Door</h3>
                  <p className="mt-1 text-sm text-[#667085]">
                    Connected service from origin to final delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e6eefd] py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <SectionHeading
            eyebrow="Logistics Capabilities"
            title="Services designed around real shipment needs"
            align="center"
            className="mx-auto mb-14 max-w-3xl lg:mb-20"
          />
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {strengths.map((strength) => (
              <FeatureItem
                key={strength.title}
                icon={strength.icon}
                title={strength.title}
                description={strength.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#002a8a] py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-[1440px] px-4 text-center sm:px-6 lg:px-10">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Why choose EDN Crystals?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
            We combine practical logistics experience, technology-driven
            coordination and a client-focused approach to keep cargo moving
            efficiently from origin to destination.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/request-a-quote" variant="primary" showArrow>
              Request a Quote
            </Button>
            <Button href="/services" variant="secondary">
              Explore Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
