const serverless = require('serverless-http')
const express = require('express')
// const app = require('../../app')

// module.exports.handler = serverless(app)

const api = express()

const router = express.Router()
router.get('/hello', (req, res) => res.send('Hello World!'))

api.use('/api/', router)

export const handler = serverless(api)
