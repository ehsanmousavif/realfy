const videos = [
  "https://www.youtube.com/embed/9s0_YQtbEEY",
  "https://www.youtube.com/embed/pmSiuAWza6o",
  "https://www.youtube.com/embed/sRWcJrMTtMI",
];
import { DangerCircle } from "@solar-icons/react-perf/category/style/LineDuotone";
import { Carousel } from "./carousel";
import { IconUpper } from "../../root/icon-upper-sections";
export function VideoServices() {
  return (
    <div className="mt-30 mx-auto flex flex-col items-center justify-center gap-8 w-full">
      <IconUpper title="Featured Work" icon={"/images/landing/star.svg"} />
      <h2 className="text-2xl md:text-4xl -mt-4 font-bold text-center">
        My Best Video Projects
      </h2>
      <Carousel videos={videos} />
      <div className="flex flex-row items-start justify-center gap-3">
        <DangerCircle className="w-6 h-6 md:w-4 md:h-4 shrink-0" />
        <p className="text-foreground/60 leading-relaxed">
          A dynamic video project created for{" "}
          <span className="text-[#9CE5D2] font-medium underline decoration-[#9CE5D2]/50 underline-offset-2">
            Dribbble
          </span>
          , designed to showcase clean visuals, smooth storytelling, and engaging motion throughout the edit.
        </p>
      </div>
    </div>
  );
}
