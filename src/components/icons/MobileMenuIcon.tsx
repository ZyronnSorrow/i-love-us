import type { Component, JSX } from 'solid-js';

export const MobileMenuIcon: Component<JSX.HTMLAttributes<SVGSVGElement>> = (props) => {
    return (
        <svg
            {...props}
            viewBox="0 0 24 24"
            fill="currentColor"
            color="currentColor"
            height="100%"
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
        </svg>
    );
};
