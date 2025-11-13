import Image from "next/image"

export interface GridImage {
  id: string
  src: string
  alt: string
  label?: string
}

interface ImageGridProps {
  title: string
  images: GridImage[]
  backgroundImage?: string
}

export function TeamGrid({ title, images, backgroundImage }: ImageGridProps) {
  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-12"
      style={{
        backgroundImage: backgroundImage ? `url('${backgroundImage}')` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay for better text contrast */}
      {backgroundImage && <div className="absolute inset-0 bg-black/40" />}

      {/* Content wrapper */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center mb-12 md:mb-16">{title}</h1>

        {/* Images Grid */}
        <div className="w-full max-w-6xl">
          <div
            className="grid gap-4 sm:gap-6 md:gap-8"
            style={{
              gridTemplateColumns: `repeat(auto-fit, minmax(250px, 1fr))`,
            }}
          >
            {images.map((image) => (
              <div key={image.id} className="flex flex-col items-center gap-3 sm:gap-4">
                {/* Image Container */}
                <div className="w-full aspect-square rounded-2xl overflow-hidden bg-gray-400 shadow-lg hover:shadow-xl transition-shadow">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                    priority={false}
                  />
                </div>

                {/* Label */}
                {image.label && (
                  <p className="text-lg sm:text-xl md:text-2xl font-medium text-white text-center">{image.label}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
