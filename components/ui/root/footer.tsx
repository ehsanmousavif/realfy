import React from 'react';
import { Instagram, LinkedIn, YouTube, Twitter } from './_icons';

export function Footer() {
    return (
        <footer className="max-w-6xl mx-auto flex flex-col px-4 gap-12 mt-30 mb-20">

            <div className="flex flex-col md:flex-row justify-around items-start gap-16">

                <div className="flex md:flex flex-col items-center md:items-start w-full gap-2">
                    <span className="text-md font-bold uppercase tracking-wider">
                        Useful Links</span>
                    <div className="flex flex-wrap md:flex-col justify-center md:justify-start gap-2 text-sm text-zinc-300">
                        <a href="#" className="hover:text-white transition">Featured Work</a>
                        <a href="#" className="hover:text-white transition">Short Videos</a>
                        <a href="#" className="hover:text-white transition">Who I Am</a>
                        <a href="#" className="hover:text-white transition">FAQ</a>
                        <a href="#" className="hover:text-white transition">Start a Project</a>
                    </div>
                </div>

                <div className="flex flex-col gap-4  items-center md:items-start w-full">
                    <span className="text-sm font-bold uppercase tracking-wider">Contact Me</span>
                    <a
                        href="mailto:hello@alirezaabbasi.com"
                        className="text-sm font-light text-zinc-300 hover:text-white transition"
                    >
                        hello@alirezaabbasi.com
                    </a>
                </div>

                <div className="flex flex-col items-center w-full md:items-start">
                    <span className="text-md font-bold uppercase tracking-wider">
                        Follow Me
                    </span>
                    <div className="flex items-center gap-5">
                        <a href="#" className="flex items-center gap-2 text-sm font-light text-zinc-300 hover:text-white transition">
                            <Instagram />
                            <span className="hidden lg:block">Instagram</span>
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm font-light text-zinc-300 hover:text-white transition">
                            <LinkedIn />
                            <span className="hidden lg:block">Linkedin</span>
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm font-light text-zinc-300 hover:text-white transition">
                            <YouTube />
                            <span className="hidden lg:block">Youtube</span>
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm font-light text-zinc-300 hover:text-white transition">
                            <Twitter />
                            <span className="hidden lg:block">X (twitter)</span>
                        </a>
                    </div>
                </div>

            </div>

            <div className="pt-8 text-center md:text-left">
                <p className="text-xs text-zinc-600 uppercase tracking-[0.2em]">
                    © 2024 Alireza Abbasi. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
