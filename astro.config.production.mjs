// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Production configuration for GitHub Pages
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://4ris3.github.io',
  base: '/butterise.dev.github.io',
  outDir: './dist',
  build: {
    assets: 'assets'
  }
});
