"use client"

import { UserCircle } from '@solar-icons/react-perf/category/style/LineDuotone'
import { IntroductionVideo } from './Introduction-video'
import Image from 'next/image'

export function AboutUs() {
    return <div className="mt-30 max-w-4xl mx-auto flex flex-col items-center justify-center gap-8 px-4 w-full relative">
        <div className="rounded-full bg-accent text-foreground/70 px-3 py-2 flex items-center gap-2">
            <UserCircle />
            <p>Who Am I</p>
        </div>
        <span className="text-2xl md:text-4xl -mt-4 font-bold text-center">About Me</span>
        <div className="flex flex-col items-center gap-2 ">
            <span className="text-center text-sm text-foreground/70">I’m Alireza Abbasi, a video editor and content producer with 22+ years of international experience, creating impactful video content for brands and creators worldwide.</span>
            <span>
                See more of my work on{" "}
                <span className="text-green-300 underline">Instagram</span> or in my{" "}
                <span className="text-green-300 underline">portfolio</span>.
            </span>
        </div>
        <IntroductionVideo />


        <Image
            className="absolute aspect-video object-cover right-10 -bottom-10 rounded-2xl"
            alt=""
            width={180}
            height={100}
            src="/images/landing/pic-5.jpg"
        />

        <Image
            className="absolute aspect-video object-cover left-0 md:-left-10 bottom-10 rounded-2xl w-[120px] md:w-[160px]"
            alt=""
            width={180}
            height={100}
            src="/images/landing/pic-3.jpg"
        />
    </div>
}   
