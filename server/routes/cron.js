const express = require('express')
const router = express.Router()
const initDB = require('../service/initDB')

router.get('/', async (req, res, next) => {
  try {
    if (req.query.pwd !== process.env.CRON_JOB_PWD) {
      res.status(500).json({ success: false, message: err })
    }
    await initDB()
    res.status(200).json({ success: true, message: 'update!' })
  } catch (err) {
    res.status(500).json({ success: false, message: err })
  }
})

module.exports = router
