"use client";

import Image from "next/image";


import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/manual/carousel";

import { AspectRatio } from "@/components/ui/manual/aspect-ratio";
import { Bookmark, Share } from "@solar-icons/react-perf/category/style/Bold";

const images = [
  "/images/landing/short-1.jpg",
  "/images/landing/short-2.png",
  "/images/landing/short-3.jpg",
  "/images/landing/pic-4.jpg",
  "/images/landing/short-4.jpg",
];
export default function CarouselSection() {
  const items = [...images, ...images, ...images];

  return (
    <section className="relative w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {items.map((src, index) => (
            <CarouselItem
              key={index}
              className="pl-4 basis-[40%] md:basis-[20%]"
            >
              <div className="group relative overflow-hidden rounded-2xl">
                <AspectRatio ratio={9 / 16}>
                  <Image
                    src={src}
                    alt={`image-${index}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </AspectRatio>
                <div className="absolute bottom-0 right-0 flex items-center justify-center gap-3 bg-linear-to-t from-black/80 via-black/30 to-transparent p-4 opacity-0 transition-all duration-300 group-hover:opacity-100 ">
                  <button className="flex size-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md transition hover:bg-white/20">
                    <Bookmark className="size-5 text-white" />
                  </button>

                  <button className="flex size-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md transition hover:bg-white/20">
                    <Share className="size-5 text-white" />
                  </button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l from-black to-transparent" />
      </Carousel>
    </section>
  );
}
