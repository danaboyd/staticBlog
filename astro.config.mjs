// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  redirects: {
      '/blog/page/': '/blog/page/1',
      '/blog/': '/blog/page/1'
    },
    experimental: {
      responsiveImages: true,
    },

  integrations: [mdx()]
});