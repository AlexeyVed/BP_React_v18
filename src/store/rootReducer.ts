import { combineReducers } from '@reduxjs/toolkit'

import auth from './auth/slice'

const RootReducer = () =>
  combineReducers({
    auth,
  })

export default RootReducer
