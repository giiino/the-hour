import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import BeatLoader from 'react-spinners/BeatLoader'

import { motion } from 'framer-motion'

import { animateOne, transition } from '../../common/animation'
import WebMainSection from '../../common/webMainSection'
import { HomeMainSectionObj } from '../../common/webMainSection/Data'
import ArticleSection from './component/articleSection'
import { HomeMainWrapper } from './component/style'
import { actionCreators } from './store'

class Home extends PureComponent {
  render() {
    const { loading, covid19list, taiwanList, chinaList, usaList, animeList } =
      this.props
    return (
      <>
        <WebMainSection {...HomeMainSectionObj} />
        <HomeMainWrapper>
          {loading ? (
            <BeatLoader
              className='loadingSpinner'
              color={'#2A53C1'}
              loading={loading}
              size={30}
            />
          ) : (
            <motion.div
              initial='out'
              animate='in'
              exit='out'
              variants={animateOne}
              transition={transition}
            >
              <ArticleSection
                sectionTitle='Covid-19 News'
                bgc={false}
                dataContent={covid19list}
              />
              <ArticleSection
                sectionTitle='Taiwan News'
                bgc={true}
                dataContent={taiwanList}
              />
              <ArticleSection
                sectionTitle='China News'
                bgc={false}
                dataContent={chinaList}
              />
              <ArticleSection
                sectionTitle='The USA News'
                bgc={true}
                dataContent={usaList}
              />
              <ArticleSection
                sectionTitle='Anime News'
                bgc={false}
                dataContent={animeList}
              />
            </motion.div>
          )}
        </HomeMainWrapper>
      </>
    )
  }
  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.handleAjaxData(this.props.covid19list)
  }
}

const mapStateToProps = (state) => ({
  loading: state.getIn(['home', 'loading']),
  covid19list: state.getIn(['home', 'covid19List']),
  taiwanList: state.getIn(['home', 'taiwanList']),
  chinaList: state.getIn(['home', 'chinaList']),
  usaList: state.getIn(['home', 'usaList']),
  animeList: state.getIn(['home', 'animeList'])
})

const mapDispatchToProps = (dispatch) => ({
  handleAjaxData(list) {
    list.size === 0 && dispatch(actionCreators.getNewsData())
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)
