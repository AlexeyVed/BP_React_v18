import { IAuthState } from './types'
import { signInThunk } from './thunks'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: IAuthState = {
  auth: null,
  error: ''
}

const usersSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthAction: (state, action: PayloadAction<boolean>) => {
      state.auth = action.payload
    }
  },
  // Async actions
  extraReducers: (builder) => {
    // signIn
    // builder.addCase(signInThunk.pending, (state, action) => {})
    builder.addCase(signInThunk.fulfilled, (state, action) => {
      state.auth = action.payload
    })
    builder.addCase(signInThunk.rejected, (state, action) => {
      state.error = action.payload
    })
  }
})

export const { setAuthAction } = usersSlice.actions
export default usersSlice.reducer
