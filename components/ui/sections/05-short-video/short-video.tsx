"use client";

import { IconUpper } from "@/components/ui/root/icon-upper-sections";
import { _Carousel } from "./_carousel";

export function ShortVideo() {
  return (
    <div className="mt-30 mx-auto flex flex-col items-center justify-center gap-8 w-full">
      <IconUpper title="Short Videos" icon={"/images/landing/Frame.svg"} />
      <h2 className="text-xl md:text-4xl -mt-4 font-bold text-center">
        My Best Video Projects
      </h2>

      <_Carousel />
    </div>
  );
}
