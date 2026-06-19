import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/shared/page-hero";
import { QuoteForm } from "@/components/shared/quote-form";
import { siteAssets } from "@/data/assets";

export const metadata = createMetadata({
  title: "Request a Quote",
  description:
    "Request a logistics quote from EDN Crystals Logistics Limited. Tell us about your cargo, origin, destination and service requirements.",
  pathname: "/request-a-quote",
});

export default function RequestQuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Get a Quote"
        title="Request a logistics quote"
        subtitle="Share your shipment details and our team will prepare a coordinated logistics plan including freight, customs clearance and delivery options."
        image={siteAssets.portSunset}
      />

      <section className="bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-[960px] px-4 sm:px-6 lg:px-10">
          <div className="rounded-3xl border border-[#e5e7eb] bg-[#f8fafc] p-6 sm:p-10 lg:p-12">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
