import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Theme = "default" | "ironman";

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setThemeState] = useState<Theme>("default");
    const [mounted, setMounted] = useState(false);

    // Load theme from localStorage on mount
    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem("theme") as Theme;
        if (savedTheme && (savedTheme === "default" || savedTheme === "ironman")) {
            setThemeState(savedTheme);
            document.documentElement.setAttribute("data-theme", savedTheme);
        }
    }, []);

    // Update localStorage and document attribute when theme changes
    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    const toggleTheme = () => {
        const newTheme = theme === "default" ? "ironman" : "default";
        setTheme(newTheme);
    };

    // Apply theme on initial render (after hydration)
    useEffect(() => {
        if (mounted) {
            document.documentElement.setAttribute("data-theme", theme);
        }
    }, [theme, mounted]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;
