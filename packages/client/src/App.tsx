import { useEffect } from 'react'
import { Router } from './Router'
import { startServiceWorker } from './startSW'
import './App.css'
import { Provider } from 'react-redux'
import { persistor, store } from './store'
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      startServiceWorker()
    }
  }, [])

  return (
    <div className="App">
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  )
}

export default App
