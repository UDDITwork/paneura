"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { WebsiteEmbed } from "@/components/ui/website-embed"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Code, Heart, ShoppingCart, Users } from "lucide-react"

const healthcareProjects = [
  {
    id: "medicio",
    title: "MediCio",
    category: "Healthcare Management",
    description:
      "Comprehensive healthcare management platform with patient records, appointment scheduling, and medical analytics",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=center",
    demoUrl: "https://medicio-healthcare-demo.netlify.app",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    features: ["Patient Management", "Appointment Scheduling", "Medical Records", "Analytics Dashboard"],
    icon: <Heart className="h-5 w-5" />,
  },
  {
    id: "healthcart-ecommerce",
    title: "Health Cart E-commerce",
    category: "E-commerce Platform",
    description:
      "Modern e-commerce platform specialized for healthcare products with advanced filtering and secure checkout",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center",
    demoUrl: "https://healthcart-ecommerce-demo.netlify.app",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    features: ["Product Catalog", "Secure Payments", "Order Tracking", "Inventory Management"],
    icon: <ShoppingCart className="h-5 w-5" />,
  },
  {
    id: "healthcart-platform",
    title: "Health Cart Platform",
    category: "Healthcare Marketplace",
    description: "Advanced healthcare marketplace with telemedicine integration and prescription management",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop&crop=center",
    demoUrl: "https://healthcart-platform-demo.netlify.app",
    technologies: ["React", "WebRTC", "Firebase", "Express.js"],
    features: ["Telemedicine", "Prescription Management", "Doctor Booking", "Health Records"],
    icon: <Users className="h-5 w-5" />,
  },
]

export function HealthcareShowcase() {
  const [selectedProject, setSelectedProject] = useState(healthcareProjects[0])
  const [showEmbed, setShowEmbed] = useState(false)

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8">
      <div className="text-center mb-8">
        <Badge variant="secondary" className="mb-4">
          <Heart className="h-4 w-4 mr-2" />
          Healthcare Solutions
        </Badge>
        <h3 className="text-2xl font-bold mb-2">Healthcare Technology Portfolio</h3>
        <p className="text-muted-foreground">Innovative digital solutions transforming healthcare delivery</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Project Selection */}
        <div className="space-y-4">
          {healthcareProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`p-4 rounded-xl cursor-pointer transition-all ${
                selectedProject.id === project.id
                  ? "bg-white dark:bg-gray-800 shadow-md border-2 border-primary"
                  : "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
              }`}
              onClick={() => setSelectedProject(project)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`p-2 rounded-lg ${
                    selectedProject.id === project.id ? "bg-primary text-white" : "bg-gray-100 dark:bg-gray-700"
                  }`}
                >
                  {project.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm">{project.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{project.category}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.technologies.slice(0, 2).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs px-2 py-0">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Details */}
        <div className="lg:col-span-2">
          <motion.div
            key={selectedProject.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">{selectedProject.title}</h3>
                <p className="text-sm opacity-90">{selectedProject.category}</p>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6">
              <p className="text-muted-foreground mb-4">{selectedProject.description}</p>

              {/* Features */}
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Key Features</h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedProject.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <Button onClick={() => setShowEmbed(!showEmbed)} variant="default" className="flex-1">
                  <Code className="h-4 w-4 mr-2" />
                  {showEmbed ? "Hide Preview" : "Live Preview"}
                </Button>
                <Button variant="outline" asChild>
                  <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Site
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Website Embed */}
          {showEmbed && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6"
            >
              <WebsiteEmbed url={selectedProject.demoUrl} title={selectedProject.title} />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
