"use client"

const images = [
    "/images/landing/instagram-1.jpg",
    "/images/landing/instagram-2.jpg",
    "/images/landing/instagram-3.jpg",
    "/images/landing/instagram-4.jpg",
]
import { IconUpper } from '../../root/icon-upper-sections'
import { CategoryBase } from './categories-base'
export function Category() {
    return <div className="mt-30 mx-auto flex flex-col items-center justify-center gap-8 px-4 w-full">
       <IconUpper icon="/images/landing/mountain.svg" title='Client Results'/>
        <span className="text-2xl md:text-4xl -mt-4 font-bold text-center">Growth in Action</span>
        <CategoryBase images={images} />
    </div>
}   