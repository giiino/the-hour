const express = require('express')
const router = express.Router()
const { getNewsApiData, getNews } = require('../controller/news')
const { baseNewsCategory } = require('../data')

router.get('/', async (req, res, next) => {
  const { category } = req.query
  let callApi
  if (!category) {
    res.status(400).json({ error: 'Invalid query parameters' })
    return
  }
  if (baseNewsCategory.includes(category)) {
    callApi = getNews
  } else {
    callApi = getNewsApiData
  }
  callApi(category).then((data) => {
    res.json(data)
  })
})

module.exports = router
