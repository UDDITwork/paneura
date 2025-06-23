import type { Metadata } from "next"
import Hero from "@/components/home/hero"
import ServicesOverview from "@/components/home/services-overview"
import HallOfFame from "@/components/home/hall-of-fame"
import AiAgents from "@/components/home/ai-agents"
import VerticalDomains from "@/components/home/vertical-domains"
import ContactCta from "@/components/home/contact-cta"
import Testimonials from "@/components/home/testimonials"
import TechStack from "@/components/home/tech-stack"
import CreativeSupport from "@/components/home/creative-support"
import RapidWebsite from "@/components/home/rapid-website"
import Portfolio from "@/components/home/portfolio"
import { generateOrganizationSchema, generateFAQSchema } from "@/lib/structured-data"
import { seoConfig } from "@/lib/seo-config"

export const metadata: Metadata = {
  title: "Automation & AI Workflows Built for Global Growth | PanEura Automations",
  description:
    "From n8n pipelines to AI voice agents, PanEura delivers 24/7 efficiency. Transform your business with intelligent automation solutions. Call +91-745-688-6877 for free audit.",
  keywords: [
    "PanEura Automations",
    "AI automation company",
    "n8n workflow automation",
    "Zapier expert agency",
    "AI voice agents",
    "automate lead generation",
    "custom CRM automation",
    "RPA for SMBs",
  ],
  openGraph: {
    title: "Automation & AI Workflows Built for Global Growth",
    description: "From n8n pipelines to AI voice agents, PanEura delivers 24/7 efficiency for businesses worldwide.",
    url: seoConfig.siteUrl,
    siteName: seoConfig.siteName,
    images: [
      {
        url: `${seoConfig.siteUrl}/og-home.jpg`,
        width: 1200,
        height: 630,
        alt: "PanEura Automations - AI Workflow Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automation & AI Workflows Built for Global Growth",
    description: "From n8n pipelines to AI voice agents, PanEura delivers 24/7 efficiency for businesses worldwide.",
    images: [`${seoConfig.siteUrl}/og-home.jpg`],
    site: "@PaneuraAutomat",
  },
  alternates: {
    canonical: seoConfig.siteUrl,
    languages: {
      "en-IN": `${seoConfig.siteUrl}/in`,
      "en-US": `${seoConfig.siteUrl}/us`,
      "en-AE": `${seoConfig.siteUrl}/ae`,
      "en-AU": `${seoConfig.siteUrl}/au`,
      "en-EU": `${seoConfig.siteUrl}/eu`,
    },
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
}

// FAQ data for structured data
const faqs = [
  {
    question: "How do AI voice agents reduce call-center costs?",
    answer:
      "AI voice agents can handle 80% of routine customer inquiries 24/7, reducing staffing costs by up to 60% while improving response times and customer satisfaction through instant, consistent service delivery.",
  },
  {
    question: "What's the difference between n8n and Zapier for business automation?",
    answer:
      "n8n is an open-source, self-hosted automation platform offering unlimited workflows and custom integrations, while Zapier is a cloud-based service with usage limits. n8n provides more control and cost-effectiveness for complex automation needs.",
  },
  {
    question: "How quickly can PanEura implement custom CRM automation?",
    answer:
      "Most CRM automation projects are completed within 2-4 weeks, including discovery, development, testing, and deployment. Simple integrations can be delivered in 3-5 business days.",
  },
  {
    question: "Which regions does PanEura Automations serve?",
    answer:
      "PanEura serves businesses globally with dedicated support for India, USA, UAE, Australia, and Europe. We provide localized phone support and region-specific compliance for each market.",
  },
]

export default function Home() {
  const organizationSchema = generateOrganizationSchema()
  const faqSchema = generateFAQSchema(faqs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationSchema, faqSchema]),
        }}
      />
      <main className="flex min-h-screen flex-col items-center">
        <Hero />
        <HallOfFame />
        <AiAgents />
        <VerticalDomains />
        <ServicesOverview />
        <Portfolio />
        <CreativeSupport />
        <RapidWebsite />
        <TechStack />
        <Testimonials />
        <ContactCta />
      </main>
    </>
  )
}
