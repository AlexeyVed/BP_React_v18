import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import Router from './router'

import setupAxiosInterceptors from './middlewares/setupAxios'
import { store, authCallbacks } from './store'

import './assets/styles/App.scss'

setupAxiosInterceptors(authCallbacks)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);
