/*
 * @Description: 
 * @Version: 2.0
 * @Autor: zhazhayu
 * @Date: 2022-01-06 15:49:21
 * @LastEditors: zhazhayu
 * @LastEditTime: 2022-01-18 20:06:49
 */
import axios from 'axios'

axios.defaults.baseURL = '/api'
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

const config = {
   baseURL: "https://server.angoykeith.xyz",
  // baseURL: "http://localhost:8000",
   timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
}

// 创建Axios对象
const Axios = axios.create(config)

// 请求拦截器
Axios.interceptors.request.use(
  config => {
    // Do something before request is sent
    return config
  },
  error => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// 响应拦截器
Axios.interceptors.response.use(
  response => {
    // Do something with response data
    return response
  },
  error => {
    // Do something with response error
    return Promise.reject(error)
  }
)

export default {
  install (App) {
    // 挂载axios到Vue对象
    App.config.globalProperties.$http = Axios
  }
}
