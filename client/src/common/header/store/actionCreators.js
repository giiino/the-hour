import { actionTypes } from './'

export const closeSidebarAction = () => ({
  type: actionTypes.CHANGE_ISOPEN_STATE
})

export const openSidebarAction = () => ({
  type: actionTypes.CHANGE_ISOPEN_STATE_TO_OPEN
})

export const openToTopIcon = () => ({
  type: actionTypes.OPEN_TO_TOP_ICON
})

export const closeToTopIcon = () => ({
  type: actionTypes.CLOSE_TO_TOP_ICON
})
