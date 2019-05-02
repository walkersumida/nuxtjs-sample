import axios from 'axios'
import * as Cookies from 'js-cookie'

interface Headers {
  'access-token': string
  client: string
  uid: string
  Accept?: string
  'cache-control'?: string
  'content-type'?: string
  expiry?: string
  'token-type'?: string
}

const removeCookies = () => {
  Cookies.remove('headerAccessToken')
  Cookies.remove('headerClient')
  Cookies.remove('headerUid')
  Cookies.remove('headerExpiry')
}

const setHeaders = (headers: Headers) => {
  headers['access-token'] = Cookies.get('headerAccessToken')
  headers['client'] = Cookies.get('headerClient')
  headers['uid'] = Cookies.get('headerUid')
  return headers
}

const setCookie = (name: string, value: string) => {
  // TODO: `secure: true` when not dev
  Cookies.set(name, value, { secure: false })
}

const setCookies = (headers: Headers) => {
  setCookie('headerClient', headers['client'])
  setCookie('headerUid', headers['uid'])
  if(headers['access-token']) {
    setCookie('headerAccessToken', headers['access-token'])
  }
  if(headers['expiry']) {
    setCookie('headerExpiry', headers['expiry'])
  }
}

const axiosInstance = axios.create({
  baseURL: process.env.apiUrl
})

axiosInstance.interceptors.request.use((config) => {
  console.log('inter req:', config)
  config.headers = setHeaders(config.headers)
  return config
}, (error) => {
  console.log('inter req err:', error)
  return Promise.reject(error)
})

axiosInstance.interceptors.response.use((response) => {
  // See https://devise-token-auth.gitbook.io/devise-token-auth/conceptual
  console.log('inter res:', response)
  setCookies(response.headers)
  return response
}, (error) => {
  console.log('inter res err:', error)
  removeCookies()
  // FIXME: redirect without using window.location
  if(error.response.status === 401) {
    window.location.href = '/sign_in'
  }
  return Promise.reject(error)
})
export default axiosInstance
