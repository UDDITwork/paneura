"use client"

import { useRef, useState } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { ScrollReveal } from "@/components/ui/animated-background"

// Update the testimonials array with Indian names, dates, and real profile images
const testimonials = [
  {
    name: "Rajesh Sharma",
    date: "15 April, 2023",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    content:
      "PanEura Automations transformed our business operations completely. Their AI-powered automation solutions reduced our manual workload by 75% and improved our customer response time dramatically. The team was professional, knowledgeable, and responsive throughout the entire process.",
    rating: 5,
  },
  {
    name: "Ananya Patel",
    date: "23 June, 2023",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    content:
      "We approached PanEura to help streamline our customer onboarding process. Not only did they deliver an exceptional solution, but they also identified other areas where automation could benefit our business. Their custom CRM integration has been a game-changer for our sales team.",
    rating: 5,
  },
  {
    name: "Vikram Malhotra",
    date: "7 August, 2023",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content:
      "The e-commerce automation infrastructure PanEura built for us has allowed us to scale our online business without increasing our operational team. Their solution handles inventory management, order processing, and customer communications seamlessly. Highly recommended!",
    rating: 4,
  },
  {
    name: "Neha Gupta",
    date: "19 October, 2023",
    image: "https://randomuser.me/api/portraits/women/26.jpg",
    content:
      "PanEura's email marketing automation system has revolutionized our campaign management. The behavior-triggered flows and AI-driven analytics have significantly improved our conversion rates. Their team took the time to understand our specific needs and delivered beyond our expectations.",
    rating: 5,
  },
  {
    name: "Arjun Reddy",
    date: "5 January, 2024",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    content:
      "Implementing PanEura's HR dashboard and employee attendance system has streamlined our HR processes tremendously. The intuitive interface and comprehensive reporting features have made managing our growing team much more efficient. Their support team is always quick to respond to any questions.",
    rating: 5,
  },
]

export default function Testimonials() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })
  const [currentIndex, setCurrentIndex] = useState(0)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  // Calculate visible testimonials based on current index
  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ]

  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24">
      <motion.div className="absolute inset-0 z-0 opacity-30" style={{ y }}>
        <div className="absolute left-1/4 bottom-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-1/4 top-1/4 h-64 w-64 rounded-full bg-purple-500/5 blur-3xl" />
      </motion.div>

      <div ref={containerRef} className="container relative z-10 mx-auto px-4">
        <ScrollReveal className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">What Our Clients Say</h2>
          <p className="mx-auto max-w-3xl text-muted-foreground">
            Hear from businesses that have transformed their operations with our automation solutions
          </p>
        </ScrollReveal>

        <div className="relative mx-auto max-w-6xl">
          {/* Desktop View - 3 cards side by side */}
          <div className="hidden md:block">
            <div className="grid grid-cols-3 gap-6">
              {visibleTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.name}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.2 },
                  }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile View - Single card with navigation */}
          <div className="md:hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              <TestimonialCard testimonial={testimonials[currentIndex]} />
            </motion.div>
          </div>

          {/* Navigation Controls */}
          <div className="mt-8 flex justify-center gap-4 md:mt-12">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="h-10 w-10 rounded-full border-primary/20"
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Previous testimonial</span>
              </Button>
            </motion.div>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-4" : "bg-primary/30 w-2"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="h-10 w-10 rounded-full border-primary/20"
              >
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">Next testimonial</span>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface TestimonialCardProps {
  testimonial: {
    name: string
    date: string
    image: string
    content: string
    rating: number
  }
}

// Update the TestimonialCard component to show date instead of role/company
function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full transform transition-all duration-300 hover:shadow-lg card-rotate-hover">
      <CardContent className="flex h-full flex-col p-6">
        <div className="mb-4 flex justify-between">
          <div className="flex items-center gap-3">
            <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.2 }}>
              <Avatar className="h-12 w-12 border-2 border-primary/10">
                <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </motion.div>
            <div>
              <h3 className="font-semibold">{testimonial.name}</h3>
              <p className="text-sm text-muted-foreground">{testimonial.date}</p>
            </div>
          </div>
          <motion.div
            className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary"
            animate={{
              rotate: [0, 10, 0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          >
            <Quote className="h-4 w-4" />
          </motion.div>
        </div>

        <div className="mb-4 flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <Star className={`h-4 w-4 ${i < testimonial.rating ? "fill-primary text-primary" : "text-muted"}`} />
            </motion.div>
          ))}
        </div>

        <p className="flex-1 text-muted-foreground">{testimonial.content}</p>
      </CardContent>
    </Card>
  )
}
