import type { Component } from 'solid-js';
import { Title } from '@solidjs/meta';

import usImgUrl from '../assets/images/us.jpg';
import { SvgFramedImage } from '../components/SvgFramedImage';
import { HeartIcon } from '../components/icons/HeartIcon';

const Home: Component = () => {
    return (
        <div id="home" class="flex flex-col gap-2">
            <Title>Home | I Love Us</Title>
            <h1>I Love Us.</h1>
            <h2>You*</h2>
            <h3>A Wholelottabunchaton!</h3>
            <hr class="my-4" />
            <em class="text-center">Dedicated to the love of my life. My soulmate. My light. My universe.</em>
            <SvgFramedImage
                src={usImgUrl}
                alt="Chelsea and Kevin"
                strokeColor="var(--color-dark-purple)"
                strokeWidth={12}
                class="mx-auto"
            >
                <HeartIcon />
            </SvgFramedImage>
            <p class="text-center">
                I love you so much, Chelsea. So much, in fact, that I have written this
                little website from scratch for you to browse and enjoy.
            </p>
            <p class="text-center">
                It's nothing fancy, but I hope it brings you joy.
            </p>
        </div>
    );
}

export default Home;
