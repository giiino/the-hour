import { auth, db } from '../../../firebase'
import { actionTypes } from './'

export const registerBoxOpenAction = () => ({
  type: actionTypes.REGISTER_BOX_OPEN
})

export const registerBoxCloseAction = () => ({
  type: actionTypes.REGISTER_BOX_CLOSE
})

const registerStart = () => ({
  type: actionTypes.REGISTER_START
})

const registerSuccess = (username) => ({
  type: actionTypes.REGISTER_SUCCESSFUL,
  username
})

const registerFail = (error) => ({
  type: actionTypes.REGISTER_FAIL,
  error
})

export const registerAction = (name, accountElem, passwordElem) => {
  return (dispatch) => {
    dispatch(registerStart())
    const res = auth.createUserWithEmailAndPassword(accountElem, passwordElem)
    res
      .then(({ user }) => {
        db.collection('users').add({
          uid: user.uid,
          name,
          authProvider: 'local',
          accountElem
        })
        user.updateProfile({ displayName: name }).then(() => {
          dispatch(registerSuccess(user))
          window.location.reload(false)
        })
      })
      .catch((error) => {
        dispatch(registerFail(error.message))
      })
  }
}
