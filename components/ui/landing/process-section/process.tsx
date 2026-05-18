"use client";

import Carousell from "./_carousel";
import { IconUpper } from "../../root/icon-upper-sections";
export function Process() {
  return (
    <div className="mt-30 mx-auto flex flex-col items-center justify-center gap-8 w-full">
      <IconUpper title="Short Videos" icon={"/images/landing/Frame.svg"} />
      <span className="text-xl md:text-4xl -mt-4 font-bold text-center">
        My Best Video Projects
      </span>
      <Carousell />
    </div>
  );
}
