import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";
import { services } from "@/data/services";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    { url: siteConfig.url, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/services`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.url}/industries`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/request-a-quote`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.4 },
    { url: `${siteConfig.url}/terms-and-conditions`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.4 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...routes, ...serviceRoutes];
}
