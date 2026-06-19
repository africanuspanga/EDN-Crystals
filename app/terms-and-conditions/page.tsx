import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/shared/page-hero";

export const metadata = createMetadata({
  title: "Terms and Conditions",
  description: "Terms and conditions for EDN Crystals Logistics Limited.",
  pathname: "/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms and Conditions"
        subtitle="This page will contain the terms and conditions for EDN Crystals Logistics Limited."
      />

      <section className="bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-10">
          <p className="text-[#667085]">
            {/* TODO: Replace with the company’s verified terms and conditions */}
            This is a placeholder for the terms and conditions. Once the company
            provides the final terms text, it should be inserted here.
          </p>
        </div>
      </section>
    </>
  );
}
