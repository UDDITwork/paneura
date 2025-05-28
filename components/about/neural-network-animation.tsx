"use client"

import { useEffect, useRef } from "react"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
}

interface Connection {
  from: Particle
  to: Particle
  distance: number
  opacity: number
}

export default function NeuralNetworkAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create particles
    const particleCount = shouldReduceMotion ? 30 : 60
    const maxDistance = 150
    const particles: Particle[] = []
    const connections: Connection[] = []

    // Generate particles
    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 2 + 1
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const vx = (Math.random() - 0.5) * (shouldReduceMotion ? 0.2 : 0.5)
      const vy = (Math.random() - 0.5) * (shouldReduceMotion ? 0.2 : 0.5)

      // Use a color palette that matches the site's theme
      const colors = ["rgba(123, 97, 255, 0.8)", "rgba(149, 76, 233, 0.8)", "rgba(92, 124, 250, 0.8)"]
      const color = colors[Math.floor(Math.random() * colors.length)]

      particles.push({ x, y, vx, vy, radius, color })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update particles
      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
      })

      // Find and draw connections
      connections.length = 0
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance
            connections.push({
              from: particles[i],
              to: particles[j],
              distance,
              opacity,
            })
          }
        }
      }

      // Draw connections
      connections.forEach((connection) => {
        ctx.beginPath()
        ctx.moveTo(connection.from.x, connection.from.y)
        ctx.lineTo(connection.to.x, connection.to.y)
        ctx.strokeStyle = `rgba(123, 97, 255, ${connection.opacity * 0.5})`
        ctx.lineWidth = 1
        ctx.stroke()
      })

      // Pulse effect on random nodes
      const pulseInterval = 2000 // ms
      if (Math.random() < 0.01 && !shouldReduceMotion) {
        const randomParticle = particles[Math.floor(Math.random() * particles.length)]
        const originalRadius = randomParticle.radius

        // Create pulse animation
        const startTime = Date.now()
        const animatePulse = () => {
          const elapsed = Date.now() - startTime
          const progress = elapsed / pulseInterval

          if (progress < 1) {
            const pulseSize = originalRadius + 10 * Math.sin(progress * Math.PI)
            randomParticle.radius = pulseSize
            requestAnimationFrame(animatePulse)
          } else {
            randomParticle.radius = originalRadius
          }
        }

        animatePulse()
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [shouldReduceMotion])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-40 dark:opacity-30"
      style={{ background: "transparent" }}
    />
  )
}
