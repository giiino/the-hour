import { actionTypes } from './'

export const loadingArticleAction = (title, time, img, content, describe) => ({
  type: actionTypes.LOADING_ARTICLE_DATA,
  title,
  time,
  img,
  content,
  describe
})
