const apiResource = (resource) => {
  let apiUrl = import.meta.env.VITE_API_URL

  if (!apiUrl.endsWith('/')) {
    apiUrl += '/'
  }

  if (!apiUrl) {
    console.error('VITE_API_URL is not defined')
    return false
  }

  return apiUrl + resource
}

export { apiResource }
