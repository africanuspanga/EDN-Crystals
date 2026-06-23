import Link from "next/link";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface RelatedServicesProps {
  slugs: string[];
  className?: string;
}

export function RelatedServices({ slugs, className }: RelatedServicesProps) {
  const related = services.filter((service) => slugs.includes(service.slug));

  if (related.length === 0) return null;

  return (
    <div className={cn("border-t border-[#e5e7eb] pt-10", className)}>
      <h3 className="text-lg font-semibold text-[#002a8a]">Related services</h3>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((service) => (
          <li key={service.slug}>
            <Link
              href={`/services/${service.slug}`}
              className="group flex items-center justify-between rounded-lg border border-[#e5e7eb] bg-white p-4 transition-colors hover:border-[#d2a456]"
            >
              <span className="text-sm font-medium text-[#002a8a]">
                {service.title}
              </span>
              <ArrowRight className="h-4 w-4 text-[#667085] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#d2a456]" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
