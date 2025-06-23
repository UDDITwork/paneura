"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Phone, MessageSquare, Mail, Workflow, Bot, Zap, Globe, Clock, TrendingUp } from "lucide-react"
import { ScrollReveal } from "@/components/ui/animated-background"

export default function AutomationHero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const automationTypes = [
    { icon: <Phone className="h-5 w-5" />, label: "AI Voice Agents", color: "bg-blue-500/10 text-blue-600" },
    { icon: <MessageSquare className="h-5 w-5" />, label: "WhatsApp Bots", color: "bg-green-500/10 text-green-600" },
    { icon: <Mail className="h-5 w-5" />, label: "Email Campaigns", color: "bg-purple-500/10 text-purple-600" },
    { icon: <Workflow className="h-5 w-5" />, label: "n8n Workflows", color: "bg-orange-500/10 text-orange-600" },
    { icon: <Bot className="h-5 w-5" />, label: "Telegram Bots", color: "bg-cyan-500/10 text-cyan-600" },
  ]

  const stats = [
    { value: "80%", label: "Cost Reduction", icon: <TrendingUp className="h-5 w-5" /> },
    { value: "24/7", label: "Availability", icon: <Clock className="h-5 w-5" /> },
    { value: "50+", label: "Languages", icon: <Globe className="h-5 w-5" /> },
    { value: "8-12mo", label: "ROI Payback", icon: <Zap className="h-5 w-5" /> },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background py-20 md:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-purple-500/10 blur-2xl opacity-40"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* Left Content */}
          <ScrollReveal direction="left">
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/20 to-blue-500/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-primary">
                <Zap className="h-4 w-4" />
                <span>AI-Powered Business Automation</span>
              </div>

              {/* Main Heading */}
              <div>
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6">
                  Automate Client Calls &{" "}
                  <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                    Marketing
                  </span>{" "}
                  with AI
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                  Cut hold-times to zero with multilingual AI voice agents that schedule, qualify and upsell 24×7
                </p>
              </div>

              {/* Description */}
              <p className="text-lg text-muted-foreground leading-relaxed">
                Transform your business with AI voice agents, WhatsApp automation, n8n workflows & email marketing
                campaigns. Expert Zapier, Vapi, WATI & Make.com integration services across India, USA, UAE, Australia,
                and Europe.
              </p>

              {/* Automation Types */}
              <div className="flex flex-wrap gap-3">
                {automationTypes.map((type, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Badge variant="secondary" className={`${type.color} px-3 py-1.5 font-medium`}>
                      <span className="mr-2">{type.icon}</span>
                      {type.label}
                    </Badge>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
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
                    +91-745-688-6877
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Vapi Certified Partners</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <span>WATI Integration Experts</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                  <span>n8n Workflow Specialists</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Content - Stats & Visual */}
          <ScrollReveal direction="right">
            <div ref={ref} className="relative">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">{stat.icon}</div>
                      <div className="text-3xl font-bold text-primary">{stat.value}</div>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Central Visual Element */}
              <motion.div
                className="relative mx-auto w-80 h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/20 backdrop-blur-sm border border-primary/20 shadow-2xl"
                animate={{
                  y: [0, -10, 0],
                  rotateY: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                <div className="absolute inset-4 rounded-xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <motion.div
                      className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-blue-500 rounded-full flex items-center justify-center"
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                      }}
                    >
                      <Bot className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold">AI Automation Hub</h3>
                    <p className="text-sm text-muted-foreground">Voice • Messaging • Email • Workflows</p>
                  </div>
                </div>

                {/* Floating Elements */}
                {[
                  { icon: <Phone className="h-4 w-4" />, position: "top-4 left-4", delay: 0 },
                  { icon: <MessageSquare className="h-4 w-4" />, position: "top-4 right-4", delay: 0.5 },
                  { icon: <Mail className="h-4 w-4" />, position: "bottom-4 left-4", delay: 1 },
                  { icon: <Workflow className="h-4 w-4" />, position: "bottom-4 right-4", delay: 1.5 },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`absolute ${item.position} w-8 h-8 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center text-primary shadow-lg`}
                    animate={{
                      y: [0, -5, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                      delay: item.delay,
                    }}
                  >
                    {item.icon}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
