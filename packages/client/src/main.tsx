import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './style/index.scss'
import { persistor } from './store'

persistor.subscribe(() => {
  const { bootstrapped } = persistor.getState()

  if (bootstrapped) {
    ReactDOM.hydrateRoot(
      document.getElementById('root') as HTMLElement,
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
  }
})
