import { createSignal } from 'solid-js';

export type ThemeMode = 'light' | 'dark';

export const [theme, setTheme] = createSignal<ThemeMode>('light');

export const toggleTheme = () => {
    setTheme(current => current === 'light' ? 'dark' : 'light');
};
