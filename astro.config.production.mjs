// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Production configuration for GitHub Pages
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://yourusername.github.io',
  base: '/butterise.dev'
});
