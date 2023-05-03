import React from 'react'
import { useHistory } from 'react-router'

import { SelectBarWrapper, WebTitle, MainSelectBar, BarOption } from '../style'

const SelectBar = ({ handleChangeTopic }) => {
  let history = useHistory()
  const handleRouter = () => {
    history.push('/news')
  }
  return (
    <>
      <SelectBarWrapper>
        <WebTitle>Article</WebTitle>
        <MainSelectBar
          onChange={(e) => {
            handleChangeTopic(parseInt(e.target.value))
            handleRouter()
          }}
        >
          <BarOption className='option-style' value='0'>
            All News
          </BarOption>
          <BarOption className='option-style' value='1'>
            Covid-19 News
          </BarOption>
          <BarOption className='option-style' value='2'>
            Taiwan News
          </BarOption>
          <BarOption className='option-style' value='3'>
            China News
          </BarOption>
          <BarOption className='option-style' value='4'>
            The USA News
          </BarOption>
          <BarOption className='option-style' value='5'>
            Anime News
          </BarOption>
        </MainSelectBar>
      </SelectBarWrapper>
    </>
  )
}

export default SelectBar
