"use client"

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../AppContextFolder/ThemeContext";

interface ThemeSelectorProps {
  finishedLoading: boolean;
  isOnDarkSection?: boolean;
  isMobile?: boolean;
  className?: string;
}

const ThemeSelectorNew = ({ finishedLoading, isOnDarkSection, isMobile, className }: ThemeSelectorProps) => {
  const { theme, setTheme } = useTheme();

  const themes = [
    { id: "default", name: "Default", gradient: "from-gray-100 to-gray-300" },
    { id: "ironman", name: "Iron Man", gradient: "from-red-700 to-yellow-500" },
    { id: "batman", name: "Batman", gradient: "from-[#ffffff] to-[#AE8875]" },
    { id: "drdoom", name: "Dr. Doom", gradient: "from-[#ffffff] to-[#00643D]" },
  ] as const;

  if (isMobile) {
    return (
      <div className="flex flex-col items-center space-y-3 mt-4 pt-4 border-t border-AATextMuted/30 w-full">
        <span className="text-sm text-AATextMuted font-medium">Theme</span>
        <div className={`z-10 flex -space-x-3 rtl:space-x-reverse ${className || ""}`}>
          {themes.map((t) => {
            const isSelected = theme === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTheme(t.id)}
                className={`relative h-10 w-10 rounded-full border-2 transition-all duration-200
                                    bg-gradient-to-br ${t.gradient}
                                    ${isSelected
                    ? "border-AAsecondary scale-110 z-20 shadow-lg"
                    : "border-white hover:scale-105 hover:z-10 shadow-md"
                  }
                                `}
                aria-label={`Select ${t.name} theme`}
                title={t.name}
              >
                {isSelected && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white rounded-full p-0.5 shadow-sm">
                      <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        duration: finishedLoading ? 0 : 0.6,
        delay: finishedLoading ? 0 : 1.7,
      }}
      className={`z-10 flex -space-x-3 rtl:space-x-reverse ${className || ""}`}
    >
      {themes.map((t) => {
        const isSelected = theme === t.id;
        return (
          <button
            key={t.id}
            onClick={() => setTheme(t.id)}
            className={`relative h-10 w-10 rounded-full border-2 transition-all duration-200
                            bg-gradient-to-br ${t.gradient}
                            ${isSelected
                ? "border-AAsecondary scale-110 z-20 shadow-lg"
                : "border-white hover:scale-105 hover:z-10 shadow-md"
              }
                        `}
            aria-label={`Select ${t.name} theme`}
            title={t.name}
          >
            {isSelected && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-white rounded-full p-0.5 shadow-sm">
                  <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </motion.div>
            )}
          </button>
        );
      })}
    </motion.div>
  );
};

export default ThemeSelectorNew;
