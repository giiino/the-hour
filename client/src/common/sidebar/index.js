import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { actionCreators } from '../header/store'
import { SideBarWrapper, SideBarMenu, SideBarItem, SideBarLink } from './style'

class SideBar extends PureComponent {
  render() {
    const { isOpen, handleCloseSidebar } = this.props
    if (this.props.isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return (
      <SideBarWrapper isOpen={isOpen}>
        <SideBarMenu>
          <SideBarItem>
            <SideBarLink
              exact
              activeClassName='active'
              to='/'
              onClick={handleCloseSidebar}
            >
              Home
            </SideBarLink>
          </SideBarItem>
          <SideBarItem>
            <SideBarLink
              exact
              activeClassName='active'
              to='/about'
              onClick={handleCloseSidebar}
            >
              About
            </SideBarLink>
          </SideBarItem>
          <SideBarItem>
            <SideBarLink
              exact
              activeClassName='active'
              to='/news'
              onClick={handleCloseSidebar}
            >
              All News
            </SideBarLink>
          </SideBarItem>
          <SideBarItem>
            <SideBarLink
              exact
              activeClassName='active'
              to='/contact'
              onClick={handleCloseSidebar}
            >
              Contact
            </SideBarLink>
          </SideBarItem>
          <SideBarItem>
            <SideBarLink
              exact
              activeClassName='active'
              to='/advertise'
              onClick={handleCloseSidebar}
            >
              Advertise
            </SideBarLink>
          </SideBarItem>
        </SideBarMenu>
      </SideBarWrapper>
    )
  }
}
const mapStateToProps = (state) => ({
  isOpen: state.getIn(['header', 'isOpen'])
})
const mapToDispatchProps = (dispatch) => ({
  handleCloseSidebar() {
    dispatch(actionCreators.closeSidebarAction())
  }
})

export default connect(mapStateToProps, mapToDispatchProps)(SideBar)
