"use client"

import { useScroll, useTransform, motion } from "motion/react"
import { useRef } from "react"
import { cn } from "@/lib/utils"

/** Interface for gallery image items */
interface GalleryImage {
  src: string
  alt: string
  id: string
  size?: "small" | "medium" | "large"
}

interface HackathonGalleryProps {
  images: GalleryImage[]
  title?: string
  subtitle?: string
  className?: string
}

/**
 * Individual image item component with alternating parallax direction.
 * Hover: only zoom (no color change)
 */
const GalleryImageItem = ({
  image,
  index,
  containerScroll, // pass the parent scrollYProgress MotionValue
}: {
  image: GalleryImage
  index: number
  containerScroll: any
}) => {
  const sizeClasses = {
    small: "col-span-1 aspect-square",
    medium: "col-span-1 lg:col-span-2 aspect-video",
    large: "col-span-1 lg:col-span-2 lg:row-span-2 aspect-square",
  }

  const selectedSize = image.size || "small"

  // Alternate direction per index: even => up→down, odd => down→up
  // when scrollYProgress goes 0 -> 1 the y value animates between the two numbers
  const start = index % 2 === 0 ? -30 : 30
  const end = index % 2 === 0 ? 30 : -30
  const parallaxY = useTransform(containerScroll, [0, 1], [start, end])

  return (
    <motion.div
      style={{ y: parallaxY }}
      className={cn(
        "relative overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 w-full h-full group bg-slate-800",
        sizeClasses[selectedSize],
      )}
    >
      <motion.img
        src={image.src || "/placeholder.svg?height=300&width=300&query=hackathon+moment"}
        alt={image.alt}
        className="w-full h-full object-cover will-change-transform"
        loading="lazy"
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        draggable={false}
      />

      {/* subtle focus outline on keyboard focus (no color overlays on hover) */}
      <span className="sr-only">{image.alt}</span>
    </motion.div>
  )
}

/**
 * HackathonGallery Component - Masonry Layout with alternating parallax rows
 */
export const HackathonGallery = ({
  images,
  title = "Gallery",
  subtitle = "Hackathon Moments",
  className,
}: HackathonGalleryProps) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    container: containerRef,
    offset: ["start start", "end start"],
  })

  // small global translate so the whole grid also moves a bit (optional)
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -24])

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 z-20 text-center pt-12 pointer-events-none">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-3 drop-shadow-lg text-balance">{title}</h1>
        <p className="text-lg md:text-xl text-slate-300 drop-shadow-md">{subtitle}</p>
      </div>

      <div
        ref={containerRef}
        className={cn(
          "relative w-full h-full overflow-y-scroll overflow-x-hidden scroll-smooth",
          "[&::-webkit-scrollbar]:w-2",
          "[&::-webkit-scrollbar-track]:bg-slate-800",
          "[&::-webkit-scrollbar-thumb]:bg-slate-500",
          "[&::-webkit-scrollbar-thumb]:rounded-full",
          "[&::-webkit-scrollbar-thumb:hover]:bg-slate-400",
          className,
        )}
      >
        <motion.div
          style={{ y: translateY }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-40 pb-20 px-4 md:px-8 max-w-7xl mx-auto auto-rows-max"
        >
          {images.map((image, index) => (
            <GalleryImageItem key={image.id} image={image} index={index} containerScroll={scrollYProgress} />
          ))}
        </motion.div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-950 to-transparent pointer-events-none z-10" />
    </div>
  )
}

export default HackathonGallery
