import { fromJS } from 'immutable'

import { actionTypes } from './'

const defaultState = fromJS({
  loginBoxOpen: false,
  loading: false,
  loginState: false,
  user: null,
  failState: false,
  error: null
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_BOX_OPEN:
      return state.merge({
        loginBoxOpen: true,
        failState: false
      })
    case actionTypes.LOGIN_BOX_CLOSE:
      return state.merge({
        loginBoxOpen: false,
        failState: false
      })
    case actionTypes.SET_USER:
      return state.set('user', action.user)
    case actionTypes.LOGIN_START:
      return state.set('loading', true)
    case actionTypes.LOGIN_SUCCESSFUL:
      return state.merge({
        loginBoxOpen: false,
        loginState: true,
        user: fromJS(action.username),
        failState: false,
        loading: false
      })
    case actionTypes.LOGIN_FAIL:
      return state.merge({
        failState: true,
        error: action.error,
        loading: false
      })
    case actionTypes.LOG_OUT_SUCCESS:
      return state.set('user', null)
    default:
      return state
  }
}
export default reducer
