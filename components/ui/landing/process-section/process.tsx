"use client";

import { VideoLibrary } from "@solar-icons/react-perf/category/style/LineDuotone";
import Carousell from "./_carousel";
export function Process() {
    return (
        <div className="mt-30 mx-auto flex flex-col items-center justify-center gap-8 w-full px-16">
            <div className="rounded-full bg-accent text-foreground/70 px-3 py-2 flex items-center gap-2">
                <VideoLibrary />
                <p>Short Video</p>
            </div>
            <span className="text-2xl md:text-4xl -mt-4 font-bold text-center">
                My Best Video Projects
            </span>
            <Carousell />
        </div>
    );
}
