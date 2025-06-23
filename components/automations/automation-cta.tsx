"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MessageSquare, Calendar, ArrowRight, CheckCircle, Zap, Globe, Clock, Users } from "lucide-react"
import { ScrollReveal } from "@/components/ui/animated-background"

export default function AutomationCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Directly",
      description: "Speak with our automation experts",
      action: "Call +91-745-688-6877",
      href: "tel:+917456886877",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "WhatsApp Chat",
      description: "Quick questions and instant support",
      action: "Chat on WhatsApp",
      href: "https://wa.me/917456886877",
      color: "from-green-600 to-green-700",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Consultation",
      description: "Detailed project requirements",
      action: "Send Email",
      href: "mailto:hello@paneura.site",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Book Meeting",
      description: "Schedule a free automation audit",
      action: "Book Free Audit",
      href: "/contact",
      color: "from-purple-500 to-purple-600",
    },
  ]

  const guarantees = [
    "Free automation audit and strategy session",
    "24/7 support across all time zones",
    "30-day money-back guarantee",
    "Dedicated project manager assigned",
    "Integration with existing systems",
    "Compliance with global regulations",
  ]

  const stats = [
    { value: "500+", label: "Automations Deployed", icon: <Zap className="h-5 w-5" /> },
    { value: "50+", label: "Countries Served", icon: <Globe className="h-5 w-5" /> },
    { value: "24/7", label: "Support Available", icon: <Clock className="h-5 w-5" /> },
    { value: "98%", label: "Client Satisfaction", icon: <Users className="h-5 w-5" /> },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background py-24">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-purple-500/10 blur-2xl opacity-40"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Main CTA Header */}
        <ScrollReveal className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/20 to-blue-500/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-primary mb-6">
            <Zap className="h-4 w-4" />
            <span>Ready to Automate Your Business?</span>
          </div>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Transform Your Business with{" "}
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              AI Automation
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Join 500+ businesses that have automated their workflows with PanEura. From AI voice agents to WhatsApp
            bots, we'll help you save time, reduce costs, and scale globally.
          </p>
        </ScrollReveal>

        {/* Stats Grid */}
        <ScrollReveal>
          <div className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-primary/10 shadow-lg"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="text-primary">{stat.icon}</div>
                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Contact Methods Grid */}
        <ScrollReveal>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Get Started Today</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <div className="text-white">{method.icon}</div>
                      </div>
                      <h4 className="font-semibold text-lg mb-2">{method.title}</h4>
                      <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      >
                        <Link href={method.href} className="flex items-center justify-center gap-2">
                          {method.action}
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Guarantees Section */}
        <ScrollReveal>
          <div className="mb-16">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-center mb-8">Our Commitment to You</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {guarantees.map((guarantee, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-medium">{guarantee}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Final CTA */}
        <ScrollReveal>
          <div className="text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-8">
                Book your free automation audit today and discover how AI can transform your business operations. No
                commitment required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="glow" size="xl" className="group font-semibold">
                  <Link href="/contact" className="flex items-center gap-2">
                    Book Free Automation Audit
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                        ease: "easeInOut",
                      }}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.span>
                  </Link>
                </Button>

                <Button asChild variant="glow-outline" size="xl" className="group">
                  <Link href="tel:+917456886877" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Call Now: +91-745-688-6877
                  </Link>
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Available 24/7</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                  <span>No Setup Fees</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
