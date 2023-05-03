const axios = require('axios')
const path = require('path')
const cors = require('cors')
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(cors())

app.get('/getNews', (req, res) => {
  let Today = new Date()
  const fromDate =
    Today.getFullYear() +
    '-' +
    (Today.getMonth() + 1).toString().padStart(2, '0') +
    '-' +
    (Today.getDate() - 3).toString().padStart(2, '0')
  const toDate =
    Today.getFullYear() +
    '-' +
    (Today.getMonth() + 1).toString().padStart(2, '0') +
    '-' +
    Today.getDate().toString().padStart(2, '0')
  axios
    .get(
      `https://newsapi.org/v2/everything?q=${encodeURI(
        req.query.q
      )}&from=${fromDate}&to=${toDate}&apiKey=${process.env.NEWS_API_KEY}`
    )
    .then((response) => {
      console.log(response.data)
      if (response.status === 200) {
        res.send(response.data)
      }
    })
})

const root = require('path').join(__dirname, '../', 'client', 'build')
app.use(express.static(root))

app.use('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'client', 'build', 'index.html'))
})

app.listen(5000, () => {
  console.log('server started on PORT: ' + 5000)
})
