const mysql = require('mysql2')

const pool = mysql.createPool({
    host: '127.0.0.1',
    database: 'node-complete',
    user: 'root',
    password: '9815'
})

module.exports = pool.promise()