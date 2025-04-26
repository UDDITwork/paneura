"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Bot, Brain, Cpu, Zap } from "lucide-react"
import { AnimatedBorder, FloatingElement, ScrollReveal } from "@/components/ui/animated-background"

export default function AiAgents() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100])

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-b from-background to-primary/5 py-16 md:py-24"
    >
      {/* Background Gradient Orbs */}
      <motion.div className="absolute inset-0 z-0" style={{ y: y1 }}>
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      </motion.div>
      <motion.div className="absolute inset-0 z-0" style={{ y: y2 }}>
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-purple-500/5 blur-3xl" />
      </motion.div>

      {/* Main Content */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2">
          
          {/* Left Textual Content */}
          <ScrollReveal className="flex flex-col justify-center" direction="left">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Automation by AI Agents</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              AI agents automate most of the boring tasks in corporate offices and reduce human intervention,
              allowing your team to focus on what matters most.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <AnimatedBorder className="hover-lift">
                <div className="rounded-lg p-4">
                  <Bot className="mb-3 h-8 w-8 text-primary" />
                  <h3 className="mb-2 font-semibold">Intelligent Automation</h3>
                  <p className="text-sm text-muted-foreground">
                    Automate repetitive tasks with AI agents that learn and adapt to your business processes.
                  </p>
                </div>
              </AnimatedBorder>

              <AnimatedBorder className="hover-lift">
                <div className="rounded-lg p-4">
                  <Brain className="mb-3 h-8 w-8 text-primary" />
                  <h3 className="mb-2 font-semibold">Cognitive Processing</h3>
                  <p className="text-sm text-muted-foreground">
                    Process unstructured data and extract meaningful insights with natural language processing.
                  </p>
                </div>
              </AnimatedBorder>

              <AnimatedBorder className="hover-lift">
                <div className="rounded-lg p-4">
                  <Cpu className="mb-3 h-8 w-8 text-primary" />
                  <h3 className="mb-2 font-semibold">Decision Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Get AI-powered recommendations to make better business decisions faster.
                  </p>
                </div>
              </AnimatedBorder>

              <AnimatedBorder className="hover-lift">
                <div className="rounded-lg p-4">
                  <Zap className="mb-3 h-8 w-8 text-primary" />
                  <h3 className="mb-2 font-semibold">Workflow Optimization</h3>
                  <p className="text-sm text-muted-foreground">
                    Streamline complex workflows with intelligent agents that coordinate tasks across teams.
                  </p>
                </div>
              </AnimatedBorder>
            </div>
          </ScrollReveal>

          {/* Right Responsive Image */}
          <ScrollReveal className="flex items-center justify-center" direction="right">
            <div className="w-full max-w-[500px] aspect-video relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://blogs.nvidia.com/wp-content/uploads/2025/01/ai-blueprint-metropolis-vss.jpg"
                alt="AI Agents Blueprint"
                fill
                className="object-cover rounded-xl"
                priority
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
