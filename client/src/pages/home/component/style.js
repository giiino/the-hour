import { Link as LinkR } from 'react-router-dom'

import styled from 'styled-components'

export const HomeMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`
export const ArticaleSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 200px;
  box-sizing: border-box;
  width: 91%;
  margin: 0 auto;
  background-color: ${({ bgc }) => (bgc ? '#F2F2F2' : 'none')};
  @media screen and (max-width: 1100px) {
    width: 100%;
  }
  @media screen and (max-width: 960px) {
    padding: 5px 0;
    background-color: #fff;
  }
`
export const ArticaleIncludeWrapper = styled.div`
  display: flex;
  position: relative;
  padding-top: 40px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    justify-content: center;
  }
`
export const ArticaleSectionTitle = styled.h4`
  font-size: 22px;
  font-weight: 800;
  color: #2a53c1;
  position: absolute;
  top: 0;
  left: 20px;
`

export const ArticaleWrapper = styled.div`
  padding: 0 20px;
  width: 90%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  @media screen and (max-width: 960px) {
    width: 100%;
    align-items: center;
    padding: 0;
  }
`
export const ArticaleImgWrapper = styled(LinkR)`
  width: 100%;
  margin-bottom: 1px;
`

export const ArticaleImg = styled.img`
  width: 100%;
  height: 155px;
  @media screen and (max-width: 960px) {
    height: 400px;
  }
  @media screen and (max-width: 780px) {
    height: 250px;
  }
`
export const ArticaleTitle = styled(LinkR)`
  width: 100%;
  font-size: 18px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  font-weight: 800;
  height: 32%;
  transition: 0.1s all ease-in;
  line-height: 1.5;
  text-decoration: none;
  color: #000;
  padding: 10px 0;
  @media screen and (max-width: 960px) {
    text-align: center;
  }
  &:hover {
    transition: 0.1s all ease-in;
    color: #2a53c1;
  }
`
export const IconWrapper = styled.div`
  border-top: 1px solid #a9a9a9;
  width: 100%;
  height: 10%;
  box-sizing: border-box;
  padding: 5px;
  span {
    padding: 0 5px;
  }
`
export const TimesWatch = styled.div`
  margin-right: 10px;
  float: left;
`
export const TimesComment = styled.div`
  float: left;
`
export const TimesLike = styled.div`
  float: right;
  padding: 0 5px;
  cursor: pointer;
`
