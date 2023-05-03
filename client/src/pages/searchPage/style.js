import { FiSearch } from 'react-icons/fi'

import styled from 'styled-components'

export const SearchPageWrapper = styled.div`
  width: 65%;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 960px) {
    width: 95%;
    margin-top: 20px;
  }
`
export const SearchPageTitle = styled.h3`
  font-size: 30px;
  font-weight: 800;
  color: #2a53c1;
  text-align: center;
  padding: 30px 0;
`
export const EmptyInformation = styled.div`
  text-align: center;
  line-height: 1.5;
  font-weight: bold;
`

export const SearchToolWrapper = styled.form`
  width: 100%;
  position: relative;
  margin: 20px 0;
  .clear {
    font-size: 18px;
    position: absolute;
    top: 15px;
    right: 10px;
    color: #707070;
    cursor: pointer;
  }

  @media screen and (max-width: 960px) {
    width: 90%;
  }
`
export const SearchIcon = styled(FiSearch)`
  font-size: 26px;
  position: absolute;
  top: 12px;
  left: 10px;
  color: #707070;
`
export const SearchInput = styled.input.attrs({
  placeholder: 'Search...'
})`
  width: 100%;
  line-height: 45px;
  box-sizing: border-box;
  padding-left: 50px;
  padding-right: 30px;
  font-size: 20px;
  outline: none;
  color: #000;
  &::placeholder {
    font-size: 20px;
    color: #707070;
  }
  @media screen and (max-width: 960px) {
    margin-bottom: 30px;
  }
`
