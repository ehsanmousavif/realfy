"use client";

import { IconUpper } from "../../root/icon-upper-sections";
import ShortVideosCarousel from "./short-videos-carousel";

export function ShortVideo() {
  return (
    <div className="mt-30 mx-auto flex flex-col items-center justify-center gap-8 w-full">
      <IconUpper title="Short Videos" icon={"/images/landing/Frame.svg"} />
      <h2 className="text-xl md:text-4xl -mt-4 font-bold text-center">
        My Best Video Projects
      </h2>

      <ShortVideosCarousel />
    </div>
  );
}
