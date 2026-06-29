import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/shared/page-hero";
import { ContactForm } from "@/components/shared/contact-form";
import { siteConfig } from "@/data/site-config";
import { siteAssets } from "@/data/assets";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact EDN Crystals Logistics Limited in Dar es Salaam, Tanzania for freight forwarding, customs clearance and logistics support.",
  pathname: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Talk to our logistics team"
        subtitle="Whether you need customs clearance, air freight, sea freight, loose-cargo transportation, biological-sample movement or complete door-to-door logistics, our team is ready to discuss your requirements."
        image={siteAssets.officeImage}
      />

      <section className="bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            <div className="space-y-8 lg:col-span-1">
              <div>
                <h2 className="text-xl font-semibold text-[#002a8a]">Office</h2>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.country}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex items-start gap-3 text-sm leading-relaxed text-[#667085] transition-colors hover:text-[#002a8a]"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#d2a456]" />
                  <span>
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.city}, {siteConfig.address.country}
                  </span>
                </a>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#002a8a]">
                  Postal Address
                </h2>
                <p className="mt-3 flex items-start gap-3 text-sm leading-relaxed text-[#667085]">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#d2a456]" />
                  {siteConfig.postalAddress}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#002a8a]">Telephone</h2>
                <div className="mt-3 space-y-2">
                  <a
                    href={`tel:${siteConfig.telephone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 text-sm font-medium text-[#667085] transition-colors hover:text-[#002a8a]"
                  >
                    <Phone className="h-4 w-4 text-[#d2a456]" />
                    {siteConfig.telephone}
                  </a>
                  <a
                    href={`tel:${siteConfig.secondaryTelephone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 text-sm font-medium text-[#667085] transition-colors hover:text-[#002a8a]"
                  >
                    <Phone className="h-4 w-4 text-[#d2a456]" />
                    {siteConfig.secondaryTelephone}
                  </a>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#002a8a]">Email</h2>
                <div className="mt-3 space-y-2">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-3 text-sm font-medium text-[#667085] transition-colors hover:text-[#002a8a]"
                  >
                    <Mail className="h-4 w-4 text-[#d2a456]" />
                    {siteConfig.email}
                  </a>
                  <a
                    href={`mailto:${siteConfig.secondaryEmail}`}
                    className="flex items-center gap-3 text-sm font-medium text-[#667085] transition-colors hover:text-[#002a8a]"
                  >
                    <Mail className="h-4 w-4 text-[#d2a456]" />
                    {siteConfig.secondaryEmail}
                  </a>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#002a8a]">
                  Office Hours
                </h2>
                <p className="mt-3 flex items-start gap-3 text-sm leading-relaxed text-[#667085]">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#d2a456]" />
                  {/* TODO: Confirm operating hours */}
                  {siteConfig.operatingHours}
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-3xl border border-[#e5e7eb] bg-[#f8fafc] p-6 sm:p-10">
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="mt-16 overflow-hidden rounded-2xl border border-[#e5e7eb] bg-[#e6eefd]">
            <div className="flex h-80 flex-col items-center justify-center p-6 text-center sm:h-96">
              <MapPin className="h-10 w-10 text-[#002a8a]" />
              <h3 className="mt-4 text-lg font-semibold text-[#002a8a]">
                Office Location
              </h3>
              <p className="mt-2 max-w-md text-sm text-[#667085]">
                {siteConfig.address.street}, {siteConfig.address.city},{" "}
                {siteConfig.address.country}
              </p>
              <p className="mt-4 text-xs text-[#667085]">
                {/* TODO: Replace with verified Google Maps embed */}
                Map embed placeholder — add a Google Maps iframe or configured
                map component here once confirmed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
