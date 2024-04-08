"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import React from "react";

interface FadeInDivProps {
    className?: string;
    key?: string;
    tabs: Tab[];
    active: Tab;
    hovering?: boolean;
}

function FadeInDiv({ className, tabs, hovering }: FadeInDivProps) {
    const isActive = React.useCallback((tab: Tab) => {
        return tab.key === tabs[0].key;
    }, [tabs]);
    return (
        <div className="relative w-full h-full">
            {tabs.map((tab, idx) => (
                <motion.div
                    key={tab.key}
                    layoutId={tab.key}
                    style={{
                        scale: 1 - idx * 0.1,
                        top: hovering ? idx * -50 : 0,
                        zIndex: -idx,
                        opacity: idx < 3 ? 1 - idx * 0.1 : 0,
                    }}
                    animate={{
                        y: isActive(tab) ? [0, 40, 0] : 0,
                    }}
                    className={cn("w-full h-full absolute top-0 left-0", className)}
                >
                    {tab.content}
                </motion.div>
            ))}
        </div>
    );
};

interface TabsProps {
    tabs: Tab[];
    containerClassName?: string;
    activeTabClassName?: string;
    tabClassName?: string;
    contentClassName?: string;
}

export interface Tab {
    title: string;
    key: string;
    content?: string | React.ReactNode | any;
}

export function Tabs({
    tabs: propTabs,
    containerClassName,
    activeTabClassName,
    tabClassName,
}: TabsProps) {
    const [active, setActive] = useState<Tab>(propTabs[0]);
    const [tabs, setTabs] = useState<Tab[]>(propTabs);
    const [hovering, setHovering] = useState(false);

    const moveSelectedTabToTop = React.useCallback((idx: number) => {
        const newTabs = [...propTabs];
        const selectedTab = newTabs.splice(idx, 1);
        newTabs.unshift(selectedTab[0]);
        setTabs(newTabs);
        setActive(newTabs[0]);
    }, [propTabs]);

    const processedTabs = React.useMemo(() => {
        return propTabs.map((tab, idx) => (
            <button
                key={tab.key}
                onClick={() => {
                    moveSelectedTabToTop(idx);
                }}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                className={cn("relative px-4 py-2 rounded-full", tabClassName)}
                style={{
                    transformStyle: "preserve-3d",
                }}
            >
                {active.key === tab.key && (
                    <motion.div
                        layoutId="clickedbutton"
                        transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                        className={cn(
                            "absolute inset-0 bg-black  rounded-full",
                            activeTabClassName
                        )}
                    />
                )}

                <span className="relative block text-white">
                    {tab.title}
                </span>
            </button>
        ))
    }, [propTabs, tabClassName, activeTabClassName, active]);

    return (
        <div className="h-full w-full flex flex-col">
            <div
                className={cn(
                    "flex flex-row items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
                    containerClassName
                )}
            >
                {processedTabs}
            </div>
            <hr className="h-px my-5 bg-gray-200 border-1 shadow-2xl" />
            <div className="h-full w-full flex box-border">
                {active.content}
            </div>
        </div>
    );
};
