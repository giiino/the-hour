import styled from 'styled-components'

export const AdvertiseWrapper = styled.div`
  width: 55%;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 90px auto;
  padding: 10px 0;
  @media screen and (max-width: 960px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin: 0 0;
  }
`
export const AdvertiseTitle = styled.div`
  width: 38%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 960px) {
    width: 90%;
    margin-bottom: 15px;
    text-align: center;
  }
`
export const Title = styled.h3`
  font-size: 30px;
  font-weight: 800;
  color: #2a53c1;
  line-height: 1.3;
`
export const AdvertiseDescription = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  font-size: 15px;
  line-height: 2;
  letter-spacing: 0.02em;
  p {
    margin-bottom: 30px;
  }
  @media screen and (max-width: 960px) {
    width: 90%;
  }
`
