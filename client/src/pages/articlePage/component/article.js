import React, { useEffect, useState } from 'react'
import { FcLike } from 'react-icons/fc'
import { VscHeart } from 'react-icons/vsc'
import { useSelector } from 'react-redux'
import { useParams, useLocation, useHistory } from 'react-router-dom'
import BeatLoader from 'react-spinners/BeatLoader'

import dayjs from 'dayjs'

import { addComment } from '../../../common/api/comment'
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
import { ConfirmModal } from './ConfirmModal'
import { Comment } from './comment'

const Article = ({
  user,
  beLikeArticle,
  handleBoxOpen,
  handleThrowAwayArticle,
  handleCollectArticle
}) => {
  const [openRedirectModal, setOpenRedirectModal] = useState(false)
  const history = useHistory()
  const location = useLocation()
  const { pathname } = location
  const splitLocation = pathname.split('/')[1]
  const [article, setArticle] = useState(undefined)
  const [isLoading, setIsLoading] = useState(false)
  const { id: newsId } = useParams()

  const searchlist = useSelector((state) => state.toJS().search).searchlist
  const targetArticle = searchlist.find((item) => item.id === newsId)
  const isSearchArticle = isNaN(Number(newsId))

  const {
    title,
    publishedAt,
    urlToImage,
    content,
    describe,
    views,
    comment,
    url,
    like
  } = article || targetArticle || {}

  const onAddComment = async (content) => {
    const fromUserName = user.displayName
    const userPhoto = user.photoURL
    await addComment({ content, fromUserName, newsId, userPhoto })
    const article = await fetchNewsByIdApi(newsId)
    setArticle(article)
    return Promise.resolve()
  }

  useEffect(() => {
    if (isSearchArticle) return

    setIsLoading(true)
    fetchNewsByIdApi(newsId)
      .then(setArticle)
      .catch(() => history.replace('/404'))
      .finally(() => {
        setIsLoading(false)
      })
  }, [newsId, history, isSearchArticle])

  useEffect(() => {
    if (isSearchArticle && !targetArticle) {
      history.replace(`/404`)
    }
  }, [history, isSearchArticle, targetArticle])

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
          <PostDate>
            {dayjs(publishedAt).format('YYYY-MM-DD HH:mm:ss')}
          </PostDate>
          <PostSecondTitle dangerouslySetInnerHTML={{ __html: describe }} />
          <NewsPostImgWrapper>
            <NewsPostImg src={urlToImage} />
          </NewsPostImgWrapper>

          <NewsPostDetailWrapper>
            <>
              <DetailWrapper onClick={() => setOpenRedirectModal(true)}>
                <PostDetail dangerouslySetInnerHTML={{ __html: content }} />
              </DetailWrapper>
              {!isSearchArticle && (
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
                                handleCollectArticle(
                                  title,
                                  urlToImage,
                                  describe
                                )
                              }
                            : handleBoxOpen
                        }
                      />
                    )}
                  </DataLike>
                </PostDataWrapper>
              )}
              {!isSearchArticle && (
                <Comment
                  onAddComment={onAddComment}
                  handleBoxOpen={handleBoxOpen}
                  comment={comment}
                  user={user}
                />
              )}
            </>
          </NewsPostDetailWrapper>
        </>
      )}
      <ConfirmModal
        open={openRedirectModal}
        setOpen={setOpenRedirectModal}
        url={url}
      />
    </NewsPostWrapper>
  )
}

export default Article
