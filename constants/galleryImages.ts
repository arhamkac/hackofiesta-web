// constants/galleryImages.ts

export type GalleryImageSize = "small" | "medium" | "large";

export interface GalleryImages {
  id: string;
  src: string;
  alt: string;
  size: GalleryImageSize;
}

export const galleryImages: GalleryImages[] = [
  // { id: "1", src: "/hackathon-students-coding-laptops.jpg", alt: "Students coding on laptops", size: "small" },
  // { id: "2", src: "/team-collaboration-whiteboard.jpg", alt: "Team collaboration on whiteboard", size: "medium" },
  // { id: "3", src: "/project-presentation-showcase.jpg", alt: "Project presentation showcase", size: "large" },
  // { id: "4", src: "/coffee-and-coding-session.jpg", alt: "Coffee and coding session", size: "small" },
  // { id: "5", src: "/hackathon-sticker-wall.jpg", alt: "Hackathon sticker wall", size: "small" },
  // { id: "6", src: "/team-wins-award-ceremony.jpg", alt: "Team wins award ceremony", size: "medium" },
  // { id: "7", src: "/networking-mentors-students.jpg", alt: "Networking with mentors", size: "small" },
  // { id: "8", src: "/final-demo-night-presentation.jpg", alt: "Final demo night presentation", size: "large" },

  // --- 20 UNSPLASH IMAGES BELOW ---

  {
    id: "9",
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    alt: "Developers collaborating during a project",
    size: "medium",
  },
  {
    id: "10",
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    alt: "Students coding together in a team",
    size: "small",
  },
  {
    id: "11",
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    alt: "Team brainstorming in a modern workspace",
    size: "medium",
  },
  {
    id: "12",
    src: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34",
    alt: "Hackathon coding night with laptops",
    size: "small",
  },
  {
    id: "13",
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    alt: "Group of people working on design thinking",
    size: "large",
  },
  {
    id: "14",
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    alt: "Team doing a presentation",
    size: "medium",
  },
  {
    id: "15",
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    alt: "Team high-five after completing project",
    size: "small",
  },
  {
    id: "16",
    src: "https://images.unsplash.com/photo-1531498860502-7c67cf02fcb9",
    alt: "Laptop programming close-up",
    size: "small",
  },
  {
    id: "17",
    src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    alt: "Developers debugging together",
    size: "small",
  },
  {
    id: "18",
    src: "https://images.unsplash.com/photo-1518972559570-7cc1309f3229",
    alt: "Workshop session at a tech event",
    size: "medium",
  },
  {
    id: "19",
    src: "https://images.unsplash.com/photo-1542744094-24638eff58bb",
    alt: "Conference room with brainstorming team",
    size: "large",
  },
  {
    id: "20",
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    alt: "Presenter speaking at a tech meet",
    size: "medium",
  },
  {
    id: "21",
    src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
    alt: "Students writing ideas on sticky notes",
    size: "small",
  },
  {
    id: "22",
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
    alt: "Group coding at a hackathon desk",
    size: "large",
  },
  {
    id: "23",
    src: "https://images.unsplash.com/photo-1513258496099-48168024aec0",
    alt: "Developers collaboration table",
    size: "medium",
  },
  {
    id: "24",
    src: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    alt: "Laptop with code on screen",
    size: "small",
  },
  {
    id: "25",
    src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    alt: "Tech innovation demo",
    size: "large",
  },
  {
    id: "26",
    src: "https://images.unsplash.com/photo-1551434678-f1e326d5ce38",
    alt: "Pair programming session",
    size: "small",
  },
  {
    id: "27",
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    alt: "Team reviewing project on laptop",
    size: "medium",
  },
  {
    id: "28",
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    alt: "Speaker at closing tech ceremony",
    size: "large",
  },
];
