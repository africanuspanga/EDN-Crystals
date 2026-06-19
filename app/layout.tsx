import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { FloatingContactButtons } from "@/components/layout/floating-contact-buttons";
import { createMetadata } from "@/lib/metadata";

const readexPro = Readex_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-readex-pro",
  display: "swap",
});

export const metadata: Metadata = createMetadata({ pathname: "/" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={readexPro.variable}>
      <body className="min-h-screen font-sans antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <FloatingContactButtons />
      </body>
    </html>
  );
}
