const express = require('express')
const router = express.Router()
const initDB = require('../service/initDB')

router.get('/', async (req, res, next) => {
  res.json('test')
})

module.exports = router
