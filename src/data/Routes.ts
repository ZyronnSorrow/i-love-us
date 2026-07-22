import type { Component } from 'solid-js';

import Home from '../views/Home';
import Her from '../views/Her';

export type Route = {
    label: string;
    path: string;
    component: Component;
};

export const routes: Route[] = [
    { label: "Home", path: "/", component: Home },
    { label: "Her", path: "/her", component: Her },
];
