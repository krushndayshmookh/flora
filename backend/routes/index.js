const router = require('express').Router()

// router.use('/auth', require('./auth'))

router.use('/user', require('./user'))

// router.use('/farmer', require('./farmer'))

// router.use('/chart', require('./chart'))

// router.use('/upload', require('./upload'))

// router.use('/test', require('./test'))

router.use('/', (req, res) => {
  res.send('Please read documentation for the API. (root)')
})

module.exports = router
