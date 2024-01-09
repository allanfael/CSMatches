import axios from 'axios'

import ResponseError from './ResponseError'

export const api = axios.create({
  baseURL: 'https://api.pandascore.co/csgo/',
  timeout: 10000,
})

api.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${process.env.EXPO_PUBLIC_KEY}`
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

interface Params {
  data?: object
  config?: {
    headers?: object
  }
  url: string
}

export async function get<R>(data: Params) {
  try {
    const response = await api.get<R>(data.url, { ...data.config })

    return response.data
  } catch (error: AxiosError | unknown) {
    if (axios.isAxiosError(error)) throw new ResponseError(error)
    throw new Error()
  }
}
