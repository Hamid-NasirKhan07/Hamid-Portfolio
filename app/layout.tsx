import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Outfit, Space_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site.config";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { BackgroundFx } from "@/components/ui/BackgroundFx";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { Navbar } from "@/components/ui/Navbar";
import { SideNav } from "@/components/ui/SideNav";
import { Footer } from "@/components/ui/Footer";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
  metadataBase: new URL(siteConfig.meta.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    url: siteConfig.meta.url,
    siteName: siteConfig.owner.name,
    images: [
      {
        url: siteConfig.meta.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.owner.name} Portfolio Preview`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    images: [siteConfig.meta.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#020409",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) for Person & ProfessionalService
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.meta.url}/#person`,
        name: siteConfig.owner.name,
        jobTitle: siteConfig.owner.title,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lahore",
          addressCountry: "Pakistan",
        },
        url: siteConfig.meta.url,
        sameAs: [
          "http://github.com/Hamid-NasirKhan07",
          "https://www.linkedin.com/in/hamidnkhan",
        ],
        worksFor: {
          "@type": "Organization",
          name: "Crecentech Systems Private Limited",
        },
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "Lahore Garrison University",
        },
        knowsAbout: [
          "AI Agent Development",
          "n8n Workflow Automation",
          "Podio CRM",
          "GoHighLevel",
          "Next.js",
          "Laravel",
          "API Integration",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.meta.url}/#service`,
        name: `${siteConfig.owner.name} - CRM & Automation Consulting`,
        description: siteConfig.meta.description,
        url: siteConfig.meta.url,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lahore",
          addressCountry: "Pakistan",
        },
        areaServed: "Worldwide",
        priceRange: "$$$",
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${outfit.variable} ${spaceMono.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg-deep text-foreground antialiased selection:bg-accent selection:text-white">
        <SmoothScroll>
          <CustomCursor />
          <BackgroundFx />
          <Navbar />
          <SideNav />
          <main className="relative z-10 flex flex-col min-h-screen">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
