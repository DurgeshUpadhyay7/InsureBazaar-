"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface InteractiveImageProps {
  src: string
  alt: string
  className?: string
  overlayText?: string
  overlaySubtext?: string
  hoverEffect?: "scale" | "rotate" | "brightness" | "zoom-rotate"
}

export function InteractiveImage({
  src,
  alt,
  className,
  overlayText,
  overlaySubtext,
  hoverEffect = "scale",
}: InteractiveImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  const getHoverClasses = () => {
    switch (hoverEffect) {
      case "rotate":
        return "group-hover:scale-105 group-hover:rotate-2"
      case "brightness":
        return "group-hover:scale-105 group-hover:brightness-110"
      case "zoom-rotate":
        return "group-hover:scale-110 group-hover:rotate-1"
      default:
        return "group-hover:scale-105"
    }
  }

  if (hasError) {
    return (
      <div className={cn("bg-gray-200 rounded-lg flex items-center justify-center", className)}>
        <p className="text-gray-500 text-sm">Image not available</p>
      </div>
    )
  }

  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        className={cn(
          "w-full h-auto transform transition-all duration-500",
          getHoverClasses(),
          !isLoaded && "opacity-0",
          className,
        )}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
      />

      {/* Loading skeleton */}
      {!isLoaded && !hasError && <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />}

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Overlay text */}
      {(overlayText || overlaySubtext) && (
        <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {overlayText && <p className="text-sm font-bold">{overlayText}</p>}
          {overlaySubtext && <p className="text-xs">{overlaySubtext}</p>}
        </div>
      )}

      {/* Floating animation indicator */}
      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
      </div>
    </div>
  )
}
