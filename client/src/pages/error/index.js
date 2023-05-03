import React from 'react'

import {
  ErrorWrapper,
  ErrorInnerWrapper,
  ErrorEmoji,
  ErrorTitle,
  ErrorTitleItem,
  ErrorDetail
} from './style'

const ErrorPage = () => {
  return (
    <>
      <ErrorWrapper>
        <ErrorInnerWrapper>
          <ErrorEmoji>☹</ErrorEmoji>
          <ErrorTitle>
            <ErrorTitleItem className='errorNum'>404</ErrorTitleItem>
            <ErrorTitleItem className='error'>Page not found</ErrorTitleItem>
          </ErrorTitle>
        </ErrorInnerWrapper>
        <ErrorDetail>
          I'm sorry that the page you searched for does not exist, please
          confirm the correct URL
        </ErrorDetail>
      </ErrorWrapper>
    </>
  )
}

export default ErrorPage
