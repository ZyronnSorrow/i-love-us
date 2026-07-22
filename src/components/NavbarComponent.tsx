import type { Component } from 'solid-js';
import { createSignal, For, Show } from 'solid-js';
import { A } from '@solidjs/router';

import { routes } from '../data/Routes';
import { CloseIcon } from './icons/CloseIcon';
import { MobileMenuIcon } from './icons/MobileMenuIcon';

export const NavbarComponent: Component = () => {
    const [isMenuOpen, setIsMenuOpen] = createSignal(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen());
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav>
            {/* Desktop navigation */}
            <div class="hidden md:flex items-center gap-6">
                <For each={routes}>
                    {(route) => (
                        <A
                            href={route.path}
                            class="font-semibold text-sm cursor-pointer hover:underline"
                            activeClass="font-bold"
                        >
                            {route.label}
                        </A>
                    )}
                </For>
            </div>
            {/* Mobile navigation */}
            <div class="flex items-center gap-3 md:hidden">
                <button
                    onClick={toggleMenu}
                    type="button"
                    aria-expanded={isMenuOpen()}
                    aria-label="Toggle navigation menu"
                    class="p-2 rounded-lg cursor-pointer"
                >
                    {/* Mobile menu icons */}
                    <Show when={isMenuOpen()}>
                        <CloseIcon class="w-6 h-6" />
                    </Show>
                    <Show when={!isMenuOpen()}>
                        <MobileMenuIcon class="w-6 h-6" />
                    </Show>
                </button>
            </div>
            {/* Mobile menu drawer */}
            <div
                class={`md:hidden absolute top-16 left-0 w-full
                ${isMenuOpen() ? 'opacity-100 translate-y-0 visible' :
                        'opacity-0 -translate-y-4 invisible pointer-events-none'}`}
            >
                <For each={routes}>
                    {(route) => (
                        <A
                            href={route.path}
                            class="py-2 px-4 font-semibold cursor-pointer hover:bg-gray-100"
                            activeClass="font-bold bg-gray-200"
                            end={true}
                        >
                            {route.label}
                        </A>
                    )}
                </For>
            </div>
        </nav>
    );
};
