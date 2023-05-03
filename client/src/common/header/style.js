import { FiSearch } from 'react-icons/fi'
import { IoMdGlobe } from 'react-icons/io'
import { Link as LinkR } from 'react-router-dom'

import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  box-sizing: border-box;
  overflow: hidden;
`
export const HeaderContainer = styled.div`
  background: #2a53c1;
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  position: relative;
  @media screen and (max-width: 960px) {
    height: 111px;
    box-sizing: border-box;
    padding-top: 50px;
  }
`
export const Logo = styled(LinkR)`
  position: fixed;
  width: 70px;
  height: 63px;
  background: #2a53c1;
  display: block;
  color: white;
  padding: 20px 20px;
  box-sizing: border-box;
  z-index: 10;
  @media screen and (max-width: 960px) {
    width: 40px;
    height: 40px;
    padding: 5px 5px;
    top: 10px;
    left: 20px;
    position: absolute;
  }
`
export const LogoIcon = styled(IoMdGlobe)`
  font-size: 28px;
  line-height: 32px;
  @media screen and (max-width: 960px) {
    font-size: 30px;
    line-height: 12px;
  }
`
export const MobIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    font-size: 26px;
    line-height: 12px;
    color: #fff;
    top: 10px;
    right: 20px;
    padding: 5px 5px;
    display: block;
    font-size: 30px;
    cursor: pointer;
    transition: 0.3s all ease-in-out;
    z-index: 999;
    position: ${({ isOpen }) => (isOpen ? 'fixed' : 'absolute')};
  }
`
export const HeaderTitle = styled.ul`
  margin-left: 70px;
  width: 63%;
  /* display:grid;
    grid-template-columns: repeat(10, 1fr); */
  display: flex;

  align-items: center;
  text-align: center;
  line-height: 32px;
  @media screen and (max-width: 960px) {
    display: none;
  }
`
export const TitleItem = styled.li`
  font-size: 14px;
  font-weight: 900;
  white-space: nowrap;
  padding: 0 20px;
`
export const TitleItemLink = styled(LinkR)`
  text-decoration: none;
  color: white;
  transition: 0.3s all ease-in-out;
  &.active {
    color: #c9c9c9;
  }
  &:hover {
    transition: 0.1s all ease-in;
    color: #c9c9c9;
  }
`
export const HeaderSearch = styled.form`
  width: 244px;
  height: 40px;
  position: relative;
  .clear {
    font-size: 18px;
    position: absolute;
    top: 10px;
    right: 10px;
    color: #2a53c1;
    cursor: pointer;
  }
  @media screen and (max-width: 960px) {
    width: 90%;
    margin: 0 auto;
    height: 41px;
  }
`
export const SearchIcon = styled(FiSearch)`
  font-size: 18px;
  position: absolute;
  top: 10px;
  left: 10px;
  color: #2a53c1;
`
export const SearchInput = styled.input.attrs({
  placeholder: 'Search...'
})`
  width: 100%;
  line-height: 32px;
  height: 40px;
  box-sizing: border-box;
  padding-left: 35px;
  padding-right: 25px;
  font-size: 14px;
  font-weight: 900;
  outline: none;
  color: #2a53c1;
  &::placeholder {
    font-size: 14px;
    font-weight: 900;
    color: #2a53c1;
  }
`

export const LoginDetailWrapper = styled.div`
  display: flex;
  width: 20%;
  align-items: center;
  height: 100%;
  @media screen and (max-width: 960px) {
    display: none;
  }
`
export const UserName = styled.div`
  font-weight: bold;
  color: #fff;
  margin-left: 10px;
  width: 40%;
  text-align: center;
  @media screen and (max-width: 960px) {
    display: none;
  }
`
export const NameItem = styled.div`
  line-height: 1.2;
  &.name {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
  @media screen and (max-width: 960px) {
    display: none;
  }
`
export const LogoutBtn = styled.div`
  font-size: 17px;
  color: #fff;
  border: 1px solid #fff;
  padding: 10px 25px;
  margin-left: 10px;
  cursor: pointer;
  white-space: nowrap;
`
export const LoginBtn = styled.div`
  font-size: 17px;
  color: #fff;
  border: 1px solid #fff;
  padding: 10px 25px;
  margin-left: 15px;
  cursor: pointer;
  white-space: nowrap;
`
export const BackToTopBtn = styled.div`
  font-size: 17px;
  position: fixed;
  left: -20px;
  bottom: 90px;
  transform: rotate(-90deg);
  cursor: pointer;
  color: #2a53c1;
  font-weight: 800;
  @media screen and (max-width: 960px) {
    display: none;
  }
`

export const BackToTopIcon = styled.div`
  cursor: pointer;
  position: fixed;
  right: 20px;
  bottom: 40px;
  opacity: 30%;
  background-color: #000;
  padding: 8px;
  display: none;
  text-align: center;
  border: 2px solid #fff;
  overflow: hidden;
  z-index: 850;

  @media screen and (max-width: 960px) {
    display: block;
  }
`
