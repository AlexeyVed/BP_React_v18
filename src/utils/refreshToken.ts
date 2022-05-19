import axios from 'axios'
import { isFulfilled } from '@reduxjs/toolkit'

// TODO
let isRefreshing = false
let failedQueue: any = []

const processQueue = (error: any) => {
  failedQueue.forEach((req: any) => {
    error ? req.reject(error) : req.resolve()
  })
  failedQueue = []
}

export const refreshTokenWithQueue = (originalRequest: any, authCallbacks: any) => {
  if (isRefreshing) {
    return new Promise((resolve, reject) => {
      failedQueue.push({ resolve, reject })
    })
      .then(() => {
        return axios(originalRequest)
      })
      .catch((err) => {
        return err
      })
  }
  originalRequest._retry = true
  isRefreshing = true

  return new Promise(async (resolve, reject) => {
    const refreshingResult = await authCallbacks.refreshToken()
    if (isFulfilled(refreshingResult)) {
      axios(originalRequest).then(resolve, reject)
      processQueue(null)
    } else {
      authCallbacks.appLogOut()
      processQueue(refreshingResult.payload.error)
      reject(refreshingResult.payload.error)
    }
    isRefreshing = false
  })
}
