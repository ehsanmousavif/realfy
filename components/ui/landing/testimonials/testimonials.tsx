import { DocumentText } from "@solar-icons/react-perf/category/style/LineDuotone";
import { Testimonials } from "./testimonials-base/testimonials-base";

const images = [
    "/images/landing/shot-1.png",
    "/images/landing/shot-2.png",
    "/images/landing/shot-3.png",
];

export function TestimonialsBase() {
    return (
        <div className="mt-20 md:mt-40 justify-center gap-8 px-4 w-full flex flex-col items-center max-w-7xl mx-auto">
            <div className=" rounded-full bg-accent text-foreground/70 p-3 flex items-center gap-2">
                <DocumentText className="w-6 h-6" />
                <p>Client Feedback </p>
            </div>
            <span className="text-2xl md:text-4xl -mt-4 font-bold text-center">
                My Work Process
            </span>
            <Testimonials images={images} />
        </div>
    );
}
