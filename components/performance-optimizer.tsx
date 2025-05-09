"use client"

import { useEffect } from "react"

export function PerformanceOptimizer() {
  useEffect(() => {
    // Detect low-end devices or slow connections
    const connection =
      (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection

    const isSaveData = connection?.saveData
    const isSlowConnection = connection?.effectiveType === "2g" || connection?.effectiveType === "slow-2g"

    // Check if device is likely to be low-powered
    const isLowEndDevice = navigator.hardwareConcurrency <= 4

    if (isSaveData || isSlowConnection || isLowEndDevice) {
      // Apply performance optimizations for low-end devices
      document.documentElement.classList.add("low-performance-mode")

      // Disable some animations
      const style = document.createElement("style")
      style.textContent = `
        .animate-float, .animate-gradient, .animate-pulse-slow {
          animation: none !important;
        }
        .card-rotate-hover:hover {
          transform: none !important;
        }
      `
      document.head.appendChild(style)
    }

    // Preload critical resources
    const preloadLinks = [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "preload", href: "/fonts/inter.woff2", as: "font", type: "font/woff2", crossOrigin: "anonymous" },
    ]

    preloadLinks.forEach((link) => {
      const linkEl = document.createElement("link")
      Object.entries(link).forEach(([key, value]) => {
        if (value !== undefined) linkEl.setAttribute(key, value)
      })
      document.head.appendChild(linkEl)
    })
  }, [])

  return null
}
