export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
];

export const footerCompanyLinks: NavItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Contact Us", href: "/contact" },
  { label: "Request a Quote", href: "/request-a-quote" },
];

export const footerServiceLinks: NavItem[] = [
  { label: "Clearing and Forwarding", href: "/services/clearing-and-forwarding" },
  { label: "Customs Clearance", href: "/services/customs-clearance" },
  { label: "Sea Freight", href: "/services/sea-freight" },
  { label: "Air Freight", href: "/services/air-freight" },
  { label: "Loose Cargo", href: "/services/loose-cargo" },
  { label: "Biological Sample Movement", href: "/services/biological-sample-movement" },
];

export const footerLegalLinks: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
];
