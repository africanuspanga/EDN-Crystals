import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceCard } from "@/components/shared/service-card";
import { services } from "@/data/services";

export function ServiceOverview() {
  const formatNumber = (index: number) => String(index + 1).padStart(2, "0");

  return (
    <section className="bg-[#f8fafc] py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Our Logistics Services"
          title="Complete support for every stage of your shipment"
          description="From freight booking and shipping documentation to port clearance and final delivery, we provide coordinated logistics solutions designed to keep cargo moving efficiently."
          align="center"
          className="mx-auto mb-14 max-w-3xl lg:mb-20"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12">
          {services.map((service, index) => {
            const href = `/services/${service.slug}`;
            const number = formatNumber(index);

            if (index === 0) {
              return (
                <ServiceCard
                  key={service.slug}
                  number={number}
                  title={service.title}
                  description={service.shortDescription}
                  href={href}
                  image={service.image}
                  size="large"
                  className="lg:col-span-6"
                />
              );
            }

            if (index === 1 || index === 2) {
              return (
                <ServiceCard
                  key={service.slug}
                  number={number}
                  title={service.title}
                  description={service.shortDescription}
                  href={href}
                  image={service.image}
                  size="medium"
                  className="lg:col-span-3"
                />
              );
            }

            if (index === 3) {
              return (
                <ServiceCard
                  key={service.slug}
                  number={number}
                  title={service.title}
                  description={service.shortDescription}
                  href={href}
                  image={service.image}
                  size="wide"
                  className="lg:col-span-6"
                />
              );
            }

            return (
              <ServiceCard
                key={service.slug}
                number={number}
                title={service.title}
                description={service.shortDescription}
                href={href}
                image={service.image}
                size="compact"
                className="lg:col-span-3"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
