import { seoConfig } from "./seo-config"

export function generateOrganizationSchema() {
  return {
    ...seoConfig.organization,
    "@id": `${seoConfig.siteUrl}#organization`,
  }
}

export function generateServiceSchema(service: {
  name: string
  description: string
  url: string
  price?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      "@type": "Organization",
      name: "PanEura Automations",
      url: seoConfig.siteUrl,
    },
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "United Kingdom" },
    ],
    ...(service.price && {
      offers: {
        "@type": "Offer",
        price: service.price,
        priceCurrency: "USD",
      },
    }),
  }
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function generateLocalBusinessSchema(region: keyof typeof seoConfig.regions) {
  const regionConfig = seoConfig.regions[region]

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${seoConfig.siteUrl}/${region}#business`,
    name: `PanEura Automations ${region.toUpperCase()}`,
    description: regionConfig.description,
    url: `${seoConfig.siteUrl}/${region}`,
    telephone: regionConfig.phone,
    email: "solutions@paneura.site",
    priceRange: "$$",
    serviceArea: {
      "@type": "Country",
      name:
        region === "in"
          ? "India"
          : region === "us"
            ? "United States"
            : region === "ae"
              ? "United Arab Emirates"
              : region === "au"
                ? "Australia"
                : "United Kingdom",
    },
    sameAs: ["https://x.com/PaneuraAutomat", "https://www.reddit.com/user/Individual_Set5597/"],
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
