import Image from "next/image";
import { SectionHeading } from "@/components/shared/section-heading";

const branches = [
  { country: "Rwanda", city: "Kigali", flag: "/icons/rwanda.png" },
  { country: "Burundi", city: "Bujumbura", flag: "/icons/burundi.png" },
  { country: "Uganda", city: "Kampala", flag: "/icons/uganda.png" },
  { country: "Kenya", city: "Nairobi", flag: "/icons/kenya.png" },
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
              <div className="relative h-11 w-16 overflow-hidden rounded-md shadow-sm">
                <Image
                  src={branch.flag}
                  alt={`${branch.country} flag`}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[#1b294c]">
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
