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

const ThemeSelector = ({ finishedLoading, isOnDarkSection, isMobile, className }: ThemeSelectorProps) => {
  const { theme, setTheme } = useTheme();

  const themes = [
    { id: "default", name: "Default", gradient: "from-gray-100 to-gray-300", icon: "/theme/default.svg" },
    { id: "ironman", name: "Iron Man", gradient: "from-red-700 to-yellow-500", icon: "/theme/ironman.svg" },
    { id: "batman", name: "Batman", gradient: "from-[#ffffff] to-[#AE8875]", icon: "/theme/batman.svg" },
    { id: "spiderman", name: "Spiderman", gradient: "from-[#E72020] to-[#223057]", icon: "/theme/spiderman.svg" },
    { id: "drdoom", name: "Dr. Doom", gradient: "from-[#ffffff] to-[#00643D]", icon: "/theme/drdoom.svg" },
  ] as const;

  const renderThemeButton = (t: typeof themes[number], isSelected: boolean) => (
    <button
      key={t.id}
      onClick={() => setTheme(t.id)}
      className={`relative h-10 w-10 rounded-full border-2 transition-all duration-200 group
                  bg-gradient-to-br ${t.gradient}
                  ${isSelected
          ? "border-AAsecondary scale-110 z-20 shadow-lg"
          : "border-white hover:scale-105 hover:z-10 shadow-md"
        }
      `}
      aria-label={`Select ${t.name} theme`}
      title={t.name}
    >
      {t.icon && (
        <div className="absolute inset-0 flex items-center justify-center p-0.5 pointer-events-none">
          <img
            src={t.icon}
            alt=""
            className={`w-full h-full object-contain transition-opacity duration-300 ${isSelected ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'}`}
            style={{
              filter: t.id === 'ironman'
                ? 'brightness(0) saturate(100%) invert(84%) sepia(35%) saturate(2320%) hue-rotate(359deg) brightness(103%) contrast(106%)'
                : t.id === 'spiderman'
                  ? 'brightness(0) saturate(100%) invert(18%) sepia(88%) saturate(5412%) hue-rotate(355deg) brightness(93%) contrast(92%)'
                  : t.id === 'batman' ? 'brightness(0) opacity(0.7)' : 'none'
            }}
          />
        </div>
      )}
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
    return (
      <div className="flex flex-col items-center space-y-3 mt-4 pt-4 border-t border-AATextMuted/30 w-full">
        <span className="text-sm text-AATextMuted font-medium">Theme</span>
        <div className={`z-10 flex -space-x-3 rtl:space-x-reverse ${className || ""}`}>
          {themes.map((t) => renderThemeButton(t, theme === t.id))}
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
      {themes.map((t) => renderThemeButton(t, theme === t.id))}
    </motion.div>
  );
};

export default ThemeSelector;
