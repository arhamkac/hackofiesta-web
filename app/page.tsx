"use client"

import { TeamGrid } from "@/components/team"

export default function Home() {
  const imageData = [
    {
      id: "1",
      src: "/portfolio-image-1.jpg",
      alt: "Portfolio image 1",
      label: "Prashant",
    },
    {
      id: "2",
      src: "/portfolio-image-2.jpg",
      alt: "Portfolio image 2",
      label: "Siddharth",
    },
    {
      id: "3",
      src: "/portfolio-image-1.jpg",
      alt: "Portfolio image 1",
      label: "Prashant",
    },
  ]

  return (
    // <div className="w-[1000px]">
      <TeamGrid title="Website" images={imageData} backgroundImage="backgrounds/tech-bg.png" />
    // </div>
  )
}
