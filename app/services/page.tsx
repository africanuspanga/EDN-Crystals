import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/shared/page-hero";
import { ServiceCard } from "@/components/shared/service-card";
import { services } from "@/data/services";
import { siteAssets } from "@/data/assets";

export const metadata = createMetadata({
  title: "Services",
  description:
    "Explore clearing and forwarding, customs clearance, sea freight, air freight, loose cargo, warehousing, biological sample movement and more from EDN Crystals Logistics Limited.",
  pathname: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Logistics solutions built around your shipment"
        subtitle="Every shipment has different documentation, transportation and destination requirements. EDN Crystals coordinates the individual services needed to move cargo safely and efficiently."
        image={siteAssets.portSunset}
      />

      <section className="bg-white py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug}
                number={String(index + 1).padStart(2, "0")}
                title={service.title}
                description={service.shortDescription}
                href={`/services/${service.slug}`}
                image={service.image}
                size="medium"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
