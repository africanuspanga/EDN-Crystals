import { siteConfig } from "@/data/site-config";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/edn-logo.png`,
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.telephone,
      contactType: "customer service",
      email: siteConfig.email,
      areaServed: "TZ",
      availableLanguage: ["English", "Swahili"],
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    image: `${siteConfig.url}/images/edn-logo.png`,
    url: siteConfig.url,
    telephone: siteConfig.telephone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressCountry: siteConfig.address.country,
    },
  };
}

export function serviceJsonLd({
  title,
  description,
  slug,
}: {
  title: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: title,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    description,
    url: `${siteConfig.url}/services/${slug}`,
    areaServed: {
      "@type": "Place",
      name: "Tanzania, Africa and international markets",
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; pathname: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.pathname}`,
    })),
  };
}
