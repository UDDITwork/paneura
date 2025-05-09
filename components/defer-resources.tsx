"use client"

import { useEffect } from "react"

export function DeferResources() {
  useEffect(() => {
    // Function to load non-critical resources
    const loadNonCriticalResources = () => {
      // Load any non-critical CSS
      const nonCriticalCSS = document.querySelectorAll('link[data-non-critical="true"]')
      nonCriticalCSS.forEach((link) => {
        link.setAttribute("media", "all")
      })

      // Load any deferred scripts
      const deferredScripts = document.querySelectorAll('script[data-deferred="true"]')
      deferredScripts.forEach((script) => {
        const newScript = document.createElement("script")
        Array.from(script.attributes).forEach((attr) => {
          if (attr.name !== "data-deferred") {
            newScript.setAttribute(attr.name, attr.value)
          }
        })
        newScript.textContent = script.textContent
        script.parentNode?.replaceChild(newScript, script)
      })
    }

    // Check if the page has loaded
    if (document.readyState === "complete") {
      loadNonCriticalResources()
    } else {
      window.addEventListener("load", loadNonCriticalResources)
      // Fallback in case load event doesn't fire
      setTimeout(loadNonCriticalResources, 5000)

      return () => window.removeEventListener("load", loadNonCriticalResources)
    }
  }, [])

  return null
}
