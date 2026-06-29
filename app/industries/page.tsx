import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/shared/button";
import { industries } from "@/data/industries";
import { siteAssets } from "@/data/assets";

export const metadata = createMetadata({
  title: "Industries",
  description:
    "Logistics capabilities suitable for general trade, manufacturing, import and export, automotive, pharmaceutical, clinical research and more.",
  pathname: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Logistics capabilities suitable for businesses operating in"
        subtitle="We provide coordinated freight, customs clearance and supply-chain support across a range of sectors in Tanzania, Africa and international markets."
        image={siteAssets.services.warehousing}
      />

      <section className="bg-white py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="rounded-2xl border border-[#e5e7eb] bg-[#f8fafc] p-6 transition-shadow duration-300 hover:shadow-md sm:p-8"
              >
                <h2 className="text-lg font-semibold text-[#002a8a]">
                  {industry.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#667085]">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-[#002a8a] p-8 text-center sm:p-12">
            <h2 className="text-2xl font-medium tracking-tight text-white sm:text-3xl">
              Not sure which service fits your industry?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/80">
              Our team can review your cargo, destination and documentation
              requirements and recommend a coordinated logistics approach.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/request-a-quote" variant="primary" showArrow>
                Request a Quote
              </Button>
              <Button href="/contact" variant="secondary">
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
