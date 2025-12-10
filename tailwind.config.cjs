/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    rotate: {
      "-180": "-180deg",
      "-90": "-90deg",
      "-45": "-45deg",
      0: "0",
      45: "45deg",
      90: "90deg",
      135: "135deg",
      180: "180deg",
      270: "270deg",
    },
    extend: {
      fontFamily: {
        Header: ["Inter", "Lato", "sans-serif"],
        Text2: ["Inter", "Lato", "sans-serif"],
        About: ["Playfair Display", "serif"],
        Arimo: ["Arimo", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(135deg, #ffffff 0%, #f5f5f7 25%, #fafafa 50%, #f5f5f7 75%, #ffffff 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.01) 100%)',
      },
      colors: {
        AAprimary: "var(--theme-primary)",           // Background color
        AAsecondary: "var(--theme-secondary)",       // Secondary/accent color
        AAAccent: "var(--theme-accent)",             // Main accent color
        AAError: "var(--theme-error)",               // Error/warning color
        AAtertiary: "var(--theme-tertiary)",         // Tertiary surface
        AASurface: "var(--theme-surface)",           // Card/surface color
        AATextPrimary: "var(--theme-text-primary)",  // Primary text
        AATextSecondary: "var(--theme-text-secondary)", // Secondary text
        AATextMuted: "var(--theme-text-muted)",      // Muted text
        ResumeButtonHover: "var(--theme-accent-hover)", // Button hover
        MobileNavBarColor: "var(--theme-primary)",   // Mobile navbar
        StartupBackground: "var(--theme-primary)",   // Startup background
        DotPattern: "var(--theme-dotted-bg)",        // Dotted pattern
        TextureOverlay: "var(--theme-surface)",      // Texture overlay
        // Theme-specific utility colors
        "theme-primary": "var(--theme-primary)",
        "theme-secondary": "var(--theme-secondary)",
        "theme-accent": "var(--theme-accent)",
        "theme-surface": "var(--theme-surface)",
        "theme-text-primary": "var(--theme-text-primary)",
        "theme-text-inverse": "var(--theme-text-inverse)",
        // Dark section colors (for Things I've Built)
        "dark-section-bg": "var(--theme-dark-section-bg)",
        "dark-section-text": "var(--theme-dark-section-text)",
        "dark-section-text-muted": "var(--theme-dark-section-text-muted)",
        "dark-section-text-highlight": "var(--theme-dark-section-text-highlight)",
        "dark-section-card": "var(--theme-dark-section-card-bg)",
        AANameIntro: "var(--theme-name-intro)",          // "The name is" text
        AAProjectTitle: "var(--theme-project-title)",
        AAProjectSubtitle: "var(--theme-project-subtitle)",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
        "3xl": "1920px",
        "4xl": "2560px",
        "5xl": "3840px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("tailwind-scrollbar-hide")],
  variants: {
    scrollbar: ["rounded"],
  },
};
