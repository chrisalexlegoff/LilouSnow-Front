import Image from "next/image";
import React from "react";

interface imageProps {
  image: any;
  loading?: any;
  height?: string;
  width?: string;
  className?: string;
  priority?: boolean;
  fill?: boolean;
}

const GetImage = ({
  image,
  loading = "lazy",
  height = "",
  width = "",
  className,
  priority = false,
  fill = false,
}: imageProps) => {
  return !fill ? (
    <div className={className}>
      <Image
        key={image.id}
        alt={image.alternativeText}
        src={process.env.NEXT_PUBLIC_URL + image.url}
        width={!fill && (width != "" ? width : image.width)}
        height={!fill && (height != "" ? height : image.height)}
        loading={loading}
        priority={priority}
      />
    </div>
  ) : (
    <div className={className}>
      <Image
        key={image.id}
        alt={image.alternativeText}
        src={process.env.NEXT_PUBLIC_URL + image.url}
        fill
        loading={loading}
        priority={priority}
      />
    </div>
  );
};

export default GetImage;
