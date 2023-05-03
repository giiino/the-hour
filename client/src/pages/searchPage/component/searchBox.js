import React, { useState } from 'react'
import { BiX } from 'react-icons/bi'

import { SearchToolWrapper, SearchIcon, SearchInput } from '../style'

const SearchBox = ({ handleChangeTerm }) => {
  const [text, setText] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    handleChangeTerm(text)
  }
  return (
    <>
      <SearchToolWrapper onSubmit={handleSubmit}>
        <SearchIcon />
        <SearchInput
          value={text}
          onChange={(e) => {
            setText(e.target.value)
          }}
        />
        <BiX
          className='clear'
          onClick={() => {
            setText('')
          }}
        />
      </SearchToolWrapper>
    </>
  )
}

export default SearchBox
