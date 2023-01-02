import Image from "next/image"
import React from "react"

interface imageProps {
  image: any
  loading?: any
  height?: string
  className?: string
  priority?: boolean
}

const GetImage = ({
  image,
  loading = "lazy",
  height = "",
  className,
  priority = false,
}: imageProps) => {
  return (
    <div className={className}>
      <Image
        key={image.id}
        alt={image.alternativeText}
        src={process.env.NEXT_PUBLIC_URL + image.url}
        width={height != "" ? height : image.width}
        height={height != "" ? height : image.height}
        loading={loading}
        priority={priority}
      />
    </div>
  )
}

export default GetImage
