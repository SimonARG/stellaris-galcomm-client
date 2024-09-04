import axios from 'axios'
import app from '@/main.js'

const Http = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

/**
 * Register axios request interceptor
 */
Http.interceptors.response.use(
  (response) => {
    // Store token if its part of the response
    let token = response?.data?.data?.token
    if (token) {
      sessionStorage.setItem('apiToken', token)
    }

    return response
  },
  function (error) {
    // Emit toast only if its not an authentication error
    // this is to avoid 'Unauthenticated' to show as an error
    if (error.response.status != 422) {
      //   app.config.globalProperties.$toast.add({
      //     severity: 'warn',
      //     summary: 'Warning',
      //     detail: error.response.data.message,
      //     life: 3000
      //   })
      error.response = 'problem!'
    }

    // Emit a single toast for each validation error
    if (error.response.status == 422) {
      for (const [key, value] of Object.entries(error.response.data.data.errors)) {
        // app.config.globalProperties.$toast.add({
        //   severity: 'warn',
        //   summary: 'Warning',
        //   detail: value[0],
        //   life: 3000
        // })
        error.response = 'problem!'
      }

      return error.response
    }

    return Promise.reject(error)
  }
)

/**
 * Register axios request interceptor
 */
Http.interceptors.request.use((config) => {
  let token = sessionStorage.apiToken
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export default Http
