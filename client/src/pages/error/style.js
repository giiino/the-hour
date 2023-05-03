import styled from 'styled-components'

export const ErrorWrapper = styled.div`
  width: 100%;
  height: 550px;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  color: #787878;
  gap: 20px;
`
export const ErrorInnerWrapper = styled.div`
  display: flex;
  gap: 40px;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: center;
  }
`
export const ErrorEmoji = styled.div`
  font-size: 200px;
  height: 40%;
`
export const ErrorTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`
export const ErrorTitleItem = styled.div`
  &.error {
    height: 40%;
    font-size: 40px;
    color: #909090;
  }
  &.errorNum {
    height: 50%;
    font-weight: 800;
    font-size: 80px;
  }
  @media screen and (max-width: 960px) {
    &.error {
      margin-top: 20px;
    }
  }
`
export const ErrorDetail = styled.div`
  padding: 20px 10px;
  text-align: center;
  @media screen and (max-width: 960px) {
    line-height: 1.3;
  }
`
