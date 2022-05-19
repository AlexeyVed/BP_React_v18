import { createAsyncThunk } from '@reduxjs/toolkit'
import { TSignInResponse } from './types'

const mockAuth = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(true)
  }, 500)
})

export const signInThunk = createAsyncThunk(
  'auth/signInThunk',
  async (data, { rejectWithValue }) => {
    try {
      // const responseSignIn: AxiosResponse<TSignInResponse> = await axios.post(`/auth/signin`, data)
      const responseSignIn = await mockAuth() as TSignInResponse
      return responseSignIn
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)

export const mockRefreshTokenThunk = createAsyncThunk(
  'auth/mockRefreshTokenThunk',
  async (data, { rejectWithValue }) => true
)