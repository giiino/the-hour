import React, { PureComponent } from 'react'
import { BiX } from 'react-icons/bi'
import { connect } from 'react-redux'
import FadeLoader from 'react-spinners/FadeLoader'

import { motion } from 'framer-motion'

import { animateTwo, transitionTwo } from '../../common/animation'
import { actionCreators as loginActionCreators } from '../login/store'
import { actionCreators } from './store'
import {
  LoginWrapper,
  LoginBox,
  LoginTitle,
  LoginText,
  UserInput,
  AccInput,
  PwdInput,
  SubmitBtn,
  BoxUnderText,
  UnderLink,
  LoadingBox
} from './style'

class Register extends PureComponent {
  render() {
    const {
      registerBoxOpen,
      failState,
      error,
      loading,
      handleBoxClose,
      handleRegister,
      handleChangeMode
    } = this.props
    return (
      <>
        {registerBoxOpen ? (
          <LoginWrapper>
            <motion.div
              initial='out'
              animate='in'
              exit='out'
              variants={animateTwo}
              transition={transitionTwo}
            >
              <LoginBox>
                <BiX className='leaveBtn' onClick={handleBoxClose} />
                <LoginTitle>Sign up</LoginTitle>
                <LoginText failState={failState}>{error}</LoginText>
                <UserInput
                  placeholder='yourname'
                  ref={(input) => {
                    this.username = input
                  }}
                />
                <AccInput
                  placeholder='email'
                  ref={(input) => {
                    this.account = input
                  }}
                />
                <PwdInput
                  type='password'
                  placeholder='password'
                  ref={(input) => {
                    this.password = input
                  }}
                />
                <SubmitBtn
                  onClick={() => {
                    handleRegister(
                      this.username.value,
                      this.account.value,
                      this.password.value
                    )
                  }}
                >
                  Submit
                </SubmitBtn>
                <BoxUnderText>
                  <p>Already have an account?</p>
                  <UnderLink onClick={handleChangeMode}>click here</UnderLink>
                </BoxUnderText>
                {loading ? (
                  <LoadingBox>
                    <FadeLoader color={'#2A53C1'} size={40} />
                  </LoadingBox>
                ) : null}
              </LoginBox>
            </motion.div>
          </LoginWrapper>
        ) : null}
      </>
    )
  }
}
const mapStateToProps = (state) => ({
  registerBoxOpen: state.getIn(['register', 'registerBoxOpen']),
  failState: state.getIn(['register', 'failState']),
  error: state.getIn(['register', 'error']),
  loading: state.getIn(['register', 'loading'])
})

const mapToDispatchProps = (dispatch) => ({
  handleBoxClose() {
    dispatch(actionCreators.registerBoxCloseAction())
  },
  handleRegister(username, acc, pwd) {
    dispatch(actionCreators.registerAction(username, acc, pwd))
  },
  handleChangeMode() {
    dispatch(actionCreators.registerBoxCloseAction())
    dispatch(loginActionCreators.loginBoxOpenAction())
  }
})
export default connect(mapStateToProps, mapToDispatchProps)(Register)
