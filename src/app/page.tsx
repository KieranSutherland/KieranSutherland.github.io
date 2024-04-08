"use client";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { TypewriterEffectSmooth, TypewriterEffectSmoothProps } from "@/components/ui/typewriter-effect";
import Link from "next/link";

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
        <>
            <p className="text-white font-bold bg-clip-text drop-shadow-2xl text-4xl md:text-5xl lg:text-8xl">
                {"Hi, I'm Kieran"}
            </p>
            <div className="text-gray-100 bg-clip-text drop-shadow-2xl md:text-2xl lg:text-4xl font-medium">
                <TypewriterEffectSmooth
                    words={subtitleWords}
                    cursorClassName="bg-gray-300"
                />
            </div>
            <Link href={`/projects`} className="pointer-events-auto">
                <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="px-6 py-3"
                >
                    {"Browse projects"}
                </HoverBorderGradient>
            </Link>
        </>
    );
}
