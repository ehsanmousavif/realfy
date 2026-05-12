"use client";

import { Magnifier } from '@solar-icons/react-perf/LineDuotone'
import OrbitImages from "../../manual/OrbitImages";
export function HeroSection() {
    const mobileImages = [
        { src: '/images/landing/pic-1.jpg', size: 500 },
        { src: '/images/landing/pic-2.jpg', size: 500 },
        { src: '/images/landing/pic-3.jpg', size: 500 },
        { src: '/images/landing/pic-4.jpg', size: 400 },
        { src: '/images/landing/pic-5.jpg', size: 500 },
        { src: '/images/landing/pic-6.jpg', size: 500 },
    ];

    const desktopImages = [
        { src: '/images/landing/pic-1.jpg', size: 250 },
        { src: '/images/landing/pic-2.jpg', size: 150 },
        { src: '/images/landing/pic-3.jpg', size: 200 },
        { src: '/images/landing/pic-4.jpg', size: 190 },
        { src: '/images/landing/pic-5.jpg', size: 150 },
        { src: '/images/landing/pic-6.jpg', size: 180, },
    ];

    return <div className="relative px-4 mx-auto w-full min-h-screen flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 items-center 
        justify-center hidden md:flex ">
            <OrbitImages
                images={desktopImages}
                shape="rectangle"
                radiusX={500}
                radiusY={200}
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
                images={mobileImages}
                shape="rectangle"
                radiusX={400}
                radiusY={800}
                rotation={0}
                duration={70}
                responsive={true}
                direction="normal"
                fill
                width="100%"
                height="100%"
                paused={false}
            />
        </div>

        <div className="relative z-10 flex flex-col items-center px-4 gap-6">
            <span
                className="text-2xl md:text-4xl font-bold text-center whitespace-nowrap"
            >
                Alireza Abbasi
            </span>
            <span className="md:text-lg text-foreground/50 text-center">Creative Video Editor & Content Producer for Global Brands</span>
            <div
                className=" bg-black border border-foreground/10 flex items-center py-3 px-6 gap-3 rounded-full"
            >
                <Magnifier className="-rotate-45" size={20} color='white' />
                <p className="text-base font-bold">start a project</p>
            </div>
        </div>
    </div>;

}