"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface TechLogoProps {
  name: string
  imageUrl: string
  size?: number
}

export function TechLogo({ name, imageUrl, size = 50 }: TechLogoProps) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-3"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-white p-4 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
        <div className="relative h-full w-full">
          <Image src={imageUrl || "/placeholder.svg"} alt={`${name} logo`} fill className="object-contain p-1" />
        </div>
      </div>
      <span className="text-center text-sm font-medium">{name}</span>
    </motion.div>
  )
}
