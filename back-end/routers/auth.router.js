const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth.middleware')
router.get('/' , auth.authenticationLogin)

module.exports = router



