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
        covid19List: fromJS(action.payload.covid19News),
        taiwanList: fromJS(action.payload.taiwanNews),
        chinaList: fromJS(action.payload.chinaNews),
        usaList: fromJS(action.payload.usaNews),
        animeList: fromJS(action.payload.animeNews),
        combineList: fromJS([].concat(...Object.values(action.payload))),
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
