import { fromJS } from 'immutable'

import { actionTypes } from './'

const defaultState = fromJS({
  title: '',
  time: '',
  img: '',
  content: '',
  describe: ''
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.LOADING_ARTICLE_DATA:
      return state.merge({
        title: action.title,
        time: action.time,
        img: action.img,
        content: action.content,
        describe: action.describe
      })
    default:
      return state
  }
}

export default reducer
