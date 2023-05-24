import { Link as LinkR } from 'react-router-dom'

import styled from 'styled-components'

import Arrow from '../../statics/select-arrow.png'

export const NewsPageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  box-sizing: border-box;
  background: #f3f3f3;
  padding: 60px 0;
`
export const NewsPageContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`
export const NewsPageNav = styled.ul`
  display: flex;
  max-width: 1065px;
  width: 95%;
  margin-inline: auto;
  padding: 50px 0;
  @media screen and (max-width: 960px) {
    display: none;
  }
`
export const NavItem = styled.div`
  white-space: nowrap;
  margin-right: 40px;
`
export const NavItemLink = styled.div`
  color: #0e1c40;
  text-decoration: none;
  font-size: 15px;
  font-weight: 800;
  transition: 0.2 all ease-in;
  cursor: pointer;
  &:hover {
    transition: 0.2 all ease-in;
    color: #2a53c1;
  }
  &.active {
    color: #2a53c1;
  }
`
//SelectBar
export const SelectBarWrapper = styled.div`
  display: none;
  width: 100%;
  position: relative;
  @media screen and (max-width: 960px) {
    display: block;
  }
`
export const WebTitle = styled.div`
  font-size: 17px;
  background-color: #2a53c1;
  color: #fff;
  padding: 25px 20px;
`
export const MainSelectBar = styled.select`
  width: 100%;
  font-size: 17px;
  padding: 25px 20px;
  color: #000;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  background: url(${Arrow}) no-repeat 98%;
  background-size: 25px;
  outline: none;
`
export const BarOption = styled.option`
  &.option-style {
    appearance: none;
    outline: none;
    color: #000;
    font-size: 10px;
    height: 200px;
  }
`
//NewsPost
export const NewsPostWrapper = styled.div`
  max-width: 1065px;
  width: 95%;
  height: 385.5px;
  border: 1px solid #000;
  margin-bottom: 30px;
  display: flex;
  margin: 10px auto;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    border: none;
    height: auto;
  }
`
export const NewsPostImgWrapper = styled(LinkR)`
  width: 100%;
  cursor: pointer;
`

export const NewsPostImg = styled.img`
  width: 100%;
  height: 385.5px;
  @media screen and (max-width: 960px) {
    height: 45vw;
  }
`
export const NewsPostDetailWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const DetailWrapper = styled(LinkR)`
  transition: 0.2 all ease-in;
  text-decoration: none;
  color: #000;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 85%;
  a {
    color: #000;
    font-weight: bold;
  }
  &:hover {
    transition: 0.2 all ease-in;
    color: #2a53c1;
    a {
      color: #2a53c1;
    }
  }
`

export const PostTitle = styled.div`
  font-size: 28px;
  font-weight: 900;
  /* padding-top: 20px; */
  margin: 10px 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  @media screen and (max-width: 960px) {
    line-height: 1.2;
  }
`
export const PostDetail = styled.div`
  font-size: 16px;
  line-height: 1.5;
  /* padding: 20px 0; */
  margin: 10px 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
`

export const PostDataWrapper = styled.div`
  width: 100%;
  border-top: 1px solid #a9a9a9;
  font-size: 12px;
  height: 10%;
  padding: 15px 0;
  align-items: center;
  span {
    margin-right: 5px;
  }
`
export const DataView = styled.div`
  float: left;
  margin-right: 5px;
`
export const DataComment = styled.div`
  float: left;
`
export const DataLike = styled.div`
  float: right;
  cursor: pointer;
`
