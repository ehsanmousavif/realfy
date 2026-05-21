"use client";

import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "@solar-icons/react-perf/LineDuotone";
import { Backlight } from "../component/magic-ui/back-light";
import ReactPlayer from "react-player";

type PropType = {
  videos: string[];
};

export function Carousel({ videos }: PropType) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    skipSnaps: false,
    containScroll: "trimSnaps",
  });

  const [isDragging, setIsDragging] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("pointerDown", () => {
      setIsDragging(true);
    });

    emblaApi.on("pointerUp", () => {
      setTimeout(() => {
        setIsDragging(false);
      }, 50);
    });
  }, [emblaApi]);

  useEffect(() => {
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
          {videos.map((video, index) => {
            const distance = Math.abs(index - selectedIndex);
            const isCenter = distance === 0;

            return (
              <div
                key={index}
                className="flex-[0_0_70%] md:flex-[0_0_60%] w-full flex items-center justify-center"
              >
                <div
                  className={cn("w-full transition-all duration-500 ease-out")}
                  style={{
                    transform: `scale(${isCenter ? 1 : 0.88})`,
                    opacity: isCenter ? 1 : 0.4,
                  }}
                >
                  <Backlight blur={50} className="">
                    <div
                      className={cn(
                        "my-16 shadow-xl shadow-xl/30 shadow-black/40 aspect-video rounded-xl flex md:max-h-150 overflow-hidden relative w-full ",
                        isDragging && "pointer-events-none",
                      )}
                    >
                      <ReactPlayer
                        src={video}
                        width="100%"
                        height="100%"
                        controls
                        playing={false}
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
