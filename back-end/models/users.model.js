const Connection = require("../config/db.config")
const bcrypt = require('bcrypt')
const saltRound = 10
const table = "users"

const regisUser = (data, result) => {
    const sqlAddUserId = `SELECT COUNT(user_id) AS countID FROM ${table}`
    Connection.query(sqlAddUserId, (err, count) => {
        const baseUserId = "Us-"
        let count_id
        if (err) {
            console.log(err);
        }
        else {
            if (!!count[0].countID === false) {
                count_id = 1
            } else {
                count_id = count[0].countID
            }
        }
        const intId = parseInt(count_id+1)
        data.user_id = baseUserId + intId
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

    })
}


module.exports = { regisUser }