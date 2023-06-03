const express = require('express')
const router = express.Router()
const { getNewsApiData } = require('../controller/news')
const { formatSourceList } = require('../service/format')

router.get('/', async (req, res, next) => {
  const { q: category } = req.query
  if (!category) {
    res.status(400).json({ error: 'Invalid query parameters' })
    return
  }
  getNewsApiData(category).then((data) => {
    res.json(formatSourceList(data.articles, category))
  })
})

module.exports = router
