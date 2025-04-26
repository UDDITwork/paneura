"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Receipt,
  MousePointerClick,
  MessageSquareText,
  Layers,
  ClipboardList,
  Calculator,
  Users,
  FolderKanban,
  ShieldCheck,
  BarChart3,
} from "lucide-react"
import { AnimatedGrid } from "@/components/ui/animated-background"

export default function VerticalDomains() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const domains = [
    {
      title: "Billing & Subscription Management",
      icon: <Receipt className="h-6 w-6 text-primary" />,
    },
    {
      title: "User Behavior Heatmaps",
      icon: <MousePointerClick className="h-6 w-6 text-primary" />,
    },
    {
      title: "AI Chatbots for B2B Sales",
      icon: <MessageSquareText className="h-6 w-6 text-primary" />,
    },
    {
      title: "API-first Integration Layer",
      icon: <Layers className="h-6 w-6 text-primary" />,
    },
    {
      title: "Customer Onboarding Workflows",
      icon: <ClipboardList className="h-6 w-6 text-primary" />,
    },
    {
      title: "AI-Based Dynamic Pricing Tools",
      icon: <Calculator className="h-6 w-6 text-primary" />,
    },
    {
      title: "Employee Attendance & HR Dashboards",
      icon: <Users className="h-6 w-6 text-primary" />,
    },
    {
      title: "Multi-tenant SaaS Architecture",
      icon: <FolderKanban className="h-6 w-6 text-primary" />,
    },
    {
      title: "Security & Compliance",
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
    },
    {
      title: "Real-Time Analytics",
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
    },
  ]

  return (
    <section className="relative overflow-hidden bg-background py-16">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.05),transparent_50%)]"></div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Scalable Verticals</h2>
          <p className="mx-auto max-w-3xl text-muted-foreground">
            We provide scalable solutions across various domains to help your business grow
          </p>
        </motion.div>

        <div ref={ref} className="mx-auto max-w-6xl">
          <AnimatedGrid className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5" staggerDelay={0.05}>
            {domains.map((domain, index) => (
              <Card
                key={index}
                className="h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg card-rotate-hover glow-effect"
              >
                <CardHeader className="pb-2">
                  <motion.div
                    className="mb-2"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  >
                    {domain.icon}
                  </motion.div>
                  <CardTitle className="text-sm font-medium">{domain.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </AnimatedGrid>
        </div>
      </div>
    </section>
  )
}
