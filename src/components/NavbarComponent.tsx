import type { Component, JSX } from 'solid-js';
import { createSignal, For, Show } from 'solid-js';
import { A } from '@solidjs/router';

import { routes } from '../data/Routes';
import { CloseIcon } from './icons/CloseIcon';
import { MobileMenuIcon } from './icons/MobileMenuIcon';

export const NavbarComponent: Component<JSX.HTMLAttributes<HTMLElement>> = (props) => {
    const [isMenuOpen, setIsMenuOpen] = createSignal(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen());
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav
            {...props}
            class={`w-full flex justify-end md:justify-start ${props.class || ''}`}
        >
            {/* Desktop navigation */}
            <div class="hidden md:flex items-center">
                <For each={routes}>
                    {(route) => (
                        <A
                            href={route.path}
                            class="p-2 w-32 text-center cursor-pointer hover:bg-black/25"
                            activeClass="font-bold bg-black/25"
                            end={true}
                        >
                            {route.label}
                        </A>
                    )}
                </For>
            </div>
            {/* Mobile navigation */}
            <div class="flex items-center md:hidden">
                <button
                    onClick={toggleMenu}
                    type="button"
                    aria-expanded={isMenuOpen()}
                    aria-label="Toggle navigation menu"
                    class="p-2 rounded-lg cursor-pointer hover:bg-black/25"
                    classList={{ "bg-black/25": isMenuOpen() }}
                >
                    {/* Mobile menu icons */}
                    <Show when={isMenuOpen()}>
                        <CloseIcon class="size-6" />
                    </Show>
                    <Show when={!isMenuOpen()}>
                        <MobileMenuIcon class="size-6" />
                    </Show>
                </button>
            </div>
            {/* Mobile menu drawer */}
            <div
                class={`md:hidden absolute top-16 right-0 flex flex-col w-48 bg-primary
                ${isMenuOpen() ? 'visible' : 'invisible pointer-events-none'}`}
            >
                <For each={routes}>
                    {(route) => (
                        <A
                            href={route.path}
                            class="p-4 cursor-pointer hover:bg-black/25"
                            activeClass="font-bold bg-black/25"
                            end={true}
                            onClick={closeMenu}
                        >
                            {route.label}
                        </A>
                    )}
                </For>
            </div>
        </nav>
    );
};
