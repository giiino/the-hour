import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import BeatLoader from 'react-spinners/BeatLoader'

import { motion } from 'framer-motion'
import { v4 } from 'uuid'

import { animateOne, transition } from '../../common/animation'
import { actionCreators as loginActionCreators } from '../../common/login/store'
import WebMainSection from '../../common/webMainSection'
import { SearchMainSectionObj } from '../../common/webMainSection/Data'
import { actionCreators as homeActionCreators } from '../../pages/home/store'
import NewsSection from '../allnews/component/newsSection'
import { actionCreators as articleActionCreators } from '../articlePage/store'
import SearchBox from './component/searchBox'
import { actionCreators } from './store'
import { SearchPageWrapper, SearchPageTitle, EmptyInformation } from './style'

class SearchPage extends PureComponent {
  render() {
    const {
      loading,
      searchlist,
      searchTerm,
      user,
      beLikeArticle,
      handleLoadingArtcle,
      handleChangeTerm,
      handleBoxOpen,
      handleThrowAwayArticle,
      handleCollectArticle
    } = this.props
    return (
      <>
        <WebMainSection {...SearchMainSectionObj} />
        <motion.div
          initial='out'
          animate='in'
          exit='out'
          variants={animateOne}
          transition={transition}
        >
          <SearchPageWrapper>
            <SearchPageTitle>Search Results</SearchPageTitle>
            <SearchBox handleChangeTerm={handleChangeTerm} />
            {loading ? (
              <BeatLoader
                className='loadingSpinner'
                color={'#2A53C1'}
                loading={loading}
                size={30}
              />
            ) : JSON.stringify(searchlist) === '[]' ? (
              <EmptyInformation>
                I'm sorry that the result of " {searchTerm} " was not found
              </EmptyInformation>
            ) : (
              searchlist?.map((item) => {
                return (
                  <NewsSection
                    key={v4()}
                    newsData={item}
                    user={user}
                    handleLoadingArtcle={handleLoadingArtcle}
                    beLikeArticle={beLikeArticle}
                    handleBoxOpen={handleBoxOpen}
                    handleThrowAwayArticle={handleThrowAwayArticle}
                    handleCollectArticle={handleCollectArticle}
                  />
                )
              })
            )}
          </SearchPageWrapper>
        </motion.div>
      </>
    )
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
}
const mapStateToProps = (state) => ({
  loading: state.getIn(['search', 'loading']),
  searchlist: state.getIn(['search', 'searchlist']),
  searchTerm: state.getIn(['search', 'searchTerm']),
  beLikeArticle: state.getIn(['home', 'beLikeArticle']),
  user: state.getIn(['login', 'user'])
})

const mapDispatchToProps = (dispatch) => ({
  handleChangeTerm(term) {
    console.log(term)
    dispatch(actionCreators.changeTermAction(term))
    dispatch(actionCreators.getNewsData(term))
  },
  handleLoadingArtcle(title, img, content, describe) {
    dispatch(
      articleActionCreators.loadingArticleAction(title, img, content, describe)
    )
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
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
