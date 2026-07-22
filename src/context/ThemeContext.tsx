import type { ParentComponent } from 'solid-js';
import { createContext, useContext, createSignal, onMount } from 'solid-js';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
    theme: () => ThemeMode;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>();

export const ThemeProvider: ParentComponent = (props) => {
    const [theme, setTheme] = createSignal<ThemeMode>('light');

    const applyTheme = (newTheme: ThemeMode) => {
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    }

    const toggleTheme = () => {
        const newTheme = theme() === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }

    onMount(() => {
        const savedTheme = localStorage.getItem('theme') as ThemeMode | null;
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const initialTheme = savedTheme || systemTheme;

        applyTheme(initialTheme);

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                applyTheme(e.matches ? 'dark' : 'light');
            }
        });
    });

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
