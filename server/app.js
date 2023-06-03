const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const dotenv = require('dotenv')

dotenv.config()

const newsRouter = require('./routes/news')
const commentRouter = require('./routes/comment')
const searchRouter = require('./routes/search')
const cronsRouter = require('./routes/cron')

const app = express()

app.use(
  cors({
    origin: [
      'https://the-hour-giiino.vercel.app',
      'https://the-hour.vercel.app',
      'http://localhost:3000'
    ]
  })
)
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

const root = require('path').join(__dirname, '../', 'client', 'build')
app.use(express.static(root))

app.use('/api/news', newsRouter)
app.use('/api/crons', cronsRouter)
app.use('/api/comment', commentRouter)
app.use('/api/search', searchRouter)

app.use('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'client', 'build', 'index.html'))
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
