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
  PostDate,
  PostSecondTitle,
  PostDetail,
  PostDataWrapper,
  DataView,
  DataComment,
  DataLike
} from '../style'

const Article = ({
  title,
  time,
  img,
  content,
  describe,
  user,
  beLikeArticle,
  handleBoxOpen,
  handleThrowAwayArticle,
  handleCollectArticle
}) => {
  return (
    <NewsPostWrapper>
      <PostTitle>{title}</PostTitle>
      <PostDate>{time}</PostDate>
      <PostSecondTitle dangerouslySetInnerHTML={{ __html: describe }} />
      <NewsPostImgWrapper>
        <NewsPostImg src={img} />
      </NewsPostImgWrapper>
      <NewsPostDetailWrapper>
        <DetailWrapper>
          <PostDetail dangerouslySetInnerHTML={{ __html: content }} />
        </DetailWrapper>
        <PostDataWrapper>
          <DataView>
            <span>0</span>views
          </DataView>
          <DataComment>
            <span>0</span>comments
          </DataComment>
          <DataLike>
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
                        handleCollectArticle(title, img, describe)
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

export default Article
