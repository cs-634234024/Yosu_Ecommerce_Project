const express = require('express')
const router = express.Router()
const login_controller = require('../controllers/login.controller')

router.post('/' , login_controller.userLogin)


module.exports = router



