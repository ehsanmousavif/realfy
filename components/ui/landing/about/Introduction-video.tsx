"use client"

import Image from "next/image"
// import { PlayCircle } from '@solar-icons/react'

export function IntroductionVideo() {
    return (
        <div className="w-full aspect-video overflow-hidden rounded-xl relative ">
            {/* <iframe
                src="https://www.aparat.com/video/video/embed/videohash/n307amk/vt/frame"
                className="w-full aspect-video rounded-xl"
                allowFullScreen
                loading="lazy"

            ></iframe> */}
            <Image src="/images/landing/pic-2.jpg" fill alt="" className="object-cover" />
            <div className="absolute top-1/2 left-1/2">
                {/* <PlayCircle className="w-12 h-12" /> */}
            </div>
        </div>
    )
}