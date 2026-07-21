import { Title } from '@solidjs/meta';
import type { Component } from 'solid-js';

const Home: Component = () => {
    return (
        <div class="flex flex-col flex-1">
            <Title>Home | I Love Us</Title>
            <h1>I Love Us.</h1>
            <h2>You*</h2>
            <h3>A Wholelottabunchaton!</h3>
        </div>
    );
}

export default Home;
