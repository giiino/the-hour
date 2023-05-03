import React from 'react'
import { FcLike } from 'react-icons/fc'
import { VscHeart } from 'react-icons/vsc'

import {
  NewsPostWrapper,
  NewsPostImgWrapper,
  NewsPostImg,
  NewsPostDetailWrapper,
  DetailWrapper,
  PostTitle,
  PostDetail,
  PostDataWrapper,
  DataView,
  DataComment,
  DataLike
} from '../style'

const NewsSection = ({
  title,
  time,
  imgUrl,
  description,
  content,
  user,
  beLikeArticle,
  handleLoadingArtcle,
  handleBoxOpen,
  handleThrowAwayArticle,
  handleCollectArticle
}) => {
  return (
    <NewsPostWrapper>
      <NewsPostImgWrapper
        to={`/article/${description?.split('%')}`}
        onClick={() => {
          handleLoadingArtcle(title, time, imgUrl, content, description)
        }}
      >
        <NewsPostImg src={imgUrl} />
      </NewsPostImgWrapper>
      <NewsPostDetailWrapper>
        <DetailWrapper
          to={`/article/${description?.split('%')}`}
          onClick={() => {
            handleLoadingArtcle(title, time, imgUrl, content, description)
          }}
        >
          <PostTitle>{title}</PostTitle>
          <PostDetail dangerouslySetInnerHTML={{ __html: description }} />
        </DetailWrapper>
        <PostDataWrapper>
          <DataView>
            <span>0</span>views
          </DataView>
          <DataComment>
            <span>0</span>comments
          </DataComment>
          <DataLike onClick={user ? null : handleBoxOpen}>
            {/* <span>24</span> */}
            {beLikeArticle.some((i) => {
              return i.title === title
            }) ? (
              <FcLike onClick={() => handleThrowAwayArticle(title)} />
            ) : (
              <VscHeart
                onClick={
                  user
                    ? () => {
                        handleCollectArticle(title, imgUrl, description)
                      }
                    : handleBoxOpen
                }
              />
            )}
          </DataLike>
        </PostDataWrapper>
      </NewsPostDetailWrapper>
    </NewsPostWrapper>
  )
}

export default NewsSection
