// const createError = require('http-errors')
const express = require('express')
// const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
// const multer = require('multer')
const path = require('path')

require('dotenv').config()

// const MONGODB_URI = process.env.MONGODB_URI
// const UPLOADS_DIR = path.join(__dirname, process.env.UPLOADS_DIR)
const PUBLIC_DIR = path.join(__dirname, process.env.PUBLIC_DIR)

const app = express()

// db setup
// mongoose.connect(MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// mongoose.Promise = global.Promise

// let db = mongoose.connection
// db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// other setup
app.use(cors())

app.use(logger('dev'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cookieParser())

// upload setup
// const storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//     cb(null, path.join(__dirname, UPLOADS_DIR))
//   },
//   filename: function(req, file, cb) {
//     cb(
//       null,
//       file.originalname.replace(/ /g, '_') +
//         '-' +
//         new Date().valueOf() +
//         path.extname(file.originalname)
//     )
//   }
// })
// const upload = multer({ storage })
// global.upload = upload

// router setup
app.use('/api', require('./routes'))

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(PUBLIC_DIR))

app.get('*', function(req, res) {
  res.sendFile(PUBLIC_DIR + '/index.html')
})
// view engine setup
// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'pug')

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404))
// })

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message
//   res.locals.error = req.app.get('env') === 'development' ? err : {}

//   // render the error page
//   res.status(err.status || 500)
//   res.render('error')
// })

// make required dirs
// const directories = [UPLOADS_DIR]
// require('./utils/mkdirSync')(directories)

module.exports = app
