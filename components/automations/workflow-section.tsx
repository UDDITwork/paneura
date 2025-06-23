"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Workflow,
  Code,
  Database,
  GitBranch,
  Settings,
  CheckCircle,
  ArrowRight,
  Bot,
  BarChart3,
  Clock,
} from "lucide-react"
import { ScrollReveal } from "@/components/ui/animated-background"

export default function WorkflowSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const platforms = [
    {
      name: "n8n",
      description: "Open-source workflow automation with 2660+ templates",
      icon: "🔗",
      features: ["Self-hosted", "Unlimited workflows", "Custom integrations", "No usage limits"],
      color: "from-orange-500/20 to-red-500/20",
    },
    {
      name: "Zapier",
      description: "Cloud-based automation with 5000+ app integrations",
      icon: "⚡",
      features: ["Easy setup", "Pre-built templates", "Multi-step workflows", "Enterprise security"],
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      name: "Make.com",
      description: "Visual automation platform for complex scenarios",
      icon: "🎯",
      features: ["Visual builder", "Advanced logic", "Error handling", "Real-time monitoring"],
      color: "from-purple-500/20 to-pink-500/20",
    },
  ]

  const workflowExamples = [
    {
      title: "Shopify → WhatsApp → AI Voice",
      description: "New order triggers WhatsApp confirmation + AI voice call for high-value customers",
      icon: <Workflow className="h-5 w-5" />,
      steps: ["Order placed", "WhatsApp sent", "AI call scheduled", "CRM updated"],
    },
    {
      title: "Airtable → Telegram → HubSpot",
      description: "Database updates trigger Telegram alerts and advance HubSpot deal stages",
      icon: <Database className="h-5 w-5" />,
      steps: ["Data updated", "Team notified", "Deal advanced", "Report generated"],
    },
    {
      title: "Lead Capture → Email → SMS",
      description: "Multi-channel nurture sequence with intelligent timing and personalization",
      icon: <GitBranch className="h-5 w-5" />,
      steps: ["Lead captured", "Email sent", "SMS follow-up", "Score updated"],
    },
    {
      title: "Invoice → Payment → Accounting",
      description: "Automated invoice processing with payment tracking and bookkeeping sync",
      icon: <BarChart3 className="h-5 w-5" />,
      steps: ["Invoice created", "Payment processed", "Books updated", "Receipt sent"],
    },
  ]

  const benefits = [
    "2660+ open n8n templates for any business logic",
    "Zapier migration services with zero downtime",
    "Custom API integrations for unique requirements",
    "Visual workflow builder for non-technical users",
    "Error handling and retry mechanisms",
    "Real-time monitoring and alerting",
    "Scalable infrastructure for enterprise needs",
    "Cost optimization vs traditional automation tools",
  ]

  const rpaFeatures = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Invoice Extraction",
      description: "Automated data extraction from PDFs and scanned documents",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "ERP Data Entry",
      description: "Seamless data transfer between systems without manual input",
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Payroll Exports",
      description: "Automated payroll processing with compliance checks",
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: "Exception Handling",
      description: "LLM-powered reasoning for complex decision making",
    },
  ]

  return (
    <section
      id="workflows"
      className="relative overflow-hidden bg-gradient-to-b from-background to-orange-50/30 dark:to-orange-950/10 py-24"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-red-500/10 blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal className="mb-16 text-center">
          <Badge variant="secondary" className="mb-4 bg-orange-500/10 text-orange-600 px-4 py-2">
            <Workflow className="mr-2 h-4 w-4" />
            Workflow Orchestration & Low-Code Automation
          </Badge>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            n8n, Zapier &{" "}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Make.com Workflows
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Expert n8n workflow automation, Zapier migration & Make.com integration. 2660+ templates for any business
            logic. Low-code automation specialists with enterprise-grade reliability.
          </p>
        </ScrollReveal>

        {/* Platform Comparison */}
        <ScrollReveal>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Choose Your Automation Platform</h3>
            <div className="grid gap-8 md:grid-cols-3">
              {platforms.map((platform, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="text-center mb-6">
                        <div className="text-4xl mb-3">{platform.icon}</div>
                        <h4 className="text-xl font-bold mb-2">{platform.name}</h4>
                        <p className="text-sm text-muted-foreground">{platform.description}</p>
                      </div>
                      <div className="space-y-3">
                        {platform.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Workflow Examples */}
        <ScrollReveal>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Popular Workflow Templates</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {workflowExamples.map((workflow, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-orange-500/10 rounded-lg">
                          <div className="text-orange-600">{workflow.icon}</div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-2">{workflow.title}</h4>
                          <p className="text-muted-foreground text-sm">{workflow.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 overflow-x-auto pb-2">
                        {workflow.steps.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-center gap-2 flex-shrink-0">
                            <div className="px-3 py-1 bg-orange-500/10 text-orange-600 rounded-full text-xs font-medium">
                              {step}
                            </div>
                            {stepIndex < workflow.steps.length - 1 && (
                              <ArrowRight className="h-3 w-3 text-muted-foreground" />
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* RPA Section */}
        <ScrollReveal>
          <div className="grid gap-16 lg:grid-cols-2 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">Robotic Process Automation (RPA)</h3>
              <p className="text-muted-foreground mb-6">
                Combine UIPath bots with LLM reasoning for intelligent exception handling. Automate complex back-office
                processes that require human-like decision making.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {rpaFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border border-orange-500/20"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-orange-600">{feature.icon}</div>
                      <h4 className="font-semibold">{feature.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl p-8 border border-orange-500/20">
              <h4 className="font-semibold mb-6 flex items-center gap-2">
                <Clock className="h-5 w-5 text-orange-600" />
                Workflow Benefits
              </h4>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA Section */}
        <ScrollReveal>
          <div className="text-center">
            <div className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl border border-orange-500/20">
              <h3 className="text-2xl font-bold mb-4">Build Custom Workflows Today</h3>
              <p className="text-muted-foreground mb-6">
                Start with our library of 2660+ n8n templates or migrate from Zapier with zero downtime. Custom
                integrations and enterprise support included.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="glow" size="lg" className="group bg-orange-600 hover:bg-orange-700">
                  <Link href="/contact" className="flex items-center gap-2">
                    Start Workflow Automation
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="tel:+917456886877" className="flex items-center gap-2">
                    <Workflow className="h-4 w-4" />
                    Call +91-745-688-6877
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
