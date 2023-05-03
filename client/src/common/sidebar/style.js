import { NavLink } from 'react-router-dom'

import styled from 'styled-components'

export const SideBarWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background: #2a53c1;
  box-sizing: border-box;
  transition: 0.3s all ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  overflow: hidden;
`
export const SideBarMenu = styled.ul`
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  box-sizing: border-box;
  padding-top: 15px;
`
export const SideBarItem = styled.li`
  padding-left: 60px;
  white-space: nowrap;
  @media screen and (max-width: 768px) {
    padding-left: 40px;
  }
`
export const SideBarLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-size: 25px;
  display: inline-block;
  padding: 23px 150px 23px 0;
  &.active {
    color: #8299d6;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`
