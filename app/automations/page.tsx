import type { Metadata } from "next"
import { automationSEOConfig } from "@/lib/automation-seo-config"
import { generateServiceSchema, generateFAQSchema } from "@/lib/structured-data"
import AutomationHero from "@/components/automations/automation-hero"
import VoiceAISection from "@/components/automations/voice-ai-section"
import WhatsAppSection from "@/components/automations/whatsapp-section"
import EmailAutomationSection from "@/components/automations/email-automation-section"
import WorkflowSection from "@/components/automations/workflow-section"
import TelegramSection from "@/components/automations/telegram-section"
import MultichannelSection from "@/components/automations/multichannel-section"
import AnalyticsSection from "@/components/automations/analytics-section"
import AutomationCTA from "@/components/automations/automation-cta"

const pageConfig = automationSEOConfig.pages.main

export const metadata: Metadata = {
  title: pageConfig.title,
  description: pageConfig.description,
  keywords: pageConfig.keywords,
  openGraph: {
    title: pageConfig.title,
    description: pageConfig.description,
    url: "https://paneura.site/automations",
    siteName: "PanEura Automations",
    images: [
      {
        url: "https://paneura.site/og-automations.jpg",
        width: 1200,
        height: 630,
        alt: "PanEura Automations - AI Voice Agents & Workflow Automation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageConfig.title,
    description: pageConfig.description,
    images: ["https://paneura.site/og-automations.jpg"],
    site: "@PaneuraAutomat",
  },
  alternates: {
    canonical: "https://paneura.site/automations",
    languages: {
      "en-IN": "https://paneura.site/in/automations",
      "en-US": "https://paneura.site/us/automations",
      "en-AE": "https://paneura.site/ae/automations",
      "en-AU": "https://paneura.site/au/automations",
      "en-EU": "https://paneura.site/eu/automations",
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

export default function AutomationsPage() {
  // Generate structured data
  const serviceSchemas = [
    generateServiceSchema({
      name: "AI Voice Agents & Conversational IVR",
      description:
        "24/7 multilingual AI voice agents for customer service, lead qualification, and appointment scheduling",
      url: "https://paneura.site/automations#voice-ai",
    }),
    generateServiceSchema({
      name: "WhatsApp Business Automation",
      description: "Automated WhatsApp messaging, chatbots, and commerce integration with WATI platform",
      url: "https://paneura.site/automations#whatsapp",
    }),
    generateServiceSchema({
      name: "n8n Workflow Automation",
      description: "Custom workflow automation using n8n, Zapier, and Make.com for business process optimization",
      url: "https://paneura.site/automations#workflows",
    }),
    generateServiceSchema({
      name: "AI Email Marketing Automation",
      description: "Intelligent email campaigns, auto-replies, and nurture sequences with behavioral triggers",
      url: "https://paneura.site/automations#email",
    }),
  ]

  const faqSchema = generateFAQSchema(automationSEOConfig.faqs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([...serviceSchemas, faqSchema]),
        }}
      />
      <main className="flex min-h-screen flex-col">
        <AutomationHero />
        <VoiceAISection />
        <WhatsAppSection />
        <EmailAutomationSection />
        <WorkflowSection />
        <TelegramSection />
        <MultichannelSection />
        <AnalyticsSection />
        <AutomationCTA />
      </main>
    </>
  )
}
