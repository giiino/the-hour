import React, { useState } from 'react'
import { BiX } from 'react-icons/bi'
import { useHistory } from 'react-router'

import { HeaderSearch, SearchIcon, SearchInput } from '../style'

const SearchBox = ({ handleChangeTerm }) => {
  const [text, setText] = useState('')
  let history = useHistory()
  const handleSubmit = (e) => {
    e.preventDefault()
    handleChangeTerm(text)
    history.push('/search')
  }
  return (
    <>
      <HeaderSearch onSubmit={handleSubmit}>
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
      </HeaderSearch>
    </>
  )
}

export default SearchBox
