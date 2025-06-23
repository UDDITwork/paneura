"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import {
  ExternalLink,
  Code,
  ShoppingCart,
  Stethoscope,
  Wind,
  Brain,
  Truck,
  MessageSquare,
  Scale,
  Car,
  Wrench,
  Layers,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/ui/animated-background"

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const projects = [
    // Healthcare Projects
    {
      title: "MediCio",
      description:
        "Comprehensive healthcare management platform with patient records, appointment scheduling, and medical analytics",
      url: "https://udditwork.github.io/MediCio/",
      image:
        "https://sjc.microlink.io/IAeVOs55sgpm8E5mj3xRm5oXPHg39XQFiNAiqkOIvEIjFn3YebUfy-Eh3WfUqmkuzebxYK_5xhiYVd0uJxv28Q.jpeg",
      category: "Healthcare",
      icon: <Stethoscope className="h-5 w-5" />,
      tags: ["React", "Healthcare", "Dashboard"],
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Health Cart E-commerce",
      description:
        "Modern e-commerce platform specialized for healthcare products with advanced filtering and secure checkout",
      url: "https://health-cart-clone-react.lovable.app/",
      image:
        "https://sjc.microlink.io/RXZ2jO88-svQgXxVxq_sZQ9qfUP1lKicNl9PmgnkA5jbSkOKUhIT_iqzJPEBBxC5lM5WgRyv9QjWjIkv4hOV7Q.jpeg",
      category: "E-commerce",
      icon: <ShoppingCart className="h-5 w-5" />,
      tags: ["React", "E-commerce", "Healthcare"],
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "Health Cart Platform",
      description: "Advanced healthcare marketplace with telemedicine integration and prescription management",
      url: "https://health-cart-clone-react.lovable.app/",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      category: "Healthcare",
      icon: <Stethoscope className="h-5 w-5" />,
      tags: ["Telemedicine", "React", "Healthcare"],
      color: "from-teal-500/20 to-green-500/20",
    },

    // Automotive Projects
    {
      title: "KGK Car Solutions",
      description:
        "Complete automotive service platform with booking system, service tracking, and customer management for car maintenance and repairs",
      url: "https://kgk-car-solutions.netlify.app/",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop",
      category: "Automotive",
      icon: <Car className="h-5 w-5" />,
      tags: ["Car Service", "Booking", "Management"],
      color: "from-red-500/20 to-orange-500/20",
      contact: "+91-8860661641, kgkcarsolutions@gmail.com",
      location: "Ghaziabad, U.P.",
    },
    {
      title: "Elite Car Detailing",
      description:
        "Premium car detailing service platform with online booking, service packages, and customer portfolio showcase",
      url: "https://elite-car-detailing.netlify.app/",
      image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&h=600&fit=crop",
      category: "Automotive",
      icon: <Car className="h-5 w-5" />,
      tags: ["Car Detailing", "Premium", "Booking"],
      color: "from-purple-500/20 to-pink-500/20",
      contact: "8851115656",
    },
    {
      title: "RG Motors & Car Accessories",
      description:
        "Comprehensive automotive parts and accessories e-commerce platform with inventory management and customer support",
      url: "https://rg-motors-and-car-accessories.netlify.app/",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      category: "Automotive",
      icon: <Wrench className="h-5 w-5" />,
      tags: ["Auto Parts", "E-commerce", "Accessories"],
      color: "from-blue-500/20 to-indigo-500/20",
      contact: "085889 95678",
      location: "Kakrola, Delhi",
    },
    {
      title: "Auto Essential Mukundpur",
      description: "Local automotive essentials store with online catalog, service booking, and parts ordering system",
      url: "https://auto-essentials-mukundpur-delhi.netlify.app/",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&h=600&fit=crop",
      category: "Automotive",
      icon: <Wrench className="h-5 w-5" />,
      tags: ["Auto Parts", "Local Service", "Delhi"],
      color: "from-green-500/20 to-teal-500/20",
      contact: "9899896980",
      location: "Mukundpur, Delhi",
    },
    {
      title: "Shri Nath Automobiles",
      description:
        "Professional auto repair services with diagnostic tools, service history tracking, and customer management",
      url: "https://shri-nath-auto-repair-services.netlify.app/",
      image: "https://images.unsplash.com/photo-1632823471565-1ecdf7a5e0b5?w=800&h=600&fit=crop",
      category: "Automotive",
      icon: <Wrench className="h-5 w-5" />,
      tags: ["Auto Repair", "Diagnostics", "Service"],
      color: "from-orange-500/20 to-red-500/20",
      contact: "098108 37026",
    },
    {
      title: "Balaji Motors",
      description:
        "Full-service automotive dealership with vehicle sales, financing options, and after-sales service management",
      url: "https://balaji-motors-wheels-n-deals.lovable.app/",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop",
      category: "Automotive",
      icon: <Car className="h-5 w-5" />,
      tags: ["Car Dealership", "Sales", "Financing"],
      color: "from-yellow-500/20 to-orange-500/20",
    },
    {
      title: "Luster Mumbai",
      description:
        "B2B garments manufacturing platform with order management, production tracking, and wholesale client portal",
      url: "https://preview--cotton-comfort-mumbai-find.lovable.app/",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      category: "Manufacturing",
      icon: <Layers className="h-5 w-5" />,
      tags: ["B2B", "Garments", "Manufacturing"],
      color: "from-indigo-500/20 to-purple-500/20",
      location: "Mumbai",
    },

    // Legal Tech Projects
    {
      title: "EASEIP Vision",
      description: "Intellectual property management system with AI-powered patent analysis and portfolio tracking",
      url: "https://preview-a369b0d8--ease-ip-vision-web.lovable.app/",
      image:
        "https://img.freepik.com/free-vector/user-panel-template-infographic-dashboard_23-2148378206.jpg?semt=ais_hybrid&w=740",
      category: "Legal Tech",
      icon: <Scale className="h-5 w-5" />,
      tags: ["AI", "Legal", "Analytics"],
      color: "from-purple-500/20 to-indigo-500/20",
    },
    {
      title: "INVENTIP Legal",
      description: "Comprehensive legal document management and intellectual property tracking system",
      url: "https://dulcet-rabanadas-c1e4b1.netlify.app/",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
      category: "Legal Tech",
      icon: <Scale className="h-5 w-5" />,
      tags: ["Legal", "Documents", "IP Management"],
      color: "from-slate-500/20 to-gray-500/20",
    },

    // IoT Projects
    {
      title: "UrBON Air Cool",
      description: "Smart air conditioning control system with IoT integration and energy optimization features",
      url: "https://silly-nasturtium-829415.netlify.app/#home",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      category: "IoT",
      icon: <Wind className="h-5 w-5" />,
      tags: ["IoT", "Smart Home", "Energy"],
      color: "from-cyan-500/20 to-blue-500/20",
    },

    // Educational Projects
    {
      title: "DSA Visualizer",
      description: "Interactive data structures and algorithms visualization tool with step-by-step animations",
      url: "https://udditwork.github.io/DSA_Visualizer/",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      category: "Educational",
      icon: <Brain className="h-5 w-5" />,
      tags: ["Algorithms", "Education", "Visualization"],
      color: "from-orange-500/20 to-red-500/20",
    },

    // Delivery Projects
    {
      title: "Blinkit Clone",
      description: "Fast delivery application with real-time tracking, inventory management, and instant checkout",
      url: "https://blinkit-clone.surge.sh/",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      category: "Delivery",
      icon: <Truck className="h-5 w-5" />,
      tags: ["Delivery", "Real-time", "Mobile"],
      color: "from-yellow-500/20 to-orange-500/20",
    },

    // AI Assistant Projects
    {
      title: "AI Electronics Assistant",
      description: "Intelligent chatbot for electronics component recommendations and technical support",
      url: "https://ai-electronics-component-assistant-587290693369.us-west1.run.app",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
      category: "AI Assistant",
      icon: <MessageSquare className="h-5 w-5" />,
      tags: ["AI", "Chatbot", "Electronics"],
      color: "from-indigo-500/20 to-purple-500/20",
    },
  ]

  const categories = [
    "All",
    "Healthcare",
    "Automotive",
    "Manufacturing",
    "E-commerce",
    "Legal Tech",
    "IoT",
    "Educational",
    "Delivery",
    "AI Assistant",
  ]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-primary/5 py-24">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl opacity-70"></div>
        <div className="absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-blue-500/5 blur-2xl opacity-60"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header section */}
        <ScrollReveal className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-primary mb-6">
            <Code className="h-4 w-4" />
            <span>Our Portfolio</span>
          </div>
          <h2 className="mb-5 text-4xl font-bold md:text-5xl">Featured Projects</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Explore our diverse portfolio of innovative solutions across healthcare, automotive, e-commerce, legal tech,
            and AI-powered applications
          </p>
        </ScrollReveal>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={`transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-white shadow-lg"
                  : "hover:bg-primary/10 hover:border-primary/30"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div ref={ref} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`${project.title}-${activeCategory}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card className="overflow-hidden h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <CardContent className="p-0">
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}></div>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
                        hoveredCard === index ? "opacity-100" : "opacity-0"
                      } flex items-end`}
                    >
                      <div className="p-6 w-full">
                        <div className="flex gap-2 mb-3 flex-wrap">
                          {project.tags.map((tag, tagIndex) => (
                            <Badge
                              key={tagIndex}
                              variant="secondary"
                              className="bg-white/20 text-white border-white/30 text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Link
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full bg-white/90 backdrop-blur-sm text-gray-900 py-3 rounded-lg font-medium hover:bg-white transition-colors"
                        >
                          View Live Project <ExternalLink className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                        <span className="text-primary">{project.icon}</span>
                        <span className="text-gray-700">{project.category}</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>

                    {/* Contact and Location Info for Automotive projects */}
                    {project.category === "Automotive" && (project.contact || project.location) && (
                      <div className="mb-4 space-y-1">
                        {project.contact && (
                          <p className="text-xs text-muted-foreground">
                            <span className="font-medium">Contact:</span> {project.contact}
                          </p>
                        )}
                        {project.location && (
                          <p className="text-xs text-muted-foreground">
                            <span className="font-medium">Location:</span> {project.location}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Action Button */}
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm transition-colors"
                    >
                      Explore Project
                      <ExternalLink className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Automotive Services Highlight */}
        {activeCategory === "Automotive" && (
          <motion.div
            className="mt-16 p-8 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl border border-red-500/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
                <Car className="h-6 w-6 text-red-500" />
                Automotive Solutions Portfolio
              </h3>
              <p className="text-muted-foreground">
                Comprehensive digital solutions for the automotive industry - from car dealerships to service centers
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-white/50 rounded-lg">
                <h4 className="font-semibold text-red-600 mb-2">Service Management</h4>
                <p className="text-sm text-muted-foreground">
                  Booking systems, service tracking, and customer management
                </p>
              </div>
              <div className="p-4 bg-white/50 rounded-lg">
                <h4 className="font-semibold text-orange-600 mb-2">E-commerce Platforms</h4>
                <p className="text-sm text-muted-foreground">
                  Auto parts, accessories, and inventory management systems
                </p>
              </div>
              <div className="p-4 bg-white/50 rounded-lg">
                <h4 className="font-semibold text-yellow-600 mb-2">Digital Presence</h4>
                <p className="text-sm text-muted-foreground">
                  Professional websites with online booking and customer portals
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-2xl border border-primary/10">
            <h3 className="text-2xl font-bold mb-4">Ready to Build Your Next Project?</h3>
            <p className="text-muted-foreground mb-6">
              Let's collaborate to bring your vision to life with cutting-edge technology and innovative solutions
            </p>
            <Button asChild variant="glow" size="lg" className="group">
              <Link href="/contact" className="flex items-center gap-2">
                Start Your Project
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                >
                  <ExternalLink className="h-4 w-4" />
                </motion.span>
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
