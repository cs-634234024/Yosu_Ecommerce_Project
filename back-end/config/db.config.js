const mysql = require('mysql')
const dotenv = require('dotenv')

const Connection = mysql.createConnection({
    host : process.env.DB_HOST , 
    user : process.env.DB_USER ,
    password : process.env.DB_PASSWORD , 
    database : process.env.DB_NAME
})

Connection.connect((err) => {
    if(err){
        console.log(err);
    }else{
        console.log("Connected to database Successfully !!");
    }
    
})

module.exports = Connection 