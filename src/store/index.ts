import { configureStore } from '@reduxjs/toolkit'
import { createSelectorHook, createStoreHook, useDispatch as DispatchHook } from 'react-redux'
// import logger from 'redux-logger'

import RootReducer from './rootReducer'

export const store = configureStore({
  reducer: RootReducer(),
  devTools: process.env.NODE_ENV === 'development'
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// export const useSelector = createSelectorHook<RootState>()
export const useStore = createStoreHook<RootState>()
export const useDispatch = () => DispatchHook<AppDispatch>()

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    const newRootReducer = require('./rootReducer').default
    newRootReducer()
    store.replaceReducer(newRootReducer)
  })
}
