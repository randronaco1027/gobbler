const router = require('express').Router()

const postRoutes = require('./post-routes')
const userRoutes = require('./user-routes')

const userRoutes = require('./user-routes')


router.use('/post', postRoutes)
router.use('/user', userRoutes)


router.use('/user', userRoutes)

module.exports = router