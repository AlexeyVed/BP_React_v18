import { configureStore } from '@reduxjs/toolkit'
import { useSelector as useDefaultSelector, createStoreHook, TypedUseSelectorHook, useDispatch as DispatchHook } from 'react-redux'

import RootReducer from './rootReducer'

export const store = configureStore({
  reducer: RootReducer(),
  devTools: process.env.NODE_ENV === 'development'
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useSelector: TypedUseSelectorHook<RootState> = useDefaultSelector
export const useStore = createStoreHook<RootState>()
export const useDispatch = () => DispatchHook<AppDispatch>()

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    const newRootReducer = require('./rootReducer').default
    newRootReducer()
    store.replaceReducer(newRootReducer)
  })
}
