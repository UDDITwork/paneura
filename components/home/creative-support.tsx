"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Book, Palette, PenTool, FileImage, Layout, Layers, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/ui/animated-background"
import Link from "next/link"

export default function CreativeSupport() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-primary/5 py-16 md:py-24">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.05),transparent_50%)]"></div>

      <div className="container relative z-10 mx-auto px-4">
        <ScrollReveal className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Legacy Creative Support</h2>
          <p className="mx-auto max-w-3xl text-muted-foreground">
            Elevate your content with our professional creative services
          </p>
        </ScrollReveal>

        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Left side: Service description */}
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Creative Intelligence Suite
              </div>

              <h3 className="text-2xl font-bold">Diagrammatic Book Design: Turn Knowledge into Visual Masterpieces</h3>

              <p className="text-muted-foreground">
                Tired of dull blocks of text in your books, guides, or educational content? Our Visual Book Design
                Service transforms your raw knowledge into visually stunning diagrams, flowcharts, and graphic
                storytelling layouts that readers actually enjoy.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <Card className="border-primary/10 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-base">
                      <Layout className="mr-2 h-5 w-5 text-primary" />
                      Intelligent Diagrams
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Flowcharts, Mind Maps, Infographics</p>
                  </CardContent>
                </Card>

                <Card className="border-primary/10 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-base">
                      <Book className="mr-2 h-5 w-5 text-primary" />
                      Thematic Visual Layouts
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">For Print + Digital Publishing</p>
                  </CardContent>
                </Card>

                <Card className="border-primary/10 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-base">
                      <Layers className="mr-2 h-5 w-5 text-primary" />
                      Interactive eBook Visuals
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">EPUB/PDF with clickable layers</p>
                  </CardContent>
                </Card>

                <Card className="border-primary/10 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-base">
                      <FileImage className="mr-2 h-5 w-5 text-primary" />
                      Cover & Chapter Illustrations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Fully Branded & Customized</p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-background/50 p-5 rounded-xl border border-primary/10 shadow-sm">
                <h4 className="mb-3 font-semibold text-lg flex items-center">
                  <span className="inline-block w-1 h-6 bg-primary mr-2 rounded"></span>
                  Ideal for:
                </h4>
                <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                  <li className="flex items-center">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 mr-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    </span>
                    <span className="font-medium">Authors</span>
                  </li>
                  <li className="flex items-center">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 mr-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    </span>
                    <span className="font-medium">Coaches & Educators</span>
                  </li>
                  <li className="flex items-center">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 mr-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    </span>
                    <span className="font-medium">Startups publishing content</span>
                  </li>
                  <li className="flex items-center">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 mr-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    </span>
                    <span className="font-medium">Legal/Patent Documentation Firms</span>
                  </li>
                  <li className="flex items-center">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 mr-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    </span>
                    <span className="font-medium">Technical Book Writers</span>
                  </li>
                </ul>
              </div>

              <div className="relative p-6 border-l-4 border-primary bg-gradient-to-r from-primary/10 to-transparent rounded-r-lg shadow-sm">
                <p className="font-medium text-primary text-lg">
                  Add this to your content production stack and make your book not just readable — but unforgettable.
                </p>
                <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 -z-10 rounded-bl-3xl"></div>
              </div>

              <Button 
                asChild 
                variant="glow" 
                size="lg" 
                rounded="lg" 
                className="mt-4 relative overflow-hidden group transition-all duration-300 shadow-lg hover:shadow-primary/20 bg-gradient-to-r from-primary to-primary/90"
              >
                <Link href="/contact" className="flex items-center gap-2 font-semibold">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span className="absolute -z-10 inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Link>
              </Button>
            </div>
          </ScrollReveal>

          {/* Right side: Creative collage */}
          <ScrollReveal direction="right">
            <div ref={ref} className="relative h-[600px] perspective-container">
              {/* Main background gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-900/30 via-primary/20 to-blue-900/30 blur-sm"></div>

              {/* Image 1: Modern design poster */}
              <motion.div
                className="absolute left-[10%] top-[5%] w-[45%] rounded-lg shadow-2xl overflow-hidden z-20 origin-center"
                initial={{ opacity: 0, rotateY: -15, y: 50 }}
                animate={isInView ? { opacity: 1, rotateY: 0, y: 0 } : { opacity: 0, rotateY: -15, y: 50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.05, rotateY: 5, z: 30 }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dex8Bj7jHipBntiOIR2uhZwlghuRoJ.png"
                  alt="Modern graphic design poster"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              {/* Image 2: Business card design */}
              <motion.div
                className="absolute right-[15%] top-[15%] w-[40%] rounded-lg shadow-2xl overflow-hidden z-10"
                initial={{ opacity: 0, rotateY: 15, y: -30 }}
                animate={isInView ? { opacity: 1, rotateY: 0, y: 0 } : { opacity: 0, rotateY: 15, y: -30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.05, rotateY: -5, z: 20 }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-D8VUkwg1MyenlhpEYyhhHZk2eE4JBV.png"
                  alt="Business card design"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              {/* Image 3: Book cover design */}
              <motion.div
                className="absolute left-[20%] bottom-[10%] w-[35%] rounded-lg shadow-2xl overflow-hidden z-30"
                initial={{ opacity: 0, rotateY: -10, y: 30 }}
                animate={isInView ? { opacity: 1, rotateY: 0, y: 0 } : { opacity: 0, rotateY: -10, y: 30 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05, rotateY: 5, z: 40 }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KtPt4PmjY0Yl7As1YSFQQwHMyvx1oz.png"
                  alt="Book cover design interface"
                  width={350}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              {/* Image 4: Designer workspace */}
              <motion.div
                className="absolute right-[10%] bottom-[15%] w-[40%] rounded-lg shadow-2xl overflow-hidden z-20"
                initial={{ opacity: 0, rotateY: 10, y: 40 }}
                animate={isInView ? { opacity: 1, rotateY: 0, y: 0 } : { opacity: 0, rotateY: 10, y: 40 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ scale: 1.05, rotateY: -5, z: 30 }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-M0Qiv3ZhTrEf5fjtnubafkSH3oCnkU.png"
                  alt="Designer workspace with Adobe tools"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="absolute left-[5%] top-[40%] w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/30 to-primary/30 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />

              <motion.div
                className="absolute right-[5%] top-[30%] w-20 h-20 rounded-full bg-gradient-to-r from-blue-500/30 to-cyan-500/30 blur-xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: 1,
                }}
              />

              {/* Floating design elements */}
              <motion.div
                className="absolute left-[45%] top-[25%] text-primary opacity-30"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <PenTool size={40} />
              </motion.div>

              <motion.div
                className="absolute right-[30%] bottom-[30%] text-purple-500 opacity-30"
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: 0.5,
                }}
              >
                <Palette size={36} />
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
