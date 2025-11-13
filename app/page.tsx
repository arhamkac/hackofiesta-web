"use client"
import { TeamGrid } from "@/components/team"
import TeamsSection from "./TeamSection"

import { crTeam } from "@/constants/teams/cr"
import { websiteTeam } from "@/constants/teams/website"
import { lead } from "@/constants/teams/lead"
import { outReachTeam } from "@/constants/teams/outreach"
import { logisticsTeam } from "@/constants/teams/logistics"
import { mediaTeam } from "@/constants/teams/media"
import { designTeam } from "@/constants/teams/design"
import { techTeam } from "@/constants/teams/tech"

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
      <div className="w-full min-h-screen bg-black flex flex-col gap-50 pt-25 pb-25 items-center justify-center">
    {/* <div className="w-[75vw] h-[75vh] bg-black "> */}
      <TeamGrid title="Overall Lead" images={lead} backgroundImage="backgrounds/lead-bg.png" />
      <TeamGrid title="Design" images={designTeam} backgroundImage="backgrounds/design-bg.png" />
      <TeamGrid title="Website" images={websiteTeam} backgroundImage="backgrounds/website-bg.png" />
      <TeamGrid title="Outreach" images={outReachTeam} backgroundImage="backgrounds/outreach-bg.png" />
      <TeamGrid title="CR" images={crTeam} backgroundImage="backgrounds/cr-bg.png" />
      <TeamGrid title="Logistics" images={logisticsTeam} backgroundImage="backgrounds/logistics-bg.png" />
      <TeamGrid title="Media" images={mediaTeam} backgroundImage="backgrounds/media-bg.png" />
      <TeamGrid title="Technical" images={techTeam} backgroundImage="backgrounds/tech-bg.png" />

      {/* </div> */}
     </div>
  )
}
