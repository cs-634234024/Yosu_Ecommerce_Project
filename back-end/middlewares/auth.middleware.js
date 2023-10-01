const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config()

const authenticationLogin = (req , res , next) => {
    try{
        const token = req.headers.authorization.split(" ")[1]
        if(!token) {
            res.send({status : "Error" , message : "Not found token"})
        }
        const decode = jwt.verify(token ,process.env.SECRET_KEY)
        res.json({status: "ok" , message : "authentication successfully" , decode : decode})
        
    }catch(err){
        res.send(err)
        console.log(err);
    }
    
}

module.exports = {authenticationLogin}