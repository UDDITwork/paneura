import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { PerformanceOptimizer } from "@/components/performance-optimizer"
import { DeferResources } from "@/components/defer-resources"

const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Add this for better font loading performance
})

export const metadata = {
  title: "PanEura Automations | Intelligent Digital Infrastructure",
  description:
    "We help small businesses scale big, generate revenue, and provide online recognition through intelligent automation solutions.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <PerformanceOptimizer />
          <DeferResources />
          <AnimatedBackground />
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
