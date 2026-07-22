import type { ParentComponent } from 'solid-js';

import { ThemeProvider } from '../context/ThemeContext';
import { HeaderComponent } from '../components/HeaderComponent';

const DefaultLayout: ParentComponent = (props) => {
    return (
        <ThemeProvider>
            <div class="flex flex-col h-screen max-h-screen w-screen max-w-screen bg-page-color text-text-color">
                <HeaderComponent />
                <main class="flex flex-col flex-1 min-h-0 overflow-y-auto w-full p-2 md:p-4">
                    {props.children}
                </main>
            </div>
        </ThemeProvider>
    );
}

export default DefaultLayout;
