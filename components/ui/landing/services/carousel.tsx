"use client";

import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import React from "react";
import {
    RoundArrowLeft,
    RoundArrowRight,
} from "@solar-icons/react-perf/LineDuotone";
import { Backlight } from "../../manual/back-light";

type PropType = {
    images: string[];
};

export function Carousel({ images }: PropType) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "center",
        loop: true,
        skipSnaps: false,
        containScroll: "trimSnaps",
    });

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    React.useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        };

        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);

        onSelect();

        return () => {
            emblaApi.off("select", onSelect);
            emblaApi.off("reInit", onSelect);
        };
    }, [emblaApi]);

    const scroll = (scrollTo: "prev" | "next") => {
        if (!emblaApi) return;

        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        scrollTo === "prev" ? emblaApi.scrollPrev() : emblaApi.scrollNext();
    };

    return (
        <div className="p-8">
            <div className="w-full relative">
                <div
                    onClick={() => scroll("prev")}
                    className="absolute left-45 top-1/2 z-10 hidden md:block"
                >
                    <RoundArrowLeft className="w-8 h-8" />
                </div>

                <div
                    onClick={() => scroll("next")}
                    className="absolute right-45 top-1/2 z-10 hidden md:block"
                >
                    <RoundArrowRight className="w-8 h-8" />
                </div>

                <div ref={emblaRef} className="overflow-hidden rounded-2xl">
                    <div className="flex ">
                        {images.map((image, index) => {
                            const distance = Math.abs(index - selectedIndex);
                            const isCenter = distance === 0;

                            return (
                                <div
                                    key={index}
                                    className="flex-[0_0_70%] md:flex-[0_0_60%] flex items-center justify-center"
                                >
                                    <div
                                        className={cn(
                                            "w-full transition-all duration-500 ease-out",
                                        )}
                                        style={{
                                            transform: `scale(${isCenter ? 1 : 0.88})`,
                                            opacity: isCenter ? 1 : 0.3,
                                        }}
                                    >
                                        <div
                                            className={`relative w-full aspect-video rounded-xl overflow-hidden ${isCenter ? " shadow-[0_80px_30px_rgba(0,0,0,0,1)] shadow-accent" : "shadow-lg"}`}
                                        >
                                            <Backlight blur={50}>
                                                <Image
                                                    src={image}
                                                    alt={`Slide ${index + 1}`}
                                                    width={800}
                                                    height={450}
                                                    className="object-center"
                                                    priority={index === 0}
                                                />
                                            </Backlight>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
