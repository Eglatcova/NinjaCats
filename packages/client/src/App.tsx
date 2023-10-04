import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { clientRouter } from './router'
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
        <PersistGate loading={null} persistor={persistor}>
          {clientRouter && <RouterProvider router={clientRouter} />}
        </PersistGate>
      </Provider>
    </div>
  )
}

export default App
