import App from './src/App'
import ReactDomServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'

export function render(url: string) {
  return ReactDomServer.renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  )
}
