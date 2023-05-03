import { fromJS } from 'immutable'

import { actionTypes } from './'

const defaultState = fromJS({
  loading: true,
  covid19List: [],
  taiwanList: [],
  chinaList: [],
  usaList: [],
  animeList: [],
  combineList: [],
  beLikeArticle: []
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.AJAX_TO_HOMESECTION:
      return state.merge({
        covid19List: fromJS(action.covid19_data),
        taiwanList: fromJS(action.taiwan_data),
        chinaList: fromJS(action.china_data),
        usaList: fromJS(action.usa_data),
        animeList: fromJS(action.anime_data),
        combineList: fromJS([
          ...action.covid19_data,
          ...action.taiwan_data,
          ...action.china_data,
          ...action.usa_data,
          ...action.anime_data
        ]),
        loading: false
      })
    case actionTypes.LIKE_ARTICLE:
      return state.set(
        'beLikeArticle',
        state.get('beLikeArticle').push(action.item)
      )
    case actionTypes.DISLIKE_ARTICLE:
      return state.set(
        'beLikeArticle',
        state.get('beLikeArticle').filter((item) => item.title !== action.id)
      )
    default:
      return state
  }
}

export default reducer
