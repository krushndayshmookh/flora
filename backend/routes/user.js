/* eslint-disable new-cap */
/* eslint-disable capitalized-comments */
const router = require('express').Router()

const validateToken = require('../middlewares/validateToken')

const userController = require('../controllers/user')

// Controllers -----

// GET

router.get('/search', userController.search_by_page_get)

router.get('/details/:id', userController.details_get)

// POST

router.post('/create', userController.create_post)

router.post('/update/:id', validateToken, userController.update_post)

router.post('/delete/:id', validateToken, userController.delete_post)

router.get('/', (req, res) => {
  res.send('Please read documentation for the API. (user)')
})

// Export -----
module.exports = router
