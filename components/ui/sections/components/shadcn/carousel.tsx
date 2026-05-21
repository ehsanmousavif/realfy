"use client"

import * as React from "react"
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react"
import { cn } from "@/lib/utils"
import { Button } from "./button"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
    opts?: CarouselOptions
    plugins?: CarouselPlugin
    orientation?: "horizontal" | "vertical"
    setApi?: (api: CarouselApi) => void
}

type CanScroll = {
    prev: boolean
    next: boolean
}

type CarouselContextProps = {
    carouselRef: ReturnType<typeof useEmblaCarousel>[0]
    api: CarouselApi | undefined
    scrollPrev: () => void
    scrollNext: () => void
    canScroll: CanScroll
    orientation: "horizontal" | "vertical"
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
    const ctx = React.useContext(CarouselContext)
    if (!ctx) throw new Error("useCarousel must be used within Carousel")
    return ctx
}

export function Carousel({
    orientation = "horizontal",
    opts,
    plugins,
    setApi,
    className,
    children,
    ...props
}: React.ComponentProps<"div"> & CarouselProps) {
    const [carouselRef, api] = useEmblaCarousel(
        {
            ...opts,
            axis: orientation === "horizontal" ? "x" : "y",
        },
        plugins
    )

    const [canScroll, setCanScroll] = React.useState<CanScroll>({
        prev: false,
        next: false,
    })

    const rafRef = React.useRef<number | null>(null)

    const updateCanScroll = React.useCallback((api: CarouselApi) => {
        if (!api) return

        if (rafRef.current) cancelAnimationFrame(rafRef.current)

        rafRef.current = requestAnimationFrame(() => {
            setCanScroll({
                prev: api.canScrollPrev(),
                next: api.canScrollNext(),
            })
        })
    }, [])

    const scrollPrev = React.useCallback(() => {
        api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
        api?.scrollNext()
    }, [api])

    React.useEffect(() => {
        if (!api) return

        setApi?.(api)

        updateCanScroll(api)

        api.on("select", () => updateCanScroll(api))
        api.on("reInit", () => updateCanScroll(api))

        return () => {
            api.off("select", () => updateCanScroll(api))
            api.off("reInit", () => updateCanScroll(api))
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
        }
    }, [api, setApi, updateCanScroll])

    const handleKeyDown = React.useCallback(
        (e: React.KeyboardEvent<HTMLDivElement>) => {
            if (e.key === "ArrowLeft") scrollPrev()
            if (e.key === "ArrowRight") scrollNext()
        },
        [scrollPrev, scrollNext]
    )

    return (
        <CarouselContext.Provider
            value={{
                carouselRef,
                api,
                scrollPrev,
                scrollNext,
                canScroll,
                orientation,
                opts,
            }}
        >
            <div
                onKeyDownCapture={handleKeyDown}
                className={cn("relative", className)}
                role="region"
                aria-roledescription="carousel"
                {...props}
            >
                {children}
            </div>
        </CarouselContext.Provider>
    )
}

export function CarouselContent({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const { carouselRef, orientation } = useCarousel()

    return (
        <div ref={carouselRef} className="overflow-hidden">
            <div
                className={cn(
                    "flex",
                    orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
                    className
                )}
                {...props}
            />
        </div>
    )
}

export function CarouselItem({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const { orientation } = useCarousel()

    return (
        <div
            role="group"
            className={cn(
                "min-w-0 shrink-0 grow-0 basis-full",
                orientation === "horizontal" ? "pl-4" : "pt-4",
                className
            )}
            {...props}
        />
    )
}

export function CarouselPrevious({
    className,
    ...props
}: React.ComponentProps<typeof Button>) {
    const { scrollPrev, canScroll } = useCarousel()

    return (
        <Button
            variant="outline"
            size="icon-sm"
            disabled={!canScroll.prev}
            onClick={scrollPrev}
            className={cn(
                "absolute top-1/2 -left-12 -translate-y-1/2",
                className
            )}
            {...props}
        >
            <span className="sr-only">Previous</span>
        </Button>
    )
}

export function CarouselNext({
    className,
    ...props
}: React.ComponentProps<typeof Button>) {
    const { scrollNext, canScroll } = useCarousel()

    return (
        <Button
            variant="outline"
            size="icon-sm"
            disabled={!canScroll.next}
            onClick={scrollNext}
            className={cn(
                "absolute top-1/2 -right-12 -translate-y-1/2",
                className
            )}
            {...props}
        >
            <span className="sr-only">Next</span>
        </Button>
    )
}

export { useCarousel }