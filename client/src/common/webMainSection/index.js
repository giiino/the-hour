import React from 'react'

import {
  MainSectionWrapper,
  SectionTitleWrapper,
  MainTitle,
  SecondTitleWrapper,
  SecondTitle,
  VideoSection,
  MainVideo,
  SectionTagWrapper,
  TagTitle,
  TagText
} from './style'

const WebMainSection = ({
  VideoSectionbol,
  video,
  TagWrapperbol,
  TagTitleText,
  TagTextbol
}) => {
  return (
    <MainSectionWrapper>
      <SectionTitleWrapper>
        <MainTitle>TheHours</MainTitle>
        <SecondTitleWrapper>
          <SecondTitle>News&</SecondTitle>
          <SecondTitle>Opinion</SecondTitle>
          <SecondTitle>Blog</SecondTitle>
        </SecondTitleWrapper>
      </SectionTitleWrapper>
      <VideoSection VideoSectionbol={VideoSectionbol}>
        <div style={{ width: '100%', height: '100%' }}>
          <iframe
            title='video'
            src={video}
            width='100%'
            height='100%'
            allowFullScreen
          ></iframe>
        </div>
        {/* <MainVideo autoPlay={true} loop={true} muted={true} src={video}/> */}
        <SectionTagWrapper TagWrapperbol={TagWrapperbol}>
          <TagTitle>{TagTitleText}</TagTitle>
          <TagText TagTextbol={TagTextbol}>
            NASDAQ drops 20%, world markets react
          </TagText>
        </SectionTagWrapper>
      </VideoSection>
    </MainSectionWrapper>
  )
}

export default WebMainSection
