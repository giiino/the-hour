const express = require('express')
const router = express.Router()
const { getNewsApiData, getNews, getNewsById } = require('../controller/news')
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

router.get('/:id', (req, res, next) => {
  const { id } = req.params
  getNewsById(id)
    .then((data) => {
      const result = data?.[0]
      if (result) {
        res.json({ ...result, comment: JSON.parse(result.comment) })
      } else {
        res.status(404).json({ error: 'News not found' })
      }
    })
    .catch(() => {
      res.status(500).json({ error: 'Internal server error' })
    })
})

module.exports = router
