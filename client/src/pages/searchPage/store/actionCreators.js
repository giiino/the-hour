import { v4 } from 'uuid'

import { axiosInstance } from '../../../common/utils'
import { actionTypes } from './'

export const changeTermAction = (term) => ({
  type: actionTypes.CHANGE_TERM,
  term
})
const newsDataAction = (article) => ({
  type: actionTypes.AJAX_SEARCH_DATA,
  searchlist: article
})

export const getNewsData = (term) => {
  return (dispatch) => {
    axiosInstance.get(`/api/search?q=${term}`).then((res) => {
      const article = res.data.map((item) => ({
        ...item,
        id: v4()
      }))
      dispatch(newsDataAction(article))
    })
  }
}
