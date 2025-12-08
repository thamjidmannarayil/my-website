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
                className={`${baseTextColor} flex items-center space-x-2 px-3 py-2 rounded-lg 
          hover:bg-theme-surface/50 transition-all duration-300 backdrop-blur-sm
          border border-transparent hover:border-theme-accent/20`}
                aria-label="Select theme"
            >
                <span className="text-lg">{currentTheme.icon}</span>
                <svg
                    className={`w-3 h-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-48 rounded-xl overflow-hidden
              bg-AAprimary/95 backdrop-blur-lg shadow-xl border border-AATextMuted/20
              z-50"
                >
                    <div className="p-1">
                        {themes.map((t) => (
                            <button
                                key={t.id}
                                onClick={() => {
                                    setTheme(t.id);
                                    setIsOpen(false);
                                }}
                                className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg
                    transition-all duration-200 text-left
                    ${theme === t.id
                                        ? "bg-gradient-to-r from-AAsecondary/20 to-AAsecondary/10 text-AAsecondary"
                                        : "hover:bg-AASurface text-AATextMuted"
                                    }`}
                            >
                                <span className="text-xl">{t.icon}</span>
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium">{t.name}</span>
                                    <span className="text-xs text-AATextMuted">{t.description}</span>
                                </div>
                                {theme === t.id && (
                                    <motion.div
                                        layoutId="activeTheme"
                                        className="ml-auto"
                                    >
                                        <svg className="w-4 h-4 text-AAsecondary" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </motion.div>
                                )}
                            </button>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.div>
    );
};

export default ThemeSelector;
