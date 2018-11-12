import Axios from 'axios'

const METHODS = ['get', 'put', 'post', 'patch', 'delete']

const handleUnauthorized = response => {
  if (response.status === 401 || response.message === 'Not Authorized') {
    localStorage.clear()
    return window.location = '/login'
  }

  return response
}

const axios = (method, path, data, responseType, url) => {
  const TOKEN = localStorage.getItem('token')
  const NETWORK = localStorage.getItem('active_network')

  return Axios
    .create({
      baseURL: url + '/',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${TOKEN}`,
        'X-Network-Id': NETWORK
      },
    })
    .request({
      responseType: responseType || 'json',
      transformResponse: data => {
        if (responseType === 'arraybuffer') return data

        return handleUnauthorized(data)
      },
      url: path,
      method,
      data
    })
}

export const axiosConstructor = url => METHODS
  .map((method) => (path, data, responseType) =>
    axios(method, path, data, responseType, url)
      .then(res => ({ res: { ...res.data, ...res }}))
      .catch(error => ({ error: error.response, status: error.status }))
  )