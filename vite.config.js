import {defineConfig} from 'vite';

import vue from '@vitejs/plugin-vue';

import path from 'path';


// https://vitejs.dev/config/

export default defineConfig({

  plugins: [vue()],
  // alias: {
  //   '/@/': './src',
  // },
  resolve: {
    alias: [
      {
        find: 'src',
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

