import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import svgr from 'vite-plugin-svgr'
import * as path from 'path'

dotenv.config()

export default defineConfig({
  plugins: [svgr(), react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/style/variables";`,
      },
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'ssr.tsx'),
      name: 'Client',
      formats: ['cjs'],
    },
    rollupOptions: {
      output: {
        dir: 'ssr-dist',
      },
    },
  },
})
