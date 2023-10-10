import App from './src/App'
import ReactDomServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { createStore } from './src/store'
import { IUser, addUser } from './src/store/slices/userSlice'

export function render(url: string, user: IUser | null) {
  const { store } = createStore()

  if (user) {
    store.dispatch(addUser(user))
  }
  console.log(store.getState())

  return ReactDomServer.renderToString(
    <StaticRouter location={url}>
      <App store={store} />
      <script
        lang="javascript"
        dangerouslySetInnerHTML={{
          __html: `
        window.localSsrStorage = JSON.parse(\`${JSON.stringify(
          store.getState()
        )}\`)
        console.log(window.localSsrStorage);
        `,
        }}></script>
    </StaticRouter>
  )
}
