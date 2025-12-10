import React, { useState, useRef, useEffect } from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import { useTheme } from "../../AppContextFolder/ThemeContext";

interface ThemeSelectorProps {
    finishedLoading: boolean;
    isOnDarkSection?: boolean;
    isMobile?: boolean;
}

const ThemeSelector = ({ finishedLoading, isOnDarkSection, isMobile }: ThemeSelectorProps) => {
    const { theme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const themes = [
        { id: "default", name: "Default", icon: "☀️", description: "Clean & Minimal" },
        { id: "ironman", name: "Iron Man", icon: "🦾", description: "Stark Industries" },
    ] as const;

    const currentTheme = themes.find((t) => t.id === theme) || themes[0];

    const baseTextColor = isOnDarkSection ? "text-white" : "text-AATextSecondary";

    if (isMobile) {
        return (
            <div className="flex flex-col items-center space-y-3 mt-4 pt-4 border-t border-AATextMuted/30">
                <span className="text-sm text-AATextMuted font-medium">Theme</span>
                <div className="flex space-x-3">
                    {themes.map((t) => (
                        <button
                            key={t.id}
                            onClick={() => setTheme(t.id)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${theme === t.id
                                ? "bg-AAsecondary text-AAprimary"
                                : "bg-AASurface text-AATextMuted hover:bg-AAtertiary"
                                }`}
                        >
                            <span className="mr-2">{t.icon}</span>
                            {t.name}
                        </button>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <motion.div
            ref={dropdownRef}
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                type: "spring",
                duration: finishedLoading ? 0 : 0.6,
                delay: finishedLoading ? 0 : 1.7,
            }}
            className="relative"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-8 h-8 rounded-full border-2 border-white shadow-md transition-transform duration-300 hover:scale-110
                    ${theme === "ironman" ? "bg-gradient-to-br from-red-700 to-yellow-500" : "bg-gradient-to-br from-gray-100 to-gray-300"}`}
                aria-label="Select theme"
            >
            </button>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-40 rounded-xl overflow-hidden
              bg-AAprimary border border-AAsecondary/20 shadow-xl z-50 p-2"
                >
                    <div className="flex flex-col items-center space-y-2">
                        <span className="text-AATextPrimary font-bold font-sans text-xs tracking-wide">Themes</span>
                        <div className="flex flex-col space-y-1 w-full">
                            {themes.map((t) => {
                                // Define theme colors for the swatches
                                let bgColorClass = "bg-gray-200";
                                if (t.id === "ironman") {
                                    bgColorClass = "bg-gradient-to-br from-red-700 to-yellow-500";
                                } else if (t.id === "default") {
                                    bgColorClass = "bg-gradient-to-br from-gray-100 to-gray-300";
                                }

                                const isSelected = theme === t.id;

                                return (
                                    <button
                                        key={t.id}
                                        onClick={() => {
                                            setTheme(t.id);
                                            setTimeout(() => setIsOpen(false), 300);
                                        }}
                                        className={`w-full flex flex-row items-center space-x-3 p-2 rounded-lg transition-colors duration-200
                                            ${isSelected ? "bg-AAsecondary/10" : "hover:bg-AAtertiary"}
                                        `}
                                        aria-label={`Select ${t.name} theme`}
                                    >
                                        <div className={`relative w-8 h-8 rounded-full shadow-md flex items-center justify-center
                                            ${bgColorClass}
                                            ${isSelected ? "ring-2 ring-AAsecondary/30" : ""}
                                        `}>
                                            {isSelected && (
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    className="bg-white rounded-full p-0.5 shadow-sm"
                                                >
                                                    <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </motion.div>
                                            )}
                                        </div>
                                        <span className={`text-sm font-medium ${isSelected ? "text-AAsecondary" : "text-AATextMuted"}`}>
                                            {t.name}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            )}
        </motion.div>
    );
};

export default ThemeSelector;
