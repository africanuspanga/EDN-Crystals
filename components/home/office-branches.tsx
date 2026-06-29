import Image from "next/image";
import { SectionHeading } from "@/components/shared/section-heading";

const countries = [
  { country: "Kenya", city: "Nairobi", flag: "/icons/kenya.png" },
  { country: "Uganda", city: "Kampala", flag: "/icons/uganda.png" },
  { country: "Rwanda", city: "Kigali", flag: "/icons/rwanda.png" },
  { country: "Congo", city: "Kinshasa", flag: "/icons/democratic-republic-of-congo.png" },
  { country: "Burundi", city: "Bujumbura", flag: "/icons/burundi.png" },
  { country: "Zambia", city: "Lusaka", flag: "/icons/Zambia.png" },
  { country: "Malawi", city: "Lilongwe", flag: "/icons/malawi.png" },
];

export function OfficeBranches() {
  return (
    <section className="bg-white py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Coverage"
          title="Countries we serve"
          description="Our network supports freight forwarding, customs clearance and logistics coordination across East and Southern Africa."
          align="center"
          className="mx-auto mb-14 max-w-2xl lg:mb-20"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {countries.map((item) => (
            <div
              key={item.country}
              className="group rounded-2xl border border-[#e5e7eb] bg-[#f8fafc] p-6 transition-all duration-200 hover:border-[#d2a456] hover:shadow-md"
            >
              <div className="relative h-11 w-16 overflow-hidden rounded-md shadow-sm">
                <Image
                  src={item.flag}
                  alt={`${item.country} flag`}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[#1b294c]">
                {item.country}
              </h3>
              <p className="mt-1 text-sm text-[#667085]">{item.city}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
