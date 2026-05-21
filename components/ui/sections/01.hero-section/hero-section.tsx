"use client";

import { Magnifier } from "@solar-icons/react-perf/LineDuotone";
import OrbitImages from "../component/react-bits/orbit-images";
import { Button } from "../component/shadcn/button";
import Link from "next/link";

export function HeroSection() {
  const images = [
    { src: "/images/landing/short-1.webp", size: 170 },
    { src: "/images/landing/pic-5.webp", size: 200 },
    { src: "/images/landing/pic-6.webp", size: 100 },
    { src: "/images/landing/pic-3.webp", size: 300 },
    { src: "/images/landing/pic-1.jpg", size: 170 },
    { src: "/images/landing/pic-2.webp", size: 100 },
  ];
  const imagesMob = [
    { src: "/images/landing/short-1.webp", size: 350 },
    { src: "/images/landing/pic-2.webp", size: 400 },
    { src: "/images/landing/pic-1.jpg", size: 350 },
    { src: "/images/landing/pic-5.webp", size: 300 },
    { src: "/images/landing/pic-3.webp", size: 420 },
    { src: "/images/landing/pic-5.webp", size: 500 },
  ];

  return (
    <div className="relative z-10 px-4 mx-auto w-full h-dvh flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute z-40 max-w-6xl mx-auto inset-0 items-center justify-center hidden md:flex">
        <OrbitImages
          images={images}
          shape="ellipse"
          radiusX={600}
          radiusY={300}
          rotation={0}
          duration={90}
          responsive={true}
          direction="normal"
          fill
          width="100%"
          height="100%"
          paused={true}
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center md:hidden z-0">
        <OrbitImages
          images={imagesMob}
          shape="ellipse"
          radiusX={450}
          radiusY={1200}
          rotation={0}
          duration={150}
          responsive={true}
          direction="normal"
          fill
          width="100%"
          height="100%"
          paused={true}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center px-4 gap-6">
        <h1 className="text-2xl md:text-4xl font-bold text-center">
          Alireza Abbasi
        </h1>
        <span className="md:text-lg text-foreground/50 text-center">
          Creative Video Editor & Content Producer for Global Brands
        </span>
        <Button
          asChild
          variant={"ghost"}
          size={"lg"}
          className="border-2 border-accent p-6 flex items-center gap-4 bg-black"
        >
          <Link href={"#"}>
            <Magnifier className="-rotate-45" color="white" />
            <p className="text-base font-bold">start a project</p>
          </Link>
        </Button>
      </div>
    </div>
  );
}
