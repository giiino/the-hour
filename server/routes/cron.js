const express = require('express')
const router = express.Router()
const initDB = require('../service/initDB')

router.get('/', async (req, res, next) => {
  try {
    initDB()
    res.status(200).json({ success: true, message: 'update!' })
  } catch (err) {
    res.status(500).json({ success: false, message: err })
  }
})

module.exports = router
