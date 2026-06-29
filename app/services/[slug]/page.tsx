import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";
import {
  getServiceBySlug,
  getAllServiceSlugs,
  type Service,
} from "@/data/services";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/shared/button";
import { RelatedServices } from "@/components/shared/related-services";
import { Check } from "lucide-react";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return createMetadata({
    title: service.title,
    description: service.shortDescription,
    pathname: `/services/${service.slug}`,
    image: service.image,
  });
}

function CapabilityList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#d2a456]/20">
            <Check className="h-3 w-3 text-[#d2a456]" />
          </span>
          <span className="text-sm leading-relaxed text-[#667085]">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ProcessSteps({ steps }: { steps: string[] }) {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((step, index) => (
        <li
          key={step}
          className="rounded-xl border border-[#e5e7eb] bg-[#f8fafc] p-5"
        >
          <span className="text-sm font-semibold text-[#d2a456]">
            Step {String(index + 1).padStart(2, "0")}
          </span>
          <p className="mt-2 text-sm font-medium text-[#1b294c]">{step}</p>
        </li>
      ))}
    </ol>
  );
}

function ServiceDetail({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        subtitle={service.shortDescription}
        image={service.image}
      />

      <section className="bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e6eefd]">
                  <Icon className="h-5 w-5 text-[#1b294c]" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#d2a456]">
                  Introduction
                </span>
              </div>
              <p className="mt-6 text-lg leading-relaxed text-[#667085]">
                {service.introduction}
              </p>

              {service.benefits.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-xl font-semibold text-[#1b294c]">
                    What you can expect
                  </h2>
                  <div className="mt-6">
                    <CapabilityList items={service.benefits} />
                  </div>
                </div>
              )}

              {service.capabilities.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-xl font-semibold text-[#1b294c]">
                    Main capabilities
                  </h2>
                  <div className="mt-6">
                    <CapabilityList items={service.capabilities} />
                  </div>
                </div>
              )}

              {service.process && service.process.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-xl font-semibold text-[#1b294c]">
                    How this service works
                  </h2>
                  <div className="mt-6">
                    <ProcessSteps steps={service.process} />
                  </div>
                </div>
              )}

              {service.disclaimer && (
                <div className="mt-12 rounded-xl border-l-4 border-[#d2a456] bg-[#f5efe1] p-5">
                  <p className="text-sm leading-relaxed text-[#1b294c]">
                    {service.disclaimer}
                  </p>
                </div>
              )}

              <div className="mt-12 flex flex-wrap gap-4">
                <Button href="/request-a-quote" variant="primary" showArrow>
                  Request a Quote
                </Button>
                <Button href="/contact" variant="outline">
                  Ask a Question
                </Button>
              </div>
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-28 rounded-2xl bg-[#1b294c] p-6 text-white sm:p-8">
                <h3 className="text-lg font-semibold">
                  Need help with {service.title.toLowerCase()}?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  Tell us about your cargo, origin and destination and our team
                  will prepare a coordinated logistics plan.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <Button href="/request-a-quote" variant="primary" showArrow>
                    Request a Quote
                  </Button>
                  <Button href="/contact" variant="secondary">
                    Contact Us
                  </Button>
                </div>
              </div>
            </aside>
          </div>

          <RelatedServices
            slugs={service.relatedServices}
            className="mt-16 lg:mt-24"
          />
        </div>
      </section>
    </>
  );
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const jsonLd = [
    serviceJsonLd({
      title: service.title,
      description: service.shortDescription,
      slug: service.slug,
    }),
    breadcrumbJsonLd([
      { name: "Home", pathname: "/" },
      { name: "Services", pathname: "/services" },
      { name: service.title, pathname: `/services/${service.slug}` },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceDetail service={service} />
    </>
  );
}
