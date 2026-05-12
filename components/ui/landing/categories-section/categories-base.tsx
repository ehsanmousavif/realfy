import { Marquee } from "../../marquee"
import Image from "next/image"

interface Props {
    images: string[]
}
export function CategoryBase({ images }: Props) {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee  pauseOnHover className="[--duration:50s]">
                {images.map((x) => (
                    <div className="relative md:w-80 w-60 aspect-[9/6] cursor-pointer overflow-hidden"
                        key={x} >
                        <Image className="rounded-xl" fill alt="" src={x} />
                    </div>
                ))
                }
            </Marquee >
            <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
        </div >
    )
}
