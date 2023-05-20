const { formatNewsData } = require('./format')
const {
  getNewsApiData,
  clearDB,
  initDBNewsData
} = require('../controller/news')

module.exports = async () => {
  try {
    const taiwanPromises = []
    const covid19Promises = []
    const chinaPromises = []
    const usaPromises = []
    const animePromises = []

    const taiwanNews = await getNewsApiData('taiwan')
    const covid19News = await getNewsApiData('covid-19')
    const chinaNews = await getNewsApiData('china')
    const usaNews = await getNewsApiData('usa')
    const animeNews = await getNewsApiData('anime')

    await clearDB()

    taiwanNews.articles.forEach((article) => {
      taiwanPromises.push(initDBNewsData(formatNewsData(article, 'taiwan')))
    })
    covid19News.articles.forEach((article) => {
      covid19Promises.push(initDBNewsData(formatNewsData(article, 'covid-19')))
    })
    chinaNews.articles.forEach((article) => {
      chinaPromises.push(initDBNewsData(formatNewsData(article, 'china')))
    })
    usaNews.articles.forEach((article) => {
      usaPromises.push(initDBNewsData(formatNewsData(article, 'usa')))
    })
    animeNews.articles.forEach((article) => {
      animePromises.push(initDBNewsData(formatNewsData(article, 'anime')))
    })
    await Promise.all(taiwanPromises)
    await Promise.all(covid19Promises)
    await Promise.all(chinaPromises)
    await Promise.all(usaPromises)
    await Promise.all(animePromises)
    console.log('update news finish')
  } catch (err) {
    console.error('update error', err)
  }
}
