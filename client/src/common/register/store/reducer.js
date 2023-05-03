import { fromJS } from 'immutable'

import { actionTypes } from './'

const defaultState = fromJS({
  registerBoxOpen: false,
  loading: false,
  user: null,
  username: '',
  failState: false,
  error: null
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_BOX_OPEN:
      return state.merge({
        registerBoxOpen: true,
        failState: false
      })
    case actionTypes.REGISTER_BOX_CLOSE:
      return state.merge({
        registerBoxOpen: false,
        failState: false
      })
    case actionTypes.REGISTER_START:
      return state.set('loading', true)
    case actionTypes.REGISTER_SUCCESSFUL:
      return state.merge({
        registerBoxOpen: false,
        loading: false,
        user: fromJS(action.username),
        failState: false
      })
    case actionTypes.REGISTER_FAIL:
      return state.merge({
        failState: true,
        error: action.error,
        loading: false
      })
    default:
      return state
  }
}
export default reducer
