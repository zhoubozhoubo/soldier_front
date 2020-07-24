import axios from 'axios'
import store from '@/store'
// import { getToken } from '@/utils/auth'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  withCredentials: true,
  timeout: 60000
})
service.interceptors.request.use(
  config => {
    config.baseURL = config.baseURL ? config.baseURL : process.env.VUE_APP_BASE_API
    // do something before request is sent
    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      // config.headers['token'] = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    return res
    // return Promise.reject(new Error(res.message || 'Error'))
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
