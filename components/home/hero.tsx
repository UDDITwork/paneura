"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { AnimatedGradientText, FloatingElement, ScrollReveal } from "@/components/ui/animated-background"
import { ArrowRight, Bot, Brain, Cpu, Database, Layers } from "lucide-react"

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Mouse parallax effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight

      // Calculate mouse position as percentage of window
      const x = (clientX / windowWidth - 0.5) * 2 // -1 to 1
      const y = (clientY / windowHeight - 0.5) * 2 // -1 to 1

      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 px-4 py-16 md:py-24 lg:py-32"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(circle at 30% 30%, rgba(120,119,198,0.1), transparent 60%)",
          y,
        }}
      />

      <motion.div
        className="absolute inset-y-0 right-0 z-0 w-1/3"
        style={{
          backgroundImage: "radial-gradient(circle at 70% 70%, rgba(120,119,198,0.1), transparent 60%)",
          y: useTransform(scrollYProgress, [0, 1], [0, 100]),
        }}
      />

      <div className="container relative z-10 mx-auto grid max-w-screen-xl gap-12 px-4 md:grid-cols-2 md:px-8">
        <ScrollReveal className="flex flex-col justify-center">
          <motion.h1
            className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AnimatedGradientText>{"PanEura Automations"}</AnimatedGradientText> Get Rid of Boring Tasks with Ai.
          </motion.h1>

          <motion.p
            className="mb-8 text-lg text-muted-foreground md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We help small businesses scale big, generate revenue, provide online recognition and identity through
            intelligent automation solutions.
          </motion.p>

          <motion.div
            className="flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              asChild
              variant="glow"
              size="xl"
              rounded="full"
              className="font-medium relative overflow-hidden group"
            >
              <Link href="/contact" className="flex items-center">
                Get Started
                <motion.span
                  className="ml-2 inline-block"
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
                <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </Button>

            <Button asChild variant="glow-outline" size="xl" rounded="full" className="hover-lift">
              <Link href="/services">Explore Services</Link>
            </Button>
          </motion.div>
        </ScrollReveal>

        <div className="flex items-center justify-center">
          <div className="relative h-[400px] w-full max-w-[500px]">
            {/* Animated background glow */}
            <motion.div
              className="absolute left-0 top-0 h-full w-full rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              style={{
                x: mousePosition.x * -20,
                y: mousePosition.y * -20,
              }}
            />

            {/* Main floating card */}
            <FloatingElement className="absolute inset-0 flex items-center justify-center" duration={6} distance={20}>
              <motion.div
                className="h-[350px] w-[350px] rounded-2xl bg-background p-2 shadow-xl card-rotate-hover"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="flex h-full w-full items-center justify-center rounded-xl border bg-background/50 backdrop-blur">
                  <div className="space-y-6 p-6 text-center">
                    <FloatingElement
                      className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10"
                      duration={4}
                      distance={10}
                      delay={0.5}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                        <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                        <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                        <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                        <line x1="12" y1="22.08" x2="12" y2="12"></line>
                      </svg>
                    </FloatingElement>
                    <h3 className="text-xl font-bold">Intelligent Automation</h3>
                    <p className="text-sm text-muted-foreground">
                      Streamline operations, reduce costs, and drive growth with our AI-powered solutions
                    </p>

                    {/* Floating tech icons */}
                    <div className="relative h-20">
                      <FloatingElement className="absolute left-4 top-0" duration={5} distance={15} delay={0}>
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 p-2 text-primary">
                          <Bot className="h-5 w-5" />
                        </div>
                      </FloatingElement>

                      <FloatingElement
                        className="absolute left-1/2 top-2 -translate-x-1/2"
                        duration={6}
                        distance={12}
                        delay={0.5}
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/10 p-2 text-purple-500">
                          <Brain className="h-5 w-5" />
                        </div>
                      </FloatingElement>

                      <FloatingElement className="absolute right-4 top-0" duration={5.5} distance={18} delay={1}>
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 p-2 text-blue-500">
                          <Cpu className="h-5 w-5" />
                        </div>
                      </FloatingElement>

                      <FloatingElement className="absolute left-12 top-10" duration={4.5} distance={10} delay={1.5}>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/10 p-2 text-green-500">
                          <Database className="h-4 w-4" />
                        </div>
                      </FloatingElement>

                      <FloatingElement className="absolute right-12 top-10" duration={5} distance={12} delay={2}>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/10 p-2 text-amber-500">
                          <Layers className="h-4 w-4" />
                        </div>
                      </FloatingElement>
                    </div>
                  </div>
                </div>
              </motion.div>
            </FloatingElement>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        style={{ opacity }}
      >
        <div className="flex flex-col items-center">
          <div className="h-10 w-6 rounded-full border-2 border-muted-foreground/30 p-1">
            <motion.div
              className="h-2 w-2 rounded-full bg-primary"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
          <span className="mt-2 text-xs text-muted-foreground">Scroll</span>
        </div>
      </motion.div>
    </div>
  )
}
