"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, ShoppingCart, CreditCard, Bell, Users, ArrowRight, Bot, BarChart3 } from "lucide-react"
import { ScrollReveal } from "@/components/ui/animated-background"

export default function WhatsAppSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "1-Click Reorders",
      description: "Enable customers to reorder products instantly through WhatsApp with payment integration",
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Payment Reminders",
      description: "Automated payment notifications and follow-ups with secure payment links",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: "Proactive Shipping Alerts",
      description: "Real-time order status updates and delivery notifications with tracking links",
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: "Intelligent Chatbots",
      description: "NLP-powered bots that understand context and provide human-like responses",
      color: "from-orange-500/20 to-red-500/20",
    },
  ]

  const useCases = [
    {
      title: "E-commerce Automation",
      description: "Product catalogs, order management, and customer support",
      icon: <ShoppingCart className="h-5 w-5" />,
      metrics: "40% increase in repeat orders",
    },
    {
      title: "Customer Support",
      description: "24/7 automated responses with escalation to human agents",
      icon: <Users className="h-5 w-5" />,
      metrics: "60% reduction in response time",
    },
    {
      title: "Lead Generation",
      description: "Capture leads through interactive forms and qualification flows",
      icon: <BarChart3 className="h-5 w-5" />,
      metrics: "3x higher conversion rates",
    },
    {
      title: "Appointment Booking",
      description: "Schedule meetings and send calendar invites automatically",
      icon: <Bell className="h-5 w-5" />,
      metrics: "85% booking completion rate",
    },
  ]

  const integrations = [
    { name: "WATI Platform", description: "Official WhatsApp Business partner", logo: "💬" },
    { name: "WhatsApp Business API", description: "Direct API integration", logo: "📱" },
    { name: "Twilio WhatsApp", description: "Programmable messaging", logo: "🔧" },
    { name: "360Dialog", description: "European WhatsApp provider", logo: "🌍" },
  ]

  return (
    <section
      id="whatsapp"
      className="relative overflow-hidden bg-gradient-to-b from-background to-green-50/30 dark:to-green-950/10 py-24"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-green-500/10 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal className="mb-16 text-center">
          <Badge variant="secondary" className="mb-4 bg-green-500/10 text-green-600 px-4 py-2">
            <MessageSquare className="mr-2 h-4 w-4" />
            WhatsApp Business Automation
          </Badge>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            WhatsApp Bots &{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              WATI Integration
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            High-speed WhatsApp automation for commerce, customer support & marketing. WATI platform integration,
            1-click reorders & payment reminders that drive revenue growth.
          </p>
        </ScrollReveal>

        <div className="grid gap-16 lg:grid-cols-2 items-center mb-16">
          {/* Left: Visual Demo */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl p-8 border border-green-500/20">
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">WhatsApp Business</h4>
                      <p className="text-xs text-muted-foreground">Online now</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Customer Message */}
                    <div className="flex justify-end">
                      <div className="bg-green-500 text-white rounded-lg px-4 py-2 max-w-xs">
                        <p className="text-sm">Hi, I'd like to reorder my usual items</p>
                      </div>
                    </div>

                    {/* Bot Response */}
                    <div className="flex justify-start">
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-2 max-w-xs">
                        <p className="text-sm">
                          Perfect! I found your last order: 2x Coffee Beans, 1x Grinder. Would you like to reorder for
                          $89.99?
                        </p>
                        <div className="mt-2 space-y-1">
                          <button className="w-full bg-green-500 text-white text-xs py-1 rounded">
                            ✅ Yes, reorder
                          </button>
                          <button className="w-full bg-gray-300 text-gray-700 text-xs py-1 rounded">
                            📝 Modify order
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Confirmation */}
                    <div className="flex justify-start">
                      <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg px-4 py-2 max-w-xs">
                        <p className="text-sm">🎉 Order confirmed! Payment link: pay.example.com/xyz</p>
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
                  <div className="text-2xl font-bold text-green-600">98%</div>
                  <div className="text-xs text-muted-foreground">Open Rate</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg border"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">3x</div>
                  <div className="text-xs text-muted-foreground">Conversion</div>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Right: Features */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">WhatsApp Commerce Features</h3>
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
                            <div className="text-green-600">{feature.icon}</div>
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
            <h3 className="text-2xl font-bold text-center mb-8">Popular WhatsApp Automation Use Cases</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <div className="text-green-600">{useCase.icon}</div>
                      </div>
                      <h4 className="font-semibold mb-2">{useCase.title}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{useCase.description}</p>
                      <div className="text-xs font-medium text-green-600 bg-green-500/10 px-2 py-1 rounded">
                        {useCase.metrics}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Platform Integrations */}
        <ScrollReveal>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-primary/10 mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">WhatsApp Platform Integrations</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {integrations.map((integration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="text-center p-4 rounded-lg hover:bg-green-500/5 transition-colors"
                >
                  <div className="text-3xl mb-3">{integration.logo}</div>
                  <h4 className="font-semibold mb-1">{integration.name}</h4>
                  <p className="text-xs text-muted-foreground">{integration.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* CTA Section */}
        <ScrollReveal>
          <div className="text-center">
            <div className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/20">
              <h3 className="text-2xl font-bold mb-4">Start WhatsApp Automation Today</h3>
              <p className="text-muted-foreground mb-6">
                Get your WhatsApp Business API approved and start automating customer conversations within 48 hours.
                WATI integration included.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="glow" size="lg" className="group bg-green-600 hover:bg-green-700">
                  <Link href="/contact" className="flex items-center gap-2">
                    Get WhatsApp API Access
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="tel:+917456886877" className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    WhatsApp +91-745-688-6877
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
