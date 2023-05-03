import React, { useEffect } from 'react'

import { motion } from 'framer-motion'

import { animateOne, transition } from '../../common/animation'
import WebMainSection from '../../common/webMainSection'
import { AdvertiseMainSectionObj } from '../../common/webMainSection/Data'
import {
  AdvertiseWrapper,
  AdvertiseTitle,
  Title,
  AdvertiseDescription
} from './style'

const Advertise = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <>
      <WebMainSection {...AdvertiseMainSectionObj} />
      <motion.div
        initial='out'
        animate='in'
        exit='out'
        variants={animateOne}
        transition={transition}
      >
        <AdvertiseWrapper>
          <AdvertiseTitle>
            <Title>Would you like to advertise with us?</Title>
            <Title>Simply get in touch to find out more.</Title>
          </AdvertiseTitle>
          <AdvertiseDescription>
            <p>
              The news of the website is automatically updated once a day, but
              there are still some functions that have not been completed. The
              functions such as the comment area, the number of views, etc. will
              be completed at another day.
            </p>
            <p>
              If you have any suggestions, such as adding more functions, or
              adding your favorite news content, please feel free to contact
            </p>
          </AdvertiseDescription>
        </AdvertiseWrapper>
      </motion.div>
    </>
  )
}

export default Advertise
