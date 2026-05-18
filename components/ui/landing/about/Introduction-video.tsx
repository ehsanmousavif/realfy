"use client";

import Image from "next/image";
import { Button } from "../../component/button";
import { Play } from "@solar-icons/react-perf/category/style/Bold";
// import { PlayCircle } from '@solar-icons/react'

export function IntroductionVideo() {
  return (
    <div className="w-full aspect-video overflow-hidden rounded-xl relative ">
      {/* <iframe
                src="https://www.aparat.com/video/video/embed/videohash/n307amk/vt/frame"
                className="w-full aspect-video rounded-xl"
                allowFullScreen
                loading="lazy"

            ></iframe> */}
      <Image
        src="/images/landing/pic-1.jpg"
        fill
        alt=""
        className="object-cover object-center"
      />
      <div className="absolute top-1/2 left-1/2">
        <Button
          size={"lg"}
          variant="ghost"

          className="absolute -translate-1/2 flex items-center gap-2 text-foreground bg-background/50 px-4 font-bold justify-center rounded-full"
        >
          <Play color="#fff" size={12} />
          play
        </Button>
      </div>
    </div>
  );
}
