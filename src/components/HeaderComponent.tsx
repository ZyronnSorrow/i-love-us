import type { Component } from 'solid-js';

import { ThemeToggle } from './ThemeToggle';
import { A } from '@solidjs/router';
import { NavbarComponent } from './NavbarComponent';

export const HeaderComponent: Component = () => {
    return (
        <header class="flex items-center py-2 px-4 bg-primary gap-4 md:gap-8">
            <h1>
                <A href="/">I Love Us.</A>
            </h1>
            <NavbarComponent class="flex-1" />
            <ThemeToggle />
        </header>
    );
};
