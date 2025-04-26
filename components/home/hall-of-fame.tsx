"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { ScrollReveal } from "@/components/ui/animated-background"

export default function HallOfFame() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  const logos = [
    {
      name: "Salesforce",
      url: "https://www.salesforce.com/content/dam/sfdc-docs/www/logos/logo-salesforce.svg",
    },
    {
      name: "Slack",
      url: "https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png",
    },
    {
      name: "Shopify",
      url: "https://images.ctfassets.net/lzny33ho1g45/61WBBZHssamuSjx54wNeac/c55be71c546cef3c276d0a95526c7ac3/Shopify_hero.jpg?w=1520&fm=jpg&q=31&fit=thumb&h=760",
    },
    {
      name: "Stripe",
      url: "https://thumbs.dreamstime.com/z/london-uk-september-stripe-online-financial-service-provider-company-logo-d-rendering-london-uk-september-stripe-online-financial-290245663.jpg",
    },
    {
      name: "Zoom",
      url: "https://logos-world.net/wp-content/uploads/2021/02/Zoom-Logo.png",
    },
    {
      name: "Dropbox",
      url: "https://aem.dropbox.com/cms/content/dam/dropbox/www/en-us/branding/dropbox-logo@2x.jpg",
    },
    {
      name: "HubSpot",
      url: "https://www.hubspot.com/hubfs/assets/hubspot.com/style-guide/brand-guidelines/guidelines_the-logo.svg",
    },
    {
      name: "Asana",
      url: "https://assets.asana.biz/m/5f083bc48e06e1e2/original/asana-logo-1200x1200.png",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-background py-16">
      <motion.div className="absolute inset-0 z-0 opacity-30" style={{ y }}>
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-purple-500/5 blur-3xl" />
      </motion.div>

      <div className="container relative z-10 mx-auto px-4">
        <ScrollReveal className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Trusted Technology Partners</h2>
          <p className="mx-auto max-w-3xl text-muted-foreground">
            We leverage industry-leading technologies to deliver cutting-edge solutions for our clients
          </p>
        </ScrollReveal>

        <div ref={containerRef} className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center rounded-xl bg-card shadow-md p-4"
              >
                <div className="relative h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20">
                  <Image
                    src={logo.url}
                    alt={logo.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="mt-3 text-center text-sm font-medium text-foreground">{logo.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
