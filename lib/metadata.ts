import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";

export const defaultTitle =
  "EDN Crystals Logistics Limited | Freight and Customs Clearance Tanzania";

export const defaultDescription =
  "EDN Crystals Logistics Limited provides clearing and forwarding, customs clearance, air and sea freight, loose cargo, warehousing support, biological-sample movement and door-to-door logistics services in Tanzania.";

export function createMetadata({
  title,
  description,
  pathname,
  image = "/images/port-sunset.jpg",
}: {
  title?: string;
  description?: string;
  pathname: string;
  image?: string;
}): Metadata {
  const url = `${siteConfig.url}${pathname}`;
  const pageTitle = title ? `${title} | EDN Crystals Logistics` : defaultTitle;
  const pageDescription = description ?? defaultDescription;

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: siteConfig.name,
      locale: "en_TZ",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: pageTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [image],
    },
  };
}
