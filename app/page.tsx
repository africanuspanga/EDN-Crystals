import { createMetadata } from "@/lib/metadata";
import { organizationJsonLd, localBusinessJsonLd } from "@/lib/schema";
import { HeroSection } from "@/components/home/hero-section";
import { CompanyIntroduction } from "@/components/home/company-introduction";
import { ServiceOverview } from "@/components/home/service-overview";
import { DestinationAdvisory } from "@/components/home/destination-advisory";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { SpecializedLogistics } from "@/components/home/specialized-logistics";
import { LogisticsProcess } from "@/components/home/logistics-process";
import { VisionMission } from "@/components/home/vision-mission";
import { IndustriesSection } from "@/components/home/industries-section";
import { FinalCTA } from "@/components/home/final-cta";

export const metadata = createMetadata({ pathname: "/" });

export default function HomePage() {
  const jsonLd = [organizationJsonLd(), localBusinessJsonLd()];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <CompanyIntroduction />
      <ServiceOverview />
      <DestinationAdvisory />
      <WhyChooseUs />
      <SpecializedLogistics />
      <LogisticsProcess />
      <VisionMission />
      <IndustriesSection />
      <FinalCTA />
    </>
  );
}
