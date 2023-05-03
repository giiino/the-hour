import React from 'react'
import { useLocation } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'

import { Logo, LogoIcon, HeaderTitle, TitleItem, TitleItemLink } from '../style'

const HeaderNav = () => {
  const location = useLocation()
  const { pathname } = location
  const splitLocation = pathname.split('/')
  const toggleToNav = () => {
    scroll.scrollToTop()
  }
  return (
    <>
      <Logo to='/' onClick={splitLocation[1] === '' ? toggleToNav : null}>
        <LogoIcon />
      </Logo>
      <HeaderTitle>
        <TitleItem>
          <TitleItemLink
            className={splitLocation[1] === '' ? 'active' : ''}
            to='/'
          >
            Home
          </TitleItemLink>
        </TitleItem>
        <TitleItem>
          <TitleItemLink
            className={splitLocation[1] === 'about' ? 'active' : ''}
            to='/about'
          >
            About
          </TitleItemLink>
        </TitleItem>
        <TitleItem>
          <TitleItemLink
            className={splitLocation[1] === 'news' ? 'active' : ''}
            to='/news'
          >
            All News
          </TitleItemLink>
        </TitleItem>
        <TitleItem>
          <TitleItemLink
            className={splitLocation[1] === 'contact' ? 'active' : ''}
            to='/contact'
          >
            Contact
          </TitleItemLink>
        </TitleItem>
        <TitleItem>
          <TitleItemLink
            className={splitLocation[1] === 'advertise' ? 'active' : ''}
            to='/advertise'
          >
            Advertise
          </TitleItemLink>
        </TitleItem>
      </HeaderTitle>
    </>
  )
}

export default HeaderNav
