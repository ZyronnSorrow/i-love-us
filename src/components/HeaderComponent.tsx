import { Component } from 'solid-js';

import ThemeToggle from './ThemeToggle';
import { A } from '@solidjs/router';

const HeaderComponent: Component = () => {
    return (
        <header class="flex items-center justify-between p-4 bg-primary md:px-8">
            <h1>
                <A href="/">I Love Us.</A>
            </h1>
            <ThemeToggle />
        </header>
    );
}

export default HeaderComponent;
