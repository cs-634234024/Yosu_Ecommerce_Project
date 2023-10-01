
const user_model = require('../models/users.model')

const userCreate = (req , res) => {
    const data = req.body
    user_model.regisUser(data ,(err , results) => {
        if(err) {
            res.send(err)
        }else {
            res.send(results)
        }
    })
}



module.exports = {userCreate }