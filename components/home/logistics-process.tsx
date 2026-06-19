"use client";

import { SectionHeading } from "@/components/shared/section-heading";
import { TimelineStep } from "@/components/shared/timeline-step";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "The client shares cargo details, origin, destination, preferred transport method and expected delivery requirements.",
  },
  {
    number: "02",
    title: "Requirements Review",
    description:
      "Our team reviews the relevant import, export, customs and destination requirements.",
  },
  {
    number: "03",
    title: "Documentation",
    description:
      "Required cargo, customs and shipping documentation is prepared and reviewed.",
  },
  {
    number: "04",
    title: "Booking and Transportation",
    description:
      "We coordinate the appropriate air, sea, road or railway transportation service.",
  },
  {
    number: "05",
    title: "Customs Clearance",
    description:
      "The shipment is processed through the applicable customs-clearance procedures.",
  },
  {
    number: "06",
    title: "Final Distribution",
    description:
      "After clearance, the cargo is transported to the agreed final destination.",
  },
];

export function LogisticsProcess() {
  return (
    <section className="bg-white py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="How It Works"
          title="A coordinated process from enquiry to delivery"
          align="center"
          className="mx-auto mb-14 max-w-3xl lg:mb-20"
        />

        {/* Desktop horizontal timeline */}
        <div className="relative hidden lg:block">
          <div className="absolute left-0 right-0 top-8 h-[2px] bg-[#ce9f3d]/30" />
          <div className="relative grid grid-cols-6 gap-4">
            {steps.map((step, index) => (
              <TimelineStep
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="space-y-8 lg:hidden">
          {steps.map((step, index) => (
            <TimelineStep
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
