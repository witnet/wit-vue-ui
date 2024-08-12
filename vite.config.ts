import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'wit-vue-ui',
      fileName: (format) => `wit-vue-ui.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  // css: {
  //   postcss: './postcss.config.js',
  //   preprocessorOptions: {
  //     css: {
  //       additionalData: '@import "@/assets/style.css";', // Globally load main.css
  //     }
  //   }
  // }
})
