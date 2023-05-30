import { Link as LinkR } from 'react-router-dom'

import styled from 'styled-components'

import Arrow from '../../statics/select-arrow.png'

export const NewsPageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  box-sizing: border-box;
  background: #fff;
`
export const NewsPageContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`
export const NewsPageNav = styled.ul`
  width: 60%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  text-align: center;
  @media screen and (max-width: 960px) {
    display: none;
  }
`
export const NavItem = styled.div`
  padding: 50px 20px;
  white-space: nowrap;
`
export const NavItemLink = styled(LinkR)`
  color: #000;
  text-decoration: none;
  font-size: 15px;
  font-weight: 100;
  transition: 0.2 all ease-in;
  cursor: pointer;
  &:hover {
    transition: 0.2 all ease-in;
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
export const NewsPostWrapper = styled.div`
  max-width: 740px;
  width: 100%;
  margin: auto;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  box-sizing: border-box;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    border: none;
    height: auto;
    /* padding: 0 0; */
    width: 95%;
  }
`
export const NewsPostImgWrapper = styled.div`
  width: 100%;
`

export const NewsPostImg = styled.img`
  width: 100%;
  /* @media screen and (max-width: 960px) {
    height: 250px;
  } */
`
export const NewsPostDetailWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  grid-template-rows: 90% 10%;
`
export const DetailWrapper = styled.div`
  transition: 0.2 all ease-in;
  text-decoration: none;
  color: #000;
  padding: 50px 0;
`
export const PostTitle = styled.div`
  font-size: 40px;
  font-weight: 900;
  margin-bottom: 25px;
  @media screen and (max-width: 960px) {
    font-size: 26px;
    line-height: 1.2;
    margin-top: 15px;
    margin-bottom: 15px;
  }
`
export const PostDate = styled.div`
  font-size: 14px;
  color: #767676;
`
export const PostSecondTitle = styled.div`
  font-size: 18px;
  line-height: 1.5;
  font-weight: bold;
  padding: 20px 0;
`
export const PostDetail = styled.div`
  font-size: 18px;
  line-height: 1.5;
`

export const PostDataWrapper = styled.div`
  width: 100%;
  padding-top: 20px;
  border-top: 1px solid #a9a9a9;
  font-size: 14px;

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
  display: flex;
  align-items: center;
  float: right;
  cursor: pointer;
  height: 30px;
  .like {
    color: red;
  }
`

export const CommentWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px 0;
  margin-top: 20px;
  border: 1px solid rgba(242, 242, 242, 0.75);
`

export const CommentContainer = styled.div`
  width: 90%;
  max-width: 740px;
`

export const CommentTitle = styled.h3`
  font-weight: 900;
  margin-bottom: 20px;
`

export const CommentEditor = styled.textarea`
  width: 100%;
  cursor: ${({ isEditMode }) => (isEditMode ? 'text' : 'pointer')};
  resize: none;
  margin-top: 15px;
  padding: 15px;
  font-size: 16px;
  &::placeholder {
    color: #000;
  }
`

export const CancelButton = styled.div`
  font-weight: 100;
  font-size: 14px;
  color: ${({ disable }) => (disable ? '#a7b8e8' : '#2a53ce')};
  cursor: ${({ disable }) => (disable ? 'default' : 'pointer')};
  margin-right: 25px;
`

export const SubmitButton = styled.div`
  width: 88px;
  height: 32px;
  font-size: 14px;
  color: #fff;
  text-align: center;
  line-height: 32px;
  background-color: ${({ enabled }) => (enabled ? '#2A53C1' : '#dfdfdf')};
  transition: 0.5s;
  cursor: ${({ enabled }) => (enabled ? 'pointer' : 'default')};
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 15px;
`

export const CommentList = styled.div`
  margin-top: 15px;
`

export const CommentItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`

export const CommentUser = styled.div`
  display: flex;
  margin-bottom: 20px;
`

export const CommentUserPhoto = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 36px;
`

export const CommentUserInfo = styled.div`
  font-size: 14px;
  margin-left: 10px;
  .time {
    margin-top: 5px;
  }
`

export const CommentContent = styled.div`
  margin-left: 46px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
`
