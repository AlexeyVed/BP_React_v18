import axios, { AxiosRequestConfig } from 'axios'
import { authCallbacks } from '../store'
import { refreshTokenWithQueue } from '../utils/refreshToken'

// TODO LATER AXIOS INTERCEPTOR WITH QUEUE

type TAuthCallbacks = typeof authCallbacks
type SetupAxiosProps = (authCallbacks: TAuthCallbacks) => void

const setupAxiosInterceptors: SetupAxiosProps = (authCallbacks) => {
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL
  let loading = false
  let countRequest = 0

  // Middleware to valid requests. Add token to request
  const onRequestSuccess = (config: AxiosRequestConfig) => {
    countRequest++
    if (!loading) loading = true
    const tokenData = localStorage.getItem('token')
    const accessToken = tokenData && JSON.parse(tokenData)
    if (accessToken) {
      config.headers!.Authorization = `Bearer ${accessToken.token}`
    }
    return config
  }
  axios.interceptors.request.use(onRequestSuccess, void 0)

  const onResponseSuccess = (config: any) => {
    countRequest--
    if (!countRequest) {
      loading = false
    }
    return config
  }
  const onResponseFail = (error: any) => {
    const tokenData = localStorage.getItem('token')
    const accessToken = tokenData && JSON.parse(tokenData)
    countRequest--
    const originalRequest = error.config
    if (!countRequest) {
      loading = false
    }
    if (
      originalRequest &&
      error.response!.status === 401 &&
      !originalRequest._retry &&
      originalRequest.url !== '/auth/refresh' &&
      accessToken
    ) {
      return refreshTokenWithQueue(originalRequest, authCallbacks)
    }
    return Promise.reject(error)
  }
  axios.interceptors.response.use(onResponseSuccess, onResponseFail)
}

export default setupAxiosInterceptors
