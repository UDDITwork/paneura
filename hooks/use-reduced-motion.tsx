"use client"

import { useEffect, useState } from "react"

export function useReducedMotion() {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false)

  useEffect(() => {
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setShouldReduceMotion(mediaQuery.matches)

    // Check for low-end device
    const isLowEndDevice = navigator.hardwareConcurrency <= 4
    if (isLowEndDevice) {
      setShouldReduceMotion(true)
    }

    // Check for slow connection
    const connection = (navigator as any).connection
    if (connection) {
      const isSlowConnection = connection.effectiveType === "2g" || connection.effectiveType === "slow-2g"
      if (isSlowConnection) {
        setShouldReduceMotion(true)
      }

      const updateConnectionStatus = () => {
        const isSlowNow = connection.effectiveType === "2g" || connection.effectiveType === "slow-2g"
        setShouldReduceMotion(isSlowNow || mediaQuery.matches || isLowEndDevice)
      }

      connection.addEventListener("change", updateConnectionStatus)
      return () => connection.removeEventListener("change", updateConnectionStatus)
    }

    // Listen for changes in the media query
    const handleChange = (e: MediaQueryListEvent) => {
      setShouldReduceMotion(e.matches)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  return shouldReduceMotion
}
