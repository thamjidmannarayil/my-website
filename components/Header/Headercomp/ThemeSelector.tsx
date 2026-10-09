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
}> = [
  { id: "default", name: "Default" },
  { id: "ironman", name: "Iron Man" },
  { id: "batman", name: "Batman" },
  { id: "loki", name: "Loki" },
  { id: "spiderman", name: "Spider-Man" },
];

type ThemeItem = (typeof themes)[number];

const MinimalThemeGlyph = ({ theme }: { theme: Theme }) => {
  if (theme === "ironman") {
    return (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 7.5L16 14.5H8L12 7.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    );
  }

  if (theme === "batman") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
        <path d="M3.5 8.5L8.2 10L10 7.5L12 10L14 7.5L15.8 10L20.5 8.5C19.4 13.4 16.5 16.2 12 17.5C7.5 16.2 4.6 13.4 3.5 8.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    );
  }

  if (theme === "loki") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
        <path d="M8.5 17V10C6 8.5 5 5.5 5.5 3C8.2 5.1 9.5 7.1 10 9H14C14.5 7.1 15.8 5.1 18.5 3C19 5.5 18 8.5 15.5 10V17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.5 14H15.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }

  if (theme === "spiderman") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
        <path d="M12 3C7.5 4.5 5 8 5.5 12.5C6 17 8.6 20 12 21C15.4 20 18 17 18.5 12.5C19 8 16.5 4.5 12 3Z" stroke="currentColor" strokeWidth="1.35" />
        <path d="M8 10L10.5 12L8.5 14M16 10L13.5 12L15.5 14M12 4V20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12 5V19" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12 5A7 7 0 0 1 12 19" fill="currentColor" opacity="0.18" />
    </svg>
  );
};

const ThemeIcon = ({ item, selected = false }: { item: ThemeItem; selected?: boolean }) => (
  <span
    className={`relative flex h-7 w-7 flex-none items-center justify-center rounded-full transition-colors ${
      selected ? "bg-AASurface/55 text-AATextPrimary" : "text-AATextMuted"
    }`}
  >
    <MinimalThemeGlyph theme={item.id} />
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
