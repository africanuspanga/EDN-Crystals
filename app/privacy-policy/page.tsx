import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/shared/page-hero";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for EDN Crystals Logistics Limited.",
  pathname: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="This page will contain the privacy policy for EDN Crystals Logistics Limited."
      />

      <section className="bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-10">
          <p className="text-[#667085]">
            {/* TODO: Replace with the company’s verified privacy policy */}
            This is a placeholder for the privacy policy. Once the company
            provides the final privacy policy text, it should be inserted here.
          </p>
        </div>
      </section>
    </>
  );
}
