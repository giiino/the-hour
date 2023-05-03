import styled from 'styled-components'

export const AboutWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  overflow: hidden;
  padding: 80px 0;
`
export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`
export const AboutDescritionWrapper = styled.div`
  display: flex;
  /* justify-content: center; */
  margin-bottom: 100px;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: center;
  }
`
export const AboutDescritionTitle = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;
  width: 20%;
  font-size: 30px;
  font-weight: 900;
  color: #2a53c1;
  white-space: nowrap;
  @media screen and (max-width: 960px) {
    justify-content: center;
    margin-bottom: 30px;
  }
`
export const AboutDescrition = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  font-size: 15px;
  color: #172a47;
  line-height: 2.5;
  margin-top: 50px;
  flex-wrap: wrap;
  gap: 20px;
  /* li {
    list-style-type: disc;
    white-space: nowrap;
  }
  .main {
    list-style-type: circle;
    font-weight: bold;
  } */
  @media screen and (max-width: 960px) {
    width: 90%;
    margin-top: 0;
    li {
      white-space: normal;
    }
  }
`

export const ToolIcon = styled.img`
  object-fit: contain;
  width: ${({ width }) => (width ? width : '120px')};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : '93px')};
`

export const DeveloperWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
export const DeveloperTitleWrapper = styled.div`
  padding-top: 10px;
  width: 100%;
  font-size: 30px;
  font-weight: 900;
  color: #2a53c1;
  position: relative;
  display: block;
  margin-bottom: 40px;
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
`

export const DeveloperTitle = styled.div`
  float: left;
  margin-left: 50px;
  white-space: nowrap;
  @media screen and (max-width: 960px) {
    margin-left: 0;
  }
`
export const DeveloperDataWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 281px;
`
export const DeveloperPhoto = styled.img`
  width: 100%;
`
export const DeveloperDetailWrapper = styled.div`
  padding: 30px 0;
`
export const DeveloperName = styled.div`
  font-size: 17px;
  font-weight: 900;
  color: #2a53c1;
  margin-bottom: 15px;
`
export const DeveloperDetail = styled.div`
  margin-bottom: 15px;
  font-size: 15px;
  color: #172a47;
`
