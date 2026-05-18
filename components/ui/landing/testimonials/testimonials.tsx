import { DocumentText } from "@solar-icons/react-perf/category/style/LineDuotone";
import { Testimonials } from "./testimonials-base/testimonials-base";
import { IconUpper } from "../../root/icon-upper-sections";

const images = [
  "/images/landing/shot-1.png",
  "/images/landing/shot-2.png",
  "/images/landing/shot-3.png",
];

export function TestimonialsBase() {
  return (
    <div className="mt-20 md:mt-40 justify-center gap-8 px-4 w-full flex flex-col items-center max-w-7xl mx-auto">
      <IconUpper
        title="Client Feedback"
        icon={<DocumentText className="w-6 h-6" />}
      />
      <span className="text-2xl md:text-4xl -mt-4 font-bold text-center">
        Client Messages
      </span>
      <Testimonials images={images} />
    </div>
  );
}
