"use client";

import { UserCircle } from "@solar-icons/react-perf/category/style/LineDuotone";
import { IntroductionVideo } from "./Introduction-video";
import Image from "next/image";
import { IconUpper } from "../../root/icon-upper-sections";

export function AboutUs() {
  return (
    <div className="mt-30 max-w-4xl mx-auto flex flex-col items-center justify-center gap-10 px-4 w-full relative">
      <IconUpper title="Who Am I" icon={<UserCircle size={20} />} />
      <span className="text-2xl md:text-4xl -mt-4 font-bold text-center">
        About Me
      </span>
      <div className="flex flex-col items-center gap-2">
        <span className="text-center text-sm text-foreground/70">
          I’m Alireza Abbasi, a video editor and content producer with 22+ years
          of international experience, creating impactful video content for
          brands and creators worldwide.{" "}
        </span>
        <span className="text-foreground/60 flex items-center gap-1">
          See more of my work on
          <span className="text-[#9CE5D2] underline">Instagram</span>
          <span>or in my</span>.
        </span>
      </div>

      <IntroductionVideo />
      <div className="relative w-full">
        <Image
          className="absolute w-30 md:w-50 aspect-video object-cover right-4 md:right-15 bottom-0 rounded-2xl z-10"
          alt=""
          width={180}
          height={100}
          src="/images/landing/pic-5.webp"
        />
        <Image
          className="absolute aspect-video object-cover md:z-0 -z-10 right-3 md:-right-20 md:rotate-5  -top-72 md:-top-130  rounded-2xl w-30 md:w-50"
          alt=""
          width={180}
          height={100}
          src="/images/landing/pic-4.webp"
        />
        <Image
          className="absolute aspect-video z-10 object-cover left-1 md:-left-10 bottom-12 md:bottom-30 rounded-2xl w-30 md:w-50"
          alt=""
          width={180}
          height={100}
          src="/images/landing/pic-3.webp"
        />
      </div>
    </div>
  );
}
