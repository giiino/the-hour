import React, { PureComponent } from 'react'
import { FaTimes } from 'react-icons/fa'
import { FiChevronUp } from 'react-icons/fi'
import { VscThreeBars } from 'react-icons/vsc'
import { connect } from 'react-redux'
import { animateScroll as scroll } from 'react-scroll'

import { auth } from '../../firebase'
import { actionCreators as searchPageCreators } from '../../pages/searchPage/store'
import { actionCreators as loginActionCreators } from '../login/store'
import HeaderNav from './component/headerNav'
import SearchBox from './component/searchBox'
import { actionCreators } from './store'
import {
  HeaderWrapper,
  HeaderContainer,
  MobIcon,
  BackToTopBtn,
  BackToTopIcon,
  LoginDetailWrapper,
  UserName,
  NameItem,
  LogoutBtn,
  LoginBtn
} from './style'

class Header extends PureComponent {
  render() {
    const {
      isOpen,
      user,
      toTopState,
      handleCloseSidebar,
      handleOpenSidebar,
      handleChangeTerm,
      handleLogOut,
      handleBoxOpen
    } = this.props
    return (
      <>
        <HeaderWrapper>
          <HeaderContainer>
            <MobIcon isOpen={isOpen}>
              {isOpen ? (
                <FaTimes onClick={handleCloseSidebar} />
              ) : (
                <VscThreeBars onClick={handleOpenSidebar} />
              )}
            </MobIcon>
            <HeaderNav />
            <SearchBox handleChangeTerm={handleChangeTerm} />
            {user ? (
              <>
                <LoginDetailWrapper>
                  <UserName>
                    <NameItem>Hello!</NameItem>
                    <NameItem className='name'>{user['displayName']}</NameItem>
                  </UserName>
                  <LogoutBtn onClick={handleLogOut}>Log out</LogoutBtn>
                </LoginDetailWrapper>
              </>
            ) : (
              <LoginDetailWrapper>
                <LoginBtn onClick={handleBoxOpen}>Log in</LoginBtn>
              </LoginDetailWrapper>
            )}
          </HeaderContainer>
        </HeaderWrapper>
        <BackToTopBtn onClick={toggleToNav}>Back to Top</BackToTopBtn>
        {toTopState ? (
          <BackToTopIcon onClick={toggleToNav}>
            <FiChevronUp style={{ color: '#fff', fontSize: '44px' }} />
          </BackToTopIcon>
        ) : null}
      </>
    )
  }
  componentDidMount() {
    this.props.handleUserSet()
    this.bindEvent()
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }
  bindEvent() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}
const toggleToNav = () => {
  scroll.scrollToTop()
}
const mapStateToProps = (state) => ({
  isOpen: state.getIn(['header', 'isOpen']),
  toTopState: state.getIn(['header', 'toTopState']),
  user: state.getIn(['login', 'user'])
})

const mapToDispatchProps = (dispatch) => ({
  handleCloseSidebar() {
    dispatch(actionCreators.closeSidebarAction())
  },
  handleOpenSidebar() {
    dispatch(actionCreators.openSidebarAction())
  },
  handleUserSet() {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(loginActionCreators.setUser(authUser))
      } else {
        dispatch(loginActionCreators.setUser(null))
      }
    })
  },
  handleChangeTerm(term) {
    dispatch(searchPageCreators.changeTermAction(term))
    dispatch(searchPageCreators.getNewsData(term))
  },
  handleBoxOpen() {
    dispatch(loginActionCreators.loginBoxOpenAction())
  },
  handleLogOut() {
    dispatch(loginActionCreators.logoutAction())
  },
  changeScrollTopShow() {
    if (window.screen.width < 960) {
      if (document.documentElement.scrollTop > 300) {
        dispatch(actionCreators.openToTopIcon())
      } else {
        dispatch(actionCreators.closeToTopIcon())
      }
    }
  }
})

export default connect(mapStateToProps, mapToDispatchProps)(Header)
