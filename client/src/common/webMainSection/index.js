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
import { useRef } from 'react'

const WebMainSection = ({
  VideoSectionbol,
  video,
  TagWrapperbol,
  TagTitleText,
  TagTextbol
}) => {
  const iframeRef = useRef()
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
            ref={iframeRef}
            title='video'
            src={video}
            width='100%'
            height='100%'
            allowFullScreen
            onLoad={()=>{
              if(iframeRef.current) {
                const iframeDocument = iframeRef.current.contentDocument || iframeRef.current.contentWindow.document;
                const mediaContainer = iframeDocument.querySelector(".media-container");
                console.log(mediaContainer)
                if (mediaContainer) {
                  mediaContainer.style.maxWidth = "90vw";
                }
              }
            }}
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
