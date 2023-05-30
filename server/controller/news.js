const { exec, escape } = require('../db/mysql')
const axios = require('axios')

const clearDB = () => {
  const sql = 'delete from news where switch = 0;'
  return exec(sql)
}

const initDBNewsData = (term) => {
  const escapedTerm = {}
  Object.entries(term).forEach(([key, value]) => {
    escapedTerm[key] = escape(value)
  })
  const {
    source,
    author,
    title,
    content,
    description,
    url,
    urlToImage,
    publishedAt,
    category,
    addtime,
    like,
    comment
  } = escapedTerm
  const sql =
    'INSERT INTO news(category,`addtime`,author, title, content,`description`,url,urlToImage,publishedAt,`like`,`source`,`comment`) VALUES' +
    `(${category},${addtime},${author},${title},${content},${description},${url},${urlToImage},${publishedAt},${like},${source},${comment})`
  return exec(sql)
}

const getNewsApiData = (category) => {
  const now = new Date()
  const year = now.getFullYear()
  const month = (now.getMonth() + 1).toString().padStart(2, '0')

  const fromDate = `${year}-${month}-${(now.getDate() - 3)
    .toString()
    .padStart(2, '0')}`
  const toDate = `${year}-${month}-${now.getDate().toString().padStart(2, '0')}`

  const encodedCategory = encodeURI(category)
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${encodedCategory}&from=${fromDate}&to=${toDate}&apiKey=${process.env.NEWS_API_KEY}`
      )
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}

const getNews = (category) => {
  const sql = `select * from news where category = '${category}';
  `
  return exec(sql)
}

const getNewsById = (id) => {
  const sql = `select * from news where id = ${id};`
  const updateViewSql = `update news set views = views + 1 where id = ${id};`
  return new Promise(async (resolve, reject) => {
    try {
      const result = await exec(sql)
      await exec(updateViewSql)
      resolve(result)
    } catch (err) {
      reject(err)
    }
  })
}

module.exports = {
  clearDB,
  getNewsApiData,
  initDBNewsData,
  getNews,
  getNewsById
}
