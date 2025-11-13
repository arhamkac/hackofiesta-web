"use client";

import React from "react";
import { galleryImages, GalleryImages } from "@/constants/galleryImages";

import HackathonGallery from "./ui/parallax-scroll";

export default function Gallery() {
    return (
        <HackathonGallery
            images={galleryImages}
            title="Hackofiesta 2025"
            subtitle="will fill later"
        />
    )
}


