"use client";

import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import React from "react";
import {
    ArrowLeft,
    ArrowRight,

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
        <div className="w-full relative">
            <div
                onClick={() => scroll("prev")}
                className="absolute left-45 top-1/2 z-10 hidden md:block"
            >
                <ArrowLeft className="w-8 h-12 bg-accent opacity-70 rounded-full p-2" />
            </div>

            <div
                onClick={() => scroll("next")}
                className="absolute right-45 top-1/2 z-10 hidden md:block"
            >
                <ArrowRight className="w-8 h-12 bg-accent opacity-70 rounded-full p-2" />
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
                                    className={cn("w-full transition-all duration-500 ease-out")}
                                    style={{
                                        transform: `scale(${isCenter ? 1 : 0.95})`,
                                        opacity: isCenter ? 1 : 0.4,
                                    }}
                                >
                                    <Backlight blur={10} className="">
                                        <div className="my-16 w-full shadow-xl/30 shadow-black/40 max-w-200 aspect-video rounded-xl md:max-h-150">
                                            <Image
                                                src={image}
                                                alt={`Slide ${index + 1}`}
                                                fill
                                                className="object-cover rounded-2xl"
                                                priority={index === 0}
                                            />
                                        </div>
                                    </Backlight>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
