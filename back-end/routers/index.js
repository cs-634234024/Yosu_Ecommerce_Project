const express = require('express')
const router = express.Router()

router.use('/api/user',require('./user.router'))
router.use('/api/login',require('./login.router'))
router.use('/api/auth',require('./auth.router'))

module.exports = router
