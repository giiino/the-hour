import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import BeatLoader from 'react-spinners/BeatLoader'

import { motion } from 'framer-motion'

import { animateOne, transition } from '../../common/animation'
import { actionCreators as loginActionCreators } from '../../common/login/store'
import WebMainSection from '../../common/webMainSection'
import { NewsMainSectionObj } from '../../common/webMainSection/Data'
import { actionCreators as homeActionCreators } from '../../pages/home/store'
import { actionCreators as newsActionCreators } from '../allnews/store'
import Article from './component/article'
import SelectBar from './component/selectBar'
import {
  NewsPageWrapper,
  NewsPageContainer,
  NewsPageNav,
  NavItem,
  NavItemLink
} from './style'

class ArticlePage extends PureComponent {
  render() {
    const {
      title,
      img,
      time,
      content,
      describe,
      topicNum,
      user,
      beLikeArticle,
      handleChangeTopic,
      handleBoxOpen,
      handleThrowAwayArticle,
      handleCollectArticle
    } = this.props
    return (
      <>
        <WebMainSection {...NewsMainSectionObj} />
        <motion.div
          initial='out'
          animate='in'
          exit='out'
          variants={animateOne}
          transition={transition}
        >
          <NewsPageWrapper>
            {title === '' ? (
              <BeatLoader
                className='loadingSpinner'
                color={'#2A53C1'}
                size={30}
              />
            ) : (
              <NewsPageContainer>
                <NewsPageNav>
                  <NavItem>
                    <NavItemLink
                      to='/news'
                      onClick={() => {
                        handleChangeTopic(0)
                      }}
                    >
                      All News
                    </NavItemLink>
                  </NavItem>
                  <NavItem>
                    <NavItemLink
                      to='/news'
                      onClick={() => {
                        handleChangeTopic(1)
                      }}
                    >
                      Covid-19 News
                    </NavItemLink>
                  </NavItem>
                  <NavItem>
                    <NavItemLink
                      to='/news'
                      onClick={() => {
                        handleChangeTopic(2)
                      }}
                    >
                      Taiwan News
                    </NavItemLink>
                  </NavItem>
                  <NavItem>
                    <NavItemLink
                      to='/news'
                      onClick={() => {
                        handleChangeTopic(3)
                      }}
                    >
                      China News
                    </NavItemLink>
                  </NavItem>
                  <NavItem>
                    <NavItemLink
                      to='/news'
                      onClick={() => {
                        handleChangeTopic(4)
                      }}
                    >
                      The USA News
                    </NavItemLink>
                  </NavItem>
                  <NavItem>
                    <NavItemLink
                      to='/news'
                      onClick={() => {
                        handleChangeTopic(5)
                      }}
                    >
                      Anime News
                    </NavItemLink>
                  </NavItem>
                </NewsPageNav>
                <SelectBar
                  handleChangeTopic={handleChangeTopic}
                  topicNum={topicNum}
                />
                <Article
                  title={title}
                  time={time}
                  img={img}
                  content={content}
                  describe={describe}
                  user={user}
                  beLikeArticle={beLikeArticle}
                  handleBoxOpen={handleBoxOpen}
                  handleThrowAwayArticle={handleThrowAwayArticle}
                  handleCollectArticle={handleCollectArticle}
                />
              </NewsPageContainer>
            )}
          </NewsPageWrapper>
        </motion.div>
      </>
    )
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
}

const mapStateToProps = (state) => ({
  title: state.getIn(['article', 'title']),
  time: state.getIn(['article', 'time']),
  img: state.getIn(['article', 'img']),
  content: state.getIn(['article', 'content']),
  describe: state.getIn(['article', 'describe']),
  topicNum: state.getIn(['allnews', 'topicNum']),
  user: state.getIn(['login', 'user']),
  beLikeArticle: state.getIn(['home', 'beLikeArticle'])
})

const mapDispatchToProps = (dispatch) => ({
  handleChangeTopic(number) {
    dispatch(newsActionCreators.changeTopicAction(number))
  },
  handleBoxOpen() {
    dispatch(loginActionCreators.loginBoxOpenAction())
  },
  handleThrowAwayArticle(id) {
    dispatch(homeActionCreators.throwAwayAction(id))
  },
  handleCollectArticle(title, img, description) {
    const item = {
      title,
      img,
      description
    }
    dispatch(homeActionCreators.articleLikeAction(item))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage)
