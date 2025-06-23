"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  MessageCircle,
  Users,
  ShoppingCart,
  Bell,
  FileText,
  CheckCircle,
  ArrowRight,
  Bot,
  BarChart3,
} from "lucide-react"
import { ScrollReveal } from "@/components/ui/animated-background"

export default function TelegramSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Lead Generation Forms",
      description: "Interactive forms with conditional logic and instant lead capture to CRM",
      color: "from-cyan-500/20 to-blue-500/20",
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: "Onboarding Sequences",
      description: "Automated welcome flows with step-by-step guidance and progress tracking",
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "Order Tracking",
      description: "Real-time order status updates with delivery notifications and support links",
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Document Processing",
      description: "Upload and process documents with AI analysis and automated responses",
      color: "from-orange-500/20 to-red-500/20",
    },
  ]

  const useCases = [
    {
      title: "Customer Support Bot",
      description: "24/7 automated support with escalation to human agents",
      commands: ["/help", "/status", "/contact"],
      metrics: "70% query resolution",
    },
    {
      title: "E-commerce Assistant",
      description: "Product search, order placement, and payment processing",
      commands: ["/shop", "/cart", "/track"],
      metrics: "45% conversion rate",
    },
    {
      title: "Team Notifications",
      description: "Automated alerts from Airtable, Sheets, and project management tools",
      commands: ["/subscribe", "/alerts", "/reports"],
      metrics: "90% team engagement",
    },
    {
      title: "Lead Qualification",
      description: "Interactive questionnaires with smart routing to sales team",
      commands: ["/start", "/qualify", "/demo"],
      metrics: "3x qualified leads",
    },
  ]

  const integrations = [
    { name: "Telegram Bot API", description: "Official bot platform", logo: "🤖" },
    { name: "BotFather", description: "Bot creation & management", logo: "👨‍💻" },
    { name: "Telegram Payments", description: "In-chat transactions", logo: "💳" },
    { name: "Webhook Integration", description: "Real-time updates", logo: "🔗" },
  ]

  const benefits = [
    "500M+ active Telegram users worldwide",
    "Rich media support: photos, videos, documents",
    "Inline keyboards for interactive experiences",
    "Group and channel automation capabilities",
    "End-to-end encryption for secure communications",
    "Cross-platform availability (mobile, desktop, web)",
    "No character limits for messages",
    "File sharing up to 2GB per file",
  ]

  return (
    <section
      id="telegram"
      className="relative overflow-hidden bg-gradient-to-b from-background to-cyan-50/30 dark:to-cyan-950/10 py-24"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal className="mb-16 text-center">
          <Badge variant="secondary" className="mb-4 bg-cyan-500/10 text-cyan-600 px-4 py-2">
            <MessageCircle className="mr-2 h-4 w-4" />
            Telegram Bot Development
          </Badge>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Telegram Bots &{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Business Automation
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Lead generation forms, onboarding sequences, and instant order tracking. Airtable/Sheets → Telegram
            auto-notify via n8n / Make.com with 500M+ user reach.
          </p>
        </ScrollReveal>

        <div className="grid gap-16 lg:grid-cols-2 items-center mb-16">
          {/* Left: Bot Demo */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-500/20">
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center">
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Business Bot</h4>
                      <p className="text-xs text-muted-foreground">@yourbusiness_bot</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Welcome Message */}
                    <div className="flex justify-start">
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-2 max-w-xs">
                        <p className="text-sm">👋 Welcome! I can help you with:</p>
                        <div className="mt-2 space-y-1">
                          <button className="w-full bg-cyan-500 text-white text-xs py-1 rounded">
                            /shop - Browse products
                          </button>
                          <button className="w-full bg-blue-500 text-white text-xs py-1 rounded">
                            /track - Order status
                          </button>
                          <button className="w-full bg-purple-500 text-white text-xs py-1 rounded">
                            /support - Get help
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* User Command */}
                    <div className="flex justify-end">
                      <div className="bg-cyan-500 text-white rounded-lg px-4 py-2 max-w-xs">
                        <p className="text-sm">/track</p>
                      </div>
                    </div>

                    {/* Bot Response */}
                    <div className="flex justify-start">
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-2 max-w-xs">
                        <p className="text-sm">📦 Your order #12345 is out for delivery!</p>
                        <p className="text-xs text-muted-foreground mt-1">Expected: Today 3-5 PM</p>
                        <button className="mt-2 w-full bg-green-500 text-white text-xs py-1 rounded">
                          📍 Track live
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg border"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-600">500M+</div>
                  <div className="text-xs text-muted-foreground">Users</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg border"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-600">24/7</div>
                  <div className="text-xs text-muted-foreground">Available</div>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Right: Features */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Telegram Bot Capabilities</h3>
              <div className="grid gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-lg bg-gradient-to-br ${feature.color}`}>
                            <div className="text-cyan-600">{feature.icon}</div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                            <p className="text-muted-foreground">{feature.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Use Cases Grid */}
        <ScrollReveal>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Telegram Bot Use Cases</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-2">{useCase.title}</h4>
                      <p className="text-sm text-muted-foreground mb-4">{useCase.description}</p>
                      <div className="space-y-2 mb-4">
                        {useCase.commands.map((command, cmdIndex) => (
                          <div
                            key={cmdIndex}
                            className="text-xs font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded"
                          >
                            {command}
                          </div>
                        ))}
                      </div>
                      <div className="text-xs font-medium text-cyan-600 bg-cyan-500/10 px-2 py-1 rounded">
                        {useCase.metrics}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Benefits & Integrations */}
        <ScrollReveal>
          <div className="grid gap-16 lg:grid-cols-2 items-start mb-16">
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <BarChart3 className="h-6 w-6 text-cyan-600" />
                Telegram Advantages
              </h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Platform Integrations</h3>
              <div className="grid gap-4">
                {integrations.map((integration, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border border-cyan-500/20"
                  >
                    <div className="text-2xl">{integration.logo}</div>
                    <div>
                      <h4 className="font-semibold">{integration.name}</h4>
                      <p className="text-sm text-muted-foreground">{integration.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA Section */}
        <ScrollReveal>
          <div className="text-center">
            <div className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/20">
              <h3 className="text-2xl font-bold mb-4">Launch Your Telegram Bot</h3>
              <p className="text-muted-foreground mb-6">
                Get your custom Telegram bot live in 3-5 business days. Includes BotFather setup, webhook configuration,
                and integration with your existing systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="glow" size="lg" className="group bg-cyan-600 hover:bg-cyan-700">
                  <Link href="/contact" className="flex items-center gap-2">
                    Create Telegram Bot
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="tel:+917456886877" className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
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
