import Image from "next/image"
import { Marquee } from "../../component/magic-ui/marquee"

interface Props {
    images: string[]
}
export function CategoryBase({ images }: Props) {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:50s]">
                {images.map((x) => (
                    <div className="relative md:w-80 w-60 aspect-9/6 pro cursor-pointer overflow-hidden"
                        key={x} >
                        <Image className="rounded-xl"  fill alt="" src={x} />
                    </div>
                ))
                }
            </Marquee >
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-black to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-black to-transparent" />    </div>

    )
}
