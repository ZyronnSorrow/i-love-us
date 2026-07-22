import { Component, JSX, Show } from 'solid-js';

import { theme, toggleTheme } from '../context/ThemeContext';
import SunIcon from './icons/SunIcon';
import MoonIcon from './icons/MoonIcon';

const ThemeToggle: Component<JSX.HTMLAttributes<HTMLButtonElement>> = (props) => {
    return (
        <button
            {...props}
            onClick={toggleTheme}
            type="button"
            aria-label={`Switch to ${theme() === 'light' ? 'dark' : 'light'} mode`}
            class="p-2 rounded-lg cursor-pointer bg-secondary"
        >
            <Show when={theme() === 'light'}>
                <MoonIcon class="shrink-0 w-6 h-6" />
            </Show>
            <Show when={theme() === 'dark'}>
                <SunIcon class="shrink-0 w-6 h-6" />
            </Show>
        </button>
    );
}

export default ThemeToggle;