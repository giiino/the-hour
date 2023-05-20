import styled from 'styled-components'

export const MainSectionWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 20px;
  padding: 20px 70px;
  overflow: hidden;
  @media screen and (max-width: 960px) {
    padding: 20px 0px;
  }
`
export const SectionTitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  color: #0e1c40;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                        supported by Chrome, Edge, Opera and Firefox */
  @media screen and (max-width: 1100px) {
    flex-direction: column;
    justify-content: center;
  }
`
export const MainTitle = styled.h1`
  font-size: 160px;
  font-weight: 900;
  padding-right: 20px;
  cursor: pointer;
  @media screen and (max-width: 1100px) {
    display: flex;
    font-size: 90px;
    padding-right: 0px;
    justify-content: center;
  }
  @media screen and (max-width: 960px) {
    font-size: 70px;
  }
  @media screen and (max-width: 380px) {
    font-size: 50px;
  }
`
export const SecondTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media screen and (max-width: 1100px) {
    flex-direction: row;
    justify-content: center;
  }
`
export const SecondTitle = styled.div`
  box-sizing: borde-box;
  font-size: 22px;
  padding: 5px 0;
  font-weight: 900;
  border-left: 4px solid #0e1c40;
  padding-left: 30px;
  @media screen and (max-width: 1100px) {
    letter-spacing: 3px;
    padding: 0 5px;
    border: none;
  }
  @media screen and (max-width: 380px) {
    font-size: 18px;
  }
`
export const VideoSection = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  margin-top: 50px;
  display: ${({ VideoSectionbol }) => (VideoSectionbol ? 'block' : 'none')};

  @media screen and (max-width: 960px) {
    height: 326px;
  }
`
export const MainVideo = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`
export const SectionTagWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-start;
  bottom: -25px;
  align-items: center;
  background: #2a53c1;
  height: 53px;
  width: 80%;
  color: #fff;
  right: 0;
  left: 0;
  margin: 0 auto;
  box-sizing: border-box;
  padding-left: 60px;
  overflow: hidden;
  @media screen and (max-width: 960px) {
    height: ${({ TagWrapperbol }) => (TagWrapperbol ? '60px' : '118px')};
    bottom: 0;
    width: 100%;
    padding-left: 30px;
    padding-right: 30px;
    flex-direction: column;
    align-items: flex-start;
  }
`
export const TagTitle = styled.div`
  font-weight: 900;
  margin-right: 20px;
  padding: 20px 0;
`
export const TagText = styled.div`
  line-height: 25px;
  display: ${({ TagTextbol }) => (TagTextbol ? 'block' : 'none')};
`
