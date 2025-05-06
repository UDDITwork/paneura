"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ExternalLink, ChevronRight, Code, Layers, Zap, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/ui/animated-background"

export default function FramerShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Framer website examples
  const framerExamples = [
    {
      title: "Refit",
      description: "Interior design portfolio with elegant dark theme and minimalist aesthetics",
      image:
        "https://sjc.microlink.io/slKprwwOfoiopZVf2FtXq2bPuhumJ5E6zV77UOsXtSOoFUKmjp_9eAios8zul3u8hJy2JVa-lkojGbBdXap_Bg.jpeg",
      url: "https://diverse-structure-482138.framer.app/",
      color: "from-gray-900 to-gray-800",
    },
    {
      title: "Bloom",
      description: "Meditation app with soothing design and intuitive user experience",
      image:
        "https://sjc.microlink.io/Ur_iZHaEEPCszFofmNe0N8_pBTwJzzNCfkgEKpykYIfkeLSdmqPDVT-emtGA3WGR_YUOd_o_8nOuLPYGxTEf8w.jpeg",
      url: "https://complex-approach-155692.framer.app/",
      color: "from-pink-100 to-pink-50",
    },
    {
      title: "Fintech Dashboard",
      description: "Modern financial analytics platform with interactive data visualization",
      image:
        "https://img.freepik.com/free-vector/user-panel-template-infographic-dashboard_23-2148378206.jpg?semt=ais_hybrid&w=740",
      url: "https://amicable-absolute-164388.framer.app/",
      color: "from-blue-900 to-indigo-900",
    },
    {
      title: "Ecommerce Store",
      description: "Premium shopping experience with smooth animations and transitions",
      image:
        "https://sjc.microlink.io/RXZ2jO88-svQgXxVxq_sZQ9qfUP1lKicNl9PmgnkA5jbSkOKUhIT_iqzJPEBBxC5lM5WgRyv9QjWjIkv4hOV7Q.jpeg",
      url: "https://broader-let-374863.framer.app/",
      color: "from-emerald-100 to-teal-50",
    },
    {
      title: "Creative Agency",
      description: "Portfolio showcase with immersive scrolling and interactive elements",
      image:
        "https://www.ibrandox.com/IbrandoxBackEndImage/BlogImage/development-how-to-choose-the-best-creative-agency.jpg",
      url: "https://capable-popover-070263.framer.app/",
      color: "from-purple-900 to-violet-800",
    },
  ]

  // Features of our Framer expertise
  const features = [
    {
      icon: <Layers className="h-5 w-5" />,
      title: "Stunning Visuals",
      description: "Create visually impressive websites with advanced animations and transitions",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Rapid Prototyping",
      description: "Quickly transform ideas into interactive prototypes without coding",
    },
    {
      icon: <Code className="h-5 w-5" />,
      title: "Custom Interactions",
      description: "Develop unique user experiences with custom animations and interactions",
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: "No-Code to Full-Code",
      description: "Flexible development from no-code solutions to custom React implementations",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-primary/5 py-24">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl opacity-70"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header section */}
        <ScrollReveal className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-primary mb-6">
            <Sparkles className="h-4 w-4" />
            <span>Framer Expertise</span>
          </div>
          <h2 className="mb-5 text-4xl font-bold md:text-5xl">Stunning Websites with Framer</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            We create beautiful, interactive websites using Framer's powerful design and animation capabilities. From
            concept to deployment, we deliver exceptional digital experiences.
          </p>
        </ScrollReveal>

        {/* Framer examples showcase */}
        <div ref={ref} className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {framerExamples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Card className="overflow-hidden h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${example.color} opacity-10`}></div>
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={example.image || "/placeholder.svg"}
                          alt={example.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-4 w-full">
                            <Link
                              href={example.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2 w-full bg-white/90 backdrop-blur-sm text-gray-900 py-2 rounded-md font-medium text-sm hover:bg-white transition-colors"
                            >
                              View Website <ExternalLink className="h-3.5 w-3.5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {example.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{example.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features and benefits */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Why Choose Framer for Your Website</h3>
            <p className="text-muted-foreground">
              Framer is revolutionizing web design with its powerful combination of design and development capabilities.
              Our team leverages Framer to create websites that not only look stunning but also deliver exceptional user
              experiences.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="border-primary/10 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-md"
                >
                  <CardContent className="p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary mb-3">
                      {feature.icon}
                    </div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="pt-4">
              <Button asChild variant="glow" className="group">
                <Link href="/contact" className="flex items-center gap-2">
                  Start Your Framer Project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-2xl p-8 shadow-sm border border-primary/10">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <ChevronRight className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="font-semibold mb-1">Design-to-Code Workflow</h4>
                  <p className="text-sm text-muted-foreground">
                    We bridge the gap between design and development, turning beautiful designs into functional websites
                    without compromise.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <ChevronRight className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="font-semibold mb-1">Responsive by Default</h4>
                  <p className="text-sm text-muted-foreground">
                    All our Framer websites are built to look and function perfectly on any device, from mobile to
                    desktop.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <ChevronRight className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="font-semibold mb-1">SEO Optimized</h4>
                  <p className="text-sm text-muted-foreground">
                    We ensure your Framer website ranks well in search engines with proper metadata, fast loading times,
                    and semantic markup.
                  </p>
                </div>
              </div>

              <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mt-8">
                "Framer has transformed how we approach web design, allowing us to create interactive prototypes that
                seamlessly transition into production-ready websites. Our clients love the results."
                <footer className="mt-2 text-sm font-medium text-primary">— PanEura Design Team</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
