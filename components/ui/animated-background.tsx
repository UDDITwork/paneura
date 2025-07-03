"use client"

import React, { useRef, type ReactNode } from "react"
import { motion, useInView } from "framer-motion"

/* ------------------------------------------------------------------ */
/*  Animated background “blobs” (used across Hero / Home)             */
/* ------------------------------------------------------------------ */
export function AnimatedBackground() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden opacity-30">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-3xl" />

      {!isMobile ? (
        <>
          <motion.div
            className="absolute -left-20 -top-20 h-[30rem] w-[30rem] rounded-full
                       bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-3xl" // Adjusted colors
            animate={{ x: [0, 30, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          />

          <motion.div
            className="absolute -bottom-32 right-0 h-[35rem] w-[35rem] rounded-full
                       bg-gradient-to-tr from-blue-600/10 to-blue-400/20 blur-3xl" // Adjusted colors
            animate={{ x: [0, -40, 0], y: [0, 30, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          />

          <motion.div
            className="absolute left-1/3 top-1/3 h-[25rem] w-[25rem] rounded-full
                       bg-gradient-to-r from-blue-400/10 to-blue-700/10 blur-3xl" // Adjusted colors
            animate={{ x: [0, 60, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          />
        </>
      ) : (
        <div
          className="absolute inset-0 bg-gradient-to-br
                        from-blue-500/5 via-blue-600/5 to-blue-700/5" // Adjusted colors for mobile
        />
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Text / element utilities                                           */
/* ------------------------------------------------------------------ */
export function AnimatedGradientText({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={`bg-gradient-to-r from-primary via-blue-500 to-blue-600
                  bg-clip-text text-transparent ${className}`}
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
  children: ReactNode
  delay?: number
  duration?: number
  distance?: number
  className?: string
}) {
  const shouldAnimate =
    typeof document !== "undefined" && !document.documentElement.classList.contains("low-performance-mode")

  return (
    <motion.div
      className={className}
      animate={shouldAnimate ? { y: [-distance / 2, distance / 2, -distance / 2] } : {}}
      transition={
        shouldAnimate
          ? {
              duration,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "easeInOut",
              delay,
            }
          : {}
      }
    >
      {children}
    </motion.div>
  )
}

export function AnimatedGrid({
  children,
  staggerDelay = 0.1,
  className = "",
}: {
  children: ReactNode
  staggerDelay?: number
  className?: string
}) {
  const nodes = React.Children.toArray(children)

  return (
    <motion.div className={className}>
      {nodes.map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * staggerDelay }}
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
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`group relative rounded-lg p-px ${className}`}>
      <div
        className="absolute inset-0 rounded-lg bg-gradient-to-r
                      from-primary via-blue-500 to-primary
                      bg-[length:200%_100%] animate-gradient" // Adjusted colors
      />
      <div
        className="relative rounded-[calc(theme(borderRadius.lg)-1px)]
                      bg-background p-4"
      >
        {children}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  ScrollReveal helper (used by /automations)                        */
/* ------------------------------------------------------------------ */
type ScrollRevealProps = {
  children: ReactNode
  direction?: "left" | "right" | "up" | "down"
  className?: string
}

export function ScrollReveal({ children, direction = "up", className = "" }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const axis = direction === "left" || direction === "right" ? "x" : "y"
  const distance = 24

  const hidden = {
    opacity: 0,
    [axis]: direction === "left" || direction === "up" ? distance : -distance,
  }
  const visible = { opacity: 1, [axis]: 0 }

  return (
    <motion.div
      ref={ref}
      initial={hidden}
      animate={isInView ? visible : hidden}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
