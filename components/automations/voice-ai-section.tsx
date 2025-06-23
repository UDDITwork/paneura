"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Mic, Globe, TrendingUp, CheckCircle, ArrowRight, MessageCircle, BarChart3 } from "lucide-react"
import { ScrollReveal } from "@/components/ui/animated-background"

export default function VoiceAISection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    {
      icon: <Mic className="h-6 w-6" />,
      title: "Real-time Speech Processing",
      description: "Advanced speech-to-text + GPT-style NLU with human-like prosody via neural TTS",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Dynamic Conversation Scripts",
      description: "Sentiment routing, compliance checks, and automated post-call summary emails",
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "50+ Language Support",
      description: "Multilingual AI agents that can switch languages mid-call based on customer preference",
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Predictive Dialer Integration",
      description: "5× connect rate uplift with intelligent voicemail drop and A/B test openers",
      color: "from-orange-500/20 to-red-500/20",
    },
  ]

  const benefits = [
    "Cut customer hold times to zero with instant AI response",
    "Handle 80% of routine inquiries without human intervention",
    "8-12 month ROI payback vs $25-40k/year human agents",
    "24/7 availability across all time zones",
    "Seamless CRM integration with call notes and follow-ups",
    "Compliance-ready with GDPR, HIPAA, and regional regulations",
  ]

  const platforms = [
    { name: "Vapi API", description: "Custom voice AI flows", logo: "🎯" },
    { name: "Dialpad", description: "Enterprise integration", logo: "📞" },
    { name: "Air.ai", description: "Turnkey solutions", logo: "🤖" },
    { name: "Twilio Voice", description: "Scalable infrastructure", logo: "🔧" },
  ]

  return (
    <section
      id="voice-ai"
      className="relative overflow-hidden bg-gradient-to-b from-background to-blue-50/30 dark:to-blue-950/10 py-24"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal className="mb-16 text-center">
          <Badge variant="secondary" className="mb-4 bg-blue-500/10 text-blue-600 px-4 py-2">
            <Phone className="mr-2 h-4 w-4" />
            Voice & Calling Automation
          </Badge>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            AI Voice Agents &{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Conversational IVR
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Cut hold-times to zero with multilingual AI voice agents that schedule, qualify and upsell 24×7. Real-time
            speech processing with human-like conversations that your customers will love.
          </p>
        </ScrollReveal>

        <div className="grid gap-16 lg:grid-cols-2 items-center mb-16">
          {/* Left: Features Grid */}
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Advanced Voice AI Capabilities</h3>
              <div className="grid gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-lg bg-gradient-to-br ${feature.color}`}>
                            <div className="text-blue-600">{feature.icon}</div>
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

          {/* Right: Benefits & ROI */}
          <ScrollReveal direction="right">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-8 border border-blue-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                  <h3 className="text-2xl font-bold">Proven ROI Impact</h3>
                </div>
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">80%</div>
                    <div className="text-sm text-muted-foreground">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">8-12mo</div>
                    <div className="text-sm text-muted-foreground">ROI Payback</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Availability</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">5x</div>
                    <div className="text-sm text-muted-foreground">Connect Rate</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  "Save 3 hrs/rep/day while lifting CSAT 18% with intelligent voice automation"
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-4">Key Benefits</h4>
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
        </div>

        {/* Platform Integrations */}
        <ScrollReveal>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-primary/10">
            <h3 className="text-2xl font-bold text-center mb-8">Supported Voice AI Platforms</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {platforms.map((platform, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="text-center p-4 rounded-lg hover:bg-primary/5 transition-colors"
                >
                  <div className="text-3xl mb-3">{platform.logo}</div>
                  <h4 className="font-semibold mb-1">{platform.name}</h4>
                  <p className="text-xs text-muted-foreground">{platform.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* CTA Section */}
        <ScrollReveal>
          <div className="mt-16 text-center">
            <div className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl border border-blue-500/20">
              <h3 className="text-2xl font-bold mb-4">Ready to Deploy AI Voice Agents?</h3>
              <p className="text-muted-foreground mb-6">
                Get a custom demo of our AI voice agents handling your specific use cases. See the technology in action
                before you commit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="glow" size="lg" className="group">
                  <Link href="/contact" className="flex items-center gap-2">
                    Schedule Voice AI Demo
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="tel:+917456886877" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
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
