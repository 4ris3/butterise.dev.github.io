// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Production configuration for GitHub Pages
export default defineConfig({
  integrations: [tailwind()],
  base: '/butterise.dev.github.io',
  outDir: './dist',
  build: {
    assets: 'assets'
  }
});
