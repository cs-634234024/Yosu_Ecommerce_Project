const express = require('express')
const router = express.Router()
const user_controller = require('../controllers/user.controller')


router.post('/' , user_controller.userCreate)
router.get('/' , user_controller.userAll)
router.delete('/:id' , user_controller.userDeleteOne)


module.exports = router



