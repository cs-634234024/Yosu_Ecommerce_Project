const Connection = require("../config/db.config")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config()
const table = "users"

const userLogin = (data , result) => {
    const username = data.username 
    const password = data.password
    const sql = `SELECT username , password FROM ${table} WHERE username = ?  `
    Connection.query(sql , [username] , (err , results)=>{
        if(err){
            result(err , null)
        }if(results.length == 0){
            result(null ,{status : "Error" , message : "invalid user!"})
        }else{
           const dectyptPassword =  bcrypt.compareSync(password , results[0].password)
           if(dectyptPassword === false){
            result(null ,{status : "Error" , message : "invalid password!"})
        }else{  
            
            const token =  jwt.sign({username : username} , process.env.SECRET_KEY , {expiresIn:'1d'})
            console.log(token);
            result(null ,{status : "ok" , message : "Login successfully" , token : token})
        }
        }
    })
}

module.exports = {userLogin}