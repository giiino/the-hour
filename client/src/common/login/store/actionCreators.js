import firebase from '@firebase/app'
import '@firebase/auth'
import '@firebase/firestore'

import { auth } from '../../../firebase'
import { actionTypes } from './'

const loginStart = () => ({
  type: actionTypes.LOGIN_START
})

const loginSuccess = (user) => ({
  type: actionTypes.LOGIN_SUCCESSFUL,
  user
})

const loginFail = (error) => ({
  type: actionTypes.LOGIN_FAIL,
  error
})
export const loginBoxOpenAction = () => ({
  type: actionTypes.LOGIN_BOX_OPEN
})

export const loginBoxCloseAction = () => ({
  type: actionTypes.LOGIN_BOX_CLOSE
})
export const logoutSuccess = () => ({
  type: actionTypes.LOG_OUT_SUCCESS
})
export const setUser = (user) => ({
  type: actionTypes.SET_USER,
  user
})

export const loginAction = (accountElem, passwordElem) => {
  return (dispatch) => {
    dispatch(loginStart())
    auth
      .signInWithEmailAndPassword(accountElem, passwordElem)
      .then(({ user }) => {
        dispatch(loginSuccess(user))
        window.location.reload(false)
      })
      .catch((error) => {
        dispatch(loginFail(error.message))
      })
  }
}
export const logoutAction = () => {
  return (dispatch) => {
    auth.signOut().then(() => {
      dispatch(logoutSuccess())
      window.location.reload(false)
    })
  }
}
export const googleLoginAction = () => {
  return (dispatch) => {
    const googleProvider = new firebase.auth.GoogleAuthProvider()
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then(({ user }) => {
        dispatch(loginSuccess(user))
        window.location.reload(false)
      })
      .catch((error) => {
        dispatch(loginFail(error.message))
      })
  }
}
