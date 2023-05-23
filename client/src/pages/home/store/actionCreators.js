import { fetchNewsApi } from '../../../common/api/news'
import { actionTypes } from './'

const newsDataAction = (data) => ({
  type: actionTypes.AJAX_TO_HOMESECTION,
  payload: { ...data }
})

export const throwAwayAction = (id) => ({
  type: actionTypes.DISLIKE_ARTICLE,
  id
})
export const articleLikeAction = (item) => ({
  type: actionTypes.LIKE_ARTICLE,
  item
})

export const getNewsData = () => {
  return async (dispatch) => {
    const [covid19News, taiwanNews, chinaNews, usaNews, animeNews] =
      await Promise.all([
        fetchNewsApi('covid-19'),
        fetchNewsApi('taiwan'),
        fetchNewsApi('china'),
        fetchNewsApi('usa'),
        fetchNewsApi('anime')
      ])
    dispatch(
      newsDataAction({ covid19News, taiwanNews, chinaNews, usaNews, animeNews })
    )
  }
}
