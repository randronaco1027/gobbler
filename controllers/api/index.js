const router = require('express').Router()

const postRoutes = require('./post-routes')
// const postRoutes = require('./post-routes')

router.use('/post', postRoutes)
// router.use('/post', postRoutes)

module.exports = router