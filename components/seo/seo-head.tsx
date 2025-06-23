import Head from "next/head"
import { seoConfig } from "@/lib/seo-config"

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  jsonLd?: object
  region?: keyof typeof seoConfig.regions
}

export function SEOHead({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = "/og-image.jpg",
  jsonLd,
  region,
}: SEOHeadProps) {
  const regionConfig = region ? seoConfig.regions[region] : null
  const finalTitle = title || regionConfig?.title || seoConfig.defaultTitle
  const finalDescription = description || regionConfig?.description || seoConfig.defaultDescription
  const finalCanonical = canonical || `${seoConfig.siteUrl}${region ? `/${region}` : ""}`

  // Combine default keywords with page-specific ones
  const allKeywords = [...seoConfig.keywords.home, ...keywords].join(", ")

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={allKeywords} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="PanEura Automations" />

      {/* Canonical URL */}
      <link rel="canonical" href={finalCanonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:site_name" content={seoConfig.siteName} />
      <meta property="og:image" content={`${seoConfig.siteUrl}${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={regionConfig?.hreflang || "en_US"} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={`${seoConfig.siteUrl}${ogImage}`} />
      <meta name="twitter:site" content="@PaneuraAutomat" />

      {/* Hreflang tags for international SEO */}
      {Object.entries(seoConfig.regions).map(([regionCode, config]) => (
        <link key={regionCode} rel="alternate" hrefLang={config.hreflang} href={`${seoConfig.siteUrl}/${regionCode}`} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={seoConfig.siteUrl} />

      {/* Structured Data */}
      {jsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />}

      {/* Additional Performance & SEO Meta */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Favicon and App Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  )
}
