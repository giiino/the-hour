import React, { PureComponent } from 'react'
import { BsEye } from 'react-icons/bs'
import { FcLike } from 'react-icons/fc'
import { VscComment } from 'react-icons/vsc'
import { VscHeart } from 'react-icons/vsc'
import { connect } from 'react-redux'

import { actionCreators as loginActionCreators } from '../../../common/login/store'
import { actionCreators as articleActionCreators } from '../../articlePage/store'
import { actionCreators } from '../store'
import {
  ArticaleSectionWrapper,
  ArticaleSectionTitle,
  TitleWrapper,
  ArticaleIncludeWrapper,
  ArticaleWrapper,
  ArticaleImgWrapper,
  ArticaleImg,
  ArticaleTitle,
  IconWrapper,
  TimesWatch,
  TimesComment,
  TimesLike
} from './style'

class ArticleSection extends PureComponent {
  render() {
    const {
      dataContent,
      sectionTitle,
      bgc,
      user,
      beLikeArticle,
      handleBoxOpen,
      handleLoadingArtcle,
      handleThrowAwayArticle,
      handleCollectArticle
    } = this.props

    return (
      <>
        <ArticaleSectionWrapper bgc={bgc}>
          <ArticaleIncludeWrapper>
            <ArticaleSectionTitle>{sectionTitle}</ArticaleSectionTitle>
            {dataContent.slice(0, 3).map((item) => {
              return (
                <ArticaleWrapper key={item.get('id')}>
                  <ArticaleImgWrapper
                    to={`/article/${item.get('id')}`}
                    onClick={() => {
                      handleLoadingArtcle(
                        item.get('title'),
                        item.get('publishedAt'),
                        item.get('urlToImage'),
                        item.get('content'),
                        item.get('description')
                      )
                    }}
                  >
                    <ArticaleImg src={item.get('urlToImage')} />
                  </ArticaleImgWrapper>
                  <TitleWrapper>
                    <ArticaleTitle
                      to={`/article/${item.get('id')}`}
                      onClick={() => {
                        handleLoadingArtcle(
                          item.get('title'),
                          item.get('publishedAt'),
                          item.get('urlToImage'),
                          item.get('content'),
                          item.get('description')
                        )
                      }}
                    >
                      {item.get('title')}
                    </ArticaleTitle>
                  </TitleWrapper>
                  <IconWrapper>
                    <TimesWatch>
                      <BsEye />
                      <span>0</span>
                    </TimesWatch>
                    <TimesComment>
                      <VscComment />
                      <span>0</span>
                    </TimesComment>
                    <TimesLike>
                      {/* <span>8</span>  */}
                      {beLikeArticle.some((i) => {
                        return i.title === item.get('title')
                      }) ? (
                        <FcLike
                          onClick={() =>
                            handleThrowAwayArticle(item.get('title'))
                          }
                        />
                      ) : (
                        <VscHeart
                          onClick={
                            user
                              ? () => {
                                  handleCollectArticle(
                                    item.get('title'),
                                    item.get('urlToImage'),
                                    item.get('description')
                                  )
                                }
                              : handleBoxOpen
                          }
                        />
                      )}
                    </TimesLike>
                  </IconWrapper>
                </ArticaleWrapper>
              )
            })}
          </ArticaleIncludeWrapper>
        </ArticaleSectionWrapper>
      </>
    )
  }
}
const mapStateToProps = (state) => ({
  user: state.getIn(['login', 'user']),
  beLikeArticle: state.getIn(['home', 'beLikeArticle'])
})

const mapDispatchToProps = (dispatch) => ({
  handleBoxOpen() {
    dispatch(loginActionCreators.loginBoxOpenAction())
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
  handleThrowAwayArticle(id) {
    dispatch(actionCreators.throwAwayAction(id))
  },
  handleCollectArticle(title, img, description) {
    const item = {
      title,
      img,
      description
    }
    dispatch(actionCreators.articleLikeAction(item))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(ArticleSection)
