const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv').config()


app.use(express.json())
app.use(cors())

app.use('/',require('./routers/index'))

PORT = process.env.PORT || 3000

app.listen(PORT , (err) => {
    if(err){
        console.log(err);
    }
    console.log(`Server is running in port ${PORT}`);
})