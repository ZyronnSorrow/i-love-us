import type { Component, JSX } from 'solid-js';
import type { GalleryItem } from '../data/Gallery';
import { splitProps, createSignal, Show } from 'solid-js';

type CarouselProps = JSX.HTMLAttributes<HTMLDivElement> & {
    items: GalleryItem[];
};

export const Carousel: Component<CarouselProps> = (props) => {
    const [localProps, parentProps] = splitProps(props, ['items', 'class']);

    const getRandomImageIndex = () => Math.floor(Math.random() * localProps.items.length);
    const [currentImageIndex, setCurrentImageIndex] = createSignal(getRandomImageIndex());
    const currentItem = () => localProps.items[currentImageIndex()];

    const handleNext = () => {
        setCurrentImageIndex((prev) => (prev + 1) % localProps.items.length);
    };
    const handlePrevious = () => {
        setCurrentImageIndex((prev) => (prev - 1 + localProps.items.length) % localProps.items.length);
    };

    return (
        <div
            {...parentProps}
            class={`flex flex-col items-center justify-center w-full max-w-sm md:max-w-md ${localProps.class || ''}`}
        >
            {/* Image carousel */}
            <div class="w-full flex items-center justify-center relative group overflow-hidden">
                <img
                    src={currentItem()?.src}
                    alt={currentItem()?.alt}
                    class="w-full h-full object-contain origin-center"
                />
            </div>
            {/* Image caption */}
            <div class="text-center mt-4 min-h-8 px-4">
                <Show when={currentItem()?.caption}>
                    <p class="italic">{currentItem().caption}</p>
                </Show>
            </div>
            {/* Carousel navigation */}
            <div class="flex items-center gap-6 mt-4 w-full justify-center">
                <button
                    class="px-4 text-2xl rounded-full bg-primary cursor-pointer shadow-sm"
                    aria-label="Previous image"
                    onClick={handlePrevious}
                >
                    &#8249; {/* < */}
                </button>
                <span class="text-sm font-semibold tracking-wider tabular-nums">
                    {currentImageIndex() + 1} / {localProps.items.length}
                </span>
                <button
                    class="px-4 text-2xl rounded-full bg-primary cursor-pointer shadow-sm"
                    aria-label="Next image"
                    onClick={handleNext}
                >
                    &#8250; {/* > */}
                </button>
            </div>
        </div>
    );
};
