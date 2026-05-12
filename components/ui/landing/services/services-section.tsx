"use client"

const images = [
    "/images/landing/pic-1.jpg",
    "/images/landing/pic-2.jpg",
    "/images/landing/pic-3.jpg",


]
import { StarCircle, DangerCircle } from '@solar-icons/react-perf/category/style/LineDuotone'
import { Carousel } from './carousel'
export function Services() {
    return <div className="mt-30 mx-auto flex flex-col items-center justify-center gap-8 px-4 w-full">
        <div className="rounded-full bg-accent text-foreground/70 px-3 py-2 flex items-center gap-2">
            <StarCircle />
            <p>Featured Work</p>
        </div>
        <span className="text-2xl md:text-4xl -mt-4 font-bold text-center">My Best Video Projects</span>
        <Carousel images={images} />
        <div className="flex justify-start items-start md:items-center gap-2">
            <DangerCircle className=" w-8 h-8 md:w-4 md:h-4 mx-auto" />
            <span className="text-left md:text-center text-sm text-foreground/70">A dynamic video project created for Dribbble, designed to showcase clean visuals, smooth storytelling, and engaging motion throughout the edit.</span>
        </div>

    </div>
}   