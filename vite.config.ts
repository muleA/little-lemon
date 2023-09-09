// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@components': resolve(__dirname, 'src/components'),
      '@libs/utils': resolve(__dirname, 'src/libs/utils'),
      '@styles': resolve(__dirname, 'src/styles')
    }
  }
});
