import React, { useEffect } from 'react'

import { motion } from 'framer-motion'

import { animateOne, transition } from '../../common/animation'
import WebMainSection from '../../common/webMainSection'
import { ContactMainSectionObj } from '../../common/webMainSection/Data'
import {
  ContactWrapper,
  ContactTitle,
  Title,
  ContactForm,
  ContactInput,
  ContactTextArea,
  ContactSubmit
} from './style'

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <>
      <WebMainSection {...ContactMainSectionObj} />
      <motion.div
        initial='out'
        animate='in'
        exit='out'
        variants={animateOne}
        transition={transition}
      >
        <ContactWrapper>
          <ContactTitle>
            <Title>Looking for more information?</Title>
            <Title>Get in touch with us today.</Title>
          </ContactTitle>
          <ContactForm>
            <ContactInput placeholder='Name' />
            <ContactInput placeholder='Email' />
            <ContactInput placeholder='Phone' />
            <ContactTextArea placeholder='Message' />
            <ContactSubmit>Submit</ContactSubmit>
          </ContactForm>
        </ContactWrapper>
      </motion.div>
    </>
  )
}

export default Contact
