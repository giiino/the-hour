import styled from 'styled-components'

export const ContactWrapper = styled.div`
  width: 55%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 90px auto;
  padding: 10px 0;
  @media screen and (max-width: 960px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin: 0 0;
  }
`
export const ContactTitle = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 960px) {
    width: 90%;
    margin-bottom: 15px;
    text-align: center;
  }
`
export const Title = styled.h3`
  font-size: 30px;
  font-weight: 800;
  color: #2a53c1;
  line-height: 1.3;
`
export const ContactForm = styled.form`
  width: 55%;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  @media screen and (max-width: 960px) {
    width: 90%;
    margin-bottom: 30px;
  }
`
export const ContactInput = styled.input`
  width: 100%;
  margin-bottom: 10px;
  padding: 3px 3px 3px 12px;
  box-sizing: border-box;
  &::placeholder {
    font-size: 15px;
    color: #000;
  }
`
export const ContactTextArea = styled.textarea`
  width: 100%;
  height: 150px;
  margin-bottom: 10px;
  padding: 5px 3px 3px 12px;
  resize: none;
  box-sizing: border-box;
  &::placeholder {
    font-size: 15px;
    color: #000;
  }
`
export const ContactSubmit = styled.div`
  width: 100%;
  background-color: #2a53c1;
  box-sizing: border-box;
  color: #fff;
  font-weight: 800;
  padding: 15px 0;
  text-align: center;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  &:hover {
    transition: 0.2s all ease-in-out;
    background: #152c69;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`
