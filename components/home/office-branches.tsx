import { SectionHeading } from "@/components/shared/section-heading";
import { MapPin } from "lucide-react";

const branches = [
  { country: "RWANDA", city: "Kigali" },
  { country: "BURUNDI", city: "Bujumbura" },
  { country: "UGANDA", city: "Kampala" },
  { country: "KENYA", city: "Nairobi" },
];

export function OfficeBranches() {
  return (
    <section className="bg-white py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Office Branches"
          title="Regional presence across East Africa"
          description="Our network of offices supports freight forwarding, customs clearance and logistics coordination in key East African markets."
          align="center"
          className="mx-auto mb-14 max-w-2xl lg:mb-20"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {branches.map((branch) => (
            <div
              key={branch.country}
              className="group rounded-2xl border border-[#e5e7eb] bg-[#f8fafc] p-6 transition-all duration-200 hover:border-[#d2a456] hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0038b8]/10">
                <MapPin className="h-5 w-5 text-[#0038b8]" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[#002a8a]">
                {branch.country}
              </h3>
              <p className="mt-1 text-sm text-[#667085]">{branch.city}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
