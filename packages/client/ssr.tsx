import App from './src/App'
import ReactDomServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { createStore } from './src/store'
import { IUser, addUser } from './src/store/slices/userSlice'

export function render(
  url: string,
  user: IUser | null,
  callback: (state: object) => void
) {
  const { store } = createStore()
  // redux-outlet
  if (user) {
    store.dispatch(addUser(user))
  }
  callback(store.getState())

  return ReactDomServer.renderToString(
    <StaticRouter location={url}>
      <App store={store} />
    </StaticRouter>
  )
}
