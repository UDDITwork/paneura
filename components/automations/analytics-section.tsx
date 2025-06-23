"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  BarChart3,
  TrendingUp,
  AlertTriangle,
  MessageSquare,
  Phone,
  Clock,
  Users,
  Target,
  CheckCircle,
  ArrowRight,
  Bell,
} from "lucide-react"
import { ScrollReveal } from "@/components/ui/animated-background"

export default function AnalyticsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Conversation Sentiment Analysis",
      description: "Real-time emotion detection and sentiment scoring across all customer interactions",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "AI Call Scoring",
      description: "Automated call quality assessment with coaching recommendations and performance insights",
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "SLA Breach Alerts",
      description: "Instant Slack & SMS notifications when service levels are at risk of being missed",
      color: "from-orange-500/20 to-red-500/20",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Voice of Customer Analytics",
      description: "Extract insights from customer feedback across all channels with AI-powered analysis",
      color: "from-purple-500/20 to-pink-500/20",
    },
  ]

  const dashboards = [
    {
      title: "Customer Sentiment Dashboard",
      description: "Real-time sentiment tracking across all touchpoints",
      metrics: ["Sentiment score", "Emotion trends", "Issue categories", "Resolution time"],
      icon: <MessageSquare className="h-5 w-5" />,
    },
    {
      title: "Call Performance Analytics",
      description: "Comprehensive call center performance monitoring",
      metrics: ["Call quality scores", "Agent performance", "Customer satisfaction", "First call resolution"],
      icon: <Phone className="h-5 w-5" />,
    },
    {
      title: "SLA Monitoring Center",
      description: "Track and predict service level agreement compliance",
      metrics: ["Response times", "Resolution rates", "Escalation trends", "Breach predictions"],
      icon: <Clock className="h-5 w-5" />,
    },
    {
      title: "Voice of Customer Insights",
      description: "Customer feedback analysis and trend identification",
      metrics: ["Feedback themes", "Product insights", "Feature requests", "Satisfaction drivers"],
      icon: <Users className="h-5 w-5" />,
    },
  ]

  const alertTypes = [
    { name: "SLA Breach Warning", channel: "Slack + SMS", timing: "15 min before", color: "text-orange-600" },
    { name: "Negative Sentiment Spike", channel: "Email + Dashboard", timing: "Real-time", color: "text-red-600" },
    { name: "Call Quality Drop", channel: "Manager Alert", timing: "Immediate", color: "text-yellow-600" },
    { name: "Customer Escalation", channel: "Multi-channel", timing: "Instant", color: "text-purple-600" },
  ]

  const benefits = [
    "Real-time monitoring across all customer touchpoints",
    "Predictive analytics for proactive issue resolution",
    "Automated escalation workflows",
    "Custom KPI tracking and reporting",
    "Integration with existing business tools",
    "AI-powered insights and recommendations",
    "Historical trend analysis and forecasting",
    "Compliance monitoring and reporting",
  ]

  return (
    <section
      id="analytics"
      className="relative overflow-hidden bg-gradient-to-b from-background to-slate-50/30 dark:to-slate-950/10 py-24"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-slate-500/10 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-gray-500/10 blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal className="mb-16 text-center">
          <Badge variant="secondary" className="mb-4 bg-slate-500/10 text-slate-600 px-4 py-2">
            <BarChart3 className="mr-2 h-4 w-4" />
            Analytics & Monitoring Automation
          </Badge>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            AI-Powered Analytics &{" "}
            <span className="bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">
              Smart Monitoring
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Conversation sentiment dashboards, AI call scoring, and SLA breach alerts with Slack & SMS escalation. Voice
            of customer automation with predictive insights.
          </p>
        </ScrollReveal>

        {/* Features Grid */}
        <ScrollReveal>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Advanced Analytics Features</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${feature.color}`}>
                          <div className="text-slate-600">{feature.icon}</div>
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

        {/* Dashboard Showcase */}
        <ScrollReveal>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Analytics Dashboards</h3>
            <div className="grid gap-6 lg:grid-cols-2">
              {dashboards.map((dashboard, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-slate-500/10 rounded-lg">
                          <div className="text-slate-600">{dashboard.icon}</div>
                        </div>
                        <h4 className="font-semibold text-lg">{dashboard.title}</h4>
                      </div>
                      <p className="text-muted-foreground mb-4">{dashboard.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {dashboard.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="text-xs bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded">
                            {metric}
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

        {/* Alert System */}
        <ScrollReveal>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Intelligent Alert System</h3>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-500/20">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {alertTypes.map((alert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="text-center p-4 rounded-lg hover:bg-slate-500/5 transition-colors"
                  >
                    <div className="w-12 h-12 bg-slate-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Bell className={`h-5 w-5 ${alert.color}`} />
                    </div>
                    <h4 className="font-semibold mb-2">{alert.name}</h4>
                    <p className="text-xs text-muted-foreground mb-1">{alert.channel}</p>
                    <div className="text-xs font-medium bg-slate-500/10 px-2 py-1 rounded">{alert.timing}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Benefits & ROI */}
        <ScrollReveal>
          <div className="grid gap-16 lg:grid-cols-2 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">Analytics Benefits</h3>
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

            <div className="bg-gradient-to-br from-slate-500/10 to-gray-500/10 rounded-2xl p-8 border border-slate-500/20">
              <h4 className="font-semibold mb-6 flex items-center gap-2">
                <Target className="h-5 w-5 text-slate-600" />
                Performance Impact
              </h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-600 mb-2">40%</div>
                  <div className="text-sm text-muted-foreground">Faster Issue Resolution</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-600 mb-2">25%</div>
                  <div className="text-sm text-muted-foreground">CSAT Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-600 mb-2">60%</div>
                  <div className="text-sm text-muted-foreground">Reduced Escalations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-600 mb-2">90%</div>
                  <div className="text-sm text-muted-foreground">SLA Compliance</div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground italic">
                  "Proactive monitoring prevents 80% of potential customer issues"
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA Section */}
        <ScrollReveal>
          <div className="text-center">
            <div className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-slate-500/10 to-gray-500/10 rounded-2xl border border-slate-500/20">
              <h3 className="text-2xl font-bold mb-4">Deploy Smart Analytics Today</h3>
              <p className="text-muted-foreground mb-6">
                Get real-time insights into your customer interactions with AI-powered analytics. Custom dashboards and
                alert systems included.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="glow" size="lg" className="group bg-slate-600 hover:bg-slate-700">
                  <Link href="/contact" className="flex items-center gap-2">
                    Setup Analytics Dashboard
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="tel:+917456886877" className="flex items-center gap-2">
                    <BarChart3 className="h-4 w-4" />
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
