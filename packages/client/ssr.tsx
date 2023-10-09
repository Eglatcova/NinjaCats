import App from './src/App'
import { Provider } from 'react-redux'
import ReactDomServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { store, persistor } from './src/store'
import { addUser } from './src/store/slices/userSlice'

export function render(url: string) {
  store.dispatch(
    addUser({
      value: 'asdf',
    })
  )
  console.log(store.getState())

  return ReactDomServer.renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  )
}
