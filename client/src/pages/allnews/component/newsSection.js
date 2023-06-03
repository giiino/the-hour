import React from 'react'
import { FcLike } from 'react-icons/fc'
import { VscHeart } from 'react-icons/vsc'
import { useLocation } from 'react-router-dom'

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
  newsData,
  user,
  beLikeArticle,
  handleLoadingArtcle,
  handleBoxOpen,
  handleThrowAwayArticle,
  handleCollectArticle
}) => {
  const location = useLocation()
  const { pathname } = location
  const splitLocation = pathname.split('/')[1]

  const { title, time, urlToImage, content, description, id, views, comment } =
    Object.fromEntries(Array.from(newsData))
  return (
    <NewsPostWrapper>
      <NewsPostImgWrapper
        to={`/article/${id}`}
        onClick={() => {
          handleLoadingArtcle(title, time, urlToImage, content, description)
        }}
      >
        <NewsPostImg src={urlToImage} />
      </NewsPostImgWrapper>
      <NewsPostDetailWrapper>
        <DetailWrapper
          to={`/article/${id}`}
          onClick={() => {
            handleLoadingArtcle(title, time, urlToImage, content, description)
          }}
        >
          <PostTitle>{title}</PostTitle>
          <PostDetail dangerouslySetInnerHTML={{ __html: description }} />
        </DetailWrapper>
        <PostDataWrapper>
          <DataView>
            <span>{splitLocation === 'search' ? 0 : views}</span>views
          </DataView>
          <DataComment>
            <span>
              {splitLocation === 'search' ? 0 : JSON.parse(comment).length}
            </span>
            comments
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
                        handleCollectArticle(title, urlToImage, description)
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
