import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Theme = "default" | "ironman" | "batman" | "loki" | "spiderman";

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
        const storedTheme = localStorage.getItem("theme");
        const savedTheme = storedTheme === "drdoom" ? "loki" : storedTheme;
        if (savedTheme && ["default", "ironman", "batman", "loki", "spiderman"].includes(savedTheme)) {
            const validTheme = savedTheme as Theme;
            setThemeState(validTheme);
            localStorage.setItem("theme", validTheme);
            document.documentElement.setAttribute("data-theme", validTheme);
        }
    }, []);

    // Update localStorage and document attribute when theme changes
    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    const toggleTheme = () => {
        const nextTheme = theme === "default" ? "ironman" : theme === "ironman" ? "batman" : theme === "batman" ? "loki" : theme === "loki" ? "spiderman" : "default";
        setTheme(nextTheme);
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
