import { Link as LinkR } from 'react-router-dom'

import styled from 'styled-components'

export const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background: #0e1c40;
  color: white;
  padding: 40px 0;
  overflow: hidden;
`
export const FooterContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
  @media screen and (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`
export const SubscribeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const SubscribeTitle = styled.h4`
  font-size: 22px;
  font-weight: 800;
  @media screen and (max-width: 340px) {
    line-height: 1.5;
    text-align: center;
  }
`
export const SubscribeSendWrapper = styled.div`
  display: flex;
  padding: 70px 0;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`
export const SubscribeSendInput = styled.input.attrs({
  placeholder: 'Enter Your Email here*'
})`
  width: 320px;
  background-color: transparent;
  border: none;
  outline: none;
  margin-right: 10px;
  border-bottom: 3px solid #fff;
  font-size: 15px;
  font-weight: 900;
  color: #fff;
  &::placeholder {
    font-size: 15px;
    font-weight: 900;
    color: #fff;
    line-height: 22px;
    text-align: bottom;
  }
  @media screen and (max-width: 960px) {
    width: 95%;
    margin-right: 0;
  }
`
export const SubscribeSendBtn = styled.div`
  color: white;
  padding: 18px 30px;
  background: #2a53c1;
  font-size: 15px;
  font-weight: 800;
  text-align: center;
  display: block;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  &:hover {
    transition: 0.2s all ease-in-out;
    background: #152c69;
  }
  @media screen and (max-width: 960px) {
    margin-top: 20px;
  }
`
export const SuccessSentLabel = styled.div`
  display: none;
`
export const WebBtnWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  @media screen and (max-width: 960px) {
    display: none;
  }
`
export const WebBtnItem = styled.div`
  display: block;
`
export const WebBtnLink = styled(LinkR)`
  text-decoration: none;
  color: #fff;
  font-size: 20px;
  font-weight: 800;
`
export const FooterOwnerLabel = styled.div`
  font-size: 14px;
  @media screen and (max-width: 340px) {
    line-height: 1.5;
    text-align: center;
  }
`
