import dotenv from 'dotenv'
import cors from 'cors'
import express from 'express'
import * as fs from 'fs'
import * as path from 'path'
import { createServer as createViteServer } from 'vite'
import type { ViteDevServer } from 'vite'

dotenv.config()

const isDev = process.env.NODE_ENV === 'development'

async function startServer() {
  const app = express()
  app.use(cors())

  const port = Number(process.env.SERVER_PORT) || 3001

  let vite: ViteDevServer
  const distPath = path.dirname(require.resolve('client/dist/index.html'))
  const srcPath = path.dirname(require.resolve('client'))

  if (isDev) {
    const variablesPath = path.resolve(srcPath, 'src/style/variables')

    vite = await createViteServer({
      server: { middlewareMode: true },
      root: srcPath,
      appType: 'custom',
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@import "${variablesPath}";`,
          },
        },
      },
    })

    app.use(vite.middlewares)
  }

  if (!isDev) {
    app.use('/assets', express.static(path.resolve(distPath, 'assets')))
    app.use('/sw.js', express.static(path.resolve(distPath, 'sw.js')))
  }

  app.get('/api', (_, res) => {
    res.json('👋 Howdy from the server :)')
  })

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl

    try {
      let template: string

      if (isDev) {
        template = fs.readFileSync(path.resolve(srcPath, 'index.html'), 'utf-8')
        template = await vite.transformIndexHtml(url, template)
      } else {
        template = fs.readFileSync(
          path.resolve(distPath, 'index.html'),
          'utf-8'
        )
      }

      let render: (ulr: string) => Promise<string>

      if (isDev) {
        const ssrPath = path.resolve(srcPath, 'ssr.tsx')
        render = (await vite.ssrLoadModule(ssrPath)).render
      } else {
        const ssrPath = require.resolve('client/ssr-dist/client.cjs')
        render = (await import(ssrPath)).render
      }

      const appHtml = await render(url)

      const html = template.replace(`<!--ssr-outlet-->`, appHtml)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      if (isDev) {
        vite.ssrFixStacktrace(e as Error)
      }
      next(e)
    }
  })

  app.listen(port, () => {
    console.log(`  ➜ 🎸 Server is listening on port: ${port}`)
  })
}

startServer()
