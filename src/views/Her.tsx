import type { Component } from 'solid-js';
import { Title } from '@solidjs/meta';

import { Carousel } from '../components/CarouselComponent';
import { chelseaGallery } from '../data/Gallery';

const Her: Component = () => {
    return (
        <div id="her" class="flex flex-col gap-2">
            <Title>Her | I Love Us</Title>
            <h1>Her.</h1>
            <hr class="my-4" />
            <h2 class="self-center">She's so lovely!</h2>
            <Carousel items={chelseaGallery} class="self-center mt-4 h-108" />
        </div>
    );
}

export default Her;
