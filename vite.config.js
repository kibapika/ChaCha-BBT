import { fileURLToPath, URL } from 'node:url'; // Correct import for Node.js

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// Resolve the directory path for aliasing
const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': `${__dirname}/src`, // Alias setup using resolved __dirname
    },
  },
});