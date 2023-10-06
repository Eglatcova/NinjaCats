import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, path.resolve('../../'), '')
  return {
    server: {
      port: Number(env.CLIENT_PORT) || 3000,
    },
    define: {
      __SERVER_PORT__: env.SERVER_PORT,
      __REDIRECT_URI__: JSON.stringify(env.REDIRECT_URI),
    },
    plugins: [svgr(), react()],

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/style/variables";`,
        },
      },
      modules: {
        localsConvention: 'dashesOnly',
      },
    },
  }
})
