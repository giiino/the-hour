import { fromJS } from 'immutable'

import { actionTypes } from './'

const defaultState = fromJS({
  topicNum: 0
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_TOPIC:
      return state.set('topicNum', action.number)
    default:
      return state
  }
}

export default reducer
