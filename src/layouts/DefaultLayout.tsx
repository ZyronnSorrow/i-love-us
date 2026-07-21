import type { ParentComponent } from 'solid-js';

const DefaultLayout: ParentComponent = (props) => {
    return (
        <div class="flex flex-col h-screen max-h-screen w-screen max-w-screen">
            <main class="flex flex-1 p-2 md:p-4">
                {props.children}
            </main>
        </div>
    );
}

export default DefaultLayout;