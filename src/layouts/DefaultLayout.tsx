import { createEffect, type ParentComponent } from 'solid-js';

import { theme } from '../context/ThemeContext';
import HeaderComponent from '../components/HeaderComponent';

const DefaultLayout: ParentComponent = (props) => {
    createEffect(() => {
        document.documentElement.setAttribute('data-theme', theme());
    });

    return (
        <div class="flex flex-col h-screen max-h-screen w-screen max-w-screen bg-page-color text-text-color">
            <HeaderComponent />
            <main class="flex flex-col flex-1 min-h-0 overflow-y-auto w-full p-2 md:p-4">
                {props.children}
            </main>
        </div>
    );
}

export default DefaultLayout;