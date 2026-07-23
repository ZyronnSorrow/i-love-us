import type { Component } from 'solid-js';

import { ThemeToggle } from './ThemeToggle';
import { A } from '@solidjs/router';
import { NavbarComponent } from './NavbarComponent';
import usHpImgUrl from '../assets/images/us_hp.jpeg';

export const HeaderComponent: Component = () => {
    return (
        <header class="flex items-center py-2 px-4 bg-primary gap-4 md:gap-8">
            <A href="/" class="flex items-center gap-2">
                <img
                    src={usHpImgUrl}
                    alt="Kevin and Chelsea Harry Potter"
                    class="h-16 w-16 object-contain"
                />
                <h1>I Love Us.</h1>
            </A>
            <NavbarComponent class="flex-1" />
            <ThemeToggle />
        </header>
    );
};
