import React, { useLayoutEffect } from 'react'

import { motion } from 'framer-motion'

import { animateOne, transition } from '../../common/animation'
import WebMainSection from '../../common/webMainSection'
import { AboutMainSectionObj } from '../../common/webMainSection/Data'
import Developer from '../../statics/developer.jpg'
import { toolIcons } from './data'
import {
  AboutWrapper,
  AboutContainer,
  AboutDescritionWrapper,
  AboutDescritionTitle,
  AboutDescrition,
  ToolIcon,
  DeveloperWrapper,
  DeveloperTitleWrapper,
  DeveloperTitle,
  DeveloperDataWrapper,
  DeveloperDetailWrapper,
  DeveloperPhoto,
  DeveloperName,
  DeveloperDetail
} from './style'

const About = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <>
      <WebMainSection {...AboutMainSectionObj} />
      <motion.div
        initial='out'
        animate='in'
        exit='out'
        variants={animateOne}
        transition={transition}
      >
        <AboutWrapper>
          <AboutContainer>
            <AboutDescritionWrapper>
              <AboutDescritionTitle>開發工具</AboutDescritionTitle>
              <AboutDescrition>
                {/* <ul>
                  <li className="main">網站使用React開發，包含以下技術點:</li>
                  <li>Redux與immutable達到狀態管理，並以redux-thunk為中間件</li>
                  <li>react-router-dom達到SPA</li>
                  <li>以styled-components避免組件間CSS互相干擾</li>
                  <li>以framer-motion製作動畫效果</li>
                  <li>
                    以News API為新聞來源，搭配Express，再以NGINX為網頁伺服器
                  </li>
                  <li>使用firebase作為驗證登入的手段</li>
                </ul> */}
                <ToolIcon width={'100px'} src={toolIcons.react} />
                <ToolIcon width={'140px'} src={toolIcons.styled} />
                <ToolIcon width={'90px'} src={toolIcons.framerMotion} />
                <ToolIcon src={toolIcons.redux} />
                <ToolIcon
                  width={'200px'}
                  minHeight={'130px'}
                  src={toolIcons.immutable}
                />
                <ToolIcon width={'240px'} src={toolIcons.router} />
                <ToolIcon width={'180px'} src={toolIcons.fireBase} />
                <ToolIcon width={'180px'} src={toolIcons.news} />
              </AboutDescrition>
            </AboutDescritionWrapper>
            <DeveloperWrapper>
              <DeveloperTitleWrapper>
                <DeveloperTitle>開發人</DeveloperTitle>
              </DeveloperTitleWrapper>
              <DeveloperDataWrapper>
                <DeveloperPhoto src={Developer} />
                <DeveloperDetailWrapper>
                  <DeveloperName>Yi - Jiun Huang</DeveloperName>
                  <DeveloperDetail>ginobee33665@gmail.com</DeveloperDetail>
                  <DeveloperDetail>0911-845686</DeveloperDetail>
                </DeveloperDetailWrapper>
              </DeveloperDataWrapper>
            </DeveloperWrapper>
          </AboutContainer>
        </AboutWrapper>
      </motion.div>
    </>
  )
}

export default About
