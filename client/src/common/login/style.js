import styled from 'styled-components'

export const LoginWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: #000000e1;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 900;
  overflow: hidden;
  @media screen and (max-width: 960px) {
  }
`
export const LoginBox = styled.div`
  width: 350px;
  background: #fff;
  position: relative;
  padding: 35px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  transition: 0.3s all ease-in-out;
  .leaveBtn {
    position: absolute;
    font-size: 40px;
    top: 5px;
    right: 5px;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    width: 350px;
    padding: 35px 45px;
  }
  @media screen and (max-width: 480px) {
    width: 350px;
    padding: 35px 25px;
  }
`
export const LoginTitle = styled.div`
  font-size: 48px;
  font-weight: 900;
  padding: 20px 0;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`
export const LoginText = styled.div`
  font-size: 15px;
  color: red;
  padding: 8px 0;
  line-height: 1.5;
  display: ${({ failState }) => (failState ? 'block' : 'none')};
  @media screen and (max-width: 960px) {
  }
`
export const AccInput = styled.input`
  margin: 12px 0;
  width: 80%;
  height: 40px;
  font-weight: bold;
  font-size: 17px;
  padding: 0 10px;
  box-sizing: border-box;
  @media screen and (max-width: 960px) {
  }
`
export const PwdInput = styled.input`
  margin: 12px 0;
  width: 80%;
  height: 40px;
  font-weight: bold;
  font-size: 17px;
  padding: 0 10px;
  box-sizing: border-box;
  @media screen and (max-width: 960px) {
  }
`
export const SubmitBtn = styled.div`
  margin: 12px 0;
  font-size: 15px;
  font-weight: 800;
  width: 80%;
  padding: 16px 0;
  color: #fff;
  background: #2a53c1;
  text-align: center;
  display: block;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  &:hover {
    transition: 0.2s all ease-in-out;
    background: #152c69;
  }
  @media screen and (max-width: 960px) {
  }
`

export const BoxUnderText = styled.div`
  padding: 10px 0;
  display: flex;
  text-align: center;
  @media screen and (max-width: 960px) {
  }
`
export const GoogleLoginBtn = styled.div`
  margin: 12px 0;
  font-size: 15px;
  font-weight: 300;
  width: 80%;
  padding: 16px 0;
  color: #000;
  background: #fff;
  text-align: center;
  display: block;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  border: 1px solid #888888;
  position: relative;
  &:hover {
    transition: 0.2s all ease-in-out;
    background-color: #e8e8e8;
  }
  @media screen and (max-width: 960px) {
  }
`
export const GoogleLogo = styled.img`
  position: absolute;
  left: 10px;
  top: 2px;
  width: 40px;
  @media screen and (max-width: 960px) {
  }
`
export const UnderLink = styled.div`
  margin-left: 5px;
  cursor: pointer;
  font-weight: bold;
  @media screen and (max-width: 960px) {
  }
`
export const LoadingBox = styled.div`
  z-index: 901;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
  }
`
