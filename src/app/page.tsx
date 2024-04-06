"use client";
import { RoundButton } from "@/components/ui/round-button";
import { SpecialArrowButton } from "@/components/ui/special-arrow-button";
import { TypewriterEffectSmooth, TypewriterEffectSmoothProps } from "@/components/ui/typewriter-effect";

const subtitleWords: TypewriterEffectSmoothProps['words'] = [
    {
        text: "I'm"
    },
    {
        text: "a"
    },
    {
        text: "Software",
        className: "text-primary"
    },
    {
        text: "Engineer,",
        className: "text-primary",
        indicesToIgnoreClassName: [8]
    },
    {
        text: "with"
    },
    {
        text: "an"
    },
    {
        text: "enthusiasm"
    },
    {
        text: "for"
    },
    {
        text: "frontend"
    },
]

export default function Home() {
    return (
        <div className="absolute z-50 inset-0 flex flex-col gap-20 items-center justify-center px-4 pointer-events-none text-center p-24">
            <p className="text-white stroke-slate-700 stroke-2 font-bold bg-clip-text drop-shadow-2xl text-4xl md:text-5xl lg:text-8xl">
                Hi, I'm Kieran
            </p>
            <div className="text-gray-100 bg-clip-text drop-shadow-2xl lg:text-4xl">
                <TypewriterEffectSmooth
                    words={subtitleWords}
                    cursorClassName="bg-gray-300"
                />
            </div>
            <RoundButton text="Browse projects" />
        </div>
    );
}
