import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import node from '@astrojs/node';

export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'static',
  adapter: node({ mode: 'server' }),
  site: 'https://prom1se.cn',
  vite: {
    ssr: {
      noExternal: ['marked'],
    },
  },
});
