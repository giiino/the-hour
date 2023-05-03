import { actionTypes } from './'

export const changeTopicAction = (number) => ({
  type: actionTypes.CHANGE_TOPIC,
  number
})
