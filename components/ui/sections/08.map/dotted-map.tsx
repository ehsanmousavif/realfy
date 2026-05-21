import { Global } from "@solar-icons/react-perf/category/style/LineDuotone";
import Image from "next/image";
import { CountryMarquee } from "./country-marquee";
import { IconUpper } from "../../root/icon-upper-sections";

export function GlobalMap() {
  return (
    <div className="mt-30 mx-auto flex flex-col items-center justify-center gap-8 p-0 md:px-4 w-full">
      <IconUpper title="Global Reach" icon={<Global className="w-6 h-6" />} />
      <span className="text-2xl md:text-4xl -mt-4 font-bold text-center">
        Countries Worked With
      </span>

      <div className="mx-auto mt-6 px-4 flex flex-wrap justify-center gap-3 sm:gap-4 max-w-3xl">
        <div className="flex items-center gap-3 bg-background border border-foreground/10 py-2 px-5 rounded-xl sm:w-auto justify-between sm:justify-start">
          <p className="text-sm sm:text-base font-bold">Years Exp</p>
          <p className="text-sm sm:text-base font-bold text-green-300">+22</p>
        </div>

        <div className="flex items-center gap-3 bg-background border border-foreground/10 py-2 px-5 rounded-xl sm:w-auto justify-between sm:justify-start">
          <p className="text-sm sm:text-base font-bold">Projects</p>
          <p className="text-sm sm:text-base font-bold text-green-300">120+</p>
        </div>

        <div className="flex items-center gap-3 bg-background border border-foreground/10 py-2 px-5 rounded-xl sm:w-auto justify-between sm:justify-start">
          <p className="text-sm sm:text-base font-bold">Client</p>
          <p className="text-sm sm:text-base font-bold text-green-300">20+</p>
        </div>

        <div className="flex items-center gap-3 bg-background border border-foreground/10 py-2 px-5 rounded-xl sm:w-auto justify-between sm:justify-start">
          <p className="text-sm sm:text-base font-bold">Video Formats</p>
          <p className="text-sm sm:text-base font-bold text-green-300">4+</p>
        </div>
      </div>

      <div className="relative aspect-video w-full flex flex-col gap-4">
        <div className="max-w-xs md:max-w-3xl  mx-auto relative">
          <CountryMarquee />

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-black to-transparent" />
        </div>
        <Image
          alt="map desktop"
          src="/images/landing/map.svg"
          fill
          sizes="100vw"
          className="hidden md:block w-full object-contain md:-mt-10 max-w-7xl mx-auto"
        />
        <Image
          alt="map mobile"
          src="/images/landing/map-mob.svg"
          fill
          sizes="100vw"
          className="block md:hidden mt-20"
        />
      </div>
    </div>
  );
}
