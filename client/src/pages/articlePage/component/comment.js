import React, { useState } from 'react'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import userSvg from '../../../assets/user-profile.svg'
import {
  ButtonWrapper,
  CancelButton,
  CommentContainer,
  CommentEditor,
  CommentTitle,
  CommentWrapper,
  SubmitButton,
  CommentList,
  CommentItem,
  CommentUser,
  CommentUserPhoto,
  CommentUserInfo,
  CommentContent
} from '../style'

dayjs.extend(relativeTime)

export const Comment = ({ onAddComment, handleBoxOpen, comment, user }) => {
  const [text, setText] = useState('')
  const [isEditMode, setTsEditMode] = useState(false)
  const [disable, setDisable] = useState(false)

  const handleFocus = () => {
    if (!user) {
      handleBoxOpen()
      return
    }
    setTsEditMode(true)
  }

  const handleSubmit = async () => {
    if (text.trim().length === 0 || disable) {
      return
    }
    setDisable(true)
    await onAddComment(text)
    setText('')
    setDisable(false)
  }

  const handleCancel = () => {
    if (disable) {
      return
    }
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
          onFocus={handleFocus}
          onChange={(e) => setText(e.target.value)}
        />
        {isEditMode && (
          <ButtonWrapper>
            <CancelButton disable={disable} onClick={handleCancel}>
              Cancel
            </CancelButton>
            <SubmitButton
              enabled={text.trim().length && !disable}
              onClick={handleSubmit}
            >
              Publish
            </SubmitButton>
          </ButtonWrapper>
        )}
        <CommentList>
          {comment
            ?.slice()
            .reverse()
            .map((item, index) => {
              return (
                <CommentItem key={index}>
                  <CommentUser>
                    <CommentUserPhoto
                      src={item.userPhoto !== 'null' ? item.userPhoto : userSvg}
                      alt=''
                    />
                    <CommentUserInfo>
                      <div className='name'>{item.fromUserName}</div>
                      <div className='time'>
                        {dayjs().from(dayjs(item.addtime))}
                      </div>
                    </CommentUserInfo>
                  </CommentUser>
                  <CommentContent
                    style={{ whiteSpace: 'pre-line', lineHeight: 1.5 }}
                  >
                    {item.content}
                  </CommentContent>
                </CommentItem>
              )
            })}
        </CommentList>
      </CommentContainer>
    </CommentWrapper>
  )
}
