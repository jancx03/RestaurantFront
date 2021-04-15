/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src'),
      },
      {
        find: 'components',
        replacement: path.resolve(__dirname, './src/components'),
      },
      {
        find: 'public',
        replacement: path.resolve(__dirname, './public'),
      },
    ],
  },
  optimizeDeps: {
    include: ['lodash'],
  },
});
