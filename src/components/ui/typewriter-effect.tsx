"use client";

import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import React from "react";

export interface TypewriterEffectSmoothProps {
    words: {
        text: string;
        className?: string;
        indicesToIgnoreClassName?: number[]
    }[];
    className?: string;
    cursorClassName?: string;
}

export function TypewriterEffectSmooth({ words, className, cursorClassName }: TypewriterEffectSmoothProps) {
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => {
        setMounted(true)
    }, [])
    const processedWords = React.useMemo(() => {
        const wordsArray = words.map((word) => {
            return {
                ...word,
                text: word.text.split(""),
            };
        })
        return (
            <div>
                {wordsArray.map((word, idx) => {
                    return (
                        <div key={`word-${idx}`} className="inline-block">
                            {word.text.map((char, index) => (
                                <span
                                    key={`char-${index}`}
                                    className={word.indicesToIgnoreClassName?.includes(index) ? undefined : word.className}
                                >
                                    {char}
                                </span>
                            ))}
                            &nbsp;
                        </div>
                    );
                })}
            </div>
        );
    }, [words]);

    if (!mounted) {
        return null;
    }

    return (
        <div className={cn("flex space-x-1 my-6", className)}>
            <motion.div
                className="overflow-hidden pb-2"
                initial={{
                    width: "0%",
                }}
                whileInView={{
                    width: "fit-content",
                }}
                transition={{
                    duration: 2,
                    ease: "linear",
                    delay: 1,
                }}
            >
                <div
                    style={{
                        whiteSpace: "nowrap",
                    }}
                >
                    {processedWords}
                </div>{" "}
            </motion.div>
            <motion.span
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    duration: 0.8,

                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className={cn(
                    "block rounded-sm w-[4px]  h-4 sm:h-6 xl:h-12 bg-blue-500",
                    cursorClassName
                )}
            ></motion.span>
        </div>
    );
};
