"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Brain,
  TrendingUp,
  Users,
  Zap,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Target,
  Globe,
  MessageCircle,
} from "lucide-react"
import { ScrollReveal } from "@/components/ui/animated-background"

export default function EmailAutomationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "GPT-Powered Auto-Reply",
      description: "AI intent classification, draft & send responses in under 2 seconds with context awareness",
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Behavioral Triggers",
      description: "Automated sequences based on website visits, email opens, link clicks, and purchase behavior",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Adaptive Send-Times",
      description: "Localized delivery optimization for IST, EST, GST, AEDT, CET time zones",
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Smart Routing & Triage",
      description: "Priority classification for VIP leads with seamless Zendesk/Freshdesk integration",
      color: "from-orange-500/20 to-red-500/20",
    },
  ]

  const campaignTypes = [
    {
      title: "Welcome Series",
      description: "Onboard new subscribers with personalized content",
      icon: <Users className="h-5 w-5" />,
      metrics: "45% higher engagement",
    },
    {
      title: "Abandoned Cart Recovery",
      description: "Win back customers with targeted product reminders",
      icon: <Mail className="h-5 w-5" />,
      metrics: "25% recovery rate",
    },
    {
      title: "Lead Nurturing",
      description: "Guide prospects through your sales funnel",
      icon: <TrendingUp className="h-5 w-5" />,
      metrics: "3x conversion lift",
    },
    {
      title: "Re-engagement Campaigns",
      description: "Reactivate dormant subscribers with fresh content",
      icon: <Zap className="h-5 w-5" />,
      metrics: "18% reactivation rate",
    },
  ]

  const integrations = [
    { name: "Mailchimp", description: "Advanced automation", logo: "🐵" },
    { name: "SendGrid", description: "Transactional emails", logo: "📧" },
    { name: "ConvertKit", description: "Creator-focused", logo: "✍️" },
    { name: "ActiveCampaign", description: "CRM + Email", logo: "🎯" },
  ]

  const benefits = [
    "Save 3 hrs/rep/day with automated responses",
    "Lift CSAT scores by 18% with faster replies",
    "Increase email open rates by 35% with AI optimization",
    "Reduce manual email tasks by 80%",
    "Personalize at scale with GPT-powered content",
    "Track ROI with detailed analytics and attribution",
  ]

  return (
    <section
      id="email"
      className="relative overflow-hidden bg-gradient-to-b from-background to-purple-50/30 dark:to-purple-950/10 py-24"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-pink-500/10 blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal className="mb-16 text-center">
          <Badge variant="secondary" className="mb-4 bg-purple-500/10 text-purple-600 px-4 py-2">
            <Mail className="mr-2 h-4 w-4" />
            Email Marketing Automation
          </Badge>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            AI Email Automation &{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Campaign Management
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            GPT-powered email automation, smart routing & nurture sequences. Save 3 hrs/rep/day while lifting CSAT 18%.
            Behavioral triggers & adaptive send-times for maximum engagement.
          </p>
        </ScrollReveal>

        <div className="grid gap-16 lg:grid-cols-2 items-center mb-16">
          {/* Left: Features */}
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Advanced Email AI Features</h3>
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
                            <div className="text-purple-600">{feature.icon}</div>
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

          {/* Right: Email Flow Visualization */}
          <ScrollReveal direction="right">
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/20">
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                  <h4 className="font-semibold mb-6 flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-purple-600" />
                    AI Email Workflow
                  </h4>

                  <div className="space-y-4">
                    {/* Trigger */}
                    <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        1
                      </div>
                      <div>
                        <p className="font-medium text-sm">Trigger: User visits pricing page</p>
                        <p className="text-xs text-muted-foreground">Behavioral tracking activated</p>
                      </div>
                    </div>

                    {/* AI Processing */}
                    <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        2
                      </div>
                      <div>
                        <p className="font-medium text-sm">AI analyzes user intent & history</p>
                        <p className="text-xs text-muted-foreground">GPT personalizes content</p>
                      </div>
                    </div>

                    {/* Send */}
                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        3
                      </div>
                      <div>
                        <p className="font-medium text-sm">Send at optimal time (IST 2:30 PM)</p>
                        <p className="text-xs text-muted-foreground">Timezone-aware delivery</p>
                      </div>
                    </div>

                    {/* Follow-up */}
                    <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-950/30 rounded-lg">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        4
                      </div>
                      <div>
                        <p className="font-medium text-sm">Auto follow-up if no response</p>
                        <p className="text-xs text-muted-foreground">Smart sequence continues</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Metrics */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg border"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">35%</div>
                  <div className="text-xs text-muted-foreground">Open Rate</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg border"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">18%</div>
                  <div className="text-xs text-muted-foreground">CSAT Lift</div>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>

        {/* Campaign Types Grid */}
        <ScrollReveal>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Email Campaign Types</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {campaignTypes.map((campaign, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <div className="text-purple-600">{campaign.icon}</div>
                      </div>
                      <h4 className="font-semibold mb-2">{campaign.title}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{campaign.description}</p>
                      <div className="text-xs font-medium text-purple-600 bg-purple-500/10 px-2 py-1 rounded">
                        {campaign.metrics}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Benefits Section */}
        <ScrollReveal>
          <div className="grid gap-16 lg:grid-cols-2 items-center mb-16">
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="h-8 w-8 text-purple-600" />
                <h3 className="text-2xl font-bold">Email Automation Benefits</h3>
              </div>
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

            <div className="space-y-6">
              <h3 className="text-2xl font-bold">ROI Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border">
                  <div className="text-3xl font-bold text-purple-600 mb-2">3hrs</div>
                  <div className="text-sm text-muted-foreground">Saved per rep/day</div>
                </div>
                <div className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border">
                  <div className="text-3xl font-bold text-purple-600 mb-2">18%</div>
                  <div className="text-sm text-muted-foreground">CSAT increase</div>
                </div>
                <div className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border">
                  <div className="text-3xl font-bold text-purple-600 mb-2">35%</div>
                  <div className="text-sm text-muted-foreground">Higher open rates</div>
                </div>
                <div className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border">
                  <div className="text-3xl font-bold text-purple-600 mb-2">80%</div>
                  <div className="text-sm text-muted-foreground">Task reduction</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Platform Integrations */}
        <ScrollReveal>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-primary/10 mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Email Platform Integrations</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {integrations.map((integration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="text-center p-4 rounded-lg hover:bg-purple-500/5 transition-colors"
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
            <div className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20">
              <h3 className="text-2xl font-bold mb-4">Launch AI Email Campaigns</h3>
              <p className="text-muted-foreground mb-6">
                Set up intelligent email automation in 3-5 business days. Includes behavioral triggers, A/B testing, and
                integration with your existing marketing stack.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="glow" size="lg" className="group bg-purple-600 hover:bg-purple-700">
                  <Link href="/contact" className="flex items-center gap-2">
                    Start Email Automation
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="tel:+917456886877" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
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
