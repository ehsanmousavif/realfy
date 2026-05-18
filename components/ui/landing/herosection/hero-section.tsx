"use client";

import { Magnifier } from "@solar-icons/react-perf/LineDuotone";
import OrbitImages from "../../manual/OrbitImages";
import { Button } from "../../manual/button";
import { useState } from "react";
export function HeroSection() {
    const [move, setMove] = useState<number>(600);
    const images = [
        { src: "/images/landing/short-1.webp", size: 200 },
        { src: "/images/landing/pic-2.webp", size: 200 },
        { src: "/images/landing/pic-5.webp", size: 250 },
        { src: "/images/landing/pic-3.webp", size: 300 },
        { src: "/images/landing/pic-5.webp", size: 250 },
    ];
    const imagesMob = [
        { src: "/images/landing/short-1.webp", size: 400 },
        { src: "/images/landing/pic-2.webp", size: 500 },
        { src: "/images/landing/pic-5.webp", size: 400 },
        { src: "/images/landing/pic-3.webp", size: 400 },
        { src: "/images/landing/pic-5.webp", size: 500 },
    ];

    return (
        <div className="relative z-10 px-4 mx-auto w-full min-h-screen flex flex-col justify-center items-center overflow-hidden">
            <div
                className="absolute z-40 max-w-6xl mx-auto inset-0 items-center justify-center hidden md:flex"
                onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const y = e.clientX - rect.top;
                    const height = rect.height;
                    const value = (2 - y / height) * 400;
                    setMove(value);
                }}
            >
                <OrbitImages
                    images={images}
                    shape="ellipse"
                    radiusX={move}
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
                    shape="rectangle"
                    radiusX={400}
                    radiusY={900}
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
                <span className="text-2xl md:text-4xl font-bold text-center">
                    Alireza Abbasi
                </span>
                <span className="md:text-lg text-foreground/50 text-center">
                    Creative Video Editor & Content Producer for Global Brands
                </span>
                <Button
                    variant={"ghost"}
                    size={"lg"}
                    className="border-2 border-accent p-6 flex items-center gap-4 bg-black"
                >
                    <Magnifier className="-rotate-45" color="white" />
                    <p className="text-base font-bold">start a project</p>
                </Button>
            </div>
        </div>
    );
}
