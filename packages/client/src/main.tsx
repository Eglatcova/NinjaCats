import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './style/index.scss'
import { createStore } from './store'

const { persistor, store } = createStore()

persistor.subscribe(() => {
  const { bootstrapped } = persistor.getState()

  if (bootstrapped) {
    ReactDOM.hydrateRoot(
      document.getElementById('root') as HTMLElement,
      <BrowserRouter>
        <App store={store} />
      </BrowserRouter>
    )
  }
})
