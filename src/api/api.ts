import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { storage } from '../helpers'
import queryString from 'query-string'

const api = axios.create({
  baseURL: 'https://giupviecbe.patitek.com/api/app/customer',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*',
  },
  paramsSerializer: params => queryString.stringify(params),
})

api.interceptors.request.use(async (config: AxiosRequestConfig) => {
  try {
    const token = await storage.get('token')
    token && config.headers && (config.headers['Authorization'] = `Bearer ${token}`)
  } catch (error) {}
  return config
})

api.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    return response.data.data || response.data || response
  },
  err => {
    const { config, data, request, status } = err.response
    console.log({
      config: {
        baseURL: config.baseURL,
        data: config.data ? JSON.parse(config.data) : undefined,
        headers: config.headers,
        method: config.method,
        url: config.url,
      },
      data,
      status,
    })
    if (err.response.data.error.message) {
      throw err.response.data.error.message
    }
    throw err.response.data.error
  }
)

export default api
