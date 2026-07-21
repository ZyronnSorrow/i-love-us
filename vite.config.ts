import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import devtools from 'solid-devtools/vite';

export default defineConfig({
  plugins: [devtools(), solidPlugin(), tailwindcss()],
  base: 'https://github.com/ZyronnSorrow/i-love-us',
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
