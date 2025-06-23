"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Mail, MessageSquare, Phone, Linkedin, BarChart3, CheckCircle, ArrowRight, Globe } from "lucide-react"
import { ScrollReveal } from "@/components/ui/animated-background"

export default function MultichannelSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const channels = [
    {
      icon: <Linkedin className="h-6 w-6" />,
      name: "LinkedIn",
      description: "Professional networking and B2B lead generation",
      color: "from-blue-600/20 to-blue-700/20",
      features: ["Connection requests", "InMail sequences", "Content engagement", "Lead qualification"],
    },
    {
      icon: <Mail className="h-6 w-6" />,
      name: "Email",
      description: "Personalized email campaigns with AI-powered content",
      color: "from-purple-600/20 to-purple-700/20",
      features: ["Drip campaigns", "A/B testing", "Behavioral triggers", "Deliverability optimization"],
    },
    {
      icon: <Phone className="h-6 w-6" />,
      name: "Voice Calls",
      description: "AI-powered voice outreach and follow-up calls",
      color: "from-green-600/20 to-green-700/20",
      features: ["Warm-up calls", "Appointment setting", "Follow-up sequences", "Call analytics"],
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      name: "SMS",
      description: "Direct text messaging for immediate engagement",
      color: "from-orange-600/20 to-orange-700/20",
      features: ["Instant notifications", "Two-way conversations", "Appointment reminders", "Link tracking"],
    },
  ]

  const strategies = [
    {
      title: "LinkedIn + Email Combo",
      description: "Connect on LinkedIn, then follow up with personalized email sequences",
      steps: ["LinkedIn connection", "Profile engagement", "Email introduction", "Meeting request"],
      conversion: "35% higher response rate",
    },
    {
      title: "Warm-up Scheduling",
      description: "AI-driven send-window optimization per region and persona",
      steps: ["Audience analysis", "Time zone mapping", "Engagement tracking", "Optimal scheduling"],
      conversion: "50% better open rates",
    },
    {
      title: "Multi-touch Sequences",
      description: "Coordinated outreach across all channels with intelligent timing",
      steps: ["Initial contact", "Follow-up touch", "Value delivery", "Call to action"],
      conversion: "3x conversion lift",
    },
  ]

  const regions = [
    { name: "India", timezone: "IST", optimal: "10 AM - 2 PM", flag: "🇮🇳" },
    { name: "USA", timezone: "EST/PST", optimal: "9 AM - 11 AM", flag: "🇺🇸" },
    { name: "UAE", timezone: "GST", optimal: "11 AM - 3 PM", flag: "🇦🇪" },
    { name: "Australia", timezone: "AEDT", optimal: "9 AM - 12 PM", flag: "🇦🇺" },
    { name: "Europe", timezone: "CET", optimal: "10 AM - 1 PM", flag: "🇪🇺" },
  ]

  const benefits = [
    "AI-driven send-window optimization per region",
    "GPT persona builder for personalized messaging",
    "Cross-channel conversation tracking",
    "Automated follow-up sequences",
    "Real-time engagement analytics",
    "Compliance with GDPR and CAN-SPAM",
    "Integration with popular CRM systems",
    "A/B testing across all channels",
  ]

  return (
    <section
      id="multichannel"
      className="relative overflow-hidden bg-gradient-to-b from-background to-indigo-50/30 dark:to-indigo-950/10 py-24"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal className="mb-16 text-center">
          <Badge variant="secondary" className="mb-4 bg-indigo-500/10 text-indigo-600 px-4 py-2">
            <Users className="mr-2 h-4 w-4" />
            Multichannel Outreach Automation
          </Badge>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Coordinated Outreach &{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Global Optimization
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            LinkedIn & Email combo sequences with warm-up scheduling. A/B personalization with GPT persona builder and
            AI-driven send-window optimization per region (India, US, UAE, AU, EU).
          </p>
        </ScrollReveal>

        {/* Channel Grid */}
        <ScrollReveal>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Outreach Channels</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {channels.map((channel, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${channel.color} rounded-lg flex items-center justify-center mx-auto mb-4`}
                      >
                        <div className="text-white">{channel.icon}</div>
                      </div>
                      <h4 className="font-semibold text-center mb-2">{channel.name}</h4>
                      <p className="text-sm text-muted-foreground text-center mb-4">{channel.description}</p>
                      <div className="space-y-2">
                        {channel.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                            <span className="text-xs">{feature}</span>
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

        {/* Strategy Examples */}
        <ScrollReveal>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Proven Outreach Strategies</h3>
            <div className="grid gap-8 lg:grid-cols-3">
              {strategies.map((strategy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg mb-3">{strategy.title}</h4>
                      <p className="text-muted-foreground text-sm mb-4">{strategy.description}</p>
                      <div className="space-y-2 mb-4">
                        {strategy.steps.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-indigo-500/10 rounded-full flex items-center justify-center text-indigo-600 text-xs font-bold">
                              {stepIndex + 1}
                            </div>
                            <span className="text-sm">{step}</span>
                          </div>
                        ))}
                      </div>
                      <div className="text-xs font-medium text-indigo-600 bg-indigo-500/10 px-3 py-1 rounded-full text-center">
                        {strategy.conversion}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Regional Optimization */}
        <ScrollReveal>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Regional Send-Time Optimization</h3>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20">
              <div className="grid gap-6 md:grid-cols-5">
                {regions.map((region, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="text-center p-4 rounded-lg hover:bg-indigo-500/5 transition-colors"
                  >
                    <div className="text-3xl mb-2">{region.flag}</div>
                    <h4 className="font-semibold mb-1">{region.name}</h4>
                    <p className="text-xs text-muted-foreground mb-1">{region.timezone}</p>
                    <div className="text-xs font-medium text-indigo-600 bg-indigo-500/10 px-2 py-1 rounded">
                      {region.optimal}
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  AI automatically schedules outreach for optimal engagement times in each region
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Benefits & Features */}
        <ScrollReveal>
          <div className="grid gap-16 lg:grid-cols-2 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">Multichannel Benefits</h3>
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

            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl p-8 border border-indigo-500/20">
              <h4 className="font-semibold mb-6 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-indigo-600" />
                Performance Metrics
              </h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">3x</div>
                  <div className="text-sm text-muted-foreground">Conversion Lift</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">50%</div>
                  <div className="text-sm text-muted-foreground">Better Open Rates</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">35%</div>
                  <div className="text-sm text-muted-foreground">Higher Response</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Global Reach</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA Section */}
        <ScrollReveal>
          <div className="text-center">
            <div className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl border border-indigo-500/20">
              <h3 className="text-2xl font-bold mb-4">Scale Your Outreach Globally</h3>
              <p className="text-muted-foreground mb-6">
                Launch coordinated multichannel campaigns across LinkedIn, email, voice, and SMS. AI optimization
                included for all regions and time zones.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="glow" size="lg" className="group bg-indigo-600 hover:bg-indigo-700">
                  <Link href="/contact" className="flex items-center gap-2">
                    Start Multichannel Campaign
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="tel:+917456886877" className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
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
