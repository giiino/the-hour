import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import BeatLoader from 'react-spinners/BeatLoader'

import { motion } from 'framer-motion'
import { v4 } from 'uuid'

import { animateOne, transition } from '../../common/animation'
import { actionCreators as loginActionCreators } from '../../common/login/store'
import WebMainSection from '../../common/webMainSection'
import { NewsMainSectionObj } from '../../common/webMainSection/Data'
import { actionCreators as homeActionCreators } from '../../pages/home/store'
import { actionCreators as articleActionCreators } from '../articlePage/store'
import NewsSection from './component/newsSection'
import SelectBar from './component/selectBar'
import { actionCreators } from './store'
import {
  NewsPageWrapper,
  NewsPageContainer,
  NewsPageNav,
  NavItem,
  NavItemLink
} from './style'

class AllNews extends PureComponent {
  render() {
    const {
      covid19list,
      taiwanList,
      chinaList,
      usaList,
      animeList,
      combineList,
      topicNum,
      user,
      beLikeArticle,
      handleChangeTopic,
      handleLoadingArtcle,
      handleBoxOpen,
      handleThrowAwayArticle,
      handleCollectArticle
    } = this.props
    let showlist
    switch (topicNum) {
      case 0:
        showlist = combineList
        break
      case 1:
        showlist = covid19list
        break
      case 2:
        showlist = taiwanList
        break
      case 3:
        showlist = chinaList
        break
      case 4:
        showlist = usaList
        break
      case 5:
        showlist = animeList
        break
      default:
        showlist = combineList
    }
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
            {JSON.stringify(combineList) === '[]' ? (
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
                      className={topicNum === 0 && 'active'}
                      onClick={() => {
                        handleChangeTopic(0)
                      }}
                    >
                      All News
                    </NavItemLink>
                  </NavItem>
                  <NavItem>
                    <NavItemLink
                      className={topicNum === 1 && 'active'}
                      onClick={() => {
                        handleChangeTopic(1)
                      }}
                    >
                      Covid-19 News
                    </NavItemLink>
                  </NavItem>
                  <NavItem>
                    <NavItemLink
                      className={topicNum === 2 && 'active'}
                      onClick={() => {
                        handleChangeTopic(2)
                      }}
                    >
                      Taiwan News
                    </NavItemLink>
                  </NavItem>
                  <NavItem>
                    <NavItemLink
                      className={topicNum === 3 && 'active'}
                      onClick={() => {
                        handleChangeTopic(3)
                      }}
                    >
                      China News
                    </NavItemLink>
                  </NavItem>
                  <NavItem>
                    <NavItemLink
                      className={topicNum === 4 && 'active'}
                      onClick={() => {
                        handleChangeTopic(4)
                      }}
                    >
                      The USA News
                    </NavItemLink>
                  </NavItem>
                  <NavItem>
                    <NavItemLink
                      className={topicNum === 5 && 'active'}
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
                {showlist.map((item) => {
                  return (
                    <NewsSection
                      key={v4()}
                      title={item.get('title')}
                      time={item.get('publishedAt')}
                      imgUrl={item.get('urlToImage')}
                      description={item.get('description')}
                      content={item.get('content')}
                      user={user}
                      beLikeArticle={beLikeArticle}
                      handleLoadingArtcle={handleLoadingArtcle}
                      handleBoxOpen={handleBoxOpen}
                      handleThrowAwayArticle={handleThrowAwayArticle}
                      handleCollectArticle={handleCollectArticle}
                    />
                  )
                })}
              </NewsPageContainer>
            )}
          </NewsPageWrapper>
        </motion.div>
      </>
    )
  }
  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.handleAjaxData(this.props.covid19list)
  }
}

const mapStateToProps = (state) => ({
  covid19list: state.getIn(['home', 'covid19List']),
  taiwanList: state.getIn(['home', 'taiwanList']),
  chinaList: state.getIn(['home', 'chinaList']),
  usaList: state.getIn(['home', 'usaList']),
  animeList: state.getIn(['home', 'animeList']),
  combineList: state.getIn(['home', 'combineList']),
  beLikeArticle: state.getIn(['home', 'beLikeArticle']),
  topicNum: state.getIn(['allnews', 'topicNum']),
  user: state.getIn(['login', 'user'])
})

const mapDispatchToProps = (dispatch) => ({
  handleChangeTopic(number) {
    dispatch(actionCreators.changeTopicAction(number))
  },
  handleLoadingArtcle(title, time, img, content, describe) {
    dispatch(
      articleActionCreators.loadingArticleAction(
        title,
        time,
        img,
        content,
        describe
      )
    )
  },
  handleAjaxData(list) {
    list.size === 0 && dispatch(homeActionCreators.getNewsData())
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
export default connect(mapStateToProps, mapDispatchToProps)(AllNews)
