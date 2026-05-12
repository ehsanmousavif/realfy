"use client";
import {
  CarouselContent,
  CarouselItem,
  Carousel,
} from "@/components/ui/manual/carousel";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/manual/aspect-ratio";

const images = [
  "/images/landing/short-1.jpg",
  "/images/landing/short-2.png",
  "/images/landing/short-3.jpg",
  "/images/landing/pic-4.jpg",
  "/images/landing/short-4.jpg",
];

export default function Carousell() {
  const displayImages = [...images, ...images, ...images];

  return (
    <div className="w-full relative">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
        }}
        className="w-full"
      >
        <CarouselContent className="flex -ml-2 md:-ml-4">
          {displayImages.map((src, index) => (
            <CarouselItem
              key={index}
              className="min-w-0 pl-2 md:pl-4 flex-[0_0_40%] md:flex-[0_0_20%]"
            >
              <div className="relative overflow-hidden rounded-xl border bg-muted ">
                <AspectRatio ratio={9 / 16}>
                  <Image
                    src={src}
                    alt={`image-${index}`}
                    fill
                    className="object-cover"
                  />
                </AspectRatio>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="from-black pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
        <div className="from-black pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
      </Carousel>
    </div>
  );
}
