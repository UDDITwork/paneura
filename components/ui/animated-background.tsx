"use client"

import React from "react"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden opacity-30">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-3xl" />

      {/* Animated gradient blobs */}
      <motion.div
        className="absolute -left-20 -top-20 h-[30rem] w-[30rem] rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute -bottom-32 right-0 h-[35rem] w-[35rem] rounded-full bg-gradient-to-tr from-blue-500/10 to-primary/20 blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute left-1/3 top-1/3 h-[25rem] w-[25rem] rounded-full bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 blur-3xl"
        animate={{
          x: [0, 60, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
    </div>
  )
}

export function AnimatedGradientText({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`bg-gradient-to-r from-primary via-purple-500 to-blue-600 bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  )
}

export function FloatingElement({
  children,
  delay = 0,
  duration = 4,
  distance = 15,
  className = "",
}: {
  children: React.ReactNode
  delay?: number
  duration?: number
  distance?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-distance / 2, distance / 2, -distance / 2],
      }}
      transition={{
        duration: duration,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "easeInOut",
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  )
}

export function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  once = true,
}: {
  children: React.ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  duration?: number
  threshold?: number
  once?: boolean
}) {
  const ref = useRef(null)

  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 50 }
      case "down":
        return { opacity: 0, y: -50 }
      case "left":
        return { opacity: 0, x: 50 }
      case "right":
        return { opacity: 0, x: -50 }
      default:
        return { opacity: 0, y: 50 }
    }
  }

  const getFinalPosition = () => {
    switch (direction) {
      case "up":
      case "down":
        return { opacity: 1, y: 0 }
      case "left":
      case "right":
        return { opacity: 1, x: 0 }
      default:
        return { opacity: 1, y: 0 }
    }
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={getInitialPosition()}
      whileInView={getFinalPosition()}
      viewport={{ once, amount: threshold }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

export function ParallaxLayer({
  children,
  speed = 0.5,
  className = "",
}: {
  children: React.ReactNode
  speed?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const scrollY = window.scrollY
      ref.current.style.transform = `translateY(${scrollY * speed}px)`
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

export function AnimatedCounter({
  value,
  duration = 2,
  className = "",
}: {
  value: number
  duration?: number
  className?: string
}) {
  const nodeRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const node = nodeRef.current
    if (!node) return

    const start = 0
    const end = value
    const range = end - start
    const increment = end > start ? 1 : -1
    const stepTime = Math.abs(Math.floor((duration * 1000) / range))

    let current = start

    const timer = setInterval(() => {
      current += increment
      node.textContent = current.toString()

      if (current === end) {
        clearInterval(timer)
      }
    }, stepTime)

    return () => {
      clearInterval(timer)
    }
  }, [value, duration])

  return (
    <span ref={nodeRef} className={className}>
      0
    </span>
  )
}

export function GlowingButton({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-primary to-purple-600 opacity-30 blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:blur-md" />
      <div className={`relative rounded-lg bg-background ${className}`}>{children}</div>
    </div>
  )
}

export function AnimatedGrid({
  children,
  staggerDelay = 0.1,
  className = "",
}: {
  children: React.ReactNode
  staggerDelay?: number
  className?: string
}) {
  const childrenArray = React.Children.toArray(children)

  return (
    <motion.div className={className}>
      {childrenArray.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * staggerDelay }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}

export function AnimatedBorder({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`group relative rounded-lg p-px ${className}`}>
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary via-purple-500 to-primary bg-[length:200%_100%] animate-gradient" />
      <div className="relative rounded-[calc(theme(borderRadius.lg)-1px)] bg-background p-4">{children}</div>
    </div>
  )
}
