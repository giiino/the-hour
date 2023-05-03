import React from 'react'
import { useLocation } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'

import {
  FooterWrapper,
  FooterContainer,
  SubscribeWrapper,
  SubscribeTitle,
  SubscribeSendWrapper,
  SubscribeSendInput,
  SubscribeSendBtn,
  SuccessSentLabel,
  WebBtnWrapper,
  WebBtnItem,
  WebBtnLink,
  FooterOwnerLabel
} from './style'

const Footer = () => {
  const location = useLocation()
  const { pathname } = location
  const splitLocation = pathname.split('/')
  const toggleToNav = () => {
    scroll.scrollToTop()
  }
  return (
    <FooterWrapper>
      <FooterContainer>
        <SubscribeWrapper>
          <SubscribeTitle>Subscribe to Our Newsletter</SubscribeTitle>
          <SubscribeSendWrapper>
            <SubscribeSendInput />
            <SubscribeSendBtn>Subscribe</SubscribeSendBtn>
          </SubscribeSendWrapper>
          <SuccessSentLabel>Thanks for submitting!</SuccessSentLabel>
        </SubscribeWrapper>
        <WebBtnWrapper>
          <WebBtnItem>
            <WebBtnLink
              to='/'
              onClick={splitLocation[1] === '' ? toggleToNav : null}
            >
              Home
            </WebBtnLink>
          </WebBtnItem>
          <WebBtnItem>
            <WebBtnLink
              to='/about'
              onClick={splitLocation[1] === 'about' ? toggleToNav : null}
            >
              About
            </WebBtnLink>
          </WebBtnItem>
          <WebBtnItem>
            <WebBtnLink
              to='/news'
              onClick={splitLocation[1] === 'news' ? toggleToNav : null}
            >
              All News
            </WebBtnLink>
          </WebBtnItem>
          <WebBtnItem>
            <WebBtnLink
              to='/contact'
              onClick={splitLocation[1] === 'contact' ? toggleToNav : null}
            >
              Contact
            </WebBtnLink>
          </WebBtnItem>
          <WebBtnItem>
            <WebBtnLink
              to='/advertise'
              onClick={splitLocation[1] === 'advertise' ? toggleToNav : null}
            >
              Advertise
            </WebBtnLink>
          </WebBtnItem>
        </WebBtnWrapper>
      </FooterContainer>
      <FooterOwnerLabel>
        © {new Date().getFullYear()} by TheHours which is created by Yi-Jiun
        Huang
      </FooterOwnerLabel>
    </FooterWrapper>
  )
}

export default Footer
