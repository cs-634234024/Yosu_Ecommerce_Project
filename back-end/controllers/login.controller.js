
const login_model = require('../models/login.model')

const userLogin = (req , res) => {
    const data = req.body
    login_model.userLogin(data , (err , results) => {
        if(err){
            res.send(err)
        }else {
            res.send(results)
        }
    })
}

module.exports = {userLogin}