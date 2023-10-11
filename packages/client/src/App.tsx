import { useEffect } from 'react'
import { Router } from './Router'
import { startServiceWorker } from './startSW'
import './App.css'
import { Provider } from 'react-redux'
import { Store } from './store'

function App(prop: { store: Store }) {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      startServiceWorker()
    }
  }, [])

  return (
    <div className="App">
      <Provider store={prop.store}>
        <Router />
      </Provider>
    </div>
  )
}

export default App
