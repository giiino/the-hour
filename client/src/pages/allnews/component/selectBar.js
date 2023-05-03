import React from 'react'

import { SelectBarWrapper, WebTitle, MainSelectBar, BarOption } from '../style'

const SelectBar = ({ topicNum, handleChangeTopic }) => {
  return (
    <>
      <SelectBarWrapper>
        <WebTitle>All News</WebTitle>
        <MainSelectBar
          defaultValue={topicNum}
          onChange={(e) => {
            handleChangeTopic(parseInt(e.target.value))
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
