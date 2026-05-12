"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
    data: {
        title: string;
        description: string;
        id: number;
    }[];
}

export function TimeLineBase({ data }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);
    const progressLineRef = useRef<HTMLDivElement>(null);
    const [pathHeight, setPathHeight] = useState(0);

    const currentPos = useRef(0);
    const targetPos = useRef(0);
    const requestRef = useRef<number>();

    useEffect(() => {
        const updatePathHeight = () => {
            if (!containerRef.current) return;
            const items = containerRef.current.querySelectorAll(
                ".tl-item",
            ) as NodeListOf<HTMLElement>;
            if (items.length < 2) return;

            const firstItem = items[0];
            const lastItem = items[items.length - 1];
            const height = lastItem.offsetTop - firstItem.offsetTop;
            setPathHeight(height);
        };

        const handleScroll = () => {
            if (!containerRef.current) return;
            const items = containerRef.current.querySelectorAll(
                ".tl-item",
            ) as NodeListOf<HTMLElement>;
            const firstItem = items[0];
            if (!firstItem) return;

            const windowHeight = window.innerHeight;
            let lastVisibleIndex = -1;

            items.forEach((item, index) => {
                const rect = item.getBoundingClientRect();
                // حساسیت اسکرول: وقتی دایره به ۷۰ درصد ارتفاع صفحه رسید
                if (rect.top < windowHeight * 0.7) {
                    lastVisibleIndex = index;
                }
            });

            if (lastVisibleIndex < 0) {
                targetPos.current = 0;
            } else {
                const currentItem = items[lastVisibleIndex];
                targetPos.current = currentItem.offsetTop - firstItem.offsetTop;
            }
        };

        const animate = () => {
            const diff = targetPos.current - currentPos.current;
            currentPos.current += diff * 0.05;

            if (progressLineRef.current) {
                progressLineRef.current.style.height = `${currentPos.current}px`;
            }
            requestRef.current = requestAnimationFrame(animate);
        };

        updatePathHeight();
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", updatePathHeight);
        requestRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", updatePathHeight);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [data]);

    return (
        <div className="text-white font-sans">
            <div ref={containerRef} className="relative max-w-5xl mx-auto px-4">
                <div
                    style={{ height: `${pathHeight}px` }}
                    className="absolute left-8 md:left-1/2 top-4 w-0.5 bg-foreground/20 md:-translate-x-1/2 rounded-full"
                />
                <div
                    ref={progressLineRef}
                    className="absolute left-8 md:left-1/2 top-4 w-1 bg-linear-to-b from-emerald-400 via-green-500 to-emerald-600 md:-translate-x-1/2 h-0 z-10 rounded-full"
                />
                {data.map((d, index) => {
                    const isRight = index % 2 === 0;
                    return (
                        <div key={d.id} className="relative flex mb-20 last:mb-0 tl-item">
                            <div className="absolute top-1.5 left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-5 border-foreground/20 z-20" />
                            <div className="hidden md:flex w-1/2 pr-16 justify-end">
                                {!isRight && (
                                    <div className="flex flex-col gap-2 max-w-md text-right items-end">
                                        <div className="flex gap-2 text-xl font-bold tracking-tight">
                                            <span>{d.id}.</span>
                                            <span>{d.title}</span>
                                        </div>
                                        <p className="text-sm md:text-md leading-relaxed font-normal">
                                            {d.description}
                                        </p>
                                    </div>
                                )}
                            </div>

                            <div className="hidden md:flex w-1/2 pl-16 justify-start">
                                {isRight && (
                                    <div className="flex flex-col gap-2 max-w-2xl text-left items-start">
                                        <div className="flex gap-2 text-xl font-bold tracking-tight">
                                            <span>{d.id}.</span>
                                            <span>{d.title}</span>
                                        </div>
                                        <p className="text-sm md:text-md leading-relaxed text-foreground/50 font-normal">
                                            {d.description}
                                        </p>
                                    </div>
                                )}
                            </div>

                            <div className="md:hidden w-full ml-16 pr-4">
                                <div className="flex flex-col gap-2 text-left">
                                    <div className="flex gap-2 text-lg font-bold">
                                        <span>{d.id}.</span>
                                        <span>{d.title}</span>
                                    </div>
                                    <p className="text-md leading-relaxed text-foreground/50 font-normal">
                                        {d.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
