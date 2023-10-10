import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import storage from 'redux-persist/lib/storage'
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

declare global {
  interface Window {
    localSsrStorage: object
  }
}

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, userReducer)

export function createStore() {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
    preloadedState:
      typeof window !== 'undefined' ? window?.localSsrStorage : undefined,
  })

  const persistor = persistStore(store)

  return {
    store,
    persistor,
  }
}

export type Store = ReturnType<typeof createStore>['store']

export type RootState = ReturnType<Store['getState']>
export type AppDispatch = Store['dispatch']
