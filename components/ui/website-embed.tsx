"use client"

import { useState } from "react"
import { ExternalLink, Monitor, Smartphone, Tablet } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WebsiteEmbedProps {
  url: string
  title: string
  className?: string
}

export function WebsiteEmbed({ url, title, className = "" }: WebsiteEmbedProps) {
  const [viewMode, setViewMode] = useState<"desktop" | "tablet" | "mobile">("desktop")
  const [isLoading, setIsLoading] = useState(true)

  const getFrameClass = () => {
    switch (viewMode) {
      case "mobile":
        return "w-80 h-96 mx-auto"
      case "tablet":
        return "w-96 h-80 mx-auto"
      default:
        return "w-full h-96"
    }
  }

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg border shadow-sm ${className}`}>
      {/* Controls */}
      <div className="flex items-center justify-between p-3 border-b bg-gray-50 dark:bg-gray-700 rounded-t-lg">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-300 ml-2">{title}</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex bg-white dark:bg-gray-600 rounded-md p-1">
            <Button
              variant={viewMode === "desktop" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("desktop")}
              className="h-7 w-7 p-0"
            >
              <Monitor className="h-3 w-3" />
            </Button>
            <Button
              variant={viewMode === "tablet" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("tablet")}
              className="h-7 w-7 p-0"
            >
              <Tablet className="h-3 w-3" />
            </Button>
            <Button
              variant={viewMode === "mobile" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("mobile")}
              className="h-7 w-7 p-0"
            >
              <Smartphone className="h-3 w-3" />
            </Button>
          </div>

          <Button variant="ghost" size="sm" asChild className="h-7 w-7 p-0">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-3 w-3" />
            </a>
          </Button>
        </div>
      </div>

      {/* Website Preview */}
      <div className="p-4 bg-gray-100 dark:bg-gray-900">
        <div className="relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          )}
          <iframe
            src={url}
            className={`border-0 rounded transition-all duration-300 ${getFrameClass()}`}
            title={title}
            loading="lazy"
            onLoad={() => setIsLoading(false)}
            sandbox="allow-scripts allow-same-origin allow-popups"
          />
        </div>
      </div>
    </div>
  )
}
