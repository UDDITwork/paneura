"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ChevronDown, ChevronUp } from "lucide-react"
import * as Icons from "lucide-react"

interface ServiceCardProps {
  service: {
    title: string
    subtitle: string
    description: string
    icon: string
    features: string[]
  }
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  // Dynamically get the icon component
  const IconComponent = Icons[service.icon as keyof typeof Icons]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <Card className="h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <CardHeader>
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            {IconComponent && <IconComponent className="h-6 w-6" />}
          </div>
          <CardTitle className="text-xl">{service.title}</CardTitle>
          <p className="text-sm font-medium text-primary">{service.subtitle}</p>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-muted-foreground">{service.description}</p>

          <div className="mt-4">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex w-full items-center justify-between text-sm font-medium text-primary"
            >
              <span>Key Features</span>
              {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>

            {isExpanded && (
              <motion.ul
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
                className="mt-3 space-y-2"
              >
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </motion.ul>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
