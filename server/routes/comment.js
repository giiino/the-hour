const express = require('express')
const router = express.Router()
const { newComment } = require('../controller/comment')

router.post('/:newsId', (req, res, next) => {
  const { content, fromUserName, userPhoto } = req.body
  const { newsId } = req.params
  if (!content || !fromUserName || !newsId) {
    res.status(400).send('bad request')
    return
  }
  newComment({ content, fromUserName, newsId, userPhoto })
    .then((data) => {
      res.json(data)
    })
    .catch((error) => {
      res.status(400).json({ error: 'Insertion error', message: error })
    })
})

module.exports = router
