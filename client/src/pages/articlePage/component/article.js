import React, { useEffect, useState } from 'react'
import { FcLike } from 'react-icons/fc'
import { VscHeart } from 'react-icons/vsc'
import { useParams } from 'react-router-dom'
import BeatLoader from 'react-spinners/BeatLoader'

import { fetchNewsByIdApi } from '../../../common/api/news'
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
import { Comment } from './comment'

const Article = ({
  user,
  beLikeArticle,
  handleBoxOpen,
  handleThrowAwayArticle,
  handleCollectArticle
}) => {
  const [article, setArticle] = useState(undefined)
  const [isLoading, setIsLoading] = useState(false)
  const { id: newsId } = useParams()
  const {
    title,
    publishedAt,
    urlToImage,
    content,
    describe,
    views,
    comment,
    like
  } = article || {}

  useEffect(() => {
    setIsLoading(true)
    fetchNewsByIdApi(newsId)
      .then(setArticle)
      .finally(() => {
        setIsLoading(false)
      })
  }, [newsId])

  return (
    <NewsPostWrapper>
      {isLoading ? (
        <BeatLoader
          className='loadingSpinner'
          color={'#2A53C1'}
          size={30}
          css={{ display: 'flex', justifyContent: 'center' }}
        />
      ) : (
        <>
          <PostTitle>{title}</PostTitle>
          <PostDate>{publishedAt}</PostDate>
          <PostSecondTitle dangerouslySetInnerHTML={{ __html: describe }} />
          <NewsPostImgWrapper>
            <NewsPostImg src={urlToImage} />
          </NewsPostImgWrapper>
          <NewsPostDetailWrapper>
            <>
              <DetailWrapper>
                <PostDetail dangerouslySetInnerHTML={{ __html: content }} />
              </DetailWrapper>
              <PostDataWrapper>
                <DataView>
                  <span>{views || 0}</span>views
                </DataView>
                <DataComment>
                  <span>{comment?.length || 0}</span>comments
                </DataComment>
                <DataLike>
                  <span>{like || 0}</span>
                  {beLikeArticle.some((i) => {
                    return i.title === title
                  }) ? (
                    <FcLike
                      className='like'
                      style={{ marginBottom: '4px' }}
                      onClick={() => handleThrowAwayArticle(title)}
                    />
                  ) : (
                    <VscHeart
                      className='like'
                      style={{ marginBottom: '2px' }}
                      onClick={
                        user
                          ? () => {
                              handleCollectArticle(title, urlToImage, describe)
                            }
                          : handleBoxOpen
                      }
                    />
                  )}
                </DataLike>
              </PostDataWrapper>
              <Comment />
            </>
          </NewsPostDetailWrapper>
        </>
      )}
    </NewsPostWrapper>
  )
}

export default Article
