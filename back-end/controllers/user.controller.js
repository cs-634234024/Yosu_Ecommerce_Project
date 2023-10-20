
const user_model = require('../models/users.model')


const userAll = (req, res) => {
    user_model.getAlldata((err , results) => {
        if(err){
            res.send(err)
        }else{
            res.send(results)
        }
    })
}

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
const userDeleteOne = (req , res) => {
    const id = req.params.id
    user_model.deleteUserOne(id ,(err , results) => {
        if(err) {
            res.send(err)
        }else {
            res.send(results)
        }
    })
}



module.exports = {userCreate , userAll , userDeleteOne }