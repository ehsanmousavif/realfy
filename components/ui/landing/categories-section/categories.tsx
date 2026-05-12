"use client"

const images = [
    "/images/landing/instagram-1.jpg",
    "/images/landing/instagram-2.jpg",
    "/images/landing/instagram-3.jpg",
    "/images/landing/instagram-4.jpg",
]
import { Sunrise } from '@solar-icons/react-perf/category/style/LineDuotone'
import { CategoryBase } from './categories-base'
export function Category() {
    return <div className="mt-30 mx-auto flex flex-col items-center justify-center gap-8 px-4 w-full">
        <div className="rounded-full bg-accent text-foreground/70 px-3 py-2 flex items-center gap-2">
            <Sunrise className='w-6 h-6' />
            <p>Client Results</p>
        </div>
        <span className="text-2xl md:text-4xl -mt-4 font-bold text-center">Growth in Action</span>
        <CategoryBase images={images} />
    </div>
}   