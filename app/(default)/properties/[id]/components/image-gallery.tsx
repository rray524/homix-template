"use client";
import React, { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const imageSizes = [16, 32, 48, 64, 96, 128, 256, 384];
  const deviceSizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];

  function nextImageUrl(src: string, size: number) {
    return `/_next/image?url=${encodeURIComponent(src)}&w=${size}&q=75`;
  }

  const slides = images.map((image) => {
    const src = `${process.env.NEXT_PUBLIC_BACKEND_URL}/images/${image}`;
    const width = 800;
    const height = 600;

    return {
      width,
      height,
      src: nextImageUrl(src, width),
      srcSet: imageSizes
        .concat(deviceSizes)
        .filter((size) => size <= width)
        .map((size) => ({
          src: nextImageUrl(src, size),
          width: size,
          height: Math.round((height / width) * size),
        })),
    };
  });

  const handleOpenLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div>
      <div className="flex flex-col xl:flex-row justify-center items-center gap-4 mb-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative h-[300px] lg:h-[500px] w-full cursor-pointer"
            onClick={() => handleOpenLightbox(index)}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/images/${image}`}
              alt={`Property image ${index + 1}`}
              className="rounded-lg !h-[300px] lg:!h-[500px]"
              layout="fill"
              placeholder="blur"
              blurDataURL={`${process.env.NEXT_PUBLIC_BACKEND_URL}/images/${image}?w=10&h=10&fit=blur&blur=10`}
            />
          </div>
        ))}
      </div>
      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={slides}
        />
      )}
    </div>
  );
};

export default ImageGallery;
