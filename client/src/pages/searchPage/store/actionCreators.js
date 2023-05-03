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
    axiosInstance.get(`/getNews?q=${term}`).then((res) => {
      dispatch(newsDataAction(res.data.articles))
    })
  }
}
