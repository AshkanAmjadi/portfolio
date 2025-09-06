// @ts-check
import {defineConfig} from 'astro/config';
import react from '@astrojs/react';
// import tailwindcss from '@tailwindcss/vite'; //tailwind 4
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({

    site: 'https://ashkanamjadi.github.io',
    base : '/portfolio',
    integrations: [react(),tailwind()],
    devToolbar : {
      enabled : false
    },


});