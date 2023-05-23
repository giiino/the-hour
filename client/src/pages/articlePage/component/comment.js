import React, { useRef, useState } from 'react'

import {
  CommentWrapper,
  CommentContainer,
  CommentTitle,
  CommentEditor
} from '../style'

export const Comment = () => {
  return (
    <CommentWrapper>
      <CommentContainer>
        <CommentTitle>Comment</CommentTitle>
        <hr />
        {/* <CommentEditor isFocus={isEditMode} onClick={handleEdit}>
          <Editor />
        </CommentEditor> */}
      </CommentContainer>
    </CommentWrapper>
  )
}
