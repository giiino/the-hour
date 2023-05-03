import { fromJS } from 'immutable'

import { actionTypes } from './'

const defaultState = fromJS({
  isOpen: false,
  toTopState: false
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_ISOPEN_STATE:
      return state.set('isOpen', false)
    case actionTypes.CHANGE_ISOPEN_STATE_TO_OPEN:
      return state.set('isOpen', true)
    case actionTypes.OPEN_TO_TOP_ICON:
      return state.set('toTopState', true)
    case actionTypes.CLOSE_TO_TOP_ICON:
      return state.set('toTopState', false)
    default:
      return state
  }
}
export default reducer
