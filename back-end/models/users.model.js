const Connection = require("../config/db.config")
const bcrypt = require('bcrypt')
const saltRound = 10
const table = "users"

const getAlldata = (result) => {
    const sql = `SELECT * FROM ${table} `
    Connection.query(sql , (err , userall) => {
        if(err){
            console.log(err);
            result(err , null)
            return
        }else{
            result(null , userall)
        }
    })
}

const regisUser = (data, result) => {
        const username = data.username
        const salt = bcrypt.genSaltSync(saltRound)
        data.password = bcrypt.hashSync(data.password, salt)
        const sql = `SELECT COUNT(username) AS count FROM ${table} WHERE username = ?`
        Connection.query(sql, [username], (err, user) => {
            if (err) {
                result(err, null)
            } else {
                const count = user[0].count
                if (count > 0) {
                    result(null, { status: "Error", message: "username have already" })
                } else {
                    const sql = `INSERT INTO ${table} SET ?`
                    Connection.query(sql, [data], (err, results) => {
                        if (err) {
                            result(err, null)
                        } else {
                            result(null, { status: "ok", message: "inserted data successfully" })
                        }
                    })
                }
            }
        })

    }

    const deleteUserOne = (id , result) => {
        const sql = `DELETE FROM ${table} WHERE user_id = ? `
        Connection.query(sql , [id] , (err , del) => {
            if(err){
                console.log(err);
                result(err , null)
                return
            }else{
                result(null , {status : 'ok' , message : "Deleted Data successfully"})
            }
        })
    }



module.exports = {regisUser , getAlldata , deleteUserOne}