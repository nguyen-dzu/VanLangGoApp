import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import queryString from 'query-string'
import { useDispatch } from 'react-redux'
import { storage } from '../helpers'
import { authActions } from '../reduxStore/slices/auth'

const api = axios.create({
  baseURL: 'http://192.168.1.26:8501',
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
  } catch (error) { }
  return config
})

api.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    return response.data || response.data
  },
  err => {
    if (err.response.status == 401) {
      const dispatch = useDispatch()
      dispatch(authActions.logout())
      storage.clear()
      throw 'Login session expired'
    } else {
      throw err.response.error.message
    }
  }
)

export default api