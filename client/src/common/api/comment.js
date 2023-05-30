import { axiosInstance } from '../utils'

export const addComment = ({ content, fromUserName, userPhoto, newsId }) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .post(`/api/comment/${newsId}`, { content, fromUserName, userPhoto })
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
