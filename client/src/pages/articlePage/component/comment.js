import React, { useRef, useState } from 'react'

import {
  CommentWrapper,
  CommentContainer,
  CommentTitle,
  CommentEditor,
  CancelButton,
  SubmitButton,
  ButtonWrapper
} from '../style'

export const Comment = () => {
  const [text, setText] = useState('')
  const [isEditMode, setTsEditMode] = useState(false)

  const handleCancel = () => {
    setTsEditMode(false)
  }

  return (
    <CommentWrapper>
      <CommentContainer>
        <CommentTitle>Comment</CommentTitle>
        <hr />
        <CommentEditor
          value={text}
          isEditMode={isEditMode}
          placeholder='Write a comment...'
          onFocus={() => setTsEditMode(true)}
          onChange={(e) => setText(e.target.value)}
        />
        {isEditMode && (
          <ButtonWrapper>
            <CancelButton onClick={handleCancel}>Cancel</CancelButton>
            <SubmitButton enabled={text.trim().length}>Publish</SubmitButton>
          </ButtonWrapper>
        )}
      </CommentContainer>
    </CommentWrapper>
  )
}
