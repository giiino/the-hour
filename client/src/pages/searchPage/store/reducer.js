import { fromJS } from 'immutable'

import { actionTypes } from './'

const defaultState = fromJS({
  loading: true,
  searchTerm: '',
  searchlist: []
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.AJAX_SEARCH_DATA:
      return state.merge({
        searchlist: fromJS(action.searchlist),
        loading: false
      })
    case actionTypes.CHANGE_TERM:
      return state.merge({
        searchTerm: fromJS(action.term),
        loading: true
      })
    default:
      return state
  }
}

export default reducer
