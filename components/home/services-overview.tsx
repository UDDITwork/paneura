"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Briefcase, Bot, FileText, Mail, ShoppingCart, ArrowRight } from "lucide-react"
import { AnimatedGrid, ScrollReveal } from "@/components/ui/animated-background"

export default function ServicesOverview() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  const services = [
    {
      title: "Website & Web App Development",
      description: "We craft lightning-fast websites and progressive web apps tailored to maximize lead generation.",
      icon: <Globe className="h-10 w-10 text-primary" />,
    },
    {
      title: "Custom CRM Solutions",
      description:
        "End-to-end CRM platforms with pipeline tracking, client lifecycle automation, and real-time analytics.",
      icon: <Briefcase className="h-10 w-10 text-primary" />,
    },
    {
      title: "AI-Powered Business Automation",
      description: "Automate internal workflows, client onboarding, and report generation with intelligent AI agents.",
      icon: <Bot className="h-10 w-10 text-primary" />,
    },
    {
      title: "Document Intelligence Systems",
      description: "Turn unstructured data into structured, actionable insights using NLP + OCR + LLM technology.",
      icon: <FileText className="h-10 w-10 text-primary" />,
    },
    {
      title: "Email Marketing Automation",
      description: "Behavior-triggered email flows, follow-up sequences, and newsletters with CRM integration.",
      icon: <Mail className="h-10 w-10 text-primary" />,
    },
    {
      title: "E-Commerce Automation",
      description: "Manage inventory, orders, vendors, and customer experience with AI-backed dashboards and APIs.",
      icon: <ShoppingCart className="h-10 w-10 text-primary" />,
    },
  ]

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-background py-16 md:py-24">
      <motion.div className="absolute inset-0 z-0 opacity-30" style={{ y }}>
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-purple-500/5 blur-3xl" />
      </motion.div>

      <div className="container relative z-10 mx-auto px-4">
        <ScrollReveal className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Services</h2>
          <p className="mx-auto max-w-3xl text-muted-foreground">
            Comprehensive automation solutions to help your business scale efficiently
          </p>
        </ScrollReveal>

        <div className="mx-auto max-w-6xl">
          <AnimatedGrid className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
            {services.map((service, index) => (
              <Card
                key={index}
                className="h-full transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg card-rotate-hover"
              >
                <CardHeader>
                  <motion.div
                    className="mb-4"
                    whileHover={{
                      rotate: [0, 5, 0, -5, 0],
                      transition: { duration: 0.5 },
                    }}
                  >
                    {service.icon}
                  </motion.div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="ghost" size="sm" asChild className="group">
                    <Link href="/services" className="flex items-center">
                      Learn more{" "}
                      <motion.span
                        className="ml-2 inline-block"
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "loop",
                          ease: "easeInOut",
                        }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </AnimatedGrid>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button asChild variant="glow" size="xl" rounded="full" className="px-12 font-medium shadow-lg">
              <Link href="/services">View All Services</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
