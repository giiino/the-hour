import { axiosInstance } from '../utils'

export const fetchNewsApi = (category) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .get('/api/news', { params: { category } })
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export const fetchNewsByIdApi = (id) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .get(`/api/news/${id}`)
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
