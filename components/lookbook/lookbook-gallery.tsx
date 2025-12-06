"use client"

import Image from "next/image"

interface LookbookGalleryProps {
  collection: string
}

const images = [
  {
    id: 1,
    src: "/images/whatsapp-20image-202025-12-06-20at-201.jpeg",
    alt: "Model seated on pavement wearing BANN cap and VAULT&VICE raglan tee",
  },
  {
    id: 2,
    src: "/images/whatsapp-20image-202025-12-06-20at-201.jpeg",
    alt: "Close-up of VAULT&VICE raglan tee with camera necklace",
  },
  {
    id: 3,
    src: "/images/whatsapp-20image-202025-12-06-20at-201.jpeg",
    alt: "Two models behind chain-link fence wearing VAULT&VICE tees",
  },
  {
    id: 4,
    src: "/images/whatsapp-20image-202025-12-06-20at-201.jpeg",
    alt: "Group wearing traditional knit caps and VAULT&VICE raglan tees",
  },
  {
    id: 5,
    src: "/images/whatsapp-20image-202025-12-06-20at-201.jpeg",
    alt: "Model in VAULT&VICE black and white raglan with cap",
  },
  {
    id: 6,
    src: "/images/whatsapp-20image-202025-12-06-20at-201.jpeg",
    alt: "Two models wearing VAULT&VICE tees and BANN caps against sky",
  },
  {
    id: 7,
    src: "/images/whatsapp-20image-202025-12-06-20at-201.jpeg",
    alt: "Two models in traditional knit caps wearing VAULT&VICE raglan tees",
  },
]

export function LookbookGallery({ collection }: LookbookGalleryProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image) => (
        <div
          key={image.id}
          className="relative aspect-[3/4] bg-card border border-border overflow-hidden group cursor-pointer"
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300" />
        </div>
      ))}
    </div>
  )
}
