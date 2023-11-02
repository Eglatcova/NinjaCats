import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import * as path from 'path'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, path.resolve('../../'), '')

  return {
    define: {
      __REDIRECT_URI__: JSON.stringify(env.REDIRECT_URI),
    },
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
  }
})
