"use client"

import React from "react";
import { motion } from "framer-motion";
import { Theme, useTheme } from "../../AppContextFolder/ThemeContext";

interface ThemeSelectorProps {
  finishedLoading: boolean;
  isOnDarkSection?: boolean;
  isMobile?: boolean;
  className?: string;
}

const themes: ReadonlyArray<{
  id: Theme;
  name: string;
  icon: string;
}> = [
  { id: "default", name: "Default", icon: "/theme-icons/default.svg" },
  { id: "ironman", name: "Iron Man", icon: "/theme-icons/ironman.svg" },
  { id: "batman", name: "Batman", icon: "/theme-icons/batman.svg" },
  { id: "loki", name: "Loki", icon: "/theme-icons/loki.svg" },
  { id: "spiderman", name: "Spider-Man", icon: "/theme-icons/spiderman.svg" },
];

type ThemeItem = (typeof themes)[number];

const ThemeIcon = ({ item, selected = false }: { item: ThemeItem; selected?: boolean }) => (
  <span
    className={`relative flex h-7 w-7 flex-none items-center justify-center rounded-full transition-colors ${
      selected ? "bg-AASurface/55 text-AATextPrimary" : "text-AATextMuted"
    }`}
  >
    <span
      className="h-4 w-4 bg-current"
      aria-hidden="true"
      style={{
        WebkitMaskImage: `url(${item.icon})`,
        maskImage: `url(${item.icon})`,
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  </span>
);

const ThemeSelector = ({ finishedLoading, isMobile, className }: ThemeSelectorProps) => {
  const { theme, setTheme } = useTheme();
  const currentTheme = themes.find(item => item.id === theme) ?? themes[0];

  if (isMobile) {
    return (
      <div className="mt-4 w-full">
        <div className="mb-2 flex items-center justify-between px-1">
          <span className="font-Text2 text-[10px] font-semibold uppercase tracking-[0.2em] text-AATextMuted">Theme</span>
          <span className="font-Text2 text-[10px] text-AATextMuted">{currentTheme.name}</span>
        </div>
        <div
          className={`theme-selector-rail liquid-glass liquid-glass--compact flex items-center justify-between p-1 opacity-65 ${className || ""}`}
          role="radiogroup"
          aria-label="Choose a theme"
        >
          {themes.map(item => {
            const selected = theme === item.id;
            return (
              <button
                key={item.id}
                type="button"
                role="radio"
                aria-checked={selected}
                aria-label={`Use ${item.name} theme`}
                title={item.name}
                onClick={() => setTheme(item.id)}
                className={`relative flex min-h-[2.5rem] min-w-[2.5rem] items-center justify-center rounded-full transition-opacity focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-AAsecondary ${
                  selected ? "opacity-100" : "opacity-50 hover:opacity-90"
                }`}
              >
                <ThemeIcon item={item} selected={selected} />
                {selected && (
                  <span className="absolute bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-AAsecondary" />
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
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        duration: finishedLoading ? 0 : 0.6,
        delay: finishedLoading ? 0 : 1.7,
      }}
      className={`relative z-30 ${className || ""}`}
      role="radiogroup"
      aria-label="Choose a theme"
    >
      <div className="theme-selector-rail liquid-glass liquid-glass--compact flex items-center gap-0 p-0.5 opacity-40 transition-opacity duration-300 hover:opacity-90 focus-within:opacity-100">
        {themes.map(item => {
          const selected = theme === item.id;
          return (
            <button
              key={item.id}
              type="button"
              role="radio"
              aria-checked={selected}
              aria-label={`Use ${item.name} theme`}
              title={item.name}
              onClick={() => setTheme(item.id)}
              className={`group relative rounded-full p-0.5 transition duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-AAsecondary ${
                selected ? "z-10 opacity-90" : "opacity-55 hover:opacity-100"
              }`}
            >
              <ThemeIcon item={item} selected={selected} />
              <span className="pointer-events-none absolute left-1/2 top-[calc(100%+0.65rem)] -translate-x-1/2 whitespace-nowrap rounded-md bg-AATextPrimary px-2 py-1 font-Text2 text-[10px] font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                {item.name}
              </span>
              {selected && <span className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-AAsecondary" />}
            </button>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ThemeSelector;
