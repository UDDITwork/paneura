"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Clock, Zap, Palette, Rocket, Users, ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/ui/animated-background"

export default function RapidWebsite() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Features data
  const features = [
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Lightning-Fast Development",
      description: "We blend pre-built components with AI-assisted workflows to ship full-stack sites in 1 day.",
    },
    {
      icon: <Palette className="h-5 w-5" />,
      title: "Tailored to You",
      description: "Every site is branded, mobile-responsive, and performance-optimized.",
    },
    {
      icon: <Rocket className="h-5 w-5" />,
      title: "Go Live in 24 Hours",
      description: "From concept to deployment — domain, design, copy, hosting — all done under one roof.",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Built for Entrepreneurs, Startups & Local Businesses",
      description:
        "Whether it's your MVP, a product landing page, or a full store — we build it fast, so you can scale faster.",
    },
  ]

  // Timeline data
  const timeline = [
    {
      time: "Hour 1-3",
      title: "Discovery & Design",
      description: "We gather requirements, create wireframes, and design key pages",
      color: "from-purple-500 to-primary",
    },
    {
      time: "Hour 4-12",
      title: "Development",
      description: "Our team builds your responsive website with all core functionality",
      color: "from-blue-500 to-primary",
    },
    {
      time: "Hour 13-18",
      title: "Content & Refinement",
      description: "We integrate your content, optimize for performance, and polish the design",
      color: "from-indigo-500 to-primary",
    },
    {
      time: "Hour 19-24",
      title: "Testing & Launch",
      description: "Final QA, domain setup, and deployment to get your site live",
      color: "from-violet-500 to-primary",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-24">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl opacity-70"></div>
        <div className="absolute top-1/4 right-1/3 h-64 w-64 rounded-full bg-blue-500/5 blur-2xl opacity-60"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header section */}
        <ScrollReveal className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-primary mb-6 shadow-sm">
            <Clock className="h-4 w-4" />
            <span>Rapid Development</span>
          </div>
          <h2 className="mb-5 text-4xl font-bold md:text-5xl leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
            From Idea to Impact — in Just <span className="text-primary font-extrabold">24 Hours</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Your dream website. Designed, built, and launched before your next meeting.
            <br />
            No delays. No dev-dramas. Just pure PanEura speed.
          </p>
        </ScrollReveal>

        <div ref={ref} className="grid gap-16 lg:grid-cols-12 items-center">
          {/* Left side: Feature cards with image collage */}
          <div className="lg:col-span-7 relative">
            <div className="relative h-[580px] perspective-container rounded-3xl overflow-hidden shadow-xl">
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/5 to-primary/10 backdrop-blur-[1px] z-0 rounded-3xl"></div>

              {/* Central floating badge */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
                <motion.div
                  className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-primary to-purple-500 text-white shadow-lg border border-white/20 backdrop-blur-md"
                  animate={{
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      "0 0 0 0 rgba(123, 97, 255, 0.3)",
                      "0 0 0 15px rgba(123, 97, 255, 0)",
                      "0 0 0 0 rgba(123, 97, 255, 0)",
                    ],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                  }}
                >
                  <div className="text-center">
                    <span className="text-2xl font-extrabold block">24h</span>
                    <span className="text-xs font-medium uppercase tracking-wider opacity-90">Delivery</span>
                  </div>
                </motion.div>
              </div>

              {/* Image 1 - UI/UX Design */}
              <motion.div
                className="absolute left-[5%] top-[5%] w-[55%] rounded-xl shadow-2xl overflow-hidden z-20"
                initial={{ opacity: 0, y: 20, rotateY: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 20, rotateY: -15 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.03, rotateY: 5, z: 30 }}
              >
                <div className="relative w-full h-[280px] overflow-hidden rounded-xl">
                  <Image
                    src="https://sjc.microlink.io/HVEbxG9yi_A0FbQ4911TlU6FUvL0p3ykC7xvVlF_IekbRJCZcfeRnR9DMAjlmG9fvfM3vWcByer24ysjxt3Ogg.jpeg"
                    alt="UI/UX design interface with modern elements"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-5 text-white">
                      <p className="font-semibold text-base uppercase tracking-wide">Modern UI/UX Design</p>
                      <p className="text-sm opacity-90">Beautiful interfaces that engage users</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Image 2 - Interactive Elements */}
              <motion.div
                className="absolute right-[5%] top-[12%] w-[42%] rounded-xl shadow-2xl overflow-hidden z-10"
                initial={{ opacity: 0, y: -20, rotateY: 15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: -20, rotateY: 15 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.03, rotateY: -5, z: 20 }}
              >
                <div className="relative w-full h-[200px] overflow-hidden rounded-xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-B1bOO4YT1kR5PX4W39w6RZ1d8un7Bn.png"
                    alt="Digital web elements"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-5 text-white">
                      <p className="font-semibold text-base uppercase tracking-wide">Interactive Elements</p>
                      <p className="text-sm opacity-90">Engaging user experiences</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Image 3 - Code Development */}
              <motion.div
                className="absolute left-[8%] bottom-[10%] w-[40%] rounded-xl shadow-2xl overflow-hidden z-30"
                initial={{ opacity: 0, y: 30, rotateY: -10 }}
                animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 30, rotateY: -10 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.03, rotateY: 5, z: 40 }}
              >
                <div className="relative w-full h-[220px] overflow-hidden rounded-xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1WTblICqM4WSUYjnkWVOMh6s9F5nn1.png"
                    alt="Code development"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-5 text-white">
                      <p className="font-semibold text-base uppercase tracking-wide">Clean Code</p>
                      <p className="text-sm opacity-90">Optimized for performance</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Image 4 - Developer Working */}
              <motion.div
                className="absolute right-[7%] bottom-[8%] w-[45%] rounded-xl shadow-2xl overflow-hidden z-20"
                initial={{ opacity: 0, y: 40, rotateY: 10 }}
                animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 40, rotateY: 10 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ scale: 1.03, rotateY: -5, z: 30 }}
              >
                <div className="relative w-full h-[240px] overflow-hidden rounded-xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-H3iQLy3fZ3GlNMYgNReHWQv354RpOK.png"
                    alt="Developer working"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-5 text-white">
                      <p className="font-semibold text-base uppercase tracking-wide">Expert Development</p>
                      <p className="text-sm opacity-90">Skilled professionals at work</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right side: Feature cards */}
          <div className="lg:col-span-5">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6 inline-block border-b-2 border-primary pb-2">
                Why Choose Our 24-Hour Service
              </h3>

              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all p-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-3 mr-3 bg-gradient-to-br from-primary/20 to-purple-500/10 rounded-lg">
                      <div className="h-9 w-9 flex items-center justify-center rounded-full bg-primary text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="flex-1 py-3 pr-4">
                      <h4 className="font-semibold text-lg mb-1">{feature.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="pt-6">
                <Button asChild variant="glow" size="lg" rounded="lg" className="group w-full md:w-auto shadow-md">
                  <Link href="/contact" className="flex items-center justify-center gap-2 px-6 py-3">
                    Start Your 24-Hour Website
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mt-24 relative">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Our 24-Hour Development Process</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              How we transform your idea into a fully functional website in just one day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Central line for mobile */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-primary/50 to-purple-500/30 md:hidden"></div>

            {timeline.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
              >
                {/* Mobile timeline dot */}
                <div className="absolute left-4 top-0 h-8 w-8 rounded-full bg-gradient-to-r from-primary to-purple-500 shadow-md flex items-center justify-center -translate-x-1/2 text-white text-sm font-bold md:hidden">
                  {index + 1}
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700 md:h-full pl-12 md:pl-0 ml-8 md:ml-0">
                  <div
                    className="h-2 w-full bg-gradient-to-r border-b border-gray-100 dark:border-gray-700 hidden md:block rounded-t-xl"
                    style={{ backgroundImage: `linear-gradient(to right, ${step.color})` }}
                  ></div>

                  <div className="p-6">
                    <div className="rounded-full inline-flex items-center px-4 py-1 mb-4 text-sm font-medium bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary">
                      <Clock className="w-3.5 h-3.5 mr-1.5" />
                      {step.time}
                    </div>

                    <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{step.description}</p>

                    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                      <div className="flex items-center text-primary text-sm">
                        <div className="mr-2 h-7 w-7 flex items-center justify-center rounded-full bg-primary/10">
                          <span className="font-bold">{index + 1}</span>
                        </div>
                        <span className="font-medium">Phase {index + 1}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center">
          <div className="max-w-3xl mx-auto py-10 px-6 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-2xl shadow-sm border border-primary/10">
            <h3 className="text-2xl font-bold mb-4">Ready to launch your website in just 24 hours?</h3>
            <p className="text-muted-foreground mb-6">
              Get your business online faster than ever with our rapid development service
            </p>
            <Button asChild variant="glow" size="lg" rounded="lg" className="group">
              <Link href="/contact" className="flex items-center gap-2 px-8">
                Get Started Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
