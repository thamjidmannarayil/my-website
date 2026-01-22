"use client"

import React from "react";
import { motion } from "framer-motion";
import { useCursor } from "../../AppContextFolder/CursorContext";

interface CursorSwitcherProps {
    finishedLoading?: boolean;
    isMobile?: boolean;
    className?: string;
}

const DefaultIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
        <path d="M13 13l6 6" />
    </svg>
);

const CircleIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
);

const DotIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="4" fill="currentColor" />
    </svg>
);

const CrosshairIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="22" y1="12" x2="18" y2="12" />
        <line x1="6" y1="12" x2="2" y2="12" />
        <line x1="12" y1="6" x2="12" y2="2" />
        <line x1="12" y1="22" x2="12" y2="18" />
    </svg>
);

const CursorSwitcher = ({ finishedLoading = true, isMobile, className }: CursorSwitcherProps) => {
    const { cursorType, setCursorType } = useCursor();

    const cursors = [
        { id: "default", name: "Default", icon: <DefaultIcon />, gradient: "from-gray-100 to-gray-300" },
        { id: "circle", name: "Circle", icon: <CircleIcon />, gradient: "from-blue-100 to-blue-300" },
        { id: "dot", name: "Dot", icon: <DotIcon />, gradient: "from-purple-100 to-purple-300" },
        { id: "crosshair", name: "Aim", icon: <CrosshairIcon />, gradient: "from-green-100 to-green-300" },
    ] as const;

    const renderCursorButton = (c: typeof cursors[number], isSelected: boolean) => (
        <button
            key={c.id}
            onClick={() => setCursorType(c.id as any)}
            className={`relative h-10 w-10 rounded-full border-2 transition-all duration-200 group flex items-center justify-center
                  bg-gradient-to-br ${c.gradient}
                  ${isSelected
                    ? "border-AAsecondary scale-110 z-20 shadow-lg"
                    : "border-white hover:scale-105 hover:z-10 shadow-md"
                }
      `}
            aria-label={`Select ${c.name} cursor`}
            title={c.name}
        >
            <div className={`text-black transition-opacity duration-300 ${isSelected ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'}`}>
                {c.icon}
            </div>

            {isSelected && (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 flex items-center justify-center z-30"
                >
                    <div className="bg-white rounded-full p-0.5 shadow-sm border border-black/10">
                        <svg className="w-2.5 h-2.5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                </motion.div>
            )}
        </button>
    );

    if (isMobile) {
        // Don't show cursor switcher on mobile since the cursor is hidden anyway
        return null;
    }

    return (
        <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                type: "spring",
                duration: finishedLoading ? 0 : 0.6,
                delay: finishedLoading ? 0 : 0.4, // Match Logo timing
            }}
            className={`z-10 flex -space-x-3 rtl:space-x-reverse ${className || ""}`}
        >
            {cursors.map((c) => renderCursorButton(c, cursorType === c.id))}
        </motion.div>
    );
};

export default CursorSwitcher;
